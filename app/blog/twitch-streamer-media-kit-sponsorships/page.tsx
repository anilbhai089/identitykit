import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Streamers Can Build a Media Kit for Sponsorships (2026)',
  description: 'Live streaming is priced on concurrent viewers, not followers. Here\'s what actually belongs in a Twitch or livestream media kit, which metrics brands check first, and how sponsorship activations work on stream.',
  keywords: 'twitch media kit, streamer media kit, twitch sponsorship guide, how to get sponsored on twitch, twitch cpm rates, streamer brand deal metrics, concurrent viewers sponsorship',
  openGraph: {
    title: 'How Streamers Can Build a Media Kit for Sponsorships (2026)',
    description: 'Live streaming is priced on concurrent viewers, not followers. Here\'s what actually belongs in a Twitch or livestream media kit, and how sponsorship activations work on stream.',
    url: 'https://identitykit.in/blog/twitch-streamer-media-kit-sponsorships',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/twitch-streamer-media-kit.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/twitch-streamer-media-kit-sponsorships',
  },
}

const metrics = [
  { name: 'Average CCV (Concurrent Viewers)', why: 'The single most-watched number for live sponsorship pricing — it measures how many people are watching at once, which is what a sponsor is actually buying exposure to. It matters more than follower count because followers don\'t guarantee anyone shows up live.' },
  { name: 'Peak concurrent viewers', why: 'Shows your ceiling — useful context alongside the average, especially for brands considering a live activation timed to a specific moment (a launch, a giveaway, a big game release).' },
  { name: 'Hours watched / total watch time', why: 'A broader measure of total exposure across a stream or campaign period, useful for brands thinking about cumulative reach rather than a single session.' },
  { name: 'Chat engagement rate', why: 'On a livestream, an active, responsive chat is a far stronger signal than viewer count alone — 50 engaged viewers who click a link outperform 500 silent lurkers, and brands increasingly know this.' },
  { name: 'Subscriber and follower count', why: 'Still relevant as a baseline size indicator and for cross-referencing against CCV — a healthy CCV-to-follower ratio signals a genuinely engaged, not just large, audience.' },
  { name: 'Cross-platform presence', why: 'Most streamers also post clips or VODs to YouTube, TikTok, or Instagram — brands frequently want to know your total reach across platforms, not just live viewership.' },
]

const kitSections = [
  { title: 'Channel snapshot', body: 'Your niche/category (gaming, Just Chatting, IRL, music, creative), streaming schedule, and platform(s) you stream on.' },
  { title: 'Core metrics', body: 'Average CCV, peak CCV, follower/subscriber count, and chat engagement — presented clearly, not buried in a linked analytics dashboard.' },
  { title: 'Audience demographics', body: 'Age range, gender split, top geographic markets, and relevant interest data if available through your platform\'s creator dashboard.' },
  { title: 'Past sponsorships', body: 'Brands you\'ve worked with and, if possible, a concrete result (clicks, sign-ups, sales driven by a promo code) — this is strong proof for a next brand considering a similar activation.' },
  { title: 'Available activation types', body: 'What you can actually offer: on-stream product placement, dedicated segments, giveaways, overlay/panel branding, chat bot commands, or social cross-promotion — spelling this out helps brands picture the partnership concretely.' },
  { title: 'Rates or a clear contact path', body: 'Either your actual sponsorship rates or a direct way to request them — the same rule that applies to any creator media kit.' },
]

const faqs = [
  { q: 'Why do Twitch sponsorships get priced on CCV instead of followers?', a: 'Because followers only measure who has clicked "follow" at some point, not who\'s actually watching a given stream. Average concurrent viewers reflects real, live exposure — which is what a sponsor is paying for during an activation.' },
  { q: 'What\'s the difference between endemic and non-endemic brands for streamers?', a: 'Endemic brands sell products directly related to gaming and streaming culture — peripherals, energy drinks, gaming chairs. Non-endemic brands are outside that category but still want to reach your audience — apparel, fintech, food delivery. Endemic brands have historically dominated Twitch sponsorship, though non-endemic spend has grown as the platform\'s content categories have broadened.' },
  { q: 'How do sponsorship activations actually happen during a live stream?', a: 'Common formats include a verbal mention plus a chat command (e.g. typing "!brand" triggers a bot like Nightbot or StreamElements to post a link), dedicated on-stream segments, overlay or panel branding, and giveaways run through the sponsor\'s product. Multiple formats are often combined in one deal.' },
  { q: 'Do I need a huge audience to get sponsored as a streamer?', a: 'No — many sponsors, including smaller and mid-size brands, work with streamers who have modest but genuinely engaged communities, particularly within a specific niche. A strong CCV-to-follower ratio and an active chat can matter more than raw scale.' },
  { q: 'Should my media kit include stats from other platforms besides Twitch?', a: 'Yes — if you post clips, highlights, or VODs to YouTube, TikTok, or Instagram, that cross-platform reach is genuinely relevant to a brand evaluating total exposure, not just live viewership.' },
  { q: 'How often should I update my streaming media kit?', a: 'At minimum whenever your CCV or follower count shifts meaningfully — live stats move faster than typical social media metrics, so a kit that goes stale for months can noticeably undersell your current standing.' },
]

export default function TwitchMediaKitPage() {
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
            {['Media Kit', 'Streaming', 'Brand Deals'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Building a Media Kit<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>as a Livestreamer</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Most media kit advice assumes static content — a post goes up, a follower sees it, done. Live streaming doesn't work that way, and neither should your media kit. Here's what brands actually check first when evaluating a streamer, and how to present it.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Streamer Media Kits</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Streaming sponsorships are priced primarily on Average CCV (concurrent viewers), not follower count, because CCV reflects real live exposure.',
                'Chat engagement is a distinct, heavily weighted signal on live platforms — an active chat outperforms a large but passive audience.',
                'Endemic brands (gaming/streaming-adjacent products) have historically dominated Twitch sponsorship, though non-endemic brand spend has grown as content categories diversified beyond gaming.',
                'A streaming media kit should list available activation types explicitly — on-stream placement, dedicated segments, giveaways, overlay branding, chat bot commands — not just stats.',
                'Cross-platform reach (YouTube clips, TikTok highlights) is worth including alongside live-platform metrics for a fuller picture.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Streaming Sponsorship</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Twitch launched as a gaming-focused livestream platform, and gaming remains a dominant category by viewer hours — but categories like Just Chatting, IRL, music, and creative have grown into a meaningful share of overall viewership.',
                'A common on-stream sponsorship mechanism pairs a verbal mention with a chat bot command (via tools like Nightbot or StreamElements) that posts a tracked link directly in chat.',
                'Highly targeted niche audiences with documented purchasing behavior can command meaningful rate premiums from endemic brands compared to a similarly sized general audience.',
                'Brand evaluation of streamers considers niche and content-brand fit alongside raw metrics — audience match and content compatibility are explicitly part of how sponsors filter potential partners.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Metrics That Actually Matter</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24, fontSize: 15 }}>
              A media kit built around follower count alone is fighting the wrong battle — here's what a brand evaluating a live sponsorship is really looking at.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {metrics.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.why}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Kit sections */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What to Include in Your Kit</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {kitSections.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{i + 1}. {row.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Endemic vs non-endemic */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Endemic vs. Non-Endemic Brands</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
              <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Endemic brands</strong> sell products directly tied to gaming and streaming — peripherals, gaming chairs, energy drinks. They've historically been the biggest spenders in live streaming sponsorship, and they typically understand streaming culture already, which makes pitching them more straightforward.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Non-endemic brands</strong> — apparel, food delivery, fintech, and others outside gaming — have increasingly entered the space as streaming platforms diversified beyond gaming content. These brands often need more education on how a live activation actually works, which is exactly where a clear, well-structured media kit does the most work for you.
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
                { href: '/blog/how-to-make-a-media-kit', title: 'How to Make a Media Kit as a Creator (Free Guide, 2026)', tag: 'Media Kit' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🎮</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Give sponsors one link, not a scattered pitch.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with your media kit, rate card, and creator CV — one shareable link that presents your channel professionally to every sponsor you pitch.
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
