import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import {
  academyGraduateOutcomesPage,
  academyGraduateProjects,
} from "@/lib/academy-graduate-outcomes";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: academyGraduateOutcomesPage.title,
  description: academyGraduateOutcomesPage.metaDescription,
  path: academyGraduateOutcomesPage.path,
  keywords: [
    "KayTech Academy graduates",
    "web development portfolio Ghana",
    "coding bootcamp outcomes Ghana",
  ],
});

export default function GraduateOutcomesPage() {
  const page = academyGraduateOutcomesPage;
  return (
    <>
      <PageHero
        eyebrow="KayTech Academy"
        title="Student projects & graduate outcomes"
        description={page.intro}
        cta={{ label: "Apply to Academy", href: "/academy/apply" }}
        secondaryCta={{ label: "Web Development 101", href: "/academy/web-development-course" }}
      />

      <section className="border-b border-hairline bg-canvas px-5 py-12 lg:px-20 lg:py-16">
        <Container>
          <p className="max-w-3xl text-sm leading-relaxed text-muted">{page.studioAlignment.body}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {page.outcomes.map((o) => (
              <article key={o.label} className="rounded-3xl border border-hairline bg-surface-soft p-5">
                <h3 className="font-semibold text-ink">{o.label}</h3>
                <p className="mt-2 text-sm text-muted">{o.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-surface-soft px-5 py-12 lg:px-20 lg:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {academyGraduateProjects.map((p) => (
              <article key={p.graduate} className="rounded-3xl border border-hairline bg-canvas p-6">
                <p className="text-xs font-semibold text-accent">Capstone</p>
                <h3 className="mt-2 font-display font-semibold text-ink">{p.projectTitle}</h3>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
                <p className="mt-3 text-xs text-muted">{p.stack.join(" · ")}</p>
                <footer className="mt-4 border-t border-hairline pt-4 text-sm">
                  <p className="font-semibold text-ink">{p.graduate}</p>
                  <p className="text-muted">{p.role}</p>
                  {p.portfolioUrl ? (
                    <Link href={p.portfolioUrl} className="mt-2 inline-block font-semibold text-primary hover:underline">
                      View live project
                    </Link>
                  ) : (
                    <p className="mt-2 text-xs text-muted">{p.permissionNote}</p>
                  )}
                </footer>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-canvas px-5 py-12 lg:px-20 lg:py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {page.testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-3xl border border-hairline bg-surface-soft p-6">
                <p className="text-sm text-ink">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-sm">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-muted">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
          <dl className="mt-12 max-w-2xl space-y-6">
            {page.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-ink">{faq.question}</dt>
                <dd className="mt-2 text-sm text-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
