import Link from "next/link";
import { Logo } from "./logo";

const footerLinks = {
  company: [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" },
  ],
  services: [
    { name: "Brand Partnerships", href: "#services" },
    { name: "Creator Management", href: "#creators" },
    { name: "Campaign Strategy", href: "#services" },
  ],
  social: [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "TikTok", href: "https://tiktok.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Logo className="w-[120px] md:w-[140px] text-foreground mb-6" />
            <p className="font-mono text-xs text-foreground/40 max-w-[220px]">
              Minimal, high-performance influencer campaigns built for brands
              that want measurable growth.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-foreground/40 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-mono text-sm text-foreground/60 hover:text-foreground transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-foreground/40 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-mono text-sm text-foreground/60 hover:text-foreground transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-foreground/40 mb-4">
              Social
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-foreground/60 hover:text-foreground transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-foreground/30">
            &copy; {new Date().getFullYear()} Shipd Media. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#privacy"
              className="font-mono text-xs text-foreground/30 hover:text-foreground/60 transition-colors duration-150"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="font-mono text-xs text-foreground/30 hover:text-foreground/60 transition-colors duration-150"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
