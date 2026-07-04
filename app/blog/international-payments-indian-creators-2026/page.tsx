import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Indian Creators Can Receive International Brand Payments 2026 (PayPal, Wise, FIRC & GST)',
  description: 'A creator-side guide to getting paid by foreign brands in India — PayPal vs Wise vs Payoneer vs Skydo fees compared, what a FIRC/FIRA is and why you need one, RBI purpose codes, GST export rules, and common mistakes that delay international payments.',
  keywords: 'how to receive international payment india creator, firc for influencers india, gst on foreign brand payment india, paypal vs wise india creator, foreign brand deal payment india, rbi purpose code influencer',
  openGraph: {
    title: 'How Indian Creators Can Receive International Brand Payments 2026 (PayPal, Wise, FIRC & GST)',
    description: 'Your first foreign brand deal is exciting — until the payment shows up and you realise you have no idea what a FIRC is. Here\'s the complete guide.',
    url: 'https://identitykit.in/blog/international-payments-indian-creators-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/international-payments-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/international-payments-indian-creators-2026',
  },
}

const platforms = [
  { name: 'PayPal', fee: '~7–9% total cost', firc: 'Monthly consolidated FIRA (auto)', note: 'Most widely accepted by foreign brands, but the highest-cost option once fees, conversion spread, and GST on the fee itself are combined.' },
  { name: 'Wise', fee: '~1.5–2%', firc: 'Per-transaction, small fee for each request', note: 'Uses the real mid-market exchange rate with transparent, itemised fees — a strong low-cost option for regular international income.' },
  { name: 'Payoneer', fee: '~5% combined', firc: 'Free, auto-issued', note: 'Popular with marketplace-based income (Fiverr, Upwork-style platforms); free FIRA issuance is a real advantage over PayPal.' },
  { name: 'Skydo / similar creator-focused platforms', fee: 'Flat fee or ~0.3–1%', firc: 'Instant, auto-generated per transaction', note: 'Newer platforms built specifically for Indian exporters and freelancers — generally the lowest cost with the least compliance friction.' },
  { name: 'Traditional bank wire (SWIFT)', fee: '~3–4.5%', firc: 'Available but must be requested', note: 'Reliable and familiar, but slower and costlier than modern fintech alternatives, with FIRC often not issued automatically.' },
]

const firaSteps = [
  { step: '01', title: 'Understand what a FIRC/FIRA actually is', body: 'It\'s the official bank or platform document confirming you received a specific foreign payment through a proper, RBI-authorised channel — showing the sender, amount, exchange rate, date, and purpose code.' },
  { step: '02', title: 'Know why you need one', body: 'It\'s your proof for GST export/zero-rating, for your income tax return\'s foreign-income breakdown, and for any GST refund claim if you\'ve paid input tax credit that needs claiming back.' },
  { step: '03', title: 'Use the correct RBI purpose code', body: 'Every inward remittance needs a code describing why the money is coming in (e.g. a code for services/consulting). Tell the brand or platform the right code before the transfer — a wrong code can delay or even return the payment.' },
  { step: '04', title: 'Request or download your FIRC promptly', body: 'Some platforms (Skydo-style tools, Razorpay/Cashfree International) auto-generate one per transaction. Others (PayPal, Wise, Payoneer) require a monthly download or a manual request — do this within a few days of receiving payment, not months later.' },
  { step: '05', title: 'Store every FIRC for at least 5 years', body: 'Keep digital copies in your accounting records — bank or platform records may not be retrievable years later, and you\'ll need these for tax filing, audits, and any export benefit claims.' },
]

const gstRules = [
  { rule: 'Foreign currency payment = zero-rated export', detail: 'If payment is received in genuine convertible foreign currency through a proper channel, your service qualifies as an export under GST and no GST applies to the invoice.' },
  { rule: 'INR-only settlement can break this', detail: 'If a payment technically arrives already converted to INR rather than through a foreign-currency channel, some tax practitioners treat it as a domestic supply — which can trigger the full 18% GST instead.' },
  { rule: 'File a Letter of Undertaking (LUT)', detail: 'Filing an LUT annually lets you export services without paying IGST upfront and then waiting months for a refund — most regular exporters and creators file this every year.' },
  { rule: 'GST registration is mandatory once you export, above the threshold', detail: 'Beyond the general ₹20 lakh turnover threshold, exporting services can bring its own registration considerations — check your specific position as international income grows.' },
  { rule: 'You can still claim Input Tax Credit', detail: 'Even though export invoices carry no GST, you can claim credit for the GST you\'ve paid on business expenses like software subscriptions or equipment — a real benefit of zero-rating.' },
]

const mistakes = [
  { m: 'Not requesting a FIRC at all', f: 'Many creators don\'t even know this document exists until they need it for a GST refund or an audit — request or download it as soon as each payment lands, not when a tax deadline is looming.' },
  { m: 'Using the wrong RBI purpose code', f: 'A mismatched code can delay, hold, or even return a payment entirely. Confirm the correct code with your bank or platform before the brand initiates the transfer, especially for a new payment method.' },
  { m: 'Assuming PayPal is the cheapest or only option', f: 'PayPal\'s combined fees and conversion spread are meaningfully higher than modern alternatives like Wise, Payoneer, or dedicated exporter platforms — for regular international income, the difference adds up to real money over a year.' },
  { m: 'Treating a consolidated monthly statement as your FIRC', f: 'A general payout report or bank statement is not the same as an official FIRC/FIRA — make sure you\'re downloading the actual compliance document, not just a transaction summary.' },
  { m: 'Ignoring GST implications until year-end', f: 'Whether a payment qualifies as zero-rated depends on how and in what currency it was actually received — sort this out per-transaction as you go, rather than trying to reconstruct it at tax filing time.' },
]

export default function InternationalPaymentsIndiaPage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', color: '#fff', fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; overflow: hidden; transition: border-color 0.2s; }
        .card:hover { border-color: rgba(255,107,43,0.2); }
        table.cmp { width: 100%; border-collapse: collapse; }
        table.cmp th, table.cmp td { text-align: left; padding: 12px 14px; font-size: 12.5px; border-bottom: 1px solid rgba(255,255,255,0.06); vertical-align: top; }
        table.cmp th { color: #FF6B2B; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; }
        table.cmp td { color: rgba(255,255,255,0.6); line-height: 1.5; }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .hero-pad { padding: 48px 16px 32px !important; }
          .content-pad { padding: 0 16px 60px !important; }
          table.cmp { font-size: 11px; }
          table.cmp th, table.cmp td { padding: 8px 8px; }
        }
      `}</style>

      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(7,7,13,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
          <Link href="/" style={{ fontWeight: 800, fontSize: 18, color: '#FF6B2B', letterSpacing: '-0.5px' }}>Identity Kit</Link>
          <div className="nav-links" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B', fontWeight: 600 }}>Blog</Link>
            <Link href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Tools</Link>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Get Started Free</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto' }}>
        <div className="hero-pad" style={{ padding: '64px 24px 40px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['International Payments', 'GST & Tax', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Receive International<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Brand Payments as an Indian Creator</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Your first foreign brand deal is exciting — until the payment lands and you realise nobody explained FIRCs, purpose codes, or why PayPal quietly took an 8% cut. Here's what every Indian creator working with international brands actually needs to know.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Receiving Foreign Brand Payments in India</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'PayPal is the most widely accepted option by foreign brands but the costliest — combined fees and conversion spread can reach 7–9%',
                'Wise, Payoneer, and dedicated exporter platforms are meaningfully cheaper (roughly 0.3–2%) with more transparent fees',
                'A FIRC (or FIRA) is the official document proving you received foreign currency through a proper banking channel — you need it for GST and tax purposes',
                'Genuine foreign-currency payments are typically zero-rated for GST as an export of services; payments effectively settled in INR can lose that exemption',
                'Always confirm the correct RBI purpose code with your bank or platform before a brand sends payment — a wrong code can delay or return the transfer',
                'Store every FIRC for at least 5 years — it\'s your proof for GST filings, income tax returns, and any refund or audit',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — International Payments for Indian Creators</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'PayPal\'s combined transaction fee, currency conversion spread, and related charges commonly add up to roughly 7–9% of the total payment for Indian recipients.',
                'Modern alternatives like Wise, Payoneer, and dedicated exporter-focused platforms typically charge somewhere between 0.3% and 2%, a meaningful saving on regular international income.',
                'Every foreign brand payment into an Indian bank account must carry a correct RBI purpose code — using the wrong one is a common cause of delayed or returned transfers.',
                'A FIRC (Foreign Inward Remittance Certificate) or FIRA (Advice) is required to support GST zero-rating claims, income tax filings showing foreign income, and any GST refund application.',
                'For GST purposes, a service only qualifies as a zero-rated export if — among other conditions — payment is received in genuine convertible foreign currency through proper channels, not effectively pre-converted to INR.',
                'Filing an annual Letter of Undertaking (LUT) lets exporters, including creators earning from foreign brands, avoid paying IGST upfront and then waiting months for a refund.',
                'Some newer platforms built specifically for Indian exporters now auto-generate a FIRA per transaction instantly, while others like PayPal, Wise, and Payoneer require a monthly download or a manual, sometimes paid, request.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Platform comparison */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Which Platform Should You Use to Get Paid?</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Cost, FIRC issuance, and brand familiarity all matter — here's the real trade-off between the common options.</p>
            <div className="card" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr><th>Platform</th><th>Approx. Total Cost</th><th>FIRC/FIRA</th></tr>
                </thead>
                <tbody>
                  {platforms.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>{row.name}</td>
                      <td style={{ color: '#FF9A6B' }}>{row.fee}</td>
                      <td>{row.firc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
              {platforms.map((row, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#FF6B2B', flexShrink: 0, fontWeight: 700, fontSize: 13 }}>{row.name}:</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{row.note}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FIRC steps */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>FIRC/FIRA: What It Is and How to Handle It</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>This one document quietly affects your GST, your tax return, and your ability to claim refunds — worth understanding properly.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {firaSteps.map((item) => (
                <div key={item.step} className="card" style={{ padding: '20px 22px' }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 10, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#FF6B2B', fontSize: 14, flexShrink: 0 }}>{item.step}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>{item.title}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.7 }}>{item.body}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Ready to pitch international brands?</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>A professional Identity Kit profile with clear rates and past work makes it just as easy for a foreign brand to say yes as an Indian one.</p>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build My Free Profile →
            </Link>
          </div>

          {/* GST rules */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>GST Rules for Foreign Brand Payments</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Foreign income has different GST treatment than domestic brand deals — get this wrong and it can be an expensive mistake.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {gstRules.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF6B2B' }}>{item.rule}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              ))}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12.5, marginTop: 14, lineHeight: 1.6 }}>This is general information, not tax advice — international payment rules involve real money and real compliance risk, so confirm your specific situation with a CA before your first foreign brand deal.</p>
          </section>

          {/* Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>5 Mistakes Creators Make With International Payments</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {mistakes.map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.1)', borderRadius: 12, padding: '18px 22px', display: 'flex', gap: 14 }}>
                  <div style={{ color: '#FF5252', fontWeight: 700, fontSize: 20, flexShrink: 0 }}>✗</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#FF8080', fontSize: 15, marginBottom: 6 }}>{item.m}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}><span style={{ color: '#4CAF50', fontWeight: 600 }}>Fix: </span>{item.f}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'Is PayPal the best way to receive payment from a foreign brand?', a: 'It\'s the most widely recognised and easiest for a brand to use, but it\'s also the most expensive — combined fees and conversion spread commonly reach 7–9%. For occasional or small payments, PayPal\'s convenience may be worth it; for regular international income, a lower-cost option like Wise or a dedicated exporter platform saves real money over time.' },
                { q: 'What exactly is a FIRC and do I really need one?', a: 'A FIRC (or FIRA) is the official bank or platform document confirming you received a specific foreign payment through a proper channel. You need it to support GST zero-rating on export invoices, to document foreign income on your tax return, and to claim any GST refund — many creators don\'t realise this document exists until they need it.' },
                { q: 'Do I have to pay GST on payments from foreign brands?', a: 'Generally no, if the payment is genuinely received in convertible foreign currency through a proper channel — this qualifies as a zero-rated export of services. However, if a payment is effectively settled in INR rather than through a real foreign-currency channel, some tax practitioners argue the exemption may not apply, so it\'s worth understanding how each specific payment method actually settles funds.' },
                { q: 'What is an RBI purpose code and why does it matter?', a: 'It\'s a code that classifies why foreign money is entering India (for example, a code for professional or creative services). Every inward remittance needs the correct code — using the wrong one is a common reason international payments get delayed, held, or returned, so confirm the right code with your bank or platform before a brand sends the transfer.' },
                { q: 'How long should I keep my FIRC documents?', a: 'At least 5 years. They\'re required for GST returns, income tax filing, any refund claims, and potential audits — bank or platform transaction records aren\'t guaranteed to be retrievable years later, so download and store your own copies as you receive each one.' },
                { q: 'Can I just ask a foreign brand to pay through UPI or a regular bank transfer to make things simpler?', a: 'International payments have to flow through proper RBI-authorised channels with a valid purpose code to be compliant and to generate a usable FIRC — a workaround that skips these channels can create real documentation and compliance problems later, even if it seems simpler upfront.' },
              ].map((item, i) => (
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
                { href: '/blog/influencer-tax-gst-india-2026', title: 'Influencer Tax & GST Guide India 2026', tag: 'Tax & GST' },
                { href: '/blog/how-to-get-paid-by-brands-india-2026', title: 'How to Get Paid by Brands in India', tag: 'Getting Paid' },
                { href: '/blog/how-to-negotiate-brand-deal-rates-india-2026', title: 'How to Negotiate Brand Deal Rates in India', tag: 'Negotiation' },
                { href: '/blog/brand-deal-contract-template-india', title: 'Brand Deal Contract Template for Indian Creators', tag: 'Legal' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🌍</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Global brand deals, handled right.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile that makes you just as easy to book for a Mumbai D2C brand as a Singapore or US one.
            </p>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
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
          <Link href="/tools/gst-invoice-generator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Invoice Generator</Link>
          <Link href="/tools/influencer-rate-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Rate Calculator</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
