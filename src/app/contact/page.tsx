import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach KayTech Africa on WhatsApp, phone, or email. Accra-based studio serving clients across Ghana and Africa.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's build your next chapter"
        description="Tell us about your project, academy interest, or partnership idea. We typically respond within one business day."
      />
      <ContactSection />
    </>
  );
}
