import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Handle Content Revisions & Scope Creep in Brand Deals (India 2026)',
  description: 'A creator-side guide to setting revision limits, spotting scope creep before it happens, and handling "one more small change" requests from Indian brands — with contract language, scripts, and a fair revision-round pricing structure.',
  keywords: 'influencer unlimited revisions india, scope creep brand deal india, how many revisions influencer contract india, brand keeps asking for changes influencer, revision rounds contract india creator',
  openGraph: {
    title: 'How to Handle Content Revisions & Scope Creep in Brand Deals (India 2026)',
    description: '"Just one more small tweak" is how a single Reel turns into five hours of unpaid re-edits. Here\'s how Indian creators can set revision limits and protect their time without damaging the relationship.',
    url: 'https://identitykit.in/blog/content-revisions-scope-creep-brand-deals-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/scope-creep-brand-deals-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/content-revisions-scope-creep-brand-deals-india-2026',
  },
}

const scopeCreepSigns = [
  'A "small tweak" request that actually requires reshooting, not just re-editing',
  'The brand asks for an entirely different hook, script, or concept — not a revision of what was delivered',
  'Additional deliverables get requested mid-project that weren\'t in the original brief ("could you also do a Story version?")',
  'Feedback keeps arriving in small pieces over days instead of one consolidated round',
  'The brand references vague standards like "make it pop more" or "just needs more energy" with no specific direction',
  'A new stakeholder joins late and asks for changes that contradict earlier approved feedback',
]

const revisionStructure = [
  { round: 'Round 1 (included)', detail: 'Minor adjustments to the delivered draft — trimming length, swapping a line of text, adjusting captions. Covered in your base rate.' },
  { round: 'Round 2 (included)', detail: 'A second round for any remaining small fixes. Most projects should be fully approved by the end of this round.' },
  { round: 'Round 3+ (chargeable)', detail: 'Additional rounds beyond the included two typically cost 10–20% of your base rate per round — communicated clearly before you begin any extra work.' },
  { round: 'New concept or reshoot', detail: 'Not a revision at all — this is a new deliverable. Price it as such, with its own fee, rather than treating it as "more feedback" on the original.' },
]

const contractLanguage = [
  { clause: 'Revision limit', text: '"This agreement includes up to 2 rounds of revisions on the delivered content. Additional revision rounds are billed at 15% of the base fee per round."' },
  { clause: 'Approval window', text: '"Brand will provide consolidated feedback within 3 business days of receiving the draft. If no feedback is received within this window, the content is considered approved."' },
  { clause: 'Revision vs. new deliverable', text: '"A revision is a modification to the delivered content\'s existing concept. A request for a different concept, script, or format is a new deliverable and will be quoted separately."' },
  { clause: 'Consolidated feedback', text: '"All feedback for a given round must be submitted together in a single message. Feedback submitted in multiple separate rounds will count as separate revision rounds."' },
]

const scripts = [
  { moment: 'When a brand asks for a 3rd round after 2 are included', script: '"Happy to make this change! Just a heads up — this would be our third round, so as per our agreement this one\'s billed at [X]% of the project fee. Want me to go ahead?"' },
  { moment: 'When a "small tweak" is actually a full reshoot', script: '"This one\'s a bit bigger than a revision — reshooting the [X] would mean redoing the whole segment. I can quote this as an additional deliverable at [amount], or we can work within what\'s already shot for round 2."' },
  { moment: 'When feedback keeps trickling in over several days', script: '"To keep us on track, could we consolidate all remaining feedback into one message? I\'ll action everything together in the next revision round."' },
  { moment: 'When a brand asks for extra unplanned deliverables mid-project', script: '"Happy to add a Story version! Since that\'s outside our original scope, I\'ll send a quick add-on quote for it — let me know if you\'d like to proceed."' },
]

export default function ScopeCreepIndiaPage() {
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
            {['Scope Creep', 'Brand Deals', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Handling Revisions & Scope Creep<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>in Brand Deals (India 2026)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            "Just one more small tweak" is how a single Reel quietly turns into five unpaid hours of re-edits. Almost every dispute between Indian creators and brands traces back to one thing: revisions were never capped in writing. Here's how to set that limit — and hold it — without damaging the relationship.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Handling Scope Creep as an Indian Creator</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Cap revisions at 2 rounds in your contract before work begins — never leave this open-ended or "to the brand\'s satisfaction"',
                'Define what counts as a revision (a tweak to the existing concept) vs. a new deliverable (a different concept, script, or format)',
                'Charge 10–20% of your base rate for each revision round beyond what\'s included, and say so upfront, not after the brand asks',
                'Require consolidated feedback in one message per round, rather than accepting feedback trickling in over days',
                'A brand refusing to agree to any revision cap at all is a real warning sign worth addressing before you sign',
                'Put every scope change in writing — a verbal "just one more thing" over a call has no protection if a dispute comes up later',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Revisions & Scope Creep in Brand Deals</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'A large majority of influencer-brand disputes are traced back to vague or undefined contract terms, with unclear deliverables and missing revision limits among the most common root causes.',
                'An unlimited or uncapped revision clause is widely considered a red flag for creators — it removes any brand incentive to finalise feedback quickly.',
                'A standard, fair structure caps included revisions at 2 rounds, with each additional round billed separately, commonly at 10–20% of the base project fee.',
                'A clear approval window (commonly 3–5 business days for the brand to respond) with a "no response counts as approval" clause is a recognised way to prevent indefinite review cycles.',
                'Freelancers and creators who use written contracts with clear scope and revision terms report meaningfully fewer payment and scope disputes than those relying on informal, DM-based agreements.',
                'A request for a fundamentally different concept, script, or format — rather than a tweak to what was delivered — is best treated and priced as a new deliverable, not an extra revision round.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Signs of scope creep */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>6 Signs a "Revision" Is Actually Scope Creep</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Learning to spot the difference early is what protects your time — and your rate.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {scopeCreepSigns.map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,152,0,0.05)', border: '1px solid rgba(255,152,0,0.18)', borderRadius: 12, padding: '14px 20px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#FF9800', flexShrink: 0, fontWeight: 700 }}>⚠</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Revision structure */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>A Fair Revision Structure to Use in Every Contract</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Set this before the project starts, not when the third round of feedback lands in your inbox.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {revisionStructure.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6, color: '#FF6B2B' }}>{item.round}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Bake revision limits into your contract from day one</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Use the free Identity Kit brand deal contract template — revision rounds, approval windows, and scope language already built in.</p>
            </div>
            <Link href="/tools/brand-deal-contract-template" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Get My Contract Template →
            </Link>
          </div>

          {/* Contract language */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Exact Contract Language to Use</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Copy these clauses directly into your next agreement.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {contractLanguage.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#FF6B2B', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>{item.clause}</div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '12px 16px', color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6, fontStyle: 'italic' }}>{item.text}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Scripts */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>What to Say When a Brand Pushes Past the Limit</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Holding the line doesn't have to mean being confrontational — these scripts stay professional while still protecting your time.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {scripts.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#FF6B2B', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>{item.moment}</div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '12px 16px', color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6, fontStyle: 'italic' }}>{item.script}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'How many revision rounds should I include in my base rate?', a: '2 rounds is the standard, fair default for most content deliverables. This gives the brand room to request genuine adjustments while keeping the project from dragging on indefinitely — anything beyond that should be a separate, paid round.' },
                { q: 'What\'s the difference between a revision and a new deliverable?', a: 'A revision is a change to the existing concept you already delivered — trimming length, swapping a line of text, adjusting the caption. A request for a different script, concept, or format entirely is a new deliverable and should be quoted and paid for separately, not folded into a "revision."' },
                { q: 'Should I charge for extra revision rounds, or just do them to keep the brand happy?', a: 'Charge for them, and say so clearly before doing the extra work — typically 10–20% of your base rate per additional round. Doing unlimited free revisions to "keep the brand happy" often backfires: it removes any incentive for the brand to finalise feedback quickly, and trains them to expect the same on every future project.' },
                { q: 'What should I do if a brand won\'t agree to a revision cap at all?', a: 'Treat it as a real warning sign. A brand unwilling to agree to any limit on revisions is effectively asking you to take on unlimited, unpaid risk — and this pattern usually continues throughout the working relationship, not just at the contract stage.' },
                { q: 'How do I handle feedback that trickles in over several days instead of all at once?', a: 'Set the expectation upfront that each revision round requires consolidated feedback delivered in a single message, and politely ask for exactly that when feedback starts arriving piecemeal: "Could we consolidate all remaining feedback into one message so I can action it together?" This alone prevents a huge share of scope creep.' },
                { q: 'What if the brand asks for extra deliverables mid-project that weren\'t in the original brief?', a: 'Treat any deliverable outside your original scope — an extra Story version, a second platform post — as a paid add-on, not a favour. A quick, friendly quote ("Happy to add that — here\'s a small add-on cost for it") keeps the relationship positive while protecting your rate.' },
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
                { href: '/blog/brand-deal-contract-template-india', title: 'Brand Deal Contract Template for Indian Creators', tag: 'Legal' },
                { href: '/blog/how-to-negotiate-brand-deal-rates-india-2026', title: 'How to Negotiate Brand Deal Rates in India', tag: 'Negotiation' },
                { href: '/blog/how-to-get-paid-by-brands-india-2026', title: 'How to Get Paid by Brands in India', tag: 'Getting Paid' },
                { href: '/blog/ugc-pricing-india-2026', title: 'UGC Content Pricing in India 2026', tag: 'UGC Pricing' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🔁</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Set the limit once. Stop relitigating it every project.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a professional contract template that already has revision limits built in.
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
          <Link href="/tools/influencer-rate-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Rate Calculator</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
