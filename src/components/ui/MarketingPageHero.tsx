import Link from "next/link";
import { CircleCheck, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/site";

type MarketingPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  imageCaption: string;
  location: string;
};

/** Full-bleed hero — same image treatment as the homepage, with page-specific copy. */
export function MarketingPageHero({
  eyebrow,
  title,
  description,
  image,
  imageCaption,
  location,
}: MarketingPageHeroProps) {
  return (
    <PageHero
      eyebrow={eyebrow}
      title={title}
      description={description}
      image={image}
      imageCaption={imageCaption}
      imageCaptionMeta={location}
      actions={
        <>
          <Link
            href="/contact"
            data-track="get_started_click"
            data-track-location="marketing_hero"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-semantic-up px-6 text-base font-semibold tracking-[-0.005em] text-surface-dark transition hover:brightness-110 sm:h-12 sm:px-8"
          >
            Get a free quote
          </Link>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            data-track="call_click"
            data-track-location="marketing_hero"
            className="inline-flex h-11 min-w-[8.75rem] items-center gap-2.5 rounded-lg border border-white/90 px-3.5 text-white transition hover:opacity-85"
          >
            <Phone className="h-6 w-6 shrink-0" />
            <span className="flex flex-col leading-none text-left">
              <span className="text-[9px] font-medium tracking-wide opacity-90">
                Quick call
              </span>
              <span className="mt-0.5 text-[15px] font-semibold tracking-tight">
                {siteConfig.contact.phoneDisplay}
              </span>
            </span>
          </a>
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp_click"
            data-track-location="marketing_hero"
            className="inline-flex h-11 min-w-[8.75rem] items-center gap-2.5 rounded-lg border border-white/90 px-3.5 text-white transition hover:opacity-85"
          >
            <MessageCircle className="h-6 w-6 shrink-0" />
            <span className="flex flex-col leading-none text-left">
              <span className="text-[9px] font-medium tracking-wide opacity-90">
                Chat on
              </span>
              <span className="mt-0.5 text-[15px] font-semibold tracking-tight">
                WhatsApp
              </span>
            </span>
          </a>
        </>
      }
      footnote={
        <span className="inline-flex items-center gap-2">
          <CircleCheck className="h-4 w-4 text-semantic-up" />
          Free consultation · {location}
        </span>
      }
    />
  );
}
