import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'YouTube RPM by Country 2026: Where Creators Earn the Most',
  description: 'Why the same 1,000 views can pay a creator 10x more depending on where their audience lives. A comparison of YouTube RPM across the US, UK, Canada, Australia, and lower-RPM regions — and how creators legitimately shift their audience mix.',
  keywords: 'youtube rpm by country, youtube cpm by country 2026, highest paying youtube countries, why is my youtube rpm low, youtube earnings by country comparison, tier 1 countries youtube',
  openGraph: {
    title: 'YouTube RPM by Country 2026: Where Creators Earn the Most',
    description: 'The same 1,000 views can pay 10x more depending on where the viewer lives, not where the creator does. Here\'s the country comparison and what actually drives the gap.',
    url: 'https://identitykit.in/blog/youtube-rpm-by-country-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/youtube-rpm-by-country.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/youtube-rpm-by-country-2026',
  },
}

const tierRows = [
  { tier: 'Tier 1', countries: 'United States, United Kingdom, Canada, Australia, Western Europe', range: 'Highest — roughly $3–$16+ RPM depending on niche and format' },
  { tier: 'Tier 2', countries: 'Eastern Europe, parts of Latin America, Middle East, Southeast Asia', range: 'Mid-range — meaningfully lower than Tier 1, still well above Tier 3' },
  { tier: 'Tier 3', countries: 'India, Pakistan, Bangladesh, and other high-population, lower ad-spend markets', range: 'Lowest — often under $3 RPM, despite frequently having the largest view counts' },
]

const whyGap = [
  { title: 'Advertiser competition', body: 'More brands bid to reach US/UK/Canada/Australia audiences than any other market, and YouTube ad space is sold by auction — more bidders per impression pushes the price up.' },
  { title: 'Purchasing power', body: 'Advertisers pay more for audiences with higher disposable income, because those viewers are statistically more likely to convert into an actual purchase.' },
  { title: 'Ad ecosystem maturity', body: 'Tier 1 markets have deeper, more established digital ad infrastructure — more advertiser categories are actively bidding, from finance to insurance to SaaS.' },
  { title: 'Viewer location, not creator location', body: 'RPM is driven by where your *viewers* are, not where you live or upload from. A creator based anywhere can earn Tier 1 RPM if enough of their audience is in a Tier 1 country.' },
]

const faqs = [
  { q: 'Why is my YouTube RPM so much lower than what I see quoted online?', a: 'RPM is heavily influenced by your audience\'s country mix, your niche, video length, and season — quoted "average" figures are broad estimates, not a guarantee for any individual channel. A finance channel with 80% US viewers will earn far more than a general entertainment channel with a global, lower-income-market audience, even at identical view counts.' },
  { q: 'Does my location as a creator affect my RPM?', a: 'No — RPM is based on where your viewers are watching from, not where you\'re located or uploading from. A creator anywhere in the world can earn Tier 1 RPM if their audience is concentrated in Tier 1 countries.' },
  { q: 'Is it worth trying to grow a US/UK audience specifically?', a: 'It can meaningfully change your ad revenue, but it\'s a real strategic shift, not a quick trick — it usually means adjusting language, topics, and upload timing to what resonates with that audience, not just hoping for different viewers to show up.' },
  { q: 'Do YouTube Shorts pay the same RPM as long-form videos?', a: 'No — Shorts RPM is dramatically lower than long-form video RPM across every country, because Shorts ad revenue is pooled and distributed differently than traditional in-stream ads. The same country-tier gap still applies within Shorts, just at a much smaller scale.' },
  { q: 'Where can I check my own channel\'s actual RPM by country?', a: 'In YouTube Studio, go to Analytics → Revenue for your RPM, and Analytics → Geography to see what percentage of your views come from each country — cross-referencing the two gives you a much more accurate picture than any general benchmark.' },
  { q: 'Is CPM the same thing as RPM?', a: 'No. CPM is what an advertiser pays YouTube per 1,000 ad impressions. RPM is what a creator actually earns per 1,000 total video views, after YouTube\'s revenue share and accounting for the fact that not every view shows a monetized ad. RPM is always meaningfully lower than CPM.' },
]

export default function YoutubeRpmByCountryPage() {
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
            {['Data', 'YouTube', 'Creator Economy'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            YouTube RPM by Country:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Where Creators Earn the Most</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            The exact same 1,000 views can pay one creator ten times more than another — not because of talent or effort, but because of where their viewers happen to live. Here's how the country gap actually works, and what it means for how you grow.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — YouTube RPM by Country</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'RPM (Revenue per Mille) is what a creator actually earns per 1,000 views — it varies enormously by country because advertisers pay very different amounts to reach different audiences.',
                'The US, UK, Canada, and Australia consistently rank as the highest-paying "Tier 1" markets; India, Pakistan, and Bangladesh consistently rank among the lowest, despite often having the largest view counts.',
                'RPM depends on where your viewers are located, not where you as the creator are based or upload from.',
                'The gap is driven by advertiser competition and audience purchasing power, not by YouTube treating creators from different countries differently.',
                'YouTube doesn\'t publish official country-by-country RPM figures — every specific number you\'ll see online, including in this article, is a third-party estimate and will vary by niche, format, and season.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Understanding RPM</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'RPM stands for "revenue per mille" (per 1,000) — it\'s calculated after YouTube\'s revenue share and reflects total monetization, not just display ads (includes Premium revenue, Super Thanks, and memberships).',
                'CPM and RPM are different numbers: CPM is what an advertiser pays per 1,000 ad impressions; RPM is always lower, since it\'s calculated across all views, including unmonetized ones.',
                'YouTube Shorts RPM is dramatically lower than long-form video RPM across every country, because Shorts revenue is pooled and split differently.',
                'Every source that publishes country-level RPM or CPM data — including this article — is estimating from third-party or creator-reported figures, since YouTube itself does not publish this breakdown officially.',
                'The relative ranking (Tier 1 countries earning several times more than Tier 3) is consistently reported across independent sources, even when the exact dollar figures differ.',
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
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Three RPM Tiers, Roughly</h2>
            <div className="card" style={{ padding: '18px 16px', overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr>
                    <th style={{ color: '#FF6B2B' }}>Tier</th>
                    <th>Countries (examples)</th>
                    <th>Estimated RPM range</th>
                  </tr>
                </thead>
                <tbody>
                  {tierRows.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 700 }}>{row.tier}</td>
                      <td style={{ color: 'rgba(255,255,255,0.6)' }}>{row.countries}</td>
                      <td style={{ color: 'rgba(255,255,255,0.6)' }}>{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 14, lineHeight: 1.6 }}>
              Ranges are directional estimates aggregated from third-party creator-earnings data, not official YouTube figures. Your actual RPM depends heavily on niche, video length, and season — check your own YouTube Studio Analytics for accurate numbers on your channel specifically.
            </p>
          </section>

          {/* Why the gap */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Why the Gap Exists</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {whyGap.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* What creators can do */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What This Actually Means for How You Grow</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
              This isn't a call to chase a different audience just for the RPM bump — content built around an audience you don't actually understand tends to underperform anyway. But it is a real factor worth knowing before you judge your channel's revenue against a number you saw online. A channel with a large, engaged, Tier 3 audience and a channel with a smaller Tier 1 audience can generate wildly different ad revenue for a similar amount of work — and neither number reflects the quality of the content.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              It's also a strong reason not to rely on ad revenue alone. Brand deals, unlike YouTube ad revenue, are priced by the brand based on your actual audience and engagement — which is exactly what a rate card and media kit are built to communicate clearly, regardless of which country your views come from.
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
                { href: '/blog/ftc-disclosure-rules-influencers-2026', title: 'FTC Disclosure Rules for Influencers (2026 Guide)', tag: 'Compliance' },
                { href: '/blog/1099-vs-w9-content-creators', title: '1099 vs. W-9 for Content Creators: What You Actually Need', tag: 'Taxes' },
                { href: '/blog/linktree-vs-media-kit-brand-deals', title: 'Linktree vs. Media Kit: Why Brands Need More Than a Link Page', tag: 'Comparison' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>📊</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Brand deals aren't limited by your RPM.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with your media kit, rate card, and creator CV — and let brands price you on your actual audience and engagement, not ad revenue alone.
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
