import { NextResponse } from "next/server";
import { getAssistantReply } from "@/lib/assistant";
import { chatWithGroq, isGroqConfigured, teedraSystemPrompt } from "@/lib/teedra/groq";

export const runtime = "nodejs";

type Body = {
  message?: string;
  history?: { role: "user" | "assistant"; content: string }[];
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const message = (body.message || "").trim();
  if (!message || message.length > 2000) {
    return NextResponse.json({ ok: false, error: "Message required." }, { status: 422 });
  }

  if (!isGroqConfigured()) {
    const local = getAssistantReply(message);
    return NextResponse.json({
      ok: true,
      source: "local",
      text: local.text,
      escalate: local.escalate,
    });
  }

  const history = (body.history ?? []).slice(-6);
  const messages = [
    { role: "system" as const, content: teedraSystemPrompt() },
    ...history.map((m) => ({ role: m.role, content: m.content.slice(0, 2000) })),
    { role: "user" as const, content: message },
  ];

  const groq = await chatWithGroq(messages);
  if (groq.ok) {
    const lower = groq.text.toLowerCase();
    const escalate =
      lower.includes("whatsapp") ||
      lower.includes("call ") ||
      lower.includes("team will") ||
      lower.includes("reach out");
    return NextResponse.json({
      ok: true,
      source: "groq",
      text: groq.text,
      escalate,
    });
  }

  const fallback = getAssistantReply(message);
  return NextResponse.json({
    ok: true,
    source: "local",
    text: fallback.text,
    escalate: fallback.escalate,
  });
}
