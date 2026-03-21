import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack web development services: web apps, dashboards, APIs, DevOps, and automation.",
};

const services = [
  {
    title: "Full-Stack Web Applications",
    description:
      "Custom web applications built with modern frameworks. Authentication, payments, real-time features, and everything in between.",
    details: [
      "React / Next.js frontends",
      "Python / Go backends",
      "Firebase, PostgreSQL, or MongoDB",
      "Stripe payment integration",
      "OAuth & custom auth flows",
    ],
  },
  {
    title: "Data Dashboards & Analytics",
    description:
      "Turn your data into clear, interactive dashboards that help your team make better decisions faster.",
    details: [
      "Streamlit & custom dashboard UIs",
      "Data pipeline development",
      "Real-time analytics",
      "CSV/API data ingestion",
      "Automated reporting",
    ],
  },
  {
    title: "API Development & Integrations",
    description:
      "RESTful APIs, webhook handlers, and third-party integrations that connect your systems together.",
    details: [
      "REST & GraphQL API design",
      "Third-party API integrations",
      "Webhook processing",
      "API documentation",
      "Rate limiting & caching",
    ],
  },
  {
    title: "DevOps & Cloud Infrastructure",
    description:
      "Reliable infrastructure that scales. CI/CD pipelines, containerization, and cloud-native architecture.",
    details: [
      "Docker & Kubernetes",
      "CI/CD pipeline setup",
      "AWS / GCP / Azure",
      "Infrastructure as Code",
      "Monitoring & alerting",
    ],
  },
  {
    title: "Process Automation",
    description:
      "Automate repetitive tasks and workflows to save your team hours every week.",
    details: [
      "Workflow automation scripts",
      "Scheduled data pipelines",
      "Email & notification systems",
      "Document generation",
      "System integrations",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We hop on a 30-minute call to understand your problem, users, and constraints. No sales pitch — just listening.",
  },
  {
    step: "02",
    title: "Proposal",
    description:
      "Within a few days, you get a clear scope document: what we'll build, the tech choices, timeline, and fixed price.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We build in short sprints with regular demos. You see progress weekly and can course-correct early.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We deploy to production, set up monitoring, and make sure everything runs smoothly.",
  },
  {
    step: "05",
    title: "Support",
    description:
      "Post-launch support to fix bugs, handle edge cases, and iterate based on user feedback.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            We handle the full stack — from database design to deployment
            pipelines. You focus on your business, we handle the engineering.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-16">
          {services.map((s) => (
            <div
              key={s.title}
              className="grid gap-8 md:grid-cols-2 md:items-start"
            >
              <div>
                <h2 className="text-2xl font-bold">{s.title}</h2>
                <p className="mt-3 text-muted">{s.description}</p>
              </div>
              <ul className="space-y-3">
                {s.details.map((d) => (
                  <li key={d} className="flex items-start gap-3">
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
                    <span className="text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">Our Process</h2>
          <p className="mt-2 text-muted">
            Simple, transparent, and predictable.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-5">
            {processSteps.map((s) => (
              <div key={s.step}>
                <div className="text-3xl font-bold text-primary">{s.step}</div>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Have a project in mind?
        </h2>
        <p className="mt-2 text-muted">
          Let&apos;s talk about what you need. The first call is always free.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Book a Discovery Call
        </Link>
      </section>
    </>
  );
}
