import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Snapchat Spotlight Monetization 2026: What Actually Pays Now',
  description: 'The $1M-a-day Spotlight jackpot era ended years ago, and the standalone Spotlight Rewards Program itself shut down in January 2025. Here\'s how the current unified Monetization Program actually works, and what tightened again in May 2026.',
  keywords: 'snapchat spotlight monetization 2026, snapchat creator rewards, how does snapchat pay creators, snapchat monetization program requirements, snapchat spotlight view time, snapchat creator subscriptions',
  openGraph: {
    title: 'Snapchat Spotlight Monetization 2026: What Actually Pays Now',
    description: 'The $1M-a-day Spotlight jackpot era ended years ago, and the standalone Spotlight Rewards Program itself shut down in January 2025. Here\'s how it actually works now.',
    url: 'https://identitykit.in/blog/snapchat-spotlight-monetization-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/snapchat-spotlight-monetization.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/snapchat-spotlight-monetization-2026',
  },
}

const eligibility = [
  { req: 'Roughly 50,000+ followers' },
  { req: '15,000+ hours of total view time over the trailing 28 days, with at least 3,000 of those hours coming specifically from Spotlight' },
  { req: 'Snap Star status (a separate designation from simply having a large following)' },
  { req: '18 years or older, residing in an eligible country' },
  { req: 'Original, advertiser-friendly public content and an account in good compliance standing' },
]

const incomeStreams = [
  { title: 'Spotlight ad revenue', body: 'Ads run between Spotlight videos, with eligible creators earning a share — reported per-1,000-view rates commonly cited in a roughly $1–$5 range, varying by content category and audience geography.' },
  { title: 'Story mid-roll ads', body: 'Structurally similar to YouTube mid-roll — sponsored content is inserted between Snaps in a Public Story, with creators earning a share of resulting ad revenue.' },
  { title: 'Creator Subscriptions (limited rollout)', body: 'Announced in limited alpha in 2026 for select Snap Star creators — subscriber-only perks and content priced in a reported $4.99–$19.99/month range.' },
  { title: 'Brand partnerships', body: 'Sponsored Spotlight and Story content arranged directly with brands, subject to Snapchat\'s own disclosure requirements alongside standard FTC or regional rules.' },
]

const faqs = [
  { q: 'Is the Spotlight Rewards Program still a thing?', a: 'The original standalone Spotlight Rewards Program officially ended on January 31, 2025. It was folded into a broader, unified Monetization Program that shares ad revenue across both Spotlight and Public Stories, rather than Spotlight having its own separate payout system.' },
  { q: 'What happened to the huge Spotlight payouts creators used to talk about?', a: 'Those came from Spotlight\'s 2020–2021 launch period, when Snap ran a reported $1 million-per-day bounty pool to jumpstart the format — a handful of creators earned five and six figures from single viral clips during that window. That structure is long gone; current monetization is a more standard, ongoing ad-revenue-share model.' },
  { q: 'What changed on May 7, 2026?', a: 'Snapchat tightened its qualification threshold, requiring creators to maintain at least 100 hours of Total Spotlight View Time over the trailing 28 days specifically to qualify for maximum Creator Rewards — a stricter bar than what was previously required.' },
  { q: 'Do I need 50,000 followers to earn anything on Snapchat?', a: 'That threshold applies specifically to invitation into the native Monetization Program. Brand partnerships and sponsored content don\'t require hitting that number — many brands work with smaller Snapchat creators directly, similar to how brand deals work on other platforms.' },
  { q: 'What\'s the minimum payout, and how do I get paid?', a: 'Payouts are managed in-app and can be triggered at the creator\'s convenience, with a commonly cited minimum cash-out threshold around $100.' },
  { q: 'Does meeting the eligibility criteria guarantee I\'ll be accepted into the program?', a: 'No — Snapchat has been explicit that meeting the published criteria makes an account eligible for consideration, not a guaranteed invitation. Snapchat controls the actual invitation process, and criteria, countries, and reward structures have changed multiple times, so treat any specific number as a snapshot to verify directly rather than a fixed guarantee.' },
]

export default function SnapchatSpotlightPage() {
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
            {['Snapchat', 'Data', 'Guide'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Snapchat Spotlight:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>What Actually Pays in 2026</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            The $1-million-a-day Spotlight jackpot stories are years old, and the standalone Spotlight Rewards Program that some of them describe shut down back in January 2025. Here's how Snapchat actually pays creators now — including a threshold that just got stricter in May 2026.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Snapchat Monetization</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'The original standalone Spotlight Rewards Program ended January 31, 2025, folded into a unified Monetization Program covering both Spotlight and Public Stories.',
                'Invitation typically requires roughly 50,000 followers, 15,000+ hours of view time over 28 days (3,000+ from Spotlight specifically), Snap Star status, and a compliant, advertiser-friendly account.',
                'As of May 7, 2026, creators must maintain at least 100 hours of Total Spotlight View Time in the trailing 28 days to qualify for maximum Creator Rewards — a further tightening of the bar.',
                'Payouts are managed in-app with a commonly cited $100 minimum cash-out threshold.',
                'Creator Subscriptions launched in limited alpha for select Snap Star creators in 2026, a genuinely new and distinct income stream from ad-revenue sharing.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Spotlight's History</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Spotlight launched in 2020–2021 with a reported $1 million-per-day bounty pool designed to jumpstart the format, producing widely publicized five- and six-figure single-clip payouts for a handful of early creators.',
                'That launch-era payout structure was always meant to be temporary — a promotional pool, not a permanent per-view rate.',
                'Meeting Snapchat\'s published eligibility criteria makes an account a candidate for consideration, not a guaranteed invitation — Snapchat controls the actual invitation decision.',
                'Snapchat explicitly prohibits brands from instructing creators to disable or obscure Paid Partnership labels, or to use vague disclosure language instead of clear "ad" or "sponsored" terms.',
                'Eligibility criteria, thresholds, and available countries have changed multiple times since Spotlight launched — treating any specific published number as a snapshot to verify, not a permanent rule, is the safest approach.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Current Monetization Program Eligibility</h2>
            <div className="card" style={{ padding: '24px 26px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {eligibility.map((row, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#FF6B2B', fontSize: 14, marginTop: 2 }}>☐</span>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{row.req}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Income streams */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Real Income Streams</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {incomeStreams.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.body}</div>
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
                { href: '/blog/x-creator-revenue-sharing-2026', title: 'X Creator Revenue Sharing Is Ending: What Creators Need to Know (2026)', tag: 'X / Twitter' },
                { href: '/blog/pinterest-creator-monetization-2026', title: 'How Pinterest Creators Actually Make Money in 2026', tag: 'Pinterest' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>👻</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Don't wait on an invitation to start earning.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a media kit, rate card, and creator CV — brand deals don't require a 50,000-follower Monetization Program invite to get started.
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
