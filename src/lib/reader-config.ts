// What the reader's script needs from the page: the samples in the page's
// language and the words it writes, with {tokens} where values go.
import { SAMPLES } from "../data/samples";
import type { Copy } from "../i18n/copy";
import type { Diagnosis, Lang } from "./diagnosis";

export type ReaderConfig = {
  lang: Lang;
  home: string;
  jobs: string;
  samples: { slug: string; posting: string; diagnosis: Diagnosis }[];
  words: {
    working: string[];
    errors: Record<"too_short" | "too_long" | "contact" | "send", string>;
    sending: string;
    example: string;
    taken: string;
    shareText: string;
    copied: string;
    shares: Record<string, string>;
    hours: string;
    of: string;
    hire: string;
    stamp: string;
  };
};

export function readerConfig(copy: Copy): ReaderConfig {
  const lang = copy.lang;
  const home = lang === "ja" ? "/ja/" : "/";
  return {
    lang,
    home,
    jobs: `${home}jobs/`,
    samples: SAMPLES.map((s) => ({ slug: s.slug, posting: s.posting[lang], diagnosis: s.diagnosis[lang] })),
    words: {
      working: copy.tool.working,
      errors: copy.tool.errors,
      sending: copy.handover.sending,
      example: copy.tool.example,
      taken: copy.result.taken("{taken}", "{total}"),
      shareText: copy.result.shareText("{title}", "{hires}"),
      copied: copy.result.copied,
      shares: copy.result.shares,
      hours: copy.result.hours,
      of: copy.result.of,
      hire: copy.result.hire,
      stamp: copy.result.stamp,
    },
  };
}

// json writes a value into an inline <script type="application/json"> safely.
export const json = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");
