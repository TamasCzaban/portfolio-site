import type { Metadata } from "next";

import Link from "next/link";
import { getDictionary, hasLocale } from "../dictionaries";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.services.title,
    description: dict.services.metaDescription,
    alternates: {
      languages: { hu: "/hu/services", en: "/en/services" },
    },
  };
}

export default async function ServicesPage({
  params,
}: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const { services } = dict;

  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {services.heading}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            {services.subheading}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-16">
          {services.items.map((s) => (
            <div key={s.title} className="grid gap-8 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-2xl font-bold">{s.title}</h2>
                <p className="mt-3 text-muted">{s.description}</p>
              </div>
              <ul className="space-y-3">
                {s.details.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">{services.processHeading}</h2>
          <p className="mt-2 text-muted">{services.processSubheading}</p>
          <div className="mt-12 grid gap-8 md:grid-cols-5">
            {services.process.map((s) => (
              <div key={s.step}>
                <div className="text-3xl font-bold text-primary">{s.step}</div>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight">{services.ctaHeading}</h2>
        <p className="mt-2 text-muted">{services.ctaSubheading}</p>
        <Link
          href={`/${lang}/contact`}
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          {services.ctaButton}
        </Link>
      </section>
    </>
  );
}
