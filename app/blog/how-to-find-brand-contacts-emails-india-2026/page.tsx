import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Find Brand Emails & Contacts for Collaboration in India (2026 Guide)',
  description: 'Step-by-step guide for Indian creators to find the right marketing manager or brand partnerships contact — LinkedIn search formulas, email-format guessing, free tools, Instagram DM tactics, and what to do when you can only find a generic info@ email.',
  keywords: 'how to find brand emails for collaboration india, how to contact brands for collaboration india, brand marketing manager contact influencer india, how to find brand contact for pitch india, influencer outreach contacts india',
  openGraph: {
    title: 'How to Find Brand Emails & Contacts for Collaboration in India (2026 Guide)',
    description: 'Most creators quit at "who do I even email?" This guide gives you the exact LinkedIn search terms, free email-finder tools, and fallback tactics to find the right person at any Indian brand.',
    url: 'https://identitykit.in/blog/how-to-find-brand-contacts-emails-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/find-brand-contacts-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/how-to-find-brand-contacts-emails-india-2026',
  },
}

const jobTitles = [
  'Influencer Marketing Manager', 'Brand Partnerships Lead / Manager', 'Digital Marketing Manager',
  'Social Media Manager', 'PR & Communications Manager', 'Growth Marketing Manager',
  'Marketing Coordinator / Associate', 'Founder or Co-founder (for small D2C brands)',
]

const methods = [
  {
    icon: '💼',
    title: 'LinkedIn search (highest success rate)',
    detail: 'Search "[Brand Name]" + "Influencer Marketing Manager" or "Brand Partnerships" in LinkedIn\'s people search. For small D2C brands, search the founder directly — they often handle creator outreach personally in the early stages.',
  },
  {
    icon: '🌐',
    title: 'Brand website — Contact, Press, or Careers page',
    detail: 'Many Indian D2C brands list a partnerships or PR email on their "Contact Us" or "Press" page. Careers pages sometimes reveal the marketing team\'s email format even when no direct contact is listed.',
  },
  {
    icon: '🔎',
    title: 'Email-format guessing tools',
    detail: 'Once you know a person\'s name and the company domain, tools like Hunter.io can identify the likely email pattern (e.g. first.last@brand.com) used across that company — many offer a limited free tier.',
  },
  {
    icon: '📸',
    title: 'Instagram bio and brand posts',
    detail: 'Check the brand\'s Instagram bio for a partnerships email. Also check recent influencer collaboration posts — tagged creators sometimes mention who they worked with in captions or comments.',
  },
  {
    icon: '🤝',
    title: 'Ask creators who\'ve already worked with the brand',
    detail: 'Fellow creators in your niche are often willing to share who handled their collaboration, especially if you\'re not competing for the exact same campaign slot.',
  },
  {
    icon: '✉️',
    title: 'The generic info@ fallback',
    detail: 'When you truly can\'t find a named contact, a short, polite email to the brand\'s general inbox asking to be redirected to the right person for creator collaborations is a completely acceptable, professional fallback.',
  },
]

const emailFormats = [
  { format: 'firstname@brand.com', example: 'priya@glowcosmetics.in' },
  { format: 'firstname.lastname@brand.com', example: 'priya.sharma@glowcosmetics.in' },
  { format: 'firstinitiallastname@brand.com', example: 'psharma@glowcosmetics.in' },
  { format: 'firstname_lastname@brand.com', example: 'priya_sharma@glowcosmetics.in' },
]

const mistakes = [
  { m: 'Sending every pitch to hello@ or info@', f: 'Generic inboxes are handled by whoever\'s free that day and are frequently lower priority — a named contact dramatically increases your reply odds. Reserve info@ for when you genuinely can\'t find anyone else.' },
  { m: 'Guessing an email and never verifying it', f: 'A bounced email wastes your outreach and can flag your own email as spammy if you guess wrong repeatedly. Use a verification step, or simply confirm via a short LinkedIn message first.' },
  { m: 'Pitching a Marketing Director for a ₹5,000 nano collaboration', f: 'Senior leadership at larger brands rarely handles individual creator deals. Coordinators and associates are often the right level of contact for smaller budgets — save the senior contact for when you have real leverage.' },
  { m: 'Connecting on LinkedIn and pitching in the same message', f: 'A connection request with a sales pitch attached has a lower acceptance rate. Send a plain connection request first, then follow up with your pitch once accepted.' },
  { m: 'Giving up after one bounced or ignored email', f: 'A single follow-up after 5–7 days recovers a meaningful share of otherwise-lost opportunities — most non-responses are about timing and inbox overload, not rejection.' },
]

export default function FindBrandContactsIndiaPage() {
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
            {['Brand Outreach', 'Brand Deals', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Find Brand Emails & Contacts<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>for Collaboration in India</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Most creators have a great pitch email ready and nowhere to send it — the real bottleneck is finding the right human. Here's exactly where to look, in order of success rate, plus what to do when a brand only shows a generic info@ address.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Finding Brand Contacts in India</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Search LinkedIn for "[Brand Name]" + "Influencer Marketing Manager" or "Brand Partnerships" — highest success rate of any method',
                'For small D2C brands, message the founder directly — they often run outreach themselves in the early stages',
                'Check the brand website\'s Contact, Press, or Careers page for a partnerships email',
                'Use a free-tier email finder tool once you know a name and the company domain',
                'Check the brand\'s Instagram bio and recent collaboration posts for a partnerships email or tagged contact',
                'When nothing else works, a short, polite email to the general info@ inbox asking to be redirected is a completely acceptable fallback',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Brand Outreach in India</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Personalised pitches sent to a named contact see reply rates of roughly 30–40%, compared to just 5–8% for generic, un-personalised outreach to a shared inbox.',
                'A single, well-timed follow-up after 5–7 days recovers a meaningful share of deals that would otherwise be lost to inbox overload rather than genuine disinterest.',
                'Smaller D2C brands in India — the segment most responsive to nano and micro creators — are frequently run by founders who personally handle collaboration requests in the early stages.',
                'Common company-wide email formats include firstname@brand.com and firstname.lastname@brand.com — once you know one employee\'s email, the same pattern usually applies company-wide.',
                'LinkedIn remains the single highest-yield channel for finding a named marketing or partnerships contact at both large and small Indian brands.',
                'WhatsApp is frequently the fastest communication channel with founder-led D2C brands once an initial contact has been made, often outpacing email response times.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who to look for */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Who to Look For: Job Titles That Signal the Right Contact</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Search for these exact titles — they're the people most likely to own creator collaborations at any Indian brand.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {jobTitles.map((title, i) => (
                <span key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, padding: '8px 16px', fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>{title}</span>
              ))}
            </div>
          </section>

          {/* Methods */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>6 Ways to Find a Brand's Contact — Ranked by Success Rate</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Work through these in order. Most creators find their contact within the first two or three methods.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {methods.map((item, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 10, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{item.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.65 }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Email format guessing */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Common Email Formats — Guess It From One Known Address</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>If you know one employee's email (from a press mention, LinkedIn, or a company blog post byline), the same pattern almost always applies company-wide.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {emailFormats.map((row, i) => (
                <div key={i} className="card" style={{ padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 14, color: '#FF6B2B', fontWeight: 700 }}>{row.format}</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, fontFamily: 'monospace' }}>{row.example}</span>
                </div>
              ))}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 12, lineHeight: 1.6 }}>Always verify before relying on a guessed address — a bounced email wastes an opportunity and can hurt your own sender reputation if it happens repeatedly.</p>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Found the contact — now make your first impression count</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Generate a personalised pitch email in seconds, then attach a professional Identity Kit profile link instead of a bulky PDF. Free tools, built for Indian creators.</p>
            </div>
            <Link href="/tools/brand-pitch-email-generator" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Generate My Pitch Email →
            </Link>
          </div>

          {/* Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>5 Mistakes Creators Make Finding Brand Contacts</h2>
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
                { q: 'What\'s the fastest way to find a brand\'s collaboration email in India?', a: 'LinkedIn search is usually fastest — search the brand name along with "Influencer Marketing Manager" or "Brand Partnerships" and check the person\'s profile for a listed email. If nothing turns up there, the brand\'s website Contact or Press page is the next best step.' },
                { q: 'Should I message a brand on Instagram DM or send an email?', a: 'Both work, but email tends to get a better response for professional, long-term collaboration discussions since it\'s where brands expect detailed pitches with a media kit attached. Instagram DMs are useful as an initial, low-friction way to get on a brand\'s radar, especially for founder-led D2C brands who manage their own social accounts.' },
                { q: 'Is it okay to email the general info@ address if I can\'t find a named contact?', a: 'Yes — it\'s a completely acceptable fallback. Keep the email short and simply ask to be redirected to whoever handles creator or influencer collaborations. This is far better than not reaching out at all, though a named contact will always get a faster, higher response rate.' },
                { q: 'How do I know if a guessed email address is correct before sending my pitch?', a: 'Use a free-tier email verification or finder tool to check the pattern against the company domain before sending, or send a brief LinkedIn message first to confirm you have the right person and ask for the best email to reach them.' },
                { q: 'Should I connect with the brand contact on LinkedIn before pitching?', a: 'Yes, but keep the connection request itself pitch-free — a plain "I\'d love to connect" request has a higher acceptance rate than one packaged with a sales pitch. Send your actual collaboration pitch as a follow-up message once they\'ve accepted.' },
                { q: 'Who should I contact for a small budget nano-influencer collaboration versus a larger deal?', a: 'For smaller budgets, a Marketing Coordinator, Associate, or — for very small D2C brands — the founder directly is usually the right level of contact. Save outreach to senior Marketing Directors or Heads of Marketing for larger campaigns where you have more leverage or an established track record.' },
                { q: 'How long should I wait before following up on an unanswered pitch email?', a: 'Wait 5 to 7 business days before your first follow-up. A single, polite follow-up recovers a meaningful share of deals — most non-responses come down to a busy inbox, not a rejection, so don\'t assume silence means no.' },
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
                { href: '/blog/how-to-pitch-brands-india-influencer-2026', title: 'How to Pitch Brands as an Influencer in India', tag: 'Brand Deals' },
                { href: '/blog/how-to-negotiate-brand-deal-rates-india-2026', title: 'How to Negotiate Brand Deal Rates in India', tag: 'Negotiation' },
                { href: '/blog/influencer-media-kit-india-2026', title: 'How to Make a Media Kit for Instagram in India', tag: 'Media Kit' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🔍</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Found the contact. Now make it easy for them to say yes.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              A free Identity Kit profile gives every brand contact one clean link with your media kit, rate card, and past work — no more oversized PDF attachments.
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
