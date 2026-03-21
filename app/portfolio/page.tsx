import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies and projects built by CZ Dev — production applications with real users.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Portfolio
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Real projects, real users. Click any project to read the full case
            study.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              subtitle={p.subtitle}
              techStack={p.techStack}
              thumbnail={p.thumbnail}
            />
          ))}
        </div>
      </section>
    </>
  );
}
