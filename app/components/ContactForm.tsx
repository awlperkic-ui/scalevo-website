'use client'

import { useState } from 'react'

const budgetRanges = [
  'Select budget range',
  '$500 – $900 (Starter)',
  '$1,500 – $2,500 (Professional)',
  '$3,000 – $5,000 (Premium)',
  '$5,000+ (Custom)',
]

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', budget: '', message: '' })

  return (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Name</label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              placeholder="John Smith"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Company</label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              placeholder="Acme Inc."
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Email</label>
            <input
              type="email"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Budget Range</label>
            <select
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
            >
              {budgetRanges.map((range) => (
                <option key={range} value={range === 'Select budget range' ? '' : range} className="bg-[#1a1a2e] text-white">
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-1 block">Tell us about your project</label>
          <textarea
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
            placeholder="We're a plumbing company looking to attract more local customers through video marketing..."
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>
        <a
          href={`mailto:hello@scalevo.agency?subject=Video Inquiry - ${formData.company}&body=${encodeURIComponent(`Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.message}`)}`}
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl text-center transition-all hover:scale-[1.02]"
        >
          Get Your Free Demo Video →
        </a>
        <p className="text-xs text-gray-500 text-center">Free &amp; no obligation. We respond within 24 hours.</p>
      </div>
    </div>
  )
}
