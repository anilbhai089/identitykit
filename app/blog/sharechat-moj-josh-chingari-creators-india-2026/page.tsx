import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ShareChat, Moj, Josh & Chingari: India\'s Regional Platforms for Creators (2026)',
  description: 'A creator-side guide to India\'s homegrown short-video platforms — how ShareChat, Moj, Josh, and Chingari actually pay creators, why Tier 2/3 vernacular content thrives here, and how to use these platforms alongside Instagram and YouTube rather than instead of them.',
  keywords: 'sharechat moj josh creator income india, chingari monetization india creators, regional platforms indian creators 2026, tier 2 tier 3 creator platforms india, vernacular short video apps creator income',
  openGraph: {
    title: 'ShareChat, Moj, Josh & Chingari: India\'s Regional Platforms for Creators (2026)',
    description: 'Nearly 70% of users on ShareChat, Moj, and Josh are from small towns — a genuinely underserved creator opportunity most metro-focused creators overlook entirely.',
    url: 'https://identitykit.in/blog/sharechat-moj-josh-chingari-creators-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/regional-platforms-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/sharechat-moj-josh-chingari-creators-india-2026',
  },
}

const platforms = [
  { name: 'ShareChat', users: '350M+ users', focus: 'Text, image, and short-video community platform built around regional languages and dialects', monetization: 'Virtual gifting/coins from viewers, plus brand partnership dashboards for larger creators' },
  { name: 'Moj', users: '160M+ users', focus: 'Short-video app (ShareChat\'s sister platform) — dance, comedy, lifestyle, fashion in Indian languages', monetization: 'Moj For Creators program supporting 50M+ creators, plus in-app monetization tools' },
  { name: 'Josh', users: '150M+ users', focus: 'Short-video entertainment from Dailyhunt, strong in beauty, fashion, and quick-tip content', monetization: 'Creator monetization opportunities plus brand partnerships facilitated through the platform' },
  { name: 'Chingari', users: 'Tens of millions of users', focus: 'Music-led trends and short video with a blockchain/token-based rewards layer', monetization: 'GARI tokens earned from engagement — convert to INR through the platform to avoid holding volatile crypto' },
]

const whyItMatters = [
  { icon: '🏘️', title: 'A genuinely underserved Tier 2/3 audience', detail: 'Roughly 70% of users on ShareChat, Moj, and Josh are from small towns, spending 45-60 minutes daily on these apps — a huge, engaged audience most metro-focused Instagram creators never reach.' },
  { icon: '🗣️', title: 'Regional language content has a real home here', detail: 'Content in Hindi, Tamil, Telugu, Kannada, Malayalam, Bhojpuri, Marathi, Bengali, and more genuinely thrives, with far less competition than English or Hindi-only content on Instagram.' },
  { icon: '💰', title: 'Even nano creators can monetize', detail: 'Unlike Instagram\'s effective threshold for brand deals, creators with as few as 5,000-10,000 followers can start earning through virtual gifting and platform monetization programs on these apps.' },
  { icon: '⚠️', title: 'Weaker measurement and brand trust, for now', detail: 'Advertisers and agencies have flagged that attribution and analytics on these platforms are less mature than Meta or Google — a real limitation worth knowing about if you\'re pitching brands specifically for regional platform deals.' },
]

const realisticIncome = [
  { tier: 'Growing regional creator', range: '₹10,000-50,000/month', note: 'Achievable through consistent posting, virtual gifting from an engaged local audience, and smaller regional brand deals.' },
  { tier: 'Established regional creator', range: '₹50,000-3,00,000+/month', note: 'Combines platform monetization, virtual gifting, and brand partnerships — increasingly including national brands specifically seeking Tier 2/3 or regional-language reach.' },
]

export default function RegionalPlatformsIndiaPage() {
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
            {['Regional Platforms', 'Vernacular Creators', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            ShareChat, Moj, Josh & Chingari:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>India's Regional Creator Platforms</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Nearly 70% of users on ShareChat, Moj, and Josh are from small towns — a genuinely underserved audience most Instagram-first creators never think about. Here's how these homegrown platforms actually pay creators, and how to use them alongside your existing channels.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Regional Platforms for Indian Creators</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'ShareChat (350M+ users), Moj (160M+), and Josh (150M+) are India\'s largest homegrown short-video and community platforms, built specifically around regional languages',
                'Roughly 70% of users on these platforms are from small towns, spending 45-60 minutes daily — a genuinely underserved audience for metro-focused creators',
                'Monetization primarily comes through virtual gifting/coins from viewers, in-app creator programs, and regional brand partnerships',
                'Even creators with 5,000-10,000 followers can start earning here, a much lower threshold than typical Instagram brand-deal minimums',
                'Chingari uses a token-based (GARI) rewards system — convert tokens to INR through the platform rather than holding them as volatile crypto',
                'Analytics and brand attribution on these platforms are less mature than Meta or Google — a real limitation to know about before pitching brands specifically for regional platform deals',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Regional Platforms in India</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'ShareChat supports content across 15+ Indian languages and commands roughly 35% of the Indian regional social media market, reaching 400-450 million monthly active users across vernacular segments.',
                'Nearly 70% of users on platforms like ShareChat, Moj, and Josh come from Tier 2, Tier 3, and rural areas, spending an average of 45-60 minutes daily on these apps.',
                'ShareChat\'s Moj For Creators program supports over 50 million creators, reflecting the sheer scale of the regional creator ecosystem in India.',
                'Creators on regional platforms have been reported earning anywhere from ₹10,000 to ₹3 lakh or more per month, depending on consistency, audience size, and brand partnership activity.',
                'Industry voices have noted that attribution and audience-quality measurement on regional platforms remain weaker than on Meta or Google properties, meaning brands and creators alike should treat performance data on these apps with some caution.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Platform breakdown */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>The 4 Platforms, at a Glance</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {platforms.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                    <div style={{ fontWeight: 800, fontSize: 16, color: '#FF6B2B' }}>{item.name}</div>
                    <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '3px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{item.users}</span>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, marginBottom: 8, lineHeight: 1.6 }}>{item.focus}</div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.6 }}><span style={{ fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>Monetization: </span>{item.monetization}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Why it matters */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Why These Platforms Are Worth Your Time</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {whyItMatters.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>One profile for every platform you're on</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>List your Instagram, YouTube, and regional platform stats together in a free Identity Kit profile — brands get the full picture of your reach across Bharat, not just the metros.</p>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build My Free Profile →
            </Link>
          </div>

          {/* Realistic income */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Realistic Income on Regional Platforms</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {realisticIncome.map((row, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{row.tier}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, lineHeight: 1.5 }}>{row.note}</div>
                  </div>
                  <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '4px 12px', borderRadius: 100, fontWeight: 700, fontSize: 13, flexShrink: 0, whiteSpace: 'nowrap' }}>{row.range}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16 }}>
              <Link href="/blog/vernacular-content-creator-india-2026" style={{ color: '#FF6B2B', fontSize: 14, fontWeight: 700 }}>Read: How to Become a Vernacular/Regional Language Content Creator →</Link>
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'Should I use ShareChat, Moj, or Josh instead of Instagram?', a: 'Alongside, not instead of. Instagram remains the platform where brands most easily find and evaluate creators today, but ShareChat, Moj, and Josh reach a genuinely different, underserved Tier 2/3 audience. Many successful regional creators run both, using Instagram for broader brand visibility and regional platforms for a deeply engaged local audience.' },
                { q: 'How do I actually get paid on these platforms?', a: 'Primarily through virtual gifting or coins from viewers (which you can convert to real money), in-app creator monetization programs, and brand partnerships — either arranged directly or through the platform\'s own dashboard for larger creators. Payment mechanics vary by platform, so check each app\'s current creator program terms directly.' },
                { q: 'Is Chingari\'s token system risky?', a: 'The GARI token itself carries the volatility any crypto asset does, but the practical approach most creators take is converting tokens to INR promptly through the platform rather than holding them speculatively — treating it as a payment mechanism rather than an investment.' },
                { q: 'Do I need a huge following to earn on regional platforms?', a: 'No — creators with as few as 5,000-10,000 followers can start earning through virtual gifting and platform monetization, a meaningfully lower threshold than what most Instagram brand deals require.' },
                { q: 'Can I get brand deals through ShareChat, Moj, or Josh specifically?', a: 'Yes, and increasingly so — brands seeking regional or Tier 2/3 reach specifically look for creators active on these platforms. That said, be aware that analytics and audience-quality measurement here are less mature than on Meta or Google properties, so bring your own engagement screenshots and be ready to answer more questions about your audience than an Instagram-only creator might face.' },
                { q: 'Which regional language has the least competition right now?', a: 'This varies and shifts over time, but content in languages beyond the most common (Hindi, Tamil, Telugu) — such as Bhojpuri, Marathi, Bengali, Kannada, and Malayalam — often faces less saturation while still reaching large, engaged audiences on these platforms.' },
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
                { href: '/blog/vernacular-content-creator-india-2026', title: 'How to Become a Vernacular/Regional Language Creator', tag: 'Vernacular Creators' },
                { href: '/blog/instagram-threads-creators-india-2026', title: 'Instagram Threads for Indian Creators', tag: 'Threads' },
                { href: '/blog/how-to-start-podcast-india-creator-2026', title: 'How to Start a Podcast in India as a Content Creator', tag: 'Podcasting' },
                { href: '/blog/how-to-make-money-content-creator-india-2026', title: 'How to Make Money as a Content Creator in India', tag: 'Creator Income' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🇮🇳</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Reach Bharat. Show it in one profile.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile that showcases your reach across every platform — metro and regional alike.
            </p>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
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
          <Link href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Tools</Link>
          <Link href="/auth" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Get Started</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
