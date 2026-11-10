// kitehand.ai: the site in dist/, served as it is, but for the home pages,
// which name Kitehand's ready-made hands in their language. The console keeps
// the hands' pages. A home page reads them here, not in the browser, so search
// engines read the hands and follow their links.

const PAGES = "https://app.kitehand.ai/s/";
// asked is how many hands a home page asks for, which is as many as the
// console answers, and keptSeconds how long the answer is kept before the
// console is asked again.
const asked = 50;
const keptSeconds = 300;

const escaped = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

// hands reads the ready-made hands in a language; hands that cannot be read
// are none, and the home page goes out without them.
export async function hands(console, lang, fetcher = fetch) {
  try {
    const response = await fetcher(`${console}/gui/api/public-pages?lang=${lang}&limit=${asked}`, { cf: { cacheTtl: keptSeconds, cacheEverything: true } });
    return response.ok ? (await response.json()).pages : [];
  } catch {
    return [];
  }
}

// cards is the list a home page shows of hands: each one's name and, when it
// has one, the line about it, as a link to its page.
export function cards(pages) {
  return pages
    .map((page) => {
      const summary = page.summary ? `<span class="ready-hand-summary">${escaped(page.summary)}</span>` : "";
      return `<li><a class="ready-hand" href="${PAGES}${encodeURIComponent(page.id)}"><strong>${escaped(page.title)}</strong>${summary}<span class="arrow" aria-hidden="true">→</span></a></li>`;
    })
    .join("");
}

// withHands shows the home page's hands and the link to them in its header,
// which it was built with hidden, and fills their list.
function withHands(page, pages) {
  return new HTMLRewriter()
    .on("[data-hands], [data-hands-link]", {
      element(shown) {
        shown.removeAttribute("hidden");
      },
    })
    .on("[data-hands-list]", {
      element(list) {
        list.setInnerContent(cards(pages), { html: true });
      },
    })
    .transform(page);
}

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    const pages = await hands(env.CONSOLE_ORIGIN, pathname === "/ja/" ? "ja" : "en");
    if (!pages.length) {
      return env.ASSETS.fetch(request);
    }
    // The file is asked for bare: what a browser kept of the page says nothing
    // of the hands there are now.
    const file = await env.ASSETS.fetch(new Request(request.url));
    const page = withHands(file, pages);
    const response = new Response(page.body, page);
    response.headers.delete("ETag");
    response.headers.set("Cache-Control", "no-cache");
    return response;
  },
};
