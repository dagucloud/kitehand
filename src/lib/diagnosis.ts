// A job as Kitehand reads it: the duties it is made of, who should do each,
// and how many hours a month each takes. The site renders it, the Worker
// asks Claude for it, and the samples are written in it.

export type Lang = "en" | "ja";

// Who does a duty: Kitehand alone, Kitehand with a person's approval before
// anything final, or a person, as today.
export type Share = "kitehand" | "approve" | "human";

export type Duty = {
  name: string;
  share: Share;
  hours: number;
  how: string;
  apps: string[];
};

export type Diagnosis = {
  title: string;
  summary: string;
  hours_per_month: number;
  duties: Duty[];
  schedule: string;
  asks_before: string[];
  first_week: string[];
};

// A full-time person's month, the unit "of a hire" is counted in.
export const FULL_TIME_HOURS = 160;

export type Tally = { taken: number; total: number; hires: number };

// tally adds up the hours Kitehand takes (alone or with approval) and what
// share of a full-time hire that is.
export function tally(d: Diagnosis): Tally {
  const taken = d.duties.filter((x) => x.share !== "human").reduce((sum, x) => sum + x.hours, 0);
  const total = d.duties.reduce((sum, x) => sum + x.hours, 0) || d.hours_per_month;
  return { taken, total, hires: taken / FULL_TIME_HOURS };
}

// hires writes a share of a hire to one decimal, never as zero.
export const formatHires = (n: number) => Math.max(0.1, Math.round(n * 10) / 10).toFixed(1);

export const TEXT_LIMITS = { min: 12, max: 12000 };
