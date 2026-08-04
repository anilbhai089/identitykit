import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Podcast Sponsorship Rates: Pre-Roll, Mid-Roll & Post-Roll Explained (2026)',
  description: 'Podcast ads are priced on CPM per 1,000 downloads — and where the ad sits in the episode changes the price as much as your download count does. A full breakdown of 2026 podcast sponsorship pricing.',
  keywords: 'podcast sponsorship rates 2026, podcast cpm rates, mid-roll ad pricing, how much do podcast ads cost, podcast advertising rates by download, host-read ad rates',
  openGraph: {
    title: 'Podcast Sponsorship Rates: Pre-Roll, Mid-Roll & Post-Roll Explained (2026)',
    description: 'Podcast ads are priced on CPM per 1,000 downloads — and where the ad sits in the episode changes the price as much as your download count does.',
    url: 'https://identitykit.in/blog/podcast-sponsorship-rates-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/podcast-sponsorship-rates.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/podcast-sponsorship-rates-2026',
  },
}

const placements = [
  { slot: 'Pre-roll', cpm: '$15 – $25', why: 'Plays before the show starts — some listeners skip intros, so engagement is moderate.' },
  { slot: 'Mid-roll', cpm: '$25 – $50+', why: 'The premium slot. Listeners are already invested in the episode and far less likely to skip, which is why this consistently commands the highest rate.' },
  { slot: 'Post-roll', cpm: '$5 – $20', why: 'The lowest-value slot — a meaningful share of listeners have already dropped off by the time the episode ends.' },
]

const formats = [
  { format: 'Host-read', cpm: '$25 – $50+ (higher in premium niches)', note: 'Read live by the host in their own voice and style — commands a real premium because it consistently outperforms produced ads on purchase rate.' },
  { format: 'Pre-produced / programmatic', cpm: '$10 – $25', note: 'A studio-produced spot inserted into the episode — cheaper, but lacks the host\'s personal endorsement.' },
]

const faqs = [
  { q: 'How is a podcast CPM rate actually calculated?', a: 'Divide your download count by 1,000, then multiply by your CPM rate. A show with 60,000 downloads at a $30 CPM would charge $1,800 for that ad placement. Sponsors typically expect this based on downloads within the first 30 days of an episode publishing, not lifetime downloads — quote your 30-day number.' },
  { q: 'Why is mid-roll so much more expensive than pre-roll or post-roll?', a: 'Listener engagement is highest mid-episode — the audience is already invested and much less likely to skip compared to the very start or end of an episode, so mid-roll ads reliably get heard and consistently command a real premium over both other slots.' },
  { q: 'Why do host-read ads cost more than pre-produced ads?', a: 'Host-read ads have been shown in industry benchmark data to outperform producer-read ads by around 31% on purchase rate — the premium reflects a real, measurable performance difference driven by the host\'s personal credibility, not just preference.' },
  { q: 'Does a bigger audience always mean a higher rate?', a: 'Not necessarily. Niche and audience value matter enormously — a finance or B2B show with a smaller, highly targeted audience can command a higher CPM than a much larger general entertainment show, because the listeners are worth more per thousand to specific advertisers.' },
  { q: 'What\'s the difference between exclusive sponsorship and ad rotation?', a: 'Exclusive sponsorship gives one brand all the ad inventory for an episode or period, commanding a real premium in exchange for undivided attention and sometimes a no-competitor clause. Ad rotation — where several advertisers split a show\'s slots — is the standard model for most independently produced shows and is easier to fill, but each brand gets less exclusive attention.' },
  { q: 'Should I use CPM pricing if I have a small show?', a: 'Below roughly 10,000 downloads per episode, CPM math tends to produce very small, hard-to-negotiate numbers — many smaller shows use a flat per-episode rate or a flat minimum instead, especially if the sponsorship requires meaningful production effort regardless of audience size.' },
]

export default function PodcastSponsorshipPage() {
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
            {['Podcast', 'Rate Card', 'Creator Economy'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Podcast Sponsorship Rates:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Placement Changes the Price</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            The exact same ad, read by the exact same host, can cost a sponsor 3-4x more depending on whether it airs before, during, or after your episode. Here's how podcast CPM pricing actually breaks down by placement, format, and niche.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Podcast Sponsorship Pricing</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Podcast ads are priced on CPM: (downloads ÷ 1,000) × CPM rate, typically measured on downloads within the first 30 days of an episode.',
                'Mid-roll is the premium placement (roughly $25–$50+ CPM), pre-roll is moderate (~$15–$25), and post-roll is cheapest (~$5–$20) due to listener drop-off.',
                'Host-read ads command a real premium over pre-produced ads — industry data shows they outperform on purchase rate by around 31%.',
                'Niche matters more than raw audience size — business, finance, and B2B shows regularly command $40+ CPM even with smaller audiences.',
                'Exclusive sponsorship (one brand owns all inventory) typically commands a 25–50% premium over standard ad rotation.',
                'Shows under roughly 10,000 downloads per episode often use flat-rate pricing instead of CPM, since CPM math produces awkwardly small numbers at that scale.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Podcast Ad Pricing</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'CPM stands for cost per mille — Latin for "thousand" — meaning the price an advertiser pays per 1,000 downloads.',
                'Industry benchmark data from ad measurement firm Podscribe found host-read ads outperform producer-read ads by roughly 31% on purchase rate, which underpins why host-read consistently commands a higher CPM.',
                'Volume compresses CPM at the very top end — a show with a million downloads per episode sometimes charges a lower effective CPM than a smaller, highly niche show, and very large shows frequently skip CPM pricing in favor of a flat rate entirely.',
                'A Cost Per Acquisition (CPA) model exists as an alternative to CPM — the advertiser pays only when a listener takes a specific action, like a purchase or sign-up, shifting performance risk away from the podcaster.',
                'Multi-episode and annual sponsorship packages have become increasingly common, often bundled with a discount versus one-off per-episode pricing.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Placement table */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Pricing by Placement</h2>
            <div className="card" style={{ padding: '18px 16px', overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr>
                    <th style={{ color: '#FF6B2B' }}>Slot</th>
                    <th>Typical CPM</th>
                    <th>Why</th>
                  </tr>
                </thead>
                <tbody>
                  {placements.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 700 }}>{row.slot}</td>
                      <td style={{ color: 'rgba(255,255,255,0.6)' }}>{row.cpm}</td>
                      <td style={{ color: 'rgba(255,255,255,0.6)' }}>{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Format table */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Pricing by Format</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {formats.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.format} — {row.cpm}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.note}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Niche vs size */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Niche Still Beats Size</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
              A business or finance podcast with 15,000 downloads can out-earn a general entertainment show with 150,000 downloads on the same ad slot — because advertisers aren't just buying reach, they're buying access to a specific, high-value audience. A financial services company will pay far more to reach 15,000 people actively interested in investing than to reach 150,000 people with no particular relevant interest.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              This is worth remembering if you're comparing your own rate against a much larger show's published numbers — a smaller, sharply-defined audience is a genuine pricing advantage, not a disadvantage to apologize for.
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
                { href: '/blog/newsletter-sponsorship-rates-2026', title: 'Newsletter Sponsorships: How Substack & Beehiiv Creators Get Paid (2026)', tag: 'Newsletter' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🎙️</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Give sponsors a rate card, not a guess.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a rate card, media kit, and creator CV — one shareable link that shows sponsors exactly what each placement costs.
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
