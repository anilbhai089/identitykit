import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Influencer Rate Card India 2026: What to Charge Brands (Complete Pricing Guide)',
  description: 'Complete influencer rate card for India 2026. Exact rates by follower tier, platform, and niche — Instagram Reels, YouTube videos, LinkedIn posts, Stories, carousels. Usage rights pricing, package deals, negotiation tactics, and how to never undersell yourself again.',
  keywords: 'influencer rate card india 2026, how much to charge brands india, influencer pricing india, instagram reel rate india, youtube sponsorship rate india, creator rate card india, influencer rates india by followers, what to charge as influencer india',
  openGraph: {
    title: 'Influencer Rate Card India 2026: What to Charge Brands (Complete Pricing Guide)',
    description: 'Nano ₹2,000–₹10,000/Reel. Micro ₹8,000–₹75,000. Mid-tier ₹50,000–₹3.5L. Finance creators earn 2–4x more. Usage rights add 30–50%. Complete India rate card with negotiation scripts.',
    url: 'https://identitykit.in/blog/influencer-rate-card-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/influencer-rate-card-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/influencer-rate-card-india-2026',
  },
}

const tiers = [
  {
    tier: 'Nano',
    range: '1K–10K followers',
    color: '#4CAF50',
    icon: '🌱',
    reel: '₹1,000–₹10,000',
    reelFinance: '₹3,000–₹20,000',
    story5: '₹300–₹3,000',
    carousel: '₹800–₹6,000',
    youtube: '₹2,000–₹15,000',
    linkedin: '₹1,000–₹8,000',
    monthly: '₹5,000–₹40,000',
    engagementRate: '5–8%',
    whoHires: 'Small D2C startups, local businesses, regional food brands, beauty seeding campaigns',
    strength: 'Highest engagement rates in India. Audiences treat nano creators like trusted friends. Brands testing new markets prefer nano creators for authentic product seeding.',
    formula: 'Followers × ₹0.30–₹1.00 = base Reel rate. Finance niche: ×2. Tech: ×1.5.',
  },
  {
    tier: 'Micro',
    range: '10K–100K followers',
    color: '#6C63FF',
    icon: '📈',
    reel: '₹5,000–₹75,000',
    reelFinance: '₹15,000–₹1,50,000',
    story5: '₹1,500–₹20,000',
    carousel: '₹4,000–₹50,000',
    youtube: '₹15,000–₹1,50,000',
    linkedin: '₹8,000–₹60,000',
    monthly: '₹30,000–₹2,00,000',
    engagementRate: '3–5%',
    whoHires: 'D2C brands, fintech apps, EdTech companies, beauty brands, health supplements. 40% of India\'s total influencer marketing budget goes to micro creators in 2026.',
    strength: 'The sweet spot of India\'s creator economy. Best ROI for brands: high enough reach to matter, authentic enough to convert. Most brand deals in India happen at this tier.',
    formula: 'Followers × ₹0.50–₹0.75 = base Reel rate floor. Finance/tech niche: ×2–3. Strong engagement (5%+): add 30%.',
  },
  {
    tier: 'Mid-Tier',
    range: '100K–500K followers',
    color: '#FF9800',
    icon: '⭐',
    reel: '₹50,000–₹3,50,000',
    reelFinance: '₹1,00,000–₹7,00,000',
    story5: '₹15,000–₹80,000',
    carousel: '₹30,000–₹2,00,000',
    youtube: '₹80,000–₹5,00,000',
    linkedin: '₹40,000–₹2,50,000',
    monthly: '₹2,00,000–₹15,00,000',
    engagementRate: '2–3%',
    whoHires: 'National FMCG brands, OTT platforms, fintech apps, real estate apps, national D2C. Brand ambassador retainers become viable at this tier.',
    strength: 'National reach with still-credible audience trust. Multiple income streams become viable simultaneously — ads, affiliate, UGC, merchandise, consulting.',
    formula: 'Market rate is ₹500–₹700 per 1,000 followers per Reel. Usage rights, exclusivity, and long-term retainers all carry significant premiums at this tier.',
  },
  {
    tier: 'Macro',
    range: '500K–1M followers',
    color: '#FF6B2B',
    icon: '🚀',
    reel: '₹2,00,000–₹7,90,000',
    reelFinance: '₹4,00,000–₹15,00,000',
    story5: '₹50,000–₹2,00,000',
    carousel: '₹1,50,000–₹5,00,000',
    youtube: '₹3,00,000–₹20,00,000',
    linkedin: '₹1,00,000–₹5,00,000',
    monthly: '₹10,00,000–₹50,00,000',
    engagementRate: '1.5–2.5%',
    whoHires: 'Large national brands, IPL sponsors, OTT platforms, automotive, luxury goods, major EdTech. Deals typically managed through talent agencies.',
    strength: 'Massive reach for product launches and brand awareness. Often combined with performance metrics — brands pay base rate plus bonus for conversions.',
    formula: 'Custom negotiation based on campaign brief, usage rights, and exclusivity scope. Flat-fee + performance bonus structures common at this tier.',
  },
  {
    tier: 'Mega',
    range: '1M+ followers',
    color: '#E91E63',
    icon: '👑',
    reel: '₹7,00,000–₹59,00,000+',
    reelFinance: '₹15,00,000–₹1,00,00,000+',
    story5: '₹2,00,000–₹10,00,000',
    carousel: '₹5,00,000–₹25,00,000',
    youtube: '₹15,00,000–₹80,00,000',
    linkedin: '₹3,00,000–₹15,00,000',
    monthly: '₹50,00,000–₹5,00,00,000+',
    engagementRate: '1–2%',
    whoHires: 'Fortune 500 companies, major FMCG, luxury brands, government campaigns, pan-India product launches. Always via talent management agencies.',
    strength: 'Celebrity-level brand association and maximum reach. Rates include multiple revisions, agency fees, talent management commissions, and exclusivity premiums.',
    formula: 'Fully custom. Agency commission: 15–20% of deal value. Talent manager: 10–15% of creator income. Multiple-deliverable packages at 30–50% discount.',
  },
]

const nicheMultipliers = [
  { niche: 'Personal Finance & Investing', multiplier: '2.0–4.0×', color: '#4CAF50', score: 95, why: 'Fintech, demat accounts, mutual fund apps, credit cards — all pay premium CPMs. Finance audiences have high purchasing power and purchasing intent. Demat referral bonuses add additional income on top of base rates.' },
  { niche: 'Tech, AI & Gadgets', multiplier: '1.5–2.5×', color: '#6C63FF', score: 80, why: 'Consumer electronics brands, SaaS tools, and AI product companies pay premium rates. Amazon affiliate commissions on gadgets (3–8%) add significant passive income on top of brand deal rates.' },
  { niche: 'EdTech & Career Growth', multiplier: '1.5–2.5×', color: '#00BCD4', score: 75, why: 'Online learning platforms (Udemy, UpGrad, Unacademy) pay high commissions per enrollment and premium rates for creator content because course LTV justifies high acquisition costs.' },
  { niche: 'Health & Fitness', multiplier: '1.2–2.0×', color: '#FF9800', score: 65, why: 'Supplement brands, fitness equipment, and wellness apps pay above-average rates. Yoga, mental health, and wellness sub-niches are fastest growing in India in 2026.' },
  { niche: 'Beauty & Skincare', multiplier: '1.0–1.5×', color: '#E91E63', score: 60, why: 'Highest volume of available brand deals in India. 40,000+ D2C beauty brands active on Instagram. Standard rates but extremely high frequency of campaigns — creating volume-driven income.' },
  { niche: 'Food & Cooking', multiplier: '0.8–1.2×', color: '#FF5722', score: 45, why: 'High viewership but lower advertiser CPMs. Regional food content in vernacular languages performs best. Food delivery apps and packaged food brands are main advertisers.' },
  { niche: 'Fashion & Lifestyle', multiplier: '0.7–1.0×', color: '#9C27B0', score: 35, why: 'Most saturated niche in India. Lowest CPM and highest creator supply. Strong brand deal volume but lowest per-deal rates. Differentiate with specific sub-niche focus.' },
  { niche: 'Entertainment & Comedy', multiplier: '0.5–0.8×', color: '#FF6B2B', score: 28, why: 'Highest viewership but lowest advertiser CPM in India. Entertainment content is extremely hard to monetise through brand deals at scale. Best as a funnel to YouTube ad revenue.' },
]

const premiums = [
  {
    type: 'Usage Rights / Whitelisting',
    icon: '📢',
    color: '#FF6B2B',
    premium: '+30–50% of base rate',
    indianStandard: '30-day whitelisting: +30%. 90-day whitelisting: +50%. Perpetual usage: +75–100%.',
    what: 'The brand uses your content in their paid advertising campaigns (Meta Ads, Google Ads). You must be credited as the creator. This is charged separately from organic posting because the brand is buying content licensing rights, not just a social post.',
    howToNegotiate: '"My rate for the organic Reel is ₹[base]. If you\'d like to whitelist it for paid ads, there\'s an additional ₹[30% of base] for 30-day usage rights. For 90 days, that\'s ₹[50% of base] additional."',
  },
  {
    type: 'Category Exclusivity',
    icon: '🔒',
    color: '#6C63FF',
    premium: '+25–40% of base rate',
    indianStandard: '30-day exclusivity: +25%. 90-day exclusivity: +35%. 6-month exclusivity: +50%+.',
    what: 'You agree not to work with competitor brands in the same category during the exclusivity period. For example, if you do a fintech app deal, you don\'t do another fintech app deal for 30 days. This has real income opportunity cost — charge for it.',
    howToNegotiate: '"Category exclusivity during the campaign period is ₹[25% of base] additional. This means I won\'t work with any competing [fintech/beauty/etc] brands during [timeframe]. What exclusivity window were you thinking?"',
  },
  {
    type: 'Paid Partnership Disclosure',
    icon: '✅',
    color: '#4CAF50',
    premium: 'No premium — ASCI requires this',
    indianStandard: 'All paid collaborations must be disclosed with #ad, #sponsored, or #paidpartnership per ASCI guidelines. Non-disclosure can result in account flags and legal penalties.',
    what: 'The ASCI (Advertising Standards Council of India) mandates disclosure of all paid partnerships. Use "#ad" or "#sponsored" clearly visible in the first line of any caption, not buried in hashtags. Instagram\'s native Paid Partnership label also satisfies this requirement.',
    howToNegotiate: 'Not negotiable — always disclose. Brands who ask you not to disclose are asking you to break Indian advertising law. Document this request and decline the deal.',
  },
  {
    type: 'Package Deals',
    icon: '📦',
    color: '#FF9800',
    premium: '15–25% discount off individual rates',
    indianStandard: '3 Reels: 15% off. 5 Reels: 20% off. Monthly retainer: 25–30% off. 6-month ambassador: 35–45% off.',
    what: 'Bundles increase deal size while giving brands a discount. A brand who wants 3 Reels pays less than 3 individual Reels, but you earn more from the single deal than from three separate outreach efforts. Packages also create recurring client relationships.',
    howToNegotiate: '"For a single Reel my rate is ₹[X]. I offer a bundle of 3 Reels + 6 Stories for ₹[2.3× single rate] — that\'s about 20% off individual pricing and works well for a campaign that needs sustained presence."',
  },
  {
    type: 'Gifted + Cash Hybrid',
    icon: '🎁',
    color: '#9C27B0',
    premium: 'Product at retail value + 50–70% of your normal cash rate',
    indianStandard: 'Product worth ₹2,000 + ₹3,000 cash is not the same as ₹5,000 cash. Product value is at retail price but you can\'t spend a product. Accept hybrids only if the product is something you\'d genuinely use.',
    what: 'Some brands offer a product + reduced cash payment. This is common with new brands that have limited budgets. Acceptable for products genuinely useful to you, portfolio-building for new niches, or brands with very high aspirational value. Never accept gifted-only after your first 2–3 deals.',
    howToNegotiate: '"I\'d love to work with you. For a hybrid deal, I\'d include the product value (₹[retail price]) plus ₹[50–70% of my normal cash rate] as a combined package. Does that work within your budget?"',
  },
  {
    type: 'Rush / Urgent Delivery',
    icon: '⚡',
    color: '#FF5252',
    premium: '+25–50% of base rate',
    indianStandard: 'Standard delivery: 5–7 business days. Rush (2–3 days): +25%. Same-day: +50%.',
    what: 'When a brand needs content faster than your standard turnaround, charge for the priority. Last-minute campaign needs, product launches moved forward, or festival season crunch all justify rush fees. Never absorb rush costs silently — brands budget for them.',
    howToNegotiate: '"My standard turnaround is 5–7 business days. For delivery within 48 hours, there\'s a 25% rush fee — that brings the total to ₹[base × 1.25]. I can accommodate this if the brief is approved by [time] today."',
  },
]

const negotiationScripts = [
  {
    situation: 'Brand says "Your rates are too high"',
    script: '"I understand — let me share why my rate is set at ₹[X]. My average Reel gets [Y] views with [Z]% engagement, which works out to ₹[CPV] per engaged view — competitive with Instagram ad costs. That said, if your budget is tighter, I could offer [smaller deliverable — 1 Story set instead of Reel] at ₹[lower rate]. Would either option work?"',
    principle: 'Never just lower your rate. Offer a smaller deliverable at their budget instead.',
  },
  {
    situation: 'Brand gives no rate, asks "What are your rates?"',
    script: '"My base rate for an Instagram Reel in [your niche] is ₹[your rate]. For a Story set (5 stories), ₹[story rate]. I also offer a bundle: 2 Reels + 6 Stories for ₹[bundle rate at 15% off]. What deliverables are you considering for this campaign?"',
    principle: 'Always quote confidently. Asking brands "what\'s your budget?" signals inexperience and often results in lowball offers.',
  },
  {
    situation: 'Brand immediately says yes to your first quote',
    script: 'Don\'t negotiate down out of guilt. A quick yes means your rate was within or below their budget. Next time, quote 15–20% higher as your opening rate. You\'ve been undercharging.',
    principle: 'If a brand accepts your rate without negotiation, raise your rate for the next pitch. You found your floor, not your ceiling.',
  },
  {
    situation: 'Brand wants unlimited revisions',
    script: '"My rate includes one round of revisions before final delivery — I find that keeps the process smooth for both sides. Additional revision rounds are ₹[500–2,000 depending on scale] each. I\'ll send the brief confirmation with these terms before starting — does that work?"',
    principle: 'Set revision limits upfront in writing. Unlimited revisions is where Indian creators lose the most money.',
  },
  {
    situation: 'Brand delays payment beyond agreed date',
    script: '"Hi [Name], following up on invoice #[X] for ₹[amount], due on [date]. Could you share the payment status? Happy to resend the invoice if helpful — just want to make sure it didn\'t get lost." If 14+ days late: "I\'ll need to pause any additional deliverables until this invoice is settled. Please let me know the expected payment date so I can plan accordingly."',
    principle: 'Pause work at 14 days overdue. Indian brand payment delays are the #1 creator complaint — set a policy and stick to it.',
  },
]

export default function InfluencerRateCardIndiaPage() {
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
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Build Free Rate Card →</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto' }}>
        <div className="hero-pad" style={{ padding: '64px 24px 40px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['Rate Card', 'Brand Deals', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Influencer Rate Card India 2026:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>What to Charge Brands (Complete Pricing Guide)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            India&apos;s influencer marketing industry has zero pricing transparency. The same 40,000-follower creator charges anywhere from ₹4,000 to ₹1,60,000 per Reel. Most Indian creators undercharge by 30–50% because they don&apos;t know market rates. This guide ends that. Real benchmarks. Real formulas. No guessing.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — India Influencer Rates 2026</div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6, marginBottom: 16 }}>Instagram Reel rates by tier (base niche — multiply for finance/tech):</p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,107,43,0.2)' }}>
                    {['Tier', 'Followers', 'Instagram Reel', 'Story Set (5)', 'YouTube Video'].map(h => (
                      <th key={h} style={{ padding: '8px 12px', textAlign: 'left', color: '#FF6B2B', fontWeight: 700, fontSize: 11, whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tier: 'Nano', followers: '1K–10K', reel: '₹1,000–₹10,000', story: '₹300–₹3,000', yt: '₹2,000–₹15,000' },
                    { tier: 'Micro', followers: '10K–100K', reel: '₹5,000–₹75,000', story: '₹1,500–₹20,000', yt: '₹15,000–₹1,50,000' },
                    { tier: 'Mid-Tier', followers: '100K–500K', reel: '₹50,000–₹3,50,000', story: '₹15,000–₹80,000', yt: '₹80,000–₹5,00,000' },
                    { tier: 'Macro', followers: '500K–1M', reel: '₹2,00,000–₹7,90,000', story: '₹50,000–₹2,00,000', yt: '₹3,00,000–₹20,00,000' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                      <td style={{ padding: '10px 12px', fontWeight: 700, color: '#FF6B2B' }}>{row.tier}</td>
                      <td style={{ padding: '10px 12px', color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{row.followers}</td>
                      <td style={{ padding: '10px 12px', color: '#E8E8F0', fontWeight: 600 }}>{row.reel}</td>
                      <td style={{ padding: '10px 12px', color: 'rgba(255,255,255,0.6)' }}>{row.story}</td>
                      <td style={{ padding: '10px 12px', color: 'rgba(255,255,255,0.6)' }}>{row.yt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: 14, background: 'rgba(108,99,255,0.07)', border: '1px solid rgba(108,99,255,0.15)', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
              <span style={{ color: '#6C63FF', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>MULTIPLIERS</span>
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>Finance/tech niche: ×2–4. EdTech: ×1.5–2.5. Usage rights: +30–50%. Category exclusivity: +25–40%. Rush delivery: +25–50%. GST (if registered): +18%.</span>
            </div>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Influencer Pricing India 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'India\'s influencer marketing industry crossed ₹3,600 crore in 2025 and is projected to reach ₹5,500 crore by end of 2026, with creator rates rising 25–45% for Tier 1 creators since 2024.',
                'Indian creators undercharge by 30–50% on average — most accept the first offer from brands without negotiation, leaving significant income on the table.',
                'A finance creator with 45,000 followers earns more per Reel than a lifestyle creator with 180,000 followers in India, because finance audiences have higher purchasing power and brand CPM is 2–4x higher.',
                'Usage rights (allowing brands to use creator content in paid ads) add 30–50% to the base rate — yet most Indian creators offer this for free without realising it has commercial value.',
                'Micro and nano influencers will claim 45.5% of India\'s influencer marketing spend in 2026, up from 25% in 2023, making sub-100K follower creators the most in-demand tier.',
                'Indian brands using engagement rate (not follower count) as their primary pricing criterion pay 40–60% more than brands negotiating on follower count alone — making engagement rate the most valuable metric in any rate negotiation.',
                'A creator with 50,000 followers and 7% engagement generates more active reach than a creator with 200,000 followers at 1.5% engagement — and typically costs 40–60% less.',
                'GST-registered Indian creators charge 18% GST on top of their rates, making formal registration beneficial above ₹20 lakh annual creator income as it professionalises billing.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The undercharging problem */}
          <div style={{ background: 'rgba(255,82,82,0.05)', border: '1px solid rgba(255,82,82,0.15)', borderRadius: 14, padding: '22px 26px', marginBottom: 48 }}>
            <div style={{ fontWeight: 800, fontSize: 17, marginBottom: 10 }}>⚠️ Why most Indian creators are undercharging right now</div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7, marginBottom: 14 }}>
              India&apos;s influencer marketing has zero pricing transparency. The same 40,000-follower creator charges anything from ₹4,000 to ₹1,60,000 per Reel depending on how confidently they price themselves. Most small brands overpay by 40–60% for premium creators; most new creators undercharge by 30–50% because they don&apos;t know market rates and accept the first offer.
            </p>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { label: 'Creators accepting first offer', stat: '68%', color: '#FF5252', desc: 'Never counter-negotiate' },
                { label: 'Average undercharge vs market rate', stat: '35%', color: '#FF9800', desc: 'Leaving money on the table' },
                { label: 'Brands with undisclosed budget headroom', stat: '20–30%', color: '#6C63FF', desc: 'Above their opening offer' },
                { label: 'Income increase after using rate card', stat: '+25%', color: '#4CAF50', desc: 'Average deal size improvement' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${item.color}20`, borderRadius: 10, padding: '14px 18px' }}>
                  <div style={{ fontWeight: 800, color: item.color, fontSize: 24, marginBottom: 2 }}>{item.stat}</div>
                  <div style={{ color: '#E8E8F0', fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{item.label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tier Cards */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>India Influencer Rate Card 2026 — By Follower Tier</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 28 }}>Rates based on verified data from 300+ Indian creator collaborations in 2025–2026. Finance and tech creators: multiply all rates by 2–4x. Usage rights and exclusivity: add premiums (see section below).</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {tiers.map((tier) => (
                <div key={tier.tier} className="card">
                  <div style={{ background: `linear-gradient(135deg, ${tier.color}15, ${tier.color}05)`, borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{ fontSize: 28 }}>{tier.icon}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                          <span style={{ fontWeight: 800, fontSize: 20 }}>{tier.tier} Influencer</span>
                          <span style={{ background: `${tier.color}18`, color: tier.color, border: `1px solid ${tier.color}30`, padding: '2px 10px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tier.range}</span>
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Avg engagement: {tier.engagementRate} · {tier.whoHires}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, marginBottom: 2 }}>Monthly potential</div>
                      <div style={{ fontWeight: 800, color: '#4CAF50', fontSize: 16 }}>{tier.monthly}</div>
                    </div>
                  </div>

                  {/* Rate grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    {[
                      { label: 'Instagram Reel', value: tier.reel, highlight: true },
                      { label: 'Finance/Tech Reel', value: tier.reelFinance, highlight: false },
                      { label: 'Story Set (5)', value: tier.story5, highlight: false },
                      { label: 'Carousel Post', value: tier.carousel, highlight: false },
                      { label: 'YouTube Video', value: tier.youtube, highlight: false },
                      { label: 'LinkedIn Post', value: tier.linkedin, highlight: false },
                    ].map((stat) => (
                      <div key={stat.label} style={{ padding: '12px 16px', background: '#07070D' }}>
                        <div style={{ fontSize: 10, color: stat.highlight ? '#FF6B2B' : 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4, fontWeight: stat.highlight ? 700 : 400 }}>{stat.label}</div>
                        <div style={{ fontWeight: 700, color: stat.highlight ? '#E8E8F0' : 'rgba(255,255,255,0.6)', fontSize: 13 }}>{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{tier.strength}</div>
                  </div>

                  <div style={{ padding: '12px 24px' }}>
                    <div style={{ background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
                      <span style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>FORMULA</span>
                      <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{tier.formula}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Niche multipliers */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Niche Multipliers — How Your Niche Changes What You Charge</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Your niche determines your earning ceiling more than your follower count. A finance creator at 20K followers earns more per Reel than a lifestyle creator at 80K followers. Here is the data.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {nicheMultipliers.map((niche, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                    <div style={{ fontWeight: 800, fontSize: 15 }}>{niche.niche}</div>
                    <span style={{ background: `${niche.color}15`, color: niche.color, border: `1px solid ${niche.color}28`, padding: '3px 12px', borderRadius: 100, fontWeight: 800, fontSize: 14 }}>{niche.multiplier} base rate</span>
                  </div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 4 }}>
                      <div style={{ width: `${niche.score}%`, height: '100%', borderRadius: 3, background: niche.color }} />
                    </div>
                    <span style={{ fontSize: 11, color: niche.color, fontWeight: 700, minWidth: 50, textAlign: 'right' }}>Score: {niche.score}</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{niche.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Rate calculator CTA */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 14, padding: '22px 26px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>Get your exact personalised rate in 60 seconds</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>Enter your followers, niche, and engagement rate into our free Influencer Rate Calculator — get your exact India market rate with usage rights and package pricing.</div>
            </div>
            <Link href="/tools/influencer-rate-calculator" style={{ background: '#FF6B2B', color: '#fff', padding: '12px 22px', borderRadius: 10, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Calculate My Rate Free →
            </Link>
          </div>

          {/* Premiums */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Rate Card Premiums — How to Charge More for Every Deal</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Most Indian creators quote their base Reel rate and stop there. These 6 premiums add 25–100% to the value of every deal. Brand managers expect these charges — most will not offer them unless you ask.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {premiums.map((prem, i) => (
                <div key={i} className="card">
                  <div style={{ background: `linear-gradient(135deg, ${prem.color}12, ${prem.color}04)`, borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ fontSize: 22 }}>{prem.icon}</span>
                      <span style={{ fontWeight: 800, fontSize: 16 }}>{prem.type}</span>
                    </div>
                    <span style={{ background: `${prem.color}15`, color: prem.color, border: `1px solid ${prem.color}28`, padding: '3px 12px', borderRadius: 100, fontWeight: 800, fontSize: 13 }}>{prem.premium}</span>
                  </div>
                  <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ fontSize: 11, color: '#FF6B2B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 }}>India standard</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginBottom: 10 }}>{prem.indianStandard}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.6 }}>{prem.what}</div>
                  </div>
                  <div style={{ padding: '12px 24px' }}>
                    <div style={{ background: 'rgba(76,175,80,0.06)', border: '1px solid rgba(76,175,80,0.15)', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
                      <span style={{ color: '#4CAF50', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>SAY THIS</span>
                      <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{prem.howToNegotiate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Negotiation Scripts */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>5 Rate Negotiation Scripts for Indian Creators</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Word-for-word scripts for the 5 most common brand deal negotiation situations. Use these verbatim — they are crafted to be professional without being aggressive.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {negotiationScripts.map((item, i) => (
                <div key={i} className="card" style={{ padding: '20px 24px' }}>
                  <div style={{ fontWeight: 700, color: '#FF6B2B', fontSize: 14, marginBottom: 12 }}>Situation: {item.situation}</div>
                  <pre style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8, padding: '14px 16px', color: 'rgba(255,255,255,0.7)', fontSize: 13, lineHeight: 1.75, overflowX: 'auto', whiteSpace: 'pre-wrap', fontFamily: 'monospace', marginBottom: 10 }}>{item.script}</pre>
                  <div style={{ display: 'flex', gap: 8, background: 'rgba(108,99,255,0.07)', border: '1px solid rgba(108,99,255,0.15)', borderRadius: 8, padding: '8px 14px' }}>
                    <span style={{ color: '#6C63FF', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>PRINCIPLE</span>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{item.principle}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '36px 32px', marginBottom: 56, textAlign: 'center' }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>💼</div>
            <div style={{ fontWeight: 800, fontSize: 22, marginBottom: 10 }}>Put your rate card in your media kit — free</div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.7, maxWidth: 480, margin: '0 auto 22px' }}>Identity Kit builds your complete rate card, media kit, and creator CV in one shareable professional link. Brands open it, see your rates, and reply faster. Free, takes 10 minutes.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
              {['✓ Rate Card', '✓ Media Kit', '✓ Creator CV', '✓ Portfolio', '✓ Shareable Link'].map(f => (
                <span key={f} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 13, fontWeight: 600 }}>{f}</span>
              ))}
            </div>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Build My Free Rate Card →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 12 }}>identitykit.in · Free forever · No credit card</div>
          </div>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'How much should I charge for an Instagram Reel in India?', a: 'Indian Instagram Reel rates by follower tier in 2026: Nano (1K–10K followers): ₹1,000–₹10,000. Micro (10K–100K): ₹5,000–₹75,000. Mid-tier (100K–500K): ₹50,000–₹3,50,000. These are base rates for lifestyle/general niches. Finance and tech creators multiply by 2–4x. Add 30–50% for usage rights, 25–40% for exclusivity, and 18% GST if registered. Use our free Influencer Rate Calculator at identitykit.in/tools/influencer-rate-calculator for your exact personalised rate.' },
                { q: 'How do I calculate my influencer rate in India?', a: 'Two formulas used by Indian creators in 2026: (1) CPM-based: (Average Reel views ÷ 1,000) × ₹300–₹500 = base Reel rate. Finance/tech: use ₹600–₹1,000 CPM. (2) Follower-based: Followers × ₹0.50–₹1.00 = minimum Reel rate. Adjust upward for high engagement (above 3%), premium niche, strong past performance, and usage rights requirements. Always quote 15–25% above your floor to leave negotiation room.' },
                { q: 'Do Indian influencers charge GST?', a: 'Indian creators must register for GST once their annual income from brand deals and services exceeds ₹20 lakh (₹10 lakh for special category states). Once registered, they charge 18% GST on top of their rates. Example: ₹20,000 Reel rate + ₹3,600 GST = ₹23,600 total invoice. Brands with GST registration can claim input tax credit on this. GST registration also professionalises your billing and unlocks larger brand deals from companies that require GST invoices.' },
                { q: 'How much do Indian YouTubers charge for sponsored videos?', a: 'Indian YouTube sponsorship rates in 2026 by tier: Nano creators (under 10K subscribers): ₹2,000–₹15,000 per video. Micro (10K–100K): ₹15,000–₹1,50,000. Mid-tier (100K–500K): ₹80,000–₹5,00,000. Macro (500K–1M): ₹3,00,000–₹20,00,000. Finance and tech channels earn 2–4x more than entertainment channels at the same subscriber count due to higher advertiser CPMs and audience purchasing power.' },
                { q: 'Should I charge more for finance or tech content in India?', a: 'Yes — significantly more. Finance and tech creators in India earn 2–4x the base rate of lifestyle or entertainment creators at the same follower count. The reason: finance and tech audiences have higher purchasing power, brands in these categories have higher customer lifetime values (justifying higher acquisition costs), and there are fewer qualified creators relative to advertiser demand. A finance micro creator with 25K followers can legitimately charge ₹30,000–₹75,000 per Reel in 2026.' },
                { q: 'What are usage rights and how much should I charge for them in India?', a: 'Usage rights (also called content licensing or whitelisting) give brands permission to use your creator content in their paid advertising campaigns — Meta Ads, Google Ads, outdoor advertising, etc. This is a separate commercial transaction from the social media post itself. Standard India pricing: 30-day usage rights: +30% of your base rate. 90-day usage rights: +50%. Perpetual usage: +75–100%. Always specify the duration, platforms, and geography of usage rights in writing before agreeing.' },
                { q: 'How do I raise my rates as an Indian influencer?', a: 'Raise your rates systematically: after every 3–5 paid brand deals (you have more leverage with a track record), every time you cross a major follower milestone (5K, 10K, 25K, 50K, 100K), every time your engagement rate increases, and at the start of every new year. The formula: if a brand accepts your rate without negotiation, you are undercharging — raise by 15–20% for your next pitch. Standard annual rate increase for Indian creators: 15–25% per year minimum.' },
                { q: 'Is it okay to charge different rates to different brands?', a: 'Yes — and it is standard professional practice. Large brands with ₹50 lakh marketing budgets pay more than small D2C startups with ₹1 lakh budgets, even for the same content. Many Indian creators use tiered pricing: a published base rate in their media kit, higher rates for enterprise brands, and discounted package rates for long-term partnerships. The key is to always quote based on the brand\'s size, campaign scope, and usage requirements — not just your follower count.' },
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
                { href: '/blog/influencer-media-kit-india-2026', title: 'Influencer Media Kit India 2026 — What to Include & Free Template', tag: 'Media Kit' },
                { href: '/blog/how-to-pitch-brands-india-influencer-2026', title: 'How to Pitch Brands as an Influencer in India 2026', tag: 'Brand Deals' },
                { href: '/blog/how-to-get-brand-deals-india', title: 'How to Get Brand Deals in India — Complete Guide 2026', tag: 'Brand Deals' },
                { href: '/blog/brand-deal-contract-template-india', title: 'Brand Deal Contract Template India — Free Download', tag: 'Legal' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>💰</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Stop guessing your rates. Build your rate card now.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Identity Kit builds your complete rate card, media kit, and creator CV in one free shareable link — so you always know what to charge and brands can see your rates instantly.
            </p>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Build My Free Rate Card →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 14 }}>
              identitykit.in · Free forever · Used by Indian creators to earn more from brand deals
            </div>
          </div>

        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/tools/influencer-rate-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Rate Calculator</Link>
          <Link href="/tools/brand-deal-contract-template" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contract Template</Link>
          <Link href="/about" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>About</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Free rate card for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
