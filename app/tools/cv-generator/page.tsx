'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'

// ─── TOGGLE: flip to true once payment is wired and tested ───
const PAYMENT_ENABLED = false

const NICHE_OPTIONS = [
  'Fashion & Lifestyle', 'Beauty & Skincare', 'Food & Cooking', 'Travel',
  'Fitness & Health', 'Tech & Gadgets', 'Finance & Investing', 'Comedy & Entertainment',
  'Gaming', 'Education', 'Parenting & Family', 'Art & DIY', 'Music & Dance',
  'Photography', 'Business & Entrepreneurship', 'Vlogging', 'Other',
]

const PLATFORM_OPTIONS = ['Instagram', 'YouTube', 'Twitter/X', 'LinkedIn', 'Facebook', 'Snapchat', 'Pinterest']

type RateItem = { name: string; price: string }

type FormData = {
  fullName: string
  niche: string
  nicheCustom: string
  photo: string
  city: string
  email: string
  phone: string
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
  skills: string[]
  bio: string
  bestCampaign: string
  brands: string[]
  awards: string
  rates: RateItem[]
  turnaround: string
}

const emptyForm: FormData = {
  fullName: '', niche: '', nicheCustom: '', photo: '', city: '', email: '', phone: '',
  platforms: [], igHandle: '', igFollowers: '', ytSubs: '', avgViews: '', engagementRate: '',
  yearsActive: '', audienceGender: '', audienceAge: '', audienceCities: '', languages: '',
  skills: [], bio: '', bestCampaign: '', brands: [], awards: '', rates: [], turnaround: '',
}

const S = {
  card: { background: 'linear-gradient(160deg, #131325, #0d0d1c)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, position: 'relative' as const, overflow: 'hidden' as const },
  sectionTitle: { fontSize: 11, fontWeight: 800, color: '#FF8C5A', textTransform: 'uppercase' as const, letterSpacing: '0.16em', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 },
  label: { fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: 6, display: 'block' },
  input: { width: '100%', background: '#0A0A16', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '11px 13px', color: '#fff', fontSize: 14, fontFamily: "'Plus Jakarta Sans',sans-serif", outline: 'none', transition: 'border-color 0.15s' } as React.CSSProperties,
}

// ─── Image crop modal (same as Rate Card Generator) ───
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

// ─── Tag input (used for skills + brand names) ───
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

export default function CVGenerator() {
  const [step, setStep] = useState<1 | 2>(1)
  const [data, setData] = useState<FormData>(emptyForm)
  const [generating, setGenerating] = useState(false)
  const [generatingBio, setGeneratingBio] = useState(false)
  const [rawPhoto, setRawPhoto] = useState<string | null>(null)
  const [newRateName, setNewRateName] = useState('')
  const [newRatePrice, setNewRatePrice] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

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
          achievements: data.awards,
          languages: data.languages,
        }),
      })
      const json = await res.json()
      if (json.bio) upd('bio', json.bio)
    } catch (err) {
      console.error(err)
      alert('Could not generate bio right now. Please write it manually or try again.')
    } finally {
      setGeneratingBio(false)
    }
  }

  async function handleDownload() {
    setGenerating(true)
    try {
      const { generateCVPdf } = await import('./pdf-generator')
      const doc = await generateCVPdf({
        fullName: data.fullName,
        niche: displayNiche,
        photo: data.photo,
        city: data.city,
        email: data.email,
        phone: data.phone,
        platforms: data.platforms,
        igHandle: data.igHandle,
        igFollowers: data.igFollowers,
        ytSubs: data.ytSubs,
        avgViews: data.avgViews,
        engagementRate: data.engagementRate,
        brandDeals: data.brands.length,
        audienceGender: data.audienceGender,
        audienceAge: data.audienceAge,
        audienceCities: data.audienceCities,
        languages: data.languages,
        skills: data.skills,
        bio: data.bio,
        bestCampaign: data.bestCampaign,
        brands: data.brands,
        awards: data.awards,
        rates: data.rates,
        turnaround: data.turnaround,
      })
      doc.save(`${data.fullName.replace(/\s+/g, '-')}-Creator-CV.pdf`)
    } catch (err) {
      console.error(err)
      alert('Something went wrong generating the PDF. Please try again.')
    } finally {
      setGenerating(false)
    }
  }

  const statItems = [
    data.ytSubs && [data.ytSubs, 'YT subscribers'],
    data.igFollowers && [data.igFollowers, 'IG followers'],
    data.avgViews && [data.avgViews, 'Avg views'],
    data.engagementRate && [`${data.engagementRate}%`, 'Engagement'],
    data.brands.length > 0 && [`${data.brands.length}+`, 'Brand deals'],
  ].filter(Boolean) as [string, string][]

  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        *,*::before,*::after{box-sizing:border-box}
        a{text-decoration:none;color:inherit}
        input::placeholder,textarea::placeholder{color:rgba(255,255,255,0.2)}
        input:focus,select:focus,textarea:focus{border-color:#FF6B2B!important;box-shadow:0 0 0 3px rgba(255,107,43,0.12)}
        select{appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23FF8C5A' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;cursor:pointer}
        textarea{resize:vertical;font-family:inherit}
        .cvg-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        @media (max-width:640px){.cvg-grid{grid-template-columns:1fr}}
        .cvg-layout{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:flex-start}
        @media (max-width:900px){.cvg-layout{grid-template-columns:1fr}}
        .cvg-cv-cols{display:grid;grid-template-columns:190px 1fr}
        @media (max-width:640px){.cvg-cv-cols{grid-template-columns:1fr}}
        .cvg-btn-primary{transition:transform 0.15s, box-shadow 0.15s}
        .cvg-btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(255,107,43,0.3)}
        .cvg-photo:hover{box-shadow:0 0 0 4px rgba(255,107,43,0.15)}
        .cvg-platform-chip{transition:all 0.15s;cursor:pointer}
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
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>CV Generator</span>
        </div>
      </div>

      <main style={{ maxWidth: 1060, margin: '0 auto', padding: '20px 20px 80px', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 100, padding: '5px 14px', fontSize: 11, fontWeight: 700, color: '#FF8C5A', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            ✨ AI-written bio included
          </div>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>CV Generator</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>Build a brand-ready creator CV — stats, bio, brands, and rates in one PDF.</p>
        </div>

        {step === 1 && (
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            {/* Basics */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}><i className="ti ti-user-circle" style={{ fontSize: 14 }}></i>Your details</div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 18 }}>
                <div
                  className="cvg-photo"
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
              <div className="cvg-grid" style={{ marginBottom: 12 }}>
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
              <div className="cvg-grid" style={{ marginBottom: 12 }}>
                <div>
                  <label style={S.label}>City</label>
                  <input style={S.input} value={data.city} onChange={e => upd('city', e.target.value)} placeholder="Mumbai" />
                </div>
                <div>
                  <label style={S.label}>Years active</label>
                  <input style={S.input} value={data.yearsActive} onChange={e => upd('yearsActive', e.target.value)} placeholder="3" />
                </div>
              </div>
              <div className="cvg-grid">
                <div>
                  <label style={S.label}>Email</label>
                  <input style={S.input} value={data.email} onChange={e => upd('email', e.target.value)} placeholder="you@email.com" />
                </div>
                <div>
                  <label style={S.label}>Phone</label>
                  <input style={S.input} value={data.phone} onChange={e => upd('phone', e.target.value)} placeholder="+91 98765 43210" />
                </div>
              </div>
            </div>

            {/* Platforms */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}><i className="ti ti-devices" style={{ fontSize: 14 }}></i>Platforms *</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                {PLATFORM_OPTIONS.map(p => (
                  <span
                    key={p}
                    className="cvg-platform-chip"
                    onClick={() => togglePlatform(p)}
                    style={{
                      fontSize: 12, fontWeight: 600, padding: '8px 14px', borderRadius: 99,
                      background: data.platforms.includes(p) ? 'rgba(255,107,43,0.15)' : '#0A0A16',
                      border: data.platforms.includes(p) ? '1px solid #FF6B2B' : '1px solid rgba(255,255,255,0.1)',
                      color: data.platforms.includes(p) ? '#FF8C5A' : 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
              <div className="cvg-grid" style={{ marginBottom: 12 }}>
                <div>
                  <label style={S.label}>Instagram handle</label>
                  <input style={S.input} value={data.igHandle} onChange={e => upd('igHandle', e.target.value)} placeholder="@priyasharma" />
                </div>
                <div>
                  <label style={S.label}>Instagram followers</label>
                  <input style={S.input} value={data.igFollowers} onChange={e => upd('igFollowers', e.target.value)} placeholder="45.2K" />
                </div>
              </div>
              <div className="cvg-grid" style={{ marginBottom: 12 }}>
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
              <div className="cvg-grid" style={{ marginBottom: 12 }}>
                <div>
                  <label style={S.label}>Gender split</label>
                  <input style={S.input} value={data.audienceGender} onChange={e => upd('audienceGender', e.target.value)} placeholder="60% Female · 40% Male" />
                </div>
                <div>
                  <label style={S.label}>Age group</label>
                  <input style={S.input} value={data.audienceAge} onChange={e => upd('audienceAge', e.target.value)} placeholder="18–24" />
                </div>
              </div>
              <div className="cvg-grid">
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

            {/* Skills */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}><i className="ti ti-bolt" style={{ fontSize: 14 }}></i>Skills (optional)</div>
              <TagInput values={data.skills} onChange={v => upd('skills', v)} placeholder="Reel editing, Scriptwriting…" />
            </div>

            {/* Bio */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div style={{ ...S.sectionTitle, marginBottom: 0 }}><i className="ti ti-pencil" style={{ fontSize: 14 }}></i>About / Bio</div>
                <button
                  onClick={generateAIBio}
                  disabled={generatingBio}
                  style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.3)', color: '#FF8C5A', borderRadius: 8, padding: '6px 12px', fontSize: 12, fontWeight: 700, cursor: generatingBio ? 'default' : 'pointer', opacity: generatingBio ? 0.6 : 1 }}
                >
                  {generatingBio ? <i className="ti ti-loader-2" style={{ fontSize: 13, animation: 'cvgspin 0.8s linear infinite' }}></i> : <i className="ti ti-sparkles" style={{ fontSize: 13 }}></i>}
                  {generatingBio ? 'Writing…' : 'Generate with AI'}
                </button>
                <style>{`@keyframes cvgspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}`}</style>
              </div>
              <textarea style={{ ...S.input, minHeight: 110 }} value={data.bio} onChange={e => upd('bio', e.target.value)} placeholder="Write your bio, or click Generate with AI once you've filled in your details above." />
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

            {/* Awards */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}><i className="ti ti-award" style={{ fontSize: 14 }}></i>Awards & recognition (optional)</div>
              <textarea style={{ ...S.input, minHeight: 70 }} value={data.awards} onChange={e => upd('awards', e.target.value)} placeholder="Featured creator, Instagram Reels Spotlight 2025" />
            </div>

            {/* Rates */}
            <div style={{ ...S.card, padding: 22, marginBottom: 16 }}>
              <div style={S.sectionTitle}><i className="ti ti-currency-rupee" style={{ fontSize: 14 }}></i>What you offer brands (optional)</div>
              {data.rates.length > 0 && (
                <div style={{ marginBottom: 12 }}>
                  {data.rates.map((r, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: '#0A0A16', borderRadius: 8, marginBottom: 6 }}>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{r.name}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: '#FF6B2B' }}>₹{Number(r.price).toLocaleString('en-IN')}</span>
                        <button onClick={() => removeRate(i)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', fontSize: 16, lineHeight: 1 }}>×</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="cvg-grid" style={{ marginBottom: 10 }}>
                <input style={S.input} value={newRateName} onChange={e => setNewRateName(e.target.value)} placeholder="Service e.g. Dedicated Reel" />
                <input style={S.input} type="number" value={newRatePrice} onChange={e => setNewRatePrice(e.target.value)} placeholder="Price ₹" />
              </div>
              <button onClick={addRate} style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.3)', color: '#FF8C5A', borderRadius: 10, padding: '8px 18px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>+ Add rate</button>
              <div style={{ marginTop: 14 }}>
                <label style={S.label}>Turnaround time</label>
                <input style={S.input} value={data.turnaround} onChange={e => upd('turnaround', e.target.value)} placeholder="3–5 days" />
              </div>
            </div>

            <button
              className="cvg-btn-primary"
              disabled={!canProceed()}
              onClick={() => setStep(2)}
              style={{ width: '100%', background: canProceed() ? 'linear-gradient(135deg,#FF6B2B,#FF4500)' : 'rgba(255,255,255,0.08)', color: canProceed() ? '#fff' : 'rgba(255,255,255,0.3)', border: 'none', borderRadius: 12, padding: '15px', fontSize: 15, fontWeight: 700, cursor: canProceed() ? 'pointer' : 'not-allowed' }}
            >
              Preview my CV →
            </button>
            {!canProceed() && <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 10 }}>Fill name, niche, and at least one platform to continue.</p>}
          </div>
        )}

        {step === 2 && (
          <div className="cvg-layout">
            {/* Preview — mirrors the live Identity Kit profile CV tab exactly, plus a photo crop */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
              {/* CV Header */}
              <div style={{ background: '#111120', padding: '20px', display: 'flex', gap: 14, alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {data.photo ? (
                  <img src={data.photo} alt={data.fullName} style={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid #FF6B2B', objectFit: 'cover', flexShrink: 0 }} />
                ) : (
                  <div style={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid #FF6B2B', background: '#1e1e2e', flexShrink: 0 }} />
                )}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 3 }}>Creator CV</div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 3 }}>{data.fullName || 'Your Name'}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>{displayNiche || 'Your niche'} Creator{data.platforms.length > 0 && ` · ${data.platforms.slice(0, 2).join(' & ')}`}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {[data.city && { icon: 'ti-map-pin', val: data.city }, data.email && { icon: 'ti-mail', val: data.email }, data.igHandle && { icon: 'ti-brand-instagram', val: data.igHandle }].filter(Boolean).map((m: any) => (
                      <span key={m.val} style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <i className={`ti ${m.icon}`} style={{ fontSize: 11, color: '#FF6B2B' }}></i>{m.val}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Two column */}
              <div className="cvg-cv-cols">
                {/* LEFT sidebar */}
                <div style={{ background: '#111120', padding: '18px 16px', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                  {statItems.length > 0 && (
                    <div style={{ marginBottom: 18 }}>
                      <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Key stats</div>
                      {statItems.map(([val, key]) => (
                        <div key={key} style={{ background: '#08080E', borderRadius: 8, padding: '7px 10px', marginBottom: 6 }}>
                          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 800, color: '#FF6B2B' }}>{val}</div>
                          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', marginTop: 1 }}>{key}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {data.platforms.length > 0 && (
                    <div style={{ marginBottom: 18 }}>
                      <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Platforms</div>
                      {data.platforms.map(p => (
                        <div key={p} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{p}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {(data.audienceAge || data.audienceGender) && (
                    <div style={{ marginBottom: 18 }}>
                      <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Audience</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.9 }}>
                        {data.audienceGender && <div>{data.audienceGender}</div>}
                        {data.audienceAge && <div>{data.audienceAge} age group</div>}
                        {data.audienceCities && <div>{data.audienceCities}</div>}
                        {data.languages && <div>{data.languages}</div>}
                      </div>
                    </div>
                  )}

                  {data.skills.length > 0 && (
                    <div>
                      <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Skills</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                        {data.skills.map(s => <span key={s} style={{ fontSize: 10, padding: '3px 8px', borderRadius: 99, background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.2)', color: '#FF8C5A' }}>{s}</span>)}
                      </div>
                    </div>
                  )}
                </div>

                {/* RIGHT content */}
                <div style={{ background: '#0c0c18', padding: '18px' }}>
                  {data.bio && (
                    <div style={{ marginBottom: 18 }}>
                      <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>About</div>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>{data.bio}</p>
                    </div>
                  )}

                  {data.bestCampaign && (
                    <div style={{ marginBottom: 18 }}>
                      <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Best campaign</div>
                      <div style={{ background: 'rgba(255,107,43,0.06)', borderLeft: '2px solid #FF6B2B', borderRadius: '0 8px 8px 0', padding: '10px 14px' }}>
                        <div style={{ fontSize: 9, color: '#FF6B2B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Campaign highlight</div>
                        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>{data.bestCampaign}</div>
                      </div>
                    </div>
                  )}

                  {data.brands.length > 0 && (
                    <div style={{ marginBottom: 18 }}>
                      <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Brand collaborations</div>
                      {data.brands.map((b, i) => (
                        <div key={b} style={{ paddingBottom: 10, marginBottom: i < data.brands.length - 1 ? 10 : 0, borderBottom: i < data.brands.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                            <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{b}</span>
                            <span style={{ fontSize: 10, color: '#FF6B2B', background: 'rgba(255,107,43,0.1)', padding: '2px 8px', borderRadius: 4 }}>Paid collab</span>
                          </div>
                          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>Content creation · Brand collaboration</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {data.awards && (
                    <div style={{ marginBottom: 18 }}>
                      <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Awards &amp; recognition</div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <i className="ti ti-award" style={{ fontSize: 16, color: '#FCD34D', flexShrink: 0, marginTop: 1 }}></i>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{data.awards}</p>
                      </div>
                    </div>
                  )}

                  {data.rates.length > 0 && (
                    <div>
                      <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>What I offer brands</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                        {data.rates.slice(0, 5).map(r => (
                          <div key={r.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 10px', background: '#08080E', borderRadius: 8 }}>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{r.name}</span>
                            <span style={{ fontSize: 12, fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#FF6B2B' }}>₹{Number(r.price).toLocaleString('en-IN')}</span>
                          </div>
                        ))}
                      </div>
                      {data.turnaround && <div style={{ marginTop: 8, fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>⏱ Turnaround: {data.turnaround} · 1 free revision included</div>}
                    </div>
                  )}
                </div>
              </div>

              {/* CV Footer */}
              <div style={{ background: '#111120', padding: '12px 18px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: '#FF8C5A', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>Identity Kit</span>
                {data.rates.length > 0 && <span style={{ fontSize: 11, color: '#FF6B2B' }}>Starting ₹{Number(data.rates[0].price).toLocaleString('en-IN')} per collab</span>}
              </div>
            </div>

            {/* Side panel */}
            <div style={{ position: 'sticky', top: 20 }}>
              <div style={{ ...S.card, padding: 24, marginBottom: 16 }}>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 17, fontWeight: 800, marginBottom: 10 }}>Looks good?</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 20 }}>
                  This is exactly how your CV will look as a downloaded PDF — same dark theme, same layout, plus your photo in the header.
                </p>
                {!PAYMENT_ENABLED && (
                  <div style={{ background: 'rgba(255,193,7,0.08)', border: '1px solid rgba(255,193,7,0.25)', borderRadius: 10, padding: '10px 12px', marginBottom: 16, fontSize: 12, color: '#FFD166' }}>
                    🛠 Testing mode — downloads are free for now. Payment will be added once everything checks out.
                  </div>
                )}
                <button
                  className="cvg-btn-primary"
                  onClick={handleDownload}
                  disabled={generating}
                  style={{ width: '100%', background: 'linear-gradient(135deg,#FF6B2B,#FF4500)', color: '#fff', border: 'none', borderRadius: 12, padding: '14px', fontSize: 15, fontWeight: 700, cursor: generating ? 'default' : 'pointer', opacity: generating ? 0.7 : 1, marginBottom: 10 }}
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
