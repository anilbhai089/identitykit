import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Discord Server Monetization for Creators: How Paid Communities Work (2026)',
  description: 'Discord pays creators 90% of Server Subscription revenue — but Apple\'s iOS fee quietly stacks on top, and Android has no in-app purchasing at all. Here\'s the real fee stack, eligibility rules, and how it compares to Patreon integration.',
  keywords: 'discord server monetization 2026, discord server subscriptions, how to monetize discord server, discord creator income, discord subscription fees, discord vs patreon',
  openGraph: {
    title: 'Discord Server Monetization for Creators: How Paid Communities Work (2026)',
    description: 'Discord pays creators 90% of Server Subscription revenue — but Apple\'s iOS fee stacks on top, and Android has no in-app purchasing at all. Here\'s the real fee stack.',
    url: 'https://identitykit.in/blog/discord-server-monetization-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/discord-server-monetization.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/discord-server-monetization-2026',
  },
}

const comparisonRows = [
  { label: 'Platform fee', native: '10% to Discord', patreon: '8–12% to Patreon, depending on plan' },
  { label: 'Payment processing', native: 'Handled via Stripe, built in', patreon: 'Handled via Patreon\'s own processor' },
  { label: 'Role assignment', native: 'Native — tiers map directly to server roles', patreon: 'Via Patreon\'s Discord bot integration, auto-assigned by tier' },
  { label: 'Audience requirement', native: 'Typically 1,000+ members for native eligibility', patreon: 'No Discord-side minimum — works for any size community' },
  { label: 'Discovery tools', native: 'Minimal — built for existing communities', patreon: 'Patreon offers broader discovery than native Discord tools' },
]

const eligibility = [
  { req: 'A server with a clear community focus, not just a group chat' },
  { req: 'Active moderation in place' },
  { req: 'Typically 1,000+ members — though highly engaged smaller servers have reportedly been granted access in some cases' },
  { req: 'Compliance with Discord\'s monetization and community guidelines' },
]

const faqs = [
  { q: 'How much of my Discord subscription revenue do I actually keep?', a: 'Discord takes a 10% platform fee on Server Subscriptions, paying out the rest via Stripe — but that\'s not the full picture. Subscriptions started inside the iOS app carry an additional roughly 30% cut that Apple takes on in-app purchases, which is why iOS subscribers typically see a higher checkout price to cover it.' },
  { q: 'Why is there no way to subscribe through the Discord Android app?', a: 'Discord doesn\'t offer in-app purchasing on Android at all — Android users are directed to subscribe through a browser instead. If your community skews mobile-heavy, this is worth understanding since it changes how your pricing and checkout flow actually plays out for different segments of your audience.' },
  { q: 'Do I need a certain number of members to enable Server Subscriptions?', a: 'Discord\'s stated criteria typically cite a minimum around 1,000 members, alongside a clear community focus and active moderation — though some reporting suggests Discord has granted access to smaller, highly engaged servers in individual cases. There\'s no guaranteed workaround below the general threshold.' },
  { q: 'Should I use native Server Subscriptions or Patreon integration?', a: 'Native subscriptions are simpler and keep everything inside Discord, with a lower headline platform fee. Patreon integration has no Discord-side member minimum and offers broader discovery tools, making it a common choice for creators still growing their community or who already have an audience on Patreon elsewhere.' },
  { q: 'What are Discord Server Products?', a: 'A newer feature for selling one-time digital downloads (like presets, templates, or files) directly through a Server Shop — as of 2026 it\'s described as being in beta and available to a select group of servers, so it\'s worth treating as a bonus feature rather than a core plan until it\'s more broadly available.' },
  { q: 'Is Discord actually a good place to build paid community income?', a: 'It genuinely can be — Discord is a community-first, conversation-driven environment rather than a passive content feed, and members who stick around tend to be highly engaged. The most commonly cited failure mode isn\'t the platform itself, but launching a subscription without a clear, promoted value proposition — a paid tier nobody can find or understand rarely converts.' },
]

export default function DiscordMonetizationPage() {
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
            {['Discord', 'Rate Card', 'Guide'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Discord Server<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Monetization, Explained</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Discord's headline fee is 10% — but the same subscription can cost your iOS members meaningfully more than your Android or browser members, because of a fee stack most creators don't find out about until they've already priced a tier. Here's the full picture.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Discord Monetization</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Discord\'s native Server Subscriptions pay creators 90% of revenue, keeping a 10% platform fee — paid out via Stripe.',
                'Subscriptions started inside the iOS app carry an additional roughly 30% Apple in-app purchase fee on top, typically reflected in a higher iOS checkout price.',
                'Android has no in-app purchasing at all for Discord subscriptions — Android users subscribe via browser instead.',
                'Native Server Subscriptions typically require around 1,000+ members, a clear community focus, and active moderation to enable.',
                'Patreon integration (via Discord\'s bot, auto-assigning roles by tier) is a common alternative with no Discord-side member minimum, at an 8–12% Patreon fee.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Discord Server Subscriptions</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Server owners can build 1–3 subscription tiers, commonly priced in a $2.99–$99.99/month range, each unlocking specific channels, roles, or up to 25 premium emoji.',
                'Free trials are supported per tier and default to a one-week length, automatically converting to paid unless the member cancels.',
                'Server Products — one-time digital downloads sold through a built-in Server Shop — were in beta and available to a select group of servers as of 2026, not yet a universal feature.',
                'Discord positions itself as a community-first, conversation-driven platform rather than a passive content feed, which several sources cite as a reason members are relatively comfortable paying for ongoing access when the value is clear.',
                'Third-party tools like Whop and Launchpass are also used by creators to gate Discord access outside Discord\'s own native subscription system.',
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
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Native Subscriptions vs. Patreon Integration</h2>
            <div className="card" style={{ padding: '18px 16px', overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr>
                    <th></th>
                    <th style={{ color: '#FF6B2B' }}>Native Server Subscriptions</th>
                    <th>Patreon Integration</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i}>
                      <td style={{ color: 'rgba(255,255,255,0.5)' }}>{row.label}</td>
                      <td style={{ color: 'rgba(255,255,255,0.65)' }}>{row.native}</td>
                      <td style={{ color: 'rgba(255,255,255,0.65)' }}>{row.patreon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Eligibility */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Eligibility for Native Server Subscriptions</h2>
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

          {/* The real fee stack */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Fee Stack Nobody Mentions First</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              "Discord takes 10%" is the number that gets quoted everywhere, and it's accurate as far as it goes — but it's not the whole story. A subscriber who signs up through the iOS app is subject to Apple's own in-app purchase fee on top of that, which is commonly cited around 30%. Discord's checkout price is typically adjusted higher on iOS specifically to account for this. Android, meanwhile, has no in-app purchasing at all for Discord subscriptions, so Android members are routed to a browser checkout instead — meaning your effective margin, and even your displayed price, can genuinely differ depending on which platform a given subscriber signs up from.
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
                { href: '/blog/newsletter-sponsorship-rates-2026', title: 'Newsletter Sponsorships: How Substack & Beehiiv Creators Get Paid (2026)', tag: 'Newsletter' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>💬</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              A paid community isn't your only income stream.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a media kit, rate card, and creator CV — so brands can find and pitch you directly, alongside whatever you're building on Discord.
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
