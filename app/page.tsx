"use client"

import { useState, useEffect } from "react"

const translations = {
  de: {
    nav: { services: "Leistungen", process: "Prozess", portfolio: "Portfolio", pricing: "Preise", contact: "Kontakt" },
    hero: {
      badge: "KI-AUTOMATISIERTE VIDEOPRODUKTION",
      title1: "Marketing-Videos",
      title2: "in Tagen,",
      title3: "nicht Wochen.",
      subtitle: "Scale Evo übernimmt Ihre komplette Marketing-Video-Produktion. Vollständig KI-automatisiert. Agentur-Qualität. Ab 299€ pro Video.",
      cta: "Kostenloses Sample-Video anfordern",
      ctaSub: "Kein Risiko. Kein Vertrag. Einfach überzeugen lassen."
    },
    services: {
      title: "Was wir liefern",
      subtitle: "Professionelle Marketing-Videos für jede Plattform",
      items: [
        { icon: "▶", title: "LinkedIn Videos", desc: "60-90 Sekunden Videos die im Feed stoppen. Optimiert für B2B-Entscheider. Hook → Story → CTA.", time: "48h Lieferzeit" },
        { icon: "◉", title: "Instagram Reels", desc: "Vertikale 9:16 Videos mit schnellen Schnitten und Untertiteln. Algorithmus-optimiert für maximale Reichweite.", time: "24h Lieferzeit" },
        { icon: "▣", title: "Erklärvideos", desc: "Komplexe Produkte einfach erklärt. Storytelling-Framework, professionelle Voice-Over, Motion Graphics.", time: "72h Lieferzeit" },
        { icon: "◆", title: "B2B Ads", desc: "Performance-orientierte Video-Ads für LinkedIn, YouTube und Meta. A/B-Test-fähige Varianten inklusive.", time: "48h Lieferzeit" }
      ]
    },
    process: {
      title: "So funktioniert es",
      subtitle: "Vom Briefing zum fertigen Video — vollautomatisch",
      steps: [
        { num: "01", title: "Briefing", desc: "Sie sagen uns was Sie brauchen. Branche, Zielgruppe, Plattform, Botschaft. 5 Minuten." },
        { num: "02", title: "Produktion", desc: "Unser KI-System recherchiert, schreibt, designt, spricht und schneidet. Autonom. Parallel. Schnell." },
        { num: "03", title: "Qualitätssicherung", desc: "100-Punkte QA-Check. Kreativität, technische Qualität, Brand-Konsistenz, Anti-AI-Artefakte." },
        { num: "04", title: "Lieferung", desc: "Fertiges Video in Ihrem Posteingang. Plattform-optimiert. Inkl. Untertitel und Thumbnail." }
      ]
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Echte Videos. Echte Ergebnisse.",
      cta: "Ihr Video könnte hier sein →"
    },
    pricing: {
      title: "Transparente Preise",
      subtitle: "Keine versteckten Kosten. Keine Überraschungen.",
      plans: [
        { name: "Starter", price: "299", period: "/Video", features: ["1 Video (bis 60 Sek.)", "1 Plattform-Format", "Professionelle Voice-Over", "Untertitel inklusive", "1 Revisionsrunde", "48h Lieferzeit"], cta: "Video bestellen", highlighted: false },
        { name: "Growth", price: "799", period: "/Monat", features: ["3 Videos pro Monat", "Alle Plattform-Formate", "Professionelle Voice-Over", "Untertitel + Thumbnails", "2 Revisionsrunden", "Dedizierter Ansprechpartner"], cta: "Jetzt starten", highlighted: true },
        { name: "Scale", price: "1.899", period: "/Monat", features: ["8 Videos pro Monat", "Alle Plattform-Formate", "Premium Voice-Over", "Komplettes Brand Kit", "Unbegrenzte Revisionen", "Priority 24h Lieferzeit"], cta: "Kontakt aufnehmen", highlighted: false }
      ]
    },
    cta: {
      title: "Bereit für Ihr erstes Video?",
      subtitle: "Wir produzieren ein kostenloses Sample-Video für Ihr Unternehmen. Kein Risiko, kein Vertrag.",
      button: "Kostenloses Sample anfordern",
      email: "hello@scalevo.agency"
    },
    footer: {
      company: "Scale Evo",
      tagline: "KI-automatisierte Marketing-Videoproduktion aus Stuttgart.",
      links: ["Impressum", "Datenschutz", "AGB"],
      copyright: "© 2026 Scale Evo LLC. Alle Rechte vorbehalten."
    }
  },
  en: {
    nav: { services: "Services", process: "Process", portfolio: "Portfolio", pricing: "Pricing", contact: "Contact" },
    hero: {
      badge: "AI-AUTOMATED VIDEO PRODUCTION",
      title1: "Marketing Videos",
      title2: "in Days,",
      title3: "Not Weeks.",
      subtitle: "Scale Evo handles your entire marketing video production. Fully AI-automated. Agency quality. Starting at €299 per video.",
      cta: "Request a Free Sample Video",
      ctaSub: "No risk. No contract. Just results."
    },
    services: {
      title: "What We Deliver",
      subtitle: "Professional marketing videos for every platform",
      items: [
        { icon: "▶", title: "LinkedIn Videos", desc: "60-90 second videos that stop the scroll. Optimized for B2B decision-makers. Hook → Story → CTA.", time: "48h delivery" },
        { icon: "◉", title: "Instagram Reels", desc: "Vertical 9:16 videos with fast cuts and subtitles. Algorithm-optimized for maximum reach.", time: "24h delivery" },
        { icon: "▣", title: "Explainer Videos", desc: "Complex products explained simply. Storytelling framework, professional voice-over, motion graphics.", time: "72h delivery" },
        { icon: "◆", title: "B2B Ads", desc: "Performance-driven video ads for LinkedIn, YouTube, and Meta. A/B testable variants included.", time: "48h delivery" }
      ]
    },
    process: {
      title: "How It Works",
      subtitle: "From briefing to finished video — fully automated",
      steps: [
        { num: "01", title: "Briefing", desc: "Tell us what you need. Industry, audience, platform, message. 5 minutes." },
        { num: "02", title: "Production", desc: "Our AI system researches, writes, designs, voices, and edits. Autonomous. Parallel. Fast." },
        { num: "03", title: "Quality Assurance", desc: "100-point QA check. Creativity, technical quality, brand consistency, anti-AI artifacts." },
        { num: "04", title: "Delivery", desc: "Finished video in your inbox. Platform-optimized. Subtitles and thumbnail included." }
      ]
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Real videos. Real results.",
      cta: "Your video could be here →"
    },
    pricing: {
      title: "Transparent Pricing",
      subtitle: "No hidden costs. No surprises.",
      plans: [
        { name: "Starter", price: "299", period: "/Video", features: ["1 Video (up to 60 sec)", "1 Platform Format", "Professional Voice-Over", "Subtitles Included", "1 Revision Round", "48h Delivery"], cta: "Order Video", highlighted: false },
        { name: "Growth", price: "799", period: "/Month", features: ["3 Videos per Month", "All Platform Formats", "Professional Voice-Over", "Subtitles + Thumbnails", "2 Revision Rounds", "Dedicated Contact"], cta: "Get Started", highlighted: true },
        { name: "Scale", price: "1,899", period: "/Month", features: ["8 Videos per Month", "All Platform Formats", "Premium Voice-Over", "Complete Brand Kit", "Unlimited Revisions", "Priority 24h Delivery"], cta: "Contact Us", highlighted: false }
      ]
    },
    cta: {
      title: "Ready for Your First Video?",
      subtitle: "We'll produce a free sample video for your company. No risk, no contract.",
      button: "Request Free Sample",
      email: "hello@scalevo.agency"
    },
    footer: {
      company: "Scale Evo",
      tagline: "AI-automated marketing video production from Stuttgart.",
      links: ["Legal Notice", "Privacy Policy", "Terms"],
      copyright: "© 2026 Scale Evo LLC. All rights reserved."
    }
  }
} as const

type Lang = keyof typeof translations

export default function Home() {
  const [lang, setLang] = useState<Lang>("de")
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const t = translations[lang]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => { const next = new Set(Array.from(prev)); next.add(entry.target.id); return next })
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [lang])

  const isVisible = (id: string) => visibleSections.has(id)

  const sectionStyle = (id: string, delay = 0) => ({
    opacity: isVisible(id) ? 1 : 0,
    transform: isVisible(id) ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`
  })

  return (
    <main className="min-h-screen bg-[#050a14] text-[#e2e8f0] overflow-x-hidden" style={{ fontFamily: "'Instrument Sans', 'SF Pro Display', -apple-system, sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050a14]/80 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center font-bold text-sm text-white">S</div>
            <span className="text-lg font-bold tracking-tight">Scale Evo</span>
          </div>
          <div className="flex items-center gap-8">
            {Object.entries(t.nav).map(([key, label]) => (
              <a key={key} href={`#${key}`} className="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors hidden md:block">
                {label}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === "de" ? "en" : "de")}
              className="bg-white/5 border border-white/10 rounded-md px-3 py-1.5 text-slate-400 text-sm font-medium cursor-pointer hover:bg-white/10 transition-colors"
            >
              {lang === "de" ? "EN" : "DE"}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }} />
        {/* Glow dots */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20 animate-pulse" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)" }} />
        <div className="absolute top-[60%] left-[70%] w-72 h-72 rounded-full opacity-20 animate-pulse" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)", animationDelay: "1.5s" }} />

        <div className="max-w-[800px] text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/[0.08] mb-8">
            <span className="text-xs font-semibold tracking-[0.1em] text-blue-400 font-mono">{t.hero.badge}</span>
          </div>
          <h1 className="text-[clamp(40px,7vw,72px)] font-bold leading-[1.05] tracking-[-0.04em] mb-6">
            {t.hero.title1}<br />
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent">{t.hero.title2}</span><br />
            {t.hero.title3}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-[560px] mx-auto mb-10 tracking-[-0.01em]">
            {t.hero.subtitle}
          </p>
          <a href="#contact" className="inline-block bg-gradient-to-br from-blue-700 to-blue-500 text-white font-semibold text-[17px] px-10 py-[18px] rounded-lg hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] transition-all">
            {t.hero.cta}
          </a>
          <p className="text-[13px] text-slate-500 mt-3">{t.hero.ctaSub}</p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" data-animate className="py-28 px-6">
        <div className="max-w-[1200px] mx-auto" style={sectionStyle("services")}>
          <div className="text-center mb-16">
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] mb-4">{t.services.title}</h2>
            <p className="text-lg text-slate-500">{t.services.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((item, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:border-blue-500/30 transition-all">
                <div className="text-[28px] mb-4 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 tracking-[-0.02em]">{item.title}</h3>
                <p className="text-[15px] text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                <span className="text-[13px] font-medium text-blue-500 font-mono">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" data-animate className="py-28 px-6">
        <div className="max-w-[900px] mx-auto" style={sectionStyle("process")}>
          <div className="text-center mb-16">
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] mb-4">{t.process.title}</h2>
            <p className="text-lg text-slate-500">{t.process.subtitle}</p>
          </div>
          {t.process.steps.map((step, i) => (
            <div key={i} className="flex gap-8 mb-12 last:mb-0 items-start" style={{
              opacity: isVisible("process") ? 1 : 0,
              transform: isVisible("process") ? "translateX(0)" : "translateX(-30px)",
              transition: `all 0.6s ease ${i * 0.15}s`
            }}>
              <div className="text-5xl font-bold text-blue-500/15 font-mono min-w-[80px] leading-none">{step.num}</div>
              <div className="border-l border-white/[0.08] pl-8 pb-12 last:pb-0" style={{ borderImage: i < 3 ? "linear-gradient(to bottom, rgba(59,130,246,0.3), transparent) 1" : "none" }}>
                <h3 className="text-[22px] font-semibold mb-2 tracking-[-0.02em]">{step.title}</h3>
                <p className="text-base text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" data-animate className="py-28 px-6">
        <div className="max-w-[1200px] mx-auto" style={sectionStyle("portfolio")}>
          <div className="text-center mb-16">
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] mb-4">{t.portfolio.title}</h2>
            <p className="text-lg text-slate-500">{t.portfolio.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "CloudSync Pro", sub: "SaaS · LinkedIn", dur: "48 Sek.", img: "/images/portfolio-cloudsync.jpg" },
              { title: "StrategyPeak Consulting", sub: "Beratung · LinkedIn", dur: "48 Sek.", img: "/images/portfolio-strategypeak.jpg" },
              { title: "PräzisionsTech GmbH", sub: "Industrie · Instagram Reel", dur: "30 Sek.", img: "/images/portfolio-praezisionstech.jpg" }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:border-blue-500/30 transition-all group">
                <div className="h-[200px] relative overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center text-2xl text-white cursor-pointer bg-black/40">▶</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[17px] font-semibold mb-1">{item.title}</h3>
                  <p className="text-[13px] text-slate-500">{item.sub} · {item.dur} · 2026</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-blue-500 text-base font-medium cursor-pointer hover:text-blue-400 transition-colors">{t.portfolio.cta}</p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" data-animate className="py-28 px-6">
        <div className="max-w-[1100px] mx-auto" style={sectionStyle("pricing")}>
          <div className="text-center mb-16">
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] mb-4">{t.pricing.title}</h2>
            <p className="text-lg text-slate-500">{t.pricing.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {t.pricing.plans.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-9 flex flex-col relative transition-all ${
                plan.highlighted
                  ? "border border-blue-500/50 bg-gradient-to-b from-blue-500/[0.08] to-[#050a14]"
                  : "bg-white/[0.02] border border-white/[0.06] hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:border-blue-500/30"
              }`}>
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 text-xs font-semibold tracking-[0.05em]">
                    POPULAR
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold tracking-[-0.04em]">€{plan.price}</span>
                  <span className="text-base text-slate-500">{plan.period}</span>
                </div>
                <div className="flex-1">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2.5 mb-3 text-[15px] text-slate-400">
                      <span className="text-blue-500 text-sm">✓</span> {f}
                    </div>
                  ))}
                </div>
                <a href="#contact" className={`block text-center mt-6 py-4 rounded-lg font-semibold transition-all hover:-translate-y-0.5 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)]"
                    : "border border-white/15 text-[#e2e8f0] hover:border-white/30"
                }`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" data-animate className="py-28 px-6">
        <div className="max-w-[700px] mx-auto text-center" style={sectionStyle("contact")}>
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] mb-4">{t.cta.title}</h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-10">{t.cta.subtitle}</p>
          <a href={`mailto:${t.cta.email}?subject=Sample Video Anfrage`} className="inline-block bg-gradient-to-br from-blue-700 to-blue-500 text-white font-semibold text-lg px-12 py-5 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] transition-all">
            {t.cta.button}
          </a>
          <p className="mt-6 text-slate-500 text-[15px]">{t.cta.email}</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center font-bold text-[11px] text-white">S</div>
              <span className="text-[15px] font-semibold">{t.footer.company}</span>
            </div>
            <p className="text-[13px] text-slate-600">{t.footer.tagline}</p>
          </div>
          <div className="flex gap-6">
            {t.footer.links.map((link, i) => (
              <a key={i} href="#" className="text-slate-500 text-[13px] hover:text-slate-300 transition-colors">{link}</a>
            ))}
          </div>
          <p className="text-xs text-slate-700 w-full text-center mt-4">{t.footer.copyright}</p>
        </div>
      </footer>
    </main>
  )
}
