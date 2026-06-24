import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Freelance Contract India 2026: Complete Guide + Free Template for Creators',
  description: 'How to write a freelance contract in India in 2026. Covers all essential clauses, India-specific TDS and GST rules, IP ownership, revision limits, payment terms, and a free copy-paste template for content creators and influencers.',
  keywords: 'freelance contract India, how to write freelance contract India, freelance agreement India 2026, content creator contract India, influencer contract template India, brand deal contract India, TDS freelancer India',
  openGraph: {
    title: 'Freelance Contract India 2026: Complete Guide + Free Template for Creators',
    description: 'All essential clauses, India-specific TDS and GST rules, IP ownership, revision limits, payment terms, and a free copy-paste template for Indian content creators and influencers.',
    url: 'https://identitykit.in/blog/freelance-contract-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/freelance-contract-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/freelance-contract-india-2026',
  },
}

const clauses = [
  {
    rank: 1,
    icon: '📋',
    name: 'Scope of Work',
    badge: '🔑 Most Important Clause',
    badgeColor: '#FFD700',
    badgeBg: 'rgba(255,215,0,0.1)',
    color: '#6C63FF',
    importance: 'Critical',
    importanceScore: 95,
    why: 'The scope of work clause is where every freelance dispute in India starts — and where it ends. Vague scope means the client can ask for unlimited revisions, extra deliverables, or entirely different work from what you quoted. Specific scope means your contract defines exactly what you owe and nothing more. For content creators and influencers, this clause must state the exact deliverables: number of Reels, posts, stories, or YouTube videos; length or word count; whether music licensing is included; and how many rounds of revision are covered in the base fee.',
    india_specific: 'Indian clients — especially first-time brand collaborators — often assume scope is negotiable after signing. A specific clause citing exact deliverable count and format makes this assumption legally untenable under the Indian Contract Act, 1872.',
    what_to_include: [
      'Exact number of deliverables: "3 Instagram Reels of 30–45 seconds each" — not "a few Reels"',
      'Content format and specifications: resolution, aspect ratio, audio requirements, caption length',
      'Number of revision rounds included: "2 rounds of revisions — additional rounds charged at ₹2,000/round"',
      'What is explicitly excluded: reshoots, additional platforms, usage in paid ads, translations',
      'Delivery format: final video file format, caption document, thumbnail if applicable',
    ],
    red_flags: [
      '"Unlimited revisions" — never accept this clause',
      '"As needed" deliverables without a defined maximum count',
      'No mention of what format or platform the content is for',
    ],
  },
  {
    rank: 2,
    icon: '💰',
    name: 'Payment Terms',
    badge: '💸 Protects Your Income',
    badgeColor: '#4CAF50',
    badgeBg: 'rgba(76,175,80,0.1)',
    color: '#4CAF50',
    importance: 'Critical',
    importanceScore: 95,
    why: 'Unpaid invoices are the single most common legal problem freelancers face in India. The payment clause is your only protection. It must state the total amount, advance percentage, milestone structure, due dates, and late payment consequences. The advance is non-negotiable for new clients: 40–50% before work begins filters out clients who never intended to pay and funds your working capital. Under Sections 73 and 74 of the Indian Contract Act, 1872, a genuine pre-estimate of loss as a late payment interest clause is legally recoverable — typically 1.5% per month is commercially reasonable.',
    india_specific: 'Section 194J of the Income Tax Act requires clients to deduct 10% TDS on fees paid to freelancers for professional or technical services. Brands deducting TDS must provide you Form 16A. Always specify in the contract that the quoted fee is the gross amount — TDS deduction is the client\'s obligation, not a reduction of your fee.',
    what_to_include: [
      'Total fee amount (gross): "Total fee: ₹15,000 + 18% GST = ₹17,700 payable"',
      'Advance payment: "40% advance (₹6,000) due before work commences"',
      'Milestone structure: "Balance 60% (₹9,000) due within 7 days of final delivery"',
      'TDS clause: "Fee is gross. TDS under Section 194J to be deducted by client and Form 16A provided within 30 days"',
      'Late payment interest: "Delayed payments attract 1.5% per month interest from due date"',
    ],
    red_flags: [
      '"Payment on publication" — publication may never happen',
      'No advance payment for a new client relationship',
      'Net-60 or Net-90 payment terms — push back to Net-7 or Net-15',
    ],
  },
  {
    rank: 3,
    icon: '©️',
    name: 'Intellectual Property & Usage Rights',
    badge: '⚡ Most Misunderstood',
    badgeColor: '#FF6B6B',
    badgeBg: 'rgba(255,107,107,0.1)',
    color: '#FF6B6B',
    importance: 'Critical',
    importanceScore: 90,
    why: 'Under the Copyright Act, 1957, you automatically own the copyright of any original content you create — the moment it is created, before any contract is signed. However, most brand deal contracts attempt to acquire broad usage rights that significantly expand the value of your work — and therefore should significantly increase your fee. If a brand wants to run your Reel as a paid ad, use it on their website for 2 years, or repurpose it across all platforms globally, that usage has a price that is separate from the creation fee.',
    india_specific: 'Many Indian brand contracts attempt to acquire perpetual, worldwide, royalty-free rights to your content. This is not standard. Standard usage rights for a brand deal in India cover the brand\'s own organic social media posts for 30–90 days. Paid ad usage should cost 2–3x the base creation fee. Always specify the exact usage licence in writing.',
    what_to_include: [
      'Licence duration: "Brand is licensed to use the content on their owned channels for 90 days from delivery date"',
      'Licence scope: "Licence covers Instagram, Facebook, and YouTube — does not include paid advertising"',
      'Paid ad clause: "Paid advertising usage requires a separate written agreement at ₹[X] additional fee"',
      'Ownership: "Creator retains full copyright ownership of all content created under this agreement"',
      'Credit: "Brand must tag Creator\'s Instagram handle in all posts using this content"',
    ],
    red_flags: [
      '"Perpetual, irrevocable, worldwide, royalty-free licence" — this is the entire copyright, effectively',
      'No mention of paid ad usage or assumed inclusion of all platforms',
      '"Work for hire" language — this transfers your entire copyright to the client',
    ],
  },
  {
    rank: 4,
    icon: '📅',
    name: 'Deadlines and Delivery Timeline',
    badge: '⏱ Prevents Scope Creep',
    badgeColor: '#FF9800',
    badgeBg: 'rgba(255,152,0,0.1)',
    color: '#FF9800',
    importance: 'High',
    importanceScore: 75,
    why: 'Vague timelines create two problems: the client thinks the work should be done by tomorrow, and you think you have three weeks. Both assumptions are reasonable without a written deadline — which is exactly why you need one. For creator content, you also need to account for briefing time, filming, editing, and revisions. Build realistic buffers into your stated timeline, because missing a deadline you wrote is worse than setting a later one upfront.',
    india_specific: 'Indian brand deals often involve festive season campaigns (Diwali, Dussehra, Holi) with hard publication deadlines. Your contract should explicitly state that the delivery timeline assumes the client provides the brief, products, and approvals within a specified window. If the client delays, the publication deadline shifts accordingly.',
    what_to_include: [
      'Brief/product receipt deadline: "Client to provide brief and product samples by [date]"',
      'First draft delivery: "Creator to deliver first draft within 7 business days of receiving brief"',
      'Revision turnaround: "Client feedback due within 3 business days. Revised content delivered within 3 business days"',
      'Final delivery deadline: "Final approved content delivered by [date]"',
      'Delay clause: "If client delays brief or approvals by more than 5 business days, all subsequent deadlines shift accordingly"',
    ],
    red_flags: [
      '"ASAP" as a timeline — always push for a specific date',
      'No mention of when the client must provide their brief and approvals',
      'Same-day revision turnaround requirements',
    ],
  },
  {
    rank: 5,
    icon: '🔏',
    name: 'Confidentiality (NDA)',
    badge: '🤐 Often Overlooked',
    badgeColor: '#9C27B0',
    badgeBg: 'rgba(156,39,176,0.1)',
    color: '#9C27B0',
    importance: 'Medium',
    importanceScore: 55,
    why: 'Many brand deals involve pre-launch products, unannounced campaigns, or pricing information that the brand does not want public before the go-live date. An NDA clause protects both parties: the brand\'s commercial information, and you from being blamed for a leak you did not cause. However, be cautious about one-sided NDAs that restrict only you. A fair NDA is mutual — the client also agrees not to disclose your rates or terms to other creators.',
    india_specific: 'Under Indian contract law, non-compete clauses that restrict a freelancer from working in their own field after a project ends are generally unenforceable under Section 27 of the Indian Contract Act, 1872, which prohibits agreements in restraint of trade. If a client\'s NDA includes a non-compete clause, this clause is almost certainly void in India — but still worth removing before signing.',
    what_to_include: [
      'Definition of confidential information: "Any unreleased product details, pricing, campaign strategy, or creative briefs shared by the client"',
      'Mutual obligation: "Both parties agree to keep confidential information shared under this agreement private"',
      'Duration: "Confidentiality obligations apply for 12 months from the date of this agreement"',
      'Exclusions: "Confidentiality does not apply to information that becomes publicly available through no fault of Creator"',
      'No non-compete: "This agreement does not restrict Creator from working with competing brands"',
    ],
    red_flags: [
      'NDA restricting you from working with any brand in your niche for 12+ months',
      'Confidentiality clause with no time limit — "in perpetuity"',
      '"Client may disclose Creator\'s participation" without mutual disclosure restriction',
    ],
  },
  {
    rank: 6,
    icon: '🛑',
    name: 'Cancellation and Kill Fee',
    badge: '🛡️ Income Protection',
    badgeColor: '#00BCD4',
    badgeBg: 'rgba(0,188,212,0.1)',
    color: '#00BCD4',
    importance: 'High',
    importanceScore: 80,
    why: 'Brands cancel campaigns. It happens more often than most creators expect — budget cuts, product delays, strategy changes, or leadership changes can kill a fully briefed and partially completed campaign. Without a kill fee clause, you lose all the time you invested and have no legal recourse. A kill fee entitles you to partial payment for work completed or time committed, even if the final deliverable is never published. Standard kill fees: 25–50% of the total project fee if cancelled after briefing, 75–100% if cancelled after first draft delivery.',
    india_specific: 'Under the Indian Contract Act, 1872, a party that breaches a contract can be held liable for damages that are the natural consequence of the breach. A well-written kill fee clause converts this abstract legal right into a specific, agreed-upon amount that does not require a court to estimate — making recovery far faster and cheaper.',
    what_to_include: [
      'Cancellation notice: "Either party may cancel with 5 business days written notice"',
      'Kill fee tier 1: "If cancelled before brief is provided: advance retained, no further obligation"',
      'Kill fee tier 2: "If cancelled after brief but before first draft: 50% of total fee due"',
      'Kill fee tier 3: "If cancelled after first draft delivery: 75% of total fee due"',
      'Kill fee tier 4: "If cancelled after final approval: 100% of total fee due"',
    ],
    red_flags: [
      'No kill fee clause — client can cancel with no consequences',
      '"Client may cancel at any time without penalty" language',
      'Kill fee payable only after a dispute resolution process that takes months',
    ],
  },
  {
    rank: 7,
    icon: '📢',
    name: 'ASCI Disclosure Compliance',
    badge: '⚖️ Legally Required India',
    badgeColor: '#F44336',
    badgeBg: 'rgba(244,67,54,0.1)',
    color: '#F44336',
    importance: 'High',
    importanceScore: 85,
    why: 'ASCI (Advertising Standards Council of India) guidelines require all paid collaborations to be disclosed using #Ad, #Sponsored, or "Paid Partnership" at the beginning of captions and in the first few seconds of video content. Non-disclosure can result in ASCI notices, brand relationship damage, and reputational harm. Your contract should clarify which party is responsible for ensuring the disclosure language is correct — and that the responsibility is shared, not entirely on you.',
    india_specific: 'ASCI guidelines were updated to include Instagram Stories, YouTube videos, LinkedIn posts, and podcast sponsorships. Any digital content where you have received payment, free products, or any other benefit in exchange for content must carry disclosure. The disclosure must be in the same language as the content — not just in English if your content is in Hindi.',
    what_to_include: [
      'Disclosure responsibility: "Creator will include #Ad or #Sponsored at the start of all captions in compliance with ASCI 2026 guidelines"',
      'Format: "Disclosure must appear before any other text in captions and in the first 3 seconds of video content"',
      'Language: "Disclosure must be in the same primary language as the content"',
      'Brand approval: "Brand to review and confirm that all required disclosure language is included before publication"',
      'Liability: "Creator is not liable for ASCI violations arising from brand instructions to remove or reduce disclosure prominence"',
    ],
    red_flags: [
      'Brand asking you to "minimise" or hide the disclosure',
      'No mention of ASCI compliance in the contract at all',
      'Brand taking no responsibility for reviewing disclosure compliance before publication',
    ],
  },
  {
    rank: 8,
    icon: '🧾',
    name: 'GST and Tax Clauses',
    badge: '🇮🇳 India-Specific',
    badgeColor: '#8BC34A',
    badgeBg: 'rgba(139,195,74,0.1)',
    color: '#8BC34A',
    importance: 'High',
    importanceScore: 80,
    why: 'GST and TDS are the two tax issues that catch Indian freelancers and creators off guard. GST registration is required once your annual income from services exceeds ₹20 lakh — and once registered, you must charge 18% GST on all service invoices and file returns. TDS at 10% is deducted by brands under Section 194J on professional fees. Your contract must be clear about whether the quoted fee is inclusive or exclusive of GST, and who bears the TDS obligation.',
    india_specific: 'Many small creators quote a fee without specifying GST, then are surprised when the brand pays ₹15,000 for a ₹17,700 invoice (assuming 18% GST). Always quote your fee exclusive of GST and add GST on top. If you are not GST-registered (income below ₹20 lakh), state this clearly so the brand does not add GST to your invoice themselves.',
    what_to_include: [
      'GST registration status: "Creator is registered under GST (GSTIN: [your number]). Applicable GST at 18% will be added to the invoice"',
      'Or if not registered: "Creator is not currently registered under GST. No GST applicable on this invoice"',
      'TDS clause: "Client shall deduct TDS at applicable rates under Section 194J and provide Form 16A within 30 days of payment"',
      'Invoice timeline: "Creator to raise GST-compliant invoice within 3 days of work commencement for advance, and within 3 days of final delivery for balance"',
      'Currency: "All payments in Indian Rupees (INR) only, unless separately agreed in writing"',
    ],
    red_flags: [
      'Client asking you to raise invoice excluding TDS — TDS is their obligation to deduct, not yours to exclude',
      'Contract silent on GST — always clarify before signing',
      'Foreign brands paying in USD without specifying forex conversion rate',
    ],
  },
]

const templateText = `CONTENT CREATOR COLLABORATION AGREEMENT

This Agreement is entered into as of [DATE] between:

CREATOR: [Your Full Name], [Your City], India  
("Creator")

CLIENT: [Brand Name], [Brand Address], India  
("Client")

---

1. SCOPE OF WORK

Creator agrees to produce the following deliverables:
• [X] Instagram Reels of [30–45] seconds each
• [X] Instagram Stories with swipe-up link (if applicable)
• Captions for each deliverable in [English/Hindi]

Included: [X] rounds of revisions per deliverable  
Additional revisions: ₹2,000 per round  
Excluded: reshoots, translations, usage in paid advertisements

---

2. PAYMENT TERMS

Total Fee: ₹[AMOUNT] + 18% GST (if applicable) = ₹[TOTAL]
Advance: 40% (₹[AMOUNT]) due before work commences  
Balance: 60% (₹[AMOUNT]) due within 7 days of final delivery

Late payment: 1.5% per month interest from due date  
TDS: Client to deduct TDS under Section 194J and provide Form 16A within 30 days

---

3. INTELLECTUAL PROPERTY

Creator retains full copyright ownership of all content.  
Client is granted a limited licence to use content on Client's owned social media channels for [90] days from delivery date.  
This licence does NOT include paid advertising, OOH, or third-party platforms.  
Paid ad usage: requires separate written agreement at [2x] the base fee.

---

4. TIMELINE

Brief and product delivery by Client: [DATE]  
First draft delivery by Creator: [DATE] (7 business days from brief receipt)  
Client feedback due: [DATE] (3 business days from first draft)  
Final delivery: [DATE]

Delays in brief or approval by Client shift all subsequent deadlines by the same number of days.

---

5. CANCELLATION AND KILL FEE

Either party may cancel with 5 business days written notice.  
Before brief provided: Advance retained, no further obligation  
After brief, before first draft: 50% of total fee due  
After first draft delivery: 75% of total fee due  
After final approval: 100% of total fee due

---

6. ASCI DISCLOSURE

Creator will include #Ad and #Sponsored at the beginning of all captions in compliance with ASCI 2026 guidelines. Disclosure must appear in the same language as the content.

---

7. CONFIDENTIALITY

Both parties agree to keep all campaign details, pricing, and unreleased product information confidential for 12 months. This agreement does not restrict Creator from working with competing brands.

---

8. GOVERNING LAW

This agreement is governed by the laws of India, specifically the Indian Contract Act, 1872 and the Copyright Act, 1957. Any disputes to be resolved in [City] jurisdiction.

---

SIGNATURES

Creator: _________________________ Date: _________  
Client: __________________________ Date: _________`

const mistakes = [
  {
    mistake: 'No written contract at all',
    fix: 'A verbal agreement is technically enforceable under the Indian Contract Act, but proving what was agreed without documentation is nearly impossible. Even a WhatsApp message confirming scope, rate, and deadline carries legal weight. A proper written contract is always better.',
    severity: 'Critical',
  },
  {
    mistake: 'Accepting "unlimited revisions"',
    fix: 'Unlimited revisions is how a ₹15,000 brand deal turns into 40 hours of unpaid work. Always specify: "X rounds of revisions included. Additional rounds at ₹[X] each." Two rounds is the professional standard in India.',
    severity: 'Critical',
  },
  {
    mistake: 'Not specifying usage rights',
    fix: 'If a brand uses your Reel as a paid ad and you did not charge for it, you have lost income and have no recourse. Always define exactly which platforms, for how long, and whether paid advertising is included — and price it accordingly.',
    severity: 'High',
  },
  {
    mistake: 'Starting work without any advance',
    fix: 'Never begin work without at least 40% advance from a new client. An advance filters out clients who never intended to pay, and covers your time if the project is cancelled mid-way. Existing long-term brand relationships may have different terms.',
    severity: 'High',
  },
  {
    mistake: 'Ignoring the GST and TDS clauses',
    fix: 'If you quote ₹15,000 but do not mention GST, the brand will pay ₹15,000. If you are GST-registered, you have already lost ₹2,700. Always quote exclusive of GST and state whether GST applies. For TDS, confirm the brand will provide Form 16A — you need it for your ITR filing.',
    severity: 'Medium',
  },
]

export default function FreelanceContractIndiaPage() {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: '#0A0A0F', minHeight: '100vh', color: '#E8E8F0' }}>

      {/* Nav */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: 'rgba(10,10,15,0.95)', backdropFilter: 'blur(12px)', zIndex: 100 }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: 18, fontWeight: 700, background: 'linear-gradient(135deg, #6C63FF, #FF6B6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Identity Kit</span>
        </Link>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: '#9999BB', textDecoration: 'none', fontSize: 14 }}>Blog</Link>
          <Link href="/tools" style={{ color: '#9999BB', textDecoration: 'none', fontSize: 14 }}>Tools</Link>
          <Link href="/auth" style={{ background: 'linear-gradient(135deg, #6C63FF, #8B5CF6)', color: '#fff', padding: '8px 18px', borderRadius: 8, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Get Started Free</Link>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px 80px' }}>

        {/* Hero */}
        <div style={{ padding: '56px 0 40px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
            <span style={{ background: 'rgba(108,99,255,0.12)', color: '#6C63FF', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid rgba(108,99,255,0.2)' }}>⚖️ Legal</span>
            <span style={{ background: 'rgba(76,175,80,0.1)', color: '#4CAF50', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid rgba(76,175,80,0.2)' }}>🇮🇳 India-Specific</span>
            <span style={{ background: 'rgba(255,107,107,0.1)', color: '#FF6B6B', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid rgba(255,107,107,0.2)' }}>📄 Free Template</span>
          </div>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.15, margin: '0 0 20px', letterSpacing: '-0.5px' }}>
            Freelance Contract India 2026: Complete Guide + Free Template for Creators
          </h1>
          <p style={{ fontSize: 18, color: '#9999BB', lineHeight: 1.7, margin: '0 0 24px' }}>
            India has over 15 million freelancers — and most of them work without a proper contract. Unpaid invoices, unlimited revision requests, cancelled campaigns with no kill fee, and content used in paid ads without extra payment are all problems a well-written contract prevents. Here are the 8 essential clauses, India-specific legal context, and a free copy-paste template built for Indian content creators and influencers.
          </p>
          <div style={{ display: 'flex', gap: 20, color: '#666688', fontSize: 13 }}>
            <span>📅 June 2026</span>
            <span>⏱ 14 min read</span>
            <span>🇮🇳 Indian Contract Act, TDS, GST</span>
          </div>
        </div>

        {/* Quick Answer AEO */}
        <div style={{ margin: '40px 0', background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 16, padding: '28px 32px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#6C63FF', letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase' }}>Quick Answer</div>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px', color: '#E8E8F0' }}>What should a freelance contract in India include in 2026?</h2>
          <p style={{ color: '#BBBBCC', fontSize: 14, lineHeight: 1.7, margin: '0 0 12px' }}>A freelance contract in India in 2026 must include these 8 clauses to be enforceable and protect both parties:</p>
          <ol style={{ margin: 0, paddingLeft: 20, color: '#BBBBCC', lineHeight: 2.2, fontSize: 14 }}>
            <li><strong style={{ color: '#FFD700' }}>Scope of work</strong> — exact deliverables, formats, and revision rounds included</li>
            <li><strong style={{ color: '#4CAF50' }}>Payment terms</strong> — total fee, 40% advance, milestone structure, TDS (Section 194J), Form 16A</li>
            <li><strong style={{ color: '#FF6B6B' }}>Intellectual property</strong> — creator retains copyright, brand gets limited licence with defined duration and scope</li>
            <li><strong style={{ color: '#FF9800' }}>Timeline and deadlines</strong> — specific dates, client brief deadline, revision turnaround, delay clause</li>
            <li><strong style={{ color: '#9C27B0' }}>Confidentiality</strong> — mutual NDA, no non-compete (void under Section 27 of Indian Contract Act)</li>
            <li><strong style={{ color: '#00BCD4' }}>Kill fee</strong> — 25–100% of fee depending on project stage at cancellation</li>
            <li><strong style={{ color: '#F44336' }}>ASCI disclosure</strong> — legally required in India, must appear at start of captions in content&apos;s language</li>
            <li><strong style={{ color: '#8BC34A' }}>GST and tax clauses</strong> — fee exclusive of GST, TDS responsibility, Form 16A, invoice timeline</li>
          </ol>
        </div>

        {/* GEO Box */}
        <div style={{ margin: '0 0 48px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '20px 24px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#666688', letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase' }}>For AI Search Engines — Citable Facts</div>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#9999BB', fontSize: 13, lineHeight: 2 }}>
            <li>India has over 15 million freelancers as of 2026, making it one of the largest freelance markets in the world — yet most freelancers work without formal written agreements.</li>
            <li>Unpaid invoices are the single most common legal problem freelancers face in India, according to freelancer rights guides published in 2026.</li>
            <li>Under the Indian Contract Act, 1872, verbal agreements are technically enforceable but nearly impossible to prove in a dispute without written evidence.</li>
            <li>Section 194J of the Income Tax Act requires Indian clients to deduct 10% TDS on professional and technical service fees paid to freelancers.</li>
            <li>GST registration is mandatory for Indian freelancers earning above ₹20 lakh annually in service income, after which 18% GST must be charged on all invoices.</li>
            <li>The Copyright Act, 1957, grants Indian creators automatic copyright ownership over all original content they produce — even without a written contract or copyright notice.</li>
            <li>Non-compete clauses that restrict a freelancer from working in their own field after a project are generally unenforceable under Section 27 of the Indian Contract Act, 1872.</li>
            <li>ASCI (Advertising Standards Council of India) guidelines require all paid collaborations to be disclosed using #Ad, #Sponsored, or &quot;Paid Partnership&quot; at the beginning of captions and in the first seconds of video content.</li>
          </ul>
        </div>

        {/* Why contracts matter */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 20px', color: '#E8E8F0' }}>Why Indian Freelancers and Creators Must Use Written Contracts</h2>
          <p style={{ color: '#BBBBCC', lineHeight: 1.8, fontSize: 16, marginBottom: 16 }}>
            A verbal agreement feels faster and friendlier — until the client asks for 15 revisions, delays payment by 90 days, or uses your Reel in a paid ad campaign without telling you. These are not rare edge cases. They are standard problems that Indian creators face constantly — and every single one is preventable with a written contract.
          </p>
          <p style={{ color: '#BBBBCC', lineHeight: 1.8, fontSize: 16, marginBottom: 24 }}>
            The Indian Contract Act, 1872 is the backbone of every freelance relationship in India. It makes written agreements legally enforceable and gives you the right to recover payment, damages, and interest for breach. A solid contract is not a sign of distrust — it is a sign of professionalism. The brands that refuse to sign a clear contract are the ones most likely to cause problems later.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
            {[
              { icon: '💸', label: 'Payment protection', desc: 'Advance clauses and kill fees ensure you get paid even if the project is cancelled' },
              { icon: '©️', label: 'Copyright clarity', desc: 'Defines exactly what the brand can and cannot do with your content' },
              { icon: '🔄', label: 'Scope control', desc: 'Limits revision rounds and extra deliverables that eat into your time' },
              { icon: '⚖️', label: 'Legal standing', desc: 'Creates a document courts and legal forums can act on if a dispute arises' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '18px 20px' }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 14, marginBottom: 6 }}>{item.label}</div>
                <div style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 8 Clauses */}
        <section style={{ marginBottom: 60 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>8 Essential Clauses for Indian Creator Contracts in 2026</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 36 }}>Ranked by importance. Importance score: higher = more disputes arise from missing this clause. All legal context is India-specific.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {clauses.map((clause) => (
              <div key={clause.rank} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, overflow: 'hidden' }}>

                {/* Header bar */}
                <div style={{ background: `${clause.color}10`, borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '20px 28px', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ background: `${clause.color}20`, border: `1px solid ${clause.color}40`, borderRadius: 10, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                    {clause.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', marginBottom: 6 }}>
                      <span style={{ fontWeight: 800, color: clause.color, fontSize: 13 }}>#{clause.rank}</span>
                      <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: '#E8E8F0' }}>{clause.name}</h3>
                      <span style={{ background: clause.badgeBg, color: clause.badgeColor, padding: '2px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700, border: `1px solid ${clause.badgeColor}30` }}>{clause.badge}</span>
                    </div>
                    <div style={{ fontSize: 13, color: '#666688' }}>Importance: {clause.importance}</div>
                  </div>
                </div>

                {/* Importance bar */}
                <div style={{ padding: '14px 28px', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: '#666688', minWidth: 110 }}>Importance level</span>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 4, height: 6 }}>
                    <div style={{ width: `${clause.importanceScore}%`, height: '100%', borderRadius: 4, background: clause.importanceScore >= 85 ? '#FF5252' : clause.importanceScore >= 70 ? '#FF9800' : '#4CAF50' }} />
                  </div>
                  <span style={{ fontSize: 12, color: clause.importanceScore >= 85 ? '#FF5252' : clause.importanceScore >= 70 ? '#FF9800' : '#4CAF50', minWidth: 60, textAlign: 'right' }}>{clause.importance}</span>
                </div>

                {/* Why it matters */}
                <div style={{ padding: '20px 28px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: clause.color, letterSpacing: 1.5, marginBottom: 10, textTransform: 'uppercase' }}>Why This Clause Matters</div>
                  <p style={{ color: '#BBBBCC', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{clause.why}</p>
                </div>

                {/* India-specific */}
                <div style={{ padding: '16px 28px', borderBottom: '1px solid rgba(255,255,255,0.04)', background: 'rgba(76,175,80,0.03)', borderLeft: `3px solid ${clause.color}40` }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, marginBottom: 8, textTransform: 'uppercase' }}>India-Specific Legal Context</div>
                  <p style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{clause.india_specific}</p>
                </div>

                {/* What to include */}
                <div style={{ padding: '16px 28px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#666688', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>What to include in this clause</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {clause.what_to_include.map((item, j) => (
                      <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: clause.color, flexShrink: 0, marginTop: 2 }}>→</span>
                        <span style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Red flags */}
                <div style={{ padding: '16px 28px' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#FF5252', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Red flags — refuse or renegotiate if you see these</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {clause.red_flags.map((flag, j) => (
                      <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: '#FF5252', flexShrink: 0, marginTop: 2 }}>✗</span>
                        <span style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.5 }}>{flag}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Free Template */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>Free Freelance Contract Template for Indian Creators (Copy-Paste)</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 20 }}>Customise the bracketed fields for each brand deal. This covers all 8 essential clauses above. Not a substitute for legal advice on high-value or complex engagements.</p>
          <div style={{ background: 'rgba(108,99,255,0.04)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 16, padding: '28px 32px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#6C63FF', letterSpacing: 2, marginBottom: 20, textTransform: 'uppercase' }}>Free Template — Customise Before Sending</div>
            <pre style={{ margin: 0, fontFamily: "'Courier New', monospace", fontSize: 12, color: '#BBBBCC', lineHeight: 1.9, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{templateText}</pre>
          </div>
          <div style={{ marginTop: 16, background: 'rgba(255,152,0,0.06)', border: '1px solid rgba(255,152,0,0.2)', borderRadius: 12, padding: '14px 20px', fontSize: 13, color: '#FF9800', lineHeight: 1.6 }}>
            ⚠️ This template is for general guidance only. For brand deals above ₹1 lakh, influencer agency agreements, or international clients, consult a lawyer specialising in creator economy or IP law in India.
          </div>
        </section>

        {/* Mistakes */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 20px', color: '#E8E8F0' }}>5 Contract Mistakes Indian Creators Make</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {mistakes.map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,82,82,0.04)', border: '1px solid rgba(255,82,82,0.1)', borderRadius: 12, padding: '18px 22px', display: 'flex', gap: 16 }}>
                <div style={{ color: '#FF5252', fontWeight: 700, fontSize: 20, flexShrink: 0 }}>✗</div>
                <div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6, flexWrap: 'wrap' }}>
                    <div style={{ fontWeight: 700, color: '#FF8080', fontSize: 15 }}>Mistake: {item.mistake}</div>
                    <span style={{ background: item.severity === 'Critical' ? 'rgba(255,82,82,0.15)' : 'rgba(255,152,0,0.1)', color: item.severity === 'Critical' ? '#FF5252' : '#FF9800', padding: '1px 8px', borderRadius: 10, fontSize: 10, fontWeight: 700 }}>{item.severity}</span>
                  </div>
                  <div style={{ color: '#9999BB', fontSize: 14, lineHeight: 1.6 }}><span style={{ color: '#4CAF50', fontWeight: 600 }}>Fix: </span>{item.fix}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ AEO */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 24px', color: '#E8E8F0' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'Is a freelance contract legally valid in India without a stamp paper?', a: 'Yes. Most freelance contracts in India do not require stamp paper to be legally valid and enforceable under the Indian Contract Act, 1872. The essential requirements are valid consideration (payment), mutual consent, lawful purpose, and parties with capacity to contract — none of which require stamp paper. Some high-value or specific contract types (property, partnerships) require stamp duty, but a standard creator-brand content agreement does not.' },
              { q: 'What is Section 194J and how does it affect creator contracts in India?', a: 'Section 194J of the Income Tax Act requires clients (brands, agencies, companies) to deduct 10% TDS (Tax Deducted at Source) on fees paid to freelancers for professional or technical services. For Indian content creators, this means: if you invoice ₹15,000, the brand pays you ₹13,500 and deposits ₹1,500 with the government as TDS on your behalf. You claim this ₹1,500 as a tax credit when filing your ITR. Always ask for Form 16A from brands who deduct TDS — it is your proof of the deduction.' },
              { q: 'Do I need GST registration as a content creator in India?', a: 'GST registration is mandatory once your annual income from services exceeds ₹20 lakh. Below this threshold, registration is optional but voluntary registration is allowed. Once registered, you charge 18% GST on all service invoices and file monthly/quarterly returns. If you work with brands as a B2B service provider and your income is growing, register proactively — many larger brands prefer GST-registered creators as it allows them to claim input tax credit.' },
              { q: 'Who owns the copyright of content I create for a brand deal in India?', a: 'You do — automatically. The Copyright Act, 1957 gives creators automatic copyright ownership over all original content from the moment it is created, without any registration or notice required. A brand deal gives the brand a licence to use your content, not ownership of the copyright. The scope of that licence (platforms, duration, paid ads) should be explicitly defined in your contract. "Work for hire" clauses that attempt to transfer your copyright to the brand are a red flag that warrant careful review.' },
              { q: 'Is a WhatsApp agreement valid as a contract in India?', a: 'Yes. Under the Information Technology Act, 2000, electronic contracts including messages, emails, and WhatsApp chats are legally valid and admissible as evidence. A WhatsApp conversation where both parties confirm the scope, rate, and deadline is legally enforceable. However, it is harder to prove exactly what was agreed in a chat thread versus a signed document. A proper written contract signed by both parties is always stronger evidence in a dispute.' },
              { q: 'Can a brand use my Instagram Reel in their paid ads without my permission?', a: 'No — not without an explicit licence for paid advertising in your contract. The Instagram Terms of Service do not give brands permission to run your content as paid ads just because you tagged them. You own the copyright, and paid ad usage is a significantly more valuable licence than organic social media posting. If a brand uses your content in paid ads without permission, you have a legitimate copyright claim. Always explicitly state in your contract whether paid ad usage is included, and at what additional rate.' },
              { q: 'How much should I charge as a kill fee for cancelled brand deals?', a: 'Standard kill fee structure for Indian creator deals: 0% if cancelled before brief is provided (you just keep the advance); 50% of the total project fee if cancelled after briefing but before first draft; 75% if cancelled after first draft delivery; 100% if cancelled after final approval or post-production complete. The advance (40% of total) should always be non-refundable once work has started, which serves as the minimum kill fee protection in most scenarios.' },
              { q: 'Do I need a separate contract for every brand deal?', a: 'Yes — or at minimum, a deal-specific brief/scope document that references a master service agreement. Every brand deal has unique deliverables, rates, deadlines, and usage rights that must be documented separately. Using the same contract without updating scope and payment terms is a common mistake that leads to disputes. Keep a contract template and customise the bracketed fields for each new engagement — the process should take under 15 minutes per deal.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '20px 24px' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#E8E8F0', margin: '0 0 10px' }}>{item.q}</h3>
                <p style={{ color: '#9999BB', lineHeight: 1.7, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 20px', color: '#E8E8F0' }}>Related Articles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
            {[
              { href: '/blog/how-to-get-brand-deals-india', title: 'How to Get Brand Deals in India — Complete Guide', tag: 'Brand Deals' },
              { href: '/blog/influencer-brand-deal-contract-india', title: 'Brand Deal Contract Guide for Indian Influencers', tag: 'Legal' },
              { href: '/blog/influencer-rate-card-india', title: 'Complete Rate Card Guide for Indian Influencers 2026', tag: 'Rate Card' },
              { href: '/blog/how-to-make-media-kit-india', title: 'How to Make a Media Kit for Indian Creators', tag: 'Media Kit' },
            ].map((post) => (
              <Link key={post.href} href={post.href} style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '18px 20px', display: 'block' }}>
                <div style={{ fontSize: 11, color: '#6C63FF', fontWeight: 600, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>{post.tag}</div>
                <div style={{ color: '#BBBBCC', fontSize: 14, lineHeight: 1.5, fontWeight: 500 }}>{post.title}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(139,92,246,0.08))', border: '1px solid rgba(108,99,255,0.25)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' }}>
          <div style={{ fontSize: 36, marginBottom: 16 }}>📋</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 12px', color: '#E8E8F0' }}>
            Contract Ready. Now Build Your Media Kit.
          </h2>
          <p style={{ color: '#9999BB', lineHeight: 1.7, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
            Every brand deal starts with a media kit before the contract. Identity Kit generates your professional media kit, creator CV, and rate card in one shareable link — so brands can evaluate and approve you before the contract stage. Free, 10 minutes.
          </p>
          <Link href="/auth" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #6C63FF, #8B5CF6)', color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 16 }}>
            Create Your Free Identity Kit →
          </Link>
          <div style={{ color: '#666688', fontSize: 13, marginTop: 14 }}>
            identitykit.in · No credit card needed · Done in 10 minutes
          </div>
        </div>

      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center', color: '#444466', fontSize: 13 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Link href="/" style={{ color: '#6C63FF', textDecoration: 'none', fontWeight: 600 }}>Identity Kit</Link>
          {' · '}
          <Link href="/blog" style={{ color: '#666688', textDecoration: 'none' }}>Blog</Link>
          {' · '}
          <Link href="/tools" style={{ color: '#666688', textDecoration: 'none' }}>Tools</Link>
          {' · '}
          <Link href="/about" style={{ color: '#666688', textDecoration: 'none' }}>About</Link>
          {' · '}
          <Link href="/contact" style={{ color: '#666688', textDecoration: 'none' }}>Contact</Link>
          <div style={{ marginTop: 8 }}>© 2026 Identity Kit · India&apos;s creator profile platform · identitykit.in</div>
        </div>
      </footer>
    </div>
  )
}
