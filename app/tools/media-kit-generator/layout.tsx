import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Media Kit Generator for Indian Creators 2026 — ₹49 PDF Download',
  description:
    'Create a brand-ready media kit in minutes — stats, platforms, audience demographics, brand collaborations and rates in one polished PDF. Preview free, pay ₹49 to download. No login required.',
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
    title: 'Media Kit Generator for Indian Creators 2026 — ₹49 PDF',
    description: 'Turn your stats, audience and rates into a polished, brand-ready media kit PDF. Preview free, ₹49 to download.',
    url: 'https://identitykit.in/tools/media-kit-generator',
    siteName: 'Identity Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media Kit Generator for Indian Creators — ₹49 PDF Download',
    description: 'Brand-ready media kit PDF — stats, audience, platforms and rates. Preview free, ₹49 to download.',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools/media-kit-generator',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
