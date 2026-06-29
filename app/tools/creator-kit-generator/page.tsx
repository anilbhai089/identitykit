'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Script from 'next/script'

// ── Types ─────────────────────────────────────────────────────────────────────
interface CreatorData {
  // Photo
  photo: string // base64
  // Personal
  name: string
  handle: string
  email: string
  phone: string
  city: string
  bio: string
  // Stats
  platform: string
  followers: string
  engagementRate: string
  avgViews: string
  niche: string
  subNiche: string
  // Rates
  reelRate: string
  staticRate: string
  storyRate: string
  youtubeRate: string
  shortsRate: string
  // Experience
  yearsActive: string
  pastBrands: string
  achievements: string
  languages: string
  // Social links
  instagram: string
  youtube: string
  linkedin: string
  twitter: string
  website: string
}

const niches = [
  'Finance & Investing', 'Tech & Gadgets', 'Education & Career', 'Health & Fitness',
  'Beauty & Skincare', 'Food & Recipes', 'Travel & Vlogs', 'Lifestyle',
  'Fashion & Style', 'Gaming', 'Comedy & Entertainment', 'Business & Startup',
  'Parenting & Family', 'Motivation & Self-Help', 'Sports & Cricket', 'Sustainability',
]

const platforms = ['Instagram', 'YouTube', 'Both Instagram & YouTube', 'LinkedIn', 'Twitter/X', 'Multi-platform']

// ── Pricing ───────────────────────────────────────────────────────────────────
const PRICES = {
  cv: 49,
  mediakit: 49,
  ratecard: 49,
  bundle: 99,
}

// ── Image helper ──────────────────────────────────────────────────────────────
function addProfileImage(doc: InstanceType<typeof import('jspdf').jsPDF>, photo: string, x: number, y: number, size: number) {
  if (!photo) return
  try {
    // Detect format from base64 header
    const format = photo.startsWith('data:image/png') ? 'PNG' : 'JPEG'
    const base64 = photo.split(',')[1] || photo
    doc.addImage(base64, format, x, y, size, size)
    // Circle clip effect — draw white arc over corners (simple approach)
    doc.setDrawColor(255, 107, 43)
    doc.setLineWidth(1.2)
    doc.circle(x + size / 2, y + size / 2, size / 2, 'S')
  } catch (e) {
    console.warn('Could not add profile image to PDF:', e)
  }
}

// ── PDF Generators ────────────────────────────────────────────────────────────
async function generateCVPdf(data: CreatorData) {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const W = 210, M = 15
  let y = M

  const orange = [255, 107, 43] as [number, number, number]
  const dark = [15, 15, 25] as [number, number, number]
  const gray = [90, 90, 110] as [number, number, number]
  const light = [245, 245, 250] as [number, number, number]
  const white = [255, 255, 255] as [number, number, number]

  // Header
  doc.setFillColor(...orange)
  doc.rect(0, 0, W, 48, 'F')
  // Profile photo
  if (data.photo) {
    addProfileImage(doc, data.photo, W - M - 32, y + 4, 32)
  }
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(24)
  doc.setTextColor(...white)
  doc.text(data.name.toUpperCase(), M, y + 14)
  doc.setFontSize(12)
  doc.setFont('helvetica', 'normal')
  doc.text(`${data.niche} Creator | ${data.platform}`, M, y + 24)
  doc.setFontSize(9)
  doc.text(`${data.handle} | ${data.city} | ${data.email}`, M, y + 32)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.text('identitykit.in', W - M, y + 14, { align: 'right' })
  y = 56

  const section = (title: string) => {
    doc.setFillColor(...orange)
    doc.rect(M, y, W - M * 2, 7, 'F')
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8)
    doc.setTextColor(...white)
    doc.text(title.toUpperCase(), M + 3, y + 5)
    y += 10
  }

  const row = (label: string, value: string) => {
    doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(...dark)
    doc.text(label, M, y)
    doc.setFont('helvetica', 'normal'); doc.setTextColor(...gray)
    const lines = doc.splitTextToSize(value, W - M * 2 - 45)
    doc.text(lines, M + 45, y)
    y += lines.length * 4 + 2
  }

  // About
  section('Professional Summary')
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(...gray)
  const bioLines = doc.splitTextToSize(data.bio || `${data.name} is a ${data.niche} creator based in ${data.city} with ${data.followers} followers on ${data.platform}. Known for authentic, high-engagement content that connects with Indian audiences.`, W - M * 2)
  doc.text(bioLines, M, y)
  y += bioLines.length * 4.2 + 6

  // Key Stats
  section('Creator Statistics')
  y += 2
  const stats = [
    ['Followers', data.followers || '—'],
    ['Engagement Rate', data.engagementRate ? data.engagementRate + '%' : '—'],
    ['Avg Views / Reach', data.avgViews || '—'],
    ['Primary Platform', data.platform],
    ['Niche', data.niche + (data.subNiche ? ' — ' + data.subNiche : '')],
    ['Years Active', data.yearsActive ? data.yearsActive + ' year(s)' : '—'],
    ['Languages', data.languages || 'Hindi, English'],
  ]
  stats.forEach(([l, v]) => row(l + ':', v))
  y += 4

  // Experience
  if (data.pastBrands) {
    section('Brand Collaborations')
    y += 2
    const brands = data.pastBrands.split(',').map(b => b.trim()).filter(Boolean)
    brands.forEach(b => {
      doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(...gray)
      doc.text(`• ${b}`, M + 3, y)
      y += 5
    })
    y += 2
  }

  // Achievements
  if (data.achievements) {
    section('Achievements & Highlights')
    y += 2
    const achLines = doc.splitTextToSize(data.achievements, W - M * 2 - 4)
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(...gray)
    doc.text(achLines, M + 3, y)
    y += achLines.length * 4.5 + 4
  }

  // Social
  section('Social Presence')
  y += 2
  const socials = [
    ['Instagram', data.instagram],
    ['YouTube', data.youtube],
    ['LinkedIn', data.linkedin],
    ['Twitter/X', data.twitter],
    ['Website', data.website],
  ].filter(s => s[1])
  socials.forEach(([l, v]) => row(l + ':', v))

  // Footer
  doc.setDrawColor(...orange)
  doc.setLineWidth(0.5)
  doc.line(M, 283, W - M, 283)
  doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...gray)
  doc.text(`${data.name} · ${data.handle} · ${data.email}`, W / 2, 287, { align: 'center' })
  doc.text('Generated with Identity Kit · identitykit.in', W / 2, 291, { align: 'center' })

  return doc
}

async function generateMediaKitPdf(data: CreatorData) {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const W = 210, M = 15
  let y = M

  const orange = [255, 107, 43] as [number, number, number]
  const dark = [15, 15, 25] as [number, number, number]
  const gray = [90, 90, 110] as [number, number, number]
  const white = [255, 255, 255] as [number, number, number]
  const light = [245, 245, 250] as [number, number, number]

  // Header with gradient feel
  doc.setFillColor(...dark)
  doc.rect(0, 0, W, 52, 'F')
  doc.setFillColor(...orange)
  doc.rect(0, 0, 6, 52, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10)
  doc.setTextColor(...orange)
  doc.text('MEDIA KIT', M, y + 8)
  doc.setFontSize(26)
  doc.setTextColor(255, 255, 255)
  doc.text(data.name, M, y + 22)
  // Profile photo in media kit header
  if (data.photo) {
    addProfileImage(doc, data.photo, W - M - 36, y + 4, 36)
  }
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(200, 200, 200)
  doc.text(`${data.niche} Creator · ${data.platform} · ${data.city}`, M, y + 32)
  doc.text(data.handle, M, y + 40)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8)
  doc.setTextColor(...orange)
  doc.text('identitykit.in', W - M, y + 40, { align: 'right' })
  y = 62

  const sectionTitle = (t: string) => {
    doc.setFont('helvetica', 'bold'); doc.setFontSize(9); doc.setTextColor(...orange)
    doc.text(t.toUpperCase(), M, y)
    doc.setDrawColor(...orange)
    doc.setLineWidth(0.3)
    doc.line(M, y + 2, W - M, y + 2)
    y += 8
  }

  const statBox = (label: string, value: string, x: number, bY: number, w: number) => {
    doc.setFillColor(...light)
    doc.roundedRect(x, bY, w, 18, 2, 2, 'F')
    doc.setFont('helvetica', 'bold'); doc.setFontSize(14); doc.setTextColor(...orange)
    doc.text(value, x + w / 2, bY + 11, { align: 'center' })
    doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...gray)
    doc.text(label.toUpperCase(), x + w / 2, bY + 16, { align: 'center' })
  }

  // About
  sectionTitle('About')
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(...gray)
  const bioLines = doc.splitTextToSize(data.bio || `${data.name} is a ${data.niche} creator based in ${data.city}. With ${data.followers} followers and ${data.engagementRate || 'strong'}% engagement, they create authentic content that resonates with Indian audiences.`, W - M * 2)
  doc.text(bioLines, M, y)
  y += bioLines.length * 4.5 + 10

  // Stats boxes
  sectionTitle('Key Stats')
  const bw = (W - M * 2 - 12) / 4
  statBox('Followers', data.followers || '—', M, y, bw)
  statBox('Engagement', (data.engagementRate || '—') + '%', M + bw + 4, y, bw)
  statBox('Avg Views', data.avgViews || '—', M + (bw + 4) * 2, y, bw)
  statBox('Years Active', (data.yearsActive || '1') + ' yr', M + (bw + 4) * 3, y, bw)
  y += 26

  // Content formats
  sectionTitle('Content I Create')
  const formats = [
    data.reelRate ? '📱 Instagram Reels' : '',
    data.staticRate ? '🖼️ Static Posts & Carousels' : '',
    data.storyRate ? '⭕ Instagram Stories' : '',
    data.youtubeRate ? '▶️ YouTube Videos' : '',
    data.shortsRate ? '📹 YouTube Shorts' : '',
  ].filter(Boolean)
  const cols = 2
  formats.forEach((f, i) => {
    const col = i % cols
    const row2 = Math.floor(i / cols)
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(...dark)
    doc.text(f, M + col * 90, y + row2 * 7)
  })
  y += Math.ceil(formats.length / cols) * 7 + 8

  // Past brands
  if (data.pastBrands) {
    sectionTitle('Past Brand Collaborations')
    const brands = data.pastBrands.split(',').map(b => b.trim()).filter(Boolean)
    const bPerRow = 4
    brands.forEach((b, i) => {
      const col = i % bPerRow
      const r = Math.floor(i / bPerRow)
      doc.setFillColor(...light)
      const bxw = (W - M * 2 - (bPerRow - 1) * 3) / bPerRow
      doc.roundedRect(M + col * (bxw + 3), y + r * 12, bxw, 10, 1.5, 1.5, 'F')
      doc.setFont('helvetica', 'bold'); doc.setFontSize(7.5); doc.setTextColor(...dark)
      doc.text(b, M + col * (bxw + 3) + bxw / 2, y + r * 12 + 6.5, { align: 'center' })
    })
    y += Math.ceil(brands.length / bPerRow) * 12 + 10
  }

  // Audience
  sectionTitle('Audience Demographics')
  const demRows = [
    ['Primary Age Group', '18–35 years (Indian digital natives)'],
    ['Location', data.city + ' & Pan India'],
    ['Language', data.languages || 'Hindi & English'],
    ['Niche Interest', data.niche + (data.subNiche ? ' · ' + data.subNiche : '')],
  ]
  demRows.forEach(([l, v]) => {
    doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(...dark)
    doc.text(l + ':', M, y)
    doc.setFont('helvetica', 'normal'); doc.setTextColor(...gray)
    doc.text(v, M + 50, y)
    y += 6
  })
  y += 4

  // Contact
  sectionTitle('Get in Touch')
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(...gray)
  if (data.email) doc.text(`Email: ${data.email}`, M, y); y += 5
  if (data.phone) doc.text(`WhatsApp: ${data.phone}`, M, y); y += 5
  if (data.instagram) doc.text(`Instagram: ${data.instagram}`, M, y); y += 5
  if (data.youtube) doc.text(`YouTube: ${data.youtube}`, M, y)

  // Footer
  doc.setDrawColor(...orange)
  doc.setLineWidth(0.5)
  doc.line(M, 283, W - M, 283)
  doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...gray)
  doc.text('Generated with Identity Kit · identitykit.in', W / 2, 288, { align: 'center' })

  return doc
}

async function generateRateCardPdf(data: CreatorData) {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const W = 210, M = 15
  let y = M

  const orange = [255, 107, 43] as [number, number, number]
  const dark = [15, 15, 25] as [number, number, number]
  const gray = [90, 90, 110] as [number, number, number]
  const light = [245, 245, 250] as [number, number, number]
  const white = [255, 255, 255] as [number, number, number]

  // Header
  doc.setFillColor(...orange)
  doc.rect(0, 0, W, 44, 'F')
  // Profile photo
  if (data.photo) {
    addProfileImage(doc, data.photo, W - M - 32, y + 4, 32)
  }
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(...white)
  doc.text('RATE CARD', M, y + 8)
  doc.setFontSize(22)
  doc.text(data.name.toUpperCase(), M, y + 22)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.text(`${data.niche} Creator · ${data.handle} · ${data.city}`, M, y + 32)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8)
  doc.text('identitykit.in', W - M, y + 32, { align: 'right' })
  y = 54

  // Stats summary
  doc.setFillColor(...light)
  doc.roundedRect(M, y, W - M * 2, 20, 3, 3, 'F')
  const sw = (W - M * 2) / 3
  const statItems = [
    [data.followers || '—', 'FOLLOWERS'],
    [(data.engagementRate || '—') + '%', 'ENGAGEMENT RATE'],
    [data.avgViews || '—', 'AVG VIEWS'],
  ]
  statItems.forEach(([v, l], i) => {
    doc.setFont('helvetica', 'bold'); doc.setFontSize(14); doc.setTextColor(...orange)
    doc.text(v, M + sw * i + sw / 2, y + 11, { align: 'center' })
    doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...gray)
    doc.text(l, M + sw * i + sw / 2, y + 17, { align: 'center' })
  })
  y += 28

  // Rate table
  doc.setFont('helvetica', 'bold'); doc.setFontSize(9); doc.setTextColor(...orange)
  doc.text('COLLABORATION RATES', M, y)
  doc.setDrawColor(...orange); doc.setLineWidth(0.3)
  doc.line(M, y + 2, W - M, y + 2)
  y += 8

  // Table header
  doc.setFillColor(...dark)
  doc.rect(M, y, W - M * 2, 8, 'F')
  doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(...white)
  doc.text('CONTENT TYPE', M + 4, y + 5.5)
  doc.text('PLATFORM', M + 85, y + 5.5)
  doc.text('RATE (INR)', W - M - 4, y + 5.5, { align: 'right' })
  y += 8

  const rates = [
    ['Instagram Reel (up to 60 sec)', 'Instagram', data.reelRate],
    ['Static Post / Carousel', 'Instagram', data.staticRate],
    ['Story Package (3 frames)', 'Instagram', data.storyRate],
    ['Dedicated Video', 'YouTube', data.youtubeRate],
    ['YouTube Shorts', 'YouTube', data.shortsRate],
  ].filter(r => r[2])

  rates.forEach(([type, plat, rate], i) => {
    const bg = i % 2 === 0 ? [250, 250, 252] as [number, number, number] : [255, 255, 255] as [number, number, number]
    doc.setFillColor(...bg)
    doc.rect(M, y, W - M * 2, 9, 'F')
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(...dark)
    doc.text(type, M + 4, y + 6)
    doc.setTextColor(...gray)
    doc.text(plat, M + 85, y + 6)
    doc.setFont('helvetica', 'bold'); doc.setTextColor(...orange)
    doc.text('Rs. ' + parseInt(rate).toLocaleString('en-IN'), W - M - 4, y + 6, { align: 'right' })
    y += 9
  })
  y += 8

  // Inclusions
  doc.setFont('helvetica', 'bold'); doc.setFontSize(9); doc.setTextColor(...orange)
  doc.text('WHAT IS INCLUDED', M, y)
  doc.line(M, y + 2, W - M, y + 2)
  y += 8
  const inclusions = [
    'Content ideation, scripting, and production',
    '1 round of revisions included in base rate',
    'ASCI-compliant disclosure on all paid content',
    'Analytics report shared 7 days after going live',
    'Usage rights: Brand\'s owned social channels for 6 months',
  ]
  inclusions.forEach(item => {
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(...gray)
    doc.text(`• ${item}`, M + 3, y); y += 6
  })
  y += 6

  // Add-ons
  doc.setFont('helvetica', 'bold'); doc.setFontSize(9); doc.setTextColor(...orange)
  doc.text('ADDITIONAL CHARGES', M, y)
  doc.line(M, y + 2, W - M, y + 2)
  y += 8
  const addons = [
    ['Exclusivity (per 30 days)', '+25–50% of base rate'],
    ['Additional revision rounds', '+10% of base rate per round'],
    ['Extended usage rights (ads/OOH)', '+50–100% of base rate'],
    ['Urgent delivery (under 5 days)', '+20% of base rate'],
    ['GST (if registered)', '+18% on total'],
  ]
  addons.forEach(([item, price], i) => {
    const bg = i % 2 === 0 ? [250, 250, 252] as [number, number, number] : [255, 255, 255] as [number, number, number]
    doc.setFillColor(...bg)
    doc.rect(M, y, W - M * 2, 8, 'F')
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(...dark)
    doc.text(item, M + 4, y + 5.5)
    doc.setFont('helvetica', 'bold'); doc.setTextColor(...orange)
    doc.text(price, W - M - 4, y + 5.5, { align: 'right' })
    y += 8
  })
  y += 8

  // Payment terms
  doc.setFont('helvetica', 'bold'); doc.setFontSize(9); doc.setTextColor(...orange)
  doc.text('PAYMENT TERMS', M, y)
  doc.line(M, y + 2, W - M, y + 2)
  y += 8
  const terms = [
    '50% advance before content creation begins',
    '50% balance within 7 days of going live',
    'Payment via bank transfer (NEFT/IMPS)',
    'TDS at 10% under Section 194J will be deducted',
  ]
  terms.forEach(t => {
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(...gray)
    doc.text(`• ${t}`, M + 3, y); y += 6
  })

  // Contact
  y += 6
  doc.setFillColor(...orange)
  doc.roundedRect(M, y, W - M * 2, 16, 3, 3, 'F')
  doc.setFont('helvetica', 'bold'); doc.setFontSize(9); doc.setTextColor(...white)
  doc.text('Ready to collaborate? Get in touch:', M + 4, y + 6)
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5)
  doc.text(`${data.email}${data.phone ? '  |  ' + data.phone : ''}`, M + 4, y + 12)

  // Footer
  doc.setDrawColor(200, 200, 210); doc.setLineWidth(0.3)
  doc.line(M, 283, W - M, 283)
  doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...gray)
  doc.text(`${data.name} · Rates valid for 2026 · Subject to change`, W / 2, 288, { align: 'center' })
  doc.text('Generated with Identity Kit · identitykit.in', W / 2, 292, { align: 'center' })

  return doc
}

// ── Razorpay ──────────────────────────────────────────────────────────────────
declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => { open(): void }
  }
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function CreatorKitGenerator() {
  const [step, setStep] = useState<'form' | 'preview' | 'download'>('form')
  const [data, setData] = useState<CreatorData>({
    photo: '',
    name: '', handle: '', email: '', phone: '', city: '', bio: '',
    platform: 'Instagram', followers: '', engagementRate: '', avgViews: '',
    niche: 'Lifestyle', subNiche: '', reelRate: '', staticRate: '', storyRate: '',
    youtubeRate: '', shortsRate: '', yearsActive: '', pastBrands: '',
    achievements: '', languages: 'Hindi, English',
    instagram: '', youtube: '', linkedin: '', twitter: '', website: '',
  })
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [paying, setPaying] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const upd = (field: keyof CreatorData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setData(prev => ({ ...prev, [field]: e.target.value }))

  const toggleSelect = (doc: string) => {
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(doc)) next.delete(doc)
      else next.add(doc)
      return next
    })
  }

  const getPrice = () => {
    if (selected.size === 3) return PRICES.bundle
    return selected.size * PRICES.cv
  }

  const getLabel = () => {
    if (selected.size === 3) return 'Full Bundle (CV + Media Kit + Rate Card)'
    const labels: Record<string, string> = { cv: 'Creator CV', mediakit: 'Media Kit', ratecard: 'Rate Card' }
    return [...selected].map(s => labels[s]).join(' + ')
  }

  async function handleDownload() {
    if (selected.size === 0) return
    const price = getPrice()

    setPaying(true)
    try {
      // Ensure Razorpay script is loaded before opening checkout
      if (!window.Razorpay) {
        await new Promise<void>((resolve, reject) => {
          const existing = document.querySelector('script[src*="razorpay"]')
          if (existing) { resolve(); return }
          const script = document.createElement('script')
          script.src = 'https://checkout.razorpay.com/v1/checkout.js'
          script.onload = () => resolve()
          script.onerror = () => reject(new Error('Razorpay failed to load'))
          document.head.appendChild(script)
        })
      }

      // Create Razorpay order via API
      const orderRes = await fetch('/api/creator-kit-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: price * 100, docs: [...selected] }),
      })
      if (!orderRes.ok) throw new Error('Order creation failed — check Razorpay keys in Vercel env vars')
      const { orderId, key } = await orderRes.json()

      const options = {
        key,
        amount: price * 100,
        currency: 'INR',
        name: 'Identity Kit',
        description: getLabel(),
        order_id: orderId,
        prefill: { name: data.name, email: data.email, contact: data.phone },
        theme: { color: '#FF6B2B' },
        handler: async () => {
          setPaying(false)
          setDownloading(true)
          await triggerDownload()
          setDownloading(false)
          setStep('download')
        },
        modal: { ondismiss: () => setPaying(false) },
      }
      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (e) {
      console.error(e)
      setPaying(false)
      alert('Payment failed. Make sure RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET are set in Vercel env vars.')
    }
  }

  async function triggerDownload() {
    const docs = [...selected]

    if (docs.length === 1) {
      if (docs[0] === 'cv') {
        const doc = await generateCVPdf(data)
        doc.save(`${data.name.replace(/\s/g, '-')}-Creator-CV.pdf`)
      } else if (docs[0] === 'mediakit') {
        const doc = await generateMediaKitPdf(data)
        doc.save(`${data.name.replace(/\s/g, '-')}-Media-Kit.pdf`)
      } else if (docs[0] === 'ratecard') {
        const doc = await generateRateCardPdf(data)
        doc.save(`${data.name.replace(/\s/g, '-')}-Rate-Card.pdf`)
      }
    } else {
      // Generate all selected and zip
      const JSZip = (await import('jszip')).default
      const zip = new JSZip()

      if (docs.includes('cv')) {
        const doc = await generateCVPdf(data)
        zip.file(`${data.name.replace(/\s/g, '-')}-Creator-CV.pdf`, doc.output('arraybuffer'))
      }
      if (docs.includes('mediakit')) {
        const doc = await generateMediaKitPdf(data)
        zip.file(`${data.name.replace(/\s/g, '-')}-Media-Kit.pdf`, doc.output('arraybuffer'))
      }
      if (docs.includes('ratecard')) {
        const doc = await generateRateCardPdf(data)
        zip.file(`${data.name.replace(/\s/g, '-')}-Rate-Card.pdf`, doc.output('arraybuffer'))
      }

      const content = await zip.generateAsync({ type: 'blob' })
      const url = URL.createObjectURL(content)
      const a = document.createElement('a')
      a.href = url
      a.download = `${data.name.replace(/\s/g, '-')}-Creator-Kit.zip`
      a.click()
      URL.revokeObjectURL(url)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 10, padding: '11px 14px', fontSize: 14, color: '#fff',
    fontFamily: "'Plus Jakarta Sans', sans-serif", outline: 'none', transition: 'border-color 0.2s',
  }
  const selectStyle: React.CSSProperties = {
    ...inputStyle, cursor: 'pointer', appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff66' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: 36,
  }
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.45)',
    marginBottom: 7, letterSpacing: '0.04em', textTransform: 'uppercase',
  }
  const card: React.CSSProperties = {
    background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 18, padding: '24px', marginBottom: 14,
  }

  const docCards = [
    { key: 'cv', emoji: '📄', title: 'Creator CV', desc: 'Professional resume with stats, brand history, achievements and social links.' },
    { key: 'mediakit', emoji: '🎨', title: 'Media Kit', desc: 'Visual one-pager with audience demographics, content formats, and past collabs.' },
    { key: 'ratecard', emoji: '💰', title: 'Rate Card', desc: 'Detailed pricing table for all platforms with payment terms and inclusions.' },
  ]

  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        input:focus, select:focus, textarea:focus { border-color: rgba(255,107,43,0.5) !important; background: rgba(255,107,43,0.04) !important; }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
        select option { background: #1a1a2e; color: #fff; }
        textarea { resize: vertical; }
        .g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .g3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
        .doc-card { border: 2px solid rgba(255,255,255,0.08); border-radius: 18px; padding: 24px; cursor: pointer; transition: all 0.2s; background: rgba(255,255,255,0.02); }
        .doc-card.selected { border-color: #FF6B2B; background: rgba(255,107,43,0.07); }
        .doc-card:hover { border-color: rgba(255,107,43,0.3); }
        .step-pill { display: inline-flex; align-items: center; gap: 6px; padding: 5px 14px; border-radius: 100px; font-size: 12px; font-weight: 700; }
        .step-pill.active { background: rgba(255,107,43,0.15); color: #FF8C5A; border: 1px solid rgba(255,107,43,0.3); }
        .step-pill.done { background: rgba(76,175,80,0.1); color: #81C784; border: 1px solid rgba(76,175,80,0.2); }
        .step-pill.pending { background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.3); border: 1px solid rgba(255,255,255,0.08); }
        @media (max-width: 640px) {
          .g2, .g3 { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 26px !important; }
          .doc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', height: 58, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg,#FF6B2B,#FF4500)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 12, color: 'white' }}>IK</div>
            <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16 }}>Identity Kit</span>
          </Link>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <Link href="/tools" style={{ fontSize: 13, color: '#FF6B2B', fontWeight: 600, padding: '6px 12px', borderRadius: 8, border: '1px solid rgba(255,107,43,0.2)' }}>All Tools</Link>
            <Link href="/auth?mode=signup" style={{ background: '#FF6B2B', color: '#fff', fontSize: 13, fontWeight: 700, padding: '7px 16px', borderRadius: 9 }}>Get your link →</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto', padding: '0 20px 80px' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', paddingTop: 32, paddingBottom: 36 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 700, color: '#FF8C5A', marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            ✨ Creator Kit Generator
          </div>
          <h1 className="hero-title" style={{ fontFamily: "'Syne',sans-serif", fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 14 }}>
            Generate Your Creator CV,<br />Media Kit & Rate Card
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 500, margin: '0 auto 10px', lineHeight: 1.7 }}>
            Fill your details once — get 3 professional PDFs ready to send brands. Preview free, download for ₹49 each or ₹99 for all 3.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>Preview free · CV ₹49 · Media Kit ₹49 · Rate Card ₹49 · Bundle ₹99</p>
        </div>

        {/* STEPS */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 28, justifyContent: 'center', flexWrap: 'wrap' }}>
          <span className={`step-pill ${step === 'form' ? 'active' : (step === 'preview' || step === 'download') ? 'done' : 'pending'}`}>
            {(step === 'preview' || step === 'download') ? '✓' : '1'} Fill Your Details
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)', alignSelf: 'center' }}>→</span>
          <span className={`step-pill ${step === 'preview' ? 'active' : step === 'download' ? 'done' : 'pending'}`}>
            {step === 'download' ? '✓' : '2'} Preview & Select
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)', alignSelf: 'center' }}>→</span>
          <span className={`step-pill ${step === 'download' ? 'done' : 'pending'}`}>
            3 Pay & Download
          </span>
        </div>

        {/* ── STEP 1: FORM ── */}
        {step === 'form' && (
          <div>
            {/* Personal */}
            <div style={card}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Personal Details</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Basic info that appears across all 3 documents.</p>

              {/* Photo upload */}
              <div style={{ marginBottom: 20, display: 'flex', gap: 20, alignItems: 'center' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', border: '2px dashed rgba(255,107,43,0.4)', background: 'rgba(255,107,43,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
                  {data.photo
                    ? <img src={data.photo} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : <span style={{ fontSize: 28 }}>📷</span>
                  }
                </div>
                <div>
                  <label style={{ ...labelStyle, marginBottom: 8 }}>Profile Photo *</label>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="photo-upload"
                    onChange={e => {
                      const file = e.target.files?.[0]
                      if (!file) return
                      const reader = new FileReader()
                      reader.onload = ev => setData(prev => ({ ...prev, photo: ev.target?.result as string }))
                      reader.readAsDataURL(file)
                    }}
                  />
                  <label htmlFor="photo-upload" style={{ display: 'inline-block', background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.3)', color: '#FF8C5A', borderRadius: 9, padding: '8px 16px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
                    {data.photo ? '✓ Photo uploaded — change' : 'Upload photo'}
                  </label>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 6 }}>Appears in the header of all 3 documents. Square photo works best.</div>
                </div>
              </div>
              <div className="g2" style={{ marginBottom: 12 }}>
                <div><label style={labelStyle}>Full Name *</label><input style={inputStyle} placeholder="Priya Sharma" value={data.name} onChange={upd('name')} /></div>
                <div><label style={labelStyle}>Handle / Username</label><input style={inputStyle} placeholder="@priyasharma" value={data.handle} onChange={upd('handle')} /></div>
              </div>
              <div className="g2" style={{ marginBottom: 12 }}>
                <div><label style={labelStyle}>Email *</label><input style={inputStyle} placeholder="priya@gmail.com" value={data.email} onChange={upd('email')} /></div>
                <div><label style={labelStyle}>Phone / WhatsApp</label><input style={inputStyle} placeholder="+91 98765 43210" value={data.phone} onChange={upd('phone')} /></div>
              </div>
              <div className="g2" style={{ marginBottom: 12 }}>
                <div><label style={labelStyle}>City</label><input style={inputStyle} placeholder="Mumbai" value={data.city} onChange={upd('city')} /></div>
                <div><label style={labelStyle}>Languages</label><input style={inputStyle} placeholder="Hindi, English" value={data.languages} onChange={upd('languages')} /></div>
              </div>
              <div><label style={labelStyle}>Professional Bio</label>
                <textarea style={{ ...inputStyle, minHeight: 80, lineHeight: 1.6 }} placeholder="Write 2-3 sentences about you, your content style, and what makes you unique..." value={data.bio} onChange={upd('bio')} />
              </div>
            </div>

            {/* Creator Stats */}
            <div style={card}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Creator Stats</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Your numbers — used in media kit and CV.</p>
              <div className="g3" style={{ marginBottom: 12 }}>
                <div><label style={labelStyle}>Primary Platform</label>
                  <select style={selectStyle} value={data.platform} onChange={upd('platform')}>
                    {platforms.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div><label style={labelStyle}>Niche</label>
                  <select style={selectStyle} value={data.niche} onChange={upd('niche')}>
                    {niches.map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div><label style={labelStyle}>Sub-Niche</label><input style={inputStyle} placeholder="e.g. Stock Market, Skincare" value={data.subNiche} onChange={upd('subNiche')} /></div>
              </div>
              <div className="g3" style={{ marginBottom: 12 }}>
                <div><label style={labelStyle}>Total Followers</label><input style={inputStyle} placeholder="e.g. 45,000" value={data.followers} onChange={upd('followers')} /></div>
                <div><label style={labelStyle}>Engagement Rate</label><input style={inputStyle} placeholder="e.g. 5.2%" value={data.engagementRate} onChange={upd('engagementRate')} /></div>
                <div><label style={labelStyle}>Avg Views / Reach</label><input style={inputStyle} placeholder="e.g. 30,000" value={data.avgViews} onChange={upd('avgViews')} /></div>
              </div>
              <div className="g2">
                <div><label style={labelStyle}>Years Active as Creator</label><input style={inputStyle} placeholder="e.g. 2" value={data.yearsActive} onChange={upd('yearsActive')} /></div>
                <div><label style={labelStyle}>Past Brand Collabs</label><input style={inputStyle} placeholder="Groww, Mamaearth, HDFC..." value={data.pastBrands} onChange={upd('pastBrands')} /></div>
              </div>
            </div>

            {/* Rates */}
            <div style={card}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Your Rates (₹)</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Fill only what's applicable — empty fields won't appear in the rate card.</p>
              <div className="g3" style={{ marginBottom: 12 }}>
                <div><label style={labelStyle}>Instagram Reel</label><input type="number" style={inputStyle} placeholder="e.g. 25000" value={data.reelRate} onChange={upd('reelRate')} /></div>
                <div><label style={labelStyle}>Static Post</label><input type="number" style={inputStyle} placeholder="e.g. 12000" value={data.staticRate} onChange={upd('staticRate')} /></div>
                <div><label style={labelStyle}>Story Package (3 frames)</label><input type="number" style={inputStyle} placeholder="e.g. 8000" value={data.storyRate} onChange={upd('storyRate')} /></div>
              </div>
              <div className="g2">
                <div><label style={labelStyle}>YouTube Dedicated Video</label><input type="number" style={inputStyle} placeholder="e.g. 50000" value={data.youtubeRate} onChange={upd('youtubeRate')} /></div>
                <div><label style={labelStyle}>YouTube Shorts</label><input type="number" style={inputStyle} placeholder="e.g. 15000" value={data.shortsRate} onChange={upd('shortsRate')} /></div>
              </div>
            </div>

            {/* Social links */}
            <div style={card}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Social Links & Achievements</div>
              <div className="g2" style={{ marginBottom: 12 }}>
                <div><label style={labelStyle}>Instagram URL</label><input style={inputStyle} placeholder="instagram.com/yourhandle" value={data.instagram} onChange={upd('instagram')} /></div>
                <div><label style={labelStyle}>YouTube URL</label><input style={inputStyle} placeholder="youtube.com/@yourchannel" value={data.youtube} onChange={upd('youtube')} /></div>
              </div>
              <div className="g3" style={{ marginBottom: 12 }}>
                <div><label style={labelStyle}>LinkedIn</label><input style={inputStyle} placeholder="linkedin.com/in/you" value={data.linkedin} onChange={upd('linkedin')} /></div>
                <div><label style={labelStyle}>Twitter/X</label><input style={inputStyle} placeholder="twitter.com/you" value={data.twitter} onChange={upd('twitter')} /></div>
                <div><label style={labelStyle}>Website</label><input style={inputStyle} placeholder="yourwebsite.com" value={data.website} onChange={upd('website')} /></div>
              </div>
              <div><label style={labelStyle}>Achievements & Highlights</label>
                <textarea style={{ ...inputStyle, minHeight: 70, lineHeight: 1.6 }} placeholder="10M+ total views, featured in Economic Times, won Best Finance Creator 2025..." value={data.achievements} onChange={upd('achievements')} />
              </div>
            </div>

            <button
              onClick={() => { if (data.name && data.email) setStep('preview') }}
              disabled={!data.name || !data.email}
              style={{ width: '100%', background: !data.name || !data.email ? 'rgba(255,107,43,0.3)' : '#FF6B2B', border: 'none', color: '#fff', padding: '17px 24px', borderRadius: 14, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, cursor: !data.name || !data.email ? 'not-allowed' : 'pointer', transition: 'all 0.2s' }}
            >
              Preview My Documents →
            </button>
            {(!data.name || !data.email) && <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginTop: 8 }}>Enter your name and email to continue</p>}
          </div>
        )}

        {/* ── STEP 2: PREVIEW & SELECT ── */}
        {step === 'preview' && (
          <div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 24, alignItems: 'center' }}>
              <button onClick={() => setStep('form')} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', borderRadius: 9, padding: '8px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                ← Edit Details
              </button>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Select what you want to download</div>
            </div>

            {/* Document selection */}
            <div className="doc-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginBottom: 24 }}>
              {docCards.map(doc => (
                <div
                  key={doc.key}
                  className={`doc-card${selected.has(doc.key) ? ' selected' : ''}`}
                  onClick={() => toggleSelect(doc.key)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                    <span style={{ fontSize: 32 }}>{doc.emoji}</span>
                    <div style={{ width: 22, height: 22, borderRadius: 6, border: `2px solid ${selected.has(doc.key) ? '#FF6B2B' : 'rgba(255,255,255,0.2)'}`, background: selected.has(doc.key) ? '#FF6B2B' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {selected.has(doc.key) && <span style={{ color: '#fff', fontSize: 13, fontWeight: 800 }}>✓</span>}
                    </div>
                  </div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16, marginBottom: 6 }}>{doc.title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, marginBottom: 12 }}>{doc.desc}</div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 18, color: '#FF8C5A' }}>₹{PRICES.cv}</div>
                </div>
              ))}
            </div>

            {/* Bundle offer */}
            <div
              onClick={() => setSelected(new Set(['cv', 'mediakit', 'ratecard']))}
              style={{ background: selected.size === 3 ? 'rgba(255,107,43,0.1)' : 'rgba(255,255,255,0.02)', border: `2px solid ${selected.size === 3 ? '#FF6B2B' : 'rgba(255,255,255,0.08)'}`, borderRadius: 16, padding: '18px 22px', marginBottom: 24, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}
            >
              <div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16, marginBottom: 4 }}>🎁 Full Bundle — All 3 Documents</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>CV + Media Kit + Rate Card in one zip file</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 22, color: '#FF8C5A' }}>₹99</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textDecoration: 'line-through' }}>₹147</div>
              </div>
            </div>

            {/* Preview panels — visual document previews */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14 }}>Document Previews</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }} className="doc-grid">

                {/* CV Preview */}
                <div style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
                  <div style={{ background: '#FF6B2B', padding: '12px 10px 10px', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    {data.photo && <img src={data.photo} alt="" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', border: '1.5px solid rgba(255,255,255,0.5)', flexShrink: 0 }} />}
                    <div>
                      <div style={{ color: '#fff', fontWeight: 800, fontSize: 11, fontFamily: 'sans-serif', lineHeight: 1.2 }}>{data.name || 'YOUR NAME'}</div>
                      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 8, fontFamily: 'sans-serif', marginTop: 2 }}>{data.niche} · {data.platform}</div>
                      <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 7, fontFamily: 'sans-serif', marginTop: 1 }}>{data.handle || '@handle'} · {data.city || 'City'}</div>
                    </div>
                  </div>
                  <div style={{ padding: '8px 10px', background: '#f8f8f8' }}>
                    {[['Followers', data.followers || '—'],['Engagement', data.engagementRate ? data.engagementRate+'%' : '—'],['Avg Views', data.avgViews || '—'],['Experience', data.yearsActive ? data.yearsActive+'yr' : '—']].map(([l,v]) => (
                      <div key={l} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '3px 0', fontSize: 7, fontFamily: 'sans-serif', color: '#333' }}>
                        <span style={{ color: '#777' }}>{l}</span><span style={{ fontWeight: 700 }}>{v}</span>
                      </div>
                    ))}
                    {data.pastBrands && <div style={{ marginTop: 6, fontSize: 7, fontFamily: 'sans-serif', color: '#FF6B2B', fontWeight: 700 }}>PAST BRANDS</div>}
                    {data.pastBrands && <div style={{ fontSize: 6.5, fontFamily: 'sans-serif', color: '#555', marginTop: 2, lineHeight: 1.4 }}>{data.pastBrands.slice(0,60)}</div>}
                    <div style={{ marginTop: 6, fontSize: 6, textAlign: 'center', color: '#aaa', fontFamily: 'sans-serif' }}>identitykit.in</div>
                  </div>
                  <div style={{ background: '#FF6B2B', padding: '4px 10px', textAlign: 'center' }}>
                    <div style={{ color: '#fff', fontSize: 7, fontWeight: 700, fontFamily: 'sans-serif' }}>📄 Creator CV</div>
                  </div>
                </div>

                {/* Media Kit Preview */}
                <div style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
                  <div style={{ background: 'linear-gradient(135deg,#FF6B2B,#FF4500)', padding: '12px 10px 10px' }}>
                    {data.photo && <img src={data.photo} alt="" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', border: '2px solid #fff', display: 'block', margin: '0 auto 6px' }} />}
                    <div style={{ color: '#fff', fontWeight: 800, fontSize: 11, fontFamily: 'sans-serif', textAlign: 'center' }}>{data.name || 'YOUR NAME'}</div>
                    <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 7.5, fontFamily: 'sans-serif', textAlign: 'center', marginTop: 2 }}>{data.niche} Content Creator</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 7, fontFamily: 'sans-serif', textAlign: 'center', marginTop: 1 }}>{data.handle || '@handle'}</div>
                  </div>
                  <div style={{ padding: '8px 10px', background: '#f8f8f8' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 6 }}>
                      {[['👥',data.followers||'—','Followers'],['💥',data.engagementRate?(data.engagementRate+'%'):'—','Engagement'],['👁',data.avgViews||'—','Avg Views'],['📱',data.platform,'Platform']].map(([icon,val,lbl]) => (
                        <div key={lbl as string} style={{ background: '#fff', borderRadius: 6, padding: '4px 6px', textAlign: 'center', border: '1px solid #eee' }}>
                          <div style={{ fontSize: 9 }}>{icon as string}</div>
                          <div style={{ fontSize: 8, fontWeight: 800, fontFamily: 'sans-serif', color: '#FF6B2B' }}>{val as string}</div>
                          <div style={{ fontSize: 6, fontFamily: 'sans-serif', color: '#888' }}>{lbl as string}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: '#FF6B2B', borderRadius: 5, padding: '3px 6px', fontSize: 7, color: '#fff', fontWeight: 700, fontFamily: 'sans-serif', textAlign: 'center' }}>CONTENT FORMATS & RATES →</div>
                    <div style={{ marginTop: 4, fontSize: 6, textAlign: 'center', color: '#aaa', fontFamily: 'sans-serif' }}>identitykit.in</div>
                  </div>
                  <div style={{ background: '#FF6B2B', padding: '4px 10px', textAlign: 'center' }}>
                    <div style={{ color: '#fff', fontSize: 7, fontWeight: 700, fontFamily: 'sans-serif' }}>🎨 Media Kit</div>
                  </div>
                </div>

                {/* Rate Card Preview */}
                <div style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
                  <div style={{ background: '#FF6B2B', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ color: '#fff', fontWeight: 800, fontSize: 10, fontFamily: 'sans-serif' }}>{data.name || 'YOUR NAME'}</div>
                      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 7, fontFamily: 'sans-serif', marginTop: 1 }}>RATE CARD 2026</div>
                    </div>
                    {data.photo && <img src={data.photo} alt="" style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover', border: '1.5px solid rgba(255,255,255,0.5)' }} />}
                  </div>
                  <div style={{ padding: '8px 10px', background: '#f8f8f8' }}>
                    <div style={{ fontSize: 7, fontWeight: 700, color: '#FF6B2B', fontFamily: 'sans-serif', marginBottom: 4 }}>DELIVERABLE RATES</div>
                    {[
                      ['Instagram Reel', data.reelRate ? 'Rs.'+data.reelRate : '—'],
                      ['Static Post', data.staticRate ? 'Rs.'+data.staticRate : '—'],
                      ['Story (3 frames)', data.storyRate ? 'Rs.'+data.storyRate : '—'],
                      ['YouTube Video', data.youtubeRate ? 'Rs.'+data.youtubeRate : '—'],
                      ['YouTube Shorts', data.shortsRate ? 'Rs.'+data.shortsRate : '—'],
                    ].map(([item,price]) => (
                      <div key={item} style={{ display: 'flex', justifyContent: 'space-between', padding: '2.5px 0', borderBottom: '1px solid #eee', fontSize: 7, fontFamily: 'sans-serif', color: '#333' }}>
                        <span>{item}</span><span style={{ fontWeight: 700, color: price === '—' ? '#ccc' : '#FF6B2B' }}>{price}</span>
                      </div>
                    ))}
                    <div style={{ marginTop: 5, fontSize: 6, fontFamily: 'sans-serif', color: '#888' }}>50% advance · TDS applicable</div>
                    <div style={{ marginTop: 4, fontSize: 6, textAlign: 'center', color: '#aaa', fontFamily: 'sans-serif' }}>identitykit.in</div>
                  </div>
                  <div style={{ background: '#FF6B2B', padding: '4px 10px', textAlign: 'center' }}>
                    <div style={{ color: '#fff', fontSize: 7, fontWeight: 700, fontFamily: 'sans-serif' }}>💰 Rate Card</div>
                  </div>
                </div>

              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: 10 }}>
                ↑ Visual preview of your documents based on the details you entered
              </div>
            </div>

            {/* Checkout */}
            {selected.size > 0 && (
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 18, padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16 }}>Order Summary</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{getLabel()}</div>
                  </div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 28, color: '#FF8C5A' }}>₹{getPrice()}</div>
                </div>
                <button
                  onClick={handleDownload}
                  disabled={paying || downloading}
                  style={{ width: '100%', background: paying || downloading ? 'rgba(255,107,43,0.4)' : '#FF6B2B', border: 'none', color: '#fff', padding: '16px 24px', borderRadius: 12, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16, cursor: paying || downloading ? 'not-allowed' : 'pointer', transition: 'all 0.2s' }}
                >
                  {paying ? '⏳ Opening payment...' : downloading ? '⬇ Downloading...' : `Pay ₹${getPrice()} & Download →`}
                </button>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 14, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
                  <span>🔒 Secure payment via Razorpay</span>
                  <span>📥 Instant download after payment</span>
                  <span>💳 UPI, Cards, Net Banking</span>
                </div>
              </div>
            )}

            {selected.size === 0 && (
              <div style={{ textAlign: 'center', padding: '20px', color: 'rgba(255,255,255,0.3)', fontSize: 14 }}>
                Select at least one document above to continue
              </div>
            )}
          </div>
        )}

        {/* ── STEP 3: SUCCESS ── */}
        {step === 'download' && (
          <div style={{ textAlign: 'center', padding: '48px 24px' }}>
            <div style={{ fontSize: 64, marginBottom: 20 }}>🎉</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 28, marginBottom: 12 }}>Download Complete!</div>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 440, margin: '0 auto 32px', lineHeight: 1.7 }}>
              Your {selected.size === 3 ? 'Creator Kit zip file has' : 'PDF has'} been downloaded. Share it with brands to close more deals.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => { setStep('form'); setSelected(new Set()) }} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: 12, padding: '12px 24px', fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                Generate for another creator
              </button>
              <Link href="/auth?mode=signup" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 12, padding: '12px 24px', fontWeight: 800, fontSize: 14 }}>
                Also create my free Identity Kit profile →
              </Link>
            </div>
          </div>
        )}

        {/* WHY section — shown on form step */}
        {step === 'form' && (
          <div style={{ marginTop: 52 }}>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.5px' }}>What You'll Get</h2>
            <div className="g3">
              {docCards.map(doc => (
                <div key={doc.key} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px' }}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{doc.emoji}</div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{doc.title}</div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{doc.desc}</p>
                  <div style={{ marginTop: 12, fontFamily: "'Syne',sans-serif", fontWeight: 800, color: '#FF8C5A', fontSize: 16 }}>₹49</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/tools" style={{ fontSize: 14, color: '#FF6B2B' }}>All Tools</Link>
          <Link href="/blog" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Blog</Link>
          <Link href="/about" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>About</Link>
          <Link href="/privacy" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Privacy</Link>
          <Link href="/terms" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Terms</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit. Made with ❤️ for Indian creators.</p>
      </footer>
    </div>
  )
}
