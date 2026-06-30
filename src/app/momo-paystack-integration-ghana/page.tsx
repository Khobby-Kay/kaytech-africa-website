import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, CreditCard, Smartphone, Wallet } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { LeadCaptureStrip } from "@/components/layout/LeadCaptureStrip";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords } from "@/lib/localized-seo";
import { contentImages } from "@/lib/image-seo";

const keywords = [
  "MoMo payment integration Ghana website",
  "Paystack integration Ghana",
  "Mobile Money checkout Ghana",
  "e-commerce MoMo Ghana",
  "Flutterwave Ghana website",
];

export const metadata: Metadata = createPageMetadata({
  title: "MoMo & Paystack Payment Integration for Ghana Websites | KayTech Africa",
  description:
    "Accept Mobile Money, cards, and bank payments on your Ghana website. KayTech integrates MoMo, Paystack, and Flutterwave for e-commerce, donations, and bookings.",
  path: "/momo-paystack-integration-ghana",
  keywords: [...keywords, ...ghanaSearchKeywords],
});

const paymentMethods = [
  {
    icon: Smartphone,
    title: "MTN MoMo & Telecel Cash",
    body: "The payment methods most Ghanaian customers use daily — integrated at checkout or via USSD-friendly flows.",
  },
  {
    icon: CreditCard,
    title: "Visa & Mastercard",
    body: "Card payments via Paystack or Flutterwave for diaspora customers and card-first buyers.",
  },
  {
    icon: Wallet,
    title: "Bank & mobile wallets",
    body: "Secure checkout options that match how your audience actually pays online in Ghana.",
  },
];

const useCases = [
  "E-commerce stores selling products nationwide",
  "Churches & NGOs collecting tithes, offerings, and donations",
  "Schools accepting fees and application payments",
  "Hotels & restaurants taking deposits or orders",
  "Service businesses collecting booking fees upfront",
];

const faqs = [
  {
    question: "Which payment gateway do you recommend in Ghana?",
    answer:
      "Paystack and Flutterwave are both widely used in Ghana. We recommend based on your volume, industry, and whether you need MoMo, cards, or both. KayTech handles the full integration.",
  },
  {
    question: "Can customers pay with Mobile Money only?",
    answer:
      "Yes. We can configure MoMo-first checkout for audiences that prefer it, while keeping card options for others.",
  },
  {
    question: "How much does payment integration cost?",
    answer:
      "Integration is scoped with your website or store build. Gateway fees are set by Paystack/Flutterwave — we explain those clearly before launch.",
  },
];

export default function MomoPaystackPage() {
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
        title="MoMo & Paystack integration for Ghana websites"
        description="Let customers pay the way they already do — Mobile Money, cards, and secure checkout built into your site or store."
        cta={{ label: "E-commerce services", href: "/services/best-ecommerce-development-accra-ghana" }}
        secondaryCta={{ label: "See our work", href: "/portfolio" }}
        image={contentImages.principleMomo}
      />

      <LeadCaptureStrip location="momo_paystack" compact />

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Payments built for how Ghana pays
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              A beautiful website means little if checkout fails or confuses
              customers. KayTech integrates MoMo, Paystack, and Flutterwave so
              payments feel familiar, secure, and fast on mobile — where most of
              your traffic comes from.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {paymentMethods.map((item) => (
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

          <h3 className="mt-12 font-display text-xl font-semibold text-ink">
            Common use cases
          </h3>
          <ul className="mt-4 space-y-2">
            {useCases.map((item) => (
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
              data-track-location="momo_paystack"
              className="inline-flex h-11 items-center rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary"
            >
              Discuss payment setup
            </Link>
            <Link
              href="/industry/church-website-design-ghana"
              className="inline-flex h-11 items-center rounded-pill border border-hairline bg-canvas px-6 text-sm font-semibold text-ink"
            >
              Church giving sites
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-16 lg:px-20 lg:py-24">
        <Container>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            FAQs — MoMo & Paystack in Ghana
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
