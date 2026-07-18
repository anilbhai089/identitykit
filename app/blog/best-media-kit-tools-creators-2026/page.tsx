import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Free Media Kit Tools for Creators in 2026 (Beacons vs Stan Store vs Identity Kit)',
  description: 'If all you need is a professional media kit and rate card for brand deals, do you really need a full link-in-bio storefront? An honest comparison of what Beacons, Stan Store, and a dedicated media kit tool actually offer creators pursuing sponsorships.',
  keywords: 'best media kit tool creators 2026, beacons vs stan store media kit, free media kit for brand deals, media kit generator creators, link in bio vs media kit tool',
  openGraph: {
    title: 'Best Free Media Kit Tools for Creators in 2026 (Beacons vs Stan Store vs Identity Kit)',
    description: 'Beacons and Stan Store are built for selling digital products. If brand deals — not a storefront — are your actual goal, here\'s what to look for instead.',
    url: 'https://identitykit.in/blog/best-media-kit-tools-creators-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/media-kit-tools-comparison.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/best-media-kit-tools-creators-2026',
  },
}

const comparison = [
  { factor: 'Core purpose', beacons: 'Link-in-bio page + digital product storefront, with a basic media kit as a secondary feature', stan: 'Digital product/course/coaching storefront — media kit is not a core feature', identityKit: 'Purpose-built media kit, rate card, and brand-deal toolkit as the primary product' },
  { factor: 'What you get for brand deals specifically', beacons: 'A basic stats page bundled inside a broader link-in-bio dashboard', stan: 'Not really built for this — no dedicated media kit or rate card tool', identityKit: 'A structured, brand-ready media kit plus a rate card, contract template, and pitch tools designed specifically around landing sponsorships' },
  { factor: 'Pricing model', beacons: 'Free tier with a 9% transaction fee on sales; paid tiers remove the fee', stan: 'No permanent free tier — starts at $29/month after a 14-day trial', identityKit: 'Free core media kit and profile tools' },
  { factor: 'What it\'s missing if brand deals are your goal', beacons: 'Media kit is an afterthought bundled into a tool built for selling products, not pitching brands', stan: 'No media kit, rate card, or brand-outreach features at all — this isn\'t what it\'s designed for', identityKit: 'No built-in digital product storefront or course-selling checkout — not its purpose' },
]

const whoShouldUseWhat = [
  { scenario: 'You sell courses, digital downloads, or coaching calls', pick: 'Stan Store or Beacons', why: 'Both are built specifically for e-commerce checkout flows, upsells, and product delivery — genuinely strong at this.' },
  { scenario: 'You mainly want brands to see your stats, niche, and rates', pick: 'A dedicated media kit tool', why: 'A purpose-built media kit answers exactly what a brand needs to know in one clean view, without the extra storefront features getting in the way.' },
  { scenario: 'You want one link for all your social profiles', pick: 'A basic link-in-bio tool', why: 'If you\'re not actively pursuing brand deals or selling products yet, the simplest free link aggregator is genuinely enough.' },
  { scenario: 'You want both a storefront AND a professional brand-deal media kit', pick: 'Consider using two tools together', why: 'A storefront tool for products and a dedicated media kit for brand pitching aren\'t mutually exclusive — many creators use one for each specific job.' },
]

export default function MediaKitToolsComparisonPage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', color: '#fff', fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; overflow: hidden; transition: border-color 0.2s; }
        .card:hover { border-color: rgba(255,107,43,0.2); }
        table.cmp { width: 100%; border-collapse: collapse; }
        table.cmp th, table.cmp td { text-align: left; padding: 12px 14px; font-size: 12px; border-bottom: 1px solid rgba(255,255,255,0.06); vertical-align: top; }
        table.cmp th { color: #FF6B2B; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; }
        table.cmp td { color: rgba(255,255,255,0.6); line-height: 1.5; }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .hero-pad { padding: 48px 16px 32px !important; }
          .content-pad { padding: 0 16px 60px !important; }
          table.cmp { font-size: 10.5px; }
          table.cmp th, table.cmp td { padding: 8px 6px; }
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
            {['Media Kit', 'Creator Tools', 'Global 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Best Free Media Kit Tools<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>for Creators in 2026</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Beacons and Stan Store are genuinely good tools — for selling digital products. If landing brand deals, not running a storefront, is your actual goal, a media kit built specifically for that job might serve you better. Here's an honest breakdown.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Which Tool Do You Actually Need?</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Beacons and Stan Store are built primarily for selling digital products, courses, and coaching — media kit features, where they exist at all, are secondary',
                'If your main goal is landing brand deals, a tool built specifically around a media kit and rate card answers a brand\'s questions faster than a general storefront dashboard',
                'Stan Store has no permanent free tier ($29/month minimum); Beacons\' free tier carries a 9% transaction fee on any sales',
                'A dedicated media kit tool and a product storefront tool aren\'t mutually exclusive — many creators reasonably use one of each for its specific purpose',
                'The right choice depends entirely on what you\'re actually trying to do: sell products, or get hired by brands',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Creator Tool Landscape in 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Stan Store removed its permanent free tier entirely, now offering only a 14-day trial before its $29/month Creator plan begins.',
                'Beacons\' free plan charges a 9% transaction fee on any digital product sales, with paid tiers required to reduce or remove that fee.',
                'Beacons is positioned as an all-in-one platform serving creators, talent managers, and brands simultaneously — a broad focus that shows up in mixed customer reviews (a 2-star Trustpilot rating has been reported).',
                'Neither Beacons nor Stan Store is purpose-built around brand-deal media kits — both treat it as, at best, a secondary feature inside a tool designed primarily for digital product sales.',
                'A brand reviewing many creator profiles values a clear, fast answer to niche, stats, and rates — a purpose-built media kit is structured specifically to answer that, while a general storefront dashboard is not.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison table */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Side-by-Side: What Each Tool Is Actually Built For</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>This isn't about which tool is "best" overall — it's about which one is built for the specific job you need done.</p>
            <div className="card" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr><th>Factor</th><th>Beacons</th><th>Stan Store</th><th>Dedicated Media Kit Tool</th></tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>{row.factor}</td>
                      <td>{row.beacons}</td>
                      <td>{row.stan}</td>
                      <td style={{ color: '#FF9A6B' }}>{row.identityKit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>A media kit built for exactly one job: landing brand deals</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Identity Kit gives you a structured media kit, rate card, and brand-deal toolkit — free to start, no storefront features you don't need getting in the way.</p>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build My Free Profile →
            </Link>
          </div>

          {/* Who should use what */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Which Tool Actually Fits Your Situation?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {whoShouldUseWhat.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{item.scenario}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '3px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{item.pick}</span>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{item.why}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'Do Beacons or Stan Store actually include a media kit?', a: 'Beacons includes a basic media kit as one feature within its broader link-in-bio dashboard. Stan Store does not have a dedicated media kit or rate card feature at all — it\'s built around selling digital products, courses, and coaching, not pitching brands.' },
                { q: 'Is it worth paying for Stan Store or Beacons just for the media kit feature?', a: 'Probably not, if a media kit and brand deals are your primary goal. You\'d be paying for (or working around) a large set of storefront and product-selling features you may not need, when a tool built specifically around the media kit use case answers a brand\'s questions faster.' },
                { q: 'Can I use a dedicated media kit tool alongside Beacons or Stan Store?', a: 'Yes — these tools solve different problems. Many creators reasonably use a storefront tool like Stan Store for selling products and a separate, purpose-built media kit for brand-deal pitching, since neither tool is trying to do the other\'s job well.' },
                { q: 'Which tool is cheapest to start with?', a: 'Beacons has a free tier (with a 9% transaction fee on sales). Stan Store has no permanent free tier, starting at $29/month after a 14-day trial. A dedicated media kit tool built specifically for that purpose can offer a genuinely free starting point since it isn\'t bundling in expensive checkout and product-delivery infrastructure.' },
                { q: 'What should I actually look for in a media kit tool?', a: 'A clear presentation of your niche, audience stats, engagement rate, past brand collaborations, and rate card — structured so a brand can assess you in under a minute. Extra storefront or course-selling features are irrelevant to this specific job and can actually clutter the experience for a brand quickly reviewing your profile.' },
              ].map((item, i) => (
                <div key={i} className="card" style={{ padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 10 }}>{item.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: 14 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div style={{ textAlign: 'center', background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 24, padding: '48px 32px' }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🔗</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Built for one job: getting you hired by brands.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free media kit, rate card, and creator profile with Identity Kit — no storefront features you don't need in the way.
            </p>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Create My Free Profile →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 14 }}>
              identitykit.in · Free media kit + rate card + creator profile
            </div>
          </div>

        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Tools</Link>
          <Link href="/auth" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Get Started</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Free tools for creators everywhere · identitykit.in</p>
      </footer>
    </div>
  )
}
