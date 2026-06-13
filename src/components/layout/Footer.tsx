import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/LogoMark";
import { footerNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex items-center gap-2 font-display text-[22px] lowercase text-ink">
            <LogoMark className="h-7 w-7" />
            kaytech
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-sm text-muted">
            {siteConfig.location.line1}
            <br />
            {siteConfig.location.line2}
          </p>
          <p className="mt-2 text-sm text-muted">
            {siteConfig.contact.phoneDisplay}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Product</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {footerNav.product.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Legal</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {footerNav.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-hairline">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Accra · kaytechafrica.com</p>
        </Container>
      </div>
    </footer>
  );
}
