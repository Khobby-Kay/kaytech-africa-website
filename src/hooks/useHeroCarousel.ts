"use client";

import { useCallback, useEffect, useState } from "react";

export function useHeroCarousel(length: number, intervalMs = 6000) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (length <= 1) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [intervalMs, length]);

  const goTo = useCallback(
    (index: number) => {
      if (length <= 0) return;
      setActive(((index % length) + length) % length);
    },
    [length],
  );

  return { active, setActive: goTo };
}
