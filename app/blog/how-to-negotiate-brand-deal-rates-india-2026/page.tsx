import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Negotiate Brand Deal Rates in India 2026 (Scripts, Math & When to Walk Away)',
  description: 'Complete negotiation playbook for Indian creators. Real rupee benchmarks, the exact scripts that get brands to raise their offer, package deal math, usage rights and exclusivity pricing, and when walking away is the smarter move.',
  keywords: 'how to negotiate brand deal rate india, influencer negotiation script india, how much to charge brands india, influencer rate negotiation india, brand deal pricing india 2026, usage rights pricing india, exclusivity fee influencer india',
  openGraph: {
    title: 'How to Negotiate Brand Deal Rates in India 2026 (Scripts, Math & When to Walk Away)',
    description: 'Most Indian creators leave 30–50% on the table simply by not negotiating. Real rupee benchmarks, exact scripts, package deal math, and when to walk away.',
    url: 'https://identitykit.in/blog/how-to-negotiate-brand-deal-rates-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/negotiate-brand-deals-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/how-to-negotiate-brand-deal-rates-india-2026',
  },
}

const neverSay = [
  { bad: '"That\'s too expensive" (with no data)', why: 'Signals you don\'t know the market, invites the brand to lowball you further on the next deal too.' },
  { bad: '"Can you do it for exposure/free product?"', why: 'Trains the brand — and every creator watching — that your work has no floor price.' },
  { bad: 'Quoting your rate before understanding scope', why: 'Anchors you low before usage rights, exclusivity, and deliverable count are even on the table.' },
  { bad: 'Discounting the moment you sense hesitation', why: 'Trains brands to expect every rate you quote to be negotiable by 30% by default.' },
  { bad: 'Ghosting after receiving a lowball offer', why: 'Burns the relationship for future, better-budgeted campaigns from the same brand.' },
]

const doInstead = [
  { good: 'Ask about scope and budget before quoting a number', why: '"Happy to share a rate once I understand deliverables, usage, and timeline" keeps you from anchoring low.' },
  { good: 'Quote a range backed by your engagement, not gut feel', why: '"Based on my average engagement rate of 6.2% and past campaign results, my rate for a Reel is ₹X–₹Y."' },
  { good: 'Let the brand share their budget first when possible', why: 'Whoever names a number first usually loses ground — asking "what\'s the budget for this campaign?" is a completely normal question.' },
  { good: 'Negotiate deliverables, not just price', why: 'If a brand can\'t move on rate, offer fewer deliverables at the same rate instead of dropping your price.' },
  { good: 'Price usage rights and exclusivity separately', why: 'These are real, separate costs — never bundle them into your base per-post rate by default.' },
]

const rateBenchmarks = [
  { tier: 'Nano (1K–10K)', rate: '₹1,000–₹8,000/Reel', note: 'Often undervalued — engaged niche nano creators can achieve cost-per-engagement 70% lower than macro campaigns, which is real leverage in negotiation.' },
  { tier: 'Micro (10K–100K)', rate: '₹5,000–₹50,000/Reel', note: 'The sweet spot for most D2C brand budgets. A 45K-follower beauty creator can charge more than a 180K fitness creator if the beauty category has more buyers.' },
  { tier: 'Mid-tier (100K–500K)', rate: '₹25,000–₹1.5L/deliverable', note: 'Most professionalised tier — expect brands to negotiate harder and request usage rights and multi-post packages by default.' },
  { tier: 'Macro (500K–2M)', rate: '₹1.5L–₹8L/campaign', note: 'Production quality, dedicated creative input, and audience insights justify the premium over micro tiers.' },
  { tier: 'Mega/Celebrity (2M+)', rate: '₹8L–₹1Cr+/campaign', note: 'Usually negotiated through talent agencies. Usage rights and exclusivity frequently cost more than the base talent fee itself.' },
]

const addOns = [
  { item: 'Usage rights (brand runs your content as an ad)', add: '+20–50% of base rate per month of additional use' },
  { item: 'Category exclusivity (can\'t promote competitors)', add: '+30–100% depending on duration and category breadth' },
  { item: 'Rush delivery (under 48 hours)', add: '+25–40% premium' },
  { item: 'Whitelisting bundled at signing', add: '50–60% of standalone whitelisting cost (vs. 75–100% surcharge if added later)' },
  { item: 'GST (if annual brand-deal revenue crosses ₹20L)', add: '+18% on top of your quoted rate, usually paid by the brand' },
]

const packageMath = [
  { scenario: 'Single Reel', standalone: '₹20,000', package: '—', note: 'Baseline for comparison' },
  { scenario: '3 Reels booked together', standalone: '₹60,000', package: '₹45,000 (25% discount)', note: 'You gain income predictability; brand gains per-post efficiency and repeated audience exposure' },
  { scenario: '4 Reels + 8 Stories bundle', standalone: '₹80,000+', package: '₹50,000 (≈37% discount)', note: 'Works because bundling deliverables is the single most common negotiation tactic — most creators accept it without pushback' },
]

const walkAway = [
  'The offered rate falls below 50% of your documented market rate, with no package structure that would justify the gap',
  'The brand demands 90+ days of category exclusivity in a broad category with no exclusivity premium attached',
  'Unlimited usage rights are requested with zero licensing fee — this is a common way brands quietly underpay',
  'Revision requirements are excessive enough to signal the brand sees you as a production vendor, not a creative partner',
  'The brand is dismissive of your engagement data or communicates disrespectfully during negotiation',
]

const steps = [
  { step: '01', title: 'Know your number before the conversation starts', body: 'Calculate your rate from engagement rate and niche, not gut feel. A creator with 50,000 followers and genuinely engaged, real followers can command more than a 200,000-follower account with mostly inactive or bot followers — but only if you can show the data.', tip: 'Run your numbers through a rate calculator before every negotiation so you have a defensible starting point, not an invented one.' },
  { step: '02', title: 'Don\'t quote a rate until you know the full scope', body: 'The most common creator mistake is answering "what are your rates?" before understanding deliverables, usage rights, exclusivity, and campaign goals. Reply first with a scoping question, not a number.', tip: 'Try: "Happy to share pricing — could you share the deliverables, timeline, and how the content will be used (organic only, or also run as ads)?"' },
  { step: '03', title: 'Quote a range, anchored above your floor', body: 'Smart creators quote 15–25% above their median market rate to leave room for negotiation and signal premium positioning, rather than quoting their bare minimum and having nowhere left to go.', tip: 'State the range with the reasoning attached: "Based on my average 6% engagement rate and past campaign results, my rate for a Reel is ₹15,000–₹20,000."' },
  { step: '04', title: 'Price usage rights and exclusivity as separate line items', body: 'Usage rights (the brand running your content as a paid ad) and category exclusivity are real additional costs — never fold them into your base rate by default. Most Indian rate confusion comes from brands assuming these are included for free.', tip: 'A simple line: "That rate covers organic posting only. Usage rights for paid ads are an additional 20–50% depending on duration."' },
  { step: '05', title: 'Negotiate deliverables before you negotiate price', body: 'If a brand\'s budget genuinely can\'t stretch to your rate, offer to adjust the number of deliverables rather than cutting your price — a smaller scope at your full rate protects your pricing for every future deal.', tip: 'Try: "I can\'t do 3 Reels at that budget, but I can do 1 Reel + 2 Stories for the amount you\'ve mentioned."' },
  { step: '06', title: 'Use bundling to your advantage, not against it', body: 'A 3-post package closing 20–35% below the sum of standalone rates is standard and expected — it benefits you too, since it converts one-off income into a predictable, recurring booking.', tip: 'Package math example: 3 Reels standalone at ₹20,000 each = ₹60,000. A fair 3-Reel package rate is ₹45,000–₹50,000, not ₹30,000.' },
  { step: '07', title: 'Know your walk-away point before you need it', body: 'Decide your floor — the lowest total deal value you\'ll accept — before the conversation starts, not in the middle of it. A dream brand for your portfolio might justify a lower floor than a random unfamiliar D2C brand.', tip: 'A professional decline keeps the relationship open: "This doesn\'t work for me at this budget, but I\'d love to revisit for a future campaign with more scope."' },
]

const mistakes = [
  { m: 'Pricing purely on follower count', f: 'Brands increasingly pay for engaged reach, not raw numbers. A 45K-follower creator with 7% engagement can out-earn a 180K-follower account with 1% engagement — cite your engagement rate, not just your follower count.' },
  { m: 'Accepting the first offer without countering', f: 'Most influencer quotes in India carry a real negotiation margin. Brands routinely open below what they\'re actually willing to pay — a professional counter is expected, not rude.' },
  { m: 'Bundling usage rights and exclusivity into the base rate for free', f: 'These are separate costs with real value to the brand. Quoting one number for everything means giving away 20–100% of extra value for nothing.' },
  { m: 'Not asking about the brand\'s budget first', f: 'Whoever states a number first typically loses negotiating room. Asking "what\'s the budget for this campaign?" is a completely normal, professional question — not a sign of inexperience.' },
  { m: 'Treating every deal as a one-off instead of proposing a package', f: 'Package deals benefit both sides — you get income predictability, the brand gets a per-post discount. Always float a 3-deal or retainer option before settling for a single post.' },
]

export default function NegotiateBrandDealsIndiaPage() {
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
            {['Negotiation', 'Brand Deals', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Negotiate Brand Deal Rates<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>in India (2026 Playbook)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            India has zero pricing transparency in influencer marketing — the same follower count can mean a 10x price difference depending purely on who negotiates better. Most creators lose money before the first counter-offer, simply by what they say (or don't say). Here's the exact language, math, and walk-away rules that protect your rate.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — How to Negotiate a Brand Deal Rate in India</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Know your rate before the conversation — calculate it from engagement rate and niche, not gut feel',
                'Ask about deliverables, usage, and budget before quoting a number — never anchor low by going first',
                'Quote a range 15–25% above your floor, backed by your engagement data',
                'Price usage rights (+20–50%) and exclusivity (+30–100%) as separate line items, never bundled for free',
                'If the brand can\'t move on price, negotiate deliverables instead of dropping your rate',
                'Know your walk-away point in advance — below 50% of your documented rate with no package justification is a clear no',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Brand Deal Pricing in India 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'India\'s influencer marketing market crossed ₹3,600 crore in 2025 and is projected to hit ₹5,500 crore by end of 2026.',
                'Rates for two creators with near-identical follower counts can differ by 10x, purely due to negotiation skill and lack of pricing transparency in the Indian market.',
                'Most brands in India overpay by 40%+ when they negotiate on follower count alone instead of engagement economics — and underpay engaged nano/micro creators by a similar margin.',
                'Bundled 3-post packages typically close 20–35% below the sum of standalone single-post rates, benefiting both creator (predictable income) and brand (per-post cost efficiency).',
                'Usage rights for running creator content as paid ads typically add 20–50% of the base rate per month of additional use.',
                'Category exclusivity commonly adds 30–100% to the base fee depending on duration and category breadth.',
                'Indian creators with annual brand-deal revenue above ₹20 lakh must register for GST and add 18% on top of their quoted rate — most quoted rates exclude this by default.',
                'Nano creators frequently undervalue themselves: engaged niche Reels priced around ₹500 can achieve cost-per-engagement rates roughly 70% lower than comparable macro-influencer campaigns, which is genuine leverage in a negotiation.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rate benchmarks */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Brand Deal Rate Benchmarks in India 2026</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Use these as your starting reference point — then adjust up or down based on your actual engagement rate and niche.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {rateBenchmarks.map((row, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{row.tier}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, lineHeight: 1.5 }}>{row.note}</div>
                  </div>
                  <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '4px 12px', borderRadius: 100, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>{row.rate}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12, display: 'flex', justifyContent: 'center' }}>
              <Link href="/tools/influencer-rate-calculator" style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '10px 20px', borderRadius: 10, fontWeight: 700, fontSize: 14 }}>
                Calculate your exact rate free →
              </Link>
            </div>
          </section>

          {/* Say / don't say */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What to Say — and What to Never Say</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
              {neverSay.map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.1)', borderRadius: 12, padding: '16px 20px', display: 'flex', gap: 14 }}>
                  <div style={{ color: '#FF5252', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>✗</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#FF8080', fontSize: 14, marginBottom: 4 }}>{item.bad}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{item.why}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {doInstead.map((item, i) => (
                <div key={i} style={{ background: 'rgba(76,175,80,0.04)', border: '1px solid rgba(76,175,80,0.12)', borderRadius: 12, padding: '16px 20px', display: 'flex', gap: 14 }}>
                  <div style={{ color: '#4CAF50', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>✓</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#7ED396', fontSize: 14, marginBottom: 4 }}>{item.good}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{item.why}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Walk into every negotiation with your numbers ready</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>A media kit with your engagement rate, past results, and a clear rate card gives you a defensible number instead of a guess — and shows the brand you're professional before the negotiation even starts. Free, takes 10 minutes.</p>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build My Free Profile →
            </Link>
          </div>

          {/* 7 steps */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>7-Step Negotiation Process for Indian Creators</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Follow this sequence for every brand deal conversation, from the first DM to the signed agreement.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {steps.map((item) => (
                <div key={item.step} className="card" style={{ padding: '22px 24px' }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 10, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#FF6B2B', fontSize: 15, flexShrink: 0 }}>{item.step}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{item.title}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.75, marginBottom: 12 }}>{item.body}</div>
                      <div style={{ background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.18)', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
                        <span style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>SCRIPT</span>
                        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{item.tip}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Add-ons pricing */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>What to Charge Extra For (Never Bundle These for Free)</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>These add-ons are where Indian creators lose the most money by default-including them for free.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {addOns.map((row, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, flex: 1, minWidth: 200 }}>{row.item}</div>
                  <span style={{ background: 'rgba(76,175,80,0.1)', color: '#4CAF50', border: '1px solid rgba(76,175,80,0.2)', padding: '3px 12px', borderRadius: 100, fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>{row.add}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Package math */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Package Deal Math: What a Fair Bundle Looks Like</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Bundling is the single most common negotiation tactic in influencer marketing — know the fair range before agreeing to one.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {packageMath.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 8 }}>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{row.scenario}</div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                      {row.standalone !== '—' && <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Standalone: {row.standalone}</span>}
                      {row.package !== '—' && <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '3px 12px', borderRadius: 100, fontSize: 13, fontWeight: 700 }}>Package: {row.package}</span>}
                    </div>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{row.note}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Walk away */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>When to Walk Away From a Brand Deal</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Knowing your floor in advance turns a hard decision into an easy, unemotional one.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {walkAway.map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,152,0,0.05)', border: '1px solid rgba(255,152,0,0.18)', borderRadius: 12, padding: '14px 20px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#FF9800', flexShrink: 0, fontWeight: 700 }}>⚠</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>5 Negotiation Mistakes Indian Creators Make</h2>
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
                { q: 'Should I share my rate first or wait for the brand\'s budget?', a: 'Wait when you can. Whoever names a number first typically loses negotiating room — sharing your rate too early anchors the conversation lower than it should be, before usage rights, exclusivity, and deliverable count are even defined. It\'s completely professional to ask "what\'s the budget for this campaign?" before quoting anything.' },
                { q: 'How much should I charge for usage rights in India?', a: 'Usage rights — letting the brand run your content as a paid ad rather than just posting it organically — typically add 20–50% of your base rate per month of additional use. This should always be a separate line item from your organic posting rate, never bundled in for free by default.' },
                { q: 'Is it normal for brands in India to negotiate down from my quoted rate?', a: 'Yes, and it\'s expected on both sides. Most influencer quotes in India carry a real negotiation margin, and brands routinely open below what they\'re actually willing to pay. A professional counter-offer with data behind it is completely normal — accepting the first offer without any pushback often leaves real money on the table.' },
                { q: 'How do I negotiate if the brand\'s budget is genuinely lower than my rate?', a: 'Adjust deliverables instead of your price. If a brand can\'t meet your rate for 3 Reels, offer 1 Reel and 2 Stories for their stated budget instead. This protects your quoted rate for every future negotiation, rather than training the brand — and yourself — to expect discounts.' },
                { q: 'Should I accept a brand deal with no upfront payment, only performance-based commission?', a: 'Be cautious. A fair deal includes base compensation plus performance upside — never accept a zero-base-fee, commission-only arrangement as your only structure, since your content creation time has real value regardless of how the campaign performs. Hybrid models (a base fee plus a bonus tied to results) are a reasonable middle ground.' },
                { q: 'How much discount is reasonable for a multi-post package deal?', a: 'A 3-post package closing 20–35% below the sum of standalone single-post rates is the standard, fair range in influencer marketing. Anything beyond roughly 35–40% off starts eroding your baseline pricing for future single-post deals, so it\'s worth holding a floor even within a package negotiation.' },
                { q: 'Do I need to charge GST on brand deal payments in India?', a: 'If your annual brand-deal revenue crosses ₹20 lakh, GST registration becomes mandatory and you add 18% on top of your quoted rate — brands typically pay this directly rather than it coming out of your fee. Below that threshold, your quoted rate is the final amount.' },
                { q: 'What\'s the biggest pricing mistake nano and micro creators make in India?', a: 'Pricing based purely on follower count instead of engagement. A 45,000-follower creator with strong, real engagement can be more valuable to a brand — and can charge more — than a 180,000-follower account with mostly inactive followers. Always lead your negotiation with your actual engagement rate and past campaign results, not just your follower number.' },
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
                { href: '/blog/influencer-rate-card-india-2026', title: 'Influencer Rate Card India 2026 — Complete Pricing Guide', tag: 'Rate Card' },
                { href: '/blog/how-to-pitch-brands-india-influencer-2026', title: 'How to Pitch Brands as an Influencer in India', tag: 'Brand Deals' },
                { href: '/blog/brand-deal-contract-template-india', title: 'Brand Deal Contract Template for Indian Creators', tag: 'Legal' },
                { href: '/blog/influencer-marketing-roi-india-2026', title: 'How to Prove Influencer ROI to Brands in India', tag: 'ROI & Analytics' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🤝</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Negotiate with data, not guesswork.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with your rate card and real engagement metrics — the exact numbers that make every negotiation easier.
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
