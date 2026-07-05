import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Manage Multiple Brand Deals at Once Without Dropping the Ball (India 2026)',
  description: 'A creator-side guide to running 3-5 brand deals at the same time — a simple pipeline structure, how to price and stack overlapping exclusivity windows, a weekly review routine, and the red flags that mean you\'ve taken on too much.',
  keywords: 'how to manage multiple brand deals india, brand deal pipeline creator india, how many brand deals per month influencer, exclusivity clause overlap india, creator business organization tips',
  openGraph: {
    title: 'How to Manage Multiple Brand Deals at Once Without Dropping the Ball (India 2026)',
    description: 'Running 3 brand deals at once feels chaotic without a system. With one, it\'s just pipeline management. Here\'s the exact structure.',
    url: 'https://identitykit.in/blog/managing-multiple-brand-deals-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/multiple-brand-deals-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/managing-multiple-brand-deals-india-2026',
  },
}

const pipelineStages = [
  { stage: 'Inbound', detail: 'A brand reaches out or you send a pitch. Log it immediately — brand name, contact, what they want, and rough budget if mentioned.' },
  { stage: 'Reviewing', detail: 'You\'re deciding fit — right niche, right timing, no exclusivity conflicts with an existing deal. Move fast here; don\'t let deals sit unreviewed for days.' },
  { stage: 'Negotiating', detail: 'Rate, deliverables, and usage rights are being discussed. If this stage drags past 10-14 days with no progress, it\'s worth a direct follow-up or moving on.' },
  { stage: 'Contracted', detail: 'Signed and scheduled. This is the point where the deal gets a firm production date on your calendar, not just a vague "sometime this month."' },
  { stage: 'Production', detail: 'You\'re actively filming, editing, and preparing the deliverable. This is where overlapping deadlines cause the most stress if not planned for in advance.' },
  { stage: 'Published & Invoiced', detail: 'Content is live, the invoice is sent, and a quick performance recap has gone to the brand — the final step that makes rebooking far more likely.' },
]

const weeklyRoutine = [
  { time: '5 min', task: 'Inbound triage', detail: 'Quickly sort new pitches: clear no (mismatched niche, lowball, sketchy product), maybe (right brand, wrong timing), or strong yes (send rate card immediately).' },
  { time: '10 min', task: 'Negotiation check', detail: 'Flag any deal that\'s been sitting in negotiation for more than 10-14 days — either push it forward with a follow-up or archive it.' },
  { time: '5 min', task: 'Production check', detail: 'Confirm every filming deadline for the coming week is realistic given everything else on your plate.' },
  { time: '10 min', task: 'Payment check', detail: 'Review outstanding invoices and send a polite follow-up on anything approaching or past its due date.' },
]

const exclusivityTips = [
  'Cap exclusivity windows at 14-21 days for standard single-post integrations — brands rarely need longer to measure initial results',
  'A broad category exclusivity (e.g. "financial services" or "skincare") blocks far more future deals than a narrow one (e.g. "one specific competing product") — negotiate the category definition, not just the duration',
  'Price exclusivity as its own line item — a longer or broader exclusivity window should cost the brand more, reflecting the deals you\'re giving up elsewhere',
  'Never agree to exclusivity verbally — it belongs in writing, with the exact category and date range spelled out',
  'Track every active exclusivity window on your calendar so you don\'t accidentally accept a conflicting deal from a competing brand',
]

const capacitySigns = [
  { sign: 'You\'re consistently missing your own internal deadlines, even before the brand-facing one', meaning: 'You\'ve likely taken on more deals than your production capacity can handle well.' },
  { sign: 'You\'re sending vague, delayed updates to brands instead of quick proactive check-ins', meaning: 'This is often the first visible sign of being overextended, and it directly damages your reputation for reliability.' },
  { sign: 'Quality is visibly dipping compared to your usual work', meaning: 'A worse deliverable now costs you more in future rebooking than turning down one extra deal would have.' },
  { sign: 'You\'re saying yes to every inbound pitch regardless of fit or timing', meaning: 'Most experienced creators find 3-5 simultaneous deals is a realistic, sustainable ceiling — beyond that, quality and reliability typically suffer.' },
]

export default function ManageMultipleBrandDealsIndiaPage() {
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
            {['Deal Pipeline', 'Creator Career', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Manage Multiple<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Brand Deals Without Dropping the Ball</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Running 2-3 brand deals at once sounds like chaos — conflicting briefs, overlapping exclusivity windows, missed deadlines. For a creator without a system, that's exactly what happens. With a system, it's just pipeline management.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Managing Multiple Brand Deals</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Track every deal through a simple 6-stage pipeline: inbound, reviewing, negotiating, contracted, production, published & invoiced',
                'Most creators find 3-5 simultaneous deals is a realistic, sustainable ceiling before quality and reliability start to suffer',
                'A weekly 30-minute review — triaging inbound pitches, checking stuck negotiations, confirming deadlines, chasing payments — prevents most pipeline chaos',
                'Cap exclusivity windows at 14-21 days for standard integrations, and always price broader or longer exclusivity as its own line item',
                'A negotiation stuck for more than 10-14 days with no progress should be pushed forward or archived, not left open indefinitely',
                'Sending a brief, proactive status update ("script drafted, filming Tuesday, on track for Friday") is what separates creators brands love rebooking from ones they call unreliable',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Managing Multiple Deals</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Most creators find they can comfortably handle 3-5 simultaneous brand deals before quality and reliability begin to noticeably suffer.',
                'Creators with a published, structured rate card close deals meaningfully faster than those pricing from scratch on every single pitch, since expectations are clear upfront.',
                'A category exclusivity clause is frequently the most heavily negotiated part of a brand deal, more contested than the flat fee itself — a broad category can quietly block several other deals during the same window.',
                'Sending a post-campaign performance recap without being asked is consistently cited as one of the strongest predictors of being rebooked by the same brand.',
                'A "deal rot" pattern — a negotiation stuck in limbo for more than roughly two weeks without progress — is a recognised sign to either push the deal forward decisively or let it go.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pipeline stages */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>A Simple 6-Stage Pipeline for Every Deal</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>A basic spreadsheet with these columns works just as well as a paid tool — the structure matters more than the software.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {pipelineStages.map((item, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 8, padding: '4px 12px', color: '#FF6B2B', fontWeight: 700, fontSize: 12, flexShrink: 0, whiteSpace: 'nowrap' }}>{item.stage}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Weekly routine */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>A 30-Minute Weekly Review That Prevents Most Chaos</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Block this every Monday morning — it's the single habit that keeps a multi-deal pipeline from spiralling.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {weeklyRoutine.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 10px', borderRadius: 100, fontSize: 12, fontWeight: 700, flexShrink: 0, whiteSpace: 'nowrap' }}>{item.time}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{item.task}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Send instant, professional quotes to every inbound pitch</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>A ready rate card and media kit means "strong potential" pitches get an immediate response instead of sitting in your inbox for days.</p>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build My Free Profile →
            </Link>
          </div>

          {/* Exclusivity */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Handling Overlapping Exclusivity Windows</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>This is where multi-deal creators most often get caught out — accepting an exclusivity window without thinking through what it blocks elsewhere.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {exclusivityTips.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#FF6B2B', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Capacity signs */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Signs You've Taken On Too Much</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {capacitySigns.map((row, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{row.sign}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{row.meaning}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'How many brand deals can a creator realistically handle at once?', a: 'Most creators find 3-5 simultaneous deals is a comfortable, sustainable ceiling. Beyond that, quality and reliability commonly start to suffer — it\'s generally better to turn down an extra deal than deliver subpar content to any of your existing partners.' },
                { q: 'Do I need special software to manage multiple brand deals?', a: 'No — a simple spreadsheet with columns for brand name, contact, deliverables, deadlines, payment status, and exclusivity dates works perfectly well for most creators. The structure and consistency of reviewing it matters far more than which tool you use.' },
                { q: 'What should I do if two brand deals have conflicting deadlines in the same week?', a: 'Review this during your weekly pipeline check, well before the week arrives — if a genuine conflict exists, communicate proactively with one brand about a small timeline adjustment rather than scrambling or missing a deadline entirely. Brands generally respond better to early, honest communication than a last-minute delay.' },
                { q: 'How long should I give a brand to respond during negotiation before following up or moving on?', a: 'If a negotiation has been stuck for more than 10-14 days with no progress, it\'s a reasonable point to send a direct follow-up asking for a decision, or to consciously archive the opportunity and focus your energy elsewhere.' },
                { q: 'What\'s a reasonable exclusivity window to accept from a brand?', a: '14-21 days is a reasonable standard for most single-post integrations — brands rarely need longer than that to gauge initial performance. Longer or broader category exclusivity should come with a higher fee, reflecting the other deals you\'re giving up during that window.' },
                { q: 'How do I keep brands happy when I\'m juggling several deals at once?', a: 'Send brief, proactive status updates even when nothing is wrong — a one-line update like "script drafted, filming Tuesday, still on track for Friday" reassures a brand you haven\'t forgotten them. Creators who communicate this way consistently are far more likely to be rebooked than those who go quiet until the deadline.' },
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
                { href: '/blog/how-to-get-paid-by-brands-india-2026', title: 'How to Get Paid by Brands in India', tag: 'Getting Paid' },
                { href: '/blog/content-usage-rights-explained-india-2026', title: 'Content Usage Rights Explained (India 2026)', tag: 'Usage Rights' },
                { href: '/blog/talent-agency-vs-self-represented-india-2026', title: 'Talent Agency vs Self-Represented Creator in India', tag: 'Agency vs Self-Rep' },
                { href: '/blog/brand-deal-case-study-india-2026', title: 'How to Build Case Studies From Past Brand Deals', tag: 'Case Studies' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🗂️</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Run your brand deals like a business, not a scramble.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with your rate card ready to send the moment a strong-fit pitch lands in your inbox.
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
