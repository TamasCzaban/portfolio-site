import type { Metadata } from "next";

import Link from "next/link";
import { getDictionary, hasLocale } from "../dictionaries";
import { notFound } from "next/navigation";

const teamSkills: Record<string, string[]> = {
  TC: ["Python", "Streamlit", "Firebase", "Stripe", "Pandas", "SQL", "Data Engineering", "Security"],
  ZS: ["Go", "TypeScript", "React", "Docker", "Kubernetes", "REST APIs", "Java", "Python"],
};

export async function generateMetadata({
  params,
}: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.about.title,
    description: dict.about.metaDescription,
    alternates: {
      languages: { hu: "/hu/about", en: "/en/about" },
    },
  };
}

export default async function AboutPage({
  params,
}: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const { about } = dict;

  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {about.heading}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{about.subheading}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          {about.team.map((member) => (
            <div key={member.name} className="rounded-xl border border-border bg-background p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  {member.initial}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{member.name}</h2>
                  <p className="text-sm text-muted">{member.role}</p>
                </div>
              </div>
              <p className="mt-6 leading-relaxed text-muted">{member.bio}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {(teamSkills[member.initial] ?? []).map((skill) => (
                  <span key={skill} className="rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">{about.statsHeading}</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <h3 className="mt-2 font-semibold">{stat.label}</h3>
                <p className="mt-2 text-sm text-muted">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight">{about.ctaHeading}</h2>
        <p className="mt-2 text-muted">{about.ctaSubheading}</p>
        <Link
          href={`/${lang}/contact`}
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          {about.ctaButton}
        </Link>
      </section>
    </>
  );
}
