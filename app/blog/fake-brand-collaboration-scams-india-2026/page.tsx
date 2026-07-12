import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Spot and Avoid Fake Brand Collaboration Scams in India (2026)',
  description: 'A creator-side guide to fake brand collaboration scams targeting Indian influencers — real documented patterns impersonating Nykaa and Mamaearth, the exact red flags to check, and what legal recourse (IT Act, cybercrime cell) is actually available if you\'ve been scammed.',
  keywords: 'fake brand collaboration scam india, influencer scam india verification fee, brand impersonation scam creator india, how to verify brand collaboration real, cybercrime complaint influencer scam india',
  openGraph: {
    title: 'How to Spot and Avoid Fake Brand Collaboration Scams in India (2026)',
    description: 'A Delhi-based beauty creator paid ₹3,500 to a fake Nykaa account and never heard back. Here\'s exactly how these scams work and how to protect yourself.',
    url: 'https://identitykit.in/blog/fake-brand-collaboration-scams-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/brand-scams-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/fake-brand-collaboration-scams-india-2026',
  },
}

const commonScams = [
  { icon: '💳', title: 'The upfront fee scam', detail: 'A "brand" offers a paid or gifted collaboration, then asks for a registration, shipping, security deposit, or "verification" fee before anything is sent. This is the single most common pattern — a legitimate brand never asks a creator to pay to collaborate.' },
  { icon: '🎭', title: 'Brand impersonation', detail: 'Fake accounts use a real brand\'s logo, a near-identical handle (extra underscores, slight misspellings), and professional-sounding messaging to appear legitimate — documented cases have impersonated major Indian brands like Nykaa and Mamaearth specifically.' },
  { icon: '🔗', title: 'Phishing disguised as a contract', detail: 'A link labeled "sign here" or "verify your account" that actually steals your Instagram or email login credentials — often the real goal, more valuable to a scammer than a small fee.' },
  { icon: '👔', title: 'Fake talent agencies', detail: 'Scammers pitch themselves as a management agency or "network" that will get you sponsorship deals for an upfront registration or "account optimization" fee, sometimes with fake testimonials and a professional-looking website.' },
  { icon: '⏳', title: 'Ghosting after unpaid work', detail: 'Not always outright fraud from the start — some shell companies and disorganised agencies genuinely commission content, then delay or avoid payment for months, particularly targeting nano and micro creators.' },
]

const redFlags = [
  'Any request for payment before a collaboration — registration fees, shipping costs, "verification" charges, or security deposits',
  'A brand contact email from a generic domain (Gmail, Yahoo) rather than the company\'s official domain',
  'Pressure to decide or pay quickly, with urgency language like "limited slots" or "offer expires today"',
  'A message that flatters excessively ("you\'re one of our top creators!") before making an unusual ask',
  'An offer of unusually high payment with no interest in your actual rates, follower count, or engagement data',
  'A request for banking details, OTPs, or login credentials framed as "account verification"',
  'A brand or agency with no real, verifiable online presence — no real website, no consistent social history, no past collaborations you can check',
]

const verificationSteps = [
  { step: '01', title: 'Check the email domain, not just the display name', body: 'A legitimate brand\'s collaboration email comes from their own company domain (e.g. @nykaa.com), not a generic Gmail address — this is one of the fastest checks available.' },
  { step: '02', title: 'Cross-verify through the brand\'s official channels', body: 'Go directly to the brand\'s verified Instagram account or official website and ask whether the offer you received is genuine — don\'t rely on any link or contact info the message itself provided.' },
  { step: '03', title: 'Search the brand or agency name independently', body: 'A quick search for the exact brand/agency name plus "scam" or "review" often surfaces other creators\' experiences before you\'ve lost anything.' },
  { step: '04', title: 'Ask for their GST number and business registration', body: 'A legitimate Indian business will readily provide this. Reluctance or vague answers to a direct, reasonable business question is itself a signal.' },
  { step: '05', title: 'Insist on a written agreement before any payment or product ships', body: 'A real brand collaboration is documented — deliverables, timeline, and payment terms in writing, not just a friendly DM exchange.' },
  { step: '06', title: 'Never pay to participate in a collaboration', body: 'This is the single clearest rule: money should flow from the brand to you, never the reverse, for a legitimate paid or gifted collaboration.' },
]

const legalRecourse = [
  { action: 'File a cybercrime complaint', detail: 'Impersonation and fraud can be reported to India\'s cybercrime cell — this is generally the fastest official channel for scams involving fake accounts or phishing.' },
  { action: 'Criminal charges under the IT Act and IPC', detail: 'Impersonation, forgery, cheating, and fraud carry criminal penalties under the IT Act and Indian Penal Code, with reported cases leading to imprisonment terms alongside fines.' },
  { action: 'Personality rights protection', detail: 'While no single statute covers influencers specifically, a creator\'s image and likeness are protected under general personality rights, allowing pursuit of injunctions and compensation for unauthorized use.' },
  { action: 'Platform reporting obligations', detail: 'Platforms hosting fraudulent accounts or content are legally required to act on complaints — persistent failure to do so can affect their own liability protections.' },
]

export default function BrandScamsIndiaPage() {
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
            {['Creator Safety', 'Brand Deals', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Spot & Avoid Fake<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Brand Collaboration Scams in India</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A documented case: a Delhi-based beauty creator with 8,000 followers paid ₹3,500 to a fake Nykaa account for a "registration fee" and never heard back. These scams target creators at every follower level — here's exactly how to spot them and what to do if it happens to you.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Spotting a Fake Brand Collaboration</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'A legitimate brand never asks you to pay a registration, shipping, or "verification" fee to participate in a collaboration',
                'Check the email domain — a real brand emails from its own company domain, not a generic Gmail or Yahoo address',
                'Cross-verify any offer directly through the brand\'s official, verified Instagram account or website before responding',
                'Fake accounts specifically impersonating major Indian brands (Nykaa, Mamaearth) with near-identical handles have been documented targeting creators',
                'Never share banking details, OTPs, or login credentials — no legitimate brand needs these to collaborate with you',
                'If you\'ve been scammed, you can file a cybercrime complaint and pursue remedies under the IT Act and IPC in India',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Brand Scams Targeting Indian Creators</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Documented fake accounts impersonating Nykaa\'s brand partnership team have asked creators for registration fees of ₹2,000-5,000 to secure a collaboration, disappearing after payment.',
                'A separate documented scam pattern impersonating Mamaearth offered gifted products worth ₹5,000-10,000 in exchange for a ₹500-1,500 "shipping and handling" fee, after which either nothing arrived or counterfeit products were sent.',
                'Nano influencers (1,000-10,000 followers) and micro influencers (10,000-100,000 followers) are considered especially vulnerable to scams, fraud, and payment ghosting, according to industry experts who spoke with Indian creators directly.',
                'Beyond outright scams, some shell companies and disorganised agencies have been reported commissioning real content from creators and then delaying or avoiding payment for months.',
                'Indian creators targeted by impersonation or fake collaboration scams can pursue cybercrime complaints and criminal charges under the IT Act and Indian Penal Code, alongside personality-rights-based civil remedies, even though no single statute covers influencers specifically.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Common scams */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>5 Common Scam Patterns to Recognize</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {commonScams.map((item, i) => (
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
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>7 Red Flags in a Collaboration Offer</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {redFlags.map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,152,0,0.05)', border: '1px solid rgba(255,152,0,0.18)', borderRadius: 12, padding: '14px 20px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#FF9800', flexShrink: 0, fontWeight: 700 }}>⚠</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Look professional, and demand the same from brands</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>A free Identity Kit contract template ensures every real collaboration starts with a written agreement — the single best protection against ghosting and non-payment.</p>
            </div>
            <Link href="/tools/brand-deal-contract-template" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Get My Contract Template →
            </Link>
          </div>

          {/* Verification steps */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>6 Steps to Verify a Collaboration Offer</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {verificationSteps.map((item) => (
                <div key={item.step} className="card" style={{ padding: '20px 22px' }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 10, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#FF6B2B', fontSize: 14, flexShrink: 0 }}>{item.step}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>{item.title}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.7 }}>{item.body}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Legal recourse */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>If You've Been Scammed: Legal Recourse in India</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {legalRecourse.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF6B2B' }}>{item.action}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              ))}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12.5, marginTop: 14, lineHeight: 1.6 }}>This is general information, not legal advice — consult a lawyer for guidance specific to your situation, especially for significant financial losses.</p>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'Is it ever normal for a brand to ask me to pay for a collaboration?', a: 'No, never. Legitimate paid or gifted collaborations flow money and products from the brand to you — not the reverse. Any request for a registration fee, shipping cost, security deposit, or "verification" charge before you receive anything is a scam pattern, regardless of how professional the message looks.' },
                { q: 'How can I tell if a message impersonating a big brand like Nykaa or Mamaearth is fake?', a: 'Check the email domain first — legitimate communications come from the brand\'s own domain (e.g. @nykaa.com), not a generic address. Also check the Instagram handle carefully for subtle differences (extra underscores, slight misspellings) from the brand\'s verified account, and cross-verify any offer by messaging the brand\'s official verified account directly.' },
                { q: 'What should I do if a "brand" wants my banking details before sending payment?', a: 'Don\'t provide them. No legitimate brand needs your banking details, OTP, or login credentials to send you payment or products — a request framed as "account verification" is almost always a phishing attempt designed to steal your credentials, not confirm your identity.' },
                { q: 'I already paid a fee to a fake brand account — what can I do now?', a: 'Report the account on the platform immediately, and consider filing a cybercrime complaint, since impersonation and fraud carry criminal penalties under the IT Act and Indian Penal Code in India. Also contact your bank if you shared any payment details, and change passwords on any accounts you may have exposed.' },
                { q: 'Are bigger creators safe from these scams?', a: 'Less vulnerable to payment scams specifically, since larger creators often have experience or business managers handling operational details, but they face a different risk: individuals or groups posing as agencies sometimes approach top-tier creators specifically to extract proprietary content strategies and audience insights.' },
                { q: 'How do I verify a smaller, lesser-known brand is legitimate before collaborating?', a: 'Ask for their GST number and business registration — a genuine business will provide this without hesitation. Also search for the brand and any agency name independently, check for a real, consistent online presence, and insist on a written agreement before any product ships or payment is made.' },
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
                { href: '/blog/how-to-reply-brand-collaboration-dm-india-2026', title: 'How to Reply to a Brand Collaboration DM', tag: 'Brand DM Reply' },
                { href: '/blog/brand-deal-contract-template-india', title: 'Brand Deal Contract Template for Indian Creators', tag: 'Legal' },
                { href: '/blog/how-to-get-paid-by-brands-india-2026', title: 'How to Get Paid by Brands in India', tag: 'Getting Paid' },
                { href: '/blog/kill-fee-brand-cancellation-india-2026', title: 'Brand Cancelled Your Campaign? Kill Fees Explained', tag: 'Kill Fees' },
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
              Protect yourself. Get a real contract every time.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a contract template ready — every legitimate collaboration should start with one.
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
          <Link href="/tools/brand-pitch-email-generator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Pitch Email Generator</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
