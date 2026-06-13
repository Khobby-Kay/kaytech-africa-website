import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { leadership } from "@/lib/site";

export function LeadershipSection() {
  const { ceo, team } = leadership;

  return (
    <section id="leadership" className="border-y border-hairline bg-canvas px-5 py-16 lg:px-20 lg:py-32">
      <Container>
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-pill bg-surface-strong px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink">
            Leadership
          </span>
          <h2 className="mt-6 font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Built by African builders.
          </h2>
          <p className="mt-4 text-lg text-muted">
            KayTech is led from Accra by practitioners shipping real systems —
            not slide decks.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="overflow-hidden rounded-3xl border border-hairline bg-surface-soft shadow-card">
            <div className="grid md:grid-cols-[280px_1fr]">
              <div className="relative aspect-[4/5] min-h-[280px] md:min-h-[360px]">
                <Image
                  src={ceo.image}
                  alt={ceo.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-primary">
                  {ceo.title}
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">
                  {ceo.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {ceo.bio}
                </p>
                <Link
                  href={ceo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Connect on LinkedIn
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>

          <div className="grid gap-5">
            {team.map((member) => (
              <article
                key={member.name}
                className="flex items-center gap-4 rounded-3xl border border-hairline bg-surface-soft p-4 shadow-card"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-semibold text-ink">{member.name}</p>
                  <p className="text-sm text-muted">{member.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
