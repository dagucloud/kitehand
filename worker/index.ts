// kitehand.ai's Worker: it answers /api/* and leaves every other path to the
// static site.
//
//   POST /api/diagnose  { text, lang }            -> { diagnosis }
//   POST /api/handover  { email, company, ... }   -> { ok }
import Anthropic from "@anthropic-ai/sdk";
import { TEXT_LIMITS, type Lang } from "../src/lib/diagnosis";
import { NotAJob, readJob, Unreadable } from "./diagnose";

interface Env {
  ASSETS: Fetcher;
  STORE: KVNamespace;
  DIAGNOSE_LIMIT: RateLimit;
  ANTHROPIC_API_KEY?: string;
  DAILY_DIAGNOSES: string;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });

const fail = (error: string, status: number) => json({ error }, status);

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (!pathname.startsWith("/api/")) return env.ASSETS.fetch(request);
    if (request.method !== "POST") return fail("method", 405);
    if (!sameOrigin(request)) return fail("origin", 403);
    if (pathname === "/api/diagnose") return diagnose(request, env);
    if (pathname === "/api/handover") return handover(request, env);
    return fail("not_found", 404);
  },
} satisfies ExportedHandler<Env>;

// Only the site's own pages may call the API.
function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  return origin !== null && new URL(origin).host === new URL(request.url).host;
}

async function body(request: Request): Promise<Record<string, unknown> | null> {
  try {
    const value = await request.json();
    return value && typeof value === "object" ? (value as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

const langOf = (value: unknown): Lang => (value === "ja" ? "ja" : "en");

async function diagnose(request: Request, env: Env): Promise<Response> {
  const input = await body(request);
  const text = typeof input?.text === "string" ? input.text.trim() : "";
  if (text.length < TEXT_LIMITS.min) return fail("too_short", 400);
  if (text.length > TEXT_LIMITS.max) return fail("too_long", 400);
  if (!env.ANTHROPIC_API_KEY) return fail("unavailable", 503);

  const visitor = request.headers.get("cf-connecting-ip") ?? "unknown";
  const { success } = await env.DIAGNOSE_LIMIT.limit({ key: visitor });
  if (!success) return fail("rate_limited", 429);
  if (!(await withinDailyBudget(env))) return fail("busy", 503);

  try {
    return json({ diagnosis: await readJob(env.ANTHROPIC_API_KEY, text, langOf(input?.lang)) });
  } catch (error) {
    if (error instanceof NotAJob) return fail("not_job", 422);
    if (error instanceof Unreadable) return fail("unreadable", 502);
    if (error instanceof Anthropic.RateLimitError) return fail("busy", 503);
    if (error instanceof Anthropic.APIError) return fail("upstream", 502);
    throw error;
  }
}

// withinDailyBudget counts the day's diagnoses and refuses past the cap, so
// a burst of traffic can't run up an unbounded bill. KV counts loosely,
// which is enough for a ceiling.
async function withinDailyBudget(env: Env): Promise<boolean> {
  const key = `count:${new Date().toISOString().slice(0, 10)}`;
  const count = Number((await env.STORE.get(key)) ?? 0);
  if (count >= Number(env.DAILY_DIAGNOSES)) return false;
  await env.STORE.put(key, String(count + 1), { expirationTtl: 60 * 60 * 48 });
  return true;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clip = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

// handover keeps a company's request to hand a job over, with the reading
// the visitor saw, for the team to follow up.
async function handover(request: Request, env: Env): Promise<Response> {
  const input = await body(request);
  const email = clip(input?.email, 200);
  const company = clip(input?.company, 200);
  if (!EMAIL.test(email) || !company) return fail("invalid", 400);
  const record = {
    at: new Date().toISOString(),
    email,
    company,
    job: clip(input?.job, TEXT_LIMITS.max),
    title: clip(input?.title, 200),
    hires: typeof input?.hires === "number" ? input.hires : null,
    lang: langOf(input?.lang),
    country: (request as Request & { cf?: { country?: string } }).cf?.country ?? null,
  };
  await env.STORE.put(`handover:${record.at}:${crypto.randomUUID()}`, JSON.stringify(record));
  return json({ ok: true });
}
