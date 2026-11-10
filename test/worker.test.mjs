// Checks what the site's Worker writes into a home page. It runs where
// HTMLRewriter exists; what it writes is checked here.
import assert from "node:assert/strict";
import test from "node:test";
import { cards, hands } from "../worker/index.mjs";

test("a hand's card links to its page and says its name and the line about it, both escaped", () => {
  const html = cards([{ id: "abcdefghij", title: '受注 <script>"', summary: "毎朝 & 夕方に入力します" }]);
  assert.match(html, /href="https:\/\/app\.kitehand\.ai\/s\/abcdefghij"/);
  assert.match(html, /<strong>受注 &lt;script&gt;&quot;<\/strong>/);
  assert.match(html, /毎朝 &amp; 夕方に入力します/);
});

test("hands are listed in the order the console answers them, a hand with no line by its name alone", () => {
  const html = cards([{ id: "bbbbbbbbbb", title: "請求", summary: "" }, { id: "aaaaaaaaaa", title: "受注", summary: "毎朝入力します" }]);
  assert.deepEqual([...html.matchAll(/<strong>([^<]*)<\/strong>/g)].map((m) => m[1]), ["請求", "受注"]);
  assert.match(html, /<strong>請求<\/strong><span class="arrow"/);
});

test("hands the console cannot give are none, so the home page goes out without them", async () => {
  assert.deepEqual(await hands("https://console.example.test", "ja", async () => new Response("{}", { status: 500 })), []);
  assert.deepEqual(await hands("https://console.example.test", "ja", async () => { throw new Error("down"); }), []);
});

test("a home page asks for the hands in its own language", async () => {
  const asked = [];
  const pages = await hands("https://console.example.test", "ja", async (url) => { asked.push(url); return Response.json({ pages: [{ id: "a" }] }); });
  assert.deepEqual(pages, [{ id: "a" }]);
  assert.deepEqual(asked, ["https://console.example.test/gui/api/public-pages?lang=ja&limit=50"]);
});
