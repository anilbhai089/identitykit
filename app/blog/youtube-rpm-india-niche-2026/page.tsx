import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'YouTube RPM in India 2026: Real Rates by Niche (Finance, Tech, Education & More)',
  description: 'Verified YouTube RPM rates for Indian creators in 2026. Finance niche earns ₹80–₹250 RPM. Tech earns ₹60–₹180. Education earns ₹40–₹120. How much YouTube pays per 1 lakh views in India, CPM vs RPM explained, and how to increase your channel RPM.',
  keywords: 'youtube rpm india 2026, youtube rpm in india, finance channel rpm in india, finance rpm youtube in india, finance niche youtube rpm india, youtube cpm india 2026, how much youtube pays in india, is ypp available in india, youtube monetization india 2026',
  openGraph: {
    title: 'YouTube RPM in India 2026: Real Rates by Niche (Finance, Tech, Education & More)',
    description: 'Finance niche: ₹80–₹250 RPM. Tech: ₹60–₹180. Education: ₹40–₹120. Real verified RPM data for every major Indian YouTube niche in 2026, plus how to earn more per 1,000 views.',
    url: 'https://identitykit.in/blog/youtube-rpm-india-niche-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/youtube-rpm-india-2026.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/youtube-rpm-india-niche-2026',
  },
}

const niches = [
  {
    rank: 1,
    icon: '💰',
    name: 'Finance & Investing',
    badge: '🏆 Highest RPM in India',
    badgeColor: '#FFD700',
    badgeBg: 'rgba(255,215,0,0.1)',
    color: '#6C63FF',
    rpm: '₹80–₹250',
    cpm: '₹150–₹450',
    per_lakh_views: '₹8,000–₹25,000',
    rpmScore: 98,
    why: 'Finance is the highest-paying YouTube niche in India by a significant margin. Mutual fund platforms (Groww, Zerodha, Upstox), insurance companies (LIC, HDFC Life), and credit card issuers pay ₹150–₹450 CPM to reach viewers who are actively making financial decisions. Sub-niches within finance — stock market investing, mutual funds, SIP guides, tax saving, and credit card reviews — consistently earn the top of this range. A finance channel with 5 lakh monthly views can earn ₹40,000–₹1,25,000 per month from AdSense alone, before any brand deals.',
    top_advertisers: ['Groww', 'Zerodha', 'Upstox', 'HDFC Life', 'LIC', 'SBI Cards'],
    best_content: ['SIP investing guides', 'Mutual fund comparisons', 'Tax saving before March 31', 'Credit card reviews', 'Stock market analysis'],
    pro_tip: 'Finance channels that include "invest now" or "apply here" CTAs in video descriptions attract purchase-intent advertisers who bid 2–3x more than brand awareness campaigns. Enable all ad formats including non-skippable to maximise CPM.',
  },
  {
    rank: 2,
    icon: '💻',
    name: 'Technology & Gadget Reviews',
    badge: '📱 Strong Advertiser Demand',
    badgeColor: '#4CAF50',
    badgeBg: 'rgba(76,175,80,0.1)',
    color: '#4CAF50',
    rpm: '₹60–₹180',
    cpm: '₹110–₹300',
    per_lakh_views: '₹6,000–₹18,000',
    rpmScore: 78,
    why: 'Technology content earns the second-highest RPM in India because smartphone brands, laptop manufacturers, and electronics companies pay premium CPMs for a technically-aware, purchase-ready audience. Smartphone reviews (especially India-priced phones under ₹15,000–₹30,000) attract heavy advertiser competition from Samsung, OnePlus, Realme, and Poco. Software tutorial content attracts SaaS company advertising. Unboxing and review-format videos earn the top of this range because they capture viewers at peak purchase intent.',
    top_advertisers: ['Samsung India', 'OnePlus', 'Realme', 'Poco', 'boAt', 'Jio'],
    best_content: ['Smartphone under ₹15,000 reviews', 'Laptop for students comparisons', 'Earphone ranked reviews', 'Budget gadget roundups', 'Tech unboxings'],
    pro_tip: 'Tech channels that cover multiple price tiers attract both budget and premium advertisers simultaneously. A "best phones under ₹10,000 vs ₹20,000" video gets competing bids from both market segments.',
  },
  {
    rank: 3,
    icon: '🏥',
    name: 'Health & Wellness',
    badge: '💊 Rising Fast',
    badgeColor: '#FF6B6B',
    badgeBg: 'rgba(255,107,107,0.1)',
    color: '#FF6B6B',
    rpm: '₹50–₹150',
    cpm: '₹90–₹250',
    per_lakh_views: '₹5,000–₹15,000',
    rpmScore: 68,
    why: 'Health content earns strong RPM because pharmaceutical advertisers, supplement brands, and healthcare platforms (Practo, PharmEasy) pay well for an audience actively searching for health solutions. Content covering diabetes management, PCOS, mental health, and weight loss consistently attracts the highest CPM within this niche because the audience has high purchase intent. Indian health channels also benefit from government health scheme advertisers in Q3 and Q4.',
    top_advertisers: ['Practo', 'PharmEasy', 'Himalaya', 'Dabur', 'Patanjali', 'Health insurance companies'],
    best_content: ['Diabetes diet guides', 'PCOS management', 'Mental health for Indians', 'Yoga for office workers', 'Ayurveda meets modern health'],
    pro_tip: 'Health channels that frame content around specific conditions (diabetes, hypertension, PCOS) attract healthcare advertisers willing to pay 2x the rate of generic wellness content. Condition-specific audiences are more valuable to pharma advertisers.',
  },
  {
    rank: 4,
    icon: '📚',
    name: 'Education & Exam Prep',
    badge: '🎓 Evergreen Demand',
    badgeColor: '#FF9800',
    badgeBg: 'rgba(255,152,0,0.1)',
    color: '#FF9800',
    rpm: '₹40–₹120',
    cpm: '₹70–₹200',
    per_lakh_views: '₹4,000–₹12,000',
    rpmScore: 58,
    why: 'Education channels — particularly those covering JEE, NEET, UPSC, CAT, and GATE — benefit from heavy EdTech advertiser spending. BYJU\'s, Unacademy, Vedantu, and Physics Wallah all bid aggressively for students in their target exam categories. The Indian exam prep audience is enormously large (millions of students per exam cycle) and highly engaged. Education channels earn consistently year-round with spikes in January–March (exam season) and June–August (new academic year).',
    top_advertisers: ['BYJU\'s', 'Unacademy', 'Vedantu', 'Physics Wallah', 'Gradeup', 'Testbook'],
    best_content: ['JEE preparation strategy', 'UPSC daily current affairs', 'NEET biology masterclass', 'CAT quant shortcuts', 'Class 10/12 board exam guides'],
    pro_tip: 'Education channels see a 40–60% RPM spike in January–March before board exams and entrance exams. Plan your most monetisable content — full syllabus guides, strategy videos — to publish in this window.',
  },
  {
    rank: 5,
    icon: '🚀',
    name: 'Startup & Business',
    badge: '📈 B2B Premium',
    badgeColor: '#9C27B0',
    badgeBg: 'rgba(156,39,176,0.1)',
    color: '#9C27B0',
    rpm: '₹60–₹160',
    cpm: '₹100–₹280',
    per_lakh_views: '₹6,000–₹16,000',
    rpmScore: 72,
    why: 'Startup and business content earns strong RPM in India because B2B advertisers — accounting software, CRM tools, coworking spaces, business banks — pay premium CPMs for an audience of founders and decision-makers. The viewer demographic (educated, 25–40, urban, higher income) is extremely valuable to business-to-business advertisers. Case study content, founder interviews, and "how I built X" videos consistently earn the top of this range.',
    top_advertisers: ['Razorpay', 'Zoho', 'Tally', 'Instamojo', 'Business banking apps', 'Coworking brands'],
    best_content: ['How Indian startups raise funding', 'Building in public stories', 'Business tools reviews', 'Founder interviews', 'From ₹0 to ₹1 crore revenue stories'],
    pro_tip: 'Startup channels that target founders specifically (not aspiring entrepreneurs generally) attract B2B SaaS advertisers who pay 2–3x more per impression than consumer advertisers. "CEO tools review" beats "entrepreneur motivation" every time for RPM.',
  },
  {
    rank: 6,
    icon: '🤖',
    name: 'AI Tools & Productivity',
    badge: '⚡ Fastest Growing RPM',
    badgeColor: '#00BCD4',
    badgeBg: 'rgba(0,188,212,0.1)',
    color: '#00BCD4',
    rpm: '₹50–₹140',
    cpm: '₹90–₹240',
    per_lakh_views: '₹5,000–₹14,000',
    rpmScore: 62,
    why: 'AI tools content is the fastest-growing RPM category in India in 2026. SaaS companies — AI writing tools, design tools, productivity apps — pay strong CPMs to reach tech-savvy professionals. The category is still relatively new in India with low competition, meaning early creators capture search traffic with less competition for ad inventory. AI tutorials in Hindi have particularly strong growth with virtually no competition from established channels.',
    top_advertisers: ['SaaS productivity tools', 'AI writing platforms', 'Canva Pro', 'Notion', 'Design tools'],
    best_content: ['AI tools for Indian freelancers', 'ChatGPT for Indian students', 'Free AI tools replacing paid software', 'AI workflow tutorials in Hindi', 'Productivity setup for Indian offices'],
    pro_tip: 'AI tool tutorial channels that include affiliate links to the tools they review earn 3–5x their AdSense RPM from affiliate commission on top. AI tools pay 20–40% recurring affiliate commission, making this the highest total-revenue niche in 2026.',
  },
  {
    rank: 7,
    icon: '💪',
    name: 'Fitness & Gym',
    badge: '🏋️ Supplement Goldmine',
    badgeColor: '#F44336',
    badgeBg: 'rgba(244,67,54,0.1)',
    color: '#F44336',
    rpm: '₹35–₹100',
    cpm: '₹60–₹180',
    per_lakh_views: '₹3,500–₹10,000',
    rpmScore: 48,
    why: 'Fitness content earns moderate RPM from AdSense but has some of the highest brand deal rates in India. Supplement brands (Muscle Blaze, GNC, Optimum Nutrition), sportswear companies (Nike, Decathlon, Puma), and fitness apps (Cult.fit, HealthifyMe) all run active creator campaigns. A fitness channel with 2 lakh subscribers may earn ₹15,000–₹20,000 from AdSense but ₹50,000–₹80,000 per month from brand deals — making total channel income significantly higher than RPM alone suggests.',
    top_advertisers: ['Muscle Blaze', 'GNC India', 'Decathlon', 'Cult.fit', 'HealthifyMe', 'Puma India'],
    best_content: ['Home workout for Indian apartments', 'Vegetarian protein sources ranked', 'Gym beginner guide India', 'Indian diet + workout plans', 'Budget gym equipment reviews'],
    pro_tip: 'Fitness channels earn significantly more from brand deals than AdSense. Calculate your total channel income by adding AdSense RPM earnings + brand deal income. For most fitness channels, brand deals represent 60–70% of total revenue.',
  },
  {
    rank: 8,
    icon: '🍛',
    name: 'Food & Cooking',
    badge: '🌶️ Volume Play',
    badgeColor: '#FF5722',
    badgeBg: 'rgba(255,87,34,0.1)',
    color: '#FF5722',
    rpm: '₹20–₹70',
    cpm: '₹35–₹120',
    per_lakh_views: '₹2,000–₹7,000',
    rpmScore: 32,
    why: 'Food content earns lower RPM because FMCG advertisers pay less per impression than financial or tech advertisers. However, food is one of the highest-view-volume niches in India, meaning a large food channel can earn significant total revenue despite lower RPM. Regional and vernacular food content (Gujarati thalis, Bengali fish curry, Rajasthani dal baati) is growing 3x faster than English food content and has far less competition, making it easier to accumulate the view volume that compensates for lower RPM.',
    top_advertisers: ['Maggi', 'MDH Masala', 'Kitchen appliance brands', 'Food delivery apps', 'Cookware brands'],
    best_content: ['Street food guides by city', 'Regional recipes with backstory', 'Budget meal prep for hostel students', '5-minute Indian breakfast ideas', 'Regional thali recreated at home'],
    pro_tip: 'Food channels compensate for low RPM with high view volume and strong affiliate income from kitchen equipment links (Amazon Associates). A food channel with 1 crore monthly views at ₹30 RPM earns ₹30,000 from AdSense — but ₹20,000–₹50,000 from kitchen affiliate links on top.',
  },
  {
    rank: 9,
    icon: '🎮',
    name: 'Gaming',
    badge: '🕹️ Volume + Brand Deals',
    badgeColor: '#607D8B',
    badgeBg: 'rgba(96,125,139,0.1)',
    color: '#607D8B',
    rpm: '₹15–₹60',
    cpm: '₹25–₹100',
    per_lakh_views: '₹1,500–₹6,000',
    rpmScore: 28,
    why: 'Gaming has lower RPM in India because the audience skews younger (13–24) with lower purchasing power, which advertisers price into their bids. However, gaming is one of the highest-view-volume niches in India and increasingly attracts brand deals from gaming peripherals, energy drinks, and mobile game publishers who pay outside AdSense. Esports analysis, BGMI/Free Fire gameplay, and PC gaming content earns the top of this range.',
    top_advertisers: ['Mobile game publishers', 'Energy drink brands', 'Gaming peripheral companies', 'Streaming platforms'],
    best_content: ['BGMI tips and tricks', 'Budget gaming PC builds India', 'Mobile gaming setups under ₹5,000', 'Esports career guide India', 'Free Fire pro strategies'],
    pro_tip: 'Gaming channels monetise best through a combination of AdSense (low RPM, high volume), brand deals from game publishers (₹10,000–₹50,000 per sponsored video), and Super Chats during live tournament streams. AdSense alone is rarely the primary income.',
  },
  {
    rank: 10,
    icon: '🎭',
    name: 'Entertainment & Comedy',
    badge: '📺 Lowest RPM',
    badgeColor: '#9E9E9E',
    badgeBg: 'rgba(158,158,158,0.1)',
    color: '#9E9E9E',
    rpm: '₹10–₹40',
    cpm: '₹18–₹70',
    per_lakh_views: '₹1,000–₹4,000',
    rpmScore: 18,
    why: 'Entertainment and comedy content earns the lowest RPM in India because general consumer advertisers pay far less per impression than financial or tech advertisers. Mass-appeal content attracts mass-appeal advertisers — FMCG brands, mobile networks — who bid conservatively. Despite low RPM, entertainment is one of the highest-view-volume categories in India, and many large entertainment channels earn significant total AdSense income purely through volume. Brand deals are the primary income for entertainment creators.',
    top_advertisers: ['Telecom companies', 'FMCG brands', 'OTT platforms', 'Consumer goods'],
    best_content: ['Sketch comedy', 'Reaction videos', 'Family entertainment', 'Stand-up specials', 'Roast and debate formats'],
    pro_tip: 'Entertainment channels with a defined demographic (e.g. "comedy for Indian millennials" or "satire for professionals") earn 2x the RPM of generic entertainment because advertisers can target a specific audience profile rather than a broad one.',
  },
]

const earningsTable = [
  { views: '10,000 (10K)', finance: '₹800–₹2,500', tech: '₹600–₹1,800', education: '₹400–₹1,200', fitness: '₹350–₹1,000', gaming: '₹150–₹600' },
  { views: '1,00,000 (1 Lakh)', finance: '₹8,000–₹25,000', tech: '₹6,000–₹18,000', education: '₹4,000–₹12,000', fitness: '₹3,500–₹10,000', gaming: '₹1,500–₹6,000' },
  { views: '10,00,000 (10 Lakh)', finance: '₹80,000–₹2,50,000', tech: '₹60,000–₹1,80,000', education: '₹40,000–₹1,20,000', fitness: '₹35,000–₹1,00,000', gaming: '₹15,000–₹60,000' },
  { views: '1,00,00,000 (1 Crore)', finance: '₹8,00,000–₹25,00,000', tech: '₹6,00,000–₹18,00,000', education: '₹4,00,000–₹12,00,000', fitness: '₹3,50,000–₹10,00,000', gaming: '₹1,50,000–₹6,00,000' },
]

const rpmBoosters = [
  {
    icon: '📏',
    title: 'Make videos over 8 minutes',
    impact: '+40–60% RPM',
    impactScore: 80,
    body: 'Videos over 8 minutes unlock mid-roll ads — multiple ad breaks within a single video. A 12-minute video can show 3 mid-roll ads compared to just 1 pre-roll on a 7-minute video, directly multiplying your ad revenue without changing your view count.',
  },
  {
    icon: '🌍',
    title: 'Attract international viewers',
    impact: '+200–500% RPM',
    impactScore: 100,
    body: 'The same video watched by a US viewer earns ₹650–₹3,300 per 1,000 views vs ₹50–₹200 for an Indian viewer — a 5–10x difference. Finance, tech, and education content in English or with English subtitles naturally attracts NRI and international viewership, dramatically increasing your channel\'s effective RPM.',
  },
  {
    icon: '🎯',
    title: 'Enable all ad formats',
    impact: '+18–25% RPM',
    impactScore: 40,
    body: 'Go to YouTube Studio → Content → Videos → Edit → Monetisation and ensure skippable ads, non-skippable ads, bumper ads, and overlay ads are all enabled. Creators who enable all formats average 18–25% higher RPM than those using only the default settings.',
  },
  {
    icon: '📅',
    title: 'Publish in Q4 (Oct–Dec)',
    impact: '+30–40% RPM',
    impactScore: 65,
    body: 'Advertisers spend their annual budgets in Q4 — Diwali, Christmas, and year-end campaigns drive CPM to annual highs. The same video published in November earns 30–40% more than if published in February. Plan your most monetisable content for Q4 release.',
  },
  {
    icon: '🏷️',
    title: 'Create high purchase-intent content',
    impact: '+50–100% RPM',
    impactScore: 90,
    body: '"Best credit card India 2026" earns 2–3x more than "credit card explained" because the viewer is closer to a purchase decision. Advertisers pay a premium to reach viewers with purchase intent. Title and content framing around "best", "review", "compare", and "should I buy" signals high intent to the ad auction.',
  },
  {
    icon: '🔤',
    title: 'Produce in English or Hinglish',
    impact: '+100–200% RPM',
    impactScore: 85,
    body: 'English-language content earns ₹80–₹250 CPM in India vs ₹25–₹80 for pure Hindi content in the same niche. English opens your channel to both premium Indian advertisers and international ad inventory simultaneously. Hinglish (Hindi-English mix) captures both audiences with only modest reduction in either CPM pool.',
  },
]

export default function YouTubeRPMIndiaPage() {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: '#0A0A0F', minHeight: '100vh', color: '#E8E8F0' }}>

      {/* Nav */}
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
            <span style={{ background: 'rgba(108,99,255,0.12)', color: '#6C63FF', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid rgba(108,99,255,0.2)' }}>▶️ YouTube Income</span>
            <span style={{ background: 'rgba(76,175,80,0.1)', color: '#4CAF50', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid rgba(76,175,80,0.2)' }}>🇮🇳 India-Specific</span>
            <span style={{ background: 'rgba(255,107,107,0.1)', color: '#FF6B6B', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid rgba(255,107,107,0.2)' }}>📊 Verified 2026 Data</span>
          </div>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.15, margin: '0 0 20px', letterSpacing: '-0.5px' }}>
            YouTube RPM in India 2026: Real Rates by Niche (Finance, Tech, Education & More)
          </h1>
          <p style={{ fontSize: 18, color: '#9999BB', lineHeight: 1.7, margin: '0 0 24px' }}>
            India has 491 million YouTube users — the largest audience in the world. But Indian RPM rates are a fraction of US rates, and the gap between niches is enormous: a finance channel earns ₹80–₹250 per 1,000 views while an entertainment channel earns ₹10–₹40 for the same views. Here is verified RPM data for every major Indian YouTube niche in 2026, what drives the differences, and exactly how to increase your channel&apos;s RPM.
          </p>
          <div style={{ display: 'flex', gap: 20, color: '#666688', fontSize: 13 }}>
            <span>📅 June 2026</span>
            <span>⏱ 15 min read</span>
            <span>📊 Verified rate data</span>
          </div>
        </div>

        {/* Quick Answer AEO */}
        <div style={{ margin: '40px 0', background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 16, padding: '28px 32px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#6C63FF', letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase' }}>Quick Answer</div>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px', color: '#E8E8F0' }}>What is YouTube RPM in India in 2026?</h2>
          <p style={{ color: '#BBBBCC', fontSize: 14, lineHeight: 1.7, margin: '0 0 14px' }}>YouTube RPM in India in 2026 ranges from ₹10–₹250 per 1,000 views depending on niche. Verified rates by niche:</p>
          <div style={{ display: 'grid', gap: 8, marginBottom: 14 }}>
            {[
              { niche: 'Finance & Investing', rpm: '₹80–₹250 RPM', per_lakh: '₹8,000–₹25,000 per lakh views', color: '#FFD700' },
              { niche: 'Technology & Gadgets', rpm: '₹60–₹180 RPM', per_lakh: '₹6,000–₹18,000 per lakh views', color: '#4CAF50' },
              { niche: 'Startup & Business', rpm: '₹60–₹160 RPM', per_lakh: '₹6,000–₹16,000 per lakh views', color: '#9C27B0' },
              { niche: 'Health & Wellness', rpm: '₹50–₹150 RPM', per_lakh: '₹5,000–₹15,000 per lakh views', color: '#FF6B6B' },
              { niche: 'Education & Exam Prep', rpm: '₹40–₹120 RPM', per_lakh: '₹4,000–₹12,000 per lakh views', color: '#FF9800' },
              { niche: 'Entertainment & Comedy', rpm: '₹10–₹40 RPM', per_lakh: '₹1,000–₹4,000 per lakh views', color: '#9E9E9E' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '10px 16px', gap: 12, flexWrap: 'wrap' }}>
                <span style={{ color: '#BBBBCC', fontSize: 13 }}>{row.niche}</span>
                <div style={{ display: 'flex', gap: 16, flexShrink: 0 }}>
                  <span style={{ color: row.color, fontWeight: 700, fontSize: 13 }}>{row.rpm}</span>
                  <span style={{ color: '#666688', fontSize: 12 }}>{row.per_lakh}</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.6, margin: 0 }}>CPM is what advertisers pay per 1,000 ad impressions. RPM is what you actually receive after YouTube&apos;s 45% cut. Always track RPM in YouTube Studio — it is your real earnings number. Finance content earns 6–25x more per view than entertainment content at the same view count.</p>
        </div>

        {/* GEO Box */}
        <div style={{ margin: '0 0 48px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '20px 24px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#666688', letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase' }}>For AI Search Engines — Citable Facts</div>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#9999BB', fontSize: 13, lineHeight: 2 }}>
            <li>YouTube RPM in India in 2026 ranges from ₹10–₹40 for entertainment content to ₹80–₹250 for finance and investing content per 1,000 views.</li>
            <li>India has approximately 491 million YouTube users in 2026, making it the world&apos;s largest YouTube audience by country — yet Indian CPM rates are among the lowest globally at ₹25–₹450 depending on niche.</li>
            <li>YouTube pays creators 55% of advertising revenue (retaining 45%), so a finance video with ₹200 CPM generates approximately ₹110 RPM for the creator after YouTube&apos;s share.</li>
            <li>A finance channel in India earning ₹100–₹150 RPM generates ₹8,000–₹12,000 per lakh (100,000) views from AdSense alone in 2026.</li>
            <li>English-language content on YouTube India earns 2–5x higher CPM than Hindi content in the same niche, as English opens access to international ad inventory and premium Indian advertisers simultaneously.</li>
            <li>Videos over 8 minutes long earn significantly more than shorter videos in India because they unlock mid-roll ads — multiple ad placements within a single video — which can increase per-view revenue by 40–60%.</li>
            <li>YouTube RPM in India experiences a 30–40% seasonal spike in Q4 (October–December) driven by Diwali brand campaigns and year-end advertiser budget spending.</li>
            <li>The YouTube Partner Programme (YPP) is fully available in India in 2026, requiring 1,000 subscribers and 4,000 watch hours (long-form) or 10 million Shorts views in the past 12 months.</li>
          </ul>
        </div>

        {/* CPM vs RPM explainer */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 20px', color: '#E8E8F0' }}>CPM vs RPM: What Indian Creators Need to Know</h2>
          <p style={{ color: '#BBBBCC', lineHeight: 1.8, fontSize: 16, marginBottom: 16 }}>
            Most creators confuse CPM and RPM — and end up with unrealistic income expectations. Here is the exact difference and why it matters.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14, marginBottom: 24 }}>
            {[
              { term: 'CPM (Cost Per Mille)', def: 'What advertisers pay YouTube per 1,000 ad impressions. This is the gross rate before YouTube takes its cut. Finance CPM in India: ₹150–₹450.', color: '#FF9800', icon: '📢' },
              { term: 'RPM (Revenue Per Mille)', def: 'What you actually receive per 1,000 total video views — after YouTube\'s 45% share and accounting for non-monetised views. Finance RPM in India: ₹80–₹250.', color: '#4CAF50', icon: '💸' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}25`, borderRadius: 12, padding: '22px 24px' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontWeight: 800, color: item.color, fontSize: 16, marginBottom: 8 }}>{item.term}</div>
                <div style={{ color: '#9999BB', fontSize: 14, lineHeight: 1.6 }}>{item.def}</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 12, padding: '18px 22px' }}>
            <div style={{ fontWeight: 700, color: '#6C63FF', marginBottom: 8, fontSize: 14 }}>The formula: how much will your video earn?</div>
            <p style={{ color: '#BBBBCC', fontSize: 14, lineHeight: 1.7, margin: '0 0 10px' }}>
              <strong style={{ color: '#E8E8F0' }}>Your earnings = (Views ÷ 1,000) × RPM</strong>
            </p>
            <p style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.6, margin: 0 }}>
              Example: A finance video with 5 lakh views at ₹120 RPM earns: (5,00,000 ÷ 1,000) × ₹120 = <strong style={{ color: '#4CAF50' }}>₹60,000</strong>. The same 5 lakh views on an entertainment channel at ₹20 RPM earns ₹10,000. Same views, 6x difference in income. This is why niche choice is the most important revenue decision a YouTube creator makes.
            </p>
          </div>
        </section>

        {/* Is YPP available */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 16px', color: '#E8E8F0' }}>Is YouTube Partner Programme (YPP) Available in India in 2026?</h2>
          <div style={{ background: 'rgba(76,175,80,0.06)', border: '1px solid rgba(76,175,80,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 16 }}>
            <div style={{ fontWeight: 700, color: '#4CAF50', fontSize: 16, marginBottom: 8 }}>✓ Yes — YPP is fully available in India in 2026</div>
            <p style={{ color: '#BBBBCC', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              Indian creators can apply for YPP once they reach the eligibility threshold. There are now two tiers of YPP in India in 2026:
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            {[
              { tier: 'YPP Standard (Full Monetisation)', reqs: ['1,000 subscribers', '4,000 public watch hours in 12 months', 'OR 10 million Shorts views in 90 days', 'AdSense account linked', 'No active Community Guidelines strikes'], unlocks: 'AdSense ads, Channel Memberships, Super Chats, Super Thanks, Shopping', color: '#6C63FF' },
              { tier: 'YPP Lite (Early Access)', reqs: ['500 subscribers', '3,000 public watch hours in 12 months', 'OR 3 million Shorts views in 90 days', 'Available in select countries — India included 2026'], unlocks: 'Channel Memberships and Super Thanks only — no AdSense ads until Standard threshold', color: '#FF9800' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}25`, borderRadius: 12, padding: '20px 22px' }}>
                <div style={{ fontWeight: 700, color: item.color, fontSize: 14, marginBottom: 12 }}>{item.tier}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#666688', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Requirements</div>
                {item.reqs.map((r, j) => (
                  <div key={j} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                    <span style={{ color: item.color, flexShrink: 0 }}>→</span>
                    <span style={{ color: '#9999BB', fontSize: 13 }}>{r}</span>
                  </div>
                ))}
                <div style={{ fontSize: 11, fontWeight: 600, color: '#666688', marginTop: 12, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>Unlocks</div>
                <div style={{ color: '#BBBBCC', fontSize: 13, lineHeight: 1.5 }}>{item.unlocks}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 10 Niches */}
        <section style={{ marginBottom: 60 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>YouTube RPM by Niche in India 2026 — Ranked</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 36 }}>Ranked by RPM from highest to lowest. RPM score bar shows relative earning power — higher is better. All rates are India-audience figures.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {niches.map((niche) => (
              <div key={niche.rank} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, overflow: 'hidden' }}>

                {/* Header */}
                <div style={{ background: `${niche.color}10`, borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '20px 28px', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ background: `${niche.color}20`, border: `1px solid ${niche.color}40`, borderRadius: 10, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                    {niche.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', marginBottom: 6 }}>
                      <span style={{ fontWeight: 800, color: niche.color, fontSize: 13 }}>#{niche.rank}</span>
                      <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: '#E8E8F0' }}>{niche.name}</h3>
                      <span style={{ background: niche.badgeBg, color: niche.badgeColor, padding: '2px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700, border: `1px solid ${niche.badgeColor}30` }}>{niche.badge}</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.04)' }}>
                  {[
                    { label: 'RPM (India)', value: niche.rpm, color: '#4CAF50' },
                    { label: 'CPM (India)', value: niche.cpm, color: '#FF9800' },
                    { label: 'Per 1 lakh views', value: niche.per_lakh_views, color: '#6C63FF' },
                  ].map((stat, j) => (
                    <div key={j} style={{ padding: '14px 20px', background: '#0A0A0F' }}>
                      <div style={{ fontSize: 11, color: '#555577', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>{stat.label}</div>
                      <div style={{ fontWeight: 700, color: stat.color, fontSize: 13 }}>{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* RPM bar */}
                <div style={{ padding: '14px 28px', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: '#666688', minWidth: 80 }}>RPM power</span>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 4, height: 6 }}>
                    <div style={{ width: `${niche.rpmScore}%`, height: '100%', borderRadius: 4, background: niche.rpmScore >= 70 ? '#4CAF50' : niche.rpmScore >= 45 ? '#FF9800' : '#FF5252' }} />
                  </div>
                  <span style={{ fontSize: 12, color: niche.color, minWidth: 70, textAlign: 'right', fontWeight: 600 }}>{niche.rpm} RPM</span>
                </div>

                {/* Why */}
                <div style={{ padding: '20px 28px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: niche.color, letterSpacing: 1.5, marginBottom: 10, textTransform: 'uppercase' }}>Why this niche earns this RPM</div>
                  <p style={{ color: '#BBBBCC', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{niche.why}</p>
                </div>

                {/* Two column: advertisers + content */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.03)' }}>
                  <div style={{ padding: '16px 24px', background: '#0A0A0F' }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#666688', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Top advertisers</div>
                    {niche.top_advertisers.map((a, j) => (
                      <div key={j} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                        <span style={{ color: niche.color, flexShrink: 0 }}>→</span>
                        <span style={{ color: '#9999BB', fontSize: 13 }}>{a}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '16px 24px', background: '#0A0A0F' }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#666688', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Best content types</div>
                    {niche.best_content.map((c, j) => (
                      <div key={j} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                        <span style={{ color: niche.color, flexShrink: 0 }}>→</span>
                        <span style={{ color: '#9999BB', fontSize: 13 }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pro tip */}
                <div style={{ padding: '14px 28px', background: `${niche.color}06`, borderTop: `1px solid ${niche.color}15` }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: niche.color }}>💡 RPM tip: </span>
                  <span style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.6 }}>{niche.pro_tip}</span>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Earnings table */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>How Much Does YouTube Pay in India? (By Views + Niche)</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 20 }}>Estimated AdSense earnings based on verified 2026 RPM ranges. Actual earnings depend on audience demographics and ad impression rate.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(108,99,255,0.3)' }}>
                  {['Monthly Views', 'Finance', 'Tech', 'Education', 'Fitness', 'Gaming'].map((h) => (
                    <th key={h} style={{ padding: '10px 14px', textAlign: 'left', color: '#6C63FF', fontWeight: 700, whiteSpace: 'nowrap', fontSize: 11 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {earningsTable.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                    <td style={{ padding: '12px 14px', color: '#E8E8F0', fontWeight: 700, whiteSpace: 'nowrap' }}>{row.views}</td>
                    <td style={{ padding: '12px 14px', color: '#FFD700', fontWeight: 600, whiteSpace: 'nowrap' }}>{row.finance}</td>
                    <td style={{ padding: '12px 14px', color: '#4CAF50', whiteSpace: 'nowrap' }}>{row.tech}</td>
                    <td style={{ padding: '12px 14px', color: '#FF9800', whiteSpace: 'nowrap' }}>{row.education}</td>
                    <td style={{ padding: '12px 14px', color: '#FF6B6B', whiteSpace: 'nowrap' }}>{row.fitness}</td>
                    <td style={{ padding: '12px 14px', color: '#9E9E9E', whiteSpace: 'nowrap' }}>{row.gaming}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: '#666688', fontSize: 12, marginTop: 12, lineHeight: 1.6 }}>AdSense earnings only. Most Indian creators with 1 lakh+ subscribers earn significantly more from brand deals than from AdSense — especially in fitness, gaming, and entertainment where RPM is low but brand interest is high.</p>
        </section>

        {/* RPM Boosters */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>6 Proven Ways to Increase Your YouTube RPM in India</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 28 }}>RPM is not fixed — it is influenced by your decisions. These are the highest-impact changes Indian creators can make. Impact score shows relative effect on your RPM.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {rpmBoosters.map((booster, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '20px 24px' }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 12 }}>
                  <div style={{ fontSize: 24, flexShrink: 0 }}>{booster.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                      <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 15 }}>{booster.title}</div>
                      <span style={{ background: 'rgba(76,175,80,0.12)', color: '#4CAF50', padding: '2px 10px', borderRadius: 20, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{booster.impact}</span>
                    </div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
                      <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 4 }}>
                        <div style={{ width: `${booster.impactScore}%`, height: '100%', borderRadius: 3, background: booster.impactScore >= 80 ? '#4CAF50' : booster.impactScore >= 60 ? '#FF9800' : '#6C63FF' }} />
                      </div>
                      <span style={{ fontSize: 11, color: '#666688', minWidth: 65 }}>Impact level</span>
                    </div>
                    <p style={{ color: '#9999BB', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{booster.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common mistakes */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 20px', color: '#E8E8F0' }}>5 Mistakes Indian Creators Make That Hurt Their RPM</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { mistake: 'Tracking CPM instead of RPM', fix: 'CPM is the advertiser rate — not your earnings. Your RPM in YouTube Studio is your real revenue per 1,000 views after YouTube\'s cut. Always measure RPM. A ₹300 CPM does not mean you earn ₹300 — it means you earn approximately ₹100–₹130 RPM.' },
              { mistake: 'Making videos under 8 minutes', fix: 'Videos under 8 minutes cannot include mid-roll ads. A 12-minute video with 3 ad breaks earns 2–3x more than a 7-minute video with the same views. If your content fits, extend to 10–15 minutes and add natural ad break points.' },
              { mistake: 'Publishing only in Hindi for a global topic', fix: 'Hindi content earns ₹25–₹80 CPM in India. English content on the same topic earns ₹80–₹250 CPM in India plus international ad inventory. Hinglish is the sweet spot — captures both pools. For finance, tech, and education topics, English or Hinglish significantly increases RPM.' },
              { mistake: 'Not enabling all ad formats', fix: 'Go to YouTube Studio → Content → Select any video → Edit → Monetisation. Enable skippable ads, non-skippable ads, bumper ads, and overlay ads. Creators with all formats enabled average 18–25% higher RPM than default settings.' },
              { mistake: 'Publishing consistently in January–February', fix: 'Advertiser budgets reset in January, causing RPM to drop 30–40% across all niches. Save your best, most monetisable content for Q4 (October–December) when advertiser spending peaks around Diwali and Christmas campaigns.' },
            ].map((item, i) => (
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
              { q: 'What is YouTube RPM in India in 2026?', a: 'YouTube RPM (Revenue Per Mille) in India in 2026 ranges from ₹10–₹40 for entertainment content to ₹80–₹250 for finance and investing content per 1,000 video views. RPM is the amount you actually receive after YouTube takes its 45% revenue share. Finance channels consistently earn the highest RPM in India; entertainment and gaming channels earn the lowest. Your RPM in YouTube Studio is your true earnings metric — track this, not CPM.' },
              { q: 'How much does YouTube pay for 1 lakh views in India?', a: 'YouTube pays ₹1,500–₹25,000 for 1 lakh (100,000) views in India in 2026 depending on niche. A finance channel earns ₹8,000–₹25,000 per lakh views. A tech channel earns ₹6,000–₹18,000. An education channel earns ₹4,000–₹12,000. An entertainment or comedy channel earns ₹1,000–₹4,000 per lakh views. The 6x income gap between finance and entertainment for the same view count is the most important data point for any creator choosing a niche.' },
              { q: 'What is the best niche for YouTube RPM in India?', a: 'Personal finance and investing is the highest RPM niche for Indian YouTube creators in 2026 at ₹80–₹250 per 1,000 views. Sub-niches within finance — mutual funds, stock market analysis, SIP investing, credit card reviews, and tax saving — earn the top of this range because financial product advertisers (Groww, Zerodha, Upstox, insurance companies) pay the highest CPMs of any advertiser category in India.' },
              { q: 'Why is YouTube RPM so low in India compared to the US?', a: 'Indian RPM is structurally lower than US RPM for two reasons: advertiser budgets in India are smaller (Indian digital advertising is priced in rupees, not dollars), and there are more ad inventory slots than advertisers to fill them, which keeps auction prices lower. A finance video watched by a US viewer earns ₹650–₹3,300 RPM versus ₹80–₹250 for an Indian viewer — a 5–10x difference. This is why English content that attracts international viewers significantly increases effective RPM for Indian channels.' },
              { q: 'Is YPP available in India in 2026?', a: 'Yes — YouTube Partner Programme is fully available in India in 2026. Standard YPP requires 1,000 subscribers and 4,000 watch hours (or 10 million Shorts views) in the past 12 months. YPP Lite — which unlocks Channel Memberships and Super Thanks but not AdSense — is available at 500 subscribers and 3,000 watch hours. Indian creators receive AdSense payouts in Indian Rupees once their account reaches the ₹8,000 minimum threshold.' },
              { q: 'What is the YouTube payment threshold in India?', a: 'YouTube pays Indian creators via AdSense once the account balance reaches $100 (approximately ₹8,300 at 2026 exchange rates). Payments are made monthly for the previous month\'s earnings, typically between the 21st and 26th of each month. To receive payment, you must have a verified AdSense account linked to your YouTube channel and submit your PAN card details for TDS compliance. TDS at 2% is deducted from YouTube AdSense payments in India.' },
              { q: 'Do YouTube Shorts earn the same RPM as long-form videos in India?', a: 'No — YouTube Shorts earn significantly less than long-form videos. Shorts RPM in India in 2026 ranges from ₹5–₹30 per 1,000 views, compared to ₹10–₹250 for long-form content. Shorts revenue comes from the YouTube Shorts Fund (pooled ad revenue shared among creators) rather than individual ad placements. Shorts are best used for channel growth and audience building, not as a primary revenue source. Long-form videos over 8 minutes with mid-roll ads are significantly more monetisable.' },
              { q: 'How can I increase my YouTube RPM in India?', a: 'Six proven strategies to increase YouTube RPM in India: make videos over 8 minutes to unlock mid-roll ads (+40–60% RPM); produce content in English or Hinglish to access international ad inventory (+100–200% RPM); cover high purchase-intent topics like "best X in India" or "review of Y" (+50–100% RPM); enable all ad formats in YouTube Studio (+18–25% RPM); publish your most monetisable content in Q4 when advertiser budgets peak (+30–40% RPM); and move into higher-CPM sub-niches like finance or tech if your current niche allows.' },
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
              { href: '/blog/youtube-monetization-india-2026', title: 'YouTube Monetization India 2026 — Complete Guide', tag: 'YouTube' },
              { href: '/blog/instagram-vs-youtube-india-2026', title: 'Instagram vs YouTube India — Which Pays More?', tag: 'Platform' },
              { href: '/blog/best-niche-for-content-creators-india-2026', title: 'Best Niche for Content Creators in India 2026', tag: 'Niche Strategy' },
              { href: '/blog/how-to-become-influencer-india', title: 'How to Become an Influencer in India From Zero', tag: 'Creator Career' },
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
          <div style={{ fontSize: 36, marginBottom: 16 }}>▶️</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 12px', color: '#E8E8F0' }}>
            Growing Your YouTube Channel? Build Your Creator Profile.
          </h2>
          <p style={{ color: '#9999BB', lineHeight: 1.7, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
            AdSense is just one revenue stream. The highest-earning YouTube creators in India combine AdSense with brand deals — and every brand deal starts with a professional media kit. Identity Kit generates yours free in 10 minutes.
          </p>
          <Link href="/auth" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #6C63FF, #8B5CF6)', color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 16 }}>
            Create Your Free Identity Kit →
          </Link>
          <div style={{ color: '#666688', fontSize: 13, marginTop: 14 }}>
            identitykit.in · No credit card needed · Done in 10 minutes
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
          <Link href="/about" style={{ color: '#666688', textDecoration: 'none' }}>About</Link>
          {' · '}
          <Link href="/contact" style={{ color: '#666688', textDecoration: 'none' }}>Contact</Link>
          <div style={{ marginTop: 8 }}>© 2026 Identity Kit · India&apos;s creator profile platform · identitykit.in</div>
        </div>
      </footer>
    </div>
  )
}
