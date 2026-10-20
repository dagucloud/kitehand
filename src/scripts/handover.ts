// Sends a hand-over to the team's Web3Forms inbox, the one the Dagu website
// uses. Both the reader at the top and the form at the foot send through it.
import { formatHires, tally, type Diagnosis } from "../lib/diagnosis";

const WEB3FORMS_KEY = "81d327c7-60e9-4461-a0c4-d6fbc0cab56a";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type Handover = {
  email: string;
  company: string;
  job: string;
  // The sample the visitor read before handing over, if any.
  sample: Diagnosis | null;
  lang: string;
};

export const reachable = (h: Handover) => EMAIL.test(h.email) && h.company.length > 0;

// sendHandover resolves true once the inbox has taken the request.
export async function sendHandover(h: Handover): Promise<boolean> {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Kitehand: a job handed over by ${h.company}`,
        from_name: "Kitehand Website",
        email: h.email,
        company: h.company,
        job: h.job,
        sample: h.sample ? `${h.sample.title} (${formatHires(tally(h.sample).hires)})` : "",
        lang: h.lang,
      }),
    });
    const result = (await response.json().catch(() => ({}))) as { success?: boolean };
    return response.ok && result.success === true;
  } catch {
    return false;
  }
}
