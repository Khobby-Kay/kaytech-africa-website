/** Shared SEO phrase for every image alt text and filename on the site. */
export const SEO_IMAGE_PHRASE = "KayTech Africa the best web design in Accra" as const;

export const SEO_IMAGE_SLUG = "kaytech-africa-the-best-web-design-in-accra" as const;

export function seoHeroAlt(index: number): string {
  return `${SEO_IMAGE_PHRASE} hero ${index}`;
}

export function seoImageAlt(index: number): string {
  return `${SEO_IMAGE_PHRASE} ${index}`;
}

function heroSrc(folder: "hero" | "pages" | "sections", index: number): string {
  return `/images/${folder}/${SEO_IMAGE_SLUG}-hero-${index}.jpg`;
}

function contentSrc(folder: "sections" | "team", index: number): string {
  return `/images/${folder}/${SEO_IMAGE_SLUG}-${index}.jpg`;
}

/** Home carousel — hero 1–3 */
export const homeHeroSlides = [
  { src: heroSrc("hero", 1), alt: seoHeroAlt(1), caption: "Leadership" },
  { src: heroSrc("hero", 2), alt: seoHeroAlt(2), caption: "Vision" },
  { src: heroSrc("hero", 3), alt: seoHeroAlt(3), caption: "Excellence" },
] as const;

/** Page hero images — hero 4–13 */
export const pageHeroImages = {
  security: { src: heroSrc("pages", 4), alt: seoHeroAlt(4) },
  support: { src: heroSrc("pages", 5), alt: seoHeroAlt(5) },
  contact: { src: heroSrc("pages", 6), alt: seoHeroAlt(6) },
  faq: { src: heroSrc("sections", 7), alt: seoHeroAlt(7) },
  privacy: { src: heroSrc("sections", 8), alt: seoHeroAlt(8) },
  terms: { src: heroSrc("sections", 9), alt: seoHeroAlt(9) },
  features: { src: contentSrc("sections", 1), alt: seoHeroAlt(10) },
  about: { src: contentSrc("sections", 12), alt: seoHeroAlt(11) },
  academy: { src: contentSrc("sections", 5), alt: seoHeroAlt(12) },
  aiAutomation: { src: contentSrc("sections", 4), alt: seoHeroAlt(13) },
} as const;

/** Content images — numbered 1–20 (non-hero alt when not in PageHero) */
export const contentImages = {
  serviceWeb: { src: contentSrc("sections", 1), alt: seoImageAlt(1) },
  whyPayments: { src: contentSrc("sections", 2), alt: seoImageAlt(2) },
  serviceGrowth: { src: contentSrc("sections", 3), alt: seoImageAlt(3) },
  serviceAi: { src: contentSrc("sections", 4), alt: seoImageAlt(4) },
  academyLearning: { src: contentSrc("sections", 5), alt: seoImageAlt(5) },
  courseDesign: { src: contentSrc("sections", 6), alt: seoImageAlt(6) },
  courseDev: { src: contentSrc("sections", 7), alt: seoImageAlt(7) },
  courseMarketing: { src: contentSrc("sections", 8), alt: seoImageAlt(8) },
  courseAi: { src: contentSrc("sections", 9), alt: seoImageAlt(9) },
  courseUx: { src: contentSrc("sections", 10), alt: seoImageAlt(10) },
  courseBusiness: { src: contentSrc("sections", 11), alt: seoImageAlt(11) },
  whyStudio: { src: contentSrc("sections", 12), alt: seoImageAlt(12) },
  whyMobile: { src: contentSrc("sections", 13), alt: seoImageAlt(13) },
  principleSpeed: { src: contentSrc("sections", 14), alt: seoImageAlt(14) },
  principleMomo: { src: contentSrc("sections", 15), alt: seoImageAlt(15) },
  principleConvert: { src: contentSrc("sections", 16), alt: seoImageAlt(16) },
  principleLocal: { src: contentSrc("sections", 17), alt: seoImageAlt(17) },
  teamCeo: { src: contentSrc("team", 18), alt: seoImageAlt(18) },
  teamEngineering: { src: contentSrc("team", 19), alt: seoImageAlt(19) },
  teamAcademy: { src: contentSrc("team", 20), alt: seoImageAlt(20) },
} as const;

/** Legacy path → new SEO filename (for rename script + blur regeneration). */
export const legacyImageRenameMap: Record<string, string> = {
  "/images/hero/hero-1.jpg": homeHeroSlides[0].src,
  "/images/hero/hero-2.jpg": homeHeroSlides[1].src,
  "/images/hero/hero-3.jpg": homeHeroSlides[2].src,
  "/images/pages/security.jpg": pageHeroImages.security.src,
  "/images/pages/support.jpg": pageHeroImages.support.src,
  "/images/pages/contact.jpg": pageHeroImages.contact.src,
  "/images/sections/faq-help.jpg": pageHeroImages.faq.src,
  "/images/sections/privacy-trust.jpg": pageHeroImages.privacy.src,
  "/images/sections/terms-agreement.jpg": pageHeroImages.terms.src,
  "/images/sections/service-web.jpg": contentImages.serviceWeb.src,
  "/images/sections/why-payments.jpg": contentImages.whyPayments.src,
  "/images/sections/service-growth.jpg": contentImages.serviceGrowth.src,
  "/images/sections/service-ai.jpg": contentImages.serviceAi.src,
  "/images/sections/academy-learning.jpg": contentImages.academyLearning.src,
  "/images/sections/course-design.jpg": contentImages.courseDesign.src,
  "/images/sections/course-dev.jpg": contentImages.courseDev.src,
  "/images/sections/course-marketing.jpg": contentImages.courseMarketing.src,
  "/images/sections/course-ai.jpg": contentImages.courseAi.src,
  "/images/sections/course-ux.jpg": contentImages.courseUx.src,
  "/images/sections/course-business.jpg": contentImages.courseBusiness.src,
  "/images/sections/why-studio.jpg": contentImages.whyStudio.src,
  "/images/sections/why-mobile.jpg": contentImages.whyMobile.src,
  "/images/sections/principle-speed.jpg": contentImages.principleSpeed.src,
  "/images/sections/principle-momo.jpg": contentImages.principleMomo.src,
  "/images/sections/principle-convert.jpg": contentImages.principleConvert.src,
  "/images/sections/principle-local.jpg": contentImages.principleLocal.src,
  "/images/team/aikins-armstrong.jpg": contentImages.teamCeo.src,
  "/images/team/amara-okonkwo.jpg": contentImages.teamEngineering.src,
  "/images/team/kwame-asante.jpg": contentImages.teamAcademy.src,
};
