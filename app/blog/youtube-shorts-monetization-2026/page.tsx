import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'YouTube Shorts Monetization: How It\'s Different From Long-Form (2026)',
  description: 'Shorts don\'t earn like long-form YouTube — there\'s no per-video CPM, just a shared regional pool split by view share. Here\'s how the pool model actually works, why original audio pays more, and what realistic RPM looks like.',
  keywords: 'youtube shorts monetization 2026, youtube shorts rpm, how does youtube shorts pay, shorts vs long form youtube earnings, youtube shorts creator pool, youtube shorts requirements',
  openGraph: {
    title: 'YouTube Shorts Monetization: How It\'s Different From Long-Form (2026)',
    description: 'Shorts don\'t earn like long-form YouTube — there\'s no per-video CPM, just a shared regional pool split by view share. Here\'s how the pool model actually works.',
    url: 'https://identitykit.in/blog/youtube-shorts-monetization-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/youtube-shorts-monetization.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/youtube-shorts-monetization-2026',
  },
}

const poolSteps = [
  { step: '1. Ads run in the Shorts feed', body: 'Ads appear between Shorts as viewers scroll — not attached to any single video the way long-form ads are.' },
  { step: '2. Revenue pools by region', body: 'Ad revenue generated from the Shorts feed in a given country or region gets combined into a single Creator Pool for that region, not tracked per individual video.' },
  { step: '3. Music licensing costs come out first', body: 'If a Short uses licensed music, a portion of the pool covers those licensing costs before the creator split happens — Shorts using original audio skip this deduction entirely.' },
  { step: '4. The remaining pool splits by view share', body: 'YouTube shares 45% of the Creator Pool with eligible creators, distributed based on each creator\'s proportional share of total eligible Shorts views in that region for the period.' },
]

const comparisonRows = [
  { label: 'Revenue model', shorts: 'Pooled regional Creator Pool, split by view share', longForm: 'Per-video ad placement (CPM-based)' },
  { label: 'Typical RPM', shorts: 'Roughly $0.01 – $0.10 per 1,000 views', longForm: 'Roughly $2 – $15 per 1,000 views' },
  { label: 'Eligibility path', shorts: '1,000 subscribers + 10M valid Shorts views in 90 days', longForm: '1,000 subscribers + 4,000 public watch hours in 12 months' },
  { label: 'Music impact', shorts: 'Licensed music reduces creator payout share', longForm: 'Licensed music can trigger separate copyright claims/splits, different mechanism' },
  { label: 'Measured by', shorts: 'Engaged views in the Shorts feed', longForm: 'Watch time and ad impressions on the Watch Page' },
]

const faqs = [
  { q: 'Why is Shorts RPM so much lower than long-form RPM?', a: 'Because the ad format itself is smaller and simpler — a brief ad between short videos generates far less advertiser revenue per view than the mid-roll and pre-roll ad inventory available on a longer video. The pooled model then further redistributes that smaller total across a very high volume of views.' },
  { q: 'Do I only need one of the two eligibility thresholds, or both?', a: 'Just one. Hitting either 1,000 subscribers + 10 million valid Shorts views in the trailing 90 days, or 1,000 subscribers + 4,000 public watch hours in the trailing 12 months, is enough to qualify for the YouTube Partner Program, which includes Shorts monetization.' },
  { q: 'Does using trending music actually hurt my earnings?', a: 'It can reduce your revenue share specifically, even if it helps you get more views. Licensing costs for copyrighted music are deducted from the regional pool before the creator split happens, while Shorts using fully original or royalty-free audio avoid that deduction entirely — which is why RPM on music-heavy Shorts is frequently reported lower than on original-audio content, even at similar view counts.' },
  { q: 'Should I even bother with Shorts if the RPM is this low?', a: 'Ad revenue alone rarely makes Shorts worthwhile as a standalone income source — the more common strategy is treating Shorts as a high-reach growth and discovery tool that funnels viewers toward long-form content, brand deals, or your own products, where the real earnings potential is significantly higher.' },
  { q: 'Is Shorts RPM the same everywhere, or does location matter?', a: 'Location matters significantly, similar to long-form RPM — audiences concentrated in higher ad-value markets like the US typically produce meaningfully higher Shorts RPM than audiences concentrated in lower ad-spend markets, even at identical view counts.' },
  { q: 'Can I monetize Shorts before I qualify for full YouTube Partner Program status?', a: 'Ad revenue sharing specifically requires meeting one of the two YPP thresholds above — brand deals and affiliate marketing, however, don\'t require any subscriber minimum and can be pursued from your very first Short.' },
]

export default function YouTubeShortsMonetizationPage() {
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
            {['Shorts', 'Data', 'YouTube'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            YouTube Shorts Monetization:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>A Completely Different Model</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A viral Short with 5 million views and a long-form video with 50,000 views can pay almost the same — because Shorts don't earn per-video the way long-form does. Here's how the pooled revenue model actually works, and why your choice of background music quietly affects your payout.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Shorts Monetization</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Shorts revenue comes from a pooled regional "Creator Pool," not per-video ad placement like long-form — YouTube shares 45% of that pool with eligible creators, split by view share.',
                'Typical Shorts RPM runs roughly $0.01–$0.10 per 1,000 views, dramatically lower than long-form\'s roughly $2–$15 per 1,000 views.',
                'Eligibility requires either 1,000 subscribers + 10 million valid Shorts views in 90 days, OR 1,000 subscribers + 4,000 public watch hours in 12 months — only one path is needed.',
                'Using licensed music reduces your share of the pool, since licensing costs are deducted before the creator split — original or royalty-free audio avoids this entirely.',
                'RPM is measured against "engaged views" in the Shorts feed specifically, separate from how long-form Watch Page monetization is calculated.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — The Shorts Creator Pool</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'YouTube overhauled Shorts monetization in 2023, moving from a flat, invite-only Shorts Fund to the current revenue-sharing pool model, which has continued largely unchanged into 2026.',
                'Only monetizing partners who\'ve accepted the Shorts Monetization Module can earn from the Creator Pool — accepting it is a required, separate step even after joining YPP.',
                'YouTube Shorts reportedly generate well over 200 billion views daily worldwide, meaning even a low RPM can add up to meaningful totals purely on volume.',
                'Audience location affects Shorts RPM similarly to long-form — creators with predominantly US-based audiences are commonly reported to see meaningfully higher RPM than those with audiences concentrated in lower ad-spend markets.',
                'A high-performing Short converting viewers into long-form subscribers is frequently cited as more financially valuable long-term than the Short\'s own direct ad revenue, given the RPM gap between the two formats.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How the pool works */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>How the Pooled Model Actually Works</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {poolSteps.map((s) => (
                <div key={s.step} className="card" style={{ padding: '20px 24px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{s.step}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{s.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison table */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Shorts vs. Long-Form, Side by Side</h2>
            <div className="card" style={{ padding: '18px 16px', overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr>
                    <th></th>
                    <th style={{ color: '#FF6B2B' }}>Shorts</th>
                    <th>Long-Form</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i}>
                      <td style={{ color: 'rgba(255,255,255,0.5)' }}>{row.label}</td>
                      <td style={{ color: 'rgba(255,255,255,0.65)' }}>{row.shorts}</td>
                      <td style={{ color: 'rgba(255,255,255,0.65)' }}>{row.longForm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Original audio */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Why Original Audio Quietly Pays More</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              When a Short uses copyrighted music, YouTube has to pay a share of that video's contribution to the pool to the music's rights holders before anything reaches creators. A trending song might genuinely drive more views — but a meaningful share of the resulting revenue gets diverted before the creator split happens. Shorts built on original audio, voiceover, or royalty-free sound skip that deduction entirely, which is a real, structural reason creators frequently report a higher RPM on original-audio content even when it gets fewer views than a trending-sound Short.
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
                { href: '/blog/youtube-rpm-by-country-2026', title: 'YouTube RPM by Country 2026: Where Creators Earn the Most', tag: 'Data' },
                { href: '/blog/tiktok-creator-rewards-program-2026', title: 'TikTok Creator Rewards Program: How Payouts Actually Work (2026)', tag: 'TikTok' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>📱</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Views build reach. Brand deals build income.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a media kit, rate card, and creator CV — so the audience your Shorts bring in can actually turn into paid partnerships.
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
