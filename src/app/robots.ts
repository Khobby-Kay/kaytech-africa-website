import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * AI / LLM crawlers we explicitly welcome so KayTech Africa can be discovered,
 * indexed, and cited by generative answer engines (ChatGPT, Claude, Gemini,
 * Meta AI, Perplexity, DeepSeek via Common Crawl, and more).
 */
const aiCrawlers = [
  // OpenAI — ChatGPT, GPT search, training
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic — Claude / Claude.ai
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Claude-SearchBot",
  "Claude-User",
  // Google — Gemini / Vertex / AI Overviews
  "Google-Extended",
  "GoogleOther",
  // Microsoft Copilot / Bing
  "Bingbot",
  "BingPreview",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Meta AI (Llama)
  "meta-externalagent",
  "meta-externalfetcher",
  "FacebookBot",
  // Apple Intelligence
  "Applebot",
  "Applebot-Extended",
  // Amazon
  "Amazonbot",
  // Common Crawl — feeds DeepSeek, Mistral, and many open LLMs
  "CCBot",
  // Cohere, You.com, Diffbot, DuckAssist and others
  "cohere-ai",
  "cohere-training-data-crawler",
  "YouBot",
  "Diffbot",
  "DuckAssistBot",
  "Bytespider",
  "Timpibot",
  "omgili",
  "ImagesiftBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: aiCrawlers,
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
