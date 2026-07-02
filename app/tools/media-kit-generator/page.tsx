'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'

// ─── TOGGLE: flip to true once everything's tested and confirmed working ───
const PAYMENT_ENABLED = false
const PRICE_RUPEES = 49

const NICHE_OPTIONS = [
  'Fashion & Lifestyle', 'Beauty & Skincare', 'Food & Cooking', 'Travel',
  'Fitness & Health', 'Tech & Gadgets', 'Finance & Investing', 'Comedy & Entertainment',
  'Gaming', 'Education', 'Parenting & Family', 'Art & DIY', 'Music & Dance',
  'Photography', 'Business & Entrepreneurship', 'Vlogging', 'Other',
]

const GENDER_OPTIONS = [
  '60% Female · 40% Male', '70% Female · 30% Male', '80% Female · 20% Male',
  '60% Male · 40% Female', '70% Male · 30% Female', '80% Male · 20% Female',
  '50% Male · 50% Female', 'Mostly Female (85%+)', 'Mostly Male (85%+)',
]

const AGE_OPTIONS = ['13–17', '18–24', '25–34', '35–44', '45–54', '55+', '18–34', '25–44']
const TURNAROUND_OPTIONS = ['24–48 hours', '2–3 days', '3–5 days', '5–7 days', '1–2 weeks', '2+ weeks']

const PILLAR_PRESETS = [
  'Product Reviews', 'Tutorials & How-Tos', 'Storytelling', 'Unboxings',
  'Day-in-the-Life', 'Styling & Outfits', 'Recipes', 'Travel Vlogs',
  'Comedy Skits', 'Before & After', 'Trends & Challenges', 'Educational',
]

const PLATFORM_OPTIONS = ['Instagram', 'YouTube', 'Twitter/X', 'LinkedIn', 'Facebook', 'Snapchat', 'Pinterest']

type RateItem = { name: string; price: string }

type FormData = {
  fullName: string
  tagline: string
  niche: string
  nicheCustom: string
  photo: string
  city: string
  email: string
  phone: string
  website: string
  platforms: string[]
  igHandle: string
  igFollowers: string
  ytSubs: string
  avgViews: string
  engagementRate: string
  yearsActive: string
  audienceGender: string
  audienceAge: string
  audienceCities: string
  languages: string
  pillars: string[]
  bio: string
  bestCampaign: string
  brands: string[]
  rates: RateItem[]
  turnaround: string
}

const emptyForm: FormData = {
  fullName: '', tagline: '', niche: '', nicheCustom: '', photo: '', city: '', email: '', phone: '', website: '',
  platforms: [], igHandle: '', igFollowers: '', ytSubs: '', avgViews: '', engagementRate: '',
  yearsActive: '', audienceGender: '', audienceAge: '', audienceCities: '', languages: '',
  pillars: [], bio: '', bestCampaign: '', brands: [], rates: [], turnaround: '',
}

const S = {
  card: { background: 'linear-gradient(160deg, #131325, #0d0d1c)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, position: 'relative' as const, overflow: 'hidden' as const },
  sectionTitle: { fontSize: 11, fontWeight: 800, color: '#FF8C5A', textTransform: 'uppercase' as const, letterSpacing: '0.16em', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 },
  label: { fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: 6, display: 'block' },
  input: { width: '100%', background: '#0A0A16', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '11px 13px', color: '#fff', fontSize: 14, fontFamily: "'Plus Jakarta Sans',sans-serif", outline: 'none', transition: 'border-color 0.15s' } as React.CSSProperties,
}

// ─── Image crop modal (same as CV / Rate Card Generator) ───
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

// ─── Tag input (used for content pillars + brand names) ───
function TagInput({ values, onChange, placeholder }: { values: string[]; onChange: (v: string[]) => void; placeholder: string }) {
  const [text, setText] = useState('')
  function add() {
    const t = text.trim()
    if (!t) return
    onChange([...values, t])
    setText('')
  }
  return (
    <div>
      {values.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
          {values.map((v, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, padding: '5px 10px', borderRadius: 99, background: 'rgba(255,107,43,0.08)', border: '1px solid rgba(255,107,43,0.2)', color: '#FF8C5A' }}>
              {v}
              <button onClick={() => onChange(values.filter((_, idx) => idx !== i))} style={{ background: 'none', border: 'none', color: '#FF8C5A', cursor: 'pointer', fontSize: 14, lineHeight: 1, padding: 0 }}>×</button>
            </span>
          ))}
        </div>
      )}
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          style={{ ...S.input, flex: 1 }}
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), add())}
          placeholder={placeholder}
        />
        <button onClick={add} style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.3)', color: '#FF8C5A', borderRadius: 10, padding: '0 18px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>+ Add</button>
      </div>
    </div>
  )
}

const PLATFORM_ICON: Record<string, string> = {
  'Instagram': 'ti-brand-instagram', 'YouTube': 'ti-brand-youtube', 'Twitter/X': 'ti-brand-x',
  'LinkedIn': 'ti-brand-linkedin', 'Facebook': 'ti-brand-facebook', 'Snapchat': 'ti-brand-snapchat',
  'Pinterest': 'ti-brand-pinterest',
}

export default function MediaKitGenerator() {
  const [step, setStep] = useState<1 | 2>(1)
  const [data, setData] = useState<FormData>(emptyForm)
  const [generating, setGenerating] = useState(false)
  const [generatingBio, setGeneratingBio] = useState(false)
  const [rawPhoto, setRawPhoto] = useState<string | null>(null)
  const [newRateName, setNewRateName] = useState('')
  const [newRatePrice, setNewRatePrice] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const mkPreviewRef = useRef<HTMLDivElement>(null)

  const upd = (k: keyof FormData, v: any) => setData(d => ({ ...d, [k]: v }))

  function togglePlatform(p: string) {
    setData(d => ({ ...d, platforms: d.platforms.includes(p) ? d.platforms.filter(x => x !== p) : [...d.platforms, p] }))
  }

  function handlePhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setRawPhoto(reader.result as string)
    reader.readAsDataURL(file)
    e.target.value = ''
  }

  function addRate() {
    if (!newRateName.trim() || !newRatePrice) return
    setData(d => ({ ...d, rates: [...d.rates, { name: newRateName.trim(), price: newRatePrice }] }))
    setNewRateName('')
    setNewRatePrice('')
  }
  function removeRate(i: number) {
    setData(d => ({ ...d, rates: d.rates.filter((_, idx) => idx !== i) }))
  }

  const displayNiche = data.niche === 'Other' ? data.nicheCustom : data.niche

  function canProceed() {
    return data.fullName.trim() && displayNiche.trim() && data.platforms.length > 0
  }

  async function generateAIBio() {
    if (!data.fullName.trim()) {
      alert('Add your name first so the bio sounds like you.')
      return
    }
    setGeneratingBio(true)
    try {
      const res = await fetch('/api/generate-cv-bio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.fullName,
          niche: displayNiche,
          subNiche: '',
          platform: data.platforms[0] || 'Instagram',
          city: data.city,
          followers: data.igFollowers || data.ytSubs,
          engagementRate: data.engagementRate,
          yearsActive: data.yearsActive,
          pastBrands: data.brands.join(', '),
          achievements: '',
          languages: data.languages,
        }),
      })
      if (!res.ok) throw new Error(`API error ${res.status}`)
      const json = await res.json()
      if (json.bio) upd('bio', json.bio)
      else throw new Error('No bio returned')
    } catch (err) {
      console.error('Bio gen error:', err)
      alert('Could not generate bio right now — check that ANTHROPIC_API_KEY is set in your Vercel environment variables, or write it manually.')
    } finally {
      setGeneratingBio(false)
    }
  }

  async function handleDownload() {
    if (!mkPreviewRef.current) return
    setGenerating(true)
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ])

      const node = mkPreviewRef.current

      // Make sure webfonts (Syne, Plus Jakarta Sans, Tabler icons) are fully loaded
      // before rasterizing, otherwise icons/headings can render as fallback glyphs.
      if ((document as any).fonts?.ready) {
        try { await (document as any).fonts.ready } catch {}
      }
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))

      const rect = node.getBoundingClientRect()
      const canvas = await html2canvas(node, {
        scale: 3,
        useCORS: true,
        backgroundColor: null,
        logging: false,
        windowWidth: document.documentElement.scrollWidth,
      })

      const PX_TO_MM = 25.4 / 96
      const pageW = rect.width * PX_TO_MM
      const pageH = rect.height * PX_TO_MM

      const doc = new jsPDF({ unit: 'mm', format: [pageW, pageH] })
      doc.setFillColor(10, 10, 16)
      doc.rect(0, 0, pageW, pageH, 'F')
      doc.addImage(canvas.toDataURL('image/png', 1.0), 'PNG', 0, 0, pageW, pageH, undefined, 'FAST')

      doc.save(`${data.fullName.replace(/\s+/g, '-')}-Media-Kit.pdf`)
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

      const res = await fetch('/api/media-kit-payment', {
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
        description: `${data.fullName || 'Creator'} — Media Kit PDF`,
        prefill: { name: data.fullName, email: data.email },
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

  // ── Mirrors the styling + logic of the live Identity Kit profile "Media Kit" tab ──
  const platConfig: Record<string, { icon: string; color: string; bg: string }> = {
    'Instagram': { icon: 'ti-brand-instagram', color: '#e1306c', bg: '#e1306c15' },
    'YouTube': { icon: 'ti-brand-youtube', color: '#ff0000', bg: '#ff000015' },
    'Twitter/X': { icon: 'ti-brand-x', color: '#1da1f2', bg: '#1da1f215' },
    'LinkedIn': { icon: 'ti-brand-linkedin', color: '#0077b5', bg: '#0077b515' },
    'Facebook': { icon: 'ti-brand-facebook', color: '#1877f2', bg: '#1877f215' },
    'Snapchat': { icon: 'ti-brand-snapchat', color: '#FFFC00', bg: '#FFFC0015' },
    'Pinterest': { icon: 'ti-brand-pinterest', color: '#e60023', bg: '#e6002315' },
  }
  const MK = {
    card: { background: '#111120', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16 } as React.CSSProperties,
    sectionTitle: { fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' as const, letterSpacing: '0.14em', marginBottom: 14 },
    brandPill: { fontSize: 12, padding: '5px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', background: '#1a1a2a' } as React.CSSProperties,
  }
  const AGE_BRACKETS = ['18–24', '25–34', '35+']
  const citiesList = data.audienceCities.split(/[,·]/).map(c => c.trim()).filter(Boolean).slice(0, 3)
  const CONTENT_TYPES = [
    { icon: 'ti-video', label: 'Reels & Shorts', color: '#e1306c' },
    { icon: 'ti-photo', label: 'Static Posts', color: '#FF6B2B' },
    { icon: 'ti-layout-grid', label: 'Carousels', color: '#a855f7' },
    { icon: 'ti-brand-youtube', label: 'YouTube Videos', color: '#ff0000' },
    { icon: 'ti-messages', label: 'Stories', color: '#22c55e' },
    { icon: 'ti-speakerphone', label: 'Integrations', color: '#3b82f6' },
  ]

  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        *,*::before,*::after{box-sizing:border-box}
        a{text-decoration:none;color:inherit}
        input::placeholder,textarea::placeholder{color:rgba(255,255,255,0.2)}
        input:focus,select:focus,textarea:focus{border-color:#FF6B2B!important;box-shadow:0 0 0 3px rgba(255,107,43,0.12)}
        select{appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23FF8C5A' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;cursor:pointer}
        textarea{resize:vertical;font-family:inherit}
        .mkg-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        @media (max-width:640px){.mkg-grid{grid-template-columns:1fr}}
        .mkg-layout{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:flex-start}
        @media (max-width:900px){.mkg-layout{grid-template-columns:1fr}}
        .mkg-bento-row{display:grid;gap:8px}
        @media (max-width:520px){.mkg-bento-row{grid-template-columns:1fr!important}}
        .mkg-content-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
        @media (max-width:420px){.mkg-content-grid{grid-template-columns:repeat(2,1fr)}}
        @media (max-width:420px){.mkg-stats-4{grid-template-columns:repeat(2,1fr)!important;row-gap:12px!important}}
        .mkg-btn-primary{transition:transform 0.15s, box-shadow 0.15s}
        .mkg-btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(255,107,43,0.3)}
        .mkg-photo:hover{box-shadow:0 0 0 4px rgba(255,107,43,0.15)}
        .mkg-platform-chip{transition:all 0.15s;cursor:pointer}
        @keyframes mkgspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
      `}</style>

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
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Media Kit Generator</span>
        </div>
      </div>

      <main style={{ maxWidth: 1060, margin: '0 auto', padding: '20px 20px 80px', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 100, padding: '5px 14px', fontSize: 11, fontWeight: 700, color: '#FF8C5A', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            📊 Preview Free · ₹49 to Download
          </div>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>Media Kit Generator</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>A brand-ready one-pager — stats, audience, platforms and rates, built to get you noticed in under 10 seconds.</p>
        </div>

        {step === 1 && (
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            {/* Basics */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}><i className="ti ti-user-circle" style={{ fontSize: 14 }}></i>Your details</div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 18 }}>
                <div
                  className="mkg-photo"
                  onClick={() => fileInputRef.current?.click()}
                  style={{ width: 68, height: 68, borderRadius: '50%', background: data.photo ? `url(${data.photo}) center/cover` : 'linear-gradient(135deg,#1a1a2a,#222236)', border: '2px solid #FF6B2B', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}
                >
                  {!data.photo && <i className="ti ti-camera-plus" style={{ fontSize: 22, color: 'rgba(255,255,255,0.3)' }}></i>}
                </div>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: 'none' }} />
                <div style={{ flex: 1 }}>
                  <label style={S.label}>Profile photo</label>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Click to upload — crop and zoom before it's set.</div>
                  {data.photo && <button onClick={() => fileInputRef.current?.click()} style={{ marginTop: 6, background: 'none', border: 'none', color: '#FF8C5A', fontSize: 12, fontWeight: 700, cursor: 'pointer', padding: 0 }}>Change photo</button>}
                </div>
              </div>
              <div className="mkg-grid" style={{ marginBottom: 12 }}>
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
              <div style={{ marginBottom: 12 }}>
                <label style={S.label}>Tagline (one line — appears under your name)</label>
                <input style={S.input} value={data.tagline} onChange={e => upd('tagline', e.target.value)} placeholder="Helping 200K+ people eat better, one recipe at a time" maxLength={80} />
              </div>
              <div className="mkg-grid" style={{ marginBottom: 12 }}>
                <div>
                  <label style={S.label}>City</label>
                  <input style={S.input} value={data.city} onChange={e => upd('city', e.target.value)} placeholder="Mumbai" />
                </div>
                <div>
                  <label style={S.label}>Years active</label>
                  <input style={S.input} value={data.yearsActive} onChange={e => upd('yearsActive', e.target.value)} placeholder="3" />
                </div>
              </div>
              <div className="mkg-grid" style={{ marginBottom: 12 }}>
                <div>
                  <label style={S.label}>Email</label>
                  <input style={S.input} value={data.email} onChange={e => upd('email', e.target.value)} placeholder="you@email.com" />
                </div>
                <div>
                  <label style={S.label}>Phone</label>
                  <input style={S.input} value={data.phone} onChange={e => upd('phone', e.target.value)} placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label style={S.label}>Website / portfolio (optional)</label>
                <input style={S.input} value={data.website} onChange={e => upd('website', e.target.value)} placeholder="yourname.com" />
              </div>
            </div>

            {/* Platforms & stats */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}><i className="ti ti-device-analytics" style={{ fontSize: 14 }}></i>Platforms & stats *</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                {PLATFORM_OPTIONS.map(p => {
                  const active = data.platforms.includes(p)
                  return (
                    <span
                      key={p}
                      className="mkg-platform-chip"
                      onClick={() => togglePlatform(p)}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, padding: '7px 12px', borderRadius: 99,
                        background: active ? 'rgba(255,107,43,0.15)' : '#0A0A16',
                        border: active ? '1px solid #FF6B2B' : '1px solid rgba(255,255,255,0.1)',
                        color: active ? '#FF8C5A' : 'rgba(255,255,255,0.45)',
                      }}
                    >
                      <i className={`ti ${PLATFORM_ICON[p] || 'ti-world'}`} style={{ fontSize: 13 }}></i>
                      {p}
                    </span>
                  )
                })}
              </div>
              <div className="mkg-grid" style={{ marginBottom: 12 }}>
                <div>
                  <label style={S.label}>Instagram handle</label>
                  <input style={S.input} value={data.igHandle} onChange={e => upd('igHandle', e.target.value)} placeholder="@yourname" />
                </div>
                <div>
                  <label style={S.label}>Instagram followers</label>
                  <input style={S.input} value={data.igFollowers} onChange={e => upd('igFollowers', e.target.value)} placeholder="45.2K" />
                </div>
              </div>
              <div className="mkg-grid" style={{ marginBottom: 12 }}>
                <div>
                  <label style={S.label}>YouTube subscribers</label>
                  <input style={S.input} value={data.ytSubs} onChange={e => upd('ytSubs', e.target.value)} placeholder="12.4K" />
                </div>
                <div>
                  <label style={S.label}>Average views</label>
                  <input style={S.input} value={data.avgViews} onChange={e => upd('avgViews', e.target.value)} placeholder="8.5K" />
                </div>
              </div>
              <div>
                <label style={S.label}>Engagement rate (%)</label>
                <input style={S.input} type="number" value={data.engagementRate} onChange={e => upd('engagementRate', e.target.value)} placeholder="4.6" />
              </div>
            </div>

            {/* Audience */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}><i className="ti ti-users" style={{ fontSize: 14 }}></i>Audience (optional)</div>
              <div className="mkg-grid" style={{ marginBottom: 12 }}>
                <div>
                  <label style={S.label}>Gender split</label>
                  <select style={S.input} value={data.audienceGender} onChange={e => upd('audienceGender', e.target.value)}>
                    <option value="">Select split</option>
                    {GENDER_OPTIONS.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                <div>
                  <label style={S.label}>Age group</label>
                  <select style={S.input} value={data.audienceAge} onChange={e => upd('audienceAge', e.target.value)}>
                    <option value="">Select age range</option>
                    {AGE_OPTIONS.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
              </div>
              <div className="mkg-grid">
                <div>
                  <label style={S.label}>Top cities</label>
                  <input style={S.input} value={data.audienceCities} onChange={e => upd('audienceCities', e.target.value)} placeholder="Mumbai · Delhi · Bangalore" />
                </div>
                <div>
                  <label style={S.label}>Languages</label>
                  <input style={S.input} value={data.languages} onChange={e => upd('languages', e.target.value)} placeholder="Hindi, English" />
                </div>
              </div>
            </div>

            {/* Content pillars */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}><i className="ti ti-stack-2" style={{ fontSize: 14 }}></i>Content pillars (optional)</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
                {PILLAR_PRESETS.map(s => {
                  const active = data.pillars.includes(s)
                  return (
                    <span
                      key={s}
                      onClick={() => upd('pillars', active ? data.pillars.filter(x => x !== s) : [...data.pillars, s])}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 600, padding: '7px 12px', borderRadius: 99, cursor: 'pointer', transition: 'all 0.15s',
                        background: active ? 'rgba(255,107,43,0.15)' : '#0A0A16',
                        border: active ? '1px solid #FF6B2B' : '1px solid rgba(255,255,255,0.1)',
                        color: active ? '#FF8C5A' : 'rgba(255,255,255,0.45)',
                      }}
                    >
                      {active && <i className="ti ti-check" style={{ fontSize: 11 }}></i>}
                      {s}
                    </span>
                  )
                })}
              </div>
              <label style={{ ...S.label, marginTop: 4 }}>Add a custom pillar</label>
              <TagInput values={data.pillars.filter(s => !PILLAR_PRESETS.includes(s))} onChange={custom => upd('pillars', [...data.pillars.filter(s => PILLAR_PRESETS.includes(s)), ...custom])} placeholder="e.g. Budget Travel Hacks…" />
            </div>

            {/* Bio */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div style={{ ...S.sectionTitle, marginBottom: 0 }}><i className="ti ti-pencil" style={{ fontSize: 14 }}></i>About</div>
                <button
                  onClick={generateAIBio}
                  disabled={generatingBio}
                  style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.3)', color: '#FF8C5A', borderRadius: 8, padding: '6px 12px', fontSize: 12, fontWeight: 700, cursor: generatingBio ? 'default' : 'pointer', opacity: generatingBio ? 0.6 : 1 }}
                >
                  {generatingBio ? <i className="ti ti-loader-2" style={{ fontSize: 13, animation: 'mkgspin 0.8s linear infinite' }}></i> : <i className="ti ti-sparkles" style={{ fontSize: 13 }}></i>}
                  {generatingBio ? 'Writing…' : 'Generate with AI'}
                </button>
              </div>
              <textarea style={{ ...S.input, minHeight: 110 }} value={data.bio} onChange={e => upd('bio', e.target.value)} placeholder="Write a short About, or click Generate with AI once you've filled in your details above." />
            </div>

            {/* Best campaign */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}><i className="ti ti-flame" style={{ fontSize: 14 }}></i>Best campaign (optional)</div>
              <textarea style={{ ...S.input, minHeight: 80 }} value={data.bestCampaign} onChange={e => upd('bestCampaign', e.target.value)} placeholder="A campaign with [Brand] that generated 2M views and 15K saves in one week." />
            </div>

            {/* Brands */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}><i className="ti ti-briefcase" style={{ fontSize: 14 }}></i>Brand collaborations (optional)</div>
              <TagInput values={data.brands} onChange={v => upd('brands', v)} placeholder="Mamaearth, Boat, Nykaa…" />
            </div>

            {/* Rates */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}><i className="ti ti-currency-rupee" style={{ fontSize: 14 }}></i>What you offer brands (optional)</div>
              {data.rates.length > 0 && (
                <div style={{ marginBottom: 14 }}>
                  {data.rates.map((r, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', background: '#0A0A16', borderRadius: 10, marginBottom: 6 }}>
                      <div>
                        <span style={{ fontSize: 13, fontWeight: 600 }}>{r.name}</span>
                        <span style={{ fontSize: 13, color: '#FF6B2B', marginLeft: 10, fontFamily: "'Syne',sans-serif", fontWeight: 700 }}>₹{Number(r.price).toLocaleString('en-IN')}</span>
                      </div>
                      <button onClick={() => removeRate(i)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', fontSize: 16, lineHeight: 1 }}>×</button>
                    </div>
                  ))}
                </div>
              )}
              <div className="mkg-grid" style={{ marginBottom: 10 }}>
                <input style={S.input} value={newRateName} onChange={e => setNewRateName(e.target.value)} placeholder="Service e.g. Dedicated Reel" />
                <input style={S.input} type="number" value={newRatePrice} onChange={e => setNewRatePrice(e.target.value)} placeholder="Price ₹" />
              </div>
              <button onClick={addRate} style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.3)', color: '#FF8C5A', borderRadius: 10, padding: '8px 18px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>+ Add rate</button>
              <div style={{ marginTop: 14 }}>
                <label style={S.label}>Turnaround time</label>
                <select style={S.input} value={data.turnaround} onChange={e => upd('turnaround', e.target.value)}>
                  <option value="">Select turnaround</option>
                  {TURNAROUND_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <button
              className="mkg-btn-primary"
              disabled={!canProceed()}
              onClick={() => setStep(2)}
              style={{ width: '100%', background: canProceed() ? 'linear-gradient(135deg,#FF6B2B,#FF4500)' : 'rgba(255,255,255,0.08)', color: canProceed() ? '#fff' : 'rgba(255,255,255,0.3)', border: 'none', borderRadius: 12, padding: '15px', fontSize: 15, fontWeight: 700, cursor: canProceed() ? 'pointer' : 'not-allowed' }}
            >
              Preview my media kit →
            </button>
            {!canProceed() && <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 10 }}>Fill name, niche, and at least one platform to continue.</p>}
          </div>
        )}

        {step === 2 && (
          <div className="mkg-layout">
            {/* Preview — mirrors the live Identity Kit profile Media Kit tab exactly */}
            <div ref={mkPreviewRef} style={{ display: 'flex', flexDirection: 'column', gap: 8, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', background: '#08080E', padding: 8 }}>

              {/* Header */}
              <div style={{ background: 'linear-gradient(135deg,#1a0800,#0e0e1c)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 16, padding: '20px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: 180, height: 180, background: 'radial-gradient(circle,rgba(255,107,43,0.1) 0%,transparent 70%)', pointerEvents: 'none' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                  {data.photo ? (
                    <img src={data.photo} alt={data.fullName} style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid #FF6B2B', objectFit: 'cover', flexShrink: 0 }} />
                  ) : (
                    <div style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid #FF6B2B', background: '#1e1e2e', flexShrink: 0 }} />
                  )}
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 9, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', fontWeight: 700, marginBottom: 3 }}>Media Kit</div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 2 }}>{data.fullName || 'Your Name'}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{[displayNiche, data.city, data.languages].filter(Boolean).join(' · ') || 'Your niche'}</div>
                    {data.tagline && <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.55)', fontStyle: 'italic', marginTop: 4 }}>"{data.tagline}"</div>}
                  </div>
                </div>
                <div className="mkg-stats-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 16, gap: 4 }}>
                  {[
                    [data.igFollowers || '—', 'Instagram'],
                    [data.ytSubs || '—', 'YouTube'],
                    [data.avgViews || '—', 'Avg Views'],
                    [data.engagementRate ? `${data.engagementRate}%` : '—', 'Engagement'],
                  ].map(([n, l]) => (
                    <div key={l} style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 800, color: '#FF6B2B' }}>{n}</div>
                      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>{l}</div>
                    </div>
                  ))}
                </div>
                {(data.email || data.phone || data.website) && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
                    {[data.email && { icon: 'ti-mail', val: data.email }, data.phone && { icon: 'ti-phone', val: data.phone }, data.website && { icon: 'ti-world', val: data.website }].filter(Boolean).map((m: any) => (
                      <span key={m.val} style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: 5, background: '#08080E', padding: '5px 10px', borderRadius: 99 }}>
                        <i className={`ti ${m.icon}`} style={{ fontSize: 12, color: '#FF6B2B' }}></i>{m.val}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Platform + Audience bento row */}
              {(data.platforms.length > 0 || data.audienceAge || citiesList.length > 0) && (
                <div className="mkg-bento-row" style={{ display: 'grid', gridTemplateColumns: data.platforms.length > 0 && (data.audienceAge || citiesList.length > 0) ? '1fr 1fr' : '1fr', gap: 8 }}>
                  {data.platforms.length > 0 && (
                    <div style={{ ...MK.card, padding: 16 }}>
                      <div style={MK.sectionTitle}>Platform breakdown</div>
                      {data.platforms.map(p => {
                        const cfg = platConfig[p] || { icon: 'ti-device-mobile', color: '#FF6B2B', bg: '#FF6B2B15' }
                        const followers = p === 'Instagram' ? data.igFollowers : p === 'YouTube' ? data.ytSubs : null
                        const stat2 = p === 'Instagram' ? (data.engagementRate ? `${data.engagementRate}%` : null) : p === 'YouTube' ? data.avgViews : null
                        const stat2label = p === 'Instagram' ? 'eng' : 'views'
                        return (
                          <div key={p} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <div style={{ width: 28, height: 28, borderRadius: 7, background: cfg.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className={`ti ${cfg.icon}`} style={{ fontSize: 13, color: cfg.color }}></i>
                              </div>
                              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{p}</span>
                            </div>
                            <div style={{ display: 'flex', gap: 10 }}>
                              {followers && <div style={{ textAlign: 'right' }}><div style={{ fontSize: 12, fontWeight: 700, color: '#FF6B2B', fontFamily: "'Syne',sans-serif" }}>{followers}</div><div style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)' }}>followers</div></div>}
                              {stat2 && <div style={{ textAlign: 'right' }}><div style={{ fontSize: 12, fontWeight: 700, color: '#FF6B2B', fontFamily: "'Syne',sans-serif" }}>{stat2}</div><div style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)' }}>{stat2label}</div></div>}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                  {(data.audienceAge || data.audienceGender || citiesList.length > 0) && (
                    <div style={{ ...MK.card, padding: 16 }}>
                      <div style={MK.sectionTitle}>Audience insights</div>
                      {AGE_BRACKETS.includes(data.audienceAge) ? (
                        <>
                          {AGE_BRACKETS.map((l, i) => {
                            const pct = data.audienceAge === l ? 66 : [18, 20, 8][i]
                            return (
                              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6 }}>
                                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', minWidth: 36 }}>{l}</span>
                                <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.05)', borderRadius: 99 }}><div style={{ height: 4, background: 'linear-gradient(90deg,#FF6B2B,#FF8C5A)', borderRadius: 99, width: `${pct}%` }}></div></div>
                                <span style={{ fontSize: 10, color: '#FF6B2B', minWidth: 24, textAlign: 'right' }}>{pct}%</span>
                              </div>
                            )
                          })}
                          {citiesList.length > 0 && <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', margin: '10px 0' }}></div>}
                        </>
                      ) : data.audienceGender ? (
                        <div style={{ marginBottom: citiesList.length > 0 ? 12 : 0 }}>
                          <div style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.3)', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Gender split</div>
                          <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.75)', fontWeight: 600 }}>{data.audienceGender}</div>
                          {data.audienceAge && <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{data.audienceAge} age group</div>}
                        </div>
                      ) : null}
                      {citiesList.map((city, i) => {
                        const pct = [44, 30, 19][i]
                        return (
                          <div key={city} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 5 }}>
                            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', minWidth: 48, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{city}</span>
                            <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.05)', borderRadius: 99 }}><div style={{ height: 4, background: 'linear-gradient(90deg,#FF6B2B,#FF8C5A)', borderRadius: 99, width: `${pct}%` }}></div></div>
                            <span style={{ fontSize: 10, color: '#FF6B2B', minWidth: 24, textAlign: 'right' }}>{pct}%</span>
                          </div>
                        )
                      })}
                      {data.languages && <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.3)', marginTop: 10 }}>Speaks {data.languages}</div>}
                    </div>
                  )}
                </div>
              )}

              {/* Content I create */}
              <div style={{ ...MK.card, padding: 16 }}>
                <div style={MK.sectionTitle}>Content I create</div>
                <div className="mkg-content-grid">
                  {CONTENT_TYPES.map(c => (
                    <div key={c.label} style={{ background: '#0e0e1e', borderRadius: 10, padding: 12, textAlign: 'center' }}>
                      <i className={`ti ${c.icon}`} style={{ fontSize: 22, color: c.color, display: 'block', marginBottom: 6 }}></i>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{c.label}</span>
                    </div>
                  ))}
                </div>
                {data.pillars.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    {data.pillars.map(s => <span key={s} style={{ fontSize: 11, padding: '4px 11px', borderRadius: 99, background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.2)', color: '#FF8C5A' }}>{s}</span>)}
                  </div>
                )}
              </div>

              {/* About */}
              {data.bio && (
                <div style={{ ...MK.card, padding: 16 }}>
                  <div style={MK.sectionTitle}>About</div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: 0, wordBreak: 'break-word', overflowWrap: 'break-word' }}>{data.bio}</p>
                </div>
              )}

              {/* Brand collabs */}
              {data.brands.length > 0 && (
                <div style={{ ...MK.card, padding: 16 }}>
                  <div style={MK.sectionTitle}>Past brand collaborations</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: data.bestCampaign ? 14 : 0 }}>
                    {data.brands.map(b => <span key={b} style={MK.brandPill}>{b}</span>)}
                  </div>
                  {data.bestCampaign && (
                    <div style={{ borderLeft: '2px solid #FF6B2B', background: 'rgba(255,107,43,0.04)', padding: '10px 14px', borderRadius: '0 10px 10px 0' }}>
                      <div style={{ fontSize: 9, color: '#FF6B2B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 4 }}>Campaign highlight</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{data.bestCampaign}</div>
                    </div>
                  )}
                </div>
              )}

              {/* Packages */}
              {data.rates.length > 0 && (
                <div style={{ ...MK.card, padding: 16 }}>
                  <div style={MK.sectionTitle}>Packages</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {data.rates.slice(0, 6).map(r => (
                      <div key={r.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0e0e1e', borderRadius: 10, padding: '12px 14px' }}>
                        <div style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>{r.name}</div>
                        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, color: '#FF6B2B', flexShrink: 0, marginLeft: 12 }}>₹{Number(r.price).toLocaleString('en-IN')}</div>
                      </div>
                    ))}
                  </div>
                  {data.turnaround && <div style={{ marginTop: 10, fontSize: 11.5, color: 'rgba(255,255,255,0.3)' }}>⏱ Turnaround: {data.turnaround} · 1 free revision included</div>}
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 12px 4px', flexWrap: 'wrap', gap: 8 }}>
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Identity Kit</span>
                {data.email && <span style={{ fontSize: 11, color: '#FF6B2B' }}>{data.email}</span>}
              </div>
            </div>

            {/* Side panel */}
            <div style={{ position: 'sticky', top: 20 }}>
              <div style={{ ...S.card, padding: 24, marginBottom: 16 }}>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 17, fontWeight: 800, marginBottom: 10 }}>Looks good?</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 20 }}>
                  This is exactly how your media kit will look as a downloaded PDF — same layout, stats, and branding.
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
                  className="mkg-btn-primary"
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
                <button onClick={() => setStep(1)} disabled={generating} style={{ width: '100%', background: 'transparent', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '12px', fontSize: 13, fontWeight: 600, cursor: generating ? 'default' : 'pointer' }}>
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
