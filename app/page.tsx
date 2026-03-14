"use client"

import { useState, useEffect } from "react"

const translations = {
  en: {
    nav: ["Work", "Services", "Process", "Pricing", "Contact"],
    hero: {
      pre: "Video production, reimagined.",
      h1_1: "Your marketing team",
      h1_2: "just got faster.",
      sub: "Scale Evo produces professional marketing videos using AI — delivered in 48 hours, not 4 weeks. Built for companies that move fast.",
      cta: "See our work",
      cta2: "Get a free sample"
    },
    services: {
      title: "What we build",
      items: [
        { title: "Brand Films", desc: "Cinematic company videos that tell your story. The kind that makes people stop scrolling.", time: "72h" },
        { title: "LinkedIn Videos", desc: "60-second videos engineered for the B2B feed. Hook, story, call to action.", time: "48h" },
        { title: "Product Explainers", desc: "Complex products, explained simply. Professional voiceover, motion graphics, clear narrative.", time: "72h" },
        { title: "Social Ads", desc: "Performance video ads for LinkedIn, YouTube, and Meta. Multiple variants for A/B testing.", time: "48h" }
      ]
    },
    process: {
      title: "How it works",
      steps: [
        { n: "01", t: "Brief", d: "Tell us about your company, audience, and goals. Takes 5 minutes." },
        { n: "02", t: "Production", d: "Our AI system handles research, scripting, visuals, voiceover, and editing. Autonomously." },
        { n: "03", t: "Review", d: "Every video passes a 100-point quality check before you see it." },
        { n: "04", t: "Delivery", d: "Finished video in your inbox. Platform-optimized, subtitled, ready to post." }
      ]
    },
    portfolio: {
      items: [
        { label: "MissionRT", cat: "Brand Film · 60s" },
        { label: "CloudSync Pro", cat: "LinkedIn Video · 45s" },
        { label: "Your Company", cat: "Get a free sample →" }
      ]
    },
    pricing: {
      title: "Pricing",
      sub: "Straightforward. No hidden fees.",
      plans: [
        { name: "Single", price: "299", per: "per video", feat: ["1 video up to 60s", "1 platform format", "Professional voiceover", "Subtitles included", "1 revision round", "48h delivery"], cta: "Order a video", pop: false },
        { name: "Growth", price: "799", per: "per month", feat: ["3 videos / month", "All platform formats", "Professional voiceover", "Subtitles + thumbnails", "2 revision rounds", "Dedicated contact"], cta: "Get started", pop: true },
        { name: "Scale", price: "1,899", per: "per month", feat: ["8 videos / month", "All platform formats", "Premium voiceover", "Full brand kit", "Unlimited revisions", "24h priority delivery"], cta: "Contact us", pop: false }
      ]
    },
    cta: {
      title: "See what we can do for you.",
      sub: "We'll produce a free sample video for your company. No contract, no risk — just a video you can actually use.",
      btn: "Request free sample",
      email: "hello@scalevo.agency"
    },
    footer: {
      tag: "AI-powered video production.",
      copy: "© 2026 Scale Evo LLC",
      links: ["Privacy", "Terms", "Imprint"]
    }
  },
  de: {
    nav: ["Arbeiten", "Leistungen", "Prozess", "Preise", "Kontakt"],
    hero: {
      pre: "Videoproduktion, neu gedacht.",
      h1_1: "Ihr Marketing-Team",
      h1_2: "wurde schneller.",
      sub: "Scale Evo produziert professionelle Marketing-Videos mit KI — geliefert in 48 Stunden, nicht 4 Wochen. Für Unternehmen die schnell handeln.",
      cta: "Arbeiten ansehen",
      cta2: "Kostenloses Sample"
    },
    services: {
      title: "Was wir bauen",
      items: [
        { title: "Brand Films", desc: "Cinematische Unternehmensvideos die Ihre Geschichte erzählen. Die Art, bei der man aufhört zu scrollen.", time: "72h" },
        { title: "LinkedIn Videos", desc: "60-Sekunden-Videos für den B2B-Feed. Hook, Story, Call to Action.", time: "48h" },
        { title: "Erklärvideos", desc: "Komplexe Produkte, einfach erklärt. Professionelles Voiceover, Motion Graphics.", time: "72h" },
        { title: "Social Ads", desc: "Performance Video-Ads für LinkedIn, YouTube und Meta. Mehrere Varianten für A/B-Tests.", time: "48h" }
      ]
    },
    process: {
      title: "So funktioniert es",
      steps: [
        { n: "01", t: "Briefing", d: "Erzählen Sie uns von Ihrem Unternehmen, Ihrer Zielgruppe und Ihren Zielen. Dauert 5 Minuten." },
        { n: "02", t: "Produktion", d: "Unser KI-System übernimmt Recherche, Script, Visuals, Voiceover und Schnitt. Autonom." },
        { n: "03", t: "Prüfung", d: "Jedes Video besteht einen 100-Punkte-Qualitätscheck bevor Sie es sehen." },
        { n: "04", t: "Lieferung", d: "Fertiges Video in Ihrem Posteingang. Plattform-optimiert, untertitelt, bereit zum Posten." }
      ]
    },
    portfolio: {
      items: [
        { label: "MissionRT", cat: "Brand Film · 60s" },
        { label: "CloudSync Pro", cat: "LinkedIn Video · 45s" },
        { label: "Ihr Unternehmen", cat: "Kostenloses Sample →" }
      ]
    },
    pricing: {
      title: "Preise",
      sub: "Transparent. Keine versteckten Kosten.",
      plans: [
        { name: "Single", price: "299", per: "pro Video", feat: ["1 Video bis 60s", "1 Plattform-Format", "Professionelles Voiceover", "Untertitel inklusive", "1 Revisionsrunde", "48h Lieferzeit"], cta: "Video bestellen", pop: false },
        { name: "Growth", price: "799", per: "pro Monat", feat: ["3 Videos / Monat", "Alle Plattform-Formate", "Professionelles Voiceover", "Untertitel + Thumbnails", "2 Revisionsrunden", "Fester Ansprechpartner"], cta: "Jetzt starten", pop: true },
        { name: "Scale", price: "1.899", per: "pro Monat", feat: ["8 Videos / Monat", "Alle Plattform-Formate", "Premium Voiceover", "Komplettes Brand Kit", "Unbegrenzte Revisionen", "24h Priority-Lieferung"], cta: "Kontakt aufnehmen", pop: false }
      ]
    },
    cta: {
      title: "Sehen Sie, was wir für Sie tun können.",
      sub: "Wir produzieren ein kostenloses Sample-Video für Ihr Unternehmen. Kein Vertrag, kein Risiko — einfach ein Video das Sie nutzen können.",
      btn: "Kostenloses Sample anfordern",
      email: "hello@scalevo.agency"
    },
    footer: {
      tag: "KI-gestützte Videoproduktion.",
      copy: "© 2026 Scale Evo LLC",
      links: ["Datenschutz", "AGB", "Impressum"]
    }
  }
} as const

type Lang = keyof typeof translations

export default function Home() {
  const [lang, setLang] = useState<Lang>("en")
  const [vis, setVis] = useState<Set<string>>(new Set())
  const d = translations[lang]

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setVis(p => { const n = new Set(Array.from(p)); n.add(e.target.id); return n })
      }), { threshold: 0.1 }
    )
    document.querySelectorAll("[data-a]").forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [lang])

  const show = (id: string) => vis.has(id)
  const anim = (id: string, del = 0) => ({
    opacity: show(id) ? 1 : 0,
    transform: show(id) ? "none" : "translateY(24px)",
    transition: `opacity 0.7s ease ${del}s, transform 0.7s ease ${del}s`
  })

  const portfolioBgs = ["#1A1A2E", "#16213E", "#0F3460"]
  const portfolioImages = ["/images/portfolio-missionrt.jpg", "/images/portfolio-cloudsync-new.jpg", ""]

  return (
    <main className="min-h-screen" style={{
      fontFamily: "'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      background: "#FAFAFA", color: "#111",
      WebkitFontSmoothing: "antialiased"
    }}>
      <style>{`::selection { background: #111; color: #fff; }`}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{
        background: "rgba(250,250,250,0.9)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #E8E8E8"
      }}>
        <div className="max-w-[1120px] mx-auto px-8 h-[60px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Scale Evo" width={28} height={28} style={{ borderRadius: 4 }} />
            <span className="text-lg font-bold" style={{ letterSpacing: "-0.04em" }}>Scale Evo</span>
          </div>
          <div className="flex items-center gap-7">
            {d.nav.map((n, i) => (
              <a key={i} href={`#s${i}`} className="text-sm font-medium hidden md:block transition-colors"
                style={{ color: "#666" }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#111"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#666"}>{n}</a>
            ))}
            <button onClick={() => setLang(lang === "en" ? "de" : "en")} className="cursor-pointer"
              style={{
                background: "none", border: "1px solid #DDD", borderRadius: 4, padding: "4px 10px",
                fontSize: 13, fontWeight: 500, color: "#666"
              }}>{lang === "en" ? "DE" : "EN"}</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-40 pb-28 px-8 max-w-[1120px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-sm font-medium uppercase mb-5" style={{ color: "#888", letterSpacing: "0.04em" }}>{d.hero.pre}</p>
            <h1 className="font-bold mb-6" style={{
              fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.05,
              letterSpacing: "-0.04em", maxWidth: 700
            }}>
              {d.hero.h1_1}<br />{d.hero.h1_2}
            </h1>
            <p className="text-lg mb-9" style={{ color: "#555", lineHeight: 1.65, maxWidth: 520 }}>{d.hero.sub}</p>
            <div className="flex gap-3">
              <a href="#s0" className="inline-block px-7 py-3.5 rounded-md text-sm font-semibold transition-colors"
                style={{ background: "#111", color: "#fff", letterSpacing: "-0.01em" }}>{d.hero.cta}</a>
              <a href="#s4" className="inline-block px-7 py-3.5 rounded-md text-sm font-semibold transition-all"
                style={{ background: "transparent", color: "#111", border: "1.5px solid #DDD", letterSpacing: "-0.01em" }}>{d.hero.cta2}</a>
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <div className="rounded-xl overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
              <img src="/images/hero.jpg" alt="Cinematic video production" width={640} height={470}
                style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="s0" data-a className="px-8 pb-20 max-w-[1120px] mx-auto" style={anim("s0")}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {d.portfolio.items.map((item, i) => (
            <div key={i} className="rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.01]"
              style={{
                background: portfolioBgs[i], aspectRatio: "16/9",
                display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "relative"
              }}>
              {portfolioImages[i] && (
                <img src={portfolioImages[i]} alt={item.label}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              )}
              <div className="p-6 relative z-10" style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}>
                <p className="text-lg font-semibold text-white mb-1">{item.label}</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{item.cat}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="s1" data-a className="py-24 px-8 max-w-[1120px] mx-auto">
        <h2 className="text-4xl font-bold mb-12" style={{ letterSpacing: "-0.03em", ...anim("s1") }}>{d.services.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {d.services.items.map((s, i) => (
            <div key={i} className="rounded-xl p-8 transition-colors" style={{
              background: "#fff", border: "1px solid #E8E8E8",
              ...anim("s1", i * 0.1)
            }}>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <span className="text-sm font-medium" style={{ color: "#999" }}>{s.time}</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="s2" data-a className="py-24 px-8 max-w-[1120px] mx-auto">
        <h2 className="text-4xl font-bold mb-12" style={{ letterSpacing: "-0.03em", ...anim("s2") }}>{d.process.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {d.process.steps.map((s, i) => (
            <div key={i} style={anim("s2", i * 0.1)}>
              <span className="text-5xl font-bold block mb-3" style={{ color: "#E0E0E0", lineHeight: 1 }}>{s.n}</span>
              <h3 className="text-lg font-semibold mb-2">{s.t}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="s3" data-a className="py-24 px-8 max-w-[1120px] mx-auto">
        <h2 className="text-4xl font-bold mb-2" style={{ letterSpacing: "-0.03em", ...anim("s3") }}>{d.pricing.title}</h2>
        <p className="text-base mb-12" style={{ color: "#888", ...anim("s3", 0.1) }}>{d.pricing.sub}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {d.pricing.plans.map((p, i) => (
            <div key={i} className="rounded-xl p-8 relative" style={{
              background: "#fff",
              border: p.pop ? "2px solid #111" : "1px solid #E8E8E8",
              ...anim("s3", i * 0.1)
            }}>
              {p.pop && (
                <div className="absolute -top-2.5 left-6 px-3 py-0.5 rounded text-white text-xs font-semibold"
                  style={{ background: "#111", letterSpacing: "0.05em" }}>POPULAR</div>
              )}
              <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
              <div className="mb-5">
                <span className="text-4xl font-bold" style={{ letterSpacing: "-0.03em" }}>€{p.price}</span>
                <span className="text-sm ml-1" style={{ color: "#888" }}>{p.per}</span>
              </div>
              {p.feat.map((f, j) => (
                <div key={j} className="flex items-center gap-2 mb-2.5 text-sm" style={{ color: "#555" }}>
                  <span style={{ color: "#111", fontSize: 12 }}>✓</span>{f}
                </div>
              ))}
              <button className="w-full mt-5 py-3.5 rounded-md text-sm font-semibold transition-colors cursor-pointer" style={{
                background: p.pop ? "#111" : "transparent",
                color: p.pop ? "#fff" : "#111",
                border: p.pop ? "none" : "1.5px solid #DDD"
              }}>{p.cta}</button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="s4" data-a className="py-24 px-8 max-w-[700px] mx-auto text-center">
        <div style={anim("s4")}>
          <h2 className="font-bold mb-4" style={{ fontSize: "clamp(28px, 4vw, 40px)", letterSpacing: "-0.03em" }}>{d.cta.title}</h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#555" }}>{d.cta.sub}</p>
          <a href={`mailto:${d.cta.email}?subject=Free Sample Request`}
            className="inline-block px-9 py-4 rounded-md text-base font-semibold transition-colors"
            style={{ background: "#111", color: "#fff" }}>{d.cta.btn}</a>
          <p className="mt-4 text-sm" style={{ color: "#999" }}>{d.cta.email}</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #E8E8E8", padding: "40px 32px" }}>
        <div className="max-w-[1120px] mx-auto flex flex-wrap justify-between items-center gap-4">
          <div>
            <img src="/images/logo.png" alt="Scale Evo" width={20} height={20} style={{ borderRadius: 3, display: "inline-block", verticalAlign: "middle", marginRight: 6 }} />
            <span className="text-sm font-bold" style={{ letterSpacing: "-0.03em" }}>Scale Evo</span>
            <span className="text-sm ml-3" style={{ color: "#999" }}>{d.footer.tag}</span>
          </div>
          <div className="flex gap-5 items-center">
            {d.footer.links.map((l, i) => (
              <a key={i} href="#" className="text-sm transition-colors" style={{ color: "#999" }}>{l}</a>
            ))}
          </div>
          <p className="text-xs w-full text-center mt-3" style={{ color: "#BBB" }}>{d.footer.copy}</p>
        </div>
      </footer>
    </main>
  )
}
