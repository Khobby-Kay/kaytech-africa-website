import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FAQ } from "@/components/home/FAQ";
import { academyCourses, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Academy — Learn Web, Marketing & AI",
  description:
    "KayTech Academy trains the next generation in web design, web development, digital marketing, AI automation, and more — based in Accra, Ghana.",
};

const benefits = [
  "Live sessions with working practitioners",
  "Portfolio-ready projects, not toy exercises",
  "Cohort-based learning with peer support",
  "Career & freelance business coaching included",
  "Certificate on completion",
  "Access to KayTech client referral network",
];

export default function AcademyPage() {
  return (
    <>
      <section className="border-b border-hairline bg-surface-soft px-5 pt-28 pb-16 lg:px-20 lg:pt-36 lg:pb-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-pill bg-surface-strong px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink">
              KayTech Academy
            </span>
            <h1 className="mt-6 font-display text-4xl tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Skills that pay. Taught by builders.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Practical programs in web design, development, digital marketing,
              AI, and more — designed for Ghanaian and African learners who want
              real income, not just certificates.
            </p>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-pill bg-primary px-8 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
            >
              Enroll or ask about cohorts
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-pill bg-surface-strong px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink">
                Why learn with us
              </span>
              <h2 className="mt-6 font-display text-3xl tracking-tight text-ink sm:text-4xl">
                The academy is an extension of our studio
              </h2>
              <p className="mt-4 text-muted">
                Everything we teach is what we use daily for clients — modern
                stacks, African market context, and delivery skills that get you
                hired.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 rounded-2xl border border-hairline bg-surface-soft p-4 text-sm text-muted"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-semantic-up-deep" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-canvas px-5 py-20 lg:px-20 lg:py-28">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-pill bg-surface-strong px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink">
              Programs
            </span>
            <h2 className="mt-6 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Choose your track
            </h2>
            <p className="mt-4 text-muted">
              Flexible cohorts — online-first with optional in-person workshops
              in Accra.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {academyCourses.map((course) => (
              <article
                key={course.slug}
                className="flex flex-col rounded-3xl border border-hairline bg-surface-soft p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-pill bg-canvas px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary ring-1 ring-hairline">
                    {course.level}
                  </span>
                  <span className="text-xs text-muted">{course.duration}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
                  {course.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {course.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {course.outcomes.map((o) => (
                    <span
                      key={o}
                      className="rounded-pill border border-hairline bg-canvas px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
                    >
                      {o}
                    </span>
                  ))}
                </div>
                <a
                  href={`${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hi KayTech! I'm interested in the ${course.title} academy program.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Request syllabus
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted">
            Custom corporate training available.{" "}
            <Link href="/contact" className="text-ink hover:underline">
              Contact us
            </Link>{" "}
            for team packages.
          </p>
        </Container>
      </section>

      <FAQ limit={4} />
    </>
  );
}
