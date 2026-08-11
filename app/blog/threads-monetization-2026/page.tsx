import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Threads Monetization in 2026: What\'s Actually Live (and What Isn\'t)',
  description: 'No creator fund, no ad revenue share, no tipping — Threads still doesn\'t pay creators directly in 2026, even with 400M+ users and global ads. Here\'s what\'s real, what ended, and how creators are actually earning from Threads today.',
  keywords: 'threads monetization 2026, does threads pay creators, threads bonus program, how to make money on threads, threads ad revenue share, threads creator fund',
  openGraph: {
    title: 'Threads Monetization in 2026: What\'s Actually Live (and What Isn\'t)',
    description: 'No creator fund, no ad revenue share, no tipping — Threads still doesn\'t pay creators directly in 2026. Here\'s what\'s real and how creators are actually earning.',
    url: 'https://identitykit.in/blog/threads-monetization-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/threads-monetization.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/threads-monetization-2026',
  },
}

const notLive = [
  { item: 'A creator fund', body: 'Threads has never had an ongoing, open creator fund — the only direct payout program was the invite-only Bonus Program, which ended.' },
  { item: 'Platform-wide ad revenue sharing', body: 'Unlike X\'s Creator Revenue Sharing (available to eligible Premium subscribers), Threads has no equivalent program open to creators generally, despite ads now running globally on the platform.' },
  { item: 'Tipping or subscriptions', body: 'There\'s no native tipping feature or paid subscription option built into Threads for creators as of 2026.' },
]

const actuallyEarning = [
  { title: 'Brand partnerships', body: 'Sponsored posts remain the most direct way creators monetize Threads today — reported rates span a wide range, from smaller flat fees for niche creators up to much larger deals for established accounts.' },
  { title: 'Affiliate marketing', body: 'Linking out to affiliate products works on Threads the same way it does on any text-first platform — the key is genuine recommendation content, not link-dumping.' },
  { title: 'Driving traffic to owned channels', body: 'Many creators use Threads purely as a discovery and reach engine, funneling engaged followers toward an email list, Substack, YouTube channel, or product page where the actual monetization happens.' },
  { title: 'Cross-platform audience building', body: 'Given Threads\' current organic reach advantage as a newer, fast-growing platform, several creators are using it primarily to grow their following on more established, monetizable platforms like Instagram or YouTube.' },
]

const faqs = [
  { q: 'Does Threads pay creators for views or engagement?', a: 'No, not as of 2026. There\'s no public, ongoing program that pays creators directly for views, likes, or replies on Threads.' },
  { q: 'What happened to the Threads Bonus Program?', a: 'Meta ran an invite-only Bonus Program in 2024–2025 that paid selected US creators for hitting view thresholds on their posts. The program wound down around mid-2025 and stopped accepting new creators — it was a limited test, not an ongoing feature.' },
  { q: 'If Threads has ads now, why don\'t creators get a share?', a: 'Meta rolled out ads globally on Threads starting in January 2026, but ad revenue sharing with creators hasn\'t followed yet. This mirrors the pattern Meta followed on Facebook and Instagram historically — ad infrastructure and advertiser demand typically get built out first, with creator payout programs following later, sometimes years later.' },
  { q: 'Are those Threads earnings screenshots people share real?', a: 'Often, yes — but usually not from Threads paying them directly. They\'re commonly from the now-ended invite-only Bonus Program, or from creators showing revenue from their own product sales or brand deals that Threads helped drive traffic toward, not a direct platform payout.' },
  { q: 'Is it worth building a presence on Threads if it doesn\'t pay directly?', a: 'Many creators treat it as worthwhile specifically because of its current organic reach — newer, fast-growing platforms often reward early, consistent creators with more visibility than an already-saturated platform would. The tradeoff is that monetization currently has to happen off-platform.' },
  { q: 'Will Threads add direct creator monetization eventually?', a: 'Meta hasn\'t announced a confirmed timeline. Given the pattern on its other platforms and the scale Threads has reached, it\'s a reasonable expectation that some form of revenue sharing could arrive eventually — but nothing is confirmed, and estimates for when vary widely across industry commentary.' },
]

export default function ThreadsMonetizationPage() {
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
            {['Threads', 'Affiliate', 'Guide'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Threads Monetization:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>What's Actually Live</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Threads has 400+ million users and global ads as of 2026 — and still pays creators exactly $0 directly. That earnings screenshot you saw isn't lying, it's just not showing what you think it's showing. Here's what's real.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Threads Monetization</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Threads has no creator fund, no platform-wide ad revenue sharing, and no tipping or subscriptions as of 2026.',
                'Meta ran an invite-only Bonus Program in 2024–2025, paying selected US creators for hitting view thresholds — that program ended and stopped accepting new creators.',
                'Meta rolled out ads globally on Threads starting January 2026, but creator revenue sharing has not followed yet.',
                'Everything creators currently earn "from" Threads comes indirectly — brand deals, affiliate links, and traffic driven to owned channels like email lists or other platforms.',
                'This mirrors Meta\'s historical pattern on Facebook and Instagram, where ad infrastructure was built out well before creator payout programs arrived.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Threads' Creator Economy Status</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'The 2024–2025 Bonus Program reportedly paid some invited creators in the range of $500–$5,000 per month for hitting view targets before winding down.',
                'Threads surpassed 400 million monthly active users by 2026, making it one of the fastest-growing major social platforms in recent history.',
                'Threads launched in July 2023 and reached global ad rollout in January 2026 — a roughly two-and-a-half-year gap between launch and full ad monetization.',
                'On X (formerly Twitter), by comparison, eligible Premium subscribers with 500+ Premium followers and 5 million+ impressions in three months can access native ad revenue sharing — a program Threads currently has no direct equivalent to.',
                'Analyst estimates for Threads\' potential ad revenue by 2026 have ranged into the billions of dollars, which is frequently cited as a reason creator monetization could eventually follow — though no confirmed program or date has been announced.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not live */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What's NOT Live (Despite What You Might See)</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {notLive.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF6B6B' }}>✕ {row.item}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Actually earning */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>How Creators Are Actually Earning From Threads</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {actuallyEarning.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Meta's playbook */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Why This Follows a Familiar Pattern</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              Meta has followed roughly the same sequence with each of its platforms: build the user base, build out advertiser demand and ad infrastructure, and only later introduce creator payout programs once there's real revenue to share. Facebook and Instagram both followed this order, with creator bonuses and revenue-share tools arriving years after ads were already running at scale. Threads appears to be earlier in that same sequence — ads are live, but the "share the revenue with creators" step hasn't happened yet. That's useful context if you're deciding how much to invest in the platform right now versus treating it as a longer-term bet.
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
                { href: '/blog/pinterest-creator-monetization-2026', title: 'How Pinterest Creators Actually Make Money in 2026', tag: 'Pinterest' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🧵</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Turn Threads reach into real brand deals.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a media kit, rate card, and creator CV — so the audience you're building on Threads has somewhere to actually get you paid.
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
