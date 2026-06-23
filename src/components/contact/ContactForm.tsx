"use client";

import { useState } from "react";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "sending" | "sent" | "error";

const services = [
  "Website design / development",
  "E-commerce store",
  "SEO & digital marketing",
  "AI automation / chatbot",
  "Academy / training",
  "Something else",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0],
    message: "",
    company: "", // honeypot
  });

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function whatsappFallback() {
    const text = `Hi KayTech, I'm ${form.name}.%0A%0AService: ${form.service}%0A${
      form.phone ? `Phone: ${form.phone}%0A` : ""
    }${form.email ? `Email: ${form.email}%0A` : ""}%0A${form.message}`;
    return `${siteConfig.contact.whatsapp}?text=${text}`;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.ok || data.delivered === false) {
        setStatus("error");
        setError(
          data.error || "Message received, but email delivery failed. Please use WhatsApp instead.",
        );
        return;
      }

      setStatus("sent");
      trackEvent("lead_submit", {
        location: "contact_form",
        label: form.service,
      });
    } catch {
      setStatus("error");
      setError("Network error. Please try WhatsApp instead.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-semantic-up/30 bg-semantic-up/10 p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-semantic-up-deep" />
        <h4 className="mt-3 font-display text-lg font-semibold text-ink">
          Thanks, {form.name.split(" ")[0] || "there"}!
        </h4>
        <p className="mt-2 text-sm text-muted">
          Your message is on its way. We typically respond within one business
          day. Need a faster reply?
        </p>
        <a
          href={whatsappFallback()}
          target="_blank"
          rel="noopener noreferrer"
          data-track="whatsapp_click"
          data-track-location="contact_form_success"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-pill bg-semantic-up-deep px-5 py-2.5 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot — visually hidden, kept out of tab order */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={(e) => update("company", e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-medium text-muted">
            Name *
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-hairline bg-canvas px-4 py-2.5 text-sm text-ink outline-none focus:border-primary/50"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-xs font-medium text-muted">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-hairline bg-canvas px-4 py-2.5 text-sm text-ink outline-none focus:border-primary/50"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-xs font-medium text-muted">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-hairline bg-canvas px-4 py-2.5 text-sm text-ink outline-none focus:border-primary/50"
        />
      </div>

      <div>
        <label htmlFor="service" className="text-xs font-medium text-muted">
          What do you need?
        </label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-hairline bg-canvas px-4 py-2.5 text-sm text-ink outline-none focus:border-primary/50"
        >
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-medium text-muted">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about your project, timeline, and budget if you have one."
          className="mt-1.5 w-full resize-y rounded-xl border border-hairline bg-canvas px-4 py-2.5 text-sm text-ink outline-none focus:border-primary/50"
        />
      </div>

      {status === "error" ? (
        <p className="text-sm text-semantic-down-deep">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        data-track="lead_submit"
        data-track-location="contact_form"
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary transition hover:bg-primary-deep disabled:opacity-60 sm:w-auto"
      >
        <Send className="h-4 w-4" />
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
