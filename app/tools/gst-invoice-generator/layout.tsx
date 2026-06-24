import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GST Invoice Generator for Indian Creators 2026 — Free PDF Download',
  description:
    'Free GST invoice generator for Indian content creators and influencers. Generate professional GST-compliant invoices for brand deals in seconds. Supports CGST+SGST and IGST. Download as PDF instantly.',
  keywords: [
    'gst invoice generator for creators india',
    'gst invoice generator influencer india free',
    'brand deal invoice template india',
    'influencer invoice generator india',
    'gst invoice for content creators india',
    'creator invoice template india 2026',
    'influencer gst invoice format india',
    'sac code for influencer marketing india',
  ],
  openGraph: {
    title: 'GST Invoice Generator for Indian Creators 2026 — Free PDF Download',
    description:
      'Generate GST-compliant brand deal invoices in seconds. CGST+SGST or IGST auto-applied. Download as PDF. Free for Indian creators.',
    url: 'https://identitykit.in/tools/gst-invoice-generator',
    siteName: 'Identity Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GST Invoice Generator for Indian Creators — Free Tool',
    description: 'Generate professional GST invoices for brand deals. PDF download. Free for Indian creators.',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools/gst-invoice-generator',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
