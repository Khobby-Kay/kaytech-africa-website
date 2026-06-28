import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ServicesTabs } from "@/components/home/ServicesTabs";
import { AppShowcase } from "@/components/home/AppShowcase";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords, pageSeoCopy } from "@/lib/localized-seo";

export const metadata: Metadata = createPageMetadata({
  title: pageSeoCopy.features.title,
  description: pageSeoCopy.features.description,
  path: "/features",
  keywords: [...ghanaSearchKeywords],
});

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        title={pageSeoCopy.features.heroTitle}
        description={pageSeoCopy.features.heroDescription}
        cta={{ label: "Explore capabilities", href: "#capabilities" }}
        secondaryCta={{ label: "See our work", href: "/portfolio" }}
        image={pageImages.features}
      />
      <div id="capabilities">
      <ServicesTabs />
      </div>
      <AppShowcase />
    </>
  );
}
