import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Become a UGC Creator in India 2026 (Zero Followers, ₹50K–₹1L/Month)',
  description: 'Complete guide to becoming a UGC creator in India in 2026. What is UGC, how much UGC creators earn in India (₹3,000–₹50,000 per video), how to build a portfolio with zero followers, how to pitch brands, and how to reach ₹50,000–₹1,00,000 per month.',
  keywords: 'how to become ugc creator india, ugc creator india 2026, ugc creator salary india, ugc creator earnings india, what is ugc creator india, ugc content creator india, ugc creator for beginners india, ugc creator income india',
  openGraph: {
    title: 'How to Become a UGC Creator in India 2026 (Zero Followers, ₹50K–₹1L/Month)',
    description: 'UGC creators in India earn ₹3,000–₹50,000 per video — with zero followers required. Indian D2C brands like Mamaearth, boAt, and Lenskart pay for content quality, not audience size. Complete beginner guide.',
    url: 'https://identitykit.in/blog/how-to-become-ugc-creator-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/ugc-creator-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/how-to-become-ugc-creator-india-2026',
  },
}

const ugcFormats = [
  {
    format: 'Product Unboxing / First Impression',
    icon: '📦',
    color: '#FF6B2B',
    demand: 92,
    demandLabel: 'Very High',
    rateIndia: '₹3,000–₹15,000',
    length: '30–60 seconds',
    what: 'Opening a brand\'s product on camera, reacting genuinely, and highlighting key features. The most requested UGC format by Indian D2C brands because it mirrors the customer buying experience authentically.',
    whoWants: 'Beauty brands, electronics, health supplements, food products, apparel',
    tips: ['Film in natural light near a window — looks more authentic than studio lighting', 'Your genuine first reaction is the value — do not rehearse it', 'Show the packaging and unboxing experience, not just the product itself'],
  },
  {
    format: 'Tutorial / How-To',
    icon: '🎓',
    color: '#6C63FF',
    demand: 88,
    demandLabel: 'Very High',
    rateIndia: '₹5,000–₹25,000',
    length: '45–90 seconds',
    what: 'Showing exactly how to use a product step-by-step. Tutorials earn higher rates than unboxings because they require more preparation, scripting, and demonstrate product knowledge. Brands use tutorial UGC in their paid ads for months.',
    whoWants: 'Skincare brands, kitchen appliances, tech gadgets, fitness equipment, EdTech platforms',
    tips: ['Script the steps in advance — brands pay for clarity and structure', 'Before-and-after format converts best for beauty and health products', 'End with a clear CTA that the brand can edit: "Available at [brand].com"'],
  },
  {
    format: 'Testimonial / Review',
    icon: '💬',
    color: '#4CAF50',
    demand: 85,
    demandLabel: 'High',
    rateIndia: '₹4,000–₹20,000',
    length: '20–45 seconds',
    what: 'Talking directly to camera about your genuine experience with a product. Testimonials are used heavily in Meta Ads (Facebook/Instagram) because they convert better than polished ads. The most beginner-friendly UGC format — no editing skills required.',
    whoWants: 'All consumer brands, particularly SaaS tools, supplements, beauty, and financial products',
    tips: ['Speak naturally — nervousness shows on camera, which is fine. Over-rehearsed is worse', 'Structure: problem you had → how the product helped → specific result you noticed', 'Keep it under 45 seconds — brands need short testimonials for ad formats'],
  },
  {
    format: 'Lifestyle / "Aesthetic" Showcase',
    icon: '✨',
    color: '#E91E63',
    demand: 78,
    demandLabel: 'High',
    rateIndia: '₹3,000–₹12,000',
    length: '15–30 seconds',
    what: 'Filming a product naturally integrated into your daily life — morning routine, desk setup, gym bag, kitchen counter. Used for social media feeds and Stories. Requires the least scripting but good visual sensibility.',
    whoWants: 'Apparel, home decor, beauty, food and beverage, stationery, lifestyle brands',
    tips: ['Good lighting and a clean background transform basic lifestyle footage into brand-ready content', 'Show the product in context — not isolated on a white surface', 'Vertical video (9:16) is the default format for all Indian brand ad placements in 2026'],
  },
  {
    format: 'Problem-Solution / Hook Video',
    icon: '⚡',
    color: '#FF9800',
    demand: 95,
    demandLabel: 'Critical',
    rateIndia: '₹6,000–₹30,000',
    length: '15–30 seconds',
    what: 'The highest-converting UGC format in India in 2026. Starts with a relatable problem in the first 3 seconds, then positions the brand\'s product as the solution. Used directly in Meta and YouTube paid ads with minimal editing. Brands pay the most for this format because it drives the highest ROAS (Return on Ad Spend).',
    whoWants: 'D2C brands running performance marketing campaigns on Meta Ads, EdTech, fintech, health and wellness',
    tips: ['Hook in the first 3 seconds is everything: "If you struggle with [problem], watch this"', 'Keep the problem-to-solution transition under 10 seconds — brands need tight ads', 'Film 2–3 different hooks for the same product — brands test multiple versions in their ad accounts'],
  },
  {
    format: 'Comparison Video',
    icon: '⚖️',
    color: '#9C27B0',
    demand: 72,
    demandLabel: 'Medium-High',
    rateIndia: '₹8,000–₹35,000',
    length: '30–60 seconds',
    what: '"Before vs After" or "this vs that" comparisons featuring the brand\'s product. Very effective for beauty transformations, fitness results, and tech upgrades. Requires genuine personal experience with the product — brands value authenticity here above all else.',
    whoWants: 'Skincare, hair care, fitness supplements, gadgets, cleaning products',
    tips: ['Film your "before" state naturally — without makeup, with the problem visible', 'Give yourself enough time to genuinely experience the product before filming the "after"', 'Comparison UGC commands premium rates because it requires real product testing time'],
  },
]

const steps = [
  {
    step: '01',
    title: 'Understand what UGC is — and what makes it different from influencer marketing',
    icon: '🎯',
    body: 'UGC (User-Generated Content) is content created by you that brands post on THEIR accounts and use in THEIR paid ads — not on your account. Your follower count is completely irrelevant. Brands are paying for your content creation skills, camera presence, and authenticity. This is the fundamental difference from influencer marketing: an influencer is paid for their audience. A UGC creator is paid for their content. This means a creator with zero followers earns the same rate as one with 50,000 followers for the same UGC video.',
    action: 'Think of yourself as a freelance content producer, not a social media personality. Your "product" is the video file you deliver — not your follower count.',
    tip: 'UGC works best alongside building an Instagram or YouTube following. UGC provides immediate income from day 1. Building a social audience provides leverage for higher rates and brand deals later.',
  },
  {
    step: '02',
    title: 'Choose your niche and the product types you\'ll create content for',
    icon: '🎯',
    body: 'The most successful Indian UGC creators in 2026 specialise in 2–3 product categories rather than trying to do everything. Specialisation helps brands find you faster, allows you to build genuine expertise in filming those products, and lets you charge premium rates. Indian D2C brands in beauty, health supplements, food & beverages, tech gadgets, home products, and EdTech are the biggest UGC buyers in India right now.',
    action: 'Pick 2–3 niches based on products you already own, genuinely use, and can film authentically. Your existing products become your first UGC portfolio subjects.',
    tip: 'The highest-paying UGC niches in India in 2026: tech gadgets and electronics (₹8,000–₹30,000 per video), health supplements (₹6,000–₹25,000), skincare and beauty (₹5,000–₹20,000), finance/fintech apps (₹8,000–₹30,000). Finance UGC for apps like Groww or Zerodha pays especially well because of the high customer LTV for fintech brands.',
  },
  {
    step: '03',
    title: 'Build a portfolio with 5–8 spec videos before approaching any brand',
    icon: '🎬',
    body: 'A "spec" video is UGC content you create for a brand without being hired — using products you already own, as if the brand had commissioned the content. Your spec portfolio is your proof of concept. When you approach a brand, they need to see exactly how you\'d film their product before they hire you. Without a portfolio, your pitch is a promise. With a portfolio, it\'s evidence. Make 5–8 spec videos covering at least 3 different formats: one unboxing, one tutorial, one testimonial, one problem-solution video.',
    action: 'Right now: pick 5 products you own and genuinely like. Film one 30-second spec video for each in the format that best suits that product. Edit in CapCut (free). Save to a Notion page or Google Drive folder — this is your UGC portfolio.',
    tip: 'Film 2–3 hooks (different opening 3 seconds) for each spec video. Brands specifically want multiple hook variations for A/B testing in their Meta ad accounts — offering this from day 1 sets you apart from beginner UGC creators who deliver just one version.',
  },
  {
    step: '04',
    title: 'Set up your UGC creator profile and presence',
    icon: '📋',
    body: 'Brands look for UGC creators in two ways: through influencer platforms and through Google/Instagram search. You need to be discoverable through both channels. Your Instagram bio should clearly state "UGC Creator | [Niche] | Available for brand collaborations" — this is how Indian brand marketing managers search for creators on Instagram. Your Identity Kit creator profile should link to your UGC portfolio, list your niche, state your rates, and show your contact details. This becomes the link you include in every pitch email.',
    action: 'Update your Instagram bio to include "UGC Creator" and your niche. Build your creator profile at identitykit.in — add your UGC portfolio link, niche categories, and starting rate. This single link goes into every brand pitch you send.',
    tip: 'UGC creators who include "UGC" in their Instagram name field rank in Instagram search when brand managers type "UGC creator India" or "UGC creator [niche]". Many Indian brands discover UGC creators entirely through Instagram search — make sure you show up.',
  },
  {
    step: '05',
    title: 'Find and pitch Indian brands — starting with D2C startups',
    icon: '🤝',
    body: 'The best brands to pitch for your first UGC deals are Indian D2C startups with 5,000–100,000 Instagram followers. They are running Meta ad campaigns, actively need authentic content, often have smaller budgets that align with beginner UGC rates, and reply to creator pitches. Large brands (boAt, Mamaearth, Lenskart) use UGC agencies — hard to break into without a strong portfolio. Small D2C startups are directly accessible via Instagram DM or email.',
    action: 'Search Instagram for Indian D2C brands in your niche with 5K–100K followers. Look at which brands are running paid ads (the "Sponsored" label). Brands running ads actively need UGC content. DM them with your portfolio link.',
    tip: 'The UGC pitch DM: "Hi! I\'m a UGC creator specialising in [your niche]. I noticed your brand runs Meta ads — I create ad-ready video content that brands use directly in their campaigns. Here\'s my portfolio: [Identity Kit link]. Would you be open to discussing a UGC collaboration?"',
  },
  {
    step: '06',
    title: 'Set your rates, deliver on time, and ask for retainer clients',
    icon: '💰',
    body: 'UGC beginner rates in India in 2026: ₹3,000–₹8,000 per video for your first 5–10 deals. After building a portfolio of 10+ paid brand videos: ₹8,000–₹25,000 per video. With a track record of strong ad performance: ₹15,000–₹50,000 per video. Always charge separately for usage rights (the brand using your content in paid ads). After delivering 2–3 videos for a brand, propose a retainer: "I\'d love to create 4–6 videos per month for [Brand] at a package rate — it gives you a steady content pipeline and me predictable income." Retainer clients are the key to reaching ₹50,000–₹1,00,000 per month.',
    action: 'Set your opening rate at ₹5,000 per video for your first paid deals. Include: the video file, 2 alternate hook versions, and 30-day usage rights. After 10 paid deals, raise to ₹10,000 minimum. After 20 paid deals with performance data, raise to ₹20,000+.',
    tip: 'Three retainer clients at ₹25,000 per month (4 videos/month each at ₹6,250/video) = ₹75,000/month stable income. Reaching ₹1 lakh/month in UGC income requires 4 retainer clients at ₹25,000, or 3 higher-value clients at ₹35,000.',
  },
]

const incomeByLevel = [
  { level: 'Beginner (0–3 months)', income: '₹5,000–₹20,000/month', videos: '3–5 videos/month', rate: '₹2,000–₹5,000/video', how: 'Spec portfolio built. First 3–5 paying clients. Mix of gifted + cash deals. Building track record.' },
  { level: 'Growing (3–6 months)', income: '₹15,000–₹50,000/month', videos: '6–10 videos/month', rate: '₹5,000–₹10,000/video', how: 'First repeat clients. 1–2 retainer arrangements. Referrals from satisfied brands starting to arrive.' },
  { level: 'Established (6–12 months)', income: '₹40,000–₹1,00,000/month', videos: '8–15 videos/month', rate: '₹8,000–₹20,000/video', how: '3–4 retainer clients. Performance data to show brands (ROAS, CTR). Charging usage rights premiums.' },
  { level: 'Expert (12+ months)', income: '₹80,000–₹3,00,000/month', videos: '10–20 videos/month', rate: '₹15,000–₹50,000/video', how: 'Premium niche rates. Strong brand relationships. Ad performance data. Multiple income streams.' },
]

const topBrandsIndia = [
  { category: 'Beauty & Skincare', brands: 'Mamaearth, Plum Goodness, WOW Skin Science, Minimalist, Dot & Key, mCaffeine, The Derma Co', ugcNeed: 'Very High', avgRate: '₹5,000–₹20,000' },
  { category: 'Health & Supplements', brands: 'Oziva, Wellbeing Nutrition, Fast&Up, MyProtein India, HK Vitals, Kapiva, Boldfit', ugcNeed: 'Very High', avgRate: '₹6,000–₹25,000' },
  { category: 'Food & Beverages', brands: 'Paper Boat, Raw Pressery, Yoga Bar, The Whole Truth, Slurrp Farm, Epigamia', ugcNeed: 'High', avgRate: '₹3,000–₹12,000' },
  { category: 'Tech & Gadgets', brands: 'boAt, Noise, Pebble, Portronics, Ambrane, Zebronics, Realme accessories', ugcNeed: 'High', avgRate: '₹8,000–₹30,000' },
  { category: 'Home & Kitchen', brands: 'Traya, The Earth Collective, Bombay Shaving Company, SmartCooky, CERO', ugcNeed: 'Medium-High', avgRate: '₹4,000–₹15,000' },
  { category: 'Fintech & Apps', brands: 'Groww, Zerodha, Jupiter, Fi Money, CRED, Slice, Niyo', ugcNeed: 'Very High', avgRate: '₹8,000–₹30,000' },
]

const mistakes = [
  { m: 'Waiting until you have followers to start', f: 'This is the most costly misconception about UGC. You do not need followers. Brands pay for your content, not your audience. A UGC creator with 500 Instagram followers earns the same rate as one with 50,000 followers if their content quality is equivalent. Start pitching with your spec portfolio at zero followers.' },
  { m: 'Offering usage rights for free', f: 'When a brand wants to use your content in their paid Meta or Google ads, that is a content licensing transaction — not just a social post. Charge separately: 30-day ad usage rights at +30% of your base rate. 90-day usage rights at +50%. Most Indian UGC beginners do not know this and give brands perpetual ad rights for free, leaving significant money on the table.' },
  { m: 'Delivering only one video version per brief', f: 'Brands A/B test multiple ad variations in their Meta campaigns. Offering 2–3 hook variations (different opening 3 seconds) for each video you deliver adds value to the brand and justifies higher rates. From your second paid client onward, include "3 hook variations" in your standard deliverable package.' },
  { m: 'No portfolio before pitching', f: 'Sending a pitch email with no portfolio link gets ignored 95% of the time. Brands cannot visualise your content quality from words alone. Create 5 spec videos first. Store them in an Identity Kit profile or a Notion portfolio page. Include this link in every pitch. Never pitch without a portfolio.' },
  { m: 'Only pitching large brands', f: 'Large Indian brands (boAt, Mamaearth, CRED) use UGC agencies — they do not respond to direct creator pitches. Start with D2C startups with 5,000–100,000 Instagram followers. These brands are accessible, actively need UGC, and often become long-term retainer clients. Build up to large brands after you have a strong portfolio and performance data.' },
  { m: 'Not asking for retainer deals after 2–3 successful videos', f: 'One-off UGC deals are fine for building a portfolio. Retainer deals are how you build stable monthly income. After delivering 2–3 videos for a brand with positive feedback, always ask: "Would you be interested in a monthly content package? I could create 4 videos per month at a packaged rate, giving you a reliable content pipeline." Most brands who liked your work say yes.' },
]

export default function UGCCreatorIndiaPage() {
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
            {['UGC Creator', 'Brand Deals', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Become a UGC Creator in India in 2026<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>(Zero Followers, ₹50K–₹1L/Month)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            UGC creators in India earn ₹3,000–₹50,000 per video — with zero followers required. Brands like Mamaearth, boAt, and Groww pay for your content skills, not your audience size. This is the most accessible high-income creator opportunity in India right now. Here is exactly how to start.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — What is a UGC Creator and How to Start in India</div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6, marginBottom: 16 }}>A UGC (User-Generated Content) creator makes videos and photos that brands use in their own marketing — ads, websites, social media. You are paid for content quality, not follower count. To start in India in 2026:</p>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Understand UGC: brands pay for your video content (unboxings, tutorials, testimonials) to use in their ads — not for your audience size',
                'Choose 2–3 product niches you can film authentically: tech gadgets, skincare, health supplements, food, or fintech apps pay the most in India',
                'Build 5–8 "spec" videos using products you already own — this is your portfolio before you approach any brand',
                'Set up your creator profile at identitykit.in with your UGC portfolio link and starting rates (₹3,000–₹5,000/video to start)',
                'Pitch Indian D2C brands with 5K–100K Instagram followers who run paid ads — they actively need UGC content and reply to creator pitches',
                'Deliver on time, offer 2–3 hook variations per video, and charge separately for usage rights (+30–50% of base rate)',
                'After 2–3 successful videos with each brand, propose a monthly retainer — this is how you reach ₹50,000–₹1,00,000/month',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — UGC Creator Market India 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'UGC (User-Generated Content) creators in India earn ₹3,000–₹50,000 per video in 2026, with zero minimum follower count required — brands pay for content quality and authenticity, not audience size.',
                'Indian D2C brands including Mamaearth, boAt, WOW Skin Science, Groww, and CRED are among the largest buyers of UGC content in India, running ongoing paid ad campaigns that require a constant supply of fresh authentic videos.',
                '79% of consumers globally trust UGC more than polished brand advertisements, and 93% of marketers agree UGC outperforms traditional marketing — driving Indian brands to increase UGC budgets annually.',
                'UGC for Meta Ads (Facebook and Instagram advertising) pays the highest rates in India because brands can directly measure ROI — a single high-performing UGC video can run in ads for months, making the investment highly valuable.',
                'The most requested UGC format by Indian brands is the problem-solution hook video (15–30 seconds) — brands pay a premium for this format because it directly mirrors the highest-converting ad creative structure.',
                'UGC creators in India who build 3–4 monthly retainer clients typically earn ₹75,000–₹1,50,000 per month within 6–12 months of starting, making it one of the fastest paths to ₹1 lakh/month in the creator economy.',
                'Fintech UGC in India (apps like Groww, Zerodha, Jupiter) pays ₹8,000–₹30,000 per video — the highest UGC rates in India — because the customer lifetime value of a new demat account justifies premium content acquisition costs.',
                'Over 54% of UGC opportunities posted on creator platforms in 2026 are open to creators with no established portfolio, making UGC the most accessible paid content creation category for beginners.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UGC vs Influencer */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, letterSpacing: '-0.3px' }}>UGC Creator vs Influencer — What&apos;s the Difference?</h2>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                { label: 'UGC Creator', color: '#FF6B2B', points: ['Paid for content quality, not audience size', 'Zero followers required to earn', 'Content posted on brand\'s account', 'Earns ₹3,000–₹50,000 per video', 'Immediate income from day 1', 'Films products, tutorials, testimonials', 'Brand pays for the video file itself'] },
                { label: 'Influencer', color: '#6C63FF', points: ['Paid for audience size and engagement', 'Typically needs 1,000+ followers to earn', 'Content posted on your own account', 'Earns from brand deals + platform ads', 'Takes 2–6 months to first brand deal', 'Creates content for your own following', 'Brand pays for access to your audience'] },
              ].map((col) => (
                <div key={col.label} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 800, color: col.color, fontSize: 15, marginBottom: 12 }}>{col.label}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {col.points.map((pt, i) => (
                      <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: col.color, flexShrink: 0, fontSize: 13 }}>✓</span>
                        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14, background: 'rgba(108,99,255,0.07)', border: '1px solid rgba(108,99,255,0.15)', borderRadius: 10, padding: '12px 18px', display: 'flex', gap: 8 }}>
              <span style={{ color: '#6C63FF', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>BEST STRATEGY</span>
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>Do both. UGC provides immediate income from day 1. Building an Instagram/YouTube audience unlocks influencer brand deals at higher rates later. The creators earning the most in India in 2026 do UGC while building their social following simultaneously.</span>
            </div>
          </div>

          {/* 6 UGC Formats */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>6 UGC Formats Indian Brands Pay For — Ranked by Demand</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Master these 6 formats and you can serve every Indian D2C brand. Start with unboxings and testimonials (easiest), progress to problem-solution hook videos (highest paying).</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {ugcFormats.map((fmt, i) => (
                <div key={i} className="card">
                  <div style={{ background: `linear-gradient(135deg, ${fmt.color}15, ${fmt.color}05)`, borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ background: `${fmt.color}20`, border: `1px solid ${fmt.color}35`, borderRadius: 10, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{fmt.icon}</div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 2 }}>{fmt.format}</div>
                        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Length: {fmt.length}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      <span style={{ background: `${fmt.color}15`, color: fmt.color, border: `1px solid ${fmt.color}28`, padding: '3px 10px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{fmt.rateIndia}</span>
                      <span style={{ background: fmt.demand >= 90 ? 'rgba(76,175,80,0.1)' : 'rgba(255,152,0,0.1)', color: fmt.demand >= 90 ? '#4CAF50' : '#FF9800', border: `1px solid ${fmt.demand >= 90 ? 'rgba(76,175,80,0.2)' : 'rgba(255,152,0,0.2)'}`, padding: '3px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600 }}>{fmt.demandLabel}</span>
                    </div>
                  </div>

                  <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{fmt.what}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginBottom: 4 }}>Who buys this format in India:</div>
                    <div style={{ color: '#FF6B2B', fontSize: 13 }}>{fmt.whoWants}</div>
                  </div>

                  <div style={{ padding: '12px 24px' }}>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>Filming tips</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {fmt.tips.map((tip, j) => (
                        <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                          <span style={{ color: '#4CAF50', flexShrink: 0, fontSize: 12 }}>→</span>
                          <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6 Steps */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>How to Become a UGC Creator in India — 6-Step System</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>The exact path from zero to ₹50,000+/month as an Indian UGC creator. Most beginners skip step 3 (spec portfolio) and go straight to pitching — which is why they get ignored.</p>
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

          {/* Income timeline */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>UGC Creator Income in India — Realistic Timeline</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>What Indian UGC creators actually earn at each stage — not aspirational maximums, but realistic monthly income with consistent pitching and delivery.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {incomeByLevel.map((row, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '18px 22px', display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <div style={{ minWidth: 180 }}>
                    <div style={{ fontWeight: 800, color: '#FF6B2B', fontSize: 14, marginBottom: 2 }}>{row.level}</div>
                    <div style={{ fontWeight: 800, color: '#4CAF50', fontSize: 22 }}>{row.income}</div>
                    <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, marginTop: 2 }}>{row.videos} · {row.rate}</div>
                  </div>
                  <div style={{ flex: 1, color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.7, borderLeft: '2px solid rgba(255,107,43,0.2)', paddingLeft: 16 }}>{row.how}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Top Indian brands */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Indian Brands That Actively Buy UGC in 2026</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Start with the brands most likely to respond to your pitch. These categories have the highest UGC demand in India right now.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {topBrandsIndia.map((row, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10, marginBottom: 8 }}>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{row.category}</div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <span style={{ background: 'rgba(76,175,80,0.1)', color: '#4CAF50', border: '1px solid rgba(76,175,80,0.2)', padding: '2px 8px', borderRadius: 100, fontSize: 11, fontWeight: 700 }}>{row.avgRate}</span>
                      <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '2px 8px', borderRadius: 100, fontSize: 11, fontWeight: 600 }}>UGC Need: {row.ugcNeed}</span>
                    </div>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>{row.brands}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Build your UGC creator profile — free</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Identity Kit builds your UGC creator profile with your portfolio link, niche categories, rates, and contact details in one shareable link. Every brand pitch you send should include this link. Free, takes 10 minutes, built for Indian creators.</p>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build My UGC Profile Free →
            </Link>
          </div>

          {/* New tool CTAs — pitch email + campaign report */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14, marginBottom: 56 }}>
            <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.18)', borderRadius: 14, padding: '18px 22px' }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>⚡ Generate your brand pitch email in 30 seconds</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, marginBottom: 14 }}>Our AI Brand Pitch Email Generator writes your personalised UGC pitch + 2 follow-ups based on your niche and the specific brand you&apos;re targeting. Free, India-specific.</div>
              <Link href="/tools/brand-pitch-email-generator" style={{ background: 'rgba(255,107,43,0.15)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '9px 16px', borderRadius: 8, fontWeight: 700, fontSize: 13, display: 'inline-block' }}>Generate Pitch Email →</Link>
            </div>
            <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 14, padding: '18px 22px' }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>📊 After delivery: send a report and get rebooked</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, marginBottom: 14 }}>Creators who send post-campaign performance reports get rebooked 5x more often. Generate a professional one with your UGC stats in 2 minutes — free.</div>
              <Link href="/tools/campaign-report-generator" style={{ background: 'rgba(76,175,80,0.12)', color: '#4CAF50', border: '1px solid rgba(76,175,80,0.25)', padding: '9px 16px', borderRadius: 8, fontWeight: 700, fontSize: 13, display: 'inline-block' }}>Generate Campaign Report →</Link>
            </div>
          </div>

          {/* 6 Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>6 Mistakes That Keep Indian UGC Creators Stuck at ₹10,000/Month</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {mistakes.map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.1)', borderRadius: 12, padding: '18px 22px', display: 'flex', gap: 14 }}>
                  <div style={{ color: '#FF5252', fontWeight: 700, fontSize: 20, flexShrink: 0 }}>✗</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#FF8080', fontSize: 15, marginBottom: 6 }}>{item.m}</div>
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
                { q: 'What is a UGC creator in India?', a: 'A UGC (User-Generated Content) creator in India is a content creator who produces videos, photos, and reviews for brands to use in their own marketing — social media posts, paid ads (Meta Ads, Google Ads), websites, and email campaigns. Unlike influencers who are paid for their audience size, UGC creators are paid purely for the quality of their content. Your follower count is irrelevant — brands in India pay ₹3,000–₹50,000 per video based on content quality and authenticity.' },
                { q: 'How much do UGC creators earn in India?', a: 'UGC creator earnings in India in 2026: Beginners (0–3 months): ₹3,000–₹8,000 per video, ₹5,000–₹20,000/month. Growing creators (3–6 months): ₹5,000–₹15,000/video, ₹15,000–₹50,000/month. Established creators (6–12 months): ₹8,000–₹25,000/video, ₹40,000–₹1,00,000/month. Expert creators (12+ months): ₹15,000–₹50,000/video, ₹80,000–₹3,00,000/month. Fintech and tech UGC pays the highest in India at ₹8,000–₹30,000/video because of high customer LTV.' },
                { q: 'How do I start UGC with zero followers in India?', a: 'You don\'t need followers to start UGC in India. Brands pay for content quality, not audience size. Start by creating 5–8 "spec" videos using products you already own — these become your portfolio. Then pitch Indian D2C brands with 5,000–100,000 Instagram followers who are running paid ads (look for the "Sponsored" label). Include your portfolio link (your Identity Kit profile) in every pitch. Your first paid UGC deal can come within 2–4 weeks of active pitching.' },
                { q: 'Do I need expensive equipment to create UGC in India?', a: 'No. A smartphone with a decent camera (any phone from the last 3 years works) + a ₹500 wired lavalier microphone + natural window light is all you need to create professional-quality UGC that Indian brands will pay for. UGC that looks "too professional" actually performs worse in Meta ads because it looks like a traditional advertisement rather than authentic content. Use CapCut (free) for editing. Total starting investment: under ₹1,000.' },
                { q: 'Which Indian brands are looking for UGC creators?', a: 'The highest-demand UGC buyers in India in 2026: beauty brands (Mamaearth, Plum, Minimalist, WOW Skin Science), health supplement brands (Oziva, Wellbeing Nutrition, Fast&Up), fintech apps (Groww, Zerodha, Jupiter, CRED), food and beverage D2C brands (Paper Boat, Yoga Bar, The Whole Truth), and consumer electronics brands (boAt, Noise, Portronics). Find them by searching Instagram for brands in your niche with 5K–100K followers who are running paid ads (look for "Sponsored" content in your feed).' },
                { q: 'What equipment do I need to be a UGC creator in India?', a: 'Minimum viable UGC setup in India: your existing smartphone (use the back camera, not the selfie camera), a ₹300–₹500 wired lavalier microphone from Amazon, natural window light (position yourself facing a window), a basic white or neutral background wall, and CapCut (free) for editing. Once you earn your first ₹10,000–₹20,000 from UGC, upgrade to a ring light (₹800–₹1,500) and a mini tripod (₹400–₹800). That\'s the complete professional setup most top Indian UGC creators use.' },
                { q: 'How do I find UGC clients in India?', a: 'Four methods that work for Indian UGC creators in 2026: (1) Instagram DM to Indian D2C brands running paid ads — look for "Sponsored" in your feed in your niche. (2) LinkedIn search for "influencer marketing manager India" or "marketing manager [brand name]" and pitch via InMail. (3) Upwork and Fiverr listings under "UGC creator India" — lower rates but good for building initial portfolio. (4) Influencer platforms like Winkl, Plixxo, and Qoruz that list UGC opportunities from Indian brands. Direct outreach always yields higher rates than platforms.' },
                { q: 'Can I do both UGC and influencer marketing in India?', a: 'Yes — and this is the optimal strategy for Indian creators in 2026. UGC provides immediate income from day 1 without needing a following. Building an Instagram or YouTube following simultaneously creates leverage for higher-paid influencer brand deals later. Many Indian creators use UGC income to fund their content creation while building their social audience. Once you hit 5,000–10,000 followers, you can pitch for influencer brand deals on top of your UGC work, increasing your total monthly creator income significantly.' },
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
                { href: '/blog/ugc-creator-salary-india-2026', title: 'How Much Do UGC Creators Earn in India in 2026?', tag: 'UGC' },
                { href: '/blog/influencer-media-kit-india-2026', title: 'Influencer Media Kit India 2026 — Free Template', tag: 'Media Kit' },
                { href: '/blog/how-to-pitch-brands-india-influencer-2026', title: 'How to Pitch Brands as an Influencer in India 2026', tag: 'Brand Deals' },
                { href: '/blog/influencer-rate-card-india-2026', title: 'Influencer Rate Card India 2026 — Complete Pricing Guide', tag: 'Rate Card' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🎬</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Your UGC portfolio needs a professional home
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Every pitch email you send should link to your creator profile — one professional link showing your portfolio, niche, rates, and contact details. Identity Kit builds this free for Indian creators.
            </p>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Create My Free UGC Creator Profile →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 14 }}>
              identitykit.in · Free forever · Portfolio + Rate card + Creator CV in one link
            </div>
          </div>

        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Tools</Link>
          <Link href="/tools/influencer-rate-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Rate Calculator</Link>
          <Link href="/tools/brand-pitch-email-generator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Pitch Email Generator</Link>
          <Link href="/tools/campaign-report-generator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Campaign Report</Link>
          <Link href="/tools/brand-deal-contract-template" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contract Template</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
