"use client";

import { Container } from "@/components/ui/Container";

const quotes = [
  {
    quote:
      "KayTech didn't just build us a website — they built a system that actually converts on mobile data.",
    name: "Adaeze N.",
    role: "E-commerce founder · Accra",
    initial: "A",
  },
  {
    quote:
      "The academy gave me skills I could monetize within weeks. Practical, not theory-heavy.",
    name: "Tomide A.",
    role: "Academy graduate · Kumasi",
    initial: "T",
  },
  {
    quote:
      "Finally, a tech partner that understands MoMo, WhatsApp, and how Ghana actually does business.",
    name: "Ifeoma E.",
    role: "SME owner · Tamale",
    initial: "I",
  },
  {
    quote:
      "We shipped our MVP in six weeks. The team was responsive, and it just works.",
    name: "Kelechi O.",
    role: "Startup founder · Lagos",
    initial: "K",
  },
];

export function Testimonials() {
  const track = [...quotes, ...quotes];

  return (
    <section className="overflow-hidden border-y border-hairline bg-surface-soft py-16 lg:py-24">
      <Container>
        <h2 className="max-w-2xl font-display text-3xl tracking-tight text-ink sm:text-4xl">
          Loved by builders, founders and busy teams
        </h2>
        <p className="mt-3 text-muted">
          Built with Africans who already lived the workaround.
        </p>
      </Container>

      <div className="mt-12 overflow-hidden">
        <div className="marquee-track flex w-max gap-5 px-5 lg:px-12">
          {track.map((q, i) => (
            <blockquote
              key={`${q.name}-${i}`}
              className="w-[320px] shrink-0 rounded-3xl border border-hairline bg-canvas p-6 shadow-card sm:w-[360px]"
            >
              <p className="text-sm leading-relaxed text-ink">
                &ldquo;{q.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-surface-strong text-sm font-semibold text-ink">
                  {q.initial}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{q.name}</p>
                  <p className="text-xs text-muted">{q.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
