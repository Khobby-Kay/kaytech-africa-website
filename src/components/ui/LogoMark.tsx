import Image from "next/image";
import { brandAsset } from "@/lib/brand-assets";

/** Full KayTech wordmark — never the V-only mark (Google confuses it with Vercel). */
export function LogoMark({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <Image
      src={brandAsset("/logo.png")}
      alt="KayTech Africa — best web design in Accra, Ghana"
      width={160}
      height={40}
      className={className}
      priority
    />
  );
}
