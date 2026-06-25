'use client'
import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

// ── FAQs ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Is a brand deal contract legally binding in India?',
    a: 'Yes. A brand deal contract between a creator and brand is legally binding in India under the Indian Contract Act, 1872, provided it has offer, acceptance, consideration (payment), and free consent. A written contract signed by both parties is enforceable in Indian courts. Even a contract signed via email or WhatsApp confirmation can be legally valid, though a formal written contract with signatures is always stronger.',
  },
  {
    q: 'What should a brand deal contract include for Indian creators?',
    a: 'A complete Indian creator brand deal contract must include: names and addresses of both parties, deliverables (exact content type, platform, quantity), timeline (shoot date, revision deadline, go-live date), payment terms (amount, advance percentage, final payment trigger), usage rights (how long the brand can use your content), exclusivity clause (whether you can work with competitors), revision policy (how many rounds are included), disclosure requirements (ASCI guidelines mandate #ad or #sponsored), cancellation terms, and dispute resolution clause.',
  },
  {
    q: 'Do I need a lawyer to create a brand deal contract in India?',
    a: 'Not for standard brand deals. A well-drafted template contract covers all the essential clauses for typical influencer collaborations. You need a lawyer for: deals above ₹5–10 lakh, long-term exclusivity agreements (6+ months), international brand deals involving foreign payment, deals involving IP ownership or content licensing, and any deal with complex performance-based payment structures. For most Indian micro and mid-tier creator brand deals, a standard contract template is sufficient.',
  },
  {
    q: 'What are ASCI guidelines for influencer marketing in India?',
    a: 'The Advertising Standards Council of India (ASCI) requires all paid brand collaborations to be disclosed clearly. You must use labels like #ad, #sponsored, #collab, or "Paid partnership with [Brand]" at the beginning of your caption — not buried at the end. This applies to Instagram posts, Reels, Stories, YouTube videos, and blogs. Failure to disclose can result in ASCI complaints against both the creator and brand. Always include ASCI compliance as a clause in your contract.',
  },
  {
    q: 'What is the standard payment structure for Indian creator brand deals?',
    a: 'The standard payment structure for Indian brand deals is 50% advance before content creation begins, and 50% on delivery or within 7–15 days of going live. For creators with strong track records, some negotiate 100% advance. For new creator-brand relationships, 50/50 is the norm. Always get the advance in writing before starting any creative work. TDS at 10% under Section 194J will be deducted by the brand from the total payment.',
  },
  {
    q: 'What happens if a brand does not pay after content is posted?',
    a: 'If a brand does not pay after content is delivered and posted, you have several options: send a formal legal notice (a lawyer\'s letter often triggers payment), file a complaint with the consumer forum, or pursue recovery in civil court. A signed contract is essential for any legal action. Practically, most Indian creators resolve payment disputes by escalating to the brand\'s marketing head directly via email CC\'ing legal. Having a contract makes this conversation much stronger.',
  },
  {
    q: 'How long should usage rights last in an Indian creator contract?',
    a: 'Standard usage rights in Indian brand deal contracts are 6–12 months for digital use (brand\'s social media, website). Charge 25–50% extra for usage rights beyond your base rate. Perpetual usage rights (forever) should be charged at 100–150% of your base rate. Always specify where the brand can use your content — their own social media, paid ads, OOH/TV/print are all different rights that should be priced separately.',
  },
  {
    q: 'What is an exclusivity clause in a creator contract?',
    a: 'An exclusivity clause prevents you from working with competitor brands for a specified period. For example, if you do a deal with a fintech app, the exclusivity clause might say you cannot work with any other fintech app for 30–90 days. Always charge 25–50% extra for exclusivity — it has real business cost since you are giving up future revenue. Limit exclusivity to the specific product category, not your entire niche, and cap it at 30–60 days maximum for most deals.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const webToolSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Brand Deal Contract Template for Indian Creators 2026',
  url: 'https://identitykit.in/tools/brand-deal-contract-template',
  description: 'Free brand deal contract template for Indian creators. Fill in your details and download a professional, ASCI-compliant PDF contract for brand collaborations. No login required.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  creator: { '@type': 'Organization', name: 'Identity Kit', url: 'https://identitykit.in' },
}

const platforms = ['Instagram', 'YouTube', 'LinkedIn', 'Twitter / X', 'Moj', 'Josh', 'Podcast', 'Blog / Website', 'Other']
const contentTypes = ['Reel / Short Video', 'Static Post / Image', 'Story / Frames', 'Dedicated YouTube Video', 'YouTube Integration (mention)', 'YouTube Shorts', 'Carousel Post', 'Live Session', 'Blog Post', 'Podcast Episode']

function today() {
  return new Date().toISOString().split('T')[0]
}

function addDays(date: string, days: number) {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d.toISOString().split('T')[0]
}

function fmtDate(d: string) {
  if (!d) return '___________'
  return new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })
}

function fmtINR(n: number) {
  return 'Rs. ' + n.toLocaleString('en-IN', { minimumFractionDigits: 0 })
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function BrandDealContractTemplate() {
  // Creator
  const [creatorName, setCreatorName] = useState('')
  const [creatorAddress, setCreatorAddress] = useState('')
  const [creatorEmail, setCreatorEmail] = useState('')
  const [creatorPhone, setCreatorPhone] = useState('')
  const [creatorHandle, setCreatorHandle] = useState('')

  // Brand
  const [brandName, setBrandName] = useState('')
  const [brandAddress, setBrandAddress] = useState('')
  const [brandEmail, setBrandEmail] = useState('')
  const [brandContact, setBrandContact] = useState('')

  // Deal
  const [platform, setPlatform] = useState('Instagram')
  const [contentType, setContentType] = useState('Reel / Short Video')
  const [quantity, setQuantity] = useState('1')
  const [campaignName, setCampaignName] = useState('')
  const [deliverables, setDeliverables] = useState('1 Instagram Reel (60 seconds max), published on creator\'s main feed')
  const [totalFee, setTotalFee] = useState('')
  const [advancePercent, setAdvancePercent] = useState('50')
  const [shootDate, setShootDate] = useState(addDays(today(), 7))
  const [submissionDate, setSubmissionDate] = useState(addDays(today(), 12))
  const [goLiveDate, setGoLiveDate] = useState(addDays(today(), 14))
  const [revisions, setRevisions] = useState('2')
  const [usageMonths, setUsageMonths] = useState('6')
  const [exclusivityDays, setExclusivityDays] = useState('30')
  const [exclusivityCategory, setExclusivityCategory] = useState('')
  const [hasExclusivity, setHasExclusivity] = useState(false)
  const [contractDate, setContractDate] = useState(today())
  const [notes, setNotes] = useState('')

  const [generating, setGenerating] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const fee = parseFloat(totalFee) || 0
  const advanceAmt = Math.round(fee * (parseFloat(advancePercent) / 100))
  const balanceAmt = fee - advanceAmt

  async function generatePDF() {
    if (!creatorName || !brandName || !totalFee) return
    setGenerating(true)
    try {
      const { jsPDF } = await import('jspdf')
      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
      const W = 210, M = 15
      let y = M

      const orange = [255, 107, 43] as [number, number, number]
      const dark = [15, 15, 25] as [number, number, number]
      const gray = [90, 90, 110] as [number, number, number]
      const light = [245, 245, 250] as [number, number, number]
      const white = [255, 255, 255] as [number, number, number]
      const textW = W - M * 2

      const line = (txt: string, size = 9, bold = false, color = dark, indent = 0) => {
        doc.setFont('helvetica', bold ? 'bold' : 'normal')
        doc.setFontSize(size)
        doc.setTextColor(...color)
        const lines = doc.splitTextToSize(txt, textW - indent)
        doc.text(lines, M + indent, y)
        y += lines.length * (size * 0.42) + 1.5
      }

      const gap = (mm = 4) => { y += mm }
      const hr = (color = [220, 220, 230] as [number, number, number]) => {
        doc.setDrawColor(...color)
        doc.setLineWidth(0.3)
        doc.line(M, y, W - M, y)
        y += 4
      }

      const sectionHeader = (title: string) => {
        gap(3)
        doc.setFillColor(...orange)
        doc.rect(M, y, textW, 8, 'F')
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(9)
        doc.setTextColor(...white)
        doc.text(title.toUpperCase(), M + 4, y + 5.5)
        y += 10
      }

      const clause = (num: string, title: string, body: string) => {
        gap(2)
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(8.5)
        doc.setTextColor(...dark)
        doc.text(`${num}. ${title.toUpperCase()}`, M, y)
        y += 5
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(8)
        doc.setTextColor(...gray)
        const lines = doc.splitTextToSize(body, textW - 4)
        doc.text(lines, M + 4, y)
        y += lines.length * 3.6 + 1
      }

      // ── HEADER ───────────────────────────────────────────────────────────────
      doc.setFillColor(...orange)
      doc.rect(0, 0, W, 36, 'F')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(20)
      doc.setTextColor(...white)
      doc.text('BRAND DEAL AGREEMENT', M, y + 10)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9)
      doc.text('Influencer Collaboration Contract — India', M, y + 18)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(8)
      doc.text('identitykit.in', W - M, y + 10, { align: 'right' })
      doc.text(`Date: ${fmtDate(contractDate)}`, W - M, y + 18, { align: 'right' })
      y = 44

      // ── PARTIES ──────────────────────────────────────────────────────────────
      const halfW = (textW - 6) / 2
      doc.setFillColor(...light)
      doc.roundedRect(M, y, halfW, 38, 2, 2, 'F')
      doc.setFont('helvetica', 'bold'); doc.setFontSize(7); doc.setTextColor(...orange)
      doc.text('PARTY A — CONTENT CREATOR', M + 4, y + 6)
      doc.setFont('helvetica', 'bold'); doc.setFontSize(9); doc.setTextColor(...dark)
      doc.text(creatorName.toUpperCase(), M + 4, y + 13)
      doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(...gray)
      if (creatorHandle) doc.text(creatorHandle, M + 4, y + 19)
      const addrLines = doc.splitTextToSize(creatorAddress || 'Address', halfW - 8)
      doc.text(addrLines, M + 4, y + 24)
      if (creatorEmail) doc.text(creatorEmail, M + 4, y + 32)

      const col2 = M + halfW + 6
      doc.setFillColor(...light)
      doc.roundedRect(col2, y, halfW, 38, 2, 2, 'F')
      doc.setFont('helvetica', 'bold'); doc.setFontSize(7); doc.setTextColor(...orange)
      doc.text('PARTY B — BRAND / COMPANY', col2 + 4, y + 6)
      doc.setFont('helvetica', 'bold'); doc.setFontSize(9); doc.setTextColor(...dark)
      doc.text(brandName.toUpperCase(), col2 + 4, y + 13)
      doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(...gray)
      if (brandContact) doc.text(brandContact, col2 + 4, y + 19)
      const brandAddrLines = doc.splitTextToSize(brandAddress || 'Address', halfW - 8)
      doc.text(brandAddrLines, col2 + 4, y + 24)
      if (brandEmail) doc.text(brandEmail, col2 + 4, y + 32)
      y += 44

      // ── INTRO ────────────────────────────────────────────────────────────────
      gap(2)
      line(`This Brand Deal Agreement ("Agreement") is entered into on ${fmtDate(contractDate)} between ${creatorName} ("Creator") and ${brandName} ("Brand"). Both parties agree to the following terms and conditions governing this influencer collaboration.`, 8, false, gray)

      // ── DELIVERABLES ─────────────────────────────────────────────────────────
      sectionHeader('1. Campaign Details & Deliverables')
      gap(1)

      // Campaign summary table
      const rows = [
        ['Platform', platform],
        ['Content Type', contentType],
        ['Quantity', `${quantity} piece(s)`],
        ['Campaign / Product', campaignName || brandName],
        ['Deliverables', deliverables],
      ]
      rows.forEach(([label, val], i) => {
        const bg = i % 2 === 0 ? light : white
        doc.setFillColor(...bg)
        doc.rect(M, y, textW, 7, 'F')
        doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(...dark)
        doc.text(label, M + 3, y + 4.8)
        doc.setFont('helvetica', 'normal'); doc.setTextColor(...gray)
        const vlines = doc.splitTextToSize(val, textW - 55)
        doc.text(vlines[0], M + 52, y + 4.8)
        y += 7
      })

      // ── TIMELINE ─────────────────────────────────────────────────────────────
      sectionHeader('2. Timeline')
      gap(1)
      const timeRows = [
        ['Content Shoot / Creation Start', fmtDate(shootDate)],
        ['Draft Submission to Brand', fmtDate(submissionDate)],
        ['Final Go-Live Date', fmtDate(goLiveDate)],
        ['Revision Rounds Included', `${revisions} rounds (additional revisions chargeable)`],
      ]
      timeRows.forEach(([label, val], i) => {
        const bg = i % 2 === 0 ? light : white
        doc.setFillColor(...bg)
        doc.rect(M, y, textW, 7, 'F')
        doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(...dark)
        doc.text(label, M + 3, y + 4.8)
        doc.setFont('helvetica', 'normal'); doc.setTextColor(...orange)
        doc.text(val, M + 92, y + 4.8)
        y += 7
      })

      // ── PAYMENT ──────────────────────────────────────────────────────────────
      sectionHeader('3. Payment Terms')
      gap(1)
      const payRows = [
        ['Total Collaboration Fee', fmtINR(fee)],
        [`Advance Payment (${advancePercent}%) — Due Before Creation`, fmtINR(advanceAmt)],
        [`Balance Payment (${100 - parseInt(advancePercent)}%) — Due on Go-Live`, fmtINR(balanceAmt)],
        ['TDS Deduction', '10% under Section 194J (deducted by Brand)'],
        ['Payment Method', 'Bank Transfer (NEFT/IMPS/RTGS)'],
        ['Late Payment Penalty', '1.5% per month on outstanding balance'],
      ]
      payRows.forEach(([label, val], i) => {
        const bg = i % 2 === 0 ? light : white
        doc.setFillColor(...bg)
        doc.rect(M, y, textW, 7, 'F')
        doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(...dark)
        doc.text(label, M + 3, y + 4.8)
        doc.setFont('helvetica', i < 3 ? 'bold' : 'normal')
        doc.setTextColor(i < 3 ? orange[0] : gray[0], i < 3 ? orange[1] : gray[1], i < 3 ? orange[2] : gray[2])
        doc.text(val, W - M - 3, y + 4.8, { align: 'right' })
        y += 7
      })
      gap(1)
      line('The Brand shall pay the advance amount before the Creator commences any content creation. Failure to pay the advance within 3 business days of agreement execution shall render this Agreement void.', 7.5, false, gray, 3)

      // ── CLAUSES ──────────────────────────────────────────────────────────────
      sectionHeader('4. Standard Terms & Conditions')

      clause('4.1', 'Usage Rights',
        `The Brand is granted a non-exclusive, non-transferable license to use the Creator's content for digital marketing purposes (Brand's own social media channels and website) for a period of ${usageMonths} months from the go-live date. Use of content in paid advertising, OOH, television, print, or any medium beyond the Brand's owned digital channels requires a separate written agreement and additional licensing fee.`)

      clause('4.2', 'Content Ownership',
        'The Creator retains full ownership and copyright of all content created under this Agreement. The Brand receives a limited license as specified in Clause 4.1. The Creator may continue to feature the content on their own channels indefinitely unless otherwise agreed in writing.')

      if (hasExclusivity) {
        clause('4.3', 'Exclusivity',
          `For a period of ${exclusivityDays} days from the go-live date, the Creator agrees not to promote, endorse, or collaborate with any direct competitor brand in the ${exclusivityCategory || 'same product category'} category. This exclusivity is limited to the specific product/service category and does not restrict the Creator from working with brands in other categories.`)
      } else {
        clause('4.3', 'Non-Exclusivity',
          'This Agreement is non-exclusive. The Creator retains the right to work with other brands, including those in the same product category, unless a separate exclusivity clause has been agreed upon in writing and compensated accordingly.')
      }

      clause('4.4', 'ASCI Disclosure Compliance',
        'The Creator shall clearly disclose this paid collaboration in accordance with ASCI (Advertising Standards Council of India) guidelines. All content must be labeled with #ad, #sponsored, #collab, or "Paid partnership with [Brand Name]" prominently at the beginning of the caption or in the first 3 seconds of video content. Non-disclosure is a violation of this Agreement.')

      clause('4.5', 'Revisions & Approval',
        `The Brand is entitled to ${revisions} round(s) of revisions after draft submission. Revision requests must be submitted within 48 hours of receiving the draft. Additional revision rounds beyond ${revisions} shall be charged at 10% of the total collaboration fee per round. The Creator shall not be required to make revisions that compromise their editorial voice or violate platform guidelines.`)

      clause('4.6', 'Brand Guidelines',
        'The Brand shall provide all necessary brand guidelines, key messages, approved hashtags, product information, and sample products (if applicable) at least 5 business days before the content creation start date. Delay in providing brand assets shall result in a corresponding extension of all deadlines.')

      clause('4.7', 'Content Standards & Platform Guidelines',
        'The Creator shall ensure all content complies with the platform\'s community guidelines, Indian laws, and ASCI guidelines. The Creator shall not create content that is misleading, defamatory, or violates any third-party intellectual property rights.')

      clause('4.8', 'Cancellation Policy',
        'If the Brand cancels this Agreement after the advance payment has been made, the advance is non-refundable. If the Brand cancels before paying the advance, no penalty applies. If the Creator is unable to fulfil the Agreement, the advance payment shall be returned in full within 7 business days.')

      clause('4.9', 'Confidentiality',
        'Both parties agree to keep the financial terms of this Agreement confidential. The Creator may disclose the existence of the collaboration but not the specific fee amount without written consent from the Brand.')

      clause('4.10', 'Governing Law & Dispute Resolution',
        'This Agreement shall be governed by the laws of India. Any disputes arising from this Agreement shall first be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to arbitration under the Arbitration and Conciliation Act, 1996.')

      if (notes) {
        sectionHeader('5. Additional Terms')
        gap(1)
        line(notes, 8, false, gray, 3)
      }

      // ── SIGNATURES ───────────────────────────────────────────────────────────
      gap(6)
      hr([200, 200, 210])
      line('SIGNATURES', 9, true, dark)
      gap(3)

      const sigW = (textW - 10) / 2
      // Creator sig box
      doc.setFillColor(...light)
      doc.roundedRect(M, y, sigW, 30, 2, 2, 'F')
      doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(...dark)
      doc.text('CREATOR', M + 4, y + 7)
      doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(...gray)
      doc.text(creatorName, M + 4, y + 14)
      doc.setDrawColor(...[180, 180, 190] as [number, number, number])
      doc.setLineWidth(0.3)
      doc.line(M + 4, y + 24, M + sigW - 4, y + 24)
      doc.text('Signature & Date', M + 4, y + 29)

      // Brand sig box
      const col2sig = M + sigW + 10
      doc.setFillColor(...light)
      doc.roundedRect(col2sig, y, sigW, 30, 2, 2, 'F')
      doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(...dark)
      doc.text('BRAND REPRESENTATIVE', col2sig + 4, y + 7)
      doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(...gray)
      doc.text(brandName, col2sig + 4, y + 14)
      doc.line(col2sig + 4, y + 24, col2sig + sigW - 4, y + 24)
      doc.text('Authorised Signatory & Date', col2sig + 4, y + 29)
      y += 36

      // ── FOOTER ───────────────────────────────────────────────────────────────
      gap(4)
      hr()
      doc.setFont('helvetica', 'italic'); doc.setFontSize(7); doc.setTextColor(...gray)
      doc.text('This contract template is provided for informational purposes. Identity Kit recommends consulting a legal professional for high-value deals.', W / 2, y, { align: 'center' })
      y += 4
      doc.setFont('helvetica', 'normal')
      doc.text('Generated with Identity Kit · identitykit.in · Free creator tools for India', W / 2, y, { align: 'center' })

      const filename = `Brand-Deal-Contract-${brandName.replace(/\s+/g, '-')}-${creatorName.replace(/\s+/g, '-')}.pdf`
      doc.save(filename)
    } catch (e) {
      console.error(e)
      alert('Could not generate PDF. Please try again.')
    }
    setGenerating(false)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 10,
    padding: '11px 14px',
    fontSize: 14,
    color: '#fff',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s',
  }
  const selectStyle: React.CSSProperties = {
    ...inputStyle, cursor: 'pointer', appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff66' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: 36,
  }
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: 12, fontWeight: 700,
    color: 'rgba(255,255,255,0.45)', marginBottom: 7, letterSpacing: '0.04em', textTransform: 'uppercase',
  }
  const card: React.CSSProperties = {
    background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 18, padding: '24px', marginBottom: 14,
  }

  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webToolSchema) }} />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        input:focus, select:focus, textarea:focus { border-color: rgba(255,107,43,0.5) !important; background: rgba(255,107,43,0.04) !important; }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
        input[type=date]::-webkit-calendar-picker-indicator { filter: invert(0.5); }
        select option { background: #1a1a2e; color: #fff; }
        .g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .g3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 20px 0; cursor: pointer; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-weight: 700; font-size: 15px; color: rgba(255,255,255,0.9); line-height: 1.5; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
        .faq-a { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.75; margin-top: 12px; }
        .toggle-row { display: flex; align-items: center; gap: 12px; cursor: pointer; padding: 14px 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); }
        .toggle { width: 44px; height: 24px; border-radius: 12px; position: relative; transition: background 0.2s; flex-shrink: 0; }
        .toggle-knob { position: absolute; top: 3px; width: 18px; height: 18px; border-radius: 9px; background: #fff; transition: left 0.2s; }
        .clause-preview { background: rgba(255,255,255,0.02); border-left: 3px solid rgba(255,107,43,0.4); border-radius: 0 8px 8px 0; padding: 12px 16px; margin-bottom: 10px; }
        .clause-title { font-size: 12px; font-weight: 700; color: #FF8C5A; margin-bottom: 5px; }
        .clause-body { font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.65; }
        @media (max-width: 640px) {
          .g2 { grid-template-columns: 1fr !important; }
          .g3 { grid-template-columns: 1fr 1fr !important; }
          .hero-title { font-size: 28px !important; }
          .layout { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', height: 58, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '14px 20px' }}>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.35)' }}>Home</Link><span>›</span>
          <Link href="/tools" style={{ color: 'rgba(255,255,255,0.35)' }}>Tools</Link><span>›</span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Brand Deal Contract Template</span>
        </div>
      </div>

      <main style={{ maxWidth: 960, margin: '0 auto', padding: '0 20px 80px' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', paddingTop: 28, paddingBottom: 44 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 700, color: '#FF8C5A', marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            📋 Free Tool for Indian Creators
          </div>
          <h1 className="hero-title" style={{ fontFamily: "'Syne',sans-serif", fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
            Brand Deal Contract Template<br />for Indian Creators 2026
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 540, margin: '0 auto 10px', lineHeight: 1.7 }}>
            Fill in your details and download a professional, ASCI-compliant brand deal contract PDF in seconds. Free for all Indian creators — no login required.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>Free forever · No login · Instant PDF · 10 clauses included</p>
        </div>

        <div className="layout" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 16, alignItems: 'start' }}>
          <div>

            {/* CREATOR DETAILS */}
            <div style={card}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Your Details (Creator)</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Appears as Party A — the content creator</p>
              <div className="g2" style={{ marginBottom: 12 }}>
                <div><label style={labelStyle}>Full Name *</label><input style={inputStyle} placeholder="Priya Sharma" value={creatorName} onChange={e => setCreatorName(e.target.value)} /></div>
                <div><label style={labelStyle}>Instagram / YouTube Handle</label><input style={inputStyle} placeholder="@priyasharma" value={creatorHandle} onChange={e => setCreatorHandle(e.target.value)} /></div>
              </div>
              <div style={{ marginBottom: 12 }}><label style={labelStyle}>Address</label><input style={inputStyle} placeholder="Flat 4B, Andheri West, Mumbai, Maharashtra 400053" value={creatorAddress} onChange={e => setCreatorAddress(e.target.value)} /></div>
              <div className="g2">
                <div><label style={labelStyle}>Email *</label><input style={inputStyle} placeholder="priya@gmail.com" value={creatorEmail} onChange={e => setCreatorEmail(e.target.value)} /></div>
                <div><label style={labelStyle}>Phone</label><input style={inputStyle} placeholder="+91 98765 43210" value={creatorPhone} onChange={e => setCreatorPhone(e.target.value)} /></div>
              </div>
            </div>

            {/* BRAND DETAILS */}
            <div style={card}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Brand Details</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Appears as Party B — the company paying you</p>
              <div className="g2" style={{ marginBottom: 12 }}>
                <div><label style={labelStyle}>Brand / Company Name *</label><input style={inputStyle} placeholder="Mamaearth India Pvt. Ltd." value={brandName} onChange={e => setBrandName(e.target.value)} /></div>
                <div><label style={labelStyle}>Contact Person Name</label><input style={inputStyle} placeholder="Rohit Mehta (Marketing Manager)" value={brandContact} onChange={e => setBrandContact(e.target.value)} /></div>
              </div>
              <div style={{ marginBottom: 12 }}><label style={labelStyle}>Brand Address</label><input style={inputStyle} placeholder="Registered office address" value={brandAddress} onChange={e => setBrandAddress(e.target.value)} /></div>
              <div><label style={labelStyle}>Brand Email</label><input style={inputStyle} placeholder="collabs@brand.com" value={brandEmail} onChange={e => setBrandEmail(e.target.value)} /></div>
            </div>

            {/* CAMPAIGN DETAILS */}
            <div style={card}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Campaign & Deliverables</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>What exactly you are delivering</p>
              <div className="g3" style={{ marginBottom: 12 }}>
                <div><label style={labelStyle}>Platform</label>
                  <select style={selectStyle} value={platform} onChange={e => setPlatform(e.target.value)}>
                    {platforms.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div><label style={labelStyle}>Content Type</label>
                  <select style={selectStyle} value={contentType} onChange={e => setContentType(e.target.value)}>
                    {contentTypes.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div><label style={labelStyle}>Quantity</label><input type="number" min="1" style={inputStyle} value={quantity} onChange={e => setQuantity(e.target.value)} /></div>
              </div>
              <div style={{ marginBottom: 12 }}><label style={labelStyle}>Campaign / Product Name</label><input style={inputStyle} placeholder="Mamaearth Vitamin C Serum Launch" value={campaignName} onChange={e => setCampaignName(e.target.value)} /></div>
              <div><label style={labelStyle}>Deliverables Description</label>
                <textarea style={{ ...inputStyle, minHeight: 70, lineHeight: 1.6, resize: 'vertical' }} value={deliverables} onChange={e => setDeliverables(e.target.value)} />
              </div>
            </div>

            {/* PAYMENT */}
            <div style={card}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Payment Terms</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Standard is 50% advance + 50% on go-live</p>
              <div className="g2" style={{ marginBottom: 12 }}>
                <div><label style={labelStyle}>Total Collaboration Fee (₹) *</label><input type="number" style={inputStyle} placeholder="25000" value={totalFee} onChange={e => setTotalFee(e.target.value)} /></div>
                <div><label style={labelStyle}>Advance % (before creation)</label>
                  <select style={selectStyle} value={advancePercent} onChange={e => setAdvancePercent(e.target.value)}>
                    {['25', '50', '75', '100'].map(p => <option key={p} value={p}>{p}% advance</option>)}
                  </select>
                </div>
              </div>
              {fee > 0 && (
                <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 10, padding: '12px 16px', fontSize: 13, display: 'flex', gap: 24 }}>
                  <div><span style={{ color: 'rgba(255,255,255,0.4)' }}>Advance: </span><strong style={{ color: '#FF8C5A' }}>₹{advanceAmt.toLocaleString('en-IN')}</strong></div>
                  <div><span style={{ color: 'rgba(255,255,255,0.4)' }}>Balance: </span><strong style={{ color: '#4CAF50' }}>₹{balanceAmt.toLocaleString('en-IN')}</strong></div>
                  <div><span style={{ color: 'rgba(255,255,255,0.4)' }}>TDS (10%): </span><strong style={{ color: 'rgba(255,255,255,0.6)' }}>₹{Math.round(fee * 0.1).toLocaleString('en-IN')}</strong></div>
                </div>
              )}
            </div>

            {/* TIMELINE */}
            <div style={card}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Timeline & Revisions</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Set clear dates — vague timelines cause most brand deal disputes</p>
              <div className="g3" style={{ marginBottom: 12 }}>
                <div><label style={labelStyle}>Contract Date</label><input type="date" style={inputStyle} value={contractDate} onChange={e => setContractDate(e.target.value)} /></div>
                <div><label style={labelStyle}>Content Shoot Start</label><input type="date" style={inputStyle} value={shootDate} onChange={e => setShootDate(e.target.value)} /></div>
                <div><label style={labelStyle}>Draft Submission</label><input type="date" style={inputStyle} value={submissionDate} onChange={e => setSubmissionDate(e.target.value)} /></div>
              </div>
              <div className="g2">
                <div><label style={labelStyle}>Go-Live Date</label><input type="date" style={inputStyle} value={goLiveDate} onChange={e => setGoLiveDate(e.target.value)} /></div>
                <div><label style={labelStyle}>Revision Rounds Included</label>
                  <select style={selectStyle} value={revisions} onChange={e => setRevisions(e.target.value)}>
                    {['1', '2', '3'].map(r => <option key={r} value={r}>{r} round{r !== '1' ? 's' : ''}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* USAGE + EXCLUSIVITY */}
            <div style={card}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Usage Rights & Exclusivity</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Charge extra for both — they have real business value</p>
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Content Usage Rights Duration</label>
                <select style={{ ...selectStyle, maxWidth: 260 }} value={usageMonths} onChange={e => setUsageMonths(e.target.value)}>
                  {[['3', '3 months'], ['6', '6 months'], ['12', '12 months'], ['24', '24 months'], ['0', 'Perpetual (lifetime)']].map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </div>
              <div className="toggle-row" onClick={() => setHasExclusivity(!hasExclusivity)} style={{ marginBottom: hasExclusivity ? 12 : 0 }}>
                <div className="toggle" style={{ background: hasExclusivity ? '#FF6B2B' : 'rgba(255,255,255,0.1)' }}>
                  <div className="toggle-knob" style={{ left: hasExclusivity ? '23px' : '3px' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>Include Exclusivity Clause</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>Charge 25–50% extra if you add this</div>
                </div>
              </div>
              {hasExclusivity && (
                <div className="g2" style={{ marginTop: 12 }}>
                  <div><label style={labelStyle}>Exclusivity Duration (days)</label>
                    <select style={selectStyle} value={exclusivityDays} onChange={e => setExclusivityDays(e.target.value)}>
                      {[['15', '15 days'], ['30', '30 days'], ['45', '45 days'], ['60', '60 days'], ['90', '90 days']].map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                    </select>
                  </div>
                  <div><label style={labelStyle}>Competing Category</label><input style={inputStyle} placeholder="e.g. skincare brands" value={exclusivityCategory} onChange={e => setExclusivityCategory(e.target.value)} /></div>
                </div>
              )}
            </div>

            {/* NOTES */}
            <div style={card}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Additional Terms <span style={{ fontSize: 13, fontWeight: 400, color: 'rgba(255,255,255,0.3)' }}>(optional)</span></div>
              <textarea style={{ ...inputStyle, minHeight: 80, lineHeight: 1.6, resize: 'vertical', marginTop: 12 }} placeholder="Any specific terms for this deal — product gifting value, ambassador terms, content usage in TV ads, etc." value={notes} onChange={e => setNotes(e.target.value)} />
            </div>

          </div>

          {/* STICKY SIDEBAR */}
          <div style={{ position: 'sticky', top: 20 }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 20, padding: '24px 20px', marginBottom: 12 }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16, marginBottom: 18 }}>Contract Summary</div>
              {[
                ['Creator', creatorName || '—'],
                ['Brand', brandName || '—'],
                ['Platform', platform],
                ['Content', contentType],
                ['Qty', quantity],
                ['Go-Live', goLiveDate ? fmtDate(goLiveDate) : '—'],
                ['Total Fee', fee ? `₹${fee.toLocaleString('en-IN')}` : '—'],
                ['Advance', fee ? `₹${advanceAmt.toLocaleString('en-IN')} (${advancePercent}%)` : '—'],
                ['Usage Rights', usageMonths === '0' ? 'Perpetual' : `${usageMonths} months`],
                ['Exclusivity', hasExclusivity ? `${exclusivityDays} days` : 'None'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: 13 }}>
                  <span style={{ color: 'rgba(255,255,255,0.4)' }}>{k}</span>
                  <span style={{ fontWeight: 600, color: 'rgba(255,255,255,0.8)', textAlign: 'right', maxWidth: 140 }}>{v}</span>
                </div>
              ))}

              <button
                onClick={generatePDF}
                disabled={generating || !creatorName || !brandName || !totalFee}
                style={{ width: '100%', marginTop: 20, background: generating || !creatorName || !brandName || !totalFee ? 'rgba(255,107,43,0.3)' : '#FF6B2B', border: 'none', color: '#fff', padding: '14px 20px', borderRadius: 12, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 15, cursor: generating || !creatorName || !brandName || !totalFee ? 'not-allowed' : 'pointer', transition: 'all 0.2s', marginBottom: 8 }}
              >
                {generating ? 'Generating...' : '⬇ Download Contract PDF'}
              </button>
              {(!creatorName || !brandName || !totalFee) && (
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center' }}>Fill name, brand & fee to download</p>
              )}

              <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.7 }}>
                ✅ 10 standard clauses included<br />
                ✅ ASCI disclosure clause<br />
                ✅ Usage rights & exclusivity<br />
                ✅ TDS & payment terms<br />
                ✅ Cancellation & dispute clause<br />
                ✅ Signature section ready
              </div>
            </div>

            <div style={{ background: 'rgba(255,107,43,0.05)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 14, padding: '14px 16px' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#FF9A6B', marginBottom: 8 }}>💡 Pro tip</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>
                Always get the <strong style={{ color: 'rgba(255,255,255,0.6)' }}>advance payment before</strong> creating any content. A signed contract without advance payment is still a risk — money in the bank is the only guarantee.
              </div>
            </div>
          </div>
        </div>

        {/* WHAT'S INCLUDED */}
        <div style={{ marginTop: 52, marginBottom: 52 }}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>What's Included in This Contract</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>10 standard clauses covering everything a professional brand deal contract needs.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { num: '01', title: 'Campaign Details & Deliverables', desc: 'Platform, content type, quantity, and exact description of what you will deliver.' },
              { num: '02', title: 'Timeline & Deadlines', desc: 'Shoot date, draft submission, go-live date, and revision turnaround time — all locked in writing.' },
              { num: '03', title: 'Payment Terms', desc: 'Total fee, advance percentage, balance payment trigger, TDS clause, and late payment penalty.' },
              { num: '04', title: 'Usage Rights', desc: 'How long the brand can use your content and on which channels — with clear limits on ad usage.' },
              { num: '05', title: 'Content Ownership', desc: 'You retain copyright of all content. Brand gets a limited license only.' },
              { num: '06', title: 'Exclusivity Clause', desc: 'Optional — prevents you from working with competitors for a specified period in exchange for extra pay.' },
              { num: '07', title: 'ASCI Disclosure', desc: 'Mandatory disclosure requirement per Indian advertising standards — protects both parties.' },
              { num: '08', title: 'Revision Policy', desc: 'Number of free revision rounds, turnaround time, and charges for additional revisions.' },
              { num: '09', title: 'Cancellation Terms', desc: 'What happens if the brand cancels — advance is non-refundable. Protects you from last-minute pullouts.' },
              { num: '10', title: 'Dispute Resolution', desc: 'Governed by Indian law. Disputes go to arbitration under the Arbitration and Conciliation Act, 1996.' },
            ].map(c => (
              <div key={c.num} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '16px 18px', display: 'flex', gap: 14 }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 22, color: 'rgba(255,107,43,0.3)', flexShrink: 0, lineHeight: 1 }}>{c.num}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 5 }}>{c.title}</div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.1), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 24, padding: '48px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden', marginBottom: 64 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(255,107,43,0.1), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ fontSize: 48, marginBottom: 16 }}>📋</div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.5px' }}>Show brands your rate card before they even ask</h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.75, maxWidth: 440, margin: '0 auto 28px' }}>Identity Kit gives you a professional link with your media kit, rate card and creator CV — brands see your rates the moment they land on your profile. No more back-and-forth.</p>
          <Link href="/auth?mode=signup" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 14, padding: '14px 36px', fontWeight: 800, fontSize: 15, letterSpacing: '-0.3px' }}>Build my free creator profile →</Link>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', marginTop: 14 }}>Free forever. No credit card. 10 minutes.</p>
        </div>

        {/* FAQ */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.5px' }}>Frequently Asked Questions</h2>
        <div style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '8px 24px', marginBottom: 64 }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="faq-q">{faq.q}<span style={{ color: '#FF6B2B', flexShrink: 0, fontSize: 18 }}>{openFaq === i ? '−' : '+'}</span></div>
              {openFaq === i && <div className="faq-a">{faq.a}</div>}
            </div>
          ))}
        </div>

        {/* RELATED */}
        <div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, marginBottom: 20 }}>Related Tools & Guides</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { href: '/tools/influencer-rate-calculator', tag: 'Free Tool', title: 'Influencer Rate Calculator — What to Charge for Brand Deals' },
              { href: '/tools/gst-invoice-generator', tag: 'Free Tool', title: 'GST Invoice Generator — Bill Your Brand Deals Professionally' },
              { href: '/tools/instagram-engagement-calculator', tag: 'Free Tool', title: 'Instagram Engagement Rate Calculator India' },
              { href: '/tools/instagram-bio-generator', tag: 'Free Tool', title: 'Instagram Bio Generator for Indian Creators' },
            ].map(r => (
              <Link key={r.href} href={r.href}>
                <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 18, height: '100%' }}>
                  <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 100, display: 'inline-block', marginBottom: 10 }}>{r.tag}</span>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.5, margin: 0, fontWeight: 600 }}>{r.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

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
    </div>
  )
}
