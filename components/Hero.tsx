import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="animate-fade-in-up text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            We build full-stack solutions for founders who have{" "}
            <span className="text-primary">outgrown no-code tools.</span>
          </h1>
          <p className="animate-fade-in-up animate-delay-100 mt-6 max-w-xl text-lg text-muted md:text-xl">
            From idea to production — web apps, dashboards, APIs, and
            infrastructure. Fast delivery by a two-person team with zero
            coordination tax.
          </p>
          <div className="animate-fade-in-up animate-delay-200 mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Book a Free Discovery Call
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-semibold transition-colors hover:bg-surface-hover"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
      {/* Decorative gradient */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
}
