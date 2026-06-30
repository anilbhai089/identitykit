import { jsPDF } from 'jspdf'

type Rate = { name: string; desc: string; price: string; color: string }
type Term = { label: string }

type RateCardInput = {
  fullName: string
  niche: string
  photo: string
  email: string
  whatsapp: string
  validTillLabel: string
  customPackage: string
  igHandle: string
  igFollowers: string
  ytHandle: string
  ytSubs: string
  igRates: Rate[]
  ytRates: Rate[]
  otherRates: Rate[]
  terms: Term[]
}

const PAGE_W = 210 // A4 width mm
const MARGIN = 14
const CONTENT_W = PAGE_W - MARGIN * 2

const COLORS = {
  bg: [8, 8, 14] as [number, number, number],
  card: [17, 17, 32] as [number, number, number],
  cardBorder: [255, 255, 255] as [number, number, number],
  orange: [255, 107, 43] as [number, number, number],
  white: [255, 255, 255] as [number, number, number],
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]
}

export async function generateRateCardPdf(input: RateCardInput) {
  // ---- PASS 1: measure total content height on an oversized scratch doc ----
  const scratch = new jsPDF({ unit: 'mm', format: [PAGE_W, 1000] })
  const finalHeight = render(scratch, input, true)

  // ---- PASS 2: render for real at the measured height ----
  const doc = new jsPDF({ unit: 'mm', format: [PAGE_W, Math.max(finalHeight, 200)] })
  render(doc, input, false)
  return doc
}

function render(doc: jsPDF, input: RateCardInput, measureOnly: boolean): number {
  let y = 0
  const pageH = (doc.internal.pageSize as any).getHeight()

  // page background
  doc.setFillColor(...COLORS.bg)
  doc.rect(0, 0, PAGE_W, pageH, 'F')

  y = MARGIN

  // ---- HEADER CARD ----
  const headerH = 30
  drawCard(doc, MARGIN, y, CONTENT_W, headerH)

  // photo (circular)
  const photoSize = 20
  const photoX = MARGIN + 10
  const photoY = y + (headerH - photoSize) / 2
  if (input.photo && !measureOnly) {
    drawCircularImage(doc, input.photo, photoX, photoY, photoSize)
  } else {
    doc.setFillColor(26, 26, 42)
    doc.circle(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2, 'F')
  }
  doc.setDrawColor(255, 107, 43)
  doc.setLineWidth(0.5)
  doc.circle(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2, 'S')

  const textX = photoX + photoSize + 8
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7.5)
  doc.setTextColor(...COLORS.orange)
  doc.text('RATE CARD', textX, y + 9)

  doc.setFontSize(15)
  doc.setTextColor(...COLORS.white)
  doc.text(input.fullName || 'Your Name', textX, y + 16)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(160, 160, 170)
  doc.text(input.niche || '', textX, y + 22)

  if (input.validTillLabel) {
    doc.setFontSize(8)
    doc.setTextColor(150, 150, 160)
    const label = `Valid till ${input.validTillLabel}`
    const w = doc.getTextWidth(label) + 6
    const bx = MARGIN + CONTENT_W - w - 4
    doc.setFillColor(255, 255, 255, )
    doc.setDrawColor(40, 40, 55)
    doc.roundedRect(bx, y + 6, w, 6, 1.5, 1.5, 'S')
    doc.text(label, bx + 3, y + 10)
  }

  y += headerH + 6

  // ---- BUNDLE ----
  if (input.customPackage) {
    const bundleH = 22
    doc.setFillColor(40, 22, 12)
    doc.setDrawColor(255, 107, 43)
    doc.setLineWidth(0.3)
    doc.roundedRect(MARGIN, y, CONTENT_W, bundleH, 3, 3, 'FD')

    doc.setFillColor(255, 140, 90)
    doc.circle(MARGIN + 7, y + 6.7, 1, 'F')
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(7.5)
    doc.setTextColor(255, 140, 90)
    doc.text('MOST POPULAR', MARGIN + 10, y + 8)

    doc.setFontSize(11)
    doc.setTextColor(...COLORS.white)
    doc.text('Full Brand Bundle', MARGIN + 6, y + 15)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8.5)
    doc.setTextColor(180, 180, 190)
    doc.text(truncate(doc, input.customPackage, CONTENT_W - 60), MARGIN + 6, y + 19.5)

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.setTextColor(...COLORS.orange)
    doc.text('Best value', MARGIN + CONTENT_W - 6, y + 13, { align: 'right' })

    y += bundleH + 6
  }

  // ---- RATE SECTIONS ----
  if (input.igRates.length) {
    y = drawRateSection(doc, y, 'Instagram', [225, 48, 108], input.igHandle, input.igFollowers, input.igRates)
    y += 6
  }
  if (input.ytRates.length) {
    y = drawRateSection(doc, y, 'YouTube', [255, 0, 0], input.ytHandle, input.ytSubs, input.ytRates)
    y += 6
  }
  if (input.otherRates.length) {
    y = drawRateSection(doc, y, 'Other Platforms', [255, 107, 43], '', '', input.otherRates)
    y += 6
  }

  // ---- TERMS ----
  if (input.terms.length) {
    const lineHeights = input.terms.map(t => {
      const lines = doc.splitTextToSize(t.label, CONTENT_W - 24)
      return lines.length * 4.2 + 3
    })
    const termsH = 14 + lineHeights.reduce((a, b) => a + b, 0)
    drawCard(doc, MARGIN, y, CONTENT_W, termsH)

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(7.5)
    doc.setTextColor(120, 120, 135)
    doc.text('TERMS & NOTES', MARGIN + 6, y + 8)

    let ty = y + 14
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8.5)
    input.terms.forEach((t, i) => {
      doc.setFillColor(...COLORS.orange)
      doc.circle(MARGIN + 7, ty - 1.2, 0.8, 'F')
      doc.setTextColor(170, 170, 180)
      const lines = doc.splitTextToSize(t.label, CONTENT_W - 24)
      doc.text(lines, MARGIN + 11, ty)
      ty += lineHeights[i]
    })

    y += termsH + 6
  }

  // ---- FOOTER ----
  doc.setDrawColor(30, 30, 42)
  doc.setLineWidth(0.2)
  doc.line(MARGIN, y, MARGIN + CONTENT_W, y)
  y += 6

  if (input.email || input.whatsapp) {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(120, 120, 135)
    const contact = [input.email, input.whatsapp].filter(Boolean).join('  ·  ')
    doc.text(contact, MARGIN, y + 3)
  }

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7.5)
  doc.setTextColor(90, 90, 105)
  doc.text('IDENTITY KIT', MARGIN + CONTENT_W, y + 3, { align: 'right' })

  y += 10

  return y

  // ----- inner helper that needs closure over doc/y bookkeeping for rate sections -----
  function drawRateSection(doc: jsPDF, startY: number, title: string, iconColor: [number, number, number], handle: string, followers: string, rates: Rate[]): number {
    const rowH = 11
    const sectionH = 18.5 + rates.length * rowH
    drawCard(doc, MARGIN, startY, CONTENT_W, sectionH)

    // icon box
    doc.setFillColor(iconColor[0], iconColor[1], iconColor[2], )
    doc.roundedRect(MARGIN + 6, startY + 6, 8, 8, 2, 2, 'F')

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.setTextColor(...COLORS.white)
    doc.text(title, MARGIN + 18, startY + 11)

    if (handle) {
      const titleW = doc.getTextWidth(title)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8)
      doc.setTextColor(110, 110, 125)
      const sub = followers ? `${handle} · ${followers}` : handle
      doc.text(sub, MARGIN + 18 + titleW + 4, startY + 11)
    }

    let ry = startY + 20.5
    rates.forEach((r, i) => {
      if (i > 0) {
        doc.setDrawColor(28, 28, 40)
        doc.setLineWidth(0.15)
        doc.line(MARGIN + 6, ry - 3.5, MARGIN + CONTENT_W - 6, ry - 3.5)
      }
      doc.setFillColor(iconColor[0], iconColor[1], iconColor[2], )
      doc.roundedRect(MARGIN + 6, ry - 4, 6, 6, 1.5, 1.5, 'F')

      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9)
      doc.setTextColor(210, 210, 218)
      doc.text(r.name, MARGIN + 15, ry - 1)

      doc.setFontSize(7.5)
      doc.setTextColor(110, 110, 125)
      doc.text(r.desc, MARGIN + 15, ry + 3)

      doc.setFont('helvetica', 'bold')
      doc.setFontSize(10.5)
      doc.setTextColor(...COLORS.orange)
      const priceText = `Rs.${Number(r.price || 0).toLocaleString('en-IN')}`
      doc.text(priceText, MARGIN + CONTENT_W - 6, ry, { align: 'right' })

      ry += rowH
    })

    return startY + sectionH
  }
}

function drawCard(doc: jsPDF, x: number, y: number, w: number, h: number) {
  doc.setFillColor(...COLORS.card)
  doc.setDrawColor(35, 35, 50)
  doc.setLineWidth(0.2)
  doc.roundedRect(x, y, w, h, 3, 3, 'FD')
}

function truncate(doc: jsPDF, text: string, maxWidth: number): string {
  if (doc.getTextWidth(text) <= maxWidth) return text
  let t = text
  while (doc.getTextWidth(t + '…') > maxWidth && t.length > 0) {
    t = t.slice(0, -1)
  }
  return t + '…'
}

function drawCircularImage(doc: jsPDF, base64: string, x: number, y: number, size: number) {
  try {
    doc.saveGraphicsState()
    const path = (doc as any)
    path.circle(x + size / 2, y + size / 2, size / 2, null)
    ;(doc as any).clip()
    ;(doc as any).discardPath()
    const format = base64.includes('image/png') ? 'PNG' : 'JPEG'
    doc.addImage(base64, format, x, y, size, size)
    doc.restoreGraphicsState()
  } catch (e) {
    // fallback: plain square if clipping isn't supported
    const format = base64.includes('image/png') ? 'PNG' : 'JPEG'
    try { doc.addImage(base64, format, x, y, size, size) } catch {}
  }
}
