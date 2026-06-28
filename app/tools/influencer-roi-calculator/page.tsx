'use client'
import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How do brands calculate influencer ROI in India?',
    a: 'Indian brands calculate influencer ROI using multiple metrics: Earned Media Value (EMV) — the equivalent cost of the reach if bought through paid ads; Cost Per Engagement (CPE) — campaign spend divided by total engagements; Cost Per View (CPV) — campaign spend divided by total views; and direct conversion tracking through unique promo codes or UTM links. A healthy influencer campaign ROI in India is considered 3x–8x — meaning for every ₹1 spent, the brand gets ₹3–₹8 in equivalent media value.',
  },
  {
    q: 'What is Earned Media Value (EMV) for influencer campaigns?',
    a: 'Earned Media Value (EMV) is the equivalent cost a brand would have to pay for the same reach and engagement through paid advertising. It is calculated as: (Total Reach × CPM rate) + (Total Engagements × CPE rate). In India, the average Instagram CPM for paid ads is ₹150–₹400, and CPE is ₹2–₹15 depending on niche. An influencer campaign that generates ₹5 lakh in EMV for a ₹50,000 investment represents a 10x ROI — exceptional by any standard.',
  },
  {
    q: 'What is a good Cost Per Engagement (CPE) for Indian influencer campaigns?',
    a: 'Good Cost Per Engagement (CPE) benchmarks for Indian influencer campaigns in 2026: Under ₹2 — exceptional (usually nano or micro creators with high engagement). ₹2–₹5 — good for micro creators. ₹5–₹15 — average for mid-tier creators. ₹15–₹40 — acceptable for macro creators with wide reach. Above ₹40 — reconsider the campaign. Finance and education niches consistently deliver lower CPE because their audiences are more engaged and intentional.',
  },
  {
    q: 'How do I prove my ROI to brands as an Indian creator?',
    a: 'To prove ROI to brands as an Indian creator: share your post-campaign analytics screenshot showing reach, impressions, likes, comments, saves, and shares. Calculate your CPE (campaign fee ÷ total engagements) and compare it to paid ad benchmarks — show that your CPE is better than Instagram ads. Share story swipe-up data or link clicks if applicable. For sales-driven campaigns, share promo code redemption data. Brands who see clear ROI data from one campaign are 5x more likely to rebook.',
  },
  {
    q: 'What metrics do Indian brands look at for influencer campaigns?',
    a: 'Indian brands evaluate influencer campaigns on: Reach (how many unique accounts saw the content), Impressions (total views including repeat), Engagement Rate (likes + comments + saves + shares ÷ followers), Story Views and Swipe-Up rate, Website clicks or promo code redemptions, Sentiment (quality of comments — are people actually interested?), and Share of Voice (how much the campaign contributed to brand mentions). D2C brands in India prioritize promo code conversions and website traffic above all else.',
  },
  {
    q: 'How much should a brand spend on influencer marketing in India?',
    a: 'Indian brands should allocate 20–40% of their digital marketing budget to influencer marketing in 2026, per industry benchmarks. For D2C brands, this is often higher — 40–60% — because influencer content converts better than banner ads for product discovery. A starting budget for testing influencer marketing in India: ₹50,000–₹1,50,000 per month, split across 3–5 micro creators (10K–100K followers) rather than one macro creator. Micro creator campaigns consistently outperform macro in CPE and conversion rate in India.',
  },
  {
    q: 'What is the average influencer campaign ROI in India?',
    a: 'Average influencer campaign ROI in India in 2026: Nano creators (1K–10K): 8x–15x EMV ROI — highest ROI due to hyper-engaged niche audiences. Micro creators (10K–100K): 5x–10x EMV ROI — best balance of reach and engagement. Mid-tier (100K–500K): 3x–7x EMV ROI — good reach, slightly lower engagement. Macro creators (500K–1M): 2x–5x EMV ROI — wide reach, lower engagement rate. Celebrity/Mega (1M+): 1x–3x EMV ROI — brand awareness play, not conversion.',
  },
  {
    q: 'What is Cost Per View (CPV) for YouTube influencer campaigns in India?',
    a: 'Cost Per View (CPV) benchmarks for YouTube influencer campaigns in India 2026: Under ₹0.50 — exceptional. ₹0.50–₹1.50 — good for mid-tier creators. ₹1.50–₹3 — average. Above ₹3 — reconsider the creator or negotiate rates. Compare this to YouTube TrueView ad CPV of ₹0.25–₹0.80 — influencer content often costs more per view but delivers higher trust and purchase intent. YouTube dedicated video CPV is typically 2–3x higher than integration CPV but delivers deeper audience connection.',
  },
]

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
  name: 'Influencer ROI Calculator India 2026',
  url: 'https://identitykit.in/tools/influencer-roi-calculator',
  description: 'Free influencer ROI calculator for Indian brands and creators. Calculate Earned Media Value, Cost Per Engagement, Cost Per View and campaign ROI — with India-specific benchmarks.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  creator: { '@type': 'Organization', name: 'Identity Kit', url: 'https://identitykit.in' },
}

// ── India benchmark data ──────────────────────────────────────────────────────
const nicheCPM: Record<string, number> = {
  finance: 320, tech: 280, education: 240, health: 210,
  beauty: 190, food: 170, travel: 180, lifestyle: 160,
  fashion: 150, gaming: 130, comedy: 120, business: 260,
}

const nicheCPE: Record<string, number> = {
  finance: 12, tech: 9, education: 8, health: 7,
  beauty: 6, food: 5, travel: 6, lifestyle: 5,
  fashion: 4, gaming: 4, comedy: 3, business: 10,
}

const niches = [
  { key: 'finance', label: 'Finance & Investing' },
  { key: 'tech', label: 'Tech & Gadgets' },
  { key: 'education', label: 'Education & Career' },
  { key: 'health', label: 'Health & Fitness' },
  { key: 'beauty', label: 'Beauty & Skincare' },
  { key: 'food', label: 'Food & Recipes' },
  { key: 'travel', label: 'Travel & Vlogs' },
  { key: 'lifestyle', label: 'Lifestyle' },
  { key: 'fashion', label: 'Fashion & Style' },
  { key: 'gaming', label: 'Gaming' },
  { key: 'comedy', label: 'Comedy & Entertainment' },
  { key: 'business', label: 'Business & Startup' },
]

function fmtINR(n: number) {
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr'
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L'
  if (n >= 1000) return '₹' + (n / 1000).toFixed(1) + 'K'
  return '₹' + Math.round(n).toLocaleString('en-IN')
}

function fmtNum(n: number) {
  if (n >= 10000000) return (n / 10000000).toFixed(1) + ' Cr'
  if (n >= 100000) return (n / 100000).toFixed(1) + ' L'
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K'
  return Math.round(n).toLocaleString('en-IN')
}

function getRoiRating(roi: number) {
  if (roi >= 10) return { label: 'Exceptional 🔥', color: '#4CAF50', desc: 'Outstanding ROI. This campaign significantly outperforms paid advertising.' }
  if (roi >= 6) return { label: 'Excellent ✅', color: '#8BC34A', desc: 'Well above industry benchmark. Highly cost-effective campaign.' }
  if (roi >= 3) return { label: 'Good 👍', color: '#FF9800', desc: 'Above average for Indian influencer campaigns. Worth continuing.' }
  if (roi >= 1.5) return { label: 'Average ⚡', color: '#FF9800', desc: 'Meets industry minimum. Optimize creator selection or content brief.' }
  return { label: 'Below Average ⚠️', color: '#FF5252', desc: 'Below break-even on media value. Review campaign strategy.' }
}

function getCPERating(cpe: number, niche: string) {
  const benchmark = nicheCPE[niche] || 6
  if (cpe <= benchmark * 0.5) return { label: 'Exceptional', color: '#4CAF50' }
  if (cpe <= benchmark) return { label: 'Good', color: '#8BC34A' }
  if (cpe <= benchmark * 1.5) return { label: 'Average', color: '#FF9800' }
  return { label: 'High', color: '#FF5252' }
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function InfluencerROICalculator() {
  const [mode, setMode] = useState<'brand' | 'creator'>('brand')

  // Campaign inputs
  const [campaignFee, setCampaignFee] = useState('')
  const [niche, setNiche] = useState('lifestyle')
  const [reach, setReach] = useState('')
  const [impressions, setImpressions] = useState('')
  const [likes, setLikes] = useState('')
  const [comments, setComments] = useState('')
  const [saves, setSaves] = useState('')
  const [shares, setShares] = useState('')
  const [views, setViews] = useState('')
  const [clicks, setClicks] = useState('')
  const [conversions, setConversions] = useState('')
  const [avgOrderValue, setAvgOrderValue] = useState('')

  const [result, setResult] = useState<null | {
    totalEngagements: number
    engagementRate: number
    emv: number
    roi: number
    cpe: number
    cpv: number | null
    cpc: number | null
    revenueGenerated: number | null
    roiRating: { label: string; color: string; desc: string }
    cpeRating: { label: string; color: string }
  }>(null)

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  function calculate() {
    const fee = parseFloat(campaignFee) || 0
    const r = parseFloat(reach) || 0
    const imp = parseFloat(impressions) || r * 1.3
    const l = parseFloat(likes) || 0
    const c = parseFloat(comments) || 0
    const sv = parseFloat(saves) || 0
    const sh = parseFloat(shares) || 0
    const v = parseFloat(views) || 0
    const cl = parseFloat(clicks) || 0
    const conv = parseFloat(conversions) || 0
    const aov = parseFloat(avgOrderValue) || 0

    if (!fee || (!r && !imp)) return

    const totalEngagements = l + c + sv + sh
    const effectiveReach = r || imp * 0.7
    const engagementRate = effectiveReach > 0 ? (totalEngagements / effectiveReach) * 100 : 0

    // EMV = (reach × CPM/1000) + (engagements × CPE)
    const cpm = nicheCPM[niche] || 160
    const cpeBenchmark = nicheCPE[niche] || 6
    const emv = (effectiveReach * cpm / 1000) + (totalEngagements * cpeBenchmark)

    const roi = fee > 0 ? emv / fee : 0
    const cpe = totalEngagements > 0 ? fee / totalEngagements : 0
    const cpv = v > 0 ? fee / v : null
    const cpc = cl > 0 ? fee / cl : null
    const revenueGenerated = conv > 0 && aov > 0 ? conv * aov : null

    setResult({
      totalEngagements,
      engagementRate,
      emv,
      roi,
      cpe,
      cpv,
      cpc,
      revenueGenerated,
      roiRating: getRoiRating(roi),
      cpeRating: getCPERating(cpe, niche),
    })
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 10,
    padding: '11px 14px',
    fontSize: 14,
    color: '#fff',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const selectStyle: React.CSSProperties = {
    ...inputStyle, cursor: 'pointer', appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff66' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: 36,
  }

  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: 12, fontWeight: 700,
    color: 'rgba(255,255,255,0.45)', marginBottom: 7,
    letterSpacing: '0.04em', textTransform: 'uppercase',
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
        .g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .g3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
        .g4 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px; }
        .card { background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.08); border-radius: 18px; padding: 24px; margin-bottom: 14px; }
        .metric-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 18px; text-align: center; }
        .metric-value { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 24px; margin-bottom: 4px; }
        .metric-label { font-size: 12px; color: rgba(255,255,255,0.4); font-weight: 600; }
        .metric-sub { font-size: 11px; color: rgba(255,255,255,0.25); margin-top: 3px; }
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 20px 0; cursor: pointer; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-weight: 700; font-size: 15px; color: rgba(255,255,255,0.9); line-height: 1.5; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
        .faq-a { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.75; margin-top: 12px; }
        .mode-btn { flex: 1; padding: 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); color: rgba(255,255,255,0.45); font-size: 14px; font-weight: 700; cursor: pointer; transition: all 0.15s; text-align: center; font-family: 'Plus Jakarta Sans', sans-serif; }
        .mode-btn.active { background: rgba(255,107,43,0.1); border-color: rgba(255,107,43,0.35); color: #FF8C5A; }
        .bench-table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .bench-table th { background: rgba(255,107,43,0.07); padding: 10px 14px; text-align: left; font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.04em; }
        .bench-table td { padding: 11px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); color: rgba(255,255,255,0.65); }
        .bench-table tr:last-child td { border-bottom: none; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: translateY(0) } }
        .result-anim { animation: fadeUp 0.4s ease; }
        @media (max-width: 640px) {
          .g2, .g3, .g4 { grid-template-columns: 1fr 1fr !important; }
          .hero-title { font-size: 28px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', height: 58, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '14px 20px' }}>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.35)' }}>Home</Link><span>›</span>
          <Link href="/tools" style={{ color: 'rgba(255,255,255,0.35)' }}>Tools</Link><span>›</span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Influencer ROI Calculator India</span>
        </div>
      </div>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 80px' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', paddingTop: 28, paddingBottom: 44 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 700, color: '#FF8C5A', marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            📈 Free Tool for Brands & Creators
          </div>
          <h1 className="hero-title" style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
            Influencer ROI Calculator<br />India 2026
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 560, margin: '0 auto 10px', lineHeight: 1.7 }}>
            Calculate Earned Media Value, Cost Per Engagement, and campaign ROI — with India-specific benchmarks. Built for both brands evaluating creators and creators proving their value.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>Free forever · No login required · India-specific benchmarks</p>
        </div>

        {/* MODE SELECTOR */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
          <button className={`mode-btn${mode === 'brand' ? ' active' : ''}`} onClick={() => setMode('brand')}>
            <div style={{ fontSize: 24, marginBottom: 6 }}>🏢</div>
            <div>I am a Brand</div>
            <div style={{ fontSize: 12, opacity: 0.6, fontWeight: 400, marginTop: 3 }}>Evaluate a creator before spending</div>
          </button>
          <button className={`mode-btn${mode === 'creator' ? ' active' : ''}`} onClick={() => setMode('creator')}>
            <div style={{ fontSize: 24, marginBottom: 6 }}>🎬</div>
            <div>I am a Creator</div>
            <div style={{ fontSize: 12, opacity: 0.6, fontWeight: 400, marginTop: 3 }}>Prove my ROI to brands</div>
          </button>
        </div>

        {/* CONTEXT TIP */}
        <div style={{ background: 'rgba(255,107,43,0.05)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 14, padding: '14px 18px', marginBottom: 20, fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
          {mode === 'brand'
            ? '🏢 Enter the creator\'s stats and your campaign spend below. We\'ll calculate the Earned Media Value, Cost Per Engagement, and overall ROI so you can make a data-driven decision.'
            : '🎬 Enter your campaign stats and what you charged the brand. We\'ll calculate the ROI you delivered — use this in your pitch deck and post-campaign reports to justify your rates.'}
        </div>

        {/* CALCULATOR */}
        <div className="card">
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>
            {mode === 'brand' ? 'Campaign Details' : 'Your Campaign Stats'}
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 22 }}>
            {mode === 'brand' ? 'Enter the campaign spend and creator\'s performance metrics.' : 'Enter what you charged and your content performance numbers.'}
          </p>

          {/* Row 1 — fee + niche */}
          <div className="g2" style={{ marginBottom: 14 }}>
            <div>
              <label style={labelStyle}>{mode === 'brand' ? 'Campaign Spend (₹) *' : 'What You Charged (₹) *'}</label>
              <input type="number" style={inputStyle} placeholder="e.g. 50000" value={campaignFee} onChange={e => setCampaignFee(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Creator Niche *</label>
              <select style={selectStyle} value={niche} onChange={e => setNiche(e.target.value)}>
                {niches.map(n => <option key={n.key} value={n.key}>{n.label}</option>)}
              </select>
            </div>
          </div>

          {/* Row 2 — reach + impressions */}
          <div className="g2" style={{ marginBottom: 14 }}>
            <div>
              <label style={labelStyle}>Reach (Unique Accounts)</label>
              <input type="number" style={inputStyle} placeholder="e.g. 80000" value={reach} onChange={e => setReach(e.target.value)} />
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginTop: 5 }}>From Instagram Insights</div>
            </div>
            <div>
              <label style={labelStyle}>Impressions (Total Views)</label>
              <input type="number" style={inputStyle} placeholder="e.g. 120000" value={impressions} onChange={e => setImpressions(e.target.value)} />
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginTop: 5 }}>From Instagram / YouTube Insights</div>
            </div>
          </div>

          {/* Row 3 — engagements */}
          <div style={{ marginBottom: 5 }}>
            <label style={{ ...labelStyle, marginBottom: 10 }}>Engagement Breakdown</label>
            <div className="g4" style={{ marginBottom: 14 }}>
              <div>
                <label style={{ ...labelStyle, fontSize: 11 }}>LIKES</label>
                <input type="number" style={inputStyle} placeholder="0" value={likes} onChange={e => setLikes(e.target.value)} />
              </div>
              <div>
                <label style={{ ...labelStyle, fontSize: 11 }}>COMMENTS</label>
                <input type="number" style={inputStyle} placeholder="0" value={comments} onChange={e => setComments(e.target.value)} />
              </div>
              <div>
                <label style={{ ...labelStyle, fontSize: 11 }}>SAVES</label>
                <input type="number" style={inputStyle} placeholder="0" value={saves} onChange={e => setSaves(e.target.value)} />
              </div>
              <div>
                <label style={{ ...labelStyle, fontSize: 11 }}>SHARES</label>
                <input type="number" style={inputStyle} placeholder="0" value={shares} onChange={e => setShares(e.target.value)} />
              </div>
            </div>
          </div>

          {/* Row 4 — optional */}
          <div className="g3" style={{ marginBottom: 24 }}>
            <div>
              <label style={labelStyle}>Video Views <span style={{ opacity: 0.4, fontWeight: 400 }}>(optional)</span></label>
              <input type="number" style={inputStyle} placeholder="e.g. 200000" value={views} onChange={e => setViews(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Link Clicks <span style={{ opacity: 0.4, fontWeight: 400 }}>(optional)</span></label>
              <input type="number" style={inputStyle} placeholder="e.g. 1200" value={clicks} onChange={e => setClicks(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Conversions / Sales <span style={{ opacity: 0.4, fontWeight: 400 }}>(optional)</span></label>
              <input type="number" style={inputStyle} placeholder="e.g. 45" value={conversions} onChange={e => setConversions(e.target.value)} />
            </div>
          </div>

          {conversions && (
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>Average Order Value (₹)</label>
              <input type="number" style={{ ...inputStyle, maxWidth: 260 }} placeholder="e.g. 999" value={avgOrderValue} onChange={e => setAvgOrderValue(e.target.value)} />
            </div>
          )}

          <button
            onClick={calculate}
            disabled={!campaignFee}
            style={{ width: '100%', background: !campaignFee ? 'rgba(255,107,43,0.3)' : '#FF6B2B', border: 'none', color: '#fff', padding: '16px 24px', borderRadius: 14, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, cursor: !campaignFee ? 'not-allowed' : 'pointer', transition: 'all 0.2s' }}
          >
            Calculate ROI →
          </button>
        </div>

        {/* RESULTS */}
        {result && (
          <div className="result-anim" style={{ marginBottom: 52 }}>

            {/* ROI Hero */}
            <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.3)', borderRadius: 20, padding: '28px 24px', textAlign: 'center', marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Earned Media Value</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 52, fontWeight: 800, color: '#FF8C5A', lineHeight: 1, marginBottom: 8 }}>{fmtINR(result.emv)}</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>
                ROI: <span style={{ color: result.roiRating.color }}>{result.roi.toFixed(1)}x</span> — {result.roiRating.label}
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', maxWidth: 420, margin: '0 auto' }}>{result.roiRating.desc}</p>
            </div>

            {/* Metrics grid */}
            <div className="g4" style={{ marginBottom: 16 }}>
              <div className="metric-card">
                <div className="metric-value" style={{ color: result.cpeRating.color }}>₹{result.cpe.toFixed(2)}</div>
                <div className="metric-label">Cost Per Engagement</div>
                <div className="metric-sub" style={{ color: result.cpeRating.color }}>{result.cpeRating.label}</div>
              </div>
              <div className="metric-card">
                <div className="metric-value" style={{ color: '#8B9CF4' }}>{fmtNum(result.totalEngagements)}</div>
                <div className="metric-label">Total Engagements</div>
                <div className="metric-sub">Likes + Comments + Saves + Shares</div>
              </div>
              <div className="metric-card">
                <div className="metric-value" style={{ color: '#4CAF50' }}>{result.engagementRate.toFixed(2)}%</div>
                <div className="metric-label">Engagement Rate</div>
                <div className="metric-sub">On this campaign</div>
              </div>
              {result.cpv !== null ? (
                <div className="metric-card">
                  <div className="metric-value" style={{ color: '#FFD700' }}>₹{result.cpv.toFixed(2)}</div>
                  <div className="metric-label">Cost Per View</div>
                  <div className="metric-sub">{result.cpv < 1.5 ? 'Good ✅' : result.cpv < 3 ? 'Average ⚡' : 'High ⚠️'}</div>
                </div>
              ) : result.cpc !== null ? (
                <div className="metric-card">
                  <div className="metric-value" style={{ color: '#FFD700' }}>₹{result.cpc.toFixed(2)}</div>
                  <div className="metric-label">Cost Per Click</div>
                  <div className="metric-sub">{result.cpc < 10 ? 'Good ✅' : 'Average ⚡'}</div>
                </div>
              ) : (
                <div className="metric-card">
                  <div className="metric-value" style={{ color: '#FFD700' }}>{result.roi.toFixed(1)}x</div>
                  <div className="metric-label">Media Value ROI</div>
                  <div className="metric-sub">vs campaign spend</div>
                </div>
              )}
            </div>

            {/* Revenue row if conversions entered */}
            {result.revenueGenerated && (
              <div style={{ background: 'rgba(76,175,80,0.07)', border: '1px solid rgba(76,175,80,0.2)', borderRadius: 14, padding: '16px 20px', marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>Revenue Generated</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>{conversions} conversions × ₹{avgOrderValue} avg order value</div>
                </div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 24, color: '#4CAF50' }}>{fmtINR(result.revenueGenerated)}</div>
              </div>
            )}

            {/* Methodology note */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '14px 18px', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
              📊 <strong style={{ color: 'rgba(255,255,255,0.6)' }}>EMV Formula:</strong> (Reach × ₹{nicheCPM[niche]}/1000 CPM) + (Engagements × ₹{nicheCPE[niche]} CPE) — using India 2026 benchmarks for <strong style={{ color: 'rgba(255,255,255,0.6)' }}>{niches.find(n => n.key === niche)?.label}</strong> niche.
            </div>

            {/* Creator CTA */}
            {mode === 'creator' && (
              <div style={{ marginTop: 16, background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 14, padding: '18px 20px' }}>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>💡 Share this ROI with your next brand</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: 12 }}>
                  Add these numbers to your Identity Kit profile — brands see your past campaign ROI before they even reach out. That's the most powerful thing you can show.
                </div>
                <Link href="/auth?mode=signup" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 9, padding: '9px 20px', fontWeight: 700, fontSize: 13 }}>
                  Add to my Identity Kit profile →
                </Link>
              </div>
            )}
          </div>
        )}

        {/* BENCHMARK TABLE */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
          India Influencer Campaign Benchmarks 2026
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>
          Use these to evaluate whether a campaign performed above or below industry standards.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', marginBottom: 16 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="bench-table">
              <thead>
                <tr>
                  <th>Creator Tier</th>
                  <th>Followers</th>
                  <th>Avg Engagement Rate</th>
                  <th>Good CPE</th>
                  <th>Expected EMV ROI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Nano', '1K–10K', '5–8%', 'Under ₹2', '8x–15x'],
                  ['Micro', '10K–100K', '3–6%', 'Under ₹5', '5x–10x'],
                  ['Mid-Tier', '100K–500K', '1.5–4%', 'Under ₹12', '3x–7x'],
                  ['Macro', '500K–1M', '0.8–2.5%', 'Under ₹25', '2x–5x'],
                  ['Mega', '1M+', '0.3–1.5%', 'Under ₹50', '1x–3x'],
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 700, color: '#fff' }}>{row[0]}</td>
                    <td style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>{row[1]}</td>
                    <td style={{ color: '#FF9A6B', fontWeight: 600 }}>{row[2]}</td>
                    <td style={{ color: '#4CAF50', fontWeight: 600 }}>{row[3]}</td>
                    <td style={{ color: '#8B9CF4', fontWeight: 700 }}>{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginBottom: 52 }}>* Based on India 2026 influencer campaign data. Finance and education niches deliver 1.5–2x better ROI than lifestyle and entertainment.</p>

        {/* CPM TABLE by niche */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
          India CPM & CPE Benchmarks by Niche 2026
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>
          These are the equivalent paid advertising rates used to calculate Earned Media Value for each niche in India.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', marginBottom: 52 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="bench-table">
              <thead>
                <tr>
                  <th>Niche</th>
                  <th>CPM (per 1000 reach)</th>
                  <th>CPE (per engagement)</th>
                  <th>EMV Multiplier</th>
                </tr>
              </thead>
              <tbody>
                {niches.map((n, i) => (
                  <tr key={n.key} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                    <td style={{ fontWeight: 600, color: '#fff' }}>{n.label}</td>
                    <td style={{ color: nicheCPM[n.key] >= 250 ? '#4CAF50' : nicheCPM[n.key] >= 180 ? '#FF9A6B' : 'rgba(255,255,255,0.6)', fontWeight: 700 }}>₹{nicheCPM[n.key]}</td>
                    <td style={{ color: nicheCPE[n.key] >= 9 ? '#4CAF50' : nicheCPE[n.key] >= 6 ? '#FF9A6B' : 'rgba(255,255,255,0.6)', fontWeight: 600 }}>₹{nicheCPE[n.key]}</td>
                    <td style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
                      {nicheCPM[n.key] >= 250 ? 'High premium' : nicheCPM[n.key] >= 180 ? 'Above average' : 'Standard'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.1), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 24, padding: '48px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden', marginBottom: 64 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(255,107,43,0.1), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ fontSize: 48, marginBottom: 16 }}>📊</div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.5px' }}>
            Creators — show brands your ROI before they ask
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.75, maxWidth: 460, margin: '0 auto 28px' }}>
            Identity Kit gives you one professional link with your stats, past campaign results, rate card and media kit. Brands see your value the moment they land on your profile.
          </p>
          <Link href="/auth?mode=signup" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 14, padding: '14px 36px', fontWeight: 800, fontSize: 15 }}>
            Build my free Identity Kit →
          </Link>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', marginTop: 14 }}>Free forever. No credit card. 10 minutes.</p>
        </div>

        {/* FAQ */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.5px' }}>Frequently Asked Questions</h2>
        <div style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '8px 24px', marginBottom: 64 }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="faq-q">{faq.q}<span style={{ color: '#FF6B2B', flexShrink: 0, fontSize: 18 }}>{openFaq === i ? '−' : '+'}</span></div>
              {openFaq === i && <div className="faq-a">{faq.a}</div>}
            </div>
          ))}
        </div>

        {/* RELATED */}
        <div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, marginBottom: 20 }}>Related Tools</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { href: '/tools/influencer-rate-calculator', tag: 'Free Tool', title: 'Influencer Rate Calculator — What to Charge for Brand Deals' },
              { href: '/tools/instagram-engagement-calculator', tag: 'Free Tool', title: 'Instagram Engagement Rate Calculator India' },
              { href: '/tools/brand-pitch-email-generator', tag: 'Free Tool', title: 'Brand Pitch Email Generator — Get More Brand Deals' },
              { href: '/tools/brand-deal-contract-template', tag: 'Free Tool', title: 'Brand Deal Contract Template — Protect Every Deal' },
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
