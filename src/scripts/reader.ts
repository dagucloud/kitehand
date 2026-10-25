// The examples on the home page. Choosing one fills the result card below
// with what Kitehand would take, read ahead of time; nothing is read on the
// site. The card's way to hand the work over leads to the application,
// which takes the example along.
import { track } from "../lib/analytics";
import { tally, type Diagnosis } from "../lib/diagnosis";
import type { ReaderConfig } from "../lib/reader-config";
import { drawCard } from "./card";

type Reading = { d: Diagnosis; slug: string };

const config = JSON.parse(document.getElementById("reader-config")!.textContent!) as ReaderConfig;
const chips = [...document.querySelectorAll<HTMLButtonElement>("[data-sample]")];
const result = document.querySelector<HTMLElement>("[data-result]")!;
const toast = document.querySelector<HTMLElement>("[data-toast]")!;
const r = <T extends HTMLElement = HTMLElement>(name: string) => result.querySelector<T>(`[data-r="${name}"]`)!;

const first = config.samples[0];
let current: Reading = { d: first.diagnosis, slug: first.slug };

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const sample = config.samples.find((s) => s.slug === chip.dataset.sample)!;
    chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
    current = { d: sample.diagnosis, slug: sample.slug };
    render(sample.diagnosis, sample.slug);
    const t = tally(sample.diagnosis);
    track("work_read", { slug: sample.slug, hours: t.taken, people: t.people, tasks: sample.diagnosis.duties.length });
    window.dispatchEvent(new CustomEvent("kitehand:read", { detail: current }));
  });
});

function list(el: HTMLElement, items: string[]) {
  el.replaceChildren(...items.map((item) => Object.assign(document.createElement("li"), { textContent: item })));
}

function render(d: Diagnosis, slug: string) {
  const t = tally(d);
  const share = (s: string) => d.duties.filter((x) => x.share === s).reduce((sum, x) => sum + x.hours, 0);
  const most = Math.max(...d.duties.map((x) => x.hours));
  result.dataset.slug = slug;
  r("title").textContent = d.title;
  r("summary").textContent = d.summary;
  r("people").textContent = String(t.people);
  r("unit").textContent = config.words.units[t.people > 1 ? 1 : 0];
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
}

function say(message: string) {
  toast.textContent = message;
  toast.classList.add("is-shown");
  setTimeout(() => toast.classList.remove("is-shown"), 2200);
}

const shareUrl = () => new URL(`${config.jobs}${current.slug}/`, location.origin).href;

result.querySelector("[data-act='share']")?.addEventListener("click", async () => {
  const message = config.words.shareText.replace("{title}", current.d.title).replace("{people}", String(tally(current.d).people));
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
  const link = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: `kitehand-${current.slug}.png` });
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  track("result_saved", { slug: current.slug });
});

// Handing the example over opens the application with it named as the work.
result.querySelector("[data-act='apply']")?.addEventListener("click", () => {
  track("apply_opened", { slug: current.slug });
  window.dispatchEvent(new CustomEvent("kitehand:apply", { detail: current }));
});
