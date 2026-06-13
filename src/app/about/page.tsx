import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { WhyKayTech } from "@/components/home/WhyKayTech";
import { LeadershipSection } from "@/components/home/LeadershipSection";
import { Testimonials } from "@/components/home/Testimonials";
import { pageImages } from "@/lib/page-images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet KayTech Africa — Accra-based digital infrastructure studio and academy training Africa's next wave of talent.",
};

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
