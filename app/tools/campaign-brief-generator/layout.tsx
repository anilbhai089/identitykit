import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Campaign Brief Generator for Indian Brands 2026 — Free AI Tool',
  description:
    'Free AI-powered campaign brief generator for Indian brands. Generate a professional, ASCI-compliant influencer campaign brief in seconds. Fill in your details — copy and send to creators instantly.',
  keywords: [
    'campaign brief generator india',
    'influencer campaign brief template india',
    'brand campaign brief generator india free',
    'influencer marketing brief india 2026',
    'how to write influencer campaign brief india',
    'campaign brief for creators india',
    'influencer brief template india free download',
    'brand brief for influencers india',
  ],
  openGraph: {
    title: 'Campaign Brief Generator for Indian Brands 2026 — Free AI Tool',
    description: 'Generate a professional influencer campaign brief in seconds. ASCI-compliant. Creator-ready. Free for Indian brands.',
    url: 'https://identitykit.in/tools/campaign-brief-generator',
    siteName: 'Identity Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Campaign Brief Generator India — Free AI Tool for Brands',
    description: 'AI-generated influencer campaign briefs for Indian brands. ASCI-compliant. Free.',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools/campaign-brief-generator',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
