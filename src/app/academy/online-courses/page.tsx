import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AcademyApplicationForm } from "@/components/academy/AcademyApplicationForm";
import { academyOnlineHub } from "@/lib/academy-courses";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: academyOnlineHub.title,
  description: academyOnlineHub.metaDescription,
  path: academyOnlineHub.path,
  keywords: [
    "learn web development Ghana online",
    "online coding course Ghana",
    "online digital marketing course Ghana",
    "KayTech Academy online",
  ],
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: academyOnlineHub.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function AcademyOnlineCoursesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="KayTech Academy · Online"
        title={academyOnlineHub.heroTitle}
        description={academyOnlineHub.quickAnswer}
        cta={{ label: "Apply online", href: "/academy/apply" }}
        secondaryCta={{ label: "Academy hub", href: "/academy" }}
      />

      <section className="border-b border-hairline bg-canvas px-5 py-12 lg:px-20 lg:py-16">
        <Container>
          <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
            Four tracks, all available online
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {academyOnlineHub.courses.map((course) => (
              <Link
                key={course.path}
                href={course.path}
                className="group flex flex-col rounded-3xl border border-hairline bg-surface-soft p-6 transition-shadow hover:shadow-card"
              >
                <p className="text-sm text-muted">
                  {course.level} · {course.duration}
                </p>
                <p className="mt-2 font-display text-xl tracking-tight text-ink">
                  {course.shortTitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {course.outcomes[0]}. {course.outcomes[1]}.
                </p>
                <p className="mt-auto flex items-center justify-between pt-5 text-sm">
                  <span className="font-semibold text-ink">
                    GHS {course.feeGhs.toLocaleString("en-GH")}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-primary group-hover:underline">
                    Syllabus and dates
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-12 lg:px-20 lg:py-16">
        <Container>
          <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
            How an online week runs
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {academyOnlineHub.howItWorks.map((item) => (
              <div key={item.title} className="rounded-3xl border border-hairline bg-canvas p-6">
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {academyOnlineHub.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-ink">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                {h}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-12 lg:px-20 lg:py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              What you need at home
            </h2>
            <ul className="mt-6 space-y-3">
              {academyOnlineHub.requirements.map((r) => (
                <li key={r} className="flex gap-3 text-sm text-ink">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Fees can be split into instalments.{" "}
              <Link
                href="/academy/scholarships-payment-plans"
                className="font-semibold text-primary hover:underline"
              >
                Scholarships and payment plans
              </Link>
            </p>
          </div>
          <dl className="space-y-6">
            {academyOnlineHub.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-ink">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section id="apply-form" className="bg-surface-accent px-5 py-12 lg:px-20 lg:py-16 scroll-mt-28">
        <Container className="max-w-xl">
          <p className="text-sm text-muted">Pick your course. Admissions confirms online vs on-site on your call.</p>
          <div className="mt-6">
            <AcademyApplicationForm location="academy_online" compact />
          </div>
          <Link
            href="/academy/apply"
            className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
          >
            Open full application page
          </Link>
        </Container>
      </section>
    </>
  );
}
