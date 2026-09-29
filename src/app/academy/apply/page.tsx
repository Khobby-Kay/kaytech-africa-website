import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AcademyApplicationForm } from "@/components/academy/AcademyApplicationForm";
import {
  academyApplicationForm,
  resolveAcademyApplyCourse,
} from "@/lib/academy-content";
import { createPageMetadata } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site";

type Props = {
  searchParams: { course?: string };
};

export const metadata: Metadata = createPageMetadata({
  title: "Apply to KayTech Academy | Admissions Form",
  description:
    "Apply to KayTech Academy in Accra or online. Web development, digital marketing, advanced, and SaaS tracks. 10 seats per cohort.",
  path: "/academy/apply",
  keywords: ["KayTech Academy apply", "web development course application Ghana"],
});

export default function AcademyApplyPage({ searchParams }: Props) {
  const defaultCourse = resolveAcademyApplyCourse(searchParams.course);
  const googleFormUrl = process.env.NEXT_PUBLIC_ACADEMY_GOOGLE_FORM_URL?.trim();

  return (
    <>
      <PageHero
        compact
        eyebrow="KayTech Academy · Admissions"
        title="Apply for the next cohort"
        description={academyApplicationForm.note}
        secondaryCta={{ label: "View courses", href: "/academy#courses" }}
      />

      <section className="border-b border-hairline bg-surface-accent px-5 py-12 lg:px-20 lg:py-16">
        <Container className="max-w-xl lg:max-w-2xl">
          <Link
            href="/academy"
            className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Academy
          </Link>

          <AcademyApplicationForm
            defaultCourse={defaultCourse}
            location="academy_apply_page"
          />

          {googleFormUrl ? (
            <p className="mt-6 text-sm text-muted">
              Prefer Google Forms?{" "}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Open the backup application form
              </a>
              . We still read every on-site submission first.
            </p>
          ) : null}

          <p className="mt-6 text-sm text-muted">
            Questions before you apply? Call {siteConfig.contact.phoneDisplay} or WhatsApp{" "}
            {siteConfig.contact.whatsappDisplay}.
          </p>
        </Container>
      </section>
    </>
  );
}
