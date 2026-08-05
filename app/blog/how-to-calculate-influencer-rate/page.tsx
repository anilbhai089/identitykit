import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Calculate Your Influencer Rate: A Step-by-Step Formula (2026)',
  description: 'The industry-standard formula for sponsored post pricing: Base Rate = (Followers ÷ 1,000) × CPM × Niche Multiplier × Engagement Multiplier. Here\'s how to actually run the numbers, with a full worked example.',
  keywords: 'how to calculate influencer rate, influencer pricing formula, how much should i charge for sponsored post, influencer rate calculator formula, sponsored post pricing formula, cpm influencer pricing',
  openGraph: {
    title: 'How to Calculate Your Influencer Rate: A Step-by-Step Formula (2026)',
    description: 'The industry-standard formula for sponsored post pricing, explained with a full worked example — Base Rate = (Followers ÷ 1,000) × CPM × Niche Multiplier × Engagement Multiplier.',
    url: 'https://identitykit.in/blog/how-to-calculate-influencer-rate',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/how-to-calculate-influencer-rate.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/how-to-calculate-influencer-rate',
  },
}

const formulaSteps = [
  { step: '1. Start with your CPM', body: 'CPM (cost per 1,000 followers) is your baseline dollar rate. General Instagram content commonly starts around $5–$15 per 1,000 followers; competitive niches can run up to $50.' },
  { step: '2. Apply your niche multiplier', body: 'Multiply your CPM by a niche factor — roughly 0.7x for broad, low-purchase-intent content (memes, general entertainment) up to 1.5x for high-value niches like finance, tech, and B2B, where audiences have stronger purchasing power.' },
  { step: '3. Apply your engagement multiplier', body: 'Engagement rate scales the number further — commonly around 0.7x for under 1% engagement, 1x for average engagement, up to roughly 1.35x for engagement rates above 8%.' },
  { step: '4. Multiply by your followers ÷ 1,000', body: 'This gives you your base rate for one standard post: (Followers ÷ 1,000) × CPM × Niche Multiplier × Engagement Multiplier.' },
  { step: '5. Apply format and add-on multipliers', body: 'Adjust the base rate for the specific deliverable — Reels/video commonly run 1.5–2x a static post, Stories commonly run around 0.5x, and usage rights or exclusivity typically add 20–50%+ on top.' },
]

const formatMultipliers = [
  { format: 'Static post', multiplier: '1x (baseline)' },
  { format: 'Reel / short-form video', multiplier: '1.5x – 2x' },
  { format: 'Story (single frame)', multiplier: '~0.5x' },
  { format: 'Usage rights (paid ad, 1–3 months)', multiplier: '+20% – 50%' },
  { format: 'Exclusivity clause', multiplier: 'Separate negotiated add-on, not a fixed multiplier' },
]

const faqs = [
  { q: 'What CPM should I actually use in the formula?', a: 'General content typically starts around $5–$15 per 1,000 followers; higher-value niches like finance, tech, and B2B commonly run higher, sometimes up to $50. If you\'re unsure, starting at the lower end and adjusting upward as you build a track record is a reasonable, defensible approach.' },
  { q: 'Where do I find my engagement rate?', a: 'Add your total interactions (likes, comments, shares, saves) across your last 10–12 posts, divide by your follower count, then multiply by 100. Compare it to benchmarks for your specific tier and platform — a 4% engagement rate is exceptional for a macro creator but only average for a nano creator, so compare within your own tier, not against creators of a very different size.' },
  { q: 'Does this formula work the same way on every platform?', a: 'The core structure (followers × CPM × multipliers) applies broadly, but baseline CPM figures differ by platform — TikTok, YouTube, and Instagram each have their own typical CPM ranges, so use platform-specific benchmarks rather than assuming one number covers every platform.' },
  { q: 'Is this formula the only way to price a sponsored post?', a: 'No — it\'s one of three common models. This follower/engagement-based approach suits brand-awareness campaigns. Conversion-based pricing (tied to tracked sales or actions) and pure engagement-based pricing are alternatives, more common when a brand\'s goal is direct performance rather than reach.' },
  { q: 'Should I just use the formula number as my final rate?', a: 'Treat it as a defensible starting point, not a final answer. Your actual rate should also reflect your production quality, past results for brands, business costs, and how much you personally value the specific partnership — the formula gives you a number you can explain and justify, which is often more valuable than the number itself.' },
  { q: 'What if a brand pushes back on my formula-based rate?', a: 'Being able to walk through exactly how you arrived at a number — audience size, engagement, niche, deliverable type — is a stronger negotiating position than a number pulled from nowhere. It reframes the conversation from "is this too expensive" to "which specific inputs should we adjust."' },
]

export default function CalculateInfluencerRatePage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', color: '#fff', fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; overflow: hidden; transition: border-color 0.2s; }
        .card:hover { border-color: rgba(255,107,43,0.2); }
        table.cmp { width: 100%; border-collapse: collapse; }
        table.cmp th, table.cmp td { padding: 14px 12px; text-align: left; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.07); vertical-align: top; }
        code.formula { display: block; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,107,43,0.2); border-radius: 10px; padding: 16px 18px; font-family: 'SF Mono', Menlo, monospace; font-size: 14px; color: #FF9A6B; line-height: 1.6; }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .hero-pad { padding: 48px 16px 32px !important; }
          .content-pad { padding: 0 16px 60px !important; }
          table.cmp { font-size: 12px !important; }
          table.cmp th, table.cmp td { padding: 10px 8px !important; }
          code.formula { font-size: 12px !important; }
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
            {['Rate Card', 'Calculator', 'Guide'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Calculate<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Your Influencer Rate</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            "What should I charge?" has an actual, defensible answer — not a guess. Here's the formula creators and agencies both use as a starting point, walked through step by step with a full worked example.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — The Formula</div>
            <code className="formula" style={{ marginBottom: 16 }}>
              Base Rate = (Followers ÷ 1,000) × CPM × Niche Multiplier × Engagement Multiplier
            </code>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'CPM (per 1,000 followers) typically starts around $5–$15 for general content, up to $50 for high-value niches.',
                'Niche multiplier ranges roughly 0.7x (broad/low purchase-intent content) to 1.5x (finance, tech, B2B).',
                'Engagement multiplier ranges roughly 0.7x (under 1% engagement) to 1.35x (above 8% engagement).',
                'This gives your base rate for one static post — video/Reels commonly run 1.5–2x that, Stories around 0.5x, and usage rights or exclusivity add further on top.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Rate Calculation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'This CPM-based formula is one of three common influencer pricing models, alongside conversion-based pricing (tied to tracked sales) and pure engagement-based pricing.',
                'Engagement rate is widely cited as one of the strongest pricing signals — creators with roughly double their tier\'s average engagement rate can often command 40–60% higher rates than the tier benchmark.',
                'Engagement benchmarks are tier-relative, not absolute — what counts as "good" engagement differs meaningfully between nano, micro, and macro creators on the same platform.',
                'Nano and micro creators frequently earn more per 1,000 followers than mega creators, precisely because the formula rewards engagement rate, which tends to be higher at smaller scale.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Formula steps */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Formula, Step by Step</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {formulaSteps.map((s, i) => (
                <div key={i} className="card" style={{ padding: '20px 24px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{s.step}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{s.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Worked example */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>A Full Worked Example</h2>
            <div className="card" style={{ padding: '24px 26px' }}>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                Say you have <strong style={{ color: '#fff' }}>50,000 Instagram followers</strong> in the <strong style={{ color: '#fff' }}>finance niche</strong>, with a <strong style={{ color: '#fff' }}>5% engagement rate</strong>, and a brand wants a single Reel.
              </p>
              <code className="formula" style={{ marginBottom: 16 }}>
                (50,000 ÷ 1,000) × $12 CPM × 1.4 niche × 1.2 engagement = $1,008 base rate<br />
                $1,008 × 1.75 (Reel multiplier) ≈ $1,764
              </code>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6, fontStyle: 'italic' }}>
                This is an illustrative example, not a universal rate — your actual CPM, niche multiplier, and engagement multiplier will vary based on your platform, audience, and the specific brand conversation.
              </p>
            </div>
          </section>

          {/* Format multipliers table */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Adjustments After the Base Number</h2>
            <div className="card" style={{ padding: '18px 16px', overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr>
                    <th style={{ color: '#FF6B2B' }}>Factor</th>
                    <th>Typical adjustment</th>
                  </tr>
                </thead>
                <tbody>
                  {formatMultipliers.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 700 }}>{row.format}</td>
                      <td style={{ color: 'rgba(255,255,255,0.6)' }}>{row.multiplier}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                { href: '/blog/ugc-creator-rates-2026', title: 'UGC Rates: What to Charge for User-Generated Content (2026)', tag: 'UGC' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🧮</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Turn this number into an actual rate card.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a rate card, media kit, and creator CV — so the next time a brand asks "what do you charge," you have a link, not a guess.
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
