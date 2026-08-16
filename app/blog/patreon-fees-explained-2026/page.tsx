import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Patreon for Creators: How It Works and What You Actually Keep (2026)',
  description: 'Patreon\'s 10% platform fee is just one layer — processing, currency conversion, and payout fees all stack on top. Here\'s the real math on what lands in your account, and why Patreon won\'t solve your audience-building problem.',
  keywords: 'patreon for creators 2026, how much does patreon take, patreon fees explained, patreon platform fee 2026, patreon vs other membership platforms, patreon creator payout',
  openGraph: {
    title: 'Patreon for Creators: How It Works and What You Actually Keep (2026)',
    description: 'Patreon\'s 10% platform fee is just one layer — processing, currency conversion, and payout fees all stack on top. Here\'s the real math on what lands in your account.',
    url: 'https://identitykit.in/blog/patreon-fees-explained-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/patreon-fees-explained.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/patreon-fees-explained-2026',
  },
}

const feeStack = [
  { layer: 'Platform fee', body: '10% flat for creators who joined after August 4, 2025. Legacy creators who published before that date may retain older tiered rates of 5%, 8%, or roughly 11–12%.' },
  { layer: 'Payment processing', body: 'Roughly 2.9% + $0.30 on a standard pledge, or 5% + $0.10 on micropledges of $3 or less — this is charged per individual pledge, separate from the platform fee.' },
  { layer: 'Currency conversion', body: 'An additional roughly 2.5% applies when a patron pays in a currency different from your payout currency.' },
  { layer: 'Payout fee', body: 'A further deduction applied when your balance is actually transferred out to your bank or payment method, varying by method and currency.' },
]

const planComparison = [
  { label: 'Signed up before Aug 4, 2025', option: 'May retain legacy tiered pricing: 5% (Lite), 8% (Pro), or ~11–12% (Premium) — check your Plan details page to confirm which applies' },
  { label: 'Signed up after Aug 4, 2025', option: 'Flat 10% platform fee, regardless of tier or feature set' },
  { label: 'Selling one-time digital products (pre-May 22, 2025)', option: 'May be on a separate 5% one-time purchase fee structure' },
]

const faqs = [
  { q: 'How much of my Patreon income do I actually keep?', a: 'After the platform fee (10% for new creators, or a legacy rate if applicable), processing fees (roughly 2.9% + $0.30 per pledge), and any currency conversion or payout fees, most creators land somewhere in the 80–85% range of gross pledges — not the "90%" the headline platform fee alone might suggest.' },
  { q: 'What changed about Patreon\'s pricing in 2025?', a: 'On August 4, 2025, Patreon simplified its fee structure — replacing the old three-tier Lite/Pro/Premium system (5%/8%/12%) with a single flat 10% platform fee for new creators. Creators who published before that date and have kept their page continuously live may still qualify for their old legacy rate.' },
  { q: 'Why does a $5 pledge net less than 90% of $5?', a: 'Because the platform fee isn\'t the only cost — processing fees are charged per pledge on top of it. On 100 patrons paying $5 each (roughly $500 gross), a realistic breakdown looks like around $50 in platform fees plus around $44.50 in processing, landing a creator closer to $405 — about 81% of gross, not 90%.' },
  { q: 'Does Patreon help me find new patrons?', a: 'Not meaningfully — Patreon is best understood as membership infrastructure (billing, tiers, content gating, community tools), not a discovery platform. It doesn\'t route new people to your page the way a social platform\'s algorithm might. Growth on Patreon depends almost entirely on the audience you bring to it from elsewhere.' },
  { q: 'Should I price my tiers differently because of the fee stack?', a: 'It\'s worth factoring in, particularly for lower-priced tiers where the flat portion of processing fees ($0.30 or $0.10) represents a larger percentage of a small pledge. Many creators price entry tiers slightly above the psychological "next dollar down" specifically to offset this effect.' },
  { q: 'Is Patreon still worth using given all these fees?', a: 'For creators with an existing, engaged audience wanting a dedicated membership and content-gating system, Patreon remains a widely used, well-established option — the fee stack is a real cost to factor into pricing, not necessarily a reason to avoid the platform altogether.' },
]

export default function PatreonFeesPage() {
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
            {['Patreon', 'Rate Card', 'Guide'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Patreon: What You<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Actually Keep in 2026</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            "Patreon takes 10%" is the number everyone quotes — and it's true, as far as it goes. But three more fees stack on top before anything reaches your bank account. Here's the full math, and why Patreon won't solve your audience-growth problem either.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Patreon Fees</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Since August 4, 2025, new Patreon creators pay a flat 10% platform fee, replacing the old tiered Lite/Pro/Premium system (5%/8%/12%) — legacy creators may still be on those older rates.',
                'Payment processing (roughly 2.9% + $0.30 per pledge), currency conversion (roughly 2.5% when applicable), and a payout fee all stack on top of the platform fee.',
                'Realistic take-home typically lands around 80–85% of gross pledges — noticeably less than the "10% fee" headline alone implies.',
                'Patreon functions as membership infrastructure — billing, tiers, content gating — not an audience-discovery tool; it doesn\'t bring you new patrons on its own.',
                'A separate 5% one-time-purchase fee structure applies to creators who were selling digital products on Patreon before May 22, 2025.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Patreon's Fee History</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Patreon\'s pre-2025 system offered three tiered plans — Lite (5%), Pro (8%), and Premium (12%, with a monthly minimum fee starting around $300/month) — before being simplified.',
                'Legacy pricing eligibility is tied to having published a page continuously since on or before August 4, 2025 — new pages created after that date default to the flat 10% structure.',
                'On a worked example of 100 patrons paying $5 each (roughly $500 gross), platform and processing fees combined commonly leave a creator with approximately $405 — about 81% of gross.',
                'Micropledges of $3 or less are charged a different, higher-percentage processing rate (roughly 5% + $0.10) than standard pledges, reflecting the higher relative cost of processing very small transactions.',
                'Patreon\'s own creator fees documentation confirms the dashboard balance shown already reflects platform, processing, and currency-conversion deductions — with the payout fee applied separately when funds are actually withdrawn.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fee stack */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Four-Layer Fee Stack</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {feeStack.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{i + 1}. {row.layer}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Plan comparison */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Which Fee Rate Applies to You</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {planComparison.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.option}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Discovery caveat */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What Patreon Doesn't Do</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              Patreon is built to manage the relationship with patrons you already have — billing, tiers, gated content, community posts. It's not built to find you new ones. Unlike a social platform with an algorithmic feed, Patreon has minimal built-in discovery, so growth almost entirely depends on the audience you're already driving to it from somewhere else — YouTube, a newsletter, social content, or a media kit that makes the pitch for why someone should join. If you're starting from zero followers hoping Patreon itself solves that problem, it generally won't.
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
                { href: '/blog/discord-server-monetization-2026', title: 'Discord Server Monetization for Creators: How Paid Communities Work (2026)', tag: 'Discord' },
                { href: '/blog/youtube-channel-memberships-2026', title: 'YouTube Channel Memberships: How the Tier System Works (2026)', tag: 'Memberships' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🧡</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Patreon needs an audience. Build one that finds you.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a media kit, rate card, and creator CV — a professional presence that helps brands and fans alike find you, wherever you're driving them next.
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
