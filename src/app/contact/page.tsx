import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactSection } from "@/components/contact/ContactSection";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact KayTech Africa — Web Design & SEO in Accra, Ghana",
  description:
    "Call, WhatsApp, or email KayTech Africa for web design, SEO, and digital marketing quotes. Accra-based studio serving clients across Ghana and Africa.",
  path: "/contact",
  keywords: ["contact web designer Ghana", "web design quote Accra", "KayTech Africa phone"],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's build your next chapter"
        description="Tell us about your project, academy interest, or partnership idea. We typically respond within one business day."
        image={pageImages.contact}
      />
      <ContactSection />
    </>
  );
}
