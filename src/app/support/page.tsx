import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SupportSection } from "@/components/home/SupportSection";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Client Support — KayTech Africa Web Design & Academy Ghana",
  description:
    "WhatsApp, phone, and email support for KayTech web design clients and academy learners — based in Accra, serving Ghana and Africa.",
  path: "/support",
});

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Client support"
        title="Help when you need it"
        description="Active project or academy enrollment — our team is one message away on WhatsApp, phone, or email."
        cta={{
          label: "Chat on WhatsApp",
          href: "https://wa.me/233559921979",
          external: true,
        }}
        image={pageImages.support}
      />
      <SupportSection />
    </>
  );
}
