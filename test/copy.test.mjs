// Checks the built site, as a visitor reads it: no employment words, none of
// the builders' words, every link inside the site leads somewhere, and the
// site's own fonts hold every character a page shows.
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import test from "node:test";

const dist = new URL("../dist/", import.meta.url).pathname;

// A Kitehand hand is handed a job; it is never an employee.
const EMPLOYMENT = /\b(hire|hires|hired|hiring|employ\w*)\b|雇|採用/i;
// The words of the builders of what Kitehand runs on, as the app's screens
// are checked for them (runstead-source3/web/kitehand-words.json).
const BUILDERS = /workflow|yaml|\bdags?\b|\bsteps?\b|\blogs?\b|engine|cron|artifact|batch|project|\bmcp\b|harness|queue|kitewell|dagu|ワークフロー|ステップ|ログ|エンジン|プロジェクト|バッチ|キュー|実行履歴/i;

function pages(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return pages(path);
    return name.endsWith(".html") ? [path] : [];
  });
}

// visible is what a visitor reads on a page: its text and the words of its
// attributes people see, without scripts, styles or markup.
function visible(html) {
  const seen = [...html.matchAll(/\b(?:alt|title|placeholder|aria-label|content)="([^"]*)"/g)].map((m) => m[1]);
  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ");
  return `${text} ${seen.join(" ")}`.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

// shown is the text a page draws: its body, without scripts, styles or
// markup, and the placeholders of its fields.
function shown(html) {
  const body = html.slice(html.indexOf("<body"), html.lastIndexOf("</body>"));
  const placeholders = [...body.matchAll(/\bplaceholder="([^"]*)"/g)].map((m) => m[1]);
  return `${body.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ")} ${placeholders.join(" ")}`
    .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

// Every character the site's fonts hold (scripts/make-fonts.mjs).
const held = new Set(Object.values(JSON.parse(readFileSync(new URL("../src/data/fonts.json", import.meta.url), "utf8"))).flatMap((f) => [...f.chars]));

const built = pages(dist);

test("the site is built", () => {
  assert.ok(built.length > 0, "run astro build first");
});

for (const page of built) {
  const name = relative(dist, page);
  const html = readFileSync(page, "utf8");
  const words = visible(html);

  test(`${name} uses no employment words`, () => {
    assert.equal(words.match(EMPLOYMENT)?.[0], undefined);
  });

  test(`${name} uses none of the builders' words`, () => {
    assert.equal(words.match(BUILDERS)?.[0], undefined);
  });

  // A style may show text in capitals, so both cases count.
  test(`${name} shows only characters the site's fonts hold`, () => {
    const text = shown(html);
    const missing = [...new Set(text + text.toUpperCase())].filter((c) => c.trim() && !held.has(c));
    assert.deepEqual(missing, [], "run npm run fonts");
  });

  test(`${name} links only to pages and places that exist`, () => {
    const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
    for (const [, href] of html.matchAll(/\bhref="([^"]+)"/g)) {
      if (/^(https?:|mailto:|tel:|data:)/.test(href)) continue;
      const [path, anchor] = href.split("#");
      if (!path) {
        assert.ok(ids.has(anchor), `${href} has no target on the page`);
        continue;
      }
      const file = path.endsWith("/") ? join(dist, path, "index.html") : join(dist, path);
      assert.ok(existsSync(file), `${href} leads nowhere`);
      if (anchor) {
        const target = readFileSync(file, "utf8");
        assert.ok(target.includes(`id="${anchor}"`), `${href} has no target on its page`);
      }
    }
  });
}
