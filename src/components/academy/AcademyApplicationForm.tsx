"use client";

import { useState } from "react";
import { CheckCircle2, ClipboardList, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import { academyApplyCourseOptions } from "@/lib/academy-content";

type Status = "idle" | "sending" | "sent" | "error";

type Props = {
  defaultCourse?: string;
  location?: string;
  compact?: boolean;
};

export function AcademyApplicationForm({
  defaultCourse = academyApplyCourseOptions[0],
  location = "academy_apply",
  compact = false,
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: defaultCourse,
    message: "",
    company: "",
  });

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function whatsappFallback() {
    const text = `Hi KayTech Academy, I'm ${form.name}.%0A%0ACourse: ${form.course}%0A${
      form.phone ? `Phone: ${form.phone}%0A` : ""
    }${form.email ? `Email: ${form.email}%0A` : ""}%0A${form.message}`;
    return `${siteConfig.contact.whatsapp}?text=${text}`;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const payload = {
      ...form,
      service: `KayTech Academy. ${form.course}`,
      message: `[Academy application]\nCourse: ${form.course}\n\n${form.message}`,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok || !data.ok || data.delivered === false) {
        setStatus("error");
        setError(
          data.error ||
            "Application received, but email delivery failed. Please continue on WhatsApp so admissions sees it.",
        );
        return;
      }

      setStatus("sent");
      trackEvent("academy_apply_submit", {
        location,
        label: form.course,
      });
    } catch {
      setStatus("error");
      setError("Network error. Please apply via WhatsApp.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-semantic-up/30 bg-semantic-up/10 p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-semantic-up-deep" />
        <h4 className="mt-3 font-display text-lg font-semibold text-ink">
          Application received. thank you, {form.name.split(" ")[0] || "there"}!
        </h4>
        <p className="mt-2 text-sm text-muted">
          Admissions will call or WhatsApp shortlisted applicants. Only 10 seats per cohort.
        </p>
        <a
          href={whatsappFallback()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-pill bg-semantic-up-deep px-5 py-2.5 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          Follow up on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={compact ? "space-y-4" : "space-y-5 rounded-3xl border border-hairline bg-canvas p-6 sm:p-8"}
    >
      {!compact ? (
        <div>
          <h3 className="font-display text-xl font-semibold text-ink">Apply to KayTech Academy</h3>
          <p className="mt-2 text-sm text-muted">
            Submit here. Mention scholarships or payment plans in your message.
          </p>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-ink">Full name *</span>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-hairline bg-surface-soft px-4 py-2.5 text-ink"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">Phone (WhatsApp) *</span>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-hairline bg-surface-soft px-4 py-2.5 text-ink"
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className="font-medium text-ink">Email</span>
        <input
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-hairline bg-surface-soft px-4 py-2.5 text-ink"
        />
      </label>

      <label className="block text-sm">
        <span className="font-medium text-ink">Course *</span>
        <select
          value={form.course}
          onChange={(e) => update("course", e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-hairline bg-surface-soft px-4 py-2.5 text-ink"
        >
          {academyApplyCourseOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm">
        <span className="font-medium text-ink">Why KayTech? Experience & goals *</span>
        <textarea
          required
          rows={compact ? 3 : 4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Beginner or career switch? Online or on-site? Scholarship interest?"
          className="mt-1.5 w-full rounded-xl border border-hairline bg-surface-soft px-4 py-2.5 text-ink"
        />
      </label>

      <input
        type="text"
        name="company"
        value={form.company}
        onChange={(e) => update("company", e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

      {error ? <p className="text-sm text-semantic-down">{error}</p> : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          data-track="academy_apply_click"
          data-track-location={location}
          className="inline-flex h-11 items-center gap-2 rounded-pill bg-accent px-6 text-sm font-bold text-white shadow-glow transition hover:bg-accent-bright disabled:opacity-60"
        >
          <ClipboardList className="h-4 w-4" />
          {status === "sending" ? "Sending…" : "Submit application"}
        </button>
        <a
          href={whatsappFallback()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-pill border border-hairline px-5 text-sm font-semibold text-ink"
        >
          <MessageCircle className="h-4 w-4" />
          Apply via WhatsApp instead
        </a>
      </div>
    </form>
  );
}
