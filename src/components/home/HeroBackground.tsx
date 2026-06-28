"use client";

import { HeroImageBackground } from "@/components/ui/HeroImageBackground";
import { heroSlides } from "@/lib/hero-slides";

type HeroBackgroundProps = {
  active: number;
};

export function HeroBackground({ active }: HeroBackgroundProps) {
  return (
    <HeroImageBackground
      slides={heroSlides}
      active={active}
      imageClassName="object-cover object-[center_42%] sm:object-[center_32%] lg:object-[center_28%]"
    />
  );
}
