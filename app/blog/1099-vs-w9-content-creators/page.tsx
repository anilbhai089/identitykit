import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '1099 vs. W-9 for Content Creators: What You Actually Need (2026)',
  description: 'A W-9 is what you fill out before a brand pays you. A 1099-NEC is what they send you after. Here\'s exactly how it works for creators, plus the 2026 threshold change every creator earning brand deal income should know about.',
  keywords: '1099 vs w9 content creator, do influencers get 1099, w9 form for creators, 1099 nec threshold 2026, brand deal taxes creator, do i need a w9 for brand deals',
  openGraph: {
    title: '1099 vs. W-9 for Content Creators: What You Actually Need (2026)',
    description: 'A W-9 is what you give a brand before they pay you. A 1099-NEC is what they send you after. Here\'s the difference, plus a 2026 threshold change that affects every US creator earning brand deal income.',
    url: 'https://identitykit.in/blog/1099-vs-w9-content-creators',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/1099-vs-w9-creators.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/1099-vs-w9-content-creators',
  },
}

const w9Steps = [
  { step: '01', title: 'A brand asks you to fill one out before paying you', body: 'When a brand or agency plans to pay you as an independent contractor, they\'re required to collect a W-9 from you before the first payment — not after. This is normal and doesn\'t mean anything has gone wrong; it\'s standard procedure for any US business paying a non-employee.' },
  { step: '02', title: 'You provide your name, business name (if any), and tax classification', body: 'Most solo creators check "Individual/sole proprietor" unless they\'ve formed an LLC or corporation. If you have formed a business entity, use the classification that matches your actual legal structure.' },
  { step: '03', title: 'You provide your SSN or EIN', body: 'You can use your personal Social Security Number, or an Employer Identification Number (EIN) if you have one. Many creators get a free EIN specifically so they don\'t have to hand out their SSN to every brand they work with.' },
  { step: '04', title: 'You sign and send it back — that\'s the entire form', body: 'A W-9 is one page. It doesn\'t report any income and it isn\'t filed with the IRS by you — it simply gives the brand what they need to correctly file a 1099 for you later if the payment crosses the threshold.' },
]

const comparisonPoints = [
  { label: 'Who fills it out', w9: 'You (the creator)', form1099: 'The brand or platform that paid you' },
  { label: 'When it happens', w9: 'Before you get paid', form1099: 'After the tax year ends, by January 31' },
  { label: 'What it reports', w9: 'Your name and tax ID — no income figures', form1099: 'The total amount they paid you that year' },
  { label: 'Who receives it', w9: 'The brand keeps it on file', form1099: 'You and the IRS both get a copy' },
  { label: 'Do you file it with the IRS?', w9: 'No', form1099: 'No — you report the income on your own tax return using it as a reference' },
]

const faqs = [
  { q: 'Do brands have to send me a 1099 for every deal?', a: 'For 2026 payments, a brand generally only has to issue a Form 1099-NEC if they paid you $2,000 or more in that calendar year — a threshold that increased from $600 starting January 1, 2026. Below that, they may not send you paperwork at all.' },
  { q: 'If I don\'t get a 1099, do I still owe tax on that income?', a: 'Yes. The 1099 threshold determines when a business must file paperwork, not when you owe tax. In the US, self-employment income is generally reportable once your net self-employment earnings for the year exceed $400, regardless of whether any single payer sent you a 1099. Multiple smaller brand deals can add up past that bar even if none of them individually triggered a 1099.' },
  { q: 'What happens if I don\'t fill out a W-9 when a brand asks?', a: 'The brand may withhold a portion of your payment (backup withholding) and hold the rest until you provide it, or simply decline to move forward with the payment. It\'s a routine, required step — providing it promptly keeps your payment on schedule.' },
  { q: 'Should I use my SSN or get an EIN for brand deals?', a: 'Both work on a W-9. Many creators prefer using an EIN (free to obtain from the IRS) instead of their Social Security Number, simply to avoid sharing their SSN with every brand, agency, or platform they work with.' },
  { q: 'Do I need an LLC to work with brands?', a: 'No — most creators operate as sole proprietors and that\'s completely normal for tax purposes. Forming an LLC is a separate decision, usually made for liability protection or business structure reasons, not because it\'s required to receive brand deal income.' },
  { q: 'What\'s the difference between a 1099-NEC and a 1099-K?', a: 'A 1099-NEC is issued directly by a brand or agency that paid you for services. A 1099-K is issued by a payment platform or processor (like PayPal or a payment app) reporting the total volume they processed on your behalf, and follows its own separate threshold rather than the 1099-NEC threshold.' },
  { q: 'Do I need to pay quarterly estimated taxes as a creator?', a: 'If you expect to owe a meaningful amount in tax on your creator income for the year, the IRS generally expects estimated tax payments made quarterly rather than one lump sum in April, to avoid an underpayment penalty. A CPA or tax software can help you calculate the right amount based on your specific income.' },
]

export default function OneNineNineVsW9Page() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', color: '#fff', fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; overflow: hidden; transition: border-color 0.2s; }
        .card:hover { border-color: rgba(255,107,43,0.2); }
        table.cmp { width: 100%; border-collapse: collapse; }
        table.cmp th, table.cmp td { padding: 14px 12px; text-align: left; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.07); vertical-align: top; }
        table.cmp th:first-child, table.cmp td:first-child { color: rgba(255,255,255,0.5); width: 32%; }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .hero-pad { padding: 48px 16px 32px !important; }
          .content-pad { padding: 0 16px 60px !important; }
          table.cmp { font-size: 12px !important; }
          table.cmp th, table.cmp td { padding: 10px 8px !important; }
        }
      `}</style>

      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(7,7,13,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
          <Link href="/" style={{ fontWeight: 800, fontSize: 18, color: '#FF6B2B', letterSpacing: '-0.5px' }}>Identity Kit</Link>
          <div className="nav-links" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B', fontWeight: 600 }}>Blog</Link>
            <Link href="/onboarding" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Get Started Free</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto' }}>
        <div className="hero-pad" style={{ padding: '64px 24px 40px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['Taxes', 'US Creators', 'Brand Deals'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            1099 vs. W-9 for Creators:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>What You Actually Need</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A brand asks for a W-9 before your first payment, and might send you a 1099-NEC the following January. That's the whole relationship between the two forms — but a 2026 threshold change just shifted when that second form actually shows up. Here's what changed and what it means for your next brand deal.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — 1099 vs. W-9</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'A W-9 is a form you fill out and give to a brand before they pay you — it provides your name and tax ID, with no income figures on it.',
                'A 1099-NEC is a form the brand sends you and the IRS after the tax year ends, reporting the total they paid you.',
                'Starting January 1, 2026, the reporting threshold for Form 1099-NEC rose from $600 to $2,000 per payer, per year.',
                'That threshold only affects when a brand must file paperwork — you still owe tax on all your creator income once your net self-employment earnings pass $400 for the year, 1099 or not.',
                'A platform payment processor (PayPal, etc.) reports separately on Form 1099-K, which follows its own $20,000 / 200-transaction threshold.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — 2026 1099 Rules for Creators</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'For decades, businesses had to file Form 1099-NEC once they paid a contractor $600 or more in a year — that threshold hadn\'t changed since 1954.',
                'A new law effective for payments made on or after January 1, 2026 raised that threshold to $2,000 per payer, per calendar year.',
                'The change applies to payments made in 2026 onward (first affecting forms filed in early 2027) — 2025 payments still follow the old $600 rule.',
                'The $2,000 threshold is scheduled to be adjusted for inflation in future years.',
                'The separate 1099-K threshold for payment platforms (PayPal, payment apps, etc.) sits at $20,000 and 200 transactions, and was not changed by this update.',
                'None of these thresholds change whether the income is taxable — they only change whether a payer is required to send you paperwork about it.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison table */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>W-9 vs. 1099-NEC, Side by Side</h2>
            <div className="card" style={{ padding: '18px 16px', overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr>
                    <th></th>
                    <th style={{ color: '#FF6B2B' }}>Form W-9</th>
                    <th style={{ color: '#FF9A6B' }}>Form 1099-NEC</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPoints.map((row, i) => (
                    <tr key={i}>
                      <td>{row.label}</td>
                      <td style={{ color: 'rgba(255,255,255,0.65)' }}>{row.w9}</td>
                      <td style={{ color: 'rgba(255,255,255,0.65)' }}>{row.form1099}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* W9 steps */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What Actually Happens When a Brand Sends You a W-9</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {w9Steps.map((s) => (
                <div key={s.step} className="card" style={{ padding: '20px 24px', display: 'flex', gap: 18 }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: 'rgba(255,107,43,0.4)', minWidth: 34 }}>{s.step}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{s.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* The 400 dollar trap */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Mistake the Higher Threshold Creates</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
              The jump from $600 to $2,000 means creators will simply receive fewer 1099 forms going forward — but the tax obligation hasn't moved at all. If you earn $1,500 from one brand and $1,200 from another in the same year, neither one is required to send you a 1099-NEC under the new threshold. Both incomes are still fully taxable, and combined they've already cleared the $400 net self-employment threshold that triggers a filing requirement on your end.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              The safest habit for any creator: track every brand deal payment yourself as it comes in, regardless of whether you expect to receive a form for it. Waiting for paperwork that may never arrive is the single most common way creators under-report income without meaning to.
            </p>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {faqs.map((item, i) => (
                <div key={i} className="card" style={{ padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 10 }}>{item.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: 14 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '18px 22px', marginBottom: 56 }}>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, lineHeight: 1.6 }}>
              This article is general information for US-based creators, not tax advice. Tax rules change and your specific situation matters — talk to a CPA or licensed tax professional before making filing decisions.
            </p>
          </div>

          {/* Related */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14 }}>
              {[
                { href: '/blog/linktree-vs-media-kit-brand-deals', title: 'Linktree vs. Media Kit: Why Brands Need More Than a Link Page', tag: 'Comparison' },
                { href: '/blog/best-media-kit-tools-creators-2026', title: 'Best Free Media Kit Tools for Creators in 2026', tag: 'Tools' },
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
              Look professional before the W-9 even comes up.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with your media kit, rate card, and creator CV — the exact profile brands check before they even get to paperwork.
            </p>
            <Link href="/onboarding" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
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
          <Link href="/onboarding" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Create Your Identity Kit</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for creators everywhere · identitykit.in</p>
      </footer>
    </div>
  )
}
