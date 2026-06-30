import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Creator CV India 2026: How to Make a Resume That Gets Content Jobs (Free Template)',
  description: 'How to build a Creator CV in India that lands content creator, social media manager, and marketing jobs in 2026. What to include instead of a traditional resume, portfolio-first format, real metrics that matter, and how to apply with zero formal experience.',
  keywords: 'creator cv india, content creator resume india, social media manager resume india 2026, creator portfolio for jobs india, how to make creator cv, content creator jobs india fresher, digital marketing resume india, creator cv template free',
  openGraph: {
    title: 'Creator CV India 2026: How to Make a Resume That Gets Content Jobs (Free Template)',
    description: 'Hiring managers care about your portfolio and results, not your degree. Freshers with a solid Creator CV land their first job within 4–8 weeks; without one, it stretches to 3–6 months. Here is exactly what to include.',
    url: 'https://identitykit.in/blog/creator-cv-resume-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/creator-cv-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/creator-cv-resume-india-2026',
  },
}

const cvVsResume = [
  { label: 'Traditional Resume', color: '#6C63FF', points: ['Lists job titles and duties chronologically', 'Optimised for ATS keyword scanning', 'Static PDF — no proof of actual work', 'Built around education and past employers', 'One-size-fits-all format across industries', 'Recruiter has to imagine your output'] },
  { label: 'Creator CV', color: '#FF6B2B', points: ['Leads with your best work — links, embeds, results', 'Built to be opened and clicked, not just scanned', 'A live link that shows real metrics and growth', 'Built around platforms, niches, and audience built', 'Format adapts to your specific content discipline', 'Recruiter sees the actual output in 10 seconds'] },
]

const sections = [
  {
    rank: '01',
    title: 'Headline Positioning Statement',
    icon: '🎯',
    color: '#FF6B2B',
    what: 'One line that tells a recruiter exactly what you do and for whom — before they scroll an inch further. Not a job title. A positioning statement.',
    example: '"Content creator specialising in finance explainers for Gen Z — grew an Instagram audience from 0 to 18K in 9 months while running a 12% average engagement rate."',
    why: 'Recruiters and hiring managers for content roles in India scan dozens of applications a day. A generic "Aspiring content creator with passion for storytelling" gets skipped in 3 seconds. A specific, numbers-backed positioning line gets read in full.',
  },
  {
    rank: '02',
    title: 'Portfolio Links — Not Attachments',
    icon: '🔗',
    color: '#6C63FF',
    what: 'Direct, clickable links to your best 4–6 pieces of content, organised by format: a Reel, a long-form video, a carousel/blog post, a brand collaboration if you have one. Never PDF screenshots of your work — link to the live, original piece.',
    example: 'Instagram Reel (140K views, 12% engagement) → [link] · YouTube video (35K views, 6 min avg watch time) → [link] · Brand collab with [Brand Name] (gifted, 18K reach) → [link]',
    why: 'Hiring managers want to click through and see your content perform in its native environment — comments, shares, real engagement. A screenshot proves nothing; a live link proves everything.',
  },
  {
    rank: '03',
    title: 'Metrics That Actually Matter',
    icon: '📊',
    color: '#4CAF50',
    what: 'Specific, quantified outcomes — not vague descriptions of responsibilities. Followers grown (with timeframe), engagement rate, views, watch time, content volume produced, or measurable brand impact.',
    example: '"Grew Instagram following from 1,200 to 14,800 in 7 months (1,133% growth) while maintaining a 6.2% average engagement rate — more than double the industry average for the lifestyle niche."',
    why: 'Without hard numbers, your bullet points read as a generic list of responsibilities that could belong to anyone. Numbers transform claims into evidence. Even estimated numbers (clearly labelled as such) beat no numbers at all.',
  },
  {
    rank: '04',
    title: 'Platform & Skill Breakdown',
    icon: '🛠️',
    color: '#FF9800',
    what: 'A clear list of platforms you create for (Instagram, YouTube, LinkedIn, blog/SEO) and the specific skills within each — scripting, shooting, editing, thumbnail design, copywriting, SEO, analytics, paid promotion.',
    example: '"Platforms: Instagram (Reels, Carousels, Stories), YouTube (long-form + Shorts), Blog (SEO-optimised, 1,200+ words). Tools: CapCut, Canva, Notion, Google Analytics, Meta Business Suite."',
    why: 'Content roles increasingly require cross-platform fluency. Listing specific tools and platforms (not just "social media management") signals real hands-on experience to a hiring manager scanning for exact-fit candidates.',
  },
  {
    rank: '05',
    title: 'Self-Initiated Projects',
    icon: '💡',
    color: '#E91E63',
    what: 'Content you created without being asked — a sample brand pitch deck, a mock campaign for a brand you admire, a personal blog, or a niche Instagram account you built from scratch. Freshers and career-switchers should lean on this section heavily.',
    example: '"Self-initiated: Built and grew a personal finance Instagram page to 4,200 followers in 5 months as a side project while studying — wrote all scripts, designed all carousels, managed posting schedule independently."',
    why: 'Most freshers applying for content creator jobs send a resume with zero samples. Initiative-driven content — created with no client and no pay — proves you understand the craft and shows hiring managers exactly what you can do unsupervised.',
  },
  {
    rank: '06',
    title: 'Brief Professional Summary (2–3 Lines Max)',
    icon: '📝',
    color: '#00BCD4',
    what: 'A short paragraph below your headline that adds context: your content focus, your years of experience (even informal), and what kind of role you are looking for.',
    example: '"2 years of independent content creation across Instagram and YouTube in the personal finance niche. Currently seeking a content/social media role at a D2C or fintech brand where I can apply audience-building and storytelling skills at scale."',
    why: 'This section exists to answer "what does this person want and are they a fit for us" in two sentences — it should never repeat what\'s already obvious from your portfolio links above it.',
  },
]

const metricsToInclude = [
  { metric: 'Follower/subscriber growth', format: '"Grew from X to Y in Z months (% growth)"', icon: '📈' },
  { metric: 'Engagement rate', format: '"X% average engagement — Y% above niche benchmark"', icon: '❤️' },
  { metric: 'Reach/views per piece', format: '"Average X views per Reel/video across last 10 posts"', icon: '👁️' },
  { metric: 'Content volume', format: '"Published X pieces of content per week/month consistently"', icon: '🎬' },
  { metric: 'Brand collaboration results', format: '"Drove X redemptions/clicks for [Brand] campaign"', icon: '🤝' },
  { metric: 'Watch time / read time', format: '"Average X minute watch time, Y% above platform average"', icon: '⏱️' },
]

const careerGrowKaroDays = [
  { day: 'Day 1–2', task: 'Choose 1 niche and 1 primary platform. Write 3 content ideas you genuinely understand.' },
  { day: 'Day 3–4', task: 'Create and publish 2 original pieces of content — a Reel/video and a carousel/blog post.' },
  { day: 'Day 5', task: 'Write a short case study for each piece: what you aimed to do, your role, and the result.' },
  { day: 'Day 6', task: 'Write 5 sample social media captions for a real brand you like — even though they never asked.' },
  { day: 'Day 7', task: 'Collect everything into one professional Creator CV with a short bio at the top — this becomes your portfolio link.' },
]

const mistakes = [
  { m: 'Submitting a traditional Word/PDF resume with no live links', f: 'A static document with text like "managed social media" proves nothing. Use a live shareable link (like an Identity Kit Creator CV) so hiring managers can click through to your actual content in seconds — not imagine it from a bullet point.' },
  { m: 'Listing responsibilities instead of results', f: '"Created content for Instagram" is a responsibility. "Created 60+ Reels generating 2.1M cumulative views" is a result. Every line in your Creator CV should answer "so what happened because of this work" — not just "what did you do."' },
  { m: 'Applying with zero portfolio because you have no formal job experience', f: 'Self-initiated content counts as real experience. A personal blog, a niche Instagram page, or unsolicited mock campaigns for brands you admire are legitimate portfolio pieces. The large majority of companies hiring for content creator roles care more about demonstrated skill than a job title on your résumé.' },
  { m: 'Sending the same generic Creator CV to every application', f: 'Tailor your top 2–3 portfolio pieces and your positioning statement to match each specific role — a D2C brand wants to see product-focused content; an EdTech company wants to see educational/explainer content. Five minutes of tailoring per application meaningfully increases response rates.' },
  { m: 'Burying your best work at the bottom', f: 'Hiring managers decide whether to keep reading within the first 10–15 seconds. Your single strongest piece of content — by views, engagement, or brand result — should be the very first thing visible after your headline, not buried under a chronological work history.' },
  { m: 'Omitting metrics because you "don\'t have impressive numbers yet"', f: 'Modest numbers with clear context ("grew from 200 to 1,800 followers in 4 months while studying full-time") read as far more credible and relatable to early-career hiring managers than vague claims with no numbers at all. Context matters more than scale.' },
]

export default function CreatorCVIndiaPage() {
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

      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(7,7,13,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
          <Link href="/" style={{ fontWeight: 800, fontSize: 18, color: '#FF6B2B', letterSpacing: '-0.5px' }}>Identity Kit</Link>
          <div className="nav-links" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B', fontWeight: 600 }}>Blog</Link>
            <Link href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Tools</Link>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Build Free Creator CV →</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto' }}>
        <div className="hero-pad" style={{ padding: '64px 24px 40px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['Creator CV', 'Job Search', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Creator CV India 2026:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>How to Make a Resume That Gets Content Jobs</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Most companies hiring for content roles care far more about your portfolio and results than your degree. Freshers with a strong Creator CV land their first job within 4–8 weeks. Without one, it stretches to 3–6 months. Here is exactly what to build instead of a traditional resume.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — What Goes in a Creator CV India</div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6, marginBottom: 16 }}>A Creator CV that gets content jobs in India needs 6 sections:</p>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'A headline positioning statement — what you do, for whom, with one quantified result (not a generic job title)',
                'Direct portfolio links to your best 4–6 pieces of content — never PDF screenshots, always the live original',
                'Specific metrics: follower growth with timeframe, engagement rate vs niche benchmark, views, watch time',
                'A platform and skill breakdown — exact tools and platforms, not vague "social media management"',
                'Self-initiated projects — content you made without being asked, especially crucial for freshers with no formal experience',
                'A 2–3 line professional summary stating your focus and the type of role you want',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
            <div style={{ marginTop: 20, padding: '14px 18px', background: 'rgba(255,107,43,0.08)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 10 }}>
              <span style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 13 }}>Fastest way: </span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Build all 6 sections in one free, shareable Creator CV link at </span>
              <Link href="/auth" style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 14 }}>identitykit.in →</Link>
            </div>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Content Creator Hiring India 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'With a solid portfolio and consistent applications, most freshers land their first content creator job or internship within 4–8 weeks in India; without a portfolio, this timeline stretches to 3–6 months or longer.',
                'The large majority of companies hiring for content creator roles in India prioritise portfolio quality and demonstrated results over university degree, according to multiple Indian career resources.',
                'Freelance content creator roles in India can cross ₹60,000–₹80,000/month once a creator has 4–5 regular clients and a strong, results-driven portfolio.',
                'India\'s digital advertising market is projected to cross ₹50,000 crore by 2026, driving sustained demand for content creator, social media manager, and digital marketing roles across D2C, EdTech, and agency sectors.',
                'A content creator\'s job application typically includes a portfolio or design samples alongside (or instead of) a traditional resume — hiring managers expect to click through to real, live work.',
                'Self-initiated content — projects created without a client or formal assignment — is treated as legitimate portfolio experience by Indian hiring managers, especially for fresher and career-switcher applications.',
                'Quantified metrics (specific follower growth, engagement rate, views) in a content creator\'s application materials are consistently cited by recruiters as the differentiator between a generic and a standout candidate.',
                'A live, shareable portfolio link in a resume header or application — rather than only attached samples — is recommended across multiple professional resume-building platforms as the format most likely to get opened and reviewed.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CV vs Resume comparison */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, letterSpacing: '-0.3px' }}>Creator CV vs Traditional Resume — What&apos;s Different</h2>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {cvVsResume.map((col) => (
                <div key={col.label} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 800, color: col.color, fontSize: 15, marginBottom: 12 }}>{col.label}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {col.points.map((pt, i) => (
                      <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: col.color, flexShrink: 0, fontSize: 13 }}>{col.label === 'Creator CV' ? '✓' : '○'}</span>
                        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6 Sections */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>6 Sections Every Creator CV Needs — In This Order</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 28 }}>Built around what Indian hiring managers actually scan for in content, social media, and digital marketing roles — not generic resume advice.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {sections.map((sec) => (
                <div key={sec.rank} className="card">
                  <div style={{ background: `linear-gradient(135deg, ${sec.color}15, ${sec.color}05)`, borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ background: `${sec.color}20`, border: `1px solid ${sec.color}35`, borderRadius: 10, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: sec.color, fontSize: 16, flexShrink: 0 }}>{sec.rank}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 20 }}>{sec.icon}</span>
                      <span style={{ fontWeight: 800, fontSize: 17 }}>{sec.title}</span>
                    </div>
                  </div>

                  <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.7 }}>{sec.what}</div>
                  </div>

                  <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)', background: 'rgba(0,0,0,0.15)' }}>
                    <div style={{ fontSize: 11, color: sec.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>Example</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, fontStyle: 'italic' }}>{sec.example}</div>
                  </div>

                  <div style={{ padding: '14px 24px' }}>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <span style={{ color: '#4CAF50', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>WHY IT MATTERS</span>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.5 }}>{sec.why}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA — core conversion */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '36px 32px', marginBottom: 56, textAlign: 'center' }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>⚡</div>
            <div style={{ fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Build your Creator CV in 10 minutes — free</div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.7, maxWidth: 480, margin: '0 auto 24px' }}>
              Identity Kit generates a professional Creator CV — alongside your media kit and rate card — in one shareable link. No Canva, no PDF, no design skills. Send it in your next job application instead of a static resume.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
              {['✓ Creator CV', '✓ Media Kit', '✓ Rate Card', '✓ Portfolio', '✓ Shareable Link'].map((item) => (
                <span key={item} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 13, fontWeight: 600 }}>{item}</span>
              ))}
            </div>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Create My Free Creator CV →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 12 }}>identitykit.in · Free forever · No credit card · Takes 10 minutes</div>
          </div>

          {/* Metrics to include */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>6 Metrics That Actually Impress Hiring Managers</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Without hard numbers, your Creator CV reads as a generic list of responsibilities. These are the metrics worth including — and exactly how to phrase them.</p>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {metricsToInclude.map((row, i) => (
                <div key={i} className="card" style={{ padding: '16px 20px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{row.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 14, marginBottom: 4 }}>{row.metric}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, fontStyle: 'italic' }}>{row.format}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7-Day plan for zero-experience freshers */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>No Experience? Build a Portfolio in 7 Days</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Most freshers applying for content creator jobs in India send an application with zero samples. You can stand out immediately just by having work to show — even if you have never been formally hired.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {careerGrowKaroDays.map((row, i) => (
                <div key={i} className="card" style={{ padding: '14px 20px', display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 8, padding: '5px 12px', fontWeight: 700, color: '#FF6B2B', fontSize: 12, flexShrink: 0, whiteSpace: 'nowrap' }}>{row.day}</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{row.task}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>6 Creator CV Mistakes That Cost Indian Applicants Interviews</h2>
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
                { q: 'What is a Creator CV and how is it different from a normal resume?', a: 'A Creator CV is a portfolio-first professional profile built specifically for content, social media, and creative roles. Unlike a traditional resume (which lists job titles and responsibilities chronologically), a Creator CV leads with your actual work — live links to your best content, quantified results, and platform-specific skills. It is built as a clickable, shareable link rather than a static PDF, letting hiring managers see your real output in seconds instead of imagining it from bullet points.' },
                { q: 'Can I get a content creator job in India with no formal work experience?', a: 'Yes. The large majority of companies hiring for content creator roles in India care more about your portfolio, samples, and demonstrated ability to deliver results than your university degree or job history. Self-initiated projects count as real experience — a personal blog, a niche social media page you built and grew, or unsolicited sample content for a brand you admire are all legitimate portfolio pieces. Build 2–3 strong samples before applying; most freshers send zero samples, so having any will already differentiate you.' },
                { q: 'How long does it take to land a content creator job in India with a good portfolio?', a: 'Most freshers with a solid portfolio and consistent daily applications land their first content creator job or internship within 4–8 weeks in India. Without any samples or portfolio, this timeline typically stretches to 3–6 months or longer. Building the portfolio first, then applying, consistently produces faster results than applying first and hoping to build experience on the job.' },
                { q: 'What metrics should I include in my Creator CV?', a: 'Include specific, quantified outcomes rather than vague descriptions: follower or subscriber growth with a clear timeframe ("0 to 14,800 in 7 months"), average engagement rate compared to your niche benchmark, average views or reach per piece of content, total content volume produced over a period, watch time or read time if relevant, and measurable brand collaboration results if you have any. Even modest numbers with honest context are far more credible to hiring managers than vague claims with no numbers at all.' },
                { q: 'Should I use a PDF resume or a live link for content creator job applications in India?', a: 'A live, shareable link is strongly preferred over a static PDF for content and creative role applications. A link lets hiring managers click directly through to your actual content — comments, engagement, and real performance — rather than viewing a screenshot or description. Several professional resume-building platforms specifically recommend including a viewable portfolio link in your resume header for creative and content roles, as it gets opened and reviewed more often than an attached document.' },
                { q: 'How much can a content creator earn in a job role in India?', a: 'Freelance content creator roles in India can cross ₹60,000–₹80,000 per month once a creator has built 4–5 regular clients alongside a strong portfolio. Full-time, in-house content creator and social media manager roles at D2C brands, EdTech companies, and agencies vary by city and company stage, but many creators with strong portfolios, YouTube channels, and freelance experience earn competitively with — and sometimes more than — equivalent corporate marketing roles, particularly as India\'s digital advertising market continues to expand.' },
                { q: 'What should freshers with zero portfolio do before applying for content creator jobs?', a: 'Spend 5–7 days building a minimal but real portfolio before applying. Pick one niche and one primary platform, create 2 original pieces of content (one short-form video/Reel and one carousel or blog post), write a brief case study explaining your goal, role, and result for each, write sample social media captions for a real brand you admire (even unsolicited), and compile everything into one Creator CV with a short professional bio. This single week of preparation is what separates applicants who get interview callbacks from the majority who get ignored.' },
                { q: 'Do I need a certificate or course to apply for content creator jobs in India?', a: 'A certificate is not a substitute for demonstrated skill, but it can support an application that otherwise has little formal history — especially for complete career-switchers. Free, recognised options include Google Digital Garage, the HubSpot Content Marketing Course, and Skill India\'s digital marketing modules. However, hiring managers consistently prioritise a strong portfolio over certificates — invest your limited prep time in creating real content samples first, and add a certificate only if time permits afterward.' },
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
                { href: '/blog/influencer-media-kit-india-2026', title: 'Influencer Media Kit India 2026 — What to Include & Free Template', tag: 'Media Kit' },
                { href: '/blog/how-to-become-content-creator-india-2026', title: 'How to Become a Content Creator in India 2026', tag: 'Creator Career' },
                { href: '/blog/how-to-make-money-content-creator-india-2026', title: 'How to Make Money as a Content Creator in India 2026', tag: 'Creator Income' },
                { href: '/blog/side-hustles-for-students-india-2026', title: '12 Best Side Hustles for Students in India 2026', tag: 'Student Income' },
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
              Your next application deserves a real Creator CV
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Stop sending a static PDF that proves nothing. Identity Kit builds your Creator CV, media kit, and rate card in one free shareable link — designed specifically for Indian creators applying to content and marketing roles.
            </p>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Build My Free Creator CV →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 14 }}>
              identitykit.in · Free forever · Built for Indian creators
            </div>
          </div>

        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Tools</Link>
          <Link href="/tools/instagram-bio-generator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Bio Generator</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
