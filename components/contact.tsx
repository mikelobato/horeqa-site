"use client"

import React from "react"

import { Mail } from "lucide-react"
import { useState } from "react"
import { useTRN } from "@/contexts/LanguageContext"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const TRN = useTRN()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="border-t border-border bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {TRN("contact.eyebrow", "Contact")}
            </h2>
            <p className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
              {TRN("contact.title", "Let's talk about your technology needs.")}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {TRN(
                "contact.description",
                "Whether you are planning a new technology rollout, need help with existing integrations, or want an independent assessment of your tech stack, we are here to help."
              )}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a
                href="mailto:info@horeqa.com"
                className="text-sm font-medium text-foreground underline underline-offset-4 hover:text-primary"
              >
                info@horeqa.com
              </a>
            </div>
          </div>

          {/* Right column — form */}
          <div>
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-lg border border-border bg-background p-10">
                <p className="text-center font-medium text-foreground">
                  {TRN("contact.thankYou", "Thank you. We will be in touch shortly.")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 rounded-lg border border-border bg-background p-6 md:p-8"
              >
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    {TRN("contact.form.name", "Name")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder={TRN("contact.form.namePlaceholder", "Your name")}
                    className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    {TRN("contact.form.company", "Company")}
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder={TRN("contact.form.companyPlaceholder", "Your company")}
                    className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    {TRN("contact.form.email", "Email")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder={TRN("contact.form.emailPlaceholder", "you@company.com")}
                    className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    {TRN("contact.form.message", "Message")}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder={TRN("contact.form.messagePlaceholder", "Tell us about your project or needs")}
                    className="resize-none rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {TRN("contact.form.submit", "Send message")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
