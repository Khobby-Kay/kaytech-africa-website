import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Search, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { LeadCaptureStrip } from "@/components/layout/LeadCaptureStrip";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords } from "@/lib/localized-seo";
import { contentImages } from "@/lib/image-seo";

const keywords = [
  "SEO packages Ghana",
  "SEO services pricing Ghana",
  "local SEO Accra",
  "Google ranking Ghana business",
  "affordable SEO Ghana",
];

export const metadata: Metadata = createPageMetadata({
  title: "SEO Packages in Ghana — Local Search & Google Rankings | KayTech Africa",
  description:
    "SEO packages for Ghana businesses — local search, on-page optimisation, and content strategy for Accra, Kumasi, and nationwide. KayTech Africa helps you rank on Google.",
  path: "/seo-packages-ghana",
  keywords: [...keywords, ...ghanaSearchKeywords],
});

const packages = [
  {
    name: "SEO foundation",
    range: "GHS 800 – 2,000 / month",
    bestFor: "New sites or businesses starting local visibility.",
    includes: [
      "Technical SEO audit & fixes",
      "On-page optimisation (core pages)",
      "Google Business Profile setup guidance",
      "Monthly performance report",
    ],
  },
  {
    name: "Local growth",
    range: "GHS 2,000 – 5,000 / month",
    bestFor: "Accra & Kumasi businesses competing for local leads.",
    includes: [
      "Everything in Foundation",
      "Local keyword targeting",
      "Content recommendations & blog support",
      "Citation & directory guidance",
      "Competitor tracking",
    ],
    featured: true,
  },
  {
    name: "Scale & dominate",
    range: "GHS 5,000+ / month",
    bestFor: "Brands targeting multiple cities or aggressive growth.",
    includes: [
      "Everything in Local growth",
      "Multi-location SEO strategy",
      "Content production support",
      "Advanced analytics & conversion tracking",
      "Dedicated strategy calls",
    ],
  },
];

const faqs = [
  {
    question: "How long until SEO results show in Ghana?",
    answer:
      "Most businesses see meaningful movement in 3–6 months depending on competition, site age, and content. KayTech sets realistic expectations and tracks progress monthly.",
  },
  {
    question: "Do I need a new website for SEO?",
    answer:
      "Not always — we can optimise existing sites. If your site is slow, outdated, or not mobile-friendly, a rebuild often delivers better ROI. See /website-cost-ghana.",
  },
  {
    question: "Do you guarantee #1 on Google?",
    answer:
      "No ethical agency guarantees rankings. We focus on sustainable visibility, qualified traffic, and leads — with transparent reporting.",
  },
];

export default function SeoPackagesGhanaPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="SEO packages for Ghana businesses"
        description="Rank when customers search your service + Accra, Kumasi, or your city. Local SEO, content, and technical foundations — scoped to your market."
        cta={{ label: "Full SEO service", href: "/services/best-seo-services-accra-ghana" }}
        secondaryCta={{ label: "Digital growth bundle", href: "/digital-growth-bundle" }}
        image={contentImages.serviceGrowth}
      />

      <LeadCaptureStrip location="seo_packages" compact />

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              SEO that matches how Ghanaians search
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Your customers search on phones — often with city names, WhatsApp
              follow-ups, and &quot;near me&quot; intent. KayTech SEO packages combine
              technical health, local visibility, and content that earns trust in
              Ghana&apos;s competitive markets.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`rounded-3xl border p-6 sm:p-8 ${
                  "featured" in pkg && pkg.featured
                    ? "border-accent/40 bg-surface-soft shadow-glow"
                    : "border-hairline bg-surface-soft"
                }`}
              >
                {"featured" in pkg && pkg.featured ? (
                  <span className="rounded-pill bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    Most popular
                  </span>
                ) : null}
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">{pkg.range}</p>
                <p className="mt-3 text-sm text-muted">{pkg.bestFor}</p>
                <ul className="mt-4 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: MapPin, title: "Local SEO", body: "Accra, Kumasi, Tema & neighbourhood targeting" },
              { icon: Search, title: "On-page & technical", body: "Speed, structure, and keyword alignment" },
              { icon: TrendingUp, title: "Measurable growth", body: "Monthly reports tied to leads, not vanity metrics" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-hairline bg-canvas p-5"
              >
                <item.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-3 font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              data-track="get_started_click"
              data-track-location="seo_packages"
              className="inline-flex h-11 items-center rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary"
            >
              Get an SEO proposal
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            FAQs — SEO in Ghana
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-hairline bg-canvas p-5 sm:p-6"
              >
                <h3 className="text-base font-semibold text-ink">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
