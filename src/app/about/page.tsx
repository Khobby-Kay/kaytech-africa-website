import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { WhyKayTech } from "@/components/home/WhyKayTech";
import { LeadershipSection } from "@/components/home/LeadershipSection";
import { Testimonials } from "@/components/home/Testimonials";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About KayTech Africa — Web Design & Digital Studio in Accra, Ghana",
  description:
    "Meet KayTech Africa — Accra's trusted web design, SEO, and digital marketing studio. Learn about our team, mission, and Afrocentric approach to building for Ghana and Africa.",
  path: "/about",
  keywords: ["about KayTech Africa", "web design company Accra", "digital agency Ghana"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Built in Accra. Designed for Africa."
        description="KayTech turns ambitious ideas into live infrastructure — with a studio and academy rooted in how African businesses actually grow."
        cta={{ label: "Meet the team below", href: "#leadership" }}
        image={pageImages.about}
      />
      <WhyKayTech />
      <LeadershipSection />
      <Testimonials />
    </>
  );
}
