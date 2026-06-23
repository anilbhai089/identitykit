'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', subject: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>
      
      
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        input, textarea, select { font-family: inherit; }
        .form-input {
          background: #111118;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: #fff;
          font-size: 15px;
          width: 100%;
          outline: none;
          transition: border 0.2s;
          padding: 12px 16px;
          -webkit-appearance: none;
          appearance: none;
          color-scheme: dark;
        }
        .form-input:focus { border-color: #FF6B2B; }
        .form-input::placeholder { color: rgba(255,255,255,0.25); }
        select.form-input option { background: #1a1a28; color: #fff; }
        .contact-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 24px; display: flex; align-items: flex-start; gap: 16px; transition: all 0.2s; }
        .contact-card:hover { border-color: rgba(255,107,43,0.25); }
        .nav-link:hover { color: #FF6B2B !important; }
        .nav-links-row { display: flex; gap: 28px; align-items: center; }
        .mob-cta { display: none; }
        @media (max-width: 640px) {
          .nav-links-row { display: none !important; }
          .mob-cta { display: block !important; }
        }
        .nav-links-row { display: flex; gap: 32px; align-items: center; }
        @media (max-width: 640px) { .nav-links-row { display: none !important; } .mob-cta { display: block !important; } .nav-logo { font-size: 16px !important; } }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 32px !important; }
          .name-email-row { grid-template-columns: 1fr !important; }
        }
      `}</style>

            {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(7,7,13,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
          <a href="/" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, color: '#FF6B2B', letterSpacing: '-0.5px', whiteSpace: 'nowrap', textDecoration: 'none' }}>
            Identity Kit
          </a>
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="nav-links-row">
            <a href="/blog" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: '400', whiteSpace: 'nowrap', textDecoration: 'none' }}>Blog</a>
            <a href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: '400', whiteSpace: 'nowrap', textDecoration: 'none' }}>Tools</a>
            <a href="/about" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: '400', whiteSpace: 'nowrap', textDecoration: 'none' }}>About</a>
            <a href="/contact" style={{ fontSize: 14, color: '#FF6B2B', fontWeight: '600', whiteSpace: 'nowrap', textDecoration: 'none' }}>Contact</a>
            <a href="/auth" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700, whiteSpace: 'nowrap', textDecoration: 'none' }}>Get Started</a>
          </div>
          <a href="/auth" className="mob-cta" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '7px 14px', fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap', textDecoration: 'none' }}>Get Started</a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 700px 400px at 50% 0%, rgba(255,107,43,0.06), transparent)', pointerEvents: 'none' }} />
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,107,43,0.08)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 100, padding: '6px 16px', marginBottom: 24 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF6B2B', display: 'inline-block' }}></span>
          <span style={{ fontSize: 13, color: '#FF6B2B', fontWeight: 600 }}>Get in Touch</span>
        </div>
        <h1 className="hero-title" style={{ fontFamily: 'Syne, sans-serif', fontSize: 52, fontWeight: 800, lineHeight: 1.1, marginBottom: 16, letterSpacing: '-1px' }}>
          We&apos;d love to <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>hear from you</span>
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', maxWidth: 500, margin: '0 auto' }}>Questions, feedback, partnership ideas — we read every message. Usually reply within 24 hours.</p>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 80px' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 40, alignItems: 'start' }}>

          {/* Left — contact info */}
          <div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 800, marginBottom: 24 }}>Contact details</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              {[
                { icon: 'ti-mail', label: 'Email us', value: 'anilprajapati2667@gmail.com', href: 'mailto:anilprajapati2667@gmail.com' },
                { icon: 'ti-brand-whatsapp', label: 'WhatsApp', value: '+91 79842 66725', href: 'https://wa.me/917984266725' },
              ].map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <div className="contact-card">
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,107,43,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={`ti ${c.icon}`} style={{ fontSize: 20, color: '#FF6B2B' }}></i>
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>{c.label}</div>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{c.value}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 16, padding: 24 }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 10 }}>🤝 Want to partner with us?</div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>If you&apos;re a brand, agency, or creator community and want to collaborate — email us at <span style={{ color: '#FF6B2B' }}>anilprajapati2667@gmail.com</span></p>
            </div>
          </div>

          {/* Right — form */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 36 }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 800, marginBottom: 28 }}>Send us a message</h2>

            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(76,175,80,0.1)', border: '1px solid rgba(76,175,80,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <i className="ti ti-check" style={{ fontSize: 28, color: '#4CAF50' }}></i>
                </div>
                <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Message sent! 🎉</div>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15 }}>We&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')} style={{ marginTop: 24, background: 'transparent', border: '1px solid rgba(255,107,43,0.3)', color: '#FF6B2B', borderRadius: 8, padding: '8px 20px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600 }}>Send another</button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div className="name-email-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 8 }}>Your name *</label>
                    <input className="form-input" placeholder="Anil Prajapati" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 8 }}>Email address *</label>
                    <input className="form-input" type="email" placeholder="anil@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 8 }}>Subject</label>
                  <select
                    className="form-input"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="" style={{ background: '#1a1a28', color: '#fff' }}>Select a topic</option>
                    <option value="general" style={{ background: '#1a1a28', color: '#fff' }}>General question</option>
                    <option value="bug" style={{ background: '#1a1a28', color: '#fff' }}>Found a bug</option>
                    <option value="feature" style={{ background: '#1a1a28', color: '#fff' }}>Feature request</option>
                    <option value="partnership" style={{ background: '#1a1a28', color: '#fff' }}>Partnership / Collaboration</option>
                    <option value="press" style={{ background: '#1a1a28', color: '#fff' }}>Press / Media</option>
                    <option value="other" style={{ background: '#1a1a28', color: '#fff' }}>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 8 }}>Message *</label>
                  <textarea className="form-input" rows={6} placeholder="Tell us what's on your mind..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ resize: 'vertical' }} />
                </div>
                {status === 'error' && (
                  <div style={{ background: 'rgba(255,68,68,0.08)', border: '1px solid rgba(255,68,68,0.2)', borderRadius: 10, padding: '12px 16px', color: '#FF6B6B', fontSize: 14 }}>
                    Something went wrong. Please email us directly at anilprajapati2667@gmail.com
                  </div>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  style={{ background: '#FF6B2B', color: '#fff', border: 'none', borderRadius: 12, padding: '14px', fontWeight: 700, fontSize: 16, cursor: status === 'sending' ? 'not-allowed' : 'pointer', fontFamily: 'inherit', opacity: status === 'sending' ? 0.7 : 1, transition: 'all 0.2s' }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send message →'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Blog</Link>
          <Link href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Tools</Link>
          <Link href="/about" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>About</Link>
          <Link href="/contact" style={{ fontSize: 14, color: '#FF6B2B' }}>Contact</Link>
          <Link href="/terms" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Terms</Link>
          <Link href="/privacy" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Privacy</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2025 Identity Kit. Made with ❤️ for Indian creators.</p>
      </footer>
    </div>
  )
}
