import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Newsletter Sponsorships: How Substack & Beehiiv Creators Get Paid (2026)',
  description: 'Newsletter sponsorships are priced on CPM per subscriber, not follower count — and niche changes the rate more than list size does. Here\'s how pricing actually works for Substack, Beehiiv, and other newsletter creators.',
  keywords: 'newsletter sponsorship rates, substack sponsorship pricing, beehiiv ad rates, newsletter cpm 2026, how much do newsletter sponsorships cost, newsletter ad rates by niche',
  openGraph: {
    title: 'Newsletter Sponsorships: How Substack & Beehiiv Creators Get Paid (2026)',
    description: 'Newsletter sponsorships are priced on CPM per subscriber, not follower count — and niche changes the rate more than list size does. Here\'s how pricing actually works.',
    url: 'https://identitykit.in/blog/newsletter-sponsorship-rates-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/newsletter-sponsorship-rates.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/newsletter-sponsorship-rates-2026',
  },
}

const pricingModels = [
  { model: 'CPM (cost per 1,000 opens/subscribers)', how: 'Rate = (subscribers ÷ 1,000) × CPM. A 10,000-subscriber list at $30 CPM = $300 per placement.', tradeoff: 'Predictable and scales automatically as your list grows — but exposes you to open-rate fluctuations you don\'t fully control.' },
  { model: 'Flat rate', how: 'A fixed price per placement, regardless of exact open or click numbers that issue.', tradeoff: 'Simpler to manage and common for smaller newsletters — but doesn\'t scale automatically as your list grows, so it needs manual revisiting.' },
  { model: 'CPC (cost per click)', how: 'Sponsor pays only for clicks their link actually receives.', tradeoff: 'Shifts nearly all performance risk onto you — most established newsletter creators avoid pure CPC because click-through depends heavily on the sponsor\'s own creative and offer, not just your list quality.' },
]

const nicheCpm = [
  { niche: 'Finance & investing', cpm: '$50 – $120' },
  { niche: 'B2B / SaaS', cpm: '$40 – $75' },
  { niche: 'Technical / developer', cpm: '$25 – $60' },
  { niche: 'Marketing & creator economy', cpm: '$30 – $70' },
  { niche: 'Lifestyle / food / parenting', cpm: '$15 – $35' },
]

const sizeExamples = [
  { size: 'Under 3,000 subscribers', typical: '$50 – $250 flat per placement', note: 'Most creators at this size use flat pricing since CPM math on a small list produces awkward, hard-to-defend numbers.' },
  { size: '3,000 – 50,000 subscribers', typical: '$500 – $3,000 per placement', note: 'CPM pricing becomes standard here; niche and engagement start mattering more than raw list size.' },
  { size: '50,000+ subscribers', typical: '$2,250 – $4,000+ per placement', note: 'B2B and finance newsletters typically sit at the top of this range; general consumer/lifestyle lists sit closer to the floor.' },
]

const faqs = [
  { q: 'Why does niche matter more than list size for newsletter sponsorships?', a: 'Because sponsors are ultimately paying for access to a specific, valuable audience — a 5,000-subscriber finance newsletter often commands a higher CPM than a 50,000-subscriber general lifestyle list, since finance and B2B readers represent higher-value purchase decisions for advertisers.' },
  { q: 'What open rate should I have before charging CPM rates confidently?', a: 'A commonly cited threshold is 35–40%+ — below that, CPM pricing becomes harder to defend to sophisticated sponsors, and flat-rate pricing is usually a more practical starting point.' },
  { q: 'Can I trust my open rate numbers completely?', a: 'Not entirely — Apple\'s Mail Privacy Protection can artificially inflate open rate data for a meaningful share of subscribers, since it can register opens automatically regardless of whether someone actually read the email. It\'s worth mentioning this caveat to sponsors directly rather than presenting raw open rate as flawless.' },
  { q: 'What\'s the difference between primary and secondary ad placement?', a: 'Primary placement (typically the first ad slot near the top of the issue) commands the highest CPM, often meaningfully above secondary placement further down — the position in the email measurably affects how many readers actually see and engage with it.' },
  { q: 'Should I use CPM or flat-rate pricing as a smaller newsletter?', a: 'Flat-rate is generally more practical below a few thousand subscribers, since CPM math produces very small, hard-to-negotiate numbers at that scale. Transitioning to CPM pricing as your list and engagement data mature is a common, reasonable progression.' },
  { q: 'Do sponsors care about anything besides my subscriber count?', a: 'Yes — niche, publishing consistency, open rate, click-through rate, and audience trust all factor into how sponsors evaluate a newsletter, often more heavily than raw subscriber count alone.' },
]

export default function NewsletterSponsorshipPage() {
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
            {['Newsletter', 'Rate Card', 'Creator Economy'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Newsletter Sponsorships:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>How Creators Actually Get Paid</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A 5,000-subscriber finance newsletter can out-earn a 50,000-subscriber lifestyle list on the same sponsorship deal — because in email, niche and engagement matter more than raw size. Here's how newsletter sponsorship pricing actually works.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Newsletter Sponsorship Pricing</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'The standard pricing model is CPM: (subscribers ÷ 1,000) × your CPM rate = price per placement.',
                'Smaller newsletters (under ~3,000 subscribers) typically use simpler flat-rate pricing instead, commonly $50–$250 per placement.',
                'Niche drives price more than list size — finance and B2B newsletters commonly command $40–$120 CPM, while general lifestyle content sits closer to $15–$35 CPM.',
                'A 35–40%+ open rate is a commonly cited threshold for confidently defending CPM-based pricing to sponsors.',
                'Primary (top-of-issue) placement commands a meaningfully higher rate than secondary placement further down.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Newsletter Monetization</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Newsletter platforms like beehiiv and Substack have both grown significantly in 2026, with paid newsletter subscriptions and creator payouts reaching new highs across the industry.',
                'Apple\'s Mail Privacy Protection can artificially inflate open-rate data by registering automatic opens regardless of whether a subscriber actually read the email — a real limitation worth acknowledging when presenting your numbers to sponsors.',
                'A 3–5% click-through rate on sponsored links is commonly cited as a solid benchmark that helps justify premium pricing.',
                'Some platforms offer built-in ad networks that automatically match smaller newsletters with advertisers — a lower-effort but typically lower-CPM alternative to selling sponsorships directly.',
                'Sponsorships are increasingly booked in multi-issue packages rather than one-off placements, which is worth factoring into how you structure your own rate card.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing models */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Three Pricing Models</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {pricingModels.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.model}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6, marginBottom: 6 }}>{row.how}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, lineHeight: 1.6, fontStyle: 'italic' }}>{row.tradeoff}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Niche CPM table */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>CPM Benchmarks by Niche</h2>
            <div className="card" style={{ padding: '18px 16px', overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr>
                    <th style={{ color: '#FF6B2B' }}>Niche</th>
                    <th>Typical CPM range</th>
                  </tr>
                </thead>
                <tbody>
                  {nicheCpm.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 700 }}>{row.niche}</td>
                      <td style={{ color: 'rgba(255,255,255,0.6)' }}>{row.cpm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Size examples */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What This Looks Like by List Size</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {sizeExamples.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.size}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6, marginBottom: 6 }}>{row.typical}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, lineHeight: 1.6, fontStyle: 'italic' }}>{row.note}</div>
                </div>
              ))}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 14, lineHeight: 1.6 }}>
              These are directional reference ranges aggregated from multiple industry sources, not a fixed market price — treat them as a starting point for your own pricing conversation.
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
                { href: '/blog/twitch-streamer-media-kit-sponsorships', title: 'How Streamers Can Build a Media Kit for Sponsorships (2026)', tag: 'Streaming' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>📰</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Pitch sponsors with numbers, not guesswork.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a rate card, media kit, and creator CV — one shareable link that makes your newsletter's numbers easy for sponsors to say yes to.
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
