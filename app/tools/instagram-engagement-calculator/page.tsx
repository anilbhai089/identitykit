'use client'
import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

// ── FAQ data (also used for schema) ──────────────────────────────────────────
const faqs = [
  {
    q: 'What is a good Instagram engagement rate in India in 2026?',
    a: 'A good engagement rate depends on your tier. Nano creators (1K–10K): 4–8% is good, 8%+ is excellent. Micro creators (10K–100K): 3–6% is good. Mid-tier (100K–500K): 1.5–4%. Macro creators (500K–1M): 0.8–2.5%. Indian creators average 3.2% — higher than the global average of 1.59%.',
  },
  {
    q: 'How do I calculate Instagram engagement rate?',
    a: 'The standard formula is: (Likes + Comments) ÷ Followers × 100. For a more complete picture, use the full formula: (Likes + Comments + Saves + Shares) ÷ Followers × 100. Calculate across your last 10–15 posts and average the results — never use a single viral post as it will inflate your rate.',
  },
  {
    q: 'What engagement rate do I need to get brand deals in India?',
    a: 'Most Indian brands require a minimum 2–3% engagement rate before considering paid brand deals. Niche matters too — a finance creator with 2.5% engagement is more valuable to a fintech brand than a lifestyle creator with 5%. For consistent brand deal income, aim for 3%+ as a micro creator and 1.5%+ as a mid-tier creator.',
  },
  {
    q: 'Why do brands look at engagement rate over follower count?',
    a: 'Brands prefer engagement rate because many Indian creators have inflated follower counts from bots or follow-for-follow tactics. A creator with 30K followers and 7% engagement reaches more genuinely interested people than one with 200K followers and 0.5% engagement. Engagement rate predicts conversion rate far better than follower count.',
  },
  {
    q: 'What counts as engagement on Instagram in 2026?',
    a: 'Instagram engagement includes likes, comments, shares, saves, story replies, story taps, and link clicks on Stories. Saves and shares carry the most algorithmic weight because they signal high-value content. This calculator includes all four core interactions: likes, comments, saves, and shares.',
  },
  {
    q: 'Does a higher engagement rate mean higher brand deal rates?',
    a: 'Yes, significantly. Indian agencies use engagement rate as a multiplier on top of base follower-count rates. A micro creator with 50K followers and 7% engagement can charge 2–3x more than one with 50K followers and 1.5% engagement. Some agencies like Qoruz use cost-per-engagement (CPE) as their primary campaign ROI metric.',
  },
  {
    q: 'How many posts should I average to calculate engagement rate?',
    a: 'Always average across your last 10–15 posts. A single viral post can inflate your rate by 5–10x, giving a misleading picture. If you have had a major viral moment in the last month, use your last 15–20 posts to get a more accurate baseline that brands can trust.',
  },
  {
    q: 'What is the average Instagram engagement rate for Indian creators?',
    a: 'The average Instagram engagement rate for Indian creators in 2026 is approximately 3.2% across all tiers — higher than the global average of 1.59%. Nano-influencers average 5–8%, micro-influencers 3–6%, mid-tier 1.5–3.5%, and macro creators 0.8–2.5%. Finance and education niches consistently outperform lifestyle and fashion by 1.5–2x.',
  },
]

// ── Tier benchmarks ───────────────────────────────────────────────────────────
const benchmarks = [
  { tier: 'Nano', range: '1K – 10K', excellent: '8%+', good: '4–8%', avg: '2–4%', low: '<2%' },
  { tier: 'Micro', range: '10K – 100K', excellent: '6%+', good: '3–6%', avg: '1.5–3%', low: '<1.5%' },
  { tier: 'Mid-Tier', range: '100K – 500K', excellent: '4%+', good: '1.5–4%', avg: '0.8–1.5%', low: '<0.8%' },
  { tier: 'Macro', range: '500K – 1M', excellent: '2.5%+', good: '0.8–2.5%', avg: '0.5–0.8%', low: '<0.5%' },
  { tier: 'Mega', range: '1M+', excellent: '1.5%+', good: '0.5–1.5%', avg: '0.2–0.5%', low: '<0.2%' },
]

// ── Schema JSON-LD ────────────────────────────────────────────────────────────
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
  name: 'Instagram Engagement Rate Calculator India',
  url: 'https://identitykit.in/tools/instagram-engagement-calculator',
  description:
    'Free Instagram engagement rate calculator for Indian creators. Get your engagement rate in seconds, see how you compare to India benchmarks, and find out if you qualify for brand deals.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  creator: { '@type': 'Organization', name: 'Identity Kit', url: 'https://identitykit.in' },
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function getRating(followers: number, rate: number) {
  if (followers <= 10000) {
    if (rate >= 8) return { label: 'Excellent 🔥', color: '#4CAF50', desc: 'Top-tier nano creator engagement. Brands will actively seek you out.' }
    if (rate >= 4) return { label: 'Good ✅', color: '#8BC34A', desc: 'Above average for your tier. Solid foundation for brand deal pitches.' }
    if (rate >= 2) return { label: 'Average ⚡', color: '#FF9800', desc: 'Room to improve. Focus on saves and shares to push above 4%.' }
    return { label: 'Below Average ⚠️', color: '#FF5252', desc: 'Needs work before approaching brands. Post Reels daily and reply to every comment.' }
  }
  if (followers <= 100000) {
    if (rate >= 6) return { label: 'Excellent 🔥', color: '#4CAF50', desc: 'Exceptional for a micro creator. You are in the top 10% of your tier.' }
    if (rate >= 3) return { label: 'Good ✅', color: '#8BC34A', desc: 'Strong micro creator engagement. Indian brands actively seek creators like you.' }
    if (rate >= 1.5) return { label: 'Average ⚡', color: '#FF9800', desc: 'Decent but improvable. Aim for 3%+ with better content strategy.' }
    return { label: 'Below Average ⚠️', color: '#FF5252', desc: 'Below the brand deal threshold for micro creators. Engagement work needed first.' }
  }
  if (followers <= 500000) {
    if (rate >= 4) return { label: 'Excellent 🔥', color: '#4CAF50', desc: 'Outstanding for a mid-tier creator. Well above the India benchmark.' }
    if (rate >= 1.5) return { label: 'Good ✅', color: '#8BC34A', desc: 'Solid mid-tier engagement. You qualify for most Indian brand campaigns.' }
    if (rate >= 0.8) return { label: 'Average ⚡', color: '#FF9800', desc: 'Average for your tier. Negotiating power is limited at this rate.' }
    return { label: 'Below Average ⚠️', color: '#FF5252', desc: 'Below average. Brands may question audience quality at this rate.' }
  }
  if (followers <= 1000000) {
    if (rate >= 2.5) return { label: 'Excellent 🔥', color: '#4CAF50', desc: 'Exceptional macro creator engagement. Premium brand deals are yours to command.' }
    if (rate >= 0.8) return { label: 'Good ✅', color: '#8BC34A', desc: 'Strong for a macro creator. You are competitive in the Indian market.' }
    if (rate >= 0.5) return { label: 'Average ⚡', color: '#FF9800', desc: 'Average for your scale. Reels-first strategy can push this higher.' }
    return { label: 'Below Average ⚠️', color: '#FF5252', desc: 'Low for a macro creator. An audience audit and Reels strategy are recommended.' }
  }
  // Mega
  if (rate >= 1.5) return { label: 'Excellent 🔥', color: '#4CAF50', desc: 'Exceptional engagement for a mega creator. You are a top-tier national brand partner.' }
  if (rate >= 0.5) return { label: 'Good ✅', color: '#8BC34A', desc: 'Good for your scale. Very few mega creators exceed this — you are competitive.' }
  if (rate >= 0.2) return { label: 'Average ⚡', color: '#FF9800', desc: 'Industry average for mega creators. Room to grow with smarter content.' }
  return { label: 'Below Average ⚠️', color: '#FF5252', desc: 'Below benchmark for your tier. A content and audience strategy review is needed.' }
}

function fmt(n: number) {
  if (n >= 10000000) return (n / 10000000).toFixed(1) + ' Cr'
  if (n >= 100000) return (n / 100000).toFixed(1) + ' L'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K'
  return n.toString()
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function InstagramEngagementCalculator() {
  const [followers, setFollowers] = useState('')
  const [likes, setLikes] = useState('')
  const [comments, setComments] = useState('')
  const [saves, setSaves] = useState('')
  const [shares, setShares] = useState('')
  const [numPosts, setNumPosts] = useState('1')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [result, setResult] = useState<{
    rate: number
    label: string
    color: string
    desc: string
    ratePerPost?: number
    multiPost?: boolean
  } | null>(null)

  function calculate() {
    const f = parseFloat(followers)
    const l = parseFloat(likes) || 0
    const c = parseFloat(comments) || 0
    const sv = parseFloat(saves) || 0
    const sh = parseFloat(shares) || 0
    const np = Math.max(1, parseInt(numPosts) || 1)
    if (!f || f <= 0) return

    const totalEng = l + c + sv + sh
    const perPost = totalEng / np
    const rate = (perPost / f) * 100
    const rounded = Math.round(rate * 100) / 100
    const rating = getRating(f, rounded)
    setResult({
      ...rating,
      rate: rounded,
      ratePerPost: rounded,
      multiPost: np > 1,
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

  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>

      {/* ── Schema markup ── */}
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webToolSchema) }} />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        input:focus { border-color: rgba(255,107,43,0.5) !important; background: rgba(255,107,43,0.04) !important; }
        input::placeholder { color: rgba(255,255,255,0.2); }
        input::-webkit-outer-spin-button, input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
        .tip-card { display: flex; gap: 14px; background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 18px; margin-bottom: 12px; }
        .tip-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; }
        .tip-title { font-weight: 700; font-size: 15px; margin-bottom: 5px; color: #fff; }
        .tip-desc { font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.65; }
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 20px 0; cursor: pointer; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-weight: 700; font-size: 15px; color: rgba(255,255,255,0.9); line-height: 1.5; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
        .faq-a { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.75; margin-top: 12px; }
        .niche-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 24px 0 36px; }
        .niche-card { background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 16px; }
        .niche-name { font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.7); margin-bottom: 6px; }
        .niche-rate { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; margin-bottom: 6px; }
        .niche-note { font-size: 12px; color: rgba(255,255,255,0.35); line-height: 1.5; }
        .bench-table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .bench-table th { background: rgba(255,107,43,0.07); padding: 10px 14px; text-align: left; font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.04em; }
        .bench-table td { padding: 12px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); color: rgba(255,255,255,0.65); }
        .bench-table tr:last-child td { border-bottom: none; }
        .result-box { background: linear-gradient(135deg, rgba(255,107,43,0.1), rgba(255,107,43,0.04)); border: 1px solid rgba(255,107,43,0.3); border-radius: 20px; padding: 32px; text-align: center; margin-top: 20px; animation: fadeUp 0.4s ease; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: translateY(0) } }
        @media (max-width: 640px) {
          .niche-grid { grid-template-columns: 1fr 1fr; }
          .hero-title { font-size: 30px !important; }
          .calc-grid { grid-template-columns: 1fr !important; }
          .bench-table th:nth-child(3), .bench-table td:nth-child(3),
          .bench-table th:nth-child(4), .bench-table td:nth-child(4) { display: none; }
        }
        @media (max-width: 400px) {
          .niche-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 26px !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', height: 58, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg,#FF6B2B,#FF4500)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 12, color: 'white' }}>IK</div>
            <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16 }}>Identity Kit</span>
          </Link>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <Link href="/tools" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', padding: '6px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)' }}>All Tools</Link>
            <Link href="/blog" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', padding: '6px 12px' }}>Blog</Link>
            <Link href="/auth?mode=signup" style={{ background: '#FF6B2B', color: '#fff', fontSize: 13, fontWeight: 700, padding: '7px 16px', borderRadius: 9 }}>Get your link →</Link>
          </div>
        </div>
      </nav>

      {/* ── BREADCRUMB ── */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '14px 20px' }}>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.35)' }}>Home</Link>
          <span>›</span>
          <Link href="/tools" style={{ color: 'rgba(255,255,255,0.35)' }}>Tools</Link>
          <span>›</span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Instagram Engagement Rate Calculator</span>
        </div>
      </div>

      <main style={{ maxWidth: 860, margin: '0 auto', padding: '0 20px 80px' }}>

        {/* ── HERO ── */}
        <div style={{ textAlign: 'center', paddingTop: 32, paddingBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 700, color: '#FF8C5A', marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            📊 Free Tool for Indian Creators
          </div>
          <h1 className="hero-title" style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
            Instagram Engagement Rate<br />Calculator India 2026
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 540, margin: '0 auto 10px', lineHeight: 1.7 }}>
            Calculate your Instagram engagement rate instantly. See if you qualify for brand deals — with India-specific benchmarks for every creator tier.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>Free forever · No login required · Results in seconds</p>
        </div>

        {/* ── CALCULATOR CARD ── */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 24, padding: '36px 32px', marginBottom: 16 }}>
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 18, marginBottom: 6 }}>Enter Your Instagram Stats</div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)' }}>Use the average across your last 10–15 posts for the most accurate result.</p>
          </div>

          {/* Row 1 — followers + posts */}
          <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.55)', marginBottom: 8, letterSpacing: '0.02em' }}>TOTAL FOLLOWERS *</label>
              <input
                type="number"
                placeholder="e.g. 25000"
                value={followers}
                onChange={e => setFollowers(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.55)', marginBottom: 8, letterSpacing: '0.02em' }}>NUMBER OF POSTS AVERAGED</label>
              <input
                type="number"
                placeholder="e.g. 10"
                value={numPosts}
                onChange={e => setNumPosts(e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>

          {/* Row 2 — engagement */}
          <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.55)', marginBottom: 8, letterSpacing: '0.02em' }}>TOTAL LIKES</label>
              <input type="number" placeholder="e.g. 1200" value={likes} onChange={e => setLikes(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.55)', marginBottom: 8, letterSpacing: '0.02em' }}>TOTAL COMMENTS</label>
              <input type="number" placeholder="e.g. 80" value={comments} onChange={e => setComments(e.target.value)} style={inputStyle} />
            </div>
          </div>

          {/* Row 3 — saves + shares */}
          <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 28 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.55)', marginBottom: 8, letterSpacing: '0.02em' }}>TOTAL SAVES <span style={{ color: 'rgba(255,255,255,0.25)', fontWeight: 400 }}>(optional)</span></label>
              <input type="number" placeholder="e.g. 300" value={saves} onChange={e => setSaves(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.55)', marginBottom: 8, letterSpacing: '0.02em' }}>TOTAL SHARES <span style={{ color: 'rgba(255,255,255,0.25)', fontWeight: 400 }}>(optional)</span></label>
              <input type="number" placeholder="e.g. 150" value={shares} onChange={e => setShares(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <button
            onClick={calculate}
            style={{ width: '100%', background: '#FF6B2B', border: 'none', color: '#fff', padding: '16px 24px', borderRadius: 14, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '-0.3px' }}
            onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = '#FF8C5A'; (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = '#FF6B2B'; (e.target as HTMLButtonElement).style.transform = 'none' }}
          >
            Calculate My Engagement Rate →
          </button>

          {/* ── RESULT ── */}
          {result && (
            <div className="result-box">
              <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>Your Engagement Rate</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 64, fontWeight: 800, color: result.color, lineHeight: 1, marginBottom: 8 }}>{result.rate}%</div>
              <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{result.label}</div>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 420, margin: '0 auto 24px', lineHeight: 1.7 }}>{result.desc}</p>
              <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 14, padding: '16px 20px', marginBottom: 24, fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                Formula used: <span style={{ color: '#FF9A6B', fontWeight: 600 }}>(Likes + Comments + Saves + Shares) ÷ Followers × 100</span>
                {result.multiPost && <><br />Averaged per post across {numPosts} posts</>}
              </div>
              <Link href="/auth?mode=signup" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 12, padding: '13px 32px', fontWeight: 800, fontSize: 15, letterSpacing: '-0.3px' }}>
                Add this to your Identity Kit profile →
              </Link>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginTop: 10 }}>Brands see your engagement rate instantly on your creator profile</p>
            </div>
          )}
        </div>

        {/* ── HOW TO USE ── */}
        <div style={{ background: 'rgba(255,107,43,0.05)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 16, padding: '20px 24px', marginBottom: 48 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: '#FF9A6B', marginBottom: 10 }}>💡 How to get the most accurate result</div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
            Go to Instagram → open your last 10–15 posts → add up all likes, comments, saves, and shares → enter the totals above with &quot;10&quot; or &quot;15&quot; in the posts field. The calculator will automatically average per post. Do not use a single viral post — it will inflate your rate unrealistically.
          </div>
        </div>

        {/* ── BENCHMARK TABLE ── */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
          India Engagement Rate Benchmarks by Creator Tier — 2026
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>
          Indian creators average 3.2% engagement — nearly 2x the global average. Use this table to see exactly where your rate stands and how brands will evaluate you.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', marginBottom: 52 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="bench-table">
              <thead>
                <tr>
                  <th>Creator Tier</th>
                  <th>Followers</th>
                  <th style={{ color: '#4CAF50' }}>Excellent</th>
                  <th style={{ color: '#8BC34A' }}>Good</th>
                  <th style={{ color: '#FF9800' }}>Average</th>
                  <th style={{ color: '#FF5252' }}>Below Avg</th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map(b => (
                  <tr key={b.tier}>
                    <td style={{ fontWeight: 700, color: '#fff' }}>{b.tier}</td>
                    <td style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>{b.range}</td>
                    <td style={{ color: '#4CAF50', fontWeight: 700 }}>{b.excellent}</td>
                    <td style={{ color: '#8BC34A', fontWeight: 600 }}>{b.good}</td>
                    <td style={{ color: '#FF9800' }}>{b.avg}</td>
                    <td style={{ color: '#FF5252' }}>{b.low}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── NICHE BENCHMARKS ── */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
          Engagement Rate by Niche — India 2026
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>
          Your niche affects your engagement rate as much as follower count. Finance and education niches consistently outperform lifestyle by 1.5–2x.
        </p>
        <div className="niche-grid" style={{ marginBottom: 52 }}>
          {[
            { name: 'Finance & Investing', rate: '4–9%', note: 'Highest in India. Discussion-heavy comments and saves.', color: '#4CAF50' },
            { name: 'Education & Career', rate: '3.5–8%', note: 'High save rate — tutorials get bookmarked heavily.', color: '#8BC34A' },
            { name: 'Fitness & Health', rate: '3–7%', note: 'Challenges and before/after drive strong shares.', color: '#FF9800' },
            { name: 'Beauty & Skincare', rate: '2.5–6%', note: 'Tutorial saves are very high. Reviews drive comments.', color: '#FF6B2B' },
            { name: 'Food & Recipes', rate: '2.5–5.5%', note: 'Save rate is extremely high — recipes get bookmarked constantly.', color: '#FFD700' },
            { name: 'Tech & Gadgets', rate: '2–5%', note: 'Strong comment discussions. High-intent audience.', color: '#29B6F6' },
            { name: 'Travel', rate: '2–4.5%', note: 'Inspiration saves are high but comment depth is lower.', color: '#8B9CF4' },
            { name: 'Lifestyle', rate: '1.5–4%', note: 'Broad niche with more passive consumption.', color: '#FF4F9A' },
            { name: 'Fashion & Style', rate: '1.5–3.5%', note: 'High impressions but lower save and comment depth.', color: '#E040FB' },
          ].map(n => (
            <div key={n.name} className="niche-card">
              <div className="niche-name">{n.name}</div>
              <div className="niche-rate" style={{ color: n.color }}>{n.rate}</div>
              <div className="niche-note">{n.note}</div>
            </div>
          ))}
        </div>

        {/* ── HOW ENGAGEMENT AFFECTS INCOME ── */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
          How Engagement Rate Affects Your Brand Deal Income in India
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>
          Indian agencies use engagement rate as a multiplier on top of follower-count rates. A 7% engagement rate can earn you 2–3x more than the same follower count at 1.5%.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', marginBottom: 52 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="bench-table">
              <thead>
                <tr>
                  <th>Creator Profile</th>
                  <th>Followers</th>
                  <th>Eng. Rate</th>
                  <th>Reel Rate</th>
                  <th>Brand Priority</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['High-engagement micro', '30K', '7%', '₹25,000–₹60,000', '⭐⭐⭐⭐⭐'],
                  ['Average-engagement micro', '30K', '2.5%', '₹8,000–₹20,000', '⭐⭐⭐'],
                  ['Low-engagement micro', '30K', '0.8%', '₹3,000–₹8,000', '⭐'],
                  ['High-engagement mid-tier', '200K', '4%', '₹1,20,000–₹3,00,000', '⭐⭐⭐⭐⭐'],
                  ['Average-engagement mid-tier', '200K', '1.2%', '₹40,000–₹90,000', '⭐⭐⭐'],
                ].map(row => (
                  <tr key={row[0]}>
                    <td style={{ fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td style={{ fontWeight: 700, color: '#FF9A6B' }}>{row[2]}</td>
                    <td style={{ color: '#4CAF50', fontWeight: 600 }}>{row[3]}</td>
                    <td style={{ fontSize: 12 }}>{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── TIPS ── */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
          10 Ways to Increase Your Instagram Engagement Rate in India
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>Actionable tactics that Indian creators have used to push past the 3% threshold.</p>
        <div style={{ marginBottom: 52 }}>
          {[
            { icon: '🎬', title: 'Post Reels over static posts', desc: 'Reels get 3–5x more organic distribution than static posts on Instagram in 2026. Switching to Reels is the single highest-impact change most creators can make.' },
            { icon: '⏰', title: 'Reply to every comment within 60 minutes', desc: 'Early engagement signals the algorithm that your content is generating real conversation. Creators who reply in the first hour consistently see 2–3x more reach.' },
            { icon: '💾', title: 'Create content designed to be saved', desc: 'Saves are the highest-value engagement signal in 2026. Tutorials, checklists, rate guides — ask yourself: would someone save this to refer to later?' },
            { icon: '🔄', title: 'Make content worth sharing', desc: 'Shares push your content to non-followers, expanding reach and boosting algorithmic score simultaneously. Relatable, surprising, or emotionally resonant content gets shared.' },
            { icon: '❓', title: 'End every caption with a question', desc: 'A direct question gives your audience a specific reason to comment. "Which do you prefer — A or B?" can double comment counts on its own.' },
            { icon: '📊', title: 'Post at peak IST times', desc: 'For Indian audiences: 7–9am, 12–2pm, and 7–10pm IST are peak engagement windows. Check your Instagram Insights to find when your specific audience is most active.' },
            { icon: '🤝', title: 'Use Collab posts with niche creators', desc: 'Collab posts appear in both creators\' feeds simultaneously. This exposes your content to an entirely new engaged audience in your niche for zero cost.' },
            { icon: '🎯', title: 'Use niche hashtags, not broad ones', desc: '#FitnessIndia (2M posts) will get you more visibility than #Fitness (500M posts). Use 5–8 specific hashtags rather than 30 generic ones.' },
            { icon: '📈', title: 'Audit and remove fake followers', desc: 'Fake followers dilute your engagement rate directly. 1,000 inactive followers reduce your percentage as much as losing 1,000 active real ones.' },
            { icon: '🗓️', title: 'Post consistently — minimum 4 Reels per week', desc: 'Creators who post 4+ Reels per week consistently outperform those posting 1–2 per week in reach and engagement, even with slightly lower individual quality.' },
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

        {/* ── CTA ── */}
        <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.1), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 24, padding: '48px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden', marginBottom: 64 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(255,107,43,0.1), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ fontSize: 48, marginBottom: 16 }}>📊</div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 28, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.5px' }}>
            Show Brands Your Engagement Rate Instantly
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.75, maxWidth: 460, margin: '0 auto 28px' }}>
            Identity Kit puts your engagement rate, follower stats, rate card, and media kit in one professional link — brands see everything they need before they even ask.
          </p>
          <Link href="/auth?mode=signup" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 14, padding: '15px 40px', fontWeight: 800, fontSize: 16, letterSpacing: '-0.3px' }}>
            Build my free creator profile →
          </Link>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', marginTop: 14 }}>Free forever. No credit card. Takes 10 minutes.</p>
        </div>

        {/* ── FAQ ── */}
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

        {/* ── RELATED TOOLS / BLOG ── */}
        <div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, marginBottom: 20 }}>Related Tools & Guides</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { href: '/blog/influencer-rate-card-india', tag: 'Rate Card', title: 'How Much Should Indian Creators Charge Brands in 2026?' },
              { href: '/blog/how-to-make-media-kit-india', tag: 'Media Kit', title: 'How to Make a Media Kit for Indian Creators (Free Guide)' },
              { href: '/blog/how-to-pitch-brands-indian-influencer', tag: 'Brand Deals', title: 'How to Pitch Brands as an Indian Influencer in 2026' },
              { href: '/blog/instagram-engagement-rate-india', tag: 'Deep Dive', title: 'Instagram Engagement Rate India: Complete 2026 Guide' },
            ].map(r => (
              <Link key={r.href} href={r.href}>
                <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 18, height: '100%', transition: 'border-color 0.2s' }}>
                  <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 100, display: 'inline-block', marginBottom: 10 }}>{r.tag}</span>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.5, margin: 0, fontWeight: 600 }}>{r.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* ── FOOTER ── */}
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
