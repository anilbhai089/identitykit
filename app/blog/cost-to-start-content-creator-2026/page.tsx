import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does It Cost to Start as a Content Creator? (2026)',
  description: 'A phone you already own can shoot your first 50 videos. Here\'s a realistic, tiered budget for starting out as a creator — what to actually spend on first, what to skip, and the recurring costs nobody budgets for.',
  keywords: 'cost to start content creator 2026, beginner creator equipment budget, how much does it cost to start youtube channel, cheap content creation setup, content creator starter kit budget, creator equipment priorities',
  openGraph: {
    title: 'How Much Does It Cost to Start as a Content Creator? (2026)',
    description: 'A phone you already own can shoot your first 50 videos. Here\'s a realistic, tiered budget for starting out — what to spend on first, and what to skip.',
    url: 'https://identitykit.in/blog/cost-to-start-content-creator-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/cost-to-start-content-creator.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/cost-to-start-content-creator-2026',
  },
}

const budgetTiers = [
  { tier: 'Bare minimum', range: '$0 – $100', includes: 'A smartphone you already own, natural window light, free editing apps (CapCut, InShot). Genuinely enough to publish real, watchable content.' },
  { tier: 'Solid starter kit', range: '$200 – $500', includes: 'A basic tripod, a ring light or small softbox, and a USB or lavalier microphone — commonly cited as the sweet spot for a first real setup, enough to shoot 20–50 videos while you figure out your style.' },
  { tier: 'Serious upgrade', range: '$800 – $1,500+', includes: 'A mirrorless camera body, better lighting, a proper microphone system — worth considering once you have a consistent posting habit and know what your content actually needs, not before.' },
]

const recurringCosts = [
  { item: 'Editing software', note: 'Free tools (CapCut, DaVinci Resolve) cover most beginners; paid tools (Adobe Creative Cloud, Final Cut Pro) add a real monthly or annual cost as your editing needs grow.' },
  { item: 'Cloud storage', note: 'Video files are large — a single hour of high-resolution footage can run into the hundreds of gigabytes, and free storage tiers fill up faster than most new creators expect.' },
  { item: 'Website or portfolio hosting', note: 'A domain and basic hosting, if you build anything beyond your social profiles, typically runs a modest annual fee.' },
  { item: 'Music and asset licensing', note: 'Royalty-free music libraries or stock footage subscriptions, if your content relies on either.' },
]

const faqs = [
  { q: 'Do I really need a nice camera to start?', a: 'No — a modern smartphone shoots content that meets the bar for essentially every platform. The equipment that most reliably determines whether early content looks professional is audio and lighting, not the camera body itself.' },
  { q: 'What should I actually spend money on first?', a: 'A general order of priority: clean audio first (a cheap lavalier or USB mic makes a bigger difference than almost anything else), then stable, in-focus video (even a basic tripod solves this), then consistent lighting, then editing. Camera upgrades are typically the least urgent early purchase.' },
  { q: 'Is expensive equipment worth it for a beginner?', a: 'Generally not yet. A commonly repeated piece of advice among experienced creators is that no new piece of gear outperforms simply publishing more content — getting through your first 20–50 videos with a basic setup teaches you far more about your actual needs than researching premium equipment before you\'ve started.' },
  { q: 'What ongoing costs catch new creators off guard?', a: 'Software subscriptions and cloud storage are the two most commonly overlooked recurring costs — a one-time equipment purchase is easy to plan for, but a monthly editing subscription or a storage plan you didn\'t budget for adds up quietly over a year.' },
  { q: 'Can I deduct my starter equipment on my taxes?', a: 'For US creators operating as a genuine business, equipment used regularly and for business purposes is generally deductible, either as an expense or depreciated over time depending on the purchase — see our guide on creator tax deductions for the fuller breakdown, and keep receipts and records of business-use percentage either way.' },
  { q: 'When does it make sense to upgrade beyond a starter kit?', a: 'A reasonable signal is consistency and clarity — once you\'re posting regularly and have a clear sense of what your specific content actually needs (higher low-light performance, longer battery life for livestreaming, a particular lens), an upgrade is solving a real problem rather than a hypothetical one.' },
]

export default function CostToStartCreatorPage() {
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
            {['Getting Started', 'Budget', 'Guide'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            What It Actually Costs<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>to Start Creating</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Most people overestimate the equipment they need to start and underestimate the subscriptions that quietly add up later. Here's a realistic, tiered budget — and the order you should actually spend money in.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Starting Costs</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'A smartphone you already own is genuinely enough to start — you don\'t need dedicated camera equipment to publish real, watchable content.',
                'A commonly cited "solid starter kit" (basic tripod, ring light, USB or lavalier mic) runs roughly $200–$500 and covers most beginners for their first 20–50 pieces of content.',
                'Priority order for spending: clean audio first, then stable/in-focus video, then consistent lighting — camera body upgrades are typically the least urgent early purchase.',
                'Recurring costs (editing software, cloud storage, hosting) are more commonly underestimated than one-time equipment purchases.',
                'Publishing more content with a basic setup teaches you more about your actual equipment needs than researching premium gear before you\'ve started.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* Budget tiers */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Three Realistic Budget Tiers</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {budgetTiers.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.tier} — {row.range}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.includes}</div>
                </div>
              ))}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 14, lineHeight: 1.6 }}>
              These are directional ranges commonly cited by creator equipment guides, not a fixed standard — actual costs vary by region, currency, and specific product choices.
            </p>
          </section>

          {/* What matters first */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What Actually Matters First</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              Audio is the single most-cited priority across creator equipment guidance — viewers consistently tolerate imperfect video far more than muddy or echoey sound. After that, stable, in-focus footage (solved by something as simple as a $20 tripod) matters more than camera resolution. Lighting comes next; a modest ring light or softbox often does more for how professional your content looks than a camera upgrade would. Editing software rounds out the list — and free tools cover most beginners perfectly well before a paid subscription is worth it.
            </p>
          </section>

          {/* Recurring costs */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Costs Nobody Budgets For</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {recurringCosts.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.item}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.note}</div>
                </div>
              ))}
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
                { href: '/blog/creator-tax-deductions-2026', title: 'Creator Tax Deductions: What You Can Actually Write Off (2026)', tag: 'Taxes' },
                { href: '/blog/how-to-make-a-media-kit', title: 'How to Make a Media Kit as a Creator (Free Guide, 2026)', tag: 'Media Kit' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🛒</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              The one thing that's actually free to start.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a media kit, rate card, and creator CV — so you look professional to brands from your very first post, no equipment budget required.
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
