import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'UGC Rates: What to Charge for User-Generated Content (2026)',
  description: 'UGC pricing works nothing like influencer rates — follower count barely matters. Here\'s how experience tier, usage rights, and bundle pricing actually shape what UGC creators charge in 2026.',
  keywords: 'ugc rates 2026, what to charge for ugc, ugc creator pricing guide, user generated content rates, ugc rate card, how much do ugc creators make',
  openGraph: {
    title: 'UGC Rates: What to Charge for User-Generated Content (2026)',
    description: 'UGC pricing works nothing like influencer rates — follower count barely matters. Here\'s how experience tier, usage rights, and bundle pricing actually shape what UGC creators charge.',
    url: 'https://identitykit.in/blog/ugc-creator-rates-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/ugc-creator-rates.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/ugc-creator-rates-2026',
  },
}

const tiers = [
  { tier: 'Beginner', range: '$75 – $300 per video', notes: 'A small portfolio (5–20 pieces), limited brand history, still building proof of consistent quality.' },
  { tier: 'Mid-tier', range: '$300 – $1,000 per video', notes: 'A track record of delivered work, some brand repeat business, reliable turnaround.' },
  { tier: 'Top-tier', range: '$600 – $3,000+ per video', notes: 'Strong portfolio, proven ad performance, often specialized in a high-demand niche (tech, beauty, SaaS).' },
]

const usageAddOns = [
  { item: 'Organic use only (brand\'s own social feed)', typical: 'Usually included in the base creation fee' },
  { item: 'Paid ad usage (fixed period, e.g. 30–90 days)', typical: 'Commonly an added 30–100% on top of the base fee' },
  { item: 'Unlimited or perpetual usage buyout', typical: 'Priced meaningfully higher — often a separate, larger fee rather than a percentage add-on' },
  { item: 'Extra hook variations (alternate openings for testing)', typical: 'Usually a smaller flat add-on per variation, not a full second video fee' },
]

const faqs = [
  { q: 'Why do UGC rates vary so much between sources?', a: 'Because "UGC creator" spans an enormous range — a beginner\'s first paid video and a specialized creator with a proven ad-performance track record are functionally different services, even though both get called "UGC." Treat any published range as a reference point, not a fixed price.' },
  { q: 'Do I need a large following to do UGC work?', a: 'No — this is the core difference from influencer marketing. UGC is commissioned for its content, not distributed through the creator\'s own audience, so brands are evaluating your filming and editing quality, not your follower count.' },
  { q: 'What\'s the difference between UGC rates and influencer rates?', a: 'Influencer rates are largely priced around reach and audience — you post to your own following. UGC rates are priced around production and usage rights — the brand posts the content themselves, often as paid ads, so your audience size is mostly irrelevant to the price.' },
  { q: 'Should I charge extra if a brand wants to run my UGC as a paid ad?', a: 'Yes — this is one of the most consistently recommended practices across UGC pricing guides. Organic use (posted once on the brand\'s own feed) and paid ad usage (potentially seen by a much larger, purchased audience) are different value exchanges and are commonly priced separately.' },
  { q: 'Is it normal to offer bundle discounts for multiple videos?', a: 'Yes — bundle discounts in the 15–25% range for orders of five or more videos are a commonly cited industry norm, since a bundle gives the creator more guaranteed, predictable work in exchange for a lower per-video rate.' },
  { q: 'How is AI-generated UGC affecting rates for human creators?', a: 'AI UGC tools have emerged as a lower-cost option some brands use for rapid, low-budget testing — but many brands continue to prefer human-created UGC for trust-sensitive categories and campaigns where authenticity is the whole point, so this is a factor to watch rather than a reason to underprice your own work.' },
]

export default function UgcRatesPage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', color: '#fff', fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; overflow: hidden; transition: border-color 0.2s; }
        .card:hover { border-color: rgba(255,107,43,0.2); }
        table.cmp { width: 100%; border-collapse: collapse; }
        table.cmp th, table.cmp td { padding: 14px 12px; text-align: left; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.07); vertical-align: top; }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .hero-pad { padding: 48px 16px 32px !important; }
          .content-pad { padding: 0 16px 60px !important; }
          table.cmp { font-size: 12px !important; }
          table.cmp th, table.cmp td { padding: 10px 8px !important; }
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
            {['UGC', 'Rate Card', 'Creator Economy'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            UGC Rates: What to<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Actually Charge in 2026</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A UGC creator with 300 followers and one with 30,000 can charge the exact same rate for the exact same video — because unlike influencer marketing, nobody's paying for your reach. Here's how UGC pricing actually works, and where the real money is hiding in the fine print.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — UGC Rates</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'UGC rates in 2026 commonly range from $75 (beginner) to $3,000+ (top-tier) per video, with a frequently cited market reference point around $150–$300 for a standard video.',
                'Follower count barely factors into UGC pricing — brands are paying for the content itself, which they post through their own channels, not for your personal audience.',
                'Usage rights are typically a separate line item from the base creation fee — paid ad usage commonly adds 30–100% on top of organic-only pricing.',
                'Bundle orders of 5+ videos commonly come with a 15–25% discount versus one-off pricing.',
                'Experience tier, niche, and content complexity all move the price more than any single "standard rate" — treat published figures as reference points, not fixed pricing.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — UGC Pricing</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'UGC (User-Generated Content) is content commissioned from a real person for a brand to use in its own marketing — distinct from influencer content, which is posted through the creator\'s own channel and audience.',
                'Published market figures for UGC rates vary enormously across sources — some cite a $150–$300 typical range, others report a much wider $75–$3,000+ spread depending on experience and niche.',
                'Tech and beauty are frequently cited as among the highest-paying UGC niches.',
                'Separating the creation fee from the usage fee is a widely recommended practice — it ensures a creator is paid fairly if a brand scales up how widely the content is distributed.',
                'AI-generated UGC tools have emerged as a lower-cost alternative some brands use for rapid testing, though human-created content is still frequently preferred for trust-sensitive categories.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tier table */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Pricing by Experience Tier</h2>
            <div className="card" style={{ padding: '18px 16px', overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr>
                    <th style={{ color: '#FF6B2B' }}>Tier</th>
                    <th>Typical per-video range</th>
                    <th>What separates this tier</th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 700 }}>{row.tier}</td>
                      <td style={{ color: 'rgba(255,255,255,0.6)' }}>{row.range}</td>
                      <td style={{ color: 'rgba(255,255,255,0.6)' }}>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 14, lineHeight: 1.6 }}>
              These are reference ranges aggregated from multiple industry pricing guides, not a fixed standard — actual rates vary by niche, region, and the specific brief.
            </p>
          </section>

          {/* Usage rights */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Usage Rights Are a Separate Line Item</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24, fontSize: 15 }}>
              This is the single most common way UGC creators leave money on the table — treating "creation" and "usage" as one bundled price instead of two separate decisions.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {usageAddOns.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.item}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.typical}</div>
                </div>
              ))}
            </div>
          </section>

          {/* UGC vs influencer */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Why UGC Rates Don't Work Like Influencer Rates</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              Influencer marketing is priced around distribution — you're being paid partly for your audience seeing the post. UGC is priced around production — the brand is buying the raw content itself, then distributing it through their own channels, often as paid ads a much larger audience will see than your own following. That's exactly why a creator with a small personal following can still charge a solid UGC rate: the brand isn't paying for your reach, they're paying for a video that performs well as an ad, regardless of who originally posted it.
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
                { href: '/blog/nano-micro-macro-influencer-rates', title: 'Nano vs. Micro vs. Macro Influencers: What Brands Actually Pay For', tag: 'Rate Card' },
                { href: '/blog/brand-deal-contract-red-flags', title: 'Brand Deal Contract Red Flags: What to Check Before You Sign', tag: 'Brand Deals' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🎬</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Put your UGC rates in writing.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a rate card that separates creation fees from usage rights — plus a media kit and creator CV brands can check before they even message you.
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
