import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brand Cancelled Your Campaign? Kill Fees Explained for Indian Creators (2026)',
  description: 'What happens when a brand cancels a collaboration after you\'ve started work — kill fee benchmarks by campaign stage, the exact contract clause to add, what you\'re owed with no contract at all, and how to ask for a kill fee without sounding difficult.',
  keywords: 'brand cancels campaign influencer india, kill fee influencer contract india, brand deal cancelled no payment india, influencer cancellation clause india, what if brand cancels collaboration',
  openGraph: {
    title: 'Brand Cancelled Your Campaign? Kill Fees Explained for Indian Creators (2026)',
    description: 'A brand can cancel a campaign after you\'ve scripted, filmed, and edited — and owe you nothing, unless your contract says otherwise. Here\'s the exact clause that protects you.',
    url: 'https://identitykit.in/blog/kill-fee-brand-cancellation-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/kill-fee-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/kill-fee-brand-cancellation-india-2026',
  },
}

const killFeeStages = [
  { stage: 'Cancelled before any work has started', fee: '0-25% of total fee', note: 'Reasonable, since minimal time has been invested — though a small fee for holding the slot and turning down other opportunities is still fair.' },
  { stage: 'Cancelled after brief received, before filming/production', fee: '25-50% of total fee', note: 'You\'ve likely spent time on concepting, scripting, or planning — this stage deserves real compensation, not just a token amount.' },
  { stage: 'Cancelled after filming/production, before final delivery', fee: '50-75% of total fee', note: 'The bulk of your time investment has happened — production time, editing, and the opportunity cost of turning down other bookings during this window.' },
  { stage: 'Content delivered and approved, but campaign cancelled before posting', fee: '100% of total fee', note: 'You\'ve completed everything asked of you — full payment is standard regardless of what the brand ultimately decides to do with the finished content.' },
]

const withoutContract = [
  'You have no automatic legal entitlement to a kill fee — this is why a written agreement matters even for smaller deals',
  'You can still request fair compensation for time and work already completed, referencing any written brief, email confirmation, or WhatsApp conversation as informal evidence of the agreement',
  'A polite, direct message stating your position — rather than an aggressive demand — gets better results with brands who want to preserve the relationship',
  'For genuinely significant lost income (a large campaign, or exclusivity that cost you other bookings), it may be worth consulting a lawyer, even without a formal contract',
]

const clauseLanguage = {
  title: 'Sample Kill Fee Clause',
  text: '"If [Brand] cancels this campaign for reasons other than Creator\'s breach of this agreement, Creator shall be compensated as follows: 25% of the total fee if cancelled prior to content production; 50% if cancelled after production has begun but before final delivery; 100% if content has been delivered and approved but the campaign is cancelled prior to posting."',
}

const askScript = {
  title: 'How to Ask for a Kill Fee When a Brand Cancels',
  text: '"Thanks for letting me know about the change in plans. As per our agreement, since [production had already begun / content was delivered], the kill fee for this stage is [X]% of the total fee — I\'ll send an invoice for ₹[amount]. Happy to hop on a call if you\'d like to discuss."',
}

const preventionTips = [
  { tip: 'Always include a kill fee clause, even for smaller deals', detail: 'The size of the deal doesn\'t predict the size of the disruption — a cancelled ₹15,000 collaboration can still mean real lost time and lost alternative bookings.' },
  { tip: 'Get a written brief before starting any production', detail: 'A documented brief (even a simple email) is what proves the campaign was real and specific work was requested, which strengthens your position if a cancellation dispute comes up.' },
  { tip: 'Avoid holding exclusive slots for unconfirmed campaigns', detail: 'If a brand asks you to "hold this date" before a contract is signed, that\'s a reasonable moment to ask for a small deposit or at least written confirmation of intent.' },
  { tip: 'Document every stage of your work as you go', detail: 'Save scripts, shot lists, draft edits, and timestamps — if a cancellation dispute happens, this evidence supports exactly which kill fee tier applies.' },
]

export default function KillFeeIndiaPage() {
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
            {['Kill Fees', 'Legal', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Brand Cancelled Your Campaign?<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Kill Fees Explained for Indian Creators</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A brand can cancel a campaign after you've scripted, filmed, and edited an entire piece of content — and legally owe you nothing, unless your contract says otherwise. A kill fee clause is the one line that turns a cancelled campaign from a total loss into fair compensation for the work you already did.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Kill Fees for Indian Creators</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'A kill fee is compensation owed to you when a brand cancels a campaign after you\'ve started work, for reasons other than your own breach of contract',
                'Standard kill fee tiers: 0-25% if cancelled before work starts, 25-50% during early concepting, 50-75% after production begins, 100% if content is delivered and approved',
                'Without a kill fee clause in writing, you have no automatic entitlement to compensation if a brand cancels — this is why it matters even for smaller deals',
                'A brand contract with no kill fee or cancellation clause at all is a genuine red flag worth raising before signing',
                'You can still request fair payment even without a formal contract, referencing briefs, emails, or written chat confirmations as evidence',
                'Ask for a kill fee calmly and factually, citing the agreed terms — this is a normal, professional business request, not a confrontation',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Kill Fees & Cancellations</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'A kill fee is a standard concept borrowed from freelance and publishing industries — compensation for work already committed to or completed when a client cancels a project.',
                'Common kill fee benchmarks range from 25-50% of the total fee if cancelled after the brief but before production, to 100% if content has been delivered and approved but not yet published.',
                'A brand contract without any cancellation or kill fee clause is widely viewed as a red flag — it signals the brand reserves the right to cancel at any stage without compensating the creator.',
                'Kill fee clauses typically apply only to brand-initiated cancellations, not to situations where the creator fails to deliver on time or the content fundamentally violates the agreed brief.',
                'Payment and scope disputes remain among the most common categories of creator-brand conflict, and a large share are traceable to undefined cancellation and termination terms in the original agreement.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kill fee stages */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Kill Fee Benchmarks by Campaign Stage</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>The later a cancellation happens, the more you're owed — this reflects the real time and opportunity cost you've already absorbed.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {killFeeStages.map((row, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ flex: 1, minWidth: 220 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{row.stage}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, lineHeight: 1.5 }}>{row.note}</div>
                  </div>
                  <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '4px 12px', borderRadius: 100, fontWeight: 700, fontSize: 13, flexShrink: 0, whiteSpace: 'nowrap' }}>{row.fee}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contract clause */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>The Exact Clause to Add to Your Contract</h2>
            <div className="card" style={{ padding: '20px 22px' }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#FF6B2B', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>{clauseLanguage.title}</div>
              <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '14px 18px', color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.7, fontStyle: 'italic' }}>{clauseLanguage.text}</div>
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Never sign a contract without a cancellation clause again</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Use the free Identity Kit brand deal contract template — with kill fee and termination language already built in.</p>
            </div>
            <Link href="/tools/brand-deal-contract-template" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Get My Contract Template →
            </Link>
          </div>

          {/* Without contract */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>What If You Don't Have a Written Contract?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {withoutContract.map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,152,0,0.05)', border: '1px solid rgba(255,152,0,0.18)', borderRadius: 12, padding: '14px 20px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#FF9800', flexShrink: 0, fontWeight: 700 }}>⚠</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Ask script */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>How to Ask for a Kill Fee</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>This is a routine business request — keep it calm, factual, and non-confrontational.</p>
            <div className="card" style={{ padding: '20px 22px' }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#FF6B2B', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>{askScript.title}</div>
              <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '14px 18px', color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.7, fontStyle: 'italic' }}>{askScript.text}</div>
            </div>
          </section>

          {/* Prevention */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>4 Ways to Protect Yourself Before It Happens</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {preventionTips.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF6B2B' }}>{item.tip}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'What exactly is a kill fee?', a: 'A kill fee is a payment owed to you when a brand cancels a campaign for reasons other than your own failure to deliver — compensating you for time, resources, and other opportunities you gave up by committing to their project.' },
                { q: 'Am I owed anything if the brand cancels and I never signed a contract?', a: 'You have no automatic legal entitlement without a written agreement, but you can still request fair compensation for work already completed, referencing any brief, email, or written chat as informal evidence. A polite, factual request often works even without a formal contract, especially with brands that want to maintain a good relationship.' },
                { q: 'How much should I ask for if a brand cancels after I\'ve already filmed the content?', a: 'A fair range at this stage is 50-75% of your total fee, reflecting the bulk of your time and production investment. If the content was already delivered and approved before cancellation, 100% payment is standard, since you\'ve completed everything asked of you.' },
                { q: 'Is it unreasonable to ask for a kill fee clause before signing a contract?', a: 'No — it\'s a completely standard, professional request. A brand hesitant to agree to any cancellation compensation is a genuine warning sign about how they might handle other aspects of the working relationship.' },
                { q: 'Does a kill fee apply if I miss my own deadline or fail to deliver as promised?', a: 'No, kill fee clauses specifically cover brand-initiated cancellations, not cancellations caused by the creator\'s own failure to perform. If you miss a deadline or deliver content that doesn\'t match the agreed brief, the brand may have separate, legitimate grounds to cancel without paying a kill fee — which is exactly why clear deliverables and timelines matter on both sides.' },
                { q: 'Should the kill fee percentage be the same for every type of campaign?', a: 'Not necessarily — larger, more complex campaigns with significant pre-production work (multi-day shoots, scriptwriting, coordination with other people) may justify higher kill fee percentages even at earlier stages, since more has genuinely been invested before filming even begins.' },
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
                { href: '/blog/content-revisions-scope-creep-brand-deals-india-2026', title: 'Handling Revisions & Scope Creep in Brand Deals', tag: 'Scope Creep' },
                { href: '/blog/how-to-get-paid-by-brands-india-2026', title: 'How to Get Paid by Brands in India', tag: 'Getting Paid' },
                { href: '/blog/content-usage-rights-explained-india-2026', title: 'Content Usage Rights Explained (India 2026)', tag: 'Usage Rights' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🛑</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              A cancelled campaign shouldn't mean zero payment.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a contract template that protects your time from day one — kill fee clause included.
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
          <Link href="/tools/brand-deal-contract-template" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contract Template</Link>
          <Link href="/tools/influencer-rate-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Rate Calculator</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
