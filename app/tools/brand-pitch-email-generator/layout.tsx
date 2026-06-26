import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand Pitch Email Generator for Indian Creators 2026 — Free AI Tool',
  description:
    'Free AI-powered brand pitch email generator for Indian creators. Generate a personalized pitch email + 2 follow-ups in seconds. Get more brand deals with emails that actually get replies.',
  keywords: [
    'brand pitch email generator india',
    'how to pitch brands as influencer india',
    'brand collaboration email template india',
    'influencer pitch email india free',
    'how to email brands for collaboration india',
    'brand deal pitch email indian creator',
    'influencer outreach email template india 2026',
    'how to get brand deals india email',
  ],
  openGraph: {
    title: 'Brand Pitch Email Generator for Indian Creators 2026 — Free AI Tool',
    description: 'Generate a personalized brand pitch email + 2 follow-ups in seconds. AI-written, India-specific, short enough to get read.',
    url: 'https://identitykit.in/tools/brand-pitch-email-generator',
    siteName: 'Identity Kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Pitch Email Generator India — Free AI Tool',
    description: 'AI-generated brand pitch emails for Indian creators. Subject line + main email + 2 follow-ups. Free.',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools/brand-pitch-email-generator',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
