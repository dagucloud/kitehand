# kitehand.ai

The website for Kitehand: AI staff that takes a job a company would otherwise
hire for. Its centre is the reader: a visitor picks a sample job and sees which
duties Kitehand would do, which it would ask them about first, which stay with
their team, and what share of a hire that is. A job the visitor pastes goes to
the hand-over form instead; the team replies with its reading. No AI runs on
the site.

- `src/` is an Astro site in English (`/`) and Japanese (`/ja/`), built static.
  Every word is in `src/i18n/copy.ts`; the six sample jobs, read ahead of time,
  also become the `/jobs/` pages, in `src/data/samples.ts`.
- Hand-overs go to Web3Forms, with the Dagu website's access key, from
  `src/components/Handover.astro`.
- Visits and the reader's events (`job_read`, `job_pasted`, `handover_sent`,
  …) go to the PostHog project kitewell.app uses, from
  `src/lib/analytics.ts`, and only on kitehand.ai.
- Cloudflare serves `dist/` as a Worker's static assets, with `kitehand.ai` as
  its custom domain (`wrangler.jsonc`).

## Develop

Requires Node.js 24.

```sh
npm install
npm run dev     # http://127.0.0.1:4321
npm run check
```

## Deploy

`npm run deploy` builds the site and publishes it.

## Assets

The logo files come from `marketing/brand/kitehand/` and the film from
`marketing/promo` in the Kitewell source. `node scripts/make-og.mjs` renders
the sharing images from `scripts/og.html`.
