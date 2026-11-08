// Checks what the site's Worker writes into a home page. It runs where
// HTMLRewriter exists; what it writes is checked here.
import assert from "node:assert/strict";
import test from "node:test";
import { ranking, rows } from "../worker/index.mjs";

const number = new Intl.NumberFormat("ja");
const words = { by: "{author} の担当者", used: "{count}回使われました", usedOnce: "1回使われました", number };

test("a hand in the ranking links to its page and says what it earned, what a person wrote escaped", () => {
  const html = rows([{ id: "abcdefghij", title: '受注 <script>"', author: "山田 & 商店", summary: "毎朝入力します", stars: 1200, uses: 3, rank: 1 }], words);
  assert.match(html, /href="https:\/\/app\.kitehand\.ai\/s\/abcdefghij"/);
  assert.match(html, /<strong>受注 &lt;script&gt;&quot;<\/strong>/);
  assert.match(html, /山田 &amp; 商店 の担当者/);
  assert.match(html, /★ 1,200/);
  assert.match(html, /3回使われました/);
  assert.match(html, /毎朝入力します/);
});

test("a hand no one used yet does not say so", () => {
  const html = rows([{ id: "abcdefghij", title: "受注", author: "山田", summary: "", stars: 0, uses: 0, rank: 2 }], words);
  assert.doesNotMatch(html, /使われました/);
  assert.doesNotMatch(html, /ranking-summary/);
  assert.equal((rows([{ id: "a", title: "x", author: "y", stars: 0, uses: 1, rank: 1 }], words).match(/1回使われました/g) || []).length, 1);
});

test("a ranking the console cannot give is one with no hands, so the home page goes out without it", async () => {
  assert.deepEqual(await ranking("https://console.example.test", "ja", async () => new Response("{}", { status: 500 })), []);
  assert.deepEqual(await ranking("https://console.example.test", "ja", async () => { throw new Error("down"); }), []);
  const asked = [];
  const pages = await ranking("https://console.example.test", "ja", async (url) => { asked.push(url); return Response.json({ pages: [{ id: "a" }] }); });
  assert.deepEqual(pages, [{ id: "a" }]);
  assert.deepEqual(asked, ["https://console.example.test/gui/api/public-pages?lang=ja&limit=10"]);
});
