import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/site";
import { pageImages } from "@/lib/page-images";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions | KayTech Africa",
  description:
    "Terms governing KayTech Africa web design, digital marketing, and academy services for clients in Ghana and across Africa.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description={`Last updated: June 2026. By using ${siteConfig.name} services or enrolling in our academy, you agree to these terms.`}
        image={pageImages.terms}
        compact
      />
      <section className="bg-canvas px-5 py-16 lg:px-20 lg:py-20">
        <Container>
          <div className="prose prose-neutral max-w-3xl text-muted [&_h2]:font-display [&_h2]:text-ink [&_h2]:tracking-tight [&_p]:leading-relaxed">
            <h2>Services</h2>
            <p>
              KayTech provides digital studio services including web development,
              AI automation, marketing, and related consulting. Scope, timelines,
              and fees are defined in individual proposals or statements of work.
            </p>

            <h2>Academy programs</h2>
            <p>
              Academy enrollment grants access to cohort materials and sessions for
              the purchased program duration. Fees are non-refundable after cohort
              start unless otherwise stated in writing.
            </p>

            <h2>Client responsibilities</h2>
            <p>
              Clients agree to provide timely feedback, required assets, and
              accurate information needed to deliver projects. Delays in client
              input may affect timelines.
            </p>

            <h2>Intellectual property</h2>
            <p>
              Upon full payment, clients receive ownership of deliverables defined
              in their agreement, excluding KayTech internal tools, templates, and
              pre-existing IP.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              KayTech is not liable for indirect or consequential damages. Total
              liability for any claim is limited to fees paid for the specific
              service giving rise to the claim.
            </p>

            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of Ghana. Disputes shall be
              resolved in Accra unless otherwise agreed in writing.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms:{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-ink underline"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
