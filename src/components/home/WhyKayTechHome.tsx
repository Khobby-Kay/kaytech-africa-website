import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { principles, stats } from "@/lib/site";
import { whyHomeImages } from "@/lib/page-images";

export function WhyKayTechHome() {
  return (
    <section
      id="why"
      className="border-b border-hairline bg-canvas px-5 py-14 lg:px-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-pill bg-surface-strong px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink">
              Why KayTech
            </span>
            <h2 className="mt-6 font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Africa runs on ambition. Your stack should keep up.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Western templates break on 3G. Generic agencies miss MoMo, WhatsApp,
              and how Ghana actually buys. KayTech builds infrastructure that
              converts — not brochureware.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-hairline bg-surface-soft p-4"
                >
                  <p className="font-display text-2xl font-semibold text-ink">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Meet the team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-3xl border border-hairline shadow-card">
              <Image
                src={whyHomeImages[0].src}
                alt={whyHomeImages[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 rounded-pill bg-canvas/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur-sm">
                {whyHomeImages[0].caption}
              </span>
            </div>
            {whyHomeImages.slice(1).map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-hairline shadow-card"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 260px"
                  className="object-cover object-top"
                />
                <span className="absolute bottom-3 left-3 rounded-pill bg-canvas/90 px-2.5 py-1 text-[10px] font-semibold text-ink backdrop-blur-sm">
                  {img.caption}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-3xl border border-hairline bg-surface-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`/images/hero/hero-${(i % 3) + 1}.jpg`}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 font-display text-lg font-semibold text-on-dark">
                  {p.title}
                </h3>
              </div>
              <p className="p-4 text-sm leading-relaxed text-muted">{p.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
