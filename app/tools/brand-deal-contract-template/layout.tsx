import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand Deal Contract Template for Indian Creators 2026 — Free PDF Download',
  description:
    'Free brand deal contract template for Indian creators. Fill your details and download a professional, ASCI-compliant PDF contract for influencer brand collaborations. 10 clauses included. No login required.',
  keywords: [
    'brand deal contract template india',
    'influencer contract template india free',
    'brand collaboration agreement indian creators',
    'influencer agreement template india 2026',
    'brand deal contract pdf india',
    'creator brand deal contract india free download',
    'influencer marketing contract india asci',
    'brand deal agreement template india',
  ],
  openGraph: {
    title: 'Brand Deal Contract Template for Indian Creators 2026 — Free PDF',
    description: 'Fill your details and download a professional brand deal contract PDF. ASCI-compliant. 10 clauses. Free for Indian creators.',
    url: 'https://identitykit.in/tools/brand-deal-contract-template',
    siteName: 'Identity Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Deal Contract Template India — Free PDF Download',
    description: 'Professional brand deal contract for Indian creators. ASCI-compliant, 10 clauses, instant PDF. Free.',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools/brand-deal-contract-template',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
