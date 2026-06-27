import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Affiliate Marketing for Creators in India 2026: Complete Earning Guide (₹25K–₹2L/Month)',
  description: 'How Indian content creators earn ₹25,000–₹2,00,000/month from affiliate marketing in 2026. Amazon Associates, Flipkart, EarnKaro, demat account referrals, fintech CPA deals — commission rates, top programs, niche strategy, and step-by-step setup for Instagram, YouTube, and blogs.',
  keywords: 'affiliate marketing india creators, affiliate marketing for content creators india, how to earn from affiliate marketing india, amazon associates india creators, flipkart affiliate program india, earnkaro india, affiliate marketing income india 2026, best affiliate programs india creators',
  openGraph: {
    title: 'Affiliate Marketing for Creators in India 2026: Complete Earning Guide (₹25K–₹2L/Month)',
    description: 'Indian creators earn ₹25,000–₹2,00,000/month from affiliate marketing. Amazon (1–10%), Flipkart (up to 8.1%), demat referrals (₹500–₹2,000 each), fintech CPA deals — full breakdown by platform and niche.',
    url: 'https://identitykit.in/blog/affiliate-marketing-india-creators-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/affiliate-marketing-india-creators.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/affiliate-marketing-india-creators-2026',
  },
}

const programs = [
  {
    rank: 1,
    icon: '🛒',
    name: 'Amazon Associates India',
    badge: 'Best for Beginners',
    badgeColor: '#FF9800',
    badgeBg: 'rgba(255,152,0,0.1)',
    color: '#FF9800',
    commission: '1%–10%',
    cookieDuration: '24 hours',
    minPayout: '₹1,000',
    bestFor: 'Tech, gadgets, beauty, books, home products',
    difficultyScore: 20,
    difficulty: 'Very Easy to join',
    why: 'Largest product catalogue in India. Any creator with a website, YouTube channel, or social media account can apply and get approved in 24–48 hours. Luxury beauty at 10% commission is the highest-paying category. Best for tech and gadget YouTubers (3–4% on electronics at ₹20,000+ price points = ₹600–₹800 per sale).',
    proTip: 'Stack Amazon links with YouTube video descriptions. A phone review with 10,000 views converting at 1% = 100 sales × ₹600 avg commission = ₹60,000 from one video.',
    contentIdeas: ['Phone/laptop unboxings', 'Product comparisons', 'Best-of lists', 'Gift guides'],
  },
  {
    rank: 2,
    icon: '🏪',
    name: 'EarnKaro / Cuelinks',
    badge: 'No Website Needed',
    badgeColor: '#4CAF50',
    badgeBg: 'rgba(76,175,80,0.1)',
    color: '#4CAF50',
    commission: '0.5%–30% (varies by brand)',
    cookieDuration: '24–72 hours',
    minPayout: '₹10',
    bestFor: 'Instagram creators, WhatsApp deal groups, Telegram channels',
    difficultyScore: 10,
    difficulty: 'Easiest to start',
    why: 'Affiliate aggregators that give you access to 300+ Indian brands — Amazon, Flipkart, Myntra, Ajio, Meesho, Nykaa — through a single dashboard. No website required. Works directly from your phone. EarnKaro is the #1 choice for Instagram creators who want to share deals in Stories and bio link.',
    proTip: 'EarnKaro\'s "Deal" feature curates the best current discounts across all brands. Share these during Big Billion Days and Great Indian Festival sales — conversion rates during sale periods are 5–8x normal.',
    contentIdeas: ['Daily deal reels', 'Haul videos', 'Sale alerts', 'Budget shopping guides'],
  },
  {
    rank: 3,
    icon: '💰',
    name: 'Demat & Fintech Referrals',
    badge: 'Highest Per-Conversion',
    badgeColor: '#6C63FF',
    badgeBg: 'rgba(108,99,255,0.1)',
    color: '#6C63FF',
    commission: '₹500–₹2,000 per verified account',
    cookieDuration: '30–90 days',
    minPayout: '₹1,000',
    bestFor: 'Finance creators, personal finance YouTubers, finfluencers',
    difficultyScore: 45,
    difficulty: 'Medium — need finance audience',
    why: 'Zerodha, Groww, Angel One, and Upstox pay ₹500–₹2,000 per verified demat account signup — a flat fee, not a percentage. A finance creator who drives 50 signups per month earns ₹25,000–₹1,00,000 from referrals alone, on top of any brand deal income. This is India\'s single highest per-action affiliate opportunity.',
    proTip: 'SEBI requires disclosure of demat referral relationships. Always disclose. Finance creators who are transparent about referral income actually convert better — audiences trust the honesty.',
    contentIdeas: ['SIP tutorials', 'Demat account comparisons', 'Stock market for beginners', 'App reviews'],
  },
  {
    rank: 4,
    icon: '📚',
    name: 'EdTech Affiliate Programs',
    badge: 'High Value Per Sale',
    badgeColor: '#FF6B6B',
    badgeBg: 'rgba(255,107,107,0.1)',
    color: '#FF6B6B',
    commission: '10%–40% per enrollment',
    cookieDuration: '30 days',
    minPayout: '₹500',
    bestFor: 'Career content creators, student influencers, skill-building creators',
    difficultyScore: 35,
    difficulty: 'Easy-Medium',
    why: 'Udemy, Coursera, UpGrad, and Unacademy all run affiliate programs with 10–40% commissions. A ₹5,000 course at 20% commission = ₹1,000 per enrollment. Drive 30 enrollments/month = ₹30,000 in affiliate income from one content category. Evergreen content — study tips and career growth videos perform year-round.',
    proTip: 'YouTube tutorials that solve a specific problem ("How to learn Python in 30 days") and end with a relevant course recommendation convert at 3–5%. Long-tail YouTube SEO + course affiliate = compounding passive income.',
    contentIdeas: ['Course reviews', 'Skill roadmaps', 'Career switch guides', 'Study tips'],
  },
  {
    rank: 5,
    icon: '🌐',
    name: 'Hosting & SaaS Affiliate Programs',
    badge: 'Highest % Commission',
    badgeColor: '#00BCD4',
    badgeBg: 'rgba(0,188,212,0.1)',
    color: '#00BCD4',
    commission: '₹3,000–₹8,000 per hosting sale',
    cookieDuration: '90–120 days',
    minPayout: '₹1,000',
    bestFor: 'Tech creators, bloggers, business content creators',
    difficultyScore: 40,
    difficulty: 'Medium',
    why: 'Hostinger India, BigRock, and Bluehost pay ₹3,000–₹8,000 per hosting plan sold — making this the highest flat-fee affiliate program in India. Canva Pro, Notion, and Indian SaaS tools pay 20–40% recurring commissions — so every subscriber you refer earns you money every month they stay subscribed.',
    proTip: 'Recurring SaaS commissions compound. 100 Canva Pro subscribers referred = ₹40,000–₹60,000 per month in passive recurring income from a single program.',
    contentIdeas: ['How to start a blog', 'Website setup tutorials', 'Tool comparisons', 'Canva/Notion tutorials'],
  },
  {
    rank: 6,
    icon: '✈️',
    name: 'Travel & Insurance Affiliate Programs',
    badge: 'High-Value Seasonal',
    badgeColor: '#9C27B0',
    badgeBg: 'rgba(156,39,176,0.1)',
    color: '#9C27B0',
    commission: '₹200–₹3,000 per booking/policy',
    cookieDuration: '30 days',
    minPayout: '₹500',
    bestFor: 'Travel creators, lifestyle influencers, family content creators',
    difficultyScore: 50,
    difficulty: 'Medium',
    why: 'MakeMyTrip, Cleartrip, and PolicyBazaar run affiliate programs paying ₹200–₹3,000 per successful booking or insurance policy. Travel content has built-in seasonal demand spikes — summer holidays, Diwali, and year-end. Insurance content (term life, health insurance comparisons) converts year-round at high commissions.',
    proTip: 'Travel comparison content ("Best flight booking apps India 2026") with affiliate links across multiple platforms hedges against algorithm changes — if MakeMyTrip doesn\'t convert, Cleartrip might.',
    contentIdeas: ['Budget travel guides', 'Flight booking tips', 'Insurance comparisons', 'Visa guides'],
  },
]

const platformStrategies = [
  {
    platform: 'YouTube',
    icon: '▶️',
    color: '#FF5252',
    income: '₹20,000–₹2,00,000/month',
    conversionRate: '1–5%',
    bestPrograms: ['Amazon Associates', 'Hosting affiliates', 'EdTech', 'Demat referrals'],
    strategy: 'Pin affiliate links in video descriptions and pin a comment with the link. "Links mentioned in this video" in the first 2 lines of description gets clicked most. Review-format videos convert 3–5x better than tutorial-only videos. The real power is compounding — a video that ranks in YouTube search earns affiliate commissions for years after posting.',
    do: 'Create evergreen comparison content ("Best laptop under ₹50,000 2026") that stays relevant for 12–24 months',
    dont: 'Putting affiliate links only at the end of description — 80% of viewers never scroll that far',
  },
  {
    platform: 'Instagram',
    icon: '📸',
    color: '#E91E63',
    income: '₹8,000–₹60,000/month',
    conversionRate: '0.5–2%',
    bestPrograms: ['EarnKaro / Cuelinks', 'Beauty & fashion brands', 'Amazon deals'],
    strategy: 'Story swipe-ups (available at any follower count in 2026) convert best. Bio link should go to a Linktree or your Identity Kit profile linking to your top 3–5 affiliate products. Reels showcasing products authentically — hauls, reviews, "what I use daily" — convert better than obvious promotional content.',
    do: 'Share genuine "what I bought and actually use" haul content — authenticity converts 3x better than scripted ads',
    dont: 'Posting more than 1–2 affiliate posts per week — audiences disengage when the feed becomes a shop',
  },
  {
    platform: 'Blog / Website',
    icon: '✍️',
    color: '#6C63FF',
    income: '₹15,000–₹5,00,000/month',
    conversionRate: '2–8%',
    bestPrograms: ['Amazon Associates', 'SaaS/Hosting', 'Finance leads', 'EdTech'],
    strategy: 'SEO-ranked blog posts drive passive affiliate income that compounds for years. "Best X for Y" comparison posts rank well and convert at 3–8%. A single well-ranked article ("Best budget smartphone India 2026") can earn ₹50,000–₹2,00,000 per month from Amazon links alone.',
    do: 'Target "best [product] under ₹[price]" keywords — buyer-intent keywords convert 4–6x better than informational keywords',
    dont: 'Starting a blog without a content plan — 90% of blogs fail within 6 months because of inconsistency',
  },
  {
    platform: 'Telegram / WhatsApp',
    icon: '💬',
    color: '#4CAF50',
    income: '₹5,000–₹40,000/month',
    conversionRate: '3–10%',
    bestPrograms: ['EarnKaro deal alerts', 'Amazon Lightning deals', 'Flipkart sale links'],
    strategy: 'Deal channels are India\'s highest-converting affiliate channel — people who join a deals group actively want to buy. Share time-sensitive deals (Lightning deals, Flash sales) daily. EarnKaro\'s deal feed makes this automated. A Telegram channel with 5,000 members sharing 3–5 deals per day can earn ₹15,000–₹40,000/month.',
    do: 'Post deals daily — consistency is everything; members who don\'t see daily deals leave the group',
    dont: 'Posting exclusively your affiliate links without genuine deal curation — the group dies quickly',
  },
]

const steps = [
  {
    step: '01',
    title: 'Pick your niche and match it to the highest-paying affiliate programs',
    body: 'The most common mistake Indian creators make with affiliate marketing: joining Amazon Associates and promoting random products regardless of their niche. A finance creator promoting kitchen appliances converts at 0.1%. The same creator promoting demat accounts converts at 2–5%. Niche-affiliate alignment is the single biggest variable in your earnings. Map your content niche to its natural affiliate monetisation before signing up for any program.',
    tip: 'Finance + investing creators → demat referrals + fintech CPA. Tech creators → Amazon gadgets + hosting. Beauty creators → Nykaa + Amazon beauty. EdTech/career creators → Udemy + UpGrad + LinkedIn Learning.',
  },
  {
    step: '02',
    title: 'Sign up for 2–3 affiliate programs, not 15',
    body: 'Most guides tell you to join every affiliate program you can find. The result: 15 dashboards, 15 different payout thresholds, and earnings spread so thin you never reach payout on any of them. Start with 2–3 programs that match your niche and go deep. Drive consistent traffic to those specific programs until you have reliable monthly payouts, then consider adding one more.',
    tip: 'Beginners: Start with EarnKaro (covers 300+ brands in one dashboard) + one niche-specific program. This covers volume and specialisation without overwhelming you.',
  },
  {
    step: '03',
    title: 'Build your creator profile with your affiliate partnerships listed',
    body: 'Brands and brands managers who find you through affiliate platforms want to see your creator profile before upgrading to paid brand deals. Your creator profile at identitykit.in should list your affiliate partnerships, content focus, audience size, and engagement rate. A creator who can show existing affiliate partnerships signals an active, monetising audience to brands — which fast-tracks you to paid deals at higher rates.',
    tip: 'Add your active affiliate programs to your Identity Kit profile\'s "collaborations" section — it positions you as a working creator, not an aspiring one.',
  },
  {
    step: '04',
    title: 'Create content designed for affiliate conversion, not just affiliate disclosure',
    body: 'The content formats that convert best for affiliate marketing in India: comparison posts ("X vs Y — which is better"), best-of lists ("Best laptops under ₹60,000"), problem-solution tutorials ("How to start SIP in India — full guide"), and honest review-style content. The critical difference: content designed for conversion answers the question "should I buy this?" not just "here is information about this." Decision-stage content converts at 3–8%. Awareness-stage content converts at 0.1–0.5%.',
    tip: 'End every affiliate content piece with a direct call to action: "I use [product] and have the link below — if you buy through my link, it supports this channel at no extra cost to you." Transparent CTAs convert better than hidden links.',
  },
  {
    step: '05',
    title: 'Disclose affiliate relationships — every single time',
    body: 'The ASCI guidelines and Income Tax rules in India require disclosure of affiliate relationships. Beyond legal compliance: disclosed affiliate content converts better. Indian audiences in 2026 are sophisticated enough to know affiliate links exist — trying to hide them destroys trust. A simple "this contains affiliate links — I earn a small commission if you buy through them" at the top of the content builds credibility and has been shown to increase click-through rates in multiple studies.',
    tip: 'On YouTube: add "Affiliate links in description — I earn a small commission on qualifying purchases" in the first 2 lines of description. On Instagram Stories: use the Paid Partnership label even for affiliate (not just brand deals).',
  },
  {
    step: '06',
    title: 'Track, optimise, and double down on what converts',
    body: 'Most Indian creators post affiliate content, forget about it, and wonder why earnings are low. The creators earning ₹1 lakh+ per month from affiliate marketing treat it like a business: they check conversion rates weekly, identify which pieces of content earn the most, and create more of that content. A 1% conversion rate becoming 2% doubles your income with zero new traffic. Optimisation is the cheapest growth strategy available.',
    tip: 'Amazon Associates and EarnKaro both provide click and conversion data per link. Review monthly. Kill low-converting links. Create new content around high-converting products. This compounds fast.',
  },
]

const commonMistakes = [
  { m: 'Promoting products you don\'t use or believe in', f: 'Indian audiences have excellent BS detectors in 2026. Inauthentic recommendations get called out in comments and destroy long-term credibility. Only promote products you genuinely use or have thoroughly researched. One honest "I tried this and it\'s not worth it" post builds more trust than ten promotional posts.' },
  { m: 'Ignoring the cookie duration', f: 'Amazon India has a 24-hour cookie — if your viewer doesn\'t buy within 24 hours of clicking your link, you earn nothing. Fintech referral programs have 30–90 day cookies. Choose programs with longer cookies for high-consideration purchases (laptops, courses) where buyers take time to decide.' },
  { m: 'Reaching payout threshold on no program', f: 'Spreading affiliate income across 10+ programs means ₹200 here and ₹150 there — and you never reach the ₹1,000 minimum payout on any of them. Concentrate on 2–3 programs and reach payout monthly before expanding.' },
  { m: 'No content strategy — random product promotion', f: 'Randomly promoting products that have nothing to do with your niche signals desperation to your audience. Build content pillars first (the 3–4 topics your channel covers), then find affiliate programs that fit inside those pillars naturally.' },
  { m: 'Not updating affiliate links when products change', f: 'A blog post from 2024 recommending a product that no longer exists or has been superseded confuses your audience and kills conversions. Audit your affiliate links quarterly and update them.' },
]

export default function AffiliateMarketingIndiaCreatorsPage() {
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
            {['Affiliate Marketing', 'Passive Income', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(108,99,255,0.12)', color: '#6C63FF', border: '1px solid rgba(108,99,255,0.25)', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, margin: '0 0 20px', background: 'linear-gradient(135deg, #E8E8F0 60%, #6C63FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Affiliate Marketing for Creators in India 2026: Complete Earning Guide
          </h1>
          <p style={{ fontSize: 18, color: '#9999BB', lineHeight: 1.7, margin: 0 }}>
            Brand deals are active income — they stop when you stop working. Affiliate marketing is the income stream that keeps earning while you sleep. Indian creators who combine both earn 2–5x more than those who rely on brand deals alone. Here is the complete playbook.
          </p>
        </div>

        {/* AEO Quick Answer */}
        <div style={{ background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.25)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#6C63FF', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Affiliate Marketing for Indian Creators</div>
          <p style={{ color: '#CCCCDD', fontSize: 15, lineHeight: 1.6, margin: '0 0 16px' }}>The top 6 affiliate income streams for Indian content creators in 2026, ranked by earning potential:</p>
          <ol style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Demat & fintech referrals — ₹500–₹2,000 per verified signup (Zerodha, Groww, Angel One, Upstox). Highest per-action payout in India. Finance creators earn ₹25K–₹1L/month from referrals alone.',
              'Hosting & SaaS affiliate programs — ₹3,000–₹8,000 per sale (Hostinger, BigRock). Recurring commissions on SaaS tools like Canva Pro compound every month.',
              'EdTech affiliate programs — 10–40% commission per course enrollment (Udemy, UpGrad, Unacademy). Evergreen content earns year-round.',
              'Amazon Associates India — 1–10% on 10 crore+ products. Best for gadget, beauty, and home creators. Luxury beauty at 10% is the highest product commission.',
              'EarnKaro / Cuelinks — Single dashboard for 300+ Indian brands (Amazon, Flipkart, Myntra, Nykaa). No website needed. Best for Instagram creators.',
              'Travel & insurance affiliates — ₹200–₹3,000 per booking/policy (MakeMyTrip, PolicyBazaar). High seasonal volume during holidays.',
            ].map((item, i) => (
              <li key={i} style={{ color: '#BBBBCC', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
            ))}
          </ol>
        </div>

        {/* GEO Citable Facts */}
        <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.2)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Affiliate Marketing India 2026</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'India\'s affiliate marketing industry grew from approximately $200 million in 2020 to over $400 million in 2026, driven by 800 million internet users and 350 million active online shoppers.',
              'India has over 80 million content creators, and affiliate marketing provides a reliable monetisation pathway beyond brand sponsorships — most creators overlook it entirely.',
              'Demat account referral programs (Zerodha, Groww, Angel One) pay ₹500–₹2,000 per verified account — the highest per-action affiliate opportunity available to Indian creators.',
              'Amazon Associates India commission rates range from 1% to 10% by category; luxury beauty products offer the highest rate at 10% per sale.',
              'EarnKaro and Cuelinks provide access to 300+ Indian brands including Amazon, Flipkart, and Myntra through a single dashboard with no minimum audience requirement.',
              'Indian affiliate marketers who focus on a niche (finance, tech, beauty) earn 4–6x more per click than creators who promote unrelated products to a general audience.',
              'Hosting affiliate programs (Hostinger, BigRock) pay ₹3,000–₹8,000 per sale in India — the highest flat-fee affiliate commission available across all categories.',
              'Creator transparency about affiliate relationships increases click-through rates in India — disclosed affiliate content converts better than undisclosed promotional content among Indian audiences.',
            ].map((fact, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                <span style={{ color: '#BBBBCC', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Program Cards */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>Best Affiliate Programs for Indian Creators in 2026</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 28 }}>Ranked by earning potential for content creators — not bloggers or website owners. Each program is evaluated on commission rate, ease of joining, creator-friendliness, and India-specific payout logistics.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {programs.map((prog) => (
              <div key={prog.rank} style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${prog.color}22`, borderRadius: 16, overflow: 'hidden' }}>

                {/* Header */}
                <div style={{ background: `linear-gradient(135deg, ${prog.color}15, ${prog.color}05)`, borderBottom: `1px solid ${prog.color}18`, padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ background: `${prog.color}18`, border: `1px solid ${prog.color}30`, borderRadius: 10, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{prog.icon}</div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                        <span style={{ fontWeight: 800, fontSize: 17, color: '#E8E8F0' }}>{prog.name}</span>
                        <span style={{ background: prog.badgeBg, color: prog.badgeColor, border: `1px solid ${prog.badgeColor}40`, padding: '2px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{prog.badge}</span>
                      </div>
                      <div style={{ color: '#9999BB', fontSize: 13 }}>{prog.why}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ color: '#666688', fontSize: 11, marginBottom: 2 }}>Commission</div>
                    <div style={{ fontWeight: 800, color: '#4CAF50', fontSize: 16 }}>{prog.commission}</div>
                  </div>
                </div>

                {/* Stats row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.03)', borderBottom: `1px solid ${prog.color}12` }}>
                  {[
                    { label: 'Cookie Duration', value: prog.cookieDuration },
                    { label: 'Min Payout', value: prog.minPayout },
                    { label: 'Best For', value: prog.bestFor },
                  ].map((stat) => (
                    <div key={stat.label} style={{ padding: '12px 16px', background: '#0A0A0F' }}>
                      <div style={{ fontSize: 10, color: '#666688', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 }}>{stat.label}</div>
                      <div style={{ fontWeight: 600, color: '#CCCCDD', fontSize: 13 }}>{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Difficulty bar */}
                <div style={{ padding: '14px 28px', borderBottom: `1px solid rgba(255,255,255,0.04)`, display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ fontSize: 11, color: '#666688', minWidth: 110 }}>Entry difficulty</span>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 4 }}>
                    <div style={{ width: `${prog.difficultyScore}%`, height: '100%', borderRadius: 3, background: prog.difficultyScore <= 25 ? '#4CAF50' : prog.difficultyScore <= 45 ? '#FF9800' : '#FF5252' }} />
                  </div>
                  <span style={{ fontSize: 11, color: prog.difficultyScore <= 25 ? '#4CAF50' : prog.difficultyScore <= 45 ? '#FF9800' : '#FF5252', minWidth: 140, textAlign: 'right', fontWeight: 600 }}>{prog.difficulty}</span>
                </div>

                {/* Content ideas */}
                <div style={{ padding: '14px 28px', borderBottom: `1px solid rgba(255,255,255,0.04)` }}>
                  <div style={{ fontSize: 11, color: '#666688', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>Content ideas that convert</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {prog.contentIdeas.map((idea) => (
                      <span key={idea} style={{ background: `${prog.color}10`, color: prog.color, border: `1px solid ${prog.color}22`, padding: '4px 10px', borderRadius: 8, fontSize: 12 }}>→ {idea}</span>
                    ))}
                  </div>
                </div>

                {/* Pro tip */}
                <div style={{ padding: '14px 28px' }}>
                  <div style={{ background: 'rgba(108,99,255,0.07)', border: '1px solid rgba(108,99,255,0.18)', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
                    <span style={{ color: '#6C63FF', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>PRO TIP</span>
                    <span style={{ color: '#BBBBCC', fontSize: 13, lineHeight: 1.5 }}>{prog.proTip}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Platform strategies */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>Affiliate Marketing Strategy by Platform</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 24 }}>The same affiliate program earns completely different amounts depending on which platform you use to promote it. Here is what works on each platform in India in 2026.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {platformStrategies.map((ps, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '22px 26px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 22 }}>{ps.icon}</span>
                    <div>
                      <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 17 }}>{ps.platform}</div>
                      <div style={{ color: '#666688', fontSize: 12 }}>Conversion rate: {ps.conversionRate}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#666688', fontSize: 11, marginBottom: 2 }}>Monthly potential</div>
                    <div style={{ fontWeight: 700, color: '#4CAF50', fontSize: 15 }}>{ps.income}</div>
                  </div>
                </div>
                <p style={{ color: '#9999BB', fontSize: 14, lineHeight: 1.7, margin: '0 0 14px' }}>{ps.strategy}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div style={{ background: 'rgba(76,175,80,0.07)', border: '1px solid rgba(76,175,80,0.2)', borderRadius: 8, padding: '10px 14px' }}>
                    <div style={{ color: '#4CAF50', fontWeight: 700, fontSize: 11, marginBottom: 6 }}>✓ DO</div>
                    <div style={{ color: '#BBBBCC', fontSize: 13, lineHeight: 1.5 }}>{ps.do}</div>
                  </div>
                  <div style={{ background: 'rgba(255,82,82,0.07)', border: '1px solid rgba(255,82,82,0.18)', borderRadius: 8, padding: '10px 14px' }}>
                    <div style={{ color: '#FF5252', fontWeight: 700, fontSize: 11, marginBottom: 6 }}>✗ DON&apos;T</div>
                    <div style={{ color: '#BBBBCC', fontSize: 13, lineHeight: 1.5 }}>{ps.dont}</div>
                  </div>
                </div>
                <div style={{ marginTop: 14 }}>
                  <div style={{ fontSize: 11, color: '#666688', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>Best affiliate programs for this platform</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {ps.bestPrograms.map((p) => (
                      <span key={p} style={{ background: `${ps.color}12`, color: ps.color, border: `1px solid ${ps.color}25`, padding: '3px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Income projection table */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>Realistic Affiliate Income by Creator Stage</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 20 }}>What Indian creators actually earn from affiliate marketing at different audience sizes — not aspirational maximums, but realistic monthly income with active affiliate strategy.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(108,99,255,0.3)' }}>
                  {['Creator Stage', 'Audience Size', 'Brand Deals/Month', 'Affiliate Income/Month', 'Total Monthly', 'Primary Affiliate'].map((h) => (
                    <th key={h} style={{ padding: '10px 14px', textAlign: 'left', color: '#6C63FF', fontWeight: 700, whiteSpace: 'nowrap', fontSize: 11 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { stage: 'Beginner', audience: '0–5K followers', brandDeals: '₹0–₹5,000', affiliate: '₹2,000–₹8,000', total: '₹2,000–₹13,000', primary: 'EarnKaro deals' },
                  { stage: 'Growing Nano', audience: '5K–15K followers', brandDeals: '₹5,000–₹20,000', affiliate: '₹5,000–₹20,000', total: '₹10,000–₹40,000', primary: 'Amazon + EarnKaro' },
                  { stage: 'Micro', audience: '15K–50K followers', brandDeals: '₹20,000–₹80,000', affiliate: '₹15,000–₹50,000', total: '₹35,000–₹1,30,000', primary: 'Amazon + Demat (if finance)' },
                  { stage: 'Mid-tier', audience: '50K–200K followers', brandDeals: '₹80,000–₹3,00,000', affiliate: '₹30,000–₹1,50,000', total: '₹1,10,000–₹4,50,000', primary: 'All programs + owned products' },
                  { stage: 'Macro', audience: '200K+ followers', brandDeals: '₹3,00,000–₹20,00,000', affiliate: '₹50,000–₹5,00,000', total: '₹3,50,000–₹25,00,000', primary: 'SaaS + Hosting + Finance' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                    <td style={{ padding: '12px 14px', color: '#E8E8F0', fontWeight: 700 }}>{row.stage}</td>
                    <td style={{ padding: '12px 14px', color: '#BBBBCC' }}>{row.audience}</td>
                    <td style={{ padding: '12px 14px', color: '#9999BB' }}>{row.brandDeals}</td>
                    <td style={{ padding: '12px 14px', color: '#4CAF50', fontWeight: 700 }}>{row.affiliate}</td>
                    <td style={{ padding: '12px 14px', color: '#6C63FF', fontWeight: 800 }}>{row.total}</td>
                    <td style={{ padding: '12px 14px', color: '#9999BB', fontSize: 12 }}>{row.primary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6 Steps */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>How to Start Affiliate Marketing as an Indian Creator — 6 Steps</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 24 }}>The exact sequence. Most creators jump to step 2 (joining programs) without doing step 1 (niche-program matching), which is why 80% of affiliate creators in India earn almost nothing.</p>
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

        {/* Identity Kit inline CTA */}
        <div style={{ background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 14, padding: '24px 28px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 16, marginBottom: 6 }}>Show brands your affiliate partnerships + audience stats in one link</div>
            <div style={{ color: '#9999BB', fontSize: 14 }}>Your Identity Kit profile lists your affiliate collaborations, niche, and engagement rate — making you 40x more likely to get a brand deal reply on top of your affiliate income.</div>
          </div>
          <Link href="/auth" style={{ background: 'linear-gradient(135deg, #6C63FF, #8B5CF6)', color: '#fff', padding: '12px 22px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
            Build Your Free Profile →
          </Link>
        </div>

        {/* Mistakes */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 20px', color: '#E8E8F0' }}>5 Affiliate Marketing Mistakes Indian Creators Make</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {commonMistakes.map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.1)', borderRadius: 12, padding: '18px 22px', display: 'flex', gap: 16 }}>
                <div style={{ color: '#FF5252', fontWeight: 700, fontSize: 20, flexShrink: 0 }}>✗</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#FF8080', fontSize: 15, marginBottom: 6 }}>Mistake: {item.m}</div>
                  <div style={{ color: '#9999BB', fontSize: 14, lineHeight: 1.6 }}><span style={{ color: '#4CAF50', fontWeight: 600 }}>Fix: </span>{item.f}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 24px', color: '#E8E8F0' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'How much can I earn from affiliate marketing in India as a creator?', a: 'Indian content creators earn ₹2,000–₹5,00,000 per month from affiliate marketing depending on audience size, niche, and platform. A beginner with 5,000 Instagram followers using EarnKaro can earn ₹2,000–₹8,000/month. A micro creator with 25K finance-focused followers using demat referrals can earn ₹25,000–₹80,000/month. A mid-tier YouTuber with 100K+ subscribers in tech or finance can earn ₹50,000–₹2,00,000/month from affiliate links in video descriptions alone.' },
              { q: 'Which is the best affiliate program for Indian creators?', a: 'It depends on your niche. For beginners and Instagram creators: EarnKaro or Cuelinks — easiest to start, no website needed, 300+ brands in one dashboard. For finance creators: demat account referral programs (Zerodha, Groww, Angel One) — highest per-action payout at ₹500–₹2,000 per verified signup. For tech and general creators: Amazon Associates India — widest product range, 1–10% commissions. For tech/business creators: hosting affiliates (Hostinger) — highest flat-fee commissions at ₹3,000–₹8,000 per sale.' },
              { q: 'Do I need a website to do affiliate marketing in India?', a: 'No. EarnKaro, Cuelinks, and HaulPack all work directly from Instagram, YouTube descriptions, Telegram channels, and WhatsApp groups without requiring a website. However, a website or blog significantly increases your affiliate income ceiling — SEO-ranked blog posts earn passive affiliate commissions for years, while social media posts typically get 24–72 hours of reach. For maximum income, combine social media affiliate content with even a basic blog.' },
              { q: 'Is affiliate marketing income taxable in India?', a: 'Yes. Affiliate commission income is taxable in India as "income from other sources" or "business income" depending on scale. Platforms like Amazon Associates and EarnKaro deduct TDS at 2–5% under Section 194H on commissions above the threshold. Add affiliate income to your annual income tax return. Creators earning above ₹20 lakh/year from affiliate + brand deal income combined should register for GST. Maintain clear records of all affiliate payouts — screenshot your dashboards monthly.' },
              { q: 'How long does it take to earn from affiliate marketing in India?', a: 'First affiliate commissions typically arrive within 30–60 days of actively promoting affiliate links — as soon as someone buys through your link. Reaching ₹10,000–₹25,000/month consistently takes 3–6 months for creators who post affiliate content 3–5x per week and choose niche-aligned programs. Reaching ₹1 lakh/month takes 9–18 months for most creators starting from zero. The income compounds — every piece of content you create continues earning from affiliate links indefinitely, unlike brand deals which pay once.' },
              { q: 'What is EarnKaro and how does it work for Indian creators?', a: 'EarnKaro is an affiliate aggregator platform that gives Indian creators access to affiliate links from 300+ brands — including Amazon, Flipkart, Myntra, Meesho, and Nykaa — through a single dashboard app. You generate affiliate links from EarnKaro, share them on your social media or messaging platforms, and earn commission on every purchase made through your links. No website or PAN card required to start. Minimum payout is ₹10. It is the best starting affiliate program for Instagram creators and Telegram deal channel operators in India.' },
              { q: 'Can I do affiliate marketing on Instagram in India?', a: 'Yes. Instagram affiliate marketing works through bio link (your Identity Kit or Linktree with affiliate links), Stories swipe-ups (available to all creators in 2026 regardless of follower count), Reels product tags (through Instagram\'s native shopping integration), and caption links that viewers copy-paste. Instagram conversion rates for affiliate marketing in India are 0.5–2% — lower than YouTube or blogs, but the reach and speed of growth make it valuable for building an initial affiliate income base.' },
              { q: 'How do demat account referral programs work for Indian creators?', a: 'Broking platforms like Zerodha, Groww, Angel One, and Upstox pay a flat referral fee — typically ₹500–₹2,000 — for every new user who opens and activates a demat account through your unique referral link. The commission is paid after the referred user completes a verified trade or account activation. Finance creators who create tutorials on "how to open a demat account" or "how to start investing in India" and include their referral link convert at 2–5% — making this the highest earning-per-view affiliate strategy available to Indian creators.' },
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
              { href: '/blog/ugc-creator-salary-india-2026', title: 'How Much Do UGC Creators Earn in India in 2026?', tag: 'UGC Income' },
              { href: '/blog/how-to-make-money-on-instagram-india-2026', title: 'How to Make Money on Instagram in India 2026', tag: 'Instagram Income' },
              { href: '/blog/side-hustles-for-students-india-2026', title: '12 Best Side Hustles for Students in India 2026', tag: 'Side Income' },
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
          <div style={{ fontSize: 36, marginBottom: 16 }}>💸</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 12px', color: '#E8E8F0' }}>
            Build the Profile That Unlocks Brand Deals — On Top of Your Affiliate Income
          </h2>
          <p style={{ color: '#9999BB', lineHeight: 1.7, marginBottom: 28, maxWidth: 500, margin: '0 auto 28px', fontSize: 15 }}>
            Affiliate marketing is passive. Brand deals are active — and they pay more per hour. Identity Kit gives you the media kit, rate card, and creator CV that make brands reply to your pitch. Free to build. 10 minutes.
          </p>
          <Link href="/auth" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #6C63FF, #8B5CF6)', color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 16 }}>
            Create Your Free Identity Kit →
          </Link>
          <div style={{ color: '#666688', fontSize: 13, marginTop: 14 }}>
            identitykit.in · Free · Media kit + Rate card + Creator CV
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
