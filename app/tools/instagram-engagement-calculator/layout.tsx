import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instagram Engagement Rate Calculator India 2026 — Free Tool for Creators',
  description:
    'Free Instagram engagement rate calculator for Indian creators. Enter your likes, comments, saves and shares — get your rate instantly with India-specific benchmarks for every creator tier. Find out if you qualify for brand deals.',
  keywords: [
    'instagram engagement rate calculator india',
    'engagement rate calculator india free',
    'instagram engagement calculator for indian creators',
    'how to calculate engagement rate instagram india',
    'instagram engagement rate india 2026',
    'instagram engagement rate benchmark india',
    'influencer engagement rate calculator india',
  ],
  openGraph: {
    title: 'Instagram Engagement Rate Calculator India 2026 — Free Tool',
    description:
      'Calculate your Instagram engagement rate in seconds. India-specific benchmarks, brand deal thresholds, and niche comparisons — free for all creators.',
    url: 'https://identitykit.in/tools/instagram-engagement-calculator',
    siteName: 'Identity Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Engagement Rate Calculator India 2026',
    description:
      'Free calculator for Indian creators. Get your engagement rate, see India benchmarks, and find out if you qualify for brand deals.',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools/instagram-engagement-calculator',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
