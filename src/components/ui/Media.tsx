import Image from "next/image";
import type { ReactNode } from "react";
import { getBlur } from "@/lib/image-blur";
import { cn } from "@/lib/utils";

type Ratio = "square" | "4/3" | "3/4" | "4/5" | "5/4" | "16/9" | "16/10" | "3/2";

const ratioClass: Record<Ratio, string> = {
  square: "aspect-square",
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "4/5": "aspect-[4/5]",
  "5/4": "aspect-[5/4]",
  "16/9": "aspect-video",
  "16/10": "aspect-[16/10]",
  "3/2": "aspect-[3/2]",
};

type MediaProps = {
  src: string;
  alt: string;
  ratio?: Ratio;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  /** Subtle zoom-on-hover. Default true for an interactive, premium feel. */
  zoom?: boolean;
  /** Dark gradient scrim from the bottom — use when overlaying text/badges. */
  scrim?: boolean;
  /** Hairline ring + soft shadow framing. Default true. */
  framed?: boolean;
  /** Rounded corner scale. */
  rounded?: "2xl" | "3xl" | "full" | "none";
  /** Content rendered on top of the image (badges, captions). */
  children?: ReactNode;
  objectPosition?: string;
  quality?: number;
};

const roundedClass: Record<NonNullable<MediaProps["rounded"]>, string> = {
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
  none: "",
};

/**
 * Premium image wrapper shared across the site.
 * HCI principles baked in:
 * - Visibility of system status: blur-up placeholder while the asset loads.
 * - Aesthetic, consistent framing: unified ratios, radius, ring and shadow.
 * - Feedback / affordance: gentle hover zoom (disabled under reduced-motion).
 */
export function Media({
  src,
  alt,
  ratio = "4/3",
  sizes = "(max-width: 1024px) 100vw, 540px",
  priority = false,
  className,
  imageClassName,
  zoom = true,
  scrim = false,
  framed = true,
  rounded = "3xl",
  children,
  objectPosition,
  quality = 90,
}: MediaProps) {
  const blurDataURL = getBlur(src);

  return (
    <div
      className={cn(
        "group/media relative overflow-hidden bg-surface-soft",
        roundedClass[rounded],
        ratioClass[ratio],
        framed && "border border-hairline shadow-card",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        style={objectPosition ? { objectPosition } : undefined}
        className={cn(
          "object-cover transition-transform duration-700 ease-out will-change-transform motion-reduce:transition-none",
          zoom && "group-hover/media:scale-[1.04]",
          imageClassName
        )}
      />

      {scrim ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-dark/75 via-surface-dark/10 to-transparent"
        />
      ) : null}

      {children}
    </div>
  );
}
