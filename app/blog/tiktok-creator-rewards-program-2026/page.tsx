import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TikTok Creator Rewards Program: How Payouts Actually Work (2026)',
  description: 'TikTok doesn\'t just pay per view — it scores originality, watch time, engagement, and search value before a single video earns a cent. Here\'s the real eligibility checklist, RPM ranges, and what disqualifies a video entirely.',
  keywords: 'tiktok creator rewards program 2026, tiktok creator fund vs rewards, tiktok rpm 2026, tiktok creator rewards eligibility, how much does tiktok pay creators, tiktok monetization requirements',
  openGraph: {
    title: 'TikTok Creator Rewards Program: How Payouts Actually Work (2026)',
    description: 'TikTok doesn\'t just pay per view — it scores originality, watch time, engagement, and search value first. Here\'s the real eligibility checklist and RPM ranges.',
    url: 'https://identitykit.in/blog/tiktok-creator-rewards-program-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/tiktok-creator-rewards.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/tiktok-creator-rewards-program-2026',
  },
}

const eligibility = [
  { req: 'At least 10,000 followers' },
  { req: 'At least 100,000 video views in the trailing 30 days' },
  { req: '18 years or older (19 in South Korea)' },
  { req: 'Personal account, not a Business account' },
  { req: 'Located in an eligible country (currently including the US, UK, Germany, France, Japan, South Korea, Mexico, and Brazil, among others)' },
  { req: 'Posting original videos at least 60 seconds long' },
]

const rpmFactors = [
  { factor: 'Originality', body: 'How unique your content is relative to other videos on the platform — reposted, templated, or heavily duplicated content scores lower.' },
  { factor: 'Play duration', body: 'How long viewers actually watch before scrolling away — strong retention through a video meaningfully increases its RPM.' },
  { factor: 'Audience engagement', body: 'Comments, shares, saves, and other interactions factor directly into the payout calculation, not just the view count itself.' },
  { factor: 'Search value', body: 'Whether the video answers something people are actively searching for on TikTok — a newer factor reflecting TikTok\'s own growth as a search platform.' },
]

const ineligible = [
  'Videos under 60 seconds long',
  'Duets and Stitches',
  'Reposted or watermarked content from other platforms',
  'Static image slideshows',
  'QR-code or link-dump videos',
  'Content posted from a Business account instead of a Personal account',
]

const faqs = [
  { q: 'How is this different from the old TikTok Creator Fund?', a: 'The original Creator Fund paid a flat, extremely low rate — commonly cited around $0.02–$0.04 per 1,000 views — from a fixed pool split across all participating creators, meaning more creators joining meant less pay per person. Creator Rewards uses a performance-based RPM model instead, commonly reported in the $0.40–$1.20 range for qualifying content, roughly 10–20x higher for videos that actually qualify.' },
  { q: 'Why do my videos need to be over 60 seconds to earn anything?', a: 'TikTok has stated this reflects a push toward original, longer-form content that holds attention, aligning more closely with how ad-supported platforms like YouTube monetize. Shorter viral clips can still drive growth and brand deal opportunities — they simply don\'t qualify for direct Rewards payouts.' },
  { q: 'I have a Business account for analytics — does that disqualify me?', a: 'Yes, under current rules Creator Rewards requires a Personal account, not a Business account. Switching back is reversible, but the eligibility clock and view history may be affected depending on timing, so it\'s worth checking current requirements directly in the app before switching either way.' },
  { q: 'Why do I have millions of views but barely any Rewards earnings?', a: 'This is one of the most common points of confusion. Only "qualified views" on eligible content count — Duets, Stitches, reposts, sub-60-second clips, and slideshow-style videos are excluded entirely, regardless of how many views they rack up.' },
  { q: 'What\'s a realistic monthly payout from Creator Rewards alone?', a: 'Using a mid-range example: an account doing roughly 300,000 qualified views a month at a $0.60 RPM would earn in the ballpark of $180 for that month from the program alone. This scales with qualified views and RPM, but for most creators, direct platform payouts remain modest compared to brand deals or TikTok Shop affiliate income.' },
  { q: 'Does TikTok publish an official CPM or RPM rate?', a: 'No — TikTok has not published a fixed official rate. The ranges cited across creator reporting and industry sources are aggregated estimates from creator-reported earnings, not confirmed platform data, so treat any specific number as directional rather than guaranteed.' },
]

export default function TikTokCreatorRewardsPage() {
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
            {['TikTok', 'Data', 'Creator Economy'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            TikTok Creator Rewards:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>How Payouts Really Work</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A video can rack up 2 million views and pay out almost nothing — because TikTok isn't just counting views, it's scoring originality, watch time, engagement, and search value first. Here's what actually determines your payout.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — TikTok Creator Rewards</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Eligibility requires 10,000+ followers, 100,000+ views in the trailing 30 days, being 18+, a Personal (not Business) account, an eligible country, and posting original videos 60+ seconds long.',
                'RPM is commonly reported in the $0.40–$1.20 range per 1,000 qualified views — roughly 10–20x higher than the old Creator Fund\'s $0.02–$0.04.',
                'Payout is driven by four factors, not just view count: originality, play duration, audience engagement, and search value.',
                'Duets, Stitches, reposts, slideshows, QR-code videos, and anything under 60 seconds don\'t qualify for payouts, regardless of view count.',
                'TikTok hasn\'t published an official fixed rate — all RPM figures, including the ones in this article, are aggregated estimates from creator-reported data.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Creator Fund vs. Creator Rewards</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'The original Creator Fund (2020–2023) paid from a fixed pool split across all participants — more creators joining meant a smaller share for everyone, and it was widely criticized for paying just a few cents per 1,000 views.',
                'Creator Rewards replaced it starting in late 2023 (rolled out first in the US, UK, Germany, and France) with a performance-based RPM model instead of a shared pool.',
                'A video needs to clear at least 1,000 qualified For You feed views before it starts earning anything at all.',
                'The $50 minimum payout threshold applies before funds can be transferred out of your TikTok Balance to a bank account or PayPal.',
                'Finance, tech, and business content is frequently reported to earn toward the higher end of the RPM range, similar to patterns seen on other platforms.',
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
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Eligibility Checklist</h2>
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

          {/* RPM factors */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Four Factors That Set Your RPM</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {rpmFactors.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.factor}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* What doesn't qualify */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What Doesn't Qualify — Regardless of Views</h2>
            <div className="card" style={{ padding: '24px 26px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {ineligible.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#FF6B6B', fontSize: 14, marginTop: 2 }}>✕</span>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* The real math */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What This Actually Looks Like</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              A creator just past the eligibility threshold, generating around 300,000 qualified views a month at a $0.60 RPM, would earn roughly $180 that month from Creator Rewards alone. That's a real number, but for most creators it's meaningfully smaller than brand deal or TikTok Shop affiliate income — Creator Rewards is worth understanding and optimizing for, but it's rarely the primary income stream for creators actively growing a business around their content.
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
                { href: '/blog/youtube-rpm-by-country-2026', title: 'YouTube RPM by Country 2026: Where Creators Earn the Most', tag: 'Data' },
                { href: '/blog/how-to-calculate-influencer-rate', title: 'How to Calculate Your Influencer Rate: A Step-by-Step Formula', tag: 'Calculator' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🎵</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Platform payouts are a start, not the ceiling.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a media kit, rate card, and creator CV — and start pitching brand deals that pay far more than any per-view program.
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
