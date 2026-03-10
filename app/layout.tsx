import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Scalevo — AI Video Marketing Agency',
  description: 'Professional marketing videos produced with AI. Corporate videos starting at $500. 10x faster, 90% less cost than traditional production.',
  keywords: 'AI video production, marketing agency, corporate video, social media video, AI marketing, video production Florida, small business marketing',
  openGraph: {
    title: 'Scalevo — AI Video Marketing Agency',
    description: 'Professional marketing videos produced with AI. 10x faster. 90% less cost.',
    url: 'https://scalevo.agency',
    siteName: 'Scalevo',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://scalevo.agency/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Scalevo — AI Video Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scalevo — AI Video Marketing Agency',
    description: 'Professional marketing videos produced with AI. 10x faster. 90% less cost.',
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
