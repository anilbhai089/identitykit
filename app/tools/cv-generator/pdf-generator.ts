import { jsPDF } from 'jspdf'

type RateItem = { name: string; price: string }

type CVInput = {
  fullName: string
  niche: string
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
  brandDeals: number
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

const PAGE_W = 210
const MARGIN = 12
const COL_L = 52   // left sidebar width mm
const COL_R = PAGE_W - MARGIN * 2 - COL_L - 3 // right content width
const COL_R_X = MARGIN + COL_L + 3

const C = {
  bg:     [8, 8, 14]     as [number,number,number],
  card:   [17, 17, 32]   as [number,number,number],
  right:  [12, 12, 24]   as [number,number,number],
  orange: [255, 107, 43] as [number,number,number],
  white:  [255, 255, 255] as [number,number,number],
  dim:    [120, 120, 135] as [number,number,number],
  faint:  [50, 50, 65]   as [number,number,number],
  stat:   [8, 8, 14]     as [number,number,number],
}

function sectionLabel(doc: jsPDF, x: number, y: number, text: string) {
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(6.5)
  doc.setTextColor(...C.orange)
  doc.text(text.toUpperCase(), x, y)
  doc.setDrawColor(...C.faint)
  doc.setLineWidth(0.15)
  doc.line(x, y + 1, x + (x === MARGIN + 4 ? COL_L - 8 : COL_R), y + 1)
}

function drawCircularImage(doc: jsPDF, base64: string, x: number, y: number, size: number) {
  try {
    doc.saveGraphicsState()
    ;(doc as any).circle(x + size / 2, y + size / 2, size / 2, null)
    ;(doc as any).clip()
    ;(doc as any).discardPath()
    const fmt = base64.includes('image/png') ? 'PNG' : 'JPEG'
    doc.addImage(base64, fmt, x, y, size, size)
    doc.restoreGraphicsState()
  } catch {
    try {
      const fmt = base64.includes('image/png') ? 'PNG' : 'JPEG'
      doc.addImage(base64, fmt, x, y, size, size)
    } catch {}
  }
}

export async function generateCVPdf(input: CVInput) {
  // ── Pass 1: measure on oversized scratch doc ──
  const scratch = new jsPDF({ unit: 'mm', format: [PAGE_W, 2000] })
  const { lH, rH } = measure(scratch, input)
  const bodyH = Math.max(lH, rH, 80)
  const HEADER_H = 34
  const FOOTER_H = 12
  const totalH = MARGIN + HEADER_H + bodyH + FOOTER_H + MARGIN

  // ── Pass 2: render at exact height ──
  const doc = new jsPDF({ unit: 'mm', format: [PAGE_W, Math.max(totalH, 180)] })
  draw(doc, input, HEADER_H, bodyH, FOOTER_H)
  return doc
}

// ── Measure: returns how tall each column's content actually is ──
function measure(doc: jsPDF, input: CVInput): { lH: number; rH: number } {
  let lY = 0  // left column running height
  let rY = 0  // right column running height

  const statItems = buildStats(input)
  if (statItems.length) {
    lY += 10 // section label
    lY += statItems.length * 12 + 4
  }
  if (input.platforms.length) {
    lY += 10
    lY += input.platforms.length * 6 + 4
  }
  if (input.audienceAge || input.audienceGender) {
    lY += 10
    const lines = [input.audienceGender, input.audienceAge && `${input.audienceAge} age group`, input.audienceCities, input.languages].filter(Boolean)
    lY += lines.length * 5.5 + 4
  }
  if (input.skills.length) {
    lY += 10
    // chips wrap - rough estimate
    lY += Math.ceil(input.skills.length / 3) * 8 + 4
  }

  if (input.bio) {
    rY += 10
    const safeBio = input.bio.replace(/(\S{30})/g, '$1 ')
    const lines = doc.splitTextToSize(safeBio, COL_R)
    rY += lines.length * 4.8 + 6
  }
  if (input.bestCampaign) {
    rY += 10
    const lines = doc.splitTextToSize(input.bestCampaign, COL_R - 6)
    rY += lines.length * 4.8 + 18
  }
  if (input.brands.length) {
    rY += 10
    rY += input.brands.length * 14 + 4
  }
  if (input.awards) {
    rY += 10
    const lines = doc.splitTextToSize(input.awards, COL_R - 10)
    rY += lines.length * 4.8 + 6
  }
  if (input.rates.length) {
    rY += 10
    rY += Math.min(input.rates.length, 5) * 10 + 4
    if (input.turnaround) rY += 6
  }

  return { lH: lY, rH: rY }
}

function buildStats(input: CVInput): [string, string][] {
  return [
    input.ytSubs       && [input.ytSubs, 'YT subscribers'],
    input.igFollowers  && [input.igFollowers, 'IG followers'],
    input.avgViews     && [input.avgViews, 'Avg views'],
    input.engagementRate && [`${input.engagementRate}%`, 'Engagement'],
    input.brandDeals > 0 && [`${input.brandDeals}+`, 'Brand deals'],
  ].filter(Boolean) as [string, string][]
}

function draw(doc: jsPDF, input: CVInput, HEADER_H: number, bodyH: number, FOOTER_H: number) {
  const pageH = (doc.internal.pageSize as any).getHeight()

  // page background
  doc.setFillColor(...C.bg)
  doc.rect(0, 0, PAGE_W, pageH, 'F')

  // ── HEADER ──
  const hY = MARGIN
  doc.setFillColor(...C.card)
  doc.setDrawColor(...C.faint)
  doc.setLineWidth(0.2)
  doc.roundedRect(MARGIN, hY, PAGE_W - MARGIN * 2, HEADER_H, 3, 3, 'FD')

  // photo
  const photoSize = 22
  const photoX = MARGIN + 6
  const photoY = hY + (HEADER_H - photoSize) / 2
  if (input.photo) {
    drawCircularImage(doc, input.photo, photoX, photoY, photoSize)
  } else {
    doc.setFillColor(30, 30, 50)
    doc.circle(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2, 'F')
  }
  doc.setDrawColor(...C.orange)
  doc.setLineWidth(0.5)
  doc.circle(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2, 'S')

  const tX = photoX + photoSize + 7
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(6.5)
  doc.setTextColor(...C.orange)
  doc.text('CREATOR CV', tX, hY + 8)

  doc.setFontSize(15)
  doc.setTextColor(...C.white)
  doc.text(input.fullName || 'Your Name', tX, hY + 15)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.5)
  doc.setTextColor(...C.dim)
  const subLine = [input.niche, input.platforms.slice(0,2).join(' & ')].filter(Boolean).join(' Creator · ')
  doc.text(subLine, tX, hY + 21)

  let contactX = tX
  doc.setFontSize(7.5)
  const contacts = [
    input.city   && { label: input.city },
    input.email  && { label: input.email },
    input.igHandle && { label: input.igHandle },
  ].filter(Boolean) as { label: string }[]
  contacts.forEach(c => {
    doc.setTextColor(...C.dim)
    doc.text(c.label, contactX, hY + 28)
    contactX += doc.getTextWidth(c.label) + 6
  })

  // ── BODY: left sidebar + right content ──
  const bodyY = MARGIN + HEADER_H + 2
  // sidebar bg
  doc.setFillColor(...C.card)
  doc.rect(MARGIN, bodyY, COL_L, bodyH, 'F')
  // right bg
  doc.setFillColor(...C.right)
  doc.rect(COL_R_X, bodyY, COL_R, bodyH, 'F')

  // ── LEFT COLUMN ──
  let lY = bodyY + 8
  const lX = MARGIN + 4

  const statItems = buildStats(input)
  if (statItems.length) {
    sectionLabel(doc, lX, lY, 'Key Stats')
    lY += 5
    statItems.forEach(([val, key]) => {
      doc.setFillColor(...C.stat)
      doc.setDrawColor(...C.faint)
      doc.setLineWidth(0.15)
      doc.roundedRect(lX, lY, COL_L - 8, 9, 1.5, 1.5, 'FD')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(9)
      doc.setTextColor(...C.orange)
      doc.text(val, lX + 3, lY + 5.5)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(6)
      doc.setTextColor(...C.dim)
      doc.text(key, lX + 3, lY + 8)
      lY += 11
    })
    lY += 2
  }

  if (input.platforms.length) {
    sectionLabel(doc, lX, lY, 'Platforms')
    lY += 5

    const platColors: Record<string, [number,number,number]> = {
      'Instagram':  [225, 48, 108],
      'YouTube':    [255, 0, 0],
      'Twitter/X':  [29, 161, 242],
      'LinkedIn':   [0, 119, 181],
      'Facebook':   [66, 103, 178],
      'Snapchat':   [255, 252, 0],
      'Pinterest':  [230, 0, 35],
    }
    const platLabels: Record<string, string> = {
      'Instagram': 'IG', 'YouTube': 'YT', 'Twitter/X': 'X',
      'LinkedIn': 'in', 'Facebook': 'f', 'Snapchat': 'SC', 'Pinterest': 'P',
    }

    input.platforms.forEach(p => {
      const col = platColors[p] || [255, 107, 43]
      const label = platLabels[p] || p.slice(0, 2)
      // icon box
      doc.setFillColor(col[0], col[1], col[2])
      doc.roundedRect(lX, lY - 4, 7, 7, 1.5, 1.5, 'F')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(label.length > 1 ? 4.5 : 5.5)
      doc.setTextColor(255, 255, 255)
      doc.text(label, lX + 3.5, lY + 0.5, { align: 'center' })
      // platform name
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8)
      doc.setTextColor(180, 180, 195)
      doc.text(p, lX + 9, lY)
      lY += 7
    })
    lY += 2
  }

  const audienceLines = [
    input.audienceGender,
    input.audienceAge && `${input.audienceAge} age group`,
    input.audienceCities,
    input.languages,
  ].filter(Boolean) as string[]
  if (audienceLines.length) {
    sectionLabel(doc, lX, lY, 'Audience')
    lY += 5
    audienceLines.forEach(line => {
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(7.5)
      doc.setTextColor(150, 150, 165)
      doc.text(line, lX, lY)
      lY += 5
    })
    lY += 3
  }

  if (input.skills.length) {
    sectionLabel(doc, lX, lY, 'Skills')
    lY += 5
    const chipW = COL_L - 8
    input.skills.forEach(s => {
      doc.setFillColor(40, 20, 10)
      doc.setDrawColor(255, 107, 43)
      doc.setLineWidth(0.15)
      doc.roundedRect(lX, lY - 3, chipW, 6, 1.5, 1.5, 'FD')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(6)
      doc.setTextColor(...C.orange)
      doc.text(s.length > 14 ? s.slice(0, 13) + '…' : s, lX + chipW / 2, lY + 0.5, { align: 'center' })
      lY += 8
    })
  }

  // CTA filler if left col is short
  if (lY < bodyY + bodyH - 20) {
    const ctaY = bodyY + bodyH - 20
    doc.setFillColor(40, 20, 8)
    doc.setDrawColor(255, 107, 43)
    doc.setLineWidth(0.2)
    doc.roundedRect(lX, ctaY, COL_L - 8, 16, 2, 2, 'FD')
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(7)
    doc.setTextColor(...C.orange)
    doc.text("Let's collab", lX + (COL_L - 8) / 2, ctaY + 6.5, { align: 'center' })
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(6)
    doc.setTextColor(...C.dim)
    if (input.email) doc.text(input.email.length > 18 ? input.email.slice(0, 17) + '…' : input.email, lX + (COL_L - 8) / 2, ctaY + 11.5, { align: 'center' })
    if (input.phone) doc.text(input.phone, lX + (COL_L - 8) / 2, ctaY + 14.5, { align: 'center' })
  }

  // ── RIGHT COLUMN ──
  let rY = bodyY + 8
  const rX = COL_R_X + 4

  if (input.bio) {
    sectionLabel(doc, rX, rY, 'About')
    rY += 5
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8.5)
    doc.setTextColor(185, 185, 200)
    // Break any word longer than 30 chars so jsPDF splitTextToSize doesn't overflow
    const safeBio = input.bio.replace(/(\S{30})/g, '$1 ')
    const lines = doc.splitTextToSize(safeBio, COL_R - 6)
    doc.text(lines, rX, rY)
    rY += lines.length * 4.8 + 7
  }

  if (input.bestCampaign) {
    sectionLabel(doc, rX, rY, 'Best Campaign')
    rY += 5
    doc.setFillColor(30, 18, 8)
    const campLines = doc.splitTextToSize(input.bestCampaign, COL_R - 14)
    const campH = campLines.length * 4.8 + 12
    doc.roundedRect(rX, rY, COL_R - 6, campH, 2, 2, 'F')
    doc.setFillColor(...C.orange)
    doc.rect(rX, rY, 1.5, campH, 'F')
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(6)
    doc.setTextColor(...C.orange)
    doc.text('CAMPAIGN HIGHLIGHT', rX + 5, rY + 5)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(200, 200, 210)
    doc.text(campLines, rX + 5, rY + 10)
    rY += campH + 7
  }

  if (input.brands.length) {
    sectionLabel(doc, rX, rY, 'Brand Collaborations')
    rY += 5
    input.brands.forEach((b, i) => {
      if (i > 0) {
        doc.setDrawColor(...C.faint)
        doc.setLineWidth(0.1)
        doc.line(rX, rY - 1, rX + COL_R - 6, rY - 1)
      }
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(9)
      doc.setTextColor(215, 215, 225)
      doc.text(b, rX, rY + 4)
      doc.setFillColor(40, 18, 8)
      doc.setDrawColor(...C.orange)
      doc.setLineWidth(0.15)
      const badgeW = 22
      doc.roundedRect(rX + COL_R - badgeW - 8, rY, badgeW, 6, 1, 1, 'FD')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(5.5)
      doc.setTextColor(...C.orange)
      doc.text('Paid collab', rX + COL_R - badgeW / 2 - 8, rY + 4, { align: 'center' })
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(7)
      doc.setTextColor(...C.dim)
      doc.text('Content creation · Brand collaboration', rX, rY + 10)
      rY += 13
    })
    rY += 3
  }

  if (input.awards) {
    sectionLabel(doc, rX, rY, 'Awards & Recognition')
    rY += 5
    doc.setFontSize(8)
    doc.setTextColor(180, 180, 195)
    doc.setFont('helvetica', 'normal')
    const aLines = doc.splitTextToSize(input.awards, COL_R - 10)
    doc.text(aLines, rX, rY)
    rY += aLines.length * 4.8 + 6
  }

  if (input.rates.length) {
    sectionLabel(doc, rX, rY, 'What I Offer Brands')
    rY += 5
    input.rates.slice(0, 5).forEach(r => {
      doc.setFillColor(...C.stat)
      doc.setDrawColor(...C.faint)
      doc.setLineWidth(0.15)
      doc.roundedRect(rX, rY, COL_R - 6, 8, 1.5, 1.5, 'FD')
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8)
      doc.setTextColor(190, 190, 205)
      doc.text(r.name, rX + 4, rY + 5.5)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(9)
      doc.setTextColor(...C.orange)
      doc.text(`Rs.${Number(r.price).toLocaleString('en-IN')}`, rX + COL_R - 10, rY + 5.5, { align: 'right' })
      rY += 10
    })
    if (input.turnaround) {
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(7)
      doc.setTextColor(...C.dim)
      doc.text(`Turnaround: ${input.turnaround} · 1 free revision included`, rX, rY + 3)
      rY += 7
    }
  }

  // right col closing divider if short
  if (rY < bodyY + bodyH - 8) {
    doc.setDrawColor(...C.faint)
    doc.setLineWidth(0.15)
    doc.line(rX, bodyY + bodyH - 6, rX + COL_R - 6, bodyY + bodyH - 6)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(6)
    doc.setTextColor(...C.faint)
    doc.text('Identity Kit — verified creator profile', rX + (COL_R - 6) / 2, bodyY + bodyH - 2.5, { align: 'center' })
  }

  // ── FOOTER ──
  const fY = MARGIN + HEADER_H + 2 + bodyH + 2
  doc.setDrawColor(...C.faint)
  doc.setLineWidth(0.15)
  doc.line(MARGIN, fY, PAGE_W - MARGIN, fY)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7)
  doc.setTextColor(...C.orange)
  doc.text('IDENTITY KIT', MARGIN + 2, fY + 6)
  if (input.rates.length) {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7)
    doc.setTextColor(...C.orange)
    doc.text(`Starting Rs.${Number(input.rates[0].price).toLocaleString('en-IN')} per collab`, PAGE_W - MARGIN - 2, fY + 6, { align: 'right' })
  }
}
