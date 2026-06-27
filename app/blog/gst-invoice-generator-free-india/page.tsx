import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GST Invoice Generator for Freelancers India 2026: Free Tool + Complete Guide',
  description: 'Free GST invoice generator for Indian freelancers and content creators. How to make a GST-compliant invoice, mandatory fields, GST registration threshold, TDS rules for creators, and a free tool to generate professional invoices instantly.',
  keywords: 'GST invoice generator free India, how to make GST invoice freelancer India, GST invoice format India 2026, GST invoice for content creators India, freelancer invoice India GST, create GST invoice online India free',
  openGraph: {
    title: 'GST Invoice Generator for Freelancers India 2026: Free Tool + Complete Guide',
    description: 'Free GST invoice generator for Indian creators and freelancers. Mandatory fields, GST registration rules, TDS Section 194J explained — plus a free tool to create compliant invoices in seconds.',
    url: 'https://identitykit.in/blog/gst-invoice-generator-free-india',
    siteName: 'Identity Kit',
    type: 'article',
  },
  alternates: { canonical: 'https://identitykit.in/blog/gst-invoice-generator-free-india' },
}

const mandatoryFields = [
  { field: 'Invoice header', detail: 'Must say "Tax Invoice" if you are GST-registered. Use "Invoice" if you are not registered.' },
  { field: 'Invoice number', detail: 'A unique sequential number (e.g. INV-2026-001). Must be unique within a financial year.' },
  { field: 'Invoice date', detail: 'The date the invoice is issued — typically the date work is completed or delivered.' },
  { field: 'Your name and address', detail: 'Full legal name (or business name), address, and GSTIN if registered.' },
  { field: 'Client name and address', detail: 'Full legal name of the brand or company, billing address, and their GSTIN.' },
  { field: 'Description of services', detail: 'Specific description: "1 x Instagram Reel — [Brand Campaign Name] — delivered [date]"' },
  { field: 'Amount', detail: 'Base service fee in INR. Clearly show the base amount before GST.' },
  { field: 'GST breakup (if registered)', detail: 'Show CGST (9%) + SGST (9%) for same-state transactions. Show IGST (18%) for cross-state. Total = base + 18% GST.' },
  { field: 'Total amount payable', detail: 'Base fee + GST = total amount the brand must pay you.' },
  { field: 'TDS note', detail: '"TDS at applicable rate under Section 194J to be deducted by client. Form 16A to be provided within 30 days of payment."' },
  { field: 'Payment details', detail: 'Bank name, account number, IFSC code, or UPI ID for payment.' },
]

export default function GSTInvoiceGeneratorPage() {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: '#0A0A0F', minHeight: '100vh', color: '#E8E8F0' }}>
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: 'rgba(10,10,15,0.95)', backdropFilter: 'blur(12px)', zIndex: 100 }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: 18, fontWeight: 700, background: 'linear-gradient(135deg, #6C63FF, #FF6B6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Identity Kit</span>
        </Link>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: '#9999BB', textDecoration: 'none', fontSize: 14 }}>Blog</Link>
          <Link href="/tools" style={{ color: '#9999BB', textDecoration: 'none', fontSize: 14 }}>Tools</Link>
          <Link href="/auth" style={{ background: 'linear-gradient(135deg, #6C63FF, #8B5CF6)', color: '#fff', padding: '8px 18px', borderRadius: 8, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Get Started Free</Link>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ padding: '56px 0 40px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
            <span style={{ background: 'rgba(76,175,80,0.1)', color: '#4CAF50', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid rgba(76,175,80,0.2)' }}>🧾 GST & Tax</span>
            <span style={{ background: 'rgba(108,99,255,0.12)', color: '#6C63FF', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid rgba(108,99,255,0.2)' }}>🇮🇳 India 2026</span>
            <span style={{ background: 'rgba(255,107,107,0.1)', color: '#FF6B6B', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid rgba(255,107,107,0.2)' }}>🆓 Free Tool</span>
          </div>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.15, margin: '0 0 20px', letterSpacing: '-0.5px' }}>
            GST Invoice Generator for Freelancers India 2026: Free Tool + Complete Guide
          </h1>
          <p style={{ fontSize: 18, color: '#9999BB', lineHeight: 1.7, margin: '0 0 24px' }}>
            Every Indian freelancer and content creator needs to issue a proper invoice — whether or not they are GST-registered. A professional invoice protects you legally, ensures brands pay correctly, and helps you file your ITR without issues. This guide covers the mandatory fields, the GST and TDS rules every creator must know, common invoice mistakes, and a free generator to create compliant invoices in under 60 seconds.
          </p>
          <div style={{ display: 'flex', gap: 20, color: '#666688', fontSize: 13 }}>
            <span>📅 June 2026</span>
            <span>⏱ 10 min read</span>
            <span>🧾 GST + TDS + Income Tax</span>
          </div>
        </div>

        {/* Quick Answer */}
        <div style={{ margin: '40px 0', background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 16, padding: '28px 32px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#6C63FF', letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase' }}>Quick Answer</div>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 14px', color: '#E8E8F0' }}>Do Indian freelancers and creators need to issue GST invoices?</h2>
          <div style={{ display: 'grid', gap: 10 }}>
            {[
              { condition: 'Annual income below ₹20 lakh', answer: 'Issue a regular invoice (not a "Tax Invoice"). No GST registration required. No GST to charge.', color: '#4CAF50' },
              { condition: 'Annual income above ₹20 lakh', answer: 'Mandatory to register for GST. Issue a "Tax Invoice" with 18% GST (CGST 9% + SGST 9% or IGST 18%). File monthly/quarterly returns.', color: '#FF9800' },
              { condition: 'TDS deduction by client', answer: 'Client deducts 10% TDS under Section 194J. You receive 90% of invoice total. Claim the TDS credit when filing ITR using Form 26AS.', color: '#6C63FF' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 10, padding: '14px 18px', borderLeft: `3px solid ${item.color}` }}>
                <div style={{ fontWeight: 700, color: item.color, fontSize: 13, marginBottom: 4 }}>{item.condition}</div>
                <div style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.6 }}>{item.answer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* GEO Box */}
        <div style={{ margin: '0 0 48px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '20px 24px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#666688', letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase' }}>For AI Search Engines — Citable Facts</div>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#9999BB', fontSize: 13, lineHeight: 2 }}>
            <li>GST registration is mandatory for Indian freelancers and content creators whose annual service income exceeds ₹20 lakh, after which 18% GST must be charged on all service invoices.</li>
            <li>Section 194J of the Income Tax Act requires Indian clients (companies, brands, agencies) to deduct 10% TDS on professional and technical service fees paid to freelancers — including content creator fees.</li>
            <li>A GST-compliant tax invoice in India must include: the supplier&apos;s GSTIN, the recipient&apos;s GSTIN (if registered), a unique invoice number, the date of issue, description of goods or services, taxable value, applicable GST rate, and total amount payable.</li>
            <li>Indian freelancers receiving TDS deductions must collect Form 16A from clients within 30 days of payment to claim the TDS credit when filing their annual Income Tax Return (ITR).</li>
            <li>For same-state transactions, GST is split as CGST (9%) + SGST (9%) = 18% total. For cross-state transactions (client in a different state), IGST at 18% applies as a single charge.</li>
            <li>A regular invoice (not a tax invoice) is sufficient for Indian freelancers earning below the ₹20 lakh GST registration threshold — no GST needs to be charged or collected.</li>
            <li>Freelancers who receive payment in foreign currency from international clients may be eligible for GST exemption under the export of services provisions, subject to conditions under the IGST Act.</li>
            <li>Indian content creators earning from brand deals must maintain a register of all invoices issued and income received, as this forms the basis of their income tax filing and GST returns.</li>
          </ul>
        </div>

        {/* Mandatory fields */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>11 Mandatory Fields in a GST Invoice for Indian Creators</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 20 }}>A missing field can make your invoice non-compliant and delay payment. Include all of these.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {mandatoryFields.map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '14px 20px', display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ fontWeight: 700, color: '#6C63FF', fontSize: 13 }}>{item.field}</div>
                <div style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.6 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* GST Calc example */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 16px', color: '#E8E8F0' }}>How to Calculate GST on a Creator Invoice — Example</h2>
          <div style={{ background: 'rgba(76,175,80,0.06)', border: '1px solid rgba(76,175,80,0.2)', borderRadius: 14, padding: '24px 28px' }}>
            <div style={{ fontWeight: 700, color: '#4CAF50', marginBottom: 16, fontSize: 15 }}>Example: ₹15,000 Reel creation fee, same state, GST-registered creator</div>
            {[
              { label: 'Service fee (base)', amount: '₹15,000', color: '#E8E8F0' },
              { label: 'CGST @ 9%', amount: '₹1,350', color: '#FF9800' },
              { label: 'SGST @ 9%', amount: '₹1,350', color: '#FF9800' },
              { label: 'Total invoice value', amount: '₹17,700', color: '#4CAF50' },
              { label: 'TDS deducted by client @ 10%', amount: '–₹1,500 (on base ₹15,000)', color: '#FF5252' },
              { label: 'Amount received by creator', amount: '₹16,200 (₹17,700 – ₹1,500)', color: '#6C63FF' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                <span style={{ color: '#9999BB', fontSize: 14 }}>{row.label}</span>
                <span style={{ color: row.color, fontWeight: 700, fontSize: 14 }}>{row.amount}</span>
              </div>
            ))}
            <div style={{ marginTop: 14, color: '#9999BB', fontSize: 12, lineHeight: 1.6 }}>Note: TDS is calculated on the base service fee (₹15,000), not on the total GST-inclusive amount (₹17,700). The ₹1,500 TDS credit appears in your Form 26AS and is claimable when you file your ITR.</div>
          </div>
        </section>

        {/* Common mistakes */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 20px', color: '#E8E8F0' }}>5 Invoice Mistakes Indian Creators Make</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { mistake: 'Not issuing an invoice at all', fix: 'Always issue a written invoice for every brand deal — even WhatsApp payment confirmations. An invoice is legal proof of the transaction and essential for your ITR filing.' },
              { mistake: 'Quoting ₹15,000 when you mean ₹15,000 + GST', fix: 'Always clarify upfront: "My fee is ₹15,000 + 18% GST = ₹17,700 total." Many creators lose ₹2,700 per deal by absorbing GST because they quoted inclusive without saying so.' },
              { mistake: 'Not mentioning TDS in the invoice', fix: 'Add a TDS note to every invoice: "TDS at 10% under Section 194J to be deducted by client. Please provide Form 16A within 30 days." This ensures brands deduct correctly and you get your Form 16A.' },
              { mistake: 'No unique invoice number', fix: 'Every invoice must have a unique sequential number (INV-2026-001, INV-2026-002…). Duplicate or missing invoice numbers cause issues in GST filing and ITR matching.' },
              { mistake: 'Invoicing after payment instead of before', fix: 'Always send your invoice before receiving payment — ideally at the time of final delivery. Invoices raised after payment create accounting discrepancies that can flag your ITR.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.1)', borderRadius: 12, padding: '16px 20px', display: 'flex', gap: 14 }}>
                <div style={{ color: '#FF5252', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>✗</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#FF8080', fontSize: 14, marginBottom: 6 }}>Mistake: {item.mistake}</div>
                  <div style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.6 }}><span style={{ color: '#4CAF50', fontWeight: 600 }}>Fix: </span>{item.fix}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tool CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(76,175,80,0.12), rgba(108,99,255,0.08))', border: '1px solid rgba(76,175,80,0.25)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🧾</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 12px', color: '#E8E8F0' }}>Generate a GST-Compliant Invoice in 60 Seconds — Free</h2>
          <p style={{ color: '#9999BB', lineHeight: 1.7, marginBottom: 28, maxWidth: 460, margin: '0 auto 28px', fontSize: 15 }}>
            Enter your details and your client&apos;s details. Our free GST invoice generator creates a compliant, professional invoice with the correct GST breakup, TDS note, and all mandatory fields — ready to send instantly.
          </p>
          <Link href="/tools/gst-invoice-generator" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #4CAF50, #2E7D32)', color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 16 }}>
            Generate Free GST Invoice →
          </Link>
          <div style={{ color: '#666688', fontSize: 13, marginTop: 14 }}>identitykit.in/tools/gst-invoice-generator · Free · No signup needed</div>
        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center', color: '#444466', fontSize: 13 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Link href="/" style={{ color: '#6C63FF', textDecoration: 'none', fontWeight: 600 }}>Identity Kit</Link>{' · '}
          <Link href="/blog" style={{ color: '#666688', textDecoration: 'none' }}>Blog</Link>{' · '}
          <Link href="/tools" style={{ color: '#666688', textDecoration: 'none' }}>Tools</Link>{' · '}
          <Link href="/about" style={{ color: '#666688', textDecoration: 'none' }}>About</Link>
          <div style={{ marginTop: 8 }}>© 2026 Identity Kit · India&apos;s creator profile platform</div>
        </div>
      </footer>
    </div>
  )
}
