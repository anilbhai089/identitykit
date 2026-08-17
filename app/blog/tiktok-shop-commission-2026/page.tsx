import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TikTok Shop: How Creator Commissions Actually Work (2026)',
  description: 'A full refund can zero out a commission you already earned, LIVE rates often beat video rates, and TikTok\'s auto disclosure label alone doesn\'t satisfy FTC rules. Here\'s how TikTok Shop\'s affiliate commission system really works — completely separate from Creator Rewards.',
  keywords: 'tiktok shop commission 2026, tiktok shop affiliate program creators, how does tiktok shop pay creators, tiktok shop vs creator rewards, tiktok live shopping commission rates, tiktok shop creator eligibility',
  openGraph: {
    title: 'TikTok Shop: How Creator Commissions Actually Work (2026)',
    description: 'A full refund can zero out a commission you already earned, LIVE rates often beat video rates. Here\'s how TikTok Shop\'s affiliate commission system really works.',
    url: 'https://identitykit.in/blog/tiktok-shop-commission-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/tiktok-shop-commission.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/tiktok-shop-commission-2026',
  },
}

const howItWorks = [
  { step: '1. A seller lists a product and sets a commission rate', body: 'Rates commonly run 5–30% of order value depending on category — electronics tend toward the lower end, beauty toward the higher end.' },
  { step: '2. You browse and pick products in the Product Marketplace', body: 'Independent affiliate creators can browse and promote products from any participating seller without prior negotiation, through TikTok Studio\'s Shop tools.' },
  { step: '3. You tag the product to a video, LIVE, or showcase', body: 'The commission-earning link connects to whichever format you use — a shoppable video, a livestream, or your profile\'s product showcase.' },
  { step: '4. A buyer purchases through your tagged link', body: 'The sale is attributed to you, generating an estimated commission that appears in your account once the buyer pays.' },
  { step: '5. Commission settles roughly 15–31 days later', body: 'TikTok typically finalizes commission around 15 days after delivery, but disputes, reviews, or refunds can extend that window to roughly 31 days.' },
]

const refundOutcomes = [
  { outcome: 'No refund', result: 'Actual commission equals the original estimate' },
  { outcome: 'Partial refund', result: 'Commission is recalculated, reduced by the refunded amount' },
  { outcome: 'Full refund', result: 'Actual commission becomes zero, even if it initially showed as earned' },
]

const faqs = [
  { q: 'Is TikTok Shop commission the same thing as TikTok Creator Rewards?', a: 'No — they\'re entirely separate systems. Creator Rewards pays based on video views and engagement through the pooled RPM model. TikTok Shop commission is e-commerce affiliate income, paid only when a tagged product actually sells, with no connection to your Creator Rewards eligibility or earnings.' },
  { q: 'Why do LIVE shopping commissions often pay more than video commissions?', a: 'Sellers frequently set LIVE-specific rates in the 20–30% range, higher than standard video commission rates, because real-time livestream selling has been reported to convert at meaningfully higher rates than pre-recorded video — sellers are willing to pay more for the format that reliably drives more sales.' },
  { q: 'Do I need a minimum follower count to join TikTok Shop affiliate?', a: 'Commonly cited eligibility requires around 1,000 followers and roughly 30 days of account history before affiliate tools become available — separate from any threshold tied to Creator Rewards or other TikTok programs.' },
  { q: 'What happens to my commission if a buyer returns the product?', a: 'It depends on the refund type. A partial refund reduces your commission proportionally; a full refund zeroes out the commission entirely, even if it had already appeared as "earned" in your account before the return was processed.' },
  { q: 'Can a seller lower my commission rate after I start promoting a product?', a: 'TikTok has reportedly built in a 30-day protection window after a creator begins promoting a product, shielding them from certain rate reductions during that period — designed specifically to prevent sellers from offering an attractive rate to get content made, then cutting it once videos are live.' },
  { q: 'Do I still need to disclose a TikTok Shop affiliate link if TikTok auto-labels it?', a: 'Yes. TikTok Shop often automatically adds a "sponsored" or "paid partnership" label to tagged product content, but that alone doesn\'t satisfy FTC disclosure requirements — creators should also verbally state or caption the affiliate relationship (e.g. "this is an affiliate link") when it\'s material to the content, consistent with standard FTC endorsement guidance.' },
]

export default function TikTokShopCommissionPage() {
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
            {['TikTok', 'Affiliate', 'Guide'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            TikTok Shop:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>How Commissions Actually Work</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            This has nothing to do with your Creator Rewards eligibility — it's a completely separate e-commerce system, and one where a return months later can zero out a commission you thought you'd already earned. Here's exactly how it works.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — TikTok Shop Commissions</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Sellers set commission rates that commonly range 5–30% of order value depending on product category — entirely separate from Creator Rewards, LIVE gifts, or sponsorships.',
                'LIVE shopping commissions are frequently set higher (often 20–30%) than standard video commissions, since real-time selling tends to convert better.',
                'Typical eligibility requires around 1,000 followers and roughly 30 days of account history.',
                'Commission settles roughly 15–31 days after purchase — and a full refund on the order zeroes out the commission entirely, even after it initially shows as earned.',
                'TikTok\'s automatic "paid partnership" label on tagged products does not by itself satisfy FTC disclosure requirements — a verbal or caption disclosure is still expected when the affiliate relationship is material.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — TikTok Shop's Scale</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'TikTok Shop was reported reaching $23.4 billion in US gross merchandise value, with growth described as nearly doubling year-over-year.',
                'Affiliate creators — not paid ads or a brand\'s own account — have been reported driving the large majority of some brands\' TikTok Shop revenue.',
                'TikTok distinguishes multiple creator types within Shop: open-marketplace affiliate creators with no seller commitment, and "Marketing Creators" bound to a specific seller through a semi-exclusive arrangement while still able to work with others.',
                'TikTok also charges sellers a separate flat platform referral fee (commonly cited around 6% in the US across most categories) on top of whatever commission the seller pays creators — a seller-side cost, not a deduction from the creator\'s payout.',
                'TikTok distinguishes "estimated" commission (shown right after purchase) from "actual" commission (finalized after the return window closes) — the number you see immediately isn\'t guaranteed until settlement.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>How It Actually Works</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {howItWorks.map((s) => (
                <div key={s.step} className="card" style={{ padding: '20px 24px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{s.step}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{s.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Refund table */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Refunds Can Zero Out a "Settled" Commission</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24, fontSize: 15 }}>
              This is where a lot of confusion happens — an "estimated" commission showing in your account is not a guarantee.
            </p>
            <div className="card" style={{ padding: '18px 16px', overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr>
                    <th style={{ color: '#FF6B2B' }}>Outcome</th>
                    <th>What happens to your commission</th>
                  </tr>
                </thead>
                <tbody>
                  {refundOutcomes.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 700 }}>{row.outcome}</td>
                      <td style={{ color: 'rgba(255,255,255,0.6)' }}>{row.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Disclosure section */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Disclosure Step Many Creators Skip</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              TikTok often auto-tags Shop content with a "sponsored" or "paid partnership" label, which can create a false sense that disclosure is already handled. It isn't, on its own. Standard FTC endorsement guidance still expects a clear, plain-language disclosure from you directly — saying "this is an affiliate link" on camera or in a caption — whenever the commission relationship is material to the content. Relying solely on TikTok's automatic tag is a real compliance gap, not just an SEO or best-practice suggestion. See our <Link href="/blog/ftc-disclosure-rules-influencers-2026" style={{ color: '#FF6B2B', fontWeight: 600 }}>FTC disclosure guide</Link> for the full breakdown.
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
                { href: '/blog/tiktok-creator-rewards-program-2026', title: 'TikTok Creator Rewards Program: How Payouts Actually Work (2026)', tag: 'TikTok' },
                { href: '/blog/affiliate-marketing-creators-guide', title: 'Affiliate Marketing for Creators: How to Get Started (2026)', tag: 'Affiliate' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🛍️</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Commissions are unpredictable. A rate card isn't.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a media kit, rate card, and creator CV — so flat-fee brand deals can sit alongside your TikTok Shop income, not depend entirely on it.
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
