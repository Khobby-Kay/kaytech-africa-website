"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GA_ID, trackEvent } from "@/lib/analytics";

/**
 * Loads GA4 (only when NEXT_PUBLIC_GA_ID is configured) and tracks lead-intent
 * clicks via event delegation, so server components can stay server components —
 * any link/button with a `data-track="..."` attribute is automatically logged.
 */
export function Analytics() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const el = target?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      const name = el.dataset.track || "cta_click";
      trackEvent(name, {
        location: el.dataset.trackLocation || "unknown",
        label: el.dataset.trackLabel || el.textContent?.trim().slice(0, 80) || "",
      });
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
