'use client'
import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How do I write a good Instagram bio for brand deals in India?',
    a: 'A brand-ready Instagram bio should include: your niche (what you create), your location (city/India), a key stat (followers, views, or engagement), your unique angle, and a clear CTA (link in bio, DM for collabs, or email). Keep it under 150 characters. Emojis help break up text and highlight key points. Avoid vague words like "content creator" — be specific: "Finance tips for Indian millennials" is far stronger.',
  },
  {
    q: 'How many characters can an Instagram bio have?',
    a: 'Instagram bios have a maximum of 150 characters. This includes spaces, emojis, and line breaks. Each emoji counts as 1–2 characters depending on the emoji. Line breaks are free but you are limited to a maximum of 5 lines visible on the profile without the "more" toggle. Use every character strategically — your bio is the first thing brands and new followers read.',
  },
  {
    q: 'Should Indian creators put their niche in their Instagram bio?',
    a: 'Yes — absolutely. Brands search Instagram by niche when scouting creators. If your bio says "Finance tips for Indian millennials 📈" instead of just "Content Creator", you appear in searches and DMs from relevant brands. Your niche in the bio also sets audience expectations, which improves follower quality and engagement rate — both critical for brand deal rates.',
  },
  {
    q: 'What should I put in my Instagram bio as a new creator in India?',
    a: 'As a new Indian creator (under 10K followers), focus your bio on: your niche, your city, what makes your content different, and a CTA. Do not fake stats or mention follower counts. Instead, highlight your angle: "Honest product reviews from Pune 🛍️" or "Daily stock market tips in Hindi 📊". Authenticity and specificity attract the right followers and early brand partnerships faster than generic bios.',
  },
  {
    q: 'Can I use emojis in my Instagram bio for a professional look?',
    a: 'Yes — emojis are standard in Indian creator bios and actually improve readability. Use 1–2 relevant emojis per line as bullet points or highlights. Finance creators use 📈💰, fitness creators use 💪🏃, food creators use 🍳🥗. Avoid using more than 6–8 emojis total as it looks cluttered. Brands do not judge emojis negatively — they are expected in creator bios.',
  },
  {
    q: 'How often should I update my Instagram bio?',
    a: 'Update your Instagram bio whenever: your follower count crosses a major milestone (10K, 50K, 100K), you launch a new content series or format, you add a new platform, your email or booking link changes, or you want to highlight a recent achievement or collab. Many successful Indian creators update their bio monthly. Think of it as your living business card — it should always reflect your current best self.',
  },
  {
    q: 'What is the best CTA for an Instagram bio in India?',
    a: 'The best CTAs for Indian creator bios depend on your goal. For brand deals: "📩 Collabs: email@domain.com" or "DM for brand collabs". For link clicks: "👇 Media kit + rates" pointing to your Identity Kit link. For followers: "New video every Tuesday 🎬". For course/product sales: "Free finance guide 👇". Always have exactly one CTA — multiple CTAs confuse visitors and reduce click-through rates.',
  },
  {
    q: 'How do I write an Instagram bio that gets followers in India?',
    a: 'To write a follower-attracting Instagram bio for Indian audiences: be hyper-specific about your niche ("Surat-based street food reviews" beats "Foodie"), use Hindi or Hinglish words if your audience is Hindi-speaking, mention your posting schedule ("New Reels every Mon/Wed/Fri"), include a hook or personality line ("Turning ₹5K into ₹5L one stock at a time 📈"), and always end with a clear CTA pointing to your best content or link.',
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
  name: 'Instagram Bio Generator for Indian Creators 2026',
  url: 'https://identitykit.in/tools/instagram-bio-generator',
  description: 'Free AI-powered Instagram bio generator for Indian creators. Get 3 professional bio options instantly — brand-ready, niche-specific, under 150 characters.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  creator: { '@type': 'Organization', name: 'Identity Kit', url: 'https://identitykit.in' },
}

const niches = [
  'Finance & Investing', 'Tech & Gadgets', 'Education & Career', 'Health & Fitness',
  'Beauty & Skincare', 'Food & Recipes', 'Travel & Vlogs', 'Lifestyle',
  'Fashion & Style', 'Gaming', 'Comedy & Entertainment', 'Business & Startup',
  'Motivation & Self-Help', 'Parenting & Family', 'Music & Dance', 'Sports & Cricket',
  'Photography', 'Art & Design', 'Politics & News', 'Sustainability & Environment',
]

const tones = [
  { key: 'professional', label: 'Professional', desc: 'Clean, brand-ready', emoji: '💼' },
  { key: 'fun', label: 'Fun & Quirky', desc: 'Personality-forward', emoji: '😄' },
  { key: 'inspirational', label: 'Inspirational', desc: 'Motivating & bold', emoji: '🔥' },
  { key: 'minimal', label: 'Minimal', desc: 'Short & punchy', emoji: '✨' },
]

const goals = [
  { key: 'brand_deals', label: 'Get Brand Deals', emoji: '🤝' },
  { key: 'followers', label: 'Grow Followers', emoji: '📈' },
  { key: 'sales', label: 'Sell Products/Courses', emoji: '💰' },
  { key: 'community', label: 'Build Community', emoji: '❤️' },
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function InstagramBioGenerator() {
  const [name, setName] = useState('')
  const [niche, setNiche] = useState('Finance & Investing')
  const [city, setCity] = useState('')
  const [tone, setTone] = useState('professional')
  const [goal, setGoal] = useState('brand_deals')
  const [uniqueAngle, setUniqueAngle] = useState('')
  const [followers, setFollowers] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [bios, setBios] = useState<string[]>([])
  const [copied, setCopied] = useState<number | null>(null)
  const [error, setError] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [charCounts, setCharCounts] = useState<number[]>([])

  async function generateBios() {
    if (!niche) return
    setLoading(true)
    setError('')
    setBios([])

    const goalLabel = goals.find(g => g.key === goal)?.label ?? goal
    const toneLabel = tones.find(t => t.key === tone)?.label ?? tone

    const prompt = `You are an expert Instagram bio writer for Indian content creators. Generate exactly 3 different Instagram bio options for a creator with these details:

Name: ${name || 'not specified'}
Niche: ${niche}
City/Location: ${city || 'India'}
Tone: ${toneLabel}
Primary Goal: ${goalLabel}
Unique angle / what makes them different: ${uniqueAngle || 'not specified'}
Follower count: ${followers || 'not specified'}
Contact email: ${email || 'not specified'}

Rules:
- Each bio must be under 150 characters TOTAL (count every character including emojis, spaces, line breaks)
- Use line breaks (\\n) to separate lines — max 4 lines per bio
- Use relevant emojis naturally — 3-5 per bio
- Include a CTA on the last line (e.g. 📩 collabs: email, 👇 link in bio, DM for rates)
- Be specific to India and the Indian creator economy
- If goal is brand deals, make bio clearly signal openness to collaborations
- If followers are mentioned and above 10K, include them as a social proof signal
- Each of the 3 bios should feel meaningfully different in structure and style
- Do NOT include the creator's name unless it adds value
- Do NOT use hashtags in the bio

Return ONLY a JSON array with exactly 3 strings, no other text, no markdown, no explanation. Example format:
["bio one here", "bio two here", "bio three here"]`

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          messages: [{ role: 'user', content: prompt }],
        }),
      })

      const data = await response.json()
      const text = data.content?.[0]?.text ?? ''
      const clean = text.replace(/```json|```/g, '').trim()
      const parsed: string[] = JSON.parse(clean)
      setBios(parsed)
      setCharCounts(parsed.map(b => b.replace(/\\n/g, '\n').length))
    } catch {
      setError('Something went wrong. Please try again.')
    }

    setLoading(false)
  }

  function copyBio(bio: string, i: number) {
    navigator.clipboard.writeText(bio.replace(/\\n/g, '\n'))
    setCopied(i)
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
    ...inputStyle,
    cursor: 'pointer',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff66' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
    paddingRight: 36,
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
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 20px 0; cursor: pointer; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-weight: 700; font-size: 15px; color: rgba(255,255,255,0.9); line-height: 1.5; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
        .faq-a { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.75; margin-top: 12px; }
        .tone-btn { flex: 1; padding: 12px 8px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.15s; text-align: center; font-family: 'Plus Jakarta Sans', sans-serif; }
        .tone-btn.active { background: rgba(255,107,43,0.1); border-color: rgba(255,107,43,0.35); color: #FF8C5A; }
        .goal-btn { flex: 1; padding: 11px 8px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.15s; text-align: center; font-family: 'Plus Jakarta Sans', sans-serif; }
        .goal-btn.active { background: rgba(255,107,43,0.1); border-color: rgba(255,107,43,0.35); color: #FF8C5A; }
        .bio-card { background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 22px; margin-bottom: 12px; transition: border-color 0.2s; }
        .bio-card:hover { border-color: rgba(255,107,43,0.2); }
        .bio-text { font-size: 15px; line-height: 1.75; color: rgba(255,255,255,0.9); white-space: pre-line; margin-bottom: 16px; }
        .copy-btn { background: rgba(255,107,43,0.1); border: 1px solid rgba(255,107,43,0.2); color: #FF8C5A; border-radius: 8px; padding: 7px 16px; font-size: 13px; font-weight: 700; cursor: pointer; font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.15s; }
        .copy-btn:hover { background: rgba(255,107,43,0.2); }
        .copy-btn.copied { background: rgba(76,175,80,0.1); border-color: rgba(76,175,80,0.3); color: #81C784; }
        .char-badge { font-size: 12px; font-weight: 700; padding: 3px 8px; border-radius: 100px; }
        .char-ok { background: rgba(76,175,80,0.1); color: #81C784; }
        .char-warn { background: rgba(255,152,0,0.1); color: #FFB74D; }
        .char-over { background: rgba(255,82,82,0.1); color: #FF5252; }
        .shimmer { background: linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 12px; height: 100px; margin-bottom: 12px; }
        @keyframes shimmer { 0% { background-position: 200% 0 } 100% { background-position: -200% 0 } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
        .bio-card { animation: fadeUp 0.35s ease; }
        @media (max-width: 640px) {
          .g2 { grid-template-columns: 1fr !important; }
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
          <Link href="/" style={{ color: 'rgba(255,255,255,0.35)' }}>Home</Link>
          <span>›</span>
          <Link href="/tools" style={{ color: 'rgba(255,255,255,0.35)' }}>Tools</Link>
          <span>›</span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Instagram Bio Generator</span>
        </div>
      </div>

      <main style={{ maxWidth: 860, margin: '0 auto', padding: '0 20px 80px' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', paddingTop: 28, paddingBottom: 44 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 700, color: '#FF8C5A', marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            ✨ AI-Powered · Free for Indian Creators
          </div>
          <h1 className="hero-title" style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
            Instagram Bio Generator<br />for Indian Creators 2026
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto 10px', lineHeight: 1.7 }}>
            Get 3 AI-generated Instagram bio options instantly — brand-ready, niche-specific, under 150 characters. Built for the Indian creator economy.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>Free forever · No login required · AI-powered</p>
        </div>

        {/* FORM */}
        <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: '32px 28px', marginBottom: 16 }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 18, marginBottom: 6 }}>Tell us about yourself</div>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', marginBottom: 28 }}>The more specific you are, the better the bios. Only niche is required.</p>

          {/* Row 1 — niche + city */}
          <div className="g2" style={{ marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>Your Niche *</label>
              <select style={selectStyle} value={niche} onChange={e => setNiche(e.target.value)}>
                {niches.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Your City</label>
              <input style={inputStyle} placeholder="Mumbai, Delhi, Bangalore..." value={city} onChange={e => setCity(e.target.value)} />
            </div>
          </div>

          {/* Row 2 — name + followers */}
          <div className="g2" style={{ marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>Your Name / Handle</label>
              <input style={inputStyle} placeholder="Priya, @priyainvests..." value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Followers (for social proof)</label>
              <input style={inputStyle} placeholder="e.g. 45K, 1.2L..." value={followers} onChange={e => setFollowers(e.target.value)} />
            </div>
          </div>

          {/* Unique angle */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>What makes you different? <span style={{ color: 'rgba(255,255,255,0.2)', fontWeight: 400, textTransform: 'none' }}>(your unique angle)</span></label>
            <input style={inputStyle} placeholder="e.g. I explain stocks in simple Hindi, ex-CA turned creator, plant-based recipes under ₹100..." value={uniqueAngle} onChange={e => setUniqueAngle(e.target.value)} />
          </div>

          {/* Email */}
          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>Business Email <span style={{ color: 'rgba(255,255,255,0.2)', fontWeight: 400, textTransform: 'none' }}>(for CTA in bio)</span></label>
            <input style={inputStyle} placeholder="collabs@yourname.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          {/* Tone */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ ...labelStyle, marginBottom: 10 }}>Tone</label>
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
          <div style={{ marginBottom: 28 }}>
            <label style={{ ...labelStyle, marginBottom: 10 }}>Primary Goal</label>
            <div className="goal-row" style={{ display: 'flex', gap: 8 }}>
              {goals.map(g => (
                <button key={g.key} className={`goal-btn${goal === g.key ? ' active' : ''}`} onClick={() => setGoal(g.key)}>
                  <div style={{ fontSize: 20, marginBottom: 3 }}>{g.emoji}</div>
                  <div style={{ fontWeight: 700, fontSize: 12 }}>{g.label}</div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={generateBios}
            disabled={loading}
            style={{ width: '100%', background: loading ? 'rgba(255,107,43,0.4)' : '#FF6B2B', border: 'none', color: '#fff', padding: '16px 24px', borderRadius: 14, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, cursor: loading ? 'not-allowed' : 'pointer', transition: 'all 0.2s', letterSpacing: '-0.3px' }}
            onMouseEnter={e => { if (!loading) { (e.target as HTMLButtonElement).style.background = '#FF8C5A'; (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)' } }}
            onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = loading ? 'rgba(255,107,43,0.4)' : '#FF6B2B'; (e.target as HTMLButtonElement).style.transform = 'none' }}
          >
            {loading ? '✨ Generating your bios...' : '✨ Generate 3 Instagram Bios →'}
          </button>

          {error && (
            <div style={{ marginTop: 14, padding: '12px 16px', background: 'rgba(255,82,82,0.08)', border: '1px solid rgba(255,82,82,0.2)', borderRadius: 10, fontSize: 14, color: '#FF5252' }}>
              {error}
            </div>
          )}
        </div>

        {/* LOADING SHIMMER */}
        {loading && (
          <div style={{ marginBottom: 48 }}>
            <div className="shimmer" />
            <div className="shimmer" />
            <div className="shimmer" />
          </div>
        )}

        {/* RESULTS */}
        {bios.length > 0 && !loading && (
          <div style={{ marginBottom: 52 }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, marginBottom: 6 }}>Your 3 Bio Options</div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>Copy any bio and paste directly into your Instagram profile settings.</p>
            {bios.map((bio, i) => {
              const displayBio = bio.replace(/\\n/g, '\n')
              const charCount = displayBio.length
              const charClass = charCount <= 130 ? 'char-ok' : charCount <= 150 ? 'char-warn' : 'char-over'
              return (
                <div key={i} className="bio-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Option {i + 1}</div>
                    <span className={`char-badge ${charClass}`}>{charCount}/150 chars</span>
                  </div>
                  <div className="bio-text">{displayBio}</div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <button className={`copy-btn${copied === i ? ' copied' : ''}`} onClick={() => copyBio(bio, i)}>
                      {copied === i ? '✓ Copied!' : 'Copy Bio'}
                    </button>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>Paste directly into Instagram → Edit Profile → Bio</span>
                  </div>
                </div>
              )
            })}
            <button
              onClick={generateBios}
              style={{ width: '100%', marginTop: 8, background: 'transparent', border: '1px dashed rgba(255,107,43,0.3)', color: '#FF6B2B', borderRadius: 12, padding: '13px', fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 14, cursor: 'pointer' }}
            >
              ↻ Generate 3 more options
            </button>
          </div>
        )}

        {/* HOW TO USE */}
        <div style={{ background: 'rgba(255,107,43,0.05)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 16, padding: '20px 24px', marginBottom: 52 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: '#FF9A6B', marginBottom: 10 }}>💡 How to update your Instagram bio</div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
            1. Copy your chosen bio above<br />
            2. Open Instagram → tap your profile picture → Edit Profile<br />
            3. Tap the Bio field → paste your new bio → Done<br />
            4. Add your Identity Kit link in the "Website" or "Link in bio" field so brands can see your full media kit instantly
          </div>
        </div>

        {/* TIPS */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
          What Makes a Great Instagram Bio for Indian Creators?
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>
          Study what the top Indian creators put in their bios and why it works.
        </p>
        <div style={{ marginBottom: 52 }}>
          {[
            { icon: '🎯', title: 'Be specific about your niche', desc: '"Finance tips for Indian millennials 📈" gets more brand DMs than "Content Creator". Brands search Instagram by niche. The more specific your bio, the more relevant the inbound.' },
            { icon: '📍', title: 'Include your city or India', desc: 'Local brands and talent managers search by city. "Mumbai-based" or "Delhi creator" in your bio attracts local collabs. "India" alone helps international brands confirm market relevance.' },
            { icon: '📊', title: 'Add one key stat if above 10K', desc: 'Once you cross 10K followers, put it in your bio. "45K finance enthusiasts 📊" or "Trusted by 1L+ subscribers" is social proof that brands respond to. Below 10K, focus on your angle instead.' },
            { icon: '🔥', title: 'State your unique angle clearly', desc: 'The best Indian creator bios tell you something you cannot guess from just the niche. "CA turned meme-maker explaining taxes 😂" or "Surat street food reviewed honestly 🍜" — a specific angle makes you memorable.' },
            { icon: '📩', title: 'Always have one CTA', desc: 'End every bio with exactly one call to action. For brand deals: "📩 collabs@email.com". For link clicks: "👇 Media kit + rates". Having two CTAs halves your conversion rate.' },
            { icon: '🔗', title: 'Link your Identity Kit profile', desc: 'Your Identity Kit link in bio gives brands everything they need in one click — your media kit, rate card, and creator CV. Brands who land on your profile can go from "who is this?" to "let\'s collab" in 60 seconds.' },
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

        {/* EXAMPLES */}
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>
          Instagram Bio Examples for Indian Creators — by Niche
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.7 }}>Real-style examples you can adapt for your own profile.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 52 }}>
          {[
            { niche: 'Finance', emoji: '💹', bio: '📊 Stock market in simple Hindi\n🏦 Ex-banker, now your money guide\n45K learning with me\n📩 collabs@finwithme.in' },
            { niche: 'Fitness', emoji: '💪', bio: '🏋️ Desi fitness, no gym required\nTransforming 10K+ Mumbai locals\n💯 Free workout every Monday\n👇 Program link in bio' },
            { niche: 'Food', emoji: '🍳', bio: '🍜 Honest street food reviews | Surat\nNo filters. No PR. Just real food.\n📍 New spot every Friday\n📩 foodcollabs@gmail.com' },
            { niche: 'Beauty', emoji: '💄', bio: '✨ Skincare for Indian skin tones\n🚫 No filters | Real results only\nTrusted by 80K desi girls\n👇 Routine guide in bio' },
            { niche: 'Tech', emoji: '💻', bio: '📱 Honest gadget reviews in Hindi\n🔍 Before you buy, watch me review\nDelhi | 1.2L subscribers on YT\n📩 tech@reviewwala.in' },
            { niche: 'Education', emoji: '📚', bio: '🎯 UPSC tips that actually work\nCleared Prelims 2024 | Now guiding you\n50K aspirants learning together\n👇 Free notes — link in bio' },
          ].map(ex => (
            <div key={ex.niche} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ fontSize: 20 }}>{ex.emoji}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>{ex.niche}</span>
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, whiteSpace: 'pre-line', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{ex.bio}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.1), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 24, padding: '48px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden', marginBottom: 64 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(255,107,43,0.1), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔗</div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.5px' }}>
            Now put the link in your bio that actually converts
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.75, maxWidth: 460, margin: '0 auto 28px' }}>
            Your new bio will get brands to your profile. Your Identity Kit link gives them everything they need to say yes — media kit, rate card, creator CV in one professional page.
          </p>
          <Link href="/auth?mode=signup" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 14, padding: '14px 36px', fontWeight: 800, fontSize: 15, letterSpacing: '-0.3px' }}>
            Build my free Identity Kit →
          </Link>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', marginTop: 14 }}>Free forever. No credit card. 10 minutes.</p>
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
              { href: '/tools/instagram-engagement-calculator', tag: 'Free Tool', title: 'Instagram Engagement Rate Calculator India' },
              { href: '/tools/influencer-rate-calculator', tag: 'Free Tool', title: 'Influencer Rate Calculator — What to Charge Brands' },
              { href: '/tools/youtube-money-calculator', tag: 'Free Tool', title: 'YouTube Money Calculator India 2026' },
              { href: '/tools/gst-invoice-generator', tag: 'Free Tool', title: 'GST Invoice Generator for Indian Creators' },
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
