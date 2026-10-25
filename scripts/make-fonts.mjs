// Makes the site's fonts: each face cut down to the characters the built
// pages show in it, saved under public/fonts, with the CSS that declares them
// (src/styles/fonts.css) and a list of what each holds (src/data/fonts.json).
// The pages then load a few small files of their own rather than Google
// Fonts' stylesheet and its hundred slices. Run after a build whenever the
// words change; `npm run fonts` builds, makes the fonts, and builds again.
//   CHROME=/path/to/chrome node scripts/make-fonts.mjs
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";
import subsetFont from "subset-font";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = join(root, "dist");
const out = join(root, "public", "fonts");
const cache = join(root, "node_modules", ".cache", "kitehand-fonts");
const chrome = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// The families the stylesheet names, and the weights each comes in.
const FAMILIES = [
  { family: "Gloock", weights: [400] },
  { family: "Hanken Grotesk", weights: [400, 500, 600, 700] },
  { family: "IBM Plex Mono", weights: [300, 400, 500] },
  { family: "Shippori Mincho B1", weights: [600, 800] },
  { family: "Zen Kaku Gothic New", weights: [400, 500, 700] },
];

// Characters every face keeps, for numbers and punctuation the pages build as
// they run; the body faces also keep what a visitor may type into the form.
const ALWAYS = "0123456789.,:;!?%()/-–—·… ";
const ASCII = Array.from({ length: 95 }, (_, i) => String.fromCharCode(32 + i)).join("");
const KANA = Array.from({ length: 0x3097 - 0x3041 }, (_, i) => String.fromCharCode(0x3041 + i)).join("") + Array.from({ length: 0x30fb - 0x30a1 }, (_, i) => String.fromCharCode(0x30a1 + i)).join("") + "ー、。「」・（）！？";
const TYPED = { "Hanken Grotesk|400": ASCII, "Zen Kaku Gothic New|400": ASCII + KANA };

const slug = (family) => family.toLowerCase().replace(/\s+/g, "-");

// face is the weight a browser draws a requested weight in, of the weights a
// family comes in, by the CSS font matching rules.
function face(weights, wanted) {
  const sorted = [...weights].sort((a, b) => a - b);
  if (sorted.includes(wanted)) return wanted;
  const lighter = sorted.filter((w) => w < wanted).reverse();
  const heavier = sorted.filter((w) => w > wanted);
  if (wanted >= 400 && wanted <= 500) {
    const upTo500 = heavier.filter((w) => w <= 500);
    return [...upTo500, ...lighter, ...heavier.filter((w) => w > 500)][0];
  }
  return (wanted < 400 ? [...lighter, ...heavier] : [...heavier, ...lighter])[0];
}

// source fetches a family's full font files from Google Fonts, once.
async function source(family, weight) {
  mkdirSync(cache, { recursive: true });
  const file = join(cache, `${slug(family)}-${weight}.ttf`);
  if (existsSync(file)) return readFileSync(file);
  const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`, { headers: { "user-agent": "Mozilla/5.0" } })).text();
  const url = css.match(/src: url\((https:[^)]+\.ttf)\)/)?.[1];
  if (!url) throw new Error(`no font file for ${family} ${weight}`);
  const bytes = Buffer.from(await (await fetch(url)).arrayBuffer());
  writeFileSync(file, bytes);
  return bytes;
}

function pages(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return pages(path);
    return name.endsWith(".html") ? [`/${relative(dist, path).replace(/index\.html$/, "")}`] : [];
  });
}

// serve answers the built site, as the pages are read.
function serve() {
  const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2" };
  const server = createServer((req, res) => {
    let path = join(dist, decodeURIComponent(new URL(req.url, "http://x").pathname));
    if (existsSync(path) && statSync(path).isDirectory()) path = join(path, "index.html");
    if (!existsSync(path)) return res.writeHead(404).end();
    res.writeHead(200, { "content-type": types[extname(path)] ?? "application/octet-stream" }).end(readFileSync(path));
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

// shown collects, on the open page, the text drawn in each family and
// weight: every text node, placeholders, generated content, the words the
// scripts show later, and what the share card paints.
function shown() {
  const seen = {};
  const add = (style, text) => {
    if (!text) return;
    const family = style.fontFamily.split(",")[0].trim().replace(/^["']|["']$/g, "");
    const key = `${family}|${style.fontWeight}`;
    seen[key] = (seen[key] ?? "") + text;
  };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const el = node.parentElement;
    if (!el || ["SCRIPT", "STYLE", "TEMPLATE", "NOSCRIPT"].includes(el.tagName)) continue;
    add(getComputedStyle(el), node.textContent.trim());
  }
  for (const el of document.querySelectorAll("*")) {
    if (el.placeholder) add(getComputedStyle(el), el.placeholder);
    for (const pseudo of ["::before", "::after"]) {
      const style = getComputedStyle(el, pseudo);
      if (/^".*"$/.test(style.content)) add(style, style.content.slice(1, -1));
    }
  }
  const body = getComputedStyle(document.body);
  for (const script of document.querySelectorAll('script[type="application/json"]')) add(body, script.textContent);
  const form = document.querySelector("[data-apply]");
  if (form) {
    add(getComputedStyle(form.querySelector("button")), form.dataset.sending);
    add(getComputedStyle(form.querySelector("[data-note]")), form.dataset.error);
  }
  for (const [font, text] of window.__painted ?? []) {
    const m = font.match(/^(?:(normal|bold|\d{3})\s+)?[\d.]+px\s+(.+)$/);
    if (!m) continue;
    const weight = m[1] === "bold" ? "700" : m[1] === "normal" || !m[1] ? "400" : m[1];
    add({ fontFamily: m[2], fontWeight: weight }, text);
  }
  return seen;
}

// painting records what the share card draws, and keeps its image from
// downloading.
function painting() {
  window.__painted = [];
  const fill = CanvasRenderingContext2D.prototype.fillText;
  CanvasRenderingContext2D.prototype.fillText = function (text, ...rest) {
    window.__painted.push([this.font, String(text)]);
    return fill.call(this, text, ...rest);
  };
  URL.createObjectURL = () => "about:blank";
  HTMLAnchorElement.prototype.click = function () {};
}

async function collect() {
  const server = await serve();
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ executablePath: chrome });
  const chars = {};
  const keep = (seen) => {
    for (const [key, text] of Object.entries(seen)) chars[key] = (chars[key] ?? "") + text;
  };
  for (const path of pages(dist)) {
    const page = await browser.newPage();
    await page.addInitScript(painting);
    // The language a page is in decides nothing here: no redirect.
    await page.addInitScript(() => Object.defineProperty(navigator, "languages", { get: () => [document.documentElement.lang] }));
    await page.goto(base + path, { waitUntil: "load" });
    keep(await page.evaluate(shown));
    // Each example fills the result card, and the share card paints it.
    const samples = await page.locator("[data-sample]").count();
    for (let i = 0; i < samples; i++) {
      await page.locator("[data-sample]").nth(i).click();
      await page.evaluate(() => (window.__painted = []));
      await page.locator("[data-act='save']").click();
      await page.waitForFunction(() => window.__painted.some(([, text]) => text === "kitehand.ai"), null, { timeout: 15000 });
      keep(await page.evaluate(shown));
    }
    await page.close();
  }
  await browser.close();
  server.close();
  return chars;
}

const seen = await collect();
const faces = new Map();
for (const { family, weights } of FAMILIES) {
  for (const [key, text] of Object.entries(seen)) {
    const [name, weight] = key.split("|");
    if (name !== family) continue;
    const w = face(weights, Number(weight));
    faces.set(`${family}|${w}`, (faces.get(`${family}|${w}`) ?? "") + text);
  }
}

mkdirSync(out, { recursive: true });
const made = [];
const manifest = {};
for (const [key, text] of [...faces].sort(([a], [b]) => a.localeCompare(b))) {
  const [family, weight] = key.split("|");
  const chars = [...new Set([...text, ...ALWAYS, ...(TYPED[key] ?? "")])].filter((c) => c.trim()).sort().join("");
  const bytes = await subsetFont(await source(family, Number(weight)), chars, { targetFormat: "woff2" });
  const name = `${slug(family)}-${weight}-${createHash("sha256").update(bytes).digest("hex").slice(0, 10)}.woff2`;
  writeFileSync(join(out, name), bytes);
  made.push(name);
  manifest[key] = { file: `/fonts/${name}`, chars };
  console.log(`${key}: ${[...chars].length} characters, ${Math.round(bytes.length / 1024)} KB`);
}
for (const name of readdirSync(out)) if (!made.includes(name)) rmSync(join(out, name));

const css = Object.entries(manifest)
  .map(([key, { file }]) => {
    const [family, weight] = key.split("|");
    return `@font-face {\n  font-family: "${family}";\n  font-style: normal;\n  font-weight: ${weight};\n  font-display: swap;\n  src: url("${file}") format("woff2");\n}\n`;
  })
  .join("\n");
writeFileSync(join(root, "src", "styles", "fonts.css"), `/* Made by scripts/make-fonts.mjs: each face holds only the characters the\n   site shows in it. */\n\n${css}`);
writeFileSync(join(root, "src", "data", "fonts.json"), `${JSON.stringify(manifest, null, 2)}\n`);
