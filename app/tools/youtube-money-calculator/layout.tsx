import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YouTube Money Calculator India 2026 — Estimate Your Earnings in INR',
  description:
    'Free YouTube money calculator for Indian creators. Estimate your monthly YouTube earnings in INR based on views, niche, and India-specific RPM rates. Includes AdSense + brand deal income estimate.',
  keywords: [
    'youtube money calculator india',
    'youtube earnings calculator india',
    'how much youtube pays in india',
    'youtube rpm india 2026',
    'youtube income calculator india inr',
    'youtube monetization calculator india',
    'how much do indian youtubers earn',
    'youtube cpm india 2026',
  ],
  openGraph: {
    title: 'YouTube Money Calculator India 2026 — Estimate Your Earnings in INR',
    description:
      'Estimate your YouTube earnings in INR — AdSense + brand deals — using real India RPM data for every niche. Free, no login required.',
    url: 'https://identitykit.in/tools/youtube-money-calculator',
    siteName: 'Identity Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Money Calculator India 2026',
    description: 'Estimate your YouTube income in INR with real India RPM data. AdSense + brand deals. Free tool for Indian creators.',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools/youtube-money-calculator',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
