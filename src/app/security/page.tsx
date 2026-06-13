import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SecuritySection } from "@/components/home/SecuritySection";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Security & Delivery Standards | KayTech Africa Web Development Ghana",
  description:
    "MoMo-ready payment flows, 3G-optimised builds, and studio-grade security on every KayTech web design and development project in Ghana.",
  path: "/security",
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
