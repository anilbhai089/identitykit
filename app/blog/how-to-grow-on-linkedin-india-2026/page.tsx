import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Grow on LinkedIn in India in 2026 (From 0 to 10K Followers Guide)',
  description: 'Complete guide to growing on LinkedIn in India in 2026. India is LinkedIn\'s #2 market with 130M+ users but only 3% post weekly — the organic reach opportunity is massive. Niche strategy, content formats, posting frequency, brand deals, and how to monetise your LinkedIn audience.',
  keywords: 'how to grow on linkedin in india, linkedin growth india 2026, linkedin followers india, linkedin for creators india, linkedin personal branding india, linkedin content strategy india, how to get followers on linkedin india, linkedin brand deals india',
  openGraph: {
    title: 'How to Grow on LinkedIn in India in 2026 (From 0 to 10K Followers Guide)',
    description: 'India has 130M+ LinkedIn users but only 3% post weekly. That gap is your opportunity. Niche selection, content formats that get 3.4% engagement, posting strategy, and how to monetise — complete India-specific guide.',
    url: 'https://identitykit.in/blog/how-to-grow-on-linkedin-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/linkedin-growth-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/how-to-grow-on-linkedin-india-2026',
  },
}

const contentFormats = [
  {
    rank: 1,
    format: 'Carousel / Document Posts',
    icon: '📑',
    engagementRate: '3.4%',
    score: 92,
    color: '#FF6B2B',
    why: 'LinkedIn\'s highest-performing format in 2026. Swipeable, value-packed posts hold attention longer than any other format. The algorithm rewards dwell time — and carousels get it. Indian audiences respond especially well to step-by-step formats, ranked lists, and salary/income transparency carousels.',
    bestFor: ['How-to breakdowns', 'Salary data', 'Career roadmaps', 'Framework reveals', 'Personal story arcs'],
    indianAngle: 'Indian professionals engage most with "what I earned" and "what I learned" formats. Specific numbers — ₹14L CTC, 3 rejections, 47 days — perform 4x better than vague language.',
    proTip: 'First slide = hook with a specific claim or number. Last slide = clear CTA to follow for more. 8–12 slides is the sweet spot for Indian LinkedIn audiences.',
  },
  {
    rank: 2,
    format: 'Short-Form Video',
    icon: '🎬',
    engagementRate: '2.9%',
    score: 78,
    color: '#6C63FF',
    why: 'LinkedIn video viewership grew 36% year-over-year in 2026 and is growing 2x faster than all other post types. LinkedIn launched a TikTok-style "Videos For You" feed in 2026 — native video gets boosted distribution across this feed, giving new creators massive reach without a large following.',
    bestFor: ['Career lessons', 'Day-in-the-life', 'Industry opinions', 'Tool tutorials', 'Behind-the-scenes'],
    indianAngle: 'Talking-head videos where Indian professionals share honest career experiences — job loss, salary negotiation, startup failure — consistently go viral on Indian LinkedIn. Authenticity over production quality every time.',
    proTip: '60–90 second native LinkedIn videos outperform YouTube links 5x. Upload directly to LinkedIn — never share a YouTube link in the main post body (it kills reach).',
  },
  {
    rank: 3,
    format: 'Text-Only Posts',
    icon: '✍️',
    engagementRate: '2.4%',
    score: 65,
    color: '#4CAF50',
    why: 'The most underrated format for Indian creators. A well-written text post with a powerful hook, short paragraphs (1–2 lines max), and a genuine perspective can reach 100K+ impressions on a 2,000-follower account. Indian audiences reward honest, specific storytelling far more than polished corporate language.',
    bestFor: ['Personal stories', 'Contrarian opinions', 'Lessons from failure', 'Salary transparency', 'Hiring insights'],
    indianAngle: 'The highest-performing text posts on Indian LinkedIn share a specific struggle with a specific outcome: "I ran out of money on day 214. Here is what I learned." Specificity about Indian professional culture converts — IIT rejections, entrance exam failures, first-generation wealth builders.',
    proTip: 'First line = the hook. Must be so specific or unexpected that readers click "see more." Never start with "I am excited to share..." — it kills reach instantly.',
  },
  {
    rank: 4,
    format: 'LinkedIn Newsletter',
    icon: '📧',
    engagementRate: 'High (subscribers)',
    score: 58,
    color: '#FF9800',
    why: 'LinkedIn newsletters send email notifications to your subscribers every time you publish — bypassing the algorithm entirely. Your subscribers receive both an in-app notification and an email. Average LinkedIn newsletter creator has 2,800 subscribers. Top Indian newsletters have 50,000–200,000 subscribers.',
    bestFor: ['Weekly industry insights', 'Career advice series', 'Finance breakdowns', 'Founder journeys', 'Niche deep-dives'],
    indianAngle: 'Indian audiences subscribe to newsletters that cover: salary benchmarks, career switching stories, startup funding breakdowns, personal finance, and job market analysis. Finance and career newsletters have the highest subscriber growth rates in India.',
    proTip: 'Publish your newsletter consistently — same day, same time each week. The algorithm and subscriber retention both reward predictability. One solid edition per week outperforms three rushed ones.',
  },
  {
    rank: 5,
    format: 'Polls',
    icon: '📊',
    engagementRate: '2.7%',
    score: 52,
    color: '#00BCD4',
    why: 'Polls are the lowest-effort high-engagement format on LinkedIn. A well-designed poll with 4 options and a genuine question gets high comment activity — especially when the options force people to reveal something personal (their salary range, their decision-making approach, their experience).',
    bestFor: ['Salary range polls', 'Opinion questions', 'Industry experience checks', 'Career decision polls'],
    indianAngle: 'Indian LinkedIn polls that ask about salary ranges, job market experiences, or career choices get 10–50x more engagement than the same content in text format. Indian professionals are highly curious about peer comparison.',
    proTip: 'Follow up your poll with a carousel post analysing the results 48 hours later. This creates two high-engagement posts from one idea and positions you as a thought leader who tracks trends.',
  },
]

const growthSteps = [
  {
    step: '01',
    title: 'Optimise your LinkedIn profile like a landing page, not a resume',
    body: 'Most Indian professionals treat LinkedIn as a digital CV. The creators who grow to 50,000–200,000 followers treat it as a landing page: every section is designed to answer the question "why should I follow this person?" Your headline should not say your job title — it should say who you help and how. Your about section should read like the opening of a compelling story, not a cover letter. Your featured section should show your best-performing posts and a link to your creator profile.',
    tip: 'Headline formula for Indian creators: "[What you do] for [who you help] → [outcome they get]". Example: "Finance educator helping Indian millennials invest their first ₹1,000 → 180,000 followers | Weekly SIP guides".',
    icon: '🎯',
  },
  {
    step: '02',
    title: 'Pick one tight niche and own it for 90 days before expanding',
    body: 'The single biggest predictor of LinkedIn growth for Indian professionals is niche consistency — not content quality, not posting time, not profile aesthetics. Creators who built 50K–200K followers in India posted consistently in one tight niche for at least 90 days before expanding. The algorithm and your audience both need time to learn what you are about. Confusion = unfollows. Consistency = compounding growth.',
    tip: 'The 5 highest-growth niches on Indian LinkedIn in 2026: personal finance and investing, career growth and job hunting, tech (especially AI/ML), startup and entrepreneurship, and mental health and work-life balance.',
    icon: '🎯',
  },
  {
    step: '03',
    title: 'Post 3x per week — at minimum — for the first 90 days',
    body: 'Pages that post weekly on LinkedIn get 5.6x more follower growth than those that post less frequently. For personal profiles, 3 posts per week is the minimum to get consistent algorithmic distribution. The algorithm tests each post with a small audience first — if engagement is strong in the first hour, it expands reach significantly. This means your posting frequency and your first-hour engagement strategy are equally important.',
    tip: 'Best posting times for Indian LinkedIn in 2026: Tuesday–Thursday, 8–10 AM and 12–1 PM IST. Avoid posting after 7 PM or on weekends — Indian LinkedIn activity drops sharply. Reply to every comment in the first 60 minutes — it signals high engagement velocity to the algorithm.',
    icon: '📅',
  },
  {
    step: '04',
    title: 'Write hooks that stop the scroll in the first 2 lines',
    body: 'LinkedIn shows only the first 2–3 lines of your post before the "see more" cutoff. The entire success of your post depends on whether those 2–3 lines are compelling enough to click. The formats that work on Indian LinkedIn: a specific, surprising claim ("I earned ₹0 in my first year. Here is what changed."), a direct question ("Are you still using the 50-30-20 rule? Stop."), or a contrarian statement ("Most Indian founders fail not because of funding. It is because of this."). Vague openings, job announcements, and self-congratulation all kill reach.',
    tip: 'Test your hook on yourself: would you click "see more" if you saw this in your feed while scrolling on your phone during lunch? If not, rewrite the first line until you would.',
    icon: '✍️',
  },
  {
    step: '05',
    title: 'Build your creator profile before you start pitching brands',
    body: 'LinkedIn brand deals are growing in India — technology, EdTech, fintech, and SaaS companies all run LinkedIn creator campaigns targeting professional audiences. When a brand\'s marketing team finds your post, they check your profile and look for a media kit within 2–3 minutes. If you don\'t have one, they move to the next creator. Build your complete creator profile at identitykit.in showing your LinkedIn stats, niche, audience demographics, and starting rates before you reach out to any brand.',
    tip: 'LinkedIn creators in India with 15K–30K followers earn ₹15,000–₹40,000 per sponsored post depending on niche. Finance, HR, and EdTech creators command the highest rates because of their professional audience quality.',
    icon: '📋',
  },
  {
    step: '06',
    title: 'Engage outbound daily — comment on 10 posts in your niche every morning',
    body: 'Most creators focus 100% on publishing and 0% on engagement. The LinkedIn algorithm gives significant weight to your engagement activity — creators who actively comment thoughtfully on others\' posts in their niche get algorithmic boosts to their own content. More importantly, genuine comments on high-visibility posts in your niche introduce you to audiences of 50,000–500,000 followers without posting anything yourself.',
    tip: 'Spend 15 minutes every morning commenting on the top 10 posts in your niche. Not "Great post!" — substantive 2–3 sentence comments that add value. This alone can drive 30–50 new followers per day at zero cost.',
    icon: '💬',
  },
]

const niches = [
  { name: 'Personal Finance & Investing', demand: 95, competition: 55, avgFollowerGrowth: '3,000–8,000/month', brandRate: '₹20,000–₹80,000/post', color: '#4CAF50', why: 'India\'s Demat account base crossed 150M in 2025. Every new investor searches for guidance. Finance LinkedIn creators earn 3–5x more per post than general creators due to fintech, mutual fund, and banking brand budgets.' },
  { name: 'Career Growth & Job Hunting', demand: 90, competition: 60, avgFollowerGrowth: '2,000–6,000/month', brandRate: '₹10,000–₹40,000/post', color: '#6C63FF', why: 'India\'s job market anxiety is a permanent, evergreen topic. Salary transparency posts, interview tips, and rejection stories consistently go viral. EdTech and hiring platforms pay well for niche creator partnerships.' },
  { name: 'AI & Tech / Product', demand: 88, competition: 45, avgFollowerGrowth: '4,000–12,000/month', brandRate: '₹25,000–₹1,00,000/post', color: '#00BCD4', why: 'AI content on LinkedIn grew 200%+ in 2025–2026. India\'s 5M+ tech workforce actively looks for practical AI/ML and product guidance on LinkedIn. SaaS and tech companies pay premium rates for creator campaigns.' },
  { name: 'Startup & Entrepreneurship', demand: 85, competition: 65, avgFollowerGrowth: '1,500–5,000/month', brandRate: '₹15,000–₹60,000/post', color: '#FF9800', why: 'India\'s startup ecosystem has 100,000+ registered startups. Founder journey content — honest failures, funding stories, team lessons — performs exceptionally on Indian LinkedIn. Investors and VCs actively discover founders here.' },
  { name: 'Mental Health & Work-Life Balance', demand: 80, competition: 30, avgFollowerGrowth: '2,000–7,000/month', brandRate: '₹8,000–₹30,000/post', color: '#FF6B2B', why: 'The lowest competition, highest growth-rate niche on Indian LinkedIn in 2026. Burnout, toxic workplace culture, and boundary-setting content consistently goes viral. Underserved by quality creators — a major opportunity.' },
  { name: 'HR & Hiring / Talent', demand: 78, competition: 40, avgFollowerGrowth: '1,000–3,000/month', brandRate: '₹12,000–₹50,000/post', color: '#9C27B0', why: 'India\'s HR technology market is growing rapidly. HRTech companies, ATS platforms, and recruitment agencies actively seek creators with HR/TA audiences. Lower volume but very high brand deal value per impression.' },
]

const monetisation = [
  { method: 'LinkedIn Brand Deals (Sponsored Posts)', income: '₹15,000–₹1,00,000/post', when: '10K+ followers', desc: 'Tech, EdTech, fintech, and SaaS brands run LinkedIn creator campaigns targeting professional audiences. LinkedIn creator sponsored posts pay 2–3x more than equivalent Instagram posts because of audience quality. Finance and tech niches earn the highest rates.' },
  { method: 'Consulting & Freelance Clients', income: '₹50,000–₹5,00,000/month', when: '5,000+ followers', desc: 'LinkedIn is the only platform where your followers are potential clients, not just fans. A career coach with 8,000 followers, a marketing consultant with 12,000 followers, or a tax advisor with 6,000 followers can fill their client roster entirely through LinkedIn inbound. This is the platform\'s most powerful monetisation path.' },
  { method: 'LinkedIn Newsletter Sponsorships', income: '₹10,000–₹60,000/edition', when: '5,000+ subscribers', desc: 'Once your LinkedIn newsletter crosses 5,000 subscribers, B2B brands pay for newsletter sponsorships — a header ad in your weekly edition. Finance and HR newsletters with 20,000+ subscribers charge ₹30,000–₹60,000 per sponsored edition.' },
  { method: 'Digital Products & Courses', income: '₹20,000–₹5,00,000/launch', when: '2,000+ followers', desc: 'LinkedIn audiences have the highest buying power of any Indian social platform — 54% of users earn above average income. Templates, resume kits, career guides, courses, and frameworks sell extremely well to LinkedIn audiences. A ₹999 resume template sold to 200 followers = ₹2,00,000 in revenue from a single post.' },
  { method: 'Speaking & Event Appearances', income: '₹20,000–₹3,00,000/event', when: '15,000+ followers', desc: 'LinkedIn credibility translates directly into offline speaking opportunities. Conferences, corporate HR events, college career fairs, and startup summits pay creators with LinkedIn authority for keynotes and panel appearances. This income stream grows with your thought leadership rather than with follower count.' },
]

export default function LinkedInGrowthIndiaPage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', color: '#fff', fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .nav-link:hover { color: #FF6B2B !important; }
        .li-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; overflow: hidden; transition: border-color 0.2s; }
        .li-card:hover { border-color: rgba(255,107,43,0.25); }
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
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Get Started Free</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Hero */}
        <div className="hero-pad" style={{ padding: '64px 24px 40px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['LinkedIn Growth', 'Personal Branding', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Grow on LinkedIn in India in 2026<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>(From 0 to 10K Followers Guide)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            India is LinkedIn&apos;s second-largest market with 130 million+ users. Only 3% of members post weekly. That gap is your organic reach advantage — a platform where consistency alone gets you to 10,000 followers in 6–9 months. Here is exactly how.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — How to Grow on LinkedIn in India</div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6, marginBottom: 16 }}>To grow from 0 to 10,000 LinkedIn followers in India in 2026:</p>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Optimise your profile as a landing page — headline, about section, and featured posts all tuned to your niche audience',
                'Pick one tight niche (finance, career, AI/tech, startup) and post only that topic for 90 days without deviation',
                'Post carousel posts 2x per week + 1 text or video post — carousels get 3.4% engagement, the highest on LinkedIn',
                'Write hooks that stop the scroll: first 2 lines must contain a specific, surprising claim or number',
                'Comment on 10 posts in your niche every morning — substantive 2–3 sentence comments, not "great post"',
                'Build your creator profile at identitykit.in with LinkedIn stats and rates before approaching brands',
                'Reply to every comment within the first 60 minutes of posting — engagement velocity determines algorithmic reach',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — LinkedIn India 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'India is LinkedIn\'s second-largest market globally with 130–161 million registered users, behind only the United States.',
                'Only 3% of LinkedIn members post more than once per week globally — meaning consistent creators gain enormous organic reach advantages over the passive majority.',
                'LinkedIn carousel/document posts achieve the highest average engagement rate on the platform at 3.4% in 2026, followed by video at 2.9% and polls at 2.7%.',
                'LinkedIn video viewership grew 36% year-over-year in 2026, with video creation growing 2x faster than all other post types.',
                'Pages that post weekly on LinkedIn gain 5.6x more follower growth than those posting less frequently.',
                'Indian LinkedIn creators with 15,000–30,000 followers earn ₹15,000–₹40,000 per sponsored post, with finance and tech niches commanding the highest rates.',
                'Creator Mode profiles on LinkedIn receive an average of 30% more profile views and 2x more followers than standard profiles.',
                'India\'s Tier-2 city LinkedIn creators are the fastest-growing segment in 2026, with regional professional audiences delivering higher engagement rates than metro-based creators.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content Format Cards */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>LinkedIn Content Formats — Ranked by Engagement Rate in India</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 28 }}>Not all LinkedIn content is equal. The format you choose determines your reach before a single person reads your words. Here are the 5 formats ranked by engagement rate in 2026 — with India-specific angles for each.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {contentFormats.map((fmt) => (
                <div key={fmt.rank} className="li-card">
                  {/* Header */}
                  <div style={{ background: `linear-gradient(135deg, ${fmt.color}15, ${fmt.color}05)`, borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{ background: `${fmt.color}20`, border: `1px solid ${fmt.color}35`, borderRadius: 10, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{fmt.icon}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                          <span style={{ fontWeight: 800, fontSize: 17 }}>#{fmt.rank} — {fmt.format}</span>
                          <span style={{ background: `${fmt.color}18`, color: fmt.color, border: `1px solid ${fmt.color}35`, padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700 }}>Avg {fmt.engagementRate} engagement</span>
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.5 }}>{fmt.why}</div>
                      </div>
                    </div>
                  </div>

                  {/* Engagement bar */}
                  <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', minWidth: 120 }}>Engagement score</span>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 5 }}>
                      <div style={{ width: `${fmt.score}%`, height: '100%', borderRadius: 3, background: `linear-gradient(90deg, ${fmt.color}, ${fmt.color}88)` }} />
                    </div>
                    <span style={{ fontSize: 11, color: fmt.color, fontWeight: 700, minWidth: 30, textAlign: 'right' }}>{fmt.score}</span>
                  </div>

                  {/* Best for */}
                  <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>Best for</div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {fmt.bestFor.map((b) => (
                        <span key={b} style={{ background: `${fmt.color}10`, color: fmt.color, border: `1px solid ${fmt.color}22`, padding: '3px 10px', borderRadius: 100, fontSize: 12, fontWeight: 600 }}>→ {b}</span>
                      ))}
                    </div>
                  </div>

                  {/* Indian angle */}
                  <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ fontSize: 11, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6, fontWeight: 700 }}>🇮🇳 India-specific angle</div>
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fmt.indianAngle}</div>
                  </div>

                  {/* Pro tip */}
                  <div style={{ padding: '14px 24px' }}>
                    <div style={{ background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.18)', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
                      <span style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>PRO TIP</span>
                      <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{fmt.proTip}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Niche Section */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Best Niches for Indian LinkedIn Creators in 2026</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Your niche determines your growth rate, brand deal rates, and monetisation potential. These are the 6 highest-opportunity niches for Indian LinkedIn creators with demand scores, competition levels, and realistic income data.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {niches.map((niche, i) => (
                <div key={i} className="li-card" style={{ padding: '20px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>{niche.name}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6, maxWidth: 500 }}>{niche.why}</div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, marginBottom: 2 }}>Brand deal rate</div>
                      <div style={{ fontWeight: 700, color: '#4CAF50', fontSize: 14 }}>{niche.brandRate}</div>
                    </div>
                  </div>
                  <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                    <div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.8 }}>Audience demand</div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 4 }}>
                          <div style={{ width: `${niche.demand}%`, height: '100%', borderRadius: 3, background: niche.color }} />
                        </div>
                        <span style={{ fontSize: 11, color: niche.color, fontWeight: 700, minWidth: 24 }}>{niche.demand}</span>
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.8 }}>Competition</div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 4 }}>
                          <div style={{ width: `${niche.competition}%`, height: '100%', borderRadius: 3, background: niche.competition >= 60 ? '#FF5252' : niche.competition >= 40 ? '#FF9800' : '#4CAF50' }} />
                        </div>
                        <span style={{ fontSize: 11, color: niche.competition >= 60 ? '#FF5252' : niche.competition >= 40 ? '#FF9800' : '#4CAF50', fontWeight: 700, minWidth: 24 }}>{niche.competition}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>Avg monthly follower growth:</span>
                    <span style={{ background: `${niche.color}15`, color: niche.color, border: `1px solid ${niche.color}25`, padding: '2px 10px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{niche.avgFollowerGrowth}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6 Steps */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>How to Grow on LinkedIn in India — 6-Step System</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>This is the exact sequence that Indian creators use to grow from 0 to 10,000 followers. Most people skip step 1 (profile optimisation) and step 5 (outbound engagement) — which is why most Indian LinkedIn creators plateau at 500–2,000 followers indefinitely.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {growthSteps.map((item) => (
                <div key={item.step} className="li-card" style={{ padding: '22px 24px' }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 10, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#FF6B2B', fontSize: 15, flexShrink: 0 }}>{item.step}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{item.title}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.75, marginBottom: 12 }}>{item.body}</div>
                      <div style={{ background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.18)', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
                        <span style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>PRO TIP</span>
                        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{item.tip}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Monetisation */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>How to Monetise Your LinkedIn Following in India</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>LinkedIn has the highest-quality audience of any Indian social platform — professionals with budget authority and above-average income. Here is how to convert that audience into income.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {monetisation.map((item, i) => (
                <div key={i} className="li-card" style={{ padding: '20px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 10 }}>
                    <div style={{ fontWeight: 800, fontSize: 15 }}>{item.method}</div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                      <span style={{ background: 'rgba(76,175,80,0.1)', color: '#4CAF50', border: '1px solid rgba(76,175,80,0.2)', padding: '2px 10px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{item.income}</span>
                      <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600 }}>From {item.when}</span>
                    </div>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA inline */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.18)', borderRadius: 14, padding: '24px 28px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>Build your media kit before you pitch your first LinkedIn brand deal</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>Brands who find your LinkedIn post check your creator profile within 2–3 minutes. Identity Kit gives you a professional media kit, rate card, and creator CV in one shareable link — free.</div>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '12px 22px', borderRadius: 10, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build Your Free Profile →
            </Link>
          </div>

          {/* Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>5 LinkedIn Growth Mistakes Indian Creators Make</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { m: 'Posting LinkedIn profiles as resume summaries', f: 'Your LinkedIn headline should not say "Sales Manager at XYZ Company" — it should say what you do for whom and what outcome they get. Every section of your profile should be written for your target audience, not for a job recruiter, unless job hunting is your goal.' },
                { m: 'Sharing YouTube links or external URLs in post bodies', f: 'LinkedIn\'s algorithm significantly penalises posts with external links in the main body because they take users off the platform. Share links in the first comment and mention "link in first comment" in the post body. This alone increases reach by 30–50% on identical content.' },
                { m: 'Writing generic opening lines', f: '"I am excited to share..." is the death sentence of LinkedIn reach. The first 2–3 lines are everything — they determine whether anyone clicks "see more." Start with a specific, surprising claim or number. "I failed 11 interviews before my ₹22L CTC offer. Here is what changed on interview 12."' },
                { m: 'Ignoring comments after posting', f: 'Replying to comments in the first 60 minutes of publishing is not optional — it is the single most impactful action you can take for reach. Each reply triggers another notification to the commenter, bringing them back to engage again, which compounds engagement velocity and extends algorithmic distribution.' },
                { m: 'No creator profile when brands come looking', f: 'The first thing a brand\'s marketing team does after seeing your LinkedIn post is Google you or look for your media kit. If your only presence is a LinkedIn profile with no rates, no stats, and no content portfolio link, you lose the deal. Build your Identity Kit profile at identitykit.in before your first brand reply.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.1)', borderRadius: 12, padding: '18px 22px', display: 'flex', gap: 14 }}>
                  <div style={{ color: '#FF5252', fontWeight: 700, fontSize: 20, flexShrink: 0 }}>✗</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#FF8080', fontSize: 15, marginBottom: 6 }}>Mistake: {item.m}</div>
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
                { q: 'How long does it take to grow to 10,000 followers on LinkedIn in India?', a: 'Indian LinkedIn creators who post 3x per week in a consistent niche typically reach 1,000 followers in 30–60 days and 10,000 followers in 6–9 months. The growth rate accelerates significantly after 1,000 followers because the algorithm starts distributing your content to a wider network. The single biggest variable is niche consistency — creators who change topics frequently plateau at 500–2,000 followers indefinitely.' },
                { q: 'What is the best content format to grow on LinkedIn in India?', a: 'Carousel/document posts (3.4% avg engagement) followed by short-form video (2.9%) are the highest-performing formats on LinkedIn in 2026. For Indian creators specifically, carousel posts with salary data, career roadmaps, or ranked lists perform exceptionally well because of Indian audiences\' appetite for comparison and transparency. Text-only posts with strong hooks are the most underrated format — they require no design skill but can reach 100,000+ impressions.' },
                { q: 'How many times should I post on LinkedIn per week?', a: 'A minimum of 3 times per week for consistent algorithmic distribution. LinkedIn\'s algorithm rewards consistency — pages posting weekly get 5.6x more follower growth than those posting irregularly. For maximum growth, 4–5 posts per week is ideal. Posting more than 7 times per week starts to reduce per-post engagement quality as the algorithm deprioritises accounts that appear spammy. Quality and consistency matter more than volume above 4 posts per week.' },
                { q: 'How do I get brand deals on LinkedIn in India?', a: 'LinkedIn brand deals in India typically come from: brands finding your content through hashtag or keyword search, inbound DMs from brand marketing teams, and creator platforms like Winkl or Plixxo that include LinkedIn as a placement. To attract brand deals proactively: turn on Creator Mode, use industry-specific hashtags in every post, and build a professional media kit at identitykit.in with your LinkedIn stats and rates. Finance and tech niches on LinkedIn attract the most brand deals in India — ₹15,000–₹1,00,000 per sponsored post at 15K–50K followers.' },
                { q: 'Can I grow on LinkedIn without showing my face?', a: 'Yes — LinkedIn is the most face-optional of all major social platforms. Carousel posts (text and data-based), text-only posts, and newsletter content all perform extremely well without video or photos. Many of India\'s highest-following LinkedIn accounts post exclusively text and carousels. If you prefer faceless content, focus on finance, career data, industry analysis, or tool breakdowns — all of which perform well in text-and-graphic format.' },
                { q: 'What is LinkedIn Creator Mode and should I turn it on?', a: 'LinkedIn Creator Mode changes your profile layout to show your content first instead of your connections, shows your follower count instead of connections count, allows you to add topics (hashtags) to your profile for discovery, and gives you access to LinkedIn\'s creator analytics dashboard. Profiles with Creator Mode get an average of 30% more profile views and 2x more followers than standard profiles. Turn it on as soon as you start posting consistently — it is free and has no downsides.' },
                { q: 'Which Indian cities produce the most LinkedIn creators?', a: 'Historically, Bengaluru, Mumbai, Delhi NCR, and Hyderabad produced the most LinkedIn creators due to their tech and startup ecosystems. In 2026, however, Tier-2 cities like Jaipur, Chandigarh, Lucknow, Indore, Coimbatore, and Bhubaneswar are the fastest-growing creator hubs. Tier-2 city creators deliver higher engagement rates because their audiences have stronger regional trust connections. Brands increasingly seek out Tier-2 LinkedIn creators for campaigns targeting non-metro professional audiences.' },
                { q: 'How do I use LinkedIn hashtags for growth in India?', a: 'LinkedIn hashtags work differently from Instagram — the optimal number is 3–5 per post, not 20–30. Use 1 broad niche hashtag (#PersonalFinanceIndia), 1 medium hashtag (#InvestingTips), and 1–2 specific hashtags (#SIPInvesting or #MutualFundsIndia). Avoid generic hashtags like #LinkedIn or #Motivation — they have millions of posts and your content gets buried immediately. Check which hashtags top Indian creators in your niche use and start there.' },
              ].map((item, i) => (
                <div key={i} className="li-card" style={{ padding: '20px 24px' }}>
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
                { href: '/blog/how-to-build-personal-brand-india', title: 'How to Build a Personal Brand in India in 2026', tag: 'Personal Branding' },
                { href: '/blog/how-to-become-micro-influencer-india', title: 'How to Become a Micro Influencer in India — Step by Step', tag: 'Influencer Marketing' },
                { href: '/blog/affiliate-marketing-india-creators-2026', title: 'Affiliate Marketing for Creators in India 2026', tag: 'Passive Income' },
                { href: '/blog/how-to-get-brand-deals-india', title: 'How to Get Brand Deals in India — Complete 2026 Guide', tag: 'Brand Deals' },
              ].map((post) => (
                <Link key={post.href} href={post.href} style={{ display: 'block', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '18px 20px' }}>
                  <div style={{ fontSize: 11, color: '#FF6B2B', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>{post.tag}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.5, fontWeight: 600 }}>{post.title}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div style={{ textAlign: 'center', background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 24, padding: '48px 32px' }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>💼</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Your LinkedIn audience needs a professional home
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Every brand that finds you on LinkedIn will look for your media kit, rates, and portfolio. Identity Kit gives you all three in one free, shareable link — built specifically for Indian creators. Set up in 10 minutes.
            </p>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Create my Identity Kit free →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 14 }}>
              identitykit.in · Free forever · Media kit + Rate card + Creator CV
            </div>
          </div>

        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Tools</Link>
          <Link href="/about" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>About</Link>
          <Link href="/contact" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contact</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
