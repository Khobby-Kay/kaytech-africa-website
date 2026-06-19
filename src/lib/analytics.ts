/**
 * Lightweight analytics helpers. GA4 only loads when NEXT_PUBLIC_GA_ID is set,
 * so the site works perfectly with or without a measurement ID configured.
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
