import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ASCI Guidelines for Influencers India 2026: Disclosure Rules Explained (#Ad, Videos, Finance)',
  description: 'Complete guide to ASCI influencer advertising guidelines in India 2026. Who must disclose, exact #Ad rules for feed posts, Reels, Stories and podcasts, new SEBI/CA rules for finfluencers, AI-influencer disclosure, penalties, and a 7-point compliance checklist for every Indian creator.',
  keywords: 'asci guidelines for influencers, asci guidelines india, influencer disclosure rules india, ad disclosure instagram india, sponsored post rules india, asci finfluencer rules, material connection disclosure india, ccpa influencer guidelines',
  openGraph: {
    title: 'ASCI Guidelines for Influencers India 2026: Disclosure Rules Explained',
    description: 'Every Indian influencer — nano to celebrity — must disclose paid content. Full 2026 compliance guide: exact #Ad formats by platform, finfluencer SEBI rules, AI-influencer disclosure, and real penalty numbers.',
    url: 'https://identitykit.in/blog/asci-guidelines-influencer-disclosure-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/asci-guidelines-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/asci-guidelines-influencer-disclosure-india-2026',
  },
}

const triggers = [
  { icon: '💰', title: 'Cash or bank payment', detail: 'Any monetary compensation for a post, mention, or review — regardless of the amount.' },
  { icon: '🎁', title: 'Free products, services or travel', detail: 'Gifted products, PR packages, comped hotel stays, or sponsored trips in exchange for coverage — even without an explicit ask to post.' },
  { icon: '🔗', title: 'Affiliate commissions', detail: 'Earning a commission from a link, code, or referral in your content counts as a material connection.' },
  { icon: '🏢', title: 'Equity or employment ties', detail: 'Holding shares in, or being employed/advised by, a brand you mention to your audience.' },
  { icon: '🤖', title: 'AI-generated personas', detail: 'Virtual influencers must disclose that they are not a real human, on top of any paid-partnership disclosure.' },
]

const platformRules = [
  {
    platform: 'Instagram Feed Posts',
    icon: '📸',
    color: '#E1306C',
    rules: [
      'Use Instagram\'s built-in "Paid Partnership" label (Settings → Add Paid Partnership Label)',
      'Also add #Ad in the first two lines of the caption — do not rely on the platform tag alone',
      'Never bury the disclosure inside a hashtag cluster at the end of a long caption',
    ],
  },
  {
    platform: 'Instagram Stories',
    icon: '⭕',
    color: '#F77737',
    rules: [
      'Disclosure label (sticker or text) must stay visible for the entire duration the story is displayed',
      'Cannot be hidden behind a swipe-up/link sticker with no visible label',
      'Use the same "Paid Partnership" sticker Instagram provides for Stories',
    ],
  },
  {
    platform: 'Reels & YouTube Video',
    icon: '🎬',
    color: '#FF0000',
    rules: [
      'Verbal disclosure required within the first 10 seconds, in addition to a text overlay',
      'Videos 15–120 seconds: disclosure text must stay visible for at least one-third of the runtime',
      'Videos over 2 minutes: disclosure must remain visible for the entire video',
    ],
  },
  {
    platform: 'Podcasts / Audio',
    icon: '🎙️',
    color: '#8B5CF6',
    rules: [
      'Verbal disclosure must be stated at the beginning of the segment discussing the brand',
      'A disclosure only in the show notes or episode description is not sufficient on its own',
      'Re-state disclosure if the sponsored segment resumes after a break',
    ],
  },
]

const acceptableTags = ['#Ad', '#Sponsored', '#PaidPartnership', '#Collab (must be paired with #Ad)']
const unacceptableTags = ['#Collab or #Partnership alone (no #Ad)', '#ThanksTo[Brand] with no ad wording', 'Disclosure only in a comment', 'Disclosure buried after 10+ other hashtags']

const finfluencerRules = [
  { rule: 'SEBI registration required', detail: 'Influencers giving investment or stock-related advice must be SEBI-registered and clearly display their registration number, name, and qualification on the content itself.' },
  { rule: 'CA / CS / IRDAI credentials for other finance advice', detail: 'Non-investment financial advisors need a Chartered Accountant, Company Secretary, or IRDAI insurance licence credential shown prominently.' },
  { rule: 'Mandatory disclaimer', detail: 'Content must explicitly state "This is not personalised advice — consult a professional," even when the creator is qualified.' },
  { rule: 'Health influencers need matching proof', detail: 'MBBS, registered dietitian, or certified fitness trainer credentials must be shown before giving technical health or nutrition advice.' },
  { rule: 'Casual promotion is still allowed without credentials', detail: 'Broad-based brand promotion (e.g. "I use this app") doesn\'t require credentials — the qualification requirement kicks in specifically for technical advice or merit/demerit evaluations.' },
]

const penalties = [
  { violation: 'Undisclosed paid partnership (first case)', consequence: 'ASCI can rule against the content, require takedown/edit, and publicly name the violator in its transparency reports.' },
  { violation: 'CCPA enforcement action', consequence: 'The Central Consumer Protection Authority treats non-disclosure as an unfair trade practice, with its own penalty powers separate from ASCI.' },
  { violation: 'Undisclosed AI/virtual influencer persona', consequence: '₹10 lakh for a first-time violation, up to ₹50 lakh for repeat offences — liability shared between brand and agency.' },
  { violation: 'Unsubstantiated claims (health/finance)', consequence: 'Over 70% of flagged influencer content in recent ASCI reviews involved exaggerated or unverified claims like "guaranteed returns" or "instant results" — a separate violation from disclosure.' },
  { violation: 'Brand-side liability', consequence: 'Brands share responsibility with the influencer. If a partnership is found non-compliant, both parties can be held accountable — "the influencer wasn\'t asked to post it" is not a valid defence if a material connection exists.' },
]

const checklist = [
  { step: '01', title: 'Confirm if a material connection exists', body: 'Any payment, gift, discount, trip, or affiliate commission counts — even if the brand never explicitly asked you to post. If there\'s any benefit flowing from the brand to you, disclosure is required.' },
  { step: '02', title: 'Pick the right disclosure tag', body: 'Use #Ad, #Sponsored, or #PaidPartnership. #Collab is acceptable only when paired with #Ad. Never rely on a vague hashtag alone.' },
  { step: '03', title: 'Place it where it can\'t be missed', body: 'First two lines of the caption for static posts. First 10 seconds verbally plus a full-duration text overlay for video. Visible for the whole Story if using Stories.' },
  { step: '04', title: 'Check if you need credentials', body: 'If you\'re giving financial or health advice (not just casual promotion), confirm you hold and display the required SEBI/CA/medical credential before posting.' },
  { step: '05', title: 'Verify your claims are substantiated', body: 'Avoid absolute claims like "guaranteed," "100% safe," or "instant results" unless you have documentation from the brand backing them up — keep that documentation on file.' },
  { step: '06', title: 'Use platform-native tools', body: 'Instagram\'s Paid Partnership label and Branded Content Tool exist specifically for this — use them alongside your caption disclosure, not instead of it.' },
  { step: '07', title: 'Keep records for 3 years', body: 'Retain brand briefs, disclosure language used, and any claim-substantiation documents. This protects you if a complaint or audit ever arises.' },
]

const mistakes = [
  { m: 'Assuming small accounts are exempt', f: 'ASCI guidelines apply regardless of follower count — a 2,000-follower nano creator has the same disclosure obligation as a celebrity with millions of followers.' },
  { m: 'Treating unbiased reviews as exempt from disclosure', f: 'Even a completely genuine, unprompted positive review requires disclosure if there was any material connection (a gifted product, a discount code) with the brand.' },
  { m: 'Hiding the tag in a hashtag cluster', f: 'ASCI explicitly rejects disclosures buried among 10+ unrelated hashtags at the end of a caption — it must be upfront and unmissable, ideally in the first two lines.' },
  { m: 'Giving financial/health advice without credentials', f: 'Since Addendum 2, unqualified influencers legally cannot give technical financial or medical advice, even with a disclosure label attached — the credential requirement is separate from and in addition to disclosure.' },
  { m: 'Assuming the brand handles compliance', f: 'Brands and influencers are jointly liable. "The brand didn\'t ask me to disclose it" does not protect a creator from a compliance finding against their own account.' },
]

export default function ASCIGuidelinesIndiaPage() {
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
            {['ASCI Guidelines', 'Ad Disclosure', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            ASCI Guidelines for Influencers<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>in India 2026 — Full Disclosure Guide</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Every influencer in India — nano to celebrity — must disclose paid content, gifted products, and affiliate links. ASCI rejects the vast majority of non-compliant cases specifically because disclosures were hidden, delayed, or unclear. Here's exactly what the rules require, platform by platform, plus the new finfluencer and AI-influencer rules for 2026.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — ASCI Disclosure Rules for Indian Influencers</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Disclosure is mandatory whenever a "material connection" exists — payment, free products, affiliate commissions, equity, or employment ties with the brand',
                'Use #Ad, #Sponsored, or #PaidPartnership in the first two lines of the caption — never bury it in a hashtag cluster',
                'Video content needs a verbal disclosure in the first 10 seconds plus a text overlay for at least one-third of the runtime',
                'Finance and health influencers must display SEBI/CA/medical credentials before giving technical advice — casual promotion doesn\'t require this',
                'AI-generated virtual influencers must separately disclose they are not human, with fines of ₹10–50 lakh for non-compliance',
                'Both influencer and brand are jointly liable — "I wasn\'t asked to disclose it" is not a valid defence',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — ASCI Guidelines India 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'ASCI\'s guidelines apply to every influencer operating in India regardless of follower count — from nano creators with 2,000 followers to celebrities with millions.',
                'ASCI has rejected the large majority of non-compliant cases specifically because disclosures were hidden, delayed, or unclear, rather than absent entirely.',
                'India\'s influencer marketing sector is projected to grow strongly through 2026, with the majority of Indian consumers reporting that influencer content affects their purchase decisions.',
                'ASCI\'s April 2025 Addendum 2 introduced mandatory qualification disclosure for finfluencers (SEBI registration) and health influencers (medical credentials).',
                'For videos longer than 2 minutes, the disclosure label must remain visible for the entire duration, not just a brief flash at the start.',
                'Undisclosed AI-generated virtual influencer content can draw fines from roughly ₹10 lakh for a first violation up to ₹50 lakh for repeat offences.',
                'The Central Consumer Protection Authority (CCPA) treats non-disclosure of paid partnerships as an unfair trade practice, separate from and in addition to ASCI\'s own rulings.',
                'Brands and influencers are held jointly liable under current guidelines — a shift from earlier frameworks where influencers alone bore accountability.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What triggers disclosure */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>What Counts as a "Material Connection" (Disclosure Is Mandatory)</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>ASCI defines a material connection broadly — any benefit, however small, that could affect the credibility of your endorsement.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {triggers.map((item, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Platform rules */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Exact Disclosure Rules by Platform & Content Type</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Different formats need different disclosure tactics — here's precisely what ASCI requires for each.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {platformRules.map((p) => (
                <div key={p.platform} className="card">
                  <div style={{ background: `linear-gradient(135deg, ${p.color}18, ${p.color}05)`, borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ fontSize: 24 }}>{p.icon}</div>
                    <div style={{ fontWeight: 800, fontSize: 16 }}>{p.platform}</div>
                  </div>
                  <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {p.rules.map((r, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ color: p.color, flexShrink: 0, fontWeight: 700, marginTop: 1 }}>→</span>
                        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13.5, lineHeight: 1.65 }}>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Acceptable vs not */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Acceptable vs. Unacceptable Disclosure Tags</h2>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.2)', borderRadius: 14, padding: '20px 22px' }}>
                <div style={{ color: '#4CAF50', fontWeight: 800, fontSize: 14, marginBottom: 14 }}>✓ Acceptable</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {acceptableTags.map((t, i) => (
                    <div key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.5 }}>{t}</div>
                  ))}
                </div>
              </div>
              <div style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.15)', borderRadius: 14, padding: '20px 22px' }}>
                <div style={{ color: '#FF5252', fontWeight: 800, fontSize: 14, marginBottom: 14 }}>✗ Not acceptable</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {unacceptableTags.map((t, i) => (
                    <div key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.5 }}>{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>A compliant creator is a bankable creator</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Brands increasingly vet creators for compliance before signing deals. A professional Identity Kit profile and a clear brand deal contract show brands you take disclosure and deliverables seriously — free, takes 10 minutes.</p>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build My Free Profile →
            </Link>
          </div>

          {/* Finfluencer rules */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>New 2026 Rules for Finfluencers & Health Influencers (Addendum 2)</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>ASCI's Addendum 2 introduced qualification requirements on top of standard disclosure — this is the strictest tier of the guidelines.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {finfluencerRules.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF6B2B' }}>{item.rule}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.65 }}>{item.detail}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16 }}>
              <Link href="/blog/how-to-become-finfluencer-india" style={{ color: '#FF6B2B', fontSize: 14, fontWeight: 700 }}>Read the full Finfluencer Guide for India →</Link>
            </div>
          </section>

          {/* Penalties */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>What Happens If You Don't Disclose</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Non-compliance has moved from a reputational risk to a financial and legal one.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {penalties.map((row, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6, color: '#FF5252' }}>{row.violation}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{row.consequence}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 7 step checklist */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>7-Step ASCI Compliance Checklist for Every Post</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Run through this before every single sponsored post, story, or Reel — make it as automatic as spell-check.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {checklist.map((item) => (
                <div key={item.step} className="card" style={{ padding: '22px 24px' }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 10, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#FF6B2B', fontSize: 15, flexShrink: 0 }}>{item.step}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{item.title}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>{item.body}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>5 Mistakes Indian Creators Make With ASCI Compliance</h2>
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
                { q: 'Do nano influencers with under 5,000 followers need to follow ASCI guidelines?', a: 'Yes. ASCI\'s guidelines apply to every influencer operating in India regardless of follower count. A nano creator with 2,000 followers has the exact same disclosure obligation as a celebrity with millions — the rules are based on whether a material connection exists, not audience size.' },
                { q: 'Do I need to disclose a genuinely positive, unbiased review of a gifted product?', a: 'Yes. Even if your review is completely unbiased and fully your own opinion, if there was any material connection — a free product, a discount, a paid trip — disclosure is still mandatory. The rule is about the existence of a benefit, not whether the content itself is honest.' },
                { q: 'What exact hashtag should I use to disclose a sponsored post in India?', a: '#Ad, #Sponsored, or #PaidPartnership are all acceptable and should appear in the first two lines of your caption. #Collab is acceptable only when paired with #Ad — using #Collab alone, or vague phrases like "thanks to [brand] for this," does not meet ASCI\'s disclosure standard.' },
                { q: 'How long does a disclosure need to stay on screen in a video?', a: 'For videos up to 15 seconds, the label must be visible for at least 3 seconds. For videos between 15 seconds and 2 minutes, it must remain visible for at least one-third of the runtime. For videos longer than 2 minutes, the disclosure must stay visible for the entire video. A verbal disclosure within the first 10 seconds is also required.' },
                { q: 'Can I give stock market or investment advice as an influencer in India?', a: 'Only if you hold the required qualification. Under ASCI\'s Addendum 2, influencers offering technical investment advice or evaluating financial products must be SEBI-registered and display their registration number, name, and qualification prominently. Casual mentions of using an app or platform without technical advice don\'t require this, but genuine investment guidance does.' },
                { q: 'Are AI-generated virtual influencers exempt from these rules?', a: 'No — they face additional rules on top of standard disclosure. AI-generated personas must clearly disclose that they are not a real human, with the label visible on the content itself, not buried in a caption. Non-compliance can draw fines ranging from roughly ₹10 lakh for a first violation to ₹50 lakh for repeat offences, with liability shared between the brand and the agency managing the AI persona.' },
                { q: 'Who gets penalised if a sponsored post isn\'t disclosed properly — the brand or the influencer?', a: 'Both. Current guidelines hold brands and influencers jointly liable — a shift from earlier frameworks where influencers alone bore the consequences. Brands are expected to instruct influencers to edit or remove non-compliant content immediately once identified, but that doesn\'t remove the influencer\'s own responsibility to disclose correctly from the start.' },
                { q: 'Is ASCI\'s code legally binding, or just a self-regulatory guideline?', a: 'ASCI is a self-regulatory body, and its code isn\'t directly binding under law for most digital advertising — but it is binding on ASCI members, and increasingly referenced by consumer courts and the CCPA, which does have independent statutory penalty powers. In practice, non-disclosure is now treated as an unfair trade practice regardless of ASCI\'s self-regulatory status, so treating the guidelines as optional is a real legal and reputational risk.' },
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
                { href: '/blog/influencer-tax-gst-india-2026', title: 'Influencer Tax & GST Guide India 2026', tag: 'Tax & GST' },
                { href: '/blog/how-to-become-finfluencer-india', title: 'How to Become a Finfluencer in India', tag: 'Finfluencer' },
                { href: '/blog/brand-deal-contract-template-india', title: 'Brand Deal Contract Template for Indian Creators', tag: 'Legal' },
                { href: '/blog/how-to-pitch-brands-india-influencer-2026', title: 'How to Pitch Brands as an Influencer in India', tag: 'Brand Deals' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🛡️</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Compliant creators close deals faster — and keep them.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a professional creator profile and rate card that shows brands you're serious, reliable, and easy to work with. Free, built for Indian creators.
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
          <Link href="/tools/brand-deal-contract-template" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contract Template</Link>
          <Link href="/tools/influencer-rate-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Rate Calculator</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
