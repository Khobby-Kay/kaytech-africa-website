import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SupportSection } from "@/components/home/SupportSection";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site";
import { ghanaSearchKeywords } from "@/lib/localized-seo";

export const metadata: Metadata = createPageMetadata({
  title: "Client Support | Best Web Design Company Accra | KayTech Ghana",
  description:
    "Support for KayTech web design and development clients in Ghana. WhatsApp, phone, and email from Accra's trusted website design company.",
  path: "/support",
  keywords: [...ghanaSearchKeywords],
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
          href: siteConfig.contact.whatsapp,
          external: true,
        }}
        image={pageImages.support}
      />
      <SupportSection />
    </>
  );
}
