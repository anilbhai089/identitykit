'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function Landing() {
  const router = useRouter()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) router.push('/dashboard')
      else setChecking(false)
    })
  }, [router])

  if (checking) return (
    <div style={{ minHeight: '100vh', background: '#0A0A0F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 32, height: 32, border: '3px solid #1A1A24', borderTopColor: '#FF6B2B', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )

  return (
    <div style={{ background: '#0A0A0F', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff', overflowX: 'hidden' }}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}
        .ik-cta:hover{opacity:0.9;transform:translateY(-2px)}
        .ik-ghost:hover{background:rgba(255,107,43,0.08)!important;border-color:rgba(255,107,43,0.3)!important;color:#FF8C5A!important}
        .ik-feat:hover{border-color:rgba(255,107,43,0.25)!important;transform:translateY(-2px)}
        .ik-step-card:hover{border-color:rgba(255,107,43,0.2)!important}
      `}</style>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(10,10,15,0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', height: 58, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 30, height: 30, background: '#FF6B2B', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 13, color: 'white' }}>IK</div>
            <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16, color: '#fff' }}>Identity Kit</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => router.push('/auth')} className="ik-ghost" style={{ padding: '8px 18px', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: 'rgba(255,255,255,0.6)', fontSize: 13, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s' }}>
              Log in
            </button>
            <button onClick={() => router.push('/auth?mode=signup')} className="ik-cta" style={{ padding: '8px 18px', background: '#FF6B2B', border: 'none', borderRadius: 8, color: 'white', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s' }}>
              Get your link →
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 140, paddingBottom: 80, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* BG glow */}
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse,rgba(255,107,43,0.12) 0%,transparent 70%)', pointerEvents: 'none' }}></div>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px', animation: 'fadeUp 0.6s ease', position: 'relative' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 99, padding: '5px 14px', marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, background: '#FF6B2B', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>
            <span style={{ fontSize: 12, color: '#FF8C5A', fontWeight: 600 }}>Built for Indian creators 🇮🇳</span>
          </div>

          <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(38px,6vw,68px)', fontWeight: 800, lineHeight: 1.08, marginBottom: 22, letterSpacing: '-0.02em' }}>
            One link.<br />
            <span style={{ color: '#FF6B2B' }}>Your entire creator profile.</span>
          </h1>

          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 36, maxWidth: 520, margin: '0 auto 36px' }}>
            Stop scrambling when brands ask for your media kit. Get a professional profile with your CV, Media Kit and Rate Card — all in one shareable link.
          </p>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => router.push('/auth?mode=signup')} className="ik-cta" style={{ padding: '14px 28px', background: '#FF6B2B', border: 'none', borderRadius: 10, color: 'white', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 8 }}>
              Create your Identity Kit <i className="ti ti-arrow-right" style={{ fontSize: 16 }}></i>
            </button>
            <button onClick={() => router.push('/anil')} className="ik-ghost" style={{ padding: '14px 24px', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, color: 'rgba(255,255,255,0.6)', fontSize: 15, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s' }}>
              See example profile →
            </button>
          </div>

          <p style={{ marginTop: 18, fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>Free to create · No credit card required</p>
        </div>

        {/* Floating profile card mock */}
        <div style={{ maxWidth: 420, margin: '56px auto 0', padding: '0 24px', animation: 'float 4s ease-in-out infinite' }}>
          <div style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, overflow: 'hidden', textAlign: 'left' }}>
            <div style={{ height: 70, background: '#0f1a24', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 18px,#FF6B2B14 18px,#FF6B2B14 19px),repeating-linear-gradient(90deg,transparent,transparent 18px,#FF6B2B14 18px,#FF6B2B14 19px)' }}></div>
            </div>
            <div style={{ padding: '0 18px 18px' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#FF6B2B', border: '3px solid #111118', marginTop: -28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 18, color: 'white', marginBottom: 10 }}>AP</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 16, fontWeight: 800, marginBottom: 3 }}>Anil Prajapati</div>
              <div style={{ fontSize: 11, color: '#FF6B2B', marginBottom: 12 }}>identitykit.in/anilprajapati</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 10, overflow: 'hidden' }}>
                {[['25K','Followers'],['4.8%','Engagement'],['12+','Brands']].map(([n,l]) => (
                  <div key={l} style={{ background: '#0A0A0F', padding: '10px 6px', textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 800, color: '#FF6B2B' }}>{n}</div>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginTop: 1 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS / SOCIAL PROOF */}
      <section style={{ padding: '32px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 20 }}>Everything brands ask for — in one link</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            {[['ti-id-badge','Creator CV'],['ti-chart-bar','Media Kit'],['ti-receipt','Rate Card'],['ti-photo','Portfolio'],['ti-share','Share link']].map(([icon,label]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <i className={`ti ${icon}`} style={{ fontSize: 16, color: '#FF6B2B' }}></i>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '80px 24px', maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>How it works</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, lineHeight: 1.15 }}>From zero to professional<br />profile in 5 minutes</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}>
          {[
            { num: '01', icon: 'ti-forms', title: 'Fill the form', desc: 'Answer simple questions about your platforms, stats, audience and rates.' },
            { num: '02', icon: 'ti-sparkles', title: 'AI generates', desc: 'Claude AI writes your professional bio, media kit and structures everything.' },
            { num: '03', icon: 'ti-link', title: 'Get your link', desc: 'Get identitykit.in/yourname — one link with everything brands need.' },
            { num: '04', icon: 'ti-rocket', title: 'Close brand deals', desc: 'Share your link. Brands see everything. You look professional. Deals happen.' },
          ].map(s => (
            <div key={s.num} className="ik-step-card" style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px 20px', transition: 'all 0.2s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div style={{ width: 40, height: 40, background: '#FF6B2B14', border: '1px solid #FF6B2B22', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`ti ${s.icon}`} style={{ fontSize: 20, color: '#FF6B2B' }}></i>
                </div>
                <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 28, fontWeight: 800, color: 'rgba(255,107,43,0.15)' }}>{s.num}</span>
              </div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '0 24px 80px', maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>Why Identity Kit</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, lineHeight: 1.15 }}>Everything in one place.<br />Nothing else needed.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 12 }}>
          {[
            { icon: 'ti-brand-instagram', color: '#e1306c', title: 'All platforms', desc: 'Instagram, YouTube, LinkedIn, Twitter — all your stats in one professional place.' },
            { icon: 'ti-users', color: '#FF6B2B', title: 'Audience insights', desc: 'Show brands exactly who watches you — age, gender, top cities — with visual bars.' },
            { icon: 'ti-receipt', color: '#22c55e', title: 'Rate card built-in', desc: 'Your pricing for every content type — Reels, YouTube, Stories — all formatted professionally.' },
            { icon: 'ti-sparkles', color: '#a855f7', title: 'AI-written bio', desc: 'Claude AI writes your professional creator bio in 3rd person — sounds amazing every time.' },
            { icon: 'ti-photo-video', color: '#3b82f6', title: 'Portfolio showcase', desc: 'Upload 2 videos and 2 images. Brands can watch your actual content before reaching out.' },
            { icon: 'ti-share', color: '#FF6B2B', title: 'One shareable link', desc: 'identitykit.in/yourname — share on Instagram bio, WhatsApp, email. Works everywhere.' },
          ].map(f => (
            <div key={f.title} className="ik-feat" style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px', transition: 'all 0.2s' }}>
              <div style={{ width: 38, height: 38, background: `${f.color}14`, border: `1px solid ${f.color}22`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <i className={`ti ${f.icon}`} style={{ fontSize: 19, color: f.color }}></i>
              </div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{f.title}</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VS TABLE */}
      <section style={{ padding: '0 24px 80px', maxWidth: 680, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(24px,3.5vw,36px)', fontWeight: 800 }}>Why not just use Canva or Google Docs?</h2>
        </div>
        <div style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#0A0A0F', padding: '12px 0', textAlign: 'center' }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>Feature</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>Others</div>
            <div style={{ fontSize: 13, color: '#FF6B2B', fontWeight: 700, fontFamily: "'Syne',sans-serif" }}>Identity Kit</div>
          </div>
          {[
            ['India-first (INR, GST)', false, true],
            ['AI writes your bio', false, true],
            ['Shareable link', false, true],
            ['Media Kit + CV + Rate Card', false, true],
            ['Portfolio videos', false, true],
            ['Free to create', true, true],
          ].map(([feat, them, us]) => (
            <div key={feat as string} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '13px 20px', borderTop: '1px solid rgba(255,255,255,0.05)', alignItems: 'center' }}>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>{feat}</div>
              <div style={{ textAlign: 'center' }}>
                <i className={`ti ${them ? 'ti-check' : 'ti-x'}`} style={{ fontSize: 16, color: them ? '#22c55e' : 'rgba(255,255,255,0.2)' }}></i>
              </div>
              <div style={{ textAlign: 'center' }}>
                <i className={`ti ${us ? 'ti-check' : 'ti-x'}`} style={{ fontSize: 16, color: us ? '#FF6B2B' : 'rgba(255,255,255,0.2)' }}></i>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', background: 'linear-gradient(135deg,#1a0a00,#0f1118)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 24, padding: '52px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 28px,#FF6B2B0a 28px,#FF6B2B0a 29px),repeating-linear-gradient(90deg,transparent,transparent 28px,#FF6B2B0a 28px,#FF6B2B0a 29px)', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🚀</div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 32, fontWeight: 800, marginBottom: 14, lineHeight: 1.15 }}>Get your creator link today</h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 30, lineHeight: 1.6 }}>Join Indian creators who look professional when brands come knocking.</p>
            <button onClick={() => router.push('/auth?mode=signup')} className="ik-cta" style={{ padding: '14px 32px', background: '#FF6B2B', border: 'none', borderRadius: 10, color: 'white', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Create your Identity Kit free <i className="ti ti-arrow-right" style={{ fontSize: 16 }}></i>
            </button>
            <p style={{ marginTop: 14, fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>Free · Takes 5 minutes · No credit card</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1080, margin: '0 auto', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 24, height: 24, background: '#FF6B2B', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 10, color: 'white' }}>IK</div>
          <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Identity Kit</span>
        </div>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>Built for Indian creators 🇮🇳</p>
      </footer>
    </div>
  )
}
