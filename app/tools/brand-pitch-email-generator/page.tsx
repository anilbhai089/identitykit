'use client'
import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

// ── FAQs ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How do I pitch a brand for collaboration as an Indian creator?',
    a: 'A strong brand pitch email for Indian creators should: open with a specific compliment about the brand (not generic praise), introduce yourself with your niche and one key stat, explain why your audience is a perfect fit for their product, propose a specific deliverable (not "open to collaboration"), and end with a clear CTA like "Can we schedule a 15-minute call this week?". Keep it under 150 words — brand managers receive hundreds of pitches and short emails get read. Always include your Identity Kit link so brands can see your full profile instantly.',
  },
  {
    q: 'What should I include in a brand collaboration email in India?',
    a: 'Your brand collaboration email must include: your name and handle, your niche and platform, one compelling stat (engagement rate, follower count, or a past campaign result), why their specific product fits your audience, a specific proposed deliverable (e.g. "1 Instagram Reel and 3 Stories"), your rate range or a link to your rate card, and your media kit link. Do not attach a PDF — share your Identity Kit link instead. Brands open links on mobile; they rarely download attachments.',
  },
  {
    q: 'What is the best subject line for a brand pitch email from an influencer?',
    a: 'The best subject lines for influencer pitch emails are specific and curiosity-driven. Avoid: "Collaboration Opportunity" or "Brand Partnership Request" — these get ignored. Use instead: "[Brand Name] × [Your Name] — Reel Collab Idea", "Your [Product] + My [Niche] Audience = Perfect Match", or "Quick collab idea for [Brand Name]\'s [specific product]". Personalization is the biggest factor — a subject line with the brand\'s actual product name gets 3x more opens than a generic one.',
  },
  {
    q: 'How do I find the right person to email for brand collaborations in India?',
    a: 'To find the right contact for influencer collaborations at Indian brands: check LinkedIn for "Influencer Marketing Manager", "Brand Partnerships", or "Social Media Manager" at the company. Check the brand\'s Instagram bio — many list a collab email like "collabs@brand.com". Go to the brand\'s website → About Us or Contact page. Search "[Brand Name] influencer email" on Google. For D2C brands, the founder or marketing head often handles influencer outreach directly and is reachable on LinkedIn.',
  },
  {
    q: 'Should I mention my rates in the first pitch email?',
    a: 'For cold pitch emails to Indian brands, do not mention specific rates in the first email. Instead, share your Identity Kit link which has your rate card — let them check it themselves. Mentioning rates too early can kill the conversation before it starts. Instead, say "Happy to share my rate card and media kit — [your Identity Kit link]". Once they respond with interest, share your rates in the second email or on a call. The exception: if a brand specifically asks for rates in their campaign brief.',
  },
  {
    q: 'How long should a brand pitch email be?',
    a: 'Your brand pitch email should be 80–120 words maximum. Brand marketing managers and founders receive 50–200 pitch emails per week. Short emails that get to the point immediately get read. Long emails get skimmed and deleted. The ideal structure: 1 sentence about the brand, 2 sentences about you and your audience fit, 1 sentence with a specific proposal, 1 sentence CTA. That\'s it. Your Identity Kit link does the heavy lifting — it shows your full media kit, stats, and rate card without cluttering the email.',
  },
  {
    q: 'How many follow-up emails should I send after a brand pitch?',
    a: 'Send exactly 2 follow-up emails after your initial pitch. Follow-up 1: 3–4 days after the original email, short and direct ("Just following up on my email below — happy to jump on a quick call this week"). Follow-up 2: 7 days after follow-up 1, final touch ("Last follow-up from my end — would love to connect if the timing works. My profile: [Identity Kit link]"). After 2 follow-ups with no response, move on. Most Indian brand deals close on the first or second follow-up, not the original email.',
  },
  {
    q: 'What is a media kit and why do I need one for brand pitches?',
    a: 'A media kit is a professional document that shows brands your audience demographics, engagement stats, past collaborations, content examples, and rate card — all in one place. Every serious brand pitch needs a media kit link. Without one, brands have to manually check your profile and guess your rates, which most won\'t do. Identity Kit gives you a free, professional media kit as a shareable link — identitykit.in/yourname — that you can add to every pitch email. Brands click one link and see everything they need to say yes.',
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
  name: 'Brand Pitch Email Generator for Indian Creators 2026',
  url: 'https://identitykit.in/tools/brand-pitch-email-generator',
  description: 'Free AI-powered brand pitch email generator for Indian creators. Generate a professional, personalized pitch email to brands in seconds. Get more brand deals with emails that actually get replies.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  creator: { '@type': 'Organization', name: 'Identity Kit', url: 'https://identitykit.in' },
}

const niches = [
  'Finance & Investing', 'Tech & Gadgets', 'Education & Career', 'Health & Fitness',
  'Beauty & Skincare', 'Food & Recipes', 'Travel & Vlogs', 'Lifestyle',
  'Fashion & Style', 'Gaming', 'Comedy & Entertainment', 'Business & Startup',
  'Parenting & Family', 'Motivation & Self-Help', 'Sports & Cricket', 'Sustainability',
]

const platforms = ['Instagram', 'YouTube', 'LinkedIn', 'Twitter/X', 'Both Instagram & YouTube', 'Podcast']

const tones = [
  { key: 'professional', label: 'Professional', emoji: '💼', desc: 'Formal & structured' },
  { key: 'friendly', label: 'Friendly', emoji: '😊', desc: 'Warm & conversational' },
  { key: 'bold', label: 'Bold & Direct', emoji: '🔥', desc: 'Confident & punchy' },
  { key: 'creative', label: 'Creative', emoji: '✨', desc: 'Unique & memorable' },
]

const goals = [
  { key: 'paid_collab', label: 'Paid Collab', emoji: '💰' },
  { key: 'barter', label: 'Barter / Gifting', emoji: '🎁' },
  { key: 'ambassador', label: 'Brand Ambassador', emoji: '🤝' },
  { key: 'affiliate', label: 'Affiliate Deal', emoji: '🔗' },
]

export default function BrandPitchEmailGenerator() {
  // Creator details
  const [creatorName, setCreatorName] = useState('')
  const [niche, setNiche] = useState('Lifestyle')
  const [platform, setPlatform] = useState('Instagram')
  const [followers, setFollowers] = useState('')
  const [engagementRate, setEngagementRate] = useState('')
  const [uniqueAngle, setUniqueAngle] = useState('')
  const [pastBrands, setPastBrands] = useState('')
  const [identityKitUrl, setIdentityKitUrl] = useState('')

  // Brand details
  const [brandName, setBrandName] = useState('')
  const [brandProduct, setBrandProduct] = useState('')
  const [brandIndustry, setBrandIndustry] = useState('')
  const [proposedDeliverable, setProposedDeliverable] = useState('')

  // Settings
  const [tone, setTone] = useState('professional')
  const [goal, setGoal] = useState('paid_collab')
  const [language, setLanguage] = useState('english')

  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ subject: string; body: string; followUp1: string; followUp2: string } | null>(null)
  const [copied, setCopied] = useState<string | null>(null)
  const [error, setError] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  async function generate() {
    if (!brandName || !niche) return
    setLoading(true)
    setError('')
    setResult(null)

    try {
      const response = await fetch('/api/generate-pitch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          creatorName, niche, platform, followers, engagementRate,
          uniqueAngle, pastBrands, identityKitUrl,
          brandName, brandProduct, brandIndustry, proposedDeliverable,
          tone, goal, language,
        }),
      })
      const data = await response.json()
      if (!data.result) throw new Error('No result')
      setResult(data.result)
    } catch {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  function copyText(text: string, key: string) {
    navigator.clipboard.writeText(text.replace(/\\n/g, '\n'))
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
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
        input:focus, select:focus, textarea:focus { border-color: rgba(255,107,43,0.5) !important; background: rgba(255,107,43,0.04) !important; }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
        select option { background: #1a1a2e; color: #fff; }
        .g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .g3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
        .card { background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.08); border-radius: 18px; padding: 24px; margin-bottom: 14px; }
        .tone-btn { flex: 1; padding: 11px 8px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.15s; text-align: center; font-family: 'Plus Jakarta Sans', sans-serif; }
        .tone-btn.active { background: rgba(255,107,43,0.1); border-color: rgba(255,107,43,0.35); color: #FF8C5A; }
        .goal-btn { flex: 1; padding: 10px 8px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.15s; text-align: center; font-family: 'Plus Jakarta Sans', sans-serif; }
        .goal-btn.active { background: rgba(255,107,43,0.1); border-color: rgba(255,107,43,0.35); color: #FF8C5A; }
        .email-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; overflow: hidden; margin-bottom: 12px; }
        .email-header { background: rgba(255,255,255,0.04); padding: 12px 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .email-label { font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.05em; }
        .email-body { padding: 18px; font-size: 14px; line-height: 1.85; color: rgba(255,255,255,0.8); white-space: pre-line; }
        .copy-btn { background: rgba(255,107,43,0.1); border: 1px solid rgba(255,107,43,0.2); color: #FF8C5A; border-radius: 8px; padding: 6px 14px; font-size: 12px; font-weight: 700; cursor: pointer; font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.15s; white-space: nowrap; }
        .copy-btn.copied { background: rgba(76,175,80,0.1); border-color: rgba(76,175,80,0.3); color: #81C784; }
        .subject-box { background: rgba(255,107,43,0.06); border: 1px solid rgba(255,107,43,0.2); border-radius: 12px; padding: 14px 18px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; gap: 12px; }
        .shimmer { background: linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0.03) 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 12px; margin-bottom: 12px; }
        @keyframes shimmer { 0% { background-position: 200% 0 } 100% { background-position: -200% 0 } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
        .result-section { animation: fadeUp 0.4s ease; }
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 20px 0; cursor: pointer; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-weight: 700; font-size: 15px; color: rgba(255,255,255,0.9); line-height: 1.5; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
        .faq-a { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.75; margin-top: 12px; }
        .lang-btn { padding: 9px 20px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.02); color: rgba(255,255,255,0.45); font-size: 13px; font-weight: 600; cursor: pointer; font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.15s; }
        .lang-btn.active { background: rgba(255,107,43,0.1); border-color: rgba(255,107,43,0.35); color: #FF8C5A; }
        @media (max-width: 640px) {
          .g2 { grid-template-columns: 1fr !important; }
          .g3 { grid-template-columns: 1fr 1fr !important; }
          .hero-title { font-size: 28px !important; }
          .tone-row { flex-wrap: wrap !important; }
          .goal-row { flex-wrap: wrap !important; }
          .tone-btn, .goal-btn { min-width: calc(50% - 6px) !important; }
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
          <Link href="/" style={{ color: 'rgba(255,255,255,0.35)' }}>Home</Link><span>›</span>
          <Link href="/tools" style={{ color: 'rgba(255,255,255,0.35)' }}>Tools</Link><span>›</span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Brand Pitch Email Generator</span>
        </div>
      </div>

      <main style={{ maxWidth: 860, margin: '0 auto', padding: '0 20px 80px' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', paddingTop: 28, paddingBottom: 44 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 700, color: '#FF8C5A', marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            📧 AI-Powered · Free for Indian Creators
          </div>
          <h1 className="hero-title" style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
            Brand Pitch Email Generator<br />for Indian Creators 2026
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto 10px', lineHeight: 1.7 }}>
            Generate a personalized brand pitch email in seconds — plus 2 follow-up emails. AI-written, India-specific, short enough to actually get read.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>Free forever · No login required · Includes subject line + 2 follow-ups</p>
        </div>

        {/* FORM */}
        <div className="card">
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 18, marginBottom: 5 }}>Your Details</div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 24 }}>The more specific you are, the more personalized and effective the pitch.</p>

          <div className="g2" style={{ marginBottom: 12 }}>
            <div>
              <label style={labelStyle}>Your Name</label>
              <input style={inputStyle} placeholder="Priya Sharma" value={creatorName} onChange={e => setCreatorName(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Your Niche *</label>
              <select style={selectStyle} value={niche} onChange={e => setNiche(e.target.value)}>
                {niches.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>

          <div className="g3" style={{ marginBottom: 12 }}>
            <div>
              <label style={labelStyle}>Primary Platform</label>
              <select style={selectStyle} value={platform} onChange={e => setPlatform(e.target.value)}>
                {platforms.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Followers</label>
              <input style={inputStyle} placeholder="e.g. 45K, 1.2L" value={followers} onChange={e => setFollowers(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Engagement Rate</label>
              <input style={inputStyle} placeholder="e.g. 5.2%" value={engagementRate} onChange={e => setEngagementRate(e.target.value)} />
            </div>
          </div>

          <div className="g2" style={{ marginBottom: 12 }}>
            <div>
              <label style={labelStyle}>Your Unique Angle</label>
              <input style={inputStyle} placeholder="e.g. Ex-CA explaining taxes in Hindi" value={uniqueAngle} onChange={e => setUniqueAngle(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Past Brand Collabs</label>
              <input style={inputStyle} placeholder="e.g. Groww, HDFC, Mamaearth" value={pastBrands} onChange={e => setPastBrands(e.target.value)} />
            </div>
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>Your Identity Kit Link <span style={{ color: 'rgba(255,255,255,0.25)', fontWeight: 400, textTransform: 'none', fontSize: 11 }}>(added automatically to the email)</span></label>
            <input style={inputStyle} placeholder="identitykit.in/priyasharma" value={identityKitUrl} onChange={e => setIdentityKitUrl(e.target.value)} />
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20, marginBottom: 20 }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16, marginBottom: 5 }}>Brand Details</div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>Tell us about the brand you're pitching.</p>

            <div className="g2" style={{ marginBottom: 12 }}>
              <div>
                <label style={labelStyle}>Brand Name *</label>
                <input style={inputStyle} placeholder="Mamaearth" value={brandName} onChange={e => setBrandName(e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Their Product / Service</label>
                <input style={inputStyle} placeholder="Vitamin C Face Serum" value={brandProduct} onChange={e => setBrandProduct(e.target.value)} />
              </div>
            </div>

            <div className="g2">
              <div>
                <label style={labelStyle}>Brand Industry</label>
                <input style={inputStyle} placeholder="Skincare / D2C / Fintech..." value={brandIndustry} onChange={e => setBrandIndustry(e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Proposed Deliverable</label>
                <input style={inputStyle} placeholder="1 Instagram Reel + 3 Stories" value={proposedDeliverable} onChange={e => setProposedDeliverable(e.target.value)} />
              </div>
            </div>
          </div>

          {/* Tone */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20, marginBottom: 18 }}>
            <label style={{ ...labelStyle, marginBottom: 10 }}>Email Tone</label>
            <div className="tone-row" style={{ display: 'flex', gap: 8 }}>
              {tones.map(t => (
                <button key={t.key} className={`tone-btn${tone === t.key ? ' active' : ''}`} onClick={() => setTone(t.key)}>
                  <div style={{ fontSize: 18, marginBottom: 3 }}>{t.emoji}</div>
                  <div style={{ fontWeight: 700, marginBottom: 2 }}>{t.label}</div>
                  <div style={{ fontSize: 11, opacity: 0.6 }}>{t.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Goal */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ ...labelStyle, marginBottom: 10 }}>Collaboration Goal</label>
            <div className="goal-row" style={{ display: 'flex', gap: 8 }}>
              {goals.map(g => (
                <button key={g.key} className={`goal-btn${goal === g.key ? ' active' : ''}`} onClick={() => setGoal(g.key)}>
                  <div style={{ fontSize: 20, marginBottom: 3 }}>{g.emoji}</div>
                  <div style={{ fontWeight: 700, fontSize: 12 }}>{g.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Language */}
          <div style={{ marginBottom: 28 }}>
            <label style={{ ...labelStyle, marginBottom: 10 }}>Language Style</label>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className={`lang-btn${language === 'english' ? ' active' : ''}`} onClick={() => setLanguage('english')}>🇬🇧 English</button>
              <button className={`lang-btn${language === 'hinglish' ? ' active' : ''}`} onClick={() => setLanguage('hinglish')}>🇮🇳 Hinglish</button>
            </div>
          </div>

          <button
            onClick={generate}
            disabled={loading || !brandName || !niche}
            style={{ width: '100%', background: loading || !brandName || !niche ? 'rgba(255,107,43,0.35)' : '#FF6B2B', border: 'none', color: '#fff', padding: '16px 24px', borderRadius: 14, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, cursor: loading || !brandName || !niche ? 'not-allowed' : 'pointer', transition: 'all 0.2s' }}
          >
            {loading ? '✍️ Writing your pitch...' : '✍️ Generate My Pitch Email →'}
          </button>
          {(!brandName || !niche) && <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginTop: 8 }}>Enter your niche and brand name to generate</p>}
        </div>

        {/* LOADING */}
        {loading && (
          <div>
            <div className="shimmer" style={{ height: 60 }} />
            <div className="shimmer" style={{ height: 160 }} />
            <div className="shimmer" style={{ height: 80 }} />
            <div className="shimmer" style={{ height: 60 }} />
          </div>
        )}

        {/* ERROR */}
        {error && !loading && (
          <div style={{ padding: '14px 18px', background: 'rgba(255,82,82,0.08)', border: '1px solid rgba(255,82,82,0.2)', borderRadius: 12, fontSize: 14, color: '#FF5252', marginBottom: 24 }}>
            {error}
          </div>
        )}

        {/* RESULTS */}
        {result && !loading && (
          <div className="result-section" style={{ marginBottom: 52 }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 22, marginBottom: 6 }}>Your Pitch Email Package</div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>Copy each email and send in sequence — initial pitch first, then follow-ups if no reply.</p>

            {/* Subject line */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Subject Line</div>
              <div className="subject-box">
                <span style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{result.subject}</span>
                <button className={`copy-btn${copied === 'subject' ? ' copied' : ''}`} onClick={() => copyText(result.subject, 'subject')}>
                  {copied === 'subject' ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Main email */}
            <div style={{ marginBottom: 8 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Initial Pitch Email — Send Day 1</div>
              <div className="email-card">
                <div className="email-header">
                  <span className="email-label">📧 Main Pitch</span>
                  <button className={`copy-btn${copied === 'body' ? ' copied' : ''}`} onClick={() => copyText(result.body, 'body')}>
                    {copied === 'body' ? '✓ Copied!' : 'Copy Email'}
                  </button>
                </div>
                <div className="email-body">{result.body.replace(/\\n/g, '\n')}</div>
              </div>
            </div>

            {/* Follow-up 1 */}
            <div style={{ marginBottom: 8 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Follow-Up 1 — Send 3–4 Days Later (if no reply)</div>
              <div className="email-card">
                <div className="email-header">
                  <span className="email-label">🔁 Follow-Up 1</span>
                  <button className={`copy-btn${copied === 'fu1' ? ' copied' : ''}`} onClick={() => copyText(result.followUp1, 'fu1')}>
                    {copied === 'fu1' ? '✓ Copied!' : 'Copy Email'}
                  </button>
                </div>
                <div className="email-body">{result.followUp1.replace(/\\n/g, '\n')}</div>
              </div>
            </div>

            {/* Follow-up 2 */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Follow-Up 2 — Send 7 Days After Follow-Up 1 (Final)</div>
              <div className="email-card">
                <div className="email-header">
                  <span className="email-label">✌️ Final Follow-Up</span>
                  <button className={`copy-btn${copied === 'fu2' ? ' copied' : ''}`} onClick={() => copyText(result.followUp2, 'fu2')}>
                    {copied === 'fu2' ? '✓ Copied!' : 'Copy Email'}
                  </button>
                </div>
                <div className="email-body">{result.followUp2.replace(/\\n/g, '\n')}</div>
              </div>
            </div>

            {/* Identity Kit CTA */}
            {!identityKitUrl && (
              <div style={{ background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 14, padding: '16px 20px', marginBottom: 20, display: 'flex', gap: 14, alignItems: 'center' }}>
                <span style={{ fontSize: 28 }}>💡</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Your email needs a media kit link</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>Create your free Identity Kit profile — brands click one link to see your media kit, rate card and creator CV. Then come back and add your link to the email above.</div>
                  <Link href="/auth?mode=signup" style={{ display: 'inline-block', marginTop: 10, background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '7px 16px', fontWeight: 700, fontSize: 13 }}>Create my free Identity Kit →</Link>
                </div>
              </div>
            )}

            <button
              onClick={generate}
              style={{ width: '100%', background: 'transparent', border: '1px dashed rgba(255,107,43,0.3)', color: '#FF6B2B', borderRadius: 12, padding: '13px', fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 14, cursor: 'pointer' }}
            >
              ↻ Generate a different version
            </button>
          </div>
        )}

        {/* TIPS */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
          What Makes a Brand Pitch Email Work in India
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>
          Indian brand managers and D2C founders receive 50–200 pitch emails per week. Here's what separates the ones they reply to.
        </p>
        <div style={{ marginBottom: 52 }}>
          {[
            { icon: '🎯', title: 'Be specific about the brand — not generic', desc: 'The worst opening: "I love your brand and products." The best opening: "Your Vitamin C Serum campaign last month was brilliant — the before/after format worked perfectly for my audience." Specificity signals you actually researched them, which brands respect.' },
            { icon: '📏', title: 'Keep it under 120 words', desc: 'Most successful brand deals in India are initiated with emails under 100 words. Founders and marketing managers are busy — they skim, not read. If they can\'t understand your pitch in 10 seconds, they move on. Your Identity Kit link handles the detailed sell.' },
            { icon: '🔗', title: 'Always include your Identity Kit link', desc: 'Never attach a PDF media kit. Share your Identity Kit link instead — it opens instantly on mobile, always shows your latest stats, and looks far more professional than a PDF. Brands who click your link and see a clean profile are 3x more likely to reply.' },
            { icon: '💡', title: 'Propose something specific', desc: '"Open to collaboration" is the weakest possible CTA. "I\'d love to do 1 Instagram Reel featuring your serum in my skincare routine — here\'s what that could look like" is strong. A specific proposal shows creative thinking and makes it easy for brands to say yes.' },
            { icon: '⏰', title: 'Send at the right time', desc: 'Best times to send brand pitch emails in India: Tuesday–Thursday, 10am–12pm or 2pm–4pm IST. Avoid Mondays (inbox backlog) and Fridays (pre-weekend wind-down). Gmail shows send time — scheduling tools like Boomerang or Gmail\'s built-in scheduler can help.' },
            { icon: '🔁', title: 'Always follow up exactly twice', desc: 'Most brand deals that close from cold email close on follow-up 1 or 2 — not the original email. Send follow-up 1 after 3–4 days, follow-up 2 after 7 more days. After that, move on. Two follow-ups is professional. Three or more is desperate.' },
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
            Every pitch email needs a media kit link
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.75, maxWidth: 460, margin: '0 auto 28px' }}>
            Identity Kit gives you one professional link with your media kit, rate card and creator CV. Brands click it and see everything they need to say yes — no PDFs, no back-and-forth.
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
              { href: '/tools/influencer-rate-calculator', tag: 'Free Tool', title: 'Influencer Rate Calculator — Know What to Charge Before You Pitch' },
              { href: '/tools/brand-deal-contract-template', tag: 'Free Tool', title: 'Brand Deal Contract Template — For When They Say Yes' },
              { href: '/tools/instagram-engagement-calculator', tag: 'Free Tool', title: 'Instagram Engagement Rate Calculator — Your Key Pitch Stat' },
              { href: '/tools/gst-invoice-generator', tag: 'Free Tool', title: 'GST Invoice Generator — Bill the Brand After the Deal' },
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
