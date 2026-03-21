"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    await fetch("https://formspree.io/f/xgonbwdv", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Have a project in mind? Book a free discovery call or send us a
            message.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold">Send a Message</h2>
            <p className="mt-2 text-sm text-muted">
              We&apos;ll get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl border border-primary/30 bg-primary-light p-8 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-primary"
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
                <h3 className="mt-4 text-lg font-semibold">Message Sent!</h3>
                <p className="mt-2 text-sm text-muted">
                  Thanks for reaching out. We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Calendly */}
          <div>
            <h2 className="text-2xl font-bold">Book a Discovery Call</h2>
            <p className="mt-2 text-sm text-muted">
              30 minutes, no commitment. Pick a time that works for you.
            </p>
            <div className="mt-8">
              <CalendlyEmbed url="https://calendly.com/tomi13824/30min" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
