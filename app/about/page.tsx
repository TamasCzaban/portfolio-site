import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the CZ Dev team — Tamas and Zsombor. Full-stack developers with combined expertise in Python, Go, React, Firebase, Kubernetes, and more.",
};

const team = [
  {
    name: "Tamas Czaban",
    role: "Co-Founder & Developer",
    bio: "Python developer with deep expertise in data engineering, security, and cloud platforms. Builds production applications with Firebase, Stripe, and Streamlit. Passionate about writing well-tested, maintainable code that non-technical users actually enjoy using.",
    skills: [
      "Python",
      "Firebase",
      "Stripe",
      "Streamlit",
      "Data Engineering",
      "Security",
      "Pandas",
      "SQL",
    ],
    initial: "TC",
  },
  {
    name: "Zsombor",
    role: "Co-Founder & Developer",
    bio: "Full-stack engineer specializing in Go and React/TypeScript. Expert in DevOps, Kubernetes, and cloud architecture. Designs scalable systems that handle real-world traffic and complexity.",
    skills: [
      "Go",
      "React",
      "TypeScript",
      "Kubernetes",
      "Docker",
      "AWS",
      "GCP",
      "CI/CD",
    ],
    initial: "ZS",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            About Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            We&apos;re a two-person development team that builds
            production-grade software for founders and small teams.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-xl border border-border bg-background p-8"
            >
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
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Combined strengths */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">
            What You Get With Us
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div>
              <div className="text-4xl font-bold text-primary">2</div>
              <h3 className="mt-2 font-semibold">Senior Developers</h3>
              <p className="mt-2 text-sm text-muted">
                No juniors, no project managers. Direct access to the people
                writing your code.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">Full</div>
              <h3 className="mt-2 font-semibold">Stack Coverage</h3>
              <p className="mt-2 text-sm text-muted">
                Frontend, backend, infrastructure, DevOps — we handle it all
                without subcontracting.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">0</div>
              <h3 className="mt-2 font-semibold">Coordination Overhead</h3>
              <p className="mt-2 text-sm text-muted">
                We work as a tight unit. No handoff meetings, no waiting on
                approvals from five people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Want to work together?
        </h2>
        <p className="mt-2 text-muted">
          We&apos;d love to hear about your project.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
