'use client'
import Link from 'next/link'
import { ArrowRight, Zap, Link2, Star, Users, TrendingUp, CheckCircle } from 'lucide-react'

export default function Landing() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* NAV */}
      <nav style={{ padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, background: 'rgba(10,10,15,0.9)', backdropFilter: 'blur(12px)', zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, background: 'var(--orange)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 16, color: 'white' }}>IK</div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: 'var(--text)' }}>Identity Kit</span>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/auth" style={{ textDecoration: 'none' }}>
            <button className="btn-ghost" style={{ padding: '9px 20px' }}>Login</button>
          </Link>
          <Link href="/auth?mode=signup" style={{ textDecoration: 'none' }}>
            <button className="btn-primary" style={{ padding: '9px 20px' }}>Get your link free</button>
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '100px 40px 80px', textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--orange-dim)', border: '1px solid var(--orange-border)', borderRadius: 99, padding: '6px 16px', marginBottom: 32, fontSize: 12, color: 'var(--orange2)', fontWeight: 500 }}>
          <span style={{ width: 6, height: 6, background: 'var(--orange)', borderRadius: '50%', display: 'inline-block', animation: 'pulse-orange 2s infinite' }}></span>
          India&apos;s first AI-powered creator identity platform
        </div>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-1px' }}>
          One link.<br />
          <span style={{ color: 'var(--orange)' }}>Your complete</span><br />
          creator identity.
        </h1>
        <p style={{ fontSize: 18, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 40, maxWidth: 560, margin: '0 auto 40px' }}>
          Brands ask for your Media Kit. Do you have one? Get your AI-powered CV, Media Kit and Rate Card — all on one beautiful shareable link. Built for Indian creators.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/auth?mode=signup" style={{ textDecoration: 'none' }}>
            <button className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
              Create my free profile <ArrowRight size={18} />
            </button>
          </Link>
          <Link href="/anilprajapati" style={{ textDecoration: 'none' }}>
            <button className="btn-ghost" style={{ fontSize: 16, padding: '14px 32px' }}>See example profile</button>
          </Link>
        </div>
        <p style={{ marginTop: 20, fontSize: 13, color: 'var(--text3)' }}>Free forever · No credit card · identitykit.in/yourname</p>
      </section>

      {/* PROFILE PREVIEW */}
      <section style={{ padding: '0 40px 80px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 20, overflow: 'hidden' }}>
          {/* Mock profile header */}
          <div style={{ background: 'linear-gradient(135deg, #1A1A24, #0f1929)', padding: '28px 28px 0' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 24 }}>
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--orange)', border: '3px solid rgba(255,107,43,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 24, color: 'white', flexShrink: 0 }}>AP</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: 'white' }}>Anil Prajapati</h3>
                  <span style={{ background: 'rgba(255,107,43,0.15)', border: '1px solid rgba(255,107,43,0.3)', color: 'var(--orange2)', fontSize: 10, padding: '3px 10px', borderRadius: 99, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ width: 5, height: 5, background: 'var(--orange)', borderRadius: '50%' }}></span>Open for collabs
                  </span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginBottom: 10 }}>identitykit.in/anilprajapati</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['Fashion & Lifestyle', 'YouTube', 'Instagram', 'Hindi & English', 'Palanpur, Gujarat'].map(t => (
                    <span key={t} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.65)', fontSize: 10, padding: '3px 10px', borderRadius: 99 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              {[['25K', 'Subscribers'], ['35K', 'Avg Views'], ['4.8%', 'Engagement'], ['2M', 'Best Campaign']].map(([n, l]) => (
                <div key={l} style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: 'white' }}>{n}</div>
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: '20px 28px', display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid var(--border)' }}>
            <span style={{ fontSize: 13, color: 'var(--text2)' }}>Share this link with any brand →</span>
            <span style={{ background: 'var(--orange-dim)', border: '1px solid var(--orange-border)', color: 'var(--orange)', fontSize: 12, padding: '6px 14px', borderRadius: 8, fontFamily: 'var(--font-heading)', fontWeight: 600 }}>identitykit.in/anilprajapati</span>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section style={{ padding: '80px 40px', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 800, marginBottom: 16 }}>Everything brands ask for.<br /><span style={{ color: 'var(--orange)' }}>On one link.</span></h2>
          <p style={{ color: 'var(--text2)', fontSize: 16 }}>Fill one form. AI generates 3 professional documents instantly.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {[
            { icon: '🎨', title: 'Media Kit', desc: 'Your stats, audience breakdown, platform reach and brand collabs — all beautifully designed.', color: '#FF6B2B' },
            { icon: '📄', title: 'Creator CV', desc: 'AI-written professional bio, experience and achievements tailored for brand pitching.', color: '#FF6B2B' },
            { icon: '💰', title: 'Rate Card', desc: 'Your official pricing for every content type. Reels, YouTube, Stories, Carousels and more.', color: '#FF6B2B' },
          ].map(item => (
            <div key={item.title} className="card" style={{ border: '1px solid var(--border2)' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{item.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
              <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '80px 40px', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 800, marginBottom: 60 }}>Ready in <span style={{ color: 'var(--orange)' }}>3 steps.</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, position: 'relative' }}>
            {[
              { num: '01', title: 'Fill your details', desc: 'Answer 7 simple steps about yourself, your stats, past brands and pricing.' },
              { num: '02', title: 'AI generates everything', desc: 'Claude AI writes your bio, formats your media kit and creates your rate card.' },
              { num: '03', title: 'Share your link', desc: 'Get identitykit.in/yourname and share it with any brand, anywhere.' },
            ].map(step => (
              <div key={step.num} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 48, fontWeight: 800, color: 'var(--orange)', opacity: 0.4, lineHeight: 1, marginBottom: 16 }}>{step.num}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{step.title}</h3>
                <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IDENTITY KIT */}
      <section style={{ padding: '80px 40px', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 800, textAlign: 'center', marginBottom: 60 }}>Built for <span style={{ color: 'var(--orange)' }}>Indian creators.</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {[
            '₹ INR pricing on rate card',
            'GST invoice support',
            'Hindi & regional languages',
            'Indian brand context',
            'AI writes in your voice',
            'No design skills needed',
            'Always up to date',
            'Zero back and forth with brands',
          ].map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 10 }}>
              <CheckCircle size={16} color="var(--orange)" />
              <span style={{ fontSize: 13, color: 'var(--text2)' }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 40px', textAlign: 'center', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 48, fontWeight: 800, marginBottom: 20 }}>Get your creator<br /><span style={{ color: 'var(--orange)' }}>identity today.</span></h2>
        <p style={{ color: 'var(--text2)', fontSize: 16, marginBottom: 40 }}>Free forever. No credit card. No design skills needed.</p>
        <Link href="/auth?mode=signup" style={{ textDecoration: 'none' }}>
          <button className="btn-primary" style={{ fontSize: 18, padding: '16px 40px' }}>
            Create my free profile <ArrowRight size={20} />
          </button>
        </Link>
        <p style={{ marginTop: 16, fontSize: 13, color: 'var(--text3)' }}>Join creators building their professional identity on Identity Kit</p>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '32px 40px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, background: 'var(--orange)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 13, color: 'white' }}>IK</div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15, color: 'var(--text)' }}>Identity Kit</span>
        </div>
        <p style={{ fontSize: 12, color: 'var(--text3)' }}>Made with ❤️ for Indian Creators · identitykit.in</p>
      </footer>

    </div>
  )
}
