import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What to Look for in a Creator\'s Media Kit Before You Hire Them (India 2026)',
  description: 'A brand-side guide to reading an influencer\'s media kit properly — the numbers that actually predict campaign performance, red flags that signal inflated stats, questions to ask before committing budget, and why a professional media kit itself is a signal worth weighing.',
  keywords: 'how to evaluate influencer media kit, what to check in creator media kit india, influencer media kit red flags, how to read influencer stats before hiring, vetting creator media kit brands india',
  openGraph: {
    title: 'What to Look for in a Creator\'s Media Kit Before You Hire Them (India 2026)',
    description: 'A polished media kit and a good campaign are two different things. Here\'s exactly which numbers to trust, which to question, and the questions to ask before committing budget.',
    url: 'https://identitykit.in/blog/evaluating-creator-media-kit-brands-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/evaluating-media-kit-brands.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/evaluating-creator-media-kit-brands-india-2026',
  },
}

const trustworthySignals = [
  { icon: '📊', title: 'Engagement rate over follower count', detail: 'A creator with 45,000 followers and 6% engagement is typically a stronger bet than one with 200,000 followers and 0.8% engagement — engagement rate correlates far more closely with actual campaign performance than raw follower count.' },
  { icon: '💬', title: 'Comment quality, not just comment count', detail: 'Scan a few of the creator\'s recent posts directly. Specific, on-topic comments ("just ordered this, thank you!") indicate a real audience — generic comments ("nice pic 🔥", "amazing content!") in clusters are a common bot signature.' },
  { icon: '📈', title: 'A demographic breakdown that matches your target market', detail: 'Age, gender, and top-city breakdowns should genuinely align with your customer base. A "beauty creator" whose stated audience skews heavily toward an unrelated demographic or geography is a values mismatch even if every stat is authentic.' },
  { icon: '🗂️', title: 'Past brand collaborations and case studies', detail: 'A media kit with real, named past campaigns and even rough results (reach, engagement lift) tells you far more than stats alone — it shows the creator has actually delivered for brands before, not just built an audience.' },
]

const redFlags = [
  'Follower count and engagement stats that look suspiciously round or haven\'t updated across multiple pitches over several months',
  'A likes-to-comments ratio that\'s dramatically higher than the creator\'s niche average — genuine audiences comment proportionally more than bot-inflated ones',
  'Story engagement that\'s wildly out of proportion to feed engagement (either far higher or far lower than typical for their niche)',
  'A stated audience demographic that doesn\'t match the language, comments, or visible engagement on their actual public posts',
  'Reluctance or vague answers when asked to share native platform analytics (Instagram Insights, YouTube Studio) directly, rather than just the media kit summary',
  'A media kit with impressive numbers but zero named past brand collaborations, or vague claims like "worked with top brands" with no specifics',
]

const questionsToAsk = [
  'Can you share a screenshot of your native analytics (Instagram Insights or YouTube Studio) for the last 90 days?',
  'What were the results (reach, engagement, any conversion data) from your 2-3 most recent brand collaborations?',
  'What percentage of your audience is genuinely active — commenting, saving, sharing — versus passively following?',
  'Have you ever used follower or engagement boosting services? (Asking directly, professionally, often reveals more than any tool.)',
  'Can you walk me through your content process for a typical sponsored post — concept, filming, editing timeline?',
]

const mediaKitAsSignal = [
  { point: 'A well-organised media kit reflects how the creator will handle the actual collaboration', detail: 'Creators who invest in presenting themselves professionally tend to be more reliable with deadlines, revisions, and communication throughout a campaign — it\'s a genuine, if imperfect, signal.' },
  { point: 'A missing or extremely basic media kit isn\'t automatically disqualifying', detail: 'Especially for newer nano and micro creators — but it does mean you\'ll need to gather the same information yourself through direct questions and native analytics screenshots.' },
  { point: 'Consistency across platforms matters more than polish', detail: 'A beautifully designed media kit with numbers that don\'t match what you can independently verify on the creator\'s public profile is a bigger concern than a plain, simple media kit with numbers that check out.' },
]

export default function EvaluatingMediaKitBrandsPage() {
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
        }
      `}</style>

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
        <div className="hero-pad" style={{ padding: '64px 24px 40px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['For Brands', 'Media Kit', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            What to Look for in a Creator's<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Media Kit Before You Hire Them</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A polished media kit and a genuinely good campaign fit are two different things. Here's exactly which numbers to trust, which to independently verify, and the questions to ask before committing your budget to any Indian creator.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Evaluating a Creator's Media Kit</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Weigh engagement rate more heavily than follower count — it correlates far more closely with actual campaign results',
                'Check comment quality directly on the creator\'s public posts, not just the summary numbers in the media kit itself',
                'Confirm the audience demographic breakdown genuinely matches your target customer, not just the creator\'s stated niche',
                'A media kit with named past brand collaborations and rough results is a stronger signal than stats alone',
                'Ask directly for native platform analytics screenshots (Instagram Insights, YouTube Studio) rather than relying only on the media kit\'s own numbers',
                'A well-organised, professional media kit is a genuine (if imperfect) signal of how reliably the creator will handle the actual collaboration',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Reading Creator Media Kits</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Follower count alone is widely considered the weakest predictor of campaign performance among the metrics available in a typical media kit — engagement quality and audience fit matter substantially more.',
                'Genuine audiences tend to comment in rough proportion to likes; a likes-to-comments ratio dramatically skewed toward likes, with few comments, is a common signature of inflated engagement.',
                'Healthy engagement rates for accounts above roughly 10,000 followers commonly fall in a 2-6% range depending on niche — figures far outside this band in either direction merit a closer look, not automatic rejection.',
                'Micro and nano creators in India are frequently the most cost-effective tier precisely because smaller, tightly-niched audiences are both easier to verify and generally harder to convincingly fake at scale.',
                'A media kit\'s presentation quality is a genuine, if imperfect, signal — creators who invest effort in professional self-presentation tend to also be more reliable collaborators on deadlines and communication.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trustworthy signals */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>4 Things That Actually Predict Campaign Performance</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {trustworthySignals.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Red flags */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>6 Red Flags Worth a Closer Look</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>None of these alone are disqualifying — but two or more together warrant real due diligence before committing budget.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {redFlags.map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,152,0,0.05)', border: '1px solid rgba(255,152,0,0.18)', borderRadius: 12, padding: '14px 20px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#FF9800', flexShrink: 0, fontWeight: 700 }}>⚠</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Questions to ask */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>5 Questions to Ask Before Committing Budget</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {questionsToAsk.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#FF6B2B', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Sending a brief? Structure it so results are easy to verify</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>A clear brief upfront makes post-campaign performance easier to measure and compare across creators. Try the free Campaign Brief Generator.</p>
            </div>
            <Link href="/tools/campaign-brief-generator" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Generate a Brief →
            </Link>
          </div>

          {/* Media kit as signal */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>What the Media Kit Itself Tells You (Beyond the Numbers)</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {mediaKitAsSignal.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF6B2B' }}>{item.point}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'Is follower count still worth considering at all when reviewing a media kit?', a: 'Yes, but as context rather than the primary decision factor — it tells you potential reach ceiling, not actual campaign performance. Engagement rate, audience fit, and past results are far stronger predictors of whether a creator will actually deliver results for your specific goal.' },
                { q: 'What\'s a reasonable engagement rate to expect from a creator\'s media kit?', a: 'Roughly 2-6% is a healthy range for accounts above about 10,000 followers, though this varies meaningfully by niche and content format. Numbers far outside this range in either direction — extremely low or suspiciously high and consistent — are worth a closer look rather than an automatic red flag.' },
                { q: 'Should I disqualify a creator who doesn\'t have a formal media kit at all?', a: 'Not necessarily, especially for newer nano and micro creators who may not have built one yet. In that case, ask directly for native analytics screenshots and a few examples of past content to gather the same information you\'d otherwise find in a media kit.' },
                { q: 'How can I independently verify the numbers a creator shares in their media kit?', a: 'Ask for a screenshot of their native platform analytics (Instagram Insights, YouTube Studio) directly, and separately scroll through several of their recent public posts to check comment quality and engagement patterns yourself — a media kit\'s summary numbers should be consistent with what you see on their live profile.' },
                { q: 'Does a beautifully designed media kit mean the creator is more trustworthy?', a: 'It\'s a positive but imperfect signal — creators who invest in professional self-presentation do tend to be more reliable with deadlines and communication. That said, always cross-check the actual numbers against what you can independently verify, regardless of how polished the presentation looks.' },
                { q: 'What if a creator\'s media kit shows great numbers but no past brand collaborations listed?', a: 'This is common for creators early in their brand-deal journey and isn\'t automatically disqualifying — it simply means you have less third-party evidence of how they perform in an actual paid campaign. Consider a smaller test collaboration first before committing a larger budget.' },
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
                { href: '/blog/influencer-brief-guide-india-2026', title: 'How to Write an Influencer Brief for Indian Creators', tag: 'For Brands' },
                { href: '/blog/influencer-marketing-roi-india-2026', title: 'How to Prove Influencer ROI to Brands in India', tag: 'ROI & Analytics' },
                { href: '/blog/influencer-media-kit-india-2026', title: 'How to Make a Media Kit for Instagram in India', tag: 'Media Kit' },
                { href: '/blog/asci-guidelines-influencer-disclosure-india-2026', title: 'ASCI Guidelines for Influencers in India 2026', tag: 'ASCI Compliance' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🔍</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Read past the numbers. Hire with confidence.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Use Identity Kit's free Campaign Brief Generator to structure your next collaboration for measurable, comparable results.
            </p>
            <Link href="/tools/campaign-brief-generator" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Generate My Brief Free →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 14 }}>
              identitykit.in · Free tools for brands and creators
            </div>
          </div>

        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/tools/campaign-brief-generator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Campaign Brief Generator</Link>
          <Link href="/tools/influencer-roi-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>ROI Calculator</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Free tools for Indian creators and brands · identitykit.in</p>
      </footer>
    </div>
  )
}
