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
    "KayTech Academy online",
  ],
});

export default function AcademyOnlineCoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="KayTech Academy · Online"
        title={academyOnlineHub.title}
        description={academyOnlineHub.quickAnswer}
        cta={{ label: "Apply online", href: "#apply" }}
        secondaryCta={{ label: "Academy hub", href: "/academy" }}
      />

      <section className="border-b border-hairline bg-canvas px-5 py-12 lg:px-20 lg:py-16">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2">
            {academyOnlineHub.highlights.map((h) => (
              <li key={h} className="flex gap-3 rounded-2xl border border-hairline bg-surface-soft p-5 text-sm text-ink">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            {academyOnlineHub.courses.map((href) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-surface-soft px-5 py-2.5 text-sm font-semibold text-primary hover:border-accent/40"
              >
                View course
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="apply" className="bg-surface-accent px-5 py-12 lg:px-20 lg:py-16 scroll-mt-28">
        <Container className="max-w-xl">
          <p className="text-sm text-muted">Pick your course. Admissions confirms online vs on-site on your call.</p>
          <div className="mt-6">
            <AcademyApplicationForm location="academy_online" compact />
          </div>
        </Container>
      </section>
    </>
  );
}
