"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import {
  getAssistantReply,
  assistantPrompts,
  whatsappQuoteLink,
} from "@/lib/assistant";
import { trackEvent } from "@/lib/analytics";

type Message = { id: number; from: "bot" | "user"; text: string };

const GREETING =
  "Hi! I'm KayTech's assistant. Ask me about our web design, development, SEO, or AI automation services — or get a quote in seconds.";

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [showEscalate, setShowEscalate] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, from: "bot", text: GREETING },
  ]);
  const idRef = useRef(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { id: idRef.current++, from: "user", text: trimmed };
    const reply = getAssistantReply(trimmed);
    const botMsg: Message = { id: idRef.current++, from: "bot", text: reply.text };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setShowEscalate(reply.escalate);
    setInput("");
    trackEvent("assistant_message", { label: trimmed.slice(0, 80) });
  }

  function toggle() {
    setOpen((prev) => {
      const next = !prev;
      if (next) trackEvent("assistant_open", { location: "floating" });
      return next;
    });
  }

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-label={open ? "Close assistant" : "Open KayTech assistant"}
        aria-expanded={open}
        className="fixed bottom-[68px] right-4 z-[60] grid h-14 w-14 place-items-center rounded-full bg-primary text-on-primary shadow-lg ring-1 ring-black/5 transition hover:bg-primary-deep lg:bottom-6 lg:right-6"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-label="KayTech assistant"
          className="fixed bottom-[136px] right-4 z-[60] flex h-[min(70vh,520px)] w-[min(92vw,380px)] flex-col overflow-hidden rounded-3xl border border-hairline bg-canvas shadow-2xl lg:bottom-24 lg:right-6"
        >
          <header className="flex items-center gap-3 border-b border-hairline bg-primary px-4 py-3 text-on-primary">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
              <Sparkles className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">KayTech Assistant</p>
              <p className="text-[11px] text-on-primary/80">
                Typically replies instantly
              </p>
            </div>
          </header>

          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={
                  m.from === "user" ? "flex justify-end" : "flex justify-start"
                }
              >
                <p
                  className={
                    m.from === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2.5 text-sm text-on-primary"
                      : "max-w-[85%] rounded-2xl rounded-bl-sm bg-surface-soft px-3.5 py-2.5 text-sm text-ink"
                  }
                >
                  {m.text}
                </p>
              </div>
            ))}

            {showEscalate ? (
              <div className="flex flex-col gap-2 pt-1">
                <a
                  href={whatsappQuoteLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="whatsapp_click"
                  data-track-location="assistant"
                  className="inline-flex items-center justify-center gap-2 rounded-pill bg-semantic-up-deep px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  data-track="call_click"
                  data-track-location="assistant"
                  className="inline-flex items-center justify-center gap-2 rounded-pill border border-hairline px-4 py-2.5 text-sm font-semibold text-ink"
                >
                  <Phone className="h-4 w-4" />
                  Call {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            ) : null}
          </div>

          {messages.length <= 1 ? (
            <div className="flex flex-wrap gap-2 border-t border-hairline px-4 py-3">
              {assistantPrompts.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => send(p)}
                  className="rounded-pill border border-hairline bg-surface-soft px-3 py-1.5 text-xs font-medium text-ink transition hover:border-primary/40"
                >
                  {p}
                </button>
              ))}
            </div>
          ) : null}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-hairline px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, pricing…"
              aria-label="Message the assistant"
              className="min-w-0 flex-1 rounded-pill border border-hairline bg-surface-soft px-4 py-2.5 text-sm text-ink outline-none focus:border-primary/50"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-on-primary transition hover:bg-primary-deep"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
