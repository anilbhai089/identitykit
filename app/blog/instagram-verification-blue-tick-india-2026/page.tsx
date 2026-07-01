import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Get Verified on Instagram in India 2026 (Blue Tick: Free & Paid Methods)',
  description: 'Complete guide to getting the Instagram blue tick in India in 2026. Free notability-based verification vs Meta Verified (₹500–₹1,500/month), exact eligibility requirements, step-by-step application process, what Indian media counts as proof, and how verification affects brand deals.',
  keywords: 'how to get verified on instagram india, instagram blue tick india 2026, instagram verification india, meta verified india price, blue tick instagram free india, how to apply for instagram verification india, instagram badge india creator',
  openGraph: {
    title: 'How to Get Verified on Instagram in India 2026 (Blue Tick: Free & Paid Methods)',
    description: 'Two paths to the blue tick in India: free notability-based verification (needs Indian media coverage) or Meta Verified (₹500–₹1,500/month, ID check, 24–72 hour approval). No follower minimum required for either.',
    url: 'https://identitykit.in/blog/instagram-verification-blue-tick-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/instagram-verification-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/instagram-verification-blue-tick-india-2026',
  },
}

const pathways = [
  {
    name: 'Free Notability-Based Verification',
    icon: '🆓',
    color: '#4CAF50',
    cost: '₹0 (completely free)',
    speed: '~30 days',
    speedScore: 30,
    requirements: [
      'Account is authentic — represents a real person, registered business, or legitimate entity (no parody/fan accounts)',
      'Account is unique — only one verified account per person or business (language-specific accounts are an exception)',
      'Profile is complete — profile picture, bio, and at least one post; account must be public',
      'You are "notable" — well-known and searched-for, typically proven through genuine media coverage',
    ],
    indianNote: 'For Indian creators, "notable" means coverage by trusted Indian media outlets — NDTV, India Today, Hindustan Times, The Hindu, or similar credible national/regional publications. Self-paid PR articles, sponsored blog placements, or promotional posts on low-authority sites usually do not qualify and can actually weaken your application.',
    verdict: 'Best if you already have genuine press coverage or are building toward it. Stronger long-term credibility signal than the paid badge, but the bar is genuinely high and rejection is common on first attempts.',
  },
  {
    name: 'Meta Verified (Paid Subscription)',
    icon: '💳',
    color: '#FF6B2B',
    cost: '₹500–₹1,500/month (varies by tier and platform)',
    speed: '24–72 hours',
    speedScore: 90,
    requirements: [
      'Must be 18 years or older',
      'Pass a government-issued ID verification check (Aadhaar/PAN accepted in India)',
      'No notability or follower count requirement',
      'Have not made significant profile edits (name, photo) shortly before applying',
      'Account must be in good standing with no recent policy violations',
    ],
    indianNote: 'Pricing in India is typically lower than the US $14.99/month rate — most Indian creators report ₹500–₹1,500/month depending on whether subscribed via web (cheaper) or in-app (App Store/Play Store fees add roughly 30%). Always subscribe via web browser, not the mobile app, to avoid the platform fee markup.',
    verdict: 'The fastest, most accessible path for Indian creators and small businesses without press coverage. For most Indian creators in SEO, entertainment, OTT reviews, and regional content, this is the practical choice — no follower minimum, no media requirement, approval typically within 72 hours.',
  },
]

const requirements4 = [
  { req: 'Authentic', icon: '✅', detail: 'Represents a real person, registered business, or legitimate entity. Parody, fan, and meme accounts do not qualify under either pathway.' },
  { req: 'Unique', icon: '1️⃣', detail: 'Only one verified account per person or business is allowed (with exceptions for language-specific regional accounts of the same brand).' },
  { req: 'Complete', icon: '📋', detail: 'Public account with a profile picture, a written bio, and at least one published post. Private accounts are automatically disqualified.' },
  { req: 'Notable (free path only)', icon: '⭐', detail: 'Demonstrated public interest through genuine media mentions, not self-published or sponsored content. This is the requirement that trips up most applicants.' },
]

const freeSteps = [
  { step: '01', title: 'Make your profile public and 100% complete', body: 'Add a clear profile photo, write a complete bio, and ensure you have at least one published post. Private accounts and incomplete profiles are auto-rejected before any human review happens.' },
  { step: '02', title: 'Build genuine media coverage', body: 'Reach out to credible Indian publications relevant to your niche — NDTV, India Today, The Hindu, Hindustan Times, or respected regional/niche outlets. Pitch a genuine story angle, not a paid placement. A feature in a real news outlet carries far more weight than 10 sponsored blog posts.' },
  { step: '03', title: 'Stay consistently active', body: 'Instagram favours highly active accounts with recognisable branding when reviewing applications. Post consistently, maintain engagement, and avoid major account changes (name, photo, bio) in the weeks before applying.' },
  { step: '04', title: 'Apply through Settings → Request Verification', body: 'Open the Instagram app → Settings → Account Centre → Request Verification (or "Accounts Centre" depending on app version) → submit a government ID and links to your media coverage as proof of notability.' },
  { step: '05', title: 'Wait approximately 30 days', body: 'Instagram\'s review for the free notability path takes roughly a month. You will receive an in-app notification with the decision. If rejected, you can reapply, but not within 30 days of the previous submission — use that window to build stronger notability signals.' },
]

const metaVerifiedSteps = [
  { step: '01', title: 'Open Instagram → Menu → Meta Verified', body: 'Tap your profile picture, then the hamburger menu (three lines) in the top right, then find "Meta Verified" under the "For Professionals" section.' },
  { step: '02', title: 'Select the account(s) to verify', body: 'You can verify up to two eligible profiles — typically one Instagram and one Facebook account linked to the same identity.' },
  { step: '03', title: 'Choose your subscription and pay', body: 'Subscribe via web browser for the lowest price (app store fees add roughly 30% extra). Confirm payment through your chosen method.' },
  { step: '04', title: 'Upload your government ID', body: 'Upload a clear photo of your government-issued ID (Aadhaar or PAN are accepted in India). Ensure the name matches your Instagram profile name exactly — mismatches are the most common rejection reason.' },
  { step: '05', title: 'Complete within 3 days', body: 'You have 3 days from payment to finish the application. If you don\'t complete it in time, Meta automatically issues a refund and you\'ll need to restart the process.' },
  { step: '06', title: 'Receive approval in 24–72 hours', body: 'Most Meta Verified applications in India are processed within 24–72 hours — significantly faster than the free path\'s ~30-day timeline.' },
]

const myths = [
  { myth: 'You need a minimum follower count to get verified', fact: 'False for both paths. Accounts with fewer than 10,000 followers have been verified through the free path when they meet notability requirements. Meta Verified has zero follower requirement — only an age (18+) and ID check.' },
  { myth: 'Paying a third-party "verification service" will get you verified faster', fact: 'False and dangerous. Any service offering to "guarantee" verification through unofficial channels is a scam. Instagram explicitly prohibits this, detects it, and can permanently ban accounts that attempt it. The only legitimate paths are the official in-app request or Meta Verified subscription.' },
  { myth: 'Once verified, you keep the badge forever automatically', fact: 'False. You can lose your badge if you switch from a professional to a personal account, make changes violating Instagram policies, have payment issues (for Meta Verified), or move to a country where Meta Verified isn\'t supported.' },
  { myth: 'Verification guarantees more followers or brand deals', fact: 'Partially true but overstated. Verification adds credibility and can improve search ranking and Explore page visibility, which indirectly supports growth and brand trust — but it does not directly cause follower growth or guarantee brand interest. Strong content and a professional media kit matter far more.' },
  { myth: 'Editing your photo to add a fake blue checkmark is harmless', fact: 'False and against Instagram\'s Terms of Service. Adding a fake verification badge to your profile photo is detectable, violates platform rules, and can result in account suspension or permanent removal.' },
]

export default function InstagramVerificationIndiaPage() {
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
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Get Started Free</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto' }}>
        <div className="hero-pad" style={{ padding: '64px 24px 40px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['Instagram Verification', 'Profile Tips', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Get Verified on Instagram in India in 2026<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>(Blue Tick: Free & Paid Methods)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            No follower minimum required for either verification path in India. The free route needs genuine Indian media coverage and takes ~30 days. Meta Verified costs ₹500–₹1,500/month and gets approved in 24–72 hours. Here is exactly how each works — and which one is right for you.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — How to Get Verified on Instagram in India</div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6, marginBottom: 16 }}>There are two legitimate paths to the Instagram blue tick in India — neither requires a minimum follower count:</p>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Free notability-based verification: Settings → Request Verification → submit ID + proof of genuine Indian media coverage (NDTV, India Today, The Hindu, etc.) → ~30 day review',
                'Meta Verified (paid): Menu → Meta Verified → subscribe via web for ₹500–₹1,500/month → upload Aadhaar/PAN → approved in 24–72 hours, no notability needed',
                'Both require: public account, complete profile (photo + bio + 1 post), authentic identity, only one verified account per person',
                'Never pay third-party "verification services" — this is against Instagram policy and can get your account banned',
                'For most Indian creators without press coverage, Meta Verified via web browser is the faster, more practical route',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Instagram Verification India 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Instagram offers two distinct verification paths in 2026: free notability-based verification for genuinely well-known accounts, and Meta Verified, a paid monthly subscription open to anyone 18 or older who passes an ID check.',
                'Neither verification path has a minimum follower count requirement — accounts with fewer than 10,000 followers have been successfully verified on the free path when meeting notability criteria.',
                'For free verification, Instagram checks for coverage by trusted Indian media outlets such as NDTV, India Today, Hindustan Times, or The Hindu; self-paid PR articles and sponsored blog placements typically do not qualify.',
                'Meta Verified pricing for Indian creators is commonly reported around ₹500–₹1,500 per month, significantly lower than the US base rate, with web subscriptions cheaper than in-app purchases due to App Store/Play Store fee markups of roughly 30%.',
                'Meta Verified applications are typically processed within 24–72 hours, while free notability-based verification requests take approximately 30 days for Instagram to review.',
                'If a free verification request is rejected, applicants must wait at least 30 days before submitting a new request, making it important to strengthen notability signals during the waiting period.',
                'Indian creators and businesses must use government-issued identification — Aadhaar or PAN are commonly accepted — and the name on the ID must match the Instagram profile name exactly to avoid rejection.',
                'Paying any third-party service that claims to guarantee Instagram verification outside the official in-app process or Meta Verified subscription violates Instagram\'s Terms of Service and can result in permanent account suspension.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4 core requirements */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, letterSpacing: '-0.3px' }}>4 Core Requirements for Any Verification Path</h2>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {requirements4.map((row, i) => (
                <div key={i} className="card" style={{ padding: '16px 20px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{row.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 14, marginBottom: 4 }}>{row.req}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, lineHeight: 1.5 }}>{row.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2 Pathways */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>2 Ways to Get Verified — Compared</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 28 }}>Choose based on whether you already have genuine media coverage or want the faster, more predictable paid route.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {pathways.map((path, i) => (
                <div key={i} className="card">
                  <div style={{ background: `linear-gradient(135deg, ${path.color}15, ${path.color}05)`, borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{ background: `${path.color}20`, border: `1px solid ${path.color}35`, borderRadius: 10, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{path.icon}</div>
                      <div style={{ fontWeight: 800, fontSize: 18 }}>{path.name}</div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, marginBottom: 2 }}>Cost</div>
                      <div style={{ fontWeight: 700, color: path.color, fontSize: 14 }}>{path.cost}</div>
                    </div>
                  </div>

                  <div style={{ padding: '12px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', minWidth: 90 }}>Approval speed</span>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 4 }}>
                      <div style={{ width: `${path.speedScore}%`, height: '100%', borderRadius: 3, background: path.color }} />
                    </div>
                    <span style={{ fontSize: 11, color: path.color, fontWeight: 700, minWidth: 70, textAlign: 'right' }}>{path.speed}</span>
                  </div>

                  <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>Requirements</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {path.requirements.map((req, j) => (
                        <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                          <span style={{ color: '#4CAF50', flexShrink: 0, fontSize: 13 }}>✓</span>
                          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.5 }}>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <span style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>🇮🇳 INDIA NOTE</span>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.5 }}>{path.indianNote}</span>
                    </div>
                  </div>

                  <div style={{ padding: '14px 24px' }}>
                    <div style={{ background: `${path.color}10`, border: `1px solid ${path.color}25`, borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
                      <span style={{ color: path.color, fontWeight: 700, fontSize: 12, flexShrink: 0 }}>VERDICT</span>
                      <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{path.verdict}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Free Steps */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Free Verification — Step-by-Step</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>The notability-based path. Free but the hardest to qualify for.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {freeSteps.map((item) => (
                <div key={item.step} className="card" style={{ padding: '18px 22px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(76,175,80,0.12)', border: '1px solid rgba(76,175,80,0.25)', borderRadius: 10, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#4CAF50', fontSize: 14, flexShrink: 0 }}>{item.step}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{item.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.65 }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Meta Verified Steps */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Meta Verified — Step-by-Step</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>The paid path. Fastest and most predictable for Indian creators without press coverage.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {metaVerifiedSteps.map((item) => (
                <div key={item.step} className="card" style={{ padding: '18px 22px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 10, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#FF6B2B', fontSize: 14, flexShrink: 0 }}>{item.step}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{item.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.65 }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Verification builds trust — your media kit closes the deal</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>A blue tick signals authenticity, but brands still want to see your stats, rates, and past work before they pay you. Build your Identity Kit profile alongside your verification journey — free, takes 10 minutes.</p>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build My Free Profile →
            </Link>
          </div>

          {/* Myths */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>5 Instagram Verification Myths — Debunked</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {myths.map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.1)', borderRadius: 12, padding: '18px 22px', display: 'flex', gap: 14 }}>
                  <div style={{ color: '#FF5252', fontWeight: 700, fontSize: 20, flexShrink: 0 }}>✗</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#FF8080', fontSize: 15, marginBottom: 6 }}>Myth: {item.myth}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}><span style={{ color: '#4CAF50', fontWeight: 600 }}>Fact: </span>{item.fact}</div>
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
                { q: 'How many followers do I need to get verified on Instagram in India?', a: 'There is no minimum follower count for either verification path. Accounts with fewer than 10,000 followers have been successfully verified through the free notability-based path when they meet Instagram\'s criteria, and Meta Verified has zero follower requirement — only an age requirement (18+) and a government ID check. A strong, active audience can support your case but is never the deciding factor alone.' },
                { q: 'How much does Meta Verified cost in India?', a: 'Indian creators commonly report Meta Verified pricing around ₹500–₹1,500 per month, depending on the subscription tier and whether you subscribe via web browser or in-app. Subscribing through a web browser is cheaper than through the Apple App Store or Google Play Store, which add a roughly 30% platform fee markup. Always check current pricing in the app, as Meta periodically adjusts rates and offers introductory pricing for the first 3 months.' },
                { q: 'Can I get verified on Instagram for free in India?', a: 'Yes. Instagram\'s traditional free verification is available to anyone who meets the notability requirement — proven through genuine, credible media coverage. For Indian creators, this typically means being featured by trusted national or regional outlets such as NDTV, India Today, Hindustan Times, or The Hindu. Self-paid PR articles or sponsored blog placements usually do not satisfy this requirement. The process is free to apply for, but approval is not guaranteed and takes approximately 30 days.' },
                { q: 'What documents do I need for Instagram verification in India?', a: 'Both verification paths require a government-issued identification document. In India, Aadhaar and PAN cards are commonly accepted. The name on your ID must match your Instagram profile name exactly — mismatches are one of the most common reasons applications get rejected. For the free path, you additionally need links or screenshots proving genuine media coverage of your notability.' },
                { q: 'How long does Instagram verification take in India?', a: 'Meta Verified (paid) applications are typically processed within 24–72 hours in India — among the fastest verification timelines globally. The free, notability-based verification request takes approximately 30 days for Instagram to review. If your free request is rejected, you must wait at least 30 days before reapplying, so use that period to strengthen your media coverage and notability signals.' },
                { q: 'What happens if my Instagram verification request is rejected in India?', a: 'You can reapply, but not within 30 days of your previous submission. A common reason for rejection on the free path is insufficient or low-quality "notability" proof — self-published content, low-authority sites, or sponsored posts rather than genuine independent media coverage. For Meta Verified, the most common rejection reasons are a name mismatch between your ID and Instagram profile, or recent significant profile edits (name/photo changes) made shortly before applying.' },
                { q: 'Does Instagram verification help with brand deals in India?', a: 'Verification adds a credibility signal that can support brand trust and may modestly improve search ranking and Explore page visibility, but it does not directly cause more brand deals or follower growth. Brands evaluating creator partnerships in India still primarily check engagement rate, audience demographics, content quality, and a professional media kit before committing budget. Verification is a trust signal alongside these factors, not a replacement for them.' },
                { q: 'Is it safe to use third-party services that promise Instagram verification in India?', a: 'No. Any service claiming to guarantee Instagram verification through unofficial channels outside the in-app request process or the official Meta Verified subscription violates Instagram\'s Terms of Service. Instagram actively detects and removes fake or fraudulently obtained verification badges and can permanently suspend accounts that attempt this. The only legitimate paths are the free in-app verification request and the official Meta Verified subscription accessed through Instagram\'s own menu.' },
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
                { href: '/blog/how-to-grow-instagram-followers-india-2026', title: 'How to Grow Instagram Followers in India 2026', tag: 'Growth' },
                { href: '/blog/influencer-media-kit-india-2026', title: 'Influencer Media Kit India 2026 — Free Template', tag: 'Media Kit' },
                { href: '/blog/how-to-make-money-on-instagram-india-2026', title: 'How to Make Money on Instagram India 2026', tag: 'Instagram Income' },
                { href: '/blog/instagram-bio-ideas-creators-india', title: 'Instagram Bio Ideas for Creators in India', tag: 'Profile Tips' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>✅</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Verified or not — brands check your media kit next
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a professional Identity Kit profile with your stats, rates, and past work — the credibility signal that actually closes brand deals. Free, built for Indian creators.
            </p>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Create My Free Identity Kit →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 14 }}>
              identitykit.in · Free forever · Media kit + Rate card + Creator CV
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
