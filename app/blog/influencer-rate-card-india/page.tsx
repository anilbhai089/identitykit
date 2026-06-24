import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Should Indian Creators Charge Brands in 2026? Complete Rate Card Guide',
  description: 'Exact INR rates for Indian influencers in 2026 — Instagram Reels, Stories, YouTube, and more. Nano to mega creator pricing by niche. Stop undercharging.',
  keywords: 'influencer rate card India 2026, how much to charge brands India, Instagram creator rates India, influencer pricing India',
  openGraph: {
    title: 'How Much Should Indian Creators Charge Brands in 2026? Complete Rate Card Guide',
    description: 'Exact INR rates for Indian influencers — nano to mega. Stop guessing what to charge brands.',
    url: 'https://identitykit.in/blog/influencer-rate-card-india',
    siteName: 'Identity Kit',
    type: 'article',
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/influencer-rate-card-india',
  },
}

const rateData = [
  { tier: 'Nano', followers: '1K – 10K', reel: '₹1,000 – ₹10,000', story: '₹400 – ₹4,000', youtube: '₹2,000 – ₹15,000', color: '#8B9CF4' },
  { tier: 'Micro', followers: '10K – 100K', reel: '₹8,000 – ₹75,000', story: '₹3,000 – ₹25,000', youtube: '₹15,000 – ₹1,00,000', color: '#4CAF50' },
  { tier: 'Mid-Tier', followers: '100K – 500K', reel: '₹50,000 – ₹3,50,000', story: '₹15,000 – ₹80,000', youtube: '₹80,000 – ₹5,00,000', color: '#FF6B2B' },
  { tier: 'Macro', followers: '500K – 1M', reel: '₹2,00,000 – ₹8,50,000', story: '₹60,000 – ₹2,00,000', youtube: '₹3,00,000 – ₹12,00,000', color: '#FFD700' },
  { tier: 'Mega', followers: '1M+', reel: '₹6,00,000 – ₹25,00,000+', story: '₹1,50,000 – ₹5,00,000', youtube: '₹10,00,000 – ₹50,00,000+', color: '#FF4F9A' },
]

export default function BlogPost2() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .nav-link { font-size: 14px; color: rgba(255,255,255,0.5); white-space: nowrap; }
        .nav-link:hover { color: #FF6B2B !important; }
        .prose h2 { font-family: 'Syne', sans-serif; font-size: 26px; font-weight: 800; margin: 48px 0 16px; letter-spacing: -0.5px; color: #fff; }
        .prose h3 { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 700; margin: 32px 0 12px; color: #fff; }
        .prose p { color: rgba(255,255,255,0.65); line-height: 1.85; font-size: 16px; margin-bottom: 20px; }
        .prose ul { margin: 0 0 20px 20px; }
        .prose ul li { color: rgba(255,255,255,0.65); line-height: 1.85; font-size: 16px; margin-bottom: 8px; }
        .prose strong { color: #fff; font-weight: 700; }
        .callout { background: rgba(255,107,43,0.06); border: 1px solid rgba(255,107,43,0.2); border-left: 3px solid #FF6B2B; border-radius: 12px; padding: 20px 24px; margin: 32px 0; }
        .callout p { margin: 0; color: rgba(255,255,255,0.75); }
        .rate-table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 14px; }
        .rate-table th { background: rgba(255,107,43,0.08); color: rgba(255,255,255,0.6); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding: 12px 16px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .rate-table td { padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); color: rgba(255,255,255,0.7); vertical-align: top; }
        .rate-table tr:last-child td { border-bottom: none; }
        .niche-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 20px; }
        .niche-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 24px 0; }
        .tag-pill { background: rgba(255,107,43,0.1); color: #FF6B2B; font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 100px; display: inline-block; }
        .table-wrap { overflow-x: auto; border-radius: 16px; border: 1px solid rgba(255,255,255,0.07); margin: 24px 0; }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .prose h2 { font-size: 22px !important; }
          .niche-grid { grid-template-columns: 1fr 1fr !important; }
          .article-pad { padding: 0 16px 60px !important; }
          .hero-pad { padding: 48px 16px 32px !important; }
          .hero-title { font-size: 26px !important; }
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

      {/* Breadcrumb */}
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '20px 24px 0' }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.35)' }}>Home</Link>
          <span>/</span>
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.35)' }}>Blog</Link>
          <span>/</span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Rate Card Guide</span>
        </div>
      </div>

      {/* Hero */}
      <div className="hero-pad" style={{ maxWidth: 780, margin: '0 auto', padding: '40px 24px 48px' }}>
        <div style={{ marginBottom: 16 }}>
          <span className="tag-pill">Rate Card</span>
          <span style={{ marginLeft: 12, color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>8 min read · June 2026</span>
        </div>
        <h1 className="hero-title" style={{ fontFamily: 'Syne, sans-serif', fontSize: 38, fontWeight: 800, lineHeight: 1.15, marginBottom: 20, letterSpacing: '-1px' }}>
          How Much Should Indian Creators Charge Brands in 2026?
          <span style={{ display: 'block', background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Complete Rate Card Guide</span>
        </h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
          From nano to mega — exact INR rates for Instagram Reels, Stories, YouTube videos, and more. Stop undercharging brands and stop losing deals by overcharging.
        </p>
      </div>

      {/* Visual banner */}
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px 48px' }}>
        <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', background: 'linear-gradient(135deg, rgba(255,107,43,0.1), rgba(255,107,43,0.03))', padding: '40px 32px', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 20%, rgba(255,107,43,0.15), transparent 60%)' }} />
          <div style={{ textAlign: 'center', marginBottom: 28, fontSize: 60 }}>💰</div>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 16 }}>
            {[
              { label: 'Nano Creator Reel', value: 'from ₹1,000' },
              { label: 'Micro Creator Reel', value: 'from ₹8,000' },
              { label: 'Mid-Tier Reel', value: 'from ₹50,000' },
              { label: 'Mega Creator Reel', value: 'from ₹6,00,000' },
            ].map(item => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20, color: '#FF6B2B' }}>{item.value}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Article */}
      <div className="article-pad prose" style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px 80px' }}>

        <h2>Why Most Indian Creators Get Their Rates Wrong</h2>
        <p>
          Most creators either undercharge — saying yes to ₹2,000 for a Reel that deserves ₹20,000 — or quote rates so high that brands never reply. Both problems come from the same place: nobody talks about pricing openly in India.
        </p>
        <p>
          Influencer marketing in India crossed ₹3,600 crore in 2025-26 and is projected to hit ₹5,500 crore by end of 2026. Brands have real budgets. The creators who get the best deals are the ones who come with clear, professional rates — not the ones who say &quot;DM for pricing.&quot;
        </p>

        <div className="callout">
          <p>💡 <strong>Key insight:</strong> Brands care more about engagement rate than follower count. A creator with 30K followers and 8% engagement can charge more than one with 100K followers and 1.2% engagement.</p>
        </div>

        <h2>Instagram Rate Card for Indian Creators 2026</h2>
        <p>These are benchmark ranges based on current market data. Your actual rate depends on niche, engagement rate, and content quality.</p>

        <div className="table-wrap">
          <table className="rate-table">
            <thead>
              <tr>
                <th>Tier</th>
                <th>Followers</th>
                <th>Instagram Reel</th>
                <th>Instagram Story</th>
                <th>YouTube Video</th>
              </tr>
            </thead>
            <tbody>
              {rateData.map(row => (
                <tr key={row.tier}>
                  <td>
                    <span style={{ fontWeight: 700, color: row.color }}>{row.tier}</span>
                  </td>
                  <td style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{row.followers}</td>
                  <td style={{ fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{row.reel}</td>
                  <td style={{ color: 'rgba(255,255,255,0.65)' }}>{row.story}</td>
                  <td style={{ color: 'rgba(255,255,255,0.65)' }}>{row.youtube}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: -8 }}>
          * These are market benchmark ranges. Final rates vary by niche, engagement rate, and deliverable type.
        </p>

        <h2>How Niche Affects Your Rate (Big Difference)</h2>
        <p>
          Not all creators with the same follower count should charge the same. Your niche has a huge impact on what brands will pay.
        </p>

        <div className="niche-grid">
          {[
            { niche: 'Finance / Investing', multiplier: '2x – 4x', desc: 'Highest paying niche in India. High-intent audience with strong purchasing power.' },
            { niche: 'Tech & Gadgets', multiplier: '1.5x – 2.5x', desc: 'Strong brand spend. Aspirational buyers with clear purchase intent.' },
            { niche: 'Beauty & Skincare', multiplier: '1.2x – 2x', desc: 'High repeat purchase frequency means brands pay well for authentic reviews.' },
            { niche: 'Fitness & Health', multiplier: '1x – 1.8x', desc: 'Growing rapidly. Supplement and wellness brands have good budgets.' },
            { niche: 'Lifestyle', multiplier: '0.8x – 1.2x', desc: 'Entertainment-driven audience. Brands pay less per impression due to lower conversion rates.' },
            { niche: 'Food', multiplier: '0.9x – 1.5x', desc: 'Regional brands and restaurant chains are investing heavily here.' },
          ].map(item => (
            <div key={item.niche} className="niche-card">
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6, color: '#fff' }}>{item.niche}</div>
              <div style={{ color: '#FF6B2B', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, marginBottom: 8 }}>{item.multiplier}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <p>The multiplier is relative to the base lifestyle rate. So a micro finance creator with 50K followers can charge 2–4x more than a lifestyle creator with the same audience size.</p>

        <h2>The Formula Brands Actually Use to Evaluate Your Rate</h2>
        <p>
          Most brands and agencies use Cost Per View (CPV) to decide if your rate is fair. Here is how it works:
        </p>

        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 28, margin: '24px 0', fontFamily: 'monospace' }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginBottom: 12 }}>Formula</div>
          <div style={{ color: '#FF6B2B', fontSize: 20, fontWeight: 700, marginBottom: 20 }}>CPV = Your Rate ÷ Average Views</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.8 }}>
            Example: You charge ₹40,000 for a Reel<br />
            Your average Reel gets 2,00,000 views<br />
            CPV = ₹40,000 ÷ 2,00,000 = <span style={{ color: '#4CAF50', fontWeight: 700 }}>₹0.20 per view ✓ Fair</span>
          </div>
        </div>

        <p>
          A good CPV benchmark in India is ₹0.10 – ₹0.50 per view depending on niche. If your CPV is too high, brands will negotiate or pass. If it is too low, you are leaving money on the table.
        </p>

        <h2>7 Factors That Should Increase Your Rate</h2>
        <ul>
          <li><strong>Engagement rate above 5%</strong> — Highly engaged audiences convert better for brands</li>
          <li><strong>Tier 1 city audience (Mumbai, Delhi, Bangalore)</strong> — Higher spending power = more valuable for brands</li>
          <li><strong>Proven past brand ROI</strong> — If you can show a brand their product sold well, charge more next time</li>
          <li><strong>Exclusivity clause</strong> — If they want you to not post for competitors, that costs extra (25–50% premium)</li>
          <li><strong>Usage rights</strong> — If they want to use your content in ads or on their own channels, charge more</li>
          <li><strong>Rush turnaround</strong> — Less than 72 hours? Add 20–30%</li>
          <li><strong>Finance, tech, or high-margin niche</strong> — These verticals have higher budgets by default</li>
        </ul>

        <h2>What to Include in Your Rate Card</h2>
        <p>A professional rate card should clearly list:</p>
        <ul>
          <li>Price per Instagram Reel (with and without voiceover)</li>
          <li>Price per Instagram Story (per slide / per set of 3)</li>
          <li>Price per Instagram Carousel post</li>
          <li>Price per YouTube dedicated video vs integrated mention</li>
          <li>Price for LinkedIn posts (if applicable)</li>
          <li>Usage rights fee (if they want to run your content as an ad)</li>
          <li>Exclusivity fee (if they want category exclusivity)</li>
          <li>Revision policy (how many rounds of edits are included)</li>
        </ul>

        <div className="callout">
          <p>📌 <strong>Important:</strong> If you are GST registered, add 18% GST on top of your rates. A Reel for ₹20,000 becomes ₹23,600 with GST. Be upfront about this with brands from the start.</p>
        </div>

        <h2>How to Send Your Rate Card Professionally</h2>
        <p>
          The worst way to share your rates is by typing them out in a DM every time a brand asks. It looks unprofessional and inconsistent.
        </p>
        <p>
          The best way is a shareable rate card link that is always up to date. When your rates change, the link updates automatically. Brands can see exactly what you charge, in a format that looks professional.
        </p>

        {/* CTA Box */}
        <div style={{ marginTop: 48, background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 20, padding: '40px 32px', textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>💰</div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Add Your Rate Card to Identity Kit — Free</h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 28, fontSize: 15, lineHeight: 1.7 }}>
            Set your rates once. Share your Identity Kit link with every brand. Your Rate Card, Media Kit and Creator CV — all in one professional link.
          </p>
          <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 12, padding: '14px 36px', fontWeight: 700, fontSize: 16 }}>
            Create my rate card free →
          </Link>
        </div>

        {/* Related posts */}
        <div style={{ marginTop: 60 }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 20, fontWeight: 800, marginBottom: 20 }}>Read Next</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { href: '/blog/how-to-make-media-kit-india', tag: 'Media Kit', title: 'How to Make a Media Kit for Indian Creators in 2026 (Free)' },
              { href: '/blog/what-is-creator-cv-india', tag: 'Creator CV', title: 'What is a Creator CV and Why Every Indian Influencer Needs One' },
            ].map(r => (
              <Link key={r.href} href={r.href}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 20 }}>
                  <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 100, display: 'inline-block', marginBottom: 10 }}>{r.tag}</span>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.5, margin: 0, fontWeight: 600 }}>{r.title}</p>
                </div>
              </Link>
            ))}
          </div>
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
