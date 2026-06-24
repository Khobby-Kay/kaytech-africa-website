import Image from "next/image";

/** Official KayTech logo — favicons use separate text marks for Google. */
export function LogoMark({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/logo.jpg"
      alt="KayTech Africa logo"
      width={140}
      height={40}
      className={className}
      priority
    />
  );
}
