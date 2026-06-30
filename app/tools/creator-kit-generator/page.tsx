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
    const format = photo.startsWith('data:image/png') ? 'PNG' : 'JPEG'
    const base64 = photo.split(',')[1] || photo
    doc.addImage(base64, format, x, y, size, size)
    doc.setDrawColor(255, 107, 43)
    doc.setLineWidth(1.5)
    doc.circle(x + size / 2, y + size / 2, size / 2, 'S')
  } catch (e) {
    console.warn('Could not add profile image:', e)
  }
}

// Helper — draw a rounded dark card (simulated since jsPDF has limited rounded rect support)
function darkCard(doc: InstanceType<typeof import('jspdf').jsPDF>, x: number, y: number, w: number, h: number, fill: [number,number,number] = [17,17,32]) {
  doc.setFillColor(...fill)
  doc.roundedRect(x, y, w, h, 3, 3, 'F')
}

// Helper — draw orange section label like Identity Kit sidebar labels
function sectionLabel(doc: InstanceType<typeof import('jspdf').jsPDF>, text: string, x: number, y: number, w: number) {
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7)
  doc.setTextColor(255, 107, 43)
  doc.text(text.toUpperCase(), x, y)
  doc.setDrawColor(255, 107, 43)
  doc.setLineWidth(0.2)
  doc.line(x, y + 1.5, x + w, y + 1.5)
}

// ── PDF Generators ────────────────────────────────────────────────────────────

async function generateCVPdf(data: CreatorData) {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const W = 210, H = 297, M = 12

  // Color palette matching Identity Kit exactly
  const BG:    [number,number,number] = [8,  8,  14]   // #08080E
  const CARD:  [number,number,number] = [17, 17, 32]   // #111120
  const CARD2: [number,number,number] = [12, 12, 24]   // #0C0C18
  const OG:    [number,number,number] = [255,107,43]   // #FF6B2B
  const OGL:   [number,number,number] = [255,140,90]   // #FF8C5A
  const WHITE: [number,number,number] = [255,255,255]
  const DIM:   [number,number,number] = [180,180,200]  // rgba(255,255,255,0.7)
  const DIM2:  [number,number,number] = [100,100,120]  // rgba(255,255,255,0.4)
  const DIM3:  [number,number,number] = [55, 55, 75]   // rgba(255,255,255,0.2)

  // Full page dark background
  doc.setFillColor(...BG)
  doc.rect(0, 0, W, H, 'F')

  // ── HEADER BANNER (grid pattern background like Identity Kit) ──
  doc.setFillColor(14, 14, 28)
  doc.rect(0, 0, W, 52, 'F')
  // Orange radial glow effect — simulate with gradient circles
  doc.setFillColor(35, 18, 8)
  doc.ellipse(W/2, 26, 80, 30, 'F')
  doc.setFillColor(14, 14, 28)
  doc.ellipse(W/2, 26, 60, 22, 'F')

  // Subtle grid lines
  doc.setDrawColor(255, 107, 43, 0.06)
  doc.setLineWidth(0.15)
  for (let gx = 0; gx < W; gx += 10) { doc.line(gx, 0, gx, 52) }
  for (let gy = 0; gy < 52; gy += 10) { doc.line(0, gy, W, gy) }

  // Profile photo — top-left of header
  const photoSize = 28
  const photoX = M
  const photoY = 12
  if (data.photo) {
    addProfileImage(doc, data.photo, photoX, photoY, photoSize)
  } else {
    doc.setFillColor(30, 30, 46)
    doc.circle(photoX + photoSize/2, photoY + photoSize/2, photoSize/2, 'F')
    doc.setFont('helvetica', 'bold'); doc.setFontSize(12); doc.setTextColor(...OG)
    doc.text((data.name || 'CK')[0].toUpperCase(), photoX + photoSize/2, photoY + photoSize/2 + 4, { align: 'center' })
    doc.setDrawColor(...OG); doc.setLineWidth(1.2)
    doc.circle(photoX + photoSize/2, photoY + photoSize/2, photoSize/2, 'S')
  }

  // Name & meta
  const tx = M + photoSize + 8
  doc.setFont('helvetica', 'bold'); doc.setFontSize(7); doc.setTextColor(...OG)
  doc.text('CREATOR CV', tx, 16)
  doc.setFont('helvetica', 'bold'); doc.setFontSize(18); doc.setTextColor(...WHITE)
  doc.text(data.name || 'Creator Name', tx, 26)
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(...DIM2)
  doc.text(`${data.niche} Creator · ${data.platform}`, tx, 33)
  // Contact row
  const contacts = [data.city, data.email, data.handle].filter(Boolean)
  doc.setFontSize(7.5); doc.setTextColor(...DIM3)
  doc.text(contacts.join('  ·  '), tx, 39)

  // "Open for collabs" badge
  doc.setFillColor(10, 50, 20)
  doc.roundedRect(W - M - 40, 14, 40, 9, 4, 4, 'F')
  doc.setDrawColor(34, 197, 94); doc.setLineWidth(0.3)
  doc.roundedRect(W - M - 40, 14, 40, 9, 4, 4, 'S')
  doc.setFillColor(34, 197, 94); doc.circle(W - M - 36, 18.5, 1.5, 'F')
  doc.setFont('helvetica', 'bold'); doc.setFontSize(6.5); doc.setTextColor(34, 197, 94)
  doc.text('Open for collabs', W - M - 33, 19.2)

  // identitykit.in watermark
  doc.setFont('helvetica', 'bold'); doc.setFontSize(7); doc.setTextColor(255, 107, 43)
  doc.text('identitykit.in', W - M, 46, { align: 'right' })

  let y = 60

  // ── TWO COLUMN LAYOUT ──
  const leftW = 58, rightX = M + leftW + 6, rightW = W - rightX - M

  // LEFT CARD background
  darkCard(doc, M, y, leftW, 218, CARD)

  // RIGHT CARD background
  darkCard(doc, rightX, y, rightW, 218, CARD2)

  // ── LEFT SIDEBAR ──
  let lY = y + 10

  // Key Stats section
  sectionLabel(doc, 'Key Stats', M + 6, lY, leftW - 12)
  lY += 6

  const stats = [
    [data.followers || '—', 'Followers'],
    [data.engagementRate ? data.engagementRate + '%' : '—', 'Engagement'],
    [data.avgViews || '—', 'Avg Views'],
    [data.yearsActive ? data.yearsActive + ' yr' : '—', 'Experience'],
  ]
  stats.forEach(([val, lbl]) => {
    darkCard(doc, M + 6, lY, leftW - 12, 14, BG)
    doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(...OG)
    doc.text(val, M + 12, lY + 8)
    doc.setFont('helvetica', 'normal'); doc.setFontSize(6.5); doc.setTextColor(...DIM3)
    doc.text(lbl.toUpperCase(), M + 12, lY + 13)
    lY += 17
  })

  lY += 4

  // Platforms
  if (data.platform) {
    sectionLabel(doc, 'Platforms', M + 6, lY, leftW - 12)
    lY += 6
    const plats = data.platform.split(',').map((p: string) => p.trim())
    plats.forEach((p: string) => {
      doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(...DIM)
      doc.text(`• ${p}`, M + 8, lY); lY += 5
    })
    lY += 4
  }

  // Languages
  if (data.languages) {
    sectionLabel(doc, 'Languages', M + 6, lY, leftW - 12)
    lY += 6
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(...DIM2)
    doc.text(data.languages, M + 8, lY); lY += 8
  }

  // Skills / Niche
  if (data.subNiche) {
    sectionLabel(doc, 'Niche Focus', M + 6, lY, leftW - 12)
    lY += 6
    doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(...DIM2)
    const niL = doc.splitTextToSize(data.niche + ' · ' + data.subNiche, leftW - 12)
    doc.text(niL, M + 8, lY); lY += niL.length * 4.5
  }

  // ── RIGHT CONTENT ──
  let rY = y + 10

  // About
  sectionLabel(doc, 'About', rightX + 6, rY, rightW - 12)
  rY += 7
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(...DIM)
  const bioText = data.bio || `${data.name} is a ${data.niche} creator based in ${data.city} with ${data.followers} followers on ${data.platform}. Known for authentic, high-engagement content that connects with Indian audiences.`
  const bioLines = doc.splitTextToSize(bioText, rightW - 12)
  doc.text(bioLines, rightX + 6, rY)
  rY += bioLines.length * 5 + 8

  // Brand Collaborations
  if (data.pastBrands) {
    sectionLabel(doc, 'Brand Collaborations', rightX + 6, rY, rightW - 12)
    rY += 7
    const brands = data.pastBrands.split(',').map((b: string) => b.trim()).filter(Boolean)
    brands.forEach((b: string, i: number) => {
      // Brand pill
      const bw2 = doc.getTextWidth(b) + 10
      darkCard(doc, rightX + 6 + (i % 3) * 44, rY + Math.floor(i/3) * 11, Math.min(bw2, 41), 8, BG)
      doc.setDrawColor(...DIM3); doc.setLineWidth(0.2)
      doc.roundedRect(rightX + 6 + (i % 3) * 44, rY + Math.floor(i/3) * 11, Math.min(bw2, 41), 8, 2, 2, 'S')
      doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(...DIM2)
      doc.text(b.slice(0,14), rightX + 6 + (i % 3) * 44 + 5, rY + Math.floor(i/3) * 11 + 5.5)
    })
    rY += Math.ceil(brands.length / 3) * 11 + 8
  }

  // Achievements
  if (data.achievements) {
    sectionLabel(doc, 'Awards & Highlights', rightX + 6, rY, rightW - 12)
    rY += 7
    // Left-border highlight box
    doc.setFillColor(15, 10, 5)
    doc.roundedRect(rightX + 6, rY, rightW - 12, 20, 2, 2, 'F')
    doc.setFillColor(...OG); doc.rect(rightX + 6, rY, 2, 20, 'F')
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(...DIM2)
    const achLines = doc.splitTextToSize(data.achievements, rightW - 22)
    doc.text(achLines, rightX + 12, rY + 6)
    rY += 26
  }

  // What I offer brands (rates preview)
  const rateItems = [
    data.reelRate && ['Instagram Reel', 'Rs.' + parseInt(data.reelRate).toLocaleString('en-IN')],
    data.staticRate && ['Static Post', 'Rs.' + parseInt(data.staticRate).toLocaleString('en-IN')],
    data.storyRate && ['Story Pack', 'Rs.' + parseInt(data.storyRate).toLocaleString('en-IN')],
    data.youtubeRate && ['YouTube Video', 'Rs.' + parseInt(data.youtubeRate).toLocaleString('en-IN')],
    data.shortsRate && ['YT Shorts', 'Rs.' + parseInt(data.shortsRate).toLocaleString('en-IN')],
  ].filter(Boolean)

  if (rateItems.length > 0) {
    sectionLabel(doc, 'What I Offer Brands', rightX + 6, rY, rightW - 12)
    rY += 7
    rateItems.slice(0, 4).forEach(([name, rate]: any) => {
      darkCard(doc, rightX + 6, rY, rightW - 12, 9, BG)
      doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(...DIM2)
      doc.text(name, rightX + 12, rY + 6)
      doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(...OG)
      doc.text(rate, rightX + rightW - 18, rY + 6, { align: 'right' })
      rY += 11
    })
  }

  // ── CV FOOTER ──
  const footY = y + 224
  doc.setFillColor(...CARD)
  doc.rect(0, footY, W, 12, 'F')
  doc.setDrawColor(...DIM3); doc.setLineWidth(0.2)
  doc.line(0, footY, W, footY)
  doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...DIM3)
  doc.text(`Identity Kit · identitykit.in`, M, footY + 7.5)
  if (data.email) { doc.setTextColor(...OG); doc.text(data.email, W - M, footY + 7.5, { align: 'right' }) }

  return doc
}

async function generateMediaKitPdf(data: CreatorData) {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const W = 210, H = 297, M = 12

  const BG:    [number,number,number] = [8,  8,  14]
  const CARD:  [number,number,number] = [17, 17, 32]
  const OG:    [number,number,number] = [255,107,43]
  const WHITE: [number,number,number] = [255,255,255]
  const DIM:   [number,number,number] = [180,180,200]
  const DIM2:  [number,number,number] = [100,100,120]
  const DIM3:  [number,number,number] = [55, 55, 75]

  // Full page background
  doc.setFillColor(...BG)
  doc.rect(0, 0, W, H, 'F')

  // ── MEDIA KIT HEADER — gradient card with photo ──
  doc.setFillColor(26, 8, 0)
  doc.roundedRect(M, 10, W - M*2, 58, 4, 4, 'F')
  // orange glow
  doc.setFillColor(40, 18, 5)
  doc.ellipse(W - M - 30, 39, 40, 25, 'F')
  // orange top-right corner accent
  doc.setFillColor(...OG)
  doc.circle(W - M, 10, 5, 'F')

  // Photo — centered left side
  const pSize = 30
  const pX = M + 12, pY = 23
  if (data.photo) {
    addProfileImage(doc, data.photo, pX, pY, pSize)
  } else {
    doc.setFillColor(30, 20, 10)
    doc.circle(pX + pSize/2, pY + pSize/2, pSize/2, 'F')
    doc.setFont('helvetica', 'bold'); doc.setFontSize(14); doc.setTextColor(...OG)
    doc.text((data.name || 'C')[0].toUpperCase(), pX + pSize/2, pY + pSize/2 + 5, { align: 'center' })
    doc.setDrawColor(...OG); doc.setLineWidth(1.5)
    doc.circle(pX + pSize/2, pY + pSize/2, pSize/2, 'S')
  }

  // Labels next to photo
  const lx = pX + pSize + 8
  doc.setFont('helvetica', 'bold'); doc.setFontSize(7); doc.setTextColor(...OG)
  doc.text('MEDIA KIT', lx, 20)
  doc.setFont('helvetica', 'bold'); doc.setFontSize(20); doc.setTextColor(...WHITE)
  doc.text(data.name || 'Creator', lx, 31)
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(...DIM2)
  doc.text(`${data.niche} · ${data.city} · ${data.languages || 'Hindi, English'}`, lx, 39)
  doc.setFontSize(8); doc.setTextColor(...DIM3)
  doc.text(data.handle || '', lx, 46)

  // Stats strip inside header card
  const statsY = 58
  doc.setDrawColor(...DIM3); doc.setLineWidth(0.2)
  doc.line(M + 8, statsY, W - M - 8, statsY)
  const statItems = [
    [data.followers || '—', 'Followers'],
    [data.engagementRate ? data.engagementRate + '%' : '—', 'Engagement'],
    [data.avgViews || '—', 'Avg Views'],
    [data.yearsActive ? data.yearsActive + ' yr' : '—', 'Experience'],
  ]
  const sw = (W - M*2 - 16) / 4
  statItems.forEach(([val, lbl], i) => {
    doc.setFont('helvetica', 'bold'); doc.setFontSize(14); doc.setTextColor(...OG)
    doc.text(val, M + 8 + sw * i + sw/2, statsY + 10, { align: 'center' })
    doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...DIM3)
    doc.text(lbl.toUpperCase(), M + 8 + sw * i + sw/2, statsY + 16, { align: 'center' })
  })

  let y = 80

  // ── PLATFORM + AUDIENCE row ──
  const hW = (W - M*2 - 6) / 2
  darkCard(doc, M, y, hW, 48, CARD)
  darkCard(doc, M + hW + 6, y, hW, 48, CARD)

  // Platform breakdown (left card)
  sectionLabel(doc, 'Platform Breakdown', M + 6, y + 8, hW - 12)
  let pY2 = y + 16
  const platPairs = [
    ['Instagram', data.followers, data.engagementRate ? data.engagementRate + '% eng' : ''],
    data.youtubeRate ? ['YouTube', data.avgViews, ''] : null,
    data.platform?.includes('LinkedIn') ? ['LinkedIn', '', ''] : null,
  ].filter(Boolean) as string[][]
  platPairs.slice(0,3).forEach(([p, f, s]) => {
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(...DIM)
    doc.text(p, M + 8, pY2)
    if (f) { doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(...WHITE); doc.text(f, M + hW - 6, pY2, { align: 'right' }) }
    if (s) { doc.setFontSize(7); doc.setTextColor(...DIM3); doc.text(s, M + 8, pY2 + 4.5) }
    pY2 += 12
  })

  // Audience (right card)
  sectionLabel(doc, 'Audience', M + hW + 12, y + 8, hW - 12)
  let aY = y + 16
  const audItems = [
    ['Age group', '18–35 years'],
    ['Location', (data.city || '') + ' & Pan India'],
    ['Language', data.languages || 'Hindi, English'],
    ['Niche', data.niche],
  ]
  audItems.forEach(([l, v]) => {
    doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(...DIM3)
    doc.text(l, M + hW + 12, aY)
    doc.setTextColor(...DIM2); doc.text(v, M + hW + 45, aY)
    aY += 9
  })

  y += 54

  // ── CONTENT FORMATS ──
  darkCard(doc, M, y, W - M*2, 42, CARD)
  sectionLabel(doc, 'Content I Create', M + 6, y + 9, W - M*2 - 12)
  const fmts = [
    { label: 'Reels & Shorts', show: !!(data.reelRate || data.shortsRate) },
    { label: 'Static Posts', show: !!data.staticRate },
    { label: 'Carousels', show: !!data.staticRate },
    { label: 'YouTube Videos', show: !!data.youtubeRate },
    { label: 'Stories', show: !!data.storyRate },
    { label: 'Integrations', show: !!(data.youtubeRate || data.reelRate) },
  ]
  const activeFmts = fmts.filter(f => f.show)
  const fCols = 3, fW = (W - M*2 - 12 - (fCols-1)*6) / fCols
  activeFmts.forEach(({ label }, i) => {
    const fx = M + 6 + (i % fCols) * (fW + 6)
    const fy = y + 16 + Math.floor(i / fCols) * 12
    doc.setFillColor(14, 14, 30)
    doc.roundedRect(fx, fy, fW, 10, 2, 2, 'F')
    doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(...DIM2)
    doc.text(label, fx + fW/2, fy + 6.5, { align: 'center' })
  })
  y += 48

  // ── BRAND COLLABORATIONS ──
  if (data.pastBrands) {
    darkCard(doc, M, y, W - M*2, 44, CARD)
    sectionLabel(doc, 'Past Brand Collaborations', M + 6, y + 9, W - M*2 - 12)
    const brands = data.pastBrands.split(',').map((b: string) => b.trim()).filter(Boolean)
    const bPerRow = 5, bW = (W - M*2 - 12 - (bPerRow-1)*4) / bPerRow
    brands.slice(0, 10).forEach((b: string, i: number) => {
      const bx = M + 6 + (i % bPerRow) * (bW + 4)
      const by = y + 16 + Math.floor(i / bPerRow) * 11
      doc.setFillColor(14, 14, 26)
      doc.roundedRect(bx, by, bW, 8, 1.5, 1.5, 'F')
      doc.setDrawColor(...DIM3); doc.setLineWidth(0.2)
      doc.roundedRect(bx, by, bW, 8, 1.5, 1.5, 'S')
      doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...DIM2)
      doc.text(b.slice(0, 12), bx + bW/2, by + 5.5, { align: 'center' })
    })
    if (data.achievements) {
      const hy = y + 38
      doc.setFillColor(10, 6, 2)
      doc.roundedRect(M + 6, hy, W - M*2 - 12, 3, 1, 1, 'F')
      doc.setFillColor(...OG); doc.rect(M + 6, hy, 2, 3, 'F')
    }
    y += 50
  }

  // ── PACKAGES / RATES ──
  const rateList = [
    data.reelRate && ['Instagram Reel (60 sec)', data.reelRate],
    data.staticRate && ['Static Post / Carousel', data.staticRate],
    data.storyRate && ['Stories Pack (3 frames)', data.storyRate],
    data.youtubeRate && ['YouTube Dedicated Video', data.youtubeRate],
    data.shortsRate && ['YouTube Shorts', data.shortsRate],
  ].filter(Boolean) as [string, string][]

  if (rateList.length > 0) {
    darkCard(doc, M, y, W - M*2, 14 + rateList.length * 12, CARD)
    sectionLabel(doc, 'Packages & Starting Rates', M + 6, y + 9, W - M*2 - 12)
    rateList.forEach(([name, rate], i) => {
      const ry = y + 16 + i * 12
      doc.setFillColor(14, 14, 28)
      doc.roundedRect(M + 6, ry, W - M*2 - 12, 10, 2, 2, 'F')
      doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(...DIM)
      doc.text(name, M + 12, ry + 6.5)
      doc.setFont('helvetica', 'bold'); doc.setFontSize(9); doc.setTextColor(...OG)
      doc.text('Rs.' + parseInt(rate).toLocaleString('en-IN'), W - M - 6, ry + 6.5, { align: 'right' })
    })
    y += 20 + rateList.length * 12
  }

  // ── FOOTER ──
  const fY = H - 16
  doc.setDrawColor(...DIM3); doc.setLineWidth(0.2)
  doc.line(M, fY, W - M, fY)
  doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...DIM3)
  doc.text(`Identity Kit · identitykit.in/${data.handle?.replace('@','')}`, M, fY + 6)
  if (data.email) { doc.setTextColor(...OG); doc.text(data.email, W - M, fY + 6, { align: 'right' }) }

  return doc
}

async function generateRateCardPdf(data: CreatorData) {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const W = 210, H = 297, M = 12

  const BG:    [number,number,number] = [8,  8,  14]
  const CARD:  [number,number,number] = [17, 17, 32]
  const CARD2: [number,number,number] = [14, 14, 28]
  const OG:    [number,number,number] = [255,107,43]
  const OGL:   [number,number,number] = [255,140,90]
  const WHITE: [number,number,number] = [255,255,255]
  const DIM:   [number,number,number] = [180,180,200]
  const DIM2:  [number,number,number] = [100,100,120]
  const DIM3:  [number,number,number] = [55, 55, 75]

  // Background
  doc.setFillColor(...BG)
  doc.rect(0, 0, W, H, 'F')

  // ── RATE CARD HEADER — dark card with name + photo ──
  darkCard(doc, M, 10, W - M*2, 44, CARD)

  // Photo
  const pSize = 26
  if (data.photo) {
    addProfileImage(doc, data.photo, W - M - pSize - 6, 18, pSize)
  }

  // Rate Card label
  doc.setFont('helvetica', 'bold'); doc.setFontSize(7); doc.setTextColor(...OG)
  doc.text('RATE CARD', M + 8, 19)
  // Name
  doc.setFont('helvetica', 'bold'); doc.setFontSize(20); doc.setTextColor(...WHITE)
  doc.text(data.name || 'Creator', M + 8, 30)
  // Niche + handle
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(...DIM2)
  doc.text(`${data.niche} · ${data.handle || ''}`, M + 8, 38)
  doc.setFontSize(7.5); doc.setTextColor(...DIM3)
  doc.text(`identitykit.in`, M + 8, 46)

  // Valid till badge top-right
  doc.setFillColor(20, 20, 36)
  doc.roundedRect(W - M - 50, 18, 50, 9, 3, 3, 'F')
  doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...DIM3)
  const yr = new Date().getFullYear()
  doc.text(`Valid till Dec ${yr}`, W - M - 48, 23.5)

  let y = 62

  // ── STATS ROW — 3 bento boxes ──
  const sW = (W - M*2 - 12) / 3
  const statBoxes = [
    [data.followers || '—', 'Followers'],
    [(data.engagementRate || '—') + (data.engagementRate ? '%' : ''), 'Engagement Rate'],
    [data.avgViews || '—', 'Avg Views / Reach'],
  ]
  statBoxes.forEach(([val, lbl], i) => {
    darkCard(doc, M + i * (sW + 6), y, sW, 20, CARD)
    doc.setFont('helvetica', 'bold'); doc.setFontSize(14); doc.setTextColor(...OG)
    doc.text(val, M + i * (sW + 6) + sW/2, y + 12, { align: 'center' })
    doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...DIM3)
    doc.text(lbl.toUpperCase(), M + i * (sW + 6) + sW/2, y + 18, { align: 'center' })
  })
  y += 28

  // ── INSTAGRAM RATES ──
  const igRates = [
    data.reelRate && ['Dedicated Reel', '60 sec · 3–5 days · 2 revisions', data.reelRate, '#e1306c'],
    data.staticRate && ['Static Post', '1 post · caption included', data.staticRate, '#e1306c'],
    data.staticRate && ['Carousel', '5–8 slides · 2 revisions', data.staticRate, '#e1306c'],
    data.storyRate && ['Stories Pack', '3 slides · link in bio', data.storyRate, '#e1306c'],
  ].filter(Boolean) as [string, string, string, string][]

  if (igRates.length > 0) {
    darkCard(doc, M, y, W - M*2, 14 + igRates.length * 13, CARD)
    // Instagram section header
    doc.setFillColor(225, 48, 108, 0.1)
    doc.roundedRect(M + 6, y + 6, 24, 8, 2, 2, 'F')
    doc.setFillColor(30, 8, 16)
    doc.roundedRect(M + 6, y + 6, 24, 8, 2, 2, 'F')
    doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(225, 48, 108)
    doc.text('Instagram', M + 10, y + 11.5)
    if (data.handle) { doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...DIM3); doc.text(data.handle, M + 36, y + 11.5) }

    igRates.forEach(([name, desc, rate], i) => {
      const ry = y + 16 + i * 13
      doc.setDrawColor(...DIM3); doc.setLineWidth(0.15)
      if (i > 0) doc.line(M + 6, ry - 1, W - M - 6, ry - 1)
      // Row icon box
      doc.setFillColor(30, 8, 16)
      doc.roundedRect(M + 6, ry + 1, 9, 9, 1.5, 1.5, 'F')
      doc.setFont('helvetica', 'bold'); doc.setFontSize(7); doc.setTextColor(225, 48, 108)
      doc.text('IG', M + 7, ry + 7.5)
      doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(...DIM)
      doc.text(name, M + 18, ry + 6.5)
      doc.setFontSize(7); doc.setTextColor(...DIM3)
      doc.text(desc, M + 18, ry + 11)
      doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(...OG)
      doc.text('Rs.' + parseInt(rate).toLocaleString('en-IN'), W - M - 6, ry + 7, { align: 'right' })
    })
    y += 20 + igRates.length * 13
  }

  // ── YOUTUBE RATES ──
  const ytRates = [
    data.youtubeRate && ['Dedicated Video', '8–15 min · 5–7 days', data.youtubeRate, '#ff0000'],
    data.youtubeRate && ['Integration', '60–90 sec in existing video', Math.round(parseInt(data.youtubeRate)*0.6).toString(), '#ff0000'],
    data.shortsRate && ['YouTube Short', '60 sec · 3–5 days', data.shortsRate, '#ff0000'],
  ].filter(Boolean) as [string, string, string, string][]

  if (ytRates.length > 0) {
    darkCard(doc, M, y, W - M*2, 14 + ytRates.length * 13, CARD)
    doc.setFillColor(20, 5, 5)
    doc.roundedRect(M + 6, y + 6, 24, 8, 2, 2, 'F')
    doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(255, 40, 40)
    doc.text('YouTube', M + 9, y + 11.5)

    ytRates.forEach(([name, desc, rate], i) => {
      const ry = y + 16 + i * 13
      doc.setDrawColor(...DIM3); doc.setLineWidth(0.15)
      if (i > 0) doc.line(M + 6, ry - 1, W - M - 6, ry - 1)
      doc.setFillColor(20, 5, 5)
      doc.roundedRect(M + 6, ry + 1, 9, 9, 1.5, 1.5, 'F')
      doc.setFont('helvetica', 'bold'); doc.setFontSize(7); doc.setTextColor(255, 40, 40)
      doc.text('YT', M + 7.5, ry + 7.5)
      doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(...DIM)
      doc.text(name, M + 18, ry + 6.5)
      doc.setFontSize(7); doc.setTextColor(...DIM3)
      doc.text(desc, M + 18, ry + 11)
      doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(...OG)
      doc.text('Rs.' + parseInt(rate).toLocaleString('en-IN'), W - M - 6, ry + 7, { align: 'right' })
    })
    y += 20 + ytRates.length * 13
  }

  // ── TERMS & NOTES ──
  const terms = [
    '50% advance payment required before work begins',
    'Rates exclusive of 18% GST — invoice provided on request',
    'Usage rights: Brand owned channels for 6 months',
    '1 free revision per deliverable · Additional charged separately',
    'ASCI-compliant paid partnership disclosure on all content',
  ]
  darkCard(doc, M, y, W - M*2, 12 + terms.length * 8, CARD)
  sectionLabel(doc, 'Terms & Notes', M + 6, y + 9, W - M*2 - 12)
  terms.forEach((t, i) => {
    const ty = y + 16 + i * 8
    doc.setFillColor(...OG)
    doc.circle(M + 8, ty - 1, 1, 'F')
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(...DIM2)
    doc.text(t, M + 12, ty)
  })
  y += 18 + terms.length * 8

  // ── FOOTER ──
  doc.setDrawColor(...DIM3); doc.setLineWidth(0.2)
  doc.line(M, H - 16, W - M, H - 16)
  doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...DIM3)
  if (data.email) doc.text(`${data.email} · ${data.phone || ''}`, M, H - 10)
  doc.setFillColor(20, 20, 36)
  doc.roundedRect(W - M - 30, H - 14, 30, 8, 2, 2, 'F')
  doc.setFont('helvetica', 'bold'); doc.setFontSize(7); doc.setTextColor(...DIM3)
  doc.text('IDENTITY KIT', W - M - 15, H - 9, { align: 'center' })

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
  const [generatingBio, setGeneratingBio] = useState(false)
  const [bioError, setBioError] = useState('')
  const [zoomedDoc, setZoomedDoc] = useState<'cv' | 'mediakit' | 'ratecard' | null>(null)
  const [downloading, setDownloading] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const upd = (field: keyof CreatorData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setData(prev => ({ ...prev, [field]: e.target.value }))

  async function generateAIBio() {
    if (!data.name) { setBioError('Add your name first so the bio can be personalized.'); return }
    setGeneratingBio(true)
    setBioError('')
    try {
      const res = await fetch('/api/generate-cv-bio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name, niche: data.niche, subNiche: data.subNiche, platform: data.platform,
          city: data.city, followers: data.followers, engagementRate: data.engagementRate,
          yearsActive: data.yearsActive, pastBrands: data.pastBrands, achievements: data.achievements,
          languages: data.languages,
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      const json = await res.json()
      if (json.bio) setData(prev => ({ ...prev, bio: json.bio }))
      else throw new Error('No bio returned')
    } catch (e) {
      console.error(e)
      setBioError('Could not generate a bio right now — please try again or write your own.')
    } finally {
      setGeneratingBio(false)
    }
  }

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
        .preview-card { cursor: zoom-in; transition: transform 0.2s, box-shadow 0.2s; }
        .preview-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.5); }
        @keyframes ikspin { to { transform: rotate(360deg); } }
        @keyframes ikfade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes ikscale { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
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
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <label style={{ ...labelStyle, marginBottom: 0 }}>Professional Bio</label>
                  <button
                    type="button"
                    onClick={generateAIBio}
                    disabled={generatingBio}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      background: generatingBio ? 'rgba(255,107,43,0.08)' : 'rgba(255,107,43,0.12)',
                      border: '1px solid rgba(255,107,43,0.3)', color: '#FF8C5A',
                      borderRadius: 8, padding: '5px 12px', fontSize: 11.5, fontWeight: 700,
                      cursor: generatingBio ? 'wait' : 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif",
                    }}
                  >
                    {generatingBio ? (
                      <>
                        <span style={{ width: 10, height: 10, border: '1.5px solid rgba(255,140,90,0.3)', borderTopColor: '#FF8C5A', borderRadius: '50%', display: 'inline-block', animation: 'ikspin 0.7s linear infinite' }} />
                        Writing your bio...
                      </>
                    ) : (
                      <>✨ Generate with AI</>
                    )}
                  </button>
                </div>
                <textarea style={{ ...inputStyle, minHeight: 90, lineHeight: 1.65 }} placeholder="Write 2-3 sentences about you, your content style, and what makes you unique — or click Generate with AI above to have it written for you." value={data.bio} onChange={upd('bio')} />
                {bioError && <div style={{ fontSize: 11.5, color: '#f87171', marginTop: 5 }}>{bioError}</div>}
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginTop: 5 }}>AI writes this using the stats, niche, and brand history you fill in below — fill those in first for a sharper bio, or generate now and refine after.</div>
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

            {/* Preview panels — exact Identity Kit profile theme: dark bg, orange accents */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14 }}>Document Previews</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }} className="doc-grid">

                {/* ───────── CV Preview — matches profile CV tab exactly ───────── */}
                <div className="preview-card" onClick={() => setZoomedDoc('cv')} style={{ background: '#08080E', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 8, right: 8, zIndex: 5, background: 'rgba(0,0,0,0.55)', borderRadius: 6, padding: '3px 7px', fontSize: 9, color: '#fff', display: 'flex', alignItems: 'center', gap: 3, fontFamily: 'sans-serif' }}>🔍 Click to enlarge</div>
                  {/* CV header — #111120 row with photo + name */}
                  <div style={{ background: '#111120', padding: '10px 8px', display: 'flex', gap: 7, alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ width: 26, height: 26, borderRadius: '50%', border: '1.5px solid #FF6B2B', background: '#1e1e2e', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                      {data.photo ? <img src={data.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ color: '#FF6B2B', fontWeight: 800, fontSize: 9, fontFamily: 'sans-serif' }}>{(data.name||'C')[0]}</span>}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 6, fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Creator CV</div>
                      <div style={{ color: '#fff', fontWeight: 800, fontSize: 10, fontFamily: 'sans-serif', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{data.name || 'Your Name'}</div>
                      <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 6.5, fontFamily: 'sans-serif', marginTop: 1 }}>{data.niche} · {data.platform}</div>
                    </div>
                  </div>
                  {/* Two-col body: #111120 sidebar / #0C0C18 content */}
                  <div style={{ display: 'grid', gridTemplateColumns: '38% 62%' }}>
                    <div style={{ background: '#111120', padding: '8px 6px', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ fontSize: 5.5, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 5, paddingBottom: 3, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Key Stats</div>
                      {[['Followers', data.followers || '—'],['Engagement', data.engagementRate ? data.engagementRate+'%' : '—'],['Avg Views', data.avgViews || '—'],['Experience', data.yearsActive ? data.yearsActive+'yr' : '—']].map(([l,v]) => (
                        <div key={l} style={{ background: '#08080E', borderRadius: 4, padding: '3px 5px', marginBottom: 3 }}>
                          <div style={{ fontWeight: 800, fontSize: 7, fontFamily: 'sans-serif', color: '#FF6B2B' }}>{v}</div>
                          <div style={{ fontSize: 5, fontFamily: 'sans-serif', color: 'rgba(255,255,255,0.25)' }}>{l}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: '#0C0C18', padding: '8px 7px' }}>
                      <div style={{ fontSize: 5.5, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4, paddingBottom: 3, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>About</div>
                      <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, marginBottom: 6 }}>
                        {(data.bio || `${data.niche} creator with ${data.followers||'strong'} followers, known for authentic content.`).slice(0, 90)}
                      </div>
                      {data.pastBrands && (
                        <>
                          <div style={{ fontSize: 5.5, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4, paddingBottom: 3, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Brands</div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                            {data.pastBrands.split(',').slice(0,3).map((b: string) => (
                              <span key={b} style={{ fontSize: 5, padding: '2px 5px', borderRadius: 99, border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', background: '#1a1a2a' }}>{b.trim().slice(0,10)}</span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  {/* Footer */}
                  <div style={{ background: '#111120', padding: '4px 8px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 5, color: 'rgba(255,255,255,0.15)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>identitykit.in</span>
                  </div>
                  <div style={{ background: 'rgba(255,107,43,0.1)', borderTop: '1px solid rgba(255,107,43,0.2)', padding: '4px 10px', textAlign: 'center' }}>
                    <div style={{ color: '#FF8C5A', fontSize: 7, fontWeight: 700, fontFamily: 'sans-serif' }}>Creator CV</div>
                  </div>
                </div>

                {/* ───────── Media Kit Preview — matches profile Media Kit tab exactly ───────── */}
                <div className="preview-card" onClick={() => setZoomedDoc('mediakit')} style={{ background: '#08080E', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 8, right: 8, zIndex: 5, background: 'rgba(0,0,0,0.55)', borderRadius: 6, padding: '3px 7px', fontSize: 9, color: '#fff', display: 'flex', alignItems: 'center', gap: 3, fontFamily: 'sans-serif' }}>🔍 Click to enlarge</div>
                  {/* Gradient dark header like IK media kit */}
                  <div style={{ background: 'linear-gradient(135deg,#1a0800,#0e0e1c)', borderBottom: '1px solid rgba(255,107,43,0.15)', padding: '10px 8px', position: 'relative' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                      <div style={{ width: 24, height: 24, borderRadius: '50%', border: '1.5px solid #FF6B2B', background: '#1e1e2e', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                        {data.photo ? <img src={data.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ color: '#FF6B2B', fontWeight: 800, fontSize: 8, fontFamily: 'sans-serif' }}>{(data.name||'C')[0]}</span>}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 6, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>Media Kit</div>
                        <div style={{ fontWeight: 800, fontSize: 9.5, color: '#fff', fontFamily: 'sans-serif', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{data.name || 'Your Name'}</div>
                        <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.3)' }}>{data.niche} · {data.city || 'India'}</div>
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid rgba(255,255,255,0.07)', marginTop: 8, paddingTop: 7, gap: 2 }}>
                      {[[data.followers||'—','Followers'],[data.engagementRate?(data.engagementRate+'%'):'—','Engagement'],[data.avgViews||'—','Views'],[(data.yearsActive||'1')+'yr','Active']].map(([n,l]) => (
                        <div key={l as string} style={{ textAlign: 'center' }}>
                          <div style={{ fontWeight: 800, fontSize: 7.5, color: '#FF6B2B', fontFamily: 'sans-serif' }}>{n as string}</div>
                          <div style={{ fontSize: 4.5, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>{l as string}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Body — dark cards */}
                  <div style={{ background: '#08080E', padding: '7px 8px' }}>
                    <div style={{ fontSize: 5.5, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 5 }}>Content I Create</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3, marginBottom: 7 }}>
                      {[data.reelRate&&'Reels', data.staticRate&&'Posts', data.storyRate&&'Stories', data.youtubeRate&&'YouTube', data.shortsRate&&'Shorts'].filter(Boolean).slice(0,3).map((f) => (
                        <div key={f as string} style={{ background: '#111120', borderRadius: 5, padding: '5px 2px', textAlign: 'center' }}>
                          <div style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.45)', fontFamily: 'sans-serif' }}>{f as string}</div>
                        </div>
                      ))}
                    </div>
                    {data.pastBrands && (
                      <>
                        <div style={{ fontSize: 5.5, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 5 }}>Brand Collabs</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                          {data.pastBrands.split(',').slice(0,3).map((b: string) => (
                            <span key={b} style={{ fontSize: 5, padding: '2px 6px', borderRadius: 6, background: '#111120', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)' }}>{b.trim().slice(0,10)}</span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <div style={{ background: '#111120', padding: '4px 8px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ fontSize: 5, color: 'rgba(255,255,255,0.15)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>identitykit.in</span>
                  </div>
                  <div style={{ background: 'rgba(255,107,43,0.1)', borderTop: '1px solid rgba(255,107,43,0.2)', padding: '4px 10px', textAlign: 'center' }}>
                    <div style={{ color: '#FF8C5A', fontSize: 7, fontWeight: 700, fontFamily: 'sans-serif' }}>Media Kit</div>
                  </div>
                </div>

                {/* ───────── Rate Card Preview — matches profile Rate Card tab exactly ───────── */}
                <div className="preview-card" onClick={() => setZoomedDoc('ratecard')} style={{ background: '#08080E', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 8, right: 8, zIndex: 5, background: 'rgba(0,0,0,0.55)', borderRadius: 6, padding: '3px 7px', fontSize: 9, color: '#fff', display: 'flex', alignItems: 'center', gap: 3, fontFamily: 'sans-serif' }}>🔍 Click to enlarge</div>
                  {/* Header — #111120 card like profile rate card */}
                  <div style={{ background: '#111120', padding: '10px 8px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 6, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 2 }}>Rate Card</div>
                      <div style={{ fontWeight: 800, fontSize: 9.5, color: '#fff', fontFamily: 'sans-serif', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{data.name || 'Your Name'}</div>
                      <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.3)', marginTop: 1 }}>{data.niche}</div>
                    </div>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', border: '1.5px solid #FF6B2B', background: '#1e1e2e', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                      {data.photo ? <img src={data.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ color: '#FF6B2B', fontWeight: 800, fontSize: 8, fontFamily: 'sans-serif' }}>{(data.name||'C')[0]}</span>}
                    </div>
                  </div>
                  {/* Stats row */}
                  <div style={{ background: '#08080E', padding: '6px 8px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 4 }}>
                    {[[data.followers||'—','Followers'],[data.engagementRate?(data.engagementRate+'%'):'—','Engagement'],[data.avgViews||'—','Views']].map(([v,l]) => (
                      <div key={l as string} style={{ background: '#111120', borderRadius: 5, padding: '4px 2px', textAlign: 'center' }}>
                        <div style={{ fontWeight: 800, fontSize: 7, color: '#FF6B2B', fontFamily: 'sans-serif' }}>{v as string}</div>
                        <div style={{ fontSize: 4.5, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>{l as string}</div>
                      </div>
                    ))}
                  </div>
                  {/* Rate rows — dark with orange price, like IK RateTable */}
                  <div style={{ background: '#08080E', padding: '6px 8px 8px' }}>
                    {[
                      ['Instagram Reel', data.reelRate],
                      ['Static Post', data.staticRate],
                      ['Story Pack', data.storyRate],
                      ['YouTube Video', data.youtubeRate],
                      ['YT Shorts', data.shortsRate],
                    ].filter(([,r]) => r).slice(0,5).map(([item,price]) => (
                      <div key={item as string} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <span style={{ fontSize: 6, color: 'rgba(255,255,255,0.6)', fontFamily: 'sans-serif' }}>{item as string}</span>
                        <span style={{ fontSize: 6.5, fontWeight: 700, color: '#FF6B2B', fontFamily: 'sans-serif' }}>Rs.{price as string}</span>
                      </div>
                    ))}
                    <div style={{ marginTop: 4, fontSize: 5, color: 'rgba(255,255,255,0.25)' }}>50% advance · TDS applicable</div>
                  </div>
                  <div style={{ background: '#111120', padding: '4px 8px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ fontSize: 5, color: 'rgba(255,255,255,0.15)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>identitykit.in</span>
                  </div>
                  <div style={{ background: 'rgba(255,107,43,0.1)', borderTop: '1px solid rgba(255,107,43,0.2)', padding: '4px 10px', textAlign: 'center' }}>
                    <div style={{ color: '#FF8C5A', fontSize: 7, fontWeight: 700, fontFamily: 'sans-serif' }}>Rate Card</div>
                  </div>
                </div>

              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: 10 }}>
                ↑ Same dark theme as your Identity Kit profile — click any document to view full size
              </div>
            </div>

            {/* ───────── FULL-SIZE ZOOM MODAL ───────── */}
            {zoomedDoc && (
              <div
                onClick={() => setZoomedDoc(null)}
                style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', animation: 'ikfade 0.15s ease', overflowY: 'auto' }}
              >
                <div
                  onClick={e => e.stopPropagation()}
                  style={{ width: '100%', maxWidth: 720, background: '#08080E', borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)', animation: 'ikscale 0.2s ease', position: 'relative', maxHeight: '92vh', overflowY: 'auto', boxShadow: '0 30px 80px rgba(0,0,0,0.6)' }}
                >
                  <button
                    onClick={() => setZoomedDoc(null)}
                    style={{ position: 'sticky', top: 14, float: 'right', marginRight: 14, zIndex: 10, width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: 'none', color: '#fff', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >✕</button>

                  {/* ═══ FULL CV ═══ */}
                  {zoomedDoc === 'cv' && (
                    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                      <div style={{ background: 'linear-gradient(135deg,#1a0e08,#0e0e1c)', padding: '32px 32px 26px', borderBottom: '1px solid rgba(255,107,43,0.15)', display: 'flex', gap: 18, alignItems: 'center' }}>
                        <div style={{ width: 76, height: 76, borderRadius: '50%', border: '3px solid #FF6B2B', background: '#1e1e2e', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                          {data.photo ? <img src={data.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ color: '#FF6B2B', fontWeight: 800, fontSize: 28, fontFamily: "'Syne',sans-serif" }}>{(data.name||'C')[0]}</span>}
                        </div>
                        <div>
                          <div style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 4 }}>Creator CV</div>
                          <div style={{ color: '#fff', fontWeight: 800, fontSize: 28, fontFamily: "'Syne',sans-serif", lineHeight: 1.1, marginBottom: 4 }}>{data.name || 'Your Name'}</div>
                          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5 }}>{data.niche}{data.subNiche ? ` · ${data.subNiche}` : ''} · {data.platform}</div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
                            {[data.city, data.email, data.handle].filter(Boolean).map(m => (
                              <span key={m} style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{m}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '210px 1fr' }}>
                        {/* Sidebar */}
                        <div style={{ background: '#111120', padding: '26px 22px', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                          <div style={{ fontSize: 10.5, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 12, paddingBottom: 7, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Key Stats</div>
                          {[['Followers', data.followers || '—'],['Engagement Rate', data.engagementRate ? data.engagementRate+'%' : '—'],['Avg Views / Reach', data.avgViews || '—'],['Years Active', data.yearsActive ? data.yearsActive+' yr' : '—'],['Brand Deals', data.pastBrands ? data.pastBrands.split(',').filter(Boolean).length+'+' : '—']].map(([l,v]) => (
                            <div key={l} style={{ background: '#08080E', borderRadius: 9, padding: '9px 12px', marginBottom: 8 }}>
                              <div style={{ fontWeight: 800, fontSize: 16, fontFamily: "'Syne',sans-serif", color: '#FF6B2B' }}>{v}</div>
                              <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.3)', marginTop: 1 }}>{l}</div>
                            </div>
                          ))}

                          <div style={{ fontSize: 10.5, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', margin: '20px 0 10px', paddingBottom: 7, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Platform</div>
                          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{data.platform}</div>
                          {data.languages && (
                            <>
                              <div style={{ fontSize: 10.5, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', margin: '20px 0 10px', paddingBottom: 7, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Languages</div>
                              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{data.languages}</div>
                            </>
                          )}

                          <div style={{ fontSize: 10.5, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', margin: '20px 0 10px', paddingBottom: 7, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Contact</div>
                          {[data.email && ['Email', data.email], data.phone && ['WhatsApp', data.phone]].filter(Boolean).map((c: any) => (
                            <div key={c[0]} style={{ marginBottom: 8 }}>
                              <div style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.25)' }}>{c[0]}</div>
                              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{c[1]}</div>
                            </div>
                          ))}
                        </div>

                        {/* Main content */}
                        <div style={{ background: '#0c0c18', padding: '26px 28px' }}>
                          <div style={{ fontSize: 10.5, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 7, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Professional Summary</div>
                          <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 22 }}>
                            {data.bio || 'Click "Generate with AI" on the form to write a polished professional summary here — or write your own.'}
                          </p>

                          {data.pastBrands && (
                            <>
                              <div style={{ fontSize: 10.5, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 7, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Brand Collaborations</div>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
                                {data.pastBrands.split(',').map((b: string) => b.trim()).filter(Boolean).map((b: string) => (
                                  <span key={b} style={{ fontSize: 13, padding: '6px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', background: '#1a1a2a' }}>{b}</span>
                                ))}
                              </div>
                            </>
                          )}

                          {data.achievements && (
                            <>
                              <div style={{ fontSize: 10.5, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 7, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Achievements & Highlights</div>
                              <div style={{ borderLeft: '3px solid #FF6B2B', background: 'rgba(255,107,43,0.06)', borderRadius: '0 10px 10px 0', padding: '12px 16px', marginBottom: 22 }}>
                                <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>{data.achievements}</p>
                              </div>
                            </>
                          )}

                          {(data.reelRate || data.staticRate || data.storyRate || data.youtubeRate || data.shortsRate) && (
                            <>
                              <div style={{ fontSize: 10.5, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 7, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>What I Offer Brands</div>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 22 }}>
                                {[
                                  data.reelRate && ['Instagram Reel', data.reelRate],
                                  data.staticRate && ['Static Post / Carousel', data.staticRate],
                                  data.storyRate && ['Story Package', data.storyRate],
                                  data.youtubeRate && ['YouTube Dedicated Video', data.youtubeRate],
                                  data.shortsRate && ['YouTube Shorts', data.shortsRate],
                                ].filter(Boolean).map(([name, rate]: any) => (
                                  <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', background: '#08080E', borderRadius: 9 }}>
                                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>{name}</span>
                                    <span style={{ fontSize: 14, fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#FF6B2B' }}>₹{Number(rate).toLocaleString('en-IN')}</span>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}

                          {(data.instagram || data.youtube || data.linkedin || data.twitter || data.website) && (
                            <>
                              <div style={{ fontSize: 10.5, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 7, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Social Presence</div>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
                                {[data.instagram && ['Instagram', data.instagram], data.youtube && ['YouTube', data.youtube], data.linkedin && ['LinkedIn', data.linkedin], data.twitter && ['Twitter/X', data.twitter], data.website && ['Website', data.website]].filter(Boolean).map((s: any) => (
                                  <div key={s[0]}>
                                    <div style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.25)' }}>{s[0]}</div>
                                    <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.65)' }}>{s[1]}</div>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      <div style={{ background: '#111120', padding: '14px 28px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Identity Kit · identitykit.in</span>
                        {data.reelRate && <span style={{ fontSize: 12, color: '#FF6B2B' }}>Starting ₹{Number(data.reelRate).toLocaleString('en-IN')} per collab</span>}
                      </div>
                    </div>
                  )}

                  {/* ═══ FULL MEDIA KIT ═══ */}
                  {zoomedDoc === 'mediakit' && (
                    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", padding: 30 }}>
                      <div style={{ background: 'linear-gradient(135deg,#1a0800,#0e0e1c)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 18, padding: 26, marginBottom: 14 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 22 }}>
                          <div style={{ width: 70, height: 70, borderRadius: '50%', border: '3px solid #FF6B2B', background: '#1e1e2e', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                            {data.photo ? <img src={data.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ color: '#FF6B2B', fontWeight: 800, fontSize: 26, fontFamily: "'Syne',sans-serif" }}>{(data.name||'C')[0]}</span>}
                          </div>
                          <div>
                            <div style={{ fontSize: 11, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', fontWeight: 700, marginBottom: 4 }}>Media Kit</div>
                            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{data.name || 'Your Name'}</div>
                            <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.4)' }}>{data.niche} · {data.city || 'India'} · {data.languages || 'Hindi, English'}</div>
                          </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 18 }}>
                          {[[data.followers||'—','Followers'],[data.engagementRate?(data.engagementRate+'%'):'—','Engagement'],[data.avgViews||'—','Avg Views'],[(data.yearsActive||'1')+' yr','Active']].map(([v,l]) => (
                            <div key={l as string} style={{ textAlign: 'center' }}>
                              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, color: '#FF6B2B' }}>{v as string}</div>
                              <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 3 }}>{l as string}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {data.bio && (
                        <div style={{ background: '#111120', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 20, marginBottom: 14 }}>
                          <div style={{ fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 10 }}>About</div>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>{data.bio}</p>
                        </div>
                      )}

                      <div style={{ background: '#111120', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 20, marginBottom: 14 }}>
                        <div style={{ fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>Content I Create</div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
                          {[data.reelRate&&'Reels & Shorts', data.staticRate&&'Static Posts', data.storyRate&&'Stories', data.youtubeRate&&'YouTube Videos', data.shortsRate&&'YouTube Shorts'].filter(Boolean).map(f => (
                            <div key={f as string} style={{ background: '#0e0e1e', borderRadius: 10, padding: 14, textAlign: 'center' }}>
                              <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.5)' }}>{f as string}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {data.pastBrands && (
                        <div style={{ background: '#111120', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 20, marginBottom: 14 }}>
                          <div style={{ fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>Past Brand Collaborations</div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {data.pastBrands.split(',').map((b: string) => b.trim()).filter(Boolean).map((b: string) => (
                              <span key={b} style={{ fontSize: 13, padding: '6px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', background: '#1a1a2a' }}>{b}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div style={{ background: '#111120', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 20, marginBottom: 14 }}>
                        <div style={{ fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>Audience Demographics</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                          {[['Primary Age Group', '18–35 years'], ['Location', (data.city||'India')+' & Pan India'], ['Language', data.languages || 'Hindi, English'], ['Niche Interest', data.niche + (data.subNiche ? ' · '+data.subNiche : '')]].map(([l,v]) => (
                            <div key={l}>
                              <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.25)', marginBottom: 2 }}>{l}</div>
                              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>{v}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {(data.reelRate || data.staticRate || data.youtubeRate) && (
                        <div style={{ background: '#111120', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 20, marginBottom: 14 }}>
                          <div style={{ fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>Starting Rates</div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {[data.reelRate && ['Instagram Reel', data.reelRate], data.staticRate && ['Static Post', data.staticRate], data.youtubeRate && ['YouTube Video', data.youtubeRate]].filter(Boolean).map(([n,r]: any) => (
                              <div key={n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0e0e1e', borderRadius: 10, padding: '12px 14px' }}>
                                <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.8)' }}>{n}</span>
                                <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, color: '#FF6B2B' }}>₹{Number(r).toLocaleString('en-IN')}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 4px' }}>
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Identity Kit · identitykit.in</span>
                        {data.email && <span style={{ fontSize: 12, color: '#FF6B2B' }}>{data.email}</span>}
                      </div>
                    </div>
                  )}

                  {/* ═══ FULL RATE CARD ═══ */}
                  {zoomedDoc === 'ratecard' && (
                    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", padding: 30 }}>
                      <div style={{ background: '#111120', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18, padding: 24, marginBottom: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 5 }}>Rate Card</div>
                          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, color: '#fff' }}>{data.name || 'Your Name'}</div>
                          <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.4)', marginTop: 5 }}>{data.niche} · identitykit.in</div>
                        </div>
                        <div style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid #FF6B2B', background: '#1e1e2e', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                          {data.photo ? <img src={data.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ color: '#FF6B2B', fontWeight: 800, fontSize: 20, fontFamily: "'Syne',sans-serif" }}>{(data.name||'C')[0]}</span>}
                        </div>
                      </div>

                      <div style={{ background: '#111120', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18, padding: 22, marginBottom: 14 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
                          {[[data.followers||'—','Followers'],[data.engagementRate?(data.engagementRate+'%'):'—','Engagement Rate'],[data.avgViews||'—','Avg Views']].map(([v,l]) => (
                            <div key={l as string} style={{ background: '#0e0e1e', borderRadius: 12, padding: '14px 8px', textAlign: 'center' }}>
                              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 19, fontWeight: 800, color: '#FF6B2B' }}>{v as string}</div>
                              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginTop: 3, textTransform: 'uppercase' }}>{l as string}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {(data.reelRate || data.staticRate || data.storyRate) && (
                        <div style={{ background: '#111120', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18, padding: 22, marginBottom: 14 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 16 }}>
                            <div style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(225,48,108,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ fontSize: 14 }}>📷</span>
                            </div>
                            <span style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>Instagram</span>
                            {data.handle && <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>{data.handle} · {data.followers}</span>}
                          </div>
                          {[data.reelRate && ['Dedicated Reel', '60 sec · 3–5 days · 2 revisions', data.reelRate], data.staticRate && ['Static Post / Carousel', '1 post · caption included', data.staticRate], data.storyRate && ['Stories Pack', '3 frames · link in bio', data.storyRate]].filter(Boolean).map(([n,d,r]: any, i) => (
                            <div key={n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                              <div>
                                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{n}</div>
                                <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>{d}</div>
                              </div>
                              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 17, fontWeight: 700, color: '#FF6B2B' }}>₹{Number(r).toLocaleString('en-IN')}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {(data.youtubeRate || data.shortsRate) && (
                        <div style={{ background: '#111120', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18, padding: 22, marginBottom: 14 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 16 }}>
                            <div style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(255,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ fontSize: 14 }}>▶️</span>
                            </div>
                            <span style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>YouTube</span>
                          </div>
                          {[data.youtubeRate && ['Dedicated Video', '8–15 min · 5–7 days', data.youtubeRate], data.shortsRate && ['YouTube Short', '60 sec · 3–5 days', data.shortsRate]].filter(Boolean).map(([n,d,r]: any, i, arr) => (
                            <div key={n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 0', borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                              <div>
                                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{n}</div>
                                <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>{d}</div>
                              </div>
                              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 17, fontWeight: 700, color: '#FF6B2B' }}>₹{Number(r).toLocaleString('en-IN')}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div style={{ background: '#111120', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18, padding: 22, marginBottom: 14 }}>
                        <div style={{ fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>Terms & Notes</div>
                        {['50% advance payment required before work begins', 'All prices exclusive of 18% GST · GST invoice provided', 'Usage rights for 6 months · exclusivity available on request', '1 free revision per deliverable · additional revisions charged separately', 'ASCI-compliant disclosure on all paid content'].map(t => (
                          <div key={t} style={{ display: 'flex', gap: 9, marginBottom: 9, alignItems: 'flex-start' }}>
                            <span style={{ color: '#FF6B2B', fontSize: 13, marginTop: 1 }}>✓</span>
                            <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{t}</span>
                          </div>
                        ))}
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 4px' }}>
                        {data.email && <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{data.email}{data.phone ? ` · ${data.phone}` : ''}</span>}
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.04)', padding: '4px 12px', borderRadius: 7 }}>IDENTITY KIT</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

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
