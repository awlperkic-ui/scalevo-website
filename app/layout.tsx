import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Scalevo — AI Marketing Studio',
  description: 'Professionelle Videos & Marketing-Automation für KMU. Corporate Videos ab 500 EUR. Powered by AI.',
  keywords: 'AI Marketing, KI Agentur, Corporate Video, Marketing Automation, KMU, Deutschland',
  openGraph: {
    title: 'Scalevo — AI Marketing Studio',
    description: 'Professionelle Videos & Marketing-Automation für KMU.',
    url: 'https://scalevo.agency',
    siteName: 'Scalevo',
    locale: 'de_DE',
    type: 'website',
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
