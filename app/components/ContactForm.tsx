'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' })

  return (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Name</label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              placeholder="Max Mustermann"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Unternehmen</label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              placeholder="Musterfirma GmbH"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-1 block">E-Mail</label>
          <input
            type="email"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            placeholder="max@musterfirma.de"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-1 block">Ihre Branche & Ziele</label>
          <textarea
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
            placeholder="Wir sind ein Handwerksbetrieb und möchten mehr Kunden über Social Media erreichen..."
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>
        <a
          href={`mailto:hello@scalevo.agency?subject=Demo-Video Anfrage - ${formData.company}&body=${encodeURIComponent(`Name: ${formData.name}\nUnternehmen: ${formData.company}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.message}`)}`}
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl text-center transition-all hover:scale-[1.02]"
        >
          Kostenloses Demo-Video anfragen →
        </a>
        <p className="text-xs text-gray-500 text-center">Kostenlos & unverbindlich. Antwort innerhalb von 24 Stunden.</p>
      </div>
    </div>
  )
}
