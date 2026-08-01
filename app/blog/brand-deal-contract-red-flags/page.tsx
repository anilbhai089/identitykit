import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brand Deal Contract Red Flags: What to Check Before You Sign',
  description: 'Perpetual usage rights, vague deliverables, one-sided termination clauses — here are the contract terms that quietly cost creators money and control, and what to ask for instead.',
  keywords: 'brand deal contract red flags, influencer contract review, what to look for in a brand deal contract, influencer contract usage rights, exclusivity clause influencer, sponsorship contract checklist',
  openGraph: {
    title: 'Brand Deal Contract Red Flags: What to Check Before You Sign',
    description: 'Perpetual usage rights, vague deliverables, one-sided termination clauses — the contract terms that quietly cost creators money and control, and what to ask for instead.',
    url: 'https://identitykit.in/blog/brand-deal-contract-red-flags',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/brand-deal-contract-red-flags.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/brand-deal-contract-red-flags',
  },
}

const redFlags = [
  { title: 'Perpetual or unlimited usage rights', body: 'A brand asking to use your face, voice, or content "in perpetuity" or "across all media, worldwide" can repurpose it in ads indefinitely — long after the deal ends — often without paying you again. Ask for a time-limited license (6–12 months is a common starting point) instead of open-ended rights.' },
  { title: 'Vague deliverables', body: 'Wording like "multiple social media posts" leaves nearly everything open to interpretation. A solid contract states exact platforms, formats (Story, Reel, static post), quantities, and how many rounds of revisions are included.' },
  { title: 'Broad exclusivity with no extra pay', body: 'Being blocked from working with competing brands for months can cost real income — and exclusivity is a separate ask from the core deliverable. If a brand wants it, that\'s a reasonable moment to ask for additional compensation, not a favor to grant for free.' },
  { title: 'One-sided termination', body: 'Watch for a brand retaining the right to cancel at any time without cause, while you have no equivalent protection — and check whether you\'re still paid for work already completed if a campaign ends early.' },
  { title: 'Vague or delayed payment terms', body: 'Payment terms should state the exact amount, currency, and a specific timeline — not "payment upon completion" with no defined window. Delays of 90–120 days after posting aren\'t unheard of, and are worth negotiating down upfront.' },
  { title: 'Broad morality or behavior clauses', body: 'Extremely broad language letting a brand terminate — and sometimes claw back payment — based on subjective judgments about your off-platform behavior deserves a closer read and, often, narrower wording.' },
  { title: 'Disclosure responsibility shifted entirely to you', body: 'Some contracts place full responsibility for FTC or ASA disclosure compliance on the creator, even when the brand\'s own instructions push against clear disclosure. If a brand asks you to downplay or hide a disclosure, that\'s a signal to slow down, not comply.' },
  { title: '"Non-negotiable" framing on everything', body: 'A contract is meant to be a mutual agreement. A brand unwilling to adjust any term that affects your income, workload, or rights is worth treating as a caution flag — most brands genuinely expect some negotiation, especially from creators with a track record.' },
  { title: 'Indemnification with no cap', body: 'Some contracts require you to cover legal costs or damages, sometimes for issues outside your control, with no limit on that exposure. A liability cap tied to the actual deal value is a reasonable ask.' },
]

const beforeSigning = [
  'Confirm the contract names the actual legal entity paying you — not just a brand handle or product name.',
  'Check that payment amount, currency, and a specific timeline are all explicitly stated, not implied.',
  'Look specifically for the words "perpetual," "in perpetuity," "worldwide," and "all media" — these usually signal broad usage rights worth narrowing.',
  'Confirm you\'re paid for completed work if the brand ends the campaign early.',
  'Check that the contract explicitly allows normal sponsored disclosure and platform tools (paid partnership labels) — a brand restricting disclosure is a serious flag, not a minor one.',
  'If AI-generated or "synthetic media" content is mentioned, confirm your explicit consent and compensation are required before your likeness is used that way.',
]

const faqs = [
  { q: 'Do I need a lawyer to review every brand deal contract?', a: 'Not necessarily every deal — but for higher-value partnerships, long exclusivity periods, or perpetual content rights, a flat-fee contract review from a creator-focused attorney is a reasonable investment relative to what\'s at stake. For smaller, lower-risk deals, working through a red-flag checklist yourself is often sufficient.' },
  { q: 'Is it normal to negotiate a brand\'s standard contract?', a: 'Yes — brands routinely send a starting template, not a final offer, and expect some negotiation, particularly from creators with an established track record. Asking for changes doesn\'t typically jeopardize a deal; declining to ask rarely improves your terms.' },
  { q: 'What\'s a reasonable usage rights period if a brand wants to run my content as an ad?', a: 'There\'s no single universal standard, but a defined window — commonly proposed in the 6–12 month range — is a frequent starting point for negotiation, rather than agreeing to open-ended or perpetual rights.' },
  { q: 'Should exclusivity always come with extra pay?', a: 'It\'s a reasonable position to take. Exclusivity restricts your ability to earn from competing brands during that window, so treating it as a separately priced request — rather than something automatically bundled into the base rate — is a defensible negotiating stance.' },
  { q: 'What should I do if a brand pushes back on adding a kill fee or cancellation terms?', a: 'A brand unwilling to include any compensation for work completed before a cancellation is worth treating cautiously — it signals the brand may not be planning to protect your time if their priorities shift mid-campaign.' },
  { q: 'Is a verbal agreement or a simple email confirmation enough instead of a full contract?', a: 'For any deal involving real money, a written agreement covering deliverables, payment, usage rights, and what happens if something changes is strongly preferable to a verbal handshake — disputes over exactly these points are one of the most common sources of conflict between creators and brands.' },
]

export default function ContractRedFlagsPage() {
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
            {['Brand Deals', 'Contracts', 'Creator Protection'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Brand Deal Contract<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Red Flags to Check</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Most bad brand deals don't look bad at signing — they look "standard." The damage is usually buried in a few specific clauses: usage rights, exclusivity, termination, and payment terms. Here's exactly what to check before you sign anything.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Contract Red Flags</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Watch for "perpetual," "in perpetuity," or "worldwide, all media" usage rights language — it can let a brand reuse your content indefinitely without paying again.',
                'Vague deliverables ("multiple posts") should be replaced with exact platforms, formats, quantities, and revision limits.',
                'Exclusivity that blocks competing brands should come with its own compensation, not be bundled in for free.',
                'One-sided termination — where the brand can cancel anytime but you can\'t — is a clause worth pushing back on, along with confirming payment for completed work.',
                'A brand that calls every term "non-negotiable" or restricts your ability to disclose the partnership are both serious caution signs, not routine boilerplate.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Influencer Contracts</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'A written contract is the standard expectation for any brand deal involving real compensation — a verbal or DM agreement leaves both sides exposed if something goes wrong.',
                'Contract review specialists consistently flag the same handful of clause types across the industry: usage rights, exclusivity, termination, payment timing, and disclosure responsibility.',
                'Some contracts now specifically address "digital likeness" or "synthetic media" — meaning a brand could generate AI content using a creator\'s face, voice, or style, which is worth explicit attention as this becomes more common.',
                'Negotiation is a normal, expected part of the process for most brand deals — a first draft contract is typically a starting point, not a final offer.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Red flags list */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Nine Clauses Worth a Closer Read</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {redFlags.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{i + 1}. {row.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Checklist */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>A Quick Checklist Before You Sign</h2>
            <div className="card" style={{ padding: '24px 26px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {beforeSigning.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#FF6B2B', fontSize: 14, marginTop: 2 }}>☐</span>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
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

          {/* Disclaimer */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '18px 22px', marginBottom: 56 }}>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, lineHeight: 1.6 }}>
              This article is general information, not legal advice. Contract terms and their consequences vary by jurisdiction and by the specific deal — consult a lawyer for guidance on a contract you're actually about to sign, especially for high-value or long-term partnerships.
            </p>
          </div>

          {/* Related */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14 }}>
              {[
                { href: '/blog/ftc-disclosure-rules-influencers-2026', title: 'FTC Disclosure Rules for Influencers (2026 Guide)', tag: 'Compliance' },
                { href: '/blog/nano-micro-macro-influencer-rates', title: 'Nano vs. Micro vs. Macro Influencers: What Brands Actually Pay For', tag: 'Rate Card' },
                { href: '/blog/how-to-make-a-media-kit', title: 'How to Make a Media Kit as a Creator (Free Guide, 2026)', tag: 'Media Kit' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>📜</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Walk into every negotiation looking prepared.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with your media kit, rate card, and creator CV — brands take contract negotiation more seriously when they can see you run this like a business.
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
