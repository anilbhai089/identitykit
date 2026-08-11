import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand Pitch Email Generator for Creators 2026 — Free AI Tool',
  description:
    'Free AI-powered brand pitch email generator for creators. Generate a personalized pitch email + 2 follow-ups in seconds. Get more brand deals with emails that actually get replies.',
  keywords: [
    'brand pitch email generator',
    'how to pitch brands as influencer',
    'brand collaboration email template',
    'influencer pitch email free',
    'how to email brands for collaboration',
    'brand deal pitch email creator',
    'influencer outreach email template 2026',
    'how to get brand deals email',
  ],
  openGraph: {
    title: 'Brand Pitch Email Generator for Creators 2026 — Free AI Tool',
    description: 'Generate a personalized brand pitch email + 2 follow-ups in seconds. AI-written, short enough to get read.',
    url: 'https://identitykit.in/tools/brand-pitch-email-generator',
    siteName: 'Identity Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Pitch Email Generator — Free AI Tool',
    description: 'AI-generated brand pitch emails for creators. Subject line + main email + 2 follow-ups. Free.',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools/brand-pitch-email-generator',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
