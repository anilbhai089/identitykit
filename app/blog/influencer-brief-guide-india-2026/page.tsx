import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write an Influencer Brief for Indian Creators (2026 Brand Guide)',
  description: 'A practical guide for Indian brands and founders writing influencer campaign briefs — what to include, common mistakes that produce off-brand content, ASCI disclosure requirements, WhatsApp-friendly brief formats for nano/micro creators, and a ready structure you can copy today.',
  keywords: 'how to write influencer brief india, influencer campaign brief template india, brand brief for creators india, how to brief a nano influencer, d2c influencer marketing brief india',
  openGraph: {
    title: 'How to Write an Influencer Brief for Indian Creators (2026 Brand Guide)',
    description: 'A vague WhatsApp message is not a brief. Here\'s the exact structure Indian D2C brands should use to get on-brand content from creators the first time.',
    url: 'https://identitykit.in/blog/influencer-brief-guide-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/influencer-brief-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/influencer-brief-guide-india-2026',
  },
}

const briefSections = [
  { title: 'Brand overview', body: 'Two or three sentences: what you sell, who you sell to, and your tone in a few words (e.g. "playful, direct, never preachy"). This alone prevents most off-brand content.' },
  { title: 'Campaign goal', body: 'One clear objective — awareness, conversions via a discount code, or reusable UGC assets for ads. A creator optimises differently depending on which one you actually want.' },
  { title: 'Deliverables', body: 'Exact format and count: "1 Instagram Reel, 15-30 seconds, plus 2 Story frames" — not "some content about the product."' },
  { title: 'Key message (max 2-3 points)', body: 'The specific things that must come through. Beyond 2-3 points, the content starts sounding like a scripted ad rather than the creator\'s own voice.' },
  { title: 'What to avoid', body: 'Competitor comparisons, medical/health claims, or anything that conflicts with your brand values — spelled out clearly rather than left to guesswork.' },
  { title: 'Disclosure requirement', body: 'State explicitly that ASCI guidelines require #Ad or #PaidPartnership in the first two lines of the caption — don\'t assume every creator already knows the exact placement rules.' },
  { title: 'Usage rights', body: 'Will this run as a paid ad? For how long? Whitelisting? State this upfront in the brief, not as a surprise ask after content is delivered — it also affects what a fair rate looks like.' },
  { title: 'Approval process & timeline', body: 'Who reviews the draft, how many revision rounds are included, and the exact posting date — vague timelines are one of the most common sources of missed deadlines.' },
]

const mistakes = [
  { m: 'Sending a one-line WhatsApp message instead of a real brief', f: 'Even a short, structured brief (a single WhatsApp message broken into clear sections) dramatically outperforms an unstructured ask — format matters less than including the essentials.' },
  { m: 'Over-scripting the exact caption or dialogue', f: 'Creators\' own audiences can tell when content is scripted, and scripted reads consistently underperform authentic ones. Give 2-3 key points and let the creator translate them into their own voice.' },
  { m: 'Forgetting to mention usage rights until after content is delivered', f: 'Asking to run a creator\'s organic post as a paid ad after the fact, with no additional payment discussed, is one of the most common sources of creator-brand friction — address this upfront in the brief.' },
  { m: 'Assuming creators already know ASCI disclosure rules', f: 'Explicitly stating the required disclosure format in your brief protects your brand from compliance risk and helps the creator get it right the first time, avoiding a revision round just for this.' },
  { m: 'Using the same generic brief for a nano creator and a macro creator', f: 'A nano or micro creator\'s audience follows them for a specific niche interest — write toward that specificity rather than sending a broad, one-size-fits-all brief meant for a mass-market macro campaign.' },
]

const whatsappTemplate = {
  title: 'A WhatsApp-Friendly Brief Structure (for Nano/Micro Creators)',
  text: `Hi [Name]! Excited to work with you 🎉 Here's the brief:

🏷️ Brand: [Brand] — we make [what you sell] for [who]
🎯 Goal: [Awareness / drive sales with code XYZ / UGC for ads]
📦 Deliverable: 1 Reel (15-30 sec) + 2 Story frames
💬 Please mention: [1-2 key points, e.g. "our 60-day return policy"]
🚫 Please avoid: [e.g. comparing to competitor brands by name]
📢 Disclosure: #Ad in the first 2 lines of your caption (ASCI requirement)
📅 Post by: [date] | Draft review: [date]
💰 Rate: ₹[amount] for organic use. Let us know if you'd like to discuss paid usage rights separately.`,
}

export default function InfluencerBriefGuideIndiaPage() {
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
            {['For Brands', 'Campaign Brief', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Write an Influencer Brief<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>for Indian Creators (2026 Brand Guide)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A vague WhatsApp message asking for "some content about our product" is the single biggest reason Indian D2C brands end up with off-brand, unusable creator content. A structured brief — even a short one — fixes this. Here's exactly what to include, ASCI compliance and all.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Writing an Influencer Brief in India</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'A good brief needs 8 things: brand overview, campaign goal, deliverables, 2-3 key messages, what to avoid, disclosure requirements, usage rights, and an approval timeline',
                'Cap key messages at 2-3 — beyond that, content starts sounding scripted and underperforms',
                'State ASCI disclosure requirements explicitly (#Ad in the first two lines) rather than assuming the creator already knows the exact placement rules',
                'Clarify usage rights (organic only, or paid ad use) upfront in the brief — not as a surprise request after content is delivered',
                'A short, structured WhatsApp message works just as well as a formal document for nano and micro creators — the structure matters more than the format',
                'Write toward a creator\'s specific niche audience rather than sending the same generic brief you\'d use for a mass-market macro campaign',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Influencer Briefs</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'A widely cited industry figure attributes roughly two-thirds of failed influencer campaigns to poor communication, with unclear or missing briefs as the leading cause.',
                'Over-scripted briefs that dictate exact captions or dialogue consistently produce content that reads as inauthentic to the creator\'s own audience, underperforming genuinely creator-voiced content.',
                'Disclosure requirements apply regardless of whether a creator is paid in cash or gifted product — a brief that omits disclosure guidance creates compliance exposure for both the brand and the creator.',
                'One page is generally sufficient for most single-creator campaigns; briefs longer than two pages are usually skimmed rather than read carefully.',
                'A brief is meant to come after outreach and acceptance, once goals, deliverables, and budget are already agreed — not as the first message used to pitch a creator.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Brief sections */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>The 8 Sections Every Brief Needs</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {briefSections.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF6B2B' }}>{i + 1}. {item.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.6 }}>{item.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* WhatsApp template */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>A Ready-to-Use WhatsApp Brief Format</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Most Indian D2C brands communicate with nano and micro creators over WhatsApp — this fits that format while still hitting every essential.</p>
            <div className="card" style={{ padding: '20px 22px' }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#FF6B2B', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>{whatsappTemplate.title}</div>
              <pre style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '16px 18px', color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.8, whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>{whatsappTemplate.text}</pre>
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Generate a complete brief in under a minute</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Use the free Campaign Brief Generator to build a structured, India-ready brief — ASCI disclosure language and usage rights included by default.</p>
            </div>
            <Link href="/tools/campaign-brief-generator" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Generate My Brief →
            </Link>
          </div>

          {/* Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>5 Brief Mistakes That Cost Brands Good Content</h2>
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
                { q: 'How long should an influencer brief be?', a: 'One page is enough for most single-creator campaigns. Reserve two pages for complex, multi-creator launches. Briefs longer than that are typically skimmed rather than read carefully, defeating the purpose of writing one.' },
                { q: 'Should I send the brief before or after the creator agrees to the collaboration?', a: 'After. The brief comes once goals, deliverables, and budget are already agreed during outreach and negotiation — it\'s a working document for an accepted partnership, not the initial pitch used to convince a creator to work with you.' },
                { q: 'Do I need to include ASCI disclosure requirements in every brief, even for gifted collaborations?', a: 'Yes — disclosure requirements apply regardless of whether the creator is paid in cash or given free product. Spelling out the exact requirement (e.g. "#Ad in the first two lines of the caption") in your brief protects both your brand and the creator from compliance issues.' },
                { q: 'How specific should I be about the caption or script?', a: 'Give 2-3 key messages and let the creator write in their own voice — over-scripting exact wording consistently produces content that reads as inauthentic to the creator\'s own audience and underperforms as a result.' },
                { q: 'Is a WhatsApp message an acceptable format for a brief, or do I need a formal document?', a: 'A short, structured WhatsApp message works fine, especially for nano and micro creators — the important thing is including the essential sections (goal, deliverables, key messages, disclosure, usage rights, timeline), not the specific document format.' },
                { q: 'What\'s the single biggest mistake brands make in influencer briefs?', a: 'Sending a vague, unstructured ask — "post something about our product" — without specifying deliverables, key messages, or a timeline. A large share of underperforming or off-brand campaigns trace directly back to this kind of brief gap, not to the creator\'s effort or skill.' },
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
                { href: '/blog/asci-guidelines-influencer-disclosure-india-2026', title: 'ASCI Guidelines for Influencers in India 2026', tag: 'ASCI Compliance' },
                { href: '/blog/content-usage-rights-explained-india-2026', title: 'Content Usage Rights Explained (India 2026)', tag: 'Usage Rights' },
                { href: '/blog/content-revisions-scope-creep-brand-deals-india-2026', title: 'Handling Revisions & Scope Creep in Brand Deals', tag: 'Scope Creep' },
                { href: '/blog/influencer-marketing-roi-india-2026', title: 'How to Prove Influencer ROI to Brands in India', tag: 'ROI & Analytics' },
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
              Better briefs, better content, fewer revisions.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Generate a structured, compliant influencer brief in under a minute with Identity Kit's free Campaign Brief Generator.
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
