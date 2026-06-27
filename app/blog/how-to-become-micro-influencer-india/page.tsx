import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Become a Micro Influencer in India in 2026 (Step-by-Step Guide)',
  description: 'Complete guide to becoming a micro influencer in India in 2026. How to start with zero followers, which niche to pick, how much micro influencers earn, how to get brand deals, and what brands look for in India.',
  keywords: 'how to become a micro influencer in india, micro influencer india, micro influencer earnings india, how to become influencer in india, micro influencer brand deals india, micro influencer income india 2026, nano influencer india, how to start as influencer india',
  openGraph: {
    title: 'How to Become a Micro Influencer in India in 2026 (Step-by-Step Guide)',
    description: 'Micro influencers in India with 10K–100K followers earn ₹5,000–₹80,000 per brand deal. Here is exactly how to start, grow, and monetise — from zero followers.',
    url: 'https://identitykit.in/blog/how-to-become-micro-influencer-india',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/micro-influencer-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/how-to-become-micro-influencer-india',
  },
}

const tiers = [
  {
    rank: 1,
    icon: '🌱',
    name: 'Nano Influencer',
    badge: '1K–10K Followers',
    badgeColor: '#4CAF50',
    badgeBg: 'rgba(76,175,80,0.1)',
    color: '#4CAF50',
    instagram: '₹1,000–₹10,000/post',
    youtube: '₹2,000–₹15,000/video',
    monthly: '₹5,000–₹30,000',
    engagementScore: 82,
    engagementLabel: 'Highest (5–8%)',
    why: 'Nano creators have the highest engagement rates in India — followers treat them like a trusted friend, not a celebrity. Brands testing new products in Tier 2–3 cities prefer nano influencers.',
    brandTypes: ['Local D2C', 'Startups', 'Food Brands', 'EdTech'],
    nextStep: '10K followers',
    nextStepActions: [
      'Post 5x per week consistently — the algorithm rewards consistency over viral content',
      'Pick one tight niche and never stray from it in the first 6 months',
      'Reply to every comment within the first hour — engagement velocity signals quality to the algorithm',
      'Collaborate with 3–5 nano creators in adjacent niches via shoutout swaps weekly',
      'Build your creator profile at identitykit.in before your first brand pitch — brands check it before replying',
    ],
  },
  {
    rank: 2,
    icon: '📈',
    name: 'Micro Influencer',
    badge: '10K–100K Followers',
    badgeColor: '#6C63FF',
    badgeBg: 'rgba(108,99,255,0.1)',
    color: '#6C63FF',
    instagram: '₹5,000–₹80,000/post',
    youtube: '₹15,000–₹1,50,000/video',
    monthly: '₹30,000–₹2,00,000',
    engagementScore: 62,
    engagementLabel: 'Strong (3–5%)',
    why: 'The sweet spot of India\'s creator economy. Micro influencers get 40% of India\'s total brand influencer budget in 2026 — up from 25% in 2023. Brands get better ROI here than from macro celebrities.',
    brandTypes: ['D2C Brands', 'Finance Apps', 'Beauty', 'EdTech', 'Health Supplements'],
    nextStep: '1 lakh followers',
    nextStepActions: [
      'Invest in one professional equipment upgrade: a ring light (₹800) or a Rode Wireless Go mic (₹8,000)',
      'Create a signature series — a recurring format that followers expect weekly (e.g. "Tuesday Finance Fix")',
      'Pitch directly to brand marketing managers on LinkedIn — better rates than influencer platforms',
      'Offer bundle packages: 3 Reels + 2 Stories for 30% less than individual rate — brands love packages',
      'Track your engagement rate per post and include it in every brand pitch — it is your strongest negotiation asset',
    ],
  },
  {
    rank: 3,
    icon: '⭐',
    name: 'Mid-Tier Influencer',
    badge: '100K–500K Followers',
    badgeColor: '#FF9800',
    badgeBg: 'rgba(255,152,0,0.1)',
    color: '#FF9800',
    instagram: '₹80,000–₹2,00,000/post',
    youtube: '₹1,00,000–₹5,00,000/video',
    monthly: '₹2,00,000–₹10,00,000',
    engagementScore: 44,
    engagementLabel: 'Moderate (2–3%)',
    why: 'At this level you attract national brands, retainer deals, and brand ambassador contracts. Multiple income streams (ads, affiliate, UGC, merchandise) become viable simultaneously.',
    brandTypes: ['National FMCG', 'OTT Platforms', 'Fintech', 'Real Estate Apps', 'Travel Brands'],
    nextStep: '10 lakh followers',
    nextStepActions: [
      'Hire a part-time editor (₹8,000–₹15,000/month) to double your content output without doubling your time',
      'Register your business as a sole proprietorship or LLP — brand managers prefer invoice-issuing creators for larger deals',
      'Negotiate 6–12 month brand ambassador retainers rather than one-off deals — monthly retainers are 3–5x more valuable',
      'Launch one owned product: a digital course, ebook, or preset pack that earns passively',
      'Join talent management agencies like Monk Entertainment or Winkl for access to enterprise brand campaigns',
    ],
  },
]

const niches = [
  {
    name: 'Personal Finance & Investing',
    icon: '💰',
    color: '#4CAF50',
    rateMultiplier: '3–5x',
    brandDemand: 92,
    demandLabel: 'Very High',
    why: 'Demat account referrals, fintech app installs, credit card sign-ups — finance brands pay performance bonuses on top of base rates. ₹500–₹2,000 per verified demat account signup.',
    contentIdeas: ['SIP vs lumpsum explained', 'Tax saving options', 'Budget breakdown reels', 'Stock analysis'],
    competition: 38,
    competitionLabel: 'Medium',
  },
  {
    name: 'Skincare & Beauty',
    icon: '✨',
    color: '#FF6B6B',
    rateMultiplier: '1.5–2.5x',
    brandDemand: 88,
    demandLabel: 'Very High',
    why: 'Highest volume of available brand deals in India. 40,000+ D2C beauty brands active on Instagram. Every new launch needs micro influencers for authentic seeding campaigns.',
    contentIdeas: ['Skincare routine reels', 'Product reviews', 'Ingredient decode', 'Budget vs premium'],
    competition: 72,
    competitionLabel: 'High',
  },
  {
    name: 'EdTech & Career Growth',
    icon: '🎓',
    color: '#6C63FF',
    rateMultiplier: '2–3x',
    brandDemand: 80,
    demandLabel: 'High',
    why: 'India\'s ₹7,500 crore EdTech market pays premiums to creators who can drive course enrollments. CPA deals on top of base rates common. Evergreen content — study tips perform year-round.',
    contentIdeas: ['Study hacks', 'Career pivots', 'Exam strategies', 'LinkedIn profile tips'],
    competition: 45,
    competitionLabel: 'Medium',
  },
  {
    name: 'Food & Cooking',
    icon: '🍛',
    color: '#FF9800',
    rateMultiplier: '1–1.5x',
    brandDemand: 85,
    demandLabel: 'Very High',
    why: 'Regional food content in Hindi, Tamil, Telugu, and Bengali gets 3–4x the engagement of English food content. Kitchen appliance brands, packaged food companies, and food delivery apps all budget heavily here.',
    contentIdeas: ['5-minute recipes', 'Regional dishes', 'Restaurant reviews', 'Grocery hauls'],
    competition: 65,
    competitionLabel: 'High',
  },
  {
    name: 'Fitness & Wellness',
    icon: '💪',
    color: '#4CAF50',
    rateMultiplier: '1.5–2.5x',
    brandDemand: 78,
    demandLabel: 'High',
    why: 'Supplement brands, fitness equipment, sports clothing — all with above-average budgets. Home workout content exploded post-2020 and has stayed high. Yoga and mental wellness are India\'s fastest growing sub-niches.',
    contentIdeas: ['Home workout routines', 'Supplement reviews', 'Yoga flows', 'Transformation posts'],
    competition: 58,
    competitionLabel: 'Medium-High',
  },
  {
    name: 'Tech & Gadgets',
    icon: '📱',
    color: '#00BCD4',
    rateMultiplier: '2–4x',
    brandDemand: 75,
    demandLabel: 'High',
    why: 'Electronics brands pay the highest affiliate commissions (Amazon 3–8% on gadgets). A single ₹50,000 laptop review at 5% commission earns ₹2,500 — and videos stay in YouTube search results for years.',
    contentIdeas: ['Phone unboxings', 'Budget laptop comparisons', 'App reviews', 'Setup tours'],
    competition: 50,
    competitionLabel: 'Medium',
  },
]

const steps = [
  {
    step: '01',
    title: 'Choose a niche at the intersection of expertise, interest, and demand',
    body: 'The biggest mistake new Indian creators make: picking a niche based only on passion. A creator who loves finance but hates explaining it will burn out in 3 months. The right niche is where your genuine knowledge meets an audience that is already searching for answers. Finance, skincare, EdTech, and fitness have the highest brand budgets in India — but only if you can create content consistently in them.',
    tip: 'Test 3 niches for 2 weeks each. The one where you generate content ideas effortlessly — without running dry — is your niche.',
  },
  {
    step: '02',
    title: 'Pick ONE platform and master it before expanding',
    body: 'Instagram Reels for fastest first brand deal. YouTube for highest long-term income. LinkedIn for professional/B2B audiences. Every Indian creator who burns out early tries to be everywhere simultaneously. Instagram is the best starting platform in 2026 because brand deals are accessible at 5K–10K followers, Reels distribution is still strong, and the feedback loop is fast — you see what works within 48 hours.',
    tip: 'Stay on one platform until you hit your first 3 paid brand deals. Then expand.',
  },
  {
    step: '03',
    title: 'Post 5x per week for the first 90 days — no exceptions',
    body: 'This feels extreme, but the data is clear: 90% of Indian creators who fail at growing an audience quit in the first 60 days because growth feels invisible. The algorithm rewards consistency with compounding distribution. Days 1–30 are for learning what content your audience responds to. Days 31–60 are for doubling down on what works. Days 61–90 are when the compounding begins and organic reach starts growing significantly.',
    tip: 'Batch create on weekends. 5 Reels filmed and edited on Sunday = one week of content. Remove daily decision fatigue.',
  },
  {
    step: '04',
    title: 'Build your creator profile before you send your first brand pitch',
    body: 'When a brand sees your DM or email, the first thing they do is Google you or look for your media kit. Without a professional profile showing your niche, audience stats, content samples, and rate card — they move to the next creator. Build your complete creator profile at identitykit.in before your first outreach. A complete profile gets 40x more responses from brands than an incomplete one.',
    tip: 'Your creator profile at identitykit.in should include: your niche, platforms, follower count, engagement rate, past collaborations (even gifted), and starting rates.',
  },
  {
    step: '05',
    title: 'Start brand outreach at 1,000 followers — not 10,000',
    body: 'Most creators wait until they have 10,000 followers to approach brands. Wrong. Start pitching at 1,000 followers — but pitch the right brands. Small Indian D2C brands (1,000–20,000 followers on Instagram) are actively looking for authentic nano creators to seed new products. They cannot afford macro influencers and genuinely need people like you. Your hyper-relevant niche audience at 1,000 engaged followers is more valuable to them than a general lifestyle creator at 50,000.',
    tip: 'Your first pitch offer: "I\'d like to create a video featuring your product for my [niche] audience of [number] engaged followers. Would you be open to sending a sample?" Most small brands say yes.',
  },
  {
    step: '06',
    title: 'Charge from deal 1 — minimum ₹2,000, no matter how small',
    body: 'Working for free or for products only is the single biggest career mistake Indian micro influencers make. Barter — where you get ₹800 worth of products in exchange for content worth ₹5,000+ of your time — devalues the industry and trains brands to undervalue creators. Limit yourself to 2 gifted-only collaborations for portfolio samples. After that: ₹2,000 minimum per deliverable, period. Raise rates every 3–5 paid deals.',
    tip: 'Standard formula to calculate your starting rate: Followers × 0.01 = minimum ₹ per Reel. At 10,000 followers: ₹10,000 minimum per Reel as the floor. Adjust for niche — finance doubles it, general lifestyle may halve it.',
  },
]

const mistakes = [
  {
    mistake: 'Chasing follower count over engagement rate',
    fix: 'Brands in 2026 check engagement rate before follower count. A creator with 8,000 followers at 7% engagement is worth more to a brand than 40,000 followers at 0.8%. Focus on getting your existing audience to comment, share, and save your content — not just on acquiring new followers.',
  },
  {
    mistake: 'No media kit or rate card when brands ask',
    fix: 'When a brand replies to your pitch asking for your rates and portfolio, you have 2 hours before they move on to another creator. If you don\'t have a ready link, you lose the deal. Build your media kit and rate card in advance at identitykit.in so you can reply in 30 seconds with a link.',
  },
  {
    mistake: 'Posting for the algorithm, not the audience',
    fix: 'Creators who only chase trending audio and viral formats build audiences that don\'t trust them. Brands want creators whose audiences actually buy things. Build trust by sharing genuine opinions, real results, and honest reviews — even when that means saying something isn\'t perfect.',
  },
  {
    mistake: 'Not disclosing paid partnerships',
    fix: 'The Advertising Standards Council of India (ASCI) requires disclosure of paid partnerships with #ad, #sponsored, or #paid_partnership. Violations can result in your account being flagged. More importantly, audiences in 2026 are sophisticated — undisclosed ads get reported and damage long-term trust.',
  },
  {
    mistake: 'Accepting any brand deal regardless of fit',
    fix: 'A beauty micro influencer promoting a B2B software tool confuses their audience and destroys the engagement signal that makes them valuable to beauty brands. Every off-niche deal dilutes your influence. Be willing to say no to money that isn\'t aligned. It pays off within 2–3 months.',
  },
]

export default function MicroInfluencerIndiaPage() {
  return (
    <div style={{ background: '#0A0A0F', minHeight: '100vh', color: '#E8E8F0', fontFamily: "'Inter', -apple-system, sans-serif" }}>

      {/* Nav */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 860, margin: '0 auto' }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: 18, background: 'linear-gradient(135deg, #6C63FF, #FF6B6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>
          Identity Kit
        </Link>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: '#9999BB', textDecoration: 'none', fontSize: 14 }}>Blog</Link>
          <Link href="/tools" style={{ color: '#9999BB', textDecoration: 'none', fontSize: 14 }}>Tools</Link>
          <Link href="/auth" style={{ background: 'linear-gradient(135deg, #6C63FF, #8B5CF6)', color: '#fff', padding: '8px 16px', borderRadius: 8, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Get Started Free</Link>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px' }}>

        {/* Hero */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['Influencer Marketing', 'Brand Deals', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(108,99,255,0.12)', color: '#6C63FF', border: '1px solid rgba(108,99,255,0.25)', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, margin: '0 0 20px', background: 'linear-gradient(135deg, #E8E8F0 60%, #6C63FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            How to Become a Micro Influencer in India in 2026
          </h1>
          <p style={{ fontSize: 18, color: '#9999BB', lineHeight: 1.7, margin: 0 }}>
            India has 150 million content creators. Fewer than 6 lakh earn any meaningful income from it. This guide shows you exactly how to cross that gap — from zero followers to your first paid brand deal, and from your first deal to ₹1 lakh per month.
          </p>
        </div>

        {/* AEO Quick Answer */}
        <div style={{ background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.25)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#6C63FF', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — How to Become a Micro Influencer in India</div>
          <p style={{ color: '#CCCCDD', fontSize: 15, lineHeight: 1.6, margin: '0 0 16px' }}>To become a micro influencer in India in 2026:</p>
          <ol style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Pick a tight niche — finance, skincare, EdTech, or fitness pay the most in India',
              'Choose Instagram as your primary platform and post 5x per week for 90 days',
              'Grow from 0 to 1,000 followers in Month 1 by engaging in your niche community daily',
              'Build a creator profile and rate card at identitykit.in before your first brand pitch',
              'Start brand outreach at 1,000 followers — pitch small Indian D2C brands with a free sample offer',
              'Charge a minimum ₹2,000 per deliverable from deal 1 — limit barter to 2 deals maximum',
              'Raise your rate after every 3–5 paid deals until you reach market rate for your follower tier',
            ].map((item, i) => (
              <li key={i} style={{ color: '#BBBBCC', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
            ))}
          </ol>
        </div>

        {/* GEO Citable Facts */}
        <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.2)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Micro Influencer Market India 2026</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'India\'s influencer marketing market reached ₹3,000–₹3,500 crore in H1 2026, growing at 22% CAGR.',
              '40% of Indian brand influencer budgets now go to micro influencers (10K–100K followers), up from 25% in 2023.',
              'Micro influencers in India with 10K–50K followers earn ₹5,000–₹50,000 per brand deal depending on niche and engagement.',
              'India has 35–45 lakh influencers, but only 6 lakh monetise effectively — meaning 87% of creators earn little to nothing.',
              'Finance and fintech micro influencers in India earn 3–5x more per deal than general lifestyle creators at the same follower count.',
              'Instagram claims 75% of creator revenue in India; micro influencers with 3–5% engagement rates are most in-demand for D2C brand campaigns.',
              'Brands in India now spend ₹2–7 lakh per influencer campaign in 2026, up from ₹1–5 lakh in FY24.',
              'A micro influencer\'s first brand deal in India typically arrives at 1,000–5,000 followers when outreach is active, not at 10,000 followers.',
            ].map((fact, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                <span style={{ color: '#BBBBCC', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Follower Tier Cards */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>Influencer Tiers in India — What You Earn at Every Level</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 28 }}>Here is exactly what Indian influencers earn at each follower tier in 2026 — and the specific steps to reach the next level from where you are now.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {tiers.map((tier) => (
              <div key={tier.rank} style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${tier.color}25`, borderRadius: 16, overflow: 'hidden' }}>

                {/* Header */}
                <div style={{ background: `linear-gradient(135deg, ${tier.color}18, ${tier.color}08)`, borderBottom: `1px solid ${tier.color}20`, padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ fontSize: 28 }}>{tier.icon}</div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                        <span style={{ fontWeight: 800, fontSize: 18, color: '#E8E8F0' }}>{tier.name}</span>
                        <span style={{ background: tier.badgeBg, color: tier.badgeColor, border: `1px solid ${tier.badgeColor}40`, padding: '2px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{tier.badge}</span>
                      </div>
                      <div style={{ color: '#9999BB', fontSize: 13 }}>{tier.why}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#666688', fontSize: 11, marginBottom: 2 }}>Monthly potential</div>
                    <div style={{ fontWeight: 800, color: '#4CAF50', fontSize: 18 }}>{tier.monthly}</div>
                  </div>
                </div>

                {/* Stats row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.03)', borderBottom: `1px solid ${tier.color}15` }}>
                  {[
                    { label: 'Instagram Rate', value: tier.instagram },
                    { label: 'YouTube Rate', value: tier.youtube },
                    { label: 'Engagement', value: tier.engagementLabel },
                  ].map((stat) => (
                    <div key={stat.label} style={{ padding: '14px 18px', background: '#0A0A0F' }}>
                      <div style={{ fontSize: 10, color: '#666688', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 5 }}>{stat.label}</div>
                      <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 14 }}>{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Engagement bar */}
                <div style={{ padding: '14px 28px', borderBottom: `1px solid rgba(255,255,255,0.04)`, display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ fontSize: 11, color: '#666688', minWidth: 100 }}>Engagement rate</span>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 5 }}>
                    <div style={{ width: `${tier.engagementScore}%`, height: '100%', borderRadius: 3, background: tier.engagementScore >= 70 ? '#4CAF50' : tier.engagementScore >= 50 ? '#6C63FF' : '#FF9800' }} />
                  </div>
                  <span style={{ fontSize: 11, color: tier.color, minWidth: 70, textAlign: 'right' }}>{tier.engagementLabel}</span>
                </div>

                {/* Brand types */}
                <div style={{ padding: '14px 28px', borderBottom: `1px solid rgba(255,255,255,0.04)` }}>
                  <div style={{ fontSize: 11, color: '#666688', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 10 }}>Brands that hire at this tier</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {tier.brandTypes.map((b) => (
                      <span key={b} style={{ background: `${tier.color}12`, color: tier.color, border: `1px solid ${tier.color}25`, padding: '3px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{b}</span>
                    ))}
                  </div>
                </div>

                {/* How to reach next level */}
                <div style={{ padding: '16px 28px' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#666688', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>How to reach {tier.nextStep} — 5 steps</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {tier.nextStepActions.map((action, j) => (
                      <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: tier.color, flexShrink: 0, marginTop: 2 }}>→</span>
                        <span style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.6 }}>{action}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Niche Section */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>Best Niches for Micro Influencers in India 2026</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 24 }}>Your niche determines your earning ceiling more than your follower count. A finance micro influencer at 20K followers earns 3–5x more than a lifestyle creator at 20K followers because brand budgets are niche-dependent.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {niches.map((niche, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '20px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                      <span style={{ fontSize: 20 }}>{niche.icon}</span>
                      <span style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 16 }}>{niche.name}</span>
                      <span style={{ background: `${niche.color}18`, color: niche.color, border: `1px solid ${niche.color}30`, padding: '2px 8px', borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{niche.rateMultiplier} rate premium</span>
                    </div>
                    <div style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.6, maxWidth: 520 }}>{niche.why}</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
                  <div>
                    <div style={{ fontSize: 11, color: '#666688', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.8 }}>Brand demand</div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 4 }}>
                        <div style={{ width: `${niche.brandDemand}%`, height: '100%', borderRadius: 3, background: niche.color }} />
                      </div>
                      <span style={{ fontSize: 11, color: niche.color, minWidth: 60, textAlign: 'right', fontWeight: 600 }}>{niche.demandLabel}</span>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: '#666688', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.8 }}>Competition level</div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 4 }}>
                        <div style={{ width: `${niche.competition}%`, height: '100%', borderRadius: 3, background: niche.competition >= 65 ? '#FF5252' : niche.competition >= 45 ? '#FF9800' : '#4CAF50' }} />
                      </div>
                      <span style={{ fontSize: 11, color: niche.competition >= 65 ? '#FF5252' : niche.competition >= 45 ? '#FF9800' : '#4CAF50', minWidth: 70, textAlign: 'right', fontWeight: 600 }}>{niche.competitionLabel}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: 11, color: '#666688', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.8 }}>Content ideas</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {niche.contentIdeas.map((idea) => (
                      <span key={idea} style={{ background: 'rgba(255,255,255,0.04)', color: '#BBBBCC', border: '1px solid rgba(255,255,255,0.08)', padding: '4px 10px', borderRadius: 8, fontSize: 12 }}>→ {idea}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6 Steps */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>How to Become a Micro Influencer in India — 6 Steps From Zero</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 24 }}>This is the exact sequence. Most creators do these steps out of order — or skip step 4 entirely — and wonder why brands don&apos;t respond to their pitches.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {steps.map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '22px 26px' }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: 10, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#6C63FF', fontSize: 16, flexShrink: 0 }}>{item.step}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 16, marginBottom: 10 }}>{item.title}</div>
                    <div style={{ color: '#9999BB', fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>{item.body}</div>
                    <div style={{ background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
                      <span style={{ color: '#6C63FF', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>PRO TIP</span>
                      <span style={{ color: '#BBBBCC', fontSize: 13, lineHeight: 1.5 }}>{item.tip}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rate calculator CTA inline */}
        <div style={{ background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 14, padding: '24px 28px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 16, marginBottom: 6 }}>Not sure what to charge for your first brand deal?</div>
            <div style={{ color: '#9999BB', fontSize: 14 }}>Use our free Influencer Rate Calculator to get your exact rate based on followers, engagement, and niche.</div>
          </div>
          <Link href="/tools/influencer-rate-calculator" style={{ background: 'linear-gradient(135deg, #6C63FF, #8B5CF6)', color: '#fff', padding: '12px 22px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
            Calculate Your Rate Free →
          </Link>
        </div>

        {/* Mistakes */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 20px', color: '#E8E8F0' }}>5 Mistakes Indian Micro Influencers Make</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {mistakes.map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.1)', borderRadius: 12, padding: '18px 22px', display: 'flex', gap: 16 }}>
                <div style={{ color: '#FF5252', fontWeight: 700, fontSize: 20, flexShrink: 0 }}>✗</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#FF8080', fontSize: 15, marginBottom: 6 }}>Mistake: {item.mistake}</div>
                  <div style={{ color: '#9999BB', fontSize: 14, lineHeight: 1.6 }}><span style={{ color: '#4CAF50', fontWeight: 600 }}>Fix: </span>{item.fix}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ AEO */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 24px', color: '#E8E8F0' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'How many followers do you need to be a micro influencer in India?', a: 'A micro influencer in India is defined as a creator with 10,000 to 100,000 followers. However, the more practical definition is a creator with a niche, engaged audience who actively receives brand deals — and that can start at 1,000–5,000 followers when outreach is active. The follower count boundary matters less than engagement rate and niche relevance to brands.' },
              { q: 'How much do micro influencers earn in India per month?', a: 'Micro influencers in India with 10K–100K followers earn ₹30,000–₹2,00,000 per month from brand deals, affiliate marketing, and content creation services combined. Brand deal rates per Reel range from ₹5,000–₹80,000 depending on niche and engagement. Finance micro influencers earn 3–5x more than lifestyle creators at the same follower count. Most micro influencers reach ₹1 lakh per month within 6–12 months of active monetisation at 25K–50K followers.' },
              { q: 'Which niche is best for micro influencers in India?', a: 'Personal finance and investing offers the highest brand deal rates for Indian micro influencers — 3–5x the rate of general lifestyle creators — because fintech brands pay performance bonuses per verified signup in addition to base rates. Skincare and beauty offers the highest volume of available deals. EdTech is the fastest-growing segment. The best niche for you is at the intersection of your genuine expertise, your ability to create consistent content, and one of these high-demand categories.' },
              { q: 'How do I get my first brand deal in India as a micro influencer?', a: 'Start brand outreach at 1,000 followers — not 10,000. Identify 20–30 small Indian D2C brands in your niche with 1,000–20,000 Instagram followers. DM or email their marketing team: "I create content for [niche] audiences of [number] engaged followers — I\'d like to feature your product. Would you be open to sending a sample?" Build your creator profile and media kit at identitykit.in before starting outreach so you have a professional link to share when brands respond.' },
              { q: 'How long does it take to become a micro influencer in India?', a: 'Most Indian creators who post consistently (5x per week) in a specific niche reach 1,000 followers within 30 days and 10,000 followers within 6–9 months. The first paid brand deal typically arrives at month 2–3 for creators who actively pitch, not month 6–9. The milestone of ₹1 lakh per month as a micro influencer takes 9–18 months for most creators who start from zero and maintain consistent content and active brand outreach.' },
              { q: 'Do micro influencers need to register for GST in India?', a: 'Indian creators must register for GST once their annual income from brand deals and services exceeds ₹20 lakh (₹10 lakh for special category states). Below that threshold, GST registration is optional but helpful — many large brands require a GSTIN to process invoices and TDS under Section 194J. Maintain proper invoicing from your first paid deal, even before crossing the GST threshold, to build a clean financial record for future brand partnerships.' },
              { q: 'Can I become a micro influencer without showing my face?', a: 'Yes — several of the most successful micro influencer niches in India work without face reveal: finance content (screen recordings, charts, data visualisations), cooking (hands and food only), tech tutorials (screen recordings), and book summaries (text and graphic content). Faceless content removes a significant barrier for creators who are camera-shy. However, creators who do show their face typically build audience trust faster and command higher brand deal rates, especially in lifestyle, fitness, and personal brand niches.' },
              { q: 'What is the difference between a nano and micro influencer in India?', a: 'A nano influencer in India has 1,000–10,000 followers. A micro influencer has 10,000–100,000 followers. Nano influencers have the highest engagement rates (5–8%) and are ideal for hyper-local, community-driven brands. Micro influencers have the best combination of reach, engagement (3–5%), and affordability for brands. In 2026, 40% of India\'s brand influencer budget goes to micro influencers — the highest of any tier — because they deliver the best ROI for D2C brand campaigns.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '20px 24px' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#E8E8F0', margin: '0 0 10px' }}>{item.q}</h3>
                <p style={{ color: '#9999BB', lineHeight: 1.7, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 20px', color: '#E8E8F0' }}>Related Articles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
            {[
              { href: '/blog/how-to-get-brand-deals-india', title: 'How to Get Brand Deals in India — Complete Guide 2026', tag: 'Brand Deals' },
              { href: '/blog/influencer-rate-card-india', title: 'Influencer Rate Card India 2026 — What to Charge Brands', tag: 'Rate Card' },
              { href: '/blog/how-to-grow-instagram-followers-india', title: 'How to Grow Instagram Followers in India Organically', tag: 'Instagram Growth' },
              { href: '/blog/best-niche-for-content-creators-india-2026', title: 'Best Niche for Content Creators in India 2026 — 12 Niches Ranked', tag: 'Niche Selection' },
            ].map((post) => (
              <Link key={post.href} href={post.href} style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '18px 20px', display: 'block' }}>
                <div style={{ fontSize: 11, color: '#6C63FF', fontWeight: 600, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>{post.tag}</div>
                <div style={{ color: '#BBBBCC', fontSize: 14, lineHeight: 1.5, fontWeight: 500 }}>{post.title}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(139,92,246,0.08))', border: '1px solid rgba(108,99,255,0.25)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' }}>
          <div style={{ fontSize: 36, marginBottom: 16 }}>🌟</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 12px', color: '#E8E8F0' }}>
            Build Your Micro Influencer Profile — Free
          </h2>
          <p style={{ color: '#9999BB', lineHeight: 1.7, marginBottom: 28, maxWidth: 500, margin: '0 auto 28px', fontSize: 15 }}>
            Every brand you pitch will ask for your media kit, audience stats, and rate card. Identity Kit gives you all three in one professional, shareable link — so you look like a pro from your very first pitch. Free. 10 minutes to set up.
          </p>
          <Link href="/auth" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #6C63FF, #8B5CF6)', color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 16 }}>
            Create Your Free Identity Kit →
          </Link>
          <div style={{ color: '#666688', fontSize: 13, marginTop: 14 }}>
            identitykit.in · No credit card · Media kit + Rate card + Creator CV in one link
          </div>
        </div>

      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center', color: '#444466', fontSize: 13 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Link href="/" style={{ color: '#6C63FF', textDecoration: 'none', fontWeight: 600 }}>Identity Kit</Link>
          {' · '}
          <Link href="/blog" style={{ color: '#666688', textDecoration: 'none' }}>Blog</Link>
          {' · '}
          <Link href="/tools" style={{ color: '#666688', textDecoration: 'none' }}>Tools</Link>
          {' · '}
          <Link href="/tools/influencer-rate-calculator" style={{ color: '#666688', textDecoration: 'none' }}>Rate Calculator</Link>
          {' · '}
          <Link href="/about" style={{ color: '#666688', textDecoration: 'none' }}>About</Link>
          <div style={{ marginTop: 8 }}>© 2026 Identity Kit · India&apos;s creator profile platform · identitykit.in</div>
        </div>
      </footer>
    </div>
  )
}
