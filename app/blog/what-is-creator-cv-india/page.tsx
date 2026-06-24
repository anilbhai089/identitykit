import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What is a Creator CV and Why Every Indian Influencer Needs One in 2026',
  description: 'A Creator CV is not a regular resume. Learn what it includes, why brands love it, and how Indian influencers can create one for free in minutes.',
  keywords: 'creator CV India, influencer CV, content creator resume India, what is creator CV, creator portfolio India',
  openGraph: {
    title: 'What is a Creator CV and Why Every Indian Influencer Needs One in 2026',
    description: 'A Creator CV is different from a regular resume. Here\'s what it includes and how to make one free.',
    url: 'https://identitykit.in/blog/what-is-creator-cv-india',
    siteName: 'Identity Kit',
    type: 'article',
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/what-is-creator-cv-india',
  },
}

export default function BlogPost3() {
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
        .cv-section-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 22px; margin-bottom: 12px; display: flex; gap: 18px; align-items: flex-start; }
        .cv-icon { width: 44px; height: 44px; min-width: 44px; border-radius: 12px; background: rgba(255,107,43,0.1); display: flex; align-items: center; justify-content: center; font-size: 20px; }
        .diff-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 32px 0; }
        .tag-pill { background: rgba(255,107,43,0.1); color: #FF6B2B; font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 100px; display: inline-block; }
        .scenario-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 20px; margin-bottom: 12px; }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .prose h2 { font-size: 22px !important; }
          .diff-grid { grid-template-columns: 1fr !important; }
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
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Creator CV Guide</span>
        </div>
      </div>

      {/* Hero */}
      <div className="hero-pad" style={{ maxWidth: 780, margin: '0 auto', padding: '40px 24px 48px' }}>
        <div style={{ marginBottom: 16 }}>
          <span className="tag-pill">Creator CV</span>
          <span style={{ marginLeft: 12, color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>5 min read · June 2026</span>
        </div>
        <h1 className="hero-title" style={{ fontFamily: 'Syne, sans-serif', fontSize: 38, fontWeight: 800, lineHeight: 1.15, marginBottom: 20, letterSpacing: '-1px' }}>
          What is a Creator CV and Why Every Indian Influencer
          <span style={{ display: 'block', background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Needs One in 2026</span>
        </h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
          A Creator CV is not a regular resume. It is the document that tells brands your complete professional story as a creator — and most Indian influencers don&apos;t have one.
        </p>
      </div>

      {/* Visual banner */}
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px 48px' }}>
        <div style={{ borderRadius: 20, border: '1px solid rgba(255,255,255,0.07)', background: 'linear-gradient(135deg, rgba(255,107,43,0.1), rgba(255,107,43,0.03))', padding: '40px 32px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 80%, rgba(255,107,43,0.12), transparent 60%)' }} />
          <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ fontSize: 72 }}>📄</div>
            <div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 22, marginBottom: 12 }}>A Creator CV includes:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Creator Bio', 'Niche & Platforms', 'Audience Stats', 'Brand Collabs', 'Content Milestones', 'Skills & Tools', 'Contact Info'].map(item => (
                  <span key={item} style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', color: '#FF9A6B', fontSize: 13, fontWeight: 600, padding: '5px 12px', borderRadius: 100 }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article */}
      <div className="article-pad prose" style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px 80px' }}>

        <h2>What Exactly is a Creator CV?</h2>
        <p>
          A Creator CV (also called an Influencer CV or Creator Resume) is a professional document that summarizes your entire creator career. While a media kit focuses on your current stats and rates for brand deals, a Creator CV tells a broader story — your journey, your milestones, your skills, and your credentials as a content creator.
        </p>
        <p>
          Think of it this way: your media kit is what you send when a brand asks &quot;What are your numbers and rates?&quot; Your Creator CV is what you send when someone asks &quot;Tell me about yourself as a creator.&quot;
        </p>

        <div className="callout">
          <p>💡 <strong>Why it matters:</strong> As India&apos;s creator economy matures, brands and agencies are no longer just looking at follower counts. They want to understand the creator&apos;s journey, their expertise, and their reliability as a professional partner. A Creator CV answers all of this.</p>
        </div>

        <h2>Creator CV vs Regular CV — Key Differences</h2>
        <div className="diff-grid">
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 24 }}>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 16, fontWeight: 600 }}>📄 Regular CV / Resume</div>
            {[
              'Lists past job titles',
              'Focuses on education',
              'Written in formal language',
              'Used for job applications',
              'No follower or engagement data',
              'Static document',
            ].map(x => (
              <div key={x} style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>→ {x}</div>
            ))}
          </div>
          <div style={{ background: 'rgba(255,107,43,0.04)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 16, padding: 24 }}>
            <div style={{ fontSize: 13, color: '#FF6B2B', marginBottom: 16, fontWeight: 600 }}>🎯 Creator CV</div>
            {[
              'Highlights content milestones',
              'Focuses on platforms and niches',
              'Written in creator voice',
              'Used for brand partnerships',
              'Includes stats, reach, and impact',
              'Can be a live link',
            ].map(x => (
              <div key={x} style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>✓ {x}</div>
            ))}
          </div>
        </div>

        <h2>What Goes in a Creator CV?</h2>
        <p>A strong Creator CV for Indian influencers should include these sections:</p>

        {[
          { icon: '👤', title: 'Professional Creator Bio', desc: 'A 3–5 sentence professional summary of who you are as a creator. Your niche, your tone, your audience, and what makes you different. Identity Kit AI generates this for you automatically.' },
          { icon: '📱', title: 'Platforms and Follower Count', desc: 'List every platform where you create — Instagram, YouTube, LinkedIn, Moj, Josh, ShareChat. Include your current follower count and engagement rate for each.' },
          { icon: '🎯', title: 'Content Niche and Expertise', desc: 'Be specific. Not just "lifestyle" — "sustainable fashion and mindful living for urban Indian women aged 22–35." Specificity is a selling point.' },
          { icon: '📊', title: 'Key Milestones and Achievements', desc: 'First 10K followers, first brand deal, viral video with X views, featured in a publication, brand ambassador for a known company. These tell your growth story.' },
          { icon: '🤝', title: 'Brand Collaborations', desc: 'Every brand you have worked with — from local businesses to national names. Even one or two real collabs builds instant trust with new brands.' },
          { icon: '🛠️', title: 'Skills and Tools', desc: 'Video editing (CapCut, Premiere), photography, scriptwriting, Canva, analytics tools. Brands sometimes want to know your production capability.' },
          { icon: '📞', title: 'Contact Information', desc: 'Email, Instagram handle, and a link to your full profile or media kit.' },
        ].map(item => (
          <div key={item.title} className="cv-section-card">
            <div className="cv-icon">{item.icon}</div>
            <div>
              <h3 style={{ margin: '0 0 8px', fontSize: 17 }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: 15 }}>{item.desc}</p>
            </div>
          </div>
        ))}

        <h2>When Do You Need a Creator CV?</h2>
        <p>You will need your Creator CV in more situations than you think:</p>

        {[
          { scenario: 'Talent agencies evaluating you', desc: 'Agencies like Monk-E, Finnet Media, and Cosmofeed look at Creator CVs when deciding whether to represent a creator. It tells them your journey and potential — not just your current numbers.' },
          { scenario: 'Long-term brand ambassador deals', desc: 'For deals that last 3–6 months, brands want to know your background, not just your reach. A Creator CV gives them confidence that you are a serious professional.' },
          { scenario: 'Speaking at creator events', desc: 'Event organizers ask for a Creator CV / bio before inviting you to panels or creator summits.' },
          { scenario: 'Press and media coverage', desc: 'Journalists and publications use your Creator CV to write about you accurately when covering creator economy stories.' },
          { scenario: 'Applying for creator programs', desc: 'YouTube\'s partnership programs, Meta\'s creator funds, and brand ambassador programs all ask for a structured creator profile.' },
        ].map(item => (
          <div key={item.scenario} className="scenario-card">
            <div style={{ fontWeight: 700, fontSize: 15, color: '#FF6B2B', marginBottom: 6 }}>→ {item.scenario}</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{item.desc}</div>
          </div>
        ))}

        <h2>Why Most Indian Creators Do Not Have a Creator CV</h2>
        <p>
          The honest answer: nobody told them it was a thing. In India, creators are used to sending their media kit when a brand asks for &quot;more information about you.&quot; But a media kit only covers rates and current stats — it does not tell your story.
        </p>
        <p>
          International creators figured this out earlier. In the US and UK, having a Creator CV is standard practice for anyone doing collaborations professionally. As India&apos;s creator economy matures, this is becoming the norm here too.
        </p>
        <p>
          The creators who start building their Creator CV now — while most Indian influencers still do not have one — will have a clear professional advantage with brands and agencies.
        </p>

        <div className="callout">
          <p>📌 <strong>The Identity Kit advantage:</strong> Identity Kit generates your Creator CV automatically from the same information you enter for your media kit. You fill in the details once — and you get a Media Kit, Rate Card, and Creator CV all in one professional link.</p>
        </div>

        <h2>How to Create Your Creator CV in 10 Minutes</h2>
        <p>You do not need to write a Creator CV from scratch. Here is the fastest way:</p>
        <ul>
          <li>Go to <strong>identitykit.in</strong> and create a free account</li>
          <li>Fill in your creator details — name, niche, platforms, follower counts, brand collabs</li>
          <li>The AI generates your professional bio automatically</li>
          <li>Your Creator CV is generated alongside your Media Kit and Rate Card</li>
          <li>Share one link — identitykit.in/yourname — that includes all three</li>
        </ul>

        <h2>Final Thoughts</h2>
        <p>
          A Creator CV is not a luxury — it is the professional baseline for any creator who is serious about brand partnerships. As India&apos;s creator economy grows, the gap between creators who have one and those who do not will only widen.
        </p>
        <p>
          The good news: it takes 10 minutes to create yours for free. And once you have it, you have it forever.
        </p>

        {/* CTA Box */}
        <div style={{ marginTop: 48, background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 20, padding: '40px 32px', textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>📄</div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Get Your Creator CV — Free</h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 28, fontSize: 15, lineHeight: 1.7 }}>
            Identity Kit generates your Creator CV, Media Kit and Rate Card — all in one professional shareable link. Free, takes 10 minutes.
          </p>
          <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 12, padding: '14px 36px', fontWeight: 700, fontSize: 16 }}>
            Create my Creator CV free →
          </Link>
        </div>

        {/* Related posts */}
        <div style={{ marginTop: 60 }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 20, fontWeight: 800, marginBottom: 20 }}>Read Next</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { href: '/blog/how-to-make-media-kit-india', tag: 'Media Kit', title: 'How to Make a Media Kit for Indian Creators in 2026 (Free)' },
              { href: '/blog/influencer-rate-card-india', tag: 'Rate Card', title: 'How Much Should Indian Creators Charge Brands in 2026?' },
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
