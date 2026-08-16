import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Creator Tax Deductions: What You Can Actually Write Off (2026)',
  description: 'Cameras, software subscriptions, a home studio, even work-only wardrobe — here\'s what qualifies as a legitimate business deduction for US creators, the "ordinary and necessary" test that governs it all, and the hobby-loss rule that can undo it.',
  keywords: 'content creator tax deductions 2026, influencer tax write offs, home office deduction content creator, what can creators write off, creator tax deductions equipment, hobby loss rule content creator',
  openGraph: {
    title: 'Creator Tax Deductions: What You Can Actually Write Off (2026)',
    description: 'Cameras, software subscriptions, a home studio, even work-only wardrobe — here\'s what qualifies as a legitimate business deduction for US creators in 2026.',
    url: 'https://identitykit.in/blog/creator-tax-deductions-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/creator-tax-deductions.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/creator-tax-deductions-2026',
  },
}

const categories = [
  { title: 'Equipment & tech', body: 'Cameras, microphones, lighting, tripods, gimbals, computers, and phones used for content — if a device is used partly for personal use, only the business-use portion is deductible.' },
  { title: 'Software & subscriptions', body: 'Editing software (Adobe Creative Cloud, Final Cut Pro), design tools (Canva), website hosting, and any recurring tool that\'s a genuine part of running your content business.' },
  { title: 'Home office', body: 'A space used exclusively and regularly for business — not a kitchen table or couch used occasionally. Deducted via either a simplified method ($5/sq ft, up to 300 sq ft, capped at $1,500) or a regular method based on the percentage of your home the space occupies.' },
  { title: 'Marketing & advertising', body: 'Paid ad campaigns on Meta, TikTok, or Google promoting your content or channel, plus website and domain costs.' },
  { title: 'Professional services', body: 'Editors, designers, photographers, agents, and tax preparation services — payments to a single contractor of $2,000 or more in 2026 also trigger a 1099-NEC filing requirement on your end.' },
  { title: 'Props, sets & work-only wardrobe', body: 'Items purchased specifically to appear in content — backdrops, product samples, set dressing — plus wardrobe, but only pieces that are not suitable as everyday personal clothing.' },
  { title: 'Travel & meals', body: 'Travel for content-related events, shoots, or brand meetings is deductible, and business meals are generally 50% deductible — detailed records of the business purpose are essential.' },
]

const faqs = [
  { q: 'What\'s the actual test for whether something is deductible?', a: 'The IRS standard is that an expense must be "ordinary and necessary" for your business — ordinary meaning common and accepted in your line of work, necessary meaning helpful and appropriate for it. It doesn\'t have to be indispensable, just a genuine, reasonable business expense.' },
  { q: 'Can I deduct my whole phone or laptop if I use it for content too?', a: 'Only the business-use portion. If you use a device for both personal and content-creation purposes, you generally deduct the percentage of use that\'s actually business-related, not the full cost — and keeping some record of that split (even an estimate) supports the deduction if it\'s ever questioned.' },
  { q: 'What is the hobby loss rule, and why does it matter?', a: 'If the IRS determines your content creation is a hobby rather than a genuine business, you lose the ability to deduct losses against other income, and can only deduct expenses up to the gross income the activity generated. Operating with clear business practices — separate business banking, consistent record-keeping, a documented profit motive — is part of demonstrating you\'re running a real business, not a hobby.' },
  { q: 'How does the home office deduction actually work?', a: 'You choose between two methods: the simplified option (a flat $5 per square foot of dedicated office space, capped at 300 square feet, for a maximum $1,500 deduction), or the regular method, where you calculate the percentage of your home\'s total square footage the office occupies and apply that percentage to eligible home expenses like rent, utilities, and insurance. The space must be used exclusively and regularly for business either way.' },
  { q: 'Can I deduct contributions to a retirement account?', a: 'Yes — self-employed creators can contribute to accounts like a SEP-IRA, with 2026 contribution limits allowing up to 25% of net self-employment compensation, capped at $72,000. Contributions reduce your taxable income dollar-for-dollar in the year they\'re made, on top of growing tax-deferred.' },
  { q: 'Do I need to keep receipts for every single expense?', a: 'Yes — documentation is what turns a legitimate expense into a defensible deduction. Keeping receipts, noting the business purpose, and separating business from personal spending (a dedicated business bank account or card helps enormously) makes tax filing simpler and protects you if a deduction is ever questioned.' },
]

export default function CreatorTaxDeductionsPage() {
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
            {['Taxes', 'US Creators', 'Business'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Creator Tax Deductions:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>What You Can Actually Write Off</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Most creators leave real money on the table every year — not from missing income, but from missing deductions. Here's what actually qualifies, the one rule that governs almost all of it, and the mistake that can undo your deductions entirely.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Creator Tax Deductions</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'The core test is whether an expense is "ordinary and necessary" for your content business — common in your line of work and genuinely helpful to it.',
                'Major deductible categories: equipment (cameras, mics, computers), software subscriptions, home office space, marketing/ads, professional services, work-only wardrobe and props, and travel/meals (meals generally at 50%).',
                'The home office deduction offers two methods: a simplified $5/sq ft (capped at 300 sq ft, $1,500 max), or a regular method based on the percentage of your home the office occupies.',
                'The "hobby loss" rule can eliminate your ability to deduct losses if the IRS decides your content creation isn\'t a genuine, profit-motivated business — clear record-keeping and business practices matter.',
                'Contributing to a SEP-IRA can reduce taxable income dollar-for-dollar, with 2026 limits allowing up to 25% of net self-employment compensation, capped at $72,000.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Filing as a Creator</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Most content creators are classified by the IRS as self-employed, meaning income and business expenses are typically reported on Schedule C.',
                'Self-employment tax (roughly 15.3%) is assessed on 92.35% of net self-employment earnings, not the full amount — and half of that tax is itself deductible.',
                'Paying a single contractor $2,000 or more in 2026 requires issuing them a 1099-NEC by January 31 of the following year — consistent with the broader 2026 threshold change affecting how brands report payments to creators too.',
                'Wardrobe deductions require the clothing to be genuinely unsuitable for everyday personal wear, not simply "worn on camera" — a general outfit doesn\'t qualify just because it appeared in a video.',
                'Repairs limited specifically to a home office space are fully deductible, while repairs to the whole home are only deductible in proportion to the home office percentage.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Main Deduction Categories</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {categories.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Hobby loss rule */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>The Rule That Can Undo Everything Above</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              All of these deductions assume you're running an actual business, not a hobby with occasional income. The IRS "hobby loss" rule limits deductions for activities not pursued with a genuine profit motive — if your content creation gets classified as a hobby, you can't deduct losses against other income, and your deductions are capped at whatever gross income the activity actually generated. Consistently treating it like a business — separate business banking, real record-keeping, a documented plan to be profitable — is what supports the deductions in this article standing up if ever questioned.
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
              This article is general information for US-based creators, not tax advice. Deduction eligibility depends on your specific circumstances — consult a CPA or tax professional before making filing decisions.
            </p>
          </div>

          {/* Related */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14 }}>
              {[
                { href: '/blog/1099-vs-w9-content-creators', title: '1099 vs. W-9 for Content Creators: What You Actually Need', tag: 'Taxes' },
                { href: '/blog/llc-vs-sole-proprietor-creators', title: 'LLC vs. Sole Proprietor for Creators: Do You Need to Incorporate?', tag: 'Business' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🗂️</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Run it like a business, look like one too.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a media kit, rate card, and creator CV — a professional presence that reinforces you're running a real business, not a hobby.
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
