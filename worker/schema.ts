// What Claude returns when it reads a pasted job: the Diagnosis the site
// renders, plus whether the text described work at all.
import { z } from "zod";
import type { Diagnosis } from "../src/lib/diagnosis";

const Duty = z.object({
  name: z.string().describe("The duty in a few words."),
  share: z.enum(["kitehand", "approve", "human"]),
  hours: z.number().describe("Hours a month this duty takes."),
  how: z.string().describe("One plain sentence: how Kitehand does it and where it stops, or why it stays with people."),
  apps: z.array(z.string()).describe("Systems the duty touches, by generic name. Empty when none."),
});

export const Reading = z.object({
  is_job: z.boolean().describe("False when the text does not describe work someone does."),
  title: z.string(),
  summary: z.string(),
  hours_per_month: z.number(),
  duties: z.array(Duty),
  schedule: z.string(),
  asks_before: z.array(z.string()),
  first_week: z.array(z.string()),
});

export type Reading = z.infer<typeof Reading>;

// Reading's job fields must stay assignable to the Diagnosis the site renders.
export const toDiagnosis = ({ is_job: _, ...d }: Reading): Diagnosis => d;
