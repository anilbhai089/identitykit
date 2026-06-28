import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Instagram Reels vs YouTube Shorts in India 2026: Which Pays More? (Data Comparison)',
  description: 'Instagram Reels vs YouTube Shorts India 2026 — complete data comparison. RPM, brand deal rates, growth speed, algorithm differences, niche-by-niche verdict, and exactly which platform Indian creators should choose based on their goals. Real rupee numbers, no guessing.',
  keywords: 'instagram reels vs youtube shorts india, reels vs shorts india 2026, which is better reels or shorts india, instagram vs youtube shorts earnings india, reels vs shorts which pays more india, instagram reels earnings india, youtube shorts vs instagram india creator',
  openGraph: {
    title: 'Instagram Reels vs YouTube Shorts in India 2026: Which Pays More? (Data Comparison)',
    description: 'Instagram Reels: fastest brand deals, no direct ad revenue. YouTube Shorts: direct ad revenue (₹5–₹30/1K views), slower brand deals. Which is right for you? Full niche-by-niche India data breakdown.',
    url: 'https://identitykit.in/blog/instagram-reels-vs-youtube-shorts-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/reels-vs-shorts-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/instagram-reels-vs-youtube-shorts-india-2026',
  },
}

const comparisons = [
  {
    category: 'Direct Ad Revenue',
    icon: '💰',
    reels: { verdict: '❌ None in India', detail: 'Instagram does not pay Indian creators for Reel views. No RPM, no ad revenue sharing. Income comes exclusively from brand deals, affiliate links, and your own products.', score: 10, color: '#FF5252' },
    shorts: { verdict: '✅ ₹5–₹30 per 1K views', detail: 'YouTube Shorts pays 45% of the creator pool to eligible Indian creators via YPP (1,000 subs + 10M Shorts views in 90 days). Finance Shorts earn ₹20–₹60/1K views. Entertainment earns ₹5–₹15/1K views.', score: 62, color: '#4CAF50' },
    winner: 'shorts',
    winnerLabel: 'YouTube Shorts wins',
  },
  {
    category: 'Brand Deal Rates',
    icon: '🤝',
    reels: { verdict: '✅ ₹5,000–₹2,00,000/Reel', detail: 'Instagram is India\'s #1 platform for brand deals. 60%+ of Indian influencer marketing budget goes to Instagram creators. Brands discover creators here first. At 10K followers, Reels creators earn ₹5,000–₹30,000 per sponsored Reel. Beauty, fashion, food, and lifestyle brands pay premium rates.', score: 92, color: '#4CAF50' },
    shorts: { verdict: '✅ ₹3,000–₹1,00,000/Short', detail: 'YouTube Shorts brand deals are growing but still secondary to Instagram for most brands. Finance, tech, and EdTech brands pay higher per-view rates on Shorts because audiences have higher purchasing power. At 50K subscribers, tech Shorts creators earn ₹20,000–₹80,000 per sponsored Short.', score: 65, color: '#FF9800' },
    winner: 'reels',
    winnerLabel: 'Instagram Reels wins',
  },
  {
    category: 'Growth Speed (0 to 10K followers)',
    icon: '📈',
    reels: { verdict: '✅ 2–5 months', detail: 'Instagram\'s algorithm heavily favours Reels distribution in 2026. New accounts with zero followers can get 50,000–500,000 Reel views with strong content. Trending audio, viral formats, and engagement velocity drive discovery. India\'s 500M+ monthly active Instagram users give massive organic reach potential.', score: 85, color: '#4CAF50' },
    shorts: { verdict: '✅ 1–3 months', detail: 'YouTube Shorts is the fastest platform for growing subscribers in India in 2026. The "Videos For You" discovery feed pushes Shorts to non-subscribers aggressively. A single viral Short can add 10,000–50,000 subscribers. New channels with zero subscribers regularly hit 1 million Shorts views.', score: 95, color: '#4CAF50' },
    winner: 'shorts',
    winnerLabel: 'YouTube Shorts wins (marginally)',
  },
  {
    category: 'Content Lifespan',
    icon: '⏱️',
    reels: { verdict: '⚠️ 24–72 hours', detail: 'Instagram Reels typically get 80–90% of their total views within the first 72 hours of posting. After that, reach drops sharply. Content tied to trending audio or viral formats has an even shorter window. You must post consistently to maintain reach — no compounding effect.', score: 25, color: '#FF5252' },
    shorts: { verdict: '✅ Weeks to months', detail: 'YouTube Shorts have significantly longer content lifespans than Reels. Because YouTube is a search engine, Shorts surface in search results and recommendations for weeks and months after posting. Evergreen topics — "how to file ITR", "what is SIP" — generate views indefinitely. Compounding content value over time.', score: 75, color: '#4CAF50' },
    winner: 'shorts',
    winnerLabel: 'YouTube Shorts wins',
  },
  {
    category: 'Audience Quality (Purchasing Power)',
    icon: '🎯',
    reels: { verdict: '⚠️ Mixed — skews younger', detail: 'Instagram\'s Indian audience skews 18–34, urban, trend-driven. High engagement but more casual purchasing intent. Brand deals work because of aspiration and discovery. Finance, high-ticket purchases, and B2B content convert less efficiently than entertainment or lifestyle content.', score: 60, color: '#FF9800' },
    shorts: { verdict: '✅ Higher intent audience', detail: 'YouTube\'s Indian audience skews slightly older (22–40) and comes with stronger purchase intent. Viewers are in "search mode" — they came looking for information or solutions. Finance, tech, and education Shorts convert to purchases and account signups at 2–5x the rate of Instagram Reels for the same content.', score: 80, color: '#4CAF50' },
    winner: 'shorts',
    winnerLabel: 'YouTube Shorts wins',
  },
  {
    category: 'Ease of Getting First Brand Deal',
    icon: '🚀',
    reels: { verdict: '✅ From 1,000 followers', detail: 'Indian brands discover creators on Instagram first. Small D2C brands, beauty startups, and food brands actively DM creators with as few as 1,000–5,000 followers for gifted collaborations and paid deals. The Instagram DM system makes brand-creator communication seamless. First paid deal typically at 3,000–5,000 followers.', score: 95, color: '#4CAF50' },
    shorts: { verdict: '⚠️ From 10,000 subscribers', detail: 'Brands approach YouTube creators much later in the journey — typically at 10,000–25,000 subscribers. YouTube\'s lack of a native DM discovery system means most YouTube creator brand deals happen via email or through influencer marketing platforms. Outreach-dependent at early stages.', score: 45, color: '#FF9800' },
    winner: 'reels',
    winnerLabel: 'Instagram Reels wins',
  },
  {
    category: 'Long-Form Ecosystem / Passive Income',
    icon: '🌱',
    reels: { verdict: '❌ No long-form upsell', detail: 'Instagram Reels do not funnel viewers into longer content on the same platform. There is no long-form video ecosystem on Instagram with ad revenue. You must convert followers into buyers or brand deal targets — there is no passive income from content itself.', score: 20, color: '#FF5252' },
    shorts: { verdict: '✅ Entire YouTube ecosystem', detail: 'This is YouTube Shorts\' biggest structural advantage. Every Shorts subscriber can become a long-form viewer where RPM is ₹50–₹200 — 6–10x more than Shorts. Your Shorts channel feeds your long-form channel, which earns from ads indefinitely. A 3-year-old finance video still earns every day.', score: 98, color: '#4CAF50' },
    winner: 'shorts',
    winnerLabel: 'YouTube Shorts wins',
  },
  {
    category: 'Competition Level in India',
    icon: '⚔️',
    reels: { verdict: '⚠️ Very High', detail: '92% of Indian survey respondents prefer Reels over other short-form formats (Meta IPSOS 2025). With 500M+ Indian users and every creator on Instagram, Reels is the most competitive platform in India. Standing out requires consistent posting, strong hooks, and on-trend audio to compete with millions of creators.', score: 30, color: '#FF9800' },
    shorts: { verdict: '✅ Lower than Reels', detail: 'YouTube Shorts is still significantly less saturated than Instagram Reels for most niches in India. The barrier to entry (needing 10M views for full YPP) means fewer creators are seriously building here. Educational, finance, and career content in Hindi has very low competition with strong organic reach.', score: 65, color: '#4CAF50' },
    winner: 'shorts',
    winnerLabel: 'YouTube Shorts wins',
  },
]

const nicheVerdicts = [
  { niche: 'Personal Finance & Investing', icon: '💹', reels: '★★★☆☆', shorts: '★★★★★', winner: 'YouTube Shorts', reason: 'Finance YouTube audiences actively search for content and convert to demat accounts at high rates. ₹20–₹60 Shorts RPM + demat referrals (₹500–₹2,000/signup) = far higher total income than Instagram brand deals alone.' },
  { niche: 'Beauty & Skincare', icon: '✨', reels: '★★★★★', shorts: '★★★☆☆', winner: 'Instagram Reels', reason: 'Beauty is Instagram\'s strongest niche. 40,000+ D2C beauty brands in India seed products via Instagram micro-creators. Brand deal volume is unmatched. Visual appeal is central to the format.' },
  { niche: 'Tech & Gadgets', icon: '📱', reels: '★★★☆☆', shorts: '★★★★★', winner: 'YouTube Shorts', reason: 'Tech audience searches YouTube for reviews and comparisons. Shorts pull viewers into long-form reviews where Amazon affiliate commissions (3–8% on gadgets) and brand deals compound. Finance + tech is the highest-earning YouTube combo in India.' },
  { niche: 'Food & Cooking', icon: '🍛', reels: '★★★★★', shorts: '★★★★☆', winner: 'Instagram Reels', reason: 'Food content is extremely visual and performs best on Instagram. Regional food creators get 3–4x engagement on Reels vs Shorts. Food delivery and packaged food brands prefer Instagram creators for brand deals.' },
  { niche: 'Fitness & Wellness', icon: '💪', reels: '★★★★☆', shorts: '★★★★☆', winner: 'Both — start Reels, add Shorts', reason: 'Fitness brand deals are strong on Instagram. YouTube Shorts fitness channels convert well to long-form where supplement affiliate commissions and online coaching upsells live. Build both simultaneously.' },
  { niche: 'Education & Career', icon: '🎓', reels: '★★★☆☆', shorts: '★★★★★', winner: 'YouTube Shorts', reason: 'EdTech brands pay 10–40% affiliate commissions on course enrollments. YouTube\'s search engine surfaces education Shorts to students actively looking for help. Content stays relevant for years — a JEE tips Short from 2024 still gets views in 2026.' },
  { niche: 'Fashion & Lifestyle', icon: '👗', reels: '★★★★★', shorts: '★★★☆☆', winner: 'Instagram Reels', reason: 'Fashion is entirely visual and trend-driven. Instagram Reels is the native home for fashion content in India. Shopping features, product tags, and fashion brand budgets are all built for Instagram. YouTube Shorts has almost no fashion brand deal ecosystem.' },
  { niche: 'Comedy & Entertainment', icon: '😂', reels: '★★★★★', shorts: '★★★★☆', winner: 'Instagram Reels (slightly)', reason: 'Entertainment content goes viral fastest on Instagram Reels. However, entertainment YouTube channels can build massive subscriber bases via Shorts and earn from long-form content. Both work — Instagram for brand deals, YouTube for ad revenue at scale.' },
]

const strategies = [
  {
    title: 'The "Reels First" Strategy',
    icon: '📸',
    color: '#E91E63',
    forWho: 'Beauty, fashion, food, fitness creators wanting fastest first brand deal',
    steps: [
      'Post 5 Reels per week on Instagram for 90 days — prioritise niche over trends',
      'Add affiliate links to bio link (EarnKaro, Amazon) from week 1 to earn passive income immediately',
      'Start pitching small D2C brands in your niche at 1,000 followers',
      'Build your Identity Kit creator profile before first pitch — brands check it within minutes',
      'Once Instagram brand deals are flowing at month 3–4, open a YouTube channel and repurpose top Reels as Shorts',
    ],
    income3Months: '₹5,000–₹25,000',
    income12Months: '₹30,000–₹1,50,000',
  },
  {
    title: 'The "Shorts First" Strategy',
    icon: '▶️',
    color: '#FF0000',
    forWho: 'Finance, tech, education creators wanting long-term passive income',
    steps: [
      'Post 5 Shorts per week targeting searchable keywords in your niche — not just trending topics',
      'Simultaneously post 1–2 long-form videos per week to build the ad revenue engine',
      'Add affiliate links to YouTube description from day 1 (Amazon Associates, demat referrals)',
      'Hit 1,000 subscribers + 10M Shorts views to unlock YPP ad revenue',
      'Once YPP is active and long-form is growing, build Instagram as a secondary brand deal channel',
    ],
    income3Months: '₹0–₹5,000',
    income12Months: '₹20,000–₹2,00,000',
  },
  {
    title: 'The "Dual Platform" Strategy',
    icon: '⚡',
    color: '#FF6B2B',
    forWho: 'Creators 6+ months in, or those with 4+ hours/day for content creation',
    steps: [
      'Create content in vertical video format once — post natively to both Reels and Shorts the same day',
      'Customise only the hook and caption for each platform\'s algorithm and audience expectations',
      'Use Instagram for brand deal income and fast follower growth',
      'Use YouTube for ad revenue, affiliate income, and long-form viewer conversion',
      'Link both platforms in your Identity Kit profile to show brands your combined reach',
    ],
    income3Months: '₹8,000–₹30,000',
    income12Months: '₹50,000–₹3,00,000',
  },
]

export default function ReelsVsShortsIndiaPage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', color: '#fff', fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; overflow: hidden; }
        .card:hover { border-color: rgba(255,107,43,0.2); }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .hero-pad { padding: 48px 16px 32px !important; }
          .content-pad { padding: 0 16px 60px !important; }
          .two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Nav */}
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
            {['Platform Comparison', 'Short-Form Video', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Instagram Reels vs YouTube Shorts India 2026:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Which Pays More? (Data Comparison)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Instagram Reels: no direct ad revenue in India, but the fastest path to brand deals at 1,000 followers. YouTube Shorts: ₹5–₹30 per 1,000 views from ads, slower brand deals, but a long-form income engine attached. Here is the complete data breakdown — by niche, by income goal, by platform strength.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Reels vs Shorts India 2026</div>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div>
                <div style={{ fontWeight: 700, color: '#E91E63', fontSize: 14, marginBottom: 10 }}>📸 Choose Instagram Reels if:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {[
                    'You are in beauty, fashion, food, or lifestyle niches',
                    'You want your first brand deal within 2–4 months',
                    'Your audience is 18–28 year old urban Indians',
                    'You want to build a following fast and pitch brands directly',
                    'You can post 5 Reels per week consistently',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: '#4CAF50', flexShrink: 0, fontSize: 13 }}>✓</span>
                      <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#FF0000', fontSize: 14, marginBottom: 10 }}>▶️ Choose YouTube Shorts if:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {[
                    'You are in finance, tech, education, or career niches',
                    'You want passive ad revenue + long-form income long-term',
                    'You can also post 1–2 long-form videos per week',
                    'You are patient — meaningful ad income takes 6–12 months',
                    'Your content is informational / searchable, not trend-driven',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: '#4CAF50', flexShrink: 0, fontSize: 13 }}>✓</span>
                      <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Reels vs Shorts India 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Instagram does not pay Indian creators directly for Reel views in 2026 — income comes from brand deals, affiliate marketing, and own products.',
                'YouTube Shorts pays Indian creators ₹5–₹30 per 1,000 views from the YPP creator pool after the creator reaches 1,000 subscribers and 10 million Shorts views in 90 days.',
                '92% of Indian survey respondents prefer Instagram Reels over other short-form formats, making it India\'s dominant short-form platform by preference (Meta-IPSOS 2025).',
                'YouTube Shorts generates over 70 billion daily views globally in 2026, with India being one of its largest markets.',
                'Instagram Reels engagement rate is approximately 33% higher than comparable short-form platforms in India, driven by the sharing, saving, and Stories cross-posting behaviour.',
                'YouTube Shorts has significantly longer content lifespan than Instagram Reels — Shorts surface in search and recommendations for weeks to months after posting versus 24–72 hours for Reels.',
                'Finance and tech YouTube Shorts creators in India earn ₹20–₹60 per 1,000 views — the highest short-form RPM of any creator category in India.',
                'The optimal strategy for Indian creators is platform pairing: Instagram Reels for brand deal income and fast growth, YouTube Shorts as a subscriber funnel to long-form ad revenue.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Head-to-head comparison cards */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Reels vs Shorts — 8-Category Head-to-Head for Indian Creators</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 28 }}>Every metric that matters for Indian creators — with real data, not platform marketing claims.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {comparisons.map((comp, i) => (
                <div key={i} className="card">
                  {/* Header */}
                  <div style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 20 }}>{comp.icon}</span>
                      <span style={{ fontWeight: 800, fontSize: 16 }}>{comp.category}</span>
                    </div>
                    <span style={{ background: comp.winner === 'reels' ? 'rgba(233,30,99,0.12)' : comp.winner === 'shorts' ? 'rgba(255,0,0,0.1)' : 'rgba(255,107,43,0.1)', color: comp.winner === 'reels' ? '#E91E63' : comp.winner === 'shorts' ? '#FF6B2B' : '#FF6B2B', border: `1px solid ${comp.winner === 'reels' ? 'rgba(233,30,99,0.25)' : 'rgba(255,107,43,0.25)'}`, padding: '3px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>
                      🏆 {comp.winnerLabel}
                    </span>
                  </div>

                  {/* Side-by-side */}
                  <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,0.03)' }}>
                    {/* Reels */}
                    <div style={{ padding: '18px 20px', background: '#07070D', borderRight: '1px solid rgba(255,255,255,0.04)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                        <span style={{ fontSize: 16 }}>📸</span>
                        <span style={{ fontWeight: 700, color: '#E91E63', fontSize: 13 }}>Instagram Reels</span>
                      </div>
                      <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 14, marginBottom: 8 }}>{comp.reels.verdict}</div>
                      <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>{comp.reels.detail}</div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 4 }}>
                          <div style={{ width: `${comp.reels.score}%`, height: '100%', borderRadius: 3, background: comp.reels.color }} />
                        </div>
                        <span style={{ fontSize: 11, color: comp.reels.color, fontWeight: 700, minWidth: 24 }}>{comp.reels.score}</span>
                      </div>
                    </div>

                    {/* Shorts */}
                    <div style={{ padding: '18px 20px', background: '#07070D' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                        <span style={{ fontSize: 16 }}>▶️</span>
                        <span style={{ fontWeight: 700, color: '#FF6B2B', fontSize: 13 }}>YouTube Shorts</span>
                      </div>
                      <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 14, marginBottom: 8 }}>{comp.shorts.verdict}</div>
                      <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>{comp.shorts.detail}</div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 4 }}>
                          <div style={{ width: `${comp.shorts.score}%`, height: '100%', borderRadius: 3, background: comp.shorts.color }} />
                        </div>
                        <span style={{ fontSize: 11, color: comp.shorts.color, fontWeight: 700, minWidth: 24 }}>{comp.shorts.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scorecard */}
            <div style={{ marginTop: 24, background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 14, padding: '20px 24px' }}>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 16 }}>📊 Overall Scorecard — Indian Creators 2026</div>
              <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { platform: '📸 Instagram Reels', wins: 'Brand deals, ease of first deal, food/beauty/fashion niches', score: '2/8 categories' },
                  { platform: '▶️ YouTube Shorts', wins: 'Ad revenue, content lifespan, audience quality, long-form ecosystem, competition level, growth speed', score: '5/8 categories' },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '14px 18px' }}>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{item.platform}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, marginBottom: 8 }}>Wins: {item.wins}</div>
                    <div style={{ fontWeight: 800, color: '#FF6B2B', fontSize: 18 }}>{item.score}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 14, background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.18)', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
                <span style={{ color: '#6C63FF', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>VERDICT</span>
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>YouTube Shorts wins more categories overall — but Instagram Reels wins the categories that matter most for early-career Indian creators (brand deals and speed to first income). The real answer: use both, but choose your primary platform based on your niche and income goal.</span>
              </div>
            </div>
          </section>

          {/* Niche-by-niche verdicts */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Which Platform Wins by Niche — India 2026</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Platform choice should be driven by your niche — not by which platform you personally use more. Here is the definitive niche-by-niche verdict for Indian creators.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {nicheVerdicts.map((niche, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 22 }}>{niche.icon}</span>
                      <span style={{ fontWeight: 800, fontSize: 15 }}>{niche.niche}</span>
                    </div>
                    <span style={{ background: niche.winner.includes('Reels') ? 'rgba(233,30,99,0.1)' : niche.winner.includes('YouTube') ? 'rgba(255,0,0,0.1)' : 'rgba(255,107,43,0.1)', color: niche.winner.includes('Reels') ? '#E91E63' : niche.winner.includes('YouTube') ? '#FF6B2B' : '#FF9800', border: '1px solid rgba(255,107,43,0.2)', padding: '3px 10px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>🏆 {niche.winner}</span>
                  </div>
                  <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
                    <div style={{ background: 'rgba(233,30,99,0.05)', borderRadius: 8, padding: '8px 12px' }}>
                      <div style={{ fontSize: 11, color: '#E91E63', fontWeight: 700, marginBottom: 4 }}>📸 Reels rating</div>
                      <div style={{ fontSize: 16 }}>{niche.reels}</div>
                    </div>
                    <div style={{ background: 'rgba(255,0,0,0.05)', borderRadius: 8, padding: '8px 12px' }}>
                      <div style={{ fontSize: 11, color: '#FF6B2B', fontWeight: 700, marginBottom: 4 }}>▶️ Shorts rating</div>
                      <div style={{ fontSize: 16 }}>{niche.shorts}</div>
                    </div>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.6 }}>{niche.reason}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 3 Strategies */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>3 Platform Strategies for Indian Creators in 2026</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Choose the strategy that matches your niche, timeline, and content capacity.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {strategies.map((strat, i) => (
                <div key={i} className="card">
                  <div style={{ background: `linear-gradient(135deg, ${strat.color}15, ${strat.color}05)`, borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                        <span style={{ fontSize: 22 }}>{strat.icon}</span>
                        <span style={{ fontWeight: 800, fontSize: 17 }}>{strat.title}</span>
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Best for: {strat.forWho}</div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, marginBottom: 2 }}>Income at 12 months</div>
                      <div style={{ fontWeight: 800, color: '#4CAF50', fontSize: 16 }}>{strat.income12Months}</div>
                    </div>
                  </div>
                  <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {strat.steps.map((step, j) => (
                        <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                          <div style={{ background: `${strat.color}20`, color: strat.color, borderRadius: 100, minWidth: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, flexShrink: 0 }}>{j + 1}</div>
                          <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,0.02)' }}>
                    <div style={{ padding: '12px 20px', background: '#07070D' }}>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 }}>Income at 3 months</div>
                      <div style={{ fontWeight: 700, color: '#FF9800', fontSize: 15 }}>{strat.income3Months}</div>
                    </div>
                    <div style={{ padding: '12px 20px', background: '#07070D' }}>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 }}>Income at 12 months</div>
                      <div style={{ fontWeight: 700, color: '#4CAF50', fontSize: 15 }}>{strat.income12Months}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.18)', borderRadius: 14, padding: '24px 28px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>Whichever platform you choose — brands will check your media kit</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>Identity Kit gives you one professional link showing your Reels stats, Shorts stats, niche, and rate card — so you&apos;re ready for any brand on any platform. Free, takes 10 minutes.</div>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '12px 22px', borderRadius: 10, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build Your Profile Free →
            </Link>
          </div>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'Does Instagram pay for Reels views in India?', a: 'No. Instagram does not pay Indian creators directly for Reel views in 2026. There is no ad revenue sharing programme for Reels in India. Indian creators earn from Instagram through brand deals and sponsorships, affiliate marketing via bio link, Super Thanks-equivalent features (Gifts in Live), and their own products or services. The absence of direct Reel monetisation is why Instagram brand deals are so central to Indian creator income — it is the only meaningful income stream from the platform itself.' },
                { q: 'Which pays more — Instagram Reels or YouTube Shorts in India?', a: 'It depends on your niche and income model. For total 12-month income, YouTube Shorts typically earns more because of ad revenue + long-form video income + affiliate commissions compounding over time. For fastest first income (within 2–4 months), Instagram Reels wins because brand deals are accessible at 1,000–5,000 followers without any monetisation threshold. Finance and tech creators earn significantly more on YouTube. Beauty, food, and fashion creators earn more on Instagram.' },
                { q: 'Can I post the same video on both Reels and Shorts?', a: 'Yes — and most successful Indian creators do. The video format (vertical 9:16, 60–90 seconds) works on both platforms. However, you should customise the hook and caption for each platform. Instagram Reels performs best with trending audio, emotional hooks, and trend-driven content. YouTube Shorts performs best with searchable titles, clear value hooks ("How to..." or "5 ways to..."), and informational content. Same video, different packaging for maximum reach on both platforms.' },
                { q: 'How many views do you need on Reels vs Shorts to earn ₹10,000/month?', a: 'On Instagram Reels: you cannot earn ₹10,000/month directly from views — you need brand deals. At 5,000–10,000 followers with strong engagement, one paid brand Reel earns ₹5,000–₹20,000. On YouTube Shorts with ad revenue: you need approximately 5–10 lakh Shorts views per month in a general niche, or 1.5–3 lakh views in a finance niche. Most Indian creators reach ₹10,000/month from Shorts ad revenue after 9–14 months of consistent posting.' },
                { q: 'Which platform is growing faster in India — Reels or Shorts?', a: 'Both are growing rapidly in India. Instagram has 500M+ monthly active Indian users and 92% Reels preference (Meta-IPSOS 2025). YouTube Shorts is growing at 36% year-over-year globally in 2026 with India as one of its top markets. For creator growth rate (follower acquisition speed), YouTube Shorts currently grows channels faster in most niches because of lower competition and stronger algorithmic push to non-subscribers. For audience size, Instagram leads.' },
                { q: 'Should I use Reels or Shorts for affiliate marketing in India?', a: 'YouTube Shorts converts better for high-consideration affiliate products (fintech apps, edtech courses, hosting). The audience is in search/discovery mode with higher purchase intent. Instagram Reels converts better for product-based affiliate deals (beauty, fashion, food, daily-use products) — audiences are in discovery mode and impulse purchases are common. For demat account referrals (highest-paying affiliate opportunity in India at ₹500–₹2,000/signup), YouTube Shorts converts 2–5x better than Instagram Reels.' },
                { q: 'What is the algorithm difference between Reels and Shorts?', a: 'Instagram Reels algorithm prioritises: engagement velocity in the first hour (likes, comments, shares, saves), trending audio usage, watch completion rate, and rewatches. New accounts can go viral with zero followers. Content typically peaks within 48–72 hours. YouTube Shorts algorithm prioritises: click-through rate from thumbnail and first frame, watch completion rate, searchable keywords in title and description, and connection to a long-form channel. Content can surface in search and recommendations for weeks to months after posting. Shorts that perform well become evergreen — Reels rarely do.' },
                { q: 'Which platform is better for regional language content in India?', a: 'Both platforms perform well for regional language content, but YouTube has a structural advantage. Over 65% of Indian internet users prefer content in regional languages, and YouTube has deep Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, and Punjabi content ecosystems with established advertising categories and RPM. Regional language YouTube channels in finance and education consistently reach 10 lakh+ subscribers. Instagram Reels regional content is strong for entertainment and food, but brand deal budgets for regional-language Reels are lower than for English or Hindi content.' },
              ].map((item, i) => (
                <div key={i} className="card" style={{ padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 10 }}>{item.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: 14 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related + tools */}
          <div style={{ background: 'rgba(255,107,43,0.05)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 14, padding: '20px 24px', marginBottom: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Want to know exactly what to charge for your Reels or Shorts brand deals?</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Use our free Influencer Rate Calculator — enter your platform, niche, and follower count.</div>
            </div>
            <Link href="/tools/influencer-rate-calculator" style={{ background: 'rgba(255,107,43,0.15)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.3)', padding: '10px 18px', borderRadius: 10, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Calculate My Rate →
            </Link>
          </div>

          {/* Related articles */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14 }}>
              {[
                { href: '/blog/youtube-shorts-monetization-india-2026', title: 'YouTube Shorts Monetisation India 2026 — Complete Guide', tag: 'YouTube' },
                { href: '/blog/how-to-make-money-on-instagram-india-2026', title: 'How to Make Money on Instagram India 2026', tag: 'Instagram Income' },
                { href: '/blog/youtube-rpm-india-niche-2026', title: 'YouTube RPM in India by Niche 2026 — Real Rates', tag: 'YouTube' },
                { href: '/blog/how-to-get-brand-deals-india', title: 'How to Get Brand Deals in India — Complete Guide 2026', tag: 'Brand Deals' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>⚡</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Ready to get brand deals on Reels or Shorts?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build your creator profile with your platform stats, niche, and rate card — in one professional link brands actually check. Free, built for Indian creators.
            </p>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Create my Identity Kit free →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 14 }}>
              identitykit.in · Free forever · Media kit + Rate card + Creator CV
            </div>
          </div>

        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Tools</Link>
          <Link href="/tools/influencer-rate-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Rate Calculator</Link>
          <Link href="/tools/youtube-money-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>YouTube Calculator</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
