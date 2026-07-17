import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Identity Kit',
  description: 'Identity Kit is built for content creators who deserve professional tools. Learn our story, mission, and the team behind the platform.',
}

export default function AboutPage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>
      
      
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .nav-link { font-size: 14px; color: rgba(255,255,255,0.5); white-space: nowrap; }
        .nav-link:hover { color: #FF6B2B !important; }
        .nav-link-active { font-size: 14px; color: #FF6B2B; font-weight: 600; white-space: nowrap; }
        .stat-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 28px; text-align: center; transition: all 0.25s; }
        .stat-card:hover { border-color: rgba(255,107,43,0.25); transform: translateY(-3px); }
        .value-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 24px; transition: all 0.25s; }
        .value-card:hover { border-color: rgba(255,107,43,0.2); }
        .nav-links { display: flex; gap: 32px; align-items: center; }
        @media (max-width: 640px) {
          .nav-links { display: none; }
          .nav-logo { font-size: 16px !important; }
          .nav-btn { padding: 7px 14px !important; font-size: 13px !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
          .mission-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 30px !important; }
          .about-content { padding: 0 16px !important; }
          .hero-pad { padding: 60px 16px 40px !important; }
        }
      `}</style>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(7,7,13,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
          <Link href="/" className="nav-logo" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, color: '#FF6B2B', letterSpacing: '-0.5px', whiteSpace: 'nowrap' }}>
            Identity Kit
          </Link>
          <div className="nav-links">
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/tools" className="nav-link">Tools</Link>
            <Link href="/about" className="nav-link-active">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/auth" className="nav-btn" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700, whiteSpace: 'nowrap' }}>Get Started</Link>
          </div>
          {/* Mobile — show only button */}
          <Link href="/auth" className="nav-btn" style={{ display: 'none', background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '7px 14px', fontSize: 13, fontWeight: 700 }}
            suppressHydrationWarning>
          </Link>
          <style>{`@media(max-width:640px){.nav-links{display:none!important}.mob-btn{display:block!important}}`}</style>
          <Link href="/auth" className="mob-btn" style={{ display: 'none', background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '7px 14px', fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>Get Started</Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="hero-pad" style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 700px 400px at 50% 0%, rgba(255,107,43,0.06), transparent)', pointerEvents: 'none' }} />
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,107,43,0.08)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 100, padding: '6px 16px', marginBottom: 24 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF6B2B', display: 'inline-block' }}></span>
          <span style={{ fontSize: 13, color: '#FF6B2B', fontWeight: 600 }}>Our Story</span>
        </div>
        <h1 className="hero-title" style={{ fontFamily: 'Syne, sans-serif', fontSize: 52, fontWeight: 800, lineHeight: 1.1, marginBottom: 20, letterSpacing: '-1px' }}>
          Built for creators<br />
          <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>who mean business</span>
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
          India&apos;s creator economy is worth ₹3,500 crore — but most creators still share their rates on WhatsApp and their media kit via Canva PDFs. We built something better.
        </p>
      </div>

      <div className="about-content" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 80px' }}>

        {/* Stats — single column on mobile */}
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 80 }}>
          {[
            { num: '₹3,500Cr', label: 'India creator economy' },
            { num: '50L+', label: 'Active creators in India' },
            { num: '1 Link', label: 'Is all you need to share' },
            { num: '2025', label: 'Year we said enough' },
          ].map(s => (
            <div key={s.label} className="stat-card">
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 32, fontWeight: 800, color: '#FF6B2B', marginBottom: 8 }}>{s.num}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="mission-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', marginBottom: 80 }}>
          <div>
            <div style={{ fontSize: 12, color: '#FF6B2B', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Our Mission</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 34, fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
              Every creator deserves a professional identity
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
              We saw creators spending hours making media kits in Canva, sending rate cards over WhatsApp, and writing CVs in Google Docs. Brands couldn&apos;t find what they needed fast. Deals fell through because the paperwork was a mess.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: 15 }}>
              Identity Kit gives every Indian creator — from 1K followers to 1M — a single, AI-powered professional profile that brands actually want to see. One link. Everything inside.
            </p>
          </div>
          <div style={{ background: 'rgba(255,107,43,0.04)', border: '1px solid rgba(255,107,43,0.12)', borderRadius: 20, padding: 32 }}>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 10 }}>The old way</div>
              {['Canva media kit PDF', 'WhatsApp voice notes for rates', 'Google Docs CV', '4 separate links to share', 'Hours of manual work'].map(x => (
                <div key={x} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.35)', fontSize: 14 }}>
                  <i className="ti ti-x" style={{ color: '#FF4444', fontSize: 14 }}></i> {x}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 13, color: '#FF6B2B', marginBottom: 10, fontWeight: 600 }}>The Identity Kit way</div>
              {['AI-generated media kit in 5 minutes', 'Professional rate card with ₹ pricing', 'Creator CV that gets callbacks', 'One link for everything', 'Free to start, always'].map(x => (
                <div key={x} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>
                  <i className="ti ti-check" style={{ color: '#4CAF50', fontSize: 14 }}></i> {x}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 12, color: '#FF6B2B', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>What We Stand For</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 34, fontWeight: 800, letterSpacing: '-0.5px' }}>Our values</h2>
          </div>
          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { icon: 'ti-india', title: 'Made for Bharat', desc: 'INR pricing, Indian platforms (Moj, Josh, ShareChat), Hindi-friendly. Not a copy of a Western tool — built ground-up for Indian creators.' },
              { icon: 'ti-robot', title: 'AI that actually helps', desc: 'The AI writes your bio in your voice, not corporate speak. It understands creator culture and brand language specific to India.' },
              { icon: 'ti-lock-open', title: 'Transparent & fair', desc: 'No hidden fees. No algorithm that hides your profile. Your data is yours. We never sell creator data to brands or anyone else.' },
            ].map(v => (
              <div key={v.title} className="value-card">
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,107,43,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <i className={`ti ${v.icon}`} style={{ fontSize: 20, color: '#FF6B2B' }}></i>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 24, padding: '60px 24px' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 32, fontWeight: 800, marginBottom: 16, letterSpacing: '-0.5px' }}>Ready to get your Identity Kit?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>Free to create. Takes 5 minutes. Brands will actually read it.</p>
          <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 12, padding: '14px 36px', fontWeight: 700, fontSize: 16 }}>
            Create my profile →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Blog</Link>
          <Link href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Tools</Link>
          <Link href="/about" style={{ fontSize: 14, color: '#FF6B2B' }}>About</Link>
          <Link href="/contact" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contact</Link>
          <Link href="/terms" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Terms</Link>
          <Link href="/privacy" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Privacy</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2025 Identity Kit. Made with ❤️ for Indian creators.</p>
      </footer>
    </div>
  )
}
