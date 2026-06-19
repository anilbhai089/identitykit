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
                    {post.tag === 'Media Kit' ? '📋' : post.tag === 'Rate Card' ? '💰' : post.tag === 'Brand Deals' ? '🤝' : post.tag === 'Creator Career' ? '🚀' : '📄'}
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
