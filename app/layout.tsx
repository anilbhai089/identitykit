import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Identity Kit — One link for Indian creators',
  description: 'Get your professional creator profile with Media Kit, Rate Card and CV in one shareable link. Built for Indian creators.',
  keywords: ['creator media kit', 'influencer CV', 'rate card', 'Indian creator', 'content creator profile'],
  openGraph: {
    title: 'Identity Kit — One link for Indian creators',
    description: 'Get your professional creator profile in one shareable link.',
    url: 'https://identitykit.in',
    siteName: 'Identity Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Identity Kit — One link for Indian creators',
    description: 'Get your professional creator profile in one shareable link.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#0A0A0F', color: '#fff' }}>{children}</body>
    </html>
  )
}
