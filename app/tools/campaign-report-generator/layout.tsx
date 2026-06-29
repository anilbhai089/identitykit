import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Campaign Report Generator for Indian Creators 2026 — Free AI Tool',
  description:
    'Free AI-powered campaign report generator for Indian creators. Enter your campaign stats and get a professional post-campaign report to send brands in seconds. Get rebooked 5x more often.',
  keywords: [
    'campaign report generator india',
    'influencer campaign report template india',
    'post campaign report for brands india',
    'influencer performance report india free',
    'how to send campaign report to brand india',
    'creator campaign report template india 2026',
    'influencer marketing report generator india',
    'brand deal campaign report creator india',
  ],
  openGraph: {
    title: 'Campaign Report Generator for Indian Creators 2026 — Free AI Tool',
    description: 'Generate a professional post-campaign report to send brands in seconds. Get rebooked 5x more often. Free for Indian creators.',
    url: 'https://identitykit.in/tools/campaign-report-generator',
    siteName: 'Identity Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Campaign Report Generator India — Free AI Tool for Creators',
    description: 'AI-generated post-campaign reports for Indian creators. Send to brands and get rebooked. Free.',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools/campaign-report-generator',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
