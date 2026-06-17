import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Make a Media Kit for Indian Creators in 2026 (Free + No Canva Needed)',
  description: 'Step-by-step guide to creating a professional media kit for Indian influencers. No Canva, no PDF, no design skills needed. Free tool included.',
  keywords: 'media kit for Indian creators, influencer media kit India, free media kit India, how to make media kit India 2026',
  openGraph: {
    title: 'How to Make a Media Kit for Indian Creators in 2026 (Free + No Canva Needed)',
    description: 'Step-by-step guide to creating a professional media kit for Indian influencers. Free, takes 10 minutes.',
    url: 'https://identitykit.in/blog/how-to-make-media-kit-india',
    siteName: 'Identity Kit',
    type: 'article',
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/how-to-make-media-kit-india',
  },
}

export default function BlogPost1() {
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
        .step-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 24px; margin-bottom: 16px; display: flex; gap: 20px; align-items: flex-start; }
        .step-num { width: 40px; height: 40px; min-width: 40px; border-radius: 12px; background: rgba(255,107,43,0.12); color: #FF6B2B; font-family: 'Syne', sans-serif; font-weight: 800; font-size: 18px; display: flex; align-items: center; justify-content: center; }
        .comparison-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 32px 0; }
        .tag-pill { background: rgba(255,107,43,0.1); color: #FF6B2B; font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 100px; display: inline-block; }
        .related-card div { transition: border-color 0.2s; }
        .related-card:hover div { border-color: rgba(255,107,43,0.3) !important; }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .prose h2 { font-size: 22px !important; }
          .comparison-grid { grid-template-columns: 1fr !important; }
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
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Media Kit Guide</span>
        </div>
      </div>

      {/* Hero */}
      <div className="hero-pad" style={{ maxWidth: 780, margin: '0 auto', padding: '40px 24px 48px' }}>
        <div style={{ marginBottom: 16 }}>
          <span className="tag-pill">Media Kit</span>
          <span style={{ marginLeft: 12, color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>6 min read · June 2026</span>
        </div>
        <h1 className="hero-title" style={{ fontFamily: 'Syne, sans-serif', fontSize: 38, fontWeight: 800, lineHeight: 1.15, marginBottom: 20, letterSpacing: '-1px' }}>
          How to Make a Media Kit for Indian Creators in 2026
          <span style={{ display: 'block', background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Free + No Canva Needed</span>
        </h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
          Tired of making media kits in Canva every time a brand asks? Here&apos;s how Indian creators can build a professional, always-updated media kit in 10 minutes — completely free.
        </p>
      </div>

      {/* Visual banner */}
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px 48px' }}>
        <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', background: 'linear-gradient(135deg, rgba(255,107,43,0.1), rgba(255,107,43,0.03))', padding: '48px 32px', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(255,107,43,0.12), transparent 60%)' }} />
          <div style={{ fontSize: 72, marginBottom: 20 }}>📋</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            {['Media Kit', 'Rate Card', 'Creator CV', 'One Link'].map(item => (
              <span key={item} style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', color: '#FF6B2B', fontSize: 13, fontWeight: 600, padding: '6px 14px', borderRadius: 100 }}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Article */}
      <div className="article-pad prose" style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px 80px' }}>

        <h2>What is a Media Kit?</h2>
        <p>
          A media kit is a document you send to brands when they ask about working with you. Think of it as your professional introduction — it tells brands who you are, how many people follow you, what your audience looks like, and how much you charge.
        </p>
        <p>
          In India, most creators still make their media kit in Canva, save it as a PDF, and send it via WhatsApp or email every time a brand reaches out. The problem? It gets outdated fast. Your followers change, your rates change, your past work changes — and that PDF just sits there with old information.
        </p>

        <div className="callout">
          <p>💡 <strong>The smarter way:</strong> A live media kit link that updates automatically. When your follower count goes up, the link updates. When you add new brand collabs, they show instantly. No redesigning, no resending.</p>
        </div>

        <h2>What Should a Media Kit Include?</h2>
        <p>A strong media kit for Indian creators should have all of these:</p>

        {[
          { icon: '👤', title: 'Your Profile & Bio', desc: 'A short, professional bio that tells brands who you are, your niche, and why you create. AI-generated bios are now a thing — and they actually sound better than what most creators write themselves.' },
          { icon: '📊', title: 'Social Media Stats', desc: 'Follower count across platforms, engagement rate, average views per Reel/video, and monthly reach. Brands care more about engagement than raw followers.' },
          { icon: '👥', title: 'Audience Demographics', desc: 'Age group, gender split, top cities. If 70% of your audience is from Tier 1 cities, that is a selling point for premium brands.' },
          { icon: '💼', title: 'Past Brand Collaborations', desc: 'Logos of brands you have worked with. Even one or two real collaborations builds instant credibility.' },
          { icon: '💰', title: 'Rate Card', desc: 'Your pricing for Instagram Reels, Stories, YouTube videos, and any other deliverables. Brands will not take you seriously without clear rates.' },
          { icon: '📁', title: 'Portfolio / Content Samples', desc: 'Links or screenshots of your best work. Show brands what a sponsored post from you actually looks like.' },
          { icon: '📞', title: 'Contact Information', desc: 'Email and Instagram handle. Keep it simple — do not make brands hunt for how to reach you.' },
        ].map(item => (
          <div key={item.title} className="step-card">
            <div className="step-num" style={{ fontSize: 22 }}>{item.icon}</div>
            <div>
              <h3 style={{ margin: '0 0 8px', fontSize: 17 }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: 15 }}>{item.desc}</p>
            </div>
          </div>
        ))}

        <h2>The Old Way vs The Smart Way</h2>
        <div className="comparison-grid">
          <div style={{ background: 'rgba(255,68,68,0.04)', border: '1px solid rgba(255,68,68,0.15)', borderRadius: 16, padding: 24 }}>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 16, fontWeight: 600 }}>❌ Old Way (Canva PDF)</div>
            {['Takes 2–3 hours to design', 'Gets outdated in weeks', 'Different version for every brand', 'Brands cannot click anything', 'You have to redesign every time', 'Looks like everyone else\'s kit'].map(x => (
              <div key={x} style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>— {x}</div>
            ))}
          </div>
          <div style={{ background: 'rgba(76,175,80,0.04)', border: '1px solid rgba(76,175,80,0.15)', borderRadius: 16, padding: 24 }}>
            <div style={{ fontSize: 13, color: '#4CAF50', marginBottom: 16, fontWeight: 600 }}>✅ Smart Way (Identity Kit)</div>
            {['Ready in 10 minutes', 'Updates automatically', 'One link works every time', 'Brands can click and explore', 'No redesigning ever needed', 'Professional look built in'].map(x => (
              <div key={x} style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>✓ {x}</div>
            ))}
          </div>
        </div>

        <h2>How to Make Your Media Kit in 10 Minutes (Step by Step)</h2>
        <p>Here is the exact process to create a professional media kit for free using Identity Kit:</p>

        {[
          { step: '1', title: 'Go to identitykit.in and sign up', desc: 'Free to create. No credit card needed. Takes under a minute to register.' },
          { step: '2', title: 'Fill in your creator details', desc: 'Your name, niche, social media handles, follower counts, and a few lines about yourself. The AI will write your professional bio for you.' },
          { step: '3', title: 'Add your rates', desc: 'Set your pricing for Instagram Reels, Stories, YouTube videos, and any other content types. This becomes your Rate Card automatically.' },
          { step: '4', title: 'Upload past brand work', desc: 'Add logos of brands you have worked with and links to your best sponsored content.' },
          { step: '5', title: 'Get your shareable link', desc: 'You get a link like identitykit.in/yourname — share this with every brand, every time. Forever. Free.' },
        ].map(item => (
          <div key={item.step} className="step-card">
            <div className="step-num">{item.step}</div>
            <div>
              <h3 style={{ margin: '0 0 6px', fontSize: 16 }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: 15 }}>{item.desc}</p>
            </div>
          </div>
        ))}

        <h2>Common Media Kit Mistakes Indian Creators Make</h2>
        <ul>
          <li><strong>Using fake or inflated stats</strong> — Brands verify numbers. Getting caught ruins your reputation permanently.</li>
          <li><strong>No rate card</strong> — If brands have to ask for your rates, half of them will not bother.</li>
          <li><strong>Outdated information</strong> — A media kit with last year&apos;s follower count immediately signals you are not serious.</li>
          <li><strong>Too long</strong> — Brands spend less than 60 seconds on a media kit. Keep it clean and scannable.</li>
          <li><strong>No contact info</strong> — Sounds obvious, but many creators forget to include how to actually reach them.</li>
          <li><strong>Only showing Instagram</strong> — If you are active on YouTube, Moj, Josh, or LinkedIn, include those stats too.</li>
        </ul>

        <h2>Why Indian Creators Specifically Need a Good Media Kit</h2>
        <p>
          India&apos;s influencer marketing industry crossed ₹3,600 crore in 2025-26 and is growing fast. Brands — especially D2C brands — are actively looking for creators to partner with. The difference between getting a deal and getting ignored often comes down to one thing: how professional you look in the first 60 seconds.
        </p>
        <p>
          A polished media kit signals to brands that you take your work seriously. It also saves time for both sides — no back and forth asking for your stats, rates, and portfolio separately.
        </p>

        <div className="callout">
          <p>📌 <strong>Quick tip:</strong> Add your Identity Kit link directly in your Instagram bio so brands who discover you organically can access your complete profile immediately — without even sending you a DM first.</p>
        </div>

        <h2>Final Thoughts</h2>
        <p>
          Making a media kit does not have to take hours. You do not need Canva, design skills, or a paid tool. Identity Kit generates your complete media kit, rate card and creator CV in one professional link — free, in 10 minutes.
        </p>
        <p>
          Every brand deal starts with the same question: &quot;Can you send me your media kit?&quot; Now you will always have the best answer ready.
        </p>

        {/* CTA Box */}
        <div style={{ marginTop: 48, background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 20, padding: '40px 32px', textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🚀</div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Create Your Free Media Kit Now</h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 28, fontSize: 15, lineHeight: 1.7 }}>
            Media Kit, Rate Card and Creator CV — one free link, ready in 10 minutes. No Canva, no design skills, no credit card.
          </p>
          <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 12, padding: '14px 36px', fontWeight: 700, fontSize: 16 }}>
            Build my media kit free →
          </Link>
        </div>

        {/* Related posts */}
        <div style={{ marginTop: 60 }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 20, fontWeight: 800, marginBottom: 20 }}>Read Next</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { href: '/blog/influencer-rate-card-india', tag: 'Rate Card', title: 'How Much Should Indian Creators Charge Brands in 2026?' },
              { href: '/blog/what-is-creator-cv-india', tag: 'Creator CV', title: 'What is a Creator CV and Why Every Indian Influencer Needs One' },
            ].map(r => (
              <Link key={r.href} href={r.href} className="related-card">
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
