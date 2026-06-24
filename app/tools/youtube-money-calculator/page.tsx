'use client'
import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

// ── India RPM data by niche ───────────────────────────────────────────────────
const nicheRPM: Record<string, { min: number; max: number; label: string; emoji: string }> = {
  finance:    { min: 80,  max: 250, label: 'Finance & Investing',   emoji: '💹' },
  tech:       { min: 60,  max: 180, label: 'Tech & Gadgets',        emoji: '💻' },
  education:  { min: 50,  max: 150, label: 'Education & Career',    emoji: '📚' },
  health:     { min: 40,  max: 120, label: 'Health & Fitness',      emoji: '💪' },
  business:   { min: 55,  max: 160, label: 'Business & Startup',    emoji: '🚀' },
  gaming:     { min: 22,  max: 65,  label: 'Gaming',                emoji: '🎮' },
  food:       { min: 25,  max: 80,  label: 'Food & Cooking',        emoji: '🍳' },
  travel:     { min: 28,  max: 90,  label: 'Travel & Vlogs',        emoji: '✈️' },
  beauty:     { min: 30,  max: 95,  label: 'Beauty & Skincare',     emoji: '💄' },
  comedy:     { min: 22,  max: 60,  label: 'Comedy & Entertainment',emoji: '😂' },
  lifestyle:  { min: 20,  max: 70,  label: 'Lifestyle',             emoji: '✨' },
  news:       { min: 18,  max: 55,  label: 'News & Politics',       emoji: '📰' },
}

// Brand deal rates by subs
const brandDealRates: Record<string, { dedicated: string; integration: string; shorts: string }> = {
  nano:    { dedicated: '₹3K–₹10K',    integration: '₹1.5K–₹6K',   shorts: '₹1K–₹4K' },
  micro:   { dedicated: '₹10K–₹60K',   integration: '₹6K–₹35K',    shorts: '₹4K–₹20K' },
  midtier: { dedicated: '₹60K–₹3L',    integration: '₹35K–₹1.75L', shorts: '₹20K–₹80K' },
  macro:   { dedicated: '₹3L–₹10L',    integration: '₹1.75L–₹6L',  shorts: '₹80K–₹2.5L' },
  mega:    { dedicated: '₹10L–₹50L',   integration: '₹6L–₹25L',    shorts: '₹2.5L–₹8L' },
}

function getTier(subs: number) {
  if (subs <= 10000) return 'nano'
  if (subs <= 100000) return 'micro'
  if (subs <= 500000) return 'midtier'
  if (subs <= 1000000) return 'macro'
  return 'mega'
}

const tierLabel: Record<string, string> = {
  nano: 'Nano (1K–10K subs)',
  micro: 'Micro (10K–100K subs)',
  midtier: 'Mid-Tier (100K–500K subs)',
  macro: 'Macro (500K–1M subs)',
  mega: 'Mega (1M+ subs)',
}

function fmtINR(n: number) {
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr'
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L'
  if (n >= 1000) return '₹' + (n / 1000).toFixed(1) + 'K'
  return '₹' + Math.round(n).toLocaleString('en-IN')
}

function fmtViews(n: number) {
  if (n >= 10000000) return (n / 10000000).toFixed(1) + ' Cr'
  if (n >= 100000) return (n / 100000).toFixed(1) + ' L'
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K'
  return n.toString()
}

// ── FAQs ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How much does YouTube pay per 1000 views in India in 2026?',
    a: 'YouTube pays Indian creators ₹18–₹250 per 1000 views (RPM) depending on niche. Finance and investing channels earn the highest RPM at ₹80–₹250 per 1000 views. Entertainment and comedy channels earn ₹22–₹60 per 1000 views. The actual amount you receive is RPM minus YouTube\'s 45% cut — so if your RPM is ₹100, you keep approximately ₹55 per 1000 views (your RPM shown in YouTube Studio is already after YouTube\'s cut).',
  },
  {
    q: 'What is the difference between CPM and RPM on YouTube India?',
    a: 'CPM (Cost Per Mille) is what advertisers pay YouTube per 1000 ad impressions. RPM (Revenue Per Mille) is what you as a creator actually earn per 1000 video views — after YouTube takes its 45% revenue share. In India, if the CPM is ₹180, your RPM will be approximately ₹55–₹70 (after YouTube\'s cut and accounting for views without ads). Always use RPM, not CPM, when estimating your actual earnings.',
  },
  {
    q: 'How many views do I need to make ₹1 lakh per month on YouTube India?',
    a: 'To earn ₹1 lakh per month from YouTube AdSense in India, you need approximately 4–8 lakh views per month for a finance channel (RPM ₹120–₹250), 8–15 lakh views for an education channel (RPM ₹60–₹120), and 15–40 lakh views for entertainment or comedy (RPM ₹25–₹60). Most successful Indian YouTubers earning ₹1L+ per month combine AdSense with brand deals, memberships, and course sales.',
  },
  {
    q: 'How do I qualify for YouTube monetization in India (YPP)?',
    a: 'To join the YouTube Partner Program (YPP) in India, you need 1,000 subscribers AND 4,000 watch hours in the last 12 months (for long-form content), OR 1,000 subscribers AND 10 million Shorts views in the last 90 days. Once approved, you earn from ads, channel memberships, Super Thanks, Super Chats, and YouTube Premium revenue. India has one of the fastest YPP approval rates globally due to the large creator base.',
  },
  {
    q: 'How much do Indian YouTubers earn from brand deals vs AdSense?',
    a: 'For most successful Indian YouTubers, brand deals earn 3–8x more than AdSense. A mid-tier YouTuber (200K subs) might earn ₹25,000–₹40,000/month from AdSense but ₹1,50,000–₹3,00,000/month from 2–3 brand integrations. This is why Indian creators focus on building an engaged niche audience — even 50K subscribers in finance can generate more income through brand deals than 500K subscribers in entertainment via AdSense alone.',
  },
  {
    q: 'Does YouTube pay in USD or INR in India?',
    a: 'YouTube pays Indian creators in INR (Indian Rupees) via direct bank transfer to your linked Indian bank account. Payments are made monthly when your balance exceeds ₹8,000 (the minimum payment threshold for India). YouTube AdSense is linked to your Google account — you set up payment in AdSense settings and add your Indian bank account (IFSC code required). Payments typically arrive between the 21st–26th of each month.',
  },
  {
    q: 'What is a good RPM for Indian YouTube channels in 2026?',
    a: 'A good RPM for Indian YouTube channels in 2026: Finance/Business (₹80–₹250) — excellent. Tech/Education (₹50–₹180) — very good. Health/Beauty (₹30–₹120) — good. Food/Travel (₹25–₹90) — average. Entertainment/Comedy (₹18–₹65) — below average for monetization purposes. Indian RPMs are generally 3–5x lower than US RPMs because Indian advertisers pay lower CPMs, but Indian creator costs are also lower, making it viable.',
  },
  {
    q: 'Is YouTube Shorts monetized in India in 2026?',
    a: 'Yes, YouTube Shorts is fully monetized in India in 2026 through the YouTube Partner Program. Shorts RPM in India is significantly lower than long-form — typically ₹3–₹15 per 1000 views vs ₹20–₹250 for long-form. However, Shorts are used primarily for audience growth rather than direct AdSense income. Most Indian creators use Shorts to grow their channel, then monetize that audience through long-form videos and brand deals.',
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
  name: 'YouTube Money Calculator India 2026',
  url: 'https://identitykit.in/tools/youtube-money-calculator',
  description: 'Free YouTube money calculator for Indian creators. Estimate your YouTube earnings in INR based on views, niche, and India-specific RPM rates. Includes AdSense + brand deal income.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  creator: { '@type': 'Organization', name: 'Identity Kit', url: 'https://identitykit.in' },
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function YouTubeMoneyCalculator() {
  const [views, setViews] = useState('')
  const [subs, setSubs] = useState('')
  const [niche, setNiche] = useState('education')
  const [brandsPerMonth, setBrandsPerMonth] = useState('1')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [result, setResult] = useState<null | {
    rpmMin: number; rpmMax: number
    adsenseMin: number; adsenseMax: number
    brandMin: number; brandMax: number
    totalMin: number; totalMax: number
    tier: string
    annualMin: number; annualMax: number
  }>(null)

  function calculate() {
    const v = parseFloat(views.replace(/,/g, ''))
    const s = parseFloat(subs.replace(/,/g, ''))
    const brands = parseInt(brandsPerMonth) || 0
    if (!v || v <= 0) return

    const rpm = nicheRPM[niche]
    // AdSense: RPM is per 1000 views, already after YT cut (as shown in Studio)
    const adsenseMin = (v / 1000) * rpm.min
    const adsenseMax = (v / 1000) * rpm.max

    // Brand deals
    const tier = s ? getTier(s) : 'micro'
    const bd = brandDealRates[tier]
    // Parse brand deal range
    const parseRate = (r: string) => {
      const nums = r.replace(/[₹,]/g, '').split('–').map(x => {
        x = x.trim()
        if (x.endsWith('L')) return parseFloat(x) * 100000
        if (x.endsWith('K')) return parseFloat(x) * 1000
        return parseFloat(x)
      })
      return { min: nums[0], max: nums[1] }
    }
    const bdRange = parseRate(bd.integration)
    const brandMin = bdRange.min * brands
    const brandMax = bdRange.max * brands

    const totalMin = adsenseMin + brandMin
    const totalMax = adsenseMax + brandMax

    setResult({
      rpmMin: rpm.min, rpmMax: rpm.max,
      adsenseMin, adsenseMax,
      brandMin, brandMax,
      totalMin, totalMax,
      tier,
      annualMin: totalMin * 12,
      annualMax: totalMax * 12,
    })
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
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 20px 0; cursor: pointer; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-weight: 700; font-size: 15px; color: rgba(255,255,255,0.9); line-height: 1.5; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
        .faq-a { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.75; margin-top: 12px; }
        .tip-card { display: flex; gap: 14px; background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 18px; margin-bottom: 12px; }
        .tip-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; }
        .tip-title { font-weight: 700; font-size: 15px; margin-bottom: 5px; color: #fff; }
        .tip-desc { font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.65; }
        .rpm-table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .rpm-table th { background: rgba(255,107,43,0.07); padding: 10px 14px; text-align: left; font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.04em; }
        .rpm-table td { padding: 12px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); color: rgba(255,255,255,0.65); }
        .rpm-table tr:last-child td { border-bottom: none; }
        .result-row { background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 18px 22px; display: flex; justify-content: space-between; align-items: center; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: translateY(0) } }
        .result-box { animation: fadeUp 0.4s ease; }
        .income-stream { display: flex; gap: 12px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 16px 20px; margin-bottom: 10px; align-items: center; }
        @media (max-width: 640px) {
          .calc-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 30px !important; }
          .rpm-table th:nth-child(3), .rpm-table td:nth-child(3) { display: none; }
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
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>YouTube Money Calculator India</span>
        </div>
      </div>

      <main style={{ maxWidth: 860, margin: '0 auto', padding: '0 20px 80px' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', paddingTop: 32, paddingBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 700, color: '#FF8C5A', marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            ▶️ Free Tool for Indian Creators
          </div>
          <h1 className="hero-title" style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
            YouTube Money Calculator<br />India 2026
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 540, margin: '0 auto 10px', lineHeight: 1.7 }}>
            Estimate your YouTube earnings in INR — AdSense income plus brand deals — using real India-specific RPM data for every niche.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>Free forever · No login required · Results in seconds</p>
        </div>

        {/* CALCULATOR */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 24, padding: '36px 32px', marginBottom: 16 }}>
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 18, marginBottom: 6 }}>Enter Your YouTube Stats</div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)' }}>Use your monthly average views for the most accurate estimate. Find this in YouTube Studio → Analytics.</p>
          </div>

          {/* Row 1 */}
          <div className="calc-grid" style={{ marginBottom: 14 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.55)', marginBottom: 8, letterSpacing: '0.02em' }}>MONTHLY VIEWS *</label>
              <input
                type="number"
                placeholder="e.g. 500000"
                value={views}
                onChange={e => setViews(e.target.value)}
                style={inputStyle}
              />
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginTop: 6 }}>Find in YouTube Studio → Analytics → Overview</div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.55)', marginBottom: 8, letterSpacing: '0.02em' }}>SUBSCRIBERS (optional)</label>
              <input
                type="number"
                placeholder="e.g. 85000"
                value={subs}
                onChange={e => setSubs(e.target.value)}
                style={inputStyle}
              />
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginTop: 6 }}>Used to estimate brand deal rates</div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="calc-grid" style={{ marginBottom: 28 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.55)', marginBottom: 8, letterSpacing: '0.02em' }}>YOUR NICHE</label>
              <select value={niche} onChange={e => setNiche(e.target.value)} style={selectStyle}>
                {Object.entries(nicheRPM).map(([k, v]) => (
                  <option key={k} value={k}>{v.emoji} {v.label} — RPM ₹{v.min}–₹{v.max}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.55)', marginBottom: 8, letterSpacing: '0.02em' }}>BRAND DEALS PER MONTH</label>
              <select value={brandsPerMonth} onChange={e => setBrandsPerMonth(e.target.value)} style={selectStyle}>
                <option value="0">0 — AdSense only</option>
                <option value="1">1 brand deal</option>
                <option value="2">2 brand deals</option>
                <option value="3">3 brand deals</option>
                <option value="4">4 brand deals</option>
                <option value="5">5+ brand deals</option>
              </select>
            </div>
          </div>

          <button
            onClick={calculate}
            style={{ width: '100%', background: '#FF6B2B', border: 'none', color: '#fff', padding: '16px 24px', borderRadius: 14, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '-0.3px' }}
            onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = '#FF8C5A'; (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = '#FF6B2B'; (e.target as HTMLButtonElement).style.transform = 'none' }}
          >
            Calculate My YouTube Earnings →
          </button>

          {/* RESULT */}
          {result && (
            <div className="result-box" style={{ marginTop: 24 }}>

              {/* Total income highlight */}
              <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.3)', borderRadius: 20, padding: '28px 24px', textAlign: 'center', marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>Estimated Monthly Income</div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 52, fontWeight: 800, color: '#FF8C5A', lineHeight: 1, marginBottom: 6 }}>
                  {fmtINR(result.totalMin)} – {fmtINR(result.totalMax)}
                </div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)' }}>
                  {fmtINR(result.annualMin)} – {fmtINR(result.annualMax)} per year
                </div>
              </div>

              {/* Breakdown */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>Income Breakdown</div>

                <div className="income-stream">
                  <div style={{ fontSize: 28 }}>📺</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>YouTube AdSense</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>RPM ₹{result.rpmMin}–₹{result.rpmMax} · {fmtViews(parseFloat(views))} views</div>
                  </div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16, color: '#4CAF50', textAlign: 'right' }}>
                    {fmtINR(result.adsenseMin)}<br />
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400 }}>to {fmtINR(result.adsenseMax)}</span>
                  </div>
                </div>

                {parseInt(brandsPerMonth) > 0 && (
                  <div className="income-stream">
                    <div style={{ fontSize: 28 }}>🤝</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>Brand Deals</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{brandsPerMonth} integration{parseInt(brandsPerMonth) > 1 ? 's' : ''}/month · {tierLabel[result.tier]}</div>
                    </div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16, color: '#8B9CF4', textAlign: 'right' }}>
                      {fmtINR(result.brandMin)}<br />
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400 }}>to {fmtINR(result.brandMax)}</span>
                    </div>
                  </div>
                )}
              </div>

              <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '14px 18px', marginBottom: 20, fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
                💡 RPM shown is <strong style={{ color: 'rgba(255,255,255,0.7)' }}>after YouTube&apos;s 45% cut</strong> — matching what you see in YouTube Studio. Estimates assume 40–60% of views are monetized. Deduct 30% TDS if your annual income exceeds ₹2.5L.
              </div>

              <div style={{ textAlign: 'center' }}>
                <Link href="/auth?mode=signup" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 12, padding: '13px 32px', fontWeight: 800, fontSize: 15 }}>
                  Add your YouTube stats to Identity Kit →
                </Link>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginTop: 10 }}>Show brands your real reach in one professional link</p>
              </div>
            </div>
          )}
        </div>

        {/* TIP BOX */}
        <div style={{ background: 'rgba(255,107,43,0.05)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 16, padding: '20px 24px', marginBottom: 52 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: '#FF9A6B', marginBottom: 10 }}>💡 Where to find your monthly views</div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
            Open YouTube Studio → click <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Analytics</strong> → set date range to <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Last 28 days</strong> → multiply the Views number by ~1.07 for a monthly estimate. For RPM, go to Analytics → Revenue tab → RPM to see your exact rate.
          </div>
        </div>

        {/* RPM TABLE */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
          YouTube RPM Rates by Niche — India 2026
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>
          RPM (Revenue Per Mille) is what you actually earn per 1,000 views — after YouTube&apos;s 45% cut. These are real India 2026 benchmarks. Finance channels earn up to 14x more per view than entertainment.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', marginBottom: 16 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="rpm-table">
              <thead>
                <tr>
                  <th>Niche</th>
                  <th>RPM (₹ per 1K views)</th>
                  <th>10L Views/Month Earns</th>
                  <th>Why</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(nicheRPM).map(([k, v]) => (
                  <tr key={k}>
                    <td style={{ fontWeight: 600, color: '#fff' }}>{v.emoji} {v.label}</td>
                    <td style={{ fontWeight: 800, color: v.min >= 60 ? '#4CAF50' : v.min >= 35 ? '#FF9A6B' : 'rgba(255,255,255,0.6)' }}>₹{v.min}–₹{v.max}</td>
                    <td style={{ color: '#FF9A6B', fontWeight: 600 }}>
                      {fmtINR(v.min * 1000)} – {fmtINR(v.max * 1000)}
                    </td>
                    <td style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
                      {k === 'finance' ? 'Banks, insurance, investment apps pay premium' :
                       k === 'tech' ? 'High-value electronics & SaaS advertisers' :
                       k === 'business' ? 'B2B tools, courses, consulting' :
                       k === 'education' ? 'EdTech brands, test prep, courses' :
                       k === 'health' ? 'Supplements, fitness apps, insurance' :
                       k === 'beauty' ? 'Cosmetics, skincare products' :
                       k === 'food' ? 'FMCG, food delivery apps' :
                       k === 'travel' ? 'Hotels, airlines, booking platforms' :
                       k === 'gaming' ? 'Gaming peripherals, energy drinks' :
                       k === 'comedy' ? 'Mass reach, lower advertiser intent' :
                       k === 'lifestyle' ? 'Broad appeal, mixed ad rates' :
                       'Political/news ad restrictions'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginBottom: 52 }}>* RPM values are after YouTube&apos;s 45% revenue share. Actual RPM varies by audience location, ad block rate, and seasonality (Q4 is always 20–40% higher).</p>

        {/* INCOME STREAMS */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
          6 Ways Indian YouTubers Actually Make Money in 2026
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>
          AdSense is just one piece. Top Indian YouTubers earn from 4–6 revenue streams simultaneously.
        </p>
        <div style={{ marginBottom: 52 }}>
          {[
            { icon: '📺', title: 'YouTube AdSense (YPP)', earn: 'RPM ₹18–₹250 per 1K views', desc: 'The baseline income for every monetized channel. Finance and tech channels earn the most. Requires 1,000 subscribers + 4,000 watch hours. Q4 (Oct–Dec) pays 20–40% more than Q1–Q2 due to festive ad spending by brands.' },
            { icon: '🤝', title: 'Brand Integrations & Sponsorships', earn: '3–8x more than AdSense for most creators', desc: 'The biggest income source for Indian YouTubers. A mid-tier creator (200K subs) can earn ₹1.5L–₹3L per brand integration. Finance and tech brands pay the most. Use our Influencer Rate Calculator to price your integrations accurately.' },
            { icon: '🎓', title: 'Courses & Digital Products', earn: '₹10,000–₹50,000+ per sale', desc: 'The highest-margin revenue stream. Indian creators in education, finance, fitness and business niches launch courses on platforms like Teachable, Graphy, or their own website. Even 10 course sales per month at ₹5,000 = ₹50,000 passive income.' },
            { icon: '💙', title: 'YouTube Memberships & Super Chats', earn: '₹50–₹500 per member per month', desc: 'Channel memberships let loyal fans pay ₹49–₹500/month for exclusive content, badges, and early access. Super Chats during live streams can earn ₹5,000–₹50,000 per stream for popular finance and gaming creators.' },
            { icon: '🔗', title: 'Affiliate Marketing', earn: '₹200–₹5,000 per sale', desc: 'Amazon Associates, Flipkart Affiliate, and fintech/edtech referral programs. Finance creators promoting trading apps earn ₹500–₹3,000 per account opened. Tech creators promoting gadgets earn 3–8% commission per sale. Works passively through old videos.' },
            { icon: '🎤', title: 'Speaking, Consulting & Workshops', earn: '₹20,000–₹5,00,000 per engagement', desc: 'Established YouTubers get speaking invitations, consulting requests, and workshop opportunities. A creator with 100K subscribers in the business or marketing niche can charge ₹50,000–₹2,00,000 for a corporate workshop.' },
          ].map(s => (
            <div key={s.title} className="tip-card">
              <span className="tip-icon">{s.icon}</span>
              <div>
                <div className="tip-title">{s.title}</div>
                <div style={{ fontSize: 13, color: '#FF9A6B', fontWeight: 600, marginBottom: 6 }}>{s.earn}</div>
                <p className="tip-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* VIEWS TO INCOME TABLE */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
          How Much Does YouTube Pay at Different View Counts? — India 2026
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>
          AdSense-only estimates for education niche (RPM ₹50–₹150). Finance creators earn 2–3x more; entertainment creators earn 40–60% of these numbers.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', marginBottom: 52 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="rpm-table">
              <thead>
                <tr>
                  <th>Monthly Views</th>
                  <th>AdSense (Education)</th>
                  <th>AdSense (Finance)</th>
                  <th>AdSense (Entertainment)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['10,000', '₹500–₹1,500', '₹800–₹2,500', '₹180–₹650'],
                  ['50,000', '₹2,500–₹7,500', '₹4,000–₹12,500', '₹900–₹3,250'],
                  ['1,00,000', '₹5,000–₹15,000', '₹8,000–₹25,000', '₹1,800–₹6,500'],
                  ['5,00,000', '₹25,000–₹75,000', '₹40,000–₹1,25,000', '₹9,000–₹32,500'],
                  ['10,00,000', '₹50,000–₹1,50,000', '₹80,000–₹2,50,000', '₹18,000–₹65,000'],
                  ['50,00,000', '₹2.5L–₹7.5L', '₹4L–₹12.5L', '₹90K–₹3.25L'],
                ].map(row => (
                  <tr key={row[0]}>
                    <td style={{ fontWeight: 700, color: '#fff' }}>{row[0]}</td>
                    <td style={{ color: '#FF9A6B', fontWeight: 600 }}>{row[1]}</td>
                    <td style={{ color: '#4CAF50', fontWeight: 700 }}>{row[2]}</td>
                    <td>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.1), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 24, padding: '48px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden', marginBottom: 64 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(255,107,43,0.1), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ fontSize: 48, marginBottom: 16 }}>▶️</div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 28, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.5px' }}>
            Show Brands Your YouTube Stats Instantly
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.75, maxWidth: 460, margin: '0 auto 28px' }}>
            Identity Kit puts your YouTube subscriber count, views, engagement and rate card in one professional link — brands see everything they need before they even ask.
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
              { href: '/tools/influencer-rate-calculator', tag: 'Free Tool', title: 'Influencer Rate Calculator — What to Charge for Brand Deals' },
              { href: '/tools/instagram-engagement-calculator', tag: 'Free Tool', title: 'Instagram Engagement Rate Calculator India' },
              { href: '/blog/youtube-monetization-india-2026', tag: 'Deep Dive', title: 'YouTube Monetization India 2026 — Complete Guide (YPP, CPM, RPM)' },
              { href: '/blog/instagram-vs-youtube-india-2026', tag: 'Comparison', title: 'Instagram vs YouTube India 2026 — Which Pays Indian Creators More?' },
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
