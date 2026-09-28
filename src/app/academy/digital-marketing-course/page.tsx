import type { Metadata } from "next";
import { AcademyCoursePageContent } from "@/components/academy/AcademyCoursePageContent";
import { buildCourseJsonLd, digitalMarketingCourse } from "@/lib/academy-courses";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: digitalMarketingCourse.metaTitle,
  description: digitalMarketingCourse.metaDescription,
  path: digitalMarketingCourse.path,
  keywords: [
    "digital marketing course Accra",
    "digital marketing course Ghana",
    "SEO course Ghana",
  ],
});

export default function DigitalMarketingCoursePage() {
  const jsonLd = buildCourseJsonLd(digitalMarketingCourse);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AcademyCoursePageContent course={digitalMarketingCourse} />
    </>
  );
}
