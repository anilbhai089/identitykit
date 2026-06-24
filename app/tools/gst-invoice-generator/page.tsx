'use client'
import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

// ── FAQ data ──────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Do Indian content creators need to charge GST on brand deals?',
    a: 'Yes, if your total annual income from all sources exceeds ₹20 lakh (₹10 lakh for special category states like Himachal Pradesh, Uttarakhand, and North-East states), you must register for GST and charge 18% GST on all brand deal invoices. Below ₹20 lakh, GST registration is optional but recommended for credibility. Even without GST registration, you must still issue a professional invoice for every brand payment.',
  },
  {
    q: 'What GST rate applies to influencer and creator services in India?',
    a: 'Influencer marketing services, content creation, and brand collaborations fall under SAC code 998361 (Advertising and related services) and are taxed at 18% GST. This applies to Instagram Reels, YouTube brand integrations, blog posts, podcast sponsorships, and all other paid creator content. The 18% GST is charged on top of your base rate and collected from the brand.',
  },
  {
    q: 'What is the SAC code for influencer marketing services in India?',
    a: 'The SAC (Services Accounting Code) for influencer marketing and content creator services is 998361, which covers "Advertising and related services." Some creators also use 998399 (Other professional, technical and business services) or 999000. SAC code 998361 is the most widely accepted by Indian brands and CA firms for influencer invoices.',
  },
  {
    q: 'What should a GST invoice from an Indian creator include?',
    a: 'A valid GST invoice from an Indian creator must include: your full legal name and address, your GSTIN (if registered), the brand\'s name, address and GSTIN, a unique sequential invoice number, invoice date, description of services rendered, base amount, CGST (9%) + SGST (9%) if both parties are in the same state OR IGST (18%) if in different states, total amount payable, and your bank details for payment. Missing any of these makes the invoice non-compliant.',
  },
  {
    q: 'What is the difference between CGST+SGST and IGST on creator invoices?',
    a: 'If you and the brand are in the same state (e.g., both in Maharashtra), you charge CGST (9%) + SGST (9%) = 18% total. If you and the brand are in different states (e.g., you are in Delhi and the brand is in Mumbai/Maharashtra), you charge IGST (18%) instead. The total tax is always 18% — only the split changes. This calculator automatically applies the correct tax type based on the states you enter.',
  },
  {
    q: 'Is TDS deducted on influencer payments in India?',
    a: 'Yes. Brands deduct TDS (Tax Deducted at Source) at 10% under Section 194J (professional fees) or 1% under Section 194C (contractor) before paying you. This means if your invoice is ₹1,00,000, the brand pays you ₹90,000 and deposits ₹10,000 as TDS with the government. You can claim this TDS credit when filing your ITR. Always mention "TDS as applicable" on your invoices and collect Form 16A from the brand each quarter.',
  },
  {
    q: 'Do I need a CA to file GST returns as a creator in India?',
    a: 'Not necessarily. Creators with straightforward income (brand deals, AdSense, course sales) can file GST returns themselves using the GST portal (gst.gov.in). You file GSTR-1 (monthly/quarterly outward supplies) and GSTR-3B (monthly summary). However, if you have multiple income streams, import of services (foreign brand deals), or complex input tax credits, a CA is recommended. Many CAs charge ₹2,000–₹5,000/month for creator GST compliance.',
  },
  {
    q: 'Can I claim input tax credit (ITC) on expenses as a creator?',
    a: 'Yes, if you are GST registered, you can claim Input Tax Credit (ITC) on GST paid for business expenses — camera, lighting equipment, editing software subscriptions, studio rent, advertising spend, and other tools used for content creation. You cannot claim ITC on personal expenses. This is a significant benefit of GST registration — the GST you pay on ₹1 lakh worth of equipment (₹18,000 GST) can be offset against the GST you collect from brands.',
  },
]

// ── Schema ────────────────────────────────────────────────────────────────────
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
  name: 'GST Invoice Generator for Indian Creators 2026',
  url: 'https://identitykit.in/tools/gst-invoice-generator',
  description: 'Free GST invoice generator for Indian content creators and influencers. Generate professional GST-compliant invoices for brand deals in seconds. Supports CGST+SGST and IGST. Download as PDF.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  creator: { '@type': 'Organization', name: 'Identity Kit', url: 'https://identitykit.in' },
}

// ── Indian states list ────────────────────────────────────────────────────────
const states = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh',
  'Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka',
  'Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram',
  'Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana',
  'Tripura','Uttar Pradesh','Uttarakhand','West Bengal',
  'Andaman & Nicobar Islands','Chandigarh','Dadra & Nagar Haveli','Daman & Diu',
  'Delhi','Jammu & Kashmir','Ladakh','Lakshadweep','Puducherry',
]

function fmtINR(n: number) {
  return '₹' + n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function numberToWords(num: number): string {
  const ones = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine',
    'Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen']
  const tens = ['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety']
  if (num === 0) return 'Zero'
  const convert = (n: number): string => {
    if (n < 20) return ones[n]
    if (n < 100) return tens[Math.floor(n/10)] + (n%10 ? ' ' + ones[n%10] : '')
    if (n < 1000) return ones[Math.floor(n/100)] + ' Hundred' + (n%100 ? ' ' + convert(n%100) : '')
    if (n < 100000) return convert(Math.floor(n/1000)) + ' Thousand' + (n%1000 ? ' ' + convert(n%1000) : '')
    if (n < 10000000) return convert(Math.floor(n/100000)) + ' Lakh' + (n%100000 ? ' ' + convert(n%100000) : '')
    return convert(Math.floor(n/10000000)) + ' Crore' + (n%10000000 ? ' ' + convert(n%10000000) : '')
  }
  const rupees = Math.floor(num)
  const paise = Math.round((num - rupees) * 100)
  let result = convert(rupees) + ' Rupees'
  if (paise > 0) result += ' and ' + convert(paise) + ' Paise'
  return result + ' Only'
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function GSTInvoiceGenerator() {
  // Creator details
  const [creatorName, setCreatorName] = useState('')
  const [creatorAddress, setCreatorAddress] = useState('')
  const [creatorState, setCreatorState] = useState('Maharashtra')
  const [creatorGSTIN, setCreatorGSTIN] = useState('')
  const [creatorPAN, setCreatorPAN] = useState('')
  const [creatorEmail, setCreatorEmail] = useState('')
  const [bankName, setBankName] = useState('')
  const [accountNo, setAccountNo] = useState('')
  const [ifsc, setIfsc] = useState('')
  const [accountHolder, setAccountHolder] = useState('')

  // Brand details
  const [brandName, setBrandName] = useState('')
  const [brandAddress, setBrandAddress] = useState('')
  const [brandState, setBrandState] = useState('Delhi')
  const [brandGSTIN, setBrandGSTIN] = useState('')

  // Invoice details
  const [invoiceNo, setInvoiceNo] = useState('INV-001')
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0])
  const [dueDate, setDueDate] = useState('')
  const [services, setServices] = useState([
    { description: 'Instagram Reel — Brand Integration', qty: 1, rate: 25000 },
  ])
  const [isGSTRegistered, setIsGSTRegistered] = useState(true)
  const [notes, setNotes] = useState('TDS as applicable under Section 194J.\nPayment due within 15 days of invoice date.')

  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [generating, setGenerating] = useState(false)
  const [previewVisible, setPreviewVisible] = useState(false)

  // ── Calculations ─────────────────────────────────────────────────────────────
  const subtotal = services.reduce((sum, s) => sum + s.qty * s.rate, 0)
  const sameState = creatorState === brandState
  const gstRate = 0.18
  const gstAmount = isGSTRegistered ? subtotal * gstRate : 0
  const cgst = sameState ? gstAmount / 2 : 0
  const sgst = sameState ? gstAmount / 2 : 0
  const igst = !sameState ? gstAmount : 0
  const total = subtotal + gstAmount

  function addService() {
    setServices([...services, { description: '', qty: 1, rate: 0 }])
  }
  function removeService(i: number) {
    setServices(services.filter((_, idx) => idx !== i))
  }
  function updateService(i: number, field: string, value: string | number) {
    const updated = [...services]
    updated[i] = { ...updated[i], [field]: value }
    setServices(updated)
  }

  // ── PDF Generation ─────────────────────────────────────────────────────────
  async function generatePDF() {
    setGenerating(true)
    try {
      const { jsPDF } = await import('jspdf')
      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
      const W = 210, margin = 15
      let y = margin

      // Colors
      const orange = [255, 107, 43] as [number, number, number]
      const dark = [10, 10, 20] as [number, number, number]
      const gray = [100, 100, 120] as [number, number, number]
      const lightGray = [240, 240, 245] as [number, number, number]
      const white = [255, 255, 255] as [number, number, number]

      // Header background
      doc.setFillColor(...orange)
      doc.rect(0, 0, W, 42, 'F')

      // TAX INVOICE title
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(22)
      doc.setTextColor(...white)
      doc.text('TAX INVOICE', margin, y + 10)

      // Invoice number + date top right
      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')
      doc.text(`Invoice No: ${invoiceNo}`, W - margin, y + 8, { align: 'right' })
      doc.text(`Date: ${new Date(invoiceDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}`, W - margin, y + 14, { align: 'right' })
      if (dueDate) doc.text(`Due: ${new Date(dueDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}`, W - margin, y + 20, { align: 'right' })
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(10)
      doc.text('identitykit.in', W - margin, y + 30, { align: 'right' })

      y = 50

      // FROM / TO section
      const colW = (W - margin * 2 - 8) / 2

      // FROM box
      doc.setFillColor(...lightGray)
      doc.roundedRect(margin, y, colW, 52, 3, 3, 'F')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(8)
      doc.setTextColor(...orange)
      doc.text('FROM', margin + 5, y + 8)
      doc.setTextColor(...dark)
      doc.setFontSize(11)
      doc.text(creatorName || 'Your Name', margin + 5, y + 16)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8)
      doc.setTextColor(...gray)
      const creatorAddressLines = doc.splitTextToSize(creatorAddress || 'Your Address', colW - 10)
      doc.text(creatorAddressLines, margin + 5, y + 22)
      doc.text(creatorState, margin + 5, y + 32)
      if (creatorGSTIN) doc.text(`GSTIN: ${creatorGSTIN}`, margin + 5, y + 38)
      if (creatorPAN) doc.text(`PAN: ${creatorPAN}`, margin + 5, y + 44)
      if (creatorEmail) doc.text(creatorEmail, margin + 5, y + 50)

      // TO box
      const col2x = margin + colW + 8
      doc.setFillColor(...lightGray)
      doc.roundedRect(col2x, y, colW, 52, 3, 3, 'F')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(8)
      doc.setTextColor(...orange)
      doc.text('BILL TO', col2x + 5, y + 8)
      doc.setTextColor(...dark)
      doc.setFontSize(11)
      doc.text(brandName || 'Brand Name', col2x + 5, y + 16)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8)
      doc.setTextColor(...gray)
      const brandAddressLines = doc.splitTextToSize(brandAddress || 'Brand Address', colW - 10)
      doc.text(brandAddressLines, col2x + 5, y + 22)
      doc.text(brandState, col2x + 5, y + 32)
      if (brandGSTIN) doc.text(`GSTIN: ${brandGSTIN}`, col2x + 5, y + 38)

      y += 60

      // Services table header
      doc.setFillColor(...dark)
      doc.rect(margin, y, W - margin * 2, 9, 'F')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(8)
      doc.setTextColor(...white)
      doc.text('#', margin + 3, y + 6)
      doc.text('Description of Services', margin + 10, y + 6)
      doc.text('Qty', W - margin - 60, y + 6)
      doc.text('Rate (Rs)', W - margin - 42, y + 6)
      doc.text('Amount (Rs)', W - margin - 18, y + 6, { align: 'right' })
      y += 9

      // Service rows
      services.forEach((s, i) => {
        const bg = i % 2 === 0 ? white : [248, 248, 252] as [number, number, number]
        doc.setFillColor(...bg)
        doc.rect(margin, y, W - margin * 2, 9, 'F')
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(8)
        doc.setTextColor(...dark)
        doc.text(String(i + 1), margin + 3, y + 6)
        const descLines = doc.splitTextToSize(s.description || 'Service', W - margin * 2 - 75)
        doc.text(descLines[0], margin + 10, y + 6)
        doc.text(String(s.qty), W - margin - 57, y + 6)
        doc.text(s.rate.toLocaleString('en-IN'), W - margin - 39, y + 6)
        doc.text((s.qty * s.rate).toLocaleString('en-IN'), W - margin - 2, y + 6, { align: 'right' })
        y += 9
      })

      // Totals section
      y += 4
      const totColX = W - margin - 80

      const addTotalRow = (label: string, value: string, bold = false, highlight = false) => {
        if (highlight) {
          doc.setFillColor(...orange)
          doc.rect(totColX - 5, y - 1, 85, 9, 'F')
        }
        doc.setFont('helvetica', bold ? 'bold' : 'normal')
        doc.setFontSize(bold ? 10 : 8)
        doc.setTextColor(highlight ? 255 : (bold ? dark[0] : gray[0]), highlight ? 255 : (bold ? dark[1] : gray[1]), highlight ? 255 : (bold ? dark[2] : gray[2]))
        doc.text(label, totColX, y + 6)
        doc.text(value, W - margin - 2, y + 6, { align: 'right' })
        y += 9
      }

      addTotalRow('Subtotal', subtotal.toLocaleString('en-IN'), false, false)
      if (isGSTRegistered) {
        if (sameState) {
          addTotalRow(`CGST @ 9%`, cgst.toLocaleString('en-IN', { minimumFractionDigits: 2 }))
          addTotalRow(`SGST @ 9%`, sgst.toLocaleString('en-IN', { minimumFractionDigits: 2 }))
        } else {
          addTotalRow(`IGST @ 18%`, igst.toLocaleString('en-IN', { minimumFractionDigits: 2 }))
        }
      }
      addTotalRow('TOTAL', total.toLocaleString('en-IN', { minimumFractionDigits: 2 }), true, true)

      // Amount in words
      y += 4
      doc.setFont('helvetica', 'italic')
      doc.setFontSize(8)
      doc.setTextColor(...gray)
      const words = numberToWords(total)
      const wordLines = doc.splitTextToSize(`Amount in Words: ${words}`, W - margin * 2)
      doc.text(wordLines, margin, y)
      y += wordLines.length * 5 + 6

      // SAC Code
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8)
      doc.setTextColor(...gray)
      doc.text('SAC Code: 998361 (Advertising and related services)', margin, y)
      y += 10

      // Bank details
      if (bankName || accountNo || ifsc) {
        doc.setFillColor(...lightGray)
        doc.roundedRect(margin, y, W - margin * 2, 42, 3, 3, 'F')
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(9)
        doc.setTextColor(...orange)
        doc.text('BANK DETAILS', margin + 5, y + 8)
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(8)
        doc.setTextColor(...dark)
        // Two column layout inside bank box
        const bCol2 = margin + (W - margin * 2) / 2
        if (accountHolder) doc.text(`Account Name: ${accountHolder}`, margin + 5, y + 18)
        if (bankName) doc.text(`Bank: ${bankName}`, margin + 5, y + 26)
        if (accountNo) doc.text(`Account No: ${accountNo}`, bCol2, y + 18)
        if (ifsc) doc.text(`IFSC Code: ${ifsc}`, bCol2, y + 26)
        y += 50
      }

      // Notes
      if (notes) {
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(8)
        doc.setTextColor(...gray)
        const noteLines = doc.splitTextToSize(`Notes: ${notes}`, W - margin * 2)
        doc.text(noteLines, margin, y)
        y += noteLines.length * 5 + 8
      }

      // Footer line
      doc.setDrawColor(...orange)
      doc.setLineWidth(0.8)
      doc.line(margin, 280, W - margin, 280)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(7)
      doc.setTextColor(...gray)
      doc.text('Generated with Identity Kit · identitykit.in · Free creator tools for India', W / 2, 285, { align: 'center' })

      doc.save(`${invoiceNo}-${(brandName || 'invoice').replace(/\s+/g, '-')}.pdf`)
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
    ...inputStyle,
    cursor: 'pointer',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff66' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
    paddingRight: 36,
  }

  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: 12, fontWeight: 700,
    color: 'rgba(255,255,255,0.45)', marginBottom: 6, letterSpacing: '0.04em', textTransform: 'uppercase',
  }

  const sectionTitle = (title: string, sub?: string) => (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17 }}>{title}</div>
      {sub && <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{sub}</p>}
    </div>
  )

  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>

      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webToolSchema) }} />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        input:focus, select:focus, textarea:focus { border-color: rgba(255,107,43,0.5) !important; background: rgba(255,107,43,0.04) !important; }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
        input::-webkit-outer-spin-button, input::-webkit-inner-spin-button { -webkit-appearance: none; }
        select option { background: #1a1a2e; color: #fff; }
        textarea { resize: vertical; }
        .g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .g3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
        .section-card { background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.08); border-radius: 18px; padding: 24px; margin-bottom: 14px; }
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 20px 0; cursor: pointer; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-weight: 700; font-size: 15px; color: rgba(255,255,255,0.9); line-height: 1.5; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
        .faq-a { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.75; margin-top: 12px; }
        .service-row { display: grid; grid-template-columns: 1fr 60px 100px 36px; gap: 8px; align-items: end; margin-bottom: 10px; }
        .tag { background: rgba(255,107,43,0.1); color: #FF6B2B; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 100px; display: inline-block; margin-bottom: 10px; }
        .toggle-row { display: flex; align-items: center; gap: 12px; cursor: pointer; padding: 14px 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); transition: border-color 0.2s; }
        .toggle-row:hover { border-color: rgba(255,107,43,0.3); }
        .toggle { width: 44px; height: 24px; border-radius: 12px; position: relative; transition: background 0.2s; flex-shrink: 0; }
        .toggle-knob { position: absolute; top: 3px; width: 18px; height: 18px; border-radius: 9px; background: #fff; transition: left 0.2s; }
        .summary-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 14px; }
        .summary-row:last-child { border-bottom: none; }
        @media (max-width: 640px) {
          .g2 { grid-template-columns: 1fr !important; }
          .g3 { grid-template-columns: 1fr 1fr !important; }
          .service-row { grid-template-columns: 1fr 50px 90px 28px !important; }
          .hero-title { font-size: 28px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', height: 58, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '14px 20px' }}>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.35)' }}>Home</Link>
          <span>›</span>
          <Link href="/tools" style={{ color: 'rgba(255,255,255,0.35)' }}>Tools</Link>
          <span>›</span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>GST Invoice Generator for Creators</span>
        </div>
      </div>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 80px' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', paddingTop: 28, paddingBottom: 44 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 700, color: '#FF8C5A', marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            🧾 Free Tool for Indian Creators
          </div>
          <h1 className="hero-title" style={{ fontFamily: "'Syne',sans-serif", fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
            GST Invoice Generator<br />for Indian Creators 2026
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto 10px', lineHeight: 1.7 }}>
            Generate professional GST-compliant invoices for your brand deals in seconds. Supports CGST+SGST and IGST. Download as PDF instantly — free, no login.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>Free forever · No login required · Instant PDF download</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 16, alignItems: 'start' }}>
          <div>

            {/* GST Toggle */}
            <div style={{ marginBottom: 14 }}>
              <div className="toggle-row" onClick={() => setIsGSTRegistered(!isGSTRegistered)}>
                <div className="toggle" style={{ background: isGSTRegistered ? '#FF6B2B' : 'rgba(255,255,255,0.1)' }}>
                  <div className="toggle-knob" style={{ left: isGSTRegistered ? '23px' : '3px' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>I am GST Registered</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>
                    {isGSTRegistered ? '18% GST will be added to your invoice' : 'Invoice without GST — add your PAN instead'}
                  </div>
                </div>
              </div>
            </div>

            {/* YOUR DETAILS */}
            <div className="section-card">
              {sectionTitle('Your Details', 'As the service provider — your name appears at the top of the invoice')}
              <div className="g2" style={{ marginBottom: 12 }}>
                <div>
                  <label style={labelStyle}>Full Name / Business Name *</label>
                  <input style={inputStyle} placeholder="Riya Sharma" value={creatorName} onChange={e => setCreatorName(e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input style={inputStyle} placeholder="riya@gmail.com" value={creatorEmail} onChange={e => setCreatorEmail(e.target.value)} />
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <label style={labelStyle}>Address *</label>
                <input style={inputStyle} placeholder="Flat 4B, Andheri West, Mumbai" value={creatorAddress} onChange={e => setCreatorAddress(e.target.value)} />
              </div>
              <div className="g3" style={{ marginBottom: 12 }}>
                <div>
                  <label style={labelStyle}>State *</label>
                  <select style={selectStyle} value={creatorState} onChange={e => setCreatorState(e.target.value)}>
                    {states.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>{isGSTRegistered ? 'GSTIN *' : 'PAN Number'}</label>
                  <input style={inputStyle} placeholder={isGSTRegistered ? '27AABCU9603R1ZX' : 'ABCDE1234F'} value={isGSTRegistered ? creatorGSTIN : creatorPAN} onChange={e => isGSTRegistered ? setCreatorGSTIN(e.target.value) : setCreatorPAN(e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>PAN Number</label>
                  <input style={inputStyle} placeholder="ABCDE1234F" value={creatorPAN} onChange={e => setCreatorPAN(e.target.value)} />
                </div>
              </div>
            </div>

            {/* BRAND DETAILS */}
            <div className="section-card">
              {sectionTitle('Brand / Client Details', 'The company paying you for the brand deal')}
              <div className="g2" style={{ marginBottom: 12 }}>
                <div>
                  <label style={labelStyle}>Brand / Company Name *</label>
                  <input style={inputStyle} placeholder="Mamaearth India Pvt. Ltd." value={brandName} onChange={e => setBrandName(e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>Brand GSTIN</label>
                  <input style={inputStyle} placeholder="07AABCM1234A1ZX" value={brandGSTIN} onChange={e => setBrandGSTIN(e.target.value)} />
                </div>
              </div>
              <div className="g2">
                <div>
                  <label style={labelStyle}>Brand Address</label>
                  <input style={inputStyle} placeholder="Registered office address" value={brandAddress} onChange={e => setBrandAddress(e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>Brand State *</label>
                  <select style={selectStyle} value={brandState} onChange={e => setBrandState(e.target.value)}>
                    {states.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              {isGSTRegistered && (
                <div style={{ marginTop: 12, padding: '10px 14px', background: creatorState === brandState ? 'rgba(76,175,80,0.08)' : 'rgba(139,156,244,0.08)', border: `1px solid ${creatorState === brandState ? 'rgba(76,175,80,0.2)' : 'rgba(139,156,244,0.2)'}`, borderRadius: 10, fontSize: 13, color: creatorState === brandState ? '#81C784' : '#8B9CF4' }}>
                  {creatorState === brandState
                    ? `✅ Same state (${creatorState}) — CGST 9% + SGST 9% will be applied`
                    : `🔄 Different states — IGST 18% will be applied (${creatorState} → ${brandState})`}
                </div>
              )}
            </div>

            {/* INVOICE DETAILS */}
            <div className="section-card">
              {sectionTitle('Invoice Details')}
              <div className="g3" style={{ marginBottom: 20 }}>
                <div>
                  <label style={labelStyle}>Invoice Number *</label>
                  <input style={inputStyle} value={invoiceNo} onChange={e => setInvoiceNo(e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>Invoice Date *</label>
                  <input type="date" style={inputStyle} value={invoiceDate} onChange={e => setInvoiceDate(e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>Due Date</label>
                  <input type="date" style={inputStyle} value={dueDate} onChange={e => setDueDate(e.target.value)} />
                </div>
              </div>

              {/* Services */}
              <label style={{ ...labelStyle, marginBottom: 12 }}>Services / Deliverables *</label>
              {services.map((s, i) => (
                <div key={i} className="service-row">
                  <div>
                    <input
                      style={{ ...inputStyle, fontSize: 13 }}
                      placeholder="e.g. Instagram Reel — Brand Integration"
                      value={s.description}
                      onChange={e => updateService(i, 'description', e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      style={{ ...inputStyle, fontSize: 13, textAlign: 'center' }}
                      placeholder="Qty"
                      value={s.qty}
                      onChange={e => updateService(i, 'qty', parseInt(e.target.value) || 1)}
                      min={1}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      style={{ ...inputStyle, fontSize: 13 }}
                      placeholder="Rate ₹"
                      value={s.rate || ''}
                      onChange={e => updateService(i, 'rate', parseFloat(e.target.value) || 0)}
                    />
                  </div>
                  <button
                    onClick={() => removeService(i)}
                    style={{ background: 'rgba(255,82,82,0.1)', border: '1px solid rgba(255,82,82,0.2)', color: '#FF5252', borderRadius: 8, width: 32, height: 44, cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    disabled={services.length === 1}
                  >×</button>
                </div>
              ))}
              <button
                onClick={addService}
                style={{ background: 'transparent', border: '1px dashed rgba(255,107,43,0.3)', color: '#FF6B2B', borderRadius: 10, padding: '9px 16px', cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: "'Plus Jakarta Sans',sans-serif", marginTop: 4 }}
              >+ Add another service</button>
            </div>

            {/* BANK DETAILS */}
            <div className="section-card">
              {sectionTitle('Bank Details', 'Appears on the invoice so the brand knows where to transfer payment')}
              <div className="g2" style={{ marginBottom: 12 }}>
                <div>
                  <label style={labelStyle}>Account Holder Name</label>
                  <input style={inputStyle} placeholder="Riya Sharma" value={accountHolder} onChange={e => setAccountHolder(e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>Bank Name</label>
                  <input style={inputStyle} placeholder="HDFC Bank" value={bankName} onChange={e => setBankName(e.target.value)} />
                </div>
              </div>
              <div className="g2">
                <div>
                  <label style={labelStyle}>Account Number</label>
                  <input style={inputStyle} placeholder="50100XXXXXXXXXX" value={accountNo} onChange={e => setAccountNo(e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>IFSC Code</label>
                  <input style={inputStyle} placeholder="HDFC0001234" value={ifsc} onChange={e => setIfsc(e.target.value)} />
                </div>
              </div>
            </div>

            {/* NOTES */}
            <div className="section-card">
              {sectionTitle('Notes / Terms')}
              <textarea
                style={{ ...inputStyle, minHeight: 80, lineHeight: 1.6 }}
                value={notes}
                onChange={e => setNotes(e.target.value)}
              />
            </div>

          </div>

          {/* ── STICKY SUMMARY ─────────────────────────── */}
          <div style={{ position: 'sticky', top: 20 }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 20, padding: '24px 20px' }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16, marginBottom: 20 }}>Invoice Summary</div>

              <div className="summary-row">
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>Subtotal</span>
                <span style={{ fontWeight: 600 }}>{fmtINR(subtotal)}</span>
              </div>
              {isGSTRegistered && sameState && <>
                <div className="summary-row">
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>CGST (9%)</span>
                  <span>{fmtINR(cgst)}</span>
                </div>
                <div className="summary-row">
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>SGST (9%)</span>
                  <span>{fmtINR(sgst)}</span>
                </div>
              </>}
              {isGSTRegistered && !sameState && (
                <div className="summary-row">
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>IGST (18%)</span>
                  <span>{fmtINR(igst)}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0 0', marginTop: 4 }}>
                <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16 }}>Total</span>
                <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: '#FF8C5A' }}>{fmtINR(total)}</span>
              </div>

              <div style={{ margin: '16px 0', padding: '12px 14px', background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 10, fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                {isGSTRegistered
                  ? `SAC: 998361 · ${sameState ? 'CGST + SGST' : 'IGST'} @ 18%`
                  : 'No GST · Add PAN for compliance'}
              </div>

              <button
                onClick={generatePDF}
                disabled={generating || !creatorName || !brandName}
                style={{
                  width: '100%', background: generating || !creatorName || !brandName ? 'rgba(255,107,43,0.3)' : '#FF6B2B',
                  border: 'none', color: '#fff', padding: '15px 20px', borderRadius: 12,
                  fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 15,
                  cursor: generating || !creatorName || !brandName ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s', marginBottom: 10,
                }}
              >
                {generating ? 'Generating PDF...' : '⬇ Download Invoice PDF'}
              </button>

              {(!creatorName || !brandName) && (
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>Fill your name and brand name to download</p>
              )}

              <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.65 }}>
                  ✅ GST-compliant format<br />
                  ✅ CGST/SGST or IGST auto-applied<br />
                  ✅ SAC code 998361 included<br />
                  ✅ Amount in words auto-generated<br />
                  ✅ Bank details on invoice<br />
                  ✅ No data stored — 100% private
                </div>
              </div>
            </div>

            <div style={{ marginTop: 12, padding: '14px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>💡 GST TIP</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>
                Brands will deduct <strong style={{ color: 'rgba(255,255,255,0.6)' }}>10% TDS</strong> under Section 194J before paying. Always ask for <strong style={{ color: 'rgba(255,255,255,0.6)' }}>Form 16A</strong> each quarter to claim the TDS credit in your ITR.
              </div>
            </div>
          </div>
        </div>

        {/* GST INFO SECTION */}
        <div style={{ marginTop: 52 }}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
            GST for Indian Creators — What You Need to Know
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 28, lineHeight: 1.7 }}>
            GST compliance is not optional once you cross ₹20 lakh annual income. Here is everything you need to know to stay compliant and professional.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 52 }}>
            {[
              { icon: '📋', title: 'GST Registration Threshold', desc: 'Mandatory above ₹20 lakh annual income (₹10 lakh in special category states). Voluntary registration is allowed below this — many creators register early for credibility and to claim Input Tax Credit on equipment purchases.' },
              { icon: '🔢', title: 'SAC Code for Creator Services', desc: 'Use SAC code 998361 (Advertising and related services) for all brand deal invoices. This is the most widely accepted code for influencer marketing. Some CAs also use 998399 for general professional services.' },
              { icon: '🔄', title: 'CGST+SGST vs IGST', desc: 'Same-state deal: charge CGST 9% + SGST 9%. Cross-state deal: charge IGST 18%. This calculator auto-applies the correct tax type based on your state and the brand\'s state — no manual calculation needed.' },
              { icon: '📅', title: 'GST Filing Dates', desc: 'File GSTR-1 (outward supplies) by 11th of next month. File GSTR-3B (summary return) by 20th of next month. Annual return GSTR-9 by December 31. Missing these deadlines attracts ₹50/day late fee.' },
              { icon: '💰', title: 'TDS on Creator Payments', desc: 'Brands deduct TDS at 10% under Section 194J before paying you. On a ₹1L invoice, you receive ₹90,000. The ₹10,000 TDS appears in Form 26AS and can be claimed as credit in your Income Tax Return.' },
              { icon: '🧾', title: 'Input Tax Credit (ITC)', desc: 'If GST registered, claim ITC on business expenses — camera, mic, lighting, software subscriptions, studio rent. The 18% GST you paid on ₹1L of equipment (₹18,000) offsets the GST you collect from brands.' },
            ].map(card => (
              <div key={card.title} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{card.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{card.title}</div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.1), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 24, padding: '48px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden', marginBottom: 64 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(255,107,43,0.1), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ fontSize: 48, marginBottom: 16 }}>🧾</div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.5px' }}>
            Send Brands Your Rate Card Before They Ask
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.75, maxWidth: 440, margin: '0 auto 28px' }}>
            Identity Kit gives you a professional link with your media kit, rate card and creator CV — brands know your rates before the conversation even starts.
          </p>
          <Link href="/auth?mode=signup" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 14, padding: '14px 36px', fontWeight: 800, fontSize: 15, letterSpacing: '-0.3px' }}>
            Build my free creator profile →
          </Link>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', marginTop: 14 }}>Free forever. No credit card. 10 minutes.</p>
        </div>

        {/* FAQ */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.5px' }}>
          Frequently Asked Questions — GST for Indian Creators
        </h2>
        <div style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '8px 24px', marginBottom: 64 }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="faq-q">
                {faq.q}
                <span style={{ color: '#FF6B2B', flexShrink: 0, fontSize: 18 }}>{openFaq === i ? '−' : '+'}</span>
              </div>
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
              { href: '/tools/instagram-engagement-calculator', tag: 'Free Tool', title: 'Instagram Engagement Rate Calculator India' },
              { href: '/tools/youtube-money-calculator', tag: 'Free Tool', title: 'YouTube Money Calculator India 2026' },
              { href: '/blog/influencer-rate-card-india', tag: 'Guide', title: 'Complete Indian Influencer Rate Card Guide 2026' },
            ].map(r => (
              <Link key={r.href} href={r.href}>
                <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 18, height: '100%' }}>
                  <span className="tag">{r.tag}</span>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.5, margin: 0, fontWeight: 600 }}>{r.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
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
    </div>
  )
}
