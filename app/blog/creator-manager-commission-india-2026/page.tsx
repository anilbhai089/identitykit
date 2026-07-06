import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Should You Charge as a Creator Manager in India? (2026 Commission Guide)',
  description: 'A practical guide to pricing your services as an influencer/creator manager in India — standard commission percentages, why managers should never charge upfront, the "tail clause" that protects your commission after a contract ends, and real rupee examples.',
  keywords: 'how much do influencer managers charge india, creator manager commission percentage, influencer manager fee india, talent manager tail clause, how to price creator management services',
  openGraph: {
    title: 'How Much Should You Charge as a Creator Manager in India? (2026 Commission Guide)',
    description: 'The standard is 15-20% commission on deals you bring in — and you should never charge a creator upfront. Here\'s exactly how to structure your fee.',
    url: 'https://identitykit.in/blog/creator-manager-commission-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/creator-manager-commission-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/creator-manager-commission-india-2026',
  },
}

const commissionExamples = [
  { deal: '₹15,000 brand deal you negotiated', commission: '20%', earnings: '₹3,000' },
  { deal: '₹50,000 brand deal you negotiated', commission: '20%', earnings: '₹10,000' },
  { deal: '₹2,00,000 ambassador retainer (monthly)', commission: '15%', earnings: '₹30,000/month' },
]

const neverUpfront = [
  'Managers work on commission and shouldn\'t get paid until the creator gets paid — this is the single most important rule in the relationship',
  'Charging an upfront fee before any deals are closed creates a conflict of interest: you get paid whether or not you actually deliver results',
  'A creator asked to pay upfront should treat it as a genuine warning sign about the manager\'s confidence in their own ability to close deals',
  'The exception is a separate, clearly defined retainer for specific admin work (invoicing, scheduling) — but this should be transparent and distinct from commission on deals',
]

const contractTerms = [
  { term: 'Commission percentage', detail: '15-20% is the broad industry norm for deals the manager sources or negotiates. Higher percentages should come with a clearly higher level of service.' },
  { term: 'Scope of commission', detail: 'Define exactly what counts — only brand deals, or also affiliate income, ad revenue, merchandise? A well-drafted agreement specifies exactly which earnings the commission applies to.' },
  { term: 'The "tail clause"', detail: 'If a manager brings a brand deal to a creator and the creator later ends the management relationship, most agreements still entitle the manager to their commission on that specific brand relationship for a defined period afterward — commonly around 12 months. This protects the manager from a creator taking a sourced deal and cutting them out.' },
  { term: 'Exclusivity', detail: 'Most management agreements are exclusive — the creator agrees not to use another manager for the same scope of work during the contract term. This should be a two-way commitment, not just an obligation on the creator.' },
  { term: 'Contract length & exit terms', detail: 'A reasonable term is commonly 6-12 months with clear renewal or exit terms. Be wary of unusually long lock-in periods (multi-year commitments) with no reasonable way out.' },
  { term: 'No hidden admin fees', detail: 'Additional charges beyond the agreed commission — vague "administrative fees" — are a common point of friction and should be avoided or, at minimum, clearly disclosed upfront.' },
]

const negotiationTips = [
  'A rockstar manager who can genuinely move a creator up in rate and opportunity tier can reasonably charge slightly more than the baseline — the value should be visible in results, not just claimed',
  'Consider a lower introductory percentage (e.g. 10-15%) for your first few clients while you build a track record, then move toward the 15-20% standard as your results speak for themselves',
  'If a creator pushes back on your percentage, reframe the conversation around outcomes: a good manager should bring in meaningfully more than their cut costs, not just take a slice of what the creator would have earned anyway',
  'Be transparent from the first conversation about your percentage, what it covers, and the tail clause — surprises here damage trust fast',
]

export default function CreatorManagerCommissionIndiaPage() {
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
            {['Creator Manager', 'Commission', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How Much Should You Charge<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>as a Creator Manager in India?</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            The standard is a 15-20% commission on the deals you bring in — and one rule matters more than the exact percentage: never charge a creator upfront. Here's how to price your services fairly, and the exact contract terms that protect both sides.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Creator Manager Pricing in India</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'The broad industry standard is 15-20% commission on deals a manager sources or negotiates on the creator\'s behalf',
                'Managers should never charge upfront — payment only happens once the creator actually gets paid, aligning incentives on both sides',
                'A well-drafted agreement specifies exactly which income the commission applies to — brand deals only, or also affiliate income, ad revenue, or merchandise',
                'A "tail clause" is standard practice — if a creator ends the management relationship, the manager still earns commission on deals they sourced for a defined period afterward, often around 12 months',
                'New managers building a track record sometimes start with a lower introductory rate (10-15%) before moving to the 15-20% standard',
                'Avoid unusually long contract lock-ins and vague additional "admin fees" beyond the agreed commission percentage',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Creator Manager Compensation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'The commission percentage that influencer and creator managers charge typically falls in the 10-20% range, with 15-20% being the most commonly cited norm across the industry.',
                'A cardinal rule widely repeated across influencer management guidance: managers work on commission and shouldn\'t get paid until the creator gets paid — never upfront.',
                'A well-drafted management agreement specifies exactly which earnings the commission applies to, since sponsorship deals, ad revenue, and merchandise income may or may not all be included.',
                'A "tail clause" — continuing commission on deals a manager sourced for roughly a year after the relationship ends — is standard practice specifically to prevent a creator from taking a sourced deal and cutting the manager out.',
                'The influencer management market remains largely unregulated compared to more formal industries like talent representation for actors, meaning commission percentages and contract terms are genuinely negotiable rather than fixed by any governing standard.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Commission examples */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Real Commission Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {commissionExamples.map((row, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ flex: 1, minWidth: 220 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{row.deal}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>Commission: {row.commission}</div>
                  </div>
                  <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '4px 12px', borderRadius: 100, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>You earn: {row.earnings}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Never upfront */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>The One Rule That Matters More Than the Percentage</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Never charge a creator upfront for management services tied to future deals.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {neverUpfront.map((item, i) => (
                <div key={i} style={{ background: 'rgba(76,175,80,0.04)', border: '1px solid rgba(76,175,80,0.12)', borderRadius: 12, padding: '14px 20px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Prove your value with the deals you actually close</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Use the free Identity Kit rate card and media kit tools to help your creator client land better deals — the clearest way to justify your commission.</p>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Set Up Their Free Profile →
            </Link>
          </div>

          {/* Contract terms */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>6 Terms Every Manager-Creator Agreement Needs</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {contractTerms.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF6B2B' }}>{item.term}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Negotiation tips */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>How to Justify and Negotiate Your Percentage</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {negotiationTips.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#FF6B2B', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'What\'s the standard commission percentage for a creator manager in India?', a: 'The broadly cited industry norm is 15-20% of deals the manager sources or negotiates. This isn\'t a regulated figure — the influencer management space is largely unregulated compared to formal talent representation — so it\'s genuinely negotiable between the manager and creator.' },
                { q: 'Should a creator manager ever charge an upfront fee?', a: 'Generally no, for commission-based work — a manager should be paid once the creator is paid, not before. A separate, clearly disclosed flat retainer for defined admin work (like invoicing or scheduling) is different and can be reasonable, but it should be distinct from commission on deals, not a substitute for it.' },
                { q: 'What is a "tail clause" and why does it matter?', a: 'A tail clause states that if a manager brings a brand deal to a creator, the manager continues earning commission on that specific relationship for a defined period (commonly around 12 months) even after the management agreement ends. It exists to prevent a creator from taking a manager-sourced deal and cutting the manager out right after ending the relationship.' },
                { q: 'Does the commission apply to all of a creator\'s income, or just deals the manager closes?', a: 'This should be explicitly defined in the agreement — it varies. Some agreements cover only sponsorship deals the manager directly sources or negotiates; others extend to a broader range of income like ad revenue or merchandise. A well-drafted agreement specifies exactly which earnings are included.' },
                { q: 'Can a new creator manager charge a lower percentage while building a track record?', a: 'Yes, this is a reasonable and common approach — starting with a lower introductory rate (around 10-15%) for early clients while building results and case studies, then moving toward the 15-20% standard as your track record speaks for itself.' },
                { q: 'What contract length is reasonable for a creator-manager relationship?', a: 'A 6-12 month term with clear renewal or exit terms is a reasonable standard. Be cautious of unusually long lock-in periods spanning multiple years with no practical way to exit — this level of commitment should be reserved for well-established, trusted relationships, not a first agreement.' },
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
                { href: '/blog/how-to-become-influencer-manager-india-2026', title: 'How to Become an Influencer/Creator Manager in India', tag: 'Creator Manager' },
                { href: '/blog/talent-agency-vs-self-represented-india-2026', title: 'Talent Agency vs Self-Represented Creator in India', tag: 'Agency vs Self-Rep' },
                { href: '/blog/how-to-negotiate-brand-deal-rates-india-2026', title: 'How to Negotiate Brand Deal Rates in India', tag: 'Negotiation' },
                { href: '/blog/managing-multiple-brand-deals-india-2026', title: 'How to Manage Multiple Brand Deals at Once', tag: 'Deal Pipeline' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>💼</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Earn your commission by making it easy to say yes.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile for your creator client — a professional media kit and rate card make every pitch you send stronger.
            </p>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Create a Free Identity Kit →
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
          <Link href="/tools/influencer-rate-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Rate Calculator</Link>
          <Link href="/tools/brand-deal-contract-template" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contract Template</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
