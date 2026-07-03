import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Link in Bio vs Media Kit vs Portfolio Website: What Indian Brands Actually Want (2026)',
  description: 'A clear comparison for Indian creators: when a simple link-in-bio tool is enough, when you need a real media kit, and when a full portfolio website is worth building. What brand managers actually look for when reviewing creator profiles in 2026.',
  keywords: 'link in bio vs media kit, best link in bio for creators india, media kit vs portfolio website, do i need a media kit as an influencer, link in bio tools india creators, creator portfolio india',
  openGraph: {
    title: 'Link in Bio vs Media Kit vs Portfolio Website: What Indian Brands Actually Want (2026)',
    description: 'A brand manager reviewing 20 creator profiles in 30 minutes wants answers, not a list of buttons. Here\'s what actually converts.',
    url: 'https://identitykit.in/blog/link-in-bio-vs-media-kit-vs-portfolio-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/link-in-bio-vs-media-kit.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/link-in-bio-vs-media-kit-vs-portfolio-india-2026',
  },
}

const comparison = [
  { factor: 'What it is', linkBio: 'A single page of outbound buttons to your other links', mediaKit: 'A structured one-pager with your stats, niche, rates, and past work', portfolio: 'A full custom website with your case studies, blog, and contact form' },
  { factor: 'Setup time', linkBio: '5 minutes', mediaKit: '10–20 minutes', portfolio: 'Days to weeks' },
  { factor: 'Cost', linkBio: 'Free (branded) to ₹800+/month (custom)', mediaKit: 'Usually free with the right tool', portfolio: '₹500–₹5,000+/year for hosting and domain' },
  { factor: 'What a brand sees in 10 seconds', linkBio: 'A list of destinations to click through', mediaKit: 'Your niche, audience size, engagement, and rates immediately', portfolio: 'Depends entirely on design — can be excellent or overwhelming' },
  { factor: 'Best for', linkBio: 'Directing followers to multiple social profiles', mediaKit: 'Getting hired by brands quickly', portfolio: 'Established creators/agencies with dedicated case studies and a content library' },
]

const whyLinktreeFails = [
  'It shows a list of buttons — "My Instagram," "My Portfolio," "Book Me" — forcing the brand to click through multiple pages just to see your work or pricing',
  'A brand manager reviewing many creator profiles in a short window doesn\'t have time for extra clicks — every additional step is a chance they give up and move to the next creator',
  'There\'s no structured way to show engagement rate, niche, or rates at a glance — the exact information a brand needs to make a fast decision',
  'It signals "content creator" rather than "business" — and that framing directly affects how much a brand assumes you\'re worth',
]

const useCases = [
  { scenario: 'You\'re just starting out and want one link for all your social profiles', pick: 'Link in bio', why: 'Simple and free — you don\'t need more than this yet.' },
  { scenario: 'A brand just asked "send me your rates and stats"', pick: 'Media kit', why: 'This is the single fastest way to answer that exact question and close the loop.' },
  { scenario: 'You want brands to discover you and immediately understand your value', pick: 'Media kit', why: 'A structured profile with niche, engagement, and rates converts faster than a link list or a from-scratch website.' },
  { scenario: 'You run a UGC or freelance content business with a growing case-study library', pick: 'Portfolio website', why: 'At this stage you likely have enough completed work to justify dedicated case studies and a contact funnel.' },
  { scenario: 'You want something free, fast, and specifically built for brand deals in India', pick: 'Media kit (Identity Kit)', why: 'Purpose-built for the Indian creator-to-brand handoff, without the cost or setup time of a custom website.' },
]

export default function LinkInBioVsMediaKitPage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', color: '#fff', fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; overflow: hidden; transition: border-color 0.2s; }
        .card:hover { border-color: rgba(255,107,43,0.2); }
        table.cmp { width: 100%; border-collapse: collapse; }
        table.cmp th, table.cmp td { text-align: left; padding: 12px 14px; font-size: 12.5px; border-bottom: 1px solid rgba(255,255,255,0.06); vertical-align: top; }
        table.cmp th { color: #FF6B2B; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; }
        table.cmp td { color: rgba(255,255,255,0.6); line-height: 1.5; }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .hero-pad { padding: 48px 16px 32px !important; }
          .content-pad { padding: 0 16px 60px !important; }
          table.cmp { font-size: 11px; }
          table.cmp th, table.cmp td { padding: 8px 8px; }
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
            {['Media Kit', 'Creator Tools', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Link in Bio vs. Media Kit vs.<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Portfolio Website — What Do Brands Want?</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A brand manager reviewing 20 creator profiles in 30 minutes doesn't have time to click through a list of buttons. What you put in your bio link directly affects whether you get hired — and how much you can charge. Here's exactly when each option makes sense for Indian creators.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — What Should Be in Your Bio Link?</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'A basic link-in-bio tool is fine for directing followers to your other social profiles — but it does very little to help you land brand deals',
                'A media kit shows your niche, audience size, engagement rate, and rates immediately — exactly what a brand needs to decide fast',
                'Creators with polished, structured profiles are consistently able to charge more than those relying on a plain link list',
                'A full portfolio website is worth building once you have enough completed work to justify dedicated case studies — usually a later-stage move, not a starting point',
                'For most Indian creators actively pursuing brand deals, a free, purpose-built media kit is the highest-leverage option relative to effort',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Link-in-Bio & Media Kits for Creators</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Tens of millions of creators globally now use some form of link-in-bio tool, making a plain, generic link page far less differentiating than it once was.',
                'A brand manager reviewing dozens of creator profiles in a short window treats every extra click before seeing your work or rates as a reason to move on to the next creator.',
                'Creators with polished, structured profiles showing packages and past work are consistently able to charge meaningfully more than creators presenting only a basic link list.',
                'Dedicated link-in-bio and portfolio pages with real analytics have been associated with measurable increases in conversion compared to no dedicated landing page at all.',
                'A structured profile answering "what do you charge and what have you done" upfront reduces the number of back-and-forth questions a brand needs to ask before deciding to work with you.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison table */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Side-by-Side Comparison</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Each option solves a different problem — the mistake is using the wrong one for what you're actually trying to do.</p>
            <div className="card" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr><th>Factor</th><th>Link in Bio</th><th>Media Kit</th><th>Portfolio Website</th></tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>{row.factor}</td>
                      <td>{row.linkBio}</td>
                      <td style={{ color: '#FF9A6B' }}>{row.mediaKit}</td>
                      <td>{row.portfolio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Why link in bio isn't enough */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Why a Plain Link-in-Bio Page Isn't Enough for Brand Deals</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>It's a great tool for what it's designed for — directing followers — but it wasn't built to sell you to a brand.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {whyLinktreeFails.map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.1)', borderRadius: 12, padding: '16px 20px', display: 'flex', gap: 12 }}>
                  <span style={{ color: '#FF5252', flexShrink: 0, fontWeight: 700 }}>✗</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>One link. Everything a brand needs to say yes.</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Identity Kit gives you a single shareable profile with your media kit, rate card, and Creator CV — built specifically for the Indian creator-to-brand handoff. Free, 10 minutes to set up.</p>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build My Free Profile →
            </Link>
          </div>

          {/* Which to pick */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Which One Should You Actually Use?</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Match the tool to what you're actually trying to accomplish right now.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {useCases.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{item.scenario}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '3px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{item.pick}</span>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{item.why}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'Can I use both a link-in-bio tool and a media kit?', a: 'Yes, and many creators do — use a simple link-in-bio tool for general follower navigation across platforms, and put your media kit link as one of the featured buttons, or use it as your primary Instagram bio link once you\'re actively pursuing brand deals.' },
                { q: 'Do I need a custom website before I can get brand deals in India?', a: 'No. A structured media kit answers the exact questions a brand needs answered — your niche, audience, engagement, and rates — without the cost and time investment of building and maintaining a full website. Most Indian creators land plenty of brand deals with a media kit alone.' },
                { q: 'Is a PDF media kit or a live link better?', a: 'A live link is generally stronger — it\'s easier to update as your stats grow, easier to share via a single URL, and doesn\'t sit in someone\'s downloads folder going stale. A downloadable PDF version alongside a live link covers both preferences.' },
                { q: 'What should I put in my Instagram bio link if I only get one?', a: 'If you\'re actively pursuing brand deals, your media kit or Identity Kit-style profile should take priority over a generic link-in-bio tool — it directly answers the question every brand visiting your profile actually has: "what do you offer and what do you charge?"' },
                { q: 'When is it worth building a full portfolio website instead of just a media kit?', a: 'Once you have a substantial library of completed campaigns or case studies worth showcasing individually, and especially if you run content creation as more of a freelance business than a personal brand — a portfolio site lets you go deeper than a single-page media kit can.' },
                { q: 'Does a plain Linktree page hurt my chances of getting brand deals?', a: 'It doesn\'t disqualify you, but it does very little to help. Since a brand manager typically wants your niche, stats, and rates immediately, a plain link list forces extra clicks and back-and-forth that a structured media kit avoids entirely — and that friction can be the difference between getting a reply and getting skipped.' },
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
                { href: '/blog/influencer-media-kit-india-2026', title: 'How to Make a Media Kit for Instagram in India', tag: 'Media Kit' },
                { href: '/blog/creator-cv-resume-india-2026', title: 'Creator CV: The Resume for Content Creators in India', tag: 'Creator CV' },
                { href: '/blog/how-to-find-brand-contacts-emails-india-2026', title: 'How to Find Brand Emails & Contacts in India', tag: 'Brand Outreach' },
                { href: '/blog/how-to-become-brand-ambassador-india-2026', title: 'How to Become a Brand Ambassador in India', tag: 'Brand Ambassador' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🔗</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Stop sending brands a list of buttons.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile that shows your niche, stats, and rates in one clean link — exactly what brands want to see first.
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
