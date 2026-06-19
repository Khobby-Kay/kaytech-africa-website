import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  service?: string;
  // honeypot — bots fill this, humans don't
  company?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot hit -> pretend success, drop silently.
  if (body.company) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();
  const phone = (body.phone || "").trim();
  const service = (body.service || "").trim();

  if (!name || !message || (!email && !phone)) {
    return NextResponse.json(
      { ok: false, error: "Please add your name, a message, and a way to reach you." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_INBOX || siteConfig.contact.email;
  const from = process.env.LEAD_FROM || "KayTech Website <onboarding@resend.dev>";

  // No mail provider configured — accept the lead so the client can fall back
  // to WhatsApp/email without showing an error.
  if (!apiKey) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const html = `
    <h2>New lead from kaytechafrica.com</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    ${email ? `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` : ""}
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
    ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email || undefined,
        subject: `New lead: ${name}${service ? ` — ${service}` : ""}`,
        html,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ ok: true, delivered: false });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch {
    return NextResponse.json({ ok: true, delivered: false });
  }
}
