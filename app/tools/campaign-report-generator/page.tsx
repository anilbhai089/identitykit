'use client'
import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

const faqs = [
  {
    q: 'Why should Indian creators send a post-campaign report to brands?',
    a: 'Creators who send post-campaign reports get rebooked by the same brand at a rate of 5x compared to those who don\'t. A report shows professionalism, makes the brand\'s internal reporting easier, and proves your ROI in concrete numbers. It also gives you documented proof of past performance to share with future brands in your media kit. Most Indian creators never send reports — doing so immediately sets you apart and positions you as a serious creator partner.',
  },
  {
    q: 'What should a creator include in a campaign performance report?',
    a: 'A complete campaign performance report should include: campaign summary (brand, product, deliverables, dates), performance metrics (reach, impressions, views, engagement rate, likes, comments, saves, shares), comparison to campaign KPIs or industry benchmarks, audience insights (demographics, peak engagement times), qualitative highlights (best performing content, notable comments), promo code performance (if applicable), key learnings and recommendations for future campaigns, and a thank you note with rebooking CTA.',
  },
  {
    q: 'When should I send a campaign report to a brand?',
    a: 'Send your campaign report 5–7 days after the content goes live. This gives enough time for initial engagement to accumulate (most Instagram engagement happens in the first 48–72 hours, YouTube in the first 7 days). For multi-deliverable campaigns, send one consolidated report after all content is live. Always send the report within 14 days of the last piece going live — after that, brands have moved on mentally.',
  },
  {
    q: 'What metrics do Indian brands care most about in campaign reports?',
    a: 'Indian brands prioritize these metrics in campaign reports: Reach (unique accounts reached — the most important metric for awareness campaigns), Engagement Rate (likes + comments + saves + shares ÷ followers), Saves and Shares (highest quality signals showing content was valuable), Story Swipe-Up or Link Clicks (for conversion campaigns), Promo Code Redemptions (for D2C brands), and Comment Sentiment (are people genuinely interested or just emoji replies). Always present your metrics vs. industry benchmarks to give brands context.',
  },
  {
    q: 'How do I get my Instagram campaign analytics for a report?',
    a: 'For Instagram posts: go to the post → tap View Insights → screenshot reach, impressions, likes, comments, saves, shares. For Reels: tap the Reel → View Insights → note plays, reach, likes, comments, saves, shares. For Stories: swipe up on the story or go to your story archive → tap the story → view analytics including reach, impressions, taps forward/back, and exits. For the most complete data, take screenshots within 14 days — Instagram analytics become less detailed over time.',
  },
  {
    q: 'Should I compare my results to benchmarks in my report?',
    a: 'Yes — always include benchmark comparisons. Without context, a 4% engagement rate could sound low to a brand that expects 10%. With context — "4% vs Indian micro-creator average of 3.2%" — it becomes impressive. Use India-specific benchmarks: Instagram micro-creators average 3.2% engagement, nano-creators average 5–6%. For YouTube, average Indian channel CTR is 4–7%. Always present your numbers in the most favorable accurate light by providing the right benchmark comparison.',
  },
  {
    q: 'Can I use this campaign report to negotiate higher rates?',
    a: 'Absolutely — a strong campaign report is your most powerful rate negotiation tool. When a brand wants to rebook you, share your previous campaign report showing the ROI you delivered. If your campaign generated ₹8 lakh in Earned Media Value on a ₹40,000 investment (20x ROI), that\'s a compelling case for a higher rate. Brands are happy to pay more for creators who can demonstrate consistent, measurable results. Always save your reports and reference them in future pitch conversations.',
  },
  {
    q: 'What should I write in the recommendations section of a campaign report?',
    a: 'The recommendations section is where creators stand out. Include: what content format performed best and why, which posting time drove the most engagement, what audience segment responded most strongly, what you would do differently next time, and what type of follow-up campaign would perform even better. Brands love actionable recommendations because they show you\'re thinking about their goals, not just collecting a payment. This section is often what convinces brands to rebook.',
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
  name: 'Campaign Report Generator for Indian Creators 2026',
  url: 'https://identitykit.in/tools/campaign-report-generator',
  description: 'Free AI-powered campaign report generator for Indian creators. Enter your campaign stats and get a professional post-campaign report to send brands in seconds. Get rebooked faster.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  creator: { '@type': 'Organization', name: 'Identity Kit', url: 'https://identitykit.in' },
}

const platforms = ['Instagram', 'YouTube', 'LinkedIn', 'Twitter/X', 'Podcast', 'Blog', 'Multiple Platforms']
const contentTypes = ['Reel', 'Static Post', 'Stories', 'YouTube Dedicated Video', 'YouTube Integration', 'YouTube Shorts', 'Carousel', 'Live Session', 'Multiple Types']
const niches = [
  'Finance & Investing', 'Tech & Gadgets', 'Education & Career', 'Health & Fitness',
  'Beauty & Skincare', 'Food & Recipes', 'Travel & Vlogs', 'Lifestyle',
  'Fashion & Style', 'Gaming', 'Comedy & Entertainment', 'Business & Startup',
]

// India benchmarks for context
const engBenchmarks: Record<string, { nano: number; micro: number; mid: number }> = {
  Finance: { nano: 6.5, micro: 4.2, mid: 2.8 },
  Tech: { nano: 5.8, micro: 3.9, mid: 2.4 },
  Beauty: { nano: 6.2, micro: 4.0, mid: 2.6 },
  Lifestyle: { nano: 5.5, micro: 3.2, mid: 1.8 },
  Food: { nano: 5.8, micro: 3.5, mid: 2.2 },
}

export default function CampaignReportGenerator() {
  // Creator + brand
  const [creatorName, setCreatorName] = useState('')
  const [creatorHandle, setCreatorHandle] = useState('')
  const [brandName, setBrandName] = useState('')
  const [productName, setProductName] = useState('')
  const [niche, setNiche] = useState('Lifestyle')
  const [platform, setPlatform] = useState('Instagram')
  const [contentType, setContentType] = useState('Reel')
  const [goLiveDate, setGoLiveDate] = useState('')
  const [campaignFee, setCampaignFee] = useState('')

  // Performance metrics
  const [followers, setFollowers] = useState('')
  const [reach, setReach] = useState('')
  const [impressions, setImpressions] = useState('')
  const [likes, setLikes] = useState('')
  const [comments, setComments] = useState('')
  const [saves, setSaves] = useState('')
  const [shares, setShares] = useState('')
  const [views, setViews] = useState('')
  const [clicks, setClicks] = useState('')
  const [promoRedemptions, setPromoRedemptions] = useState('')
  const [storyViews, setStoryViews] = useState('')

  // Qualitative
  const [topComment, setTopComment] = useState('')
  const [keyLearning, setKeyLearning] = useState('')
  const [nextRecommendation, setNextRecommendation] = useState('')

  const [loading, setLoading] = useState(false)
  const [report, setReport] = useState('')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Computed metrics
  const totalEngagements = (parseFloat(likes) || 0) + (parseFloat(comments) || 0) + (parseFloat(saves) || 0) + (parseFloat(shares) || 0)
  const effectiveReach = parseFloat(reach) || parseFloat(impressions) * 0.7 || 0
  const engRate = effectiveReach > 0 ? ((totalEngagements / effectiveReach) * 100).toFixed(2) : '—'
  const fee = parseFloat(campaignFee) || 0
  const cpe = totalEngagements > 0 && fee > 0 ? (fee / totalEngagements).toFixed(2) : '—'

  async function generate() {
    if (!brandName || !creatorName) return
    setLoading(true)
    setError('')
    setReport('')

    try {
      const res = await fetch('/api/generate-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          creatorName, creatorHandle, brandName, productName, niche,
          platform, contentType, goLiveDate, campaignFee,
          followers, reach, impressions, likes, comments, saves, shares,
          views, clicks, promoRedemptions, storyViews,
          topComment, keyLearning, nextRecommendation,
          totalEngagements, engRate, cpe,
        }),
      })
      const data = await res.json()
      if (data.report) {
        setReport(data.report)
      } else {
        throw new Error('no report')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  function copyReport() {
    navigator.clipboard.writeText(report)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
  const card: React.CSSProperties = {
    background: 'rgba(255,255,255,0.025)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 18, padding: '24px', marginBottom: 14,
  }

  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webToolSchema) }} />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        input:focus, select:focus, textarea:focus { border-color: rgba(255,107,43,0.5) !important; background: rgba(255,107,43,0.04) !important; }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
        input[type=date]::-webkit-calendar-picker-indicator { filter: invert(0.5); }
        input::-webkit-outer-spin-button, input::-webkit-inner-spin-button { -webkit-appearance: none; }
        select option { background: #1a1a2e; color: #fff; }
        .g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .g3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
        .g4 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px; }
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 20px 0; cursor: pointer; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-weight: 700; font-size: 15px; color: rgba(255,255,255,0.9); line-height: 1.5; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
        .faq-a { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.75; margin-top: 12px; }
        .shimmer { background: linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0.03) 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 12px; margin-bottom: 10px; }
        @keyframes shimmer { 0% { background-position: 200% 0 } 100% { background-position: -200% 0 } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
        .result-anim { animation: fadeUp 0.4s ease; }
        .report-text { font-size: 14px; line-height: 1.9; color: rgba(255,255,255,0.82); white-space: pre-wrap; font-family: 'Plus Jakarta Sans', sans-serif; }
        .live-metric { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 14px; text-align: center; }
        .live-val { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 22px; margin-bottom: 3px; }
        .live-label { font-size: 11px; color: rgba(255,255,255,0.35); font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; }
        @media (max-width: 640px) {
          .g2, .g4 { grid-template-columns: 1fr 1fr !important; }
          .g3 { grid-template-columns: 1fr 1fr !important; }
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
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Campaign Report Generator</span>
        </div>
      </div>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 80px' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', paddingTop: 28, paddingBottom: 44 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 700, color: '#FF8C5A', marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            📊 AI-Powered · Free for Indian Creators
          </div>
          <h1 className="hero-title" style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
            Campaign Report Generator<br />for Indian Creators 2026
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 540, margin: '0 auto 10px', lineHeight: 1.7 }}>
            Enter your campaign stats and get a professional post-campaign report to send brands in seconds. Creators who send reports get rebooked 5x more often.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>Free forever · No login required · AI-powered · Includes benchmark comparison</p>
        </div>

        {/* WHY CARD */}
        <div style={{ background: 'rgba(255,107,43,0.05)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 16, padding: '18px 22px', marginBottom: 20, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <span style={{ fontSize: 24, flexShrink: 0 }}>💡</span>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
            <strong style={{ color: '#FF9A6B' }}>Most Indian creators never send a post-campaign report.</strong> That's why they don't get rebooked. A 2-minute report sent 7 days after going live shows professionalism, proves your ROI, and makes it easy for brands to say yes to the next campaign.
          </div>
        </div>

        {/* CAMPAIGN INFO */}
        <div style={card}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Campaign Information</div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 22 }}>Basic details about you and the campaign.</p>

          <div className="g2" style={{ marginBottom: 12 }}>
            <div>
              <label style={labelStyle}>Your Name *</label>
              <input style={inputStyle} placeholder="Priya Sharma" value={creatorName} onChange={e => setCreatorName(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Your Handle</label>
              <input style={inputStyle} placeholder="@priyasharma" value={creatorHandle} onChange={e => setCreatorHandle(e.target.value)} />
            </div>
          </div>

          <div className="g2" style={{ marginBottom: 12 }}>
            <div>
              <label style={labelStyle}>Brand Name *</label>
              <input style={inputStyle} placeholder="Mamaearth" value={brandName} onChange={e => setBrandName(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Product / Campaign</label>
              <input style={inputStyle} placeholder="Vitamin C Serum Launch" value={productName} onChange={e => setProductName(e.target.value)} />
            </div>
          </div>

          <div className="g3" style={{ marginBottom: 12 }}>
            <div>
              <label style={labelStyle}>Your Niche</label>
              <select style={selectStyle} value={niche} onChange={e => setNiche(e.target.value)}>
                {niches.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Platform</label>
              <select style={selectStyle} value={platform} onChange={e => setPlatform(e.target.value)}>
                {platforms.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Content Type</label>
              <select style={selectStyle} value={contentType} onChange={e => setContentType(e.target.value)}>
                {contentTypes.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div className="g2">
            <div>
              <label style={labelStyle}>Go-Live Date</label>
              <input type="date" style={inputStyle} value={goLiveDate} onChange={e => setGoLiveDate(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Campaign Fee (₹)</label>
              <input type="number" style={inputStyle} placeholder="e.g. 25000" value={campaignFee} onChange={e => setCampaignFee(e.target.value)} />
            </div>
          </div>
        </div>

        {/* PERFORMANCE METRICS */}
        <div style={card}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Performance Metrics</div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>Enter your numbers from Instagram/YouTube Insights. Fill what you have — not everything is required.</p>

          <div className="g2" style={{ marginBottom: 12 }}>
            <div>
              <label style={labelStyle}>Your Followers</label>
              <input type="number" style={inputStyle} placeholder="e.g. 45000" value={followers} onChange={e => setFollowers(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Reach (Unique Accounts)</label>
              <input type="number" style={inputStyle} placeholder="e.g. 78000" value={reach} onChange={e => setReach(e.target.value)} />
            </div>
          </div>

          <div className="g2" style={{ marginBottom: 12 }}>
            <div>
              <label style={labelStyle}>Impressions / Total Views</label>
              <input type="number" style={inputStyle} placeholder="e.g. 120000" value={impressions} onChange={e => setImpressions(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Video Views <span style={{ opacity: 0.4, fontWeight: 400, textTransform: 'none' }}>(Reels/YT)</span></label>
              <input type="number" style={inputStyle} placeholder="e.g. 95000" value={views} onChange={e => setViews(e.target.value)} />
            </div>
          </div>

          <div style={{ marginBottom: 5 }}>
            <label style={{ ...labelStyle, marginBottom: 10 }}>Engagement Breakdown</label>
            <div className="g4" style={{ marginBottom: 12 }}>
              {[
                { label: 'LIKES', val: likes, set: setLikes },
                { label: 'COMMENTS', val: comments, set: setComments },
                { label: 'SAVES', val: saves, set: setSaves },
                { label: 'SHARES', val: shares, set: setShares },
              ].map(m => (
                <div key={m.label}>
                  <label style={{ ...labelStyle, fontSize: 11 }}>{m.label}</label>
                  <input type="number" style={inputStyle} placeholder="0" value={m.val} onChange={e => m.set(e.target.value)} />
                </div>
              ))}
            </div>
          </div>

          <div className="g3" style={{ marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>Link Clicks <span style={{ opacity: 0.4, fontWeight: 400, textTransform: 'none' }}>(optional)</span></label>
              <input type="number" style={inputStyle} placeholder="e.g. 1200" value={clicks} onChange={e => setClicks(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Story Views <span style={{ opacity: 0.4, fontWeight: 400, textTransform: 'none' }}>(optional)</span></label>
              <input type="number" style={inputStyle} placeholder="e.g. 8500" value={storyViews} onChange={e => setStoryViews(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Promo Redemptions <span style={{ opacity: 0.4, fontWeight: 400, textTransform: 'none' }}>(optional)</span></label>
              <input type="number" style={inputStyle} placeholder="e.g. 47" value={promoRedemptions} onChange={e => setPromoRedemptions(e.target.value)} />
            </div>
          </div>

          {/* Live metrics preview */}
          {(totalEngagements > 0 || effectiveReach > 0) && (
            <div style={{ background: 'rgba(255,107,43,0.04)', border: '1px solid rgba(255,107,43,0.12)', borderRadius: 14, padding: '14px 16px' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Live Calculated Metrics</div>
              <div className="g4">
                <div className="live-metric">
                  <div className="live-val" style={{ color: '#FF8C5A' }}>{totalEngagements.toLocaleString('en-IN')}</div>
                  <div className="live-label">Total Engagements</div>
                </div>
                <div className="live-metric">
                  <div className="live-val" style={{ color: '#4CAF50' }}>{engRate}%</div>
                  <div className="live-label">Engagement Rate</div>
                </div>
                <div className="live-metric">
                  <div className="live-val" style={{ color: '#8B9CF4' }}>₹{cpe}</div>
                  <div className="live-label">Cost Per Engagement</div>
                </div>
                <div className="live-metric">
                  <div className="live-val" style={{ color: '#FFD700' }}>{effectiveReach > 0 ? (effectiveReach >= 100000 ? (effectiveReach / 100000).toFixed(1) + 'L' : (effectiveReach / 1000).toFixed(0) + 'K') : '—'}</div>
                  <div className="live-label">Reach</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* QUALITATIVE */}
        <div style={card}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Qualitative Insights <span style={{ fontSize: 13, fontWeight: 400, color: 'rgba(255,255,255,0.3)' }}>(optional but powerful)</span></div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 18 }}>This is what separates a basic report from one that gets you rebooked.</p>

          <div style={{ marginBottom: 12 }}>
            <label style={labelStyle}>Best / Most Notable Comment</label>
            <input style={inputStyle} placeholder="e.g. 'Finally found a serum that actually works on Indian skin!' — @user123" value={topComment} onChange={e => setTopComment(e.target.value)} />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label style={labelStyle}>Key Learning from this Campaign</label>
            <textarea style={{ ...inputStyle, minHeight: 70, lineHeight: 1.6, resize: 'vertical' }}
              placeholder="e.g. Morning posts (7–9am) performed 40% better than evening. The 'before and after' format drove 3x more saves than the tutorial format..."
              value={keyLearning} onChange={e => setKeyLearning(e.target.value)} />
          </div>
          <div>
            <label style={labelStyle}>Recommendation for Next Campaign</label>
            <textarea style={{ ...inputStyle, minHeight: 70, lineHeight: 1.6, resize: 'vertical' }}
              placeholder="e.g. A dedicated YouTube video would reach my 80K subscribers who are highly relevant to skincare. A 3-story sequence with swipe-up could drive more direct conversions..."
              value={nextRecommendation} onChange={e => setNextRecommendation(e.target.value)} />
          </div>
        </div>

        {/* GENERATE */}
        <button
          onClick={generate}
          disabled={loading || !brandName || !creatorName}
          style={{ width: '100%', background: loading || !brandName || !creatorName ? 'rgba(255,107,43,0.35)' : '#FF6B2B', border: 'none', color: '#fff', padding: '17px 24px', borderRadius: 14, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, cursor: loading || !brandName || !creatorName ? 'not-allowed' : 'pointer', transition: 'all 0.2s', marginBottom: 14 }}
        >
          {loading ? '📊 Writing your campaign report...' : '📊 Generate Campaign Report →'}
        </button>
        {(!brandName || !creatorName) && <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginBottom: 20 }}>Enter your name and brand name to generate</p>}

        {/* LOADING */}
        {loading && (
          <div style={{ marginBottom: 24 }}>
            <div className="shimmer" style={{ height: 40 }} />
            <div className="shimmer" style={{ height: 180 }} />
            <div className="shimmer" style={{ height: 140 }} />
          </div>
        )}

        {/* ERROR */}
        {error && !loading && (
          <div style={{ padding: '14px 18px', background: 'rgba(255,82,82,0.08)', border: '1px solid rgba(255,82,82,0.2)', borderRadius: 12, fontSize: 14, color: '#FF5252', marginBottom: 24 }}>
            {error}
          </div>
        )}

        {/* RESULT */}
        {report && !loading && (
          <div className="result-anim" style={{ marginBottom: 52 }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, overflow: 'hidden' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                <div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 15 }}>Your Campaign Report</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>Copy and send to {brandName} via email or WhatsApp</div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    onClick={copyReport}
                    style={{ background: copied ? 'rgba(76,175,80,0.1)' : 'rgba(255,107,43,0.1)', border: `1px solid ${copied ? 'rgba(76,175,80,0.3)' : 'rgba(255,107,43,0.25)'}`, color: copied ? '#81C784' : '#FF8C5A', borderRadius: 9, padding: '8px 18px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  >
                    {copied ? '✓ Copied!' : '📋 Copy Report'}
                  </button>
                  <button
                    onClick={generate}
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', borderRadius: 9, padding: '8px 16px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  >
                    ↻ Regenerate
                  </button>
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <div className="report-text">{report}</div>
              </div>
            </div>

            {/* Next step CTA */}
            <div style={{ marginTop: 14, background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 14, padding: '16px 20px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>💡</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Add past campaign results to your Identity Kit</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: 10 }}>
                  Future brands see your campaign ROI before they even reach out. Your Identity Kit profile is your living proof of performance.
                </div>
                <Link href="/auth?mode=signup" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 9, padding: '8px 18px', fontWeight: 700, fontSize: 13 }}>
                  Build my free Identity Kit →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* TIPS */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
          How to Send a Campaign Report That Gets You Rebooked
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>Most creators deliver content and disappear. These 5 steps make brands want to work with you again.</p>
        <div style={{ marginBottom: 52 }}>
          {[
            { icon: '⏰', title: 'Send it 5–7 days after going live', desc: 'Instagram engagement peaks in the first 48–72 hours. Wait 5–7 days so your numbers have stabilised, then send. Sending too early gives incomplete data. Waiting more than 14 days and brands have mentally moved on.' },
            { icon: '📊', title: 'Always include benchmark comparison', desc: 'Raw numbers mean nothing without context. "4.2% engagement rate — 30% above India micro-creator average of 3.2%" is powerful. Always compare your numbers to industry benchmarks so brands understand the value.' },
            { icon: '💬', title: 'Include 2–3 real audience comments', desc: 'Screenshot or quote comments where your audience asked "where can I buy this?" or "does this actually work?" This qualitative proof is often more convincing than reach numbers for D2C brands focused on conversion.' },
            { icon: '🎯', title: 'End with a specific next campaign idea', desc: 'Don\'t just report — recommend. "Based on the 3x save rate on my skincare content, a dedicated YouTube tutorial for your new sunscreen would reach my 80K subscribers who are highly purchase-intent." That single sentence seeds the rebooking conversation.' },
            { icon: '📎', title: 'Include your Identity Kit link', desc: 'Add your Identity Kit link at the bottom of every report. As brands refer back to the report later — when planning next quarter\'s budget — your profile is right there. "For my full media kit and rate card: identitykit.in/yourname"' },
          ].map(tip => (
            <div key={tip.title} style={{ display: 'flex', gap: 14, background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 18, marginBottom: 10 }}>
              <span style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{tip.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 5 }}>{tip.title}</div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.1), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 24, padding: '48px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden', marginBottom: 64 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(255,107,43,0.1), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔗</div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.5px' }}>
            Put your past campaign results where brands can see them
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.75, maxWidth: 460, margin: '0 auto 28px' }}>
            Identity Kit gives you one professional link with your media kit, rate card, past campaign results and creator CV — brands see your proof of performance the moment they land on your profile.
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
              { href: '/tools/influencer-roi-calculator', tag: 'Free Tool', title: 'Influencer ROI Calculator — Calculate Your Campaign\'s EMV' },
              { href: '/tools/campaign-brief-generator', tag: 'Free Tool', title: 'Campaign Brief Generator — For Brands Briefing You' },
              { href: '/tools/brand-deal-contract-template', tag: 'Free Tool', title: 'Brand Deal Contract Template — Protect Every Campaign' },
              { href: '/tools/gst-invoice-generator', tag: 'Free Tool', title: 'GST Invoice Generator — Bill Your Brand Deals' },
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
