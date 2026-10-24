// A piece of the owner's work as Kitehand reads it: what it is made of, who
// should do each part, and how many of the owner's hours a month each takes.
// The site renders it, and the samples are written in it.

export type Lang = "en" | "ja";

// Who does a part: the secretary alone, the secretary with the owner's
// approval before anything final, or the owner, as today.
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

export type Tally = { taken: number; total: number };

// tally adds up the hours the secretary takes off the owner, alone or with
// their approval, out of all the hours the work takes them.
export function tally(d: Diagnosis): Tally {
  const taken = d.duties.filter((x) => x.share !== "human").reduce((sum, x) => sum + x.hours, 0);
  const total = d.duties.reduce((sum, x) => sum + x.hours, 0) || d.hours_per_month;
  return { taken, total };
}

export const TEXT_LIMITS = { min: 12, max: 12000 };
