// track records a product event when analytics is configured, and does
// nothing otherwise.
type Capture = { capture?: (event: string, props?: Record<string, unknown>) => void };

export function track(event: string, props?: Record<string, unknown>) {
  (window as unknown as { posthog?: Capture }).posthog?.capture?.(event, props);
}
