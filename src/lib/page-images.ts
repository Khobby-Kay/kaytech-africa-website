import { contentImages, pageHeroImages } from "@/lib/image-seo";

export const pageImages = {
  features: pageHeroImages.features,
  aiAutomation: pageHeroImages.aiAutomation,
  about: pageHeroImages.about,
  academy: pageHeroImages.academy,
  security: pageHeroImages.security,
  support: pageHeroImages.support,
  contact: pageHeroImages.contact,
  faq: pageHeroImages.faq,
  privacy: pageHeroImages.privacy,
  terms: pageHeroImages.terms,
} as const;

export const whyHomeImages = [
  {
    src: contentImages.whyStudio.src,
    alt: contentImages.whyStudio.alt,
    caption: "Studio",
  },
  {
    src: contentImages.whyPayments.src,
    alt: contentImages.whyPayments.alt,
    caption: "E-commerce",
  },
  {
    src: contentImages.whyMobile.src,
    alt: contentImages.whyMobile.alt,
    caption: "Mobile-first",
  },
] as const;

export const principleImages = [
  contentImages.principleSpeed,
  contentImages.principleMomo,
  contentImages.principleConvert,
  contentImages.principleLocal,
] as const;

export const servicePreviewImages = [
  contentImages.serviceAi,
  contentImages.serviceWeb,
  contentImages.serviceGrowth,
] as const;

export const academyCourseImages = [
  contentImages.courseDesign.src,
  contentImages.courseDev.src,
  contentImages.courseMarketing.src,
  contentImages.courseAi.src,
  contentImages.courseUx.src,
  contentImages.courseBusiness.src,
] as const;

export const academyCourseAlts = [
  contentImages.courseDesign.alt,
  contentImages.courseDev.alt,
  contentImages.courseMarketing.alt,
  contentImages.courseAi.alt,
  contentImages.courseUx.alt,
  contentImages.courseBusiness.alt,
] as const;
