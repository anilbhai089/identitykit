import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Become a Content Creator in India in 2026 (Zero to ₹1 Lakh/Month Roadmap)',
  description: 'Complete step-by-step guide to becoming a content creator in India in 2026. India has 100M+ creators but only 150,000 earn livable income. Niche selection, platform choice, free tools, first brand deal strategy, income timeline, and everything you need to go from zero to ₹1 lakh per month.',
  keywords: 'how to become a content creator in india, content creator india 2026, how to start content creation india, content creator career india, how to become influencer india, content creation tips india beginners, how to earn as content creator india, content creator income india',
  openGraph: {
    title: 'How to Become a Content Creator in India in 2026 (Zero to ₹1 Lakh/Month Roadmap)',
    description: 'India has 100M+ creators but fewer than 150,000 earn a livable income. The difference is strategy, not talent. Complete roadmap — niche, platform, tools, first brand deal, and income milestones.',
    url: 'https://identitykit.in/blog/how-to-become-content-creator-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/content-creator-india-2026.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/how-to-become-content-creator-india-2026',
  },
}

const platforms = [
  {
    name: 'YouTube',
    icon: '▶️',
    color: '#FF0000',
    bestFor: 'Highest long-term income',
    timeToFirst: '6–12 months to first income',
    incomeAt1Year: '₹10,000–₹1,00,000/month',
    growthSpeed: 35,
    incomeScore: 95,
    why: 'Highest earning ceiling of any Indian creator platform. Finance and education channels earn ₹80–₹250 RPM. Long-form videos are evergreen — a video you made 2 years ago still earns today. The hardest to grow on but the most rewarding long-term.',
    niches: ['Finance', 'Tech', 'Education', 'Comedy', 'Cooking'],
    tip: 'Post 2 long-form videos + 5 Shorts per week. Shorts grow your subscriber count fast; long-form earns the revenue.',
  },
  {
    name: 'Instagram',
    icon: '📸',
    color: '#E91E63',
    bestFor: 'Fastest first brand deal',
    timeToFirst: '2–4 months to first income',
    incomeAt1Year: '₹15,000–₹80,000/month',
    growthSpeed: 82,
    incomeScore: 70,
    why: 'The best platform for your first brand deal in India. Brands are most active here. You can get paid collaborations at 5,000–10,000 followers if your niche and engagement are strong. Reels give high organic reach. Shorter feedback loops mean you learn what works faster.',
    niches: ['Beauty', 'Fitness', 'Food', 'Fashion', 'Finance', 'Travel'],
    tip: 'Post 5 Reels per week for the first 90 days. Spend 15 minutes daily commenting in your niche community — it drives algorithmic reach faster than any hack.',
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    color: '#0077B5',
    bestFor: 'Professional/B2B brand deals',
    timeToFirst: '3–6 months to first income',
    incomeAt1Year: '₹30,000–₹3,00,000/month',
    growthSpeed: 45,
    incomeScore: 88,
    why: 'The highest-quality audience of any Indian platform — professionals with decision-making authority and above-average income. Only 3% of LinkedIn members post weekly, giving consistent creators enormous reach advantages. Finance, tech, and HR creators earn 3–5x more per brand deal than equivalent Instagram creators.',
    niches: ['Finance', 'Career', 'Tech/AI', 'HR', 'Startup', 'Mental Health'],
    tip: 'Post 3x per week. Carousel posts (3.4% engagement) and personal story text posts perform best. Comment on 10 posts in your niche every morning.',
  },
  {
    name: 'YouTube Shorts',
    icon: '⚡',
    color: '#FF6B2B',
    bestFor: 'Fastest subscriber growth',
    timeToFirst: '3–6 months to first income',
    incomeAt1Year: '₹5,000–₹40,000/month',
    growthSpeed: 95,
    incomeScore: 42,
    why: 'Best platform for growing a subscriber base fast. Shorts can get 1 lakh views with 500 subscribers. Low ad RPM (₹5–₹30 per 1K views) but extremely fast growth. Use Shorts as your subscriber growth engine, then convert those subscribers to long-form viewers where the real ad money is.',
    niches: ['Comedy', 'Finance tips', 'Study tips', 'Fitness', 'Cooking'],
    tip: 'Hook within first 3 seconds is everything. Use no music or Creator Music library tracks to keep maximum Shorts ad revenue.',
  },
  {
    name: 'Blog / Website',
    icon: '✍️',
    color: '#4CAF50',
    bestFor: 'Highest passive income long-term',
    timeToFirst: '6–18 months to first income',
    incomeAt1Year: '₹5,000–₹2,00,000/month',
    growthSpeed: 20,
    incomeScore: 85,
    why: 'The slowest to grow but the most passive income stream. A well-ranked blog post earns affiliate commissions and ad revenue for years without additional effort. Best combined with YouTube or Instagram — use social media for discovery, blog for passive income.',
    niches: ['Finance', 'Tech', 'Health', 'Travel', 'Career', 'DIY'],
    tip: 'Target low-competition keywords (KD under 20) in your niche. One well-ranked article in a high-CPM niche earns ₹20,000–₹1,00,000/month indefinitely.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Find your niche at the intersection of passion, knowledge, and demand',
    icon: '🎯',
    body: 'India has 100 million+ content creators. The ones who earn meaningful income — fewer than 150,000 — all have one thing in common: a tight niche. A niche is not "lifestyle" or "motivation" or "entertainment." Those are categories. A niche is "personal finance for Indian college students" or "home workouts for working mothers" or "tech product reviews in Hindi." Specific. Searchable. Serving a defined audience with a defined need.',
    action: 'Write down: (1) 5 topics you know enough about to create content for 2 years, (2) 5 topics Indian audiences actively search for, (3) The overlap. That overlap is your niche.',
    tip: 'The 5 highest-earning niches for Indian creators in 2026: personal finance, tech/AI, career growth, health/fitness, EdTech. Pick the one you can create content about without running dry.',
  },
  {
    step: '02',
    title: 'Choose ONE platform and commit to it for 90 days',
    icon: '📱',
    body: 'The most common beginner mistake: trying to be on Instagram, YouTube, LinkedIn, and a blog simultaneously. The result is mediocre content everywhere and a large audience nowhere. Platform algorithms reward consistency and engagement within that platform — a creator who posts 5x per week on Instagram will always outgrow one who posts 1x per week across 5 platforms. Choose the platform where your niche audience already spends time, not the platform you personally prefer.',
    action: 'Ask yourself: "Where does my target audience go when they want content about my topic?" That platform is your answer. Post only there for 90 days.',
    tip: 'If your goal is fastest first income: Instagram. Highest long-term income: YouTube. Professional audience / B2B brand deals: LinkedIn. Fastest subscriber growth: YouTube Shorts.',
  },
  {
    step: '03',
    title: 'Start with ₹0 equipment — upgrade only after your first paid deal',
    icon: '📷',
    body: 'The equipment trap kills more Indian creator careers than anything else. Creators spend ₹50,000 on a camera before they have 100 followers, then quit when the follower count doesn\'t justify the investment. Your smartphone\'s back camera (not selfie camera) is enough. A ₹300–₹500 wired lavalier microphone from Amazon is the single highest-impact equipment upgrade — bad audio kills a video more than bad video quality. Natural window light is free and works better than most ring lights.',
    action: 'Total starter budget: ₹500–₹1,000 (wired mic from Amazon). Shooting location: near a window for natural light. Editing: CapCut (free), Canva (free), InShot (free). You are ready.',
    tip: 'Upgrade your microphone before your camera. Audio quality affects watch time more than video quality. A ₹500 lavalier mic makes your content immediately more professional.',
  },
  {
    step: '04',
    title: 'Create a content calendar and post consistently for 90 days without stopping',
    icon: '📅',
    body: 'The average Indian creator quits within 60 days. The reason is always the same: growth feels invisible in the first month, so they assume it\'s not working. Platform algorithms need 60–90 days of consistent signals before they start distributing your content broadly. Days 1–30 are for learning what your audience responds to. Days 31–60 are for doubling down on what works. Days 61–90 are when algorithmic compounding begins. Creators who quit at day 45 never see the growth that starts at day 60.',
    action: 'Batch create content on weekends: plan and shoot 5–7 pieces of content in one session. Schedule them to post throughout the week. Remove the daily decision to "what do I post today."',
    tip: 'Minimum posting frequency by platform: Instagram — 5 Reels/week. YouTube — 2 long-form/week + 3–5 Shorts. LinkedIn — 3 posts/week. Blog — 2 articles/week.',
  },
  {
    step: '05',
    title: 'Build your creator profile before you send your first brand pitch',
    icon: '📋',
    body: 'When a brand manager receives your DM or email, the first thing they do is Google you or look for your media kit. If your only presence is a social media profile with no stats, no niche description, no past collaborations, and no rate card — they move to the next creator within 30 seconds. A professional creator profile makes the difference between a brand replying and not replying. Build your complete media kit, rate card, and creator CV at identitykit.in before your first outreach — it takes 10 minutes and is free.',
    action: 'Go to identitykit.in right now and build your creator profile. Add: your niche, platforms, follower count (even if small), content samples, and starting rate. Then add the link to your Instagram bio or LinkedIn featured section.',
    tip: 'Creators with a professional media kit link in their bio or pitch email get 40x more brand deal responses than those without one. The link signals that you treat content creation as a business.',
  },
  {
    step: '06',
    title: 'Start brand outreach at 1,000 followers — not 10,000',
    icon: '🤝',
    body: 'Most Indian creators wait until they have 10,000 followers to approach brands. This is a mistake that costs 6–12 months of potential income. Small Indian D2C brands — brands with 1,000–20,000 Instagram followers — are actively looking for nano creators to seed new products and create authentic content. They can\'t afford macro influencers and genuinely need creators like you. Your hyper-engaged 1,000-follower audience in a specific niche is often worth more to a small brand than 50,000 disengaged general lifestyle followers.',
    action: 'Identify 20 small D2C brands in your niche. DM their marketing team or founder: "I create [niche] content for [number] engaged followers in [city/India]. I\'d love to feature your product — would you be open to sending a sample?" Most small brands say yes.',
    tip: 'Your first 2–3 collaborations can be gifted (product only, no cash) to build your portfolio. After that: charge money. Minimum ₹2,000 per deliverable, regardless of follower count.',
  },
  {
    step: '07',
    title: 'Diversify income streams from month 6 onward',
    icon: '💰',
    body: 'Creators who rely on a single income stream (only ad revenue, or only brand deals) face existential risk when algorithms change or brand budgets shift. The Indian creators earning ₹1 lakh+ per month consistently combine 3–5 income streams: brand deals + affiliate marketing + platform ad revenue + digital products + consulting/services. Start with brand deals (highest income per hour). Add affiliate links in month 3. Add a digital product (a template, ebook, or mini-course) in month 6. Each stream adds to the others.',
    action: 'Month 1–3: Focus on content quality and consistency only. Month 3–6: Add affiliate links to your niche. Month 6+: Add one paid digital product. Month 9+: Start pitching for retainer brand deals (monthly contracts vs one-off).',
    tip: 'Income streams ranked by time investment required: (1) Affiliate links — set up once, earn passively. (2) Platform ad revenue — automatic once qualified. (3) Brand deals — active but high income per hour. (4) Digital products — effort upfront, passive thereafter. (5) Consulting — highest hourly rate but active.',
  },
]

const incomeTimeline = [
  { month: 'Month 1–2', focus: 'Content & Consistency', income: '₹0', milestone: 'Post 5x/week. Learn what content your audience responds to. Build your creator profile at identitykit.in.', color: '#666688' },
  { month: 'Month 3–4', focus: 'First Brand Deals', income: '₹2,000–₹10,000', milestone: 'First gifted collaborations or small paid deals at 1,000–3,000 followers. Add affiliate links to your bio. First real income.', color: '#FF9800' },
  { month: 'Month 5–6', focus: 'Scaling Deals', income: '₹10,000–₹40,000', milestone: 'Reach 5,000–10,000 followers. Start charging minimum ₹5,000 per Reel. First repeat brand clients. Add first digital product.', color: '#4CAF50' },
  { month: 'Month 7–9', focus: 'Micro Influencer Tier', income: '₹30,000–₹80,000', milestone: 'Reach 10,000–25,000 followers. Multiple active brand partnerships. Affiliate income starts compounding. Platform ad revenue begins.', color: '#6C63FF' },
  { month: 'Month 10–12', focus: '₹1 Lakh Milestone', income: '₹50,000–₹1,50,000', milestone: 'Reach 25,000–50,000 followers. Multiple income streams active. First retainer brand deals. Full content creation career income possible.', color: '#FF6B2B' },
]

const freeTools = [
  { category: 'Video Editing', tools: ['CapCut (free, mobile) — best for Reels and Shorts', 'DaVinci Resolve (free, desktop) — professional-grade for YouTube', 'InShot (free, mobile) — quick edits with text overlays'] },
  { category: 'Design & Thumbnails', tools: ['Canva (free tier) — thumbnails, carousels, Story graphics', 'Adobe Express (free) — quick social media designs', 'Remove.bg (free) — background removal for thumbnails'] },
  { category: 'Script & Content Writing', tools: ['Claude.ai (free tier) — scripts, captions, blog outlines', 'ChatGPT (free tier) — content ideas, hooks, descriptions', 'Hemingway Editor (free) — simplify your writing'] },
  { category: 'Scheduling & Analytics', tools: ['Meta Business Suite (free) — schedule Instagram and Facebook posts', 'Buffer (free tier) — cross-platform scheduling', 'YouTube Studio (free) — full analytics dashboard for YouTube'] },
  { category: 'Creator Profile & Media Kit', tools: ['Identity Kit (free) — media kit, rate card, and creator CV in one shareable link', 'Canva (free) — basic media kit template if you prefer DIY'] },
  { category: 'SEO & Keyword Research', tools: ['Google Search Console (free) — see what searches bring you traffic', 'TubeBuddy (free tier) — YouTube keyword research', 'Ubersuggest (free tier) — blog keyword research'] },
]

const mistakes = [
  { m: 'Buying expensive equipment before you have an audience', f: 'A ₹50,000 camera does not grow your Instagram following. Consistent valuable content does. Start with your phone and a ₹500 mic. Upgrade equipment with money earned from your first brand deals — not before.' },
  { m: 'Changing your niche every 2–4 weeks when growth feels slow', f: 'The algorithm takes 60–90 days to understand what your content is about and who to show it to. Changing your niche resets this clock completely. Commit to one niche for a minimum of 90 days before evaluating.' },
  { m: 'Copying viral content formats without understanding why they worked', f: 'Copying a trending format without the context, personality, or angle that made the original work produces content that feels derivative. Study why viral content worked — the emotion it triggered, the problem it solved — then create your own version with your unique perspective.' },
  { m: 'Having no media kit or rate card when brands reach out', f: 'When a brand replies to your pitch, you have 2 hours before they move to the next creator. If you don\'t have a rate card ready, you lose the deal. Build your media kit at identitykit.in before your first outreach so you can reply with a professional link in 30 seconds.' },
  { m: 'Treating content creation as a hobby instead of a business from day 1', f: 'Track your analytics weekly. Know your engagement rate, best-performing content, and posting schedule. File your taxes on creator income. Register for GST when you cross ₹20 lakh/year. Invoice every brand professionally. The creators who earn ₹1 lakh+ per month are running businesses, not hobbies.' },
]

export default function ContentCreatorIndiaPage() {
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
          .three-col { grid-template-columns: 1fr 1fr !important; }
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

        {/* Hero */}
        <div className="hero-pad" style={{ padding: '64px 24px 40px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['Content Creation', 'Beginner Guide', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Become a Content Creator in India in 2026<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>(Zero to ₹1 Lakh/Month Roadmap)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            India has 100 million+ content creators. Fewer than 150,000 earn a livable income from it. The difference between the 0.15% who succeed and the 99.85% who don&apos;t is not talent — it&apos;s strategy. This is the exact roadmap.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — How to Become a Content Creator in India</div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6, marginBottom: 16 }}>7-step roadmap from zero to ₹1 lakh/month as an Indian content creator:</p>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Find your niche at the intersection of what you know, what you enjoy, and what Indian audiences search for — finance, tech, career growth, fitness, and EdTech pay the most',
                'Choose ONE platform for 90 days: Instagram (fastest first brand deal), YouTube (highest long-term income), LinkedIn (professional audience, highest brand deal rates)',
                'Start with your smartphone + a ₹500 wired lavalier mic — do not buy a camera until after your first paid brand deal',
                'Post consistently: 5 Reels/week on Instagram, 2 videos/week on YouTube, 3 posts/week on LinkedIn — without stopping for 90 days',
                'Build your creator profile, media kit, and rate card at identitykit.in (free, 10 minutes) before your first brand outreach',
                'Start pitching small Indian D2C brands at 1,000 followers — not 10,000. Charge minimum ₹2,000 per deliverable from deal 1',
                'From month 6: add affiliate links, a digital product, and platform ad revenue on top of brand deals to build multiple income streams',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — India Creator Economy 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'India\'s creator economy is valued at USD 15.03 billion in 2026 and is expected to reach USD 61.87 billion by 2033, growing at a CAGR of 22.4%.',
                'India has 100 million+ content creators across platforms, but fewer than 150,000 earn enough to consider content creation a primary income source.',
                'India\'s influencer marketing industry reached ₹3,375 crore in 2025, growing at 25% CAGR, with 35–45 lakh active influencers expected by 2027.',
                'AI tools save Indian creators an estimated 15–25 hours per week — creators who use AI produce 3–5x more content at similar or better quality.',
                'Over 65% of Indian internet users prefer consuming content in regional languages including Hindi, Marathi, Tamil, Bengali, and Telugu.',
                'India\'s per-GB data tariff is approximately ₹6–₹8 — the lowest in the world — making mobile content consumption 25x cheaper than the global average.',
                'Brands in India spend ₹2–7 lakh per influencer campaign in 2026, up from ₹1–5 lakh in FY24, with micro-creators (10K–100K followers) receiving 40% of total brand budgets.',
                'The average creator takes 6.5 months to earn their first rupee from content creation; creators who actively pitch brands cut this to 2–4 months.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Comparison */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Which Platform to Start On — India 2026</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Platform choice is the most important decision you make as a new Indian creator. Each platform has a different growth speed, income timeline, and brand deal ecosystem. Choose based on your goal, not your preference.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {platforms.map((plat, i) => (
                <div key={i} className="card">
                  <div style={{ background: `linear-gradient(135deg, ${plat.color}15, ${plat.color}05)`, borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{ background: `${plat.color}20`, border: `1px solid ${plat.color}35`, borderRadius: 10, width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{plat.icon}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                          <span style={{ fontWeight: 800, fontSize: 18 }}>{plat.name}</span>
                          <span style={{ background: `${plat.color}18`, color: plat.color, border: `1px solid ${plat.color}30`, padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700 }}>{plat.bestFor}</span>
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>{plat.timeToFirst}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, marginBottom: 2 }}>Income at 1 year</div>
                      <div style={{ fontWeight: 800, color: '#4CAF50', fontSize: 15 }}>{plat.incomeAt1Year}</div>
                    </div>
                  </div>

                  <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.7 }}>{plat.why}</div>
                  </div>

                  <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.01)' }}>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>Growth speed</div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 4 }}>
                          <div style={{ width: `${plat.growthSpeed}%`, height: '100%', borderRadius: 3, background: plat.growthSpeed >= 70 ? '#4CAF50' : plat.growthSpeed >= 40 ? '#FF9800' : '#FF5252' }} />
                        </div>
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', minWidth: 24 }}>{plat.growthSpeed}</span>
                      </div>
                    </div>
                    <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.01)' }}>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>Income potential</div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 4 }}>
                          <div style={{ width: `${plat.incomeScore}%`, height: '100%', borderRadius: 3, background: plat.incomeScore >= 80 ? '#4CAF50' : plat.incomeScore >= 60 ? '#FF9800' : '#6C63FF' }} />
                        </div>
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', minWidth: 24 }}>{plat.incomeScore}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: '12px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>Best niches on this platform</div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {plat.niches.map(n => (
                        <span key={n} style={{ background: `${plat.color}10`, color: plat.color, border: `1px solid ${plat.color}22`, padding: '3px 10px', borderRadius: 100, fontSize: 12, fontWeight: 600 }}>{n}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: '12px 24px' }}>
                    <div style={{ background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.18)', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
                      <span style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>PRO TIP</span>
                      <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{plat.tip}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7 Steps */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>7-Step Roadmap: From Zero to Content Creator in India</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>The exact sequence that works. Most creators do steps 3, 4, and 6 out of order — or skip step 5 entirely — which is the most expensive mistake in content creation.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {steps.map((item) => (
                <div key={item.step} className="card" style={{ padding: '22px 24px' }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 10, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#FF6B2B', fontSize: 15, flexShrink: 0 }}>{item.step}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 20 }}>{item.icon}</span>
                        <span style={{ fontWeight: 800, fontSize: 16 }}>{item.title}</span>
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.75, marginBottom: 12 }}>{item.body}</div>
                      <div style={{ background: 'rgba(76,175,80,0.07)', border: '1px solid rgba(76,175,80,0.2)', borderRadius: 8, padding: '10px 14px', marginBottom: 10 }}>
                        <div style={{ display: 'flex', gap: 8 }}>
                          <span style={{ color: '#4CAF50', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>ACTION</span>
                          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.5 }}>{item.action}</span>
                        </div>
                      </div>
                      <div style={{ background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.18)', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
                        <span style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>PRO TIP</span>
                        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{item.tip}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Income Timeline */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Realistic Income Timeline for Indian Content Creators</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>What you actually earn at each stage — not aspirational maximums, but realistic monthly income with active strategy and consistent posting.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {incomeTimeline.map((row, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${row.color}30`, borderRadius: 14, padding: '18px 22px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, minWidth: 100 }}>
                    <div style={{ color: row.color, fontWeight: 800, fontSize: 14, marginBottom: 2 }}>{row.month}</div>
                    <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11 }}>{row.focus}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, color: '#4CAF50', fontSize: 18, marginBottom: 6 }}>{row.income}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{row.milestone}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.18)', borderRadius: 14, padding: '24px 28px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>Step 5 in the roadmap: build your creator profile before your first pitch</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>Identity Kit gives you a professional media kit, rate card, and creator CV in one shareable link — free, built specifically for Indian creators. Takes 10 minutes.</div>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '12px 22px', borderRadius: 10, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Create Your Profile Free →
            </Link>
          </div>

          {/* Free Tools */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Free Tools Every Indian Creator Needs in 2026</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>You do not need to spend money to start creating. Every tool here has a free tier that is sufficient for new and growing Indian creators.</p>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {freeTools.map((cat, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, color: '#FF6B2B', fontSize: 14, marginBottom: 12 }}>{cat.category}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {cat.tools.map((tool, j) => (
                      <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: '#4CAF50', flexShrink: 0, fontSize: 13 }}>→</span>
                        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>5 Mistakes That Kill Indian Creator Careers Before Month 3</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {mistakes.map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.1)', borderRadius: 12, padding: '18px 22px', display: 'flex', gap: 14 }}>
                  <div style={{ color: '#FF5252', fontWeight: 700, fontSize: 20, flexShrink: 0 }}>✗</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#FF8080', fontSize: 15, marginBottom: 6 }}>Mistake: {item.m}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}><span style={{ color: '#4CAF50', fontWeight: 600 }}>Fix: </span>{item.f}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Rate calculator inline CTA */}
          <div style={{ background: 'rgba(255,107,43,0.05)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 14, padding: '22px 26px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>Not sure what to charge for your first brand deal?</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>Use our free Influencer Rate Calculator — enter your follower count, niche, and platform to get your exact starting rate.</div>
            </div>
            <Link href="/tools/influencer-rate-calculator" style={{ background: 'rgba(255,107,43,0.15)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.3)', padding: '10px 20px', borderRadius: 10, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Calculate My Rate →
            </Link>
          </div>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'How much does a content creator earn in India in 2026?', a: 'Content creator income in India varies enormously by follower count, niche, and platform. Nano creators (1K–10K followers) earn ₹2,000–₹30,000/month. Micro creators (10K–100K) earn ₹30,000–₹2,00,000/month. Mid-tier creators (100K–500K) earn ₹2,00,000–₹10,00,000/month. The top 1% earn ₹10 lakh–₹50 lakh+/month. Finance, tech, and EdTech creators earn 3–5x more than lifestyle or entertainment creators at the same follower count because their audience has higher purchasing power.' },
                { q: 'Do I need expensive equipment to start content creation in India?', a: 'No. Your smartphone\'s back camera is sufficient to start. The single most impactful equipment upgrade is a wired lavalier microphone (₹300–₹500 on Amazon) — bad audio quality kills watch time far more than bad video quality. Natural window light is free and better than most entry-level ring lights. Use CapCut or InShot (both free) for editing. Total starting equipment cost: ₹500. Upgrade your camera only after your first paid brand deal — fund equipment from income, not savings.' },
                { q: 'Which platform is best for a new content creator in India?', a: 'It depends on your goal. Instagram is best for fastest first brand deal — you can earn at 5,000–10,000 followers with strong engagement. YouTube is best for highest long-term income — finance channels earn ₹80–₹250 RPM and videos earn indefinitely. LinkedIn is best for professional audiences — brand deal rates are 2–3x higher than Instagram for equivalent followers. Choose based on where your niche audience already spends time, not based on which platform you personally use most.' },
                { q: 'How long does it take to earn money from content creation in India?', a: 'Creators who actively pitch brands typically receive their first gifted collaboration or paid deal at 2–4 months with 1,000–3,000 followers. Creators who wait for brands to come to them typically wait 9–18 months. Meaningful monthly income (₹30,000+) usually arrives at 5,000–10,000 followers for creators in good niches who pitch actively. ₹1 lakh/month typically arrives at 25,000–50,000 followers within 10–14 months of consistent, strategic posting.' },
                { q: 'Can I become a content creator without showing my face?', a: 'Yes. Many successful Indian creators are entirely faceless: finance creators use screen recordings and charts, cooking creators show only hands and food, tech tutorial creators use screen recordings, and education creators use text-based carousels and voiceovers. Faceless content works best on YouTube (voiceover tutorials, animations), Instagram carousels, and blogs. However, creators who show their face build audience trust faster and command higher brand deal rates, especially in lifestyle, fitness, and personal brand niches.' },
                { q: 'How do I find my niche as a content creator in India?', a: 'Use the three-circle framework: (1) What do you know enough about to create content for 2 years? (2) What are Indian audiences actively searching for? (3) What overlaps between circles 1 and 2? That overlap is your niche. The highest-earning niches in India are personal finance and investing, tech and AI, career growth, health and fitness, and EdTech. Choose the highest-earning niche you can consistently create content in — not the one you find most personally interesting if there\'s a mismatch.' },
                { q: 'How many followers do I need to start earning as a content creator in India?', a: 'You can earn from your first brand deal at 1,000 followers if you actively pitch small D2C brands in your niche. Gifted collaborations are available from 500–1,000 followers. Your first paid cash deal typically arrives at 1,000–5,000 followers with active outreach, or at 10,000–15,000 followers if you wait for brands to find you. Platform ad revenue (YouTube Partner Program) requires 1,000 subscribers and 4,000 watch hours or 10 million Shorts views. Focus on brand deals before ad revenue — they pay significantly more per hour of effort.' },
                { q: 'What is the difference between a content creator and an influencer in India?', a: 'In India in 2026, the terms are largely interchangeable but have a practical distinction. A content creator focuses on creating valuable content — tutorials, reviews, educational posts — with audience growth as a secondary goal. An influencer focuses on building a personal brand and audience that can be monetised through brand partnerships. Most successful Indian creators are both: they create valuable content (which builds audience trust) and monetise that audience through brand deals (influencer role). The hybrid approach earns the most.' },
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
                { href: '/blog/how-to-become-micro-influencer-india', title: 'How to Become a Micro Influencer in India — Complete Guide', tag: 'Influencer Marketing' },
                { href: '/blog/best-niche-for-content-creators-india-2026', title: 'Best Niche for Content Creators in India 2026 — 12 Niches Ranked', tag: 'Niche Strategy' },
                { href: '/blog/how-to-get-brand-deals-india', title: 'How to Get Brand Deals in India — Complete 2026 Guide', tag: 'Brand Deals' },
                { href: '/blog/influencer-rate-card-india', title: 'Influencer Rate Card India 2026 — What to Charge Brands', tag: 'Rate Card' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🚀</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Start your content creator journey with the right foundation
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              The first thing brands check when you pitch them is your creator profile. Identity Kit gives you a professional media kit, rate card, and creator CV in one free link — so you look like a pro from your very first pitch.
            </p>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Create my Identity Kit free →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 14 }}>
              identitykit.in · Free forever · Media kit + Rate card + Creator CV in one link
            </div>
          </div>

        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Tools</Link>
          <Link href="/tools/influencer-rate-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Rate Calculator</Link>
          <Link href="/about" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>About</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
