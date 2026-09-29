import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Media } from "@/components/ui/Media";
import type { AcademyCourseDefinition } from "@/lib/academy-courses";
import { AcademyApplicationForm } from "@/components/academy/AcademyApplicationForm";

type Props = {
  course: AcademyCourseDefinition;
};

export function AcademyCoursePageContent({ course }: Props) {
  return (
    <>
      <PageHero
        eyebrow="KayTech Academy"
        title={course.shortTitle}
        description={course.quickAnswer}
        secondaryCta={{ label: "Academy hub", href: "/academy" }}
        cta={{ label: "Apply", href: "#apply-form" }}
      />

      <section className="border-b border-hairline bg-surface-accent px-5 py-6 lg:px-20">
        <Container className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <p className="font-display text-2xl font-bold text-primary">
            GHS {course.feeGhs.toLocaleString("en-GH")}
          </p>
          <p className="text-sm text-muted">
            {course.duration} · {course.level}
          </p>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-12 lg:px-20 lg:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            {course.overview.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-sm leading-relaxed text-muted sm:text-base first:mt-0">
                {p}
              </p>
            ))}
            <ul className="mt-8 space-y-2">
              {course.outcomes.map((o) => (
                <li key={o} className="flex gap-2 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {o}
                </li>
              ))}
            </ul>
            <Link
              href="/academy/scholarships-payment-plans"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Scholarships & payment plans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <Media
            src={course.image.src}
            alt={course.image.alt}
            ratio="4/3"
            sizes="(max-width: 1024px) 100vw, 480px"
          />
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-12 lg:px-20 lg:py-16">
        <Container>
          <div className="space-y-6">
            {course.syllabus.map((block) => (
              <article
                key={block.module}
                className="rounded-3xl border border-hairline bg-canvas p-6"
              >
                <h3 className="font-display font-semibold text-ink">{block.module}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {block.topics.map((t) => (
                    <li
                      key={t}
                      className="rounded-pill bg-surface-soft px-3 py-1 text-xs font-medium text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-12 lg:px-20 lg:py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <ul className="space-y-4">
            {course.schedule.map((s) => (
              <li key={s.label} className="rounded-2xl border border-hairline bg-surface-soft p-4">
                <p className="font-semibold text-ink">{s.label}</p>
                <p className="mt-1 text-sm text-muted">{s.detail}</p>
              </li>
            ))}
            <li className="text-sm text-muted">
              Outside Accra?{" "}
              <Link href="/academy/online-courses" className="font-semibold text-primary hover:underline">
                Live online cohorts
              </Link>
            </li>
          </ul>
          <ul className="space-y-4">
            {course.cohorts.map((c) => (
              <li key={c.label} className="rounded-2xl border border-hairline bg-surface-soft p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold text-ink">{c.label}</p>
                  <span
                    className={
                      c.status === "open"
                        ? "rounded-pill bg-semantic-up/15 px-2 py-0.5 text-xs font-semibold text-semantic-up-deep"
                        : "rounded-pill bg-surface-accent px-2 py-0.5 text-xs font-semibold text-accent"
                    }
                  >
                    {c.status === "open" ? "Open" : "Waitlist"}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">
                  Starts {c.start}. Apply by {c.applyBy}.
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        id="apply-form"
        className="border-b border-hairline bg-surface-accent px-5 py-12 lg:px-20 lg:py-16 scroll-mt-28"
      >
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <p className="text-sm text-muted">
            Ten seats per cohort. Shortlisted applicants get a call from admissions.{" "}
            <Link href="/academy/graduate-outcomes" className="font-semibold text-primary hover:underline">
              Graduate work
            </Link>
          </p>
          <AcademyApplicationForm
            defaultCourse={course.applyLabel}
            location={`course_${course.slug}`}
            compact
          />
        </Container>
      </section>

      {course.faqs.length > 0 ? (
        <section className="bg-canvas px-5 py-12 lg:px-20 lg:py-16">
          <Container>
            <dl className="space-y-6">
              {course.faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-ink">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      ) : null}
    </>
  );
}
