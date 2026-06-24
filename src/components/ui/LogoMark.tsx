import Image from "next/image";

/** Full KayTech wordmark — avoids showing only the V-mark (which resembles Vercel). */
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
