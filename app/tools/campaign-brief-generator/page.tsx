'use client'
import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

// ── FAQs ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What should a brand include in an influencer campaign brief in India?',
    a: 'A complete influencer campaign brief for Indian creators should include: brand and product overview, campaign objective (awareness, conversions, engagement), target audience demographics, key messages and mandatory talking points, content guidelines (dos and don\'ts), deliverables (platform, content type, quantity, posting schedule), compensation and payment terms, usage rights, ASCI disclosure requirements, approval process and revision timeline, and KPIs to measure success. A clear brief reduces revision rounds by 60% and results in better content from creators.',
  },
  {
    q: 'Why do Indian brands need a campaign brief for influencer marketing?',
    a: 'A campaign brief is essential for Indian influencer campaigns because it aligns expectations between brand and creator from day one, reduces miscommunication that leads to off-brand content, sets clear deliverable timelines preventing delays, establishes legal compliance requirements (ASCI disclosure), defines approval processes saving both parties time, and gives creators the creative freedom they need within brand guardrails. Campaigns with detailed briefs consistently outperform those without in content quality and ROI.',
  },
  {
    q: 'How long should an influencer campaign brief be?',
    a: 'An influencer campaign brief should be 1–2 pages maximum. Creators receive dozens of briefs and skip long documents. The most effective briefs are scannable — use bullet points, clear sections, and bold key information. The brief should answer 5 questions instantly: What is the product? Who is the audience? What should I say? What should I avoid? When does it go live? Everything else is secondary. Attach reference content separately rather than embedding it in the brief itself.',
  },
  {
    q: 'What are ASCI guidelines for influencer campaign briefs in India?',
    a: 'The Advertising Standards Council of India (ASCI) requires brands to: instruct creators to disclose paid partnerships prominently using #ad, #sponsored, #collab or "Paid partnership with [Brand]" — at the start of captions, not buried at the end. For YouTube, disclosure must be in the first 30 seconds of the video. For Stories, disclosure must appear on each frame. The brand is jointly responsible for non-disclosure by creators they hire. Your brief must explicitly include ASCI disclosure instructions to protect both parties legally.',
  },
  {
    q: 'What is the difference between a campaign brief and a contract?',
    a: 'A campaign brief is the creative and operational document that guides content creation — it covers what to create, key messages, tone, and timeline. A contract is the legal document that covers payment terms, ownership, exclusivity, and dispute resolution. You need both. Share the brief first to align on creative direction. Once the creator agrees to the scope, formalize it with a contract. Brief = creative direction. Contract = legal protection. Never skip either.',
  },
  {
    q: 'How do I brief Indian creators for a product launch campaign?',
    a: 'For an Indian product launch campaign brief: lead with the product story and why it matters to Indian consumers, give creators specific talking points about the product\'s unique benefits for Indian market conditions, provide reference content showing the aesthetic and tone you want, set a clear embargo date if the launch is confidential, give creators enough creative freedom to make it feel authentic to their audience, and define exactly what metrics you\'ll use to evaluate success. Launch campaigns work best when creators get the product 10–14 days before the go-live date.',
  },
  {
    q: 'Should I give creators creative freedom or strict guidelines in a brief?',
    a: 'The best Indian influencer campaigns balance both. Give strict guidelines on: brand name pronunciation, key claims about the product (for regulatory compliance), mandatory hashtags and disclosure, and what NOT to say. Give creative freedom on: content format, storytelling approach, visual style, caption writing, and how to integrate the product naturally. Creators know their audience better than brands do. Over-scripted content consistently underperforms authentic creator content in engagement and conversions.',
  },
  {
    q: 'What KPIs should Indian brands set for influencer campaigns?',
    a: 'KPIs for Indian influencer campaigns depend on your objective. For awareness: reach, impressions, and share of voice. For engagement: engagement rate, saves, shares, and comments sentiment. For conversions: promo code redemptions, website clicks, and UTM-tracked sales. For brand affinity: positive mention rate and follower growth on brand handle. Always set KPIs before briefing creators — it helps you select the right creators and evaluate performance objectively. Most Indian D2C brands prioritize promo code conversions and website traffic above all else.',
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
  name: 'Campaign Brief Generator for Indian Brands 2026',
  url: 'https://identitykit.in/tools/campaign-brief-generator',
  description: 'Free AI-powered campaign brief generator for Indian brands. Generate a professional influencer campaign brief in seconds — ASCI-compliant, creator-ready, copy and send instantly.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  creator: { '@type': 'Organization', name: 'Identity Kit', url: 'https://identitykit.in' },
}

const objectives = [
  { key: 'awareness', label: 'Brand Awareness', emoji: '📣', desc: 'Reach new audiences' },
  { key: 'launch', label: 'Product Launch', emoji: '🚀', desc: 'Introduce new product' },
  { key: 'conversions', label: 'Drive Sales', emoji: '💰', desc: 'Promo codes & purchases' },
  { key: 'engagement', label: 'Engagement', emoji: '❤️', desc: 'Likes, saves, shares' },
  { key: 'app_install', label: 'App Installs', emoji: '📱', desc: 'Downloads & signups' },
  { key: 'ugc', label: 'UGC Content', emoji: '🎬', desc: 'Content for brand use' },
]

const platforms = ['Instagram', 'YouTube', 'LinkedIn', 'Twitter/X', 'Podcast', 'Blog', 'Multiple Platforms']
const contentTypes = ['Reels', 'Static Posts', 'Stories', 'YouTube Dedicated Video', 'YouTube Integration', 'YouTube Shorts', 'Carousel', 'Live Session', 'Multiple Types']
const industries = ['Beauty & Skincare', 'Fashion & Apparel', 'Food & Beverage', 'Health & Wellness', 'Finance & Fintech', 'EdTech', 'Gaming', 'Travel & Hospitality', 'Tech & Electronics', 'Home & Lifestyle', 'Automobile', 'Real Estate', 'D2C Brand', 'Other']
const tones = [
  { key: 'professional', label: 'Professional', emoji: '💼' },
  { key: 'fun', label: 'Fun & Energetic', emoji: '🎉' },
  { key: 'educational', label: 'Educational', emoji: '📚' },
  { key: 'aspirational', label: 'Aspirational', emoji: '✨' },
]

export default function CampaignBriefGenerator() {
  // Brand details
  const [brandName, setBrandName] = useState('')
  const [industry, setIndustry] = useState('Beauty & Skincare')
  const [productName, setProductName] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [brandWebsite, setBrandWebsite] = useState('')

  // Campaign details
  const [objective, setObjective] = useState('awareness')
  const [platform, setPlatform] = useState('Instagram')
  const [contentType, setContentType] = useState('Reels')
  const [quantity, setQuantity] = useState('1')
  const [goLiveDate, setGoLiveDate] = useState('')
  const [budget, setBudget] = useState('')
  const [promoCode, setPromoCode] = useState('')
  const [campaignHashtag, setCampaignHashtag] = useState('')

  // Target audience
  const [targetAge, setTargetAge] = useState('18–35')
  const [targetGender, setTargetGender] = useState('All genders')
  const [targetLocation, setTargetLocation] = useState('Pan India')
  const [targetInterests, setTargetInterests] = useState('')

  // Creative
  const [tone, setTone] = useState('fun')
  const [keyMessages, setKeyMessages] = useState('')
  const [dos, setDos] = useState('')
  const [donts, setDonts] = useState('')
  const [creatorTier, setCreatorTier] = useState('Micro (10K–100K)')

  const [loading, setLoading] = useState(false)
  const [brief, setBrief] = useState('')
  const [copied, setCopied] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [error, setError] = useState('')

  async function generate() {
    if (!brandName || !productName) return
    setLoading(true)
    setError('')
    setBrief('')

    try {
      const res = await fetch('/api/generate-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          brandName, industry, productName, productDescription, brandWebsite,
          objective, platform, contentType, quantity, goLiveDate, budget,
          promoCode, campaignHashtag, targetAge, targetGender, targetLocation,
          targetInterests, tone, keyMessages, dos, donts, creatorTier,
        }),
      })
      const data = await res.json()
      if (data.brief) {
        setBrief(data.brief)
      } else {
        throw new Error('no brief')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  function copyBrief() {
    navigator.clipboard.writeText(brief)
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
        select option { background: #1a1a2e; color: #fff; }
        .g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .g3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
        .obj-btn { padding: 12px 10px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); color: rgba(255,255,255,0.45); font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.15s; text-align: center; font-family: 'Plus Jakarta Sans', sans-serif; }
        .obj-btn.active { background: rgba(255,107,43,0.1); border-color: rgba(255,107,43,0.35); color: #FF8C5A; }
        .tone-btn { flex: 1; padding: 11px 8px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); color: rgba(255,255,255,0.45); font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.15s; text-align: center; font-family: 'Plus Jakarta Sans', sans-serif; }
        .tone-btn.active { background: rgba(255,107,43,0.1); border-color: rgba(255,107,43,0.35); color: #FF8C5A; }
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 20px 0; cursor: pointer; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-weight: 700; font-size: 15px; color: rgba(255,255,255,0.9); line-height: 1.5; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
        .faq-a { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.75; margin-top: 12px; }
        .shimmer { background: linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0.03) 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 12px; margin-bottom: 10px; }
        @keyframes shimmer { 0% { background-position: 200% 0 } 100% { background-position: -200% 0 } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
        .result-anim { animation: fadeUp 0.4s ease; }
        .brief-text { font-size: 14px; line-height: 1.9; color: rgba(255,255,255,0.8); white-space: pre-wrap; font-family: 'Plus Jakarta Sans', sans-serif; }
        .section-divider { border: none; border-top: 1px solid rgba(255,255,255,0.06); margin: 20px 0; }
        @media (max-width: 640px) {
          .g2 { grid-template-columns: 1fr !important; }
          .g3 { grid-template-columns: 1fr 1fr !important; }
          .hero-title { font-size: 28px !important; }
          .obj-grid { grid-template-columns: 1fr 1fr !important; }
          .tone-row { flex-wrap: wrap !important; }
          .tone-btn { min-width: calc(50% - 6px) !important; }
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
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Campaign Brief Generator</span>
        </div>
      </div>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 80px' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', paddingTop: 28, paddingBottom: 44 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 700, color: '#FF8C5A', marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            📋 AI-Powered · Free for Indian Brands
          </div>
          <h1 className="hero-title" style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
            Campaign Brief Generator<br />for Indian Brands 2026
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 540, margin: '0 auto 10px', lineHeight: 1.7 }}>
            Generate a professional, ASCI-compliant influencer campaign brief in seconds. Fill in your campaign details — AI writes a creator-ready brief you can copy and send instantly.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>Free forever · No login required · ASCI-compliant · AI-powered</p>
        </div>

        {/* FORM */}
        {/* Brand Details */}
        <div style={card}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Brand & Product Details</div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 22 }}>Tell us about your brand and the product you're promoting.</p>

          <div className="g2" style={{ marginBottom: 12 }}>
            <div>
              <label style={labelStyle}>Brand Name *</label>
              <input style={inputStyle} placeholder="Mamaearth" value={brandName} onChange={e => setBrandName(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Industry</label>
              <select style={selectStyle} value={industry} onChange={e => setIndustry(e.target.value)}>
                {industries.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label style={labelStyle}>Product / Service Name *</label>
            <input style={inputStyle} placeholder="Vitamin C Face Serum" value={productName} onChange={e => setProductName(e.target.value)} />
          </div>

          <div className="g2">
            <div>
              <label style={labelStyle}>Product Description</label>
              <textarea style={{ ...inputStyle, minHeight: 70, lineHeight: 1.6, resize: 'vertical' }}
                placeholder="What makes this product special? Key ingredients, benefits, USP..."
                value={productDescription} onChange={e => setProductDescription(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Brand Website</label>
              <input style={inputStyle} placeholder="mamaearth.in" value={brandWebsite} onChange={e => setBrandWebsite(e.target.value)} />
            </div>
          </div>
        </div>

        {/* Campaign Objective */}
        <div style={card}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Campaign Objective *</div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 18 }}>What do you want this campaign to achieve?</p>
          <div className="obj-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 20 }}>
            {objectives.map(o => (
              <button key={o.key} className={`obj-btn${objective === o.key ? ' active' : ''}`} onClick={() => setObjective(o.key)}>
                <div style={{ fontSize: 22, marginBottom: 5 }}>{o.emoji}</div>
                <div style={{ fontWeight: 700, marginBottom: 2 }}>{o.label}</div>
                <div style={{ fontSize: 11, opacity: 0.6 }}>{o.desc}</div>
              </button>
            ))}
          </div>

          <div className="g3" style={{ marginBottom: 12 }}>
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
            <div>
              <label style={labelStyle}>Quantity</label>
              <select style={selectStyle} value={quantity} onChange={e => setQuantity(e.target.value)}>
                {['1', '2', '3', '4', '5', '6+'].map(q => <option key={q} value={q}>{q} piece{q !== '1' ? 's' : ''}</option>)}
              </select>
            </div>
          </div>

          <div className="g3">
            <div>
              <label style={labelStyle}>Go-Live Date</label>
              <input type="date" style={inputStyle} value={goLiveDate} onChange={e => setGoLiveDate(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Budget per Creator (₹)</label>
              <input type="number" style={inputStyle} placeholder="e.g. 25000" value={budget} onChange={e => setBudget(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Creator Tier</label>
              <select style={selectStyle} value={creatorTier} onChange={e => setCreatorTier(e.target.value)}>
                {['Nano (1K–10K)', 'Micro (10K–100K)', 'Mid-Tier (100K–500K)', 'Macro (500K–1M)', 'Any Tier'].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div style={card}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Target Audience</div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 18 }}>Who should the creator's content reach?</p>
          <div className="g3" style={{ marginBottom: 12 }}>
            <div>
              <label style={labelStyle}>Age Range</label>
              <select style={selectStyle} value={targetAge} onChange={e => setTargetAge(e.target.value)}>
                {['13–18', '18–25', '25–35', '35–45', '45+', '18–35', '25–45', 'All ages'].map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Gender</label>
              <select style={selectStyle} value={targetGender} onChange={e => setTargetGender(e.target.value)}>
                {['All genders', 'Women', 'Men', 'Primarily women', 'Primarily men'].map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Location</label>
              <select style={selectStyle} value={targetLocation} onChange={e => setTargetLocation(e.target.value)}>
                {['Pan India', 'Metro cities', 'Tier 1 cities', 'Tier 2 & 3 cities', 'South India', 'North India', 'West India'].map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label style={labelStyle}>Audience Interests</label>
            <input style={inputStyle} placeholder="e.g. skincare, wellness, sustainable living, working professionals" value={targetInterests} onChange={e => setTargetInterests(e.target.value)} />
          </div>
        </div>

        {/* Creative Direction */}
        <div style={card}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 5 }}>Creative Direction</div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 18 }}>Guide the creator on tone, messages and boundaries.</p>

          <div style={{ marginBottom: 16 }}>
            <label style={{ ...labelStyle, marginBottom: 10 }}>Campaign Tone</label>
            <div className="tone-row" style={{ display: 'flex', gap: 8 }}>
              {tones.map(t => (
                <button key={t.key} className={`tone-btn${tone === t.key ? ' active' : ''}`} onClick={() => setTone(t.key)}>
                  <div style={{ fontSize: 18, marginBottom: 3 }}>{t.emoji}</div>
                  <div>{t.label}</div>
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label style={labelStyle}>Key Messages <span style={{ opacity: 0.4, fontWeight: 400, textTransform: 'none' }}>(what creator must communicate)</span></label>
            <textarea style={{ ...inputStyle, minHeight: 70, lineHeight: 1.6, resize: 'vertical' }}
              placeholder="e.g. Product is 100% natural, dermatologist tested, suitable for Indian skin tones, available on our website and Amazon..."
              value={keyMessages} onChange={e => setKeyMessages(e.target.value)} />
          </div>

          <div className="g2" style={{ marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>✅ Dos</label>
              <textarea style={{ ...inputStyle, minHeight: 80, lineHeight: 1.6, resize: 'vertical' }}
                placeholder="Show product in use&#10;Mention skin tone compatibility&#10;Use our campaign hashtag&#10;Share authentic experience"
                value={dos} onChange={e => setDos(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>❌ Don'ts</label>
              <textarea style={{ ...inputStyle, minHeight: 80, lineHeight: 1.6, resize: 'vertical' }}
                placeholder="Don't mention competitor brands&#10;Don't make medical claims&#10;Don't show product price&#10;Don't use heavy filters"
                value={donts} onChange={e => setDonts(e.target.value)} />
            </div>
          </div>

          <div className="g2">
            <div>
              <label style={labelStyle}>Promo Code <span style={{ opacity: 0.4, fontWeight: 400, textTransform: 'none' }}>(if any)</span></label>
              <input style={inputStyle} placeholder="e.g. PRIYA20 for 20% off" value={promoCode} onChange={e => setPromoCode(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Campaign Hashtag</label>
              <input style={inputStyle} placeholder="e.g. #GlowWithMamaearth" value={campaignHashtag} onChange={e => setCampaignHashtag(e.target.value)} />
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={generate}
          disabled={loading || !brandName || !productName}
          style={{ width: '100%', background: loading || !brandName || !productName ? 'rgba(255,107,43,0.35)' : '#FF6B2B', border: 'none', color: '#fff', padding: '17px 24px', borderRadius: 14, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, cursor: loading || !brandName || !productName ? 'not-allowed' : 'pointer', transition: 'all 0.2s', marginBottom: 14 }}
        >
          {loading ? '✍️ Writing your campaign brief...' : '✍️ Generate Campaign Brief →'}
        </button>
        {(!brandName || !productName) && <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginBottom: 20 }}>Enter brand name and product name to generate</p>}

        {/* LOADING */}
        {loading && (
          <div style={{ marginBottom: 24 }}>
            <div className="shimmer" style={{ height: 30 }} />
            <div className="shimmer" style={{ height: 200 }} />
            <div className="shimmer" style={{ height: 150 }} />
          </div>
        )}

        {/* ERROR */}
        {error && !loading && (
          <div style={{ padding: '14px 18px', background: 'rgba(255,82,82,0.08)', border: '1px solid rgba(255,82,82,0.2)', borderRadius: 12, fontSize: 14, color: '#FF5252', marginBottom: 24 }}>
            {error}
          </div>
        )}

        {/* RESULT */}
        {brief && !loading && (
          <div className="result-anim" style={{ marginBottom: 52 }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, overflow: 'hidden' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                <div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 15 }}>Your Campaign Brief</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>Ready to copy and send to creators</div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    onClick={copyBrief}
                    style={{ background: copied ? 'rgba(76,175,80,0.1)' : 'rgba(255,107,43,0.1)', border: `1px solid ${copied ? 'rgba(76,175,80,0.3)' : 'rgba(255,107,43,0.25)'}`, color: copied ? '#81C784' : '#FF8C5A', borderRadius: 9, padding: '8px 18px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  >
                    {copied ? '✓ Copied!' : '📋 Copy Brief'}
                  </button>
                  <button
                    onClick={generate}
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', borderRadius: 9, padding: '8px 16px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  >
                    ↻ Regenerate
                  </button>
                </div>
              </div>
              <div style={{ padding: '24px 24px' }}>
                <div className="brief-text">{brief}</div>
              </div>
            </div>

            {/* Find creators CTA */}
            <div style={{ marginTop: 16, background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 14, padding: '18px 20px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 28, flexShrink: 0 }}>💡</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 5 }}>Now find creators to send this to</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: 10 }}>
                  Identity Kit profiles show you each creator's media kit, engagement rate, rate card, and past brand work — everything you need to evaluate a creator before reaching out.
                </div>
                <Link href="/" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 9, padding: '8px 18px', fontWeight: 700, fontSize: 13 }}>
                  Browse creator profiles →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* WHAT'S INCLUDED */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
          What's in a Generated Brief
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>Every generated brief includes 10 sections that cover everything a creator needs to deliver great work.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 52 }}>
          {[
            { num: '01', title: 'Campaign Overview', desc: 'Brand intro, product summary, and campaign objective in 2–3 clear sentences.' },
            { num: '02', title: 'Target Audience', desc: 'Who the creator should be speaking to — age, location, interests, and intent.' },
            { num: '03', title: 'Deliverables', desc: 'Exact platform, content type, duration, quantity, and posting schedule.' },
            { num: '04', title: 'Key Messages', desc: '3–5 bullet points of what the creator must communicate about your product.' },
            { num: '05', title: 'Creative Direction', desc: 'Tone, visual style, dos and don\'ts — guardrails with creative freedom.' },
            { num: '06', title: 'Posting Guidelines', desc: 'Caption requirements, mandatory hashtags, and ASCI disclosure instructions.' },
            { num: '07', title: 'Timeline', desc: 'Draft submission deadline, approval window, and final go-live date.' },
            { num: '08', title: 'Compensation', desc: 'Payment amount, advance terms, and what\'s included in the fee.' },
            { num: '09', title: 'Approval Process', desc: 'Number of revision rounds, response turnaround, and final sign-off process.' },
            { num: '10', title: 'Next Steps', desc: 'Clear instructions on what the creator should do after reading the brief.' },
          ].map(c => (
            <div key={c.num} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '16px 18px', display: 'flex', gap: 14 }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: 'rgba(255,107,43,0.35)', flexShrink: 0, lineHeight: 1 }}>{c.num}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{c.title}</div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.1), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 24, padding: '48px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden', marginBottom: 64 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(255,107,43,0.1), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔗</div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.5px' }}>
            Are you a creator? Get your profile ready for brand briefs
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.75, maxWidth: 460, margin: '0 auto 28px' }}>
            Identity Kit gives you one professional link with your media kit, rate card, and creator CV. When brands send you a brief, they've already seen your full profile — no back-and-forth needed.
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
              { href: '/tools/influencer-roi-calculator', tag: 'Free Tool', title: 'Influencer ROI Calculator — Measure Campaign Performance' },
              { href: '/tools/brand-deal-contract-template', tag: 'Free Tool', title: 'Brand Deal Contract Template — Protect Every Campaign' },
              { href: '/tools/influencer-rate-calculator', tag: 'Free Tool', title: 'Influencer Rate Calculator — Know What Creators Charge' },
              { href: '/tools/brand-pitch-email-generator', tag: 'Free Tool', title: 'Brand Pitch Email Generator — For Creators Pitching You' },
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
