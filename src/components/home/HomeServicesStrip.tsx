import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/site";
import { servicePreviewImages } from "@/lib/page-images";

const previews = services.slice(0, 3);

export function HomeServicesStrip() {
  return (
    <section className="bg-surface-soft px-5 py-12 sm:py-16 lg:px-20 lg:py-20">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-pill bg-canvas px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink ring-1 ring-hairline">
              Studio
            </span>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-ink sm:mt-4 sm:text-4xl">
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

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
          {previews.map((service, i) => (
            <Link
              key={service.title}
              href="/features"
              className="group overflow-hidden rounded-3xl border border-hairline bg-canvas shadow-card transition hover:-translate-y-1 hover:shadow-float"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={servicePreviewImages[i].src}
                  alt={servicePreviewImages[i].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/75 via-surface-dark/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-lg font-semibold text-on-dark sm:text-xl">
                    {service.title}
                  </p>
                </div>
              </div>
              <p className="p-4 text-sm leading-relaxed text-muted sm:p-5">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
