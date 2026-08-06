import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Invoice a Brand for Sponsored Content (Free Guide, 2026)',
  description: 'Incorrect payment terms are the single biggest reason creator invoices go unpaid. Here\'s exactly what to include, how Net-30 actually works, and the mistakes that quietly delay your payment.',
  keywords: 'how to invoice a brand as an influencer, creator invoice template, sponsored content invoice, net 30 payment terms creator, how to get paid by brands, influencer invoice guide',
  openGraph: {
    title: 'How to Invoice a Brand for Sponsored Content (Free Guide, 2026)',
    description: 'Incorrect payment terms are the single biggest reason creator invoices go unpaid. Here\'s exactly what to include, how Net-30 actually works, and the mistakes that delay payment.',
    url: 'https://identitykit.in/blog/how-to-invoice-a-brand',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/how-to-invoice-a-brand.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/how-to-invoice-a-brand',
  },
}

const invoiceElements = [
  { item: 'Your information', body: 'Full legal name (or business name if registered), address, email, and tax ID if applicable — this is what identifies who\'s being paid.' },
  { item: 'Client (brand) information', body: 'Company name, address, and the name/email of whoever handles payment if you know it — sending to the wrong contact is one of the most common reasons invoices get lost internally.' },
  { item: 'Invoice number and date', body: 'A unique reference number (e.g. "INV-2026-014") and the date you\'re sending it — this is what starts the clock on your payment terms and what accounting teams use to track it.' },
  { item: 'Scope of work / deliverables', body: 'Exactly what was delivered — platform, format, posting date — described clearly enough that the brand can match it against the original agreement without asking follow-up questions.' },
  { item: 'Usage rights covered', body: 'Restate what usage rights this payment covers (organic only, paid ad usage, a specific time window) so there\'s no ambiguity if the brand wants to use the content beyond what was agreed.' },
  { item: 'Pricing and total', body: 'Line-item pricing if billing for multiple deliverables, with the final total clearly stated — any rush fees or add-ons should be broken out separately, not buried in the total.' },
  { item: 'Payment terms and due date', body: 'State your terms explicitly (e.g. "Net 30 from invoice date") and the exact due date — vague or missing payment terms are consistently cited as the single biggest cause of late payment.' },
  { item: 'Payment instructions', body: 'Bank transfer details, PayPal, or your preferred payment platform — give the brand what they need to actually pay you without a follow-up email asking how.' },
]

const faqs = [
  { q: 'What does "Net 30" actually mean?', a: 'Net 30 means payment is due within 30 days of the invoice date — not 30 days after the content goes live, and not 30 days after the brand gets around to reading it. The clock starts from your invoice date, which is exactly why every invoice needs one clearly stated.' },
  { q: 'When should I actually send the invoice?', a: 'Immediately after delivering the agreed work, unless the contract specifies milestone billing or requires a deposit upfront. Waiting until "later" to send an invoice is one of the most common ways creators unintentionally delay their own payment.' },
  { q: 'Do I need to invoice if the brand or platform says I don\'t have to?', a: 'Sending your own invoice is worth doing even when a brand, agency, or platform says it\'s optional — it creates your own paper trail for accounting and taxes, and gives you something concrete to reference if payment gets delayed or disputed.' },
  { q: 'What if my invoice goes unpaid past the due date?', a: 'A brief, professional reminder shortly after the due date passes is the standard first step. Most invoicing guidance suggests waiting until a payment is genuinely late (past the stated due date) before escalating tone, rather than following up anxiously before the term has even elapsed.' },
  { q: 'Should I require a deposit before starting work?', a: 'It\'s a reasonable ask for larger projects or with a new brand you haven\'t worked with before, though it\'s not universal practice. Milestone-based billing (partial payment at defined stages) is another common alternative for bigger, longer campaigns.' },
  { q: 'What payment methods should I offer?', a: 'Offering more than one option (bank transfer plus PayPal or a payment platform, for example) reduces friction and speeds up payment — a brand that has to set up a new payment method just to pay you adds unnecessary delay.' },
]

export default function HowToInvoiceBrandPage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', color: '#fff', fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; overflow: hidden; transition: border-color 0.2s; }
        .card:hover { border-color: rgba(255,107,43,0.2); }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .hero-pad { padding: 48px 16px 32px !important; }
          .content-pad { padding: 0 16px 60px !important; }
        }
      `}</style>

      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(7,7,13,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
          <Link href="/" style={{ fontWeight: 800, fontSize: 18, color: '#FF6B2B', letterSpacing: '-0.5px' }}>Identity Kit</Link>
          <div className="nav-links" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B', fontWeight: 600 }}>Blog</Link>
            <Link href="/onboarding" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Get Started Free</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto' }}>
        <div className="hero-pad" style={{ padding: '64px 24px 40px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['Invoicing', 'Brand Deals', 'Guide'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Invoice a Brand<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>and Actually Get Paid</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Most late payments aren't the brand being difficult — they're a missing invoice number, vague payment terms, or an invoice sent to the wrong inbox. Here's exactly what a creator invoice needs, and how to avoid the mistakes that quietly delay payment.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Invoicing a Brand</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'A creator invoice needs 8 core elements: your info, the brand\'s info, an invoice number and date, deliverables, usage rights, pricing, payment terms, and payment instructions.',
                'Incorrect or missing payment terms are consistently cited as the single biggest reason creator invoices go unpaid on time.',
                'Net 30 (payment due 30 days from the invoice date) is the most common standard, though Net 15 and Net 60 are also used depending on the brand.',
                'Send your invoice immediately after delivering the work, unless the agreement specifies a deposit or milestone billing.',
                'Send your own invoice even if a brand or platform says it\'s optional — it creates a paper trail for taxes and gives you something concrete to reference if payment is delayed.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Creator Invoicing</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'A creator invoice differs from a standard service invoice by typically including industry-specific details like content licensing terms, posting platforms, and usage rights alongside the standard billing information.',
                'Some creator marketplaces and influencer platforms act as intermediaries and generate the invoice on your behalf — but the underlying principle is the same: if a brand is involved, an invoice is generally still expected somewhere in the process.',
                'Without a clearly stated invoice date, payment terms like "Net 30" have no real starting point — the date field is what makes the term enforceable.',
                'Several payment platforms (PayPal, Stripe, and others) offer built-in invoicing tools that automatically include most of the required fields, reducing the chance of a missing detail.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Elements */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The 8 Things Every Invoice Needs</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {invoiceElements.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{i + 1}. {row.item}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Payment terms */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Payment Terms, Explained</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              "Net 30" means the brand has 30 days from your invoice date to pay — not from when content posted, not from when someone gets around to opening the email. Net 15 and Net 60 are also common, and some brands or platforms pay on their own internal cycle rather than a standard "Net" term. Whatever it is, state it explicitly on the invoice and confirm it before the work even starts — payment terms should be part of the original agreement, not a surprise you discover when chasing a late payment.
            </p>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {faqs.map((item, i) => (
                <div key={i} className="card" style={{ padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 10 }}>{item.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: 14 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14 }}>
              {[
                { href: '/blog/brand-deal-contract-red-flags', title: 'Brand Deal Contract Red Flags: What to Check Before You Sign', tag: 'Brand Deals' },
                { href: '/blog/1099-vs-w9-content-creators', title: '1099 vs. W-9 for Content Creators: What You Actually Need', tag: 'Taxes' },
              ].map((post) => (
                <Link key={post.href} href={post.href} style={{ display: 'block', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '18px 20px' }}>
                  <div style={{ fontSize: 11, color: '#FF6B2B', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>{post.tag}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.5, fontWeight: 600 }}>{post.title}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div style={{ textAlign: 'center', background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 24, padding: '48px 32px' }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>💵</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Look organized before the invoice even goes out.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a rate card, media kit, and creator CV — a clear, professional profile makes brands more confident in the whole partnership, invoicing included.
            </p>
            <Link href="/onboarding" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Create My Free Identity Kit →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 14 }}>
              identitykit.in · Free forever · Media kit + Rate card + Creator CV
            </div>
          </div>

        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/onboarding" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Create Your Identity Kit</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for creators everywhere · identitykit.in</p>
      </footer>
    </div>
  )
}
