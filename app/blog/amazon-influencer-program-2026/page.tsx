import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Amazon Influencer Program: How to Get Approved and Earn Commission (2026)',
  description: 'A branded storefront, shoppable video on Amazon\'s own product pages, and access to flat-fee brand deals — here\'s what the Amazon Influencer Program actually offers, how approval really works, and how it differs from Amazon Associates.',
  keywords: 'amazon influencer program 2026, amazon influencer storefront, how to get approved amazon influencer, amazon influencer vs associates, amazon influencer commission rates, amazon storefront requirements',
  openGraph: {
    title: 'Amazon Influencer Program: How to Get Approved and Earn Commission (2026)',
    description: 'A branded storefront, shoppable video on Amazon\'s own product pages, and access to flat-fee brand deals — here\'s how the Amazon Influencer Program actually works.',
    url: 'https://identitykit.in/blog/amazon-influencer-program-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/amazon-influencer-program.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/amazon-influencer-program-2026',
  },
}

const whatYouGet = [
  { item: 'A branded storefront', body: 'A personalized page at amazon.com/shop/yourhandle where you organize product recommendations into curated collections — a persistent, always-on asset rather than a one-time post.' },
  { item: 'Onsite shoppable video', body: 'The ability to upload review or demo videos that appear directly on Amazon product detail pages — placement your content wouldn\'t otherwise get, seen by shoppers already in a buying mindset.' },
  { item: 'Creator Connections access', body: 'Amazon\'s in-program marketplace where brands post flat-fee campaigns — a separate income stream layered on top of standard commission, not dependent on organic sales alone.' },
]

const associatesVsInfluencer = [
  { label: 'Who can join', associates: 'Open to almost anyone with a website, blog, or app', influencer: 'Approval-gated — requires an active, engaged social presence' },
  { label: 'Storefront', associates: 'Not included', influencer: 'Personalized amazon.com/shop/handle page included' },
  { label: 'Onsite video placement', associates: 'Not included', influencer: 'Included once approved for onsite/tier-two status' },
  { label: 'Brand deal marketplace', associates: 'Not included', influencer: 'Creator Connections flat-fee campaigns included' },
  { label: 'Base commission structure', associates: 'Standard Associates rate schedule by category', influencer: 'Same underlying rate schedule as Associates, category-based' },
]

const faqs = [
  { q: 'Is there an official follower minimum to get approved?', a: 'Amazon has not published a hard follower requirement — approval is generally described as depending more on engagement quality and clear product-recommendation content than hitting a specific number. In practice, most approved creators have at least a modest, consistent following, but there\'s no confirmed magic threshold.' },
  { q: 'What commission rate will I actually earn?', a: 'It varies significantly by product category — rates commonly cited range from roughly 1% up to 20% depending on the category, with some categories (like gift cards or alcohol) paying nothing at all. Check Amazon\'s current published rate card directly, since categories and rates can shift.' },
  { q: 'Is the Amazon Influencer Program the same as Amazon Associates?', a: 'No — Influencer Program is best understood as an approval-gated extension of Associates. Associates is open broadly and pays on tracked links; the Influencer Program adds a branded storefront, onsite shoppable video, and access to Creator Connections brand deals, layered on top of a similar underlying commission structure.' },
  { q: 'Does it cost anything to apply or maintain a storefront?', a: 'No — applying and maintaining an Amazon storefront is free, with no fees charged by Amazon at any point in the process.' },
  { q: 'How long does it take to actually get paid?', a: 'Commission payouts commonly run on a delay of roughly 60 days after the end of the month they were earned in, which is worth factoring into your cash flow expectations — this isn\'t a same-week payout system.' },
  { q: 'What happens if I get rejected?', a: 'Most guidance suggests you can reapply after roughly 30 days. Using that window to increase posting consistency, strengthen engagement, and sharpen how clearly your content demonstrates product recommendations is the commonly recommended approach before reapplying.' },
]

export default function AmazonInfluencerProgramPage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', color: '#fff', fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; overflow: hidden; transition: border-color 0.2s; }
        .card:hover { border-color: rgba(255,107,43,0.2); }
        table.cmp { width: 100%; border-collapse: collapse; }
        table.cmp th, table.cmp td { padding: 14px 12px; text-align: left; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.07); vertical-align: top; }
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
            {['Amazon', 'Affiliate', 'Guide'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Amazon Influencer<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Program, Explained</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A branded storefront, your videos appearing directly on Amazon product pages, and access to flat-fee brand deals — the Influencer Program is a real step up from a standard Associates link. Here's what it actually takes to get in, and what changes once you are.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Amazon Influencer Program</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'The Amazon Influencer Program is an approval-gated extension of Amazon Associates, adding a branded storefront, onsite shoppable video, and access to flat-fee brand deals through Creator Connections.',
                'Amazon has not published an official follower minimum — approval is generally described as weighing engagement quality and clear product-recommendation content more than a specific number.',
                'Commission rates vary significantly by product category, commonly cited in the range of roughly 1%–20% — check Amazon\'s current published rate card for specifics.',
                'It\'s completely free to apply for and maintain a storefront, with no fees charged by Amazon.',
                'Payouts commonly run about 60 days behind the month they were earned — factor that delay into your cash flow expectations.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — How the Program Works</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Every approved creator gets a custom storefront URL at amazon.com/shop/yourhandle, functioning as a curated product hub organized into themed idea lists.',
                'Onsite shoppable video commissions (for videos placed directly on Amazon product pages) are frequently reported to run lower than standard offsite affiliate link commissions for the same category.',
                'Creator Connections, Amazon\'s in-program brand-deal marketplace, has been described as hosting flat-fee campaigns ranging roughly from $100 to $5,000 per post, layered on top of standard commission income.',
                'If rejected, reapplication is commonly reported to be possible after roughly a 30-day waiting period.',
                'Amazon storefront-driven purchases have been reported to convert at notably higher rates than typical third-party affiliate links, plausibly because shoppers are already inside an ecosystem they trust.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What you get */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What You Actually Get Once Approved</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {whatYouGet.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.item}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Associates vs Influencer table */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Amazon Associates vs. the Influencer Program</h2>
            <div className="card" style={{ padding: '18px 16px', overflowX: 'auto' }}>
              <table className="cmp">
                <thead>
                  <tr>
                    <th></th>
                    <th>Amazon Associates</th>
                    <th style={{ color: '#FF6B2B' }}>Influencer Program</th>
                  </tr>
                </thead>
                <tbody>
                  {associatesVsInfluencer.map((row, i) => (
                    <tr key={i}>
                      <td style={{ color: 'rgba(255,255,255,0.5)' }}>{row.label}</td>
                      <td style={{ color: 'rgba(255,255,255,0.65)' }}>{row.associates}</td>
                      <td style={{ color: 'rgba(255,255,255,0.65)' }}>{row.influencer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Getting approved */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>How Approval Actually Works</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              Because Amazon doesn't publish a hard follower number, guesswork fills the gap online — but the consistent theme across creator reporting is that approval leans more on engagement quality and content clarity than raw audience size. A smaller account that consistently posts clear, genuine product recommendations is generally described as being in a stronger position than a larger account with generic or inconsistent content. Building a small library of genuine reviews before applying, rather than applying the moment you technically qualify, is a commonly recommended approach.
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

          {/* Related */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14 }}>
              {[
                { href: '/blog/affiliate-marketing-creators-guide', title: 'Affiliate Marketing for Creators: How to Get Started (2026)', tag: 'Affiliate' },
                { href: '/blog/ugc-creator-rates-2026', title: 'UGC Rates: What to Charge for User-Generated Content (2026)', tag: 'UGC' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>📦</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Your storefront isn't your whole business.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a media kit, rate card, and creator CV — so brands can find and pitch you directly, not just discover you through a storefront link.
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
