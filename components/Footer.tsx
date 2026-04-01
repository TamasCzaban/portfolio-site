import Link from "next/link";

interface FooterDict {
  tagline: string;
  navHeading: string;
  contactHeading: string;
  readyToBuild: string;
  bookCall: string;
  allRightsReserved: string;
}

interface FooterProps {
  locale: string;
  footer: FooterDict;
}

export default function Footer({ locale, footer }: FooterProps) {
  const navLinks = [
    { href: `/${locale}/services`, label: "Services" },
    { href: `/${locale}/portfolio`, label: "Portfolio" },
    { href: `/${locale}/about`, label: "About" },
    { href: `/${locale}/contact`, label: "Contact" },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href={`/${locale}`} className="text-xl font-bold tracking-tight">
              <span className="text-primary">CZ</span> Dev
            </Link>
            <p className="mt-2 text-sm text-muted">{footer.tagline}</p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              {footer.navHeading}
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              {footer.contactHeading}
            </h4>
            <p className="text-sm text-muted">
              {footer.readyToBuild}
              <br />
              <a href="mailto:tamas@czaban.dev" className="text-primary transition-colors hover:text-primary-dark">
                tamas@czaban.dev
              </a>
              <br />
              <Link href={`/${locale}/contact`} className="text-primary transition-colors hover:text-primary-dark">
                {footer.bookCall}
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} CZ Dev. {footer.allRightsReserved}
        </div>
      </div>
    </footer>
  );
}
