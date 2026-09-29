import type { Metadata } from "next";
import { AcademyCoursePageContent } from "@/components/academy/AcademyCoursePageContent";
import { buildCourseJsonLd, saasDevelopmentCourse } from "@/lib/academy-courses";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: saasDevelopmentCourse.metaTitle,
  description: saasDevelopmentCourse.metaDescription,
  path: saasDevelopmentCourse.path,
  keywords: [
    "SaaS development course Ghana",
    "software development course Accra",
    "build a web app course Ghana",
    "Paystack subscriptions course",
  ],
});

export default function SaasDevelopmentCoursePage() {
  const jsonLd = buildCourseJsonLd(saasDevelopmentCourse);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AcademyCoursePageContent course={saasDevelopmentCourse} />
    </>
  );
}
