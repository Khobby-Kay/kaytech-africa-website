import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";

export function PageHero({
  eyebrow,
  title,
  description,
  cta,
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string; external?: boolean };
  image?: { src: string; alt: string };
}) {
  const ctaClass =
    "mt-7 inline-flex h-12 items-center rounded-pill bg-gradient-to-r from-primary to-primary-light px-7 text-sm font-semibold text-on-primary shadow-card transition hover:brightness-110 sm:mt-8";

  return (
    <section className="relative overflow-hidden border-b border-hairline bg-gradient-to-br from-surface-soft via-canvas to-surface-accent px-5 pt-24 pb-12 sm:pt-28 lg:px-20 lg:pt-32 lg:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />
      <Container className="relative">
        <div
          className={
            image
              ? "grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              : "max-w-3xl"
          }
        >
          <div className={image ? "max-w-xl" : undefined}>
            {eyebrow ? (
              <span className="inline-flex items-center gap-2 rounded-pill bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                {eyebrow}
              </span>
            ) : null}
            <h1 className="mt-5 font-display text-[2rem] font-bold leading-[1.12] tracking-tight text-ink sm:mt-6 sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 text-base leading-relaxed text-muted sm:mt-5 sm:text-lg lg:text-xl">
                {description}
              </p>
            ) : null}
            {cta ? (
              cta.external ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ctaClass}
                >
                  {cta.label}
                </a>
              ) : (
                <Link href={cta.href} className={ctaClass}>
                  {cta.label}
                </Link>
              )
            ) : null}
          </div>

          {image ? (
            <Media
              src={image.src}
              alt={image.alt}
              ratio="4/3"
              priority
              sizes="(max-width: 1024px) 100vw, 540px"
              className="lg:aspect-[5/4]"
              scrim
            />
          ) : null}
        </div>
      </Container>
    </section>
  );
}
