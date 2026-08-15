import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kick vs. Twitch Monetization 2026: Is the 95/5 Split Worth It?',
  description: 'Kick pays streamers 95% of subscription revenue versus Twitch\'s standard 50% — a real, verified gap. Here\'s the actual subscription math, Kick\'s unique hourly incentive program, and the audience-size tradeoff nobody\'s revenue split fixes.',
  keywords: 'kick vs twitch 2026, kick monetization revenue split, kick 95/5 split explained, kick creator incentive program, twitch vs kick subscription earnings, is kick worth it for streamers',
  openGraph: {
    title: 'Kick vs. Twitch Monetization 2026: Is the 95/5 Split Worth It?',
    description: 'Kick pays streamers 95% of subscription revenue versus Twitch\'s standard 50% — a real, verified gap. Here\'s the actual math and the tradeoff nobody\'s split fixes.',
    url: 'https://identitykit.in/blog/kick-vs-twitch-monetization-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/kick-vs-twitch.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/kick-vs-twitch-monetization-2026',
  },
}

const subMath = [
  { platform: 'Kick', split: '95% to creator', netOnTier1: '~$4.74' },
  { platform: 'YouTube Live', split: '70% to creator', netOnTier1: '~$3.49' },
  { platform: 'Twitch (Partner Plus)', split: 'Up to 70% (first $100K in earnings)', netOnTier1: '~$3.49' },
  { platform: 'Twitch (standard)', split: '50% to creator', netOnTier1: '~$2.49' },
]

const kcipEligibility = [
  { req: 'Roughly 30 hours streamed in the qualifying period' },
  { req: 'Around 250 unique chatters' },
  { req: 'About 25 active subscribers' },
  { req: '250+ followers' },
  { req: 'Roughly 75 average concurrent viewers' },
]

const faqs = [
  { q: 'Is Kick\'s 95/5 split real, or is there a catch?', a: 'It\'s real and consistently verified across multiple independent sources — Kick takes only a 5% cut (largely payment processing) on subscriptions, versus Twitch\'s standard 50% split. The "catch," if there is one, isn\'t in the split itself — it\'s that Kick\'s audience is still meaningfully smaller than Twitch\'s, so the higher percentage applies to a smaller pool of potential subscribers for most creators today.' },
  { q: 'What is the Kick Creator Incentive Program (KCIP)?', a: 'It\'s an hourly payment layered on top of standard subscription revenue, available to eligible Kick Partners — reported rates commonly cited in a roughly $15–$32/hour range, calculated using a mix of concurrent viewership and chat engagement (sometimes referred to as an "Authority Score") rather than a flat salary. Twitch has no direct equivalent to this mechanic.' },
  { q: 'Can I stream on both Kick and Twitch at the same time?', a: 'Yes — Kick explicitly supports multistreaming while preserving your full 95% split, and Twitch permits multistreaming for Affiliates and most Partners under certain conditions. Running both simultaneously has become an increasingly common strategy for capturing Kick\'s payout rate alongside Twitch\'s larger existing audience.' },
  { q: 'Does subscribing through the Twitch mobile app cost more?', a: 'Yes — subscribing to a Twitch channel through the iOS or Android app costs viewers roughly $2 more per month than the same Tier 1 subscription purchased on desktop, due to standard app store fees. That markup goes to Apple or Google, not the creator, which is worth knowing if you\'re encouraging subscriptions from mobile-heavy viewers.' },
  { q: 'Should I move from Twitch to Kick for the better split?', a: 'For creators earning primarily from subscriptions with a modest but loyal audience, the percentage difference can meaningfully change take-home pay per subscriber. For creators relying heavily on Twitch\'s broader monetization mix — ads, Bits, sponsorship credibility, and sheer audience size — the revenue split alone may not offset what a larger, more established platform still offers. Many active streamers now run both rather than choosing exclusively.' },
  { q: 'Why did Kick launch with such an aggressive revenue split?', a: 'The 95/5 split was widely described at launch as a "loss leader" strategy — an aggressive, arguably unsustainable offer designed to pull streamers away from Twitch and build market share quickly. As of 2026, Kick has maintained the split and continued growing its share of streaming hours, suggesting the strategy has held up longer than early skeptics expected.' },
]

export default function KickVsTwitchPage() {
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
            {['Kick', 'Streaming', 'Comparison'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Kick vs. Twitch:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Is the 95/5 Split Worth It?</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            On the same $4.99 subscription, a Kick streamer takes home nearly double what a standard Twitch Partner does. The math is real — but the split alone doesn't tell the whole story. Here's what actually changes your income, and what doesn't.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Kick vs. Twitch</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Kick pays creators 95% of subscription revenue, versus Twitch\'s standard 50% (or up to 70% for eligible Partner Plus creators on their first $100,000 earned).',
                'On a $4.99 Tier 1 subscription, a Kick creator keeps roughly $4.74, versus roughly $2.49 on standard Twitch — nearly double per subscriber.',
                'Kick\'s Creator Incentive Program (KCIP) adds an hourly rate (commonly cited $15–$32/hour) on top of subscription revenue for eligible Partners — a mechanic Twitch has no direct equivalent to.',
                'Twitch still holds a significantly larger audience and more mature monetization tools (ads, Bits, established sponsorship credibility), which can offset its lower per-subscriber split for many creators.',
                'Multistreaming to both platforms simultaneously, while keeping Kick\'s full 95% split, is an increasingly common strategy rather than choosing one exclusively.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — The Platform Landscape</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Kick launched in 2022, and its 95/5 split was widely described at the time as an aggressive "loss leader" strategy that critics doubted could last — it has persisted through 2026.',
                'Subscribing to a Twitch channel through the iOS or Android app costs viewers roughly $2 more per month than the same subscription bought on desktop, due to standard app store fees — that markup goes to Apple or Google, not the creator.',
                'Kick has been reported capturing a growing share of livestreamed gaming hours (cited around 11% by mid-2026), while Twitch still holds the larger overall audience.',
                'Twitch\'s Partner Plus program offers up to a 70/30 split for eligible creators, but only on their first $100,000 in earnings — a meaningfully different structure from Kick\'s flat 95/5 across all tiers.',
                'YouTube Live sits between the two on subscription splits, offering a flat 70/30 arrangement for all monetized streamers.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sub math table */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Actual Subscription Math</h2>
            <div className="card" style={{ padding: '18px 16px', overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr>
                    <th style={{ color: '#FF6B2B' }}>Platform</th>
                    <th>Revenue split</th>
                    <th>Net on a $4.99 sub</th>
                  </tr>
                </thead>
                <tbody>
                  {subMath.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 700 }}>{row.platform}</td>
                      <td style={{ color: 'rgba(255,255,255,0.6)' }}>{row.split}</td>
                      <td style={{ color: 'rgba(255,255,255,0.6)' }}>{row.netOnTier1}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* KCIP */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Kick's Other Lever: The Creator Incentive Program</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24, fontSize: 15 }}>
              Beyond the subscription split, Kick pays eligible Partners an hourly rate for streaming time itself — separate from and on top of subscription and donation income. Eligibility for the underlying Partner Program commonly requires:
            </p>
            <div className="card" style={{ padding: '24px 26px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {kcipEligibility.map((row, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#FF6B2B', fontSize: 14, marginTop: 2 }}>☐</span>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{row.req}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* The real tradeoff */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Tradeoff a Better Split Doesn't Fix</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              A 95% split sounds unambiguously better than 50% — and per-subscriber, it is. But revenue split only matters if there's an audience to monetize in the first place, and Twitch's audience is still substantially larger and more established. Discovery is also genuinely harder on Kick compared to more mature discovery engines. For a creator with an existing, loyal Twitch following, the higher Kick percentage on a much smaller subscriber base may not beat a lower percentage on a much larger one — which is exactly why running both platforms simultaneously, rather than picking one, has become the more common approach among serious streamers navigating this decision in 2026.
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>💚</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              One profile, whichever platform you stream on.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a media kit, rate card, and creator CV — brand deals don't care which platform's revenue split you picked.
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
