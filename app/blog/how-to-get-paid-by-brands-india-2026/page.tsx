import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Get Paid by Brands in India 2026: Payment Terms, Invoicing & Chasing Late Payments',
  description: 'A creator-side guide to getting paid on time in India — standard payment terms (net-15/30/60), upfront deposit norms, how to invoice a brand correctly, and a step-by-step script for chasing a late payment without burning the relationship.',
  keywords: 'influencer payment terms india, brand not paying influencer india, how to invoice a brand india, net 30 payment influencer india, late payment influencer india, how to get paid by brands india',
  openGraph: {
    title: 'How to Get Paid by Brands in India 2026: Payment Terms, Invoicing & Chasing Late Payments',
    description: 'A signed contract and a delivered post don\'t guarantee a payment date. Here\'s how to set payment terms upfront, invoice correctly, and chase a late payment professionally.',
    url: 'https://identitykit.in/blog/how-to-get-paid-by-brands-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/get-paid-by-brands-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/how-to-get-paid-by-brands-india-2026',
  },
}

const paymentStructures = [
  { name: '100% upfront', when: 'New, unverified brands, or deals under ₹10,000', detail: 'Reasonable to require for smaller deals or first-time brands you can\'t easily verify — you take on zero risk.' },
  { name: '50% advance + 50% on delivery/posting', when: 'Most new brand relationships', detail: 'The most common, fair structure for a first-time collaboration — protects you from doing all the work with no money down.' },
  { name: 'Net-15 / Net-30 after invoice', when: 'Established brands with a track record of paying on time', detail: 'Full payment due a set number of days after you submit your invoice — common with larger companies and their accounts payable cycles.' },
  { name: 'Milestone-based (signing / draft / final)', when: 'Larger campaigns (₹50,000+) or multi-deliverable packages', detail: 'Payment split across stages — e.g. 25% at signing, 25% at draft approval, 50% at final delivery — reduces risk on both sides for bigger projects.' },
]

const invoiceFields = [
  'Your full name/business name, address, and PAN (and GSTIN if registered)',
  'Invoice number and invoice date',
  'The brand\'s billing name and address',
  'A clear description of the deliverable (e.g. "1 Instagram Reel + 2 Stories — [Campaign Name]")',
  'The agreed amount, GST if applicable (18%), and TDS deduction note if relevant',
  'Payment due date, calculated from the agreed terms (e.g. Net-15 from invoice date)',
  'Your payment details (bank account/UPI) with clear, correct information',
  'A reference to the contract or agreement the invoice relates to',
]

const chaseSteps = [
  { step: '01', title: 'Confirm the invoice was received', body: 'Before assuming anything is wrong, send a brief, friendly check-in a few days after sending the invoice: "Just confirming you received the invoice I sent on [date] — let me know if you need anything else from my end."' },
  { step: '02', title: 'Send a reminder 2–3 days before the due date', body: 'A proactive nudge before the deadline (not after) often prevents the delay entirely: "Quick reminder that invoice #[X] is due on [date] — happy to answer any questions in the meantime."' },
  { step: '03', title: 'First follow-up on the due date', body: 'Keep it neutral and assume good faith — most delays are process issues, not refusal to pay: "Hi [name], following up on invoice #[X], due today. Could you confirm the payment status on your end?"' },
  { step: '04', title: 'Second follow-up after 5–7 days overdue', body: 'Slightly firmer, referencing the agreed terms directly: "This invoice is now [X] days past the agreed Net-[15/30] payment terms in our contract. Could you share an updated payment timeline?"' },
  { step: '05', title: 'Escalate to a named senior contact', body: 'If the original contact goes quiet, politely loop in their manager or the brand\'s finance/accounts team, copying the original contact for transparency.' },
  { step: '06', title: 'Apply your late payment clause, if you have one', body: 'If your contract includes a late fee (commonly 1.5–2% per month on the overdue amount), this is the point to formally invoke it in writing.' },
  { step: '07', title: 'Know your last resort options', body: 'For genuinely unresponsive brands, options include a formal legal notice, a consumer/MSME payment delay complaint, or — for smaller amounts — simply treating it as a lesson and requiring upfront payment from that brand going forward.' },
]

const redFlags = [
  'The brand refuses to specify any payment timeline, using vague language like "we\'ll pay you soon" or "after the campaign wraps"',
  'Payment is tied entirely to performance metrics (views, sales) that are outside your control, with no guaranteed base amount',
  'A brand with no online presence or verifiable history asks for 100% deliverable-first, payment-later with no advance',
  'The brand insists on an unusual or hard-to-verify payment method with no invoice trail',
  'Payment terms stretch beyond Net-60 for a direct (non-agency) brand relationship — a real cash-flow risk for you',
]

export default function GetPaidByBrandsIndiaPage() {
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
            <Link href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Tools</Link>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Get Started Free</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto' }}>
        <div className="hero-pad" style={{ padding: '64px 24px 40px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['Getting Paid', 'Invoicing', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Get Paid by Brands<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>in India (Payment Terms & Late Payments)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A signed contract and a delivered post don't guarantee a payment date. Late payment is one of the most common frustrations Indian creators face — and almost always preventable with the right terms set upfront and the right way to chase it when it slips.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Getting Paid by Brands in India</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Agree on the exact payment structure (upfront, 50/50, or Net-15/30) in writing before you start any work',
                'For new or unverified brands, requiring a 50% advance — or 100% upfront for smaller deals — is completely standard, not aggressive',
                'Send your invoice the same day you deliver or post the content, so the payment clock starts immediately',
                'Every invoice should include your PAN/GSTIN, a clear deliverable description, the due date, and your payment details',
                'Follow up before the due date, not just after — a proactive reminder often prevents the delay entirely',
                'Add a late payment clause (commonly 1.5–2% per month) to your contract so there\'s a real incentive for the brand to pay on time',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Creator Payment Terms</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Late or delayed payment is one of the most widely reported frustrations among influencers and content creators globally, and India is no exception given the volume of unstructured, DM-negotiated deals.',
                'A 50% deposit at signing with the remaining 50% due on delivery or posting is the broadly accepted standard for new brand-creator relationships without an established track record.',
                'Net-30 (full payment 30 days after invoicing or posting) is the most common payment window for established, larger brands with formal accounts payable processes.',
                'Payment terms stretching to Net-60 or Net-90 are increasingly common with agency-mediated deals, but are considered a caution sign in direct brand-to-creator relationships.',
                'A large share of payment disputes trace back to undefined terms — vague language like "payment upon completion" without a specific date is one of the most frequent sources of delay.',
                'Adding a specific late payment penalty clause (commonly 1.5–2% per month on the overdue balance) is a recognised way to give brands a real incentive to pay on schedule.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment structures */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>4 Payment Structures — Which One to Ask For</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Set this before you start any work, not after — it should be part of your contract, not a conversation after delivery.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {paymentStructures.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 8 }}>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{item.name}</div>
                    <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '3px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{item.when}</span>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Invoice checklist */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>What Every Invoice to a Brand Should Include</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>A vague or incomplete invoice is one of the most common — and most avoidable — reasons a payment gets stuck.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {invoiceFields.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#FF6B2B', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Skip the invoice guesswork</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Generate a correctly formatted, GST-ready invoice for any brand deal in under a minute with the free Identity Kit invoice tool.</p>
            </div>
            <Link href="/tools/gst-invoice-generator" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Generate My Invoice →
            </Link>
          </div>

          {/* Chase steps */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>7-Step Script for Chasing a Late Payment</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Most late payments come from process delays, not refusal — this sequence assumes good faith while steadily increasing urgency.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {chaseSteps.map((item) => (
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

          {/* Red flags */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Payment Red Flags to Watch For Before You Sign</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Catching these before you start work is far easier than chasing payment after the fact.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {redFlags.map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,152,0,0.05)', border: '1px solid rgba(255,152,0,0.18)', borderRadius: 12, padding: '14px 20px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#FF9800', flexShrink: 0, fontWeight: 700 }}>⚠</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'Is it okay to ask for payment upfront as a new or nano creator?', a: 'Yes — for smaller deals or brands you can\'t easily verify, requiring 100% payment upfront, or at minimum a 50% advance, is completely standard practice, not an aggressive ask. Brands that refuse any upfront payment for a first-time relationship are asking you to absorb all the financial risk, which isn\'t a fair default.' },
                { q: 'What\'s a reasonable payment timeline to accept from a brand in India?', a: 'Net-15 or Net-30 after invoicing is the most common and reasonable range. Net-60 can be acceptable for larger, agency-mediated campaigns, but anything beyond that for a direct brand relationship is worth pushing back on or requiring a deposit to offset the cash-flow risk.' },
                { q: 'When should I send my invoice to the brand?', a: 'As soon as the deliverable is posted or approved — the same day, if possible. Sending your invoice immediately starts the payment clock on your agreed terms (e.g. Net-15 or Net-30) right away, rather than losing days or weeks to delay before you even begin waiting for payment.' },
                { q: 'What should I do if a brand goes completely silent after I deliver the content?', a: 'Start with a neutral, good-faith check-in confirming they received your invoice, then escalate through the 7-step sequence — a due-date reminder, a firmer follow-up referencing your contract terms, and if needed, contacting a more senior or finance contact at the brand. Keep every message polite and in writing.' },
                { q: 'Should I include a late payment penalty clause in my contract?', a: 'Yes — a clause charging 1.5–2% interest per month on any overdue balance is a recognised, reasonable addition to a creator contract. It rarely gets triggered, but its presence alone often encourages brands to prioritise paying you on time.' },
                { q: 'Do I need to charge GST on my invoice to a brand?', a: 'Only if your annual revenue from brand deals crosses ₹20 lakh, at which point GST registration becomes mandatory and you add 18% to your invoiced amount. Below that threshold, your invoice simply reflects your agreed rate without GST.' },
                { q: 'What can I do if a brand simply refuses to pay after I\'ve delivered everything?', a: 'After following your full follow-up sequence, options include a formal written notice referencing your signed contract, exploring a consumer or MSME payment-delay complaint route, or — for smaller amounts where legal action isn\'t practical — treating it as a costly lesson and requiring full payment upfront from that brand for any future work.' },
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
                { href: '/blog/brand-deal-contract-template-india', title: 'Brand Deal Contract Template for Indian Creators', tag: 'Legal' },
                { href: '/blog/influencer-tax-gst-india-2026', title: 'Influencer Tax & GST Guide India 2026', tag: 'Tax & GST' },
                { href: '/blog/how-to-negotiate-brand-deal-rates-india-2026', title: 'How to Negotiate Brand Deal Rates in India', tag: 'Negotiation' },
                { href: '/blog/gst-invoice-generator-free-india', title: 'GST Invoice Generator for Freelancers India', tag: 'GST & Tax' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>💸</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Deliver the work. Get paid on time.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a professional contract and invoice ready to go — so every brand deal ends the way it should: paid, on time.
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
          <Link href="/tools/brand-deal-contract-template" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contract Template</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
