import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Link
            href="/portfolio"
            className="mb-6 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Portfolio
          </Link>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{project.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-primary-light px-4 py-1.5 text-sm font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot gallery */}
      <section className="mx-auto max-w-4xl px-6 py-8">
        {project.screenshots && project.screenshots.length > 0 ? (
          <div className="space-y-4">
            {/* Hero screenshot */}
            <div className="overflow-hidden rounded-xl border border-border bg-surface">
              <img
                src={project.screenshots[0].src}
                alt={project.screenshots[0].caption}
                className="w-full object-cover"
              />
              <p className="px-4 py-2 text-xs text-muted">{project.screenshots[0].caption}</p>
            </div>
            {/* Remaining screenshots grid */}
            {project.screenshots.length > 1 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {project.screenshots.slice(1).map((s) => (
                  <div key={s.src} className="overflow-hidden rounded-xl border border-border bg-surface">
                    <img src={s.src} alt={s.caption} className="w-full object-cover" />
                    <p className="px-4 py-2 text-xs text-muted">{s.caption}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-border bg-surface">
            <div className="aspect-video p-12 flex items-center justify-center">
              <img
                src={project.thumbnail}
                alt={`${project.title} screenshot`}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        )}
      </section>

      {/* Video placeholder */}
      {project.videoUrl && (
        <section className="mx-auto max-w-4xl px-6 py-8">
          <h2 className="mb-4 text-2xl font-bold">Video Walkthrough</h2>
          <div className="aspect-video overflow-hidden rounded-xl border border-border bg-surface">
            <iframe
              src={project.videoUrl}
              className="h-full w-full"
              allowFullScreen
              title={`${project.title} walkthrough`}
            />
          </div>
        </section>
      )}

      {/* Problem */}
      <section className="mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-2xl font-bold">The Problem</h2>
        <p className="mt-4 leading-relaxed text-muted">{project.problem}</p>
      </section>

      {/* Solution */}
      <section className="mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-2xl font-bold">The Solution</h2>
        <ul className="mt-4 space-y-3">
          {project.solution.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Architecture */}
      {project.architectureDescription && (
        <section className="mx-auto max-w-4xl px-6 py-8">
          <h2 className="text-2xl font-bold">Architecture</h2>
          <div className="mt-4 rounded-xl border border-border bg-surface p-8">
            <p className="text-center font-mono text-lg text-muted">
              {project.architectureDescription}
            </p>
          </div>
        </section>
      )}

      {/* Results */}
      <section className="mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-2xl font-bold">Results</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {project.results.map((result) => (
            <div
              key={result}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm">{result}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Links */}
      <section className="mx-auto max-w-4xl px-6 py-8 pb-20">
        <div className="flex flex-wrap gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-hover"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Try It Live
            </a>
          )}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Interested? Let&apos;s Talk
          </Link>
        </div>
      </section>
    </>
  );
}
