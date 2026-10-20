# kitehand.ai

The website for Kitehand: AI staff that takes a job a company would otherwise
hire for. Its centre is the reader: a visitor pastes a job posting, a manual,
or one line, and sees which duties Kitehand would do, which it would ask them
about first, which stay with their team, and what share of a hire that is.

- `src/` is an Astro site in English (`/`) and Japanese (`/ja/`), built static.
  Every word is in `src/i18n/copy.ts`; the six sample jobs, which also become
  the `/jobs/` pages, are in `src/data/samples.ts`.
- `worker/` is the Cloudflare Worker in front of it. It answers
  `POST /api/diagnose`, which reads a pasted job with Claude (`claude-opus-5-5`,
  structured output, the prompt in `worker/prompt.ts`), and
  `POST /api/handover`, which keeps an early-access request in KV. Every other
  path is the static site.

## Develop

Requires Node.js 24.

```sh
npm install
npm run dev     # the site alone, without the Worker
npm run serve   # build, then the site and the Worker on http://127.0.0.1:8787
npm run check
```

The reader needs a key to read live jobs; without one it says so and the
samples still work. Put it in `.dev.vars` (ignored by Git):

```
ANTHROPIC_API_KEY=sk-ant-...
```

## Deploy

Once per account:

```sh
npx wrangler kv namespace create STORE   # put the id in wrangler.jsonc
npx wrangler secret put ANTHROPIC_API_KEY
```

Then `npm run deploy`, and attach `kitehand.ai` to the Worker as a custom
domain. Set `PUBLIC_POSTHOG_KEY` when building to record the reader's events
(`job_read`, `result_shared`, `handover_sent`, …).

Limits: six readings a minute per visitor (`DIAGNOSE_LIMIT`) and
`DAILY_DIAGNOSES` a day in total, so traffic can't run up an unbounded bill.

Hand-over requests are KV keys under `handover:`:

```sh
npx wrangler kv key list --binding STORE --prefix handover: --remote
```

## Assets

The logo files come from `marketing/brand/kitehand/` and the film from
`marketing/promo` in the Kitewell source. `node scripts/make-og.mjs` renders
the sharing images from `scripts/og.html`.
