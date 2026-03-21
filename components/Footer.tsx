import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="text-primary">CZ</span> Dev
            </Link>
            <p className="mt-2 text-sm text-muted">
              Full-stack development for founders who need production-grade
              software.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              Contact
            </h4>
            <p className="text-sm text-muted">
              Ready to build something?
              <br />
              <a
                href="mailto:tamas@czaban.dev"
                className="text-primary transition-colors hover:text-primary-dark"
              >
                tamas@czaban.dev
              </a>
              <br />
              <Link
                href="/contact"
                className="text-primary transition-colors hover:text-primary-dark"
              >
                Book a free discovery call
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} CZ Dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
