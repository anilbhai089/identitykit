import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Influencer Contract Checklist for Brands in India: IP Rights, TDS & Termination (2026)',
  description: 'A legal checklist for Indian brands drafting influencer contracts — IP ownership under the Copyright Act, TDS deduction under Section 194J, ASCI-compliant disclosure clauses, exclusivity pricing, and the termination and morality clauses every agreement needs.',
  keywords: 'influencer contract checklist india brands, influencer agreement tds section 194j, influencer contract ip ownership india, brand influencer legal contract india 2026, morality clause influencer contract india',
  openGraph: {
    title: 'Influencer Contract Checklist for Brands in India: IP Rights, TDS & Termination (2026)',
    description: 'By default, the creator owns the content under Indian copyright law — even if you paid for it. Here\'s the exact clause checklist Indian brands need.',
    url: 'https://identitykit.in/blog/influencer-contract-checklist-brands-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/contract-checklist-brands-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/influencer-contract-checklist-brands-india-2026',
  },
}

const clauses = [
  { title: 'IP ownership & usage license', body: 'By default, the creator owns the copyright to content they produce, under the Copyright Act, 1957 — even if your brand paid for it. For your brand to legally use the content in paid ads, on your website, or in emails, the contract must explicitly grant a license (royalty-free, and specify perpetual or time-limited) covering exactly which platforms and use cases.' },
  { title: 'Payment terms & TDS deduction', body: 'State the total fee, payment schedule (commonly 50% advance, 50% on posting), and payment method. If annual payments to a single creator exceed ₹30,000, your brand must deduct TDS at 10% under Section 194J and issue Form 16A — this is an Indian-specific compliance obligation with no equivalent in most global contract templates.' },
  { title: 'Disclosure requirement (ASCI compliance)', body: 'Explicitly require #Ad or #PaidPartnership disclosure in the first two lines of the caption, per ASCI guidelines — this protects your brand from compliance exposure and removes any ambiguity for the creator.' },
  { title: 'Content approval & revision limit', body: 'Define how many revision rounds are included (2 is standard) and the review timeline. Without this, requests can extend indefinitely with no clear point of completion.' },
  { title: 'Exclusivity (category, duration, geography)', body: 'Define the exact competing category, time window, and geographic scope — a vague "no competitors" clause is unenforceable and unclear for both sides. Expect to pay a premium (commonly 2-3x the base rate) for genuine category exclusivity.' },
  { title: 'Content live-duration requirement', body: 'State how long the content must remain live and visible — commonly 6-12 months for static posts, 30 days for Stories — and that the creator cannot delete or archive it early without your written consent.' },
  { title: 'Termination & morality clause', body: 'Include the right to terminate if the creator is involved in illegal activity, serious controversy, or conduct that damages your brand\'s reputation. Define what qualifies (criminal charges, documented brand-safety incidents) rather than vague "reputational harm" language, which can expose your brand to a wrongful-termination dispute.' },
  { title: 'Indemnification', body: 'The creator should warrant that their content is original and doesn\'t infringe on third-party rights (music, images, other creators\' work), and agree to be responsible for any resulting legal claims.' },
]

const mistakes = [
  { m: 'Assuming payment automatically transfers content ownership', f: 'Under Indian copyright law, payment alone does not transfer ownership — you need an explicit license or assignment clause in writing, specifying exactly what your brand can do with the content.' },
  { m: 'Writing a vague morality/termination clause', f: 'Generic "reputational harm" language without specific triggering criteria (criminal charges, documented incidents) can be challenged as arbitrary — define concrete triggers instead.' },
  { m: 'Forgetting TDS obligations', f: 'Missing the Section 194J TDS deduction on payments above ₹30,000/year to a single creator is a genuine compliance gap, not just a paperwork inconvenience — factor this into your payment process from the start.' },
  { m: 'Leaving exclusivity undefined', f: 'A vague "no competitors" clause with no category, duration, or geography specified is difficult to enforce and often disputed after the fact — define all three explicitly.' },
  { m: 'Skipping the disclosure clause because "the creator already knows"', f: 'Explicitly stating the ASCI disclosure requirement in your contract protects your brand\'s own compliance position, regardless of what the creator may or may not already know.' },
]

export default function ContractChecklistBrandsIndiaPage() {
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
            {['For Brands', 'Legal', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Influencer Contract Checklist<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>for Brands in India (IP, TDS & Termination)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            By default, the creator owns the content under Indian copyright law — even if your brand paid for it. Most influencer contract guides are written for US brands and miss India-specific requirements entirely. Here's the checklist that actually applies to you.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — What Your Influencer Contract Needs</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'An explicit IP license clause — payment alone does not transfer content ownership under the Copyright Act, 1957',
                'A TDS deduction clause under Section 194J if annual payments to one creator exceed ₹30,000 — an India-specific requirement most global templates miss',
                'An ASCI-compliant disclosure requirement stated explicitly, not assumed',
                'A defined revision limit and content approval process',
                'A precisely scoped exclusivity clause (category, duration, geography) — priced at a 2-3x premium over the base rate',
                'A termination/morality clause with specific triggering criteria, not vague "reputational harm" language',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Influencer Contracts in India</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Under the Copyright Act, 1957, the creator owns the copyright to content they produce by default — a brand must obtain an explicit license or assignment to legally reuse it in ads, on a website, or in emails.',
                'Brands must deduct TDS at 10% under Section 194J when annual payments to a single influencer exceed ₹30,000, and must issue Form 16A for the deduction — a compliance requirement specific to Indian tax law.',
                'Exclusivity clauses typically command a 2-3x premium on the base rate, reflecting the income the creator forgoes by declining competing brand opportunities during the exclusivity window.',
                'The standard payment structure for influencer contracts is commonly 50% advance and 50% on posting/approval, with milestone-based structures (25% signing, 25% mid-campaign, 50% final delivery) more common for longer ambassador-style engagements.',
                'Payment disagreements, content rights ambiguity, and disclosure/compliance failures are consistently cited as the three dominant categories of influencer marketing legal disputes — all three are preventable with a properly structured contract.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Clauses */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>8 Clauses Every Indian Brand's Contract Needs</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {clauses.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF6B2B' }}>{i + 1}. {item.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.65 }}>{item.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Pair your contract with a clear brief</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>A structured brief reduces the number of revision requests and disputes your contract's approval clause needs to cover. Try the free Campaign Brief Generator.</p>
            </div>
            <Link href="/tools/campaign-brief-generator" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Generate a Brief →
            </Link>
          </div>

          {/* Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>5 Mistakes Brands Make in Influencer Contracts</h2>
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
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12.5, marginTop: 14, lineHeight: 1.6 }}>This is general information, not legal advice — have a qualified lawyer review your specific contract before using it, especially for larger campaigns or ambassador agreements.</p>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'Does paying an influencer automatically give my brand rights to use their content?', a: 'No. Under the Copyright Act, 1957, the creator owns the copyright to content they produce by default, regardless of payment. Your contract must explicitly include a license or assignment clause specifying which platforms and use cases your brand is permitted to use the content for.' },
                { q: 'Do we need to deduct TDS on influencer payments in India?', a: 'Yes, if your total annual payments to a single influencer exceed ₹30,000, TDS must be deducted at 10% under Section 194J, and you must issue Form 16A for the deduction. This is a genuine compliance requirement, not optional paperwork.' },
                { q: 'How should we price an exclusivity clause?', a: 'Exclusivity commonly commands a 2-3x premium on the base content fee, since the creator is giving up income from competing brands during the window. Define the exact competing category, duration, and geographic scope explicitly — a vague "no competitors" clause is difficult to enforce.' },
                { q: 'What should our morality/termination clause say?', a: 'Use specific triggering criteria — criminal charges, documented brand-safety incidents, sustained regulatory violations — rather than vague "reputational harm" language. Overly broad morality clauses can expose your brand to a wrongful-termination dispute if invoked without clear grounds.' },
                { q: 'How long should content stay live after we pay for it?', a: 'Commonly 6-12 months for static posts and around 30 days for Stories is standard practice. Include a clause preventing the creator from deleting or archiving the content early without your written consent.' },
                { q: 'Do we need to mention ASCI disclosure requirements in the contract even for a gifted collaboration?', a: 'Yes — disclosure requirements apply regardless of whether the creator is paid in cash or given free product. Stating the exact disclosure format explicitly in your contract protects your brand\'s compliance position and removes ambiguity for the creator.' },
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
                { href: '/blog/influencer-brief-guide-india-2026', title: 'How to Write an Influencer Brief for Indian Creators', tag: 'For Brands' },
                { href: '/blog/evaluating-creator-media-kit-brands-india-2026', title: 'What to Look for in a Creator\'s Media Kit', tag: 'For Brands' },
                { href: '/blog/asci-guidelines-influencer-disclosure-india-2026', title: 'ASCI Guidelines for Influencers in India 2026', tag: 'ASCI Compliance' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>📜</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              A clear contract protects the campaign, not just the paperwork.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Pair a solid contract with a structured brief — try Identity Kit's free Campaign Brief Generator for your next collaboration.
            </p>
            <Link href="/tools/campaign-brief-generator" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Generate My Brief Free →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 14 }}>
              identitykit.in · Free tools for brands and creators
            </div>
          </div>

        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/tools/campaign-brief-generator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Campaign Brief Generator</Link>
          <Link href="/tools/brand-deal-contract-template" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contract Template</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Free tools for Indian creators and brands · identitykit.in</p>
      </footer>
    </div>
  )
}
