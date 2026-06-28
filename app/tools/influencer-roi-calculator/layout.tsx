import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Influencer ROI Calculator India 2026 — Free Tool for Brands & Creators',
  description:
    'Free influencer ROI calculator for Indian brands and creators. Calculate Earned Media Value (EMV), Cost Per Engagement (CPE), Cost Per View and campaign ROI — with India-specific benchmarks for every niche.',
  keywords: [
    'influencer roi calculator india',
    'influencer marketing roi calculator india',
    'earned media value calculator india',
    'cost per engagement calculator india',
    'influencer campaign roi india 2026',
    'how to calculate influencer roi india',
    'influencer marketing metrics india',
    'emv calculator influencer india free',
  ],
  openGraph: {
    title: 'Influencer ROI Calculator India 2026 — Free Tool for Brands & Creators',
    description: 'Calculate influencer campaign ROI, Earned Media Value and Cost Per Engagement — with India-specific benchmarks. Free for brands and creators.',
    url: 'https://identitykit.in/tools/influencer-roi-calculator',
    siteName: 'Identity Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer ROI Calculator India 2026 — Free Tool',
    description: 'Calculate EMV, CPE and campaign ROI with India benchmarks. Free for brands and creators.',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools/influencer-roi-calculator',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
