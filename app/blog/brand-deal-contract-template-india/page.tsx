import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brand Deal Contract Template India 2026: Free Generator + 8-Clause Guide for Creators',
  description: 'Free brand deal contract template for Indian influencers and creators in 2026. All 8 essential clauses explained — scope, payment, IP rights, ASCI disclosure, kill fee, GST/TDS. Free tool generates your customised contract in 60 seconds.',
  keywords: 'brand deal contract template India free, influencer contract template India 2026, content creator agreement template India, brand collaboration contract India free download, influencer brand deal contract India, free creator contract template India 2026',
  openGraph: {
    title: 'Brand Deal Contract Template India 2026: Free Generator + 8-Clause Guide for Creators',
    description: 'Free tool generates customised brand deal contracts for Indian creators in 60 seconds. All 8 clauses explained — scope, payment, IP rights, ASCI, kill fee, GST, TDS.',
    url: 'https://identitykit.in/blog/brand-deal-contract-template-india',
    siteName: 'Identity Kit',
    type: 'article',
  },
  alternates: { canonical: 'https://identitykit.in/blog/brand-deal-contract-template-india' },
}

const clauses = [
  {
    num: '01', name: 'Scope of Work', color: '#6C63FF', critical: true,
    what: 'Exact number of deliverables, content format, platform, duration (for videos), caption language, number of revision rounds included, and what is explicitly excluded (reshoots, paid ads, translations, additional platforms).',
    example: '"3 x Instagram Reels of 30–45 seconds each + 2 rounds of revisions. Additional rounds at ₹2,000 per round. Excludes: reshoots, paid advertising usage, translation into other languages."',
    why: 'Vague scope is the #1 cause of brand deal disputes in India. Without a specific deliverable count and exclusion list, brands assume everything is included — and "unlimited revisions" can turn a ₹20,000 deal into 60 hours of unpaid work.',
    red_flag: '"Additional content as required" or "supporting materials as needed" — these have no ceiling. Always define the exact count.',
  },
  {
    num: '02', name: 'Payment Terms', color: '#4CAF50', critical: true,
    what: 'Total fee (gross, before TDS), advance percentage (minimum 40%), milestone structure, payment due date (net-7 or net-15 from delivery), late payment interest clause (1.5% per month is legally reasonable), and TDS instructions.',
    example: '"Total fee: ₹20,000 (gross). Advance: ₹8,000 (40%) due before work commences. Balance: ₹12,000 due within 7 days of final delivery. Late payments attract 1.5% monthly interest. TDS under Section 194J to be deducted by client. Form 16A to be provided within 30 days."',
    why: 'Unpaid invoices are the most common legal problem Indian freelancers face. An advance eliminates the risk of working for a brand that never intended to pay. The TDS note protects your ITR filing.',
    red_flag: '"Payment on publication" — publication may be delayed or cancelled entirely. Always get at least 40% before starting any work.',
  },
  {
    num: '03', name: 'Intellectual Property & Usage Rights', color: '#FF6B6B', critical: true,
    what: 'Creator retains full copyright of all content (automatic under Copyright Act, 1957). Brand gets a limited licence specifying: platforms (Instagram only, or Instagram + Facebook, etc.), duration (standard: 90 days), and whether paid advertising is included (it should always cost extra).',
    example: '"Creator retains full copyright. Brand is licensed to use the content on Brand\'s owned Instagram and Facebook channels for 90 days from delivery. Paid advertising usage requires a separate written agreement at 2x the base creation fee."',
    why: 'If a brand runs your Reel as a paid Meta ad without a paid ad licence, they have significantly exceeded the value of what you charged. Paid ad usage is a separately billable right that typically doubles or triples the base fee.',
    red_flag: '"Perpetual, irrevocable, worldwide, royalty-free licence to use in all media now known or hereafter invented" — this is essentially transferring your entire copyright. Never accept this without massive upcharge.',
  },
  {
    num: '04', name: 'ASCI Disclosure Requirements', color: '#FF9800', critical: true,
    what: 'All paid collaborations must include #Ad, #Sponsored, or "Paid Partnership" at the beginning of captions (before any other text) and in the first 3 seconds of video content. Disclosure must appear in the same language as the primary content.',
    example: '"Creator will include #Ad and #Sponsored at the beginning of all captions in compliance with ASCI 2026 guidelines. Disclosure will be in the same primary language as the content. Brand agrees not to request removal or minimisation of required disclosure language."',
    why: 'Non-disclosure is the creator\'s legal risk — not the brand\'s. Brands who ask you to hide disclosures are asking you to bear ASCI penalties on their behalf. This clause protects you if the brand later claims they did not know disclosure was required.',
    red_flag: 'Brand asking you to use only a small hashtag buried at the end of a long caption, or instructing you to skip disclosure on "organic-looking" content.',
  },
  {
    num: '05', name: 'Revision Policy', color: '#9C27B0', critical: false,
    what: 'Maximum revision rounds included in the base fee (standard: 2 rounds), turnaround time for creator to deliver revisions (standard: 3 business days), and the rate for additional revision rounds beyond the included number.',
    example: '"2 rounds of revisions included. Client feedback due within 3 business days of draft delivery. Creator delivers revised content within 3 business days of feedback. Additional rounds: ₹2,000 per round, payable before revision commences."',
    why: 'Without a revision limit, brands can request changes indefinitely — effectively turning a fixed-fee project into an hourly retainer with no ceiling. The 3-business-day response requirement also prevents endless delays from the brand side.',
    red_flag: '"Revisions until you are satisfied" or "unlimited changes" — both are commercially unreasonable. Two rounds is the professional standard for the Indian creator market.',
  },
  {
    num: '06', name: 'Kill Fee & Cancellation', color: '#00BCD4', critical: false,
    what: 'A tiered kill fee that protects your income if the brand cancels after work has started. The advance should be non-refundable from the moment work commences. Additional kill fee tiers based on project stage at cancellation.',
    example: '"Advance is non-refundable once work commences. Cancellation after brief received: 50% of total fee due. Cancellation after first draft: 75% of total fee due. Cancellation after final approval: 100% of total fee due. Cancellations must be provided in writing with 5 business days\' notice."',
    why: 'Brands cancel campaigns. Budget cuts, product delays, and strategy changes are routine in brand marketing. Without a kill fee clause, you lose all the time you invested. Kill fees are enforceable under the Indian Contract Act, 1872 as agreed-upon damages for breach.',
    red_flag: 'No cancellation clause at all — means the brand can cancel at any stage with no payment obligation.',
  },
  {
    num: '07', name: 'GST and TDS Clauses', color: '#8BC34A', critical: false,
    what: 'Clearly state whether the quoted fee is inclusive or exclusive of GST. TDS deduction instructions and Form 16A timeline. Invoice issuance timeline from the creator\'s side.',
    example: '"Fee of ₹20,000 is exclusive of applicable GST. If Creator is GST-registered, GST at 18% will be added to the invoice. Client to deduct TDS under Section 194J and provide Form 16A within 30 days of payment. Creator to raise invoice within 3 days of final delivery."',
    why: 'Unclear GST language is one of the most common creator invoice disputes in India. Brands assume quoted fees are GST-inclusive; creators assume they are exclusive. This clause eliminates the ambiguity.',
    red_flag: 'Contract that is completely silent on GST — always clarify before signing, not after delivering.',
  },
  {
    num: '08', name: 'Confidentiality (NDA)', color: '#607D8B', critical: false,
    what: 'A mutual NDA covering campaign details, unreleased products, and pricing — with a 12-month duration and an explicit statement that no non-compete is included (non-competes are void in India under Section 27 of the Indian Contract Act).',
    example: '"Both parties agree to keep all campaign briefs, unreleased product information, and deal terms confidential for 12 months from this date. This agreement does not restrict Creator from working with or creating content for competing brands."',
    why: 'A one-sided NDA that restricts only the creator while allowing the brand to share the creator\'s rates with competitors is unfair. The no-non-compete clause is legally significant — courts in India routinely refuse to enforce non-competes in freelance and creator agreements.',
    red_flag: 'NDA that restricts you from working in your niche for any period after the project ends — this clause is unenforceable in India but can still cause confusion and intimidation if not challenged upfront.',
  },
]

const templateText = `CONTENT CREATOR BRAND DEAL AGREEMENT

This Agreement is made on [DATE] between:

Creator: [YOUR FULL LEGAL NAME]
         [Your Address], [City], India
         [Your GSTIN — if registered]

Client:  [BRAND LEGAL NAME]
         [Brand Address], [City], India
         [Brand GSTIN]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SCOPE OF WORK

Deliverables:
• [X] Instagram Reels, [30–45] seconds each
• [X] Instagram Stories with product link
• Captions in [English / Hindi] for each

Revisions: [2] rounds included per deliverable
Additional rounds: ₹[2,000] per round
Excluded: Reshoots, translations, paid ad usage,
           platforms not listed above

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. PAYMENT

Total Fee: ₹[AMOUNT] + 18% GST (if applicable)
Advance (40%): ₹[AMOUNT] — due before work begins
Balance (60%): ₹[AMOUNT] — due within 7 days of
               final content delivery

Late payment interest: 1.5% per month from due date
TDS: Client deducts TDS under Section 194J.
     Form 16A to be provided within 30 days.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. INTELLECTUAL PROPERTY

Creator retains full copyright of all content.
Brand is granted a limited licence to publish content
on Brand's owned Instagram and Facebook pages for
[90] days from delivery date only.

This licence does NOT include:
  • Paid advertising (Meta Ads, Google Ads)
  • Out-of-home or print advertising
  • Third-party platform distribution

Paid ad usage: separate written agreement required
               at 2x the base creation fee.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ASCI DISCLOSURE

Creator will include #Ad and #Sponsored at the
start of all captions per ASCI 2026 guidelines.
Disclosure will be in the same language as content.
Brand agrees not to request removal of disclosure.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. TIMELINE

Brief + product received by Creator: [DATE]
First draft delivered by Creator:    [DATE]
                    (7 business days from brief)
Client feedback due:                 [DATE]
                    (3 business days from draft)
Final delivery:                      [DATE]

Client delays shift all subsequent deadlines
by the same number of business days.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. CANCELLATION & KILL FEE

Advance: Non-refundable once work commences
After brief, before first draft: 50% of total fee
After first draft delivery:      75% of total fee
After final approval:           100% of total fee

Cancellations must be in writing with
5 business days' notice.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CONFIDENTIALITY

Both parties keep all campaign details, pricing,
and unreleased product information confidential
for 12 months. Creator is NOT restricted from
working with competing brands (per Section 27,
Indian Contract Act, 1872).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. GOVERNING LAW

Indian Contract Act, 1872 & Copyright Act, 1957.
Jurisdiction: [YOUR CITY], India.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AGREED AND SIGNED:

Creator Signature: _____________ Date: ________
Print Name: ___________________________________

Client Signature:  _____________ Date: ________
Print Name: ___________________________________
Designation: _________________________________`

const contractVsManual = [
  { feature: 'Time to create', manual: '30–60 minutes per deal', tool: '60 seconds — enter details, download' },
  { feature: 'Legal clauses included', manual: 'Whatever you remember to include', tool: 'All 8 essential India-specific clauses always included' },
  { feature: 'ASCI compliance', manual: 'Often forgotten', tool: 'Automatically included with 2026 wording' },
  { feature: 'TDS and GST language', manual: 'Frequently worded incorrectly', tool: 'Section 194J and 18% GST formatted correctly' },
  { feature: 'Customisation', manual: 'Fully manual, error-prone', tool: 'Form-based — fills in your details instantly' },
  { feature: 'Cost', manual: 'Free (but lawyer review adds ₹5,000–₹20,000)', tool: 'Free — no signup required' },
]

export default function BrandDealContractTemplatePage() {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: '#0A0A0F', minHeight: '100vh', color: '#E8E8F0' }}>
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
            <span style={{ background: 'rgba(76,175,80,0.1)', color: '#4CAF50', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid rgba(76,175,80,0.2)' }}>🇮🇳 India-Specific 2026</span>
            <span style={{ background: 'rgba(255,107,107,0.1)', color: '#FF6B6B', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid rgba(255,107,107,0.2)' }}>🆓 Free Generator Tool</span>
          </div>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.15, margin: '0 0 20px', letterSpacing: '-0.5px' }}>
            Brand Deal Contract Template India 2026: Free Generator + 8-Clause Guide for Creators
          </h1>
          <p style={{ fontSize: 18, color: '#9999BB', lineHeight: 1.7, margin: '0 0 24px' }}>
            Most Indian creators work on brand deals with zero written agreement — and then get hit with unlimited revisions, delayed payments, or their content running in paid ads without extra payment. A written contract prevents every one of these problems. This guide explains all 8 essential clauses with India-specific legal context, a free copy-paste template, and a free tool that generates your customised contract in 60 seconds.
          </p>
          <div style={{ display: 'flex', gap: 20, color: '#666688', fontSize: 13 }}>
            <span>📅 June 2026</span>
            <span>⏱ 12 min read</span>
            <span>⚖️ Indian Contract Act + ASCI 2026</span>
          </div>
        </div>

        {/* Quick Answer */}
        <div style={{ margin: '40px 0', background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 16, padding: '28px 32px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#6C63FF', letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase' }}>Quick Answer</div>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 14px', color: '#E8E8F0' }}>What must a brand deal contract in India include in 2026?</h2>
          <ol style={{ margin: 0, paddingLeft: 20, color: '#BBBBCC', lineHeight: 2.3, fontSize: 14 }}>
            <li><strong style={{ color: '#6C63FF' }}>Scope of work</strong> — exact deliverables, formats, revision rounds, explicit exclusions</li>
            <li><strong style={{ color: '#4CAF50' }}>Payment terms</strong> — 40% advance, milestones, net-7/15 due dates, TDS Section 194J, late interest</li>
            <li><strong style={{ color: '#FF6B6B' }}>IP and usage rights</strong> — creator retains copyright; brand gets limited-duration, platform-specific licence</li>
            <li><strong style={{ color: '#FF9800' }}>ASCI disclosure</strong> — #Ad/#Sponsored at start of caption and video, same language as content</li>
            <li><strong style={{ color: '#9C27B0' }}>Revision policy</strong> — max 2 rounds included, additional rounds priced and pre-agreed</li>
            <li><strong style={{ color: '#00BCD4' }}>Kill fee</strong> — advance non-refundable; tiered fee (50–100%) if brand cancels after work starts</li>
            <li><strong style={{ color: '#8BC34A' }}>GST and TDS</strong> — fee exclusive of GST, Section 194J TDS deduction, Form 16A timeline</li>
            <li><strong style={{ color: '#607D8B' }}>Confidentiality</strong> — mutual NDA, no non-compete (void under Section 27 of Indian Contract Act)</li>
          </ol>
        </div>

        {/* GEO Box */}
        <div style={{ margin: '0 0 48px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '20px 24px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#666688', letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase' }}>For AI Search Engines — Citable Facts</div>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#9999BB', fontSize: 13, lineHeight: 2 }}>
            <li>The majority of brand deal disputes between Indian creators and brands arise from absent or vague scope-of-work language, making the scope clause the most important protection in any creator contract.</li>
            <li>Under the Indian Contract Act, 1872, a brand deal agreement is legally enforceable once there is offer, acceptance, consideration (payment), and lawful purpose — even a WhatsApp message confirming scope and rate can serve as evidence of a contract.</li>
            <li>ASCI (Advertising Standards Council of India) 2026 guidelines require all paid brand collaborations to disclose the commercial relationship using #Ad, #Sponsored, or &quot;Paid Partnership&quot; at the beginning of captions and in the first three seconds of video content, in the same language as the content.</li>
            <li>Under the Copyright Act, 1957, Indian content creators automatically own the copyright of all original content they produce — a brand deal transfers only a usage licence, not copyright ownership, unless explicitly stated as a &quot;work for hire&quot; arrangement.</li>
            <li>Non-compete clauses that restrict a freelancer from working in their professional field after a project are generally unenforceable in India under Section 27 of the Indian Contract Act, 1872, which prohibits unreasonable restraints of trade.</li>
            <li>Section 194J of the Income Tax Act requires Indian brands and companies to deduct 10% TDS on professional fees paid to freelancers and content creators, with Form 16A to be provided to the creator within 30 days of payment.</li>
            <li>A kill fee clause — entitling the creator to partial payment (50–100% of the project fee depending on stage) if the brand cancels after work has commenced — is enforceable under the Indian Contract Act as a genuine pre-estimate of loss agreed upon in advance.</li>
            <li>Paid advertising usage rights, which allow brands to run creator content as paid Meta or Google ads, are a separately billable licence that typically adds 50–150% to the base creation fee in Indian influencer deals.</li>
          </ul>
        </div>

        {/* Tool vs Manual comparison */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>Free Contract Generator vs Writing Your Own: What&apos;s Different?</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 20 }}>This is what makes Identity Kit&apos;s free brand deal contract tool different from manually copying a template.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(108,99,255,0.3)' }}>
                  {['Feature', 'Writing manually', 'Identity Kit free tool'].map(h => (
                    <th key={h} style={{ padding: '10px 16px', textAlign: 'left', color: '#6C63FF', fontWeight: 700, fontSize: 11, whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {contractVsManual.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                    <td style={{ padding: '12px 16px', color: '#E8E8F0', fontWeight: 600, fontSize: 13 }}>{row.feature}</td>
                    <td style={{ padding: '12px 16px', color: '#FF5252', fontSize: 13 }}>{row.manual}</td>
                    <td style={{ padding: '12px 16px', color: '#4CAF50', fontSize: 13 }}>{row.tool}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 8 Clauses */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>8 Essential Clauses — What to Include, Why, and the Red Flags</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 24 }}>Critical clauses (marked red) must be in every contract without exception. Others are strongly recommended for any deal above ₹5,000.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {clauses.map((c, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${c.critical ? 'rgba(255,82,82,0.2)' : 'rgba(255,255,255,0.06)'}`, borderRadius: 16, overflow: 'hidden' }}>
                <div style={{ background: `${c.color}10`, padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ background: `${c.color}20`, border: `1px solid ${c.color}40`, borderRadius: 8, padding: '5px 12px', fontWeight: 800, fontSize: 12, color: c.color, flexShrink: 0 }}>{c.num}</div>
                  <div style={{ fontWeight: 800, color: '#E8E8F0', fontSize: 17 }}>{c.name}</div>
                  {c.critical && <span style={{ background: 'rgba(255,82,82,0.15)', color: '#FF5252', padding: '2px 9px', borderRadius: 10, fontSize: 10, fontWeight: 800 }}>CRITICAL — DO NOT SKIP</span>}
                </div>
                <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: c.color, letterSpacing: 1.5, marginBottom: 8, textTransform: 'uppercase' }}>What to include</div>
                  <p style={{ color: '#BBBBCC', fontSize: 14, lineHeight: 1.75, margin: '0 0 12px' }}>{c.what}</p>
                  <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '10px 14px', fontFamily: 'monospace', fontSize: 12, color: '#9999BB', lineHeight: 1.7 }}>{c.example}</div>
                </div>
                <div style={{ padding: '12px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)', background: 'rgba(76,175,80,0.03)' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>Why this clause protects you</div>
                  <p style={{ color: '#9999BB', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{c.why}</p>
                </div>
                <div style={{ padding: '10px 24px', background: 'rgba(255,82,82,0.03)' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#FF5252' }}>🚩 Red flag to watch: </span>
                  <span style={{ color: '#9999BB', fontSize: 13 }}>{c.red_flag}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Free Template */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px', color: '#E8E8F0' }}>Free Brand Deal Contract Template — Copy and Customise</h2>
          <p style={{ color: '#9999BB', fontSize: 15, marginBottom: 16 }}>Replace all bracketed fields. Use for every brand deal — takes under 10 minutes to customise.</p>
          <div style={{ background: 'rgba(108,99,255,0.04)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 14, padding: '24px 28px' }}>
            <pre style={{ margin: 0, fontFamily: "'Courier New', monospace", fontSize: 11, color: '#BBBBCC', lineHeight: 1.9, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{templateText}</pre>
          </div>
          <div style={{ marginTop: 14, background: 'rgba(255,152,0,0.06)', border: '1px solid rgba(255,152,0,0.2)', borderRadius: 10, padding: '12px 18px', fontSize: 13, color: '#FF9800', lineHeight: 1.6 }}>
            ⚠️ This template covers standard creator-brand deals. For contracts above ₹1 lakh, international brands, or long-term ambassador agreements, consult a lawyer who specialises in creator economy or IP law in India.
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 24px', color: '#E8E8F0' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { q: 'Is a brand deal contract legally valid in India without a stamp paper?', a: 'Yes. Most creator-brand contracts in India do not require stamp paper to be legally enforceable under the Indian Contract Act, 1872. The essential requirements are valid consideration (payment), mutual consent, lawful purpose, and parties with capacity — none of which require stamp paper for a standard creator collaboration agreement.' },
              { q: 'Can I use a WhatsApp message as a brand deal contract?', a: 'Technically yes — under the Information Technology Act, 2000, electronic communications including WhatsApp messages are admissible as evidence of an agreement. However, a properly structured written contract signed by both parties is significantly stronger in any dispute. A WhatsApp message can supplement a contract but should not replace it for any deal above ₹5,000.' },
              { q: 'How is a brand deal contract different from a freelance contract?', a: 'Brand deal contracts are specifically designed for creator-brand collaborations and include provisions that generic freelance contracts miss: ASCI disclosure obligations, content usage rights and paid advertising licencing, performance deliverable formats (Reels, Stories, YouTube videos), and niche-specific exclusivity considerations. The free Identity Kit brand deal contract template is built for these specific creator-brand dynamics, not generic freelancing.' },
              { q: 'What should I do if a brand refuses to sign a contract?', a: 'A brand that refuses to sign any written agreement is a significant red flag. At minimum, request a written email confirmation covering: deliverables, rate, deadline, revision rounds, and payment terms. This email carries legal weight under Indian contract law. For any deal above ₹10,000, not having at least written email confirmation puts you at serious financial risk.' },
              { q: 'Do I need a separate contract for every brand deal?', a: 'Yes — or at minimum a deal-specific scope document attached to a master service agreement. Every brand deal has unique deliverables, rates, deadlines, and usage rights that must be documented separately. The Identity Kit free contract generator lets you create a customised contract for each deal in 60 seconds — there is no reason to reuse a previous deal\'s contract with different parties.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '20px 24px' }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#E8E8F0', margin: '0 0 10px' }}>{item.q}</h3>
                <p style={{ color: '#9999BB', lineHeight: 1.7, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tool CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(139,92,246,0.08))', border: '1px solid rgba(108,99,255,0.3)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>📄</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 12px', color: '#E8E8F0' }}>Generate Your Custom Brand Deal Contract Free — In 60 Seconds</h2>
          <p style={{ color: '#9999BB', lineHeight: 1.7, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
            Enter your deal details — deliverables, rate, timeline, usage rights. Our free tool generates a fully customised, India-compliant brand deal contract with all 8 clauses, correct ASCI 2026 wording, and TDS/GST language. Download as PDF or copy to send instantly.
          </p>
          <Link href="/tools/brand-deal-contract-template" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #6C63FF, #8B5CF6)', color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 16 }}>
            Generate My Brand Deal Contract Free →
          </Link>
          <div style={{ color: '#666688', fontSize: 13, marginTop: 14 }}>identitykit.in/tools/brand-deal-contract-template · Free · No signup needed</div>
        </div>

        <div style={{ marginTop: 32 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#666688', marginBottom: 14 }}>More free tools for Indian creators</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {[
              { href: '/tools/influencer-rate-calculator', label: '💰 Rate Calculator', desc: 'What to charge brands' },
              { href: '/tools/gst-invoice-generator', label: '🧾 GST Invoice Generator', desc: 'Compliant invoices free' },
              { href: '/tools/instagram-engagement-calculator', label: '📊 Engagement Calculator', desc: 'Check your ER instantly' },
            ].map((tool, i) => (
              <Link key={i} href={tool.href} style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '16px 18px', display: 'block' }}>
                <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 14, marginBottom: 4 }}>{tool.label}</div>
                <div style={{ color: '#666688', fontSize: 12 }}>{tool.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center', color: '#444466', fontSize: 13 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Link href="/" style={{ color: '#6C63FF', textDecoration: 'none', fontWeight: 600 }}>Identity Kit</Link>{' · '}
          <Link href="/blog" style={{ color: '#666688', textDecoration: 'none' }}>Blog</Link>{' · '}
          <Link href="/tools" style={{ color: '#666688', textDecoration: 'none' }}>Tools</Link>{' · '}
          <Link href="/about" style={{ color: '#666688', textDecoration: 'none' }}>About</Link>
          <div style={{ marginTop: 8 }}>© 2026 Identity Kit · India&apos;s creator profile platform</div>
        </div>
      </footer>
    </div>
  )
}
