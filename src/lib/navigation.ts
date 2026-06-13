export const mainNav = [
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/academy", label: "Academy" },
  { href: "/security", label: "Security" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = {
  product: [
    { href: "/features", label: "Features" },
    { href: "/support", label: "Support" },
    { href: "/security", label: "Security" },
    { href: "/faq", label: "FAQ" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/academy", label: "Academy" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
} as const;
