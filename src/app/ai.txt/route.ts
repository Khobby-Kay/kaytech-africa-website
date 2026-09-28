import { buildLlmsTxtBody } from "@/lib/llms-txt";

export const dynamic = "force-static";

/** Mirror of /llms.txt for crawlers that look for /ai.txt */
export function GET() {
  return new Response(buildLlmsTxtBody(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
