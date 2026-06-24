import Image from "next/image";

/** Official KayTech logo — favicons are generated from the same file. */
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
