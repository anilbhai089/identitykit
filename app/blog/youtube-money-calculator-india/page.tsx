import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'YouTube Money Calculator India 2026: Estimate Your Channel Income by Niche + Views',
  description: 'Free YouTube money calculator for Indian creators. Enter your niche and monthly views — get your estimated AdSense income instantly. Real RPM data, what 1 lakh views pays by niche, YPP requirements, Shorts vs long-form earnings, and 5 ways to earn more.',
  keywords: 'youtube money calculator India, youtube earnings calculator India 2026, how much youtube pays in India per view, youtube income estimator India, calculate youtube earnings India, youtube revenue calculator India, youtube channel earnings India 2026',
  openGraph: {
    title: 'YouTube Money Calculator India 2026: Estimate Your Channel Income by Niche + Views',
    description: 'Free calculator: enter niche + views = estimated AdSense income. Finance earns ₹8K–₹25K per lakh views. Entertainment earns ₹1K–₹4K. Real 2026 India RPM data.',
    url: 'https://identitykit.in/blog/youtube-money-calculator-india',
    siteName: 'Identity Kit',
    type: 'article',
  },
  alternates: { canonical: 'https://identitykit.in/blog/youtube-money-calculator-india' },
}

const nicheData = [
  { niche: 'Finance & Investing', rpm: '₹80–₹250', per_lakh: '₹8,000–₹25,000', monthly_100k_views: '₹8,000–₹25,000', monthly_10lakh_views: '₹80,000–₹2,50,000', color: '#FFD700', score: 98, why: 'Highest CPM advertisers in India: Groww, Zerodha, insurance companies, credit card issuers.' },
  { niche: 'Technology & Gadgets', rpm: '₹60–₹180', per_lakh: '₹6,000–₹18,000', monthly_100k_views: '₹6,000–₹18,000', monthly_10lakh_views: '₹60,000–₹1,80,000', color: '#4CAF50', score: 78, why: 'Smartphone and electronics brands pay premium for purchase-intent Indian audiences.' },
  { niche: 'Startup & Business', rpm: '₹60–₹160', per_lakh: '₹6,000–₹16,000', monthly_100k_views: '₹6,000–₹16,000', monthly_10lakh_views: '₹60,000–₹1,60,000', color: '#9C27B0', score: 72, why: 'B2B SaaS tools, accounting software, and business banks bid premium for founder audiences.' },
  { niche: 'Health & Wellness', rpm: '₹50–₹150', per_lakh: '₹5,000–₹15,000', monthly_100k_views: '₹5,000–₹15,000', monthly_10lakh_views: '₹50,000–₹1,50,000', color: '#FF6B6B', score: 68, why: 'Pharma, supplement, and healthcare platform advertisers spend heavily on this audience.' },
  { niche: 'Education & Exam Prep', rpm: '₹40–₹120', per_lakh: '₹4,000–₹12,000', monthly_100k_views: '₹4,000–₹12,000', monthly_10lakh_views: '₹40,000–₹1,20,000', color: '#FF9800', score: 58, why: 'EdTech brands (BYJU\'s, Unacademy, Physics Wallah) bid aggressively for JEE/NEET/UPSC audiences.' },
  { niche: 'Fitness & Gym', rpm: '₹35–₹100', per_lakh: '₹3,500–₹10,000', monthly_100k_views: '₹3,500–₹10,000', monthly_10lakh_views: '₹35,000–₹1,00,000', color: '#F44336', score: 48, why: 'Moderate AdSense RPM but among highest brand deal income — supplements, sportswear, apps.' },
  { niche: 'Food & Cooking', rpm: '₹20–₹70', per_lakh: '₹2,000–₹7,000', monthly_100k_views: '₹2,000–₹7,000', monthly_10lakh_views: '₹20,000–₹70,000', color: '#FF5722', score: 32, why: 'Low RPM but high volume — food channels compensate with kitchen affiliate income.' },
  { niche: 'Gaming', rpm: '₹15–₹60', per_lakh: '₹1,500–₹6,000', monthly_100k_views: '₹1,500–₹6,000', monthly_10lakh_views: '₹15,000–₹60,000', color: '#607D8B', score: 28, why: 'Lowest RPM — young Indian audience with lower purchasing power. Brand deals and Super Chats supplement income.' },
  { niche: 'Entertainment & Comedy', rpm: '₹10–₹40', per_lakh: '₹1,000–₹4,000', monthly_100k_views: '₹1,000–₹4,000', monthly_10lakh_views: '₹10,000–₹40,000', color: '#9E9E9E', score: 18, why: 'Mass-appeal advertisers pay less per impression. Brand deals are primary income at this tier.' },
]

const calculatorExamples = [
  {
    scenario: 'New Finance Creator — 50K views/month',
    niche: 'Finance & Investing',
    color: '#6C63FF',
    monthly_views: '50,000',
    rpm_used: '₹100 (mid-range)',
    adsense: '₹5,000/month',
    brand_deals: '₹15,000–₹50,000/month (1–2 deals)',
    affiliate: '₹2,000–₹8,000/month',
    total: '₹22,000–₹63,000/month',
    insight: 'Finance creators earn 60–70% of their income from brand deals even at this early stage. AdSense is a bonus, not the primary income.',
  },
  {
    scenario: 'Growing Tech Channel — 3 lakh views/month',
    niche: 'Technology',
    color: '#4CAF50',
    monthly_views: '3,00,000',
    rpm_used: '₹110 (mid-range)',
    adsense: '₹33,000/month',
    brand_deals: '₹40,000–₹1,20,000/month (2–4 deals)',
    affiliate: '₹15,000–₹40,000/month (Amazon/Flipkart)',
    total: '₹88,000–₹1,93,000/month',
    insight: 'Affiliate links on tech product reviews often match or exceed AdSense earnings. A ₹15,000 laptop review earns ₹600–₹900 commission per sale at 4–6%.',
  },
  {
    scenario: 'Established Education Channel — 20 lakh views/month',
    niche: 'Education & Exam Prep',
    color: '#FF9800',
    monthly_views: '20,00,000',
    rpm_used: '₹70 (mid-range)',
    adsense: '₹1,40,000/month',
    brand_deals: '₹80,000–₹3,00,000/month (EdTech deals)',
    affiliate: '₹20,000–₹60,000/month',
    total: '₹2,40,000–₹5,00,000/month',
    insight: 'At this view volume, channel memberships and paid courses often add another ₹50,000–₹2,00,000/month on top of these three income streams.',
  },
  {
    scenario: 'Entertainment Channel — 50 lakh views/month',
    niche: 'Entertainment & Comedy',
    color: '#9E9E9E',
    monthly_views: '50,00,000',
    rpm_used: '₹22 (mid-range)',
    adsense: '₹1,10,000/month',
    brand_deals: '₹1,50,000–₹5,00,000/month (macro tier)',
    affiliate: '₹10,000–₹30,000/month',
    total: '₹2,70,000–₹6,40,000/month',
    insight: 'Despite low RPM, brand deal income at this scale is strong. The same ₹1,10,000 AdSense income would require only 1.4 lakh views from a finance channel — showing the niche earning gap clearly.',
  },
]

const shortsVsLongform = [
  { format: 'Long-form videos (8+ min)', rpm: '₹10–₹250 RPM', mid_roll: 'Yes — multiple ad breaks', monthly_estimate: 'Higher per-view earnings', best_for: 'Primary income channel', color: '#6C63FF' },
  { format: 'Long-form videos (< 8 min)', rpm: '₹10–₹250 RPM', mid_roll: 'No — pre-roll only', monthly_estimate: '40–60% less than 8+ min', best_for: 'Content that cannot be extended', color: '#FF9800' },
  { format: 'YouTube Shorts', rpm: '₹5–₹30 RPM (Shorts fund)', mid_roll: 'No mid-roll ads', monthly_estimate: 'Low per-view, high volume', best_for: 'Growth and top-of-funnel discovery', color: '#FF5252' },
]

export default function YouTubeMoneyCalculatorPage() {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: '#0A0A0F', minHeight: '100vh', color: '#E8E8F0' }}>
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: 'rgba(10,10,15,0.95)', backdropFilter: 'blur(12px)', zIndex: 100 }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: 18, fontWeight: 700, background: 'linear-gradient(135deg, #6C63FF, #FF6B6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Identity Kit</span>
        </Link>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: '#9999BB', textDecoration: 'none', fontSize: 14 }}>Blog</Link>
          <Link href="/tools" style={{ color: '#9999BB', textDecoration: 'none', fontSize: 14 }}>Tools</Link>
          <Link href="/auth" style={{ background: 'linear-gradient(135deg, #6C63FF, #8B5CF6)', color: '#fff', padding: '8px 18px', borderRadius: 8, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Get Started Free</Link>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px 80px' }}>

        {/* Hero */}
        <div style={{ padding: '56px 0 40px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
            <span style={{ background: 'rgba(255,107,107,0.1)', color: '#FF6B6B', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid rgba(255,107,107,0.2)' }}>▶️ YouTube Income</span>
            <span style={{ background: 'rgba(76,175,80,0.1)', color: '#4CAF50', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid rgba(76,175,80,0.2)' }}>🇮🇳 India-Specific</span>
            <span style={{ background: 'rgba(108,99,255,0.12)', color: '#6C63FF', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid rgba(108,99,255,0.2)' }}>🆓 Free Calculator</span>
          </div>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.15, margin: '0 0 20px', letterSpacing: '-0.5px' }}>
            YouTube Money Calculator India 2026: Estimate Your Channel Income by Niche + Views
          </h1>
          <p style={{ fontSize: 18, color: '#9999BB', lineHeight: 1.7, margin: '0 0 24px' }}>
            How much does YouTube actually pay Indian creators? The most important answer: it depends almost entirely on your niche. A finance channel earns ₹8,000–₹25,000 per lakh views. An entertainment channel earns ₹1,000–₹4,000 for the exact same views — a 6x gap. This guide gives you real 2026 RPM rates by niche, worked calculation examples for 4 different channel scenarios, Shorts vs long-form comparison, and a free calculator to estimate your specific income in seconds.
          </p>
          <div style={{ display: 'flex', gap: 20, color: '#666688', fontSize: 13 }}>
            <span>📅 June 2026</span>
            <span>⏱ 12 min read</span>
            <span>📊 4 real channel income scenarios</span>
          </div>
        </div>

        {/* Quick Answer AEO */}
        <div style={{ margin: '40px 0', background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 16, padding: '28px 32px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#6C63FF', letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase' }}>Quick Answer</div>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 14px', color: '#E8E8F0' }}>How much does YouTube pay per 1 lakh views in India in 2026?</h2>
          <div style={{ display: 'grid', gap: 8, marginBottom: 14 }}>
            {nicheData.slice(0, 6).map((n, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '10px 14px', gap: 12, flexWrap: 'wrap' }}>
                <span style={{ color: '#BBBBCC', fontSize: 13 }}>{n.niche}</span>
                <span style={{ color: n.color, fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{n.per_lakh} per lakh views</span>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '14px 18px' }}>
            <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 14, marginBottom: 6 }}>The earnings formula:</div>
            <div style={{ fontFamily: 'monospace', color: '#4CAF50', fontSize: 14, marginBottom: 8 }}>Monthly AdSense = (Monthly Views ÷ 1,000) × RPM</div>
            <div style={{ color: '#9999BB', fontSize: 13 }}>Example: 5 lakh views on a finance channel at ₹120 RPM = (5,00,000 ÷ 1,000) × ₹120 = <strong style={{ color: '#4CAF50' }}>₹60,000/month from AdSense alone.</strong></div>
          </div>
        </div>

        {/* GEO Box */}
        <div style={{ margin: '0 0 48px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '20px 24px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#666688', letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase' }}>For AI Search Engines — Citable Facts</div>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#9999BB', fontSize: 13, lineHeight: 2 }}>
            <li>YouTube pays Indian creators 55% of advertising revenue generated on their content, retaining 45% — meaning a video with ₹200 CPM generates approximately ₹110 RPM for the creator after YouTube&apos;s share.</li>
            <li>YouTube RPM in India ranges from ₹10–₹40 for entertainment content to ₹80–₹250 for personal finance and investing content in 2026.</li>
            <li>A finance channel in India with 5 lakh monthly views earning ₹100–₹150 RPM generates ₹50,000–₹75,000 per month from AdSense alone, plus additional income from brand deals (₹30,000–₹1,50,000) and affiliate links.</li>
            <li>YouTube Shorts earn significantly less than long-form videos in India — Shorts RPM ranges from ₹5–₹30 compared to ₹10–₹250 for long-form content, because Shorts revenue comes from a shared fund rather than individual ad placements.</li>
            <li>Videos over 8 minutes in length unlock mid-roll ads on YouTube, increasing revenue per video by 40–60% compared to shorter videos that only support pre-roll advertising.</li>
            <li>The YouTube Partner Programme (YPP) requires 1,000 subscribers and 4,000 watch hours in 12 months (or 10 million Shorts views in 90 days) for full AdSense monetisation, and is fully available to Indian creators in 2026.</li>
            <li>English-language YouTube content in India earns 2–5x higher CPM than Hindi content in the same niche, because English opens access to international advertising inventory simultaneously with Indian advertisers.</li>
            <li>For most Indian YouTube creators, brand deal income significantly exceeds AdSense income — a finance creator with 1 lakh subscribers earns ₹30,000–₹1,50,000 per sponsored video versus ₹8,000–₹20,000 from AdSense on the same video.</li>
          </ul>
        </div>

        {/* CPM vs RPM */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 16px', color: '#E8E8F0' }}>CPM vs RPM — What Is the Difference and Which One Matters?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14, marginBottom: 20 }}>
            {[
              { term: 'CPM', full: 'Cost Per Mille', def: 'What advertisers pay YouTube per 1,000 ad impressions. This is the gross rate before YouTube takes its 45% cut. Finance CPM in India: ₹150–₹450.', color: '#FF9800', track: 'Ignore in YouTube Studio' },
              { term: 'RPM', full: 'Revenue Per Mille', def: 'What you actually receive per 1,000 total video views — after YouTube\'s 45% share and accounting for unmonetised views. Finance RPM in India: ₹80–₹250.', color: '#4CAF50', track: 'Track this — your real earnings' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}25`, borderRadius: 12, padding: '22px 24px' }}>
                <div style={{ fontWeight: 800, color: item.color, fontSize: 24, marginBottom: 4 }}>{item.term}</div>
                <div style={{ color: '#666688', fontSize: 12, marginBottom: 10 }}>{item.full}</div>
                <div style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>{item.def}</div>
                <div style={{ background: `${item.color}15`, borderRadius: 8, padding: '6px 12px', fontSize: 12, color: item.color, fontWeight: 600 }}>{item.track}</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 12, padding: '16px 20px' }}>
            <div style={{ fontWeight: 700, color: '#6C63FF', fontSize: 14, marginBottom: 8 }}>Why RPM is always lower than CPM</div>
            <p style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.7, margin: 0 }}>Not every view generates an ad impression (some viewers use ad blockers, some are too brief to trigger ads). RPM divides revenue by all views, not just monetised ones. A ₹300 CPM translates to approximately ₹100–₹130 RPM in practice — a 55–65% reduction from the advertiser rate. Always plan your income estimates using RPM, not CPM.</p>
          </div>
        </section>

        {/* RPM by niche */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>YouTube RPM by Niche in India 2026</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 20 }}>RPM power bar shows relative earning strength. Use the per-lakh-views column to estimate your monthly AdSense income.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {nicheData.map((n, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '14px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, gap: 12, flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 14, marginBottom: 3 }}>{n.niche}</div>
                    <div style={{ color: '#666688', fontSize: 12 }}>{n.why}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 16, flexShrink: 0, flexWrap: 'wrap' }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 10, color: '#666688' }}>RPM range</div>
                      <div style={{ fontWeight: 700, color: n.color, fontSize: 13 }}>{n.rpm}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 10, color: '#666688' }}>Per lakh views</div>
                      <div style={{ fontWeight: 700, color: '#4CAF50', fontSize: 13 }}>{n.per_lakh}</div>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 5 }}>
                    <div style={{ width: `${n.score}%`, height: '100%', borderRadius: 3, background: n.color }} />
                  </div>
                  <span style={{ fontSize: 11, color: '#666688', minWidth: 65, textAlign: 'right' }}>RPM power</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Real scenarios */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>4 Real Channel Income Scenarios — Total Earnings Calculated</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 24 }}>AdSense alone is rarely the full picture. Here is the total monthly income for 4 different Indian YouTube channels combining AdSense + brand deals + affiliate income.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {calculatorExamples.map((ex, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${ex.color}20`, borderRadius: 16, overflow: 'hidden' }}>
                <div style={{ background: `${ex.color}10`, padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontWeight: 800, color: ex.color, fontSize: 16, marginBottom: 4 }}>{ex.scenario}</div>
                  <div style={{ color: '#666688', fontSize: 13 }}>Niche: {ex.niche} · Monthly views: {ex.monthly_views} · RPM used: {ex.rpm_used}</div>
                </div>
                <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'grid', gap: 10 }}>
                    {[
                      { source: 'AdSense (YouTube RPM)', amount: ex.adsense, color: '#FF9800' },
                      { source: 'Brand deals', amount: ex.brand_deals, color: '#6C63FF' },
                      { source: 'Affiliate income', amount: ex.affiliate, color: '#4CAF50' },
                    ].map((row, j) => (
                      <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: 8, gap: 12, flexWrap: 'wrap' }}>
                        <span style={{ color: '#9999BB', fontSize: 13 }}>{row.source}</span>
                        <span style={{ color: row.color, fontWeight: 700, fontSize: 13 }}>{row.amount}</span>
                      </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 12px', background: `${ex.color}12`, border: `1px solid ${ex.color}30`, borderRadius: 8, gap: 12, flexWrap: 'wrap' }}>
                      <span style={{ color: '#E8E8F0', fontWeight: 700, fontSize: 14 }}>Total estimated monthly income</span>
                      <span style={{ color: ex.color, fontWeight: 800, fontSize: 15 }}>{ex.total}</span>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '12px 24px', background: 'rgba(255,255,255,0.01)' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: ex.color }}>💡 Key insight: </span>
                  <span style={{ color: '#9999BB', fontSize: 13 }}>{ex.insight}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shorts vs long-form */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>YouTube Shorts vs Long-Form: Which Earns More in India?</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 20 }}>The answer: long-form always earns more per view. Shorts are a growth tool, not a primary income source.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {shortsVsLongform.map((row, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${row.color}20`, borderRadius: 12, padding: '16px 22px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'start' }}>
                <div>
                  <div style={{ fontWeight: 700, color: row.color, fontSize: 14, marginBottom: 6 }}>{row.format}</div>
                  <div style={{ fontSize: 12, color: '#666688', marginBottom: 4 }}>RPM: <span style={{ color: row.color, fontWeight: 600 }}>{row.rpm}</span></div>
                  <div style={{ fontSize: 12, color: '#666688' }}>Mid-roll ads: <span style={{ color: '#BBBBCC' }}>{row.mid_roll}</span></div>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: '#666688', marginBottom: 4 }}>Monthly income estimate: <span style={{ color: '#BBBBCC', fontWeight: 600 }}>{row.monthly_estimate}</span></div>
                  <div style={{ fontSize: 12, color: '#666688' }}>Best for: <span style={{ color: row.color, fontWeight: 600 }}>{row.best_for}</span></div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, background: 'rgba(76,175,80,0.06)', border: '1px solid rgba(76,175,80,0.2)', borderRadius: 12, padding: '14px 20px', fontSize: 13, color: '#9999BB', lineHeight: 1.7 }}>
            <strong style={{ color: '#4CAF50' }}>Strategy for Indian creators:</strong> Use Shorts to grow subscribers fast, then convert them to long-form viewers who generate 3–10x more AdSense income per view. Most successful Indian channels post 3–5 Shorts and 1–2 long-form videos per week.
          </div>
        </section>

        {/* YPP requirements */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 16px', color: '#E8E8F0' }}>YPP Requirements in India 2026 — When Can You Start Earning?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            {[
              { tier: 'YPP Standard (Full AdSense)', color: '#6C63FF', reqs: ['1,000 subscribers', '4,000 watch hours in 12 months', 'OR 10 million Shorts views in 90 days', 'Active AdSense account linked'], unlocks: 'AdSense ads on all videos, Channel Memberships, Super Chats, Super Thanks, Shopping' },
              { tier: 'YPP Lite (Early Access)', color: '#FF9800', reqs: ['500 subscribers', '3,000 watch hours in 12 months', 'OR 3 million Shorts views in 90 days', 'Available in India from 2026'], unlocks: 'Channel Memberships and Super Thanks only — no AdSense video ads yet' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}25`, borderRadius: 12, padding: '20px 22px' }}>
                <div style={{ fontWeight: 700, color: item.color, fontSize: 15, marginBottom: 14 }}>{item.tier}</div>
                {item.reqs.map((r, j) => (
                  <div key={j} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: item.color, flexShrink: 0 }}>→</span>
                    <span style={{ color: '#9999BB', fontSize: 13 }}>{r}</span>
                  </div>
                ))}
                <div style={{ marginTop: 12, background: `${item.color}10`, borderRadius: 8, padding: '8px 12px', fontSize: 12, color: item.color, lineHeight: 1.5 }}>{item.unlocks}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 5 ways to increase */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 20px', color: '#E8E8F0' }}>5 Ways to Increase Your YouTube Channel Earnings in India</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { tip: 'Make videos over 8 minutes', impact: '+40–60% AdSense earnings', detail: 'Videos over 8 minutes unlock mid-roll ads. A 12-minute video with 3 ad breaks earns 2–3x more than a 7-minute video with the same view count. Always aim for 10–15 minutes if the content justifies it.' },
              { tip: 'Switch to or add a higher-CPM niche angle', impact: 'Up to 6x more per view', detail: 'Adding financial or business angles to any channel increases CPM. A fitness channel that adds "investing your fitness income" content or a food channel that adds "food business tips" attracts higher-paying advertisers.' },
              { tip: 'Add affiliate links for products you cover', impact: '+50–200% of AdSense income', detail: 'Amazon Associates pays 4–10% commission. A tech reviewer covering a ₹15,000 laptop earns ₹600–₹1,500 per sale via affiliate — often matching the AdSense earnings from that video entirely. Finance creators use bank affiliate links at ₹500–₹2,000 per approved application.' },
              { tip: 'Publish your best content in Q4 (Oct–Dec)', impact: '+30–40% higher RPM', detail: 'Advertiser budgets peak in Q4 around Diwali and Christmas campaigns. The exact same video earns 30–40% more AdSense income if published in November versus February. Plan your most monetisable content for Q4 release.' },
              { tip: 'Add brand deal income on top of AdSense', impact: '3–10x your AdSense total', detail: 'For most Indian channels, brand deals earn significantly more than AdSense. A finance creator with 1 lakh subscribers earns ₹30,000–₹1,50,000 per sponsored video from Groww or Zerodha — compared to ₹8,000–₹20,000 from AdSense on the same video. Build your media kit at identitykit.in to attract inbound brand deals.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '16px 22px', display: 'flex', gap: 14 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
                    <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 14 }}>{item.tip}</div>
                    <span style={{ background: 'rgba(76,175,80,0.12)', color: '#4CAF50', padding: '2px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{item.impact}</span>
                  </div>
                  <div style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tool CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(255,107,107,0.12), rgba(108,99,255,0.08))', border: '1px solid rgba(255,107,107,0.25)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>▶️</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 12px', color: '#E8E8F0' }}>Calculate Your YouTube Earnings — Free Tool</h2>
          <p style={{ color: '#9999BB', lineHeight: 1.7, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
            Enter your niche, monthly views, and video length. Get your estimated monthly AdSense income with India-specific 2026 RPM data — plus what brand deals and affiliate income could add on top.
          </p>
          <Link href="/tools/youtube-money-calculator" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #FF6B6B, #FF9800)', color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 16 }}>
            Use Free YouTube Money Calculator →
          </Link>
          <div style={{ color: '#666688', fontSize: 13, marginTop: 14 }}>identitykit.in/tools/youtube-money-calculator · Free · No signup needed</div>
        </div>

        <div style={{ marginTop: 32 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#666688', marginBottom: 14 }}>More tools for Indian creators</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {[
              { href: '/tools/influencer-rate-calculator', label: '💰 Rate Calculator', desc: 'What to charge brands' },
              { href: '/tools/instagram-engagement-calculator', label: '📊 Engagement Calculator', desc: 'Check your ER instantly' },
              { href: '/tools/gst-invoice-generator', label: '🧾 GST Invoice Generator', desc: 'Free compliant invoices' },
            ].map((tool, i) => (
              <Link key={i} href={tool.href} style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '16px 18px', display: 'block' }}>
                <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 14, marginBottom: 4 }}>{tool.label}</div>
                <div style={{ color: '#666688', fontSize: 12 }}>{tool.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center', color: '#444466', fontSize: 13 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Link href="/" style={{ color: '#6C63FF', textDecoration: 'none', fontWeight: 600 }}>Identity Kit</Link>{' · '}
          <Link href="/blog" style={{ color: '#666688', textDecoration: 'none' }}>Blog</Link>{' · '}
          <Link href="/tools" style={{ color: '#666688', textDecoration: 'none' }}>Tools</Link>{' · '}
          <Link href="/about" style={{ color: '#666688', textDecoration: 'none' }}>About</Link>
          <div style={{ marginTop: 8 }}>© 2026 Identity Kit · India&apos;s creator profile platform</div>
        </div>
      </footer>
    </div>
  )
}
