import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SecuritySection } from "@/components/home/SecuritySection";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords } from "@/lib/localized-seo";

export const metadata: Metadata = createPageMetadata({
  title: "Security & Delivery Standards | KayTech Africa",
  description:
    "How KayTech protects payments, data, and launches. studio-grade security and delivery for clients in Accra, Kumasi, Tema, and nationwide.",
  path: "/security",
  keywords: [...ghanaSearchKeywords],
});

export default function SecurityPage() {
  return (
    <>
      <PageHero
        title="Studio-grade delivery for African markets"
        description="Every payment flow, page load, and launch is protected by principles we ship with on every project."
        image={pageImages.security}
      />
      <SecuritySection />
    </>
  );
}
