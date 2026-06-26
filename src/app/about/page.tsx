import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AboutExpansion } from "@/components/about/AboutExpansion";
import { WhyKayTech } from "@/components/home/WhyKayTech";
import { LeadershipSection } from "@/components/home/LeadershipSection";
import { Testimonials } from "@/components/home/Testimonials";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords, pageSeoCopy } from "@/lib/localized-seo";

export const metadata: Metadata = createPageMetadata({
  title: pageSeoCopy.about.title,
  description: pageSeoCopy.about.description,
  path: "/about",
  keywords: [...ghanaSearchKeywords],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={pageSeoCopy.about.heroTitle}
        description={pageSeoCopy.about.heroDescription}
        cta={{ label: "Meet the team below", href: "#leadership" }}
        image={pageImages.about}
      />
      <AboutExpansion />
      <WhyKayTech />
      <LeadershipSection />
      <Testimonials />
    </>
  );
}
