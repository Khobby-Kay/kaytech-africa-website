import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactSection } from "@/components/contact/ContactSection";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords, pageSeoCopy } from "@/lib/localized-seo";

export const metadata: Metadata = createPageMetadata({
  title: pageSeoCopy.contact.title,
  description: pageSeoCopy.contact.description,
  path: "/contact",
  keywords: [...ghanaSearchKeywords],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={pageSeoCopy.contact.heroTitle}
        description={pageSeoCopy.contact.heroDescription}
        image={pageImages.contact}
      />
      <ContactSection />
    </>
  );
}
