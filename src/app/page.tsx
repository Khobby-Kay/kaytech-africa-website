import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { MobileQuickCallStrip } from "@/components/home/MobileQuickCallStrip";
import { LeadingCompanySection } from "@/components/home/LeadingCompanySection";
import { HomeMainContent } from "@/components/home/HomeMainContent";
import { WhyKayTechHome } from "@/components/home/WhyKayTechHome";
import { Testimonials } from "@/components/home/Testimonials";
import { defaultDescription, defaultTitle } from "@/lib/seo";
import { createPageMetadata } from "@/lib/page-metadata";
import { leadingCompany } from "@/lib/home-content";

export const metadata: Metadata = createPageMetadata({
  title: defaultTitle,
  description: defaultDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <MobileQuickCallStrip />
      <LeadingCompanySection />
      <HomeMainContent />
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
