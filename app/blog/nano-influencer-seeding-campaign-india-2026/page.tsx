import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Run a Nano-Influencer Seeding Campaign in India (2026 Brand Guide)',
  description: 'A step-by-step guide for Indian D2C brands running a nano-influencer product seeding campaign — how many creators to seed, realistic post-through rates, budgeting for non-responders, briefing at scale, and turning the results into reusable UGC and reviews.',
  keywords: 'nano influencer seeding campaign india, product seeding influencers india, how to run gifting campaign brand india, nano influencer marketing d2c india, influencer seeding wave guide',
  openGraph: {
    title: 'How to Run a Nano-Influencer Seeding Campaign in India (2026 Brand Guide)',
    description: 'One nano creator posting to 3,000 followers isn\'t meaningful. Sixty to a hundred of them, done right, is a real acquisition channel. Here\'s the exact playbook.',
    url: 'https://identitykit.in/blog/nano-influencer-seeding-campaign-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/nano-seeding-campaign-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/nano-influencer-seeding-campaign-india-2026',
  },
}

const budgetBreakdown = [
  { item: 'Product cost (60-120 creators)', range: '₹25,000-2,00,000', note: 'Depends heavily on your product\'s unit cost — a ₹300 skincare sample scales very differently than a ₹2,000 gadget.' },
  { item: 'Shipping & packaging', range: '₹50-200 per creator', note: 'Often overlooked in the initial budget — add it explicitly rather than absorbing it as a surprise cost.' },
  { item: 'Coordination (in-house or freelancer)', range: '₹50,000-1,00,000/month', note: 'Managing outreach, tracking responses, and following up across dozens of creators is genuinely operations-heavy — budget real time or a real person for it.' },
  { item: 'Non-response buffer', range: '10-30% of creators won\'t post', note: 'Budget for this from the start rather than treating it as a disappointing surprise — it\'s a normal, expected part of seeding at this scale.' },
]

const steps = [
  { step: '01', title: 'Define the goal before you define the list', body: 'Are you after reach and awareness, authentic UGC you can reuse in ads, or reviews for your Amazon/Flipkart/Nykaa listing? Each goal changes which creators you target and what you brief them to include.' },
  { step: '02', title: 'Build a longlist of 100-150 nano creators (1K-10K followers)', body: 'A single nano creator reaching 2,000-5,000 followers isn\'t individually meaningful — the strategy only works at volume. Aim to seed 60-120 to get a workable number of actual posts back.' },
  { step: '03', title: 'Filter for niche and engagement, not just follower count', body: 'A creator with 4,000 real, niche-relevant followers and strong engagement is worth more to a seeding wave than one with 9,000 followers and no visible interaction on recent posts.' },
  { step: '04', title: 'Send a simple, consistent brief to everyone', body: 'At this scale, personalising each brief individually isn\'t practical — use one clear, reusable brief covering your product\'s key message, what to avoid, and the ASCI disclosure requirement, even for gifted content.' },
  { step: '05', title: 'Track responses in a simple pipeline', body: 'Shipped, confirmed received, posted, no response — a basic spreadsheet is enough. This is what lets you see your actual post-through rate and plan future waves accurately.' },
  { step: '06', title: 'Follow up once, then let it go', body: 'A single polite check-in with non-responders after a reasonable window (10-14 days) is appropriate. Chasing beyond that has diminishing returns — some percentage of any seeding wave simply won\'t convert to a post, and that\'s expected.' },
  { step: '07', title: 'Collect and repurpose what comes back', body: 'The content itself is the second half of the value — save every post for potential reuse as paid ad creative (with usage rights discussed separately) or as review content for your product listings.' },
]

const realismChecks = [
  'Not every creator who receives a product will post — a meaningful share (commonly cited around 10-30%) won\'t, for reasons ranging from disinterest to simply losing track of the product',
  'A single nano creator\'s individual reach (2,000-5,000 followers) is not the point — the value comes from volume and the aggregate authentic content library it produces',
  'This is an operations-heavy strategy, not a "set it and forget it" one — budget real coordination time, whether internal or a dedicated freelancer',
  'Seeding works best as a discovery mechanism — track which creators post organically and enthusiastically, and prioritise those specific creators for future paid collaborations',
]

export default function NanoSeedingCampaignIndiaPage() {
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
            {['For Brands', 'Seeding Campaign', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Run a Nano-Influencer<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Seeding Campaign in India</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            One nano creator posting to 3,000 followers isn't individually meaningful. Sixty to a hundred of them, seeded and briefed properly, is a real content and discovery engine that no single mid-tier creator deal matches. Here's the exact operational playbook.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Running a Nano Seeding Campaign</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Seed 60-120 nano creators (1K-10K followers) at once — a single one isn\'t meaningful, the strategy works through volume',
                'Budget for a 10-30% non-response rate as a normal, expected part of the process, not a disappointing surprise',
                'Use one consistent, simple brief for the whole wave rather than personalising each one individually',
                'Track shipped, received, posted, and no-response status in a basic spreadsheet to measure your actual post-through rate',
                'Treat this as an operations-heavy channel — budget real coordination time or a dedicated freelancer',
                'Use seeding as a discovery mechanism: creators who post enthusiastically and organically are your best candidates for future paid collaborations',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Nano Seeding in India</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'A single nano-creator Reel reaching 2,000-5,000 viewers isn\'t individually meaningful — a seeding wave of 60-120 creators generates aggregate reach, SEO-indexed content, and review material that no single mid-tier creator deal matches.',
                'Nano-influencer seeding programs are genuinely operations-heavy, commonly requiring dedicated coordination budget for managing outreach, shipping, and follow-up across dozens of creators simultaneously.',
                'A meaningful share of seeded creators — commonly cited in the range of 10-30% — won\'t end up posting, for reasons ranging from disinterest to simply losing track of the product.',
                'Nano creators frequently offer the highest engagement rates of any tier, often in the 8-10%+ range, roughly double what many macro-influencers achieve.',
                'Content generated through seeding waves is commonly repurposed both as paid ad creative and as authentic review material for e-commerce product listings, extending its value well beyond the original organic post.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>7-Step Seeding Campaign Playbook</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {steps.map((item) => (
                <div key={item.step} className="card" style={{ padding: '20px 22px' }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 10, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#FF6B2B', fontSize: 14, flexShrink: 0 }}>{item.step}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>{item.title}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.7 }}>{item.body}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Budget breakdown */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Realistic Budget Breakdown</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Most first-time seeding budgets underestimate everything beyond the product cost itself.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {budgetBreakdown.map((row, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ flex: 1, minWidth: 220 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{row.item}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, lineHeight: 1.5 }}>{row.note}</div>
                  </div>
                  <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '4px 12px', borderRadius: 100, fontWeight: 700, fontSize: 13, flexShrink: 0, whiteSpace: 'nowrap' }}>{row.range}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>One brief, sent to your whole seeding wave</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Generate a clear, consistent, ASCI-compliant brief in under a minute with the free Campaign Brief Generator — built for exactly this kind of scale.</p>
            </div>
            <Link href="/tools/campaign-brief-generator" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Generate My Brief →
            </Link>
          </div>

          {/* Realism checks */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Set Realistic Expectations Before You Start</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {realismChecks.map((item, i) => (
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
                { q: 'How many nano creators should I seed for a first campaign?', a: 'Start with 60-120 creators. A single nano creator\'s reach (2,000-5,000 followers) isn\'t meaningful on its own — the value of this strategy comes specifically from volume, generating an aggregate library of authentic content and a wide discovery net across many small, engaged audiences.' },
                { q: 'What percentage of seeded creators will actually post?', a: 'Expect roughly 70-90% to post, meaning 10-30% typically won\'t — for reasons ranging from disinterest to simply losing track of the product. Budget for this from the outset as a normal part of the process rather than treating it as campaign failure.' },
                { q: 'Do I need to pay nano creators, or is gifting enough?', a: 'Many nano creators are open to gifted-only collaborations, especially for products they\'d genuinely use. That said, disclosure requirements still apply to gifted content under ASCI guidelines, and it\'s worth budgeting a small compensation option for creators who ask, since not every nano creator will accept product-only terms.' },
                { q: 'How do I brief 100+ creators without it becoming unmanageable?', a: 'Use one clear, reusable brief for the entire wave rather than personalising each one — covering your product\'s key message, what to avoid, and disclosure requirements. Personalisation at this scale isn\'t practical or necessary; consistency and clarity matter more.' },
                { q: 'Can I reuse the content that comes back from a seeding campaign?', a: 'Yes, this is one of the strongest reasons to run a seeding wave — the resulting UGC can be repurposed as paid ad creative or as review content for e-commerce listings. Just be clear about usage rights with creators if you plan to run their content as paid ads, since that\'s typically a separate conversation from the original gifted collaboration.' },
                { q: 'Should I keep working with the same nano creators after a seeding wave?', a: 'Yes — use the seeding wave as a discovery mechanism. Creators who post enthusiastically and organically, without needing multiple reminders, are strong candidates to move into a paid, ongoing collaboration for future campaigns.' },
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
                { href: '/blog/influencer-brief-guide-india-2026', title: 'How to Write an Influencer Brief for Indian Creators', tag: 'For Brands' },
                { href: '/blog/evaluating-creator-media-kit-brands-india-2026', title: 'What to Look for in a Creator\'s Media Kit', tag: 'For Brands' },
                { href: '/blog/asci-guidelines-influencer-disclosure-india-2026', title: 'ASCI Guidelines for Influencers in India 2026', tag: 'ASCI Compliance' },
                { href: '/blog/barter-collaboration-india-2026', title: 'Barter Collaboration in India: When to Say Yes', tag: 'Barter Collab' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🌱</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Brief your whole seeding wave in one shot.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Use Identity Kit's free Campaign Brief Generator to build a consistent, compliant brief for every creator in your next seeding campaign.
            </p>
            <Link href="/tools/campaign-brief-generator" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Generate My Brief Free →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 14 }}>
              identitykit.in · Free tools for brands and creators
            </div>
          </div>

        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/tools/campaign-brief-generator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Campaign Brief Generator</Link>
          <Link href="/tools/influencer-roi-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>ROI Calculator</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Free tools for Indian creators and brands · identitykit.in</p>
      </footer>
    </div>
  )
}
