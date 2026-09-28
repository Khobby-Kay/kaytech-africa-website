import { indexPriorityPaths, siteUrl } from "@/lib/discoverability";
import { siteConfig } from "@/lib/site";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

/**
 * POST /api/indexnow
 * Pings Bing/Yandex IndexNow after deploy. Set INDEXNOW_KEY in env and host
 * the same key at https://www.kaytechafrica.com/{INDEXNOW_KEY}.txt
 * Optional header: Authorization: Bearer <INDEXNOW_API_SECRET>
 */
export async function POST(request: Request) {
  const secret = process.env.INDEXNOW_API_SECRET;
  if (secret) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    return Response.json(
      { error: "INDEXNOW_KEY is not configured" },
      { status: 503 },
    );
  }

  const host = new URL(siteConfig.url).host;
  const urlList = indexPriorityPaths.map((path) => siteUrl(path));

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key,
      keyLocation: siteUrl(`/${key}.txt`),
      urlList,
    }),
  });

  return Response.json({
    ok: res.ok,
    status: res.status,
    submitted: urlList.length,
  });
}
