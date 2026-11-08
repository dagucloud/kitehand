// kitehand.ai: the site in dist/, served as it is, but for the home pages,
// which name the hands ranked highest in their language. The console keeps the
// ranking. A home page reads it here, not in the browser, so search engines
// read the ranking and follow its links.

const PAGES = "https://app.kitehand.ai/s/";
// shown is how many hands a home page names, and keptSeconds how long the
// ranking is kept before the console is asked again.
const shown = 10;
const keptSeconds = 300;

const escaped = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

// ranking reads the hands ranked highest in a language; a ranking that cannot
// be read is one with no hands, and the home page goes out without it.
export async function ranking(console, lang, fetcher = fetch) {
  try {
    const response = await fetcher(`${console}/gui/api/public-pages?lang=${lang}&limit=${shown}`, { cf: { cacheTtl: keptSeconds, cacheEverything: true } });
    return response.ok ? (await response.json()).pages : [];
  } catch {
    return [];
  }
}

// rows is the list a home page shows of pages, in its words. used is said only
// of a hand someone used.
export function rows(pages, { by, used, usedOnce, number }) {
  return pages
    .map((page) => {
      const uses = page.uses === 1 ? usedOnce : page.uses ? used.replace("{count}", number.format(page.uses)) : "";
      return `<li><a class="ranking-row" href="${PAGES}${encodeURIComponent(page.id)}"><span class="ranking-rank">${number.format(page.rank)}</span><span class="ranking-name"><strong>${escaped(page.title)}</strong><span>${escaped(by.replace("{author}", page.author))}</span>${page.summary ? `<span class="ranking-summary">${escaped(page.summary)}</span>` : ""}</span><span class="ranking-counts"><span class="ranking-stars">★ ${number.format(page.stars)}</span>${uses ? `<span>${escaped(uses)}</span>` : ""}</span></a></li>`;
    })
    .join("");
}

// withRanking shows the home page's ranking, which it was built with hidden and
// empty. The words come from the page itself, in its language.
function withRanking(page, pages, lang) {
  const number = new Intl.NumberFormat(lang);
  return new HTMLRewriter()
    .on("[data-ranking]", {
      element(section) {
        section.removeAttribute("hidden");
      },
    })
    .on("[data-ranking-list]", {
      element(list) {
        const words = { by: list.getAttribute("data-by"), used: list.getAttribute("data-used"), usedOnce: list.getAttribute("data-used-once"), number };
        list.setInnerContent(rows(pages, words), { html: true });
      },
    })
    .transform(page);
}

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    const lang = pathname === "/ja/" ? "ja" : "en";
    const pages = await ranking(env.CONSOLE_ORIGIN, lang);
    if (!pages.length) {
      return env.ASSETS.fetch(request);
    }
    // The file is asked for bare: what a browser kept of the page says nothing
    // of where the hands stand now.
    const file = await env.ASSETS.fetch(new Request(request.url));
    const page = withRanking(file, pages, lang);
    const response = new Response(page.body, page);
    response.headers.delete("ETag");
    response.headers.set("Cache-Control", "no-cache");
    return response;
  },
};
