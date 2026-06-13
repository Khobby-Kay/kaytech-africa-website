import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/site";

const previews = services.slice(0, 3);

export function HomeServicesStrip() {
  return (
    <section className="bg-surface-soft px-5 py-14 lg:px-20 lg:py-20">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-pill bg-canvas px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink ring-1 ring-hairline">
              Studio
            </span>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              What we build
            </h2>
          </div>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            All services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {previews.map((service, i) => (
            <Link
              key={service.title}
              href="/features"
              className="group overflow-hidden rounded-3xl border border-hairline bg-canvas shadow-card transition hover:-translate-y-1 hover:shadow-float"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={`/images/hero/hero-${(i % 3) + 1}.jpg`}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/75 via-surface-dark/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-xl font-semibold text-on-dark">
                    {service.title}
                  </p>
                </div>
              </div>
              <p className="p-5 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
