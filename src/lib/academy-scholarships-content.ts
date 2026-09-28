import { academyCourseFeesGhs } from "@/lib/trust-metrics";

export const academyScholarshipsContent = {
  path: "/academy/scholarships-payment-plans",
  title: "Scholarships, Payment Plans & Free Resources | KayTech Academy",
  metaDescription:
    "How KayTech Academy scholarship seats work, instalment payment plans, and free learning resources for aspiring web developers and marketers in Ghana.",
  intro:
    "KayTech Academy keeps cohorts small (10 seats) so instruction stays practical. A limited number of partial scholarship seats open each cohort for applicants who show commitment and need. alongside instalment plans for approved students. This page explains what we actually offer (no vague “scholarship available” without details).",
  scholarshipSeats: {
    headline: "Scholarship seats (partial fee reduction)",
    bullets: [
      "Typically 1–2 seats per cohort across Web Development 101 and Digital Marketing 101. not full free rides unless a partner sponsor funds a seat.",
      "Awarded before cohort start based on application essay, follow-up call, and demonstrated need + commitment (not exam scores).",
      "Scholarship recipients still complete the same projects and attendance expectations as full-fee students.",
      "Mention “scholarship interest” in your on-site application at /academy#apply.",
    ],
    note: "KayTech does not guarantee a scholarship for every applicant. If a cohort is full, we may offer the next intake or a payment plan instead.",
  },
  paymentPlans: {
    headline: "Payment plans",
    bullets: [
      "Deposit to reserve seat (amount confirmed on admission call. usually 40–50% of cohort fee).",
      "Balance split across 2–3 instalments during the course for approved applicants.",
      "Plans are documented in writing (WhatsApp or email) before class starts.",
      "Late payment without notice may pause LMS access until resolved. we are small-team practical about genuine hardship if you communicate early.",
    ],
    feeReference: academyCourseFeesGhs,
  },
  freeResources: {
    headline: "Free & low-cost alternatives (honest comparison)",
    paragraphs: [
      "Generation Ghana and other NGO programmes offer tuition-free tracks with competitive admission. excellent if you qualify and can commit full-time.",
      "YouTube, freeCodeCamp, and MDN remain the best zero-cost self-study stack; KayTech Academy is for structured accountability, Ghana market context, and portfolio feedback.",
      "Read our fee comparison article for 2026 provider ranges: /blog/web-development-course-fees-ghana-2026.",
    ],
    links: [
      { href: "/blog/web-development-course-fees-ghana-2026", label: "Web development course fees in Ghana (2026)" },
      { href: "/blog/coding-bootcamps-accra-2026-comparison", label: "Coding bootcamps in Accra compared" },
      { href: "/academy/online-courses", label: "Online cohorts (live + recorded)" },
    ],
  },
  faqs: [
    {
      question: "Can I get 100% free training at KayTech?",
      answer: "Rarely through KayTech alone. partial scholarships reduce the cohort fee. For fully free programmes, apply to Generation Ghana or similar; we can help you choose the right path on a call.",
    },
    {
      question: "Do payment plans include interest?",
      answer: "No interest from KayTech. you pay the published cohort fee split over time. Third-party loans are separate if you use them.",
    },
  ],
} as const;
