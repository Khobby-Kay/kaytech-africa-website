import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FAQ } from "@/components/home/FAQ";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords, pageSeoCopy } from "@/lib/localized-seo";

export const metadata: Metadata = createPageMetadata({
  title: pageSeoCopy.faq.title,
  description: pageSeoCopy.faq.description,
  path: "/faq",
  keywords: [...ghanaSearchKeywords],
});

export default function FAQPage() {
  return (
    <>
      <PageHero
        title={pageSeoCopy.faq.heroTitle}
        description={pageSeoCopy.faq.heroDescription}
        cta={{ label: "Still need help?", href: "/contact" }}
        image={pageImages.faq}
      />
      <FAQ showHeading={false} />
    </>
  );
}
