import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { MobileQuickCallStrip } from "@/components/home/MobileQuickCallStrip";
import { LeadingCompanySection } from "@/components/home/LeadingCompanySection";
import { HomeMainContent } from "@/components/home/HomeMainContent";
import { LocalizedSeoSection } from "@/components/home/LocalizedSeoSection";
import { WhyKayTechHome } from "@/components/home/WhyKayTechHome";
import { Testimonials } from "@/components/home/Testimonials";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords, pageSeoCopy } from "@/lib/localized-seo";
import { leadingCompany } from "@/lib/home-content";

export const metadata: Metadata = createPageMetadata({
  title: pageSeoCopy.home.title,
  description: pageSeoCopy.home.description,
  path: "/",
  keywords: [...ghanaSearchKeywords],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <MobileQuickCallStrip />
      <LeadingCompanySection />
      <HomeMainContent />
      <LocalizedSeoSection />
      <WhyKayTechHome />
      <Testimonials />
      <noscript>
        <section className="px-5 py-8">
          <h2>{leadingCompany.title}</h2>
          <p>{leadingCompany.intro}</p>
        </section>
      </noscript>
    </>
  );
}
