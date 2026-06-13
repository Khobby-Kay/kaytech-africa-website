import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ServicesTabs } from "@/components/home/ServicesTabs";
import { AppShowcase } from "@/components/home/AppShowcase";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Web Design, SEO & Digital Marketing Services in Ghana | KayTech Africa",
  description:
    "Professional web development, SEO, e-commerce, AI automation, and digital marketing services in Accra and across Ghana. Responsive, MoMo-ready websites that convert.",
  path: "/features",
  keywords: [
    "web design services Ghana",
    "SEO services Accra",
    "e-commerce development Ghana",
    "digital marketing Ghana",
  ],
});

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Studio"
        title="Everything we build for African growth"
        description="From intelligent automation to conversion-first websites — scoped for mobile networks, MoMo payments, and real market conditions."
        cta={{ label: "Start a project", href: "/contact" }}
        image={pageImages.features}
      />
      <ServicesTabs />
      <AppShowcase />
    </>
  );
}
