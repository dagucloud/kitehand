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
    taken: string;
    shareText: string;
    copied: string;
    shares: Record<string, string>;
    hours: string;
    takes: string;
    units: [string, string];
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
      taken: copy.result.taken("{taken}", "{total}"),
      shareText: copy.result.shareText("{title}", "{people}"),
      copied: copy.result.copied,
      shares: copy.result.shares,
      hours: copy.result.hours,
      takes: copy.result.takes,
      units: copy.result.units,
      stamp: copy.result.stamp,
    },
  };
}

// json writes a value into an inline <script type="application/json"> safely.
export const json = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");
