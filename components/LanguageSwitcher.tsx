"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LanguageSwitcherProps {
  locale: string;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  function getLocalePath(targetLocale: string) {
    // pathname is like /hu/portfolio/bemer-crm
    // swap the first segment
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    return segments.join("/") || "/";
  }

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border px-1 py-0.5 text-xs font-semibold">
      <Link
        href={getLocalePath("hu")}
        className={`rounded px-2 py-1 transition-colors ${
          locale === "hu"
            ? "bg-primary text-white"
            : "text-muted hover:text-foreground"
        }`}
      >
        HU
      </Link>
      <Link
        href={getLocalePath("en")}
        className={`rounded px-2 py-1 transition-colors ${
          locale === "en"
            ? "bg-primary text-white"
            : "text-muted hover:text-foreground"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
