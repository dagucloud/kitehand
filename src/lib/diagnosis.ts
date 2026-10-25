// A job as Kitehand reads it: what it is made of, who should do each part,
// and how many hours a month each takes. The site renders it, and the samples
// are written in it.

export type Lang = "en" | "ja";

// Who does a part: Kitehand alone, Kitehand with a person's approval before
// anything final, or the team, as today.
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

// The hours one full-time person works in a month, the unit "people" counts in.
export const FULL_TIME_HOURS = 160;

export type Tally = { taken: number; total: number; people: number };

// tally adds up the hours Kitehand takes, alone or with a person's approval,
// out of all the hours the job takes, and how many full-time people that is,
// to one decimal.
export function tally(d: Diagnosis): Tally {
  const taken = d.duties.filter((x) => x.share !== "human").reduce((sum, x) => sum + x.hours, 0);
  const total = d.duties.reduce((sum, x) => sum + x.hours, 0) || d.hours_per_month;
  return { taken, total, people: Math.round((taken / FULL_TIME_HOURS) * 10) / 10 };
}
