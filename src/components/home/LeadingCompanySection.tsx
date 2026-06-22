import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { contentImages } from "@/lib/image-seo";
import { leadingCompany } from "@/lib/home-content";

export function LeadingCompanySection() {
  return (
    <section className="border-b border-hairline bg-canvas px-5 py-12 sm:py-16 lg:px-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-pill bg-surface-strong px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-primary">
              {leadingCompany.eyebrow}
            </span>
            <h2 className="mt-5 font-display text-xl leading-tight tracking-tight text-ink sm:text-3xl lg:text-4xl">
              {leadingCompany.title}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
              {leadingCompany.intro}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {leadingCompany.secondary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
              >
                Get a quote
              </Link>
              <Link
                href="/features"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-pill border border-hairline px-6 text-sm font-semibold text-ink transition hover:bg-surface-soft"
              >
                View all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <Media
            src={contentImages.serviceWeb.src}
            alt={contentImages.serviceWeb.alt}
            ratio="4/3"
            sizes="(max-width: 1024px) 100vw, 480px"
            className="lg:aspect-[5/4]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-on-dark">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-on-dark/80">
                Accra · Ghana
              </p>
              <p className="mt-2 font-display text-xl font-semibold sm:text-2xl">
                Websites that rank higher and sell more
              </p>
              <p className="mt-2 text-sm text-on-dark/85">
                Quick call: {siteConfig.contact.phoneDisplay}
              </p>
            </div>
          </Media>
        </div>
      </Container>
    </section>
  );
}
