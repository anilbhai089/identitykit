import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Ask for a Raise: Renegotiating Rates With an Existing Brand (2026)',
  description: 'A renewal negotiation isn\'t the same conversation as a first deal — you have proof, not just a pitch. Here\'s how to build the case for a rate increase, what leverage you actually have, and the common tradeoffs brands offer instead of a straight raise.',
  keywords: 'how to negotiate a rate increase brand deal, renegotiating influencer rates, brand deal renewal negotiation, asking brand for higher rate, influencer contract renewal tips, negotiating a raise with a sponsor',
  openGraph: {
    title: 'How to Ask for a Raise: Renegotiating Rates With an Existing Brand (2026)',
    description: 'A renewal negotiation isn\'t the same conversation as a first deal — you have proof, not just a pitch. Here\'s how to build the case for a rate increase.',
    url: 'https://identitykit.in/blog/how-to-negotiate-brand-deal-renewal',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/negotiate-brand-deal-renewal.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/how-to-negotiate-brand-deal-renewal',
  },
}

const dataToGather = [
  { item: 'Performance since the last deal', body: 'Engagement rate, reach, saves, and any measurable results (promo code redemptions, affiliate clicks, sales attributed to your content) from the campaign you already delivered.' },
  { item: 'Audience growth', body: 'Follower and engagement growth since the original rate was set — a rate negotiated for a 20K-follower audience doesn\'t reflect a 50K-follower reality.' },
  { item: 'What else has changed', body: 'New skills, formats, or platforms you\'ve added (started doing Reels, launched a podcast, grew a newsletter) that expand what the partnership is actually worth now.' },
  { item: 'Market context', body: 'What comparable creators in your tier and niche are currently charging, so your ask is grounded in more than just your own case.' },
]

const tradeoffs = [
  { title: 'Multi-post or retainer commitment', body: 'A brand may offer a modest discount off your new standalone rate in exchange for a longer commitment (a 3–6 month retainer instead of one-off posts) — worth considering if it trades a small rate concession for predictable income.' },
  { title: 'Performance-contingent renewal', body: 'Some brands propose renewing at the original rate only if a stated performance threshold is hit — a reasonable structure if the threshold is realistic, but worth scrutinizing if it\'s set unusually high.' },
  { title: 'Scope adjustment instead of rate', body: 'If a brand won\'t move on price, negotiating the deliverables instead — fewer posts, a shorter usage window, less revision — is a common alternative to accepting a discount outright.' },
]

const faqs = [
  { q: 'How is renegotiating different from a first-time rate negotiation?', a: 'In a first deal, you\'re making a case based on projected value — your audience, your content style, your potential fit. In a renewal, you have actual results to point to. That\'s a meaningfully stronger negotiating position, and it\'s worth treating the conversation differently rather than just repeating your original pitch.' },
  { q: 'When should I bring up a rate increase for a renewal?', a: 'Before the brand sends a renewal offer, if possible — proactively opening the conversation with your results in hand puts you in a stronger position than reacting to a lowball renewal number after the fact. Many creators wait to be asked; initiating it yourself is generally more effective.' },
  { q: 'What if the brand pushes back and says the budget hasn\'t changed?', a: 'Ask directly what flexibility exists — sometimes budget really is fixed, and the more useful question becomes what else can move: deliverables, usage rights, exclusivity terms, or timeline. A flat "no" on rate doesn\'t always mean there\'s no room to negotiate the deal shape instead.' },
  { q: 'Should I accept a lower rate to keep a good long-term relationship?', a: 'It can be a reasonable tradeoff if the relationship genuinely has long-term value — steady income, strong creative fit, a brand you want associated with your name. It\'s worth being a deliberate choice, though, not a default — accepting a discount without asking anything in return (like a longer commitment or added usage rights) leaves value on the table.' },
  { q: 'What if I don\'t have hard performance data to show?', a: 'This is a strong reason to start tracking it now, even informally — screenshotting analytics after every sponsored post, saving any promo code or affiliate numbers a brand shares back with you. Even directional evidence ("engagement on sponsored content has grown roughly 30% since our first campaign") is far more persuasive than no data at all.' },
  { q: 'Is it OK to just directly ask "can we revisit the rate for this renewal"?', a: 'Yes — direct, professional, and clearly framed as wanting to continue the partnership tends to land better than an indirect approach. Pairing the ask with your actual results, rather than a bare request, is what makes it land as a business conversation rather than a demand.' },
]

export default function NegotiateRenewalPage() {
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
            {['Negotiation', 'Brand Deals', 'Rate Card'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Renegotiating Rates<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>With a Brand You've Already Worked With</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Your first negotiation with a brand was a pitch. This one isn't — you have proof. Here's how to actually use it, and what to do when a brand offers a tradeoff instead of a straight raise.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Renegotiating a Brand Deal</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'A renewal negotiation is fundamentally different from a first deal — you have actual performance results to point to, not just a projection of value.',
                'Bring specific data: engagement change, campaign results (promo codes, affiliate performance), audience growth, and any new formats or platforms you\'ve added since the original rate was set.',
                'Initiate the conversation proactively before a renewal offer arrives, rather than reacting to whatever number the brand sends first.',
                'If a brand won\'t move on rate, negotiating deliverables, usage rights, or commitment length is a common alternative to simply accepting a discount.',
                'Accepting a lower rate for a long-term relationship can be a reasonable choice — but it should be a deliberate tradeoff, ideally exchanged for something concrete like a longer commitment.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* Why it's different */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Why This Conversation Is Different</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              A first-time pitch to a brand is inherently speculative — you're asking them to bet on your audience and content style based on potential. A renewal conversation starts from a completely different position: they already said yes once, and you already delivered something measurable. That shifts the entire frame from "please consider paying me this" to "here's what the first campaign actually did, and here's what continuing to work together looks like at a rate that reflects it." Treating a renewal like a repeat of your original pitch — rather than leaning on the proof you now have — is the most common way creators leave money on the table at this stage.
            </p>
          </section>

          {/* Data to gather */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Build Your Case Before You Ask</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {dataToGather.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.item}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Tradeoffs */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What Brands Often Offer Instead of a Straight Raise</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {tradeoffs.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{row.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.body}</div>
                </div>
              ))}
            </div>
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
                { href: '/blog/how-to-calculate-influencer-rate', title: 'How to Calculate Your Influencer Rate: A Step-by-Step Formula', tag: 'Calculator' },
                { href: '/blog/brand-deal-contract-red-flags', title: 'Brand Deal Contract Red Flags: What to Check Before You Sign', tag: 'Brand Deals' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>📈</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Track the results that make your case for you.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with a media kit, rate card, and creator CV — an updated, professional record that makes every renewal conversation start from strength.
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
