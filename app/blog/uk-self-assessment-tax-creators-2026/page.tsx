import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'UK Self-Assessment Tax for Creators: What You Actually Owe (2026)',
  description: 'The £1,000 trading allowance, when to register with HMRC, why gifted products count as income, and what Making Tax Digital means for creators from 2026 onward. A plain-English guide for UK content creators.',
  keywords: 'uk self assessment tax creator, hmrc influencer tax, do i need to register self assessment content creator, trading allowance influencer uk, making tax digital creators 2026, uk influencer tax rules',
  openGraph: {
    title: 'UK Self-Assessment Tax for Creators: What You Actually Owe (2026)',
    description: 'The £1,000 trading allowance, when to register with HMRC, why gifted products count as income, and what Making Tax Digital means for UK creators from 2026 onward.',
    url: 'https://identitykit.in/blog/uk-self-assessment-tax-creators-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/uk-self-assessment-tax-creators.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/uk-self-assessment-tax-creators-2026',
  },
}

const timeline = [
  { when: 'Tax year runs 6 April – 5 April', what: 'All your creator income for that 12-month window counts toward the same tax year, regardless of when a brand actually pays out.' },
  { when: 'By 5 October', what: 'If you need to file for the first time, you must notify HMRC and register for Self Assessment by this date, following the end of the tax year in which you first went over the threshold.' },
  { when: 'By 31 January', what: 'Your online Self Assessment return is due, along with any balancing tax payment for the year just finished.' },
  { when: 'By 31 July (sometimes)', what: 'A "payment on account" — an advance toward next year\'s tax bill — may also be due, depending on how much you owed the previous year.' },
]

const mustDeclare = [
  { item: 'Brand deal and sponsored post payments', why: 'Straightforward cash income — the most obvious category, and the one creators are least likely to miss.' },
  { item: 'Gifted products and services', why: 'HMRC treats the fair value of anything you received for free in connection with your content as income, even if no cash changed hands.' },
  { item: 'Platform ad revenue and creator fund payouts', why: 'YouTube AdSense, TikTok Creator Fund, and similar payouts all count as trading income once you\'re over the threshold.' },
  { item: 'Affiliate and referral commissions', why: 'Any commission earned through affiliate links or referral codes counts, regardless of how small the individual payments are.' },
  { item: 'Merchandise and digital product sales', why: 'Income from your own shop, courses, or digital downloads is part of the same trading income total.' },
]

const faqs = [
  { q: 'Do I have to pay tax on content creation if it\'s not my main job?', a: 'Yes — HMRC treats content creation income the same way regardless of whether it\'s your main source of income or a side activity. Once your gross income from it exceeds £1,000 in a tax year, you generally need to register and declare it.' },
  { q: 'What is the £1,000 trading allowance?', a: 'It\'s a tax-free allowance that lets anyone earn up to £1,000 in a tax year from a trading activity — including content creation — without needing to register for Self Assessment or pay tax on it. It\'s a single allowance shared across all your side income, not £1,000 per activity.' },
  { q: 'Do I really have to declare free products brands send me?', a: 'Yes. HMRC guidance is explicit that the value of gifted items and services received in connection with content creation counts as income, and needs to be included in your declared earnings once you\'re over the trading allowance.' },
  { q: 'What happens if I don\'t register or declare my income?', a: 'HMRC has stepped up its compliance focus on creators in recent years, including requesting payment data directly from brands and platforms. Undeclared income that\'s later discovered can result in back tax owed plus interest and penalties.' },
  { q: 'Do I need to register for VAT as a creator?', a: 'Only once your VAT-taxable turnover exceeds the current registration threshold of £90,000 in a rolling 12-month period. Below that, VAT registration is optional, not required.' },
  { q: 'What is Making Tax Digital and does it affect me?', a: 'Making Tax Digital for Income Tax is a new digital record-keeping and quarterly reporting requirement, being phased in from April 2026. Initially it applies to those with over £50,000 in business receipts, expanding to lower thresholds in the following years — worth watching even if you\'re not yet close to the current cutoff.' },
  { q: 'Should I set up a limited company instead of staying a sole trader?', a: 'Most UK creators operate as sole traders and that\'s completely normal — it\'s the simplest structure and works fine for most income levels. Forming a limited company is a separate decision usually made for tax efficiency at higher income levels or liability reasons, and is worth discussing with an accountant rather than defaulting into.' },
]

export default function UkSelfAssessmentTaxPage() {
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
            <Link href="/onboarding" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Get Started Free</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto' }}>
        <div className="hero-pad" style={{ padding: '64px 24px 40px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['Taxes', 'UK Creators', 'Compliance'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            UK Self-Assessment Tax<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>for Creators: What You Owe</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            One brand deal, one gifted product, one ad revenue payout — cross £1,000 in a tax year and HMRC expects you to register, whether or not content creation is your main job. Here's exactly what counts, when to register, and what's changing from 2026.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — UK Creator Tax</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'A £1,000 tax-free trading allowance covers all your side income combined — go over it in a tax year and you generally need to register for Self Assessment.',
                'Most UK creators are classed as self-employed sole traders, with profits taxed through Income Tax (20–45%) plus National Insurance.',
                'Gifted products and services count as income at their fair value, not just cash payments.',
                'Register by 5 October, file and pay by 31 January, with a possible advance payment due by 31 July.',
                'VAT registration only kicks in once your taxable turnover passes £90,000 in a rolling 12-month period.',
                'Making Tax Digital for Income Tax begins phasing in from April 2026, starting with higher earners and expanding to lower thresholds over the following years.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — HMRC Rules for Creators</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'The £1,000 trading allowance is a single allowance shared across all trading-type side income — not a separate £1,000 for each source.',
                'HMRC has said explicitly that poor record-keeping around creator income can itself lead to penalties, separate from any tax owed.',
                'HMRC can request payment information directly from brands, agencies, and platforms that pay creators — it isn\'t only relying on self-reporting.',
                'Making Tax Digital for Income Tax (MTD for ITSA) starts April 2026 for those with over £50,000 in business receipts, extending to £30,000 from April 2027, and £20,000 from April 2028.',
                'The VAT registration threshold rose to £90,000 as of the 2024/25 tax year.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What counts as income */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What Actually Counts as Income</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24, fontSize: 15 }}>
              The most common mistake isn't underreporting cash payments — it's not realizing how many other things count toward the same £1,000 threshold.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {mustDeclare.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.item}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.why}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Self Assessment Calendar</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {timeline.map((row, i) => (
                <div key={i} className="card" style={{ padding: '20px 24px', display: 'flex', gap: 18 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: 'rgba(255,107,43,0.6)', minWidth: 150 }}>{row.when}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.what}</div>
                </div>
              ))}
            </div>
          </section>

          {/* MTD callout */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What's Changing From 2026</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              Making Tax Digital for Income Tax replaces the once-a-year Self Assessment return with digital record-keeping and quarterly reporting through HMRC-compatible software, for those above the relevant threshold. It starts with higher earners in April 2026 and phases down to lower income levels over the following two years. If you're growing fast, it's worth getting used to digital bookkeeping now rather than scrambling once the threshold catches up to you.
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
              This article is general information for UK-based creators, not tax advice. Individual circumstances vary — speak to an accountant or check HMRC's own guidance before making filing decisions.
            </p>
          </div>

          {/* Related */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14 }}>
              {[
                { href: '/blog/1099-vs-w9-content-creators', title: '1099 vs. W-9 for Content Creators: What You Actually Need', tag: 'Taxes' },
                { href: '/blog/ftc-disclosure-rules-influencers-2026', title: 'FTC Disclosure Rules for Influencers (2026 Guide)', tag: 'Compliance' },
                { href: '/blog/youtube-rpm-by-country-2026', title: 'YouTube RPM by Country 2026: Where Creators Earn the Most', tag: 'Data' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>💷</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Look professional before the first invoice.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with your media kit, rate card, and creator CV — the profile brands check before the paperwork even starts.
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
