import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Headphones,
  Layers,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { whyKayTechHighlights } from "@/lib/home-content";
import { stats } from "@/lib/site";

const iconMap: Record<(typeof whyKayTechHighlights)[number]["icon"], LucideIcon> =
  {
    Layers,
    Users,
    Headphones,
    GraduationCap,
  };

export function WhyKayTechHome() {
  return (
    <section
      id="why"
      className="border-b border-hairline bg-canvas px-5 py-12 sm:py-16 lg:px-20 lg:py-24"
    >
      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-pill bg-surface-strong px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink">
            Why KayTech
          </span>
          <h2 className="mt-4 font-display text-2xl tracking-tight text-ink sm:mt-6 sm:text-4xl lg:text-5xl">
            Africa runs on ambition. Your stack should keep up.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-lg">
            We are a full-service digital studio in Accra — web design, SEO,
            e-commerce, and growth systems for brands that need results, not
            templates.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-10 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-hairline bg-surface-soft p-3 sm:p-5"
            >
              <p className="font-display text-xl font-semibold text-ink sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] text-muted sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {whyKayTechHighlights.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <article
                key={item.title}
                className="rounded-3xl border border-hairline bg-surface-soft p-5 sm:p-6"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>

        <Link
          href="/about"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline sm:mt-10"
        >
          Meet the team
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Container>
    </section>
  );
}
