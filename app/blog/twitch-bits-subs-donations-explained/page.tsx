import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Twitch Bits vs. Subscriptions vs. Donations: How Each Actually Pays (2026)',
  description: 'Three completely different economics: Bits pay a fixed $0.01 with Twitch\'s cut taken at purchase, subscriptions split 50/50 (or better), and third-party donations carry no Twitch cut at all. Here\'s exactly how each mechanism works.',
  keywords: 'twitch bits vs subscriptions vs donations, twitch bits payout rate 2026, twitch subscription split, how much do twitch bits pay, twitch donations vs bits, twitch streamer income breakdown',
  openGraph: {
    title: 'Twitch Bits vs. Subscriptions vs. Donations: How Each Actually Pays (2026)',
    description: 'Three completely different economics: Bits pay a fixed $0.01 with Twitch\'s cut taken at purchase, subscriptions split 50/50, and donations carry no Twitch cut at all.',
    url: 'https://identitykit.in/blog/twitch-bits-subs-donations-explained',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/twitch-bits-subs-donations.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/twitch-bits-subs-donations-explained',
  },
}

const mechanisms = [
  { label: 'Creator payout', bits: '$0.01 per Bit, fixed', subs: '50% standard (up to 70% for eligible legacy/Plus creators)', donations: '~100%, minus standard payment processor fees only' },
  { label: 'Where Twitch\'s cut is taken', bits: 'At purchase — viewer pays more per Bit than the $0.01 streamer rate', subs: 'From the subscription price directly', donations: 'Nowhere — Twitch takes no cut of third-party donations' },
  { label: 'Type of payment', bits: 'One-time micro-payment', subs: 'Recurring monthly', donations: 'One-time, viewer-initiated amount' },
  { label: 'Reversibility', bits: 'Cannot be refunded or charged back once cheered', subs: 'Standard subscription cancellation/refund rules apply', donations: 'Depends on the third-party processor\'s own policies' },
]

const faqs = [
  { q: 'Why do viewers pay more for Bits than streamers actually receive?', a: 'Twitch takes its cut at the point of purchase, not from the streamer\'s payout — a streamer always earns exactly $0.01 per Bit regardless of how much the viewer paid for the bundle. The gap between what a viewer pays and what a creator receives covers Twitch\'s payment processing and platform costs.' },
  { q: 'Has the Bits payout rate ever changed?', a: 'No — the $0.01-per-Bit rate has remained unchanged since Bits launched in 2016, making it one of the most stable, longest-running payout rates in the entire creator economy.' },
  { q: 'Why were Bits created in the first place?', a: 'Bits were introduced as an in-platform alternative to PayPal donations, specifically to solve the chargeback problem — PayPal donations could be reversed by the payer after the fact, but Bits, once cheered, cannot be refunded or charged back, making them a more reliable form of support for streamers.' },
  { q: 'Why does Twitch take no cut of third-party donations?', a: 'Because those donations never pass through Twitch\'s own payment system — tools like PayPal, Streamlabs, or Ko-fi process the transaction directly between viewer and streamer. Twitch has no platform relationship to the transaction, so there\'s nothing for Twitch to take a percentage of. The only deduction is whatever the payment processor itself charges.' },
  { q: 'Which of the three should I encourage viewers to use?', a: 'Each serves a different purpose rather than competing directly — subscriptions build predictable, recurring income and unlock loyalty perks like emotes; Bits are a low-friction way for viewers to show support in the moment without leaving the stream; donations tend to work best for larger one-time gestures of support, especially from viewers who prefer not to create a recurring subscription.' },
  { q: 'Does the subscription split ever change?', a: 'Yes — Twitch standardized most Partner subscription splits to 50/50 in 2023, though creators who had older grandfathered agreements at 70/30 in some cases retained them, and Twitch\'s Partner Plus program can restore up to 70% for eligible creators hitting certain milestones.' },
]

export default function TwitchBitsSubsDonationsPage() {
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
            {['Streaming', 'Data', 'Guide'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Bits vs. Subs vs. Donations:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Three Different Economics</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            One of these three ways viewers support you carries a zero percent Twitch cut. One has a fixed rate that hasn't changed in nine years. One splits with Twitch before it even reaches you. Here's exactly how each actually works.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Bits, Subs & Donations</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Bits pay a fixed $0.01 per Bit to creators, unchanged since launching in 2016 — Twitch\'s cut is taken at the point the viewer purchases Bits, not from the payout.',
                'Subscriptions split 50/50 for standard Affiliates and most Partners, with some legacy and Partner Plus creators eligible for up to 70%.',
                'Third-party donations (PayPal, Streamlabs, Ko-fi) carry no Twitch cut at all — the only deduction is the payment processor\'s own standard fee.',
                'Bits cannot be refunded or charged back once cheered — they were specifically designed to solve the chargeback problem that affected PayPal donations.',
                'Each mechanism serves a different purpose: subscriptions build recurring income, Bits offer low-friction in-the-moment support, and donations work well for larger one-time gestures.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — How Each Mechanism Emerged</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Bits were introduced in 2016 as part of a broader strategy to keep viewer support inside Twitch\'s own platform rather than routing through external tools like PayPal.',
                'Twitch standardized most Partner subscription splits to 50/50 in 2023, phasing out the older default 70/30 arrangement for many creators, though some legacy agreements were grandfathered in.',
                'Cheering with Bits requires Twitch Affiliate or Partner status — viewers can still support pre-Affiliate streamers through third-party donation tools in the meantime.',
                'For small streamers, third-party donations are commonly reported in the range of $50–$500 per month, functioning as a meaningful supplementary income stream rather than a primary one for most.',
                'On the US web store, buying Bits carries a real markup over the $0.01-per-Bit creator rate — in-app purchases on iOS and Android cost roughly 30% more than web prices due to standard app store fees.',
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
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Side by Side</h2>
            <div className="card" style={{ padding: '18px 16px', overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr>
                    <th></th>
                    <th style={{ color: '#FF6B2B' }}>Bits</th>
                    <th>Subscriptions</th>
                    <th>Donations</th>
                  </tr>
                </thead>
                <tbody>
                  {mechanisms.map((row, i) => (
                    <tr key={i}>
                      <td style={{ color: 'rgba(255,255,255,0.5)' }}>{row.label}</td>
                      <td style={{ color: 'rgba(255,255,255,0.65)' }}>{row.bits}</td>
                      <td style={{ color: 'rgba(255,255,255,0.65)' }}>{row.subs}</td>
                      <td style={{ color: 'rgba(255,255,255,0.65)' }}>{row.donations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Bits deep dive */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Bits: The Chargeback-Proof Currency</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              A viewer buying 100 Bits pays roughly $1.40 on the US web store — but the streamer still receives exactly $1.00 (100 Bits × $0.01). That gap isn't a mystery fee buried somewhere; it's simply where Twitch takes its cut, at the moment of purchase rather than out of the creator's payout. The upside for creators: once a Bit is cheered, it can't be reversed or charged back, unlike a PayPal donation a viewer could later dispute — which is exactly the problem Bits were built to solve when they launched in 2016.
            </p>
          </section>

          {/* Donations deep dive */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Donations: Twitch's Only Zero-Cut Income Stream</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              Third-party donation tools — PayPal, Streamlabs, Ko-fi — never touch Twitch's own payment infrastructure, so Twitch has no basis to take a percentage. The tradeoff is that these donations lose the chargeback protection Bits offer, and depend on whatever policies the specific processor has in place. For streamers below Affiliate status who can't yet enable Bits or subscriptions, donations are often the only native-adjacent way for an audience to directly support them.
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
                { href: '/blog/kick-vs-twitch-monetization-2026', title: 'Kick vs. Twitch Monetization 2026: Is the 95/5 Split Worth It?', tag: 'Kick' },
                { href: '/blog/twitch-streamer-media-kit-sponsorships', title: 'How Streamers Can Build a Media Kit for Sponsorships (2026)', tag: 'Streaming' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>💜</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Fan support is great. Brand deals scale further.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a media kit, rate card, and creator CV — so sponsors can find and pitch you directly, alongside your Bits, subs, and donations.
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
