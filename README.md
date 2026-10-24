# kitehand.ai

The website for Kitehand, an AI secretary of their own for owners of small
businesses (AI秘書; "AI executive assistant" in English). It takes on the
office work the owner does after hours, the same way every day. Membership is
by application, at one price with a founding price for the first members
(`runstead-source3/marketing/sales/pricing/kitehand.md`).

Its centre is the reader: an owner picks a sample piece of work and sees which
parts their assistant would do, which it would ask them about first, which
stay with them, and how many hours a month that gives back. Work the owner
pastes goes to the application inbox instead; the team replies with its
reading. No AI runs on the site.

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

## Assets

The logo files come from `marketing/brand/kitehand/` in the Kitewell source.
`node scripts/make-og.mjs` renders the sharing images from `scripts/og.html`.
