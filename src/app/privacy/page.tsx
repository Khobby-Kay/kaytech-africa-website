import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/site";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | KayTech Africa",
  description:
    "How KayTech Africa collects, uses, and protects your personal information when you use our website, studio services, and academy programs.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated: June 2026. This policy applies to ${siteConfig.name} websites, academy programs, and client services.`}
        image={pageImages.privacy}
        compact
      />
      <section className="bg-canvas px-5 py-16 lg:px-20 lg:py-20">
        <Container>
          <div className="prose prose-neutral max-w-3xl text-muted [&_h2]:font-display [&_h2]:text-ink [&_h2]:tracking-tight [&_p]:leading-relaxed">
            <h2>Information we collect</h2>
            <p>
              When you contact us, enroll in the academy, or use our services, we
              may collect your name, email, phone number, company details, and
              messages you send via WhatsApp, email, or web forms.
            </p>

            <h2>How we use your information</h2>
            <p>
              We use this information to respond to inquiries, deliver projects,
              manage academy cohorts, improve our services, and send relevant
              updates you have opted into.
            </p>

            <h2>Sharing</h2>
            <p>
              We do not sell your personal data. We may share information with
              trusted service providers (hosting, analytics, payment processors)
              only as needed to operate our business.
            </p>

            <h2>Data retention</h2>
            <p>
              We retain contact and project records for as long as needed to
              fulfill our services and legal obligations, then delete or anonymise
              them where appropriate.
            </p>

            <h2>Your rights</h2>
            <p>
              You may request access, correction, or deletion of your personal
              data by emailing{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-ink underline"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>

            <h2>Contact</h2>
            <p>
              {siteConfig.name} · {siteConfig.location.line1},{" "}
              {siteConfig.location.line2} · {siteConfig.contact.phoneDisplay}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
