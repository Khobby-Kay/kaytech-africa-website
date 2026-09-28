import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { coreServices } from "@/lib/core-services";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords } from "@/lib/localized-seo";
import { contentImages } from "@/lib/image-seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services | Web Design, Apps, ERP & CRM in Ghana | KayTech Africa",
  description:
    "KayTech Africa services in Accra and Ghana: web design, AI automation, e-commerce, digital marketing, mobile apps, ERP, CRM, and payment integration.",
  path: "/services",
  keywords: [...ghanaSearchKeywords],
});

export default function ServicesHubPage() {
  return (
    <>
      <PageHero
        title="Services for Ghanaian businesses"
        description="Web design, AI automation, e-commerce, digital marketing, mobile apps, ERP, CRM, and payment integration. Accra-based, nationwide delivery."
        cta={{ label: "See our work", href: "/portfolio" }}
        secondaryCta={{ label: "Browse services", href: "#services-list" }}
        image={contentImages.serviceWeb}
      />

      <section className="border-b border-hairline bg-surface-soft px-5 py-12 lg:px-20 lg:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              How we scope projects in Ghana
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Each service has a dedicated page with deliverables and next steps. Not sure where to begin?{" "}
              <Link href="/contact" className="font-medium text-primary hover:underline">
                Contact us
              </Link>{" "}
              for a free discovery call.
            </p>
          </div>
        </Container>
      </section>

      <section
        id="services-list"
        className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24"
      >
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {coreServices.map((service) => (
              <article
                key={service.id}
                className="group rounded-3xl border border-hairline bg-surface-soft p-6 transition hover:border-primary/25 hover:shadow-card"
              >
                <p className="text-xs text-primary">{service.tags.join(" · ")}</p>
                <h2 className="mt-3 font-display text-xl font-semibold text-ink">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
