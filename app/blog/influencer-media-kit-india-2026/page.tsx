import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Influencer Media Kit India 2026: What to Include, Free Template & How to Get Brand Deals',
  description: 'How to create a professional influencer media kit in India in 2026. What sections to include, what brands actually look for, common mistakes, rate card tips, and how to build your free media kit link at identitykit.in in 10 minutes.',
  keywords: 'influencer media kit india, how to make media kit india, creator media kit india 2026, media kit for brand deals india, influencer media kit template india free, what to include in media kit india, how to get brand deals india media kit, free media kit creator india',
  openGraph: {
    title: 'Influencer Media Kit India 2026: What to Include, Free Template & How to Get Brand Deals',
    description: '78% of Indian brands expect a media kit before discussing partnerships. Here is exactly what to include, what brands skip in 30 seconds, and how to build yours free in 10 minutes.',
    url: 'https://identitykit.in/blog/influencer-media-kit-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/influencer-media-kit-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/influencer-media-kit-india-2026',
  },
}

const sections = [
  {
    rank: '01',
    title: 'Your Creator Identity — Niche, Platform, and Positioning',
    icon: '👤',
    color: '#FF6B2B',
    mustHave: true,
    whyItMatters: 'This is what a brand manager reads in the first 10 seconds. If they can\'t immediately understand who you are, who your audience is, and what you create — they close the kit. Your identity section is not your life story. It is a 3-sentence positioning statement: what you create, who you create it for, and what makes your audience different.',
    whatToInclude: [
      'Your name and creator handle (consistent across platforms)',
      'Your niche in one tight phrase: "Personal finance for Indian millennials", not "Lifestyle & more"',
      'Platforms and total reach (Instagram: 28K | YouTube: 12K subscribers)',
      'One-line audience description: "My audience is 22–30 year old Indian professionals saving their first ₹1 lakh"',
      'Professional photo — use the same one across all your social profiles for brand recognition',
    ],
    indianSpecific: 'Indian brand managers scan 30–50 creator pitches per day. Your niche must be immediately legible — not "content creator" but "skincare creator for Indian skin types" or "Hindi personal finance creator for Tier-2 cities".',
    mistake: 'Writing 3 paragraphs about your journey and passion. Brands do not care about your journey on page 1. They care about whether your audience will buy their product.',
  },
  {
    rank: '02',
    title: 'Audience Demographics — The Numbers Brands Actually Check',
    icon: '📊',
    color: '#6C63FF',
    mustHave: true,
    whyItMatters: 'In 2026, Indian brands check engagement rate before follower count. A creator with 8,000 followers at 7% engagement is worth more to a D2C brand than 80,000 followers at 0.5%. Your demographics section must show brands that your audience is real, engaged, and matches their target customer — not just that you have a large number.',
    whatToInclude: [
      'Total followers/subscribers per platform (be honest — brands audit with HypeAuditor)',
      'Average engagement rate per post (likes + comments + saves ÷ followers × 100)',
      'Audience age range: e.g. "65% of audience is 22–32 years old"',
      'Audience gender split: e.g. "58% female, 42% male"',
      'Top cities: e.g. "Bengaluru (18%), Mumbai (14%), Delhi NCR (12%), Pune (9%)"',
      'Average views per Reel / video (not just your best-performing outlier)',
    ],
    indianSpecific: 'Indian brands increasingly ask for Tier-2/3 city audience data. D2C brands expanding beyond metros specifically seek creators whose followers are in Jaipur, Lucknow, Indore, Chandigarh, and Coimbatore. If you have strong Tier-2 reach, highlight it — it commands a premium from brands targeting non-metro India.',
    mistake: 'Showing only your top-performing post\'s stats. Brands want averages. One viral post that inflates your average is immediately spotted and destroys your credibility.',
  },
  {
    rank: '03',
    title: 'Content Samples — Your 3 Best Pieces in the Right Niche',
    icon: '🎬',
    color: '#4CAF50',
    mustHave: true,
    whyItMatters: 'Brands need to see that you can create content their audience will engage with before they commit a budget. Your content samples section is the make-or-break section for brands who are already interested. Lead with your best 3 pieces of content that are most relevant to the brand you\'re pitching — not your most viral piece if it\'s off-niche.',
    whatToInclude: [
      '3 content thumbnails or screenshots with view/engagement counts visible',
      'Caption or brief description of what each piece achieved ("This Reel got 2.1L views and 4,200 saves")',
      'Content format variety: show a Reel, a carousel, and a Story set if possible',
      'Links to live content — brands want to click through and see the actual comments and engagement',
      'If you have a collaboration portfolio: one past brand collaboration result, even if it was gifted',
    ],
    indianSpecific: 'If you have zero brand collaborations: use your best organic content as samples. A finance creator who made a Reel about "how I started my SIP at 22" with 50,000 views is more compelling than claiming you can make sponsored content. Organic content that performs well is the proof.',
    mistake: 'Including only your best outlier viral post. Show 3 solid posts that represent your average quality level. Brands are buying your typical output, not your once-in-a-year viral moment.',
  },
  {
    rank: '04',
    title: 'Past Collaborations & Testimonials — Social Proof',
    icon: '🤝',
    color: '#FF9800',
    mustHave: false,
    whyItMatters: 'This section converts interested brands into confirmed deals. According to brand manager research, creators with even one documented past collaboration close deals 3–5x faster than those without. A testimonial from a previous brand partner — even a small local brand — signals that you deliver what you promise, which is the #1 concern brand managers have about new creator partnerships.',
    whatToInclude: [
      'Brand logo + your handle + deliverable type ("1 Reel + 3 Stories for @XYZBrand")',
      'Result achieved: views, clicks, conversions, or coupon code redemptions if available',
      'One-line testimonial from the brand contact if they\'re willing to provide it',
      'If you have no paid deals: include gifted collaborations — they count as portfolio work',
      'Screenshot of a brand\'s response to your content ("This performed 3x our benchmark")',
    ],
    indianSpecific: 'Even one documented gifted collaboration with a small Indian D2C brand — featured in your media kit with a result stat — converts better than a beautiful empty template. Request a quick testimonial on WhatsApp from every brand you work with, even for gifted deals.',
    mistake: 'Leaving this section blank and calling it "collaborations: open to new partnerships". An empty section is worse than no section. Add even a gifted collab, a UGC piece, or an organic mention.',
  },
  {
    rank: '05',
    title: 'Rate Card — Your Pricing, Packages, and Usage Rights',
    icon: '💰',
    color: '#FF6B2B',
    mustHave: true,
    whyItMatters: 'Your rate card is what brands use to decide whether to put you in their budget. Creators who don\'t include a rate card in their media kit lose deals — not because brands don\'t want to work with them, but because asking "what are your rates?" and waiting adds friction that brands resolve by moving to the next creator who has rates ready. A rate card does not lock you in — it starts the negotiation.',
    whatToInclude: [
      'Per-deliverable rates: Instagram Reel, Story set, YouTube video, Shorts, carousel post',
      'Package rates: bundle 3 Reels + 6 Stories at a 15–20% discount vs individual rates',
      'Usage rights clause: "+30% for 30-day whitelisting, +50% for 90-day ad usage"',
      'Exclusivity clause: "+25% for category exclusivity during campaign period"',
      'GST note: "All rates exclusive of 18% GST" (required once you cross ₹20L/year)',
      'Rate validity: "Rates valid for 30 days from proposal date"',
    ],
    indianSpecific: 'Most Indian creators undercharge by 30–50%. Use this formula as your floor: Instagram Reel minimum = Followers × ₹0.50 (at 10,000 followers = ₹5,000 minimum). Finance and tech niches can double this. Raise rates after every 3–5 paid deals. Never disclose your floor — quote 15–25% above what you\'d accept to leave negotiation room.',
    mistake: 'Listing "rates on request" with no numbers. This forces brands to send an email, wait for a reply, and evaluate whether the friction is worth it. Most decide it isn\'t. Put real numbers in your media kit.',
  },
  {
    rank: '06',
    title: 'Contact Details — Make It Effortless to Hire You',
    icon: '📩',
    color: '#00BCD4',
    mustHave: true,
    whyItMatters: 'This sounds obvious but 40% of Indian creator media kits either omit a business email, only list an Instagram DM, or include a personal phone number brands are uncomfortable calling cold. Make it easy for a brand to reach you professionally through a channel they are comfortable with.',
    whatToInclude: [
      'Business email address (not your personal gmail — create creator@yourname.com or use a professional format)',
      'Instagram/YouTube handle clickable link',
      'Response time promise: "I respond to brand enquiries within 24 hours on business days"',
      'Your Identity Kit profile link — one URL that shows everything brands need',
      'WhatsApp business number (optional but high-conversion for Indian brands who prefer WhatsApp)',
    ],
    indianSpecific: 'Indian brands — especially D2C startups and small businesses — overwhelmingly prefer WhatsApp over email for initial creator outreach. Adding a WhatsApp Business number to your media kit can double your response rate from Indian small brands. Keep it separate from your personal number.',
    mistake: 'Putting "DM me on Instagram" as your only contact method. Brand marketing managers work from laptops, not phones. An Instagram DM is the hardest way for them to reach you professionally.',
  },
]

const rateCardByTier = [
  { tier: 'Nano (1K–10K)', reel: '₹1,000–₹8,000', story: '₹300–₹2,000', youtube: '₹2,000–₹15,000', carousel: '₹800–₹5,000', color: '#FF9800' },
  { tier: 'Micro (10K–100K)', reel: '₹5,000–₹80,000', story: '₹1,500–₹20,000', youtube: '₹15,000–₹1,50,000', carousel: '₹4,000–₹50,000', color: '#6C63FF' },
  { tier: 'Mid-tier (100K–500K)', reel: '₹80,000–₹2,00,000', story: '₹20,000–₹60,000', youtube: '₹1,00,000–₹5,00,000', carousel: '₹50,000–₹1,50,000', color: '#4CAF50' },
  { tier: 'Macro (500K–1M)', reel: '₹2,00,000–₹7,90,000', story: '₹50,000–₹2,00,000', youtube: '₹5,00,000–₹20,00,000', carousel: '₹1,50,000–₹5,00,000', color: '#FF6B2B' },
]

const mistakes = [
  { m: 'Sending a PDF that brands can\'t update or share easily', f: 'A live shareable link (like your Identity Kit profile at identitykit.in) is 10x more powerful than a PDF in 2026. A link is always up-to-date, works on any device, loads in seconds, and brands can share it internally with their decision-makers. PDFs get lost in email threads. A link lives in a brand manager\'s browser bookmark.' },
  { m: 'Using follower count as your main selling point', f: 'In 2026, Indian brands care about engagement rate, audience demographics, and niche relevance far more than raw follower count. Lead your media kit with your engagement rate (and if it\'s above 3%, highlight it prominently — that alone justifies higher rates than creators with 5x your followers at 0.5% engagement).' },
  { m: 'A media kit that is clearly a generic template', f: 'If a brand manager opens your kit and immediately recognises the Canva template from the 20 other creators who sent the same one this week, you start at a disadvantage. Customise your template completely: your brand colours, your photo, your exact stats. Identity Kit generates a custom profile — not a template — using your real data.' },
  { m: 'Not updating your media kit after every major follower milestone', f: 'A media kit showing 8,000 followers when you now have 18,000 signals carelessness. Brands assume your current engagement stats match what\'s in the kit. Update your media kit every time you cross a major milestone: 5K, 10K, 25K, 50K, 100K. With a live link like Identity Kit, your stats update automatically.' },
  { m: 'Sending the same media kit to every brand regardless of fit', f: 'A beauty brand and a fintech app need to see completely different content samples and audience angles from your kit. Customise the "content samples" and "why partner with me" sections for each brand category you pitch. Keep one master media kit (your Identity Kit profile) and personalise your pitch email around it for each brand.' },
  { m: 'No rate card — "rates available on request"', f: '"Rates on request" adds 24–48 hours of friction to every deal. Most brand managers with a limited shortlist of 5–10 creators will choose the creator whose rates are immediately available over the one who makes them wait. Put real numbers in your media kit. You can always negotiate — but you cannot negotiate what you never show.' },
]

const pitchTemplate = `Subject: Creator Collaboration — [Your Niche] × [Brand Name]

Hi [Name],

I'm [Your Name], a [niche] creator with [X]K followers on [platform] focused on [specific audience description].

I've been using [Brand Product] for [time period] and genuinely love it — specifically [one specific thing you like about it].

I'd love to create a [Reel/video/post] for your upcoming [campaign/launch/season] that shows my audience [what you'd make].

My audience is [demographic] — [X]% are [age group] based in [cities/region], with an average engagement rate of [X]%.

Here is my complete creator profile with stats, content samples, and rates:
👉 [Your Identity Kit link]

Would a collaboration make sense? Happy to discuss a brief or package that works for your budget.

[Your Name]
[Your handle]`

export default function InfluencerMediaKitIndiaPage() {
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

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(7,7,13,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
          <Link href="/" style={{ fontWeight: 800, fontSize: 18, color: '#FF6B2B', letterSpacing: '-0.5px' }}>Identity Kit</Link>
          <div className="nav-links" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B', fontWeight: 600 }}>Blog</Link>
            <Link href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Tools</Link>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Build Free Media Kit →</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Hero */}
        <div className="hero-pad" style={{ padding: '64px 24px 40px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['Media Kit', 'Brand Deals', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Influencer Media Kit India 2026:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>What to Include, Free Template & How to Get Brand Deals</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            78% of Indian brands expect a professional media kit before discussing partnerships. Creators without one lose deals before a single conversation happens. Here is exactly what Indian brand managers look for — and how to build yours free in 10 minutes.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — What to Include in an Influencer Media Kit India</div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6, marginBottom: 16 }}>A complete Indian influencer media kit must include:</p>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Creator identity — your niche (specific, not "lifestyle"), platforms, and total reach in one clear statement',
                'Audience demographics — engagement rate, age range, gender split, top cities, and average views per post',
                'Content samples — your 3 best relevant pieces with view/engagement counts and links to live content',
                'Past collaborations — even gifted deals count; include the brand name, deliverable, and result achieved',
                'Rate card — per-deliverable rates for Reel, Story, YouTube video, carousel, and usage rights pricing',
                'Contact details — business email, creator handle links, and your Identity Kit shareable profile link',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
            <div style={{ marginTop: 20, padding: '14px 18px', background: 'rgba(255,107,43,0.08)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 10 }}>
              <span style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 13 }}>Fastest way: </span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Build all 6 sections in one free, shareable link at </span>
              <Link href="/auth" style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 14 }}>identitykit.in →</Link>
            </div>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Influencer Media Kits India 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                '78% of Indian brands expect creators to have a formal media kit before discussing partnerships in 2026, up from 61% in 2023.',
                'Creators with professional media kits close brand deals 3–5x faster than those without one, according to influencer marketing platform data.',
                'Indian brand managers spend an average of 30 seconds reviewing a media kit before deciding to engage or skip the creator.',
                'A micro-influencer with 25,000 Instagram followers saw a 40% increase in partnership inquiries and 25% higher average deal size after creating a professional media kit.',
                'Most Indian creators undercharge by 30–50% — a rate card based on market benchmarks (not gut feeling) increases deal value significantly.',
                'Indian D2C brands spending ₹1.5–₹3 lakh per month on influencer marketing typically activate 8–15 nano and micro creators per campaign cycle.',
                'Usage rights are the most underutilised pricing lever for Indian creators — adding 30–50% on top of base rates for whitelisting or ad usage rights that brands routinely pay.',
                'A live shareable media kit link converts better than a PDF because it is always up-to-date, works on any device, and brands can share it internally in one click.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why you need one — stat box */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 16 }}>Why a Media Kit Is Non-Negotiable for Indian Creators in 2026</div>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
              {[
                { stat: '30 seconds', label: 'How long a brand manager spends on your media kit before deciding', color: '#FF6B2B' },
                { stat: '3–5x', label: 'Faster deal closing speed for creators with professional media kits', color: '#4CAF50' },
                { stat: '78%', label: 'Of Indian brands expect a media kit before discussing partnerships', color: '#6C63FF' },
                { stat: '+25%', label: 'Average increase in deal size after creating a professional media kit', color: '#FF9800' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${item.color}25`, borderRadius: 12, padding: '16px 20px' }}>
                  <div style={{ fontWeight: 800, color: item.color, fontSize: 28, marginBottom: 6 }}>{item.stat}</div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.5 }}>{item.label}</div>
                </div>
              ))}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>
              When a brand manager receives 30–50 creator pitches per week, the creator with a clean, professional media kit wins by default. Not because they are more talented — but because they answer the brand&apos;s questions before they have to ask. Brands hire the easiest professional creator to work with, not necessarily the best creator.
            </p>
          </div>

          {/* 6 Sections */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>6 Sections Every Indian Influencer Media Kit Must Have in 2026</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 28 }}>In the exact order brands want to see them — built on what Indian brand managers actually check, not generic Western media kit advice.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {sections.map((sec) => (
                <div key={sec.rank} className="card">
                  {/* Header */}
                  <div style={{ background: `linear-gradient(135deg, ${sec.color}15, ${sec.color}05)`, borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{ background: `${sec.color}20`, border: `1px solid ${sec.color}35`, borderRadius: 10, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: sec.color, fontSize: 16, flexShrink: 0 }}>{sec.rank}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                          <span style={{ fontSize: 20 }}>{sec.icon}</span>
                          <span style={{ fontWeight: 800, fontSize: 17 }}>{sec.title}</span>
                          {sec.mustHave && <span style={{ background: 'rgba(76,175,80,0.1)', color: '#4CAF50', border: '1px solid rgba(76,175,80,0.25)', padding: '2px 8px', borderRadius: 100, fontSize: 11, fontWeight: 700 }}>MUST HAVE</span>}
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.5 }}>{sec.whyItMatters}</div>
                      </div>
                    </div>
                  </div>

                  {/* What to include */}
                  <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 10 }}>What to include</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                      {sec.whatToInclude.map((item, j) => (
                        <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                          <span style={{ color: '#4CAF50', flexShrink: 0, fontSize: 13, marginTop: 1 }}>✓</span>
                          <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* India-specific angle */}
                  <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
                      <span style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>🇮🇳 INDIA TIP</span>
                      <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{sec.indianSpecific}</span>
                    </div>
                  </div>

                  {/* Common mistake */}
                  <div style={{ padding: '14px 24px' }}>
                    <div style={{ background: 'rgba(255,82,82,0.05)', border: '1px solid rgba(255,82,82,0.12)', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
                      <span style={{ color: '#FF5252', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>✗ AVOID</span>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.5 }}>{sec.mistake}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA — the core conversion */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '36px 32px', marginBottom: 56, textAlign: 'center' }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>⚡</div>
            <div style={{ fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Build your complete media kit in 10 minutes — free</div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.7, maxWidth: 480, margin: '0 auto 24px' }}>
              Identity Kit generates all 6 sections of your media kit in one professional, shareable link — no Canva, no PDF, no design skills needed. Your media kit, rate card, and creator CV. One link. Always up-to-date.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
              {['✓ Media Kit', '✓ Rate Card', '✓ Creator CV', '✓ Portfolio', '✓ Shareable Link'].map((item) => (
                <span key={item} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 13, fontWeight: 600 }}>{item}</span>
              ))}
            </div>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Create My Free Media Kit →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 12 }}>identitykit.in · Free forever · No credit card · Takes 10 minutes</div>
          </div>

          {/* Rate card section */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>India Influencer Rate Card 2026 — What to Charge by Tier</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Market benchmark rates for Indian influencers in 2026. Use these as your floor — quote 15–25% above these numbers and negotiate down to them.</p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid rgba(255,107,43,0.25)' }}>
                    {['Tier', 'Instagram Reel', 'Story Set (5)', 'YouTube Video', 'Carousel Post'].map((h, i) => (
                      <th key={i} style={{ padding: '10px 14px', textAlign: 'left', color: '#FF6B2B', fontWeight: 700, fontSize: 12, whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rateCardByTier.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                      <td style={{ padding: '12px 14px', fontWeight: 700, color: row.color, whiteSpace: 'nowrap' }}>{row.tier}</td>
                      <td style={{ padding: '12px 14px', color: '#E8E8F0', fontWeight: 600 }}>{row.reel}</td>
                      <td style={{ padding: '12px 14px', color: 'rgba(255,255,255,0.6)' }}>{row.story}</td>
                      <td style={{ padding: '12px 14px', color: 'rgba(255,255,255,0.6)' }}>{row.youtube}</td>
                      <td style={{ padding: '12px 14px', color: 'rgba(255,255,255,0.6)' }}>{row.carousel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: 16, background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.15)', borderRadius: 10, padding: '12px 18px', display: 'flex', gap: 8 }}>
              <span style={{ color: '#6C63FF', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>NICHE MULTIPLIER</span>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.5 }}>Finance and tech creators: multiply all rates by 1.5–2x. Beauty and skincare: 1.2–1.5x. Food and lifestyle: base rate. Add +30% for 30-day whitelisting, +50% for 90-day ad usage rights, +25% for category exclusivity.</span>
            </div>
            <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center' }}>
              <Link href="/tools/influencer-rate-calculator" style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '10px 20px', borderRadius: 10, fontWeight: 700, fontSize: 14 }}>
                Calculate your exact rate free →
              </Link>
            </div>
          </section>

          {/* Brand pitch email template */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>How to Send Your Media Kit to Indian Brands — Pitch Email Template</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>The pitch email that gets the highest reply rates from Indian D2C brands — tested across thousands of creator outreach campaigns in India.</p>
            <div className="card" style={{ padding: '24px 28px' }}>
              <div style={{ fontWeight: 700, color: '#FF6B2B', fontSize: 13, marginBottom: 14, textTransform: 'uppercase', letterSpacing: 0.8 }}>Copy this template — personalise the bracketed sections</div>
              <pre style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '18px 20px', color: 'rgba(255,255,255,0.7)', fontSize: 13, lineHeight: 1.8, overflowX: 'auto', whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
                {pitchTemplate}
              </pre>
              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  'Keep the email under 150 words — Indian brand managers do not read long cold emails',
                  'Mention a specific product you genuinely use — generic "I love your brand" kills credibility instantly',
                  'Your Identity Kit link does the heavy lifting — the email just needs to get them to click it',
                  'Send on Tuesday–Thursday, 10 AM–12 PM IST — highest email open rates for Indian marketing teams',
                ].map((tip, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <span style={{ color: '#4CAF50', flexShrink: 0 }}>→</span>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Brand Pitch Email Generator CTA */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 14, padding: '22px 26px', marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>⚡ Rather than edit a template — generate a personalised pitch in 30 seconds</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>Our free AI Brand Pitch Email Generator writes your personalised email + 2 follow-ups based on your niche, platform, followers, and the exact brand you&apos;re targeting. India-specific, short enough to get read.</div>
            </div>
            <Link href="/tools/brand-pitch-email-generator" style={{ background: '#FF6B2B', color: '#fff', padding: '11px 18px', borderRadius: 10, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Generate My Pitch Email →
            </Link>
          </div>

          {/* ROI Calculator CTA */}
          <div style={{ background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.18)', borderRadius: 14, padding: '22px 26px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>📊 Prove your ROI to brands — with numbers, not promises</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>Use our free Influencer ROI Calculator to calculate your Earned Media Value and Cost Per Engagement — India-specific benchmarks by niche. Add this data to your media kit to justify premium rates.</div>
            </div>
            <Link href="/tools/influencer-roi-calculator" style={{ background: 'rgba(108,99,255,0.15)', color: '#6C63FF', border: '1px solid rgba(108,99,255,0.3)', padding: '11px 18px', borderRadius: 10, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Calculate My ROI Free →
            </Link>
          </div>

          {/* 6 Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>6 Media Kit Mistakes That Cost Indian Creators Brand Deals</h2>
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
                { q: 'How many followers do I need to make a media kit in India?', a: 'Zero. You can — and should — build a media kit the moment you start actively posting content. At 500–1,000 followers, you can use your media kit to get gifted collaborations from small Indian D2C brands, which builds your portfolio. The common mistake is waiting until 10,000 followers. By then you\'ve missed 6–12 months of brand deal opportunities. Identity Kit lets you build a complete media kit from day 1, even with zero past brand deals.' },
                { q: 'What is the best format for an influencer media kit in India — PDF or link?', a: 'A live shareable link is better than a PDF for Indian creators in 2026. A link is always up-to-date (your follower count updates automatically), works on any device, loads in seconds, and brands can share it internally with their team in one click. PDFs become outdated immediately, get lost in email threads, and need to be redesigned every time your stats change. identitykit.in generates a live media kit link that updates with your stats — this is the format Indian brand managers increasingly prefer.' },
                { q: 'Should I include my rates in my media kit?', a: 'Yes — always include rates. "Rates on request" adds 24–48 hours of friction to every deal negotiation. Brand managers who are evaluating 10+ creators simultaneously will choose the ones whose rates are immediately available. Quote 15–25% above your floor rate in the media kit to leave negotiation room. Your rate card does not lock you in — it starts the conversation. A media kit without a rate card is an incomplete business document.' },
                { q: 'How do I make a media kit if I have no brand collaborations?', a: 'Use your best 3 organic posts as content samples — a finance creator with a 50,000-view organic Reel is more compelling than an empty "collaborations" section. Add a note in your collaborations section: "Currently building my brand partnership portfolio — available for inaugural campaigns at introductory rates." Offer 1–2 gifted collaborations with small D2C brands to generate your first portfolio case studies. Build your profile at identitykit.in regardless — a professional presence with real stats is better than no presence at all.' },
                { q: 'How often should I update my media kit?', a: 'Update your media kit every time you cross a major follower milestone (5K, 10K, 25K, 50K, 100K), after every paid brand collaboration (add it to your portfolio), and at least every 3 months. Stale stats signal carelessness to brand managers — if your kit shows 8,000 followers when you have 22,000, it immediately raises questions about your attention to detail. With a live link like Identity Kit, your stats update automatically so your media kit is always current.' },
                { q: 'Do nano influencers in India need a media kit?', a: 'Absolutely yes. In fact, a professional media kit matters more for nano influencers (1K–10K followers) than for macro creators in India. A macro creator gets inbound brand enquiries without a media kit — their follower count does the work. A nano creator must convince brands that their small but engaged audience is valuable. A professional media kit is the single most effective tool for a nano influencer to punch above their weight in brand deal negotiations.' },
                { q: 'What is the difference between a media kit and a rate card?', a: 'A media kit is your complete creator business profile — it includes your niche, audience demographics, content samples, past collaborations, rates, and contact details. A rate card is one section within your media kit that lists your prices by deliverable type. Some creators send a rate card separately when a brand specifically asks "what do you charge?" without requesting the full media kit. In India in 2026, having both in one place (like your Identity Kit profile) is the most professional approach.' },
                { q: 'How do I find brand email contacts to send my media kit to in India?', a: 'The most effective methods for finding Indian brand marketing contacts: (1) LinkedIn — search "[Brand Name] marketing manager India" or "influencer marketing India" and connect with the person who manages creator campaigns. (2) Brand Instagram profiles — look for "marketing@" or "collab@" in the bio. (3) Email tools — Hunter.io finds corporate email addresses for any domain. (4) Direct Instagram DM to the brand\'s official account — Indian D2C brands with under 100,000 followers typically respond to DMs. (5) Influencer platforms like Winkl, Plixxo, or Qoruz that connect Indian creators directly with brands.' },
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
                { href: '/blog/how-to-get-brand-deals-india', title: 'How to Get Brand Deals in India — Complete 2026 Guide', tag: 'Brand Deals' },
                { href: '/blog/influencer-rate-card-india', title: 'Influencer Rate Card India 2026 — What to Charge Brands', tag: 'Rate Card' },
                { href: '/blog/how-to-become-micro-influencer-india', title: 'How to Become a Micro Influencer in India — Step-by-Step', tag: 'Influencer Marketing' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>📋</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Your media kit is ready to build — right now
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Identity Kit builds your complete media kit, rate card, and creator CV in one shareable link — free, specifically designed for Indian creators. 10 minutes. No design skills. No Canva templates.
            </p>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Build My Free Media Kit →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 14 }}>
              identitykit.in · Free forever · Used by Indian creators to land brand deals
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
          <Link href="/tools/influencer-roi-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>ROI Calculator</Link>
          <Link href="/tools/brand-deal-contract-template" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contract Template</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Free media kit for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
