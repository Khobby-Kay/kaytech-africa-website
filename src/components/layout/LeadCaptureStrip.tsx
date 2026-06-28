import Link from "next/link";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LeadCaptureStripProps = {
  /** Where this strip appears — used for analytics */
  location: string;
  className?: string;
  compact?: boolean;
  /** Hide the entire strip on mobile (e.g. when hero already has CTAs + sticky bar) */
  hideOnMobile?: boolean;
};

/** Always-visible conversion strip — call, WhatsApp, quote. */
export function LeadCaptureStrip({
  location,
  className,
  compact = false,
  hideOnMobile = false,
}: LeadCaptureStripProps) {
  return (
    <div
      className={cn(
        "border-b border-hairline bg-gradient-to-r from-surface-accent via-surface-soft to-surface-accent",
        hideOnMobile && "hidden lg:block",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:px-20",
          compact && "py-2.5",
        )}
      >
        <p
          className={cn(
            "text-center text-sm font-medium text-ink sm:text-left",
            compact && "text-xs sm:text-sm",
          )}
        >
          <span className="font-semibold text-accent">Free consultation</span>
          {" · "}
          Accra-based · Serving all Ghana
        </p>
        <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-2">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            data-track="call_click"
            data-track-location={location}
            className="inline-flex h-10 min-h-[44px] items-center justify-center gap-1 rounded-pill border border-hairline bg-canvas px-2 text-[11px] font-semibold text-ink transition hover:border-primary/40 sm:h-9 sm:gap-1.5 sm:px-3.5 sm:text-sm"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="hidden min-[400px]:inline">{siteConfig.contact.phoneDisplay}</span>
            <span className="min-[400px]:hidden">Call</span>
          </a>
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp_click"
            data-track-location={location}
            className="inline-flex h-10 min-h-[44px] items-center justify-center gap-1 rounded-pill border border-hairline bg-canvas px-2 text-[11px] font-semibold text-ink transition hover:border-primary/40 sm:h-9 sm:gap-1.5 sm:px-3.5 sm:text-sm"
          >
            <MessageCircle className="h-3.5 w-3.5 shrink-0 text-semantic-up-deep" />
            WhatsApp
          </a>
          <Link
            href="/contact"
            data-track="get_started_click"
            data-track-location={location}
            className="inline-flex h-10 min-h-[44px] items-center justify-center gap-1 rounded-pill bg-gradient-to-r from-primary to-primary-light px-2 text-[11px] font-semibold text-on-primary shadow-card transition hover:brightness-110 sm:h-9 sm:gap-1.5 sm:px-3.5 sm:text-sm"
          >
            <span className="truncate">Get quote</span>
            <ArrowRight className="hidden h-3.5 w-3.5 sm:block" />
          </Link>
        </div>
      </div>
    </div>
  );
}
