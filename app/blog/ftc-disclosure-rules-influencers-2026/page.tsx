import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FTC Disclosure Rules for Influencers (2026 Guide)',
  description: 'What US creators actually need to disclose, where, and how — based on the FTC\'s Endorsement Guides. Covers material connections, "clear and conspicuous" disclosure, gifted products, affiliate links, and AI-generated content.',
  keywords: 'ftc disclosure rules influencers, ftc endorsement guides 2026, do i need to disclose gifted products, material connection disclosure, ftc ad disclosure influencer, how to disclose sponsored content',
  openGraph: {
    title: 'FTC Disclosure Rules for Influencers (2026 Guide)',
    description: 'What creators actually need to disclose, where to put it, and how — based on the FTC\'s Endorsement Guides, including gifted products, affiliate links, and AI-generated content.',
    url: 'https://identitykit.in/blog/ftc-disclosure-rules-influencers-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/ftc-disclosure-rules.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/ftc-disclosure-rules-influencers-2026',
  },
}

const mustDisclose = [
  { item: 'You were paid cash or a flat fee for the post', why: 'The clearest form of material connection — a direct financial relationship with the brand.' },
  { item: 'You received a free or discounted product', why: 'Gifted products count even if you weren\'t obligated to post — "I got this for free" still shapes how a reasonable viewer weighs your opinion.' },
  { item: 'You earn a commission or affiliate revenue on the link', why: 'Affiliate and referral income is a material connection regardless of how small the commission is.' },
  { item: 'You have an ongoing brand ambassador or retainer relationship', why: 'Even posts that aren\'t individually paid still need disclosure if an ongoing paid relationship exists with the brand.' },
  { item: 'You\'re promoting your own brand or product', why: 'If it isn\'t obvious from context that it\'s your own company, that ownership needs to be disclosed too.' },
]

const doDont = [
  { bad: 'Burying "#ad" at the end of 20 other hashtags', good: '"Ad" or "Sponsored" placed at the very start of the caption or in the first seconds of a video' },
  { bad: 'Relying only on a platform\'s built-in "Paid Partnership" tag', good: 'Using the platform tag in addition to a plain-language disclosure in the caption or spoken in the video' },
  { bad: 'Vague language like "thanks to [Brand] for this"', good: 'Direct language: "Ad", "Sponsored", "I earn a commission on this link", "Gifted by [Brand]"' },
  { bad: 'Disclosing once and assuming your audience "already knows"', good: 'Disclosing on every single sponsored post, Story, video, and livestream segment individually' },
  { bad: 'A disclosure that requires clicking "more" to see', good: 'A disclosure visible immediately, before anyone has to take an extra action to see it' },
]

const faqs = [
  { q: 'Do I need to disclose free products I wasn\'t paid to post about?', a: 'Yes. If a brand sent you something for free — even with no formal obligation to post — and you choose to feature it, that\'s still a material connection under FTC guidance and should be disclosed, typically with something like "Gifted by [Brand]".' },
  { q: 'Is a platform\'s built-in "Paid Partnership" label enough by itself?', a: 'Not necessarily. FTC guidance treats built-in platform tags as helpful but not automatically sufficient on their own — a plain-language disclosure in your own caption or spoken in your video is the safer standard, especially since platform tags can be missed or not visible in every viewing context.' },
  { q: 'What counts as "clear and conspicuous" disclosure?', a: 'It means the disclosure has to be obvious to an average viewer without effort — visible before they engage with the content, in plain language, not hidden in a hashtag pile, small font, or a spot someone would need to click "see more" to reach.' },
  { q: 'Do affiliate links need to be disclosed even if the commission is tiny?', a: 'Yes. The size of the payment doesn\'t change the disclosure requirement — any financial benefit tied to a recommendation is a material connection, whether it\'s a flat sponsorship fee or a small percentage commission.' },
  { q: 'Am I personally liable, or is it only the brand\'s responsibility?', a: 'Both can be held responsible. FTC guidance makes clear that the endorser (you) carries independent responsibility for proper disclosure — a brand's involvement doesn't shift the obligation entirely onto them.' },
  { q: 'Does this apply to AI-generated or AI-assisted content?', a: 'Yes. If AI is used to help create or enhance an endorsement — especially content that simulates a genuine opinion or testimonial — the same disclosure expectations apply as they would to any other endorsement.' },
  { q: 'Do I need to disclose on LinkedIn or B2B content, not just Instagram/TikTok?', a: 'Yes — the disclosure principle applies across platforms, including LinkedIn and other B2B-facing content, wherever a material connection exists between you and the brand being discussed.' },
]

export default function FtcDisclosurePage() {
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
          .two-col { grid-template-columns: 1fr !important; }
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
            {['Compliance', 'US Creators', 'Brand Deals'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            FTC Disclosure Rules<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>for Influencers (2026)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Enforcement has shifted from "does a disclosure technically exist" to "would an average viewer actually notice it." A hashtag buried at the end of a caption no longer counts. Here's exactly what US creators need to disclose, where to put it, and how the rules apply to gifted products, affiliate links, and AI-assisted content.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — FTC Disclosure for Creators</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Disclose any "material connection" to a brand — payment, free products, affiliate commissions, or an ongoing ambassador relationship.',
                'Disclosure must be "clear and conspicuous": plain language like "Ad" or "Sponsored", placed where a viewer sees it immediately, not buried in a hashtag list.',
                'Every sponsored post needs its own disclosure — one disclosure doesn\'t cover future posts, and audience familiarity doesn\'t waive the requirement.',
                'Platform tools like Instagram\'s "Paid Partnership" label are helpful but not automatically sufficient on their own — pair them with a plain-language disclosure.',
                'You, the creator, carry independent responsibility for proper disclosure — it isn\'t only the brand\'s obligation.',
                'The same rules apply to AI-assisted or AI-generated endorsement content.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — FTC Endorsement Guides</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'The FTC\'s Endorsement Guides underwent their biggest revision in over a decade in 2023, formally defining "clear and conspicuous" disclosure for the social media era.',
                'Enforcement in 2025–2026 has shifted focus toward how disclosures actually appear in fast-moving formats like Reels, TikTok videos, and livestreams — not just whether one exists somewhere in the post.',
                'Recent guidance makes explicit that individual creators, not just the brands paying them, carry independent liability for proper disclosure.',
                'Penalties for confirmed violations of FTC orders can be substantial — reported enforcement actions have referenced fines reaching well into five figures per violation.',
                'Guidance has extended to cover AI-generated and AI-assisted endorsement content, including content that simulates a genuine testimonial.',
                'Disclosure rules vary by country — the FTC\'s rules apply in the US, while the UK\'s Advertising Standards Authority (ASA) enforces its own separate standard for creators working with UK audiences or brands.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* When to disclose */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>When You Need to Disclose</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24, fontSize: 15 }}>
              The FTC's test centers on a "material connection" — anything that could reasonably affect how a viewer weighs your recommendation. In practice, that covers more situations than most creators assume:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {mustDisclose.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.item}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.why}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Do/Don't */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What "Clear and Conspicuous" Actually Looks Like</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {doDont.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B6B', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>Doesn't count</div>
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.6 }}>{row.bad}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>Compliant</div>
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.6 }}>{row.good}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Who's liable */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>It's Not Just the Brand's Problem</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              A common misconception is that disclosure compliance is the brand or agency's job, and the creator is simply following instructions. Current FTC guidance is explicit that the endorser carries independent responsibility for proper disclosure — a brand's involvement, or even a brand asking you to keep a partnership quiet, doesn't shift the obligation off of you. If a brand pushes back on adding a clear disclosure, that's worth treating as a caution flag rather than following their preference.
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

          {/* Disclaimer */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '18px 22px', marginBottom: 56 }}>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, lineHeight: 1.6 }}>
              This article is general information based on the FTC's published Endorsement Guides, not legal advice. Disclosure requirements can depend on the specific facts of a partnership — consult a lawyer for guidance on your specific situation, and see the FTC's own "Disclosures 101 for Social Media Influencers" as a primary reference.
            </p>
          </div>

          {/* Related */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14 }}>
              {[
                { href: '/blog/1099-vs-w9-content-creators', title: '1099 vs. W-9 for Content Creators: What You Actually Need', tag: 'Taxes' },
                { href: '/blog/linktree-vs-media-kit-brand-deals', title: 'Linktree vs. Media Kit: Why Brands Need More Than a Link Page', tag: 'Comparison' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🛡️</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Compliance is easier when brands see a professional.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with your media kit, rate card, and creator CV — the kind of profile that makes brands take your process seriously from the first pitch.
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
