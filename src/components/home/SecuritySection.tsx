import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { principles } from "@/lib/site";
import { principleImages } from "@/lib/page-images";

const badges = ["3G-optimised", "MoMo-ready", "Conversion-first", "Accra-based"];

export function SecuritySection() {
  return (
    <section id="security" className="bg-canvas px-5 py-12 sm:py-16 lg:px-20 lg:py-32">
      <Container>
        <span className="inline-flex items-center gap-2 rounded-pill bg-surface-strong px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink">
          Security
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-2xl tracking-tight text-ink sm:mt-6 sm:text-4xl lg:text-5xl">
          Studio-grade delivery for African markets.
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted sm:mt-4 sm:text-lg">
          Every payment flow, page load, and launch is protected by principles we
          ship with on every project.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
          {badges.map((tag) => (
            <span
              key={tag}
              className="rounded-pill border border-hairline bg-surface-soft px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted sm:px-4 sm:py-2 sm:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          {principles.map((p, i) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-3xl border border-hairline bg-surface-soft"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={principleImages[i].src}
                  alt={principleImages[i].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/60 to-transparent" />
              </div>
              <div className="p-5 sm:p-6 lg:p-8">
                <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
