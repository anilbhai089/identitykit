import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'YouTube Shorts Monetization India 2026: Complete Guide to Earning from Shorts',
  description: 'How to monetize YouTube Shorts in India in 2026. YPP requirements (1K subs + 10M Shorts views), real RPM data (₹5–₹30 per 1K views), how Shorts ad revenue pool works, 7 income streams beyond ads, Shorts vs long-form earnings comparison, and step-by-step monetization setup.',
  keywords: 'youtube shorts monetization india 2026, youtube shorts earnings india, how to earn from youtube shorts in india, youtube shorts rpm india, youtube shorts income india, youtube shorts monetization rules india, youtube partner program india shorts, youtube shorts money per 1000 views india',
  openGraph: {
    title: 'YouTube Shorts Monetization India 2026: Complete Guide to Earning from Shorts',
    description: 'Indian creators earn ₹5–₹30 per 1,000 Shorts views (finance earns ₹20–₹60). Full breakdown: YPP requirements, how the revenue pool works, Shorts vs long-form earnings, and 7 income streams to stack on top of ad revenue.',
    url: 'https://identitykit.in/blog/youtube-shorts-monetization-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/youtube-shorts-monetization-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/youtube-shorts-monetization-india-2026',
  },
}

const yppTiers = [
  {
    tier: 'Tier 1 — Fan Funding',
    badge: '500 Subscribers',
    badgeColor: '#FF9800',
    badgeBg: 'rgba(255,152,0,0.1)',
    color: '#FF9800',
    icon: '🌱',
    requirements: [
      '500+ subscribers',
      '3 million valid public Shorts views in last 90 days — OR — 3,000 valid public watch hours in last 12 months',
      'Channel in good standing with no active Community Guidelines strikes',
      'AdSense account linked',
      'Two-step verification enabled',
    ],
    unlocks: ['Super Thanks (viewers tip you on Shorts)', 'Super Chat on livestreams', 'Channel Memberships', 'YouTube Shopping (link products)'],
    doesNotUnlock: 'Ad revenue sharing — you do NOT earn from ads at this tier',
    income: '₹500–₹10,000/month',
    incomeDesc: 'Depends entirely on how many viewers tip you via Super Thanks. Channels with highly engaged communities earn more here than from ads.',
  },
  {
    tier: 'Tier 2 — Full Monetisation',
    badge: '1,000 Subscribers',
    badgeColor: '#6C63FF',
    badgeBg: 'rgba(108,99,255,0.1)',
    color: '#6C63FF',
    icon: '⭐',
    requirements: [
      '1,000+ subscribers',
      '10 million valid public Shorts views in last 90 days — OR — 4,000 valid public watch hours on long-form in last 12 months',
      'Channel in good standing with no active Community Guidelines strikes',
      'AdSense account linked',
      'Must accept the Shorts Monetisation Module after YPP approval',
      'Live in a country where YPP is available (India ✓)',
    ],
    unlocks: ['Shorts ad revenue sharing (45% of creator pool)', 'Long-form video ad revenue (55% of ads on your videos)', 'All Tier 1 features', 'YouTube Premium revenue'],
    doesNotUnlock: null,
    income: '₹2,000–₹50,000/month from ads alone',
    incomeDesc: 'At 10M Shorts views/month, Indian creators earn ₹5,000–₹30,000 from Shorts ads. Long-form ad revenue is significantly higher per view.',
  },
]

const rpmData = [
  { niche: 'Finance & Stock Market', rpm: '₹20–₹60', color: '#4CAF50', score: 92, views1L: '₹2,000–₹6,000', views10L: '₹20,000–₹60,000', why: 'Fintech brands pay the highest CPMs in India — demat accounts, mutual fund apps, credit cards. Finance Shorts earn 4–6x more than entertainment.' },
  { niche: 'Tech & Gadgets', rpm: '₹15–₹40', color: '#6C63FF', score: 75, views1L: '₹1,500–₹4,000', views10L: '₹15,000–₹40,000', why: 'Consumer electronics brands pay well for tech content. Unboxing-style Shorts and gadget comparison Shorts perform strongly in both views and RPM.' },
  { niche: 'Education & Exam Prep', rpm: '₹12–₹30', color: '#FF9800', score: 62, views1L: '₹1,200–₹3,000', views10L: '₹12,000–₹30,000', why: 'EdTech advertiser demand is high in India. UPSC, CAT, JEE, NEET content gets strong advertiser competition, boosting CPM above average.' },
  { niche: 'Health & Fitness', rpm: '₹8–₹25', color: '#00BCD4', score: 52, views1L: '₹800–₹2,500', views10L: '₹8,000–₹25,000', why: 'Supplement and wellness brands advertise heavily. Yoga, home workout, and mental health Shorts see strong CPMs driven by supplement and health app advertisers.' },
  { niche: 'Food & Cooking', rpm: '₹5–₹18', color: '#FF6B6B', score: 40, views1L: '₹500–₹1,800', views10L: '₹5,000–₹18,000', why: 'High view volumes but lower CPM. Food delivery apps and packaged food brands advertise, but at lower rates than finance or tech. Volume is the play here.' },
  { niche: 'Entertainment & Vlogs', rpm: '₹5–₹15', color: '#9C27B0', score: 30, views1L: '₹500–₹1,500', views10L: '₹5,000–₹15,000', why: 'Lowest RPM category but highest organic Shorts viewership. Entertainment Shorts go viral fastest but earn least per view. Use as a growth funnel to long-form.' },
]

const incomeStreams = [
  {
    rank: 1,
    method: 'Brand Deals & Sponsorships',
    icon: '🤝',
    color: '#FF6B2B',
    income: '₹5,000–₹2,00,000 per Short',
    when: 'From 10K subscribers',
    desc: 'The highest-income Shorts monetisation strategy. Brands pay Indian Shorts creators to feature their product in a 30–60 second Short. At 50K subscribers you earn ₹10,000–₹50,000 per sponsored Short — 10–50x more than ad revenue from the same video. Finance, tech, beauty, and EdTech brands are most active on YouTube Shorts in India in 2026.',
    tip: 'Before pitching brands, build your creator profile at identitykit.in with your YouTube stats, subscriber count, average Shorts views, and starting rates. Brands check your media kit before replying.',
  },
  {
    rank: 2,
    method: 'Shorts as a Funnel to Long-Form Ad Revenue',
    icon: '▶️',
    color: '#FF0000',
    income: '₹50–₹200 RPM (long-form)',
    when: 'Once you have 10K+ subscribers from Shorts',
    desc: 'This is the smartest Shorts monetisation strategy in India. Shorts earn ₹5–₹30 per 1,000 views. Long-form videos earn ₹50–₹200 per 1,000 views — 6–10x more. Use Shorts to grow your subscriber base fast, then convert those subscribers into long-form viewers where the real ad money is. The top Indian Shorts channels all use this strategy.',
    tip: 'Every Short should end with "Full video on my channel" or "Part 2 is a long video — link in bio". Even a 5% conversion from Shorts viewers to long-form viewers compounds dramatically over time.',
  },
  {
    rank: 3,
    method: 'Affiliate Marketing via Shorts',
    icon: '🔗',
    color: '#4CAF50',
    income: '₹2,000–₹80,000/month',
    when: 'From day 1 — no monetisation required',
    desc: 'Affiliate links work in your YouTube Shorts bio link and channel description before you qualify for YPP. A finance Short about "Best demat account in India" with a Zerodha referral link earns ₹500–₹2,000 per account opened — far more than the same Short earns from ads. Amazon Associates links in descriptions earn 1–10% commissions from any product purchase within 24 hours.',
    tip: 'Mention the link verbally in the Short: "Link to sign up in my channel description below." YouTube Shorts viewers don\'t swipe up like Instagram Stories — you must verbally direct them.',
  },
  {
    rank: 4,
    method: 'Super Thanks on Shorts',
    icon: '💙',
    color: '#6C63FF',
    income: '₹500–₹20,000/month',
    when: 'From 500 subscribers (Tier 1)',
    desc: 'Super Thanks lets viewers tip you directly on individual Shorts videos. Available from 500 subscribers. Indian viewers tip between ₹50–₹500 per Super Thanks. Channels with strong community engagement — where viewers feel a personal connection — earn significantly from Super Thanks. Educational, motivational, and personal finance Shorts see the highest Super Thanks rates.',
    tip: 'Mention Super Thanks once per Short: "If this helped you, the Super Thanks button supports my channel." Don\'t overdo it — one mention per video is enough.',
  },
  {
    rank: 5,
    method: 'Channel Memberships',
    icon: '👥',
    color: '#FF9800',
    income: '₹5,000–₹1,00,000/month',
    when: 'From 500 subscribers (Tier 1)',
    desc: 'Channel Memberships let viewers pay ₹49–₹999/month for exclusive perks: members-only Shorts, early access, custom badges, community posts. Indian channels that convert even 0.5–1% of subscribers to members earn substantial recurring income. A 100K subscriber channel converting 0.7% at ₹99/month earns ₹69,300/month in recurring memberships.',
    tip: 'Tease membership perks in your Shorts: "Members get the full breakdown — link to join in my bio." Finance, career, and study content audiences are the most likely to pay for membership access.',
  },
  {
    rank: 6,
    method: 'Digital Products Promoted via Shorts',
    icon: '📦',
    color: '#00BCD4',
    income: '₹10,000–₹5,00,000/launch',
    when: 'From 5,000 subscribers',
    desc: 'Shorts are the fastest way to drive traffic to a digital product launch in India. A Short teasing your ₹999 course, ₹299 ebook, or ₹499 template pack — with a bio link — can convert 0.5–2% of viewers. At 100,000 views on a product-teaser Short, that\'s 500–2,000 purchases × ₹499 = ₹2,50,000–₹10,00,000 from one Short. YouTube\'s audience has higher buying power than most Indian social platforms.',
    tip: 'Use Shorts to preview the most valuable insight from your product. "I explain the full 5-step framework in my ₹499 guide — link in bio." The teaser must be genuinely valuable, not just a promotional hook.',
  },
  {
    rank: 7,
    method: 'YouTube Shopping (Product Tags)',
    icon: '🛒',
    color: '#4CAF50',
    income: 'Variable — commission per sale',
    when: 'From 500 subscribers (Tier 1)',
    desc: 'YouTube Shopping lets creators tag products directly in Shorts. Viewers can tap the product tag and buy without leaving YouTube. Available from 500 subscribers with a connected store. Indian creators can connect Shopify, WooCommerce, or a Gumroad store. Best for merchandise, physical products, and digital downloads.',
    tip: 'Tag products naturally — only products genuinely featured in your Short. Artificially tagging unrelated products gets your channel flagged for misleading content.',
  },
]

const mistakes = [
  { m: 'Treating Shorts ad revenue as the primary income goal', f: 'Indian Shorts creators earn ₹5–₹30 per 1,000 views from ads. At 10 million Shorts views/month — a genuinely viral pace — you earn ₹50,000–₹3,00,000 from ads. That sounds good until you realise a single brand deal from a 50K-subscriber channel earns the same amount. Treat ad revenue as a baseline bonus, not the goal. Stack brand deals, affiliate, and memberships on top.' },
  { m: 'Not accepting the Shorts Monetisation Module after YPP approval', f: 'After joining YPP, you must explicitly accept the Shorts Monetisation Module in YouTube Studio to earn from Shorts ad revenue. Many Indian creators miss this step and wonder why their Shorts aren\'t earning despite being in YPP. Check YouTube Studio → Earn → Shorts Monetisation Module and accept it.' },
  { m: 'Using copyrighted music in Shorts expecting full revenue', f: 'When you use a licensed music track in a Short, YouTube splits the revenue between you and the music publisher before calculating your 45% share. A Short using 2 music tracks may earn only 33% of what a music-free Short earns. Use YouTube\'s free "Creator Music" library or original audio for maximum Shorts ad revenue.' },
  { m: 'Posting only Shorts and no long-form content', f: 'Shorts grow subscribers fast but earn little per view. Long-form earns ₹50–₹200 RPM vs ₹5–₹30 RPM for Shorts. The optimal strategy for Indian YouTube creators in 2026: post 3–5 Shorts per week to grow, post 1–2 long-form videos per week to earn. Channels doing both earn 5–10x more than Shorts-only channels.' },
  { m: 'Private Shorts, deleted Shorts, or artificial views counting toward YPP', f: '"Valid public Shorts views" for YPP eligibility exclude private videos, deleted content, and any artificially inflated views. Buying views or using view bots not only doesn\'t count toward YPP — it gets your channel banned. Only genuine, organic public Shorts views count toward the 10 million threshold.' },
]

export default function YoutubeShortsMonetizationIndiaPage() {
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
          .three-col { grid-template-columns: 1fr !important; }
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
            {['YouTube Shorts', 'Monetisation', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            YouTube Shorts Monetisation India 2026:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Complete Earning Guide</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Indian creators earn ₹5–₹30 per 1,000 Shorts views from ads — far less than long-form. But the creators who build serious income from Shorts use it as a growth engine, not an ad revenue machine. Here is the full monetisation playbook.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — YouTube Shorts Monetisation India 2026</div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6, marginBottom: 16 }}>To monetise YouTube Shorts in India in 2026:</p>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Hit 500 subscribers + 3M Shorts views in 90 days for Tier 1 (Super Thanks, memberships, Shopping)',
                'Hit 1,000 subscribers + 10M Shorts views in 90 days for Tier 2 (full ad revenue sharing)',
                'Apply to YPP in YouTube Studio → Earn tab and accept the Shorts Monetisation Module separately',
                'Expect ₹5–₹30 per 1,000 Shorts views in India depending on niche (finance earns ₹20–₹60)',
                'Use Shorts to grow subscribers fast, then convert them to long-form viewers where RPM is ₹50–₹200',
                'Stack 7 income streams: ads + brand deals + affiliate + Super Thanks + memberships + digital products + Shopping',
                'Avoid copyrighted music to keep full creator pool allocation — use YouTube Creator Music library instead',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — YouTube Shorts Monetisation India 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Indian creators earn ₹5–₹30 per 1,000 YouTube Shorts views from ad revenue, compared to ₹50–₹200 per 1,000 views for long-form videos in the same niche.',
                'YouTube Shorts monetisation requires 1,000 subscribers and 10 million valid Shorts views in 90 days (or 4,000 long-form watch hours) to qualify for ad revenue sharing.',
                'India is a YPP-eligible country — creators in India can apply for the YouTube Partner Program and earn from both Shorts and long-form video ads.',
                'Finance and stock market Shorts channels in India earn ₹20–₹60 per 1,000 views — the highest RPM category — compared to ₹5–₹15 for entertainment content.',
                'Creators keep 45% of Shorts ad revenue after YouTube takes its cut; for long-form videos, creators keep 55%.',
                'YouTube Shorts generates over 70 billion daily views globally in 2026, making it one of the largest short-form video platforms in the world.',
                'Using licensed music in a Short splits the creator pool revenue between the creator and music publishers before the 45% creator share is calculated, reducing earnings per view.',
                'The minimum AdSense payment threshold is USD 100 (approximately ₹8,500); Indian creators must link their PAN card to their AdSense account for tax compliance.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* YPP Tiers */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>YouTube Partner Program Tiers for Indian Shorts Creators</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>YPP has two tiers in 2026. Most guides only explain Tier 2 (ad revenue). Tier 1 is often overlooked — but it unlocks fan funding at just 500 subscribers, which can earn more than ads for engaged channels.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {yppTiers.map((tier) => (
                <div key={tier.tier} className="card">
                  <div style={{ background: `linear-gradient(135deg, ${tier.color}15, ${tier.color}05)`, borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{ fontSize: 28 }}>{tier.icon}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                          <span style={{ fontWeight: 800, fontSize: 17 }}>{tier.tier}</span>
                          <span style={{ background: tier.badgeBg, color: tier.badgeColor, border: `1px solid ${tier.badgeColor}40`, padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700 }}>{tier.badge}</span>
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>{tier.incomeDesc}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, marginBottom: 2 }}>Monthly income potential</div>
                      <div style={{ fontWeight: 800, color: '#4CAF50', fontSize: 16 }}>{tier.income}</div>
                    </div>
                  </div>

                  <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ padding: '16px 20px', background: '#07070D' }}>
                      <div style={{ fontSize: 11, color: '#4CAF50', textTransform: 'uppercase', letterSpacing: 0.8, fontWeight: 700, marginBottom: 10 }}>Requirements</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {tier.requirements.map((req, i) => (
                          <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                            <span style={{ color: '#4CAF50', flexShrink: 0, fontSize: 12 }}>✓</span>
                            <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ padding: '16px 20px', background: '#07070D' }}>
                      <div style={{ fontSize: 11, color: '#6C63FF', textTransform: 'uppercase', letterSpacing: 0.8, fontWeight: 700, marginBottom: 10 }}>Unlocks</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {tier.unlocks.map((u, i) => (
                          <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                            <span style={{ color: '#6C63FF', flexShrink: 0, fontSize: 12 }}>→</span>
                            <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{u}</span>
                          </div>
                        ))}
                        {tier.doesNotUnlock && (
                          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginTop: 4 }}>
                            <span style={{ color: '#FF5252', flexShrink: 0, fontSize: 12 }}>✗</span>
                            <span style={{ color: 'rgba(255,82,82,0.7)', fontSize: 13, lineHeight: 1.5 }}>{tier.doesNotUnlock}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* RPM by niche */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>YouTube Shorts RPM in India by Niche — 2026 Data</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Your niche determines your Shorts RPM more than any other factor. Here is exactly what Indian creators earn per 1,000 Shorts views in 2026 — and what that means at real-world view volumes.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {rpmData.map((row, i) => (
                <div key={i} className="card" style={{ padding: '20px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                    <div style={{ fontWeight: 800, fontSize: 16 }}>{row.niche}</div>
                    <div style={{ background: `${row.color}15`, color: row.color, border: `1px solid ${row.color}30`, padding: '4px 14px', borderRadius: 100, fontWeight: 800, fontSize: 15 }}>{row.rpm} / 1K views</div>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>{row.why}</div>

                  {/* RPM bar */}
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', minWidth: 60 }}>RPM score</span>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 5 }}>
                      <div style={{ width: `${row.score}%`, height: '100%', borderRadius: 3, background: `linear-gradient(90deg, ${row.color}, ${row.color}88)` }} />
                    </div>
                    <span style={{ fontSize: 11, color: row.color, fontWeight: 700, minWidth: 24 }}>{row.score}</span>
                  </div>

                  {/* Earnings grid */}
                  <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '12px 16px' }}>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 }}>At 1 lakh views</div>
                      <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 15 }}>{row.views1L}</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '12px 16px' }}>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 }}>At 10 lakh views</div>
                      <div style={{ fontWeight: 700, color: '#4CAF50', fontSize: 15 }}>{row.views10L}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Shorts vs Long-form comparison */}
            <div style={{ marginTop: 24, background: 'rgba(255,107,43,0.05)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 14, padding: '20px 24px' }}>
              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 14 }}>⚡ Shorts vs Long-Form: Real Earnings Comparison for Indian Creators</div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,107,43,0.2)' }}>
                      {['', 'YouTube Shorts', 'Long-Form Video'].map((h, i) => (
                        <th key={i} style={{ padding: '8px 12px', textAlign: i === 0 ? 'left' : 'center', color: i === 0 ? 'rgba(255,255,255,0.4)' : '#FF6B2B', fontWeight: 700, fontSize: 12 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Creator Revenue Share', '45%', '55%'],
                      ['India RPM (General)', '₹5–₹30', '₹50–₹200'],
                      ['India RPM (Finance)', '₹20–₹60', '₹80–₹250'],
                      ['Earnings at 1L views', '₹500–₹3,000', '₹5,000–₹20,000'],
                      ['Earnings at 10L views', '₹5,000–₹30,000', '₹50,000–₹2,00,000'],
                      ['YPP Threshold', '10M views in 90 days', '4,000 watch hours'],
                      ['Growth speed', '🚀 Very Fast', '🐢 Slower'],
                      ['Ad revenue per view', '❌ Much lower', '✅ Much higher'],
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                        <td style={{ padding: '10px 12px', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{row[0]}</td>
                        <td style={{ padding: '10px 12px', color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>{row[1]}</td>
                        <td style={{ padding: '10px 12px', color: '#4CAF50', textAlign: 'center', fontWeight: 600 }}>{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop: 14, display: 'flex', gap: 8, background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.18)', borderRadius: 8, padding: '10px 14px' }}>
                <span style={{ color: '#6C63FF', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>VERDICT</span>
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>Use Shorts to grow your subscriber base 5–10x faster than long-form. Convert those subscribers to long-form viewers. This hybrid strategy earns 3–5x more total income than either format alone.</span>
              </div>
            </div>
          </section>

          {/* 7 Income Streams */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>7 Ways to Make Money from YouTube Shorts in India</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Ad revenue is the worst-paying of the 7 income streams available to Indian Shorts creators. Stack all 7 for maximum total income.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {incomeStreams.map((stream) => (
                <div key={stream.rank} className="card" style={{ padding: '22px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ background: `${stream.color}18`, border: `1px solid ${stream.color}30`, borderRadius: 10, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{stream.icon}</div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 2 }}>#{stream.rank} — {stream.method}</div>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>Available from: {stream.when}</div>
                      </div>
                    </div>
                    <div style={{ background: `${stream.color}15`, color: stream.color, border: `1px solid ${stream.color}28`, padding: '4px 12px', borderRadius: 100, fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{stream.income}</div>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>{stream.desc}</p>
                  <div style={{ background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.18)', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
                    <span style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>PRO TIP</span>
                    <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{stream.tip}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA inline */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.18)', borderRadius: 14, padding: '24px 28px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>Getting brand deals is worth 10x Shorts ad revenue — but you need a media kit</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>Identity Kit gives you a professional media kit with your YouTube stats, subscriber count, average views, and rate card — in one shareable link. Free to build.</div>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '12px 22px', borderRadius: 10, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build Your Media Kit Free →
            </Link>
          </div>

          {/* How Shorts revenue pool works */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>How the YouTube Shorts Revenue Pool Actually Works</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Shorts ad revenue does not work the same way as long-form video ads. Most Indian creators misunderstand the pool model — and lose money because of it.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { step: '1', title: 'YouTube pools all Shorts ad revenue monthly', body: 'Every month, YouTube adds together all revenue from ads that play between Shorts in the feed globally. This is the "Shorts Creator Pool." It is not per-video or per-channel — it is one shared pool.' },
                { step: '2', title: 'Music usage splits are deducted first', body: 'If you use licensed music in your Short, YouTube splits a portion of that Short\'s revenue share between you and the music publisher before it enters the creator pool. Use 0 music tracks: 100% of associated revenue goes to creator pool. Use 1 track: ~50% goes to creators. Use 2 tracks: ~33% goes to creators. This is why original audio or Creator Music library tracks earn more.' },
                { step: '3', title: 'Your share = your % of total monetised Shorts views', body: 'Your creator pool allocation = (your monetised Shorts views) ÷ (total monetised Shorts views in your country). If you generate 1% of all monetised Indian Shorts views in a month, you get 1% of the Indian Shorts creator pool for that month.' },
                { step: '4', title: 'You keep 45% of your allocated share', body: 'YouTube pays creators 45% of their creator pool allocation. For long-form videos, creators keep 55%. This is why Shorts ad revenue is structurally lower than long-form — not just because CPMs are lower, but because the revenue share is also lower.' },
              ].map((item) => (
                <div key={item.step} className="card" style={{ padding: '18px 24px', display: 'flex', gap: 16 }}>
                  <div style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 10, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#FF6B2B', fontSize: 15, flexShrink: 0 }}>{item.step}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{item.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>5 YouTube Shorts Monetisation Mistakes Indian Creators Make</h2>
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

          {/* YouTube money calculator CTA */}
          <div style={{ background: 'rgba(255,107,43,0.05)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 14, padding: '22px 26px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>Want to calculate your YouTube earnings instantly?</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>Use our free YouTube Money Calculator — enter your niche and monthly views, get your exact earnings estimate for both Shorts and long-form.</div>
            </div>
            <Link href="/tools/youtube-money-calculator" style={{ background: 'rgba(255,107,43,0.15)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.3)', padding: '10px 20px', borderRadius: 10, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Calculate YouTube Earnings →
            </Link>
          </div>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'How much does YouTube pay for 1,000 Shorts views in India?', a: 'Indian creators earn approximately ₹5–₹30 per 1,000 YouTube Shorts views after YouTube takes its cut, depending on niche. Finance and stock market Shorts earn the highest at ₹20–₹60 per 1,000 views. Entertainment and vlog Shorts earn the lowest at ₹5–₹15 per 1,000 views. For comparison, long-form videos in the same niches earn ₹50–₹200 per 1,000 views — 3–10x more per view.' },
                { q: 'Is YPP available in India for YouTube Shorts?', a: 'Yes, India is a YouTube Partner Program eligible country. Indian creators can monetise both Shorts and long-form videos through YPP. To qualify for Shorts ad revenue, you need 1,000 subscribers and 10 million valid Shorts views in the last 90 days (or 4,000 long-form watch hours). After approval, you must separately accept the Shorts Monetisation Module in YouTube Studio to start earning from Shorts.' },
                { q: 'How much money do Indian creators earn from 1 million YouTube Shorts views?', a: 'Indian creators earn approximately ₹5,000–₹30,000 from 1 million YouTube Shorts views in ad revenue, depending on niche. Finance content earns ₹20,000–₹60,000 from 1 million views. Entertainment earns ₹5,000–₹15,000. These are ad revenue figures only — a single brand deal Short from a 50K-subscriber channel earns ₹15,000–₹50,000 from one video, regardless of view count.' },
                { q: 'Can I monetise YouTube Shorts without 1,000 subscribers?', a: 'Yes — partially. At 500 subscribers with 3 million Shorts views in 90 days, you qualify for Tier 1 YPP which unlocks Super Thanks (viewer tips on individual Shorts), Channel Memberships, and YouTube Shopping product tagging. Ad revenue sharing only starts at Tier 2: 1,000 subscribers plus 10 million Shorts views in 90 days (or 4,000 long-form watch hours).' },
                { q: 'Does using music in YouTube Shorts reduce earnings in India?', a: 'Yes. When you use licensed music in a Short, YouTube splits a portion of that Short\'s creator pool revenue between you and the music publisher before calculating your 45% share. Using 1 music track reduces your share of associated revenue by approximately 50%; using 2 tracks reduces it to approximately 33%. For maximum Shorts ad revenue, use original audio or tracks from YouTube\'s free Creator Music library.' },
                { q: 'What is the minimum payment threshold for YouTube earnings in India?', a: 'YouTube pays Indian creators through Google AdSense. The minimum payment threshold is USD 100, approximately ₹8,500. Once your AdSense balance crosses this threshold, YouTube pays you in the following month. Indian creators must link their PAN card to their AdSense account for tax compliance. YouTube may deduct US withholding tax on earnings from US viewers if tax documentation is incomplete — submit your W-8BEN tax form in AdSense to avoid unnecessary deductions.' },
                { q: 'How long does it take to reach 10 million Shorts views in India?', a: 'Indian Shorts creators who post 3–5 Shorts per week typically reach 10 million views in 90 days within 3–9 months of consistent posting. Creators in high-demand niches (finance, tech, education) reach this milestone faster because their content surfaces in recommendation feeds more aggressively. Using trending topics, strong hooks in the first 3 seconds, and posting during peak Indian viewing hours (7–10 PM IST) significantly speeds up view accumulation.' },
                { q: 'Is it better to do YouTube Shorts or long-form videos in India?', a: 'Both — in a specific combination. Shorts grow subscribers 5–10x faster than long-form but earn 6–10x less per view. Long-form earns ₹50–₹200 RPM vs ₹5–₹30 for Shorts. The optimal strategy: post 3–5 Shorts per week to grow subscribers, post 1–2 long-form videos per week to earn from ads. Each Short should funnel viewers to your long-form content where the real ad revenue is. Indian channels running this hybrid approach consistently earn 3–5x more total income than Shorts-only or long-form-only channels.' },
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
                { href: '/blog/youtube-rpm-india-niche-2026', title: 'YouTube RPM in India 2026: Real Rates by Niche', tag: 'YouTube' },
                { href: '/blog/youtube-money-calculator-india', title: 'YouTube Money Calculator India 2026', tag: 'YouTube' },
                { href: '/blog/affiliate-marketing-india-creators-2026', title: 'Affiliate Marketing for Creators in India 2026', tag: 'Passive Income' },
                { href: '/blog/how-to-get-brand-deals-india', title: 'How to Get Brand Deals in India — Complete 2026 Guide', tag: 'Brand Deals' },
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
              Turn your Shorts audience into brand deals
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Shorts ad revenue is just the start. The creators who earn ₹1L+ per month combine ads with brand deals. Identity Kit gives you the professional media kit brands look for — free, built for Indian creators.
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
          <Link href="/tools/youtube-money-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>YouTube Calculator</Link>
          <Link href="/about" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>About</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
