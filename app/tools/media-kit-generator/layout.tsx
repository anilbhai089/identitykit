import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Media Kit Generator for Creators 2026 — Identity Kit',
  description:
    'Create a brand-ready media kit in minutes — stats, platforms, audience demographics, brand collaborations and rates in one polished PDF. 100% free. No login required.',
  keywords: [
    'media kit generator india',
    'influencer media kit template india',
    'creator media kit maker india 2026',
    'free media kit template india',
    'instagram media kit generator india',
    'media kit pdf for creators india',
    'brand pitch media kit india',
    'influencer press kit india',
  ],
  openGraph: {
    title: 'Free Media Kit Generator for Creators 2026 — Identity Kit',
    description: 'Turn your stats, audience and rates into a polished, brand-ready media kit PDF. 100% free.',
    url: 'https://identitykit.in/tools/media-kit-generator',
    siteName: 'Identity Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Media Kit Generator for Creators — Identity Kit',
    description: 'Brand-ready media kit PDF — stats, audience, platforms and rates. 100% free.',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools/media-kit-generator',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
