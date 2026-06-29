import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Influencer Marketing ROI India 2026: How Creators Prove Value & Brands Measure Results',
  description: 'How to calculate influencer marketing ROI in India in 2026. Earned Media Value, Cost Per Engagement, CPM benchmarks by niche, post-campaign report strategy, how creators prove ROI to get rebooked, and how Indian brands measure campaign success. Real formulas, real India data.',
  keywords: 'influencer marketing roi india 2026, how to calculate influencer roi india, influencer campaign roi india, earned media value india, cost per engagement india influencer, influencer marketing metrics india, how to prove roi to brands india, influencer campaign report india',
  openGraph: {
    title: 'Influencer Marketing ROI India 2026: How Creators Prove Value & Brands Measure Results',
    description: 'Indian brands earn ₹5.20–₹5.78 per ₹1 spent on influencer marketing. Creators who send post-campaign reports get rebooked 5x more often. Full ROI formula, EMV calculator, CPE benchmarks by niche.',
    url: 'https://identitykit.in/blog/influencer-marketing-roi-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/influencer-marketing-roi-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/influencer-marketing-roi-india-2026',
  },
}

const metrics = [
  {
    metric: 'Engagement Rate',
    icon: '❤️',
    color: '#FF6B2B',
    formula: '(Likes + Comments + Saves + Shares) ÷ Followers × 100',
    indianBenchmark: 'Nano: 5–8% · Micro: 3–5% · Mid-tier: 1.5–3% · Macro: 0.8–2%',
    why: 'The #1 metric Indian brands check before paying. Engagement rate tells brands whether your audience is real and active. A creator with 7% engagement at 15K followers is more valuable to most Indian D2C brands than 80K followers at 0.6%.',
    proTip: 'Track saves separately — Indian brands in 2026 increasingly weight saves over likes because a save signals high purchase intent ("I want to come back to this product").',
    creatorAction: 'Include your average engagement rate prominently in your media kit and in every pitch email. Calculate it using our free Instagram Engagement Rate Calculator.',
    toolLink: '/tools/instagram-engagement-calculator',
    toolLabel: 'Calculate My Engagement Rate',
  },
  {
    metric: 'Earned Media Value (EMV)',
    icon: '💰',
    color: '#4CAF50',
    formula: 'Total Reach × CPM Benchmark for Your Niche ÷ 1,000',
    indianBenchmark: 'Finance: ₹320 CPM · Tech: ₹280 · EdTech: ₹240 · Health: ₹210 · Beauty: ₹190 · Lifestyle: ₹160',
    why: 'EMV translates your organic reach into a monetary value by comparing it to what the same reach would cost in paid advertising. It answers the brand\'s core question: "What did we get for what we paid?" A finance creator with 2 lakh Reel views at ₹320 CPM = ₹64,000 EMV. If the brand paid ₹20,000 for the post, that\'s a 3.2x EMV return.',
    proTip: 'Use EMV in your pitch to justify premium rates. "My last 3 Reels averaged 1.8L reach. At your niche CPM of ₹280, that\'s ₹50,400 EMV per post — my rate of ₹20,000 delivers 2.5x EMV return."',
    creatorAction: 'Calculate your EMV automatically using our free Influencer ROI Calculator — it applies India-specific CPM benchmarks for your niche.',
    toolLink: '/tools/influencer-roi-calculator',
    toolLabel: 'Calculate My EMV Free',
  },
  {
    metric: 'Cost Per Engagement (CPE)',
    icon: '🎯',
    color: '#6C63FF',
    formula: 'Campaign Spend ÷ Total Engagements (Likes + Comments + Saves + Shares)',
    indianBenchmark: 'Good CPE by tier: Nano: under ₹2 · Micro: under ₹5 · Mid-tier: under ₹12 · Macro: under ₹25',
    why: 'CPE gives brands a standardised way to compare creators across different follower sizes. A nano creator delivering 8,000 engagements on a ₹5,000 post has a ₹0.63 CPE — far better than a mid-tier creator delivering 5,000 engagements on a ₹25,000 post at ₹5 CPE. This is why Indian brands in 2026 are shifting budget from macro to micro and nano creators.',
    proTip: 'Calculate your CPE from past posts before every pitch. If your historical CPE is under ₹2, you can justify rates significantly higher than the follower-count formula would suggest.',
    creatorAction: 'Calculate your CPE and compare it to India benchmarks using our free Influencer ROI Calculator.',
    toolLink: '/tools/influencer-roi-calculator',
    toolLabel: 'Calculate My CPE Free',
  },
  {
    metric: 'Cost Per View (CPV)',
    icon: '👁️',
    color: '#FF9800',
    formula: 'Campaign Spend ÷ Total Video Views',
    indianBenchmark: 'Good CPV: under ₹0.50 for Reels/Shorts · under ₹1.50 for YouTube videos',
    why: 'Used primarily for video content campaigns. CPV lets brands compare influencer video campaigns directly against Meta and Google video ad CPVs. Indian Meta video ad CPV ranges from ₹0.40–₹2.50 — so an influencer Reel delivering under ₹0.50 CPV with authentic engagement matches or beats paid ad efficiency.',
    proTip: 'For YouTube campaigns, separate your CPV from your RPM — brands look at CPV for campaign efficiency, while RPM measures your ad revenue. Don\'t confuse the two metrics in post-campaign reports.',
    creatorAction: 'Include CPV in your post-campaign report when your content was video-based. Use our Campaign Report Generator to auto-calculate and format this.',
    toolLink: '/tools/campaign-report-generator',
    toolLabel: 'Generate Campaign Report Free',
  },
  {
    metric: 'Revenue Attribution',
    icon: '🛒',
    color: '#E91E63',
    formula: 'Sales from unique promo code or UTM-tagged link ÷ Campaign Spend × 100',
    indianBenchmark: 'Good: 2–5x spend recovered in direct attributed revenue within 60-day window. Finance/EdTech: higher. Fashion: lower (long purchase cycle).',
    why: 'The most powerful ROI metric for performance-focused brands. Unique promo codes (CREATOR20 for 20% off) and UTM-tagged links allow brands to see exactly how many sales came from your specific content. This metric shifts creator relationships from "influencer deals" to "performance partnerships" — and unlocks higher rates for creators who can show direct sales attribution.',
    proTip: 'Always ask for a unique promo code or trackable link when doing brand deals. Then include the redemption data in your post-campaign report. Showing "47 promo code redemptions = ₹94,000 in brand revenue from a ₹15,000 post" makes your next rate negotiation effortless.',
    creatorAction: 'Track all promo code redemptions and UTM link clicks and include them in your Campaign Report. Use our free Campaign Report Generator to format this professionally.',
    toolLink: '/tools/campaign-report-generator',
    toolLabel: 'Generate Campaign Report Free',
  },
]

const roiFramework = [
  {
    step: '01',
    title: 'Before the campaign: Get a clear brief with measurable KPIs',
    forBrand: 'Generate a complete campaign brief using the free Campaign Brief Generator. Define exactly what success looks like before the campaign starts: awareness KPI (reach, impressions), engagement KPI (rate, saves), conversion KPI (promo codes, UTM clicks). A brief with clear KPIs is the foundation of any measurable ROI.',
    forCreator: 'Before accepting any brand deal, ask: "What are the main KPIs you\'re looking for from this campaign?" Knowing whether a brand wants awareness (reach-focused) or conversions (promo code redemptions) changes what content you create and how you structure your post-campaign report.',
    tool: { label: 'Generate Campaign Brief Free', href: '/tools/campaign-brief-generator', color: '#6C63FF' },
  },
  {
    step: '02',
    title: 'During the campaign: Track the right metrics from Instagram/YouTube Insights',
    forBrand: 'Request Insights screenshots from the creator at 48 hours, 7 days, and 30 days post-publish. Reach and engagement peak within 72 hours. Saves and profile visits (purchase-intent signals) often peak at 5–7 days. Revenue attribution via promo codes should be measured over 30–60 days as purchase decisions often have longer cycles.',
    forCreator: 'Screenshot your Instagram Insights at 48 hours, 7 days, and 14 days after publishing. Capture: reach, impressions, likes, comments, saves, shares, profile visits from this post. For YouTube: views, watch time, CTR, and link clicks from description. These numbers go directly into your campaign report.',
    tool: null,
  },
  {
    step: '03',
    title: 'After the campaign: Send a post-campaign report within 7 days',
    forBrand: 'Require a post-campaign report from every creator you work with. Most professional Indian creators will not provide one unless you ask. A standardised report request: "Please share your post Insights at 7 days — reach, engagement breakdown, saves, profile visits, and promo code redemptions if applicable." Use the Influencer ROI Calculator to evaluate whether the campaign performed above or below India benchmarks.',
    forCreator: 'Send a professional post-campaign report to every brand within 7 days of going live. Creators who send reports get rebooked 5x more often than those who don\'t. The report should include: performance vs India benchmarks for your tier, qualitative audience comments, and a recommendation for the next campaign. Use the free Campaign Report Generator to create this in 2 minutes.',
    tool: { label: 'Generate Campaign Report Free', href: '/tools/campaign-report-generator', color: '#4CAF50' },
  },
  {
    step: '04',
    title: 'Post-campaign: Calculate ROI and decide on next steps',
    forBrand: 'Compare the campaign\'s CPE against Meta paid ad CPE for the same target audience. If influencer CPE is within 1.5x of paid CPE, influencer marketing is competitive. If it\'s 3x+, you\'re overpaying. Calculate EMV to understand the full organic reach value. Identify which creators delivered the best ROI — these are your retainer candidates.',
    forCreator: 'Calculate your EMV and CPE and include both in your next pitch email to this brand or similar brands. "My last campaign for a similar brand delivered 1.4L reach at ₹280 CPM = ₹39,200 EMV from a ₹15,000 post — a 2.6x EMV return." Use the Influencer ROI Calculator to get these numbers in seconds.',
    tool: { label: 'Calculate Campaign ROI Free', href: '/tools/influencer-roi-calculator', color: '#6C63FF' },
  },
]

const nicheROI = [
  { niche: 'Finance & Investing', cpm: '₹320', cpe: '₹12', emvMultiplier: '2.5–4x', conversionRate: '3–6%', color: '#4CAF50', bestFor: 'Demat accounts, fintech apps, mutual fund platforms — high LTV products justify premium influencer rates' },
  { niche: 'Tech & Gadgets', cpm: '₹280', cpe: '₹9', emvMultiplier: '2–3.5x', conversionRate: '2–4%', color: '#6C63FF', bestFor: 'Consumer electronics, SaaS tools, AI products — affiliate commissions often exceed base brand deal income' },
  { niche: 'Education & Career', cpm: '₹240', cpe: '₹8', emvMultiplier: '2–3x', conversionRate: '2–5%', color: '#00BCD4', bestFor: 'Online courses, skill-building platforms — evergreen content earns for months after initial post' },
  { niche: 'Health & Fitness', cpm: '₹210', cpe: '₹7', emvMultiplier: '1.8–2.8x', conversionRate: '2–4%', color: '#FF9800', bestFor: 'Supplements, fitness equipment, wellness apps — strong repeat purchase rates benefit from ongoing creator relationships' },
  { niche: 'Beauty & Skincare', cpm: '₹190', cpe: '₹6', emvMultiplier: '1.5–2.5x', conversionRate: '2–5%', color: '#E91E63', bestFor: 'D2C beauty brands — highest volume of campaigns in India; micro creator seeding model works best' },
  { niche: 'Food & Beverage', cpm: '₹170', cpe: '₹5', emvMultiplier: '1.3–2x', conversionRate: '1–3%', color: '#FF5722', bestFor: 'D2C food brands, packaged foods — regional language content delivers 3–4x better ROI than English for same budget' },
  { niche: 'Fashion & Lifestyle', cpm: '₹150', cpe: '₹4', emvMultiplier: '1–1.8x', conversionRate: '1–2%', color: '#9C27B0', bestFor: 'Apparel D2C brands — brand awareness play rather than direct conversion; longer attribution window needed' },
  { niche: 'Business & Startup', cpm: '₹260', cpe: '₹10', emvMultiplier: '2–3x', conversionRate: '3–6%', color: '#FF6B2B', bestFor: 'B2B SaaS, startup tools, business services — LinkedIn creators earn 2–3x more here than equivalent Instagram creators' },
]

const reportSections = [
  { section: 'Campaign Overview', what: 'Brand name, product, go-live date, campaign fee, deliverables completed', why: 'Sets context for the decision-maker reviewing the report 2 weeks after the campaign' },
  { section: 'Performance vs Benchmarks', what: 'Your reach, engagement rate, CPE, CPV compared to India averages for your tier and niche', why: 'Context is everything. "8,000 engagements" means nothing. "8,000 engagements at 5.8% ER — 93% above India micro average of 3%" means a lot.' },
  { section: 'Engagement Breakdown', what: 'Likes, comments, saves, shares separately + video views + profile visits from this post', why: 'Saves and profile visits signal purchase intent — far more valuable than likes for conversion-focused brands' },
  { section: 'Best Audience Comments', what: '2–3 screenshots or quotes of the most positive/purchase-intent audience comments', why: 'Qualitative proof converts sceptical brand managers. "Where can I buy this?" from a follower is worth more than 1,000 generic likes' },
  { section: 'Revenue Attribution', what: 'Promo code redemptions, UTM link clicks, conversions tracked — if applicable', why: 'The single metric that converts a one-off campaign into a long-term retainer relationship' },
  { section: 'Key Learning & Recommendation', what: 'What you learned about how your audience responded + a specific idea for the next campaign', why: 'Creators who recommend the next campaign seed the rebooking conversation inside the report itself' },
]

const mistakes = [
  { forWho: 'Creators', m: 'Never sending a post-campaign report', f: 'Creators who deliver content and disappear get replaced. Brands can\'t justify rebooing a creator to their CFO if they have no performance data. A 2-minute report sent 7 days after going live is the highest ROI action a creator can take after a deal. Generate yours free at identitykit.in/tools/campaign-report-generator.' },
  { forWho: 'Brands', m: 'Measuring influencer ROI on last-click attribution', f: 'Influencer content operates at the top and middle of the funnel — it seeds intent before a customer ever clicks a paid ad. Attributing all conversions to the last-click (often a Google search ad) systematically undercounts influencer ROI. Use 30–60 day attribution windows, holdout group tests, and incremental lift studies for accurate measurement.' },
  { forWho: 'Creators', m: 'Sharing only total reach without engagement breakdown', f: '"I got 1.5 lakh reach" means nothing to a brand manager without the engagement rate, saves, and comments. Always break down your post report into: reach, unique accounts, engagement rate, saves, comments, profile visits. Saves are the most important signal — include them prominently.' },
  { forWho: 'Brands', m: 'Comparing influencer CPE to display advertising CPE', f: 'Influencer engagement (a save, a share, a comment) is worth 5–10x more than a display ad click because of the trust transfer. Compare influencer CPE to social media ad CPE (same platform, similar audience) — not to display banners. Influencer campaigns typically win this comparison by 2–3x.' },
  { forWho: 'Creators', m: 'Not tracking promo code redemptions', f: 'Promo code redemptions are the most powerful data point in any post-campaign report. Ask brands for your unique code at the start of every deal. Then ask for redemption data after the campaign ends. A creator who can show "47 redemptions = ₹94,000 brand revenue from a ₹15,000 post" has a 6.3x ROAS story that justifies any rate negotiation.' },
  { forWho: 'Brands', m: 'Negotiating on follower count instead of engagement economics', f: 'A 180K-follower lifestyle creator at 0.6% engagement delivers fewer engaged impressions than a 15K finance creator at 7.5% — and typically costs 5–8x more. Calculate CPE before any negotiation. Indian brands who switch to engagement-economics-based buying spend 30–40% less for the same or better campaign results.' },
]

export default function InfluencerMarketingROIIndiaPage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', color: '#fff', fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; overflow: hidden; transition: border-color 0.2s; }
        .card:hover { border-color: rgba(255,107,43,0.2); }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .hero-pad { padding: 48px 16px 32px !important; }
          .content-pad { padding: 0 16px 60px !important; }
          .two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

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
            {['ROI & Analytics', 'Brand Deals', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Influencer Marketing ROI India 2026:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>How Creators Prove Value & Brands Measure Results</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Indian brands earn ₹5.20–₹5.78 for every ₹1 spent on influencer marketing — when measured correctly. Creators who send post-campaign reports get rebooked 5x more often. This guide gives both sides the exact formulas, benchmarks, and tools to prove and measure ROI in India in 2026.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — How to Calculate Influencer Marketing ROI in India</div>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div>
                <div style={{ fontWeight: 700, color: '#4CAF50', fontSize: 14, marginBottom: 10 }}>🎬 For Creators: How to prove your ROI</div>
                {['Calculate your Engagement Rate: (Likes + Comments + Saves + Shares) ÷ Followers × 100', 'Calculate your Earned Media Value: Reach × your niche CPM ÷ 1,000 (finance = ₹320, beauty = ₹190)', 'Calculate your CPE: Campaign fee ÷ total engagements — compare to India benchmarks', 'Track promo code redemptions and UTM link clicks for direct revenue attribution', 'Send a post-campaign report within 7 days showing all metrics vs India benchmarks'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 7 }}>
                    <span style={{ color: '#4CAF50', flexShrink: 0, fontSize: 13 }}>{i + 1}.</span>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#6C63FF', fontSize: 14, marginBottom: 10 }}>🏢 For Brands: How to measure campaign ROI</div>
                {['Define KPIs before the campaign: awareness (reach), engagement (ER, saves), conversion (promo codes)', 'Calculate CPE: campaign spend ÷ total engagements — good micro CPE is under ₹5 in India', 'Calculate EMV: total reach × niche CPM ÷ 1,000 to quantify organic reach value', 'Use 30–60 day attribution window for promo codes — not last-click (hugely underestimates influencer value)', 'Require a post-campaign report from every creator — set this expectation in the campaign brief'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 7 }}>
                    <span style={{ color: '#6C63FF', flexShrink: 0, fontSize: 13 }}>{i + 1}.</span>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Influencer Marketing ROI India 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Indian brands earn an average of ₹5.20–₹5.78 for every ₹1 spent on influencer marketing when campaigns are measured correctly — one of the highest ROI marketing channels in India.',
                'Creators who send post-campaign reports get rebooked by brands 5x more often than those who deliver content and do not follow up with performance data.',
                'Cost Per Engagement (CPE) is the primary ROI metric used by Indian D2C brands in 2026 — micro creators (10K–100K followers) typically deliver CPE under ₹5, making them the most cost-efficient tier.',
                'India\'s influencer marketing industry uses niche-specific CPM benchmarks for EMV calculation: Finance (₹320), Tech (₹280), EdTech (₹240), Health (₹210), Beauty (₹190), Lifestyle (₹160).',
                '94% of organisations globally report that creator content delivers higher ROI than traditional digital advertising, an increase of 20% year-over-year (CreatorIQ State of Creator Marketing Report 2025).',
                'Most Indian brands using last-click attribution undercount influencer ROI by 40–60% — influencer content operates at the top and middle of the purchase funnel and requires 30–60 day attribution windows.',
                'A micro-influencer campaign in India using 20–30 nano and micro creators delivers 2–3x better ROI than a single macro-influencer campaign at the same total budget, according to 2026 D2C brand data.',
                'Saves (bookmarks on Instagram) are the highest-value engagement signal in 2026 — a save indicates purchase intent and is weighted 3–5x more than a like by Indian D2C brands evaluating campaign performance.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5 ROI Metrics */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>5 ROI Metrics Every Indian Influencer Campaign Should Track</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 28 }}>Whether you are a creator proving your value or a brand measuring results — these are the 5 metrics that matter in India in 2026. Each comes with the exact formula, India benchmarks, and the tool to calculate it instantly.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {metrics.map((m, i) => (
                <div key={i} className="card">
                  <div style={{ background: `linear-gradient(135deg, ${m.color}15, ${m.color}05)`, borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ background: `${m.color}20`, border: `1px solid ${m.color}35`, borderRadius: 10, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{m.icon}</div>
                    <div style={{ fontWeight: 800, fontSize: 18 }}>{m.metric}</div>
                  </div>

                  <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)', background: 'rgba(0,0,0,0.15)' }}>
                    <div style={{ fontSize: 11, color: m.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>Formula</div>
                    <code style={{ color: '#E8E8F0', fontSize: 14, fontFamily: 'monospace', background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: 6, display: 'inline-block' }}>{m.formula}</code>
                  </div>

                  <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>India benchmarks 2026</div>
                    <div style={{ color: '#4CAF50', fontSize: 13, fontWeight: 600 }}>{m.indianBenchmark}</div>
                  </div>

                  <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{m.why}</div>
                    <div style={{ background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.18)', borderRadius: 8, padding: '9px 14px', display: 'flex', gap: 8 }}>
                      <span style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>PRO TIP</span>
                      <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{m.proTip}</span>
                    </div>
                  </div>

                  <div style={{ padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>{m.creatorAction}</div>
                    <Link href={m.toolLink} style={{ background: `${m.color}15`, color: m.color, border: `1px solid ${m.color}28`, padding: '8px 14px', borderRadius: 8, fontWeight: 700, fontSize: 12, flexShrink: 0, whiteSpace: 'nowrap' }}>
                      {m.toolLabel} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4-Step ROI Framework */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>4-Step ROI Framework for Indian Influencer Campaigns</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Each step has different actions for brands and creators — both perspectives shown side by side.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {roiFramework.map((item) => (
                <div key={item.step} className="card" style={{ padding: '22px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
                    <div style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 10, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#FF6B2B', fontSize: 15, flexShrink: 0 }}>{item.step}</div>
                    <div style={{ fontWeight: 800, fontSize: 16 }}>{item.title}</div>
                  </div>
                  <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: item.tool ? 14 : 0 }}>
                    <div style={{ background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.15)', borderRadius: 10, padding: '14px 18px' }}>
                      <div style={{ fontSize: 11, color: '#6C63FF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>🏢 For Brands</div>
                      <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.7 }}>{item.forBrand}</div>
                    </div>
                    <div style={{ background: 'rgba(255,107,43,0.05)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 10, padding: '14px 18px' }}>
                      <div style={{ fontSize: 11, color: '#FF6B2B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>🎬 For Creators</div>
                      <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.7 }}>{item.forCreator}</div>
                    </div>
                  </div>
                  {item.tool && (
                    <Link href={item.tool.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${item.tool.color}14`, color: item.tool.color, border: `1px solid ${item.tool.color}28`, padding: '9px 16px', borderRadius: 8, fontWeight: 700, fontSize: 13 }}>
                      {item.tool.label} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Tool hub — all 4 tools */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '28px 28px', marginBottom: 56 }}>
            <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 6 }}>🛠️ All the ROI tools you need — free</div>
            <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, marginBottom: 20 }}>Four free tools that cover every step of the influencer campaign ROI cycle — from brief to measurement to rebooking.</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              {[
                { href: '/tools/campaign-brief-generator', icon: '📋', label: 'Campaign Brief Generator', desc: 'Set clear KPIs before the campaign starts', color: '#6C63FF' },
                { href: '/tools/influencer-roi-calculator', icon: '📈', label: 'Influencer ROI Calculator', desc: 'Calculate EMV and CPE with India benchmarks', color: '#4CAF50' },
                { href: '/tools/instagram-engagement-calculator', icon: '❤️', label: 'Engagement Rate Calculator', desc: 'Know your exact engagement rate before pitching', color: '#E91E63' },
                { href: '/tools/campaign-report-generator', icon: '📊', label: 'Campaign Report Generator', desc: 'Send a professional report and get rebooked 5x more', color: '#FF9800' },
              ].map((tool) => (
                <Link key={tool.href} href={tool.href} style={{ display: 'block', background: `${tool.color}08`, border: `1px solid ${tool.color}22`, borderRadius: 12, padding: '16px 18px', textDecoration: 'none' }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{tool.icon}</div>
                  <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 14, marginBottom: 4 }}>{tool.label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, lineHeight: 1.5 }}>{tool.desc}</div>
                  <div style={{ color: tool.color, fontSize: 12, fontWeight: 700, marginTop: 10 }}>Free → Open Tool</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Niche ROI table */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>India Influencer ROI Benchmarks by Niche 2026</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>CPM and CPE benchmarks used by Indian brands and creator platforms to calculate Earned Media Value. Finance and tech niches deliver the highest ROI per rupee spent.</p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid rgba(255,107,43,0.25)' }}>
                    {['Niche', 'CPM (per 1K reach)', 'CPE (per engagement)', 'EMV Multiplier', 'Conversion Rate'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', textAlign: 'left', color: '#FF6B2B', fontWeight: 700, fontSize: 11, whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {nicheROI.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 700, color: row.color }}>{row.niche}</td>
                      <td style={{ padding: '10px 14px', color: '#E8E8F0', fontWeight: 600 }}>{row.cpm}</td>
                      <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.6)' }}>{row.cpe}</td>
                      <td style={{ padding: '10px 14px', color: '#4CAF50', fontWeight: 600 }}>{row.emvMultiplier}</td>
                      <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.6)' }}>{row.conversionRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: 12, display: 'flex', justifyContent: 'center' }}>
              <Link href="/tools/influencer-roi-calculator" style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '10px 20px', borderRadius: 10, fontWeight: 700, fontSize: 14 }}>
                Calculate your niche ROI free →
              </Link>
            </div>
          </section>

          {/* Campaign report sections */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>What to Include in a Post-Campaign Report — India 2026</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Most Indian creators send a screenshot of their Insights and call it a report. Brands don&apos;t rebook those creators. Here is what a professional post-campaign report should include — and why each section matters.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {reportSections.map((row, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 8, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#FF6B2B', fontSize: 13, flexShrink: 0 }}>{i + 1}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 15, marginBottom: 4 }}>{row.section}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, marginBottom: 6 }}>{row.what}</div>
                    <div style={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                      <span style={{ color: '#4CAF50', fontWeight: 700, fontSize: 11, flexShrink: 0 }}>WHY</span>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>{row.why}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 14, padding: '18px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Generate a professional campaign report in 2 minutes</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>Enter your campaign stats — our AI formats a professional report with benchmark comparisons, ready to send to your brand contact.</div>
              </div>
              <Link href="/tools/campaign-report-generator" style={{ background: '#4CAF50', color: '#fff', padding: '11px 18px', borderRadius: 10, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>
                Generate My Report Free →
              </Link>
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Show brands your ROI before they ask</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Identity Kit gives you one professional link with your media kit, past campaign results, engagement rate, and rate card — brands see your proof of performance the moment they land on your profile. Free, takes 10 minutes.</p>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build My Free Profile →
            </Link>
          </div>

          {/* 6 Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>6 ROI Measurement Mistakes — For Brands and Creators</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {mistakes.map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.1)', borderRadius: 12, padding: '18px 22px', display: 'flex', gap: 14 }}>
                  <div>
                    <span style={{ background: item.forWho === 'Creators' ? 'rgba(255,107,43,0.15)' : 'rgba(108,99,255,0.15)', color: item.forWho === 'Creators' ? '#FF6B2B' : '#6C63FF', padding: '2px 8px', borderRadius: 100, fontSize: 10, fontWeight: 700, display: 'inline-block', marginBottom: 8 }}>{item.forWho}</span>
                    <div style={{ fontWeight: 700, color: '#FF8080', fontSize: 15, marginBottom: 6 }}>Mistake: {item.m}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}><span style={{ color: '#4CAF50', fontWeight: 600 }}>Fix: </span>{item.f}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'How do I calculate influencer marketing ROI in India?', a: 'Three primary methods for calculating influencer marketing ROI in India in 2026: (1) EMV method — multiply total reach by your niche CPM benchmark (Finance: ₹320/1K, Beauty: ₹190/1K) and divide by 1,000. If your campaign generated 2 lakh reach at ₹280 CPM, EMV = ₹56,000. If you paid ₹20,000, that\'s a 2.8x EMV return. (2) CPE method — divide campaign spend by total engagements. Under ₹5 CPE for micro creators is good. (3) Revenue attribution — track direct sales from unique promo codes or UTM-tagged links over a 30–60 day window. Use our free Influencer ROI Calculator for instant calculations with India benchmarks.' },
                { q: 'What is a good engagement rate for influencer campaigns in India?', a: 'India engagement rate benchmarks by tier in 2026: Nano creators (1K–10K): 5–8% is average, above 8% is strong. Micro creators (10K–100K): 3–5% average, above 5% is strong. Mid-tier (100K–500K): 1.5–3% average, above 3% is strong. Macro (500K–1M): 0.8–2% average. Finance and EdTech creators consistently achieve 30–50% above-average engagement rates in their tier because their audiences are highly intentional. An engagement rate below 1% at any tier signals audience authenticity issues.' },
                { q: 'What is Earned Media Value (EMV) for Indian influencers?', a: 'Earned Media Value (EMV) is a monetary equivalent of the organic reach an influencer generates for a brand. It is calculated by multiplying the creator\'s reach by the equivalent CPM (cost per thousand impressions) that the brand would pay for the same reach through paid advertising in their niche. India niche CPM benchmarks: Finance ₹320, Tech ₹280, EdTech ₹240, Health ₹210, Beauty ₹190, Food ₹170, Lifestyle ₹160. A finance creator who generates 3 lakh reach has an EMV of 3,00,000 × 320 ÷ 1,000 = ₹96,000 for that piece of content.' },
                { q: 'Why should Indian creators send post-campaign reports?', a: 'Creators who send post-campaign reports within 7 days of their content going live get rebooked by brands 5x more often than those who deliver content and disappear. A professional report shows: your performance vs India benchmarks (proving you overdelivered), qualitative audience response (comments, saves, DMs about the product), and a recommendation for the next campaign (which seeds the rebooking conversation). Most Indian creators never send reports — doing so immediately differentiates you as a professional. Use our free Campaign Report Generator to create one in 2 minutes.' },
                { q: 'How do Indian brands measure influencer campaign success?', a: 'Indian brands use different primary metrics depending on their campaign goal. For awareness campaigns: reach, impressions, and new follower growth. For engagement campaigns: engagement rate, saves, shares, and comments — with saves weighted most heavily as a purchase-intent signal. For conversion campaigns: promo code redemptions, UTM-tagged link clicks, app installs, or direct sales attributed to the creator\'s content over a 30–60 day window. Brands running performance-focused campaigns increasingly use unique discount codes (e.g. CREATOR15 for 15% off) to measure direct revenue attribution.' },
                { q: 'What is Cost Per Engagement (CPE) for Indian influencer campaigns?', a: 'Cost Per Engagement (CPE) in India is calculated by dividing total campaign spend by total engagements (likes + comments + saves + shares). India CPE benchmarks by creator tier in 2026: Nano creators: good CPE under ₹2. Micro creators: good CPE under ₹5. Mid-tier: good CPE under ₹12. Macro: good CPE under ₹25. Finance and tech niches have slightly higher CPE benchmarks because their engagements convert to revenue more efficiently. CPE is the most useful metric for comparing creators across different follower sizes, because it normalises for audience scale.' },
                { q: 'How do I prove my influencer ROI to brands to get higher rates?', a: 'Five data points that justify higher rates in India: (1) Your engagement rate vs India benchmark for your tier — if it\'s 30%+ above average, state it explicitly. (2) Your EMV calculation from past campaigns — "my last 3 Reels delivered ₹45,000 average EMV from ₹15,000 posts = 3x EMV return". (3) Saves as a purchase-intent signal — "my average Reel gets 800 saves, indicating high purchase intent from my audience". (4) Promo code redemptions from past campaigns — direct revenue attribution is the most powerful negotiation tool. (5) Your audience demographics — if your audience skews 25–35 with above-average income, this justifies a premium. Build your Identity Kit profile to present all this data professionally.' },
                { q: 'What is the minimum budget to start influencer marketing in India?', a: 'Minimum viable influencer marketing budgets for Indian brands in 2026: ₹25,000–₹75,000 for a first test campaign using 3–5 nano or micro creators. ₹1,50,000–₹2,00,000 per month for a consistent programme with 8–15 creator activations. Under ₹1 lakh/month, the discovery and contracting overhead consumes most of the budget — consider free product seeding campaigns with 20–40 nano creators instead. D2C beauty and health brands in India allocate 45–55% of their total paid acquisition budget to influencer marketing because it consistently outperforms Meta paid ads on CPE for their categories.' },
              ].map((item, i) => (
                <div key={i} className="card" style={{ padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 10 }}>{item.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: 14 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14 }}>
              {[
                { href: '/blog/influencer-rate-card-india-2026', title: 'Influencer Rate Card India 2026 — Complete Pricing Guide', tag: 'Rate Card' },
                { href: '/blog/how-to-pitch-brands-india-influencer-2026', title: 'How to Pitch Brands as an Influencer in India 2026', tag: 'Brand Deals' },
                { href: '/blog/influencer-media-kit-india-2026', title: 'Influencer Media Kit India 2026 — What to Include', tag: 'Media Kit' },
                { href: '/blog/influencer-marketing-cost-india-2026', title: 'Influencer Marketing Cost India 2026 — Brand Pricing Guide', tag: 'Brand Guide' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>📊</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Prove your ROI. Get rebooked. Earn more.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Identity Kit gives you the profile, media kit, and past campaign results that brands use to evaluate you — plus 4 free tools to calculate your ROI, generate campaign reports, and land more deals.
            </p>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Build My Free Identity Kit →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 14 }}>
              identitykit.in · Free forever · Media kit + ROI tools + Campaign reports
            </div>
          </div>

        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/tools/influencer-roi-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>ROI Calculator</Link>
          <Link href="/tools/campaign-report-generator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Campaign Report</Link>
          <Link href="/tools/campaign-brief-generator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Campaign Brief</Link>
          <Link href="/tools/instagram-engagement-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Engagement Calculator</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
