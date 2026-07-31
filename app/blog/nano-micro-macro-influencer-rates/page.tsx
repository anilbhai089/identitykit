import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nano vs. Micro vs. Macro Influencers: What Brands Actually Pay For',
  description: 'Follower count sets which tier you\'re in, but it doesn\'t set your rate. Here\'s what nano, micro, mid-tier, macro, and mega influencers each get hired for — and the factors that actually drive price within every tier.',
  keywords: 'nano vs micro influencer, macro influencer rates, influencer tier definitions, micro influencer rates, what brands pay influencers, influencer marketing tiers explained',
  openGraph: {
    title: 'Nano vs. Micro vs. Macro Influencers: What Brands Actually Pay For',
    description: 'Follower count sets which tier you\'re in — it doesn\'t set your rate. Here\'s what brands actually hire each tier for, and what really drives price within every tier.',
    url: 'https://identitykit.in/blog/nano-micro-macro-influencer-rates',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/influencer-tiers.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/nano-micro-macro-influencer-rates',
  },
}

const tiers = [
  { tier: 'Nano', range: '1K – 10K', bestFor: 'Hyper-niche authenticity, community trust, bottom-of-funnel conversions' },
  { tier: 'Micro', range: '10K – 100K', bestFor: 'Niche authority, strong engagement, targeted audience fit' },
  { tier: 'Mid-tier', range: '100K – 500K', bestFor: 'A blend of reach and credibility, broader campaigns' },
  { tier: 'Macro', range: '500K – 1M', bestFor: 'Large-scale awareness, category repositioning' },
  { tier: 'Mega', range: '1M+', bestFor: 'National campaigns, instant credibility, mass reach' },
]

const priceFactors = [
  { title: 'Engagement rate, not just reach', body: 'A smaller audience that actually comments, shares, and buys is frequently worth more to a brand than a larger, passive one — engagement rate is one of the first numbers a brand checks after follower count.' },
  { title: 'Niche fit and audience relevance', body: 'A skincare brand pitching a 15K-follower dermatology-adjacent creator will often pay more per follower than pitching a 150K general lifestyle account with the same skincare product.' },
  { title: 'Content usage rights', body: 'A rate for organic posting only is different from a rate that includes the brand\'s right to run your content as a paid ad or use it on their own channels — usage rights are frequently the biggest single line item creators underprice.' },
  { title: 'Exclusivity', body: 'Agreeing not to work with competing brands for a period of time is a real constraint on your income, and should be priced as its own line item, not thrown in for free.' },
  { title: 'Deliverable complexity', body: 'A single static post is priced differently than a Reel with a voiceover, multiple revisions, and a specific script the brand provided — production effort is a legitimate pricing factor independent of your tier.' },
  { title: 'Platform', body: 'The same creator can command different rates on different platforms depending on where their strongest engagement and the brand\'s target audience actually overlap.' },
]

const faqs = [
  { q: 'Do brands only work with macro and mega influencers for big budgets?', a: 'No — brands increasingly split budgets across tiers deliberately. Many use nano and micro creators for authentic, high-engagement content and conversions, and macro or mega creators for broad awareness, running both strategies at the same time rather than choosing one tier exclusively.' },
  { q: 'Is it true that engagement rate drops as follower count grows?', a: 'This is a widely observed pattern, though not a strict rule for every account — as an audience grows past a certain size, it typically includes more passive followers, so the percentage who actively engage tends to decline even as the total engagement volume grows.' },
  { q: 'Where exactly does one tier end and the next begin?', a: 'There\'s no universal, agreed-upon cutoff — different agencies, platforms, and brands draw the lines differently, and the ranges shift as the industry grows. Treat tier boundaries as rough, useful categories rather than precise thresholds.' },
  { q: 'Should I focus on growing my follower count to earn more?', a: 'Not necessarily as the primary lever. Improving engagement, sharpening your niche, and building a track record of results for past brand partners often moves your rate more than follower growth alone, especially in the nano-to-micro range.' },
  { q: 'What should I actually put in my rate card if I don\'t know standard tier pricing?', a: 'Standard tier pricing varies too much by niche, platform, and region to rely on a single published number. A more reliable approach is pricing based on your own engagement, past results, and the specific deliverable and usage rights being requested — which is also exactly what a brand evaluating you will actually look at.' },
]

export default function InfluencerTiersPage() {
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
            {['Rate Card', 'Brand Deals', 'Creator Economy'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Nano vs. Micro vs. Macro:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>What Brands Actually Pay For</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Your follower count decides which tier you're in. It doesn't decide your rate. Two creators in the exact same tier can be priced completely differently based on engagement, niche fit, and what a brand is actually asking for. Here's how brands think about tiers, and what really moves your price.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Influencer Tiers</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Nano (roughly 1K–10K followers) and Micro (roughly 10K–100K) creators are typically hired for niche authenticity and high engagement.',
                'Mid-tier and Macro creators (roughly 100K–1M) offer a blend of reach and credibility for broader campaigns.',
                'Mega influencers (1M+) are hired mainly for large-scale awareness and instant credibility, often at the cost of lower engagement percentage.',
                'Brands increasingly split budgets across multiple tiers deliberately, rather than picking one tier for an entire campaign.',
                'Within any tier, engagement rate, niche fit, content usage rights, and deliverable complexity matter more to your actual rate than follower count alone.',
                'Exact tier boundaries vary by source, platform, and agency — treat the ranges as rough categories, not fixed rules.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Influencer Tier System</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'The influencer tier system emerged as marketers needed a shorthand to distinguish audience scale — the terms "nano" and "macro" only came into common use after "micro-influencer" was already established.',
                'There is no single industry-wide standard for where one tier ends and the next begins — different marketing agencies and platforms publish meaningfully different follower ranges for the same tier names.',
                'A commonly cited industry pattern is that engagement rate tends to decline as follower count grows, though this varies by niche and isn\'t universal for every account.',
                'Brands running full-funnel campaigns frequently combine tiers deliberately — nano/micro for conversion and trust, macro/mega for awareness — rather than relying on one tier alone.',
                'Follower count is one of several inputs brands weigh, alongside engagement rate, content quality, audience demographics, and past campaign performance.',
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
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Tiers, Roughly</h2>
            <div className="card" style={{ padding: '18px 16px', overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr>
                    <th style={{ color: '#FF6B2B' }}>Tier</th>
                    <th>Typical follower range</th>
                    <th>What brands hire this tier for</th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 700 }}>{row.tier}</td>
                      <td style={{ color: 'rgba(255,255,255,0.6)' }}>{row.range}</td>
                      <td style={{ color: 'rgba(255,255,255,0.6)' }}>{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 14, lineHeight: 1.6 }}>
              These ranges are rough industry consensus, not a fixed rule — different sources draw the lines differently, and boundaries shift over time as the industry grows.
            </p>
          </section>

          {/* What drives price */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What Actually Drives Price Within Every Tier</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24, fontSize: 15 }}>
              Two creators with nearly identical follower counts can charge very different rates for the exact same deliverable — this is where the real pricing decisions happen, not at the tier boundary.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {priceFactors.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Don't chase followers */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Chasing the Next Tier Isn't the Only Way to Earn More</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              It's tempting to treat crossing into the next tier as the goal — 10K, then 100K, then beyond. But brands evaluating a partnership are weighing engagement, niche fit, and past results just as heavily as raw numbers, sometimes more so. A creator with 8,000 highly engaged, niche-relevant followers and a track record of driving results for past brand partners is frequently a stronger, better-paid pitch than a creator with 80,000 loosely-connected followers and no track record at all.
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🎯</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Price yourself on more than your follower count.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a rate card, media kit, and creator CV that show brands your engagement, niche, and track record — not just a number.
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
