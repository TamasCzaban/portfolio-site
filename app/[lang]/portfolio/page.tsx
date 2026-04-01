import type { Metadata } from "next";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { getDictionary, hasLocale } from "../dictionaries";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.portfolio.title,
    description: dict.portfolio.metaDescription,
    alternates: {
      languages: { hu: "/hu/portfolio", en: "/en/portfolio" },
    },
  };
}

export default async function PortfolioPage({
  params,
}: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const { portfolio } = dict;

  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {portfolio.heading}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{portfolio.subheading}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => {
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
      </section>
    </>
  );
}
