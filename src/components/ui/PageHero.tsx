import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  cta,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string; external?: boolean };
}) {
  return (
    <section className="border-b border-hairline bg-surface-soft px-5 pt-28 pb-14 lg:px-20 lg:pt-36 lg:pb-20">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <span className="inline-flex items-center gap-2 rounded-pill bg-surface-strong px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-6 font-display text-4xl tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
          {cta ? (
            cta.external ? (
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-11 items-center rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
              >
                {cta.label}
              </a>
            ) : (
              <Link
                href={cta.href}
                className="mt-8 inline-flex h-11 items-center rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
              >
                {cta.label}
              </Link>
            )
          ) : null}
        </div>
      </Container>
    </section>
  );
}
