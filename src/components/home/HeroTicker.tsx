const items = [
  { label: "AI automation", live: true },
  { label: "Web development" },
  { label: "E-commerce builds" },
  { label: "Accra-based studio" },
  { label: "1914+ businesses served" },
  { label: "Academy cohorts" },
  { label: "Africa-first design" },
  { label: "3G-optimised delivery" },
];

export function HeroTicker() {
  return (
    <div
      className="absolute inset-x-0 bottom-0 overflow-hidden bg-primary text-on-primary"
      aria-label="Platform highlights"
    >
      <div className="hero-ticker-mask py-3">
        <div className="marquee-track flex w-max">
          {[0, 1].map((set) => (
            <div key={set} className="flex shrink-0 items-center gap-10 px-5">
              {items.map((item, i) => (
                <span
                  key={`${set}-${item.label}`}
                  className="inline-flex items-center gap-10"
                >
                  {i > 0 && (
                    <span className="text-on-primary/70" aria-hidden>
                      ·
                    </span>
                  )}
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em]">
                    {item.live && (
                      <span
                        className="size-1.5 shrink-0 animate-pulse rounded-full bg-semantic-up shadow-[0_0_8px_rgba(18,215,92,0.85)]"
                        aria-hidden
                      />
                    )}
                    {item.label}
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
