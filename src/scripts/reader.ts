// The reader on the home page: paste a job, or pick a sample, and the result
// card below fills in with what Kitehand would take. Live readings come
// from /api/diagnose; samples are read ahead of time.
import { formatHires, tally, TEXT_LIMITS, type Diagnosis } from "../lib/diagnosis";
import type { ReaderConfig } from "../lib/reader-config";
import { drawCard } from "./card";
import { track } from "./track";

type Reading = { d: Diagnosis; slug: string; text: string };

class ReadError extends Error {}

const config = JSON.parse(document.getElementById("reader-config")!.textContent!) as ReaderConfig;
const form = document.querySelector<HTMLFormElement>("[data-reader]")!;
const text = form.querySelector<HTMLTextAreaElement>("[data-text]")!;
const count = form.querySelector<HTMLElement>("[data-count]")!;
const working = form.querySelector<HTMLElement>("[data-working]")!;
const status = form.querySelector<HTMLElement>("[data-status]")!;
const result = document.querySelector<HTMLElement>("[data-result]")!;
const toast = document.querySelector<HTMLElement>("[data-toast]")!;
const r = <T extends HTMLElement = HTMLElement>(name: string) => result.querySelector<T>(`[data-r="${name}"]`)!;

const first = config.samples[0];
let current: Reading = { d: first.diagnosis, slug: first.slug, text: "" };

// Modes only change the hint; the reader takes any of them.
const placeholders = JSON.parse(text.dataset.placeholders!) as string[];
form.querySelectorAll<HTMLButtonElement>("[data-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    form.querySelectorAll("[data-mode]").forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
    text.placeholder = placeholders[Number(button.dataset.mode)];
    text.focus();
  });
});

const showCount = () => (count.textContent = `${text.value.length.toLocaleString()} / ${TEXT_LIMITS.max.toLocaleString()}`);
text.addEventListener("input", () => {
  showCount();
  status.classList.remove("is-shown");
});
showCount();

form.querySelectorAll<HTMLButtonElement>("[data-sample]").forEach((button) => {
  button.addEventListener("click", () => {
    const sample = config.samples.find((s) => s.slug === button.dataset.sample)!;
    text.value = sample.posting;
    showCount();
    read(async () => sample.diagnosis, sample.slug, true);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = text.value.trim();
  if (value.length < TEXT_LIMITS.min) return fail("too_short");
  if (value.length > TEXT_LIMITS.max) return fail("too_long");
  read(() => fetchReading(value), "", false);
});

async function fetchReading(value: string): Promise<Diagnosis> {
  const response = await fetch("/api/diagnose", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ text: value, lang: config.lang }),
  });
  const body = (await response.json().catch(() => ({}))) as { diagnosis?: Diagnosis; error?: string };
  if (!response.ok || !body.diagnosis) throw new ReadError(body.error ?? "generic");
  return body.diagnosis;
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function read(get: () => Promise<Diagnosis>, slug: string, sample: boolean) {
  status.classList.remove("is-shown");
  form.classList.add("is-busy");
  let step = 0;
  working.textContent = config.words.working[0];
  const cycle = setInterval(() => {
    step = Math.min(step + 1, config.words.working.length - 1);
    working.textContent = config.words.working[step];
  }, 1100);
  const started = performance.now();
  track("job_read_started", { sample, slug });
  try {
    const d = await get();
    // A sample is read ahead of time; hold it for a beat so it reads as work.
    if (sample) await wait(Math.max(0, 1300 - (performance.now() - started)));
    current = { d, slug, text: text.value.trim() };
    render(d, sample ? config.words.example : config.words.yours, slug);
    const t = tally(d);
    track("job_read", { sample, slug, hires: Number(formatHires(t.hires)), duties: d.duties.length, seconds: Math.round((performance.now() - started) / 100) / 10 });
    window.dispatchEvent(new CustomEvent("kitehand:read", { detail: current }));
  } catch (error) {
    fail(error instanceof ReadError ? error.message : "generic");
  } finally {
    clearInterval(cycle);
    form.classList.remove("is-busy");
  }
}

function fail(code: string) {
  status.textContent = config.words.errors[code] ?? config.words.errors.generic;
  status.classList.add("is-shown");
  track("job_read_failed", { code });
}

function list(el: HTMLElement, items: string[]) {
  el.replaceChildren(...items.map((item) => Object.assign(document.createElement("li"), { textContent: item })));
}

function render(d: Diagnosis, label: string, slug: string) {
  const t = tally(d);
  const share = (s: string) => d.duties.filter((x) => x.share === s).reduce((sum, x) => sum + x.hours, 0);
  const most = Math.max(...d.duties.map((x) => x.hours));
  result.dataset.slug = slug;
  r("label").textContent = label;
  r("title").textContent = d.title;
  r("summary").textContent = d.summary;
  r("hires").textContent = formatHires(t.hires);
  r("taken").textContent = config.words.taken.replace("{taken}", String(t.taken)).replace("{total}", String(t.total));
  for (const s of ["kitehand", "approve", "human"]) r(`m-${s}`).style.width = `${(share(s) / t.total) * 100}%`;

  const row = r<HTMLTemplateElement>("row");
  r("rows").replaceChildren(
    ...d.duties.map((duty) => {
      const tr = (row.content.firstElementChild as HTMLTableRowElement).cloneNode(true) as HTMLTableRowElement;
      tr.className = duty.share;
      tr.querySelector(".duty-name")!.textContent = duty.name;
      tr.querySelector(".duty-how")!.textContent = duty.how;
      const apps = tr.querySelector<HTMLElement>(".duty-apps")!;
      if (duty.apps.length) apps.replaceChildren(...duty.apps.map((a) => Object.assign(document.createElement("span"), { textContent: a })));
      else apps.remove();
      tr.querySelector(".pill")!.classList.add(duty.share);
      tr.querySelector(".share-dot")!.classList.add(duty.share);
      tr.querySelector(".who-label")!.textContent = config.words.shares[duty.share];
      tr.querySelector(".duty-hours")!.textContent = `${duty.hours}${config.words.hours}`;
      const bar = tr.querySelector<HTMLElement>(".duty-bar")!;
      bar.classList.add(duty.share);
      bar.style.width = `${Math.round((duty.hours / most) * 72)}px`;
      return tr;
    }),
  );
  r("schedule").textContent = d.schedule;
  list(r("asks"), d.asks_before);
  list(r("week"), d.first_week);

  result.classList.remove("is-new");
  void result.offsetWidth;
  result.classList.add("is-new");
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function say(message: string) {
  toast.textContent = message;
  toast.classList.add("is-shown");
  setTimeout(() => toast.classList.remove("is-shown"), 2200);
}

const shareUrl = () => new URL(current.slug ? `${config.jobs}${current.slug}/` : config.home, location.origin).href;

result.querySelector("[data-act='share']")?.addEventListener("click", async () => {
  const t = tally(current.d);
  const message = config.words.shareText.replace("{title}", current.d.title).replace("{hires}", formatHires(t.hires));
  const url = shareUrl();
  track("result_shared", { slug: current.slug, native: "share" in navigator });
  if (navigator.share) {
    await navigator.share({ title: "Kitehand", text: message, url }).catch(() => undefined);
    return;
  }
  await navigator.clipboard.writeText(`${message} ${url}`);
  say(config.words.copied);
});

result.querySelector("[data-act='save']")?.addEventListener("click", async () => {
  const blob = await drawCard(current.d, config);
  const link = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: `kitehand-${current.slug || "job"}.png` });
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  track("result_saved", { slug: current.slug });
});

result.querySelector("[data-act='handover']")?.addEventListener("click", () => track("handover_opened", { slug: current.slug }));
