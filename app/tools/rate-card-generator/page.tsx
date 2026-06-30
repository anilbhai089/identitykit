'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

// ─── TOGGLE: flip to true once payment is wired and tested ───
const PAYMENT_ENABLED = false

type RateRow = { key: string; name: string; desc: string; icon: string; color: string }

const IG_RATES: RateRow[] = [
  { key: 'reel', name: 'Dedicated Reel', desc: '60 sec · 3–5 days · 2 revisions', icon: 'ti-brand-instagram', color: '#e1306c' },
  { key: 'post', name: 'Static Post', desc: '1 post · caption included', icon: 'ti-photo', color: '#e1306c' },
  { key: 'carousel', name: 'Carousel', desc: '5–8 slides · 2 revisions', icon: 'ti-layout-grid', color: '#e1306c' },
  { key: 'stories', name: 'Stories Pack', desc: '3 slides · link in bio', icon: 'ti-circle-dashed', color: '#e1306c' },
  { key: 'storyLink', name: 'Story + Link', desc: 'Swipe-up story', icon: 'ti-link', color: '#e1306c' },
]
const YT_RATES: RateRow[] = [
  { key: 'ytDedicated', name: 'Dedicated Video', desc: '8–15 min · 5–7 days', icon: 'ti-brand-youtube', color: '#ff0000' },
  { key: 'ytIntegration', name: 'Integration', desc: '60–90 sec in existing video', icon: 'ti-player-play', color: '#ff0000' },
  { key: 'ytShort', name: 'YouTube Short', desc: '60 sec · 3–5 days', icon: 'ti-device-mobile-rotated', color: '#ff0000' },
]
const OTHER_RATES: RateRow[] = [
  { key: 'twitter', name: 'Twitter Thread', desc: 'Full thread with visuals', icon: 'ti-brand-twitter', color: '#1da1f2' },
  { key: 'linkedin', name: 'LinkedIn Post', desc: 'Professional post', icon: 'ti-brand-linkedin', color: '#0077b5' },
  { key: 'blog', name: 'Blog Post', desc: 'Long-form article', icon: 'ti-file-text', color: '#FF6B2B' },
  { key: 'podcast', name: 'Podcast Mention', desc: 'Dedicated mention', icon: 'ti-microphone', color: '#a855f7' },
]

const TERM_OPTIONS = [
  { key: 'term_advance', label: '50% advance payment required before work begins' },
  { key: 'term_gst', label: 'All prices exclusive of 18% GST · GST invoice provided' },
  { key: 'term_usage', label: 'Usage rights for 6 months · Exclusivity available on request' },
  { key: 'term_revision', label: '1 free revision per deliverable · Additional revisions charged separately' },
  { key: 'term_custom', label: 'Custom packages available · Contact to discuss' },
  { key: 'term_brief', label: 'Detailed brand brief required before starting' },
  { key: 'term_approval', label: 'Content requires brand approval before posting' },
  { key: 'term_cancel', label: '50% cancellation fee after work has started' },
]

type FormData = {
  fullName: string
  niche: string
  photo: string // base64
  email: string
  whatsapp: string
  validTill: string // YYYY-MM
  igHandle: string
  igFollowers: string
  ytHandle: string
  ytSubs: string
  customPackage: string
  rates: Record<string, string>
  terms: Record<string, boolean>
}

const emptyForm: FormData = {
  fullName: '',
  niche: '',
  photo: '',
  email: '',
  whatsapp: '',
  validTill: '',
  igHandle: '',
  igFollowers: '',
  ytHandle: '',
  ytSubs: '',
  customPackage: '',
  rates: {},
  terms: {},
}

const S = {
  card: { background: '#111120', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16 } as React.CSSProperties,
  sectionTitle: { fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' as const, letterSpacing: '0.14em', marginBottom: 14 },
  label: { fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: 6, display: 'block' },
  input: { width: '100%', background: '#0C0C18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '10px 12px', color: '#fff', fontSize: 14, fontFamily: "'Plus Jakarta Sans',sans-serif", outline: 'none' } as React.CSSProperties,
}

export default function RateCardGenerator() {
  const [step, setStep] = useState<1 | 2>(1)
  const [data, setData] = useState<FormData>(emptyForm)
  const [generating, setGenerating] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const upd = (k: keyof FormData, v: any) => setData(d => ({ ...d, [k]: v }))
  const updRate = (key: string, v: string) => setData(d => ({ ...d, rates: { ...d.rates, [key]: v } }))
  const updTerm = (key: string, v: boolean) => setData(d => ({ ...d, terms: { ...d.terms, [key]: v } }))

  function handlePhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => upd('photo', reader.result as string)
    reader.readAsDataURL(file)
  }

  const igRatesFilled = IG_RATES.filter(r => data.rates[r.key])
  const ytRatesFilled = YT_RATES.filter(r => data.rates[r.key])
  const otherRatesFilled = OTHER_RATES.filter(r => data.rates[r.key])
  const selectedTerms = TERM_OPTIONS.filter(t => data.terms[t.key])

  const validTillLabel = data.validTill
    ? new Date(data.validTill + '-01').toLocaleString('default', { month: 'long', year: 'numeric' })
    : ''

  function canProceed() {
    return data.fullName.trim() && data.niche.trim() &&
      (igRatesFilled.length > 0 || ytRatesFilled.length > 0 || otherRatesFilled.length > 0)
  }

  async function handleDownload() {
    setGenerating(true)
    try {
      const { generateRateCardPdf } = await import('./pdf-generator')
      const doc = await generateRateCardPdf({
        fullName: data.fullName,
        niche: data.niche,
        photo: data.photo,
        email: data.email,
        whatsapp: data.whatsapp,
        validTillLabel,
        customPackage: data.customPackage,
        igHandle: data.igHandle,
        igFollowers: data.igFollowers,
        ytHandle: data.ytHandle,
        ytSubs: data.ytSubs,
        igRates: igRatesFilled.map(r => ({ ...r, price: data.rates[r.key] })),
        ytRates: ytRatesFilled.map(r => ({ ...r, price: data.rates[r.key] })),
        otherRates: otherRatesFilled.map(r => ({ ...r, price: data.rates[r.key] })),
        terms: selectedTerms,
      })
      doc.save(`${data.fullName.replace(/\s+/g, '-')}-Rate-Card.pdf`)
    } catch (err) {
      console.error(err)
      alert('Something went wrong generating the PDF. Please try again.')
    } finally {
      setGenerating(false)
    }
  }

  function RateRowDisplay({ r }: { r: RateRow }) {
    return (
      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <td style={{ padding: '11px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: `${r.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <i className={`ti ${r.icon}`} style={{ fontSize: 13, color: r.color }}></i>
            </div>
            <div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{r.name}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginTop: 1 }}>{r.desc}</div>
            </div>
          </div>
        </td>
        <td style={{ padding: '11px 0', textAlign: 'right', fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, color: '#FF6B2B', whiteSpace: 'nowrap' }}>
          ₹{Number(data.rates[r.key] || 0).toLocaleString('en-IN')}
        </td>
      </tr>
    )
  }

  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>
      <style>{`
        *,*::before,*::after{box-sizing:border-box}
        input::placeholder{color:rgba(255,255,255,0.2)}
        input:focus{border-color:rgba(255,107,43,0.4)!important}
        .rcg-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        @media (max-width:640px){.rcg-grid{grid-template-columns:1fr}}
        .rcg-layout{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:flex-start}
        @media (max-width:900px){.rcg-layout{grid-template-columns:1fr}}
      `}</style>

      {/* NAV */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto', height: 58, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg,#FF6B2B,#FF4500)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 12, color: 'white' }}>IK</div>
            <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16 }}>Identity Kit</span>
          </Link>
          <Link href="/tools" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>← All tools</Link>
        </div>
      </nav>

      <main style={{ maxWidth: 1060, margin: '0 auto', padding: '36px 20px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 30, fontWeight: 800, marginBottom: 8 }}>Rate Card Generator</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>Enter your rates, preview your card, download a brand-ready PDF.</p>
        </div>

        {step === 1 && (
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            {/* Basics */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}>Your details</div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }}>
                <div onClick={() => fileInputRef.current?.click()} style={{ width: 64, height: 64, borderRadius: '50%', background: data.photo ? `url(${data.photo}) center/cover` : '#1a1a2a', border: '2px solid rgba(255,107,43,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, fontSize: 11, color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
                  {!data.photo && 'Add photo'}
                </div>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: 'none' }} />
                <div style={{ flex: 1 }}>
                  <label style={S.label}>Profile photo</label>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Square image works best. Click circle to upload.</div>
                </div>
              </div>
              <div className="rcg-grid" style={{ marginBottom: 12 }}>
                <div>
                  <label style={S.label}>Full name *</label>
                  <input style={S.input} value={data.fullName} onChange={e => upd('fullName', e.target.value)} placeholder="Priya Sharma" />
                </div>
                <div>
                  <label style={S.label}>Niche *</label>
                  <input style={S.input} value={data.niche} onChange={e => upd('niche', e.target.value)} placeholder="Fashion & Lifestyle" />
                </div>
              </div>
              <div className="rcg-grid" style={{ marginBottom: 12 }}>
                <div>
                  <label style={S.label}>Email</label>
                  <input style={S.input} value={data.email} onChange={e => upd('email', e.target.value)} placeholder="you@email.com" />
                </div>
                <div>
                  <label style={S.label}>WhatsApp number</label>
                  <input style={S.input} value={data.whatsapp} onChange={e => upd('whatsapp', e.target.value)} placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label style={S.label}>Rates valid till</label>
                <input type="month" style={S.input} value={data.validTill} onChange={e => upd('validTill', e.target.value)} />
              </div>
            </div>

            {/* Instagram */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}>Instagram</div>
              <div className="rcg-grid" style={{ marginBottom: 14 }}>
                <div>
                  <label style={S.label}>Handle</label>
                  <input style={S.input} value={data.igHandle} onChange={e => upd('igHandle', e.target.value)} placeholder="@priyasharma" />
                </div>
                <div>
                  <label style={S.label}>Followers</label>
                  <input style={S.input} value={data.igFollowers} onChange={e => upd('igFollowers', e.target.value)} placeholder="45.2K" />
                </div>
              </div>
              <div className="rcg-grid">
                {IG_RATES.map(r => (
                  <div key={r.key}>
                    <label style={S.label}>{r.name} (₹)</label>
                    <input style={S.input} type="number" value={data.rates[r.key] || ''} onChange={e => updRate(r.key, e.target.value)} placeholder="0" />
                  </div>
                ))}
              </div>
            </div>

            {/* YouTube */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}>YouTube</div>
              <div className="rcg-grid" style={{ marginBottom: 14 }}>
                <div>
                  <label style={S.label}>Channel name</label>
                  <input style={S.input} value={data.ytHandle} onChange={e => upd('ytHandle', e.target.value)} placeholder="Priya Sharma" />
                </div>
                <div>
                  <label style={S.label}>Subscribers</label>
                  <input style={S.input} value={data.ytSubs} onChange={e => upd('ytSubs', e.target.value)} placeholder="12.4K" />
                </div>
              </div>
              <div className="rcg-grid">
                {YT_RATES.map(r => (
                  <div key={r.key}>
                    <label style={S.label}>{r.name} (₹)</label>
                    <input style={S.input} type="number" value={data.rates[r.key] || ''} onChange={e => updRate(r.key, e.target.value)} placeholder="0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Other platforms */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}>Other platforms (optional)</div>
              <div className="rcg-grid">
                {OTHER_RATES.map(r => (
                  <div key={r.key}>
                    <label style={S.label}>{r.name} (₹)</label>
                    <input style={S.input} type="number" value={data.rates[r.key] || ''} onChange={e => updRate(r.key, e.target.value)} placeholder="0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Bundle */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}>Bundle (optional)</div>
              <label style={S.label}>Describe your most popular package</label>
              <input style={S.input} value={data.customPackage} onChange={e => upd('customPackage', e.target.value)} placeholder="2 reels + 3 stories + 1 dedicated post" />
            </div>

            {/* Terms */}
            <div style={{ ...S.card, padding: 22, marginBottom: 24 }}>
              <div style={S.sectionTitle}>Terms & notes</div>
              {TERM_OPTIONS.map(t => (
                <label key={t.key} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12, cursor: 'pointer' }}>
                  <input type="checkbox" checked={!!data.terms[t.key]} onChange={e => updTerm(t.key, e.target.checked)} style={{ marginTop: 2 }} />
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{t.label}</span>
                </label>
              ))}
            </div>

            <button
              disabled={!canProceed()}
              onClick={() => setStep(2)}
              style={{ width: '100%', background: canProceed() ? '#FF6B2B' : 'rgba(255,255,255,0.08)', color: canProceed() ? '#fff' : 'rgba(255,255,255,0.3)', border: 'none', borderRadius: 12, padding: '14px', fontSize: 15, fontWeight: 700, cursor: canProceed() ? 'pointer' : 'not-allowed' }}
            >
              Preview my rate card →
            </button>
            {!canProceed() && <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 10 }}>Fill name, niche, and at least one rate to continue.</p>}
          </div>
        )}

        {step === 2 && (
          <div className="rcg-layout">
            {/* Preview — mirrors the live Identity Kit profile Rate Card tab exactly, plus a photo */}
            <div style={{ background: '#08080E', borderRadius: 20, padding: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ ...S.card, padding: '20px', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  {data.photo ? (
                    <img src={data.photo} alt={data.fullName} style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid rgba(255,107,43,0.5)', objectFit: 'cover', flexShrink: 0 }} />
                  ) : (
                    <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#1a1a2a', border: '2px solid rgba(255,107,43,0.5)', flexShrink: 0 }} />
                  )}
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div>
                      <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 4 }}>Rate Card</div>
                      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, color: '#fff' }}>{data.fullName || 'Your Name'}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>{data.niche || 'Your niche'}</div>
                    </div>
                    {validTillLabel && (
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.04)', padding: '4px 10px', borderRadius: 8, whiteSpace: 'nowrap' }}>
                        Valid till {validTillLabel}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {data.customPackage && (
                <div style={{ background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '16px 18px', marginBottom: 12 }}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: '#FF8C5A', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 5 }}>
                    <i className="ti ti-star-filled" style={{ fontSize: 11 }}></i>Most popular
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>Full Brand Bundle</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>{data.customPackage}</div>
                    </div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, color: '#FF6B2B' }}>Best value</div>
                  </div>
                </div>
              )}

              {igRatesFilled.length > 0 && (
                <div style={{ ...S.card, padding: '18px 16px', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: '#e1306c15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="ti ti-brand-instagram" style={{ color: '#e1306c', fontSize: 15 }}></i>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Instagram</span>
                    {data.igHandle && <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>{data.igHandle} {data.igFollowers && `· ${data.igFollowers}`}</span>}
                  </div>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}><tbody>{igRatesFilled.map(r => <RateRowDisplay key={r.key} r={r} />)}</tbody></table>
                </div>
              )}

              {ytRatesFilled.length > 0 && (
                <div style={{ ...S.card, padding: '18px 16px', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: '#ff000015', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="ti ti-brand-youtube" style={{ color: '#ff0000', fontSize: 15 }}></i>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>YouTube</span>
                    {data.ytHandle && <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>{data.ytHandle} {data.ytSubs && `· ${data.ytSubs}`}</span>}
                  </div>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}><tbody>{ytRatesFilled.map(r => <RateRowDisplay key={r.key} r={r} />)}</tbody></table>
                </div>
              )}

              {otherRatesFilled.length > 0 && (
                <div style={{ ...S.card, padding: '18px 16px', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(255,107,43,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="ti ti-world" style={{ color: '#FF6B2B', fontSize: 15 }}></i>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Other Platforms</span>
                  </div>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}><tbody>{otherRatesFilled.map(r => <RateRowDisplay key={r.key} r={r} />)}</tbody></table>
                </div>
              )}

              {selectedTerms.length > 0 && (
                <div style={{ ...S.card, padding: '18px 16px', marginBottom: 12 }}>
                  <div style={S.sectionTitle}>Terms &amp; notes</div>
                  {selectedTerms.map(t => (
                    <div key={t.key} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                      <i className="ti ti-circle-check" style={{ fontSize: 14, color: '#FF6B2B', flexShrink: 0, marginTop: 1 }}></i>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{t.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 4px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                {data.email && <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>{data.email} {data.whatsapp && `· ${data.whatsapp}`}</span>}
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.04)', padding: '3px 10px', borderRadius: 6 }}>IDENTITY KIT</span>
              </div>
            </div>

            {/* Side panel */}
            <div style={{ position: 'sticky', top: 20 }}>
              <div style={{ ...S.card, padding: 24, marginBottom: 16 }}>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 17, fontWeight: 800, marginBottom: 10 }}>Looks good?</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 20 }}>
                  This is exactly how your rate card will look as a downloaded PDF — same dark theme, same layout, plus your photo in the header.
                </p>
                {!PAYMENT_ENABLED && (
                  <div style={{ background: 'rgba(255,193,7,0.08)', border: '1px solid rgba(255,193,7,0.25)', borderRadius: 10, padding: '10px 12px', marginBottom: 16, fontSize: 12, color: '#FFD166' }}>
                    🛠 Testing mode — downloads are free for now. Payment will be added once everything checks out.
                  </div>
                )}
                <button
                  onClick={handleDownload}
                  disabled={generating}
                  style={{ width: '100%', background: '#FF6B2B', color: '#fff', border: 'none', borderRadius: 12, padding: '14px', fontSize: 15, fontWeight: 700, cursor: generating ? 'default' : 'pointer', opacity: generating ? 0.7 : 1, marginBottom: 10 }}
                >
                  {generating ? 'Generating…' : PAYMENT_ENABLED ? 'Pay & Download PDF →' : 'Download PDF (Free — Testing) →'}
                </button>
                <button onClick={() => setStep(1)} style={{ width: '100%', background: 'transparent', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '12px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                  ← Edit details
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
