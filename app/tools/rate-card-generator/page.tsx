'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'

// ─── TOGGLE: flip to false to skip payment for testing ───
const PAYMENT_ENABLED = true
const PRICE_RUPEES = 49

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

const NICHE_OPTIONS = [
  'Fashion & Lifestyle', 'Beauty & Skincare', 'Food & Cooking', 'Travel',
  'Fitness & Health', 'Tech & Gadgets', 'Finance & Investing', 'Comedy & Entertainment',
  'Gaming', 'Education', 'Parenting & Family', 'Art & DIY', 'Music & Dance',
  'Photography', 'Business & Entrepreneurship', 'Vlogging', 'Other',
]

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const YEARS = Array.from({ length: 5 }, (_, i) => 2026 + i)

type FormData = {
  fullName: string
  niche: string
  nicheCustom: string
  photo: string
  email: string
  whatsapp: string
  validMonth: string
  validYear: string
  igHandle: string
  igFollowers: string
  ytHandle: string
  ytSubs: string
  customPackage: string
  bundlePrice: string
  rates: Record<string, string>
  terms: Record<string, boolean>
  customTerms: string[]
}

const emptyForm: FormData = {
  fullName: '', niche: '', nicheCustom: '', photo: '', email: '', whatsapp: '',
  validMonth: '', validYear: '', igHandle: '', igFollowers: '', ytHandle: '', ytSubs: '',
  customPackage: '', bundlePrice: '', rates: {}, terms: {}, customTerms: [],
}

const S = {
  card: { background: 'linear-gradient(160deg, #131325, #0d0d1c)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, position: 'relative' as const, overflow: 'hidden' as const },
  sectionTitle: { fontSize: 11, fontWeight: 800, color: '#FF8C5A', textTransform: 'uppercase' as const, letterSpacing: '0.16em', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 },
  label: { fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: 6, display: 'block' },
  input: { width: '100%', background: '#0A0A16', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '11px 13px', color: '#fff', fontSize: 14, fontFamily: "'Plus Jakarta Sans',sans-serif", outline: 'none', transition: 'border-color 0.15s' } as React.CSSProperties,
}

// ─── Image crop modal ───
function CropModal({ src, onCancel, onConfirm }: { src: string; onCancel: () => void; onConfirm: (cropped: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const [zoom, setZoom] = useState(1)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const dragging = useRef(false)
  const lastPt = useRef({ x: 0, y: 0 })
  const VIEW = 300

  useEffect(() => {
    const img = new Image()
    img.onload = () => { imgRef.current = img; draw() }
    img.src = src
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    const img = imgRef.current
    if (!canvas || !img) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = VIEW
    canvas.height = VIEW
    ctx.fillStyle = '#0A0A16'
    ctx.fillRect(0, 0, VIEW, VIEW)

    const baseScale = Math.max(VIEW / img.width, VIEW / img.height)
    const scale = baseScale * zoom
    const w = img.width * scale
    const h = img.height * scale
    const cx = VIEW / 2 + pos.x
    const cy = VIEW / 2 + pos.y
    ctx.drawImage(img, cx - w / 2, cy - h / 2, w, h)

    // dim outside circle
    ctx.save()
    ctx.fillStyle = 'rgba(8,8,14,0.6)'
    ctx.beginPath()
    ctx.rect(0, 0, VIEW, VIEW)
    ctx.arc(VIEW / 2, VIEW / 2, VIEW / 2 - 4, 0, Math.PI * 2, true)
    ctx.fill('evenodd' as any)
    ctx.restore()
    ctx.strokeStyle = '#FF6B2B'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(VIEW / 2, VIEW / 2, VIEW / 2 - 4, 0, Math.PI * 2)
    ctx.stroke()
  }, [zoom, pos])

  useEffect(() => { draw() }, [draw])

  function onDown(e: React.MouseEvent | React.TouchEvent) {
    dragging.current = true
    const p = 'touches' in e ? e.touches[0] : e
    lastPt.current = { x: p.clientX, y: p.clientY }
  }
  function onMove(e: React.MouseEvent | React.TouchEvent) {
    if (!dragging.current) return
    const p = 'touches' in e ? e.touches[0] : e
    const dx = p.clientX - lastPt.current.x
    const dy = p.clientY - lastPt.current.y
    lastPt.current = { x: p.clientX, y: p.clientY }
    setPos(prev => ({ x: prev.x + dx, y: prev.y + dy }))
  }
  function onUp() { dragging.current = false }

  function confirmCrop() {
    const img = imgRef.current
    if (!img) return
    const OUT = 480
    const out = document.createElement('canvas')
    out.width = OUT
    out.height = OUT
    const ctx = out.getContext('2d')
    if (!ctx) return
    const baseScale = Math.max(VIEW / img.width, VIEW / img.height)
    const scale = baseScale * zoom
    const ratio = OUT / VIEW
    const w = img.width * scale * ratio
    const h = img.height * scale * ratio
    const cx = (VIEW / 2 + pos.x) * ratio
    const cy = (VIEW / 2 + pos.y) * ratio
    ctx.drawImage(img, cx - w / 2, cy - h / 2, w, h)
    onConfirm(out.toDataURL('image/jpeg', 0.92))
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ background: '#111120', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 28, maxWidth: 380, width: '100%', textAlign: 'center' }}>
        <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 800, marginBottom: 4 }}>Adjust your photo</h3>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 18 }}>Drag to reposition · use slider to zoom</p>
        <canvas
          ref={canvasRef}
          width={300}
          height={300}
          style={{ borderRadius: 12, cursor: 'grab', touchAction: 'none', margin: '0 auto', display: 'block' }}
          onMouseDown={onDown} onMouseMove={onMove} onMouseUp={onUp} onMouseLeave={onUp}
          onTouchStart={onDown} onTouchMove={onMove} onTouchEnd={onUp}
        />
        <input type="range" min={1} max={3} step={0.01} value={zoom} onChange={e => setZoom(parseFloat(e.target.value))} style={{ width: '100%', marginTop: 18, accentColor: '#FF6B2B' }} />
        <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
          <button onClick={onCancel} style={{ flex: 1, background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)', borderRadius: 10, padding: '11px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
          <button onClick={confirmCrop} style={{ flex: 1, background: 'linear-gradient(135deg,#FF6B2B,#FF4500)', border: 'none', color: '#fff', borderRadius: 10, padding: '11px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>Use photo</button>
        </div>
      </div>
    </div>
  )
}

export default function RateCardGenerator() {
  const [step, setStep] = useState<1 | 2>(1)
  const [data, setData] = useState<FormData>(emptyForm)
  const [generating, setGenerating] = useState(false)
  const [rawPhoto, setRawPhoto] = useState<string | null>(null)
  const [newTerm, setNewTerm] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const upd = (k: keyof FormData, v: any) => setData(d => ({ ...d, [k]: v }))
  const updRate = (key: string, v: string) => setData(d => ({ ...d, rates: { ...d.rates, [key]: v } }))
  const updTerm = (key: string, v: boolean) => setData(d => ({ ...d, terms: { ...d.terms, [key]: v } }))

  function handlePhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setRawPhoto(reader.result as string)
    reader.readAsDataURL(file)
    e.target.value = ''
  }

  function addCustomTerm() {
    const t = newTerm.trim()
    if (!t) return
    setData(d => ({ ...d, customTerms: [...d.customTerms, t] }))
    setNewTerm('')
  }
  function removeCustomTerm(i: number) {
    setData(d => ({ ...d, customTerms: d.customTerms.filter((_, idx) => idx !== i) }))
  }

  const igRatesFilled = IG_RATES.filter(r => data.rates[r.key])
  const ytRatesFilled = YT_RATES.filter(r => data.rates[r.key])
  const otherRatesFilled = OTHER_RATES.filter(r => data.rates[r.key])
  const checkedTerms = TERM_OPTIONS.filter(t => data.terms[t.key]).map(t => ({ label: t.label }))
  const allTerms = [...checkedTerms, ...data.customTerms.map(label => ({ label }))]

  const validTillLabel = data.validMonth && data.validYear ? `${data.validMonth} ${data.validYear}` : ''
  const displayNiche = data.niche === 'Other' ? data.nicheCustom : data.niche

  function canProceed() {
    return data.fullName.trim() && displayNiche.trim() &&
      (igRatesFilled.length > 0 || ytRatesFilled.length > 0 || otherRatesFilled.length > 0)
  }

  async function handleDownload() {
    setGenerating(true)
    try {
      const { generateRateCardPdf } = await import('./pdf-generator')
      const doc = await generateRateCardPdf({
        fullName: data.fullName,
        niche: displayNiche,
        photo: data.photo,
        email: data.email,
        whatsapp: data.whatsapp,
        validTillLabel,
        customPackage: data.customPackage,
        bundlePrice: data.bundlePrice,
        igHandle: data.igHandle,
        igFollowers: data.igFollowers,
        ytHandle: data.ytHandle,
        ytSubs: data.ytSubs,
        igRates: igRatesFilled.map(r => ({ ...r, icon: r.key, price: data.rates[r.key] })),
        ytRates: ytRatesFilled.map(r => ({ ...r, icon: r.key, price: data.rates[r.key] })),
        otherRates: otherRatesFilled.map(r => ({ ...r, icon: r.key, price: data.rates[r.key] })),
        terms: allTerms,
      })
      doc.save(`${data.fullName.replace(/\s+/g, '-')}-Rate-Card.pdf`)
    } catch (err) {
      console.error(err)
      alert('Something went wrong generating the PDF. Please try again.')
    } finally {
      setGenerating(false)
    }
  }

  function loadRazorpayScript(): Promise<boolean> {
    return new Promise(resolve => {
      if ((window as any).Razorpay) { resolve(true); return }
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  async function handlePayAndDownload() {
    if (!PAYMENT_ENABLED) {
      handleDownload()
      return
    }
    setGenerating(true)
    try {
      const loaded = await loadRazorpayScript()
      if (!loaded) {
        alert('Could not load payment gateway. Check your connection and try again.')
        setGenerating(false)
        return
      }

      const res = await fetch('/api/rate-card-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: PRICE_RUPEES * 100 }),
      })
      const order = await res.json()

      if (!order.orderId) {
        alert('Could not start payment. Make sure RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET are set in Vercel env vars.')
        setGenerating(false)
        return
      }

      const rzp = new (window as any).Razorpay({
        key: order.key,
        order_id: order.orderId,
        amount: PRICE_RUPEES * 100,
        currency: 'INR',
        name: 'Identity Kit',
        description: `${data.fullName} — Rate Card PDF`,
        prefill: { name: data.fullName, email: data.email, contact: data.whatsapp },
        theme: { color: '#FF6B2B' },
        handler: function () {
          handleDownload()
        },
        modal: {
          ondismiss: function () {
            setGenerating(false)
          },
        },
      })
      rzp.on('payment.failed', function () {
        alert('Payment failed. Please try again.')
        setGenerating(false)
      })
      rzp.open()
    } catch (err) {
      console.error(err)
      alert('Something went wrong starting payment. Please try again.')
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
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        *,*::before,*::after{box-sizing:border-box}
        a{text-decoration:none;color:inherit}
        input::placeholder{color:rgba(255,255,255,0.2)}
        input:focus,select:focus{border-color:#FF6B2B!important;box-shadow:0 0 0 3px rgba(255,107,43,0.12)}
        select{appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23FF8C5A' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;cursor:pointer}
        .rcg-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        @media (max-width:640px){.rcg-grid{grid-template-columns:1fr}}
        .rcg-layout{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:flex-start}
        @media (max-width:900px){.rcg-layout{grid-template-columns:1fr}}
        .rcg-btn-primary{transition:transform 0.15s, box-shadow 0.15s}
        .rcg-btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(255,107,43,0.3)}
        .rcg-photo:hover{box-shadow:0 0 0 4px rgba(255,107,43,0.15)}
        .rcg-term-chip{transition:background 0.15s}
        .rcg-term-chip:hover{background:rgba(255,107,43,0.06)!important}
      `}</style>

      {/* ambient glow */}
      <div style={{ position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)', width: 800, height: 500, background: 'radial-gradient(circle, rgba(255,107,43,0.12), transparent 65%)', pointerEvents: 'none' }} />

      {/* NAV */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto', height: 58, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg,#FF6B2B,#FF4500)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 12, color: 'white' }}>IK</div>
            <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16 }}>Identity Kit</span>
          </Link>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <Link href="/tools" style={{ fontSize: 13, color: '#FF6B2B', fontWeight: 600, padding: '6px 12px', borderRadius: 8, border: '1px solid rgba(255,107,43,0.2)' }}>All Tools</Link>
            <Link href="/blog" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', padding: '6px 12px' }}>Blog</Link>
            <Link href="/auth?mode=signup" style={{ background: '#FF6B2B', color: '#fff', fontSize: 13, fontWeight: 700, padding: '7px 16px', borderRadius: 9 }}>Get your link →</Link>
          </div>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '14px 20px' }}>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.35)' }}>Home</Link>
          <span>›</span>
          <Link href="/tools" style={{ color: 'rgba(255,255,255,0.35)' }}>Tools</Link>
          <span>›</span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Rate Card Generator</span>
        </div>
      </div>

      <main style={{ maxWidth: 1060, margin: '0 auto', padding: '36px 20px 80px', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 100, padding: '5px 14px', fontSize: 11, fontWeight: 700, color: '#FF8C5A', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            ⚡ Brand-ready in minutes
          </div>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>Rate Card Generator</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>Enter your rates, preview your card, download a brand-ready PDF.</p>
        </div>

        {step === 1 && (
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            {/* Basics */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}><i className="ti ti-user-circle" style={{ fontSize: 14 }}></i>Your details</div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 18 }}>
                <div
                  className="rcg-photo"
                  onClick={() => fileInputRef.current?.click()}
                  style={{ width: 68, height: 68, borderRadius: '50%', background: data.photo ? `url(${data.photo}) center/cover` : 'linear-gradient(135deg,#1a1a2a,#222236)', border: '2px solid #FF6B2B', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, fontSize: 10, color: 'rgba(255,255,255,0.4)', textAlign: 'center', position: 'relative' }}
                >
                  {!data.photo && <i className="ti ti-camera-plus" style={{ fontSize: 22, color: 'rgba(255,255,255,0.3)' }}></i>}
                </div>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: 'none' }} />
                <div style={{ flex: 1 }}>
                  <label style={S.label}>Profile photo</label>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Click to upload — you'll be able to crop and zoom before it's set.</div>
                  {data.photo && <button onClick={() => fileInputRef.current?.click()} style={{ marginTop: 6, background: 'none', border: 'none', color: '#FF8C5A', fontSize: 12, fontWeight: 700, cursor: 'pointer', padding: 0 }}>Change photo</button>}
                </div>
              </div>
              <div className="rcg-grid" style={{ marginBottom: 12 }}>
                <div>
                  <label style={S.label}>Full name *</label>
                  <input style={S.input} value={data.fullName} onChange={e => upd('fullName', e.target.value)} placeholder="Priya Sharma" />
                </div>
                <div>
                  <label style={S.label}>Niche *</label>
                  <select style={S.input} value={data.niche} onChange={e => upd('niche', e.target.value)}>
                    <option value="">Select your niche</option>
                    {NICHE_OPTIONS.map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                  {data.niche === 'Other' && (
                    <input style={{ ...S.input, marginTop: 8 }} value={data.nicheCustom} onChange={e => upd('nicheCustom', e.target.value)} placeholder="Type your niche" />
                  )}
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
                <div className="rcg-grid">
                  <select style={S.input} value={data.validMonth} onChange={e => upd('validMonth', e.target.value)}>
                    <option value="">Month</option>
                    {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                  <select style={S.input} value={data.validYear} onChange={e => upd('validYear', e.target.value)}>
                    <option value="">Year</option>
                    {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}><i className="ti ti-brand-instagram" style={{ fontSize: 14, color: '#e1306c' }}></i>Instagram</div>
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
              <div style={S.sectionTitle}><i className="ti ti-brand-youtube" style={{ fontSize: 14, color: '#ff0000' }}></i>YouTube</div>
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
              <div style={S.sectionTitle}><i className="ti ti-world" style={{ fontSize: 14 }}></i>Other platforms (optional)</div>
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
              <div style={S.sectionTitle}><i className="ti ti-star-filled" style={{ fontSize: 14 }}></i>Bundle (optional)</div>
              <div className="rcg-grid">
                <div>
                  <label style={S.label}>Describe your most popular package</label>
                  <input style={{ ...S.input, textTransform: 'uppercase' }} value={data.customPackage} onChange={e => upd('customPackage', e.target.value)} placeholder="2 REELS + 3 STORIES + 1 DEDICATED POST" />
                </div>
                <div>
                  <label style={S.label}>Bundle price (₹)</label>
                  <input style={S.input} type="number" value={data.bundlePrice} onChange={e => upd('bundlePrice', e.target.value)} placeholder="0" />
                </div>
              </div>
            </div>

            {/* Terms */}
            <div style={{ ...S.card, padding: 22, marginBottom: 24 }}>
              <div style={S.sectionTitle}><i className="ti ti-checklist" style={{ fontSize: 14 }}></i>Terms & notes</div>
              {TERM_OPTIONS.map(t => (
                <label key={t.key} className="rcg-term-chip" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 4, cursor: 'pointer', padding: '8px 10px', borderRadius: 8 }}>
                  <input type="checkbox" checked={!!data.terms[t.key]} onChange={e => updTerm(t.key, e.target.checked)} style={{ marginTop: 2, accentColor: '#FF6B2B' }} />
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{t.label}</span>
                </label>
              ))}

              {data.customTerms.length > 0 && (
                <div style={{ marginTop: 10, marginBottom: 10 }}>
                  {data.customTerms.map((t, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', background: 'rgba(255,107,43,0.06)', borderRadius: 8, marginBottom: 6 }}>
                      <i className="ti ti-circle-check" style={{ fontSize: 14, color: '#FF6B2B', flexShrink: 0 }}></i>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', flex: 1 }}>{t}</span>
                      <button onClick={() => removeCustomTerm(i)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', fontSize: 16, lineHeight: 1, padding: 2 }}>×</button>
                    </div>
                  ))}
                </div>
              )}

              <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
                <input
                  style={{ ...S.input, flex: 1 }}
                  value={newTerm}
                  onChange={e => setNewTerm(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addCustomTerm())}
                  placeholder="Add your own term…"
                />
                <button onClick={addCustomTerm} style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.3)', color: '#FF8C5A', borderRadius: 10, padding: '0 18px', fontSize: 13, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>+ Add</button>
              </div>
            </div>

            <button
              className="rcg-btn-primary"
              disabled={!canProceed()}
              onClick={() => setStep(2)}
              style={{ width: '100%', background: canProceed() ? 'linear-gradient(135deg,#FF6B2B,#FF4500)' : 'rgba(255,255,255,0.08)', color: canProceed() ? '#fff' : 'rgba(255,255,255,0.3)', border: 'none', borderRadius: 12, padding: '15px', fontSize: 15, fontWeight: 700, cursor: canProceed() ? 'pointer' : 'not-allowed' }}
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
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>{displayNiche || 'Your niche'}</div>
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
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 3, textTransform: 'uppercase' }}>{data.customPackage}</div>
                    </div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, color: '#FF6B2B', whiteSpace: 'nowrap' }}>
                      {data.bundlePrice ? `₹${Number(data.bundlePrice).toLocaleString('en-IN')}` : 'Best value'}
                    </div>
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

              {allTerms.length > 0 && (
                <div style={{ ...S.card, padding: '18px 16px', marginBottom: 12 }}>
                  <div style={S.sectionTitle}>Terms &amp; notes</div>
                  {allTerms.map((t, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                      <i className="ti ti-circle-check" style={{ fontSize: 14, color: '#FF6B2B', flexShrink: 0, marginTop: 1 }}></i>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{t.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 4px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                {data.email && <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>{data.email} {data.whatsapp && `· ${data.whatsapp}`}</span>}
                <span style={{ fontSize: 11, color: '#FF8C5A', background: 'rgba(255,107,43,0.08)', border: '1px solid rgba(255,107,43,0.15)', padding: '3px 10px', borderRadius: 6, fontWeight: 700 }}>IDENTITY KIT</span>
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
                    🛠 Testing mode — downloads are free for now.
                  </div>
                )}
                {PAYMENT_ENABLED && (
                  <div style={{ background: 'rgba(255,107,43,0.08)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 10, padding: '12px 14px', marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>One-time download</span>
                    <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 800, color: '#FF6B2B' }}>₹{PRICE_RUPEES}</span>
                  </div>
                )}
                <button
                  className="rcg-btn-primary"
                  onClick={handlePayAndDownload}
                  disabled={generating}
                  style={{ width: '100%', background: 'linear-gradient(135deg,#FF6B2B,#FF4500)', color: '#fff', border: 'none', borderRadius: 12, padding: '14px', fontSize: 15, fontWeight: 700, cursor: generating ? 'default' : 'pointer', opacity: generating ? 0.7 : 1, marginBottom: 10 }}
                >
                  {generating ? 'Processing…' : PAYMENT_ENABLED ? `Pay ₹${PRICE_RUPEES} & Download PDF →` : 'Download PDF (Free — Testing) →'}
                </button>
                {PAYMENT_ENABLED && (
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginBottom: 10 }}>
                    Secure payment via Razorpay · UPI, cards, netbanking
                  </p>
                )}
                <button onClick={() => setStep(1)} style={{ width: '100%', background: 'transparent', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '12px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                  ← Edit details
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/tools" style={{ fontSize: 14, color: '#FF6B2B' }}>All Tools</Link>
          <Link href="/blog" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Blog</Link>
          <Link href="/about" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>About</Link>
          <Link href="/contact" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contact</Link>
          <Link href="/terms" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Terms</Link>
          <Link href="/privacy" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Privacy</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit. Made with ❤️ for Indian creators.</p>
      </footer>

      {rawPhoto && (
        <CropModal
          src={rawPhoto}
          onCancel={() => setRawPhoto(null)}
          onConfirm={cropped => { upd('photo', cropped); setRawPhoto(null) }}
        />
      )}
    </div>
  )
}
