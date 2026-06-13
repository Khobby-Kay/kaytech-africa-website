import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FAQ } from "@/components/home/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about KayTech services, academy programs, payments, project kickoff, and our Accra headquarters.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Questions, answered"
        description="How projects start, who we work with, MoMo support, academy tracks, and where we're based."
        cta={{ label: "Still need help?", href: "/contact" }}
      />
      <FAQ showHeading={false} />
    </>
  );
}
