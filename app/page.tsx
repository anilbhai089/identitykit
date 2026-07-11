'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function Landing() {
  const router = useRouter()
  // Don't block render — check auth in background
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Check auth silently — redirect if logged in, otherwise just show page
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) router.push('/dashboard')
    })
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [router])

  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff', overflowX: 'hidden' }}>
      
      
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes spin { to { transform: rotate(360deg) } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes float { 0%,100% { transform: translateY(0px) } 50% { transform: translateY(-10px) } }
        @keyframes pulse { 0%,100% { opacity: 1 } 50% { opacity: 0.4 } }
        @keyframes shimmer { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }
        @keyframes orbit { from { transform: rotate(0deg) translateX(110px) rotate(0deg) } to { transform: rotate(360deg) translateX(110px) rotate(-360deg) } }
        @keyframes orbit2 { from { transform: rotate(180deg) translateX(80px) rotate(-180deg) } to { transform: rotate(540deg) translateX(80px) rotate(-540deg) } }
        .btn-primary { background: #FF6B2B; border: none; color: #fff; font-weight: 700; cursor: pointer; transition: all 0.2s; font-family: inherit; }
        .btn-primary:hover { background: #FF8C5A; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,107,43,0.35); }
        .btn-ghost { background: transparent; border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); cursor: pointer; transition: all 0.2s; font-family: inherit; }
        .btn-ghost:hover { border-color: rgba(255,107,43,0.4); color: #FF8C5A; }
        .feature-card { transition: all 0.25s; }
        .feature-card:hover { transform: translateY(-4px); border-color: rgba(255,107,43,0.25) !important; }
        .step-num { background: linear-gradient(135deg, rgba(255,107,43,0.15), rgba(255,107,43,0.05)); border: 1px solid rgba(255,107,43,0.2); }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-preview-stack { height: 380px !important; margin-top: 20px; }
        }
        @media (max-width: 640px) {
          .hero-title { font-size: 36px !important; }
          .hero-sub { font-size: 15px !important; }
          .hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .hero-btns button { text-align: center; justify-content: center; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .vs-table-cols { grid-template-columns: 1fr 80px 80px !important; }
          .nav-cta-text { display: none !important; }
          .social-row { gap: 16px !important; }
          .hero-preview-stack { height: 320px !important; }
          .preview-window { width: 240px !important; }
        }
        @media (max-width: 400px) {
          .hero-title { font-size: 30px !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '0 20px', background: scrolled ? 'rgba(7,7,13,0.85)' : 'transparent', backdropFilter: scrolled ? 'blur(16px)' : 'none', borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none', transition: 'all 0.3s' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg,#FF6B2B,#FF4500)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 13, color: 'white', boxShadow: '0 4px 12px rgba(255,107,43,0.35)' }}>IK</div>
            <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, letterSpacing: '-0.01em' }}>Identity Kit</span>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button onClick={() => router.push('/tools')} className="btn-ghost" style={{ padding: '8px 16px', borderRadius: 9, fontSize: 13 }}>Tools</button>
            <button onClick={() => router.push('/auth')} className="btn-ghost" style={{ padding: '8px 16px', borderRadius: 9, fontSize: 13 }}>Log in</button>
            <button onClick={() => router.push('/auth?mode=signup')} className="btn-primary" style={{ padding: '8px 18px', borderRadius: 9, fontSize: 13, display: 'flex', alignItems: 'center', gap: 5 }}>
              <span className="nav-cta-text">Get your link</span>
              <span style={{ display: 'none' }} className="nav-cta-mobile">Start free</span>
              <i className="ti ti-arrow-right" style={{ fontSize: 13 }}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ paddingTop: 132, paddingBottom: 60, position: 'relative', overflow: 'hidden' }}>
        {/* BG effects */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 1100, height: 560, background: 'radial-gradient(ellipse at 30% 0%,rgba(255,107,43,0.13) 0%,transparent 65%)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: 60, right: '8%', width: 260, height: 260, background: 'radial-gradient(circle,rgba(168,85,247,0.06) 0%,transparent 70%)', pointerEvents: 'none' }}></div>

        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 40, alignItems: 'center' }}>

            {/* ── LEFT: headline column ── */}
            <div style={{ animation: 'fadeUp 0.6s ease' }}>
              {/* Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,107,43,0.08)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 99, padding: '6px 14px', marginBottom: 26 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#FF6B2B', animation: 'pulse 2s infinite', flexShrink: 0 }}></span>
                <span style={{ fontSize: 12, color: '#FF8C5A', fontWeight: 600, letterSpacing: '0.02em' }}>Built for Indian Creators 🇮🇳</span>
              </div>

              {/* Title — editorial serif */}
              <h1 className="hero-title" style={{ fontFamily: "'Fraunces',serif", fontSize: 58, fontWeight: 500, fontStyle: 'italic', lineHeight: 1.08, marginBottom: 22, letterSpacing: '-0.01em', color: 'rgba(255,255,255,0.95)' }}>
                One link.<br />
                <span style={{ fontStyle: 'normal', fontWeight: 600, background: 'linear-gradient(135deg,#FF6B2B 0%,#FF8C5A 50%,#FFB347 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Every brand</span>{' '}
                needs.
              </h1>

              <p className="hero-sub" style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 32, maxWidth: 440 }}>
                Stop losing brand deals because you don&apos;t look professional. Get your Media Kit, Rate Card and Creator CV — all in one stunning shareable link.
              </p>

              {/* CTAs */}
              <div className="hero-btns" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
                <button onClick={() => router.push('/auth?mode=signup')} className="btn-primary" style={{ padding: '14px 28px', borderRadius: 12, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
                  Create your Identity Kit free
                  <i className="ti ti-arrow-right" style={{ fontSize: 16 }}></i>
                </button>
                <button onClick={() => router.push('/anil')} className="btn-ghost" style={{ padding: '14px 22px', borderRadius: 12, fontSize: 15 }}>
                  See live example →
                </button>
              </div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', marginBottom: 32 }}>Free to create · No credit card · Takes 5 minutes</p>

              {/* Trusted-by strip, now sits under the CTA on the left */}
              <div>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>Everything brands ask for</p>
                <div className="social-row" style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                  {[['ti-id-badge','Creator CV'],['ti-chart-bar','Media Kit'],['ti-receipt','Rate Card'],['ti-photo-video','Portfolio']].map(([icon,label]) => (
                    <div key={label as string} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <i className={`ti ${icon}`} style={{ fontSize: 14, color: '#FF6B2B' }}></i>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: floating real-product preview windows ── */}
            <div className="hero-preview-stack" style={{ position: 'relative', height: 500 }}>

              {/* Rate Card window — back, upper-right */}
              <div className="preview-window" style={{ position: 'absolute', top: 0, right: 0, width: 300, animation: 'float 6s ease-in-out infinite', zIndex: 1 }}>
                <div style={{ background: '#0e0e18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.45)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 12px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                    <i className="ti ti-receipt" style={{ fontSize: 12, color: '#FF6B2B' }}></i>
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.04em' }}>RATE CARD</span>
                  </div>
                  <div style={{ padding: 14 }}>
                    {[['Instagram Reel','₹15,000'],['YouTube Integration','₹40,000'],['Story Mention','₹5,000']].map(([label, price]) => (
                      <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{label}</span>
                        <span style={{ fontSize: 12, color: '#FF8C5A', fontWeight: 700 }}>{price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Media Kit window — front, lower-left, overlapping */}
              <div className="preview-window" style={{ position: 'absolute', bottom: 20, left: 0, width: 320, animation: 'float 5s ease-in-out infinite 0.4s', zIndex: 2 }}>
                <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,107,43,0.18)', borderRadius: 20, overflow: 'hidden', backdropFilter: 'blur(12px)', boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,107,43,0.08)' }}>
                    <div style={{ height: 64, background: '#0e0e1c', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 24px,rgba(255,107,43,0.08) 24px,rgba(255,107,43,0.08) 25px),repeating-linear-gradient(90deg,transparent,transparent 24px,rgba(255,107,43,0.08) 24px,rgba(255,107,43,0.08) 25px)' }}></div>
                    </div>
                    <div style={{ padding: '0 16px 16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 10 }}>
                        <div style={{ position: 'relative', marginTop: -26 }}>
                          <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'linear-gradient(135deg,#FF6B2B,#FF4500)', border: '3px solid #07070D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16, color: 'white' }}>AP</div>
                          <div style={{ position: 'absolute', bottom: 2, right: 2, width: 11, height: 11, background: '#22c55e', borderRadius: '50%', border: '2px solid #07070D' }}></div>
                        </div>
                        <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 99, padding: '4px 9px', fontSize: 9, color: '#22c55e', fontWeight: 600 }}>● Open for collabs</div>
                      </div>
                      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 800, marginBottom: 2 }}>Anil Prajapati</div>
                      <div style={{ fontSize: 10, color: '#FF6B2B', marginBottom: 12 }}>identitykit.in/anilprajapati</div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(255,255,255,0.04)', borderRadius: 12, overflow: 'hidden' }}>
                        {[['23K','Followers'],['35K','Avg Views'],['4.8%','Eng.'],['12+','Brands']].map(([n,l]) => (
                          <div key={l} style={{ background: '#111120', padding: '8px 4px', textAlign: 'center' }}>
                            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 11, fontWeight: 800, color: '#FF6B2B' }}>{n}</div>
                            <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>{l}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: '72px 20px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,107,43,0.2),transparent)' }}></div>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12, padding: '4px 12px', background: 'rgba(255,107,43,0.08)', borderRadius: 99 }}>How it works</div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              From zero to professional<br />in under 5 minutes
            </h2>
          </div>
          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {[
              { num: '01', icon: 'ti-forms', title: 'Fill the form', desc: 'Answer simple questions about your stats, rates and audience. Takes 5 minutes.' },
              { num: '02', icon: 'ti-sparkles', title: 'AI generates', desc: 'Claude AI writes your professional bio and structures your entire profile instantly.' },
              { num: '03', icon: 'ti-link', title: 'Get your link', desc: 'Get identitykit.in/yourname — one link with everything brands ever need.' },
              { num: '04', icon: 'ti-rocket', title: 'Close deals', desc: 'Share your link. Brands see everything instantly. You look professional. Deals close.' },
            ].map((s, i) => (
              <div key={s.num} className="feature-card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18, padding: '24px 20px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -1, left: 0, right: 0, height: 2, background: i === 0 ? 'linear-gradient(90deg,#FF6B2B,transparent)' : 'transparent' }}></div>
                <div className="step-num" style={{ width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <i className={`ti ${s.icon}`} style={{ fontSize: 20, color: '#FF6B2B' }}></i>
                </div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 28, fontWeight: 800, color: 'rgba(255,107,43,0.12)', marginBottom: 6 }}>{s.num}</div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 16, fontWeight: 700, marginBottom: 8, marginTop: -4 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ padding: '0 20px 72px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12, padding: '4px 12px', background: 'rgba(255,107,43,0.08)', borderRadius: 99 }}>Why Identity Kit</div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Everything in one place.<br />Nothing else needed.
            </h2>
          </div>
          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
            {[
              { icon: 'ti-sparkles', color: '#a855f7', bg: 'rgba(168,85,247,0.1)', title: 'AI writes your bio', desc: 'Claude AI crafts your professional bio in first person — sounds genuinely like you, every time.' },
              { icon: 'ti-chart-bar', color: '#22c55e', bg: 'rgba(34,197,94,0.1)', title: 'Real audience insights', desc: 'Show brands exactly who watches you — age group, gender, top cities — all with visual bars.' },
              { icon: 'ti-receipt', color: '#FF6B2B', bg: 'rgba(255,107,43,0.1)', title: 'Rate card built-in', desc: 'Every platform, every content type — Reels, YouTube, Stories, Shorts — all formatted professionally.' },
              { icon: 'ti-photo-video', color: '#3b82f6', bg: 'rgba(59,130,246,0.1)', title: 'Portfolio showcase', desc: 'Upload 2 videos + 2 images. Brands watch your actual content before even reaching out.' },
              { icon: 'ti-brand-instagram', color: '#e1306c', bg: 'rgba(225,48,108,0.1)', title: 'All platforms', desc: 'Instagram, YouTube, LinkedIn, Twitter — all your stats displayed with their real brand icons.' },
              { icon: 'ti-share', color: '#FF6B2B', bg: 'rgba(255,107,43,0.1)', title: 'One shareable link', desc: 'identitykit.in/yourname — put it in your Instagram bio and never send a Word doc again.' },
            ].map(f => (
              <div key={f.title} className="feature-card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px' }}>
                <div style={{ width: 42, height: 42, background: f.bg, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <i className={`ti ${f.icon}`} style={{ fontSize: 20, color: f.color }}></i>
                </div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 7 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VS TABLE ── */}
      <section style={{ padding: '0 20px 72px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(22px,3.5vw,34px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15 }}>Why not just use Canva<br />or Google Docs?</h2>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18, overflow: 'hidden' }}>
            <div className="vs-table-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 90px 90px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ padding: '12px 16px', fontSize: 11, color: 'rgba(255,255,255,0.25)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Feature</div>
              <div style={{ padding: '12px 8px', textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.25)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Others</div>
              <div style={{ padding: '12px 8px', textAlign: 'center', fontSize: 12, color: '#FF6B2B', fontWeight: 800, fontFamily: "'Syne',sans-serif" }}>IK</div>
            </div>
            {[
              ['India-first (INR, GST, UPI)', false, true],
              ['AI-written bio', false, true],
              ['Shareable link', false, true],
              ['Media Kit + CV + Rate Card', false, true],
              ['Portfolio videos', false, true],
              ['Creator terms & notes', false, true],
              ['Free to create', true, true],
            ].map(([feat, them, us], i) => (
              <div key={feat as string} className="vs-table-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 90px 90px', borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.04)' : 'none', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                <div style={{ padding: '12px 16px', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{feat}</div>
                <div style={{ padding: '12px 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`ti ${them ? 'ti-check' : 'ti-x'}`} style={{ fontSize: 16, color: them ? '#22c55e' : 'rgba(255,255,255,0.15)' }}></i>
                </div>
                <div style={{ padding: '12px 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`ti ${us ? 'ti-check' : 'ti-x'}`} style={{ fontSize: 16, color: us ? '#FF6B2B' : 'rgba(255,255,255,0.15)' }}></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL / QUOTE ── */}
      <section style={{ padding: '0 20px 72px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg,rgba(255,107,43,0.06),rgba(168,85,247,0.04))', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 20, padding: 'clamp(24px,5vw,40px)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'radial-gradient(circle,rgba(255,107,43,0.08) 0%,transparent 70%)' }}></div>
            <div style={{ position: 'relative' }}>
              <div style={{ fontSize: 40, marginBottom: 16, lineHeight: 1 }}>&ldquo;</div>
              <p style={{ fontSize: 'clamp(15px,2.5vw,18px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>
                When a brand DMs you asking for your media kit, what do you send them? Most Indian creators send a screenshot or a Canva PDF. With Identity Kit — you just send one link and they see everything.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#FF6B2B,#FF4500)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 14, color: 'white', flexShrink: 0 }}>IK</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>Identity Kit Team</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>Built for Indian creators</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '0 20px 80px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          {/* Glow */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '100%', height: 300, background: 'radial-gradient(ellipse,rgba(255,107,43,0.12) 0%,transparent 70%)', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 24, padding: 'clamp(32px,6vw,52px) clamp(20px,5vw,48px)', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 32px,rgba(255,107,43,0.03) 32px,rgba(255,107,43,0.03) 33px),repeating-linear-gradient(90deg,transparent,transparent 32px,rgba(255,107,43,0.03) 32px,rgba(255,107,43,0.03) 33px)', pointerEvents: 'none' }}></div>
            <div style={{ position: 'relative' }}>
              <div style={{ fontSize: 44, marginBottom: 16 }}>🚀</div>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(26px,4vw,36px)', fontWeight: 800, marginBottom: 14, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                Get your creator link today
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 28, lineHeight: 1.65 }}>
                Join Indian creators who never scramble when a brand asks for their media kit.
              </p>
              <button onClick={() => router.push('/auth?mode=signup')} className="btn-primary" style={{ padding: '14px 32px', borderRadius: 12, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8, width: '100%', maxWidth: 320, justifyContent: 'center' }}>
                Create your Identity Kit free
                <i className="ti ti-arrow-right" style={{ fontSize: 16 }}></i>
              </button>
              <p style={{ marginTop: 14, fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>Free · 5 minutes · No credit card</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '32px 20px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 26, height: 26, background: 'linear-gradient(135deg,#FF6B2B,#FF4500)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 10, color: 'white' }}>IK</div>
              <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Identity Kit</span>
            </div>
            <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
              {[['Blog', '/blog'], ['About', '/about'], ['Contact', '/contact'], ['Terms', '/terms'], ['Privacy', '/privacy']].map(([label, href]) => (
                <a key={label} href={href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#FF6B2B')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}>{label}</a>
              ))}
            </div>
          </div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>© 2025 Identity Kit · Made with ❤️ for Indian creators 🇮🇳</p>
        </div>
      </footer>
    </div>
  )
}
