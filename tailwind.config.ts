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
        canvas: "#ffffff",
        ink: "#0a0a0a",
        muted: "#71717a",
        hairline: "#e8eaed",
        primary: {
          DEFAULT: "#1c3f69",
          deep: "#152f4f",
        },
        "surface-soft": "#f4f6f8",
        "surface-strong": "#eef1f5",
        "surface-dark": "#0a0b0d",
        "on-dark": "#ffffff",
        "on-primary": "#ffffff",
        "semantic-up": "#12d75c",
        "semantic-up-deep": "#0ea84a",
        mist: "#71717a",
        line: "#e8eaed",
        surface: "#f4f6f8",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        pill: "9999px",
      },
      maxWidth: {
        site: "1440px",
      },
      boxShadow: {
        card: "0 12px 32px rgba(28,63,105,0.10)",
        float: "0 20px 50px -12px rgba(0,0,0,0.2)",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
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
      },
    },
  },
  plugins: [],
};
export default config;
