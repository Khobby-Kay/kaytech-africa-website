import type { Metadata } from "next";
import { AiAutomationPageContent } from "@/components/services/AiAutomationPageContent";
import { createPageMetadata } from "@/lib/page-metadata";
import { ghanaSearchKeywords } from "@/lib/localized-seo";
import {
  aiAutomationExpandedMeta,
  aiAutomationFaqs,
} from "@/lib/ai-automation-content";
import { siteConfig } from "@/lib/site";

const automationKeywords = [
  "AI automation Ghana",
  "WhatsApp AI assistant Ghana",
  "AI chatbot developer Ghana",
  "WhatsApp automation Ghana",
  "business process automation Accra",
  "AI agency Ghana",
  "customer service chatbot Ghana",
];

export const metadata: Metadata = createPageMetadata({
  title: aiAutomationExpandedMeta.title,
  description: aiAutomationExpandedMeta.description,
  path: "/ai-automation",
  keywords: [...automationKeywords, ...ghanaSearchKeywords],
});

export default function AiAutomationPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: aiAutomationFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Automation and WhatsApp AI Assistants",
    description: aiAutomationExpandedMeta.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: { "@type": "Country", name: "Ghana" },
    url: `${siteConfig.url}/ai-automation`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [serviceJsonLd, faqJsonLd] }),
        }}
      />
      <AiAutomationPageContent />
    </>
  );
}
