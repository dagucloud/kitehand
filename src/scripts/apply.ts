// Sends an application to the team's Web3Forms inbox, the one the Dagu
// website uses.
import { tally, type Diagnosis } from "../lib/diagnosis";

const WEB3FORMS_KEY = "81d327c7-60e9-4461-a0c4-d6fbc0cab56a";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type Application = {
  email: string;
  company: string;
  name: string;
  // How many people the company has, as the form offers it; "" when the
  // reader sent it.
  size: string;
  job: string;
  // The sample the visitor read before applying, if any.
  sample: Diagnosis | null;
  lang: string;
};

export const reachable = (a: Application) => EMAIL.test(a.email) && a.company.length > 0;

// sendApplication resolves true once the inbox has taken the application.
export async function sendApplication(a: Application): Promise<boolean> {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Kitehand: an application from ${a.company}`,
        from_name: "Kitehand Website",
        email: a.email,
        company: a.company,
        name: a.name,
        size: a.size,
        job: a.job,
        sample: a.sample ? `${a.sample.title} (${tally(a.sample).taken} h, ${tally(a.sample).people} FTE)` : "",
        lang: a.lang,
      }),
    });
    const result = (await response.json().catch(() => ({}))) as { success?: boolean };
    return response.ok && result.success === true;
  } catch {
    return false;
  }
}
