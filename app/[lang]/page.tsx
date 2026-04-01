import type { Metadata } from "next";

import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";

const serviceIcons = [
  <svg key="web" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  <svg key="dash" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
  <svg key="api" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  <svg key="cloud" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>,
  <svg key="auto" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>,
];

export async function generateMetadata({
  params,
}: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    alternates: {
      languages: { hu: "/hu", en: "/en" },
    },
  };
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const featured = projects.filter((p) => p.featured);
  const { home } = dict;

  return (
    <>
      <Hero locale={lang} hero={dict.hero} />

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">{home.servicesHeading}</h2>
          <p className="mt-2 text-muted">{home.servicesSubheading}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {home.services.map((s, i) => (
            <ServiceCard key={s.title} title={s.title} description={s.description} icon={serviceIcons[i]} />
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">{home.featuredHeading}</h2>
            <p className="mt-2 text-muted">{home.featuredSubheading}</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {featured.map((p) => {
              const projectDict = dict.projects[p.slug as keyof typeof dict.projects];
              return (
                <ProjectCard
                  key={p.slug}
                  slug={p.slug}
                  locale={lang}
                  title={projectDict?.title ?? p.slug}
                  subtitle={projectDict?.subtitle ?? ""}
                  techStack={p.techStack}
                  thumbnail={p.thumbnail}
                />
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={`/${lang}/portfolio`}
              className="text-sm font-medium text-primary transition-colors hover:text-primary-dark"
            >
              {home.viewAll} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">{home.whyUsHeading}</h2>
          <p className="mt-2 text-muted">{home.whyUsSubheading}</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {home.advantages.map((a) => (
            <div key={a.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">{a.title}</h3>
                <p className="mt-1 text-sm text-muted">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">{home.ctaHeading}</h2>
          <p className="mt-2 text-lg text-white/80">{home.ctaSubheading}</p>
          <Link
            href={`/${lang}/contact`}
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-white/90"
          >
            {home.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
