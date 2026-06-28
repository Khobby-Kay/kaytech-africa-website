"use client";

import { HeroImageBackground } from "@/components/ui/HeroImageBackground";
import { heroSlides } from "@/lib/hero-slides";

export function HeroBackground() {
  return <HeroImageBackground slides={heroSlides} />;
}
