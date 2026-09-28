"use client";

import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { homepageTestimonials } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <section className="border-y border-hairline bg-surface-soft py-16 lg:py-24">
      <Container>
        <RevealOnScroll variant="fade-up">
          <h2 className="max-w-2xl font-display text-3xl tracking-tight text-ink sm:text-4xl">
            What clients and graduates say
          </h2>
          <p className="mt-3 text-muted">
            Full names shared with permission. no recycled or anonymous quotes.
          </p>
        </RevealOnScroll>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {homepageTestimonials.map((q) => (
            <blockquote
              key={q.name}
              className="rounded-3xl border border-hairline bg-canvas p-6 shadow-card"
            >
              <p className="text-sm leading-relaxed text-ink">
                &ldquo;{q.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="text-sm font-medium text-ink">{q.name}</p>
                <p className="text-xs text-muted">{q.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
