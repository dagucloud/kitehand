// readJob asks Claude to read a pasted job into duties, hours and approvals.
import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import type { Diagnosis, Lang } from "../src/lib/diagnosis";
import { system } from "./prompt";
import { Reading, toDiagnosis } from "./schema";

const MODEL = "claude-opus-5-5";

export class NotAJob extends Error {}
export class Unreadable extends Error {}

export async function readJob(apiKey: string, text: string, lang: Lang): Promise<Diagnosis> {
  const client = new Anthropic({ apiKey, maxRetries: 1, timeout: 60_000 });
  const message = await client.beta.messages.parse({
    model: MODEL,
    max_tokens: 6000,
    // A request a safety classifier declines is re-run on the model the
    // category routes to, within the same call.
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort: "low", format: betaZodOutputFormat(Reading) },
    system: system(lang),
    messages: [{ role: "user", content: `<pasted>\n${text}\n</pasted>` }],
  });
  if (message.stop_reason === "refusal" || message.stop_reason === "max_tokens" || !message.parsed_output) {
    throw new Unreadable(`stop_reason ${message.stop_reason}`);
  }
  const reading = message.parsed_output;
  if (!reading.is_job || reading.duties.length === 0) throw new NotAJob();
  return tidy(toDiagnosis(reading));
}

// tidy keeps a reading within what the page can show: whole, positive hours
// that add up to the month, and no more than eight duties.
function tidy(d: Diagnosis): Diagnosis {
  const duties = d.duties
    .slice(0, 8)
    .map((x) => ({ ...x, hours: Math.max(1, Math.round(x.hours)), apps: x.apps.slice(0, 4) }));
  return {
    ...d,
    duties,
    hours_per_month: duties.reduce((sum, x) => sum + x.hours, 0),
    asks_before: d.asks_before.slice(0, 4),
    first_week: d.first_week.slice(0, 3),
  };
}
