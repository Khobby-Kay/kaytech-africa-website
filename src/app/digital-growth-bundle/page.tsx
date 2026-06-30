import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Globe, Search, Sparkles, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { LeadCaptureStrip } from "@/components/layout/LeadCaptureStrip";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords } from "@/lib/localized-seo";
import { contentImages } from "@/lib/image-seo";

const keywords = [
  "web design and SEO package Ghana",
  "digital growth bundle Ghana",
  "website and SEO Accra",
  "web design SEO AI Ghana",
  "full digital package Ghana",
];

export const metadata: Metadata = createPageMetadata({
  title: "Digital Growth Bundle — Web Design + SEO + AI | KayTech Africa Ghana",
  description:
    "One integrated package: professional website, local SEO, and AI automation for Ghana businesses. KayTech Africa — web design, search visibility, and smart lead capture in Accra and nationwide.",
  path: "/digital-growth-bundle",
  keywords: [...keywords, ...ghanaSearchKeywords],
});

const bundleItems = [
  {
    icon: Globe,
    title: "Professional website",
    body: "Mobile-first, fast, MoMo-ready — built to convert visitors into calls and WhatsApp enquiries.",
  },
  {
    icon: Search,
    title: "Local SEO foundation",
    body: "On-page SEO, Google Business Profile guidance, and content structure so you rank for Ghana searches.",
  },
  {
    icon: Sparkles,
    title: "AI lead capture",
    body: "Smart chat or WhatsApp automation so you never miss an enquiry — even after hours.",
  },
  {
    icon: TrendingUp,
    title: "Growth roadmap",
    body: "Clear next steps — analytics, content, and campaigns — so your digital presence compounds over time.",
  },
];

const faqs = [
  {
    question: "Who is the digital growth bundle for?",
    answer:
      "SMEs, clinics, agencies, and growing brands in Ghana that want a credible website plus search visibility and automated lead capture — without juggling three separate vendors.",
  },
  {
    question: "How is pricing handled?",
    answer:
      "Every bundle is scoped to your goals. Typical combined investment starts from GHS 4,000+ depending on site complexity, SEO depth, and AI features. Request a quote for your exact figure.",
  },
  {
    question: "Do you serve businesses outside Accra?",
    answer:
      "Yes — KayTech delivers nationwide from our Accra studio via phone, WhatsApp, and video.",
  },
];

export default function DigitalGrowthBundlePage() {
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
        title="Digital growth bundle for Ghana businesses"
        description="Website + SEO + AI in one coordinated package — so you launch fast, get found on Google, and capture leads around the clock."
        cta={{ label: "See our work", href: "/portfolio" }}
        secondaryCta={{ label: "Website cost guide", href: "/website-cost-ghana" }}
        image={contentImages.serviceGrowth}
      />

      <LeadCaptureStrip location="digital_growth_bundle" compact />

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              One partner, three growth engines
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Most Ghanaian businesses buy a website, then struggle with SEO, then
              wonder why leads slip through the cracks. KayTech&apos;s digital growth
              bundle aligns design, search, and automation from day one — the same
              studio that builds your site also structures it to rank and captures
              enquiries with AI.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {bundleItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-hairline bg-surface-soft p-6"
              >
                <item.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>

          <ul className="mt-10 space-y-2">
            {[
              "Custom mobile-first website",
              "MoMo & Paystack payment setup (where needed)",
              "Core on-page SEO & technical foundations",
              "Google Business Profile optimisation guidance",
              "AI chat or WhatsApp lead assistant",
              "Analytics & conversion tracking",
              "Training & post-launch support",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              data-track="get_started_click"
              data-track-location="digital_growth_bundle"
              className="inline-flex h-11 items-center rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary"
            >
              Request bundle quote
            </Link>
            <Link
              href="/services/best-seo-services-accra-ghana"
              className="inline-flex h-11 items-center rounded-pill border border-hairline bg-canvas px-6 text-sm font-semibold text-ink"
            >
              SEO services
            </Link>
            <Link
              href="/ai-automation"
              className="inline-flex h-11 items-center rounded-pill border border-hairline bg-canvas px-6 text-sm font-semibold text-ink"
            >
              AI automation
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            FAQs
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
