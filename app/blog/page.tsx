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
            <Link href="/tools" className="nav-link">Tools</Link>
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
                    {post.tag === 'Media Kit' ? '📋' : post.tag === 'Rate Card' ? '💰' : post.tag === 'Brand Deals' ? '🤝' : post.tag === 'Creator Career' ? '🚀' : post.tag === 'UGC' ? '🎬' : post.tag === 'Legal' ? '⚖️' : post.tag === 'Analytics' ? '📊' : post.tag === 'Growth' ? '📈' : post.tag === 'Creator Economy' ? '🇮🇳' : post.tag === 'YouTube' ? '▶️' : post.tag === 'Platform' ? '⚔️' : post.tag === 'Finfluencer' ? '💹' : post.tag === 'Personal Branding' ? '✨' : post.tag === 'Student Income' ? '🎓' : post.tag === 'Niche Strategy' ? '🎯' : '📄'}
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
       <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center', color: '#444466', fontSize: 13 }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
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
