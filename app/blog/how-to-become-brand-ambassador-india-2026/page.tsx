import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Become a Brand Ambassador in India 2026 (Retainer Rates, Contracts & Pitch Guide)',
  description: 'Complete guide to landing brand ambassador retainer deals in India — how ambassador programs differ from one-off brand deals, rupee retainer benchmarks by tier, compensation models, exclusivity terms, and how to pitch a brand you already work with for an ambassador upgrade.',
  keywords: 'how to become a brand ambassador india, brand ambassador program india, influencer retainer deal india, brand ambassador rates india 2026, long term influencer partnership india, ambassador vs influencer india',
  openGraph: {
    title: 'How to Become a Brand Ambassador in India 2026 (Retainer Rates, Contracts & Pitch Guide)',
    description: 'One-off deals reset to zero after every post. Ambassador programs compound. Here\'s how Indian creators move from single collaborations to recurring monthly retainers.',
    url: 'https://identitykit.in/blog/how-to-become-brand-ambassador-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/brand-ambassador-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/how-to-become-brand-ambassador-india-2026',
  },
}

const differences = [
  { label: 'Duration', oneOff: 'Single post or short campaign', ambassador: '3, 6, or 12 months, often renewable' },
  { label: 'Payment structure', oneOff: 'Flat fee per deliverable', ambassador: 'Monthly retainer + per-deliverable fee, sometimes + commission' },
  { label: 'Content cadence', oneOff: 'One-time', ambassador: '2–8 pieces of content per month' },
  { label: 'Exclusivity', oneOff: 'Rare, or short-term if requested', ambassador: 'Common — usually category-exclusive for the contract term' },
  { label: 'Relationship depth', oneOff: 'Transactional', ambassador: 'Ongoing — event invites, early product access, co-creation' },
]

const retainerBenchmarks = [
  { tier: 'Nano (1K–10K)', rate: '₹3,000–₹15,000/month', note: 'Often structured as product allowance + a small retainer rather than pure cash — a common, legitimate starting structure.' },
  { tier: 'Micro (10K–100K)', rate: '₹15,000–₹80,000/month', note: 'The most common tier for genuine retainer deals in India — brands get consistent content at a lower per-post cost than booking one-offs repeatedly.' },
  { tier: 'Mid-tier (100K–500K)', rate: '₹80,000–₹3L/month', note: 'Retainers typically bundle a fixed content cadence, basic usage rights, and category exclusivity into one monthly number.' },
  { tier: 'Macro (500K–2M)', rate: '₹3L–₹12L/month', note: 'Ambassador deals at this tier often include event appearances, co-creation input, and sometimes revenue-share components.' },
  { tier: 'Mega/Celebrity (2M+)', rate: '₹12L+/month or multi-crore annual', note: 'Usually structured through agencies with equity or deep revenue-share arrangements layered on top of the base retainer.' },
]

const compModels = [
  { model: 'Product-only (gifted)', detail: 'Most common at nano tier — the product substitutes for cash. Legitimate as a starting structure, but shouldn\'t be the permanent model once your engagement and portfolio grow.' },
  { model: 'Flat monthly retainer', detail: 'A fixed fee for an agreed content cadence — predictable for both sides. Most common at micro and mid-tier levels.' },
  { model: 'Retainer + per-deliverable', detail: 'A base retainer for availability and exclusivity, plus a fee for each individual piece of content — the most balanced structure for most Indian creators.' },
  { model: 'Affiliate/commission-based', detail: 'A percentage of sales generated through your unique code or link — trackable and scalable, but shouldn\'t be your only compensation unless the commission rate is genuinely strong for your audience size.' },
  { model: 'Hybrid (retainer + commission)', detail: 'The most common structure among high-performing ambassador programs — base retainer for guaranteed income, plus a commission layer that rewards actual performance.' },
]

const redFlags = [
  'Exclusivity is demanded with no exclusivity premium attached — you\'re asked to block competitor brands for months for free',
  'No minimum guaranteed retainer — 100% commission-only with an unproven, low-converting product',
  'Vague, undefined content cadence ("post about us regularly") instead of a specific monthly deliverable count',
  'No clear contract length or renewal terms — you\'re locked in indefinitely with no defined exit point',
  'The brand has a pattern of converting ambassadors back to one-off or barter terms after the first few months',
]

const pitchSteps = [
  { step: '01', title: 'Identify brands you\'ve already worked with successfully', body: 'Ambassador programs are far easier to land with a brand you\'ve already delivered results for — you have proof, not just a pitch. Review past one-off collaborations that performed well.' },
  { step: '02', title: 'Build a simple performance summary', body: 'Pull together the engagement, reach, or sales results from your previous work with that brand. A short one-pager showing what you delivered is more persuasive than any cold pitch.' },
  { step: '03', title: 'Propose the ambassador upgrade directly', body: 'Brands rarely offer this proactively — it\'s usually creator-initiated. A simple, confident ask: "I\'d love to explore a longer-term ambassador partnership rather than one-off posts going forward."' },
  { step: '04', title: 'Suggest a specific structure, don\'t leave it open-ended', body: 'Propose a retainer + per-deliverable hybrid with a defined monthly cadence (e.g. 2 Reels + 4 Stories/month) rather than asking the brand to design the entire structure for you.' },
  { step: '05', title: 'Negotiate exclusivity separately from the base retainer', body: 'If the brand wants category exclusivity, that should add 20–40% on top of your base retainer — never fold it in for free, since it directly limits your other income during the contract term.' },
  { step: '06', title: 'Get the contract length and renewal terms in writing', body: 'Confirm the exact term (3, 6, or 12 months), what happens at renewal, and what the exit terms are if either side wants to end the partnership early.' },
]

export default function BrandAmbassadorIndiaPage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', color: '#fff', fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; overflow: hidden; transition: border-color 0.2s; }
        .card:hover { border-color: rgba(255,107,43,0.2); }
        table.cmp { width: 100%; border-collapse: collapse; }
        table.cmp th, table.cmp td { text-align: left; padding: 12px 14px; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        table.cmp th { color: #FF6B2B; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
        table.cmp td { color: rgba(255,255,255,0.6); }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .hero-pad { padding: 48px 16px 32px !important; }
          .content-pad { padding: 0 16px 60px !important; }
          table.cmp { font-size: 12px; }
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
            {['Brand Ambassador', 'Brand Deals', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Become a Brand Ambassador<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>in India (2026 Retainer Guide)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A one-off brand deal resets to zero the moment it's posted. A brand ambassador retainer compounds — steady monthly income, deeper brand relationships, and a title that makes your next pitch easier. Here's how Indian creators move from single collaborations to recurring ambassador deals.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Becoming a Brand Ambassador in India</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Ambassador deals are recurring (3–12 month) partnerships with a set content cadence, unlike one-off single-post collaborations',
                'The easiest path in is upgrading a brand you\'ve already worked with successfully — ambassador deals are rarely offered cold',
                'Typical structure: a monthly retainer plus a per-deliverable fee, sometimes with a commission layer on top',
                'Micro creators in India (10K–100K) typically see ₹15,000–₹80,000/month retainers depending on niche and cadence',
                'Category exclusivity should always add 20–40% on top of your base retainer — never accept it for free',
                'Reliability and consistent engagement matter more to brands choosing ambassadors than raw follower count',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Brand Ambassador Programs</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Brands increasingly prioritise long-term creator partnerships over scattered one-off campaigns, citing stronger ROI from consistent, repeated brand exposure.',
                'Ambassador programs are frequently cited as the highest-ROI creator marketing format, often outperforming sponsored posts, seeding, and affiliate-only arrangements.',
                'Reliability, response time, and consistent engagement matter more to brands selecting ambassadors than raw follower count alone.',
                'The most common ambassador compensation model blends a fixed monthly retainer with a performance-based bonus or commission layer.',
                'Category exclusivity in ambassador contracts is typically priced at a 20–40% premium above the base retainer to compensate for the income the creator forgoes elsewhere.',
                'Most brands don\'t proactively offer ambassador upgrades — the transition is usually creator-initiated after a track record of successful one-off collaborations.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ambassador vs one-off */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Brand Ambassador vs. One-Off Collaboration</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Understanding the structural difference is the first step to pitching the upgrade correctly.</p>
            <div className="card" style={{ padding: 0 }}>
              <table className="cmp">
                <thead>
                  <tr><th>Factor</th><th>One-Off Deal</th><th>Ambassador Program</th></tr>
                </thead>
                <tbody>
                  {differences.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>{row.label}</td>
                      <td>{row.oneOff}</td>
                      <td style={{ color: '#FF9A6B' }}>{row.ambassador}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Retainer benchmarks */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Ambassador Retainer Benchmarks in India 2026</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Directional benchmarks by tier — actual numbers vary by niche, content cadence, and exclusivity scope.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {retainerBenchmarks.map((row, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{row.tier}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, lineHeight: 1.5 }}>{row.note}</div>
                  </div>
                  <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '4px 12px', borderRadius: 100, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>{row.rate}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Comp models */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>5 Common Ambassador Compensation Models</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {compModels.map((item, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF6B2B' }}>{item.model}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Pitching an ambassador upgrade? Bring the numbers.</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>A media kit showing your past results with the brand, plus a clear rate card, makes the ambassador ask far easier to say yes to. Free, built for Indian creators.</p>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build My Free Profile →
            </Link>
          </div>

          {/* 6 steps to pitch */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>6 Steps to Pitch a Brand Ambassador Upgrade</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Most Indian creators land ambassador deals by proposing them — not by waiting to be discovered.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {pitchSteps.map((item) => (
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
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Red Flags in an Ambassador Offer</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>A bad ambassador deal locks in months of underpayment — check for these before signing anything.</p>
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
                { q: 'How is a brand ambassador different from a regular influencer collaboration?', a: 'A one-off influencer collaboration is a single deliverable set — one Reel or a short campaign — that ends once the content is posted. A brand ambassador signs a recurring partnership, typically 3–12 months, with a defined content cadence, often including exclusivity and a deeper relationship like event invites or early product access.' },
                { q: 'Do I need a large following to become a brand ambassador in India?', a: 'No. Reliability, consistent engagement, and audience fit matter more to brands selecting ambassadors than raw follower count. Micro-influencers are frequently the sweet spot for ambassador programs precisely because they combine strong engagement with an affordable retainer.' },
                { q: 'How do I get my first brand ambassador deal?', a: 'The easiest path is upgrading a brand you\'ve already worked with successfully on a one-off basis. Ambassador programs are rarely offered proactively — most creators land them by directly proposing a longer-term partnership after demonstrating good results.' },
                { q: 'What should be included in a brand ambassador retainer?', a: 'A clear monthly retainer amount, a defined content cadence (e.g. 2 Reels + 4 Stories per month), the contract length and renewal terms, and — if exclusivity is required — a separate exclusivity premium on top of the base retainer, typically 20–40%.' },
                { q: 'Should I accept an ambassador deal that\'s commission-only with no fixed retainer?', a: 'Be cautious. A pure commission structure means your income depends entirely on the brand\'s conversion performance, which you don\'t control. A hybrid model — a smaller guaranteed retainer plus a commission layer — is a fairer and more common structure for genuine long-term partnerships.' },
                { q: 'Can I be an ambassador for more than one brand at a time?', a: 'Yes, unless your contract includes category exclusivity. If a brand wants you exclusive to their category, that restriction should come with a premium payment to compensate for the income you\'re giving up elsewhere — never accept broad exclusivity for free.' },
                { q: 'How long do brand ambassador contracts typically run in India?', a: 'Most ambassador contracts run 3, 6, or 12 months, often with a renewal option built in. Shorter initial terms (3 months) are common as a trial period before a brand commits to a longer, more exclusive arrangement.' },
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
                { href: '/blog/how-to-negotiate-brand-deal-rates-india-2026', title: 'How to Negotiate Brand Deal Rates in India', tag: 'Negotiation' },
                { href: '/blog/barter-collaboration-india-2026', title: 'Barter Collaboration in India: When to Say Yes', tag: 'Barter Collab' },
                { href: '/blog/brand-deal-contract-template-india', title: 'Brand Deal Contract Template for Indian Creators', tag: 'Legal' },
                { href: '/blog/influencer-rate-card-india-2026', title: 'Influencer Rate Card India 2026', tag: 'Rate Card' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🏆</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Turn one good brand deal into a recurring one.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with your rate card and past results ready — everything you need to pitch your next brand for an ambassador upgrade.
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
          <Link href="/tools/influencer-rate-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Rate Calculator</Link>
          <Link href="/tools/brand-deal-contract-template" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contract Template</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
