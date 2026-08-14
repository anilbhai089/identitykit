import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'YouTube Channel Memberships: How the Tier System Works (2026)',
  description: 'Creators keep 70% of membership revenue — more favorable than YouTube\'s standard 55% ad revenue split. Here\'s how tiers, pricing, and eligibility actually work, and how it compares to Patreon and Discord.',
  keywords: 'youtube channel memberships 2026, youtube membership tiers, youtube membership requirements, youtube memberships vs patreon, youtube memberships revenue split, how to set up youtube memberships',
  openGraph: {
    title: 'YouTube Channel Memberships: How the Tier System Works (2026)',
    description: 'Creators keep 70% of membership revenue — more favorable than YouTube\'s standard 55% ad revenue split. Here\'s how tiers, pricing, and eligibility actually work.',
    url: 'https://identitykit.in/blog/youtube-channel-memberships-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/youtube-channel-memberships.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/youtube-channel-memberships-2026',
  },
}

const platformComparison = [
  { label: 'Creator share', youtube: '70% (YouTube takes 30%)', patreon: 'Roughly 88–95% (Patreon takes 5–12%, plus processing)', discord: '90% (Discord takes 10%, plus processing)' },
  { label: 'Where members interact', youtube: 'Inside YouTube — no separate app needed', patreon: 'A separate Patreon account and app', discord: 'Inside your existing Discord server' },
  { label: 'Discovery', youtube: '"Join" button directly on your channel, algorithm-assisted', patreon: 'Minimal built-in discovery — mostly self-driven', discord: 'Minimal — built for an existing community' },
  { label: 'Content flexibility', youtube: 'Restricted to YouTube-supported perk types', patreon: 'High — flexible formats and fulfillment options', discord: 'Channel/role-based access, fairly flexible' },
]

const tierExample = [
  { tier: 'Base ($1.99–$4.99)', perks: 'Custom badge, member emoji, member-only community posts' },
  { tier: 'Mid (~$10)', perks: 'Everything in Base, plus early access to videos, members-only livestream chat perks' },
  { tier: 'Premium ($24.99–$49.99)', perks: 'Everything in lower tiers, plus exclusive video content or personalized perks' },
]

const faqs = [
  { q: 'How much of my membership revenue do I actually keep?', a: 'YouTube takes a 30% cut of membership revenue, meaning creators keep roughly 70% — a more favorable split than YouTube\'s standard 55% ad revenue share, though still lower than Patreon\'s typical 88–95% creator share or Discord\'s 90%.' },
  { q: 'How many subscribers do I need to enable memberships?', a: 'This is genuinely inconsistent across current sources. Some describe memberships as available once you hit YouTube\'s lower "Fan Funding" entry tier (500 subscribers, 3 uploads in 90 days, plus a watch-hours or Shorts-views threshold) introduced in a mid-2025 program expansion. Others describe memberships as requiring the full 1,000-subscriber Partner Program tier. Given the discrepancy, check your channel\'s actual eligibility status directly in YouTube Studio\'s Monetization tab rather than relying on a single published number.' },
  { q: 'How many membership tiers can I create, and what can I charge?', a: 'Reporting varies between up to five and up to six tiers, priced within a $0.99–$49.99 (some sources cite up to $99.99) monthly range. Each higher tier must include everything offered in the tiers below it.' },
  { q: 'What\'s a realistic conversion rate from subscribers to paying members?', a: 'Most channels are commonly reported to convert somewhere between 1–3% of their subscriber base into paying members, with tighter-knit communities — niche hobbies, educational content, dedicated fan communities — tending toward the higher end of that range.' },
  { q: 'Should I do YouTube Memberships or Patreon?', a: 'If your audience is concentrated on YouTube specifically, the frictionless "Join" button (no separate account needed) is frequently cited as converting meaningfully better than sending viewers off-platform to Patreon. Patreon\'s advantages are a higher creator revenue share and far more flexibility in tier structure and fulfillment — many creators end up using both, rather than picking one exclusively.' },
  { q: 'Do YouTube Memberships work with Shorts?', a: 'Yes — Memberships fully integrate with Shorts, including the ability to publish members-only Shorts visible exclusively to paying members, and Shorts views can count toward the watch-based eligibility thresholds depending on which tier you\'re qualifying for.' },
]

export default function YouTubeMembershipsPage() {
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
            {['Memberships', 'YouTube', 'Rate Card'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            YouTube Channel<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Memberships, Explained</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Memberships pay creators a better split than standard ad revenue — 70% instead of 55% — and unlike AdSense, that income doesn't swing with your view count. Here's how the tier system actually works, and how it stacks up against Patreon and Discord.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — YouTube Memberships</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Creators keep roughly 70% of membership revenue, with YouTube taking a 30% cut — more favorable than the standard 55% ad revenue split.',
                'Tiers are priced within roughly $0.99–$49.99 per month, with up to five or six tiers depending on the source, each higher tier including all lower-tier perks.',
                'Eligibility is somewhat inconsistently reported across sources — check YouTube Studio directly, since a mid-2025 program expansion added a lower entry tier that some sources say unlocks memberships earlier than the traditional 1,000-subscriber threshold.',
                'Most channels convert an estimated 1–3% of subscribers into paying members, with tighter-knit niche communities trending higher.',
                'Memberships integrate directly with Shorts, including members-only Shorts content.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Memberships in Context</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'A mid-2025 expansion to the YouTube Partner Program introduced a lower entry tier (reported as 500 subscribers, 3 uploads in 90 days, plus a watch-hours or Shorts-views threshold) specifically to bring more creators into monetization tools earlier — though which specific tools this unlocks is described inconsistently across sources.',
                'Modern YPP monetization is organized into acceptable "modules" (Watch Page, Shorts, and Commerce Product) that eligible creators can individually accept — accepting the Commerce module is what actually enables memberships, Super Chat, and Shopping features.',
                'The "Join" button appears on a channel only once memberships are enabled and the channel is eligible — its absence is the simplest way to tell a channel hasn\'t set memberships up.',
                'Custom membership badges appear next to a paying member\'s name in comments and live chat, functioning as a visible status signal within the community.',
                'Only monthly recurring memberships are natively supported — an "annual" option isn\'t a built-in feature, though some creators approximate one by adjusting how a higher-tier monthly price is framed.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison table */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>YouTube vs. Patreon vs. Discord</h2>
            <div className="card" style={{ padding: '18px 16px', overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr>
                    <th></th>
                    <th style={{ color: '#FF6B2B' }}>YouTube</th>
                    <th>Patreon</th>
                    <th>Discord</th>
                  </tr>
                </thead>
                <tbody>
                  {platformComparison.map((row, i) => (
                    <tr key={i}>
                      <td style={{ color: 'rgba(255,255,255,0.5)' }}>{row.label}</td>
                      <td style={{ color: 'rgba(255,255,255,0.65)' }}>{row.youtube}</td>
                      <td style={{ color: 'rgba(255,255,255,0.65)' }}>{row.patreon}</td>
                      <td style={{ color: 'rgba(255,255,255,0.65)' }}>{row.discord}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Tier example */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>A Common Three-Tier Structure</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {tierExample.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.tier}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.perks}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Realistic income */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What Realistic Membership Income Looks Like</h2>
            <div className="card" style={{ padding: '24px 26px' }}>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.7 }}>
                A channel with 200 paying members on a $4.99/month tier would generate roughly $998 in gross monthly revenue — after YouTube's 30% cut, that's approximately $700 per month in predictable, recurring income, independent of view count or CPM swings. That predictability is the real appeal of memberships: unlike ad revenue, it doesn't fluctuate with algorithm changes or seasonal advertiser demand.
              </p>
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
                { href: '/blog/youtube-shorts-monetization-2026', title: 'YouTube Shorts Monetization: How It\'s Different From Long-Form (2026)', tag: 'Shorts' },
                { href: '/blog/discord-server-monetization-2026', title: 'Discord Server Monetization for Creators: How Paid Communities Work (2026)', tag: 'Discord' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🏅</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Recurring income is great. It's not your only income.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a media kit, rate card, and creator CV — so brands can find and pitch you directly, alongside your membership income.
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
