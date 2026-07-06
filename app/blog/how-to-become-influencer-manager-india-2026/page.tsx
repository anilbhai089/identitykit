import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Become an Influencer/Creator Manager in India 2026 (Role, Skills, Pay)',
  description: 'A complete guide to becoming a creator\'s personal manager in India — what the role actually involves day-to-day, how it differs from a brand\'s social media manager, how to get your first client with no experience, standard commission rates, and the exact toolkit you need to run a creator\'s brand deal business.',
  keywords: 'how to become an influencer manager india, creator manager job india, influencer manager salary india, how to manage a creator account, influencer personal manager india, social media manager for influencer',
  openGraph: {
    title: 'How to Become an Influencer/Creator Manager in India 2026 (Role, Skills, Pay)',
    description: 'An influencer manager isn\'t a brand\'s social media manager — it\'s the creator\'s right hand, running pitches, negotiations, and contracts so the creator can just create. Here\'s exactly how to break into it.',
    url: 'https://identitykit.in/blog/how-to-become-influencer-manager-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/influencer-manager-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/how-to-become-influencer-manager-india-2026',
  },
}

const vsRoles = [
  { factor: 'Who you work for', social: 'A company or brand', creator: 'One individual creator, as their representative' },
  { factor: 'Main focus', social: 'The brand\'s own social presence and content calendar', creator: 'The creator\'s brand deals, pitching, negotiation, and business operations' },
  { factor: 'Success metric', social: 'Brand reach, engagement, follower growth', creator: 'Number and value of brand deals closed, creator\'s total income' },
  { factor: 'Typical pay structure', social: 'Fixed monthly salary', creator: 'Flat retainer, or a commission (commonly 15-20%) on brand deals you help close' },
]

const dailyTasks = [
  { icon: '📥', title: 'Inbound DM & email triage', detail: 'Sorting real brand opportunities from spam, templated outreach, and low-value offers before they ever reach the creator.' },
  { icon: '📧', title: 'Outbound pitching', detail: 'Researching and reaching out to brands that fit the creator\'s niche, sending pitch emails and media kits on their behalf.' },
  { icon: '💰', title: 'Rate negotiation', detail: 'Handling back-and-forth on price, deliverables, usage rights, and exclusivity so the creator doesn\'t have to negotiate their own worth directly.' },
  { icon: '📄', title: 'Contracts & invoicing', detail: 'Reviewing brand contracts, flagging red flags, sending invoices, and following up on late payments.' },
  { icon: '📅', title: 'Deal pipeline tracking', detail: 'Keeping every active deal organised across inbound, negotiating, contracted, production, and paid stages so nothing slips.' },
  { icon: '📊', title: 'Reporting & rebooking', detail: 'Sending brands a quick performance recap after each campaign — the single habit most likely to get the creator rebooked.' },
]

const gettingStartedSteps = [
  { step: '01', title: 'Learn the creator economy landscape first', body: 'Understand how brand deals, rate structures, and platforms actually work before offering to manage anyone — a manager who doesn\'t know what fair pricing looks like can\'t negotiate well on a creator\'s behalf.' },
  { step: '02', title: 'Start with a creator you already know', body: 'A friend, sibling, or acquaintance running a smaller account is the easiest first client — low stakes for both of you, and a real opportunity to build a track record.' },
  { step: '03', title: 'Offer a specific, narrow service first', body: 'Rather than "I\'ll manage everything," start with one clear task — "I\'ll handle your brand deal pitching and negotiation" — and expand as trust builds.' },
  { step: '04', title: 'Build your own mini case study', body: 'Even landing one or two small brand deals for your first client gives you something concrete to show the next creator you approach.' },
  { step: '05', title: 'Approach small and mid-tier creators directly', body: 'Most independent creators, especially in the 10K-100K follower range, don\'t have a manager and are open to hearing a clear, specific pitch about how you could help.' },
  { step: '06', title: 'Consider an agency role as a stepping stone', body: 'Working at an influencer marketing or talent agency, even briefly, builds contacts, credibility, and a genuine understanding of how deals are structured at scale.' },
]

const compensation = [
  { model: 'Flat monthly retainer', detail: 'A fixed fee regardless of deal volume — simplest to agree on, works well when the manager\'s scope is clearly defined (e.g. "pitching and negotiation only").' },
  { model: 'Commission on brand deals', detail: 'Commonly 15-20% of the value of each deal the manager sources or negotiates — directly ties the manager\'s pay to the value they create.' },
  { model: 'Hybrid (small retainer + commission)', detail: 'A modest base fee for guaranteed availability, plus commission on deals closed — a fair middle ground for both sides, especially early in the relationship.' },
]

const toolkit = [
  { tool: 'Media kit', why: 'The single asset every brand pitch needs — you\'ll be sending this on the creator\'s behalf constantly.' },
  { tool: 'Rate card', why: 'Gives you a defensible, consistent number to quote instead of guessing a fresh price for every negotiation.' },
  { tool: 'Brand pitch email generator', why: 'Speeds up outbound pitching significantly when you\'re reaching out to dozens of brands on the creator\'s behalf.' },
  { tool: 'Contract template', why: 'Protects the creator (and you) with clear deliverables, revision limits, usage rights, and kill fee terms in every deal.' },
  { tool: 'Invoice generator', why: 'Keeps the creator\'s payments professional and organised — critical once you\'re juggling multiple active deals.' },
  { tool: 'Campaign report generator', why: 'Turns raw campaign numbers into a clean recap for the brand — the habit most likely to get the creator rebooked.' },
]

export default function InfluencerManagerIndiaPage() {
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
            {['Creator Manager', 'Career', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Become an Influencer's<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Manager in India (2026 Guide)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            An influencer manager isn't a brand's social media manager — it's a creator's right hand, running pitches, negotiations, contracts, and follow-ups so the creator can focus on content. It's a genuine, growing role in India's creator economy, and one most people don't know how to break into.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Becoming an Influencer Manager in India</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'An influencer manager represents one individual creator — handling brand pitching, negotiation, contracts, and invoicing — unlike a brand\'s in-house social media manager',
                'The easiest way to start is managing a creator you already know, offering one narrow, specific service rather than "everything"',
                'Most independent creators in the 10K-100K follower range don\'t have a manager and are genuinely open to the right pitch',
                'Common compensation: a flat monthly retainer, a 15-20% commission on brand deals, or a hybrid of both',
                'The core skill set is negotiation, organisation, and understanding fair market rates — not content creation itself',
                'The same tools a creator uses (media kit, rate card, contract template, pitch generator) are exactly what you\'ll use to do this job well',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Influencer Managers</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'An influencer manager acts as the creator\'s right hand — building connections with brands and advertisers to help monetise the creator\'s account, distinct from a marketer promoting a brand\'s own image.',
                'Manager compensation is commonly structured as a percentage of the creator\'s income from deals the manager sources or negotiates, often cited around 20%, though this varies by market and scope.',
                'Job postings related to content creators and influencer-adjacent roles in India have grown sharply in recent years, with major metro cities like Bengaluru, Delhi-NCR, and Mumbai leading in volume.',
                'Getting started as an influencer manager with no prior experience is genuinely possible, though most influencers with small audiences don\'t yet see the need for a manager — making early-stage or growing creators the more realistic starting client base.',
                'Since influencers themselves rarely post formal job openings for managers, direct outreach — offering services to creators proactively — is the most common way to land a first client.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vs social media manager */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Influencer Manager vs. Brand Social Media Manager</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>These are commonly confused, but they're genuinely different jobs with different employers and goals.</p>
            <div className="card" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr><th>Factor</th><th>Brand Social Media Manager</th><th>Influencer/Creator Manager</th></tr>
                </thead>
                <tbody>
                  {vsRoles.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>{row.factor}</td>
                      <td>{row.social}</td>
                      <td style={{ color: '#FF9A6B' }}>{row.creator}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Daily tasks */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>What an Influencer Manager Actually Does Day-to-Day</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {dailyTasks.map((item, i) => (
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

          {/* Getting started */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>6 Steps to Get Your First Client</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>There's rarely a job posting for this role — you build your way in, usually one relationship at a time.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {gettingStartedSteps.map((item) => (
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

          {/* Compensation */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>How Influencer Managers Get Paid</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {compensation.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF6B2B' }}>{item.model}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA - toolkit */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>The Toolkit Every Creator Manager Needs</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>You'll be doing all of this on behalf of someone else — having it ready and professional reflects directly on you.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {toolkit.map((item, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10 }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{item.tool}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12.5, flex: 1, minWidth: 200 }}>{item.why}</div>
                </div>
              ))}
            </div>
            <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Build your client's entire toolkit in one place</div>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Identity Kit gives you a free media kit, rate card, contract template, pitch email generator, and invoice generator — everything you need to represent a creator professionally from day one.</p>
              </div>
              <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
                Set Up Their Free Profile →
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'Do I need a marketing degree to become an influencer manager in India?', a: 'No — skills, hands-on experience, and a genuine understanding of how brand deals and negotiation work matter far more than formal qualifications. Building a track record, even with one small creator, is a stronger credential than a degree alone.' },
                { q: 'How is an influencer manager different from a social media manager?', a: 'A social media manager typically works for a brand or company, managing that company\'s own social presence. An influencer manager works for an individual creator, representing their interests to brands — handling pitching, negotiation, contracts, and business operations on the creator\'s behalf.' },
                { q: 'How much can I earn as a beginner influencer manager in India?', a: 'Earnings vary widely and are often tied directly to the creator\'s own income, especially under a commission model (commonly around 15-20% of deal value). A manager working with a smaller or newer creator will naturally earn less initially than one managing an established, high-earning creator — income tends to grow alongside the creator\'s.' },
                { q: 'How do I find my first client as an aspiring influencer manager?', a: 'Start with a creator you already know personally, or reach out directly to small and mid-tier creators (roughly 10K-100K followers) who don\'t yet have management. Most influencers don\'t post job listings for this role, so proactive, specific outreach is the standard path in.' },
                { q: 'Should I charge a flat fee or take commission as a creator manager?', a: 'Both are common. A flat monthly retainer works well when your scope is clearly limited (e.g. handling only pitching and negotiation). A commission model, often 15-20% of deal value, directly ties your pay to the value you create and is common once you\'re handling the full brand deal process.' },
                { q: 'What skills matter most for this role?', a: 'Negotiation ability, organisation (tracking multiple deals and deadlines without dropping any), clear written communication, and a real understanding of fair market rates for content. Content creation skill itself is not required — your job is representing the creator\'s business interests, not making their content.' },
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
                { href: '/blog/talent-agency-vs-self-represented-india-2026', title: 'Talent Agency vs Self-Represented Creator in India', tag: 'Agency vs Self-Rep' },
                { href: '/blog/managing-multiple-brand-deals-india-2026', title: 'How to Manage Multiple Brand Deals at Once', tag: 'Deal Pipeline' },
                { href: '/blog/how-to-negotiate-brand-deal-rates-india-2026', title: 'How to Negotiate Brand Deal Rates in India', tag: 'Negotiation' },
                { href: '/blog/influencer-rate-card-india-2026', title: 'Influencer Rate Card India 2026', tag: 'Rate Card' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🧑‍💼</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Represent your first creator like a professional.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Set up a free Identity Kit profile for the creator you're managing — media kit, rate card, and contract, ready in minutes.
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
          <Link href="/tools/brand-pitch-email-generator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Pitch Email Generator</Link>
          <Link href="/tools/brand-deal-contract-template" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contract Template</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
