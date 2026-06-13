import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FAQ } from "@/components/home/FAQ";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ — Web Design, SEO & Academy Questions | KayTech Africa Ghana",
  description:
    "Frequently asked questions about KayTech web design, SEO, MoMo payments, project kickoff, academy programs, and our Accra headquarters.",
  path: "/faq",
  keywords: ["web design FAQ Ghana", "SEO questions Accra", "KayTech academy FAQ"],
});

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Questions, answered"
        description="How projects start, who we work with, MoMo support, academy tracks, and where we're based."
        cta={{ label: "Still need help?", href: "/contact" }}
        image={pageImages.faq}
      />
      <FAQ showHeading={false} />
    </>
  );
}
