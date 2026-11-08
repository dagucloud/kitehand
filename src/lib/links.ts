// Where a visitor starts with Kitehand: the app, which signs them up and
// sets up their first hand on the free plan.
export const START = "https://app.kitehand.ai/";

// Where a visitor buys a plan: the app, which signs them up if it must and goes
// straight on to Stripe's page.
export const planLink = (plan: "own_key" | "pro", interval: "monthly" | "yearly") => `${START}?plan=${plan}&interval=${interval}`;
