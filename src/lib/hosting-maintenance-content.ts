import { siteConfig } from "@/lib/site";

export const hostingMaintenanceQuickAnswer =
  "After your site launches in Ghana, plan for domain renewal (GHS 100–350/year), hosting (GHS 500–3,600/year depending on traffic), and optional KayTech maintenance from about GHS 350/month for updates and security. .com.gh domains and Paystack fees are separate line items.";

export const hostingMaintenanceFaqs = [
  {
    question: "How much is website hosting in Ghana?",
    answer:
      "Small business sites often run on GHS 500–1,200 per year on managed hosting. E-commerce with more traffic and backups typically needs GHS 1,200–3,600 per year. KayTech recommends providers and can manage hosting for you on a retainer.",
  },
  {
    question: "What does a .com.gh domain cost?",
    answer:
      "Registration and renewal are usually GHS 200–350 per year through accredited registrars. Rules and availability differ from .com. we guide you during setup.",
  },
  {
    question: "What is included in a maintenance retainer?",
    answer:
      "Typical retainers cover security updates, plugin or framework patches, uptime monitoring, small content edits, and backup checks. Larger features are quoted separately.",
  },
  {
    question: "Do I need maintenance if I have WordPress?",
    answer:
      "Yes. WordPress sites need regular updates to stay secure and fast. Skipping maintenance is a common reason Ghanaian sites get hacked or slow down on mobile.",
  },
  {
    question: "How do I get KayTech maintenance pricing?",
    answer: `WhatsApp ${siteConfig.contact.whatsappDisplay} or call ${siteConfig.contact.phoneDisplay}. we match retainers to your stack and update frequency.`,
  },
] as const;
