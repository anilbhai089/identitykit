import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Social Media Calendar India 2026: Month-Wise Festival & Content Planning Guide for Creators',
  description: 'Complete social media calendar for Indian creators and brands in 2026. Month-wise festivals, national days, content ideas, and brand campaign opportunities — from Makar Sankranti to Diwali. Never miss a trending moment again.',
  keywords: 'social media calendar 2026 india, social media calendar india 2026, content calendar india 2026, indian festival social media calendar, content planner india 2026 creators, instagram content calendar india 2026',
  openGraph: {
    title: 'Social Media Calendar India 2026: Month-Wise Festival & Content Planning Guide for Creators',
    description: 'Month-wise Indian festival calendar with content ideas, brand campaign opportunities, and posting strategy for every major occasion in 2026 — built specifically for Indian creators.',
    url: 'https://identitykit.in/blog/social-media-calendar-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/social-media-calendar-india-2026.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/social-media-calendar-india-2026',
  },
}

const months = [
  {
    month: 'January 2026',
    icon: '🪁',
    color: '#6C63FF',
    theme: 'New Beginnings + National Pride',
    opportunityScore: 72,
    opportunity: 'High',
    key_dates: [
      { date: 'Jan 13', name: 'Lohri', type: 'Festival', content: 'Bonfire celebration, harvest gratitude, family stories — high engagement in Punjab, Haryana, Delhi audiences' },
      { date: 'Jan 14', name: 'Makar Sankranti / Pongal / Uttarayan', type: 'Festival', content: 'Kite flying (Gujarat, Rajasthan), harvest celebrations (Tamil Nadu, Maharashtra) — one of the highest-engagement festivals for food, lifestyle, and fashion creators' },
      { date: 'Jan 23', name: 'Basant Panchami / Saraswati Puja', type: 'Festival', content: 'Yellow aesthetic content, education and creativity themes, perfect for EdTech and stationery brands' },
      { date: 'Jan 26', name: 'Republic Day', type: 'National Holiday', content: 'Patriotic content, Indian identity themes — brands build trust with cultural rootedness posts' },
    ],
    content_ideas: [
      'New Year resolution content — works through mid-January when audiences are still goal-setting',
      'Makar Sankranti kite-flying Reel — one of the most shareable Indian festival formats',
      '"What I learned in 2025" year-in-review posts — still high engagement in early January',
      'Republic Day series: "Things I love about India as a creator" — builds authentic connection',
    ],
    brand_opportunities: 'Finance creators: January is tax planning month — SIP, PPF, and tax-saving content gets highest engagement of the year. Fashion creators: transitional winter-to-spring ethnic wear. EdTech: goal-setting and course enrolment campaigns.',
    posting_peak: 'Jan 12–15 (Sankranti week), Jan 25–27 (Republic Day)',
  },
  {
    month: 'February 2026',
    icon: '❤️',
    color: '#FF6B6B',
    theme: 'Love + Spirituality',
    opportunityScore: 65,
    opportunity: 'Medium-High',
    key_dates: [
      { date: 'Feb 12', name: 'Maha Shivratri', type: 'Festival', content: 'Devotional content, mindfulness and meditation themes — high engagement from spiritual audiences' },
      { date: 'Feb 14', name: 'Valentine\'s Day', type: 'Global Day', content: 'Couple content, gift guides, date ideas — massive brand campaign period for jewellery, food, and fashion' },
      { date: 'Feb 28', name: 'National Science Day', type: 'National Day', content: 'STEM creator content, education stories, science facts — high engagement on LinkedIn and YouTube' },
    ],
    content_ideas: [
      'Valentine\'s gift guide in your niche — "5 gifts for the [fitness/finance/tech] lover in your life"',
      'Shivratri mindfulness or wellness content — fasting, meditation, devotional aesthetic',
      '"Self-love" angle for solo creators who want to participate in Valentine\'s without couple content',
      'February is a good month for softer, emotional storytelling — behind-the-scenes of your creator journey',
    ],
    brand_opportunities: 'Jewellery and gifting brands: peak campaign month. Food and restaurant brands: Valentine\'s special menus. Wellness and meditation apps: Shivratri spiritual campaigns. Finance: "gift an SIP" campaign angle.',
    posting_peak: 'Feb 10–16 (Valentine\'s week), Feb 11–13 (Shivratri)',
  },
  {
    month: 'March 2026',
    icon: '🎨',
    color: '#FF9800',
    theme: 'Color + Awareness + Women',
    opportunityScore: 85,
    opportunity: 'Very High',
    key_dates: [
      { date: 'Mar 8', name: 'International Women\'s Day', type: 'Global Day', content: 'Women creator spotlight, female empowerment content, brand campaigns — one of the highest-engagement days on LinkedIn and Instagram' },
      { date: 'Mar 20', name: 'Holi', type: 'Festival', content: 'Colour-rich visuals, family celebration, food and fashion content — one of the highest-reach festival days of the year for Indian creators' },
      { date: 'Mar 22', name: 'World Water Day', type: 'Awareness Day', content: 'Sustainability content, environment awareness — good for creators in sustainability and wellness niches' },
    ],
    content_ideas: [
      'Holi outfit and colour palette Reel — one of the most shared Indian festival content formats',
      'Women\'s Day: "Women creators who inspired me" — high shareability, strong community feel',
      'Holi skincare or hair care content — massive engagement for beauty and wellness creators',
      '"Brands by women" spotlight — works for business, finance, and lifestyle creators on March 8',
    ],
    brand_opportunities: 'Skincare and beauty brands: Holi skincare prep campaigns. Fashion brands: Holi outfit collections. Women-led brands: Women\'s Day campaigns with creator partnerships. Food brands: Holi recipe content and gifting boxes.',
    posting_peak: 'Mar 6–9 (Women\'s Day), Mar 18–21 (Holi week)',
  },
  {
    month: 'April 2026',
    icon: '🌸',
    color: '#4CAF50',
    theme: 'Health + Harvest Festivals',
    opportunityScore: 68,
    opportunity: 'Medium-High',
    key_dates: [
      { date: 'Apr 2', name: 'Hanuman Jayanti', type: 'Festival', content: 'Devotional content, fitness (Lord Hanuman as symbol of strength) — popular with fitness and wellness creators' },
      { date: 'Apr 3', name: 'Good Friday', type: 'Holiday', content: 'Reflection and calm content — lower posting day, good for scheduling evergreen content' },
      { date: 'Apr 5', name: 'Easter', type: 'Global Festival', content: 'Easter egg visuals, spring themes — relevant for lifestyle, food, and family content creators' },
      { date: 'Apr 7', name: 'World Health Day', type: 'Awareness Day', content: 'Health tips, wellness routines, mental health awareness — high engagement for health and fitness creators' },
      { date: 'Apr 14', name: 'Baisakhi / Ambedkar Jayanti / Tamil New Year', type: 'Festival', content: 'Multiple regional celebrations — harvest festival content, social justice themes, regional cultural content' },
    ],
    content_ideas: [
      'World Health Day: "My 5 daily health habits" — works across fitness, food, and lifestyle niches',
      'Baisakhi bhangra or regional food content — strong engagement for regional and cultural creators',
      'April is exam season — JEE, NEET prep content peaks. Education creators: publish revision guides now',
      'Spring cleaning and organisation content — home, productivity, and lifestyle creators',
    ],
    brand_opportunities: 'Health and wellness brands: World Health Day campaigns. EdTech: exam preparation campaigns (JEE/NEET in May). Regional food and fashion brands: Baisakhi campaigns.',
    posting_peak: 'Apr 5–8 (World Health Day window), Apr 13–15 (Baisakhi and Ambedkar Jayanti)',
  },
  {
    month: 'May 2026',
    icon: '🌞',
    color: '#FF5722',
    theme: 'Summer + Education + Wellness',
    opportunityScore: 60,
    opportunity: 'Medium',
    key_dates: [
      { date: 'May 1', name: 'Labour Day / Maharashtra Day / Gujarat Day', type: 'National Day', content: 'Worker appreciation content, entrepreneurship stories, state pride — works for business and career creators' },
      { date: 'May 12', name: 'Mother\'s Day', type: 'Global Day', content: 'One of the highest-engagement global days for Indian Instagram — family content, gifts, emotional stories' },
      { date: 'May 31', name: 'World No Tobacco Day', type: 'Awareness Day', content: 'Health awareness content — wellness and health creators' },
    ],
    content_ideas: [
      'Mother\'s Day creator content: "Things my mother taught me about [your niche]" — universally relatable',
      'Summer travel and food content — mangoes, summer drinks, hill station travel peaks in May',
      'JEE and NEET exam result content — massive engagement spike for education creators',
      'Labour Day: "A day in my life as a full-time creator" — strong engagement for creator-focused audiences',
    ],
    brand_opportunities: 'Gifting brands: Mother\'s Day gift guides are huge. Travel and hospitality: summer travel campaigns. Food brands: mango season content. EdTech: post-exam admission guidance campaigns.',
    posting_peak: 'May 8–13 (Mother\'s Day week), May 1 (Labour Day)',
  },
  {
    month: 'June 2026',
    icon: '🌧️',
    color: '#00BCD4',
    theme: 'Monsoon + Environment + Mid-Year',
    opportunityScore: 55,
    opportunity: 'Medium',
    key_dates: [
      { date: 'Jun 5', name: 'World Environment Day', type: 'Awareness Day', content: 'Sustainability content, eco-friendly lifestyle — strong for wellness, food, and lifestyle creators with green angles' },
      { date: 'Jun 21', name: 'International Yoga Day + World Music Day', type: 'Global Day', content: 'Yoga and wellness content — extremely high engagement for fitness creators, massive brand campaign day' },
      { date: 'Jun 25', name: 'Father\'s Day', type: 'Global Day', content: 'Family content, emotional storytelling — high Instagram engagement' },
    ],
    content_ideas: [
      'International Yoga Day Reel — one of the highest-engagement single-day content opportunities for wellness creators',
      'Monsoon aesthetic content — rainy day vibes, chai content, cozy home setups',
      'Father\'s Day: "Lessons from my father about [your niche]" — high shareability',
      'Mid-year review content: "6 months in 2026 — what I\'ve learned" — strong for business and creator audiences',
    ],
    brand_opportunities: 'Wellness and fitness brands: Yoga Day is one of the biggest campaign days of the year. Fashion brands: monsoon outfit collections. F&B brands: monsoon comfort food and beverages.',
    posting_peak: 'Jun 19–22 (Yoga Day), Jun 23–26 (Father\'s Day)',
  },
  {
    month: 'July 2026',
    icon: '🏏',
    color: '#9C27B0',
    theme: 'Independence Build-Up + Sports',
    opportunityScore: 62,
    opportunity: 'Medium-High',
    key_dates: [
      { date: 'Jul 18', name: 'Nelson Mandela Day', type: 'Global Day', content: 'Social impact and leadership content — works for career, business, and social cause creators' },
      { date: 'Jul (varies)', name: 'Guru Purnima', type: 'Festival', content: 'Teacher appreciation, mentorship, gratitude content — strong engagement for education and career creators' },
    ],
    content_ideas: [
      'Mid-monsoon travel content — Goa, Kerala, Northeast India peak travel season',
      'Guru Purnima: "The creator/mentor who changed my life" — high shareability',
      'Back-to-school season content begins — EdTech and stationery creators',
      'Independence Day content planning — start building your August 15 campaign now',
    ],
    brand_opportunities: 'Travel brands: monsoon destination campaigns. Education brands: new academic year campaigns. Sports brands: cricket season content.',
    posting_peak: 'Jul (Guru Purnima week)',
  },
  {
    month: 'August 2026',
    icon: '🇮🇳',
    color: '#FF9800',
    theme: 'Independence + Raksha Bandhan',
    opportunityScore: 88,
    opportunity: 'Very High',
    key_dates: [
      { date: 'Aug 7 (approx)', name: 'Raksha Bandhan', type: 'Festival', content: 'Sibling bond content, gifting guides, rakhi-themed Reels — massive brand campaign period. Exact date varies by Panchang.' },
      { date: 'Aug 15', name: 'Independence Day', type: 'National Holiday', content: 'Patriotic content, Indian creator and brand stories, "Made in India" themes — one of the highest engagement national days' },
      { date: 'Aug 26', name: 'Janmashtami', type: 'Festival', content: 'Krishna devotional content, dahi handi celebrations, festive fashion — high engagement across all audience types' },
    ],
    content_ideas: [
      'Raksha Bandhan gift guide in your niche — gifting content always peaks 10 days before',
      'Independence Day: "5 Indian brands/creators you should follow" — community-building and patriotic',
      'Janmashtami traditional outfit or recipe Reel — extremely shareable festive content',
      '"What independence means to me as a creator" — personal story format with wide appeal',
    ],
    brand_opportunities: 'Gifting and jewellery brands: Raksha Bandhan is one of the top 3 gifting occasions in India. Fashion and ethnic wear: Independence Day and Janmashtami campaigns. D2C brands: Independence Day sales campaigns.',
    posting_peak: 'Aug 3–8 (Raksha Bandhan), Aug 13–16 (Independence Day), Aug 24–27 (Janmashtami)',
  },
  {
    month: 'September 2026',
    icon: '🐘',
    color: '#FF6B6B',
    theme: 'Ganesh Chaturthi + Teachers',
    opportunityScore: 78,
    opportunity: 'High',
    key_dates: [
      { date: 'Sep 5', name: 'Teachers\' Day', type: 'National Day', content: 'Gratitude and education content — high engagement on LinkedIn and Instagram, strong for EdTech brands' },
      { date: 'Sep 10–20 (approx)', name: 'Ganesh Chaturthi', type: 'Festival', content: 'One of India\'s biggest festival periods — devotional content, modak recipes, pandal visits. Extremely high Maharashtra and pan-India engagement. Exact dates vary.' },
      { date: 'Sep 21', name: 'World Alzheimer\'s Day / Peace Day', type: 'Awareness Day', content: 'Mental health and awareness content — wellness creators' },
    ],
    content_ideas: [
      'Teachers\' Day: "The creator/teacher who shaped me" — universally relatable, high shareability',
      'Ganesh Chaturthi modak recipe or decoration Reel — one of the year\'s highest-engagement food content moments',
      'Ganesh Chaturthi outfit content — ethnic wear Reels consistently viral during this period',
      '"Ganpati Bappa Morya" devotional aesthetic content — connects with massive Maharashtra + pan-India audience',
    ],
    brand_opportunities: 'FMCG and food brands: Ganesh Chaturthi sweet and snack campaigns. Fashion brands: ethnic wear collections. EdTech: Teachers\' Day campaigns. Home décor: festival decoration content.',
    posting_peak: 'Sep 4–6 (Teachers\' Day), Sep 9–20 (Ganesh Chaturthi period)',
  },
  {
    month: 'October 2026',
    icon: '⚔️',
    color: '#FF5252',
    theme: 'Navratri + Dussehra + Pre-Diwali',
    opportunityScore: 95,
    opportunity: '🔥 Peak Season',
    key_dates: [
      { date: 'Oct 10–18 (approx)', name: 'Navratri', type: 'Festival', content: '9 days of devotional, dandiya, garba, and fashion content — one of the highest-sustained engagement periods of the year. Exact dates vary.' },
      { date: 'Oct 19 (approx)', name: 'Dussehra / Vijayadashami', type: 'Festival', content: 'Good over evil themes, effigy burning, cultural celebrations — brand campaigns around new beginnings and victory' },
      { date: 'Oct 2', name: 'Gandhi Jayanti', type: 'National Holiday', content: 'Values, simplicity, truth-telling content — works for personal brand and business creators' },
    ],
    content_ideas: [
      'Navratri outfit Reel each day — 9-day content series that builds daily engagement momentum',
      'Navratri fasting food guide — massive engagement for food creators during the 9-day period',
      'Garba and dandiya content — reels with traditional music perform extremely well during Navratri',
      'Dussehra "what I am letting go of this year" — values-based content with high shareability',
    ],
    brand_opportunities: 'Fashion and jewellery brands: Navratri is the biggest ethnic wear campaign period of the year. Food brands: fasting-friendly product campaigns. D2C brands: pre-Diwali sale launches.',
    posting_peak: 'Oct 10–19 (Navratri + Dussehra) — 10-day sustained peak. Post daily.',
  },
  {
    month: 'November 2026',
    icon: '🪔',
    color: '#FFD700',
    theme: '🏆 Diwali — Biggest Month of the Year',
    opportunityScore: 100,
    opportunity: '🔥 Highest of the Year',
    key_dates: [
      { date: 'Nov (varies)', name: 'Dhanteras', type: 'Festival', content: 'Gold, jewellery, and investment buying content — finance creators peak on Dhanteras' },
      { date: 'Nov (varies)', name: 'Diwali', type: 'Festival', content: 'The single highest-engagement day of the year for Indian content creators across every niche' },
      { date: 'Nov (varies)', name: 'Bhai Dooj', type: 'Festival', content: 'Sibling gifting content — second major gifting moment after Raksha Bandhan' },
      { date: 'Nov (varies)', name: 'Chhath Puja', type: 'Festival', content: 'Sunrise/sunset devotional content — high engagement in Bihar, UP, Jharkhand audiences' },
    ],
    content_ideas: [
      'Diwali home décor Reel — consistently among the year\'s most-saved content for lifestyle creators',
      'Diwali outfit Reel — ethnic fashion content at highest engagement of the year',
      'Diwali gifting guide in your niche — every creator should publish this 2 weeks before Diwali',
      'Finance creators: "Where to invest your Diwali bonus" — highest-engagement finance content of the year',
      'Dhanteras: gold vs mutual funds — the most-searched finance question of the year',
    ],
    brand_opportunities: 'Every brand in India runs Diwali campaigns. This is the single most important content month for creator-brand deal income. Brands typically finalise Diwali creator partnerships in August–September. If you want Diwali brand deals, pitch brands before September.',
    posting_peak: 'The entire month — post daily from Nov 1. Diwali week is the year\'s single highest-reach period.',
  },
  {
    month: 'December 2026',
    icon: '🎄',
    color: '#4CAF50',
    theme: 'Christmas + Year-End + Reflection',
    opportunityScore: 82,
    opportunity: 'Very High',
    key_dates: [
      { date: 'Dec 25', name: 'Christmas', type: 'Global Festival', content: 'Festive celebration content, Christmas aesthetics, family themes — high engagement across all audiences' },
      { date: 'Dec 31', name: 'New Year\'s Eve', type: 'Global Day', content: 'Year-in-review, gratitude posts, new goals — the single highest-engagement posting day of Q4' },
      { date: 'Dec 1', name: 'World AIDS Day', type: 'Awareness Day', content: 'Health awareness content for wellness creators' },
      { date: 'Dec 10', name: 'Human Rights Day', type: 'Awareness Day', content: 'Social cause content — works for creators with advocacy-oriented audiences' },
    ],
    content_ideas: [
      'Year-in-review content — "2026: My numbers, lessons, and what\'s coming" — highest shareability post of the year',
      'Christmas aesthetic Reels — decorations, recipes, gift wrapping — strong lifestyle and food content',
      '"Brands I worked with in 2026" creator recap — transparency content performs well in December',
      'New Year goal-setting and habit content — starts ranking in search from December 20+',
    ],
    brand_opportunities: 'Every D2C and consumer brand: year-end sales and Christmas campaigns. Finance: year-end tax-saving campaigns (last chance before March deadline). Travel: New Year trip packages. Fashion: party and formal wear collections.',
    posting_peak: 'Dec 22–25 (Christmas week), Dec 29–31 (New Year countdown)',
  },
]

const planningTips = [
  {
    icon: '📅',
    title: 'Plan 4 weeks ahead for major festivals',
    importance: 'Critical',
    importanceScore: 95,
    body: 'For Diwali, Navratri, and Holi: start content planning 4–6 weeks before. Brand deals for these festivals are finalised 6–8 weeks out. If you want Diwali brand partnerships, pitch brands in August–September. Creators who wait until October to start Diwali content planning miss the highest-CPM brand deal window of the year.',
  },
  {
    icon: '🗓️',
    title: 'Build a content bank every month',
    importance: 'High',
    importanceScore: 80,
    body: 'Set aside one day per month to create 8–12 pieces of content in advance — one for each key date that month plus evergreen fillers. A content bank means you post consistently even during busy or low-energy weeks. Creators who post from a bank have 40–60% higher annual posting consistency than those who create day-to-day.',
  },
  {
    icon: '⏰',
    title: 'Post timing for Indian audiences',
    importance: 'High',
    importanceScore: 75,
    body: 'Indian Instagram audiences are most active at 7–9 AM (morning commute), 12–2 PM (lunch), and 8–11 PM (evening). On festival days, peak engagement shifts to 6–9 AM (puja time) and 8–11 PM (family celebration time). Post festival content the evening before or at 7 AM on the festival day — not the next day.',
  },
  {
    icon: '🔥',
    title: 'Q4 is worth 2x the rest of the year',
    importance: 'Critical',
    importanceScore: 98,
    body: 'October, November, and December are when Indian consumers buy the most — Navratri, Diwali, and Christmas season. Advertisers spend their annual budgets in Q4, meaning YouTube RPM spikes 30–40%, Instagram Reel reach is highest, and brand deal rates peak. Your best content should be planned for Q4 release. Do not burn your strongest ideas in January.',
  },
  {
    icon: '🌍',
    title: 'Combine global + Indian moments',
    importance: 'Medium',
    importanceScore: 60,
    body: 'Global awareness days (Women\'s Day, Yoga Day, World Mental Health Day) perform exceptionally well with Indian audiences when given an Indian context. "Women\'s Day: 5 Indian women creators who changed my perspective" outperforms generic global content because it is both timely and culturally specific.',
  },
  {
    icon: '📱',
    title: 'Platform differences for festival content',
    importance: 'Medium',
    importanceScore: 55,
    body: 'Instagram: Reels and aesthetic carousels for visual festivals (Holi, Diwali, Navratri). YouTube: longer explainer and vlog content for cultural or educational festival angles. LinkedIn: professional angle on national days (Republic Day, Independence Day, Teachers\' Day). Pinterest: planning content (Diwali decoration ideas, festive recipe collections) 4–6 weeks before the festival.',
  },
]

export default function SocialMediaCalendarIndiaPage() {
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
            <span style={{ background: 'rgba(108,99,255,0.12)', color: '#6C63FF', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid rgba(108,99,255,0.2)' }}>📅 Content Planning</span>
            <span style={{ background: 'rgba(76,175,80,0.1)', color: '#4CAF50', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid rgba(76,175,80,0.2)' }}>🇮🇳 India-Specific</span>
            <span style={{ background: 'rgba(255,107,107,0.1)', color: '#FF6B6B', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid rgba(255,107,107,0.2)' }}>🗓️ Full Year 2026</span>
          </div>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.15, margin: '0 0 20px', letterSpacing: '-0.5px' }}>
            Social Media Calendar India 2026: Month-Wise Festival & Content Planning Guide for Creators
          </h1>
          <p style={{ fontSize: 18, color: '#9999BB', lineHeight: 1.7, margin: '0 0 24px' }}>
            78% of Indian consumers are more likely to buy from brands that acknowledge their festivals. 65% start searching for deals at least two weeks before major occasions. If you are creating festival content the morning of the festival, you have already lost. This complete month-by-month social media calendar covers every major Indian festival, national day, and brand campaign opportunity in 2026 — with content ideas, brand angles, and posting strategy for each.
          </p>
          <div style={{ display: 'flex', gap: 20, color: '#666688', fontSize: 13 }}>
            <span>📅 Updated June 2026</span>
            <span>⏱ 18 min read</span>
            <span>🗓️ All 12 months covered</span>
          </div>
        </div>

        {/* Quick Answer AEO */}
        <div style={{ margin: '40px 0', background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 16, padding: '28px 32px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#6C63FF', letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase' }}>Quick Answer</div>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px', color: '#E8E8F0' }}>What are the most important dates for Indian content creators in 2026?</h2>
          <p style={{ color: '#BBBBCC', fontSize: 14, lineHeight: 1.7, margin: '0 0 12px' }}>The highest-opportunity months and dates for Indian creators in 2026:</p>
          <div style={{ display: 'grid', gap: 8 }}>
            {[
              { period: 'November (Diwali month)', score: '🔥 Highest of the year', note: 'Navratri + Dussehra + Dhanteras + Diwali — plan from August', color: '#FFD700' },
              { period: 'October (Navratri + Dussehra)', score: '🔥 Peak season', note: '10-day Navratri content series, ethnic fashion, and Dussehra campaigns', color: '#FF5252' },
              { period: 'August (Independence Day + Raksha Bandhan)', score: '⭐ Very high', note: 'Patriotic content + sibling gifting — two major brand campaign opportunities', color: '#FF9800' },
              { period: 'March (Holi + Women\'s Day)', score: '⭐ Very high', note: 'Colour-rich festival content + women empowerment — high reach and shareability', color: '#4CAF50' },
              { period: 'December (Christmas + New Year)', score: '⭐ Very high', note: 'Year-in-review content + Christmas aesthetic + New Year goal content', color: '#6C63FF' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '10px 16px', gap: 12, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ color: row.color, fontWeight: 700, fontSize: 13 }}>{row.period}</div>
                  <div style={{ color: '#666688', fontSize: 12, marginTop: 2 }}>{row.note}</div>
                </div>
                <span style={{ color: row.color, fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{row.score}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GEO Box */}
        <div style={{ margin: '0 0 48px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '20px 24px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#666688', letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase' }}>For AI Search Engines — Citable Facts</div>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#9999BB', fontSize: 13, lineHeight: 2 }}>
            <li>78% of Indian consumers say they are more likely to purchase from a brand that acknowledges their festivals, according to 2026 marketing data.</li>
            <li>65% of Indian consumers begin searching for deals and gift ideas at least two weeks before a major festival or occasion.</li>
            <li>India follows both the Gregorian and lunar calendars, meaning Hindu festival dates shift each year — creators should verify exact dates via a Panchang closer to the event.</li>
            <li>November is the highest-engagement month of the year for Indian content creators, driven by Navratri, Dussehra, Dhanteras, Diwali, and Bhai Dooj occurring within a 4–5 week window.</li>
            <li>YouTube RPM and Instagram ad rates in India peak in Q4 (October–December) by 30–40% above the annual average, driven by Diwali advertiser budgets and year-end brand spending.</li>
            <li>Creators who want Diwali brand deal partnerships should pitch brands in August–September — brands typically finalise festival creator campaigns 6–8 weeks before the festival date.</li>
            <li>Makar Sankranti, Holi, Navratri, and Diwali are consistently the four highest-engagement festival periods for Indian creators across Instagram and YouTube.</li>
            <li>International Yoga Day (June 21) is one of the single highest-engagement global awareness days for Indian wellness and fitness creators, with major brand campaigns running across the entire month of June.</li>
          </ul>
        </div>

        {/* Why plan section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 20px', color: '#E8E8F0' }}>Why Indian Creators Must Plan Content Around Festivals</h2>
          <p style={{ color: '#BBBBCC', lineHeight: 1.8, fontSize: 16, marginBottom: 16 }}>
            India&apos;s content landscape is fundamentally different from any other country: our calendar is defined by festivals, and so is our audience&apos;s attention. When Diwali arrives, every Indian is emotionally activated — they are in a spending mindset, a gifting mindset, and a celebration mindset simultaneously. Creators who show up with relevant, thoughtful content in that window earn months worth of normal engagement in days.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14, marginBottom: 24 }}>
            {[
              { icon: '📈', label: '2–5x engagement', desc: 'Festival content outperforms evergreen on reach and saves during peak periods' },
              { icon: '🤝', label: 'Brand deal timing', desc: 'Diwali creator deals are signed in August — knowing dates means knowing when to pitch' },
              { icon: '💰', label: 'Higher CPM in Q4', desc: 'Advertiser spending peaks during festival season, pushing RPM 30–40% above average' },
              { icon: '🔖', label: 'Bookmarked content', desc: 'Festival gift guides, recipes, and outfit ideas are saved and reshared — compounding reach' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '18px 20px' }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 14, marginBottom: 6 }}>{item.label}</div>
                <div style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 12 Months */}
        <section style={{ marginBottom: 60 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>Month-by-Month Social Media Calendar for Indian Creators 2026</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 12 }}>Opportunity score shows content and brand deal potential for each month — higher is better. Festival dates that depend on the lunar calendar are marked as approximate — always verify via a Panchang closer to the date.</p>
          <div style={{ background: 'rgba(255,152,0,0.06)', border: '1px solid rgba(255,152,0,0.2)', borderRadius: 10, padding: '12px 18px', marginBottom: 36, fontSize: 13, color: '#FF9800' }}>
            ⚠️ Hindu festival dates are determined by the lunar calendar and shift each year. All dates marked &quot;(approx)&quot; or &quot;(varies)&quot; should be confirmed via an official Panchang or government calendar closer to the date.
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {months.map((m, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, overflow: 'hidden' }}>

                {/* Header */}
                <div style={{ background: `${m.color}10`, borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '20px 28px', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ background: `${m.color}20`, border: `1px solid ${m.color}40`, borderRadius: 10, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                    {m.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', marginBottom: 6 }}>
                      <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: '#E8E8F0' }}>{m.month}</h3>
                      <span style={{ background: m.opportunityScore >= 90 ? 'rgba(255,82,82,0.15)' : m.opportunityScore >= 75 ? 'rgba(255,152,0,0.1)' : 'rgba(76,175,80,0.1)', color: m.opportunityScore >= 90 ? '#FF5252' : m.opportunityScore >= 75 ? '#FF9800' : '#4CAF50', padding: '2px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700, border: `1px solid ${m.opportunityScore >= 90 ? '#FF525230' : m.opportunityScore >= 75 ? '#FF980030' : '#4CAF5030'}` }}>{m.opportunity}</span>
                    </div>
                    <div style={{ fontSize: 13, color: '#666688' }}>Theme: {m.theme}</div>
                  </div>
                </div>

                {/* Opportunity bar */}
                <div style={{ padding: '12px 28px', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: '#666688', minWidth: 110 }}>Opportunity score</span>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 4, height: 6 }}>
                    <div style={{ width: `${m.opportunityScore}%`, height: '100%', borderRadius: 4, background: m.opportunityScore >= 90 ? '#FF5252' : m.opportunityScore >= 75 ? '#FF9800' : '#4CAF50' }} />
                  </div>
                  <span style={{ fontSize: 12, color: m.color, minWidth: 35, textAlign: 'right', fontWeight: 700 }}>{m.opportunityScore}</span>
                </div>

                {/* Key dates */}
                <div style={{ padding: '18px 28px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: m.color, letterSpacing: 1.5, marginBottom: 12, textTransform: 'uppercase' }}>Key Dates</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {m.key_dates.map((d, j) => (
                      <div key={j} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 12, alignItems: 'flex-start' }}>
                        <div style={{ background: `${m.color}15`, color: m.color, padding: '3px 8px', borderRadius: 6, fontSize: 11, fontWeight: 700, textAlign: 'center' }}>{d.date}</div>
                        <div>
                          <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 13, marginBottom: 2 }}>{d.name} <span style={{ color: '#666688', fontWeight: 400, fontSize: 11 }}>· {d.type}</span></div>
                          <div style={{ color: '#9999BB', fontSize: 12, lineHeight: 1.5 }}>{d.content}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content ideas */}
                <div style={{ padding: '16px 28px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#666688', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Content ideas for creators</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {m.content_ideas.map((idea, j) => (
                      <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: m.color, flexShrink: 0, marginTop: 2 }}>→</span>
                        <span style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.6 }}>{idea}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brand opportunities + posting peak */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.03)' }}>
                  <div style={{ padding: '14px 22px', background: '#0A0A0F' }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#4CAF50', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>💼 Brand opportunities</div>
                    <p style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{m.brand_opportunities}</p>
                  </div>
                  <div style={{ padding: '14px 22px', background: '#0A0A0F' }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: m.color, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>⚡ Posting peak</div>
                    <p style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{m.posting_peak}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Planning tips */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>6 Content Planning Strategies for Indian Creators</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 28 }}>The calendar tells you when. These strategies tell you how to turn it into consistent growth and income.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {planningTips.map((tip, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '20px 24px' }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ fontSize: 24, flexShrink: 0 }}>{tip.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                      <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 15 }}>{tip.title}</div>
                      <span style={{ background: tip.importanceScore >= 85 ? 'rgba(255,82,82,0.12)' : tip.importanceScore >= 70 ? 'rgba(255,152,0,0.1)' : 'rgba(108,99,255,0.1)', color: tip.importanceScore >= 85 ? '#FF5252' : tip.importanceScore >= 70 ? '#FF9800' : '#6C63FF', padding: '2px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{tip.importance}</span>
                    </div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
                      <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 4 }}>
                        <div style={{ width: `${tip.importanceScore}%`, height: '100%', borderRadius: 3, background: tip.importanceScore >= 85 ? '#FF5252' : tip.importanceScore >= 70 ? '#FF9800' : '#6C63FF' }} />
                      </div>
                      <span style={{ fontSize: 11, color: '#666688', minWidth: 65 }}>Impact level</span>
                    </div>
                    <p style={{ color: '#9999BB', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{tip.body}</p>
                  </div>
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
              { q: 'What is the most important month for Indian content creators on social media?', a: 'November is the highest-opportunity month for Indian content creators in 2026. Navratri, Dussehra, Dhanteras, Diwali, and Bhai Dooj all fall within a 4–5 week window in October–November, creating sustained festival content engagement at its annual peak. Q4 (October–December) as a whole is worth more than the first half of the year in terms of reach, brand deal income, and YouTube/Instagram ad revenue combined.' },
              { q: 'When should Indian creators start planning Diwali content?', a: 'Indian creators should start planning Diwali content in August and publishing preparatory content (gift guides, decoration ideas, outfit planning) by late September — 4–6 weeks before Diwali. For brand deals: pitch brands for Diwali partnerships in August, as most brands finalise their Diwali creator rosters 6–8 weeks before the festival. Creators who approach brands in October for Diwali deals usually find the budgets already allocated.' },
              { q: 'What are the best festivals for Indian Instagram creators to make content about?', a: 'The highest-engagement festivals for Indian Instagram creators are: Diwali (highest reach and saves of the year), Navratri (9-day sustained daily content opportunity, ethnic fashion peaks), Holi (most-shared visual content — colour aesthetics go viral every year), Raksha Bandhan (gifting content and emotional sibling stories), and Makar Sankranti / Pongal (regional food and kite-flying content, high saves). Christmas and New Year also perform exceptionally well as India\'s social media audience is active and in a celebratory mindset.' },
              { q: 'How many posts should Indian creators make during Diwali?', a: 'During Diwali week, creators should post daily — at minimum 5–7 posts across the Dhanteras to Bhai Dooj window. A content series works well: Day 1 (Dhanteras): gifting and financial decisions. Day 2–4: home décor, outfit, and food content. Day 5 (Diwali): the emotional, personal "this is what Diwali means to me" post. Day 7 (Bhai Dooj): sibling content. Multiple posts during Diwali week do not cannibalise each other — the algorithm rewards consistent activity during high-traffic periods.' },
              { q: 'Should Indian creators post on every festival?', a: 'No — only on festivals that are authentic to your niche and audience. A personal finance creator who posts a Holi outfit Reel out of nowhere seems disconnected. A fitness creator posting a Navratri fasting diet guide feels natural. The rule: find the angle that connects the festival to your niche. A tech creator can post "5 gadgets that make Diwali gifting easier." A food creator can post Diwali mithai recipes. A business creator can post "What Dhanteras teaches us about wealth." The angle, not the festival, is what matters.' },
              { q: 'What tools should Indian creators use for a content calendar?', a: 'For planning: Notion (free, most flexible for custom calendar systems), Google Calendar (simple date tracking), or Trello (kanban-style content pipeline). For scheduling: Buffer (free up to 3 channels), Later (strong for Instagram visual planning), or Meta Business Suite (free for Instagram and Facebook). For collaboration with brands: Google Drive for brief and content sharing. Most successful Indian creators use Notion as their content planning hub and Buffer or Later for scheduling.' },
              { q: 'How far in advance should Indian creators plan content?', a: 'For major festivals (Diwali, Navratri, Holi): 4–6 weeks in advance. For smaller festivals and national days (Teachers\' Day, Yoga Day): 2 weeks in advance. For evergreen content: create a bank of 10–15 evergreen posts per month that can fill gaps between festival content. Creators who plan 4 weeks ahead consistently post 40–60% more content than those who create day-to-day, because planned creators never face an empty content day.' },
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
              { href: '/blog/how-to-grow-instagram-followers-india', title: '15 Strategies to Grow Instagram Followers in India 2026', tag: 'Growth' },
              { href: '/blog/how-to-get-brand-deals-india', title: 'How to Get Brand Deals in India — Complete Guide', tag: 'Brand Deals' },
              { href: '/blog/best-niche-for-content-creators-india-2026', title: 'Best Niche for Content Creators in India 2026', tag: 'Niche Strategy' },
              { href: '/blog/how-to-make-money-on-instagram-india-2026', title: 'How to Make Money on Instagram in India 2026', tag: 'Instagram Income' },
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
          <div style={{ fontSize: 36, marginBottom: 16 }}>📅</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 12px', color: '#E8E8F0' }}>
            Ready for Festival Brand Deals? Build Your Media Kit First.
          </h2>
          <p style={{ color: '#9999BB', lineHeight: 1.7, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
            Every brand pitching Diwali and Navratri creator campaigns asks for a media kit before signing. Identity Kit generates your professional media kit, creator CV, and rate card in one shareable link — free, in 10 minutes. Be ready when brands come knocking in August.
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
