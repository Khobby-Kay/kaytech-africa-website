import Link from "next/link";
import {
  ArrowRight,
  Check,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { pageImages } from "@/lib/page-images";
import {
  aiAutomationDemo,
  aiAutomationExpandedMeta,
  aiAutomationFaqs,
  aiComparisonRows,
  aiIndustryPatterns,
  aiKeepVsLose,
  aiPricingTiers,
  aiProcessSteps,
  aiProductSurfaces,
  aiSixDeliverables,
} from "@/lib/ai-automation-content";
import { getAllCaseStudies, getCaseStudyPath } from "@/lib/portfolio";
import { coreServices } from "@/lib/core-services";
import { siteConfig } from "@/lib/site";

const relatedServiceIds = ["ecommerce", "crm", "marketing"] as const;

export function AiAutomationPageContent() {
  const caseStudies = getAllCaseStudies().slice(0, 3);
  const related = coreServices.filter((s) =>
    (relatedServiceIds as readonly string[]).includes(s.id),
  );

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="border-b border-hairline bg-surface-soft px-5 py-3 lg:px-20"
      >
        <Container>
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/services" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-ink">AI Automation</li>
          </ol>
        </Container>
      </nav>

      <PageHero
        title={aiAutomationExpandedMeta.heroTitle}
        description={aiAutomationExpandedMeta.heroDescription}
        cta={{
          label: aiAutomationDemo.ctaLabel,
          href: aiAutomationDemo.ctaHref,
          external: true,
        }}
        secondaryCta={{
          label: `Call ${siteConfig.contact.phoneDisplay}`,
          href: `tel:${siteConfig.contact.phone}`,
        }}
        image={pageImages.aiAutomation}
        footnote={
          <span>
            {aiAutomationDemo.headline}. {aiAutomationDemo.body}
          </span>
        }
      />

      <section
        id="product-surfaces"
        className="border-b border-hairline bg-canvas px-5 py-14 lg:px-20 lg:py-20"
      >
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Product surfaces we ship
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              WhatsApp, web chat, and the board that keeps handoff honest.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aiProductSurfaces.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group flex flex-col rounded-3xl border border-hairline bg-surface-soft p-5 transition hover:border-primary/30 hover:shadow-card"
              >
                <p className="text-xs font-medium text-primary">{item.subtitle}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  See more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-14 lg:px-20 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              {aiKeepVsLose.headline}
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              Why bots fail in Ghana, and what a KayTech build keeps instead.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-hairline bg-canvas p-6">
              <p className="text-sm font-semibold text-semantic-up-deep">
                What you keep
              </p>
              <ul className="mt-4 space-y-3">
                {aiKeepVsLose.keep.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2 text-sm leading-relaxed text-ink"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-semantic-up" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-hairline bg-canvas p-6">
              <p className="text-sm font-semibold text-muted">What you lose</p>
              <ul className="mt-4 space-y-3">
                {aiKeepVsLose.lose.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2 text-sm leading-relaxed text-muted"
                  >
                    <X className="mt-0.5 h-4 w-4 shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-14 lg:px-20 lg:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Where it sits
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
            The channel they already use. Stores, hotels, schools, and support
            desks on the same WhatsApp number.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiIndustryPatterns.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-3xl border border-hairline bg-surface-soft p-5 transition hover:border-accent/40"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
                <span className="mt-3 inline-flex text-sm font-semibold text-primary">
                  See this brief
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="six-things"
        className="border-b border-hairline bg-primary px-5 py-14 text-on-primary lg:px-20 lg:py-20"
      >
        <Container>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Six things a GHS 5,000 assistant must do
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiSixDeliverables.map((item) => (
              <Link
                key={item.num}
                href={item.href}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/15"
              >
                <p className="font-display text-3xl font-bold text-accent">
                  {item.num}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-on-primary/85">{item.body}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-14 lg:px-20 lg:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                Featured work
              </h2>
              <p className="mt-2 text-sm text-muted">
                Web and automation shipped for Ghanaian brands.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Full portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={getCaseStudyPath(study.slug)}
                className="rounded-3xl border border-hairline bg-canvas p-6 transition hover:shadow-card"
              >
                <p className="text-xs text-muted">
                  {study.sector} · {study.location}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {study.client}
                </h3>
                <p className="mt-2 text-sm text-muted">{study.headline}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-14 lg:px-20 lg:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Custom AI vs off-the-shelf vs more staff
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
            How Ghanaian teams usually handle growing chat volume.
          </p>
          <div className="mt-8 overflow-x-auto rounded-3xl border border-hairline">
            <table className="min-w-[640px] w-full text-left text-sm">
              <thead className="bg-surface-soft">
                <tr>
                  <th className="p-4 font-semibold text-ink"> </th>
                  <th className="p-4 font-semibold text-primary">
                    KayTech custom AI
                  </th>
                  <th className="p-4 font-semibold text-muted">SaaS bots</th>
                  <th className="p-4 font-semibold text-muted">More staff</th>
                </tr>
              </thead>
              <tbody>
                {aiComparisonRows.map((row) => (
                  <tr key={row.label} className="border-t border-hairline">
                    <td className="p-4 font-medium text-ink">{row.label}</td>
                    <td className="p-4 text-ink">{row.custom}</td>
                    <td className="p-4 text-muted">{row.saas}</td>
                    <td className="p-4 text-muted">{row.staff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-14 lg:px-20 lg:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            From audit to working AI in 4 to 12 weeks
          </h2>
          <ol className="mt-10 space-y-6">
            {aiProcessSteps.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-3xl border border-hairline bg-canvas p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display font-semibold text-primary">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        id="pricing"
        className="border-b border-hairline bg-canvas px-5 py-14 lg:px-20 lg:py-20"
      >
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            AI automation packages in Ghana
          </h2>
          <p className="mt-3 text-sm text-muted sm:text-base">
            One-time investment where possible. You own the scoped system. 50%
            upfront, 50% on launch. Fixed price in writing.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {aiPricingTiers.map((tier) => (
              <article
                key={tier.id}
                className={`relative flex flex-col rounded-3xl border p-6 ${
                  tier.popular
                    ? "border-accent bg-surface-accent shadow-glow"
                    : "border-hairline bg-surface-soft"
                }`}
              >
                {tier.popular ? (
                  <span className="absolute -top-3 left-6 rounded-pill bg-accent px-3 py-0.5 text-xs font-semibold text-white">
                    Most popular
                  </span>
                ) : null}
                <h3 className="font-display text-xl font-semibold text-ink">
                  {tier.name}
                </h3>
                <p className="mt-2 font-display text-3xl font-bold text-primary">
                  {tier.price}
                </p>
                <p className="mt-2 text-sm text-muted">{tier.summary}</p>
                <ul className="mt-6 flex-1 space-y-2">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2 text-sm text-ink"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-semantic-up" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-pill bg-primary text-sm font-semibold text-on-primary hover:bg-primary-deep"
                >
                  Get started
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-14 lg:px-20 lg:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            AI automation questions, answered
          </h2>
          <div className="mt-8 space-y-4">
            {aiAutomationFaqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-3xl border border-hairline bg-canvas p-6"
              >
                <h3 className="font-semibold text-ink">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-14 lg:px-20 lg:py-20">
        <Container>
          <h2 className="font-display text-xl font-semibold text-ink">
            Pair your AI with the right services
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="rounded-3xl border border-hairline bg-surface-soft p-5 transition hover:border-primary/25"
              >
                <h3 className="font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm text-muted">{service.description}</p>
                <span className="mt-3 inline-flex text-sm font-semibold text-primary">
                  Explore service
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-primary px-5 py-14 text-on-primary lg:px-20 lg:py-20">
        <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Ready to put AI to work?
            </h2>
            <p className="mt-3 text-sm text-on-primary/85 sm:text-base">
              WhatsApp the brief. Fixed GHS quote. WhatsApp AI trained on your
              catalogue with human handoff from GHS 5,000.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-pill bg-on-primary px-6 text-sm font-semibold text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp this brief
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-pill border border-white/30 px-6 text-sm font-semibold"
            >
              <Phone className="h-4 w-4" />
              Call {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
