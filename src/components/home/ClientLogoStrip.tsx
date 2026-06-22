import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { clientLogos } from "@/lib/client-logos";

export function ClientLogoStrip() {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section className="overflow-hidden border-y border-hairline bg-surface-soft py-8 sm:py-10">
      <Container>
        <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
          Trusted by leading brands we have worked with
        </p>
      </Container>

      <div className="hero-ticker-mask mt-6">
        <div className="marquee-track flex min-w-max items-center gap-10 px-5 sm:gap-16 lg:px-12">
          {logos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="relative h-10 w-[150px] shrink-0 sm:h-12 sm:w-[190px]"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                fill
                sizes="190px"
                className="object-contain opacity-85 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
