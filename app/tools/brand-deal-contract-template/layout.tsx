import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Brand Deal Contract Template for Indian Creators 2026',
  description:
    'Brand deal contract template for Indian creators. Fill in your details and download a professional, ASCI-compliant PDF contract for influencer brand collaborations. 10 clauses included. 100% free. No login required.',
  keywords: [
    'brand deal contract template india',
    'influencer contract template india',
    'brand collaboration agreement indian creators',
    'influencer agreement template india 2026',
    'brand deal contract pdf india',
    'creator brand deal contract india download',
    'influencer marketing contract india asci',
    'brand deal agreement template india',
  ],
  openGraph: {
    title: 'Free Brand Deal Contract Template for Indian Creators 2026',
    description: 'Fill your details and download a professional brand deal contract PDF. ASCI-compliant. 10 clauses. 100% free.',
    url: 'https://identitykit.in/tools/brand-deal-contract-template',
    siteName: 'Identity Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Brand Deal Contract Template India',
    description: 'Professional brand deal contract for Indian creators. ASCI-compliant, 10 clauses. 100% free.',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools/brand-deal-contract-template',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
