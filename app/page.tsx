import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

const services = [
  {
    title: "Web Applications",
    description:
      "Full-stack web apps with modern frameworks, authentication, payments, and real-time features.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Data Dashboards",
    description:
      "Interactive analytics dashboards that turn raw data into actionable insights for your team.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "API Development",
    description:
      "RESTful and GraphQL APIs, third-party integrations, webhooks, and microservices architecture.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "DevOps & Cloud",
    description:
      "CI/CD pipelines, Kubernetes, cloud infrastructure, monitoring, and automated deployments.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Automation",
    description:
      "Workflow automation, data pipelines, scheduled tasks, and integrations that save your team hours.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const advantages = [
  {
    title: "Zero Coordination Tax",
    description:
      "Two developers who know each other's code. No standups, no Jira, no waiting on approvals.",
  },
  {
    title: "Fast Delivery",
    description:
      "Small team = no bottlenecks. We ship MVPs in weeks, not months.",
  },
  {
    title: "Production-Grade",
    description:
      "Automated tests, CI/CD, monitoring. We build software that runs reliably at scale.",
  },
  {
    title: "Full Ownership",
    description:
      "You get the source code, the infrastructure docs, and the knowledge transfer. No lock-in.",
  },
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">What We Build</h2>
          <p className="mt-2 text-muted">
            End-to-end development — from concept to production.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-muted">
              Real applications in production with real users.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {featured.map((p) => (
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
          <div className="mt-8 text-center">
            <Link
              href="/portfolio"
              className="text-sm font-medium text-primary transition-colors hover:text-primary-dark"
            >
              View all projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Why Work With Us
          </h2>
          <p className="mt-2 text-muted">
            The advantages of a lean, senior two-person team.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {advantages.map((a) => (
            <div key={a.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light">
                <svg
                  className="h-5 w-5 text-primary"
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
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to build something?
          </h2>
          <p className="mt-2 text-lg text-white/80">
            Book a free 30-minute discovery call. No commitment, no pitch deck
            required.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
