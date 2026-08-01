import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Make a Media Kit as a Creator (Free Guide, 2026)',
  description: 'A media kit either passes the one-page test or it doesn\'t. Here\'s exactly what belongs in each section, which format actually works for brands, and the mistakes that quietly kill otherwise-good pitches.',
  keywords: 'how to make a media kit, media kit template creator, what to include in a media kit, creator media kit guide, free media kit maker, media kit format for brands',
  openGraph: {
    title: 'How to Make a Media Kit as a Creator (Free Guide, 2026)',
    description: 'A media kit either passes the one-page test or it doesn\'t. Here\'s exactly what belongs in each section, which format actually works for brands, and the mistakes that quietly kill otherwise-good pitches.',
    url: 'https://identitykit.in/blog/how-to-make-a-media-kit',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/how-to-make-a-media-kit.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/how-to-make-a-media-kit',
  },
}

const sections = [
  { name: 'Header', includes: 'Your name/handle, a clear profile photo, your niche in one line, and your primary platform.', why: 'This is the 3-second scan — a brand should know who you are and what you do before reading a single stat.' },
  { name: 'Audience snapshot', includes: 'Follower count, engagement rate, and top 1–2 audience demographics (age range, top location, or gender split).', why: 'Brands are checking audience fit fast — three numbers, clearly labeled, beat a wall of analytics screenshots.' },
  { name: 'Content examples', includes: '3–5 of your actual best-performing or most representative posts, not just your favorites.', why: 'Shows your real content style, not a curated highlight reel that doesn\'t reflect what you\'d actually deliver.' },
  { name: 'Past collaborations', includes: 'Brand logos or names you\'ve worked with, ideally with one concrete result if you have it.', why: 'Social proof — it tells a new brand that someone else already trusted you and the partnership worked.' },
  { name: 'Rate card or pricing', includes: 'Either your actual rates, or a clear "rates available on request" with a direct way to ask.', why: 'Removes the single biggest source of pitch friction — a brand having to guess or chase you for pricing.' },
  { name: 'Contact / CTA', includes: 'A direct collab email and a single clear next step.', why: 'A brand ready to move forward shouldn\'t have to hunt for how to actually reach you.' },
]

const formats = [
  { format: 'PDF', pros: 'Familiar, easy to attach to an email', cons: 'Goes stale the moment your stats change, often awkward to read on mobile, easy to lose track of versions' },
  { format: 'Canva template', pros: 'Fast to design, looks polished out of the box', cons: 'Same staleness problem as a PDF once exported, and still a static file to re-export every time something changes' },
  { format: 'Notion page', pros: 'Free, flexible, easy to update', cons: 'Reads more like a personal doc than a professional pitch asset unless heavily customized' },
  { format: 'Live shareable link (Identity Kit)', pros: 'Updates automatically as your stats grow, built specifically for this use case, works instantly on mobile', cons: 'Requires setting up a profile once — a five-minute tradeoff for not rebuilding a PDF every quarter' },
]

const mistakes = [
  { title: 'Outdated stats', body: 'A media kit showing follower counts from six months ago undercuts your credibility the moment a brand cross-checks it against your live profile.' },
  { title: 'No clear CTA', body: 'Ending with "feel free to reach out" instead of a direct email or booking link adds unnecessary friction at exactly the point a brand is ready to act.' },
  { title: 'Too long', body: 'A media kit is a pitch document, not a portfolio archive — most brands are deciding in under a minute, and a 10-page kit works against that, not for it.' },
  { title: 'No rate information at all', body: 'Some creators leave pricing out entirely to avoid the conversation. In practice, this usually just delays the deal or filters you out of brands working with a fixed timeline.' },
  { title: 'A file instead of a link', body: 'Attachments get lost in inboxes and are awkward to forward internally at a brand — a link is easier to share, reopen, and forward to a decision-maker.' },
]

const faqs = [
  { q: 'What is the minimum a media kit needs to include?', a: 'At minimum: your niche, a follower and engagement snapshot, a few content examples, and a way to contact you. Past collaborations and pricing strengthen it significantly, but the four essentials above are the floor.' },
  { q: 'How long should a media kit be?', a: 'One scrollable page is the target. If a brand has to click past multiple pages or open several attachments to get the information they need, the length itself is working against you.' },
  { q: 'Should I include my rates in my media kit?', a: 'Including at least a rate range removes a common point of friction. If you\'d rather not publish exact numbers, "rates available on request" with a direct contact link is a reasonable middle ground — just don\'t leave pricing out entirely with no path to ask.' },
  { q: 'Do I need a media kit if I only have a small following?', a: 'Yes — arguably more so. Smaller creators without a media kit are the easiest for a brand to pass over, since there\'s nothing quick to evaluate. A clear, well-organized kit is one of the few ways a smaller account can compete on professionalism rather than reach alone.' },
  { q: 'How often should I update my media kit?', a: 'Whenever your key numbers move meaningfully, or at minimum once a quarter. A live, auto-updating link solves this by design — a static PDF or Canva export requires you to remember and redo it manually each time.' },
  { q: 'What\'s the difference between a media kit and a portfolio?', a: 'A portfolio is a broader showcase of your work over time. A media kit is a focused pitch document built specifically to help a brand decide whether to work with you and at what rate — narrower, more numbers-driven, and built for a decision-maker skimming quickly.' },
]

export default function HowToMakeMediaKitPage() {
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
            {['Media Kit', 'Guide', 'Brand Deals'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Make a Media Kit<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Brands Actually Read</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Here's a fast way to judge your own media kit: can a brand manager answer "who is this, what's their audience, and what would it cost" in under 30 seconds, without scrolling past page one? If not, the fix usually isn't more content — it's better structure.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — How to Make a Media Kit</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'A media kit needs six things: a header (who you are), an audience snapshot (stats), content examples, past collaborations, pricing, and a direct contact CTA.',
                'One scrollable page is the target length — a kit that takes more than a minute to review works against you, not for it.',
                'A live shareable link outperforms a static PDF or Canva export because it updates automatically as your stats change.',
                'Including at least a rate range, rather than omitting pricing entirely, removes the most common source of pitch friction.',
                'Smaller creators benefit from a strong media kit at least as much as larger ones — it\'s one of the clearest ways to compete on professionalism rather than reach alone.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Media Kits</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'A media kit (sometimes called a press kit or collab kit) is the standard document brands and talent managers use to evaluate a creator partnership.',
                'Brand and talent managers evaluate large volumes of creators regularly, which is why concise, scannable formatting consistently outperforms exhaustive detail.',
                'Static formats (PDF, exported Canva design) require manual re-export every time a creator\'s stats change — a live link removes that maintenance step entirely.',
                'Most brand review happens on mobile devices, where PDFs are frequently harder to read and navigate than a responsive web page.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section breakdown */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Six Sections, and What Goes in Each</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {sections.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{i + 1}. {row.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6, marginBottom: 6 }}>{row.includes}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, lineHeight: 1.6, fontStyle: 'italic' }}>{row.why}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Format comparison */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Which Format Actually Works</h2>
            <div className="card" style={{ padding: '18px 16px', overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr>
                    <th style={{ color: '#FF6B2B' }}>Format</th>
                    <th>Pros</th>
                    <th>Cons</th>
                  </tr>
                </thead>
                <tbody>
                  {formats.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 700 }}>{row.format}</td>
                      <td style={{ color: 'rgba(255,255,255,0.6)' }}>{row.pros}</td>
                      <td style={{ color: 'rgba(255,255,255,0.6)' }}>{row.cons}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Mistakes That Quietly Kill a Media Kit</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {mistakes.map((row, i) => (
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
                { href: '/blog/linktree-vs-media-kit-brand-deals', title: 'Linktree vs. Media Kit: Why Brands Need More Than a Link Page', tag: 'Comparison' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>✨</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Skip the design work entirely.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Identity Kit builds all six sections for you — media kit, rate card, and creator CV in one live link that updates automatically as you grow.
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
