import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { LeadCaptureStrip } from "@/components/layout/LeadCaptureStrip";
import { LeadingCompanySection } from "@/components/home/LeadingCompanySection";
import { HomeMainContent } from "@/components/home/HomeMainContent";
import { LocalizedSeoSection } from "@/components/home/LocalizedSeoSection";
import { KeyFacts } from "@/components/home/KeyFacts";
import { Portfolio } from "@/components/home/Portfolio";
import { WhyKayTechHome } from "@/components/home/WhyKayTechHome";
import { Testimonials } from "@/components/home/Testimonials";
import { ClientLogoStrip } from "@/components/home/ClientLogoStrip";
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
      <LeadCaptureStrip location="homepage" />
      <LeadingCompanySection />
      <HomeMainContent />
      <KeyFacts />
      <LocalizedSeoSection />
      <WhyKayTechHome />
      <ClientLogoStrip />
      <Portfolio />
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
