import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ServicesTabs } from "@/components/home/ServicesTabs";
import { AppShowcase } from "@/components/home/AppShowcase";

export const metadata: Metadata = {
  title: "Features & Services",
  description:
    "AI automation, web development, Web3, robotics, and digital marketing — built for African businesses by KayTech Africa.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Studio"
        title="Everything we build for African growth"
        description="From intelligent automation to conversion-first websites — scoped for mobile networks, MoMo payments, and real market conditions."
        cta={{ label: "Start a project", href: "/contact" }}
      />
      <ServicesTabs />
      <AppShowcase />
    </>
  );
}
