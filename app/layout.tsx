import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Scale Evo — KI-automatisierte Marketing-Videoproduktion',
  description: 'Marketing-Videos in Tagen, nicht Wochen. Vollständig KI-automatisiert, Agentur-Qualität. Ab 299€ pro Video. LinkedIn Videos, Reels, Erklärvideos.',
  keywords: 'KI Video Produktion, Marketing Agentur, LinkedIn Video, Instagram Reels, Erklärvideo, AI Video Production, Scale Evo, Stuttgart',
  openGraph: {
    title: 'Scale Evo — Marketing-Videos in Tagen, nicht Wochen',
    description: 'Vollständig KI-automatisierte Videoproduktion. Agentur-Qualität ab 299€. 48h Lieferzeit.',
    url: 'https://scalevo.agency',
    siteName: 'Scale Evo',
    locale: 'de_DE',
    alternateLocale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://scalevo.agency/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Scale Evo — KI-automatisierte Marketing-Videoproduktion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scale Evo — Marketing-Videos in Tagen, nicht Wochen',
    description: 'KI-automatisierte Videoproduktion. Agentur-Qualität ab 299€.',
    images: ['https://scalevo.agency/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
