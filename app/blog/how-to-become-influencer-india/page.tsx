import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "How to Become an Influencer in India in 2026 (Complete Beginner's Guide)",
  description: 'Step-by-step guide to becoming an influencer in India from zero followers. Pick the right niche, grow on Instagram or YouTube, land your first brand deal, and start earning — even with under 1,000 followers.',
  keywords: 'how to become an influencer in India, become influencer India, how to become influencer on Instagram India, content creator India beginners, how to start influencer career India 2026',
  openGraph: {
    title: "How to Become an Influencer in India in 2026 (Complete Beginner's Guide)",
    description: 'Step-by-step guide to becoming an influencer in India from zero. Pick a niche, grow your audience, land brand deals, and start earning.',
    url: 'https://identitykit.in/blog/how-to-become-influencer-india',
    siteName: 'Identity Kit',
    type: 'article',
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/how-to-become-influencer-india',
  },
}

const steps = [
  {
    num: '01',
    icon: '🎯',
    title: 'Pick a Niche — The Most Important Decision You Will Make',
    content: [
      'Most beginners make the same mistake: they start posting about everything — food one day, travel the next, motivation the day after. This confuses the algorithm and confuses potential followers. Nobody knows what to expect from you, so nobody follows.',
      'Your niche is the specific topic you will own. The tighter it is, the faster you grow. "Fitness" is too broad. "Home workouts for working women in their 30s" is a niche. "Personal finance" is too broad. "Stock market basics explained in Hindi for beginners" is a niche.',
      'Choose something you genuinely know or care about — you will be making content about it for years. Then verify there is an audience for it by searching the topic on Instagram and YouTube. If other creators exist in the niche, that is a good sign, not a bad one. It means brands are already spending there.',
    ],
    highlight: {
      label: '💰 Highest-paying niches in India 2026',
      items: [
        'Finance & Investing — 2x–4x earnings premium vs average',
        'Tech & Gadgets — strong brand budgets, aspirational audience',
        'Beauty & Skincare — high repeat purchases, consistent brand demand',
        'Fitness & Health — growing fast, strong supplement/wellness spend',
        'Food & Recipes — regional and D2C brand interest is surging',
        'Education & Career — massive audience, EdTech brand deals',
      ],
    },
  },
  {
    num: '02',
    icon: '📱',
    title: 'Choose the Right Platform for Your Content Type',
    content: [
      'You do not need to be on every platform. In fact, trying to be everywhere is one of the fastest ways to burn out and grow nowhere. Pick one primary platform and go deep for at least 6 months before expanding.',
      'Instagram is where brand deals happen in India. Even creators who build their primary audience on YouTube or LinkedIn maintain an Instagram presence because brands use it as a credibility check. If you want brand collaborations, Instagram is your home base.',
      'YouTube is ideal if you want to build long-term income through ad revenue plus brand deals. Videos have a much longer shelf life than Reels — a tutorial you post today can still get views 3 years from now. The downside: it takes longer to grow, and production quality matters more.',
    ],
    table: {
      headers: ['Platform', 'Best For', 'Growth Speed', 'Brand Deal Potential'],
      rows: [
        ['Instagram Reels', 'Visual, lifestyle, fashion, food, fitness', 'Fast', '⭐⭐⭐⭐⭐'],
        ['YouTube', 'Education, tech, finance, long-form reviews', 'Slow', '⭐⭐⭐⭐⭐'],
        ['LinkedIn', 'B2B, career, professional development', 'Medium', '⭐⭐⭐⭐'],
        ['Moj / Josh', 'Regional language, Tier 2-3 audiences', 'Very Fast', '⭐⭐⭐'],
        ['Twitter / X', 'Finance, news, opinion, tech commentary', 'Slow', '⭐⭐⭐'],
      ],
    },
  },
  {
    num: '03',
    icon: '🎨',
    title: 'Set Up a Professional Profile That Brands Notice',
    content: [
      'Before you post a single piece of content, your profile needs to communicate clearly: who you are, what you create, and who it is for. Brands spend less than 10 seconds scanning a profile before deciding whether to move forward.',
      'Your profile picture should show your face clearly. A smiling, well-lit photo builds trust instantly. Avoid logos, cartoon avatars, or blurry photos — these signal hobby, not business.',
      'Your bio should answer three questions in two lines: What do you create? Who is it for? Why should someone follow you? Example: "Sharing honest skincare reviews for Indian skin types 🇮🇳 | DM for collabs → identitykit.in/yourname"',
    ],
    checklist: [
      'Clear face profile photo (well-lit, smiling)',
      'Username that is simple, memorable, and searchable',
      'Bio that states your niche + audience + call to action',
      'Link in bio pointing to your Identity Kit profile',
      'Highlights covering: About Me, Collabs, Reviews, FAQ',
      'Consistent visual theme across posts (3–5 brand colours)',
    ],
  },
  {
    num: '04',
    icon: '🎬',
    title: 'Create Content That Actually Gets Views',
    content: [
      'The algorithm in 2026 does not care about your follower count. It cares about watch time, saves, shares, and early engagement. A brand new account can go viral if the content is right. A 500K account can get 200 views if the content is wrong.',
      'For Instagram Reels, the hook — the first 2 seconds — is everything. If you do not stop the scroll in the first 2 seconds, nobody watches the rest. Start with a bold statement, a surprising fact, a question your audience is already asking, or show the most visually interesting part of your video first.',
      'Post consistently. Not perfectly. A creator posting 4 Reels per week with a phone will outgrow a creator posting 1 Reel per week with a professional camera. The algorithm rewards active accounts. In the beginning, volume builds skill faster than perfectionism.',
    ],
    contentFormats: [
      { format: 'How-To / Tutorial', desc: 'Step-by-step content performs consistently in every niche. People save tutorials — saves signal high value to the algorithm.', icon: '📚' },
      { format: 'POV / Storytime', desc: '"POV: brand DM kiya aur maine ek link bheja" — relatable scenarios get instant connection and shares.', icon: '🎭' },
      { format: 'Before vs After', desc: 'Visual transformations in any niche (skincare results, room makeovers, financial progress) drive massive engagement.', icon: '🔄' },
      { format: 'Myth Busting', desc: '"5 things your dermatologist wants you to stop doing" — contrarian takes in your niche generate comments and saves.', icon: '💥' },
      { format: 'Day in My Life', desc: 'Authentic behind-the-scenes content builds personal connection faster than any polished content.', icon: '📅' },
      { format: 'List / Ranking', desc: '"Top 7 apps every Indian creator needs in 2026" — easy to watch, easy to save, easy to share.', icon: '📋' },
    ],
  },
  {
    num: '05',
    icon: '📈',
    title: 'Grow Your Following — What Actually Works in 2026',
    content: [
      'Organic growth in 2026 comes from three things: algorithm signals, community, and collaboration. Buying followers is pointless — brands use audit tools that detect fake followers instantly, and inflated numbers with low engagement will kill your brand deal potential.',
      'Reply to every comment within the first hour of posting. Early engagement tells Instagram your content is valuable, which triggers broader distribution. This one habit can double your reach on every post.',
      'Collaborate with creators your own size. A creator with 3,000 followers collaborating with another creator at 4,000 followers in the same niche is one of the fastest growth tactics available. Reach out to 10 creators per week for collaborations — even 1–2 saying yes per month compounds significantly over time.',
    ],
    growthTactics: [
      { tactic: 'Use trending audio immediately', desc: 'Reels with trending audio get surfaced to non-followers. Add the trending sound within 24 hours of it going viral for maximum reach.' },
      { tactic: 'Engage in your niche\'s comment sections', desc: 'Comment genuinely on posts from bigger creators in your niche daily. Their audience discovers you. Brands have reported finding creators exactly this way.' },
      { tactic: 'Post at peak times', desc: 'For Indian audiences: 7–9am, 12–2pm, and 7–10pm IST consistently outperform other time slots. Test your specific audience with Instagram analytics.' },
      { tactic: 'Share Reels to Stories', desc: 'Every time you post a Reel, immediately share it to your Story. This gives it a second distribution wave from your existing followers.' },
      { tactic: 'Use location tags', desc: 'Location-based posts get discovered by local audiences. If you are a food creator in Mumbai, tagging your location exposes you to local brand scouts.' },
      { tactic: 'Niche hashtags > broad hashtags', desc: '#IndianSkincareTips with 200K posts beats #Skincare with 50M posts. Smaller, specific hashtags give you a fighting chance of appearing on the explore page.' },
    ],
  },
  {
    num: '06',
    icon: '💼',
    title: 'Build Your Creator Profile — Your Most Important Business Asset',
    content: [
      'Before you approach a single brand, you need one thing: a professional creator profile. This is the document (or link) that tells brands everything they need to know about you — your audience, your stats, your past work, and your rates.',
      'Most Indian creators still share outdated PDF media kits that take hours to make in Canva and go stale within weeks. The smarter approach: a live link that updates automatically every time your stats change.',
      'Your creator profile should include your Media Kit (audience demographics, follower stats, engagement rate), your Rate Card (exactly what you charge for each content type), and your Creator CV (your creator journey, milestones, and past brand collaborations). All three together give a brand everything they need to say yes.',
    ],
    profileComponents: [
      { comp: 'Media Kit', desc: 'Follower count per platform, engagement rate, audience demographics (age, gender, top cities), average views per Reel/video.', icon: '📋' },
      { comp: 'Rate Card', desc: 'Your pricing for Instagram Reels, Stories, YouTube videos, carousels, and any other content you offer. Clear pricing = faster deals.', icon: '💰' },
      { comp: 'Creator CV', desc: 'Your niche, content journey, platform milestones, brands you have worked with (even barter collabs count), and your creator skills.', icon: '📄' },
      { comp: 'Portfolio Samples', desc: 'Links to your 3–5 best performing posts. Show brands what a sponsored post from you actually looks like before they ask.', icon: '🎨' },
    ],
  },
  {
    num: '07',
    icon: '🤝',
    title: 'Land Your First Brand Deal — Even with Under 1,000 Followers',
    content: [
      'You do not need 10,000 followers to get your first brand deal. You need a clear niche, an engaged (even small) audience, and the confidence to reach out. Brands — especially small D2C brands, local businesses, and new startups — actively look for micro and nano creators precisely because they are affordable and authentic.',
      'Start with barter collaborations: a brand sends you a free product in exchange for a post or Reel. This builds your portfolio, gives you real brand experience, and creates content you can reference in every future pitch. Even one barter collab makes your profile look significantly more credible.',
      'Once you have 2–3 collaborations (barter or paid), start pitching for paid deals. Use the engagement data from your barter posts as proof of ROI. "My last sponsored Reel for [Brand] got 45K views and 3.2% engagement" is worth more than any follower count.',
    ],
  },
  {
    num: '08',
    icon: '💰',
    title: 'How Much Can You Earn as an Indian Influencer?',
    content: [
      'Indian creator earnings vary massively based on niche, engagement, and how actively you pitch brands. The creators earning ₹2–5 lakh per month are not necessarily those with the biggest audiences — they are the ones who have mastered positioning, diversified their income, and pitch consistently.',
      'Brand deals (sponsored posts) are typically 50–65% of a micro-influencer\'s income. The remaining comes from affiliate marketing (₹500–₹2,000 per signup for demat accounts, 3–10% commission on Amazon), UGC creation for brands (₹2,000–₹10,000 per piece without needing large followers), and digital products.',
      'The most financially successful Indian creators do not depend on one income source. They stack 4–5 revenue streams that compound over time.',
    ],
    earningsTable: {
      headers: ['Follower Tier', 'Instagram Reel Rate', 'Monthly Potential', 'Sweet Spot'],
      rows: [
        ['Nano (1K–10K)', '₹1,000–₹10,000', '₹5,000–₹30,000', 'Local brands, barter + early paid'],
        ['Micro (10K–100K)', '₹8,000–₹75,000', '₹25,000–₹1,50,000', 'D2C brands, niche products'],
        ['Mid-Tier (100K–500K)', '₹50,000–₹3,50,000', '₹1,00,000–₹5,00,000', 'National campaigns'],
        ['Macro (500K–1M)', '₹2,00,000–₹8,50,000', '₹5,00,000–₹20,00,000', 'Large brand launches'],
        ['Mega (1M+)', '₹6,00,000–₹25,00,000+', '₹10,00,000+', 'Celebrity-level deals'],
      ],
    },
  },
]

export default function BlogPost5() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .nav-link:hover { color: #FF6B2B !important; }
        .prose p { color: rgba(255,255,255,0.65); line-height: 1.85; font-size: 16px; margin-bottom: 18px; }
        .prose ul { margin: 0 0 20px 24px; }
        .prose ul li { color: rgba(255,255,255,0.65); line-height: 1.85; font-size: 16px; margin-bottom: 8px; }
        .prose strong { color: #fff; font-weight: 700; }
        .callout { background: rgba(255,107,43,0.06); border: 1px solid rgba(255,107,43,0.2); border-left: 4px solid #FF6B2B; border-radius: 12px; padding: 20px 24px; margin: 28px 0; }
        .callout p { margin: 0; color: rgba(255,255,255,0.75); font-size: 15px; line-height: 1.8; }
        .step-header { display: flex; gap: 20px; align-items: flex-start; margin-bottom: 24px; }
        .step-badge { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 800; color: #FF6B2B; letter-spacing: 1px; }
        .step-icon { width: 52px; height: 52px; min-width: 52px; background: rgba(255,107,43,0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; }
        .step-section { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.07); border-radius: 20px; padding: 32px; margin-bottom: 24px; }
        .step-title { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800; letter-spacing: -0.3px; color: #fff; margin-bottom: 20px; }
        .highlight-box { background: rgba(255,107,43,0.05); border: 1px solid rgba(255,107,43,0.15); border-radius: 14px; padding: 20px 24px; margin-top: 20px; }
        .highlight-label { font-size: 13px; font-weight: 700; color: #FF6B2B; margin-bottom: 12px; }
        .highlight-box ul { margin: 0 0 0 20px; }
        .highlight-box li { color: rgba(255,255,255,0.7); font-size: 14px; margin-bottom: 6px; line-height: 1.7; }
        .data-table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .data-table th { background: rgba(255,107,43,0.08); color: rgba(255,255,255,0.5); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding: 12px 16px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .data-table td { padding: 13px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); color: rgba(255,255,255,0.65); vertical-align: top; line-height: 1.5; }
        .data-table tr:last-child td { border-bottom: none; }
        .table-wrap { overflow-x: auto; border-radius: 14px; border: 1px solid rgba(255,255,255,0.07); margin-top: 20px; }
        .checklist-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 20px; }
        .checklist-item { display: flex; gap: 10px; align-items: flex-start; background: rgba(76,175,80,0.04); border: 1px solid rgba(76,175,80,0.1); border-radius: 10px; padding: 12px 14px; font-size: 14px; color: rgba(255,255,255,0.65); line-height: 1.5; }
        .formats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px; }
        .format-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 16px; }
        .format-icon { font-size: 22px; margin-bottom: 8px; }
        .format-name { font-weight: 700; font-size: 14px; color: #fff; margin-bottom: 6px; }
        .format-desc { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.6; }
        .tactics-list { margin-top: 20px; display: flex; flex-direction: column; gap: 10px; }
        .tactic-row { display: flex; gap: 14px; align-items: flex-start; padding: 14px 16px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; }
        .tactic-dot { width: 8px; height: 8px; min-width: 8px; border-radius: 50%; background: #FF6B2B; margin-top: 6px; }
        .tactic-title { font-weight: 700; font-size: 14px; color: #fff; margin-bottom: 4px; }
        .tactic-desc { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.6; }
        .profile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px; }
        .profile-card { background: rgba(255,107,43,0.04); border: 1px solid rgba(255,107,43,0.12); border-radius: 14px; padding: 18px; }
        .profile-icon { font-size: 24px; margin-bottom: 10px; }
        .profile-name { font-weight: 700; font-size: 15px; color: '#FF6B2B'; color: #FF9A6B; margin-bottom: 6px; }
        .profile-desc { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.7; }
        .tag-pill { background: rgba(255,107,43,0.1); color: #FF6B2B; font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 100px; display: inline-block; }
        .toc { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 24px 28px; margin-bottom: 48px; }
        .toc-title { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 800; margin-bottom: 16px; color: #fff; }
        .toc-item { display: flex; gap: 12px; align-items: center; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 14px; color: rgba(255,255,255,0.55); }
        .toc-item:last-child { border-bottom: none; }
        .toc-num { color: #FF6B2B; font-weight: 800; font-family: 'Syne', sans-serif; font-size: 13px; min-width: 28px; }
        .stat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 40px; }
        .stat-mini { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 20px; text-align: center; }
        .related-card div { transition: border-color 0.2s; }
        .related-card:hover div { border-color: rgba(255,107,43,0.3) !important; }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .checklist-grid { grid-template-columns: 1fr !important; }
          .formats-grid { grid-template-columns: 1fr !important; }
          .profile-grid { grid-template-columns: 1fr !important; }
          .stat-row { grid-template-columns: 1fr 1fr !important; }
          .related-grid { grid-template-columns: 1fr !important; }
          .article-pad { padding: 0 16px 60px !important; }
          .hero-pad { padding: 48px 16px 32px !important; }
          .hero-title { font-size: 28px !important; }
          .step-section { padding: 20px !important; }
        }
      `}</style>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(7,7,13,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
          <Link href="/" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, color: '#FF6B2B', letterSpacing: '-0.5px' }}>Identity Kit</Link>
          <div className="nav-links" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B', fontWeight: 600 }}>Blog</Link>
            <Link href="/about" className="nav-link" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>About</Link>
            <Link href="/contact" className="nav-link" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Contact</Link>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Get Started</Link>
          </div>
          <Link href="/auth" className="mob-btn" style={{ display: 'none', background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '7px 14px', fontSize: 13, fontWeight: 700 }}>Get Started</Link>
          <style>{`@media(max-width:640px){.mob-btn{display:block!important}}`}</style>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '20px 24px 0' }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: 'rgba(255,255,255,0.35)', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.35)' }}>Home</Link>
          <span>/</span>
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.35)' }}>Blog</Link>
          <span>/</span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Become an Influencer in India</span>
        </div>
      </div>

      {/* Hero */}
      <div className="hero-pad" style={{ maxWidth: 820, margin: '0 auto', padding: '40px 24px 40px' }}>
        <div style={{ marginBottom: 16 }}>
          <span className="tag-pill">Creator Career</span>
          <span style={{ marginLeft: 12, color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>15 min read · June 2026</span>
        </div>
        <h1 className="hero-title" style={{ fontFamily: 'Syne, sans-serif', fontSize: 42, fontWeight: 800, lineHeight: 1.1, marginBottom: 20, letterSpacing: '-1.5px' }}>
          How to Become an Influencer in India in 2026
          <span style={{ display: 'block', background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: 6 }}>
            The Complete Beginner&apos;s Guide
          </span>
        </h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 700 }}>
          You do not need a professional camera, a massive budget, or a million followers to start. Here is the exact step-by-step system to go from zero to your first brand deal as an Indian creator in 2026 — backed by real data from India&apos;s creator economy.
        </p>
      </div>

      {/* Stats row */}
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px 40px' }}>
        <div className="stat-row">
          {[
            { val: '₹3,375 Cr', label: 'India influencer market 2026' },
            { val: '50M+', label: 'Active creators in India' },
            { val: '47%', label: 'Brands prefer micro & nano creators' },
            { val: '25% CAGR', label: 'Year-on-year market growth' },
          ].map(s => (
            <div key={s.val} className="stat-mini">
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 22, color: '#FF6B2B', marginBottom: 6 }}>{s.val}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Article */}
      <div className="article-pad prose" style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px 80px' }}>

        {/* TOC */}
        <div className="toc">
          <div className="toc-title">📋 What You Will Learn</div>
          {[
            'Pick the right niche for brand deals and growth',
            'Choose your platform and set up a professional profile',
            'Create content that gets views from day one',
            'Grow your following with tactics that work in 2026',
            'Build your creator profile — your #1 business asset',
            'Land your first brand deal even with under 1,000 followers',
            'How much Indian influencers actually earn by tier',
            'Common mistakes beginners make (and how to avoid them)',
          ].map((item, i) => (
            <div key={item} className="toc-item">
              <span className="toc-num">0{i + 1}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Intro */}
        <p>
          India&apos;s creator economy crossed <strong>₹3,375 crore in 2026</strong> and is growing at 25% every year. There are more than 50 million active content creators in the country — but only 6 lakh of them actually monetize effectively. That gap between &quot;posting content&quot; and &quot;earning from content&quot; is exactly what this guide closes.
        </p>
        <p>
          The good news: <strong>47% of Indian brands now actively prefer working with micro and nano influencers</strong> (under 100K followers) over celebrities, because smaller creators deliver higher engagement and better ROI. This means the opportunity for new creators has never been larger.
        </p>

        <div className="callout">
          <p>💡 <strong>The honest truth:</strong> Becoming a successful influencer in India is not about going viral once. It is about consistently showing up, building trust with a specific audience, and running your content like a business. This guide gives you the system — the rest is up to you.</p>
        </div>

        {/* Steps */}
        {steps.map((step, idx) => (
          <div key={step.num} className="step-section" style={{ marginTop: idx === 0 ? 40 : 24 }}>
            <div className="step-header">
              <div className="step-icon">{step.icon}</div>
              <div>
                <div className="step-badge">STEP {step.num}</div>
                <h2 className="step-title">{step.title}</h2>
              </div>
            </div>

            {step.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {/* Niche highlight */}
            {step.highlight && (
              <div className="highlight-box">
                <div className="highlight-label">{step.highlight.label}</div>
                <ul>
                  {step.highlight.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Platform table */}
            {step.table && (
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>{step.table.headers.map(h => <th key={h}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {step.table.rows.map(row => (
                      <tr key={row[0]}>
                        {row.map((cell, i) => (
                          <td key={i} style={i === 0 ? { fontWeight: 700, color: 'rgba(255,255,255,0.85)' } : {}}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Profile checklist */}
            {step.checklist && (
              <div className="checklist-grid">
                {step.checklist.map(item => (
                  <div key={item} className="checklist-item">
                    <span style={{ color: '#4CAF50', fontSize: 16, marginTop: 1 }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Content formats */}
            {step.contentFormats && (
              <div className="formats-grid">
                {step.contentFormats.map(f => (
                  <div key={f.format} className="format-card">
                    <div className="format-icon">{f.icon}</div>
                    <div className="format-name">{f.format}</div>
                    <div className="format-desc">{f.desc}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Growth tactics */}
            {step.growthTactics && (
              <div className="tactics-list">
                {step.growthTactics.map(t => (
                  <div key={t.tactic} className="tactic-row">
                    <div className="tactic-dot" />
                    <div>
                      <div className="tactic-title">{t.tactic}</div>
                      <div className="tactic-desc">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Creator profile components */}
            {step.profileComponents && (
              <>
                <div className="profile-grid">
                  {step.profileComponents.map(p => (
                    <div key={p.comp} className="profile-card">
                      <div className="profile-icon">{p.icon}</div>
                      <div className="profile-name">{p.comp}</div>
                      <div className="profile-desc">{p.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="callout" style={{ marginTop: 20 }}>
                  <p>🚀 <strong>Identity Kit builds all three automatically</strong> — Media Kit, Rate Card, and Creator CV — in one free professional link. Set it up at <Link href="/auth" style={{ color: '#FF6B2B', fontWeight: 600 }}>identitykit.in</Link> before you send your first brand pitch.</p>
                </div>
              </>
            )}

            {/* Earnings table */}
            {step.earningsTable && (
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>{step.earningsTable.headers.map(h => <th key={h}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {step.earningsTable.rows.map(row => (
                      <tr key={row[0]}>
                        {row.map((cell, i) => (
                          <td key={i} style={i === 0 ? { fontWeight: 700, color: '#FF9A6B' } : i === 2 ? { color: '#4CAF50', fontWeight: 600 } : {}}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}

        {/* Mistakes section */}
        <div className="step-section" style={{ marginTop: 24 }}>
          <div className="step-header">
            <div className="step-icon">⚠️</div>
            <div>
              <div className="step-badge">BONUS</div>
              <h2 className="step-title">8 Mistakes Beginners Make (That Kill Their Growth)</h2>
            </div>
          </div>
          {[
            { mistake: 'Copying other creators exactly', fix: 'Inspiration is fine. Copying kills your identity. Take the format, not the content. Your unique perspective is your only real competitive advantage.' },
            { mistake: 'Chasing every trend, ignoring their niche', fix: 'Trending audio = yes. Trending content outside your niche = no. Consistency in niche beats chasing trends every time for long-term algorithmic growth.' },
            { mistake: 'Quitting after 30 days', fix: 'Most creators who build to 10K followers started seeing real traction between months 6–12. The first 50 posts are practice. Post them anyway.' },
            { mistake: 'Buying followers', fix: 'Brands use audit tools. A 10K account with 500 real followers gets rejected immediately. Fake followers permanently damage your engagement rate.' },
            { mistake: 'No link in bio', fix: 'Every post you make can drive someone to your bio. If there is no link, that traffic disappears. Your Identity Kit link in bio = passive lead generation 24/7.' },
            { mistake: 'Waiting until they feel "ready"', fix: 'Your first 20 posts will not be great. That is normal. The skill of content creation is built by doing it, not by planning it.' },
            { mistake: 'Ignoring engagement', fix: 'Creators who reply to every comment in the first hour see 2x higher reach on average. Engagement is not a vanity metric — it is an algorithmic signal.' },
            { mistake: 'No media kit when pitching brands', fix: 'A brand that has to ask you for your stats has already lost interest. Always include your Identity Kit link in every pitch email and DM.' },
          ].map(item => (
            <div key={item.mistake} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ color: '#FF4F4F', fontSize: 16, marginTop: 2 }}>✗</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'rgba(255,255,255,0.85)', marginBottom: 5 }}>{item.mistake}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}><span style={{ color: '#4CAF50', fontWeight: 700 }}>Fix: </span>{item.fix}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Final summary */}
        <div style={{ marginTop: 40 }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 26, fontWeight: 800, marginBottom: 16, letterSpacing: '-0.5px' }}>Where to Start — Right Now</h2>
          <p>
            The Indian creator economy is the fastest-growing in Asia. <strong>3 out of 5 Indian consumers trust influencer recommendations over brand advertising</strong>. Brands know this — and they are actively increasing their creator budgets year on year.
          </p>
          <p>
            The gap is not in the opportunity. The gap is in creators who treat their content like a business versus those who treat it like a hobby. The ones who win are the ones who show up consistently, know their niche, engage their audience, and pitch brands professionally.
          </p>
          <p>
            You now have the complete system. The only thing left to do is start.
          </p>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 48, background: 'linear-gradient(135deg, rgba(255,107,43,0.1), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 24, padding: '48px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(255,107,43,0.12), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ fontSize: 48, marginBottom: 20 }}>🚀</div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 28, fontWeight: 800, marginBottom: 14, letterSpacing: '-0.5px' }}>Your First Step: Build Your Creator Profile</h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16, lineHeight: 1.7, maxWidth: 480, margin: '0 auto 32px' }}>
            Every brand deal starts with one question: &quot;Can you send me your media kit?&quot; Identity Kit gives you a professional Media Kit, Rate Card and Creator CV in one free link — ready in 10 minutes.
          </p>
          <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 14, padding: '16px 44px', fontWeight: 800, fontSize: 17, letterSpacing: '-0.3px' }}>
            Create my free creator profile →
          </Link>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', marginTop: 16 }}>Free forever. No credit card. Takes 10 minutes.</p>
        </div>

        {/* Related */}
        <div style={{ marginTop: 60 }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 20, fontWeight: 800, marginBottom: 20 }}>Read Next</h3>
          <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[
              { href: '/blog/how-to-pitch-brands-indian-influencer', tag: 'Brand Deals', title: 'How to Pitch Brands as an Indian Influencer in 2026' },
              { href: '/blog/influencer-rate-card-india', tag: 'Rate Card', title: 'How Much Should Indian Creators Charge Brands in 2026?' },
              { href: '/blog/how-to-make-media-kit-india', tag: 'Media Kit', title: 'How to Make a Media Kit for Indian Creators in 2026 (Free)' },
              { href: '/blog/what-is-creator-cv-india', tag: 'Creator CV', title: 'What is a Creator CV and Why Every Indian Influencer Needs One' },
            ].map(r => (
              <Link key={r.href} href={r.href} className="related-card">
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 18 }}>
                  <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 100, display: 'inline-block', marginBottom: 10 }}>{r.tag}</span>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.5, margin: 0, fontWeight: 600 }}>{r.title}</p>
                </div>
              </Link>
            ))}
          </div>
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
