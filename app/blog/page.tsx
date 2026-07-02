import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Identity Kit — Tips for Indian Creators',
  description: 'Media kit tips, rate card guides, and creator tools for Indian influencers. Learn how to land more brand deals with Identity Kit.',
  openGraph: {
    title: 'Blog | Identity Kit — Tips for Indian Creators',
    description: 'Media kit tips, rate card guides, and creator tools for Indian influencers.',
    url: 'https://identitykit.in/blog',
    siteName: 'Identity Kit',
    type: 'website',
  },
}

const posts = [
  {
    slug: 'how-to-negotiate-brand-deal-rates-india-2026',
    tag: 'Negotiation',
    title: 'How to Negotiate Brand Deal Rates in India 2026 (Scripts, Math & When to Walk Away)',
    excerpt: 'India has zero pricing transparency in influencer marketing — the same follower count can mean a 10x price difference. Real rupee benchmarks, exact negotiation scripts, package deal math, usage rights and exclusivity pricing, and when to walk away.',
    readTime: '16 min read',
    date: 'July 2026',
  },
  {
    slug: 'asci-guidelines-influencer-disclosure-india-2026',
    tag: 'ASCI Compliance',
    title: 'ASCI Guidelines for Influencers India 2026: Disclosure Rules Explained (#Ad, Videos, Finance)',
    excerpt: 'Every influencer in India — nano to celebrity — must disclose paid content, regardless of follower count. Exact #Ad rules for feed posts, Stories, Reels, YouTube and podcasts, new SEBI/CA credential rules for finfluencers, AI-influencer disclosure, real penalty numbers, and a 7-step compliance checklist.',
    readTime: '17 min read',
    date: 'July 2026',
  },
  {
    slug: 'instagram-reels-ideas-india-2026',
    tag: 'Instagram Reels',
    title: 'Instagram Reels Ideas India 2026: 50 Content Ideas by Niche That Actually Get Views',
    excerpt: 'Reels account for 50% of time spent on Instagram. Watch completion is the #1 algorithm signal. 50 niche-specific ideas for Indian creators (finance, beauty, career, food, fitness, tech) — each with exact hook formula and format. Plus: 5 hook formulas that get Reels watched to the end, updated 5-hashtag strategy, and algorithm signals ranked.',
    readTime: '19 min read',
    date: 'June 2026',
  },
  {
    slug: 'brand-collaboration-email-india-2026',
    tag: 'Brand Deals',
    title: 'Brand Collaboration Email India 2026: Templates That Get Replies (Real Scripts)',
    excerpt: 'Personalised pitches get 30–40% replies; generic ones get 5–8%. 5 ready-to-send templates (small D2C, large brand, agency, gifted collab, follow-up), 5 subject lines scored and explained, 7 lines that kill every pitch, 8-point pre-send checklist, and the AI tool that generates your personalised email in 30 seconds.',
    readTime: '16 min read',
    date: 'June 2026',
  },
  {
    slug: 'instagram-verification-blue-tick-india-2026',
    tag: 'Instagram Verification',
    title: 'How to Get Verified on Instagram in India 2026 (Blue Tick: Free & Paid Methods)',
    excerpt: 'No follower minimum required for either path. Free notability-based verification needs genuine Indian media coverage (NDTV, India Today) and takes ~30 days. Meta Verified costs ₹500–₹1,500/month, needs Aadhaar/PAN, and approves in 24–72 hours. Step-by-step for both, plus 5 verification myths debunked.',
    readTime: '16 min read',
    date: 'June 2026',
  },
  {
    slug: 'creator-cv-resume-india-2026',
    tag: 'Creator CV',
    title: 'Creator CV India 2026: How to Make a Resume That Gets Content Jobs (Free Template)',
    excerpt: 'Freshers with a strong portfolio land their first content job in 4–8 weeks vs 3–6 months without one. 6 sections every Creator CV needs (positioning statement, live portfolio links, real metrics, platform skills, self-initiated projects), a Creator CV vs traditional resume comparison, and a 7-day plan to build a portfolio from zero.',
    readTime: '16 min read',
    date: 'June 2026',
  },
  {
    slug: 'vernacular-content-creator-india-2026',
    tag: 'Vernacular Creators',
    title: 'How to Become a Vernacular Content Creator in India 2026 (Regional Language Guide)',
    excerpt: 'Regional language content drives 2–3x higher engagement than English in India. 6 languages ranked by opportunity vs competition (Bengali, Marathi, and dialects beat saturated Hindi), 5 vernacular-specific income streams, platform strategy beyond Instagram (ShareChat, Moj, Kuku FM), and rate benchmarks showing the trust premium vernacular creators command.',
    readTime: '17 min read',
    date: 'June 2026',
  },
  {
    slug: 'influencer-tax-gst-india-2026',
    tag: 'Tax & GST',
    title: 'Influencer Tax & GST Guide India 2026: TDS, Section 194R, ITR Filing Explained',
    excerpt: 'Free gifts over ₹20,000 are taxable under Section 194R — even hampers from brands. GST mandatory at ₹20L turnover (gifts count too). 4 TDS sections explained with real examples (194R, 194J, 194C, GST), which ITR form to file, 8 deductible expenses, 7-step filing process, and 6 costly mistakes to avoid.',
    readTime: '17 min read',
    date: 'June 2026',
  },
  {
    slug: 'faceless-youtube-channel-ideas-india-2026',
    tag: 'Faceless YouTube',
    title: 'Faceless YouTube Channel Ideas India 2026: 12 Niches That Actually Pay',
    excerpt: 'Faceless channels are 38% of all new creator monetisation ventures, up from 12% in 2022. 12 India-specific niches ranked by RPM: finance (₹150–₹250), tech/AI tools, career tips, book summaries, true crime — with content ideas, tools needed, and exactly how faceless channels monetise the same way as on-camera ones.',
    readTime: '18 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-make-money-content-creator-india-2026',
    tag: 'Creator Income',
    title: 'How to Make Money as a Content Creator in India in 2026 (10 Income Streams)',
    excerpt: 'Indian creators earning ₹1L+/month combine 3–5 income streams. All 10 ranked by accessibility: affiliate marketing (day 1), UGC (₹3K–₹50K/video, zero followers), brand deals, YouTube ad revenue, digital products, consulting, courses, memberships, speaking, newsletters. Real rupee numbers, income timeline by stage, and 8 free tools.',
    readTime: '19 min read',
    date: 'June 2026',
  },
  {
    slug: 'influencer-marketing-roi-india-2026',
    tag: 'ROI & Analytics',
    title: 'Influencer Marketing ROI India 2026: How Creators Prove Value & Brands Measure Results',
    excerpt: 'Indian brands earn ₹5.20–₹5.78 per ₹1 spent on influencer marketing. Creators who send post-campaign reports get rebooked 5x more often. 5 ROI metrics with India formulas (EMV, CPE, CPV, engagement rate, revenue attribution), niche CPM benchmarks table, 4-step campaign framework, and 6 free tools.',
    readTime: '18 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-become-ugc-creator-india-2026',
    tag: 'UGC',
    title: 'How to Become a UGC Creator in India 2026 (Zero Followers, ₹50K–₹1L/Month)',
    excerpt: 'UGC creators earn ₹3,000–₹50,000/video with zero followers required. 6 UGC formats Indian brands pay for (problem-solution highest at ₹6K–₹30K), 6-step system from spec portfolio to retainer clients, income timeline by stage, top Indian brands buying UGC (Mamaearth, Groww, boAt), and 6 mistakes keeping creators stuck at ₹10K/month.',
    readTime: '18 min read',
    date: 'June 2026',
  },
  {
    slug: 'influencer-rate-card-india-2026',
    tag: 'Rate Card',
    title: 'Influencer Rate Card India 2026: What to Charge Brands (Complete Pricing Guide)',
    excerpt: '68% of Indian creators accept the first offer and undercharge by 35% on average. Full rate card by tier: Nano ₹1K–₹10K/Reel, Micro ₹5K–₹75K, Mid-tier ₹50K–₹3.5L, Macro ₹2L–₹7.9L. Niche multipliers (finance 2–4×), 6 deal premiums (usage rights +30–50%, exclusivity +25–40%), and 5 negotiation scripts.',
    readTime: '18 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-grow-instagram-followers-india-2026',
    tag: 'Growth',
    title: 'How to Grow Instagram Followers in India in 2026 (0 to 10K Organic Guide)',
    excerpt: 'Accounts posting 5 Reels/week in India grow 2x faster. Reels get 36% more reach than any other format. 7 strategies ranked by impact (profile optimisation, Reels hook formula, carousels, hashtag tactics, Stories), best posting times for India (8–10 AM + 7–10 PM IST), 6 niche timelines to 10K, and how to convert followers into brand deals.',
    readTime: '17 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-pitch-brands-india-influencer-2026',
    tag: 'Brand Deals',
    title: 'How to Pitch Brands as an Influencer in India 2026 (Templates + Scripts That Get Replies)',
    excerpt: 'Generic pitches get 5–10% replies. Personalised ones get 30–40%. 5 pitch channels ranked by reply rate (WhatsApp 35–60%, email 25–40%, LinkedIn 20–35%), 4 copy-paste templates (cold email, large brand, follow-up, Instagram DM), how to find brand contacts, 5 negotiation scripts, and 6 deal-killing mistakes.',
    readTime: '18 min read',
    date: 'June 2026',
  },
  {
    slug: 'influencer-media-kit-india-2026',
    tag: 'Media Kit',
    title: 'Influencer Media Kit India 2026: What to Include, Free Template & How to Get Brand Deals',
    excerpt: '78% of Indian brands expect a media kit before discussing partnerships. 6 must-have sections in exact order (creator identity, audience demographics, content samples, past collabs, rate card, contact), India-specific tips for each, rate card benchmarks by tier, brand pitch email template, and 6 mistakes that cost Indian creators deals.',
    readTime: '16 min read',
    date: 'June 2026',
  },
  {
    slug: 'instagram-reels-vs-youtube-shorts-india-2026',
    tag: 'Platform Comparison',
    title: 'Instagram Reels vs YouTube Shorts India 2026: Which Pays More? (Data Comparison)',
    excerpt: 'Instagram Reels: no direct ad revenue in India, brand deals from 1K followers. YouTube Shorts: ₹5–₹30/1K views ad revenue, longer content lifespan, long-form income engine. 8-category head-to-head, niche-by-niche verdicts for 8 creator niches, and 3 platform strategies with 12-month income projections.',
    readTime: '17 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-become-content-creator-india-2026',
    tag: 'Creator Career',
    title: 'How to Become a Content Creator in India in 2026 (Zero to ₹1 Lakh/Month Roadmap)',
    excerpt: 'India has 100M+ creators but only 150,000 earn livable income. 7-step roadmap: niche selection, platform comparison (Instagram vs YouTube vs LinkedIn), ₹0 equipment setup, income timeline month-by-month, first brand deal at 1,000 followers, and 6 free tools every Indian creator needs.',
    readTime: '18 min read',
    date: 'June 2026',
  },
  {
    slug: 'youtube-shorts-monetization-india-2026',
    tag: 'YouTube',
    title: 'YouTube Shorts Monetisation India 2026: Complete Guide to Earning from Shorts',
    excerpt: 'Indian creators earn ₹5–₹30 per 1K Shorts views from ads (finance: ₹20–₹60). YPP tiers explained (500 vs 1,000 subscribers), how the revenue pool model works, Shorts vs long-form earnings table, and 7 income streams to stack — brand deals, affiliate, memberships, Super Thanks, digital products.',
    readTime: '17 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-grow-on-linkedin-india-2026',
    tag: 'LinkedIn Growth',
    title: 'How to Grow on LinkedIn in India in 2026 (From 0 to 10K Followers Guide)',
    excerpt: 'India is LinkedIn\'s #2 market with 130M+ users — but only 3% post weekly. Carousels earn 3.4% engagement (highest format), video growing 36% YoY. 6 top niches ranked by growth rate and brand deal income, 6-step growth system, 5 monetisation paths from ₹15K sponsored posts to ₹5L consulting retainers.',
    readTime: '18 min read',
    date: 'June 2026',
  },
  {
    slug: 'brand-deal-contract-template-india',
    tag: 'Legal',
    title: 'Brand Deal Contract Template India 2026: Free Download for Influencers & Creators',
    excerpt: 'Free India-specific brand deal contract with all 8 clauses — scope, payment, IP rights, kill fee, ASCI disclosure, GST/TDS. Copy-paste template + free tool to customise your contract in 60 seconds.',
    readTime: '10 min read',
    date: 'June 2026',
  },
  {
    slug: 'instagram-bio-ideas-creators-india',
    tag: 'Profile Tips',
    title: 'Instagram Bio Ideas for Creators India 2026: Examples, Formula & Free Generator',
    excerpt: 'The 5-line bio formula that gets brand deals. 12+ real examples by niche — finance, fitness, beauty, tech, food. What brands look for in your bio, what to avoid, and a free AI generator.',
    readTime: '8 min read',
    date: 'June 2026',
  },
  {
    slug: 'gst-invoice-generator-free-india',
    tag: 'GST & Tax',
    title: 'GST Invoice Generator for Freelancers India 2026: Free Tool + Complete Guide',
    excerpt: '11 mandatory invoice fields, GST threshold rules (₹20L), TDS Section 194J explained with example calculation, common invoice mistakes — plus a free tool to generate compliant invoices in 60 seconds.',
    readTime: '10 min read',
    date: 'June 2026',
  },
  {
    slug: 'youtube-money-calculator-india',
    tag: 'YouTube',
    title: 'YouTube Money Calculator India 2026: How Much Can You Earn From Your Channel?',
    excerpt: 'Finance earns ₹8,000–₹25,000 per lakh views. Entertainment earns ₹1,000–₹4,000. CPM vs RPM explained, YPP requirements, earnings by niche table, 5 ways to increase income — plus free calculator.',
    readTime: '10 min read',
    date: 'June 2026',
  },
  {
    slug: 'influencer-rate-calculator-india',
    tag: 'Rate Card',
    title: 'Influencer Rate Calculator India 2026: How Much Should You Charge Brands?',
    excerpt: 'Stop undercharging. Real 2026 rates by tier: Nano ₹2K–₹12K, Micro ₹8K–₹50K, Mid-tier ₹50K–₹2L per Reel. Niche premiums, negotiation rules, and a free calculator for your exact number.',
    readTime: '10 min read',
    date: 'June 2026',
  },
  {
    slug: 'instagram-engagement-rate-calculator-india',
    tag: 'Analytics',
    title: 'Instagram Engagement Rate Calculator India 2026: Formula, Benchmarks & Free Tool',
    excerpt: '3 engagement rate formulas explained. India benchmarks by tier: Nano 4–8%, Micro 2.5–5%, Mid-tier 1.5–3%. What brands check, 8 ways to improve your rate — plus free instant calculator.',
    readTime: '10 min read',
    date: 'June 2026',
  },
  {
    slug: 'affiliate-marketing-india-creators-2026',
    tag: 'Passive Income',
    title: 'Affiliate Marketing for Creators in India 2026: Complete Earning Guide (₹25K–₹2L/Month)',
    excerpt: 'Indian creators earn ₹25,000–₹2,00,000/month combining affiliate income with brand deals. 6 best programs ranked: demat referrals (₹500–₹2,000/signup), hosting (₹3,000–₹8,000/sale), Amazon (1–10%), EarnKaro (300+ brands, no website needed). Platform-by-platform strategy for YouTube, Instagram, blogs, and Telegram.',
    readTime: '17 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-become-micro-influencer-india',
    tag: 'Influencer Marketing',
    title: 'How to Become a Micro Influencer in India in 2026 (Step-by-Step Guide)',
    excerpt: '40% of India\'s brand influencer budget now goes to micro influencers. Tier-by-tier earnings (Nano ₹5K–₹30K/month → Micro ₹30K–₹2L → Mid-tier ₹2L–₹10L), 6 highest-paying niches, 6-step system from zero followers to first paid deal, and exactly what brands check before hiring you.',
    readTime: '16 min read',
    date: 'June 2026',
  },
  {
    slug: 'social-media-calendar-india-2026',
    tag: 'Content Planning',
    title: 'Social Media Calendar India 2026: Month-Wise Festival & Content Planning Guide for Creators',
    excerpt: '78% of Indian consumers buy more from brands that acknowledge their festivals. Complete month-by-month calendar with key dates, content ideas, brand campaign windows, and posting strategy — from Makar Sankranti to Diwali to New Year. Never miss a trending moment again.',
    readTime: '18 min read',
    date: 'June 2026',
  },
  {
    slug: 'influencer-marketing-cost-india-2026',
    tag: 'Brand Guide',
    title: 'Influencer Marketing Cost in India 2026: Complete Pricing Guide for Brands',
    excerpt: 'Real rates by tier: Nano ₹1K–₹12K, Micro ₹8K–₹50K, Mid-tier ₹50K–₹2L, Macro ₹2L–₹7L per Reel. 6 hidden costs that inflate every campaign, 4 budget templates (₹25K to ₹15L+), negotiation scripts, and ROI measurement methods that actually work in India.',
    readTime: '16 min read',
    date: 'June 2026',
  },
  {
    slug: 'youtube-rpm-india-niche-2026',
    tag: 'YouTube',
    title: 'YouTube RPM in India 2026: Real Rates by Niche (Finance, Tech, Education & More)',
    excerpt: 'Verified RPM data for every Indian YouTube niche in 2026. Finance earns ₹80–₹250 RPM (₹8K–₹25K per lakh views). Tech ₹60–₹180. Entertainment ₹10–₹40. CPM vs RPM explained, YPP requirements, earnings table by views, and 6 proven ways to increase your RPM.',
    readTime: '15 min read',
    date: 'June 2026',
  },
  {
    slug: 'ugc-creator-salary-india-2026',
    tag: 'UGC',
    title: 'How Much Do UGC Creators Earn in India in 2026? (Real Salary + Rate Data)',
    excerpt: 'Zero followers required. UGC creators in India earn ₹2,000–₹80,000 per video. Real income data by experience tier, niche-wise rates (finance pays 4–6x more than lifestyle), video type pricing, and a 5-step system to land your first paid UGC deal this week.',
    readTime: '12 min read',
    date: 'June 2026',
  },
  {
    slug: 'freelance-contract-india-2026',
    tag: 'Legal',
    title: 'Freelance Contract India 2026: Complete Guide + Free Template for Creators',
    excerpt: 'India has 15M+ freelancers and most work without a proper contract. 8 essential clauses explained with India-specific legal context — TDS (Section 194J), GST, Copyright Act 1957, ASCI disclosure rules — plus a free copy-paste template for brand deals.',
    readTime: '14 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-make-money-on-instagram-india-2026',
    tag: 'Instagram Income',
    title: 'How to Make Money on Instagram in India 2026: 10 Ways (Any Follower Count)',
    excerpt: 'Meta expanded full monetisation to India in 2026. 10 methods ranked by income: brand deals (₹2K–₹59L/post), UGC (zero followers needed), digital products (100% margin), Subscriptions, Gifts, Live Badges, Creator Marketplace — real rupee rates and step-by-step instructions for each.',
    readTime: '16 min read',
    date: 'June 2026',
  },
  {
    slug: 'best-niche-for-content-creators-india-2026',
    tag: 'Niche Strategy',
    title: 'Best Niche for Content Creators in India 2026: 12 High-Earning Niches Ranked by Income',
    excerpt: 'Data-backed ranking with real Indian CPM rates, brand deal ranges, and competition scores. Personal finance earns ₹100–₹200 CPM. Vernacular content is the biggest untapped opportunity (65% YoY growth, near-zero competition). 12 niches with India-specific angles still wide open.',
    readTime: '18 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-get-brand-deals-india',
    tag: 'Brand Deals',
    title: 'How to Get Brand Deals in India in 2026: Complete Guide for Creators (Any Follower Count)',
    excerpt: 'India\'s influencer marketing crossed $2.8 billion in 2026. 8-step system to land brand deals: what brands actually check, winning pitch email template, rate card by tier (₹2K–₹59L per Reel), 6 influencer platforms, and how to get re-booked automatically.',
    readTime: '15 min read',
    date: 'June 2026',
  },
  {
    slug: 'side-hustles-for-students-india-2026',
    tag: 'Student Income',
    title: 'Side Hustles for Students in India 2026: 12 Ways to Earn ₹10,000–₹1,00,000/Month',
    excerpt: 'Complete guide with real earning ranges, zero-investment options, and creator economy opportunities for Indian students. From UGC creation (₹5K–₹50K/video) to AI freelancing (low competition, starts in 1–3 weeks) — pick the one that fits your schedule.',
    readTime: '16 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-build-personal-brand-india',
    tag: 'Personal Branding',
    title: 'How to Build a Personal Brand in India in 2026 (Complete Step-by-Step Guide)',
    excerpt: 'India has 100M+ LinkedIn users and a ₹3,375 crore creator economy. Complete step-by-step system: niche selection, POV, platform strategy, content pillars, income data by stage, and the 5 mistakes that kill most Indian personal brands.',
    readTime: '14 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-become-finfluencer-india',
    tag: 'Finfluencer',
    title: 'How to Become a Finfluencer in India in 2026: SEBI Rules, Income, and Step-by-Step Guide',
    excerpt: 'Finance is the highest-paying creator niche in India — top finfluencers earn ₹5L–₹30L/month. Complete SEBI rules breakdown, 5 safe sub-niches, real income data, and a 6-step guide to building a trusted finance creator career.',
    readTime: '16 min read',
    date: 'June 2026',
  },
  {
    slug: 'instagram-vs-youtube-india-2026',
    tag: 'Platform',
    title: 'Instagram vs YouTube India 2026: Which Platform Pays Indian Creators More?',
    excerpt: 'Real INR earnings data, growth speed comparison, brand deal rates by tier, and a clear verdict on which platform Indian creators should build first — based on niche, follower stage, and income goal.',
    readTime: '15 min read',
    date: 'June 2026',
  },
  {
    slug: 'youtube-monetization-india-2026',
    tag: 'YouTube',
    title: 'YouTube Monetization India 2026: Complete Guide (YPP, CPM, RPM + All 6 Revenue Streams)',
    excerpt: 'Real CPM and RPM rates by niche, YPP requirements, and all 6 YouTube revenue streams explained. Finance channels earn ₹80–₹250 RPM. Entertainment earns ₹22–₹60 RPM. The complete India guide.',
    readTime: '17 min read',
    date: 'June 2026',
  },
  {
    slug: 'creator-economy-india-2026',
    tag: 'Creator Economy',
    title: "India's Creator Economy in 2026: ₹3,375 Crore Market, 10 Crore Creators, $1 Trillion by 2030",
    excerpt: "BCG, EY, and Budget 2026 confirm it — India's creator economy is a mainstream economic engine. The complete picture: market size, earnings data, platform breakdown, opportunities, and what it means for you.",
    readTime: '18 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-grow-instagram-followers-india',
    tag: 'Growth',
    title: 'How to Grow Instagram Followers in India in 2026 (15 Proven Strategies)',
    excerpt: 'Backed by real 2026 algorithm data — 15 India-specific strategies to grow Instagram followers organically. DM sends, Trial Reels, Hindi content, Collab feature and more.',
    readTime: '16 min read',
    date: 'June 2026',
  },
  {
    slug: 'instagram-engagement-rate-india',
    tag: 'Analytics',
    title: 'Instagram Engagement Rate for Indian Creators: 2026 Benchmarks + Free Calculator',
    excerpt: 'What is a good Instagram engagement rate in India? Calculate yours instantly and compare against India-specific 2026 benchmarks — broken down by follower tier and niche.',
    readTime: '11 min read',
    date: 'June 2026',
  },
  {
    slug: 'influencer-brand-deal-contract-india',
    tag: 'Legal',
    title: 'Influencer Brand Deal Contract India: 10 Clauses Every Creator Must Know (2026)',
    excerpt: '72% of brand-influencer disputes stem from unclear contracts. The 10 must-have clauses, ASCI rules, TDS explained, red flags to watch, and a full checklist before you sign.',
    readTime: '14 min read',
    date: 'June 2026',
  },
  {
    slug: 'what-is-ugc-creator-india',
    tag: 'UGC',
    title: 'What is a UGC Creator in India? How to Start & Earn ₹50,000/Month (2026)',
    excerpt: 'UGC creators earn ₹5,000–₹50,000 per video from brands without needing followers. Learn what UGC creation is, how much creators earn, and how to land your first deal.',
    readTime: '12 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-become-influencer-india',
    tag: 'Creator Career',
    title: 'How to Become an Influencer in India in 2026 (Complete Beginner\'s Guide)',
    excerpt: 'Step-by-step system to go from zero to your first brand deal as an Indian creator — niche selection, content strategy, growth tactics, and earning your first ₹10,000.',
    readTime: '15 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-pitch-brands-indian-influencer',
    tag: 'Brand Deals',
    title: 'How to Pitch Brands as an Indian Influencer in 2026 (Step-by-Step Guide)',
    excerpt: 'Exact email templates, DM scripts, and a step-by-step system to land paid brand deals as an Indian creator — even with under 10K followers.',
    readTime: '10 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-make-media-kit-india',
    tag: 'Media Kit',
    title: 'How to Make a Media Kit for Indian Creators in 2026 (Free + No Canva Needed)',
    excerpt: 'Tired of making media kits in Canva every time a brand asks? Here\'s how Indian creators can build a professional media kit in 10 minutes — completely free.',
    readTime: '6 min read',
    date: 'June 2026',
  },
  {
    slug: 'influencer-rate-card-india',
    tag: 'Rate Card',
    title: 'How Much Should Indian Creators Charge Brands in 2026? (Complete Rate Card Guide)',
    excerpt: 'From nano to mega — exact INR rates for Instagram Reels, Stories, YouTube videos, and more. Stop guessing what to charge brands.',
    readTime: '8 min read',
    date: 'June 2026',
  },
  {
    slug: 'what-is-creator-cv-india',
    tag: 'Creator CV',
    title: 'What is a Creator CV and Why Every Indian Influencer Needs One in 2026',
    excerpt: 'A Creator CV is different from a regular resume. Here\'s what it includes, why brands love it, and how to make one in minutes.',
    readTime: '5 min read',
    date: 'June 2026',
  },
]

export default function BlogPage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .nav-link { font-size: 14px; color: rgba(255,255,255,0.5); white-space: nowrap; }
        .nav-link:hover { color: #FF6B2B !important; }
        .post-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 20px; overflow: hidden; transition: all 0.25s; cursor: pointer; }
        .post-card:hover { border-color: rgba(255,107,43,0.3); transform: translateY(-4px); }
        .posts-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 900px) { .posts-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .hero-title { font-size: 28px !important; }
          .blog-pad { padding: 0 16px 60px !important; }
          .hero-section { padding: 60px 16px 40px !important; }
        }
      `}</style>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(7,7,13,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
          <Link href="/" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, color: '#FF6B2B', letterSpacing: '-0.5px' }}>
            Identity Kit
          </Link>
          <div className="nav-links" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            <Link href="/blog" className="nav-link" style={{ color: '#FF6B2B', fontWeight: 600, fontSize: 14 }}>Blog</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Get Started</Link>
          </div>
          <Link href="/auth" className="mob-btn" style={{ display: 'none', background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '7px 14px', fontSize: 13, fontWeight: 700 }}>Get Started</Link>
          <style>{`@media(max-width:640px){.mob-btn{display:block!important}}`}</style>
        </div>
      </nav>

      {/* Hero */}
      <div className="hero-section" style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 700px 400px at 50% 0%, rgba(255,107,43,0.06), transparent)', pointerEvents: 'none' }} />
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,107,43,0.08)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 100, padding: '6px 16px', marginBottom: 24 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF6B2B', display: 'inline-block' }}></span>
          <span style={{ fontSize: 13, color: '#FF6B2B', fontWeight: 600 }}>Creator Resources</span>
        </div>
        <h1 className="hero-title" style={{ fontFamily: 'Syne, sans-serif', fontSize: 48, fontWeight: 800, lineHeight: 1.1, marginBottom: 20, letterSpacing: '-1px' }}>
          Tips for Indian<br />
          <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Creators</span>
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          Media kit guides, rate card advice, and creator tools — built specifically for India&apos;s creator economy.
        </p>
      </div>

      {/* Posts */}
      <div className="blog-pad" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 80px' }}>
        <div className="posts-grid">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="post-card">
                {/* Illustration header */}
                <div style={{ height: 180, background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%, rgba(255,107,43,0.15), transparent 60%)' }} />
                  <div style={{ fontSize: 56 }}>
                    {post.tag === 'Media Kit' ? '📋' : post.tag === 'Rate Card' ? '💰' : post.tag === 'Brand Deals' ? '🤝' : post.tag === 'Creator Career' ? '🚀' : post.tag === 'UGC' ? '🎬' : post.tag === 'Legal' ? '⚖️' : post.tag === 'Analytics' ? '📊' : post.tag === 'Growth' ? '📈' : post.tag === 'Creator Economy' ? '🇮🇳' : post.tag === 'YouTube' ? '▶️' : post.tag === 'Platform' ? '⚔️' : post.tag === 'Finfluencer' ? '💹' : post.tag === 'Personal Branding' ? '✨' : post.tag === 'Student Income' ? '🎓' : post.tag === 'Niche Strategy' ? '🎯' : post.tag === 'Instagram Income' ? '💰' : post.tag === 'Influencer Marketing' ? '🌟' : post.tag === 'Brand Guide' ? '💼' : post.tag === 'Content Planning' ? '📅' : post.tag === 'Passive Income' ? '💸' : post.tag === 'Profile Tips' ? '✍️' : post.tag === 'GST & Tax' ? '🧾' : post.tag === 'LinkedIn Growth' ? '💼' : post.tag === 'Platform Comparison' ? '⚔️' : post.tag === 'ROI & Analytics' ? '📊' : post.tag === 'Creator Income' ? '💰' : post.tag === 'Faceless YouTube' ? '🎭' : post.tag === 'Vernacular Creators' ? '🪔' : post.tag === 'Instagram Verification' ? '✅' : post.tag === 'Instagram Reels' ? '🎬' : post.tag === 'ASCI Compliance' ? '🛡️' : post.tag === 'Negotiation' ? '🤝' : '📄'}
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                    <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 100 }}>{post.tag}</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>{post.readTime}</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>{post.date}</span>
                  </div>
                  <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 800, lineHeight: 1.3, marginBottom: 12, letterSpacing: '-0.3px' }}>{post.title}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#FF6B2B', fontSize: 14, fontWeight: 600 }}>
                    Read article <i className="ti ti-arrow-right" style={{ fontSize: 16 }}></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 80, textAlign: 'center', background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 24, padding: '60px 24px' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 32, fontWeight: 800, marginBottom: 16, letterSpacing: '-0.5px' }}>Ready to create your Identity Kit?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>Media Kit, Rate Card and Creator CV — one free link, ready in 10 minutes.</p>
          <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 12, padding: '14px 36px', fontWeight: 700, fontSize: 16 }}>
            Create my profile free →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/about" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>About</Link>
          <Link href="/contact" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contact</Link>
          <Link href="/terms" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Terms</Link>
          <Link href="/privacy" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Privacy</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit. Made with ❤️ for Indian creators.</p>
      </footer>
    </div>
  )
}
