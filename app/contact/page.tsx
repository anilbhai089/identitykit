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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        input, textarea, select { font-family: inherit; }
        .form-input { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 15px; width: 100%; outline: none; transition: border 0.2s; padding: 12px 16px; }
        .form-input:focus { border-color: #FF6B2B; }
        .form-input::placeholder { color: rgba(255,255,255,0.25); }
        .contact-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 24px; display: flex; align-items: flex-start; gap: 16px; transition: all 0.2s; }
        .contact-card:hover { border-color: rgba(255,107,43,0.25); }
        .nav-link:hover { color: #FF6B2B !important; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 32px !important; }
        }
      `}</style>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(7,7,13,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
          <Link href="/" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20, color: '#FF6B2B', letterSpacing: '-0.5px' }}>
            Identity Kit
          </Link>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            <Link href="/about" className="nav-link" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>About</Link>
            <Link href="/contact" className="nav-link" style={{ fontSize: 14, color: '#FF6B2B', fontWeight: 600 }}>Contact</Link>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Get Started</Link>
          </div>
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
          We'd love to <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>hear from you</span>
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
                { icon: 'ti-mail', label: 'Email us', value: 'hello@identitykit.in', href: 'mailto:hello@identitykit.in' },
                { icon: 'ti-brand-whatsapp', label: 'WhatsApp', value: '+91 98765 43210', href: 'https://wa.me/919876543210' },
                { icon: 'ti-brand-instagram', label: 'Instagram', value: '@identitykit.in', href: 'https://instagram.com/identitykit.in' },
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
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>If you're a brand, agency, or creator community and want to collaborate — email us at <span style={{ color: '#FF6B2B' }}>partnerships@identitykit.in</span></p>
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
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15 }}>We'll get back to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')} style={{ marginTop: 24, background: 'transparent', border: '1px solid rgba(255,107,43,0.3)', color: '#FF6B2B', borderRadius: 8, padding: '8px 20px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600 }}>Send another</button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
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
                  <select className="form-input" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}>
                    <option value="">Select a topic</option>
                    <option value="general">General question</option>
                    <option value="bug">Found a bug</option>
                    <option value="feature">Feature request</option>
                    <option value="partnership">Partnership / Collaboration</option>
                    <option value="press">Press / Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 8 }}>Message *</label>
                  <textarea className="form-input" rows={6} placeholder="Tell us what's on your mind..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ resize: 'vertical' }} />
                </div>
                {status === 'error' && (
                  <div style={{ background: 'rgba(255,68,68,0.08)', border: '1px solid rgba(255,68,68,0.2)', borderRadius: 10, padding: '12px 16px', color: '#FF6B6B', fontSize: 14 }}>
                    Something went wrong. Please email us directly at hello@identitykit.in
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
