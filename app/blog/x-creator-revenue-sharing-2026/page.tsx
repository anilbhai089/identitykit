import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'X Creator Revenue Sharing Is Ending: What Creators Need to Know (2026)',
  description: 'X\'s Creator Revenue Sharing program pays its final round in September 2026, replaced by a new application-based Original Content Rewards Program. Here\'s exactly what\'s ending, what\'s known about what\'s next, and what it means for your posting strategy.',
  keywords: 'x creator revenue sharing ending 2026, twitter creator monetization 2026, x original content rewards program, x ads revenue sharing eligibility, how does x pay creators, x premium creator earnings',
  openGraph: {
    title: 'X Creator Revenue Sharing Is Ending: What Creators Need to Know (2026)',
    description: 'X\'s Creator Revenue Sharing program pays its final round in September 2026, replaced by a new application-based Original Content Rewards Program. Here\'s what\'s changing.',
    url: 'https://identitykit.in/blog/x-creator-revenue-sharing-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/x-creator-revenue-sharing.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/x-creator-revenue-sharing-2026',
  },
}

const timeline = [
  { when: 'Through September 7, 2026', what: 'Creators currently enrolled in Revenue Sharing continue earning as normal under the existing program.' },
  { when: 'August 14 & 28, 2026', what: 'Two standard scheduled payouts go out on X\'s normal bi-weekly cycle.' },
  { when: 'On or around September 11, 2026', what: 'A final payout covers earnings accrued through September 7 — the last payout under the current program structure.' },
  { when: 'Starting September 8, 2026', what: 'X begins rolling out access for existing Revenue Sharing members to apply for the new Original Content Rewards Program.' },
]

const currentEligibility = [
  { req: 'An active X Premium, Premium+, Premium Business, or Premium Organizations subscription' },
  { req: 'At least 500 verified followers' },
  { req: 'Roughly 5 million post impressions in the trailing 3 months' },
  { req: '18 years or older, with a verified email and two-factor authentication enabled' },
]

const faqs = [
  { q: 'Is X Creator Revenue Sharing actually shutting down?', a: 'The current program is winding down, per X\'s own Help Center, with final payouts running through September 7, 2026. It\'s being replaced — not simply eliminated — by a new application-based Original Content Rewards Program that current Revenue Sharing members can begin applying for starting September 8, 2026.' },
  { q: 'Do I need to do anything if I\'m currently enrolled in Revenue Sharing?', a: 'X states you\'ll continue earning normally through the transition and will receive your final scheduled payouts automatically. To move into the new program, X indicates you\'ll need to actively apply once access rolls out — check Creator Studio → Original Content Rewards for your specific eligibility status when it becomes available to you.' },
  { q: 'What counted toward Revenue Sharing earnings under the current program?', a: 'Since an October 2024 shift, only engagement from X Premium subscribers counts — general public impressions from non-Premium users don\'t contribute to payout, and engagement from higher-tier Premium+ subscribers has reportedly been weighted more heavily than Basic Premium engagement.' },
  { q: 'How much did creators typically earn under the current program?', a: 'Reported figures vary meaningfully across sources, generally citing somewhere in the range of $8–$12 per million verified Premium impressions, with payouts processed via Stripe once a minimum balance (commonly cited around $10–$30, depending on the source) is reached.' },
  { q: 'What do we actually know about the new Original Content Rewards Program?', a: 'Not much has been published in detail yet. X has confirmed it\'s application-based, opens to existing Revenue Sharing members starting September 8, 2026, and has its own eligibility requirements — but specific criteria and payout mechanics haven\'t been broadly detailed as of this writing. Check X\'s official Help Center directly for the most current information as it rolls out.' },
  { q: 'Should I change my content strategy because of this transition?', a: 'It\'s a reasonable moment to reduce reliance on any single platform\'s revenue-sharing program specifically. This is X\'s second major shift to creator monetization mechanics in under two years — a reminder that platform-dependent income can change on short notice, which is exactly why many creators treat brand deals and owned audience channels as the more stable core of their income.' },
]

export default function XCreatorRevenueSharingPage() {
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
            {['X / Twitter', 'Trends', 'Data'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            X Creator Revenue Sharing<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Is Ending — Here's What's Next</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            If you're enrolled in X's Creator Revenue Sharing program, your final payouts are already on the calendar. X confirmed the program winds down September 7, 2026, replaced by a new application-based program most of the internet hasn't caught up on yet.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — X Revenue Sharing Transition</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'X\'s current Creator Revenue Sharing program pays its final round for earnings accrued through September 7, 2026, per X\'s own Help Center.',
                'It\'s being replaced, not simply cut — a new, application-based "Original Content Rewards Program" opens to existing members starting September 8, 2026.',
                'Current eligibility requires an active X Premium subscription, 500+ verified followers, and roughly 5 million impressions in the trailing 3 months.',
                'Since October 2024, only engagement from Premium subscribers has counted toward payouts — general public impressions don\'t contribute.',
                'Full eligibility details for the new program haven\'t been broadly published yet — check Creator Studio → Original Content Rewards directly for your status once it rolls out.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — The Program's History</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'X launched Creator Revenue Sharing in July 2023, originally based on ad impressions shown within reply threads under a creator\'s posts.',
                'A major October 2024 update shifted the payout basis away from raw ad impressions toward engagement specifically from verified and Premium subscribers.',
                'Reported payout rates commonly cite a range around $8–$12 per million verified Premium impressions, though X has not published a fixed official rate.',
                'As of March 3, 2026, X\'s creator monetization policy specifically addresses AI-generated content depicting armed conflict — posts lacking a required AI-disclosure can trigger a 90-day suspension from Revenue Sharing, with repeat violations resulting in permanent suspension.',
                'This marks the second major structural change to X\'s creator monetization approach in under two years, following the 2024 shift to Premium-engagement-based payouts.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Transition Timeline</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {timeline.map((row, i) => (
                <div key={i} className="card" style={{ padding: '20px 24px', display: 'flex', gap: 18 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: 'rgba(255,107,43,0.6)', minWidth: 170 }}>{row.when}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.what}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Current eligibility (for context) */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>How the Outgoing Program Worked</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24, fontSize: 15 }}>
              Useful context even as it winds down, since the same fundamentals — Premium status, verified audience, meaningful reach — will likely carry over conceptually into whatever comes next.
            </p>
            <div className="card" style={{ padding: '24px 26px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {currentEligibility.map((row, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#FF6B2B', fontSize: 14, marginTop: 2 }}>☐</span>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{row.req}</span>
                  </div>
                ))}
              </div>
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
                { href: '/blog/threads-monetization-2026', title: 'Threads Monetization in 2026: What\'s Actually Live (and What Isn\'t)', tag: 'Threads' },
                { href: '/blog/tiktok-creator-rewards-program-2026', title: 'TikTok Creator Rewards Program: How Payouts Actually Work (2026)', tag: 'TikTok' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🐦</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Platform programs change. Your profile shouldn't have to.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a media kit, rate card, and creator CV — an income foundation that doesn't disappear when a platform changes its rules.
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
