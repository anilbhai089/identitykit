'use client'
import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

// ── Rate data by platform × tier ─────────────────────────────────────────────
const rateData: Record<string, Record<string, { min: number; max: number }>> = {
  instagram_reel: {
    nano:    { min: 1500,   max: 5000 },
    micro:   { min: 5000,   max: 30000 },
    midtier: { min: 30000,  max: 150000 },
    macro:   { min: 150000, max: 500000 },
    mega:    { min: 500000, max: 2000000 },
  },
  instagram_static: {
    nano:    { min: 800,    max: 3000 },
    micro:   { min: 3000,   max: 18000 },
    midtier: { min: 18000,  max: 80000 },
    macro:   { min: 80000,  max: 300000 },
    mega:    { min: 300000, max: 1000000 },
  },
  instagram_story: {
    nano:    { min: 500,   max: 2000 },
    micro:   { min: 2000,  max: 10000 },
    midtier: { min: 10000, max: 50000 },
    macro:   { min: 50000, max: 200000 },
    mega:    { min: 200000, max: 700000 },
  },
  youtube_dedicated: {
    nano:    { min: 3000,   max: 10000 },
    micro:   { min: 10000,  max: 60000 },
    midtier: { min: 60000,  max: 300000 },
    macro:   { min: 300000, max: 1000000 },
    mega:    { min: 1000000, max: 5000000 },
  },
  youtube_integration: {
    nano:    { min: 1500,   max: 6000 },
    micro:   { min: 6000,   max: 35000 },
    midtier: { min: 35000,  max: 175000 },
    macro:   { min: 175000, max: 600000 },
    mega:    { min: 600000, max: 2500000 },
  },
  youtube_shorts: {
    nano:    { min: 1000,  max: 4000 },
    micro:   { min: 4000,  max: 20000 },
    midtier: { min: 20000, max: 80000 },
    macro:   { min: 80000, max: 250000 },
    mega:    { min: 250000, max: 800000 },
  },
}

// Niche multipliers
const nicheMultipliers: Record<string, { mult: number; label: string }> = {
  finance:    { mult: 1.8, label: 'Finance & Investing' },
  tech:       { mult: 1.5, label: 'Tech & Gadgets' },
  education:  { mult: 1.4, label: 'Education & Career' },
  health:     { mult: 1.3, label: 'Health & Fitness' },
  beauty:     { mult: 1.2, label: 'Beauty & Skincare' },
  food:       { mult: 1.1, label: 'Food & Recipes' },
  travel:     { mult: 1.0, label: 'Travel' },
  lifestyle:  { mult: 1.0, label: 'Lifestyle' },
  fashion:    { mult: 0.95, label: 'Fashion & Style' },
  gaming:     { mult: 0.9, label: 'Gaming' },
  comedy:     { mult: 0.85, label: 'Comedy & Entertainment' },
}

// Engagement multipliers
const engMultipliers: Record<string, number> = {
  low:     0.75,
  average: 1.0,
  good:    1.3,
  excellent: 1.65,
}

const platformLabels: Record<string, string> = {
  instagram_reel: 'Instagram Reel',
  instagram_static: 'Instagram Static Post',
  instagram_story: 'Instagram Story (per frame)',
  youtube_dedicated: 'YouTube Dedicated Video',
  youtube_integration: 'YouTube Brand Integration',
  youtube_shorts: 'YouTube Shorts',
}

const tierFromFollowers = (f: number) => {
  if (f <= 10000) return 'nano'
  if (f <= 100000) return 'micro'
  if (f <= 500000) return 'midtier'
  if (f <= 1000000) return 'macro'
  return 'mega'
}

const tierLabel: Record<string, string> = {
  nano: 'Nano Creator (1K–10K)',
  micro: 'Micro Creator (10K–100K)',
  midtier: 'Mid-Tier Creator (100K–500K)',
  macro: 'Macro Creator (500K–1M)',
  mega: 'Mega Creator (1M+)',
}

function fmt(n: number) {
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(1) + ' Cr'
  if (n >= 100000) return '₹' + (n / 100000).toFixed(1) + ' L'
  if (n >= 1000) return '₹' + (n / 1000).toFixed(0) + 'K'
  return '₹' + n.toLocaleString('en-IN')
}

// ── FAQ data ──────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How much should I charge for an Instagram Reel in India in 2026?',
    a: 'Instagram Reel rates in India depend on your tier. Nano creators (1K–10K followers) should charge ₹1,500–₹5,000 per Reel. Micro creators (10K–100K) charge ₹5,000–₹30,000. Mid-tier (100K–500K) charge ₹30,000–₹1,50,000. Macro creators (500K–1M) charge ₹1,50,000–₹5,00,000. These rates increase 20–65% based on niche — finance and tech creators command the highest premiums.',
  },
  {
    q: 'How do Indian influencers calculate their rate card?',
    a: 'The standard Indian influencer rate formula is: Base Rate (by follower tier) × Niche Multiplier × Engagement Multiplier. Base rate for Instagram Reels starts at ₹1,500 for nano creators and scales to ₹5,00,000+ for mega creators. Finance creators apply a 1.8x niche multiplier. Creators with excellent engagement (6%+ for micro) apply a 1.65x engagement multiplier. Never charge less than your base rate regardless of brand size.',
  },
  {
    q: 'What is the minimum rate I should charge brands as a new Indian creator?',
    a: 'As a new Indian creator with 1K–10K followers, the absolute minimum you should charge is ₹800–₹1,500 for a static Instagram post and ₹1,500–₹3,000 for an Instagram Reel. Never do paid promotions for free or for product-only barter if the brand has a budget. Accepting very low rates early sets a precedent that hurts your future negotiations.',
  },
  {
    q: 'Should Indian creators charge differently for different niches?',
    a: 'Yes — niche is one of the biggest factors in Indian brand deal rates. Finance and investing creators command 1.8x the base rate because brands have high customer lifetime values and can afford to pay more per conversion. Tech creators get 1.5x. Comedy and entertainment creators earn lower rates (0.85x base) because their audience intent is entertainment, not purchase. Always factor your niche into your rate card.',
  },
  {
    q: 'How much do Indian YouTubers charge for brand deals in 2026?',
    a: 'Indian YouTube brand deal rates in 2026: Nano YouTubers (1K–10K subs) charge ₹3,000–₹10,000 for a dedicated video. Micro YouTubers (10K–100K) charge ₹10,000–₹60,000. Mid-tier (100K–500K) charge ₹60,000–₹3,00,000. Macro creators (500K–1M) charge ₹3,00,000–₹10,00,000. Brand integrations (mentions within an existing video) are typically 40–60% of the dedicated video rate.',
  },
  {
    q: 'How does engagement rate affect influencer rates in India?',
    a: 'Engagement rate is a direct multiplier on your base rate. Indian creators with excellent engagement (6%+ for micro, 4%+ for mid-tier) can charge 1.65x their base rate. Average engagement earns the standard rate. Low engagement (below 1.5% for micro) means you may only command 75% of base rate. High engagement is your strongest negotiating lever — always lead with it in brand pitches.',
  },
  {
    q: 'Can I charge GST on top of my influencer rate in India?',
    a: 'Yes, if you are GST registered (mandatory above ₹20 lakh annual income), you charge 18% GST on top of your base rate. So if your Reel rate is ₹25,000, the brand pays ₹25,000 + ₹4,500 GST = ₹29,500. Always mention in your rate card whether rates are inclusive or exclusive of GST. Brands have GST numbers and can claim input tax credit, so GST is not a barrier.',
  },
  {
    q: 'What should I include in my influencer rate card?',
    a: 'A complete Indian influencer rate card should include: your rates per platform and content type (Reel, Story, YouTube), usage rights (how long the brand can repurpose your content), exclusivity clauses (extra charge if you cannot work with competitors), revision policy (how many rounds of revisions are included), payment terms (typically 50% advance, 50% after posting), and whether rates include or exclude GST.',
  },
]

// ── Schema ────────────────────────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const webToolSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Influencer Rate Calculator India 2026',
  url: 'https://identitykit.in/tools/influencer-rate-calculator',
  description: 'Free influencer rate calculator for Indian creators. Get exact INR rates for Instagram Reels, Stories, YouTube videos and more — based on your follower count, niche, and engagement rate.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  creator: { '@type': 'Organization', name: 'Identity Kit', url: 'https://identitykit.in' },
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function InfluencerRateCalculator() {
  const [followers, setFollowers] = useState('')
  const [niche, setNiche] = useState('lifestyle')
  const [engagement, setEngagement] = useState('average')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [result, setResult] = useState<null | {
    tier: string
    platforms: { key: string; label: string; min: number; max: number }[]
  }>(null)

  function calculate() {
    const f = parseInt(followers.replace(/,/g, ''))
    if (!f || f < 1000) return
    const tier = tierFromFollowers(f)
    const nicheMult = nicheMultipliers[niche]?.mult ?? 1.0
    const engMult = engMultipliers[engagement] ?? 1.0
    const mult = nicheMult * engMult

    const platforms = Object.entries(rateData).map(([key, tiers]) => {
      const base = tiers[tier]
      return {
        key,
        label: platformLabels[key],
        min: Math.round(base.min * mult / 100) * 100,
        max: Math.round(base.max * mult / 100) * 100,
      }
    })

    setResult({ tier, platforms })
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: '13px 16px',
    fontSize: 15,
    color: '#fff',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    cursor: 'pointer',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff66' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
    paddingRight: 36,
  }

  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>

      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webToolSchema) }} />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        input:focus, select:focus { border-color: rgba(255,107,43,0.5) !important; background: rgba(255,107,43,0.04) !important; }
        input::placeholder { color: rgba(255,255,255,0.2); }
        input::-webkit-outer-spin-button, input::-webkit-inner-spin-button { -webkit-appearance: none; }
        select option { background: #1a1a2e; color: #fff; }
        .calc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .result-row { display: flex; justify-content: space-between; align-items: center; padding: 14px 18px; border-bottom: 1px solid rgba(255,255,255,0.05); transition: background 0.15s; }
        .result-row:last-child { border-bottom: none; }
        .result-row:hover { background: rgba(255,107,43,0.04); }
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 20px 0; cursor: pointer; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-weight: 700; font-size: 15px; color: rgba(255,255,255,0.9); line-height: 1.5; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
        .faq-a { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.75; margin-top: 12px; }
        .tip-card { display: flex; gap: 14px; background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 18px; margin-bottom: 12px; }
        .tip-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; }
        .tip-title { font-weight: 700; font-size: 15px; margin-bottom: 5px; color: #fff; }
        .tip-desc { font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.65; }
        .rate-table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .rate-table th { background: rgba(255,107,43,0.07); padding: 10px 14px; text-align: left; font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.04em; }
        .rate-table td { padding: 12px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); color: rgba(255,255,255,0.65); }
        .rate-table tr:last-child td { border-bottom: none; }
        .eng-btn { flex: 1; padding: 10px 8px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.15s; text-align: center; font-family: 'Plus Jakarta Sans', sans-serif; }
        .eng-btn.active { background: rgba(255,107,43,0.12); border-color: rgba(255,107,43,0.4); color: #FF8C5A; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: translateY(0) } }
        .result-box { animation: fadeUp 0.4s ease; }
        @media (max-width: 640px) {
          .calc-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 30px !important; }
          .eng-btns { flex-wrap: wrap; }
          .rate-table th:nth-child(4), .rate-table td:nth-child(4),
          .rate-table th:nth-child(5), .rate-table td:nth-child(5) { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', height: 58, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg,#FF6B2B,#FF4500)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 12, color: 'white' }}>IK</div>
            <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16 }}>Identity Kit</span>
          </Link>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <Link href="/tools" style={{ fontSize: 13, color: '#FF6B2B', fontWeight: 600, padding: '6px 12px', borderRadius: 8, border: '1px solid rgba(255,107,43,0.2)' }}>All Tools</Link>
            <Link href="/blog" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', padding: '6px 12px' }}>Blog</Link>
            <Link href="/auth?mode=signup" style={{ background: '#FF6B2B', color: '#fff', fontSize: 13, fontWeight: 700, padding: '7px 16px', borderRadius: 9 }}>Get your link →</Link>
          </div>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '14px 20px' }}>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.35)' }}>Home</Link>
          <span>›</span>
          <Link href="/tools" style={{ color: 'rgba(255,255,255,0.35)' }}>Tools</Link>
          <span>›</span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Influencer Rate Calculator India</span>
        </div>
      </div>

      <main style={{ maxWidth: 860, margin: '0 auto', padding: '0 20px 80px' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', paddingTop: 32, paddingBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 700, color: '#FF8C5A', marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            💰 Free Tool for Indian Creators
          </div>
          <h1 className="hero-title" style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
            Influencer Rate Calculator<br />India 2026
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 540, margin: '0 auto 10px', lineHeight: 1.7 }}>
            Find out exactly what to charge brands for Instagram Reels, Stories, and YouTube videos — with India-specific rates based on your follower count, niche, and engagement.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>Free forever · No login required · Results in seconds</p>
        </div>

        {/* CALCULATOR */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 24, padding: '36px 32px', marginBottom: 16 }}>
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 18, marginBottom: 6 }}>Enter Your Details</div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)' }}>Your niche and engagement rate affect your rates significantly — fill all three for the most accurate result.</p>
          </div>

          {/* Followers + Niche */}
          <div className="calc-grid" style={{ marginBottom: 14 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.55)', marginBottom: 8, letterSpacing: '0.02em' }}>TOTAL FOLLOWERS *</label>
              <input
                type="number"
                placeholder="e.g. 45000"
                value={followers}
                onChange={e => setFollowers(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.55)', marginBottom: 8, letterSpacing: '0.02em' }}>YOUR NICHE</label>
              <select value={niche} onChange={e => setNiche(e.target.value)} style={selectStyle}>
                {Object.entries(nicheMultipliers).map(([k, v]) => (
                  <option key={k} value={k}>{v.label} {v.mult > 1 ? `(+${Math.round((v.mult - 1) * 100)}%)` : v.mult < 1 ? `(${Math.round((v.mult - 1) * 100)}%)` : ''}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Engagement selector */}
          <div style={{ marginBottom: 28 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.55)', marginBottom: 10, letterSpacing: '0.02em' }}>YOUR ENGAGEMENT RATE</label>
            <div className="eng-btns" style={{ display: 'flex', gap: 8 }}>
              {[
                { key: 'low', label: 'Low', sub: '<1.5%' },
                { key: 'average', label: 'Average', sub: '1.5–3%' },
                { key: 'good', label: 'Good', sub: '3–6%' },
                { key: 'excellent', label: 'Excellent', sub: '6%+' },
              ].map(e => (
                <button
                  key={e.key}
                  onClick={() => setEngagement(e.key)}
                  className={`eng-btn${engagement === e.key ? ' active' : ''}`}
                >
                  <div style={{ fontWeight: 700, marginBottom: 2 }}>{e.label}</div>
                  <div style={{ fontSize: 11, opacity: 0.6 }}>{e.sub}</div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={calculate}
            style={{ width: '100%', background: '#FF6B2B', border: 'none', color: '#fff', padding: '16px 24px', borderRadius: 14, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '-0.3px' }}
            onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = '#FF8C5A'; (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = '#FF6B2B'; (e.target as HTMLButtonElement).style.transform = 'none' }}
          >
            Calculate My Rates →
          </button>

          {/* RESULT */}
          {result && (
            <div className="result-box" style={{ marginTop: 24 }}>
              <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '16px 20px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 24 }}>🎯</span>
                <div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16 }}>{tierLabel[result.tier]}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                    {nicheMultipliers[niche].label} · {engagement.charAt(0).toUpperCase() + engagement.slice(1)} engagement
                  </div>
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, overflow: 'hidden' }}>
                <div style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Platform / Content Type</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Rate Range (INR)</span>
                </div>
                {result.platforms.map((p, i) => (
                  <div key={p.key} className="result-row" style={{ borderBottom: i < result.platforms.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.85)', marginBottom: 2 }}>{p.label}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>per deliverable</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, color: '#FF8C5A' }}>
                        {fmt(p.min)} – {fmt(p.max)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '14px 18px', marginTop: 14, fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
                💡 These are <strong style={{ color: 'rgba(255,255,255,0.7)' }}>market rate ranges</strong> for Indian creators in 2026. Always add <strong style={{ color: 'rgba(255,255,255,0.7)' }}>18% GST</strong> on top if you are GST registered. For exclusivity or usage rights, add 25–50% extra.
              </div>

              <div style={{ marginTop: 20, textAlign: 'center' }}>
                <Link href="/auth?mode=signup" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 12, padding: '13px 32px', fontWeight: 800, fontSize: 15 }}>
                  Add this rate card to your Identity Kit →
                </Link>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginTop: 10 }}>Brands see your exact rates the moment they open your profile</p>
              </div>
            </div>
          )}
        </div>

        {/* TIP BOX */}
        <div style={{ background: 'rgba(255,107,43,0.05)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 16, padding: '20px 24px', marginBottom: 52 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: '#FF9A6B', marginBottom: 10 }}>💡 Not sure which engagement tier to pick?</div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
            Use our <Link href="/tools/instagram-engagement-calculator" style={{ color: '#FF6B2B', fontWeight: 600 }}>Instagram Engagement Rate Calculator</Link> first — enter your likes, comments, saves and shares to get your exact percentage, then come back and select the right tier above.
          </div>
        </div>

        {/* RATE TABLE BY TIER */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
          Indian Influencer Rate Card 2026 — Instagram Reels by Tier
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>
          Base rates for Instagram Reels at average engagement and lifestyle niche. Apply niche and engagement multipliers for your actual rate.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', marginBottom: 16 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="rate-table">
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Followers</th>
                  <th>Reel</th>
                  <th>Static Post</th>
                  <th>Story</th>
                  <th>YouTube Video</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Nano', '1K–10K', '₹1.5K–₹5K', '₹800–₹3K', '₹500–₹2K', '₹3K–₹10K'],
                  ['Micro', '10K–100K', '₹5K–₹30K', '₹3K–₹18K', '₹2K–₹10K', '₹10K–₹60K'],
                  ['Mid-Tier', '100K–500K', '₹30K–₹1.5L', '₹18K–₹80K', '₹10K–₹50K', '₹60K–₹3L'],
                  ['Macro', '500K–1M', '₹1.5L–₹5L', '₹80K–₹3L', '₹50K–₹2L', '₹3L–₹10L'],
                  ['Mega', '1M+', '₹5L–₹20L', '₹3L–₹10L', '₹2L–₹7L', '₹10L–₹50L'],
                ].map(row => (
                  <tr key={row[0]}>
                    <td style={{ fontWeight: 700, color: '#fff' }}>{row[0]}</td>
                    <td style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>{row[1]}</td>
                    <td style={{ color: '#FF9A6B', fontWeight: 700 }}>{row[2]}</td>
                    <td style={{ fontWeight: 600 }}>{row[3]}</td>
                    <td>{row[4]}</td>
                    <td style={{ color: '#4CAF50', fontWeight: 600 }}>{row[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginBottom: 52 }}>* Base rates at average engagement, lifestyle niche. Finance/tech creators earn 1.5–1.8x these rates. Add 18% GST if registered.</p>

        {/* NICHE MULTIPLIER TABLE */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
          Niche Multipliers for Indian Brand Deals 2026
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>
          Your niche is one of the biggest factors in what you can charge. Finance creators can command nearly 2x the base rate because their audience has high purchase intent.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', marginBottom: 52 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="rate-table">
              <thead>
                <tr>
                  <th>Niche</th>
                  <th>Multiplier</th>
                  <th>Example Reel Rate (Micro, 50K)</th>
                  <th>Why Brands Pay More</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(nicheMultipliers).map(([k, v]) => {
                  const baseMin = 5000, baseMax = 30000
                  return (
                    <tr key={k}>
                      <td style={{ fontWeight: 600, color: '#fff' }}>{v.label}</td>
                      <td style={{ fontWeight: 800, color: v.mult >= 1.5 ? '#4CAF50' : v.mult >= 1.2 ? '#FF9A6B' : v.mult < 1 ? '#FF5252' : 'rgba(255,255,255,0.6)' }}>{v.mult}x</td>
                      <td style={{ color: '#FF9A6B', fontWeight: 600 }}>
                        ₹{Math.round(baseMin * v.mult / 100) * 100 >= 1000 ? (Math.round(baseMin * v.mult / 100) * 100 / 1000).toFixed(0) + 'K' : Math.round(baseMin * v.mult / 100) * 100} – ₹{Math.round(baseMax * v.mult / 100) * 100 >= 100000 ? (Math.round(baseMax * v.mult / 100) * 100 / 100000).toFixed(1) + 'L' : (Math.round(baseMax * v.mult / 100) * 100 / 1000).toFixed(0) + 'K'}
                      </td>
                      <td style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
                        {k === 'finance' ? 'Highest CLV, SEBI-regulated products' :
                         k === 'tech' ? 'High-ticket products, global brands' :
                         k === 'education' ? 'Course sales, high conversion intent' :
                         k === 'health' ? 'Supplement brands, high margins' :
                         k === 'beauty' ? 'Repeat purchase products' :
                         k === 'food' ? 'FMCG brands, high volume' :
                         k === 'travel' ? 'Seasonal demand, booking value' :
                         k === 'lifestyle' ? 'Broad appeal, standard demand' :
                         k === 'fashion' ? 'High competition, lower margins' :
                         k === 'gaming' ? 'Younger demo, lower purchase power' :
                         'Lower advertiser spend in India'}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* TIPS */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
          8 Rules Indian Creators Must Follow When Charging Brands
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>
          Knowing your rate is half the battle. Negotiating it confidently is the other half.
        </p>
        <div style={{ marginBottom: 52 }}>
          {[
            { icon: '💪', title: 'Never reveal your rate first', desc: 'Always ask the brand "what is your budget for this campaign?" first. If their budget is higher than your rate, you leave money on the table by quoting low. Let them anchor first — you can always negotiate down, never up.' },
            { icon: '📊', title: 'Lead with engagement, not followers', desc: 'When pitching, always open with your engagement rate, not follower count. "My last 10 Reels averaged 6.2% engagement across 45K followers" is more powerful than "I have 45K followers." Brands pay for attention, not numbers.' },
            { icon: '⚖️', title: 'Charge extra for exclusivity', desc: 'If a brand asks you not to work with competitors for any period, charge 25–50% extra on top of your base rate. Exclusivity has real business cost — you are giving up future revenue. Never accept exclusivity at base rate.' },
            { icon: '📝', title: 'Add usage rights to every quote', desc: 'Your base rate covers one post on your own channel. If the brand wants to use your content in their ads, website, or other channels — that is a separate usage rights fee, typically 50–100% of your base rate per 6 months of usage.' },
            { icon: '💰', title: 'Always ask for 50% advance', desc: 'Standard Indian creator payment terms: 50% advance before you start, 50% after posting. Never deliver content before receiving the advance. This protects you from non-payment, which is common with smaller brands.' },
            { icon: '🔢', title: 'Include revision limits in every deal', desc: 'State clearly that your rate includes 2 rounds of revisions. Every additional revision is ₹X extra. Without this, brands can ask for unlimited changes, effectively paying you minimum wage for your time.' },
            { icon: '📈', title: 'Raise your rates every 6 months', desc: 'Your rate card should not be static. Every time you hit a new milestone (10K, 50K, 100K followers, or a significant engagement rate improvement), update your rates immediately. Brands who booked you before will try to keep the old rate — politely inform them of your new pricing.' },
            { icon: '🧾', title: 'Always send a formal invoice with GST', desc: 'Even if you are not GST registered, always send a professional invoice. It signals that you are a serious creator, not a hobbyist. Once you cross ₹20L annual income, GST registration is mandatory — plan for it early.' },
          ].map(tip => (
            <div key={tip.title} className="tip-card">
              <span className="tip-icon">{tip.icon}</span>
              <div>
                <div className="tip-title">{tip.title}</div>
                <p className="tip-desc">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.1), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 24, padding: '48px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden', marginBottom: 64 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(255,107,43,0.1), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ fontSize: 48, marginBottom: 16 }}>💰</div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 28, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.5px' }}>
            Put Your Rate Card Where Brands Can See It
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.75, maxWidth: 460, margin: '0 auto 28px' }}>
            Identity Kit gives you a professional shareable link with your rate card, media kit and creator CV — brands see your exact rates the moment they open your profile. No more PDFs. No more back-and-forth.
          </p>
          <Link href="/auth?mode=signup" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 14, padding: '15px 40px', fontWeight: 800, fontSize: 16, letterSpacing: '-0.3px' }}>
            Build my free creator profile →
          </Link>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', marginTop: 14 }}>Free forever. No credit card. Takes 10 minutes.</p>
        </div>

        {/* FAQ */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.5px' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '8px 24px', marginBottom: 64 }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="faq-q">
                {faq.q}
                <span style={{ color: '#FF6B2B', flexShrink: 0, fontSize: 18 }}>{openFaq === i ? '−' : '+'}</span>
              </div>
              {openFaq === i && <div className="faq-a">{faq.a}</div>}
            </div>
          ))}
        </div>

        {/* RELATED */}
        <div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, marginBottom: 20 }}>Related Tools & Guides</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { href: '/tools/instagram-engagement-calculator', tag: 'Free Tool', title: 'Instagram Engagement Rate Calculator — Check Your Rate First' },
              { href: '/blog/influencer-rate-card-india', tag: 'Rate Card', title: 'Complete Indian Influencer Rate Card Guide 2026' },
              { href: '/blog/how-to-get-brand-deals-india', tag: 'Brand Deals', title: 'How to Get Brand Deals in India in 2026' },
              { href: '/blog/how-to-pitch-brands-indian-influencer', tag: 'Pitching', title: 'How to Pitch Brands as an Indian Influencer — With Templates' },
            ].map(r => (
              <Link key={r.href} href={r.href}>
                <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 18, height: '100%' }}>
                  <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 100, display: 'inline-block', marginBottom: 10 }}>{r.tag}</span>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.5, margin: 0, fontWeight: 600 }}>{r.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/tools" style={{ fontSize: 14, color: '#FF6B2B' }}>All Tools</Link>
          <Link href="/blog" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Blog</Link>
          <Link href="/about" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>About</Link>
          <Link href="/contact" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contact</Link>
          <Link href="/terms" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Terms</Link>
          <Link href="/privacy" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Privacy</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit. Made with ❤️ for Indian creators.</p>
      </footer>
    </div>
  )
}
