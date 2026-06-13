import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function MobileQuickCallStrip() {
  return (
    <div className="border-b border-hairline bg-primary px-5 py-3 text-on-primary lg:hidden">
      <div className="mx-auto flex max-w-site flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold leading-snug">
          Let us help your business grow!
        </p>
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="inline-flex items-center gap-2 rounded-pill bg-semantic-up px-4 py-2 text-sm font-semibold text-surface-dark"
        >
          <Phone className="h-4 w-4" />
          Quick call: {siteConfig.contact.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
