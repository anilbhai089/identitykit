import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Linktree vs. Media Kit: Why Brands Need More Than a Link Page (2026)',
  description: 'Linktree shows brands where to find your content. A media kit shows them why to pay you. Here\'s exactly what brands look for when evaluating a creator, and why a link page alone quietly costs you deals.',
  keywords: 'linktree vs media kit, linktree alternative for creators, media kit vs link in bio, best media kit tool for brand deals, linktree for influencers, do i need a media kit',
  openGraph: {
    title: 'Linktree vs. Media Kit: Why Brands Need More Than a Link Page (2026)',
    description: 'Linktree tells brands where your content is. A media kit tells them why to pay you. Here\'s the real difference — and why it costs creators real brand deals.',
    url: 'https://identitykit.in/blog/linktree-vs-media-kit-brand-deals',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/linktree-vs-media-kit.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/linktree-vs-media-kit-brand-deals',
  },
}

type ComparisonRow = { feature: string; linktree: boolean | string; pdf: boolean | string; ik: boolean | string }

const comparisonRows: ComparisonRow[] = [
  { feature: 'Shows your content links', linktree: true, pdf: false, ik: true },
  { feature: 'Shows follower & engagement stats', linktree: false, pdf: true, ik: true },
  { feature: 'Shows your rate card / pricing', linktree: false, pdf: 'sometimes', ik: true },
  { feature: 'Shows past brand collaborations', linktree: false, pdf: 'sometimes', ik: true },
  { feature: 'Updates automatically as you grow', linktree: false, pdf: false, ik: true },
  { feature: 'Works instantly on mobile (no download)', linktree: true, pdf: false, ik: true },
  { feature: 'Clear "how to contact me" CTA', linktree: 'sometimes', pdf: 'sometimes', ik: true },
  { feature: 'Free to set up', linktree: true, pdf: true, ik: true },
]

const brandChecklist = [
  { item: 'Audience size and platform breakdown', why: 'Brands need to know where your audience actually lives — a link page rarely shows this at a glance.' },
  { item: 'Engagement rate, not just follower count', why: 'A smaller, highly engaged audience regularly outperforms a larger, passive one — but only if the number is visible somewhere.' },
  { item: 'Content style and niche fit', why: 'Brands are scanning for category fit in seconds. If they have to click through five links to figure out your niche, most will simply move on.' },
  { item: 'Past brand collaborations', why: 'Prior brand work is social proof. It tells a new brand "someone else already trusted this creator and it worked."' },
  { item: 'A rate or rate range', why: 'Brands routinely skip creators who make them ask for pricing in a DM — it adds friction to a decision they want to make quickly.' },
  { item: 'A direct way to reach you', why: 'A generic "DM me" is weaker than a listed collab email — it signals you\'re set up to actually run a business, not just post content.' },
]

const faqs = [
  { q: 'Do I need a media kit if I already have a Linktree?', a: 'Yes, if brand deals are a goal — they serve different jobs. Linktree is built to route people to your content and other links. A media kit is built to answer a brand\'s specific questions: your audience, your engagement, your past work, and your rate. Most creators benefit from having both, pointed at different audiences.' },
  { q: 'Can I just add my rates to my Linktree instead of making a media kit?', a: 'You can, but it rarely works well. Linktree\'s format is a vertical list of buttons — it isn\'t built to present stats, past collaborations, and pricing in a way a brand manager can scan in a few seconds. A dedicated media kit format is built specifically for that decision-making moment.' },
  { q: 'What should a media kit include that a link page can\'t show?', a: 'A media kit should show your audience demographics, engagement rate, content examples, past brand collaborations, and your rate card — ideally in one scrollable page, not spread across external links a brand has to click through one by one.' },
  { q: 'Do brands actually care about the difference, or is this overthinking it?', a: 'Brand and talent managers evaluate large numbers of creators regularly and are optimizing for speed. A page that answers "should I work with this person and what would it cost" in one scroll gets a faster yes than a link page that requires follow-up questions before a brand can even decide.' },
  { q: 'Is a PDF media kit good enough, or do I need something else?', a: 'A PDF works, but it goes stale the moment your stats change, and most brands open things on mobile where PDFs are awkward to scroll and zoom. A live, shareable link that updates automatically solves both problems and is increasingly the default format brands expect.' },
  { q: 'Should I replace my Linktree with a media kit?', a: 'Not necessarily replace — reposition. Keep your Linktree (or similar) for your bio, pointing followers to your content. Use your media kit specifically in brand pitch emails and DMs, where the audience is a decision-maker, not a fan.' },
]

export default function LinktreeVsMediaKitPage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', color: '#fff', fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; overflow: hidden; transition: border-color 0.2s; }
        .card:hover { border-color: rgba(255,107,43,0.2); }
        table.cmp { width: 100%; border-collapse: collapse; }
        table.cmp th, table.cmp td { padding: 14px 12px; text-align: center; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.07); }
        table.cmp td:first-child, table.cmp th:first-child { text-align: left; color: rgba(255,255,255,0.7); font-weight: 600; }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .hero-pad { padding: 48px 16px 32px !important; }
          .content-pad { padding: 0 16px 60px !important; }
          table.cmp { font-size: 11px !important; }
          table.cmp th, table.cmp td { padding: 10px 6px !important; }
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
            {['Comparison', 'Media Kit', 'Brand Deals'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Linktree vs. Media Kit:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Brands Need More Than a Link Page</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Linktree answers "where can I find your content?" A brand deciding whether to pay you is asking a completely different question — and a link page usually can't answer it. Here's what actually changes a brand's decision, and why the gap quietly costs creators deals every week.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Linktree vs. Media Kit</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Linktree is a link router — it points people to your content, shop, or socials. It was never built to pitch a brand.',
                'A media kit is a decision document — it shows your stats, engagement, past collabs, and rate in one place, built for someone deciding whether to pay you.',
                'Brands evaluating creators are scanning fast — a page that answers "who is this, what do they charge, should I reach out" in one scroll gets a faster response than one that requires follow-up questions.',
                'The two aren\'t mutually exclusive — keep a link page for your bio, and use a media kit specifically when pitching or responding to brands.',
                'A live, shareable media kit link beats a static PDF because it updates automatically and works instantly on mobile.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Link Pages vs. Media Kits</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Link-in-bio tools like Linktree were originally designed to solve Instagram\'s "one link in bio" limitation — routing followers to multiple destinations, not presenting a case for a brand partnership.',
                'A media kit (also called a press kit or collab kit) is the standard document brands and talent managers use to evaluate whether — and how much — to pay a creator.',
                'Engagement rate is consistently cited by brands and marketers as a stronger predictor of campaign performance than raw follower count alone.',
                'PDF media kits go out of date the moment your stats change, and are frequently awkward to read on the mobile devices most brand managers use to review pitches.',
                'A shareable link that updates automatically removes the two most common failure points of a static kit: outdated numbers and poor mobile formatting.',
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
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Side-by-Side: Linktree vs. PDF Media Kit vs. Identity Kit</h2>
            <div className="card" style={{ padding: '18px 16px', overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Linktree</th>
                    <th>PDF Media Kit</th>
                    <th style={{ color: '#FF6B2B' }}>Identity Kit</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i}>
                      <td>{row.feature}</td>
                      <td>{row.linktree === true ? '✅' : row.linktree === 'sometimes' ? '➖' : '❌'}</td>
                      <td>{row.pdf === true ? '✅' : row.pdf === 'sometimes' ? '➖' : '❌'}</td>
                      <td>{row.ik === true ? '✅' : row.ik === 'sometimes' ? '➖' : '❌'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 14, lineHeight: 1.6 }}>
              ➖ means it's possible but not built-in — you'd need to add it manually and keep it updated yourself.
            </p>
          </section>

          {/* What brands look for */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What Brands Are Actually Checking For</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24, fontSize: 15 }}>
              A brand manager reviewing a potential creator partner is running through a short mental checklist — usually in under a minute. A link page can technically contain this information somewhere, but it's rarely presented in a way that answers these questions at a glance.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {brandChecklist.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.item}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.why}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Not either/or */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>You Don't Have to Choose — Use Each for Its Job</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              The mistake isn't using a link page — it's using only a link page for every audience. Your Instagram bio link is talking to <strong style={{ color: 'rgba(255,255,255,0.8)' }}>followers</strong> who want your content. A brand pitch email is talking to a <strong style={{ color: 'rgba(255,255,255,0.8)' }}>decision-maker</strong> who wants your numbers and your rate. Sending a brand the same link you send a fan means making them dig for the one thing they actually came for — and many will simply move to the next creator in their list instead of digging.
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
                { href: '/blog/best-media-kit-tools-creators-2026', title: 'Best Free Media Kit Tools for Creators in 2026', tag: 'Tools' },
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
              One link. Everything a brand needs to say yes.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with your media kit, rate card, and creator CV — all in one shareable link that updates automatically as you grow.
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
