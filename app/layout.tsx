import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Scale Evo — AI-Powered Video Production',
  description: 'Professional marketing videos delivered in 48 hours, not 4 weeks. AI-powered, agency quality. From $299 per video. LinkedIn videos, brand films, explainers.',
  keywords: 'AI Video Production, Marketing Agency, LinkedIn Video, Brand Film, Explainer Video, Scale Evo, Video Production',
  openGraph: {
    title: 'Scale Evo — Marketing Videos in Days, Not Weeks',
    description: 'AI-powered video production. Agency quality from $299. 48h delivery.',
    url: 'https://scalevo.agency',
    siteName: 'Scale Evo',
    locale: 'en_US',
    alternateLocale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://scalevo.agency/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Scale Evo — AI-Powered Video Production',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scale Evo — Marketing Videos in Days, Not Weeks',
    description: 'AI-powered video production. Agency quality from $299.',
    images: ['https://scalevo.agency/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
