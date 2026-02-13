"use client"

import React from "react"

import { Mail, Phone, Send, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { useLocale, useTRN } from "@/contexts/LanguageContext"

const CONTACT_EMAIL = "info@horeqa.com"
const CONTACT_PHONE = "+34930000000"
const API_PUBLIC_URL_PROD = "https://api.horeqa.com"
const API_PUBLIC_URL_DEV = "https://dev-api.horeqa.com"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [focused, setFocused] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [restaurantName, setRestaurantName] = useState("")
  const [restaurantsCount, setRestaurantsCount] = useState("1")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const TRN = useTRN()
  const locale = useLocale()

  const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_PUBLIC_URL ??
    (process.env.NODE_ENV === "production" ? API_PUBLIC_URL_PROD : API_PUBLIC_URL_DEV)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const response = await fetch(`${apiBaseUrl}/api/public/leads/restaurants`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          restaurantName,
          restaurantsCount: Number.parseInt(restaurantsCount, 10),
          company: restaurantName,
          phone,
          email,
          message,
          locale,
          source: "horeqa-site-contact-form",
          pageUrl: window.location.href,
          referrer: document.referrer || null,
        }),
      })

      if (!response.ok) {
        throw new Error("Lead creation failed")
      }

      setSubmitted(true)
      setName("")
      setRestaurantName("")
      setRestaurantsCount("1")
      setPhone("")
      setEmail("")
      setMessage("")
    } catch {
      setError(
        TRN(
          "contact.form.error",
          "We could not send your message right now. Please try again or email us at {{email}}.",
          { email: CONTACT_EMAIL }
        )
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-white via-primary-light/5 to-white py-16 md:py-20">
      {/* Background decorations */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-gradient-to-l from-primary/10 to-accent/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Left column */}
          <div>
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
              {TRN("contact.eyebrow", "Contact")}
            </div>
            <h2 className="mt-6 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {TRN("contact.title", "Let's talk about your technology needs.")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {TRN(
                "contact.description",
                "Whether you are planning a new technology rollout, need help with existing integrations, or want an independent assessment of your tech stack, we are here to help."
              )}
            </p>

            {/* Contact info cards */}
            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-white p-4 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{TRN("contact.emailLabel", "Email us")}</p>
                  <p className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                    {CONTACT_EMAIL}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${CONTACT_PHONE}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-white p-4 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-500">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{TRN("contact.phoneLabel", "Call us")}</p>
                  <p className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">{CONTACT_PHONE}</p>
                </div>
              </a>
            </div>

            {/* Trust badge */}
            <div className="mt-10 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">{TRN("contact.guaranteeTitle", "Fast response guarantee")}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {TRN("contact.guaranteeText", "We typically respond within 24 hours. For urgent inquiries, please call us directly.")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {submitted ? (
              <div className="flex min-h-[340px] items-center justify-center rounded-2xl border border-primary/20 bg-white p-8 shadow-xl md:min-h-[380px]">
                <div className="text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-500">
                    <CheckCircle2 className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {TRN("contact.thankYou", "Thank you. We will be in touch shortly.")}
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {TRN("contact.thankYouText", "We've received your message and will respond within 24 hours.")}
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-white p-6 shadow-xl md:p-7 lg:max-h-[calc(100svh-7.5rem)] lg:overflow-y-auto"
              >
                <h3 className="text-xl font-bold text-foreground">{TRN("contact.form.title", "Send us a message")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {TRN("contact.form.subtitle", "Fill out the form below and we'll get back to you as soon as possible.")}
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                      {TRN("contact.form.name", "Name")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      placeholder={TRN("contact.form.namePlaceholder", "Your name")}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className={`mt-2 w-full rounded-lg border bg-white px-4 py-2.5 text-foreground placeholder:text-muted-foreground transition-all focus:outline-none focus:ring-2 ${
                        focused === "name"
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-input hover:border-primary/50"
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="restaurantName" className="block text-sm font-semibold text-foreground">
                      {TRN("contact.form.restaurantName", "Restaurant or chain name")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="restaurantName"
                      type="text"
                      required
                      value={restaurantName}
                      placeholder={TRN("contact.form.restaurantNamePlaceholder", "Name of your restaurant or chain")}
                      onChange={(e) => setRestaurantName(e.target.value)}
                      onFocus={() => setFocused("restaurantName")}
                      onBlur={() => setFocused(null)}
                      className={`mt-2 w-full rounded-lg border bg-white px-4 py-2.5 text-foreground placeholder:text-muted-foreground transition-all focus:outline-none focus:ring-2 ${
                        focused === "restaurantName"
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-input hover:border-primary/50"
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="restaurantsCount" className="block text-sm font-semibold text-foreground">
                      {TRN("contact.form.restaurantsCount", "Number of restaurants")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="restaurantsCount"
                      type="number"
                      min={1}
                      required
                      value={restaurantsCount}
                      placeholder={TRN("contact.form.restaurantsCountPlaceholder", "e.g. 3")}
                      onChange={(e) => setRestaurantsCount(e.target.value)}
                      onFocus={() => setFocused("restaurantsCount")}
                      onBlur={() => setFocused(null)}
                      className={`mt-2 w-full rounded-lg border bg-white px-4 py-2.5 text-foreground placeholder:text-muted-foreground transition-all focus:outline-none focus:ring-2 ${
                        focused === "restaurantsCount"
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-input hover:border-primary/50"
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground">
                      {TRN("contact.form.phone", "Mobile phone")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={phone}
                      placeholder={TRN("contact.form.phonePlaceholder", "+34 600 000 000")}
                      onChange={(e) => setPhone(e.target.value)}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      className={`mt-2 w-full rounded-lg border bg-white px-4 py-2.5 text-foreground placeholder:text-muted-foreground transition-all focus:outline-none focus:ring-2 ${
                        focused === "phone"
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-input hover:border-primary/50"
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                      {TRN("contact.form.email", "Email")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      placeholder={TRN("contact.form.emailPlaceholder", "you@company.com")}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={`mt-2 w-full rounded-lg border bg-white px-4 py-2.5 text-foreground placeholder:text-muted-foreground transition-all focus:outline-none focus:ring-2 ${
                        focused === "email"
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-input hover:border-primary/50"
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                      {TRN("contact.form.message", "Message")}
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      required
                      value={message}
                      placeholder={TRN("contact.form.messagePlaceholder", "Tell us about your project or needs")}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className={`mt-2 w-full resize-y rounded-lg border bg-white px-4 py-2 text-foreground placeholder:text-muted-foreground transition-all focus:outline-none focus:ring-2 ${
                        focused === "message"
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-input hover:border-primary/50"
                      }`}
                    />
                  </div>

                  {error ? (
                    <p className="text-sm font-medium text-red-600">
                      {error}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
                  >
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    {submitting
                      ? TRN("contact.form.sending", "Sending...")
                      : TRN("contact.form.submit", "Send message")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
