import ContactForm from './components/ContactForm'

const packages = [
  {
    name: 'STARTER',
    price: '500–900',
    description: 'Perfect for your first video',
    features: [
      '1 Corporate Video (30–60 sec)',
      'Professional Voiceover',
      'Background Music & SFX',
      '2 Revision Rounds',
      'Delivered in 5 Business Days',
      'Full HD (1080p)',
    ],
    highlight: false,
  },
  {
    name: 'PROFESSIONAL',
    price: '1,500–2,500',
    description: 'Our most popular package',
    features: [
      '3 Videos (30–90 sec each)',
      'Custom Storyline & Script',
      'Multi-Platform Formats (Reels, YouTube, Web)',
      'Unlimited Revisions',
      'Delivered in 7 Business Days',
      '4K Quality',
      'Social Media Optimization',
    ],
    highlight: true,
  },
  {
    name: 'PREMIUM',
    price: '3,000–5,000',
    description: 'Full marketing automation',
    features: [
      '5+ Videos per Month',
      'Complete Content Strategy',
      'Automated Distribution',
      'Analytics & Reporting',
      'Dedicated Account Manager',
      'Priority Support',
      'Quarterly Strategy Reviews',
    ],
    highlight: false,
  },
]

const stats = [
  { value: '90%', label: 'Cost Savings vs Traditional' },
  { value: '5–7', label: 'Business Days to Delivery' },
  { value: '4K', label: 'Video Quality' },
  { value: '$0', label: 'Free Consultation' },
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
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Free
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        {/* Floating particle dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${15 + i * 14}%`,
                animationDuration: `${8 + i * 2}s`,
                animationDelay: `${i * 1.5}s`,
              }}
            />
          ))}
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
            AI-Powered Video Production
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            Your Business Deserves
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Video That Actually Converts.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We produce corporate videos, social media reels, and marketing content
            using AI — delivering professional quality starting at $500 instead of $5,000.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105">
              Get a Free Demo Video
            </a>
            <a href="#pricing" className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl transition-all">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* SHOWREEL PLACEHOLDER */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="showreel-placeholder rounded-2xl border-2 border-blue-500/30 bg-white/[0.02] overflow-hidden relative" style={{ aspectRatio: '16/9' }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-blue-600/20 border-2 border-blue-500/40 flex items-center justify-center mb-4 hover:bg-blue-600/30 transition-all cursor-pointer">
                <svg className="w-8 h-8 text-blue-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-gray-400 text-sm font-medium">Portfolio Showreel Coming Soon</p>
              <p className="text-gray-600 text-xs mt-1">AI-produced video samples</p>
            </div>
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 hero-mesh opacity-30 pointer-events-none" />
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

      {/* SOCIAL PROOF */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-500/20 bg-blue-500/5">
            <div className="flex -space-x-2">
              {['🔵', '🟢', '🟣'].map((dot, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-[#0a0a0a] flex items-center justify-center text-xs">
                  {['L', 'M', 'S'][i]}
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-300 ml-2">
              Currently in beta — <span className="text-blue-400 font-semibold">founding client spots available</span>
            </span>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            {[
              { icon: '⚡', label: '10x Faster', sub: 'Than traditional production' },
              { icon: '🎯', label: 'AI-Powered', sub: 'Consistent quality, every time' },
              { icon: '💰', label: '90% Savings', sub: 'Compared to camera crews' },
            ].map((item) => (
              <div key={item.label} className="p-4">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-white font-bold text-sm">{item.label}</div>
                <div className="text-gray-500 text-xs">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">Traditional production is <span className="text-red-400">broken.</span></h2>
            <div className="space-y-4 text-gray-400">
              {[
                'Camera crews cost $3,000–$15,000 per video',
                'Production takes 4–8 weeks',
                'Every revision costs extra',
                '68% of small businesses can\'t afford professional marketing',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-red-400 mt-1 shrink-0">✗</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-black mb-6">Scalevo does it <span className="text-blue-400">differently.</span></h2>
            <div className="space-y-4 text-gray-400">
              {[
                'AI production: Corporate videos from $500',
                'Delivered in 5–7 business days',
                'Unlimited revisions included',
                'Same professional quality, fraction of the cost',
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
            <h2 className="text-4xl font-black mb-4">What We Produce</h2>
            <p className="text-gray-400">Fully AI-powered production — no camera crews, no studio required</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎬', title: 'Corporate Videos', desc: 'Professional brand videos for your website, LinkedIn, and trade shows. 30–120 seconds, 4K, full post-production included.' },
              { icon: '📱', title: 'Social Media Reels', desc: 'Optimized for Instagram, TikTok, and YouTube Shorts. Trending formats with high engagement rates built in.' },
              { icon: '⚙️', title: 'Marketing Automation', desc: 'Automated content pipelines, scheduled distribution, and AI-driven campaigns for sustainable growth.' },
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
            <h2 className="text-4xl font-black mb-4">How It Works</h2>
            <p className="text-gray-400">From inquiry to finished video in 5 simple steps</p>
          </div>
          <div className="space-y-4">
            {[
              { step: '01', title: 'Briefing', desc: 'Tell us your goals, target audience, and tone of voice. 15 minutes is all it takes.' },
              { step: '02', title: 'Concept', desc: 'We develop the storyline, script, and visual direction — within 24 hours.' },
              { step: '03', title: 'AI Production', desc: 'Our AI pipeline generates scene imagery, video clips, voiceover, and music.' },
              { step: '04', title: 'Post-Production', desc: 'Editing, color grading, subtitles, and final quality assurance.' },
              { step: '05', title: 'Delivery', desc: 'You receive all formats: MP4, vertical for Reels, and source files.' },
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
            <h2 className="text-4xl font-black mb-4">Transparent Pricing</h2>
            <p className="text-gray-400">No hidden fees. No surprises. Just great video.</p>
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
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-sm font-bold text-blue-400 mb-1">{pkg.name}</div>
                  <div className="text-4xl font-black mb-1">${pkg.price}</div>
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
                  Get Started
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Need a custom package? Contact us for enterprise pricing and volume discounts.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Get Your Free Demo Video</h2>
            <p className="text-gray-400">We&apos;ll produce a free sample video for your business — so you can see what&apos;s possible before committing.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xl font-bold"><span className="text-blue-400">Sc</span>alevo</span>
            <p className="text-xs text-gray-500 mt-1">AI Video Marketing Agency | Scalevo LLC, Wyoming, USA</p>
          </div>
          <a href="mailto:hello@scalevo.agency" className="text-sm text-gray-500 hover:text-white transition-colors">
            hello@scalevo.agency
          </a>
          <div className="text-xs text-gray-600">&copy; 2026 Scalevo LLC. All rights reserved.</div>
        </div>
      </footer>

    </main>
  )
}
