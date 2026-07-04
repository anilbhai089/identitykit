import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Content Usage Rights Explained: Organic, Paid, Whitelisting & Perpetuity (India 2026)',
  description: 'A creator-side guide to content usage rights in India — the difference between organic, paid, and whitelisting rights, real percentage-based pricing by follower tier, perpetuity buyouts, and the exact contract language that stops brands from quietly running your content as an ad for free.',
  keywords: 'content usage rights explained influencer india, whitelisting fee india creator, paid usage rights influencer india, perpetuity buyout content creator india, organic vs paid usage rights india, ad rights influencer india',
  openGraph: {
    title: 'Content Usage Rights Explained: Organic, Paid, Whitelisting & Perpetuity (India 2026)',
    description: 'A brand quietly running your Reel as a paid ad for six months, with zero extra payment, is one of the most common ways Indian creators lose money. Here\'s exactly what to charge.',
    url: 'https://identitykit.in/blog/content-usage-rights-explained-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/usage-rights-explained-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/content-usage-rights-explained-india-2026',
  },
}

const rightsTypes = [
  { name: 'Organic usage', icon: '📱', detail: 'The content lives only on your own channel. The brand doesn\'t repost, boost, or reuse it anywhere else. This is what your base rate covers by default.' },
  { name: 'Paid usage (boosted ads)', icon: '📢', detail: 'The brand runs your content as a paid ad through their own account. This is a separate, additional right — never assume it\'s included in your base fee.' },
  { name: 'Whitelisting (Spark Ads)', icon: '🎯', detail: 'The brand runs paid ads directly through your account, using your handle\'s identity and algorithm standing. This is the most valuable form of usage and should be priced the highest.' },
  { name: 'Perpetuity / full buyout', icon: '♾️', detail: 'The brand owns the right to use your content indefinitely, with no time limit. This should be rare and priced at a major premium — you\'re giving up all future earning potential from that specific piece of content.' },
]

const pricingTiers = [
  { tier: 'Nano (under 15K followers)', range: '0–50% of base rate', note: 'Many nano creators don\'t charge for usage at all, often trading it for exposure and growth. Charging even a modest fee is completely reasonable and increasingly expected.' },
  { tier: 'Micro (15K–75K followers)', range: '25–75% of base rate', note: 'The tier where usage rights start becoming a meaningful, expected part of every quote — rarely given away for free.' },
  { tier: 'Mid-tier (75K–250K followers)', range: '40–100% of base rate', note: 'Usage fees at this tier commonly match or exceed the base content creation fee itself for extended paid use.' },
  { tier: 'Macro (250K–1M followers)', range: '50–125% of base rate', note: 'Whitelisting and extended usage at this tier is a significant, separately negotiated revenue line — never bundled into the base quote.' },
]

const realExamples = [
  { scenario: 'Base fee ₹10,000, brand wants 30-day paid usage', calc: 'Suggested usage fee: 30% → ₹3,000 additional', total: 'Total: ₹13,000' },
  { scenario: 'Base fee ₹25,000, brand wants 90-day usage across Instagram + YouTube', calc: 'Suggested usage fee: 80% → ₹20,000 additional', total: 'Total: ₹45,000' },
  { scenario: 'Base fee ₹1,00,000, brand wants 1-year usage across all platforms', calc: 'Suggested usage fee: 100% → ₹1,00,000 additional', total: 'Total: ₹2,00,000' },
]

const negotiationPoints = [
  { term: 'Duration', detail: 'Always specify an exact time period — 30, 60, 90 days, or 12 months. Never leave this open-ended or vague.' },
  { term: 'Channels', detail: 'Where exactly can the content run — the brand\'s Instagram only? Website? Email? Paid social across platforms? Each additional channel is additional value.' },
  { term: 'Territory', detail: 'Is this India-only, or worldwide? A global license is worth meaningfully more than a single-country one.' },
  { term: 'Edit permissions', detail: 'Can the brand crop, add captions, cut into shorter clips, or add a voiceover? Unrestricted editing rights should command a premium over "use as-is."' },
  { term: 'Renewal', detail: 'What happens when the term ends — does usage automatically stop, or does the brand need to come back and pay again? Automatic expiry protects you from being used indefinitely by default.' },
]

const redFlags = [
  'The contract says "usage rights included" with no defined duration, channels, or territory specified anywhere',
  'Vague language like "in perpetuity" or "indefinite use" without a correspondingly large, separately negotiated fee',
  'A brief that mentions paid promotion only after the content is already delivered, expecting it to be covered by the original quote',
  'No mention of usage rights at all in the brief, brand history, or contract — a strong sign to raise it yourself before starting',
  'A brand that has previously run a creator\'s organic post as a paid ad without additional payment or discussion',
]

export default function UsageRightsIndiaPage() {
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
            {['Usage Rights', 'Rate Card', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Content Usage Rights, Explained<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>(Organic, Paid, Whitelisting, Perpetuity)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A brand quietly running your Reel as a paid ad for six months, with zero extra payment, is one of the most common — and most avoidable — ways Indian creators lose money. Here's exactly what usage rights mean, what to charge, and the exact contract language that protects you.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Content Usage Rights for Indian Creators</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Your base rate covers organic usage only — the content stays on your own channel, nowhere else',
                'Paid usage (the brand boosting your content as an ad) is a separate right, typically 20-100% of your base rate depending on your tier and the duration',
                'Whitelisting (the brand running ads directly through your account) is the most valuable usage type and should be priced highest',
                'Perpetuity or full buyout rights — unlimited, forever use — should be rare and priced at a major premium, often 100%+ of your base rate',
                'Always define duration, channels, territory, and edit permissions explicitly in writing — vague "usage included" language is where money gets lost',
                'If you discover a brand running your content as a paid ad without extra payment, you can charge retroactively and request an immediate takedown',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Usage Rights in India</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'A broadly cited industry survey found roughly 80% of influencers had been asked to whitelist, boost, or amplify their content as part of a brand collaboration.',
                'Roughly half of surveyed influencers said they charge a separate fee for whitelisting or content amplification beyond their standard content creation fee.',
                'For Indian creators, nano-tier usage fees commonly range 0-50% of the base rate, rising to 50-125% at the macro tier, reflecting the greater commercial value of a larger, more established audience.',
                'Content shot by creators for use in paid ads frequently outperforms brand-produced assets in paid placements, because it reads as more native and authentic — a key reason brands are willing to pay a real premium for it.',
                'Industry guidance consistently treats perpetuity or full-buyout usage as rare and expensive — realistically, brands rarely need content older than about a year, making indefinite rights disproportionately valuable to give away cheaply.',
                'A documented real dispute involved a brand using a creator\'s content beyond the agreed scope, resulting in a five-figure legal demand — a reminder that undefined usage terms carry genuine legal exposure, not just lost income.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Types of rights */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>The 4 Types of Usage Rights</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Each one grants the brand a different level of access — and should be priced differently.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {rightsTypes.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing tiers */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>What to Charge, by Follower Tier</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>These percentages are always separate from — not instead of — your base content creation fee.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {pricingTiers.map((row, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{row.tier}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, lineHeight: 1.5 }}>{row.note}</div>
                  </div>
                  <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '4px 12px', borderRadius: 100, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>{row.range}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Real examples */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Real Calculation Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {realExamples.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{row.scenario}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginBottom: 4 }}>{row.calc}</div>
                  <div style={{ color: '#FF6B2B', fontSize: 14, fontWeight: 700 }}>{row.total}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12, display: 'flex', justifyContent: 'center' }}>
              <Link href="/tools/influencer-rate-calculator" style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '10px 20px', borderRadius: 10, fontWeight: 700, fontSize: 14 }}>
                Calculate your base rate free →
              </Link>
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Put usage rights in writing, every time</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Use the free Identity Kit brand deal contract template — with a dedicated usage rights section already built in.</p>
            </div>
            <Link href="/tools/brand-deal-contract-template" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Get My Contract Template →
            </Link>
          </div>

          {/* Negotiation points */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>5 Terms to Nail Down Before Agreeing to Anything</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Vague usage terms are where most disputes and underpayment happen — get specific on every one of these.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {negotiationPoints.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF6B2B' }}>{item.term}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Red flags */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Red Flags in a Usage Rights Clause</h2>
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
                { q: 'Is usage rights the same thing as ad rights?', a: 'Yes, these terms are used interchangeably. Both refer to licensing your content to a brand for use beyond simply appearing on your own page — whether that\'s running it as a paid ad, reposting it on the brand\'s channels, or using it in other marketing materials.' },
                { q: 'Should nano and beginner creators charge for usage rights too?', a: 'Yes — even at the smallest follower tiers, a brand benefiting commercially from your face, voice, and content deserves to pay for that value. Many nano creators charge 0% initially as they build their portfolio, but this should shift toward a real fee as you gain experience and negotiating confidence.' },
                { q: 'Can a brand use my content as an ad without telling me?', a: 'No, not legally under a properly written contract — but it happens more often than it should when usage rights aren\'t clearly defined. If you discover your content running as a paid ad without agreed extra payment, you can charge retroactively and request an immediate takedown, provided you have documentation of the original agreement.' },
                { q: 'What\'s a fair price for perpetuity (forever) usage rights?', a: 'This should be rare and priced at a major premium — often 100% or more of your base content fee, since you\'re giving up all future earning potential from that specific piece of content. Unless you\'re being compensated very generously, it\'s generally not advisable to grant unlimited, indefinite rights.' },
                { q: 'What\'s the difference between paid usage and whitelisting?', a: 'Paid usage means the brand runs your content as an ad from their own account — your content, their identity. Whitelisting means the brand runs the ad directly through your account, using your handle\'s identity and algorithm standing, which typically performs better and should be priced higher since it leverages your personal audience trust.' },
                { q: 'Do I need to charge extra if a brand just wants to repost my content organically on their own page?', a: 'This is usually the lowest-cost form of usage and is often included in your base fee for a limited time (commonly 3-6 months) as long as they credit and tag you. Beyond that time period, or if there\'s no time limit specified at all, it\'s reasonable to charge a modest additional fee or require the license to expire.' },
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
                { href: '/blog/influencer-rate-card-india-2026', title: 'Influencer Rate Card India 2026', tag: 'Rate Card' },
                { href: '/blog/brand-deal-contract-template-india', title: 'Brand Deal Contract Template for Indian Creators', tag: 'Legal' },
                { href: '/blog/ugc-pricing-india-2026', title: 'UGC Content Pricing in India 2026', tag: 'UGC Pricing' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>♾️</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Your content has value beyond your own feed. Charge for it.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a rate card and contract that already account for usage rights — so you never give away extra value for free.
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
