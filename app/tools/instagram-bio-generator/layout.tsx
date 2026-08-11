import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instagram Bio Generator for Creators 2026 — Free AI Tool',
  description:
    'Free AI-powered Instagram bio generator for creators. Get 3 professional bio options instantly — brand-ready, niche-specific, under 150 characters.',
  keywords: [
    'instagram bio generator',
    'instagram bio generator for creators',
    'instagram bio ideas for creators',
    'best instagram bio for influencers',
    'instagram bio generator ai free',
    'instagram bio for brand deals',
    'instagram bio ideas 2026',
    'professional instagram bio creator',
  ],
  openGraph: {
    title: 'Instagram Bio Generator for Creators 2026 — Free AI Tool',
    description:
      'Get 3 AI-generated Instagram bio options instantly — brand-ready, niche-specific, under 150 characters. Free.',
    url: 'https://identitykit.in/tools/instagram-bio-generator',
    siteName: 'Identity Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Bio Generator 2026 — Free AI Tool',
    description: 'AI-generated Instagram bios for creators. Brand-ready, under 150 chars. Free.',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools/instagram-bio-generator',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
