import Image from "next/image";
import { leadership } from "@/lib/site";
import { cn } from "@/lib/utils";

type TeedraAvatarProps = {
  className?: string;
  /** Floating pulse + glow — use on the chat launcher button */
  animated?: boolean;
  /** Subtle breathe — use in chat header while open */
  active?: boolean;
};

/** Teedra avatar — Aikins Armstrong, KayTech founder & on-site assistant. */
export function TeedraAvatar({
  className = "h-9 w-9",
  animated = false,
  active = false,
}: TeedraAvatarProps) {
  return (
    <span
      className={cn(
        "relative inline-block shrink-0",
        animated && "animate-float motion-reduce:animate-none",
        className,
      )}
    >
      {animated ? (
        <span
          aria-hidden
          className="absolute -inset-1 rounded-full bg-accent/25 animate-teedra-glow motion-reduce:hidden"
        />
      ) : null}
      <span
        className={cn(
          "relative block h-full w-full overflow-hidden rounded-full bg-primary shadow-float ring-2 ring-white/25",
          active && "animate-teedra-breathe motion-reduce:animate-none",
        )}
      >
        <Image
          src={leadership.ceo.image}
          alt={`${leadership.ceo.name} — Teedra, KayTech assistant`}
          fill
          sizes="56px"
          className="object-cover object-top"
        />
      </span>
    </span>
  );
}
