/** KayTech GA4 measurement ID — public, safe to ship in client bundle. */
export const GA_MEASUREMENT_ID = "G-LGL9G3SYVY";

/**
 * Env override for staging/preview; defaults to the live KayTech property.
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || GA_MEASUREMENT_ID;

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Fire a conversion / interaction event to GA4 (no-op if GA isn't loaded). */
export function trackEvent(name: string, params: GtagParams = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
