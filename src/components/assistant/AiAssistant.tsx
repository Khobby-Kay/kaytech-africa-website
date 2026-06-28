"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import {
  getAssistantReply,
  assistantPrompts,
  whatsappQuoteLink,
} from "@/lib/assistant";
import { TEEDRA } from "@/lib/teedra";
import { TeedraAvatar } from "@/components/assistant/TeedraAvatar";
import { trackEvent } from "@/lib/analytics";

type Message = { id: number; from: "bot" | "user"; text: string };

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [showEscalate, setShowEscalate] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, from: "bot", text: TEEDRA.greeting },
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
        aria-label={open ? "Close Teedra chat" : "Chat with Teedra"}
        aria-expanded={open}
        className="fixed bottom-[calc(68px+env(safe-area-inset-bottom,0px))] right-3 z-[55] transition hover:scale-105 motion-reduce:hover:scale-100 sm:right-4 lg:bottom-6 lg:right-6"
      >
        {open ? (
          <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-on-primary shadow-lg ring-2 ring-white/20">
            <X className="h-6 w-6" />
          </span>
        ) : (
          <TeedraAvatar className="h-14 w-14" animated />
        )}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-label="Teedra — KayTech assistant"
          className="fixed bottom-[calc(136px+env(safe-area-inset-bottom,0px))] right-3 z-[55] flex h-[min(68vh,520px)] w-[min(calc(100vw-1.5rem),380px)] flex-col overflow-hidden rounded-3xl border border-hairline bg-canvas shadow-2xl sm:right-4 lg:bottom-24 lg:right-6"
        >
          <header className="flex items-center gap-3 border-b border-hairline bg-primary px-4 py-3 text-on-primary">
            <TeedraAvatar className="h-10 w-10 shrink-0" active />
            <div className="leading-tight">
              <p className="text-sm font-semibold">{TEEDRA.name}</p>
              <p className="text-[11px] text-on-primary/80">{TEEDRA.tagline}</p>
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
                  m.from === "user" ? "flex justify-end" : "flex items-end gap-2"
                }
              >
                {m.from === "bot" ? (
                  <TeedraAvatar className="h-7 w-7 shrink-0" />
                ) : null}
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
                  data-track-location="teedra"
                  className="inline-flex items-center justify-center gap-2 rounded-pill bg-semantic-up-deep px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  data-track="call_click"
                  data-track-location="teedra"
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
              placeholder={TEEDRA.placeholder}
              aria-label="Message Teedra"
              className="min-w-0 flex-1 rounded-pill border border-hairline bg-surface-soft px-4 py-2.5 text-sm text-ink outline-none focus:border-primary/50"
            />
            <button
              type="submit"
              aria-label="Send message to Teedra"
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
