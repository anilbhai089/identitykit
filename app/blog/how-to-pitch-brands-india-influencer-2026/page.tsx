import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Pitch Brands as an Influencer in India 2026 (Templates + Scripts That Get Replies)',
  description: 'Complete guide to pitching brands as an Indian influencer in 2026. Email templates, WhatsApp DM scripts, LinkedIn outreach, how to find brand contacts, follow-up strategy, negotiation tips, and exactly what Indian brand managers want to see before saying yes.',
  keywords: 'how to pitch brands as influencer india, brand pitch email india influencer, how to approach brands for collaboration india, influencer brand deal pitch india 2026, how to get brand deals india pitch, brand collaboration pitch email template india, how to DM brands india creator, influencer outreach india brands',
  openGraph: {
    title: 'How to Pitch Brands as an Influencer in India 2026 (Templates + Scripts That Get Replies)',
    description: 'Generic pitches get 5–10% replies. Personalised pitches get 30–40%. India-specific email templates, WhatsApp DM scripts, LinkedIn outreach, and negotiation tactics for every follower size.',
    url: 'https://identitykit.in/blog/how-to-pitch-brands-india-influencer-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/pitch-brands-india-influencer.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/how-to-pitch-brands-india-influencer-2026',
  },
}

const pitchChannels = [
  {
    channel: 'Email to Marketing Team',
    icon: '📧',
    color: '#FF6B2B',
    replyRate: '25–40%',
    replyScore: 82,
    bestFor: 'Mid-size and large Indian brands, EdTech, fintech, FMCG',
    howToFind: 'LinkedIn (search "[Brand] marketing manager India"), Hunter.io for domain email lookup, brand website Contact/About page, brand Instagram bio',
    whenToUse: 'When the brand has 10,000+ Instagram followers and appears to run professional marketing campaigns. Brands this size have a dedicated marketing team who checks email.',
    timing: 'Tuesday–Thursday, 9:30 AM–11:30 AM IST. Avoid Mondays (backlog) and Fridays (wind-down). Open rates drop 40% outside these windows.',
    proTip: 'Keep the email under 120 words. Attach nothing — link to your Identity Kit profile instead. A clean link gets 3x more clicks than a PDF attachment from an unknown sender.',
  },
  {
    channel: 'Instagram DM to Brand Account',
    icon: '📸',
    color: '#E91E63',
    replyRate: '15–30%',
    replyScore: 62,
    bestFor: 'Small D2C brands (under 50K followers), food brands, beauty startups, local businesses',
    howToFind: 'Search your niche on Instagram, filter by small-to-mid brand accounts. Look at who your favourite creators have collaborated with recently.',
    whenToUse: 'When the brand has under 50,000 Instagram followers — their founder or a 1–2 person marketing team is running the account and responds to DMs. Large brands never reply to creator DMs.',
    timing: 'Monday–Wednesday, 10 AM–1 PM IST. Instagram DMs have the shortest response window — reply within 2 hours of getting a response or momentum is lost.',
    proTip: 'First message: 2–3 sentences only. Genuine compliment about a specific product + one-line intro + your Identity Kit link. Never lead with your follower count — lead with why you love their product.',
  },
  {
    channel: 'LinkedIn Message to Decision Maker',
    icon: '💼',
    color: '#0077B5',
    replyRate: '20–35%',
    replyScore: 72,
    bestFor: 'B2B brands, EdTech companies, fintech apps, SaaS, professional services',
    howToFind: 'Search "influencer marketing [Company Name]", "brand partnerships [Company Name]", "marketing manager [Company Name]" on LinkedIn. Connect first, then message after they accept.',
    whenToUse: 'When your niche is finance, career, tech, or B2B. LinkedIn brand deals pay 2–3x more than Instagram for equivalent audiences because the professional audience justifies higher CPM.',
    timing: 'Connect on Tuesday. Message on Wednesday or Thursday after they accept. LinkedIn messages sent Thursday morning have the highest reply rates.',
    proTip: 'LinkedIn messages should be even shorter than email — 3–4 sentences max. Mention one specific piece of their content you engaged with to prove you are not mass-messaging. Attach your Identity Kit link as your "creator profile" rather than calling it a media kit.',
  },
  {
    channel: 'WhatsApp to Founder/Marketing Contact',
    icon: '💬',
    color: '#4CAF50',
    replyRate: '35–60%',
    replyScore: 90,
    bestFor: 'Small Indian D2C startups, local brands, Tier-2 city businesses',
    howToFind: 'Brand website "Contact" page, Instagram bio (many small Indian brands put WhatsApp number directly), LinkedIn profile, or ask in your creator community for warm intros.',
    whenToUse: 'When you already have a warm connection or the brand is a small Indian startup. Indian founders and small business owners are highly WhatsApp-native — this is their primary business communication channel.',
    timing: '10 AM–12 PM or 3 PM–5 PM IST on weekdays. Avoid messaging on weekends or after 7 PM — WhatsApp messages at odd hours from unknown numbers feel intrusive.',
    proTip: 'WhatsApp works best after a warm introduction: "Hi [Name], I got your number from [mutual contact]. I\'m [Your Name], a [niche] creator — I\'d love to discuss a collaboration with [Brand]." Always ask permission before sending voice notes.',
  },
  {
    channel: 'Influencer Marketing Platforms',
    icon: '🔗',
    color: '#9C27B0',
    replyRate: '40–70%',
    replyScore: 85,
    bestFor: 'All tiers — especially useful for nano and micro creators finding their first deals',
    howToFind: 'Register on: Winkl (winkl.co), Plixxo (plixxo.com), Qoruz (qoruz.com), One Impression (oneimpression.io), WhizCo (whizco.com)',
    whenToUse: 'When you want inbound brand opportunities without cold outreach. These platforms match brands with creators based on niche and audience demographics. Especially valuable for nano and micro creators who haven\'t built a brand network yet.',
    timing: 'Keep your platform profile updated monthly. Brands filter by recent activity — inactive profiles get skipped.',
    proTip: 'Platform rates are often 20–30% lower than direct outreach rates because the platform takes a cut. Use platforms to build your portfolio and testimonials, then migrate your best brand relationships to direct communication.',
  },
]

const emailTemplates = [
  {
    type: 'Cold Email — Small Indian D2C Brand',
    icon: '🏪',
    color: '#FF6B2B',
    context: 'Brand has 5,000–50,000 Instagram followers, appears to be a D2C startup. You genuinely use or like their product.',
    subject: 'Collaboration idea — [Your Niche] × [Brand Name]',
    body: `Hi [Name],

I'm [Your Name], a [niche] creator with [X]K followers on [platform] — my audience is [specific demographic, e.g. "Indian women aged 22–32 interested in skincare"].

I've been using [specific product] for [time] and genuinely love [one specific thing]. I wanted to reach out because I think my audience would connect with [Brand] — particularly [why it's a natural fit].

I'd love to create a [Reel/video/post] for your [upcoming launch/current campaign/product]. Here's my creator profile with full stats, past work, and rates:
👉 [Your Identity Kit link]

Would a collaboration make sense? Happy to discuss a brief that works for your goals and budget.

[Your Name] | [Handle]`,
    tips: ['Under 120 words — brand managers skim, not read', 'Name a specific product you genuinely use — generic "I love your brand" is spotted instantly', 'Your Identity Kit link does the heavy lifting — the email just gets them to click', 'Send from a professional email, not your personal Gmail'],
  },
  {
    type: 'Cold Email — Large Brand / Agency',
    icon: '🏢',
    color: '#6C63FF',
    context: 'Brand has 100,000+ followers, runs professional influencer marketing campaigns. Probably has a dedicated marketing team or agency.',
    subject: '[Your Niche] Creator | [X]K Engaged Followers | [Brand Name] Partnership',
    body: `Hi [Name],

I'm [Your Name] — a [niche] content creator with [X]K followers on [platform] and [Y]% average engagement.

My audience is [specific demographic] — [X]% based in [cities/region], aged [range]. I create content around [niche topics] that drives [specific outcome — e.g. "purchasing decisions for skincare"].

I'd love to explore a collaboration with [Brand] around [specific campaign/product/season]. I've worked with brands including [past brand names if any] and can share performance data on request.

Creator profile + rates: [Your Identity Kit link]

Would you be open to a brief call to discuss?

[Your Name] | [Handle] | [Platform links]`,
    tips: ['Lead with your niche and engagement rate — large brands screen by engagement before follower count', 'Mentioning audience demographics shows professionalism — most creators skip this', 'If you have past brand experience, name the brands (even gifted)', 'Close with a call option — large brands prefer a brief discovery call before committing'],
  },
  {
    type: 'Follow-Up Email (No Response After 7 Days)',
    icon: '🔄',
    color: '#FF9800',
    context: 'You sent your first email 7–10 days ago and haven\'t received a reply.',
    subject: 'Following up — [Your Name] × [Brand Name] Collaboration',
    body: `Hi [Name],

Following up on my message from [date] about a potential collaboration with [Brand Name].

I know your inbox gets full — just wanted to make sure this didn't get buried. My creator profile is here if it helps:
👉 [Your Identity Kit link]

Happy to adjust scope, timing, or format to work with your current campaigns. Would love to connect if the timing is right.

[Your Name]`,
    tips: ['One follow-up only — maximum. Two follow-ups make you look desperate', 'Send exactly 7–10 days after the original email', 'Keep it under 60 words — shorter than the original', 'Offer flexibility on scope to reduce barriers to saying yes'],
  },
  {
    type: 'Instagram DM Script — Small Brand',
    icon: '📱',
    color: '#E91E63',
    context: 'Brand has under 50,000 Instagram followers. First DM — keep it extremely short.',
    subject: '(No subject — DM format)',
    body: `Hi! I'm [Name], a [niche] creator with [X]K followers focused on [topic].

I genuinely love your [specific product] — especially [one specific thing]. I think my audience would love it too.

Would you be open to a collaboration? My full creator profile is here: [Identity Kit link]

Happy to share a content idea that works for your brand 🙏`,
    tips: ['3–4 sentences maximum for a first DM', 'Emoji use is acceptable in DMs — keeps the tone warm and native to the platform', 'Never mention rates in the first DM — that comes in the second message', 'Reply within 2 hours if they respond — DM momentum is fragile'],
  },
]

const negotiationTips = [
  {
    situation: 'Brand offers way below your rate',
    icon: '⬇️',
    color: '#FF5252',
    response: 'Acknowledge the offer respectfully, then counter with a smaller package at a rate closer to theirs. "I understand your budget — for ₹[their offer], I could do [smaller deliverable, e.g. 1 Story set instead of a Reel]. Alternatively, a Reel is ₹[your rate] — would that work if we extended the timeline to [next month]?" Never just say no — offer an alternative that preserves the relationship.',
  },
  {
    situation: 'Brand wants usage rights / whitelisting',
    icon: '📢',
    color: '#FF9800',
    response: 'Usage rights are a premium, always charged separately. "My rate for the Reel is ₹[base rate]. If you\'d like to use the content in your paid ads (whitelisting), there\'s an additional ₹[30–50% of base rate] for 30-day usage rights, or ₹[50–75%] for 90 days." State this matter-of-factly — it is standard industry practice that all professional brands expect.',
  },
  {
    situation: 'Brand asks for exclusivity',
    icon: '🔒',
    color: '#6C63FF',
    response: 'Exclusivity prevents you from working with their competitors during the deal period — it has real monetary value. "Category exclusivity during the campaign period is ₹[25% of base rate] additional. This ensures I don\'t create content for any competing brands during [timeframe]." If they want long-term exclusivity (3+ months), the premium should be significantly higher.',
  },
  {
    situation: 'Brand wants many revisions',
    icon: '🔁',
    color: '#4CAF50',
    response: 'Set revision limits upfront in your pitch or contract. "My rate includes one round of revisions before final delivery. Additional revisions are ₹[X] per round." Unlimited revisions is the most common way Indian creators lose money on brand deals — the content that took 2 hours to make takes 8 hours because of endless change requests.',
  },
  {
    situation: 'Brand delays payment beyond agreed timeline',
    icon: '⏰',
    color: '#FF6B2B',
    response: 'Send a polite but firm payment reminder: "Hi [Name], just following up on invoice #[number] for [amount] due on [date]. Could you share the payment status? I\'ve attached the invoice again for reference." If payment is 14+ days late, pause any additional deliverables until payment is received. Always use a written contract or email confirmation before starting any deliverable.',
  },
]

const findBrandContacts = [
  { method: 'LinkedIn Search', howTo: 'Search "[Brand Name] influencer marketing" or "[Brand Name] marketing manager". Filter by India location. Connect first, personalise your connection note, then pitch after they accept.', effort: 'High', success: 'High' },
  { method: 'Hunter.io', howTo: 'Enter the brand\'s domain (e.g. mamaearth.in) and Hunter finds all publicly listed email addresses. Free plan gives 25 searches/month — enough for 25 brand pitches.', effort: 'Low', success: 'High' },
  { method: 'Instagram Bio', howTo: 'Check the brand\'s Instagram bio — Indian D2C brands with under 100K followers often list a business email or WhatsApp number directly in their bio.', effort: 'Low', success: 'Medium' },
  { method: 'Brand Website Contact Page', howTo: 'Go to [brand].in/contact or [brand].com/about. Look for "partnerships", "collab", "marketing", or "press" email addresses. These are almost always monitored.', effort: 'Low', success: 'Medium' },
  { method: 'Creator Community Warm Intros', howTo: 'Ask in Indian creator communities (Instagram creator groups, Telegram groups, Discord) if anyone has a contact at brands you want to pitch. A warm intro increases reply rates 3–5x.', effort: 'Medium', success: 'Very High' },
  { method: 'Influencer Marketing Platforms', howTo: 'Register on Winkl, Plixxo, One Impression, WhizCo, or Qoruz. These platforms send your profile to brands actively looking for creators in your niche.', effort: 'Medium', success: 'High' },
]

const mistakes = [
  { m: 'Sending the same template to 50 brands without personalisation', f: 'Generic pitches get 5–10% reply rates. Personalised pitches — where you mention a specific product, a recent campaign, or something specific about the brand — get 30–40% reply rates. Spend 5 minutes researching each brand before sending. One personalised detail ("I loved your Holi campaign last month — the colour palette was stunning") makes the entire email feel human.' },
  { m: 'Leading your pitch with your follower count', f: 'Indian brand managers in 2026 care more about engagement rate, audience demographics, and niche relevance than follower count. Lead with your niche and audience description: "I create personal finance content for Indian women in their 20s" is more compelling than "I have 18,000 followers". The follower count goes in your Identity Kit link — not the first sentence.' },
  { m: 'Not having a media kit or creator profile ready when brands ask', f: 'When a brand replies "Can you share your media kit?", you have 2–3 hours to respond before they move to the next creator. Build your complete media kit at identitykit.in before you send your first pitch so you can respond in seconds with a professional link.' },
  { m: 'Sending pitch emails on Monday or Friday', f: 'Monday emails get buried in the weekly backlog. Friday emails get pushed to "deal with next week" and forgotten. Tuesday–Thursday between 9:30 AM–11:30 AM IST is when Indian marketing professionals are most likely to engage with non-urgent emails. This single change can increase your open rate by 20–30%.' },
  { m: 'Pitching brands that are completely misaligned with your niche', f: 'A fitness creator pitching a B2B software company wastes both parties\' time. Brands do not have the bandwidth to explain why you\'re not a fit — they simply don\'t reply. Filter ruthlessly: only pitch brands whose product your audience would genuinely buy. 20 targeted pitches to the right brands convert better than 200 spray-and-pray pitches.' },
  { m: 'Accepting verbal agreements without written confirmation', f: 'In India, many brand collaborations start and end on WhatsApp with no written agreement. This leads to unpaid invoices, scope creep, and content being used in paid ads without additional payment. After every verbal agreement, send a written summary: "Just to confirm — 1 Reel + 3 Stories for ₹[amount], delivered by [date], with 7-day usage rights. Does that match your understanding?" A paper trail protects both parties.' },
]

export default function PitchBrandsIndiaInfluencerPage() {
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

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(7,7,13,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
          <Link href="/" style={{ fontWeight: 800, fontSize: 18, color: '#FF6B2B', letterSpacing: '-0.5px' }}>Identity Kit</Link>
          <div className="nav-links" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B', fontWeight: 600 }}>Blog</Link>
            <Link href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Tools</Link>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Build Free Media Kit →</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto' }}>
        <div className="hero-pad" style={{ padding: '64px 24px 40px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['Brand Deals', 'Pitch Strategy', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            How to Pitch Brands as an Influencer in India 2026<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>(Templates + Scripts That Get Replies)</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Generic pitches get 5–10% reply rates from Indian brands. Personalised, well-structured pitches get 30–40%. The difference is not your follower count — it is your pitch strategy. Here are the exact templates, scripts, and tactics that work in India in 2026.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — How to Pitch Brands as an Influencer in India</div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6, marginBottom: 16 }}>7-step brand pitch process for Indian creators in 2026:</p>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Build your creator profile at identitykit.in first — every pitch must link to a professional media kit or it will be ignored',
                'Research the brand for 5 minutes: their recent campaigns, their audience, their specific products — this detail goes into your pitch',
                'Find the right contact: LinkedIn for large brands, Instagram DM for small D2C brands, WhatsApp for Indian startups',
                'Send a pitch under 120 words: your niche, your audience demographics, why you\'re a fit, one content idea, your Identity Kit link',
                'Use the right channel: email for mid/large brands (Tue–Thu, 9:30–11:30 AM IST), DM for small brands, LinkedIn for B2B/fintech/EdTech',
                'Follow up once, 7–10 days later, in under 60 words — offer flexibility on scope or timing',
                'Never accept verbal agreements — confirm deliverables, rates, and usage rights in writing before creating any content',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Brand Pitching India 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Generic influencer pitch emails receive 5–10% response rates; personalised pitches that reference specific products or campaigns receive 30–40% response rates.',
                '78% of Indian creators with 1,000–10,000 followers who actively pitch brands receive their first paid collaboration within 3 months — compared to 14 months for creators who wait for inbound enquiries.',
                'Indian D2C brands spend ₹1.5–₹10 lakh per month on influencer marketing in 2026, with 8–40 creator activations per campaign cycle, making consistent creator pitching viable.',
                'WhatsApp is the primary business communication channel for small Indian brands and startups — a WhatsApp pitch to a founder often gets a response 3–5x faster than email.',
                'LinkedIn brand pitches from creators in finance, tech, and EdTech niches command 2–3x higher deal rates than equivalent Instagram creators because of professional audience quality.',
                'Most Indian creators undercharge by 30–50% and accept the first offer from brands — negotiating with a prepared rate card increases deal value by an average of 25%.',
                'Usage rights — allowing brands to use your content in their paid ads — are charged separately at 30–50% above base rate and are routinely paid by professional Indian brands.',
                'Follow-up emails sent 7–10 days after the initial pitch recover 20–30% of deals that would otherwise be lost to a full inbox — one follow-up more than doubles your overall deal rate.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Before you pitch — media kit CTA */}
          <div style={{ background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 14, padding: '22px 26px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>⚡ Step 0 before any pitch: build your media kit</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>Every pitch in this guide includes your Identity Kit link. Without a media kit, brands have no way to evaluate you — and most will not reply. Build yours free in 10 minutes at identitykit.in before sending a single pitch.</div>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '12px 20px', borderRadius: 10, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build Free Media Kit →
            </Link>
          </div>

          {/* Pitch Channels */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>5 Ways to Pitch Brands as an Indian Influencer — Ranked by Reply Rate</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 28 }}>The channel you use matters as much as the message. Each pitch channel reaches a different type of Indian brand. Use the right one and your reply rate doubles.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {pitchChannels.map((ch, i) => (
                <div key={i} className="card">
                  <div style={{ background: `linear-gradient(135deg, ${ch.color}15, ${ch.color}05)`, borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{ background: `${ch.color}20`, border: `1px solid ${ch.color}35`, borderRadius: 10, width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{ch.icon}</div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 17, marginBottom: 4 }}>{ch.channel}</div>
                        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Best for: {ch.bestFor}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, marginBottom: 2 }}>Reply rate</div>
                      <div style={{ fontWeight: 800, color: '#4CAF50', fontSize: 18 }}>{ch.replyRate}</div>
                    </div>
                  </div>

                  {/* Reply bar */}
                  <div style={{ padding: '12px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', minWidth: 80 }}>Effectiveness</span>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 5 }}>
                      <div style={{ width: `${ch.replyScore}%`, height: '100%', borderRadius: 3, background: `linear-gradient(90deg, ${ch.color}, ${ch.color}88)` }} />
                    </div>
                    <span style={{ fontSize: 11, color: ch.color, fontWeight: 700, minWidth: 24 }}>{ch.replyScore}</span>
                  </div>

                  <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ padding: '14px 20px', background: '#07070D' }}>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>How to find contact</div>
                      <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{ch.howToFind}</div>
                    </div>
                    <div style={{ padding: '14px 20px', background: '#07070D' }}>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>Best timing</div>
                      <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{ch.timing}</div>
                    </div>
                  </div>

                  <div style={{ padding: '14px 24px' }}>
                    <div style={{ background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.18)', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
                      <span style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>PRO TIP</span>
                      <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{ch.proTip}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4 Email/DM Templates */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>4 Brand Pitch Templates for Indian Influencers — Copy & Customise</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 28 }}>Each template is designed for a specific brand size and channel. Personalise the bracketed sections — do not send any template without customisation or it will get ignored.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {emailTemplates.map((tmpl, i) => (
                <div key={i} className="card">
                  <div style={{ background: `linear-gradient(135deg, ${tmpl.color}15, ${tmpl.color}05)`, borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{ fontSize: 24 }}>{tmpl.icon}</span>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 2 }}>{tmpl.type}</div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>When to use: {tmpl.context}</div>
                    </div>
                  </div>

                  {tmpl.subject !== '(No subject — DM format)' && (
                    <div style={{ padding: '12px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.01)' }}>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginRight: 10 }}>Subject line:</span>
                      <span style={{ color: '#E8E8F0', fontSize: 14, fontWeight: 600 }}>{tmpl.subject}</span>
                    </div>
                  )}

                  <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <pre style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '16px 18px', color: 'rgba(255,255,255,0.7)', fontSize: 13, lineHeight: 1.8, overflowX: 'auto', whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
                      {tmpl.body}
                    </pre>
                  </div>

                  <div style={{ padding: '14px 24px' }}>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>Key rules for this template</div>
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

          {/* Brand Pitch Email Generator CTA */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 14, padding: '22px 26px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>⚡ Skip the template — generate your personalised pitch in 30 seconds</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>Our free AI Brand Pitch Email Generator writes your personalised pitch email + 2 follow-ups based on your niche, platform, and the specific brand you&apos;re targeting. India-specific, under 120 words, ready to send.</div>
            </div>
            <Link href="/tools/brand-pitch-email-generator" style={{ background: '#FF6B2B', color: '#fff', padding: '12px 22px', borderRadius: 10, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Generate My Pitch Email Free →
            </Link>
          </div>

          {/* How to find contacts */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>How to Find Indian Brand Marketing Contacts in 2026</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>You can have the best pitch email in the world — but if it goes to the wrong person, it will not get a reply. Here are the 6 methods to find the right contact at any Indian brand.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {findBrandContacts.map((row, i) => (
                <div key={i} className="card" style={{ padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 15, marginBottom: 6 }}>{row.method}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>{row.howTo}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexShrink: 0, flexDirection: 'column', alignItems: 'flex-end' }}>
                    <span style={{ background: row.effort === 'Low' ? 'rgba(76,175,80,0.1)' : row.effort === 'Medium' ? 'rgba(255,152,0,0.1)' : 'rgba(255,82,82,0.1)', color: row.effort === 'Low' ? '#4CAF50' : row.effort === 'Medium' ? '#FF9800' : '#FF5252', border: `1px solid ${row.effort === 'Low' ? 'rgba(76,175,80,0.2)' : row.effort === 'Medium' ? 'rgba(255,152,0,0.2)' : 'rgba(255,82,82,0.2)'}`, padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700 }}>Effort: {row.effort}</span>
                    <span style={{ background: row.success === 'Very High' ? 'rgba(76,175,80,0.15)' : row.success === 'High' ? 'rgba(108,99,255,0.1)' : 'rgba(255,107,43,0.1)', color: row.success === 'Very High' ? '#4CAF50' : row.success === 'High' ? '#6C63FF' : '#FF9800', border: `1px solid ${row.success === 'Very High' ? 'rgba(76,175,80,0.25)' : row.success === 'High' ? 'rgba(108,99,255,0.2)' : 'rgba(255,107,43,0.2)'}`, padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700 }}>Success: {row.success}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Negotiation */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>How to Negotiate Brand Deals as an Indian Creator — 5 Scenarios</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Most Indian creators accept the first offer from a brand. This is the most expensive mistake in content creation — brands always have 20–30% more budget than their opening offer. Here is exactly what to say in each negotiation scenario.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {negotiationTips.map((tip, i) => (
                <div key={i} className="card" style={{ padding: '20px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <div style={{ background: `${tip.color}18`, border: `1px solid ${tip.color}30`, borderRadius: 8, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{tip.icon}</div>
                    <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 15 }}>Situation: {tip.situation}</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '14px 18px' }}>
                    <div style={{ fontSize: 11, color: tip.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>What to say</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.7 }}>{tip.response}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Inline rate calculator CTA */}
          <div style={{ background: 'rgba(255,107,43,0.05)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 14, padding: '20px 24px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Not sure what rate to quote in your pitch?</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Use our free Influencer Rate Calculator — enter your platform, niche, and follower count to get your exact market rate.</div>
            </div>
            <Link href="/tools/influencer-rate-calculator" style={{ background: 'rgba(255,107,43,0.15)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.3)', padding: '10px 18px', borderRadius: 10, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Calculate My Rate →
            </Link>
          </div>

          {/* Campaign Report Generator CTA */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 14, padding: '22px 26px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>📊 After every deal: send a campaign report and get rebooked 5x more often</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>Most Indian creators deliver content and disappear. A professional post-campaign report sent 7 days after going live shows ROI, builds trust, and seeds the next deal. Generate yours free in 2 minutes.</div>
            </div>
            <Link href="/tools/campaign-report-generator" style={{ background: 'rgba(76,175,80,0.15)', color: '#4CAF50', border: '1px solid rgba(76,175,80,0.3)', padding: '12px 20px', borderRadius: 10, fontWeight: 700, fontSize: 14, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Generate Campaign Report Free →
            </Link>
          </div>

          {/* 6 Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>6 Pitching Mistakes That Kill Indian Creator Brand Deals</h2>
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
                { q: 'How many followers do I need to pitch brands in India?', a: 'You can pitch brands from 1,000 followers. Small Indian D2C brands actively look for nano creators (1,000–10,000 followers) for authentic product seeding campaigns. At 1,000 followers with strong engagement in a specific niche, your first approach should be to small brands with 5,000–50,000 Instagram followers — not large FMCG companies. The key is niche alignment, not follower count. A 2,000-follower skincare creator pitching a new Indian skincare startup will often succeed.' },
                { q: 'Should I pitch brands via email or Instagram DM in India?', a: 'It depends on the brand size. Small Indian D2C brands (under 50,000 followers) respond better to Instagram DMs because their founders run the account. Mid and large brands (100,000+ followers) have dedicated marketing teams and are best reached via email to a named professional. B2B brands, EdTech companies, and fintech apps are best reached via LinkedIn. WhatsApp is effective for warm connections and small Indian startups where you already have a mutual contact.' },
                { q: 'What should I include in a brand pitch email to an Indian brand?', a: 'Keep it under 120 words and include: (1) Your niche in one specific phrase, (2) your audience demographics (age range, cities, gender split), (3) one genuine, specific compliment about the brand\'s product, (4) one concrete content idea relevant to their current campaign or upcoming season, and (5) your Identity Kit profile link. Do not attach a PDF — a link gets 3x more engagement. Do not mention rates in the first email — share them via your Identity Kit link.' },
                { q: 'How long should I wait before following up after a pitch?', a: '7–10 business days. Earlier feels pushy; later means the deal has moved on. Send one follow-up only — under 60 words, offer flexibility on scope or timing, and include your Identity Kit link again. If there is still no response after the follow-up, move on. Sending a third message to an Indian brand manager who has not replied twice damages your reputation in a small industry where marketing teams know each other.' },
                { q: 'How do I negotiate a higher rate with Indian brands?', a: 'Never accept the first offer. Standard negotiation response: "Thanks for the offer — my rate for a Reel is ₹[your rate]. I can accommodate ₹[their offer] for a Story set instead, or could make a Reel work at ₹[your rate] if we shift the timeline to [next month when your schedule opens up]." Offering alternatives (smaller deliverable or adjusted timing) instead of a flat rejection keeps the deal alive and often results in the brand meeting your original rate.' },
                { q: 'Do I need a contract for brand deals in India?', a: 'Always. Even for small gifted collaborations. A written confirmation via WhatsApp, email, or formal contract should confirm: deliverables (1 Reel + 3 Stories), rates (₹X), delivery date, usage rights (7 days organic only OR 30-day whitelisting), number of revision rounds, and payment timeline (50% upfront, 50% on delivery is standard for Indian creators). India has no specific influencer marketing contract law, but the Indian Contract Act 1872 covers written digital agreements — a WhatsApp confirmation is legally binding.' },
                { q: 'Which Indian brands are most likely to respond to creator pitches?', a: 'The highest response rates come from: Indian D2C startups (beauty, food, health, apparel) with 5,000–50,000 Instagram followers that run regular influencer campaigns; EdTech companies (Unacademy, Skill-Lync, Learnbay) that use creators for course promotion; fintech apps (Groww, Zerodha, Jupiter) that pay per demat account signup; and supplement brands (Oziva, Wellbeing Nutrition, Fast&Up) that run regular micro-influencer seeding. Avoid pitching FMCG giants (HUL, P&G, ITC) without an agency connection — they exclusively work through influencer marketing agencies and do not respond to direct creator pitches.' },
                { q: 'How do I find the email address of a brand\'s marketing manager in India?', a: 'Three methods that work: (1) LinkedIn — search "[Brand Name] influencer marketing" or "marketing manager [Brand Name] India" and send a connection request with a personalised note. (2) Hunter.io — enter the brand\'s domain and it reveals all publicly listed email addresses for free (25 searches/month on the free plan). (3) The brand\'s Instagram bio — many Indian D2C brands list a partnerships or collab email directly in their bio. For brands with under 50,000 followers, a DM to the official account is often more effective than email.' },
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
                { href: '/blog/how-to-get-brand-deals-india', title: 'How to Get Brand Deals in India — Complete 2026 Guide', tag: 'Brand Deals' },
                { href: '/blog/influencer-rate-card-india', title: 'Influencer Rate Card India 2026 — What to Charge Brands', tag: 'Rate Card' },
                { href: '/blog/brand-deal-contract-template-india', title: 'Brand Deal Contract Template India — Free Download', tag: 'Legal' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🚀</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Every pitch in this guide links to your Identity Kit
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build your free media kit, rate card, and creator CV — one professional link that does the selling for you. Brand managers open it, see everything they need, and say yes faster.
            </p>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Build My Free Media Kit →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 14 }}>
              identitykit.in · Free forever · Used by Indian creators to land brand deals
            </div>
          </div>

        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Tools</Link>
          <Link href="/tools/influencer-rate-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Rate Calculator</Link>
          <Link href="/tools/brand-pitch-email-generator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Pitch Email Generator</Link>
          <Link href="/tools/campaign-report-generator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Campaign Report</Link>
          <Link href="/tools/brand-deal-contract-template" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contract Template</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Free media kit for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
