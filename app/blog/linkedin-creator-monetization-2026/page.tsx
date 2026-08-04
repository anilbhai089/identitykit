import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'LinkedIn Creator Monetization: How B2B Creators Get Paid (2026)',
  description: 'LinkedIn rates run 2–4x higher than equivalent Instagram rates — not because of bigger audiences, but because of who\'s in them. Here\'s how sponsored posts, newsletter takeovers, and LinkedIn\'s new creator tools actually get priced.',
  keywords: 'linkedin creator monetization, linkedin influencer rates 2026, linkedin sponsored post pricing, how much do linkedin creators make, linkedin newsletter sponsorship, b2b creator rates',
  openGraph: {
    title: 'LinkedIn Creator Monetization: How B2B Creators Get Paid (2026)',
    description: 'LinkedIn rates run 2–4x higher than equivalent Instagram rates — not because of bigger audiences, but because of who\'s in them. Here\'s how LinkedIn creator pricing actually works.',
    url: 'https://identitykit.in/blog/linkedin-creator-monetization-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/linkedin-creator-monetization.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/linkedin-creator-monetization-2026',
  },
}

const rateTiers = [
  { tier: 'Micro (5K – 15K followers)', range: '$200 – $600 per sponsored post' },
  { tier: 'Mid-tier (50K – 150K followers)', range: '$500 – $3,500 per sponsored post' },
  { tier: 'Top-tier (500K+ followers)', range: '$10,000 – $40,000+ per sponsored post' },
]

const formats = [
  { format: 'Sponsored text post', note: 'The creator writes natively about the product or service — the most common and lowest-cost format.' },
  { format: 'Carousel post', note: 'A visual, swipeable walkthrough of a use case or framework — strong for explaining a product or concept in more depth than a single post.' },
  { format: 'Article sponsorship', note: 'Long-form thought leadership content, positioned as more durable and search-indexable than a feed post.' },
  { format: 'Newsletter takeover', note: 'A dedicated issue sent to the creator\'s newsletter subscribers — commonly commands the highest rate of any format, since it reaches an opted-in list directly rather than relying on algorithmic feed reach.' },
  { format: 'LinkedIn Live co-hosting', note: 'A joint broadcast, often for a product launch or thought-leadership event — priced more like a service engagement than a simple post.' },
]

const faqs = [
  { q: 'Why are LinkedIn rates so much higher than Instagram for a similar follower count?', a: 'LinkedIn\'s audience consists of self-identified professionals with known job titles, industries, and seniority levels — for a B2B brand, reaching a decision-maker like a Head of Engineering or a CFO is worth significantly more per impression than reaching a general consumer audience of the same size.' },
  { q: 'Does follower count matter less on LinkedIn than other platforms?', a: 'Relatively, yes. A LinkedIn newsletter with 12,000 subscribers concentrated in a specific buyer role can outperform one with 80,000 general followers, if that specific role is who the sponsor is trying to reach — job title and seniority breakdown often matters more than raw subscriber count for B2B sponsors.' },
  { q: 'Why do LinkedIn newsletter takeovers cost more than regular posts?', a: 'A newsletter reaches an opted-in subscriber list directly via notification and email, rather than depending on the algorithm to surface a feed post — that reliability, combined with typically much higher open and click rates than organic posts, is what sponsors are paying the premium for.' },
  { q: 'Do certain niches earn more on LinkedIn?', a: 'Yes — creators in SaaS, finance, and HR content commonly earn meaningfully above general professional content creators, reflecting how valuable those specific audiences are to the brands trying to reach them.' },
  { q: 'Does LinkedIn pay creators directly through an ad revenue program, like YouTube does?', a: 'Not currently in the way YouTube or TikTok do. LinkedIn\'s creator earnings today come primarily from brand sponsorships and, for eligible creators, a native paid subscription feature — LinkedIn has signaled it\'s developing additional monetization tools, including a brand deals marketplace and possibly a creator fund, though these are still rolling out.' },
  { q: 'Can I charge for access to my LinkedIn newsletter or content?', a: 'LinkedIn has a native paid subscription feature for eligible creators, letting them charge for premium newsletter content or community access, with creators reportedly able to keep a significant majority share of that subscription revenue.' },
]

export default function LinkedInMonetizationPage() {
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
            {['LinkedIn', 'B2B', 'Rate Card'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            LinkedIn Creator<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Monetization, Explained</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A 12,000-subscriber LinkedIn newsletter full of the exact right job titles can out-earn an 80,000-follower general account — because on LinkedIn, sponsors are paying for who's reading, not how many. Here's how B2B creator pricing actually works.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — LinkedIn Creator Rates</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'LinkedIn sponsored post rates commonly range from $200–$600 for micro creators up to $10,000–$40,000+ for top-tier creators with 500K+ followers.',
                'LinkedIn rates typically run 2–4x higher than equivalent Instagram rates on a CPM basis, driven by its professional, self-identified audience.',
                'Newsletter takeovers usually command the highest rate of any format, since they reach an opted-in subscriber list directly rather than depending on algorithmic feed reach.',
                'Niche matters heavily — SaaS, finance, and HR creators commonly earn meaningfully more than general professional content creators.',
                'LinkedIn doesn\'t currently have a YouTube-style ad revenue split — creator income today comes mainly from sponsorships and a native paid subscription feature, with more monetization tools reportedly in development.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — LinkedIn Creator Economy</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'LinkedIn newsletters have been reported to achieve meaningfully higher open rates than typical email newsletters, since subscribers get a direct in-platform notification.',
                'LinkedIn\'s native paid subscription feature reportedly lets creators keep a significant majority share of subscription revenue.',
                'Internal LinkedIn strategy documents reported in mid-2026 describe plans for a brand deals marketplace, a subscription product, and a possible creator fund — signaling more formal monetization infrastructure is coming, though not all of it has launched yet.',
                'B2B influencer marketing budgets have been reported growing faster than B2C budgets as a share of total influencer marketing spend, a trend directly relevant to LinkedIn\'s creator economy.',
                'LinkedIn Experiences — a feature for monetizing virtual events, workshops, and cohort-based sessions — represents a services-based income stream distinct from traditional sponsored content.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rate table */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Sponsored Post Rates by Tier</h2>
            <div className="card" style={{ padding: '18px 16px', overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr>
                    <th style={{ color: '#FF6B2B' }}>Tier</th>
                    <th>Typical rate range</th>
                  </tr>
                </thead>
                <tbody>
                  {rateTiers.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 700 }}>{row.tier}</td>
                      <td style={{ color: 'rgba(255,255,255,0.6)' }}>{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 14, lineHeight: 1.6 }}>
              These are directional industry reference ranges, not a fixed standard — niche, format, and audience seniority all shift the actual number significantly.
            </p>
          </section>

          {/* Why premium */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Why LinkedIn Commands a Premium</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              The premium isn't about LinkedIn having bigger audiences — it usually has smaller ones than Instagram or TikTok for a similar creator. It's about who's in the audience. LinkedIn users are self-identified by job title, industry, and seniority, which means a B2B brand can be confident they're reaching an actual decision-maker or influencer in a purchase process, not just a general consumer who might be interested. That confidence is what sponsors are paying extra for.
            </p>
          </section>

          {/* Formats */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Content Formats and How They're Priced</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {formats.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.format}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.note}</div>
                </div>
              ))}
            </div>
          </section>

          {/* What's coming */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What's Coming Next</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              LinkedIn has reportedly been developing a more formal creator monetization suite — including a brand deals marketplace to connect creators directly with sponsors, expanded subscription tools for newsletters and paywalled communities, and potentially a creator fund. None of this replaces the fundamentals in this guide, but it's worth watching if you're building a LinkedIn presence — the platform's creator infrastructure is visibly maturing.
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
                { href: '/blog/newsletter-sponsorship-rates-2026', title: 'Newsletter Sponsorships: How Substack & Beehiiv Creators Get Paid (2026)', tag: 'Newsletter' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>💼</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Look credible to B2B sponsors from the first DM.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a rate card, media kit, and creator CV — a professional profile that works just as well for B2B sponsors as it does for consumer brands.
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
