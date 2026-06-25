import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instagram Bio Generator for Indian Creators 2026 — Free AI Tool',
  description:
    'Free AI-powered Instagram bio generator for Indian creators. Get 3 professional bio options instantly — brand-ready, niche-specific, under 150 characters. Built for the Indian creator economy.',
  keywords: [
    'instagram bio generator india',
    'instagram bio generator for creators india',
    'instagram bio ideas for indian creators',
    'best instagram bio for indian influencers',
    'instagram bio generator ai india free',
    'instagram bio for brand deals india',
    'instagram bio ideas india 2026',
    'professional instagram bio indian creator',
  ],
  openGraph: {
    title: 'Instagram Bio Generator for Indian Creators 2026 — Free AI Tool',
    description:
      'Get 3 AI-generated Instagram bio options instantly — brand-ready, niche-specific, under 150 characters. Free for Indian creators.',
    url: 'https://identitykit.in/tools/instagram-bio-generator',
    siteName: 'Identity Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Bio Generator India 2026 — Free AI Tool',
    description: 'AI-generated Instagram bios for Indian creators. Brand-ready, under 150 chars. Free.',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools/instagram-bio-generator',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
