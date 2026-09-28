"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-3 bottom-[calc(0.5rem+env(safe-area-inset-bottom))] z-50 lg:hidden">
      <div className="glass grid grid-cols-3 items-center gap-1 rounded-full p-1.5">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex h-11 items-center justify-center gap-1.5 rounded-full text-center transition active:scale-95 active:bg-white/60"
          aria-label="Call KayTech Africa"
          data-track="call_click"
          data-track-location="mobile_sticky_bar"
        >
          <Phone className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold text-ink">Call</span>
        </a>
        <a
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 items-center justify-center gap-1.5 rounded-full text-center transition active:scale-95 active:bg-white/60"
          aria-label="WhatsApp KayTech Africa"
          data-track="whatsapp_click"
          data-track-location="mobile_sticky_bar"
        >
          <MessageCircle className="h-4 w-4 text-semantic-up-deep" />
          <span className="text-xs font-semibold text-ink">WhatsApp</span>
        </a>
        <Link
          href="/contact"
          className="flex h-11 items-center justify-center rounded-full bg-primary text-center shadow-[0_6px_16px_-6px_rgba(26,73,113,0.6)] transition active:scale-95"
          data-track="get_started_click"
          data-track-location="mobile_sticky_bar"
        >
          <span className="text-xs font-semibold text-on-primary">Get quote</span>
        </Link>
      </div>
    </div>
  );
}
