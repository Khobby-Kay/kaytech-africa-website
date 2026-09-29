import type { Metadata } from "next";
import { AcademyCoursePageContent } from "@/components/academy/AcademyCoursePageContent";
import { advancedWebMarketingCourse, buildCourseJsonLd } from "@/lib/academy-courses";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: advancedWebMarketingCourse.metaTitle,
  description: advancedWebMarketingCourse.metaDescription,
  path: advancedWebMarketingCourse.path,
  keywords: [
    "advanced web development course Ghana",
    "Next.js course Accra",
    "digital marketing course Ghana",
    "SEO course Accra",
  ],
});

export default function AdvancedWebMarketingCoursePage() {
  const jsonLd = buildCourseJsonLd(advancedWebMarketingCourse);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AcademyCoursePageContent course={advancedWebMarketingCourse} />
    </>
  );
}
