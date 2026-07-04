import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Reply to a Brand Collaboration DM in India 2026 (Without Underselling Yourself)',
  description: 'A creator-side guide to replying to brand collaboration DMs and emails in India — the exact first-response framework, what to ask before quoting a rate, ready-to-use replies for vague offers, lowballs, and gifted-only pitches, and mistakes that quietly cost you the deal.',
  keywords: 'how to reply to brand collaboration dm india, how to respond to brand email influencer india, brand dm reply template india, how to reply to brand collaboration email india, influencer first response brand deal',
  openGraph: {
    title: 'How to Reply to a Brand Collaboration DM in India 2026 (Without Underselling Yourself)',
    description: 'How you reply to that first DM decides whether the brand sees a professional or an easy discount. Here\'s the exact framework.',
    url: 'https://identitykit.in/blog/how-to-reply-brand-collaboration-dm-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/reply-brand-dm-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/how-to-reply-brand-collaboration-dm-india-2026',
  },
}

const firstResponseSteps = [
  { step: '01', title: 'Don\'t reply within the first 5 minutes', body: 'An instant reply can unintentionally signal you have nothing else going on. Taking a few hours (same day is fine) to reply thoughtfully reads as busy and in-demand, not slow.' },
  { step: '02', title: 'Thank them and confirm interest — without committing to anything', body: 'A short, warm opener keeps the door open while you gather more information: "Thanks so much for reaching out — I\'d love to learn more about the collaboration."' },
  { step: '03', title: 'Ask for the details before you say yes or quote a number', body: 'Never quote a rate or agree to anything based on a vague DM. Ask for deliverables, timeline, usage rights, and — if it isn\'t clear — whether this is a paid or barter collaboration.' },
  { step: '04', title: 'Check if it\'s a genuine opportunity or a mass template', body: 'A DM that doesn\'t use your name, references generic "content creators," or reads identically to comments other creators post publicly is often a bulk outreach message — still worth a reply, just calibrate your effort accordingly.' },
  { step: '05', title: 'Quote only after you understand the full scope', body: 'Once you know deliverables, usage, and timeline, respond with your rate and a brief note on what it includes — anchored by your actual engagement data, not a guess.' },
]

const dmTemplates = [
  {
    scenario: 'A clear, detailed collaboration offer',
    reply: '"Hi [Name], thanks so much for reaching out — I\'d love to work with [Brand]! Based on what you\'ve shared, my rate for [deliverable] is ₹[X], which includes [usage rights/revisions]. Happy to share more about past results if helpful. Let me know if this works for your budget!"',
  },
  {
    scenario: 'A vague message with no details ("Hey! Would love to collab 💫")',
    reply: '"Hi [Name], thank you for reaching out! I\'d love to hear more — could you share what you have in mind: the type of content, whether this is a paid collaboration or product-based, and your timeline? Happy to take it from there."',
  },
  {
    scenario: 'A gifted-only offer with no mention of payment',
    reply: '"Hi [Name], thanks for thinking of me! Just to confirm — is this a gifted collaboration, or is there a fee attached as well? For [deliverable], my rate is ₹[X], but happy to discuss a hybrid arrangement if that works better for the budget."',
  },
  {
    scenario: 'A lowball offer after you\'ve shared your rate',
    reply: '"Totally understand budget constraints! At this price point, I can offer [reduced scope, e.g. 1 Story instead of a Reel] rather than reducing the quality of a full deliverable — let me know if that works, or if the original scope has flexibility on budget."',
  },
  {
    scenario: 'Declining an offer that isn\'t the right fit',
    reply: '"Thank you so much for thinking of me — I really appreciate it. This particular collaboration isn\'t the right fit for me at the moment, but I\'d love to stay in touch for future opportunities!"',
  },
]

const redFlagsInDM = [
  'The message is copy-pasted with no personalisation — doesn\'t use your name, niche, or reference your actual content',
  'It asks you to "share your rates" with zero information about deliverables, platform, or campaign goals',
  'It pressures an immediate decision ("limited spots, reply within 24 hours!") — a genuine brand rarely needs to rush a first conversation',
  'It asks for personal information (bank details, OTPs, or ID documents) before any agreement is even discussed',
  'The brand account itself looks inactive, has very low engagement relative to its follower count, or has no real product/website presence',
]

const mistakes = [
  { m: 'Replying instantly with your rate before knowing the scope', f: 'This anchors the conversation before you know what you\'re actually pricing — always ask about deliverables and usage first.' },
  { m: 'Sounding overly grateful or apologetic in your reply', f: 'A brand reaching out to you is a two-way opportunity, not a favour being done for you. A warm, professional tone works better than an overly eager one.' },
  { m: 'Ignoring vague or low-effort DMs entirely', f: 'Even a templated outreach can turn into a real deal once you ask clarifying questions — a short, professional reply costs little and keeps the door open.' },
  { m: 'Agreeing to deliverables in the DM thread itself with no written follow-up', f: 'Move to email or a simple written agreement once terms are discussed — a scattered DM thread is hard to reference later if there\'s a dispute.' },
  { m: 'Not asking whether it\'s paid or barter until after doing the work', f: 'Confirm this in your very first reply. Assuming a brand will pay because they didn\'t say otherwise is one of the most common ways creators end up doing free work.' },
]

export default function ReplyBrandDMIndiaPage() {
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
            {['Brand DM Reply', 'Brand Deals', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Reply to a Brand<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Collaboration DM (Without Underselling Yourself)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A brand sliding into your DMs feels like a win — until you're not sure what to say back, and end up either overcommitting for free or going silent out of nerves. How you reply to that first message decides whether the brand sees a professional or an easy discount.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Replying to a Brand Collaboration DM</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Thank the brand and confirm interest first — don\'t quote a rate or agree to anything in your first reply',
                'Ask for deliverables, timeline, usage rights, and whether it\'s paid or barter before discussing your rate',
                'A vague message ("would love to collab!") deserves clarifying questions, not an immediate rate quote or a decline',
                'Only share your rate once you understand the full scope — anchor it to your actual engagement data',
                'For a lowball offer, adjust the deliverable scope rather than lowering your rate for the same work',
                'Move the conversation to email or a written agreement once terms are discussed — don\'t finalise a deal entirely inside a DM thread',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Brand Collaboration DMs</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'A brand reaching out to you first is a genuinely warm lead — they\'ve already reviewed your content and decided you\'re a fit, which gives you real leverage compared to a cold pitch you send yourself.',
                'Many brand DMs land in a separate "requests" folder rather than the main inbox, especially if you don\'t already follow the brand — checking this folder regularly avoids missing real opportunities.',
                'A structured, clear reply signals professionalism and reliability, and this first impression frequently influences whether a brand proceeds or moves on to another creator, independent of audience size.',
                'A large share of inbound collaboration messages are template-based outreach sent to many creators at once — a thoughtful, clarifying reply is often what separates a real opportunity from a mass message.',
                'Responding without first understanding deliverables and usage rights is one of the most common ways creators end up underpricing or overcommitting on a collaboration.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* First response steps */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>5-Step First-Response Framework</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Follow this sequence for every inbound brand message, whether it's a polished pitch or a one-line DM.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {firstResponseSteps.map((item) => (
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

          {/* Templates */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Ready-to-Use Replies for Every Scenario</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Adapt these to your own voice — the structure and tone are what matter most.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {dmTemplates.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#FF6B2B', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>{item.scenario}</div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '12px 16px', color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6, fontStyle: 'italic' }}>{item.reply}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Reply with your numbers ready, not a guess</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>A free Identity Kit profile with your rate card and engagement stats means every DM reply can include a real, confident number instead of "let me get back to you."</p>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build My Free Profile →
            </Link>
          </div>

          {/* Red flags */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Red Flags to Watch For in the DM Itself</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Not every inbound message is a genuine opportunity — spotting these early saves time and avoids scams.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {redFlagsInDM.map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,152,0,0.05)', border: '1px solid rgba(255,152,0,0.18)', borderRadius: 12, padding: '14px 20px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#FF9800', flexShrink: 0, fontWeight: 700 }}>⚠</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>5 Mistakes Creators Make Replying to Brand DMs</h2>
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
                { q: 'How quickly should I reply to a brand collaboration DM?', a: 'Same day is a good general rule — quick enough to show interest and professionalism, but not so instant that it reads as having nothing else going on. Avoid taking more than 1–2 business days, since brands often message several creators and move forward with whoever responds first with a clear, professional reply.' },
                { q: 'Should I share my rate in my very first reply?', a: 'No — ask about deliverables, timeline, and usage rights first. Quoting a rate before understanding the full scope means you\'re pricing blind, and it\'s much harder to adjust upward later than to quote correctly from the start.' },
                { q: 'What should I do if the brand DM is really vague, like just "would love to collab"?', a: 'Reply with genuine interest and ask clarifying questions rather than ignoring it or guessing what they want: what type of content, whether it\'s paid or product-based, and their timeline. Many vague messages turn into real, well-defined deals once you ask the right questions.' },
                { q: 'How do I respond if a brand only offers a free product with no payment?', a: 'Confirm this directly and don\'t assume: "Just to confirm, is this a gifted collaboration or is there a fee as well?" If it\'s genuinely gifted-only, you can decide based on the product\'s value to you, or propose a hybrid — partial product plus a smaller fee — as a middle ground.' },
                { q: 'What if a brand DM feels like a scam or a mass template?', a: 'Look for personalisation (your actual name and niche referenced, not a generic message), a real product or website, and reasonable communication norms (no pressure for instant decisions or requests for sensitive personal information). A short, professional reply asking clarifying questions usually reveals quickly whether it\'s genuine.' },
                { q: 'Is it okay to negotiate over DM, or should I move to email?', a: 'DMs are fine for the initial back-and-forth, but once you\'re discussing real terms — rate, deliverables, timeline — it\'s worth moving to email or a simple written agreement. A scattered DM thread is much harder to reference later if there\'s ever a disagreement about what was agreed.' },
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
                { href: '/blog/brand-collaboration-email-india-2026', title: 'Brand Collaboration Email Templates for India', tag: 'Brand Outreach' },
                { href: '/blog/how-to-negotiate-brand-deal-rates-india-2026', title: 'How to Negotiate Brand Deal Rates in India', tag: 'Negotiation' },
                { href: '/blog/barter-collaboration-india-2026', title: 'Barter Collaboration in India: When to Say Yes', tag: 'Barter Collab' },
                { href: '/blog/influencer-rate-card-india-2026', title: 'Influencer Rate Card India 2026', tag: 'Rate Card' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>💬</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Sound like a pro from the very first reply.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with your rate card ready — so when a brand slides into your DMs, you're ready to respond with confidence.
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
          <Link href="/tools/brand-pitch-email-generator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Pitch Email Generator</Link>
          <Link href="/tools/influencer-rate-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Rate Calculator</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
