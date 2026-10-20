// Renders the sharing images, public/og-en.png and public/og-ja.png, from
// scripts/og.html with an installed Chrome:
//   CHROME=/path/to/chrome node scripts/make-og.mjs
import { chromium } from "playwright-core";
import { fileURLToPath } from "node:url";

const page = fileURLToPath(new URL("./og.html", import.meta.url));
const chrome = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await chromium.launch({ executablePath: chrome });
const tab = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const lang of ["en", "ja"]) {
  await tab.goto(`file://${page}#${lang}`, { waitUntil: "networkidle" });
  await tab.reload({ waitUntil: "networkidle" });
  await tab.evaluate(() => document.fonts.ready);
  await tab.screenshot({ path: fileURLToPath(new URL(`../public/og-${lang}.png`, import.meta.url)) });
}
await browser.close();
