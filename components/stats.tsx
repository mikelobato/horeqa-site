"use client"

import { useTRN } from "@/contexts/LanguageContext"
import { TrendingUp, Users, Zap, Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function AnimatedNumber({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isVisible])

  return <span ref={countRef}>{count}</span>
}

export function Stats() {
  const TRN = useTRN()

  const stats = [
    {
      icon: Users,
      value: 50,
      suffix: "+",
      label: TRN("stats.clients", "Active clients"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      value: 200,
      suffix: "+",
      label: TRN("stats.integrations", "Integrations deployed"),
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: TrendingUp,
      value: 99,
      suffix: "%",
      label: TRN("stats.uptime", "System uptime"),
      gradient: "from-emerald-500 to-green-500",
    },
    {
      icon: Award,
      value: 24,
      suffix: "/7",
      label: TRN("stats.support", "Expert support"),
      gradient: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <section className="relative overflow-hidden border-y border-border bg-gradient-to-b from-white via-primary-light/10 to-white py-20 md:py-24">
      {/* Background decorations */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-gradient-to-l from-accent/10 to-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Number */}
                  <div className="mb-2 text-4xl font-bold text-foreground md:text-5xl">
                    <AnimatedNumber end={stat.value} />
                    <span className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Label */}
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Optional tagline */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            {TRN(
              "stats.tagline",
              "Trusted by leading hospitality operators across the industry",
              null,
              "Translate 'hospitality' as the industry term: Spanish should use 'hosteleria' (not 'hospitalidad')."
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
