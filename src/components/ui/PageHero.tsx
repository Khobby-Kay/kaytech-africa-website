import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

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
  return (
    <section className="border-b border-hairline bg-surface-soft px-5 pt-24 pb-12 sm:pt-28 lg:px-20 lg:pt-32 lg:pb-16">
      <Container>
        <div
          className={
            image
              ? "grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              : "max-w-3xl"
          }
        >
          <div className={image ? "max-w-xl" : undefined}>
            {eyebrow ? (
              <span className="inline-flex items-center gap-2 rounded-pill bg-surface-strong px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink">
                {eyebrow}
              </span>
            ) : null}
            <h1 className="mt-5 font-display text-3xl tracking-tight text-ink sm:mt-6 sm:text-4xl lg:text-5xl xl:text-6xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
                {description}
              </p>
            ) : null}
            {cta ? (
              cta.external ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex h-11 items-center rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary transition hover:bg-primary-deep sm:mt-8"
                >
                  {cta.label}
                </a>
              ) : (
                <Link
                  href={cta.href}
                  className="mt-7 inline-flex h-11 items-center rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary transition hover:bg-primary-deep sm:mt-8"
                >
                  {cta.label}
                </Link>
              )
            ) : null}
          </div>

          {image ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-hairline shadow-card lg:aspect-[5/4]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
