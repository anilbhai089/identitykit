import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'National Creator Economy Bill 2026: What Every Indian Creator Needs to Know',
  description: 'A plain-language guide to India\'s National Creator Economy Bill 2026 — mandatory registration for high earners, the Creator Welfare Fund, standardized contracts, AI content labeling, and what actually changes for creators once the bill receives Presidential Assent.',
  keywords: 'national creator economy bill 2026 india, creator welfare fund india, influencer registration law india, creator economy bill explained, sgi ai labeling creators india',
  openGraph: {
    title: 'National Creator Economy Bill 2026: What Every Indian Creator Needs to Know',
    description: 'For the first time, being a creator in India comes with formal legal recognition — and formal legal obligations. Here\'s what actually changes.',
    url: 'https://identitykit.in/blog/national-creator-economy-bill-2026-explained',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/creator-economy-bill-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/national-creator-economy-bill-2026-explained',
  },
}

const keyChanges = [
  { icon: '📋', title: 'Formal professional recognition', detail: 'Creators are now legally recognized as professionals for the first time, alongside more established fields — opening access to formal bank loans, business insurance, and professional credentials that were previously difficult to obtain as an "influencer" with no formal status.' },
  { icon: '🆔', title: 'Mandatory registration above an income threshold', detail: 'Creators earning above a specified threshold must register with the Ministry of Information and Broadcasting, linking content income to tax records within a centralized creator database. Creators below the threshold are not required to register.' },
  { icon: '🏥', title: 'Creator Welfare Fund', detail: 'A government-backed benefit scheme, financed by a small cess on digital advertising spend from platforms, intended to provide health insurance and pension-style benefits to registered professional creators — a genuine first for the industry.' },
  { icon: '📜', title: 'Standardized brand contracts', detail: 'The bill pushes toward standardized contract structures for brand deals, aiming to reduce the payment disputes and undefined-scope problems that have plagued informal creator-brand agreements.' },
  { icon: '⚠️', title: 'Disclosure becomes a legal mandate, not just a platform rule', detail: 'Paid collaboration disclosure — previously enforced mainly through ASCI guidelines and platform policy — is elevated to a federal legal requirement, meaning non-disclosure now carries statutory consequences beyond a platform takedown.' },
  { icon: '🤖', title: 'Mandatory AI content labeling (SGI)', detail: 'AI-generated or significantly AI-altered content must be labeled as "synthetically generated information," with platforms required to provide metadata tags for such content.' },
  { icon: '📰', title: 'Stricter rules for creators covering news/current affairs', detail: 'Creators posting news or current affairs content face oversight closer to that of digital news publishers, including a notably short window to remove flagged content following a government order.' },
]

const whoNeedsToRegister = [
  'Creators whose primary income comes from content creation across platforms like YouTube, Instagram, and other major platforms',
  'Specifically, those earning above the income threshold set for "professional creator" status',
  'Casual or hobby creators below that threshold are not required to register — but are still bound by the disclosure and AI-labeling rules regardless of income',
]

const preparationSteps = [
  { step: '01', title: 'Get your financial records in order now', body: 'Since registration links content income to tax records, having clean, accurate records of brand deals, ad revenue, and affiliate income puts you ahead of the transition rather than scrambling once rules take effect.' },
  { step: '02', title: 'Make sure every brand deal already has a written contract', body: 'The push toward standardized contracts is a good moment to make sure you\'re not relying on verbal or DM-based agreements — a proper contract protects you regardless of exactly how the bill\'s standardization requirements land.' },
  { step: '03', title: 'Tighten up your disclosure practices immediately', body: 'With disclosure elevated to a legal mandate on top of ASCI\'s existing guidelines, this is the moment to make sure every sponsored post already meets the #Ad-in-first-two-lines standard — don\'t wait for enforcement to start.' },
  { step: '04', title: 'Label AI-assisted content honestly', body: 'If you use AI tools for scripting, voiceover, or significant editing, get comfortable with transparent labeling now rather than treating it as an afterthought once SGI requirements are enforced.' },
  { step: '05', title: 'Watch for the official notification and rules', body: 'The bill was awaiting Presidential Assent as of the most recent reporting available — registration timelines and detailed rules will follow once assent is given and rules are published in the Gazette. Check for updates before assuming any specific deadline applies to you.' },
]

export default function CreatorEconomyBillPage() {
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
            {['Creator Economy Bill', 'Legal', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            National Creator Economy Bill 2026:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>What It Actually Means for You</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            For the first time, being a content creator in India comes with formal legal recognition — bank loans, business insurance, professional status — alongside real new legal obligations. Here's what the National Creator Economy Bill 2026 actually changes, in plain language.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — The National Creator Economy Bill 2026</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Passed by the Rajya Sabha on April 14, 2026, formally recognizing YouTubers, Instagram influencers, streamers, and digital artists as professionals under Indian law',
                'Only creators earning above a specified income threshold must register with the Ministry of Information and Broadcasting — hobby creators are exempt from registration',
                'A new Creator Welfare Fund, financed by a cess on digital advertising spend, aims to provide health insurance and pension-style benefits to registered creators',
                'Paid collaboration disclosure is now a federal legal mandate, not just an ASCI/platform guideline — non-disclosure carries statutory consequences',
                'AI-generated or significantly AI-altered content must be labeled as "synthetically generated information" (SGI)',
                'The bill was awaiting Presidential Assent as of the most recent available reporting — check for updates on official notification before assuming specific deadlines apply to you',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Creator Economy Bill 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'The National Creator Economy Bill 2026 makes India one of the first countries in the world to formally, legally recognize social media creators as licensed professionals.',
                'Before this bill, content creators operated as informal gig workers with no professional status, making bank loans and business insurance genuinely difficult to access.',
                'The bill applies across all major digital platforms — YouTube, Instagram, X, Twitch, and emerging platforms — and covers YouTubers, influencers, streamers, podcasters, and digital artists.',
                'The Creator Economy Bill works alongside separate Information Technology Amendment Rules from February and March 2026, which introduce the mandatory AI-labeling and disclosure requirements referenced within the bill\'s framework.',
                'Registration and detailed compliance timelines are expected to formally begin only once Presidential Assent is granted and official rules are published in the Gazette.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key changes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>7 Key Changes the Bill Introduces</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {keyChanges.map((item, i) => (
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

          {/* Who needs to register */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Who Actually Needs to Register?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {whoNeedsToRegister.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#FF6B2B', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Get your contracts in order before the rules take effect</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Use the free Identity Kit brand deal contract template — clear deliverables, revision limits, and disclosure language already built in.</p>
            </div>
            <Link href="/tools/brand-deal-contract-template" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Get My Contract Template →
            </Link>
          </div>

          {/* Preparation steps */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>5 Ways to Prepare Right Now</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>You don't need to wait for the official rules to start getting ahead of this.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {preparationSteps.map((item) => (
                <div key={item.step} className="card" style={{ padding: '20px 22px' }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 10, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#FF6B2B', fontSize: 14, flexShrink: 0 }}>{item.step}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>{item.title}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.7 }}>{item.body}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12.5, marginTop: 14, lineHeight: 1.6 }}>This is general information based on public reporting, not legal advice — the bill's detailed rules were still pending official notification as of the most recent available reporting. Confirm current status and consult a professional for guidance specific to your situation.</p>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'Do I need to register as a creator under this new bill?', a: 'Only if your income from content creation exceeds the specified threshold for "professional creator" status. Creators below that threshold aren\'t required to register, though disclosure and AI-labeling rules apply to all creators regardless of income.' },
                { q: 'What is the Creator Welfare Fund?', a: 'A government-backed benefit scheme, financed through a small cess on digital advertising spend from platforms, intended to provide health insurance and pension-style benefits to registered professional creators — a genuinely new form of social security for the industry.' },
                { q: 'Does this bill change ASCI disclosure requirements?', a: 'It elevates disclosure from primarily an ASCI/platform-policy matter to a federal legal mandate. The practical requirement (clear #Ad disclosure) doesn\'t fundamentally change, but the legal consequences for non-disclosure become more serious under this framework.' },
                { q: 'What counts as "synthetically generated information" that needs an SGI label?', a: 'Content that is AI-generated or significantly AI-altered. If you use AI tools for scripting assistance alone, that\'s different from using AI to generate the actual visual or audio content itself — when in doubt, transparent labeling protects you either way.' },
                { q: 'Has the bill actually taken effect yet?', a: 'As of the most recent available reporting, the bill had passed the Rajya Sabha but was still awaiting Presidential Assent, with registration and detailed rules expected to formally begin only once assent is granted and rules are published in the Gazette. Check current news for the latest status before assuming specific deadlines apply.' },
                { q: 'Will this bill make it harder or easier to be a creator in India?', a: 'Both, in different ways — it adds real compliance obligations (registration, tax linkage, disclosure enforcement) for high earners, but also brings genuine benefits previously unavailable to creators, including formal professional status for loans and insurance, and a dedicated welfare fund. The net effect will likely depend heavily on how the detailed rules are eventually implemented.' },
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
                { href: '/blog/asci-guidelines-influencer-disclosure-india-2026', title: 'ASCI Guidelines for Influencers in India 2026', tag: 'ASCI Compliance' },
                { href: '/blog/influencer-tax-gst-india-2026', title: 'Influencer Tax & GST Guide India 2026', tag: 'Tax & GST' },
                { href: '/blog/brand-deal-contract-template-india', title: 'Brand Deal Contract Template for Indian Creators', tag: 'Legal' },
                { href: '/blog/fake-brand-collaboration-scams-india-2026', title: 'How to Spot Fake Brand Collaboration Scams', tag: 'Creator Safety' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🏛️</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Being professional just got a legal definition. Look the part.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a proper media kit, rate card, and contract — the professional foundation this new legal landscape rewards.
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
          <Link href="/tools/brand-deal-contract-template" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contract Template</Link>
          <Link href="/tools/gst-invoice-generator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Invoice Generator</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
