import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Tools for Indian Creators 2026 — Identity Kit',
  description:
    'Free calculators and tools built for Indian content creators. Engagement rate calculator, rate calculator, YouTube money calculator, and more — India-specific benchmarks, no login required.',
  openGraph: {
    title: 'Free Tools for Indian Creators 2026 — Identity Kit',
    description:
      'Free calculators and tools built for Indian content creators. No login required.',
    url: 'https://identitykit.in/tools',
    siteName: 'Identity Kit',
    type: 'website',
  },
  alternates: {
    canonical: 'https://identitykit.in/tools',
  },
}

const tools = [
  {
    href: '/tools/instagram-engagement-calculator',
    emoji: '📊',
    tag: 'Free',
    tagColor: '#4CAF50',
    title: 'Instagram Engagement Rate Calculator',
    desc: 'Calculate your engagement rate instantly with India-specific benchmarks for every tier. Find out exactly if you qualify for brand deals.',
    cta: 'Calculate now →',
    live: true,
  },
  {
    href: '/tools/influencer-rate-calculator',
    emoji: '💰',
    tag: 'Free',
    tagColor: '#4CAF50',
    title: 'Influencer Rate Calculator India',
    desc: 'Find out exactly what to charge brands for Instagram Reels, Stories, YouTube videos, and more — based on your niche and follower count.',
    cta: 'Calculate now →',
    live: true,
  },
  {
    href: '/tools/youtube-money-calculator',
    emoji: '▶️',
    tag: 'Free',
    tagColor: '#4CAF50',
    title: 'YouTube Money Calculator India',
    desc: 'Estimate your YouTube earnings in INR based on views, niche, and India-specific RPM rates. Includes AdSense + brand deal income.',
    cta: 'Calculate now →',
    live: true,
  },
  {
    href: '/tools/gst-invoice-generator',
    emoji: '🧾',
    tag: 'Paid',
    tagColor: '#FF8C5A',
    title: 'GST Invoice Generator for Creators',
    desc: 'Generate GST-compliant brand deal invoices in seconds. CGST+SGST or IGST auto-applied. Preview free, pay ₹49 to download the PDF.',
    cta: 'Preview & download →',
    live: true,
    paid: true,
  },
  {
    href: '/tools/rate-card-generator',
    emoji: '📇',
    tag: 'Paid',
    tagColor: '#FF8C5A',
    title: 'Rate Card Generator',
    desc: 'Build a polished, brand-ready rate card with your rates, packages and terms — same layout as your Identity Kit profile. Preview free, pay ₹49 to download the PDF.',
    cta: 'Preview & download →',
    live: true,
    paid: true,
  },
  {
    href: '/tools/cv-generator',
    emoji: '📄',
    tag: 'Paid',
    tagColor: '#FF8C5A',
    title: 'Creator CV Generator',
    desc: 'Turn your stats, brand deals and rates into a polished Creator CV — same dark theme as your Identity Kit profile. Preview free, pay ₹49 to download the PDF.',
    cta: 'Preview & download →',
    live: true,
    paid: true,
  },
  {
    href: '/tools/instagram-bio-generator',
    emoji: '✨',
    tag: 'Free',
    tagColor: '#4CAF50',
    title: 'Instagram Bio Generator',
    desc: 'AI-powered Instagram bio generator for Indian creators. Get 3 professional bio options instantly — brand-ready, niche-specific, under 150 characters.',
    cta: 'Generate bio →',
    live: true,
  },
  {
    href: '/tools/brand-deal-contract-template',
    emoji: '📋',
    tag: 'Paid',
    tagColor: '#FF8C5A',
    title: 'Brand Deal Contract Template',
    desc: 'ASCI-compliant brand deal contract for Indian creators — 10 clauses, ready to customise. Preview free, pay ₹49 to download the PDF.',
    cta: 'Preview & download →',
    live: true,
    paid: true,
  },
  {
    href: '/tools/brand-pitch-email-generator',
    emoji: '📧',
    tag: 'Free',
    tagColor: '#4CAF50',
    title: 'Brand Pitch Email Generator',
    desc: 'AI-powered pitch email generator for Indian creators. Get a personalized email + 2 follow-ups in seconds — short enough to actually get read.',
    cta: 'Generate pitch →',
    live: true,
  },
  {
    href: '/tools/influencer-roi-calculator',
    emoji: '📈',
    tag: 'Free',
    tagColor: '#4CAF50',
    title: 'Influencer ROI Calculator',
    desc: 'Calculate Earned Media Value, Cost Per Engagement and campaign ROI — with India-specific benchmarks. Built for both brands and creators.',
    cta: 'Calculate ROI →',
    live: true,
  },
  {
    href: '/tools/campaign-brief-generator',
    emoji: '📝',
    tag: 'Free',
    tagColor: '#4CAF50',
    title: 'Campaign Brief Generator',
    desc: 'AI-powered campaign brief generator for Indian brands. Generate a professional, ASCI-compliant brief in seconds — copy and send to creators instantly.',
    cta: 'Generate brief →',
    live: true,
  },
  {
    href: '/tools/campaign-report-generator',
    emoji: '📊',
    tag: 'Free',
    tagColor: '#4CAF50',
    title: 'Campaign Report Generator',
    desc: 'Enter your campaign stats and get a professional post-campaign report to send brands in seconds. Creators who send reports get rebooked 5x more often.',
    cta: 'Generate report →',
    live: true,
  },
]

export default function ToolsIndex() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .tool-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 28px; transition: all 0.2s; display: flex; flex-direction: column; gap: 12px; }
        .tool-card.live:hover { border-color: rgba(255,107,43,0.3); transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.3); }
        .tools-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 900px) { .tools-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .tools-grid { grid-template-columns: 1fr; } .hero-title { font-size: 30px !important; } }
      `}</style>

      {/* NAV */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto', height: 58, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg,#FF6B2B,#FF4500)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 12, color: 'white' }}>IK</div>
            <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16 }}>Identity Kit</span>
          </Link>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <Link href="/blog" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', padding: '6px 12px' }}>Blog</Link>
            <Link href="/auth?mode=signup" style={{ background: '#FF6B2B', color: '#fff', fontSize: 13, fontWeight: 700, padding: '7px 16px', borderRadius: 9 }}>Get your link →</Link>
          </div>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '14px 20px' }}>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', display: 'flex', gap: 6 }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.35)' }}>Home</Link>
          <span>›</span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Free Tools</span>
        </div>
      </div>

      <main style={{ maxWidth: 1060, margin: '0 auto', padding: '0 20px 80px' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', paddingTop: 40, paddingBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 700, color: '#FF8C5A', marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            🛠️ Built for Indian Creators
          </div>
          <h1 className="hero-title" style={{ fontFamily: "'Syne',sans-serif", fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
            Free Creator Tools for India
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            Calculators and generators built specifically for Indian creators — with India-specific benchmarks, INR rates, and real data. No login. No fees. Ever.
          </p>
        </div>

        {/* TOOLS GRID */}
        <div className="tools-grid" style={{ marginBottom: 72 }}>
          {tools.map(tool => (
            <Link key={tool.title} href={tool.href} style={{ display: 'block' }}>
              <div className={`tool-card ${tool.live ? 'live' : ''}`} style={{ opacity: tool.live ? 1 : 0.6, cursor: tool.live ? 'pointer' : 'default' }}>
                <div style={{ fontSize: 36 }}>{tool.emoji}</div>
                <div>
                  <span style={{ background: tool.paid ? 'rgba(255,107,43,0.14)' : tool.live ? 'rgba(76,175,80,0.12)' : 'rgba(255,255,255,0.05)', color: tool.tagColor, fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 100, display: 'inline-block', marginBottom: 10 }}>
                    {tool.tag}
                  </span>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, lineHeight: 1.3, marginBottom: 10 }}>{tool.title}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{tool.desc}</p>
                </div>
                <div style={{ marginTop: 'auto', paddingTop: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: tool.live ? '#FF6B2B' : 'rgba(255,255,255,0.2)' }}>{tool.cta}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.1), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 24, padding: '48px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(255,107,43,0.1), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ fontSize: 44, marginBottom: 16 }}>⚡</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.5px' }}>
            Your media kit, rate card & CV — in one free link
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, lineHeight: 1.75, maxWidth: 440, margin: '0 auto 28px' }}>
            Identity Kit gives every Indian creator a professional shareable profile that brands can open in one click — no PDFs, no back-and-forth.
          </p>
          <Link href="/auth?mode=signup" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 14, padding: '14px 36px', fontWeight: 800, fontSize: 16, letterSpacing: '-0.3px' }}>
            Get my free Identity Kit →
          </Link>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', marginTop: 14 }}>Free forever. No credit card. Takes 10 minutes.</p>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/about" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>About</Link>
          <Link href="/contact" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contact</Link>
          <Link href="/terms" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Terms</Link>
          <Link href="/privacy" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Privacy</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit. Made with ❤️ for Indian creators.</p>
      </footer>
    </div>
  )
}
