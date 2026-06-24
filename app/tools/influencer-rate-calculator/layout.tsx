import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Influencer Rate Calculator India 2026 — Free Tool for Indian Creators',
  description:
    'Free influencer rate calculator for Indian creators. Get exact INR rates for Instagram Reels, Stories, YouTube videos and more — based on your follower count, niche, and engagement rate. No login required.',
  keywords: [
    'influencer rate calculator india',
    'how much to charge for instagram reel india',
    'influencer rate card india 2026',
    'brand deal rate calculator india',
    'how much do indian creators charge',
    'instagram reel rate india',
    'youtube brand deal rate india',
    'creator rate card calculator india free',
  ],
  openGraph: {
    title: 'Influencer Rate Calculator India 2026 — Free Tool',
    description:
      'Find out exactly what to charge brands for Instagram Reels, Stories, and YouTube videos. India-specific rates by follower count, niche, and engagement.',
    url: 'https://identitykit.in/tools/influencer-rate-calculator',
    siteName: 'Identity Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer Rate Calculator India 2026 — Free Tool',
    description:
      'Get your exact brand deal rates in INR — Instagram Reels, Stories, YouTube. Based on followers, niche and engagement.',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools/influencer-rate-calculator',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
