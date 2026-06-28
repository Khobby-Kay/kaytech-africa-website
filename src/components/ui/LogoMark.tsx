import Image from "next/image";

import { LOGO_JPG, withBrandVersion } from "@/lib/brand-assets";

/** Official KayTech logo — square 1024×1024 at public/logo.jpg */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <Image
      src={withBrandVersion(LOGO_JPG)}
      alt="KayTech Africa logo"
      width={1024}
      height={1024}
      className={className}
      priority
    />
  );
}
