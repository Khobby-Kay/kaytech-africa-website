import Link from "next/link";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LeadCaptureStripProps = {
  /** Where this strip appears — used for analytics */
  location: string;
  className?: string;
  compact?: boolean;
};

/** Always-visible conversion strip — call, WhatsApp, quote. */
export function LeadCaptureStrip({
  location,
  className,
  compact = false,
}: LeadCaptureStripProps) {
  return (
    <div
      className={cn(
        "border-b border-hairline bg-gradient-to-r from-surface-accent via-surface-soft to-surface-accent",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-5 py-3 lg:px-20",
          compact && "py-2.5",
        )}
      >
        <p
          className={cn(
            "text-sm font-medium text-ink",
            compact && "text-xs sm:text-sm",
          )}
        >
          <span className="font-semibold text-accent">Free consultation</span>
          {" · "}
          Accra-based · Serving all Ghana
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            data-track="call_click"
            data-track-location={location}
            className="inline-flex h-9 items-center gap-1.5 rounded-pill border border-hairline bg-canvas px-3.5 text-xs font-semibold text-ink transition hover:border-primary/40 sm:text-sm"
          >
            <Phone className="h-3.5 w-3.5 text-primary" />
            {siteConfig.contact.phoneDisplay}
          </a>
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp_click"
            data-track-location={location}
            className="inline-flex h-9 items-center gap-1.5 rounded-pill border border-hairline bg-canvas px-3.5 text-xs font-semibold text-ink transition hover:border-primary/40 sm:text-sm"
          >
            <MessageCircle className="h-3.5 w-3.5 text-semantic-up-deep" />
            WhatsApp
          </a>
          <Link
            href="/contact"
            data-track="get_started_click"
            data-track-location={location}
            className="inline-flex h-9 items-center gap-1.5 rounded-pill bg-gradient-to-r from-primary to-primary-light px-3.5 text-xs font-semibold text-on-primary shadow-card transition hover:brightness-110 sm:text-sm"
          >
            Get a quote
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
