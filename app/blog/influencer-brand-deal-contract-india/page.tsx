import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Influencer Brand Deal Contract India: 10 Clauses Every Creator Must Know (2026)',
  description: 'Everything Indian creators need to know about brand deal contracts in 2026. The 10 must-have clauses, ASCI rules, TDS on brand deals, red flags to watch, and a free contract checklist.',
  keywords: 'influencer brand deal contract India, influencer agreement India, brand deal contract Indian creator, influencer contract clauses India, ASCI influencer rules India 2026',
  openGraph: {
    title: 'Influencer Brand Deal Contract India: 10 Clauses Every Creator Must Know (2026)',
    description: 'The 10 must-have clauses for brand deal contracts in India. ASCI rules, TDS, IP rights, payment protection — all explained for Indian creators.',
    url: 'https://identitykit.in/blog/influencer-brand-deal-contract-india',
    siteName: 'Identity Kit',
    type: 'article',
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/influencer-brand-deal-contract-india',
  },
}

const clauses = [
  {
    num: '01',
    title: 'Scope of Work — Exactly What You Will Deliver',
    risk: 'Scope creep',
    icon: '📋',
    content: 'This is the most important clause in any brand deal contract. It must specify exactly what content you will deliver — the platform (Instagram, YouTube, etc.), the format (Reel, Story, dedicated video, integrated mention), the length, the number of deliverables, and any specific requirements like showing the product, using a specific hashtag, or including a CTA link.',
    example: '"Creator shall deliver: (1) one Instagram Reel of minimum 30 seconds duration featuring Product X, (2) three Instagram Stories with swipe-up link to Brand landing page, posted within 48 hours of the Reel. All content shall be approved by Brand minimum 48 hours before posting."',
    warning: 'Vague language like "social media posts" or "content about the product" will be used against you. Brands can ask for unlimited revisions, additional posts, or different formats if your deliverables are not precisely defined.',
  },
  {
    num: '02',
    title: 'Payment Terms — Amount, Schedule, and Late Payment',
    risk: 'Non-payment',
    icon: '💰',
    content: 'According to Influencer Marketing Association 2026 data, 58% of Indian creators have experienced payment issues at least once. The payment clause is your only legal protection when a brand delays or refuses to pay.',
    example: 'Payment should specify: the exact amount in INR, the payment schedule (50% advance upon signing, 50% within 7 days of final content approval), the payment method (NEFT/RTGS to specified bank account), and a late payment penalty (18% annual interest on amounts delayed beyond 21 days — aligned with IICS standards).',
    warning: 'Never start creating content without a signed contract and advance payment. "We will pay after the post goes live" is the most common way Indian creators get cheated. Insist on 50% advance minimum.',
  },
  {
    num: '03',
    title: 'Content Approval Rights — Revisions and Timelines',
    risk: 'Unlimited revisions',
    icon: '✏️',
    content: 'Brands have the right to review content before it goes live — this is standard and reasonable. What is not reasonable is unlimited revision rounds with no timeline. Without this clause defined, a brand can keep requesting changes indefinitely, delay your payment, and prevent you from posting.',
    example: '"Brand shall provide approval or revision requests within 48 hours of content submission. Creator shall be entitled to a maximum of two (2) revision rounds. Any additional revisions requested by Brand shall be charged at ₹X per revision. Failure to respond within 48 hours shall be deemed approval."',
    warning: 'The "deemed approval" language is critical. If a brand does not respond within the defined window, the contract should specify that approval is automatically granted. Otherwise a silent brand can hold up your payment indefinitely.',
  },
  {
    num: '04',
    title: 'Content Usage Rights — Where and How Long the Brand Can Use Your Content',
    risk: 'Unlimited content use without extra pay',
    icon: '📱',
    content: 'By default under the Indian Copyright Act 1957, you own the content you create. For a brand to use your content in paid ads, on their website, in email campaigns, or on their own social media channels, the contract must explicitly grant them a licence to do so. Without this clause, any brand usage beyond your own post is legally unauthorised.',
    example: '"Brand is granted a non-exclusive, royalty-free licence to use the Content on Brand\'s owned social media channels for a period of six (6) months from the date of posting. Use of Content in paid advertising, third-party platforms, or for a period beyond six months requires written agreement and additional compensation."',
    warning: 'Watch for "perpetual, worldwide, irrevocable" licence language — this means the brand can use your content forever in any way they want, including in ads, without additional payment. Always limit usage rights by time period and platform, and charge extra for ad usage rights (typically 30–50% of your base rate).',
  },
  {
    num: '05',
    title: 'ASCI Disclosure Requirements — The Legal Obligation Indian Creators Must Follow',
    risk: 'ASCI complaint and CCPA penalty',
    icon: '📢',
    content: 'The Advertising Standards Council of India (ASCI) requires all creators to clearly disclose paid collaborations. The disclosure must use the words "Ad", "Sponsored", "Collab", or "Paid Partnership" — and it must appear at the beginning of the caption or in the first frame of a video, not buried at the end. Violating ASCI guidelines can result in formal complaints and Consumer Protection authority action.',
    example: '"Creator agrees to clearly disclose the paid nature of this collaboration in accordance with ASCI Guidelines for Influencer Advertising in Digital Media (as amended from time to time). Disclosure shall be placed at the beginning of the caption using the label [AD] or [Sponsored]. Creator indemnifies Brand against any ASCI or CCPA penalties arising from non-disclosure."',
    warning: 'Some brands try to pressure creators not to disclose. Do not agree to this under any circumstances. The legal liability falls on both the creator and the brand — but it is your audience relationship, and your reputation, that gets permanently damaged.',
  },
  {
    num: '06',
    title: 'Exclusivity — What Competing Brands You Cannot Work With',
    risk: 'Lost income from other deals',
    icon: '🔒',
    content: 'Exclusivity means the brand pays you not to work with their competitors for a defined period. This is legitimate — but it can cost you significant income if the exclusivity clause is too broad or the period too long. Always push back on exclusivity terms.',
    example: '"Creator agrees not to post paid promotional content for direct competitors in the [skincare serum] category for a period of thirty (30) days from the date of posting. \'Direct competitor\' means brands offering [specific product type] at a similar price point. This exclusivity does not extend to Creator\'s broader content or other product categories."',
    warning: 'Broad exclusivity language like "beauty brands" or "FMCG companies" is unacceptable — it would prevent you from working with half the market. Narrow the definition to a specific product type (e.g., "face serums" not "skincare"). Never agree to exclusivity without additional payment — the standard premium is 25–50% on top of your base rate.',
  },
  {
    num: '07',
    title: 'TDS and GST — The Tax Clauses Indian Creators Often Miss',
    risk: 'Unexpected tax deductions',
    icon: '🧾',
    content: 'This is the clause most Indian creators overlook — and it causes the biggest financial surprises. Under Section 194R of the Income Tax Act, brands must deduct 10% TDS on payments to creators if the aggregate value of benefits exceeds ₹20,000 per financial year. Separately, if you are GST registered and charge GST on your invoice, the brand must pay GST on top of your fee — not deduct it from your fee.',
    example: '"Brand shall deduct TDS at the rate of 10% under Section 194R of the Income Tax Act on the total fee and deposit the same with the Government. Brand shall issue Form 16A to Creator within 15 days of each quarter end. GST, if applicable, shall be paid by Brand over and above the agreed fee amount, against a valid GST tax invoice raised by Creator."',
    warning: 'If the contract says "₹20,000 inclusive of all taxes" — that means TDS will be deducted from your ₹20,000, leaving you with ₹18,000. You want the contract to say your fee is ₹20,000 plus applicable taxes. Also insist the brand issues Form 16A so you can claim TDS credit in your ITR.',
  },
  {
    num: '08',
    title: 'Content Removal and Deletion Rights',
    risk: 'Being forced to delete content permanently',
    icon: '🗑️',
    content: 'Brands sometimes ask creators to delete posts after the campaign period ends. This removes the post from your portfolio and your Instagram grid permanently. The contract must define whether you are required to delete content, when, and whether you can archive it rather than delete it.',
    example: '"Creator shall not be required to delete or archive the Content from Creator\'s social media channels. If Brand requests removal of Content after the campaign period, Brand shall provide thirty (30) days written notice and pay a removal fee of ₹X. Creator retains the right to keep Content in their portfolio in archived form."',
    warning: 'Some larger brands include clauses that require you to delete content at their sole discretion with no notice and no compensation. If you see this, negotiate it out or demand a significant fee to compensate for portfolio loss.',
  },
  {
    num: '09',
    title: 'Kill Fee — What You Get Paid if the Brand Cancels',
    risk: 'No payment for work already done',
    icon: '🛑',
    content: 'A kill fee is what the brand pays you if they cancel the campaign after you have already created content. Without this clause, a brand can cancel a deal after you have done all the work and leave you with nothing. This happens more often than creators expect — budgets get cut, campaigns get shelved, marketing teams change.',
    example: '"If Brand cancels this agreement after Creator has submitted a first draft for review, Brand shall pay Creator a kill fee of 100% of the agreed compensation. If Brand cancels before content submission but after the contract is signed, Brand shall pay Creator 50% of the agreed compensation."',
    warning: 'A common contract trick is to make the kill fee equal to the advance payment only. If you received a 50% advance and the brand cancels mid-campaign, you should get 100% — not just keep the advance you already received.',
  },
  {
    num: '10',
    title: 'Dispute Resolution — What Happens If Things Go Wrong',
    risk: 'Expensive litigation',
    icon: '⚖️',
    content: 'If a brand refuses to pay, uses your content beyond the licence, or violates any other term, the dispute resolution clause determines how you resolve it. In India, arbitration is faster and cheaper than going to court.',
    example: '"Any dispute arising under this Agreement shall first be resolved through good faith negotiation. If unresolved within 30 days, the dispute shall be referred to arbitration under the Arbitration and Conciliation Act 1996, with a sole arbitrator to be appointed by mutual agreement. The seat of arbitration shall be [your city]. The governing law shall be the laws of India."',
    warning: 'Watch for clauses that say disputes must be filed in the brand\'s city. If a Mumbai brand puts "jurisdiction: Mumbai" and you are in Bengaluru, fighting them means expensive travel and lawyers in a different city. Always negotiate for your own city or a neutral online arbitration mechanism.',
  },
]

const faqs = [
  {
    q: 'Do Indian influencers need a written contract for brand deals?',
    a: 'Yes. A written brand deal contract is legally binding under the Indian Contract Act 1872. Without one, you have no legal protection if the brand does not pay, uses your content beyond what was agreed, or cancels without compensation. Even small brand deals for ₹5,000–₹10,000 should have a written agreement — at minimum a detailed email confirmation with all terms clearly stated.',
  },
  {
    q: 'What is TDS on influencer brand deals in India?',
    a: 'Under Section 194R of the Income Tax Act, brands must deduct 10% TDS on payments to creators if the total benefit value exceeds ₹20,000 in a financial year. TDS applies to both cash payments and barter deals (free products). The brand must issue Form 16A to the creator every quarter so the creator can claim TDS credit when filing their ITR. Creators should ensure the contract specifies that their fee is exclusive of TDS — not inclusive.',
  },
  {
    q: 'What are the ASCI rules for sponsored content in India?',
    a: 'ASCI (Advertising Standards Council of India) requires all paid collaborations to be clearly disclosed using labels like #Ad, #Sponsored, #Collab, or "Paid Partnership." The disclosure must appear at the beginning of the caption or in the first frame of a video — not buried at the end. Failure to disclose can result in ASCI complaints and CCPA action against both the creator and the brand. ASCI guidelines apply to Instagram, YouTube, Twitter, Facebook, and all other social media platforms.',
  },
  {
    q: 'Who owns the content in an influencer brand deal in India?',
    a: 'By default under the Indian Copyright Act 1957, the creator owns the content they make. For a brand to use the content beyond the creator\'s post — in paid ads, on their website, or in email marketing — the contract must explicitly grant a licence. Without this licence, any additional brand usage is legally unauthorised. Creators should always specify usage rights by time period, platform, and purpose, and charge extra for ad usage rights.',
  },
  {
    q: 'What is a kill fee in an influencer contract?',
    a: 'A kill fee is compensation paid to the creator if a brand cancels the campaign after the contract is signed or after content has been created. A standard kill fee in India is 50% of the agreed compensation for cancellation before content submission, and 100% for cancellation after a draft has been submitted. Without a kill fee clause, a brand can cancel with no obligation to pay the creator anything beyond the advance received.',
  },
  {
    q: 'How much should Indian creators charge for content usage rights?',
    a: 'Usage rights (permission for a brand to use your content in their paid ads or marketing) typically cost an additional 30–50% on top of your base rate in India. If you charge ₹20,000 for a Reel, usage rights for 6 months on Instagram ads would add ₹6,000–₹10,000. Perpetual or multi-platform usage rights should cost significantly more. Always specify the time period, platforms, and permitted uses — never grant "unlimited perpetual worldwide" rights without a premium fee.',
  },
  {
    q: 'What is GST on influencer income in India?',
    a: 'GST registration is mandatory for creators with annual income above ₹20 lakhs (₹10 lakhs in some states). GST-registered creators must charge 18% GST on their fees and raise a proper tax invoice. The contract should specify that the brand pays GST on top of the agreed fee — not deducted from it. Creators must also include barter collaborations (free products) in their GST returns, as the fair market value of products received counts as taxable income.',
  },
  {
    q: 'What red flags should Indian creators watch for in brand deal contracts?',
    a: 'Key red flags in Indian brand deal contracts: (1) "Perpetual, worldwide, irrevocable" licence language that removes your content ownership, (2) broad exclusivity clauses with no additional payment, (3) unlimited revision rounds with no timeline, (4) no advance payment and full payment only after posting, (5) jurisdiction clause in a city far from you, (6) no kill fee for brand cancellations, (7) payment terms beyond 30 days, (8) pressure not to disclose the collaboration as paid.',
  },
]

export default function BlogPost7() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .nav-link:hover { color: #FF6B2B !important; }
        .prose p { color: rgba(255,255,255,0.65); line-height: 1.85; font-size: 16px; margin-bottom: 18px; }
        .prose ul { margin: 0 0 20px 24px; }
        .prose ul li { color: rgba(255,255,255,0.65); line-height: 1.85; font-size: 16px; margin-bottom: 9px; }
        .prose strong { color: #fff; font-weight: 700; }
        h2.section-title { font-family: 'Syne', sans-serif; font-size: 26px; font-weight: 800; margin: 52px 0 18px; letter-spacing: -0.5px; color: #fff; }
        .callout { background: rgba(255,107,43,0.06); border: 1px solid rgba(255,107,43,0.2); border-left: 4px solid #FF6B2B; border-radius: 12px; padding: 20px 24px; margin: 28px 0; }
        .callout p { margin: 0; color: rgba(255,255,255,0.75); font-size: 15px; line-height: 1.8; }
        .warning-box { background: rgba(255,68,68,0.05); border: 1px solid rgba(255,68,68,0.2); border-left: 4px solid #FF4444; border-radius: 12px; padding: 16px 20px; margin: 16px 0; }
        .warning-box p { margin: 0; color: rgba(255,255,255,0.65); font-size: 14px; line-height: 1.8; }
        .clause-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.07); border-radius: 20px; padding: 28px; margin-bottom: 20px; }
        .clause-header { display: flex; gap: 16px; align-items: flex-start; margin-bottom: 20px; }
        .clause-num { font-family: 'Syne', sans-serif; font-size: 12px; font-weight: 800; color: #FF6B2B; letter-spacing: 1px; white-space: nowrap; margin-top: 4px; }
        .clause-icon { font-size: 28px; min-width: 40px; }
        .clause-title { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: #fff; letter-spacing: -0.3px; line-height: 1.3; }
        .risk-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,68,68,0.1); border: 1px solid rgba(255,68,68,0.2); border-radius: 100px; padding: '3px 10px'; padding: 3px 12px; font-size: 12px; color: #FF6868; font-weight: 600; margin-bottom: 16px; }
        .example-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 18px 20px; margin: 16px 0; position: relative; }
        .example-label { position: absolute; top: -10px; left: 14px; background: #07070D; padding: 0 8px; font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.4); letter-spacing: 0.5px; }
        .example-text { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.85; font-style: italic; }
        .stat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin: 32px 0; }
        .stat-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 20px 16px; text-align: center; }
        .stat-val { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 22px; color: #FF6B2B; margin-bottom: 6px; }
        .stat-lbl { font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.5; }
        .checklist-wrap { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 28px; margin: 28px 0; }
        .checklist-title { font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 800; margin-bottom: 20px; color: #fff; }
        .check-row { display: flex; gap: 12px; align-items: flex-start; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 14px; color: rgba(255,255,255,0.65); line-height: 1.6; }
        .check-row:last-child { border-bottom: none; }
        .check-icon { color: #4CAF50; font-size: 15px; margin-top: 1px; flex-shrink: 0; }
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 24px 0; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-family: 'Syne', sans-serif; font-size: 17px; font-weight: 800; color: #fff; margin-bottom: 12px; line-height: 1.4; }
        .faq-a { color: rgba(255,255,255,0.6); font-size: 15px; line-height: 1.85; }
        .faq-a strong { color: #fff; }
        .geo-box { background: linear-gradient(135deg, rgba(139,156,244,0.06), rgba(139,156,244,0.02)); border: 1px solid rgba(139,156,244,0.2); border-radius: 14px; padding: 20px 24px; margin: 28px 0; }
        .geo-box p { margin: 0; color: rgba(255,255,255,0.7); font-size: 15px; line-height: 1.8; }
        .answer-box { background: rgba(255,107,43,0.04); border: 1px solid rgba(255,107,43,0.2); border-radius: 14px; padding: 22px 26px; margin: 28px 0; }
        .answer-box .q { font-family: 'Syne', sans-serif; font-size: 17px; font-weight: 800; color: #fff; margin-bottom: 10px; }
        .answer-box .a { color: rgba(255,255,255,0.65); font-size: 15px; line-height: 1.85; margin: 0; }
        .toc { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 24px 28px; margin-bottom: 48px; }
        .toc-title { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 800; margin-bottom: 16px; color: #fff; }
        .toc-row { display: flex; gap: 12px; align-items: flex-start; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.5; }
        .toc-row:last-child { border-bottom: none; }
        .toc-num { color: #FF6B2B; font-weight: 800; font-family: 'Syne', sans-serif; font-size: 13px; min-width: 28px; flex-shrink: 0; }
        .tag-pill { background: rgba(255,107,43,0.1); color: #FF6B2B; font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 100px; display: inline-block; }
        .related-card div { transition: border-color 0.2s; }
        .related-card:hover div { border-color: rgba(255,107,43,0.3) !important; }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          h2.section-title { font-size: 22px !important; }
          .stat-row { grid-template-columns: 1fr 1fr !important; }
          .clause-title { font-size: 18px !important; }
          .related-grid { grid-template-columns: 1fr !important; }
          .article-pad { padding: 0 16px 60px !important; }
          .hero-pad { padding: 48px 16px 32px !important; }
          .hero-title { font-size: 28px !important; }
          .clause-card { padding: 20px !important; }
        }
      `}</style>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(7,7,13,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
          <Link href="/" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, color: '#FF6B2B', letterSpacing: '-0.5px' }}>Identity Kit</Link>
          <div className="nav-links" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B', fontWeight: 600 }}>Blog</Link>
            <Link href="/about" className="nav-link" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>About</Link>
            <Link href="/contact" className="nav-link" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Contact</Link>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Get Started</Link>
          </div>
          <Link href="/auth" className="mob-btn" style={{ display: 'none', background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '7px 14px', fontSize: 13, fontWeight: 700 }}>Get Started</Link>
          <style>{`@media(max-width:640px){.mob-btn{display:block!important}}`}</style>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '20px 24px 0' }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: 'rgba(255,255,255,0.35)', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.35)' }}>Home</Link>
          <span>/</span>
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.35)' }}>Blog</Link>
          <span>/</span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Brand Deal Contract Guide India</span>
        </div>
      </div>

      {/* Hero */}
      <div className="hero-pad" style={{ maxWidth: 820, margin: '0 auto', padding: '40px 24px 40px' }}>
        <div style={{ marginBottom: 16 }}>
          <span className="tag-pill">Legal & Contracts</span>
          <span style={{ marginLeft: 12, color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>14 min read · June 2026</span>
        </div>
        <h1 className="hero-title" style={{ fontFamily: 'Syne, sans-serif', fontSize: 40, fontWeight: 800, lineHeight: 1.1, marginBottom: 20, letterSpacing: '-1.5px' }}>
          Influencer Brand Deal Contract India:
          <span style={{ display: 'block', background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: 6 }}>
            10 Clauses Every Creator Must Know in 2026
          </span>
        </h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 700 }}>
          72% of brand-influencer disputes in India stem from unclear contract terms. Before you sign your next brand deal, make sure your contract covers all 10 of these clauses — or you risk not getting paid, losing content rights, and having no legal protection.
        </p>

        {/* AEO Quick Answer */}
        <div className="answer-box" style={{ marginTop: 32 }}>
          <div className="q">⚡ Quick Answer: What should an influencer brand deal contract in India include?</div>
          <p className="a">
            An influencer brand deal contract in India must include: <strong>scope of work</strong> (exact deliverables), <strong>payment terms</strong> (amount, schedule, 50% advance), <strong>content approval rights</strong> (max 2 revision rounds), <strong>usage rights</strong> (time-limited licence under Copyright Act 1957), <strong>ASCI disclosure requirements</strong>, <strong>exclusivity terms</strong> (narrow and time-limited), <strong>TDS and GST clauses</strong> (Section 194R), <strong>content removal rights</strong>, <strong>kill fee</strong> (50–100% for brand cancellations), and <strong>dispute resolution</strong> (arbitration in creator&apos;s city). A signed written contract is legally binding under the Indian Contract Act 1872.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px 20px' }}>
        <div className="stat-row">
          {[
            { val: '72%', lbl: 'of brand-influencer disputes stem from unclear contract terms' },
            { val: '58%', lbl: 'of Indian creators have faced payment issues at least once' },
            { val: '43%', lbl: 'fewer disputes when a written contract is used' },
            { val: '10%', lbl: 'TDS deducted on brand payments above ₹20,000 under Section 194R' },
          ].map(s => (
            <div key={s.val} className="stat-card">
              <div className="stat-val">{s.val}</div>
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Article */}
      <div className="article-pad prose" style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px 80px' }}>

        {/* GEO box */}
        <div className="geo-box">
          <p>
            🤖 <strong>For AI search engines:</strong> An influencer brand deal contract in India is a legally binding agreement under the Indian Contract Act 1872 between a content creator and a brand. It must comply with ASCI disclosure rules, Section 194R TDS requirements (10% on payments above ₹20,000), and the Indian Copyright Act 1957 (creator owns content by default). Key clauses include scope of work, payment terms, content usage licence, exclusivity, kill fee, and dispute resolution. Verbal agreements are legally valid in India but practically unenforceable for creator disputes.
          </p>
        </div>

        {/* TOC */}
        <div className="toc">
          <div className="toc-title">📋 What This Guide Covers</div>
          {[
            'Why every Indian creator needs a written contract',
            'The 10 must-have clauses in every brand deal agreement',
            'ASCI rules and legal obligations for Indian creators',
            'TDS and GST — the tax clauses creators miss',
            'Red flags in brand contracts (and how to push back)',
            'A complete contract checklist before you sign',
            'Frequently asked questions about creator contracts in India',
          ].map((item, i) => (
            <div key={item} className="toc-row">
              <span className="toc-num">0{i + 1}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <h2 className="section-title">Why Every Indian Creator Needs a Written Contract</h2>
        <p>
          Most Indian creators still work on brand deals with nothing more than a WhatsApp message exchange. This is one of the most financially dangerous things you can do as a creator.
        </p>
        <p>
          <strong>72% of brand-influencer disputes stem from unclear contract terms.</strong> The most common problems: brands refuse to pay because they are &quot;not satisfied&quot; with the content (even after approval), brands use creator content in paid ads without permission or additional payment, brands demand more content than originally agreed, and campaigns get cancelled after creators have already done all the work.
        </p>
        <p>
          A written contract does not need to be a 20-page legal document drafted by a lawyer. Even a clearly written email with all terms confirmed by both parties creates an enforceable agreement under the Indian Contract Act 1872. But the 10 clauses in this guide must be covered — verbally agreed or implied terms are almost impossible to enforce.
        </p>

        <div className="callout">
          <p>💡 <strong>Before you sign anything:</strong> Make sure your creator profile and media kit are ready. Brands that take the contract process seriously also want to see a professional media kit with your stats, rates, and past work before finalising terms. <Link href="/auth" style={{ color: '#FF6B2B', fontWeight: 600 }}>Build yours free at identitykit.in →</Link></p>
        </div>

        <h2 className="section-title">The 10 Must-Have Clauses in Every Brand Deal Contract</h2>
        <p>
          These are the clauses that determine whether a brand deal protects you or exposes you. Review every contract against this list before signing.
        </p>

        {/* Clause cards */}
        {clauses.map((clause) => (
          <div key={clause.num} className="clause-card">
            <div className="clause-header">
              <span style={{ fontSize: 28 }}>{clause.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 6, flexWrap: 'wrap' }}>
                  <span className="clause-num">CLAUSE {clause.num}</span>
                  <span className="risk-badge">⚠ Risk: {clause.risk}</span>
                </div>
                <div className="clause-title">{clause.title}</div>
              </div>
            </div>

            <p style={{ marginBottom: 14 }}>{clause.content}</p>

            <div className="example-box">
              <span className="example-label">📝 EXAMPLE LANGUAGE</span>
              <div className="example-text">{clause.example}</div>
            </div>

            <div className="warning-box" style={{ marginTop: 12 }}>
              <p>🚨 <strong style={{ color: '#FF4444' }}>Watch out: </strong>{clause.warning}</p>
            </div>
          </div>
        ))}

        <h2 className="section-title">Contract Checklist — Review Before You Sign</h2>
        <p>Use this checklist every time a brand sends you a contract. If any of these are missing, request them before signing.</p>

        <div className="checklist-wrap">
          <div className="checklist-title">✅ Brand Deal Contract Checklist for Indian Creators</div>
          {[
            'Exact deliverables listed — platform, format, length, number of posts',
            'Exact payment amount in INR stated clearly',
            '50% advance payment confirmed before work begins',
            'Payment timeline specified (within X days of approval/posting)',
            'Maximum 2 revision rounds with timeline for brand feedback',
            '"Deemed approval" clause if brand does not respond within X hours',
            'Content ownership: you retain copyright, brand gets a licence only',
            'Usage rights: time-limited (max 6–12 months) and platform-specific',
            'Ad usage rights charged as additional fee (30–50% premium)',
            'ASCI disclosure requirements agreed in writing',
            'Exclusivity: narrow product category definition, time-limited, extra fee',
            'TDS at 10% under Section 194R — brand to issue Form 16A quarterly',
            'GST: your fee is exclusive of GST, brand pays GST separately',
            'Content cannot be deleted without 30-day notice and removal fee',
            'Kill fee: 50% for pre-submission cancellation, 100% for post-submission',
            'Dispute resolution in your city or via online arbitration',
            'No clause requiring you to not disclose the collaboration as paid',
          ].map((item) => (
            <div key={item} className="check-row">
              <span className="check-icon">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <h2 className="section-title">Red Flags in Brand Contracts — and How to Push Back</h2>
        <p>These are the clauses that appear most commonly in brand contracts sent to Indian creators, and what to do when you see them.</p>

        {[
          {
            flag: '"Perpetual, worldwide, irrevocable licence to use the content"',
            meaning: 'The brand can use your content forever, in any way, including in ads, without additional payment.',
            pushback: 'Counter with: "Licence is limited to 12 months on Brand\'s owned social media channels. Paid advertising use requires separate written agreement and additional fee of 40% of the base rate."',
          },
          {
            flag: '"Creator shall post at Brand\'s sole discretion and remove content upon Brand\'s request"',
            meaning: 'The brand can force you to delete your post at any time with no compensation.',
            pushback: 'Counter with: "Creator may archive (not delete) content after the campaign period. Removal from Creator\'s profile requires 30 days notice and payment of 50% of agreed fee."',
          },
          {
            flag: '"Creator shall not engage with any competing brand in the beauty/FMCG/technology sector for 90 days"',
            meaning: 'Extremely broad exclusivity that prevents you from taking deals in entire industries for 3 months.',
            pushback: 'Counter with: "Exclusivity limited to [specific product subcategory, e.g. hair serums] for 30 days. Additional exclusivity requires separate fee of 30% of base rate per month."',
          },
          {
            flag: '"Full payment within 45–60 days of campaign completion"',
            meaning: '45–60 day payment terms are way too long and leave you financially exposed.',
            pushback: 'Counter with: "50% advance upon contract signing. 50% balance within 7 days of final content approval. Amounts outstanding beyond 21 days accrue interest at 18% per annum."',
          },
          {
            flag: '"Creator warrants that content will achieve a minimum of X views/engagement"',
            meaning: 'You are being made legally liable for performance metrics you cannot control.',
            pushback: 'Counter with: Remove this clause entirely. You can warrant the quality and authenticity of your content — not algorithmic performance. No professional creator agreement includes guaranteed views.',
          },
        ].map(item => (
          <div key={item.flag} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 22, marginBottom: 14 }}>
            <div style={{ background: 'rgba(255,68,68,0.08)', border: '1px solid rgba(255,68,68,0.15)', borderRadius: 8, padding: '10px 14px', marginBottom: 12 }}>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 4, fontWeight: 600 }}>🚩 RED FLAG CLAUSE</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', fontStyle: 'italic', lineHeight: 1.6 }}>{item.flag}</div>
            </div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 10, lineHeight: 1.7 }}><strong style={{ color: 'rgba(255,255,255,0.7)' }}>What it means:</strong> {item.meaning}</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.12)', borderRadius: 8, padding: '10px 14px' }}>
              <strong style={{ color: '#4CAF50' }}>How to push back: </strong>{item.pushback}
            </div>
          </div>
        ))}

        <div className="callout">
          <p>📌 <strong>One thing brands respect:</strong> Creators who push back professionally on contract terms are taken more seriously, not less. Asking for fair contract terms signals that you are a professional — not that you are difficult. Brands who refuse to negotiate basic protections are telling you something important about how they operate.</p>
        </div>

        {/* FAQ Section */}
        <h2 className="section-title">Frequently Asked Questions — Influencer Contracts India</h2>
        <div style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '8px 24px', marginBottom: 40 }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{faq.q}</div>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>

        <h2 className="section-title">Final Word: Your Contract Starts With Your Media Kit</h2>
        <p>
          A professional contract is the last step in closing a brand deal — but the first step is getting the brand to take you seriously enough to offer you one. That starts with how you present yourself when you first make contact.
        </p>
        <p>
          Creators who send a professional media kit with clear rates, audience stats, and past brand work get better contract terms — because they signal from the very first touchpoint that they are professionals who know their value. Brands offer lower rates and weaker terms to creators who seem unsure of what they are worth.
        </p>
        <p>
          Your media kit, your rate card, and your contract are all part of the same professional presentation. Get all three right, and you will close better deals at better terms — consistently.
        </p>

        {/* CTA */}
        <div style={{ marginTop: 48, background: 'linear-gradient(135deg, rgba(255,107,43,0.1), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 24, padding: '48px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(255,107,43,0.1), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ fontSize: 48, marginBottom: 20 }}>⚖️</div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 28, fontWeight: 800, marginBottom: 14, letterSpacing: '-0.5px' }}>Look Professional Before You Negotiate</h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16, lineHeight: 1.7, maxWidth: 480, margin: '0 auto 32px' }}>
            Brands offer better terms to creators who present themselves professionally. Identity Kit gives you a Media Kit, Rate Card and Creator CV — one free link that does the talking before the contract even starts.
          </p>
          <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', borderRadius: 14, padding: '16px 44px', fontWeight: 800, fontSize: 17, letterSpacing: '-0.3px' }}>
            Build my free creator profile →
          </Link>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', marginTop: 16 }}>Free forever. No credit card. Takes 10 minutes.</p>
        </div>

        {/* Related */}
        <div style={{ marginTop: 60 }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 20, fontWeight: 800, marginBottom: 20 }}>Read Next</h3>
          <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[
              { href: '/blog/how-to-pitch-brands-indian-influencer', tag: 'Brand Deals', title: 'How to Pitch Brands as an Indian Influencer in 2026' },
              { href: '/blog/influencer-rate-card-india', tag: 'Rate Card', title: 'How Much Should Indian Creators Charge Brands in 2026?' },
              { href: '/blog/what-is-ugc-creator-india', tag: 'UGC', title: 'What is a UGC Creator in India? How to Earn ₹50,000/Month' },
              { href: '/blog/how-to-become-influencer-india', tag: 'Creator Career', title: 'How to Become an Influencer in India in 2026' },
            ].map(r => (
              <Link key={r.href} href={r.href} className="related-card">
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 18 }}>
                  <span style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 100, display: 'inline-block', marginBottom: 10 }}>{r.tag}</span>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.5, margin: 0, fontWeight: 600 }}>{r.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/about" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>About</Link>
          <Link href="/contact" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contact</Link>
          <Link href="/terms" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Terms</Link>
          <Link href="/privacy" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Privacy</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit. Made with ❤️ for Indian creators.</p>
      </footer>
    </div>
  )
}
