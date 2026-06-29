import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creator Kit Generator — CV, Media Kit & Rate Card PDF | Identity Kit',
  description:
    'Generate your Creator CV, Media Kit and Rate Card as professional PDFs in minutes. Fill your details once — preview free, download for ₹49 each or ₹99 for all 3. Built for Indian creators.',
  keywords: [
    'creator cv generator india',
    'media kit generator india pdf',
    'rate card generator india creator',
    'influencer media kit pdf india',
    'creator kit pdf generator india',
    'influencer cv template india free',
    'media kit download india creator 2026',
    'creator document generator india',
  ],
  openGraph: {
    title: 'Creator Kit Generator — CV, Media Kit & Rate Card PDF',
    description: 'Generate professional Creator CV, Media Kit and Rate Card PDFs. Preview free, download from ₹49. Built for Indian creators.',
    url: 'https://identitykit.in/tools/creator-kit-generator',
    siteName: 'Identity Kit',
    type: 'website',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools/creator-kit-generator',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
