import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Talent Agency vs Self-Represented Creator in India 2026: Which Should You Choose?',
  description: 'A creator-side decision guide for Indian influencers weighing a talent management agency against staying self-represented — real commission rates (15-25%), when each model makes sense, hybrid structures, and the tools that let you self-manage professionally.',
  keywords: 'influencer talent agency vs self managed india, should i sign with an influencer agency india, influencer agency commission india, self represented influencer india, do i need a manager as an influencer india',
  openGraph: {
    title: 'Talent Agency vs Self-Represented Creator in India 2026: Which Should You Choose?',
    description: 'A manager can double your rates and 3x your workload. Here\'s exactly when an agency earns its 15-25% cut in India — and when you\'re better off self-repped.',
    url: 'https://identitykit.in/blog/talent-agency-vs-self-represented-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/agency-vs-self-represented-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/talent-agency-vs-self-represented-india-2026',
  },
}

const agencyPros = [
  'Access to bigger brands and campaigns — larger companies often prefer working through established agencies',
  'Agents typically negotiate stronger rates than most creators would land on their own, sometimes enough to offset their commission entirely',
  'Contracts, invoicing, and follow-ups are handled for you, freeing up meaningful time for content creation',
  'Legal protection and professional review of brand contracts before you sign anything',
  'A steady inbound deal flow instead of having to constantly pitch brands yourself',
]

const agencyCons = [
  'Commission typically runs 15–25% on every deal, taken off the top regardless of how the relationship started',
  'Reduced creative control — agencies often negotiate deal terms without your direct input at every stage',
  'Exclusivity clauses can prevent you from taking deals outside the agency, even ones you sourced yourself',
  'Minimum commitment periods (often 6–12 months or longer) that are hard to exit early',
  'Agency turnover — your specific agent can leave or be reassigned, disrupting the relationship you built',
]

const selfRepPros = [
  'You keep 100% of every deal — no commission taken off the top',
  'Full creative and negotiation control over every collaboration',
  'Direct brand relationships that you own and can carry forward regardless of any agency situation',
  'No exclusivity restrictions — you decide which brands and categories to work with',
  'Complete flexibility on deal terms, timelines, and which opportunities to pursue',
]

const selfRepCons = [
  'You handle all outreach, negotiation, contracts, invoicing, and follow-ups yourself',
  'Some larger brands and bigger-budget campaigns are only accessible through agency relationships',
  'No one reviewing your contracts for red flags before you sign',
  'Higher time investment — sales and admin work compete directly with content creation time',
]

const decisionSigns = [
  { sign: 'Your brand deal admin exceeds 15-20 hours a month', lean: 'Agency worth considering' },
  { sign: 'You genuinely enjoy negotiation and business development', lean: 'Self-represented' },
  { sign: 'You\'re consistently landing ₹1L+ deals but want to focus purely on content', lean: 'Agency worth considering' },
  { sign: 'You have strong, existing direct brand relationships you don\'t want diluted', lean: 'Self-represented' },
  { sign: 'You want access to specific large brands that only work through agencies', lean: 'Agency worth considering' },
  { sign: 'You\'re earlier in your journey and every rupee of revenue matters', lean: 'Self-represented' },
  { sign: 'You dislike the sales/negotiation side and it\'s holding back your growth', lean: 'Agency worth considering' },
]

const hybridModel = [
  { approach: 'Tiered representation', detail: 'Self-represented for smaller deals (where the commission would eat too much of the value), agency-repped for larger campaigns above a set threshold — a genuinely common middle ground as creators scale.' },
  { approach: 'Non-exclusive management', detail: 'Some managers work on a per-deal basis without long-term exclusivity, taking commission only on the deals they source or actively negotiate, while you keep 100% of deals you land yourself.' },
  { approach: 'Tools instead of a team', detail: 'A structured media kit, rate card, contract template, and invoicing system can replace much of what a manager\'s admin work covers — letting you stay self-represented without the operational chaos.' },
]

export default function TalentAgencyVsSelfRepIndiaPage() {
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
            <Link href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Tools</Link>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Get Started Free</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto' }}>
        <div className="hero-pad" style={{ padding: '64px 24px 40px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['Agency vs Self-Rep', 'Creator Career', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Talent Agency or Self-Represented?<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>The Real Decision for Indian Creators</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A good manager can land you deals you'd never get on your own — and take 15-25% of every one of them, forever. This is one of the most consequential business decisions a growing Indian creator makes. Here's how to actually decide, without the sales pitch from either side.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Agency or Self-Represented in India?</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Talent agencies in India typically take 15–25% commission per deal in exchange for deal flow, negotiation, and admin handling',
                'Self-representation makes the most sense while building your portfolio, when every rupee matters, or if brand admin is under 15-20 hours a month',
                'An agency becomes worth considering once admin consistently exceeds 15-20 hours a month, or you need access to specific large brands that only work through agencies',
                'A hybrid model — self-repped for smaller deals, agency-repped for larger ones — is a genuinely common middle ground as creators scale',
                'Tools like a structured media kit, rate card, contract template, and invoicing system can replace much of what a manager\'s admin work covers',
                'Always negotiate exclusivity terms and minimum commitment periods carefully — these are often more restrictive than the commission percentage itself',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Agencies & Talent Management in India</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Talent managers and agencies in India commonly charge 15–25% commission on top of the negotiated rate for macro and celebrity-tier creators.',
                'Creators with management often report higher average rates than self-represented peers, since managers are financially incentivised to negotiate strong pricing.',
                'Most Indian influencer agency commission structures apply per-deal, meaning the percentage is taken whether the relationship is short-term or long-standing.',
                'A DIY approach to a single brand campaign — research, outreach, negotiation, contracting, and tracking — commonly takes 5-10 hours of a creator\'s time, a meaningful opportunity cost at scale.',
                'The traditional commission-and-move-on agency model is increasingly viewed as less sustainable in India\'s market, with growth shifting toward deeper, longer-term brand partnerships rather than one-off deal volume.',
                'Self-represented creators using structured rate cards and contract tools report closing deals with meaningfully fewer disputes than those relying on informal, DM-negotiated arrangements.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pros and cons side by side */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Agency Representation: Pros & Cons</h2>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.2)', borderRadius: 14, padding: '20px 22px' }}>
                <div style={{ color: '#4CAF50', fontWeight: 800, fontSize: 14, marginBottom: 14 }}>✓ Pros</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {agencyPros.map((t, i) => (
                    <div key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.55 }}>{t}</div>
                  ))}
                </div>
              </div>
              <div style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.15)', borderRadius: 14, padding: '20px 22px' }}>
                <div style={{ color: '#FF5252', fontWeight: 800, fontSize: 14, marginBottom: 14 }}>✗ Cons</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {agencyCons.map((t, i) => (
                    <div key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.55 }}>{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Self-Represented: Pros & Cons</h2>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.2)', borderRadius: 14, padding: '20px 22px' }}>
                <div style={{ color: '#4CAF50', fontWeight: 800, fontSize: 14, marginBottom: 14 }}>✓ Pros</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {selfRepPros.map((t, i) => (
                    <div key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.55 }}>{t}</div>
                  ))}
                </div>
              </div>
              <div style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.15)', borderRadius: 14, padding: '20px 22px' }}>
                <div style={{ color: '#FF5252', fontWeight: 800, fontSize: 14, marginBottom: 14 }}>✗ Cons</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {selfRepCons.map((t, i) => (
                    <div key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.55 }}>{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Decision signs */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Which Way Do You Lean? Quick Signals</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>No single factor decides this — weigh a few of these together against your specific situation.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {decisionSigns.map((row, i) => (
                <div key={i} className="card" style={{ padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                  <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13.5, flex: 1, minWidth: 200 }}>{row.sign}</span>
                  <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '3px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' }}>{row.lean}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Stay self-represented, minus the operational chaos</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>A free Identity Kit profile with your media kit, rate card, and contract template handles the admin a manager would otherwise charge you 15-25% for.</p>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build My Free Profile →
            </Link>
          </div>

          {/* Hybrid model */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>The Hybrid Middle Ground</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>This isn't always a binary choice — many growing creators land somewhere in between.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {hybridModel.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF6B2B' }}>{item.approach}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'How much commission do talent agencies charge influencers in India?', a: 'Commission typically runs 15–25% per deal for macro and celebrity-tier creators working through management agencies. This is usually taken off the top of the negotiated rate, or sometimes negotiated into the total quote so the brand pays a slightly higher combined figure.' },
                { q: 'At what follower count should I consider getting an agency in India?', a: 'There\'s no fixed threshold — it depends more on deal volume and admin load than follower count alone. A common signal is when brand deal administration (outreach, negotiation, contracts, invoicing, follow-ups) consistently exceeds 15–20 hours a month, since that\'s the point where a manager\'s time-saving value starts to clearly outweigh their commission.' },
                { q: 'Will an agency actually get me better rates, enough to cover their commission?', a: 'Often, yes, particularly for creators who dislike or are inexperienced at negotiation. Agents typically negotiate stronger rates than most creators land independently, and in some cases the rate increase covers most or all of the commission — but this varies significantly by agency quality and your specific niche.' },
                { q: 'Can I negotiate the commission percentage with an agency?', a: 'Yes, commission rates and structures are generally negotiable, especially for creators with an existing track record or strong direct brand relationships. It\'s worth asking about non-exclusive arrangements or tiered structures (lower commission on deals you source yourself) rather than accepting a flat, non-negotiable rate.' },
                { q: 'What should I check in an agency contract before signing?', a: 'Pay close attention to the exclusivity clause (can you take deals outside the agency, and in which categories), the minimum commitment period (how long you\'re locked in), commission structure (flat rate vs. tiered), and what happens to your existing direct brand relationships once you sign — some contracts try to claim commission on relationships you already had.' },
                { q: 'Is it possible to stay self-represented and still work with big brands in India?', a: 'Yes, though some large enterprise brands do prefer or default to agency relationships for bigger campaigns. A professional media kit, clear rate card, and strong past-results documentation go a long way toward making a self-represented creator look just as credible and easy to work with as an agency-repped one for mid-size and many large brand deals.' },
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
                { href: '/blog/how-to-become-brand-ambassador-india-2026', title: 'How to Become a Brand Ambassador in India', tag: 'Brand Ambassador' },
                { href: '/blog/how-to-negotiate-brand-deal-rates-india-2026', title: 'How to Negotiate Brand Deal Rates in India', tag: 'Negotiation' },
                { href: '/blog/influencer-rate-card-india-2026', title: 'Influencer Rate Card India 2026', tag: 'Rate Card' },
                { href: '/blog/brand-deal-contract-template-india', title: 'Brand Deal Contract Template for Indian Creators', tag: 'Legal' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>⚖️</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Whichever path you choose, look professional doing it.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile — the same media kit and rate card whether you're pitching brands yourself or handing it to your manager.
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
          <Link href="/tools/influencer-rate-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Rate Calculator</Link>
          <Link href="/tools/brand-deal-contract-template" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contract Template</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
