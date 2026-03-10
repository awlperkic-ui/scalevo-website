import ContactForm from './components/ContactForm'

const packages = [
  {
    name: 'STARTER',
    price: '500',
    description: 'Ideal für den Einstieg',
    features: [
      '1 Corporate Video (30–60 Sek.)',
      'Professionelles Voiceover',
      'Hintergrundmusik & SFX',
      '2 Revisions',
      'Lieferung in 5 Werktagen',
      'Full HD (1080p)',
    ],
    highlight: false,
  },
  {
    name: 'PROFESSIONAL',
    price: '1.200',
    description: 'Unsere beliebteste Option',
    features: [
      '3 Videos (30–90 Sek. je)',
      'Maßgeschneiderte Storyline',
      'Multi-Plattform-Format (Reels, YouTube, Web)',
      'Unbegrenzte Revisions',
      'Lieferung in 7 Werktagen',
      '4K Qualität',
      'Social Media Optimierung',
    ],
    highlight: true,
  },
  {
    name: 'PREMIUM',
    price: '2.000',
    description: 'Vollständige Marketing-Automation',
    features: [
      'Monatlich 5+ Videos',
      'Komplette Content-Strategie',
      'Automatisierte Distribution',
      'Analytics & Reporting',
      'Dedizierter Account Manager',
      'Priority Support',
      'Förderungsmittel-Beratung BW',
    ],
    highlight: false,
  },
]

const stats = [
  { value: '>95%', label: 'Kosteneinsparung vs. traditionell' },
  { value: '5–7', label: 'Werktage bis Lieferung' },
  { value: '4K', label: 'Videoqualität' },
  { value: '0 EUR', label: 'Erstberatung' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-blue-400">Sc</span>alevo
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Leistungen</a>
            <a href="#process" className="hover:text-white transition-colors">Ablauf</a>
            <a href="#pricing" className="hover:text-white transition-colors">Preise</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Kostenlos anfragen
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
            AI-Powered Marketing Studio
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            Professionelle Videos.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Bruchteil der Kosten.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Wir produzieren Corporate Videos, Reels und Marketing-Automation für KMU —
            vollständig mit KI. Ergebnis: Professionelle Qualität ab 500 EUR statt 5.000 EUR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105">
              Kostenloses Demo-Video anfragen
            </a>
            <a href="#pricing" className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl transition-all">
              Preise ansehen
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 border-y border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">Traditionelle Produktion ist <span className="text-red-400">veraltet.</span></h2>
            <div className="space-y-4 text-gray-400">
              {[
                'Kamerateams kosten 3.000–15.000 EUR pro Video',
                'Produktion dauert 4–8 Wochen',
                'Änderungen kosten extra',
                '68% der KMU können sich professionelles Marketing nicht leisten',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-red-400 mt-1 shrink-0">✗</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-black mb-6">Scalevo macht es <span className="text-blue-400">anders.</span></h2>
            <div className="space-y-4 text-gray-400">
              {[
                'KI-Produktion: Corporate Video ab 500 EUR',
                'Lieferung in 5–7 Werktagen',
                'Unbegrenzte Anpassungen inklusive',
                'BW-Förderung bis 10.000 EUR nutzbar',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-green-400 mt-1 shrink-0">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Was wir produzieren</h2>
            <p className="text-gray-400">Vollständig KI-gesteuerte Produktion — ohne Kamerateam, ohne Studio</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎬', title: 'Corporate Videos', desc: 'Professionelle Unternehmensvideos für Website, LinkedIn und Messen. 30–120 Sekunden, 4K, Full Post-Production.' },
              { icon: '📱', title: 'Social Media Reels', desc: 'Optimiert für Instagram, TikTok und YouTube Shorts. Mehrsprachig, trending Formate, hohe Engagement-Rate.' },
              { icon: '⚙️', title: 'Marketing-Automation', desc: 'Automatisierte Content-Pipelines, CRM-Integration und KI-gestützte Kampagnen für nachhaltiges Wachstum.' },
            ].map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">So funktioniert es</h2>
            <p className="text-gray-400">Von der Anfrage bis zum fertigen Video in 5 Schritten</p>
          </div>
          <div className="space-y-4">
            {[
              { step: '01', title: 'Briefing', desc: 'Sie teilen uns Ihre Ziele, Zielgruppe und Tonalität mit. 15 Minuten reichen.' },
              { step: '02', title: 'Konzept', desc: 'Wir entwickeln Storyline, Skript und visuelle Richtung — innerhalb von 24 Stunden.' },
              { step: '03', title: 'KI-Produktion', desc: 'Unsere KI-Pipeline generiert Szenenbilder, Video-Clips, Voiceover und Musik.' },
              { step: '04', title: 'Post-Production', desc: 'Schnitt, Color Grading, Untertitel und finale Qualitätskontrolle.' },
              { step: '05', title: 'Lieferung', desc: 'Sie erhalten alle Formate: MP4, Hochformat für Reels, und die Quelldateien.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 p-6 rounded-xl bg-white/[0.03] border border-white/10 items-start">
                <div className="text-5xl font-black text-white/10 min-w-[60px]">{item.step}</div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Transparente Preise</h2>
            <p className="text-gray-400">Keine versteckten Kosten. Keine bösen Überraschungen.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`p-8 rounded-2xl border relative ${
                pkg.highlight
                  ? 'bg-blue-600/10 border-blue-500/50'
                  : 'bg-white/5 border-white/10'
              }`}>
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    BELIEBTESTE WAHL
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-sm font-bold text-blue-400 mb-1">{pkg.name}</div>
                  <div className="text-4xl font-black mb-1">{pkg.price} <span className="text-lg text-gray-400">EUR</span></div>
                  <div className="text-sm text-gray-400">{pkg.description}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                  pkg.highlight
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'border border-white/20 hover:border-white/40 text-white'
                }`}>
                  Jetzt anfragen
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Förderprogramm Baden-Württemberg: Bis zu 10.000 EUR Zuschuss für Digitalisierung — wir beraten Sie kostenlos.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Kostenloses Demo-Video</h2>
            <p className="text-gray-400">Wir erstellen ein kostenloses Beispiel-Video für Ihr Unternehmen — damit Sie sehen, was möglich ist.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xl font-bold"><span className="text-blue-400">Sc</span>alevo</span>
            <p className="text-xs text-gray-500 mt-1">AI Marketing Studio | Scalevo LLC, Wyoming, USA</p>
          </div>
          <a href="mailto:hello@scalevo.agency" className="text-sm text-gray-500 hover:text-white transition-colors">
            hello@scalevo.agency
          </a>
          <div className="text-xs text-gray-600">© 2026 Scalevo LLC. Alle Rechte vorbehalten.</div>
        </div>
      </footer>

    </main>
  )
}
