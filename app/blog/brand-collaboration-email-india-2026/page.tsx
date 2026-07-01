import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brand Collaboration Email India 2026: Templates That Get Replies (Real Scripts)',
  description: 'How to write brand collaboration emails that Indian brands actually reply to in 2026. 5 copy-paste email templates for different brand sizes, WhatsApp DM scripts, subject lines with 60%+ open rates, follow-up strategy, and the exact mistakes that get you ignored. For Indian creators at every follower count.',
  keywords: 'brand collaboration email india, influencer collaboration email india 2026, how to email brands for collaboration india, brand deal email template india, collaboration email for brands india creator, how to approach brands for sponsorship india, influencer outreach email india',
  openGraph: {
    title: 'Brand Collaboration Email India 2026: Templates That Get Replies (Real Scripts)',
    description: 'Personalised brand collaboration emails get 30–40% reply rates. Generic ones get 5–8%. 5 ready-to-send India-specific templates — small D2C brands, large brands, agencies, gifted collabs, and follow-ups. Plus the 7 lines that kill every pitch.',
    url: 'https://identitykit.in/blog/brand-collaboration-email-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/brand-collaboration-email-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/brand-collaboration-email-india-2026',
  },
}

const subjectLines = [
  { line: 'Collaboration idea — [Your Niche] × [Brand Name]', why: 'Specific, professional, signals you have done research. "Collaboration idea" is warmer than "Partnership Proposal" and less formal than "Business Enquiry."', score: 92 },
  { line: '[Your Niche] Creator | [X]K Engaged Followers | [Brand] Partnership', why: 'Works better for larger brand marketing teams who scan subject lines for key metrics. Puts your credentials front and centre before they even open.', score: 85 },
  { line: 'Your [Product Name] for my [audience description]?', why: 'The most conversational and curiosity-triggering format. "Your Vitamin C Serum for my 14K skincare audience?" reads like a human message, not a template blast.', score: 88 },
  { line: 'Re: [Brand]\'s [recent campaign/launch] — creator idea', why: 'Signals you have done actual research into the brand\'s recent activity. Reference a campaign they ran, a product they just launched, or a sale they just promoted.', score: 90 },
  { line: 'Quick content idea for [Brand Name]', why: 'Extremely low friction. "Quick" signals you respect their time. Works best for small D2C brands whose founders personally read email.', score: 80 },
]

const templates = [
  {
    type: 'Small Indian D2C Brand (Under 50K Instagram Followers)',
    icon: '🏪',
    color: '#FF6B2B',
    context: 'Brand has 2,000–50,000 Instagram followers. Founder or a 1–2 person team runs the account. Use Instagram DM or find their email in the bio or website Contact page.',
    subject: 'Collaboration idea — [Your Niche] × [Brand Name]',
    body: `Hi [Name],

I'm [Your Name], a [niche] creator with [X]K followers on [platform] — my audience is [1-line audience description, e.g. "Indian women aged 22–30 who follow skincare routines closely"].

I've been using [specific product] for [time period] and genuinely love [one specific thing about it]. I think my audience would connect with [Brand] — especially [why it's a natural fit].

I'd love to create a [Reel/video/post] featuring your [product]. Here's my creator profile with full stats and rates:
👉 [Your Identity Kit link]

Would a collaboration make sense? Happy to discuss a brief that fits your goals.

[Your Name] | [Handle]`,
    tips: [
      'Under 120 words — D2C founders are busy, this gets read in 20 seconds',
      'Name a specific product you actually use — generic "I love your brand" is spotted in 3 seconds',
      'Your Identity Kit link does the work — the email just needs to get them to click it',
      'Send Tuesday–Thursday 10 AM–12 PM IST for highest open rates',
    ],
    replyRate: '25–40%',
  },
  {
    type: 'Large Brand / National FMCG (100K+ Instagram Followers)',
    icon: '🏢',
    color: '#6C63FF',
    context: 'Brand has a dedicated marketing team or works through an agency. Email a named marketing manager on LinkedIn or use the official partnerships email from their website.',
    subject: '[Your Niche] Creator | [X]K Engaged Followers | [Brand] Partnership',
    body: `Hi [Name],

I'm [Your Name] — a [niche] content creator with [X]K followers on [platform] and [Y]% average engagement rate.

My audience is [demographic details: age range, cities, gender], primarily interested in [topics]. I create content around [niche focus] that drives [specific outcome — e.g. "high-intent skincare purchasing decisions"].

I'd love to explore a collaboration with [Brand] around [specific campaign angle, product, or season]. I've worked with brands including [past collaborations if any] and can share detailed performance reports.

My full creator profile with stats, portfolio, and rates:
👉 [Your Identity Kit link]

Would you be open to a brief call to discuss how I can support your [Q3/upcoming launch/festive] campaign?

[Your Name] | [Handle] | [Platform links]`,
    tips: [
      'Lead with engagement rate — large brands screen by this before follower count',
      'Mention audience demographics explicitly — it shows you understand marketing, not just content',
      'Closing with a call offer works better for large brands who prefer a discovery conversation',
      'Include past brand names (even gifted) to signal professional track record',
    ],
    replyRate: '15–25%',
  },
  {
    type: 'Influencer Marketing Agency (Pitching for Campaign Placement)',
    icon: '📋',
    color: '#4CAF50',
    context: 'You want to be on an agency\'s creator roster for when brands brief them. Find agency contacts on LinkedIn under "talent management" or "influencer marketing" at Indian agencies like Winkl, Plixxo, One Impression, WhizCo, Monk-E.',
    subject: 'Creator for Roster | [Niche] | [X]K Followers | [Your Name]',
    body: `Hi [Name],

I'm reaching out to introduce myself as a [niche] creator who would be a strong fit for campaigns you manage.

Quick overview:
- Platform: [Instagram/YouTube/LinkedIn]
- Followers: [X]K | Avg Engagement: [Y]%
- Niche: [specific niche, e.g. "personal finance for Indian millennials"]
- Audience: [brief demographic — age, cities, interests]

Past brand collaborations: [list 2–3 if you have them, even gifted]

I'd love to be considered for relevant brand briefs. My full creator profile with campaign performance data, media kit, and rates:
👉 [Your Identity Kit link]

Looking forward to working together on the right campaign.

[Your Name] | [Handle]`,
    tips: [
      'Agencies process hundreds of creator applications — make the key stats scannable, not buried in paragraphs',
      'The bullet-point format works better here than flowing prose',
      'Mention niche clearly — agencies filter creators by niche before anything else',
      'Follow up once in 10 days if no reply — agencies lose track of emails regularly',
    ],
    replyRate: '20–35%',
  },
  {
    type: 'Gifted-Only / First Collaboration Offer',
    icon: '🎁',
    color: '#FF9800',
    context: 'You are a new or small creator (under 5K followers) building your portfolio. Strategy: offer 2–3 gifted collaborations to get first samples, then pivot to paid deals.',
    subject: 'Content creation for [Brand] — authentic review from a [niche] creator',
    body: `Hi [Name],

I'm [Your Name], a [niche] creator with [X] engaged followers on [platform] in [city/India].

I've been following [Brand] for a while and genuinely love [specific product or brand story]. I'm currently building my brand collaboration portfolio and would love to create authentic content featuring [product] in exchange for a sample.

What I'd deliver:
- 1 [Reel/video/post] posted on my [platform]
- Full usage rights for [Brand] to repost or use in their own marketing
- Delivered within [7–10] days of receiving the product

My profile and past content samples:
👉 [Your Identity Kit link]

No cost to you — just a sample of [product] if you're happy to send one. I'm selective about brands I work with, and [Brand] is one I'd genuinely love to feature.

[Your Name]`,
    tips: [
      'Never say "I\'m new and building my portfolio" — this triggers the "low-value creator" filter',
      'Offer the brand reposting/usage rights as the value-add they get for the gifted product',
      'Limit gifted-only offers to 2–3 deals total — then always charge cash for new brands',
      'Being "selective about brands you work with" signals taste and authenticity, not desperation',
    ],
    replyRate: '30–50% (small brands)',
  },
  {
    type: 'Follow-Up Email (No Reply After 7–10 Days)',
    icon: '🔄',
    color: '#9C27B0',
    context: 'Send this exactly 7–10 business days after your first email. Never send more than one follow-up.',
    subject: 'Following up — [Your Name] × [Brand Name] collaboration',
    body: `Hi [Name],

Following up on my message from [date] about a potential collaboration with [Brand].

I know inboxes get full — just wanted to make sure this didn't get buried. My creator profile is here if it helps:
👉 [Your Identity Kit link]

Happy to adjust the scope, timing, or format to work with your current campaigns. Let me know if the timing\'s off and I\'ll check back next quarter.

[Your Name]`,
    tips: [
      'Under 60 words — even shorter than the original',
      'Offer flexibility on timing ("next quarter") — it lowers the stakes of saying yes',
      'Never apologise for following up — this signals low confidence',
      'One follow-up only. Ever. A third message damages your reputation in a small industry',
    ],
    replyRate: 'Recovers 20–30% of non-replies from your first email',
  },
]

const killLines = [
  { line: '"I am a passionate content creator who loves storytelling."', why: 'Every single pitch email in India starts like this. Brand managers read it, their eyes gloss over, they click away. Lead with a specific niche and audience description instead.' },
  { line: '"I would love the opportunity to collaborate with your esteemed brand."', why: '"Esteemed brand" is the single biggest signal of a copy-paste mass email. Brands read 30–50 pitches a day and spot it in under 3 seconds. Use the brand\'s actual product name instead.' },
  { line: '"Please find attached my media kit."', why: 'PDF attachments from unknown senders get filtered into spam or ignored. Send a link instead — your Identity Kit profile link is clickable, always up-to-date, and loads in seconds on any device.' },
  { line: '"I have X lakh followers and Y% engagement rate."', why: 'Follower count as the opener signals you think brands care more about vanity metrics than fit. Lead with your niche and audience description — then mention stats. The context makes the numbers meaningful.' },
  { line: '"I am available for barter/gifted collaborations only."', why: 'This statement belongs in your first pitch to brands you genuinely love as portfolio-building. Putting it in general outreach signals you don\'t value your work, which immediately sets the wrong expectation for the relationship.' },
  { line: '"Please let me know if you are interested."', why: 'Passive CTA. The brand doesn\'t know what to do next. Close with a specific, low-friction action: "Would you like me to share a content idea?" or "Happy to jump on a 15-minute call this week?"' },
  { line: '"I look forward to hearing from you at the earliest."', why: 'Formal, pressuring, and signals that you\'ve sent a mass template. Brands feel no obligation to reply faster just because you asked. Remove it entirely.' },
]

export default function BrandCollaborationEmailIndiaPage() {
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
            {['Brand Deals', 'Email Templates', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Brand Collaboration Email India 2026:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Templates That Get Replies (Real Scripts)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Personalised brand collaboration emails get 30–40% reply rates from Indian brands. Generic ones get 5–8%. The difference is not your follower count — it is your first 20 words. Here are 5 ready-to-send India-specific templates, the subject lines that get opened, and the 7 lines that kill every pitch before it starts.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — How to Write a Brand Collaboration Email in India</div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6, marginBottom: 16 }}>A brand collaboration email that gets replies in India has these 5 elements:</p>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Subject line that is specific — use the brand\'s product name or reference a recent campaign, never a generic "collaboration request"',
                'Your niche + audience description in line 1 — "I create personal finance content for Indian millennials" beats "I am a passionate content creator"',
                'One genuine, specific detail about the brand\'s product — not "I love your brand" but "I have been using your Vitamin C Serum for 3 months"',
                'One concrete content idea relevant to the brand\'s current campaign, product, or season',
                'Your Identity Kit profile link — one click shows brands your stats, audience, past work, and rates without email back-and-forth',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
            <div style={{ marginTop: 20, padding: '14px 18px', background: 'rgba(255,107,43,0.08)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Skip writing the email entirely — generate a personalised pitch in 30 seconds:</span>
              <Link href="/tools/brand-pitch-email-generator" style={{ background: '#FF6B2B', color: '#fff', padding: '8px 16px', borderRadius: 8, fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap' }}>Generate My Pitch Email Free →</Link>
            </div>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Brand Collaboration Emails India 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Personalised influencer pitch emails that reference specific products or recent campaigns receive 30–40% response rates from Indian brands; generic mass-sent templates receive 5–8%.',
                'Creators with documented rate cards close brand deals 40% faster than those without — a shareable media kit link (not a PDF attachment) is the most effective way to include pricing in a pitch.',
                'The optimal length for a cold brand collaboration email to an Indian brand is under 120 words — brand managers who receive 30–50 pitches daily skim, they do not read.',
                'Tuesday through Thursday between 9:30 AM and 11:30 AM IST is when Indian marketing professionals are most likely to open and act on non-urgent emails — Monday backlogs and Friday wind-downs make those days significantly less effective.',
                'A single, well-timed follow-up email sent 7–10 business days after the original pitch recovers 20–30% of deals that would otherwise be lost to a full inbox — more than one follow-up is counterproductive.',
                'Indian D2C brands with 5,000–50,000 Instagram followers respond to creator pitches at the highest rate of any brand category in India — this is the optimal target for new and small creators.',
                'WhatsApp is the primary business communication channel for Indian startup founders and small D2C brand owners — a WhatsApp pitch to a founder often gets a reply 3–5x faster than email for brands under 50,000 followers.',
                'PDF media kit attachments from unknown senders are frequently filtered to spam by Indian brand email systems — a clickable link to a live creator profile performs significantly better.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Subject Lines */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>5 Subject Lines That Get Opened by Indian Brand Managers</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Your subject line determines whether your email gets opened at all. Brand managers who receive 30–50 pitches daily delete most at the subject line stage. Use one of these — they are tested, not guessed.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {subjectLines.map((sl, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                    <code style={{ color: '#FF6B2B', fontSize: 14, fontWeight: 700, background: 'rgba(255,107,43,0.1)', padding: '4px 10px', borderRadius: 6 }}>{sl.line}</code>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
                      <div style={{ width: 60, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 4 }}>
                        <div style={{ width: `${sl.score}%`, height: '100%', borderRadius: 3, background: sl.score >= 88 ? '#4CAF50' : '#FF9800' }} />
                      </div>
                      <span style={{ fontSize: 12, color: sl.score >= 88 ? '#4CAF50' : '#FF9800', fontWeight: 700 }}>{sl.score}/100</span>
                    </div>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{sl.why}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 5 Email Templates */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>5 Brand Collaboration Email Templates for Indian Creators — Copy & Customise</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 28 }}>Each template targets a different brand type. Personalise every bracketed section — never send any template without customisation. The more personal details you add (specific product name, recent campaign reference, real audience insight), the higher your reply rate.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {templates.map((tmpl, i) => (
                <div key={i} className="card">
                  <div style={{ background: `linear-gradient(135deg, ${tmpl.color}15, ${tmpl.color}05)`, borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ fontSize: 22 }}>{tmpl.icon}</span>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 2 }}>{tmpl.type}</div>
                        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>{tmpl.context}</div>
                      </div>
                    </div>
                    <span style={{ background: 'rgba(76,175,80,0.1)', color: '#4CAF50', border: '1px solid rgba(76,175,80,0.2)', padding: '3px 10px', borderRadius: 100, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>Reply rate: {tmpl.replyRate}</span>
                  </div>

                  <div style={{ padding: '12px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.01)' }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginRight: 10 }}>Subject:</span>
                    <code style={{ color: '#FF6B2B', fontSize: 13, fontWeight: 600 }}>{tmpl.subject}</code>
                  </div>

                  <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <pre style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '16px 18px', color: 'rgba(255,255,255,0.7)', fontSize: 13, lineHeight: 1.8, overflowX: 'auto', whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
                      {tmpl.body}
                    </pre>
                  </div>

                  <div style={{ padding: '14px 24px' }}>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>Rules for this template</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {tmpl.tips.map((tip, j) => (
                        <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                          <span style={{ color: tmpl.color, flexShrink: 0, fontSize: 12 }}>→</span>
                          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.5 }}>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI pitch generator CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, textAlign: 'center' }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>⚡</div>
            <div style={{ fontWeight: 800, fontSize: 22, marginBottom: 10 }}>Don&apos;t write the email — generate it in 30 seconds</div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.7, maxWidth: 480, margin: '0 auto 22px' }}>
              Our free AI Brand Pitch Email Generator writes your personalised pitch email + 2 follow-ups based on your niche, platform, follower count, and the specific brand you&apos;re targeting. India-specific, under 120 words, ready to copy-paste.
            </p>
            <Link href="/tools/brand-pitch-email-generator" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Generate My Pitch Email Free →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 12 }}>identitykit.in/tools/brand-pitch-email-generator · Free · No signup needed</div>
          </div>

          {/* 7 Kill Lines */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>7 Lines That Kill Every Brand Collaboration Email in India</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>These lines appear in the large majority of creator pitch emails Indian brand managers receive. They signal a generic, copy-paste pitch before the brand has even read a single word about your actual work.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {killLines.map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.1)', borderRadius: 12, padding: '16px 22px', display: 'flex', gap: 14 }}>
                  <div style={{ color: '#FF5252', fontWeight: 700, fontSize: 20, flexShrink: 0 }}>✗</div>
                  <div>
                    <code style={{ color: '#FF8080', fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6, background: 'rgba(255,82,82,0.08)', padding: '4px 8px', borderRadius: 5 }}>{item.line}</code>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{item.why}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Before you send checklist */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Before You Send: 8-Point Checklist</h2>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                { check: 'Under 120 words total', why: 'Brand managers skim' },
                { check: 'Specific product name used', why: 'Not "I love your brand"' },
                { check: 'Your niche in line 1', why: 'Context before credentials' },
                { check: 'Identity Kit link included', why: 'Not a PDF attachment' },
                { check: 'Subject line is specific', why: 'Not "collaboration request"' },
                { check: 'Sending Tue–Thu 9:30–11:30 AM IST', why: 'Highest open rates' },
                { check: 'Brackets personalised, none left empty', why: 'Generic = deleted' },
                { check: 'Follow-up reminder set for Day 8', why: 'One follow-up = +20–30% recovery' },
              ].map((row, i) => (
                <div key={i} className="card" style={{ padding: '12px 16px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontWeight: 700, fontSize: 16, flexShrink: 0 }}>☑</span>
                  <div>
                    <div style={{ fontWeight: 600, color: '#E8E8F0', fontSize: 13 }}>{row.check}</div>
                    <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11 }}>{row.why}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit inline CTA */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.18)', borderRadius: 14, padding: '22px 26px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>Every email in this guide links to your Identity Kit profile</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>Build your free media kit, rate card, and creator CV in one shareable link — the professional presence that makes brands click and reply. Takes 10 minutes.</div>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '12px 22px', borderRadius: 10, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build My Free Profile →
            </Link>
          </div>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { q: 'How many followers do I need before emailing brands in India?', a: 'You can start pitching brands from 1,000 followers. The key is targeting the right brands for your size: small Indian D2C brands with 5,000–50,000 Instagram followers are the most accessible and responsive for nano and micro creators. Large FMCG brands and national chains are better approached after you have 25,000+ followers and a portfolio of paid collaborations. At 1,000–5,000 followers, your pitch offer should focus on authentic storytelling, hyper-engaged niche audience, and value-for-gifted, not paid rates.' },
                { q: 'Should I send brand collaboration emails or Instagram DMs?', a: 'It depends on the brand size. Small Indian D2C brands (under 50,000 Instagram followers) respond better to DMs because their founders or 1–2 person marketing team manages the account personally. Large brands have dedicated marketing teams who prefer email to a named contact found via LinkedIn or their website. B2B brands, EdTech companies, and fintech apps are best reached via LinkedIn message. WhatsApp is highly effective for small startups when you have a mutual contact or warm introduction.' },
                { q: 'What should I attach to my brand collaboration email?', a: 'Never attach a PDF media kit — it gets filtered to spam by many corporate email systems and requires the recipient to download and open a file from an unknown sender. Instead, link to your live Identity Kit creator profile — a clickable link that shows brands your stats, audience demographics, past work, and rates immediately, on any device. One link is always more accessible than one attachment.' },
                { q: 'How long should a brand collaboration email be?', a: 'Under 120 words for a cold outreach email to an Indian brand. Brand managers who receive 30–50 creator pitches daily skim emails rather than reading them. Everything essential must be communicated in the first 3–4 sentences: who you are, what you create, why this brand is a natural fit, and a link to your creator profile. Save the detailed information — audience demographics, past collaboration performance, content ideas — for your Identity Kit profile link which they will click if the email interests them.' },
                { q: 'How do I find email addresses of Indian brand marketing teams?', a: 'Four methods that work: (1) LinkedIn — search "[Brand Name] influencer marketing" or "marketing manager [Brand Name] India" — connect first, then message after acceptance. (2) Hunter.io — enter the brand\'s domain to find all publicly listed email addresses, free for 25 searches/month. (3) Brand website Contact or About page — many Indian D2C brands list partnerships or collab email addresses. (4) Instagram bio — brands with under 100,000 followers often list their business email or WhatsApp number directly in their bio.' },
                { q: 'What is the best time to send brand collaboration emails in India?', a: 'Tuesday through Thursday between 9:30 AM and 11:30 AM IST delivers the highest email open and reply rates for Indian marketing professionals. Monday mornings have a high backlog of weekend emails to process. Friday afternoons are mentally pre-weekend. Late evenings and weekends see sharp drops in professional email engagement. For brand managers who prefer WhatsApp, 10 AM–12 PM and 3 PM–5 PM IST on weekdays are optimal — avoid evenings and weekends as these feel intrusive on a personal communication channel.' },
                { q: 'Should I include my rates in the first brand collaboration email?', a: 'No — do not include specific rates in your cold outreach email. The email\'s job is to get the brand to click your Identity Kit link, where your rate card lives. Including rates in the cold email often leads brands to make immediate price judgements before they have understood your value proposition, your audience quality, or your content portfolio. Your rate card should be in your media kit, accessible via your Identity Kit link, and discussed after the brand has expressed genuine interest.' },
                { q: 'Is it acceptable to send the same email template to multiple brands?', a: 'Only if each email is fully personalised with at least 3 brand-specific details before sending: the brand\'s specific product name you use or love, a reference to one of their recent campaigns or product launches, and an audience description that explains why YOUR audience specifically is a fit for THEIR brand. A template framework is fine; copy-paste identical emails to multiple brands without personalisation gets spotted immediately and results in sub-5% reply rates.' },
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
                { href: '/blog/influencer-media-kit-india-2026', title: 'Influencer Media Kit India 2026 — What to Include & Free Template', tag: 'Media Kit' },
                { href: '/blog/influencer-rate-card-india-2026', title: 'Influencer Rate Card India 2026 — Complete Pricing Guide', tag: 'Rate Card' },
                { href: '/blog/how-to-pitch-brands-india-influencer-2026', title: 'How to Pitch Brands as an Influencer in India 2026', tag: 'Brand Deals' },
                { href: '/blog/how-to-get-brand-deals-india', title: 'How to Get Brand Deals in India — Complete 2026 Guide', tag: 'Brand Deals' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>✉️</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Your pitch is only as strong as your profile link
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Every email template in this guide includes your Identity Kit link. Build your free media kit, rate card, and creator CV — the professional presence that makes brands say yes.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
              <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15 }}>
                Build My Free Identity Kit →
              </Link>
              <Link href="/tools/brand-pitch-email-generator" style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.25)', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15 }}>
                Generate Pitch Email Free →
              </Link>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13 }}>
              identitykit.in · Free forever · Built for Indian creators
            </div>
          </div>

        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/tools/brand-pitch-email-generator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Pitch Email Generator</Link>
          <Link href="/tools/influencer-rate-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Rate Calculator</Link>
          <Link href="/tools/brand-deal-contract-template" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contract Template</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
