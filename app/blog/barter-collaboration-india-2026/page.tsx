import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Barter Collaboration in India 2026: When to Accept Free Products (and When to Say No)',
  description: 'A creator-side guide to barter collaborations in India — when free products are worth it, when to demand payment instead, a value calculator framework, red flags in barter pitches, and how to convert barter relationships into paid deals.',
  keywords: 'barter collaboration india, should i accept free products influencer, barter vs paid collaboration india, barter collab influencer india, when to accept pr package india, free product collaboration influencer india',
  openGraph: {
    title: 'Barter Collaboration in India 2026: When to Accept Free Products (and When to Say No)',
    description: 'Barter deals are how almost every Indian creator starts — but accepting the wrong ones for too long can cap your income. A creator-first framework for deciding, negotiating, and graduating to paid.',
    url: 'https://identitykit.in/blog/barter-collaboration-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/barter-collaboration-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/barter-collaboration-india-2026',
  },
}

const goodBarter = [
  'You genuinely would have bought the product yourself, or use similar products regularly',
  'The product\'s retail value is meaningfully higher than the time and effort the content will take you to create',
  'The brand is a strong portfolio addition — a recognisable name that will make future paid pitches easier',
  'You\'re a newer creator (under 5,000–10,000 followers) actively building a portfolio and case studies',
  'The deliverable ask is light — one post or a couple of Stories, not a multi-platform content package',
]

const badBarter = [
  'The ask is disproportionate to the product value — e.g. 3 Reels, 5 Stories, and a YouTube mention for a ₹500 product',
  'You already have 5+ similar barter partnerships and no paid deals — a sign you\'re stuck, not growing',
  'The brand asks for usage rights or ad-run permissions with zero compensation attached',
  'The brand demands exclusivity (no competitor promotion for X months) without paying for it',
  'You don\'t genuinely like or use the product — the content will read as inauthentic, which hurts trust with your own audience',
  'The brand has a pattern of only offering barter, never graduating creators to paid work even after repeat collaborations',
]

const decisionSteps = [
  { step: '01', title: 'Calculate the product\'s real value to you', body: 'Not the brand\'s MRP — the actual value to you personally. A ₹5,000 skincare set is worth less to you if you\'ll never use half of it than a ₹1,500 product you\'ll use daily.' },
  { step: '02', title: 'Estimate your time cost honestly', body: 'Add up filming, editing, and posting time. If a Reel takes you 3 hours and you value your time at even ₹500/hour, that\'s ₹1,500 of effort — compare that directly against what you\'re receiving.' },
  { step: '03', title: 'Weigh the portfolio value separately', body: 'A collaboration with a well-known brand has case-study value beyond the product itself — it can be cited in future pitches. Weight this higher if you\'re under 10,000 followers and still building credibility.' },
  { step: '04', title: 'Check what rights the brand is asking for', body: 'A simple organic post is very different from "we may use this in paid ads for 6 months." Usage rights and ad-run permissions should never be included in a barter deal for free — treat that ask as a signal to negotiate or decline.' },
  { step: '05', title: 'Set a personal barter ceiling', body: 'Many creators find it useful to set a rule like "I only accept barter for products worth ₹2,000+, and never for more than 1 post + 2 stories" — a clear rule removes the emotional pressure of each individual pitch.' },
  { step: '06', title: 'Track how many barter deals you\'ve done with zero paid conversion', body: 'If you\'ve done 5+ barter collaborations and none have led to a paid deal, that\'s a signal to raise your barter threshold or start requiring at least partial payment going forward.' },
]

const convertScript = [
  { moment: 'After a successful barter post performs well', script: '"Really glad the collaboration worked well for you! I\'d love to continue working together — for future campaigns, my standard rate for a Reel is ₹X, and I can also offer package pricing for multiple posts."' },
  { moment: 'When a brand reaches out for a second barter ask', script: '"Thanks for thinking of me again! I\'d love to collaborate — for repeat partnerships, I typically move to a paid structure. Happy to share my rate card, or we could do a hybrid: partial product + a base fee."' },
  { moment: 'When a brand asks for usage rights on a barter post', script: '"Happy to include usage rights — that\'s typically a separate cost of ₹X for [duration] since it goes beyond organic posting. Want me to include that in the agreement?"' },
]

const mistakes = [
  { m: 'Accepting every barter offer that comes in', f: 'Not all exposure is equal. A poorly matched or low-value barter deal costs you real production time for very little return — say no to offers that don\'t clear your value bar, even as a newer creator.' },
  { m: 'Never asking what "content in exchange" actually means', f: 'Get exact deliverables in writing before agreeing — "some content" can quietly turn into 3 Reels and a Story series once the product has already shipped.' },
  { m: 'Treating every brand relationship as permanently barter-only', f: 'Barter is meant to be an entry point, not a ceiling. If a brand keeps coming back for free content after your engagement and portfolio have grown, that\'s the moment to introduce a rate card.' },
  { m: 'Giving away usage rights in a barter deal without realising it', f: 'Read the brand\'s terms carefully — some barter agreements include broad usage or ad-run permissions buried in the fine print, which should always carry a separate fee.' },
  { m: 'Being embarrassed to ask for partial payment', f: 'A hybrid deal — partial product plus a smaller cash fee — is a completely normal, professional middle ground and often an easy yes for brands who assumed barter-only was your only option.' },
]

export default function BarterCollaborationIndiaPage() {
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
            {['Barter Collab', 'Brand Deals', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Barter Collaboration in India 2026:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>When to Say Yes (and When to Say No)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Almost every Indian creator starts with a "free product for a post" deal — and that's completely fine. The problem isn't barter itself, it's staying stuck there long after your audience and effort deserve real payment. Here's a clear framework for deciding, negotiating, and knowing exactly when to graduate to paid.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Should You Accept a Barter Collaboration?</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Accept if the product\'s real value to you clearly exceeds your time cost to create the content, and the deliverable ask is light',
                'Barter suits newer creators (under 5,000–10,000 followers) building a portfolio — it\'s a starting point, not a permanent model',
                'Never include usage rights, ad-run permissions, or exclusivity in a barter deal for free — these always carry a separate cost',
                'Set a personal minimum product value and a maximum deliverable count before pitches come in, so each decision is quick and unemotional',
                'If 5+ barter deals with a brand haven\'t converted to a single paid collaboration, that\'s your signal to raise your rate or decline',
                'A hybrid deal — partial product plus a smaller cash fee — is a normal, professional middle ground worth proposing more often',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Barter Collaborations in India</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Barter collaborations remain the most common entry point into influencer marketing for nano and micro creators in India, especially with startups and small D2C brands testing influencer marketing for the first time.',
                'Barter deals are especially common with emerging Indian D2C brands that lack large marketing budgets but want authentic, organic-feeling content.',
                'Macro-influencers and celebrities in India generally move away from pure barter arrangements, preferring structured paid deals — barter is overwhelmingly a smaller-creator dynamic.',
                'Brands increasingly combine barter with performance-based incentives like affiliate commissions or reach-based bonuses, rather than offering pure product-only deals.',
                'A lack of a written agreement is one of the most common sources of dispute in barter deals — verbal-only terms fixed over DM frequently lead to scope creep once the product has already shipped.',
                'A meaningful share of successful long-term brand relationships for Indian creators start as a barter collaboration and graduate to paid work once engagement and trust are established.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Good vs bad barter */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Good Barter Deal vs. Bad Barter Deal</h2>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.2)', borderRadius: 14, padding: '20px 22px' }}>
                <div style={{ color: '#4CAF50', fontWeight: 800, fontSize: 14, marginBottom: 14 }}>✓ Worth accepting</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {goodBarter.map((t, i) => (
                    <div key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.55 }}>{t}</div>
                  ))}
                </div>
              </div>
              <div style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.15)', borderRadius: 14, padding: '20px 22px' }}>
                <div style={{ color: '#FF5252', fontWeight: 800, fontSize: 14, marginBottom: 14 }}>✗ Say no or negotiate</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {badBarter.map((t, i) => (
                    <div key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.55 }}>{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Decision framework */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>6-Step Decision Framework Before You Accept</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Run through this checklist for every barter pitch — it takes two minutes and removes the guesswork.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {decisionSteps.map((item) => (
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
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Ready to graduate from barter to paid?</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Build a free Identity Kit rate card so you always have a professional number ready the moment a brand relationship outgrows free products.</p>
            </div>
            <Link href="/tools/influencer-rate-calculator" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Calculate My Rate Free →
            </Link>
          </div>

          {/* Converting barter to paid */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>How to Convert a Barter Relationship Into a Paid One</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>The exact moments and language that make this transition smooth instead of awkward.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {convertScript.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#FF6B2B', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>{item.moment}</div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '12px 16px', color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6, fontStyle: 'italic' }}>{item.script}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>5 Barter Mistakes Indian Creators Make</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {mistakes.map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.1)', borderRadius: 12, padding: '18px 22px', display: 'flex', gap: 14 }}>
                  <div style={{ color: '#FF5252', fontWeight: 700, fontSize: 20, flexShrink: 0 }}>✗</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#FF8080', fontSize: 15, marginBottom: 6 }}>{item.m}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}><span style={{ color: '#4CAF50', fontWeight: 600 }}>Fix: </span>{item.f}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'Is it okay to only accept barter deals when I\'m just starting out?', a: 'Yes — barter is a completely normal starting point for nano and newer micro creators. It lets you build a portfolio, work with recognisable brands, and gain confidence before you have the audience size or case studies to command paid rates. The key is treating it as a stepping stone, not a permanent model.' },
                { q: 'How do I know if a barter offer is actually a fair deal?', a: 'Compare the real value of the product to you (not the brand\'s MRP) against your honest time cost to create the requested content. If a ₹500 product is asking for 3 Reels and 5 Stories, that\'s disproportionate — a fair barter deal usually means a product worth meaningfully more than the effort involved, for a light deliverable ask like one post or a couple of Stories.' },
                { q: 'Should I ever say no to a free product from a brand I like?', a: 'Yes, if the deliverable ask is too large relative to the product\'s value, or if the brand is asking for usage rights, ad-run permissions, or exclusivity without any payment. Liking a brand doesn\'t mean every deal they offer is a good one — it\'s fine to counter with a smaller deliverable list or a hybrid paid arrangement instead of declining outright.' },
                { q: 'How many barter deals should I do before asking for payment?', a: 'There\'s no fixed number, but a useful signal is repetition without progression — if you\'ve done several barter collaborations with similar or the same brands and none have led to a paid deal, that\'s a clear sign to raise your requirements. Many creators set a personal rule, like moving to paid-only after their first 5–10 barter collaborations.' },
                { q: 'Can I ask for both product and payment in the same deal?', a: 'Yes — this hybrid model (partial product plus a smaller cash fee) is a completely normal, professional structure. It\'s often an easy yes for brands who defaulted to a barter-only offer simply because they assumed that\'s what you\'d expect, rather than because their budget genuinely can\'t stretch further.' },
                { q: 'Do I need a written agreement for a barter collaboration?', a: 'Yes, even a simple one. A lack of written terms is one of the most common sources of dispute in barter deals — get the exact product, deliverable count, posting timeline, and any required tags or hashtags confirmed in writing (even a clear email or message) before the product ships.' },
                { q: 'Should I disclose barter collaborations the same way as paid ones?', a: 'Yes. A free product still counts as a material connection under India\'s advertising disclosure guidelines, so the same #Ad or #PaidPartnership disclosure rules apply — a barter deal is not exempt from disclosure just because no cash changed hands.' },
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
                { href: '/blog/how-to-negotiate-brand-deal-rates-india-2026', title: 'How to Negotiate Brand Deal Rates in India', tag: 'Negotiation' },
                { href: '/blog/influencer-rate-card-india-2026', title: 'Influencer Rate Card India 2026 — Complete Pricing Guide', tag: 'Rate Card' },
                { href: '/blog/asci-guidelines-influencer-disclosure-india-2026', title: 'ASCI Guidelines for Influencers in India 2026', tag: 'ASCI Compliance' },
                { href: '/blog/how-to-find-brand-contacts-emails-india-2026', title: 'How to Find Brand Emails & Contacts in India', tag: 'Brand Outreach' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>📦</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Know your worth — even in a free-product deal.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with your rate card ready, so every brand conversation — barter or paid — starts from a position of clarity.
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
