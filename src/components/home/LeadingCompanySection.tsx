import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { contentImages } from "@/lib/image-seo";
import { leadingCompany } from "@/lib/home-content";
import { siteConfig } from "@/lib/site";

export function LeadingCompanySection() {
  return (
    <section className="border-b border-hairline bg-canvas px-5 py-12 sm:py-16 lg:px-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <RevealOnScroll variant="fade-right">
            <div>
            <span className="inline-flex items-center gap-2 rounded-pill bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
              {leadingCompany.eyebrow}
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl lg:text-4xl">
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
                className="inline-flex h-11 items-center justify-center rounded-pill bg-gradient-to-r from-primary to-primary-light px-6 text-sm font-semibold text-on-primary shadow-card transition hover:brightness-110"
              >
                Get a free quote
              </Link>
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-pill border border-hairline bg-canvas px-6 text-sm font-semibold text-ink transition hover:border-accent/30 hover:bg-surface-accent"
              >
                View all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-left" delay={120}>
          <Media
            src={contentImages.serviceWeb.src}
            alt={contentImages.serviceWeb.alt}
            ratio="4/3"
            sizes="(max-width: 1024px) 100vw, 480px"
            className="lg:aspect-[5/4]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent"
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
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
