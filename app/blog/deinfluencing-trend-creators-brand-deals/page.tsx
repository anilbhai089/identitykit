import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Deinfluencing Trend: What It Means for Creators and Brand Deals (2026)',
  description: 'Deinfluencing didn\'t kill brand partnerships — it raised the bar for honesty. Here\'s what the trend actually is, why audiences responded to it, and how to adapt your brand deal approach without losing trust.',
  keywords: 'deinfluencing trend, what is deinfluencing, deinfluencing creators, authentic brand deals, overconsumption content creators, honest influencer reviews',
  openGraph: {
    title: 'The Deinfluencing Trend: What It Means for Creators and Brand Deals (2026)',
    description: 'Deinfluencing didn\'t kill brand partnerships — it raised the bar for honesty. Here\'s what the trend actually is and how to adapt your approach without losing trust.',
    url: 'https://identitykit.in/blog/deinfluencing-trend-creators-brand-deals',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/deinfluencing-trend.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/deinfluencing-trend-creators-brand-deals',
  },
}

const adaptations = [
  { title: 'Include real downsides, not just praise', body: 'Content that names a genuine limitation — "great for X, but skip it if you need Y" — reads as more credible than uniform praise, and audiences increasingly notice the difference.' },
  { title: 'Be selective about what you promote', body: 'Turning down partnerships that don\'t genuinely fit your content or audience is increasingly treated as a credibility signal rather than a missed opportunity — audiences notice when a creator seems to endorse everything.' },
  { title: 'Show your actual usage, not just unboxing', body: 'Content that demonstrates real, ongoing use of a product tends to land better than a single polished post the day it arrived — it signals the endorsement wasn\'t just for the paycheck.' },
  { title: 'Disclose clearly, every time', body: 'In a climate of rising skepticism toward influencer marketing, skipping or softening a disclosure is a much bigger credibility risk than it used to be — this connects directly to standard FTC/ASA disclosure requirements, not just vibes.' },
  { title: 'Lean into your specific niche credibility', body: 'Deinfluencing content has generally rewarded creators seen as genuine experts or enthusiasts in a specific area over generalist promotion — niche authority is a real asset here, not a limitation.' },
]

const faqs = [
  { q: 'What exactly is "deinfluencing"?', a: 'It\'s a social media trend, largely associated with TikTok, where creators actively tell their audience what NOT to buy — pushing back against overconsumption and hype-driven purchasing, often naming specific viral products they don\'t think are worth it.' },
  { q: 'When did deinfluencing start?', a: 'The trend became widely visible in early 2023, largely in the beauty and lifestyle space, as a reaction to "haul" culture and the volume of influencer-driven product recommendations flooding social feeds.' },
  { q: 'Is deinfluencing bad for brand deals?', a: 'Not inherently — it\'s better understood as a shift in what audiences expect from sponsored content, not a rejection of brand partnerships altogether. Creators who adapt by being more selective and more honest tend to maintain trust; those who keep operating exactly as before may see more skepticism.' },
  { q: 'Isn\'t deinfluencing just influencing with extra steps?', a: 'This is a fair, commonly raised criticism — much deinfluencing content still involves recommending alternative (often cheaper) products, meaning it\'s still a form of influence, just framed differently. Being aware of this tension is useful; it doesn\'t make the underlying audience desire for more honesty any less real.' },
  { q: 'What\'s "underconsumption core" and how does it relate?', a: 'It\'s a related, slightly later trend (gaining visibility around 2024) focused on using, reusing, and repairing existing possessions rather than buying new ones — part of the same broader shift toward anti-haul, minimalism-adjacent content that deinfluencing helped kick off.' },
  { q: 'Do smaller creators benefit more from this shift than larger ones?', a: 'There\'s a reasonable case for it — nano and micro creators are generally seen as closer to their audience, and audiences tend to notice inauthenticity faster at that scale. That closeness cuts both ways: it\'s a real trust advantage when the content feels genuine, and a real risk when it doesn\'t.' },
]

export default function DeinfluencingPage() {
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
            <Link href="/onboarding" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Get Started Free</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto' }}>
        <div className="hero-pad" style={{ padding: '64px 24px 40px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['Trends', 'Brand Deals', 'Authenticity'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Deinfluencing:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>What It Actually Changes</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Millions of views went to creators telling their audience what NOT to buy — and it didn't kill brand partnerships, it raised the bar for what a credible one looks like. Here's what actually shifted, and how to adapt without abandoning brand deals altogether.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Deinfluencing</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Deinfluencing is a social media trend, largely originating on TikTok in early 2023, where creators tell audiences what not to buy — a reaction to overconsumption and "haul" culture.',
                'It doesn\'t reject brand partnerships outright — it reflects rising audience demand for honesty, including named downsides, not just polished praise.',
                'A related trend, "underconsumption core," emerged around 2024, focused on reusing and repairing existing items rather than buying new ones.',
                'Critics have pointed out a real irony: much deinfluencing content still recommends alternative products, meaning it\'s still a form of influence — worth being aware of, not a reason to dismiss the underlying trust shift.',
                'The practical takeaway for creators is selectivity and honesty, not necessarily fewer brand deals — audiences reward creators who turn down poor-fit partnerships and disclose clearly.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — The Deinfluencing Movement</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'The #deinfluencing hashtag reportedly reached tens of millions of views within its first weeks of going viral in early 2023, concentrated heavily in the beauty and lifestyle content categories.',
                'Academic research on the trend has characterized deinfluencing as a form of moral and values-driven consumer guidance, distinct from traditional product reviewing.',
                'The trend has been directly linked to rising skepticism toward influencer marketing broadly, pushing brands toward greater transparency in how they work with creators.',
                'By late 2025, the #deinfluencing hashtag was still active with tens of thousands of ongoing posts, suggesting a lasting shift rather than a short-lived viral moment.',
                'Industry trend reports for 2026 continue to cite authenticity and honest disclosure as top priorities for both creators and the brands working with them.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Adaptations */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>How to Adapt Without Abandoning Brand Deals</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {adaptations.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* The irony */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Honest Tension Worth Knowing About</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              A fair criticism of deinfluencing, raised repeatedly since it went viral, is that it's still a form of influence — a creator saying "don't buy X, get Y instead" is still shaping a purchase decision, just with different framing. That tension is real and worth sitting with rather than ignoring. It doesn't undercut the core lesson for creators, though: audiences are genuinely more attuned to authenticity signals than they were a few years ago, and content that acknowledges tradeoffs honestly tends to build more durable trust than content that doesn't.
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
                { href: '/blog/nano-micro-macro-influencer-rates', title: 'Nano vs. Micro vs. Macro Influencers: What Brands Actually Pay For', tag: 'Rate Card' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🌿</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Selectivity looks better with a real rate card behind it.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a media kit, rate card, and creator CV — a clear, professional profile makes it easier to be selective about partnerships without losing credibility.
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
