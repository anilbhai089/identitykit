import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instagram Engagement Rate Calculator 2026 — Free Tool for Creators',
  description:
    'Free Instagram engagement rate calculator for creators. Enter your likes, comments, saves and shares — get your rate instantly with benchmarks for every creator tier. Find out if you qualify for brand deals.',
  keywords: [
    'instagram engagement rate calculator',
    'engagement rate calculator free',
    'instagram engagement calculator for creators',
    'how to calculate engagement rate instagram',
    'instagram engagement rate 2026',
    'instagram engagement rate benchmark',
    'influencer engagement rate calculator',
  ],
  openGraph: {
    title: 'Instagram Engagement Rate Calculator 2026 — Free Tool',
    description:
      'Calculate your Instagram engagement rate in seconds. Benchmarks, brand deal thresholds, and niche comparisons — free for all creators.',
    url: 'https://identitykit.in/tools/instagram-engagement-calculator',
    siteName: 'Identity Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Engagement Rate Calculator 2026',
    description:
      'Free calculator for creators. Get your engagement rate, see benchmarks, and find out if you qualify for brand deals.',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools/instagram-engagement-calculator',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
