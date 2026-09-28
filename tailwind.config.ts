import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "rgba(255, 255, 255, 0.62)",
        ink: "#0f172a",
        muted: "#64748b",
        hairline: "rgba(15, 23, 42, 0.08)",
        primary: {
          DEFAULT: "#1a4971",
          deep: "#123556",
          light: "#2563a8",
        },
        accent: {
          DEFAULT: "#0d9488",
          bright: "#14b8a6",
          soft: "#ccfbf1",
        },
        "surface-soft": "rgba(255, 255, 255, 0.42)",
        "surface-strong": "rgba(226, 232, 240, 0.55)",
        "surface-accent": "rgba(204, 251, 241, 0.45)",
        "surface-dark": "#0a0b0d",
        "on-dark": "#ffffff",
        "on-primary": "#ffffff",
        "semantic-up": "#10b981",
        "semantic-up-deep": "#059669",
        mist: "#71717a",
        line: "rgba(15, 23, 42, 0.08)",
        surface: "rgba(255, 255, 255, 0.5)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        pill: "9999px",
        "3xl": "1.75rem",
      },
      maxWidth: {
        site: "1440px",
      },
      boxShadow: {
        card: "inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 2px rgba(15,23,42,0.04), 0 18px 40px -16px rgba(26,73,113,0.22)",
        float: "inset 0 1px 0 rgba(255,255,255,0.7), 0 24px 60px -16px rgba(15,23,42,0.28)",
        glow: "inset 0 1px 0 rgba(255,255,255,0.8), 0 12px 36px -8px rgba(13,148,136,0.28)",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "teedra-glow": "teedraGlow 2.8s ease-in-out infinite",
        "teedra-breathe": "teedraBreathe 3.2s ease-in-out infinite",
        "hero-ken-burns": "heroKenBurns 7s ease-out forwards",
        "hero-fade-up": "heroFadeUp 0.65s ease-out forwards",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        teedraGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(13,148,136,0.5)" },
          "50%": { boxShadow: "0 0 0 10px rgba(13,148,136,0)" },
        },
        teedraBreathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.035)" },
        },
        heroKenBurns: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.1)" },
        },
        heroFadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
