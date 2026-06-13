import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SecuritySection } from "@/components/home/SecuritySection";

export const metadata: Metadata = {
  title: "Security & Delivery",
  description:
    "MoMo-ready payment flows, 3G-optimised builds, and studio-grade delivery principles on every KayTech project.",
};

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust"
        title="Studio-grade delivery for African markets"
        description="Every payment flow, page load, and launch is protected by principles we ship with on every project."
      />
      <SecuritySection />
    </>
  );
}
