# kitehand.ai

The website for Kitehand: AI hands (担当者 in Japanese) for small companies
short-handed on office work. A company hands over a job as a job description,
a manual or one line; a hand learns it, does it the same way every day in the
cloud, and asks a person before anything out of the ordinary. Kitehand is
priced per hand, by application, with a founding price for the first
companies (`runstead-source3/marketing/sales/pricing/kitehand.md`).

Its centre is the reader: a visitor picks a sample job and sees which parts
Kitehand would do, which it would ask about first, which stay with people,
and how much of a full-time job that is. A job the visitor writes goes to
the application inbox instead; the team replies with its reading. No AI runs
on the site. Every figure the page quotes links to its source.

- `src/` is an Astro site in English (`/`) and Japanese (`/ja/`), built static.
  Every word is in `src/i18n/copy.ts`; the six samples, read ahead of time,
  also become the `/jobs/` pages, in `src/data/samples.ts`.
- Applications go to Web3Forms, with the Dagu website's access key, from
  `src/scripts/apply.ts`.
- Visits and the page's events (`work_read`, `apply_sent`, `pricing_viewed`,
  `result_shared`, …) go to the PostHog project kitewell.app uses, from
  `src/lib/analytics.ts`, and only on kitehand.ai.
- Cloudflare serves `dist/` as a Worker's static assets, with `kitehand.ai` as
  its custom domain (`wrangler.jsonc`); `public/_redirects` keeps old work
  pages' links working.

## Develop

Requires Node.js 24.

```sh
npm install
npm run dev     # http://127.0.0.1:4321
npm run check
npm test        # builds, then checks the words and links visitors see
```

## Deploy

`npm run deploy` builds the site and publishes it.

## Fonts

The pages load their own fonts, each cut down to the characters the site
shows in it, from `public/fonts` (`src/styles/fonts.css`, `src/data/fonts.json`).
After changing any words, run `npm run fonts`, which builds the site, cuts
the fonts from Google Fonts' files and builds again; `npm test` fails when a
page shows a character the fonts lack.

## Assets

The logo files come from `marketing/brand/kitehand/` in the Kitewell source.
`node scripts/make-og.mjs` renders the sharing images from `scripts/og.html`.
