"use client";

import { useState, use } from "react";
import type { FormEvent } from "react";
import CalendlyEmbed from "@/components/CalendlyEmbed";

// Static translations object — avoids server-only getDictionary in client component
const translations = {
  hu: {
    heading: "Kapcsolat",
    subheading: "Van egy projektötleted? Foglalj ingyenes konzultációt, küldj üzenetet, vagy írj közvetlenül:",
    formHeading: "Küldj Üzenetet",
    formSubheading: "24 órán belül visszajelzünk.",
    nameLabel: "Név",
    namePlaceholder: "A neved",
    emailLabel: "E-mail",
    emailPlaceholder: "te@valami.hu",
    messageLabel: "Üzenet",
    messagePlaceholder: "Mesélj a projektedről...",
    sendButton: "Üzenet Küldése",
    successHeading: "Üzenet Elküldve!",
    successMessage: "Köszönjük, hogy megkerestél. Hamarosan visszajelzünk.",
    calendlyHeading: "Foglalj Konzultációt",
    calendlySubheading: "30 perc, kötelezettség nélkül. Válassz egy számodra megfelelő időpontot.",
  },
  en: {
    heading: "Contact Us",
    subheading: "Have a project in mind? Book a free discovery call, send us a message, or email us directly at",
    formHeading: "Send a Message",
    formSubheading: "We'll get back to you within 24 hours.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@company.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your project...",
    sendButton: "Send Message",
    successHeading: "Message Sent!",
    successMessage: "Thanks for reaching out. We'll be in touch soon.",
    calendlyHeading: "Book a Discovery Call",
    calendlySubheading: "30 minutes, no commitment. Pick a time that works for you.",
  },
} as const;

export default function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);
  const t = translations[lang as keyof typeof translations] ?? translations.en;
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
            {t.heading}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            {t.subheading}{" "}
            <a href="mailto:tamas@czaban.dev" className="text-primary hover:underline">
              tamas@czaban.dev
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">{t.formHeading}</h2>
            <p className="mt-2 text-sm text-muted">{t.formSubheading}</p>

            {submitted ? (
              <div className="mt-8 rounded-xl border border-primary/30 bg-primary-light p-8 text-center">
                <svg className="mx-auto h-12 w-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="mt-4 text-lg font-semibold">{t.successHeading}</h3>
                <p className="mt-2 text-sm text-muted">{t.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">{t.nameLabel}</label>
                  <input type="text" id="name" name="name" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder={t.namePlaceholder} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">{t.emailLabel}</label>
                  <input type="email" id="email" name="email" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder={t.emailPlaceholder} />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">{t.messageLabel}</label>
                  <textarea id="message" name="message" rows={5} required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder={t.messagePlaceholder} />
                </div>
                <button type="submit" className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark">
                  {t.sendButton}
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold">{t.calendlyHeading}</h2>
            <p className="mt-2 text-sm text-muted">{t.calendlySubheading}</p>
            <div className="mt-8">
              <CalendlyEmbed url="https://calendly.com/tomi13824/30min" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
