import type { Metadata } from "next";
import { AcademyCoursePageContent } from "@/components/academy/AcademyCoursePageContent";
import { buildCourseJsonLd, webDevelopmentCourse } from "@/lib/academy-courses";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: webDevelopmentCourse.metaTitle,
  description: webDevelopmentCourse.metaDescription,
  path: webDevelopmentCourse.path,
  keywords: [
    "web development course in Ghana",
    "web development course Accra",
    "learn web development Ghana",
    "coding course Ghana fees",
  ],
});

export default function WebDevelopmentCoursePage() {
  const jsonLd = buildCourseJsonLd(webDevelopmentCourse);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AcademyCoursePageContent course={webDevelopmentCourse} />
    </>
  );
}
