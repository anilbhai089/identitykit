import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'UGC Content Pricing in India 2026: Single Videos, Bundles & Retainer Rates',
  description: 'How much to charge for UGC videos in India — per-video rates by tier, bundle discount math, usage rights and whitelisting fees, retainer pricing, and a ready-to-send UGC rate card structure for Indian creators.',
  keywords: 'ugc pricing india, how much to charge for ugc video india, ugc rate card india, ugc creator rates india 2026, ugc video cost india, ugc bundle pricing india, ugc retainer rates india',
  openGraph: {
    title: 'UGC Content Pricing in India 2026: Single Videos, Bundles & Retainer Rates',
    description: 'D2C founders in the same WhatsApp group get three different UGC quotes for the same brief. Here\'s the actual pricing logic Indian UGC creators should use.',
    url: 'https://identitykit.in/blog/ugc-pricing-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/ugc-pricing-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/ugc-pricing-india-2026',
  },
}

const tierRates = [
  { tier: 'Beginner (0–2 UGC projects)', rate: '₹800–₹2,500/video', note: 'Simple UGC videos, phone-shot, one round of revisions, basic captions — a fair starting range while you build your portfolio.' },
  { tier: 'Intermediate (3–15 projects)', rate: '₹2,500–₹6,000/video', note: 'Cleaner shooting and editing, some hook-writing skill, a small but real portfolio of brand work to point to.' },
  { tier: 'Experienced (15+ projects, proven results)', rate: '₹6,000–₹15,000/video', note: 'Strong production quality, scriptwriting ability, and — most importantly — proof that your content has driven real ad performance for past clients.' },
  { tier: 'Studio-produced / specialist niche', rate: '₹10,000–₹25,000+/video', note: 'Polished, studio-lit UGC-style content, or specialist categories like tech, finance, or skincare where technical accuracy adds real value.' },
]

const addOns = [
  { item: 'Extended usage rights (running your content as paid ads)', add: '+30–50% of base rate' },
  { item: 'Unlimited/perpetual usage buyout', add: '+80–150% of base rate' },
  { item: 'Whitelisting / Spark Ads (brand posts through your account)', add: '+30–100% of base rate per month' },
  { item: 'Additional hook/CTA variations', add: '+₹300–₹1,000 per extra variation' },
  { item: 'Raw, unedited footage delivery', add: '+30–50% of base rate' },
  { item: 'Rush delivery (under 48 hours)', add: '+30–50% premium' },
]

const bundleMath = [
  { scenario: 'Single video', standalone: '₹3,000', bundle: '—', note: 'Baseline rate for comparison' },
  { scenario: '5-video bundle', standalone: '₹15,000', bundle: '₹12,000–₹12,750 (15–20% off)', note: 'The most common bundle size — brands testing multiple hooks or angles for the same product' },
  { scenario: '10-video bundle / monthly retainer', standalone: '₹30,000', bundle: '₹22,500–₹25,500 (15–25% off)', note: 'Suits brands running continuous ad testing — often structured as a monthly retainer rather than a one-time bundle' },
]

const rateCardSections = [
  { title: 'Base video rate', body: 'Your standard price for one UGC video with organic usage only — the number everything else is calculated from.' },
  { title: 'Usage rights tiers', body: 'Clearly separate organic-only (included), paid ads for a defined period (+30–50%), and unlimited buyout (+80–150%).' },
  { title: 'Bundle pricing', body: 'Show your 5-video and 10-video bundle rates upfront — brands scaling ad testing will ask for this immediately.' },
  { title: 'Add-on menu', body: 'List hook variations, raw footage, and rush delivery as separate line items rather than folding them into your base rate.' },
  { title: 'Niche specialization note', body: 'If you work in a specialist category (finance, tech, skincare), state this clearly — it justifies a premium over generalist UGC rates.' },
  { title: 'Turnaround time', body: 'State your standard delivery window so brands know what to expect before they even ask.' },
]

export default function UGCPricingIndiaPage() {
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
            {['UGC Pricing', 'Rate Card', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            UGC Content Pricing in India 2026:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Videos, Bundles & Retainers</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Ask five UGC creators what to charge and you'll get five different answers — one agency quotes ₹1,000, another quotes ₹5,000, a third sends a ₹1.5 lakh monthly retainer. Here's the actual pricing logic behind those numbers, so you can quote with confidence instead of guessing.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — How Much to Charge for UGC in India</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'A single UGC video in India typically ranges ₹800–₹2,500 for beginners up to ₹15,000+ for experienced creators with proven ad performance',
                'UGC rates are based on deliverables and skill, not follower count — unlike influencer rates, which scale with audience size',
                'Extended usage rights (running your content as paid ads) should add 30–50% on top of your base rate — never include this for free',
                'Bundle pricing of 5–10 videos typically discounts 15–25% off the per-video rate, benefiting both sides with predictability',
                'Whitelisting (letting a brand run ads through your account) is a separate cost, often 30–100% of base rate per month',
                'Always separate your creation fee from your usage fee — this protects you if a brand later boosts your content in paid ads',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — UGC Pricing in India 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'A single studio-produced UGC video in India typically costs between ₹1,000 and ₹15,000+ depending on creator tier, duration, edits, and usage rights.',
                'Indian D2C founders running Meta and Google ads commonly attribute a large share of new customer acquisition directly to UGC creative, making UGC pricing a real performance-marketing line item, not just a content cost.',
                'UGC video content has been shown to significantly outperform polished, traditionally produced brand content on engagement and conversion in real Indian D2C campaigns.',
                'Bulk UGC packages typically unlock 15–25% savings compared to booking the same number of videos individually.',
                'Usage rights for running creator UGC in paid ads typically add 30–50% of the base rate; unlimited or perpetual buyouts can add 80–150%.',
                'Creators using a structured, professional rate card report meaningfully higher earnings than those who negotiate pricing from scratch on every single project.',
                'Whitelisting or Spark Ads arrangements — where a brand runs paid ads directly through the creator\'s own account — typically command an additional 30–100% of the base fee per month.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tier rates */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>UGC Video Rates in India by Experience Tier</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Use these as your starting reference — niche specialization and proven ad performance can push you above these ranges.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {tierRates.map((row, i) => (
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

          {/* Add ons */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Add-Ons: What to Charge Extra For</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>These are where most new UGC creators leave money on the table by including them for free.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {addOns.map((row, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, flex: 1, minWidth: 200 }}>{row.item}</div>
                  <span style={{ background: 'rgba(76,175,80,0.1)', color: '#4CAF50', border: '1px solid rgba(76,175,80,0.2)', padding: '3px 12px', borderRadius: 100, fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>{row.add}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Turn this pricing logic into a rate card brands can act on</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Build a free Identity Kit profile with your UGC rate card, past work, and niche — everything a D2C brand needs to book you fast.</p>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build My Free Profile →
            </Link>
          </div>

          {/* Bundle math */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Bundle & Retainer Pricing Math</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>D2C brands scaling ad testing will ask for bundle pricing almost immediately — have this ready.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {bundleMath.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 8 }}>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{row.scenario}</div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                      {row.standalone !== '—' && <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Standalone: {row.standalone}</span>}
                      {row.bundle !== '—' && <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '3px 12px', borderRadius: 100, fontSize: 13, fontWeight: 700 }}>Bundle: {row.bundle}</span>}
                    </div>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{row.note}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Rate card sections */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>What to Include in Your UGC Rate Card</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>A structured rate card speeds up every negotiation and prevents scope creep before it starts.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {rateCardSections.map((item, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6, color: '#FF6B2B' }}>{item.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.6 }}>{item.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'How much should a beginner UGC creator charge in India?', a: 'A fair starting range for a beginner UGC creator in India is ₹800–₹2,500 per video, covering simple phone-shot content with basic captions and one round of revisions. This is a reasonable entry point while you build a portfolio — rates should rise as your work and results with brands accumulate.' },
                { q: 'Does UGC pricing depend on my follower count?', a: 'No — this is the key difference from influencer pricing. UGC rates are based on deliverables, production quality, and skill, not audience size, since UGC content is typically used in the brand\'s own paid ads or feed rather than posted to the creator\'s own following.' },
                { q: 'How much extra should I charge for a brand to run my UGC video as a paid ad?', a: 'Usage rights for paid ad placement typically add 30–50% on top of your base creation fee for a defined period (such as 30 or 60 days). An unlimited or perpetual usage buyout — where the brand can use the content indefinitely — can add 80–150% on top of the base rate.' },
                { q: 'What is whitelisting and how much should I charge for it?', a: 'Whitelisting (also called Spark Ads) is when a brand runs paid ads directly through your own social media account rather than their own. Since this uses your account\'s identity and algorithm standing, it typically commands an additional 30–100% of your base fee per month, separate from the video creation cost itself.' },
                { q: 'How much discount should I offer for a bundle of UGC videos?', a: 'A 15–25% discount off your per-video rate for a 5 or 10-video bundle is standard and fair — it benefits you too, converting one-off gigs into a larger, more predictable booking, while giving the brand a lower per-video cost for testing multiple concepts or hooks.' },
                { q: 'Should I charge extra for raw, unedited footage?', a: 'Yes. Raw footage delivery typically adds 30–50% on top of your base rate, since it removes the value of your editing work while still requiring the same shooting effort — brands who want raw footage for their own in-house editing should expect to pay for that flexibility.' },
                { q: 'How do I raise my UGC rates as I gain experience?', a: 'A reasonable pattern is increasing your rates by 10–20% every 6 to 12 months as your portfolio, results, and demand grow — especially once you\'re consistently fully booked or receiving strong repeat-client feedback. Communicate new rates clearly and let existing clients know in advance of a change.' },
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
                { href: '/blog/how-to-become-ugc-creator-india-2026', title: 'How to Become a UGC Creator in India', tag: 'UGC' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🎬</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Quote with confidence, every single time.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with your UGC rate card ready — no more guessing what to quote a new D2C brand.
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
