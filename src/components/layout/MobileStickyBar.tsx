"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-canvas/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg lg:hidden">
      <div className="grid grid-cols-3 divide-x divide-hairline">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 px-2 py-2 text-center"
          aria-label="Call KayTech Africa"
        >
          <Phone className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-semibold text-ink">Call</span>
        </a>
        <a
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 px-2 py-2 text-center"
          aria-label="WhatsApp KayTech Africa"
        >
          <MessageCircle className="h-4 w-4 text-semantic-up-deep" />
          <span className="text-[10px] font-semibold text-ink">WhatsApp</span>
        </a>
        <Link
          href="/contact"
          className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 bg-primary px-2 py-2 text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-wide text-on-primary">
            Get started
          </span>
        </Link>
      </div>
    </div>
  );
}
