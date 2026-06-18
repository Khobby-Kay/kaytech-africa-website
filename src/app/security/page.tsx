import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SecuritySection } from "@/components/home/SecuritySection";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords } from "@/lib/localized-seo";

export const metadata: Metadata = createPageMetadata({
  title: "Security & Delivery Standards | Best Web Developer Ghana | KayTech",
  description:
    "Studio-grade security and delivery from one of Ghana's best web development companies. Professional websites for Accra, Kumasi, Tema, and nationwide clients.",
  path: "/security",
  keywords: [...ghanaSearchKeywords],
});

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust"
        title="Studio-grade delivery for African markets"
        description="Every payment flow, page load, and launch is protected by principles we ship with on every project."
        image={pageImages.security}
      />
      <SecuritySection />
    </>
  );
}
