import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Influencer Tax & GST Guide India 2026: TDS, Section 194R, ITR Filing Explained',
  description: 'Complete tax guide for Indian influencers and content creators in 2026. Section 194R TDS on gifts and barter, GST registration at ₹20 lakh turnover, which ITR form to file, advance tax rules, and how to avoid penalties. Plain-English explanation with real examples.',
  keywords: 'influencer tax india 2026, gst for influencers india, section 194r tds influencers, influencer itr filing india, creator tax india, youtube income tax india, influencer gst registration india, tds on brand deals india',
  openGraph: {
    title: 'Influencer Tax & GST Guide India 2026: TDS, Section 194R, ITR Filing Explained',
    description: 'Free products over ₹20,000 are taxable income under Section 194R — even if returned after the shoot. GST kicks in at ₹20 lakh turnover. Here is everything Indian creators need to know, in plain English.',
    url: 'https://identitykit.in/blog/influencer-tax-gst-india-2026',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/influencer-tax-gst-india.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/influencer-tax-gst-india-2026',
  },
}

const taxSections = [
  {
    section: 'Section 194R',
    icon: '🎁',
    color: '#FF6B2B',
    title: 'TDS on Gifts, Barter & Freebies',
    rate: '10% TDS',
    threshold: '₹20,000 per year (aggregate)',
    appliesWhen: 'A brand gives you any product, gadget, trip, or experience worth more than ₹20,000 combined in a financial year, in exchange for content.',
    example: 'A skincare brand sends you a hamper worth ₹35,000 for a review video. The brand must deduct ₹3,500 (10%) as TDS before or alongside giving you the product, and report it on Form 26Q. You must declare ₹35,000 as business income and claim the ₹3,500 TDS credit when filing your ITR.',
    keyPoint: 'If you return the product after the shoot and never keep it, it is NOT treated as a benefit — no TDS applies. Keeping it (even a "loaner" that you never send back) makes it taxable.',
    indianNote: 'This is the rule that catches most Indian creators off guard. Many think "it was free, so it\'s not income" — legally, that is incorrect. The taxman treats any retained gift over the threshold exactly like cash income.',
  },
  {
    section: 'Section 194J',
    icon: '💼',
    color: '#6C63FF',
    title: 'TDS on Professional Fees',
    rate: '10% TDS',
    threshold: 'Above ₹30,000 in a financial year (per payer)',
    appliesWhen: 'A brand or agency pays you cash for a brand deal, sponsored post, or content creation service — when you are engaged for your personal brand, expertise, or public image.',
    example: 'A fintech app pays you ₹1,00,000 for 3 sponsored Instagram Reels. The brand deducts ₹10,000 (10%) TDS and pays you ₹90,000. They issue Form 16A. You declare the full ₹1,00,000 as business income and claim the ₹10,000 TDS credit.',
    keyPoint: 'If you don\'t provide your PAN to the brand, TDS jumps to 20% instead of 10%. Always share your PAN with brands before invoicing — this single step can save you 10% of every payment.',
    indianNote: 'Most direct-to-creator brand deal payments in India fall under 194J, not 194R, because you are being paid in cash for your expertise and personal brand — not given a free product.',
  },
  {
    section: 'Section 194C',
    icon: '📝',
    color: '#4CAF50',
    title: 'TDS on Contractual / Agency Payments',
    rate: '1–2% TDS',
    threshold: 'Above ₹30,000 per contract or ₹1,00,000 aggregate per year',
    appliesWhen: 'You are hired through an agency for a specific, defined project (not engaged for your personal brand or public image specifically) — or when an agency itself is the contracted party with a brand.',
    example: 'A marketing agency hires you to create 5 UGC videos for ₹50,000 as a fixed contractual deliverable, treating it as a service contract rather than influencer engagement. TDS at 2% (₹1,000) may apply instead of the 10% under 194J, depending on how the agreement is structured.',
    keyPoint: 'Whether 194C or 194J applies depends on the nature of the engagement — if you\'re hired specifically for your personal brand, goodwill, or public image, 194J (10%) applies even through an agency.',
    indianNote: 'This distinction matters financially — 194C deducts less tax upfront, improving your immediate cash flow. But the classification is based on the substance of the deal, not just what it\'s labelled.',
  },
  {
    section: 'GST Registration',
    icon: '🧾',
    color: '#FF9800',
    title: '18% GST on Influencer Services',
    rate: '18% GST',
    threshold: '₹20 lakh annual turnover (₹10 lakh in special category states)',
    appliesWhen: 'Your aggregate annual turnover — including the value of barter/gift deals — crosses ₹20 lakh. Registration becomes mandatory, not optional.',
    example: 'You earn ₹14 lakh in cash brand deals plus ₹7 lakh in fair-market-value barter gifts in one financial year = ₹21 lakh aggregate turnover. You must register for GST even though your cash income alone was under ₹20 lakh.',
    keyPoint: 'Barter and gift values COUNT toward your GST turnover threshold, even though they are not cash. Many creators miscalculate this and miss mandatory registration.',
    indianNote: 'Once registered, you must charge 18% GST on every invoice to Indian brands and file monthly/quarterly GST returns. Export of services (foreign brand payments, YouTube AdSense from Google Ireland) can be zero-rated with proper documentation (LUT filing).',
  },
]

const itrForms = [
  { form: 'ITR-3', who: 'Creators declaring actual income and claiming real business expenses (equipment, software, travel, internet, editing tools)', when: 'Default and recommended for most established creators — allows full expense deduction which usually reduces taxable income more than the presumptive scheme', color: '#FF6B2B' },
  { form: 'ITR-4 (Sugam)', who: 'Creators opting for presumptive taxation under Section 44ADA — declare only 50% of gross receipts as taxable profit, no detailed books required', when: 'Best for creators with gross receipts under ₹50 lakh and minimal actual expenses — simpler filing, but you lose the ability to claim higher real expenses', color: '#6C63FF' },
  { form: 'ITR-3 (with Schedule FA)', who: 'Creators with foreign income — YouTube AdSense paid via Google Ireland, foreign brand sponsorships, international affiliate payouts', when: 'Mandatory whenever any portion of income originates from outside India — must report under Schedule Foreign Assets', color: '#4CAF50' },
]

const expenseDeductions = [
  { item: 'Camera, lighting, microphone equipment', deduction: 'Depreciation 15% WDV per year (not full deduction in year 1)', icon: '📷' },
  { item: 'Laptop / computer for editing', deduction: 'Depreciation 40% WDV per year', icon: '💻' },
  { item: 'Software subscriptions (Canva Pro, CapCut Pro, editing tools)', deduction: '100% deductible in the year paid', icon: '🛠️' },
  { item: 'Internet & phone bills (business-use portion)', deduction: 'Deductible proportional to business use', icon: '📶' },
  { item: 'Travel for content shoots', deduction: '100% deductible with proper invoices/records', icon: '✈️' },
  { item: 'Studio rent / co-working space', deduction: '100% deductible', icon: '🏢' },
  { item: 'Props, outfits, and set design used specifically for content', deduction: 'Deductible if exclusively for business use', icon: '🎬' },
  { item: 'Freelancer/editor payments', deduction: '100% deductible with TDS compliance if applicable', icon: '👥' },
]

const filingSteps = [
  { step: '01', title: 'Consolidate all income sources', body: 'Gather records of: brand deal payments (cash), YouTube/AdSense revenue, affiliate commissions, sponsored post fees, and the fair market value of all gifts and barter received during the year.' },
  { step: '02', title: 'Download AIS and TIS from the income tax portal', body: 'Log into incometax.gov.in → e-File → Income Tax Return → View AIS. The AIS shows every transaction reported against your PAN by brands and platforms. The TIS shows the deduplicated, aggregated figure the department expects you to declare.' },
  { step: '03', title: 'Pull Form 26AS from TRACES and reconcile', body: 'Verify every TDS deposit against each brand\'s TAN. Roughly 20–30% of influencer AIS records have at least one mismatch — usually a barter deal TDS under Section 194R that the creator didn\'t expect or track.' },
  { step: '04', title: 'Choose the correct ITR form', body: 'ITR-3 for actual income with expense deductions (recommended for most). ITR-4 (Sugam) if eligible for Section 44ADA presumptive taxation (50% of gross receipts taxed, gross receipts under ₹50 lakh). Filing the wrong form triggers automated notices and processing delays.' },
  { step: '05', title: 'Declare ALL income including sub-threshold perquisites', body: 'Even a ₹15,000 gift below the ₹20,000 TDS threshold must still be declared as income — the threshold determines whether TDS is deducted, not whether the income is taxable. Omitting any perquisite, however small, creates an AIS mismatch and an almost-certain automated notice.' },
  { step: '06', title: 'Claim every TDS credit under Schedule TDS2', body: 'Enter each deductor\'s TAN, the relevant section (194R, 194J, or 194C), the amount deducted, and the financial year. Verify each entry against the Form 16A certificates brands are required to issue within 15 days of filing their quarterly return.' },
  { step: '07', title: 'Pay advance tax quarterly if liability exceeds ₹10,000', body: 'Since creator income is irregular, you must estimate and pay advance tax in 4 instalments: 15% by June 15, 45% by September 15, 75% by December 15, and 100% by March 15. Missing deadlines triggers interest under Sections 234B and 234C.' },
]

const mistakes = [
  { m: 'Not declaring free products and gifts as income', f: 'The single most common and costly mistake. Any gift, hamper, or experience you keep — worth more than the ₹20,000 aggregate threshold — is taxable income under Section 194R, whether or not the brand deducted TDS. Not declaring it creates an automatic AIS mismatch flagged by the department within weeks.' },
  { m: 'Missing GST registration because barter value wasn\'t counted', f: 'Your GST turnover threshold of ₹20 lakh includes the fair market value of barter and gifted products, not just cash income. Creators who only count cash brand deals often cross the threshold without realising it and face penalties for late registration.' },
  { m: 'Filing ITR-1 instead of ITR-3 or ITR-4', f: 'Content creation income is business/professional income (PGBP), not salary. Filing ITR-1 (meant for salaried individuals) when you have creator income leads to processing errors, notices, and potential penalties for incorrect filing.' },
  { m: 'Not providing PAN to brands before getting paid', f: 'If you don\'t share your PAN, brands are required to deduct TDS at 20% instead of the standard 10% under Section 194J. This is an easily avoidable loss — always share your PAN before any brand processes payment or sends a gifted product.' },
  { m: 'Missing quarterly advance tax payments', f: 'Creator income is irregular by nature, but the tax department still expects quarterly advance tax if your total liability exceeds ₹10,000/year. Missing the June 15, September 15, December 15, and March 15 deadlines triggers interest charges under Sections 234B and 234C that compound over the year.' },
  { m: 'Mixing personal and business bank accounts', f: 'Not legally mandatory, but practically essential. A dedicated business account makes P&L preparation straightforward, eliminates confusion during any scrutiny, and makes GST turnover computation simple as you approach the ₹20 lakh threshold.' },
]

export default function InfluencerTaxGSTIndiaPage() {
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
            {['Tax & GST', 'Legal', 'India 2026'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Influencer Tax & GST Guide India 2026<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TDS, Section 194R, ITR Filing Explained</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            That free hamper from a skincare brand? Taxable. That ₹1 lakh brand deal? 10% TDS applies. Cross ₹20 lakh in total income (including gifts)? GST registration becomes mandatory. India\'s tax department now treats content creation as a recognised profession — with its own compliance rules. Here is everything you need to know, in plain English.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* Disclaimer */}
          <div style={{ background: 'rgba(255,152,0,0.06)', border: '1px solid rgba(255,152,0,0.2)', borderRadius: 12, padding: '14px 20px', marginBottom: 32, display: 'flex', gap: 10 }}>
            <span style={{ fontSize: 18, flexShrink: 0 }}>⚠️</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6 }}>This guide explains the general tax framework for Indian influencers and content creators for educational purposes. It is not a substitute for advice from a qualified Chartered Accountant. Tax rules are complex and individual circumstances vary — consult a CA before filing, especially once your income crosses ₹10–15 lakh/year.</span>
          </div>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — Influencer Tax Rules India 2026</div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6, marginBottom: 16 }}>The 6 things every Indian content creator needs to know about taxes in 2026:</p>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'Free products/gifts over ₹20,000/year (kept, not returned) are taxable income under Section 194R — brands deduct 10% TDS',
                'Cash brand deal payments attract 10% TDS under Section 194J (professional fees) — share your PAN or TDS jumps to 20%',
                'GST registration is mandatory once your total turnover (cash + gift value) crosses ₹20 lakh/year (₹10 lakh in special category states)',
                'GST rate on influencer/marketing services is 18% — charged on every invoice once registered',
                'File ITR-3 (claim real expenses) or ITR-4/Sugam (presumptive 50% taxable, gross receipts under ₹50 lakh) — never ITR-1',
                'Pay advance tax quarterly (June 15, Sep 15, Dec 15, Mar 15) if your annual tax liability exceeds ₹10,000',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — Influencer Taxation India 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Section 194R of the Income-tax Act requires brands to deduct 10% TDS on any benefit or perquisite (gifts, free products, sponsored trips) provided to influencers worth more than ₹20,000 per recipient per financial year.',
                'If a gifted product is returned to the brand after the shoot and not retained, it is not treated as a taxable benefit — no TDS applies. Keeping the product makes its fair market value fully taxable.',
                'GST registration becomes mandatory for influencers once aggregate annual turnover — including the value of barter and gifted products — exceeds ₹20 lakh (₹10 lakh in special category states).',
                'The GST rate applicable to influencer and social media marketing services in India is 18%, classified as Supply of Services under the CGST Act.',
                'Approximately 20–30% of influencer AIS (Annual Information Statement) records contain at least one mismatch, usually an unexpected Section 194R barter deal TDS entry the creator did not track.',
                'Content creators failing to file ITR can face combined penalties exceeding 50% of their original tax liability when Section 234F late fees, Section 234A interest, and Section 270A under-reporting penalties stack together.',
                'A structured expense deduction framework — claiming equipment depreciation, software subscriptions, and business-use internet/travel costs — can reduce taxable income by 25–40% for typical creators earning ₹10–30 lakh annually.',
                'YouTube AdSense payments originate from Google Ireland, making them technically foreign-sourced income that must be reported under Schedule FA in the ITR, even though the channel and creator are based in India.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Tax Sections */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>4 Tax Rules Every Indian Creator Must Understand</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 28 }}>Each section of the Income Tax Act applies to a different type of payment you receive as a creator. Knowing which applies to you prevents AIS mismatches and unexpected notices.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {taxSections.map((sec, i) => (
                <div key={i} className="card">
                  <div style={{ background: `linear-gradient(135deg, ${sec.color}15, ${sec.color}05)`, borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{ background: `${sec.color}20`, border: `1px solid ${sec.color}35`, borderRadius: 10, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{sec.icon}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                          <span style={{ fontWeight: 800, fontSize: 17 }}>{sec.section}</span>
                          <span style={{ background: `${sec.color}18`, color: sec.color, border: `1px solid ${sec.color}30`, padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700 }}>{sec.rate}</span>
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{sec.title}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, marginBottom: 2 }}>Threshold</div>
                      <div style={{ fontWeight: 700, color: '#E8E8F0', fontSize: 13 }}>{sec.threshold}</div>
                    </div>
                  </div>

                  <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>Applies when</div>
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{sec.appliesWhen}</div>
                  </div>

                  <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)', background: 'rgba(0,0,0,0.15)' }}>
                    <div style={{ fontSize: 11, color: sec.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>Real example</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6 }}>{sec.example}</div>
                  </div>

                  <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ background: 'rgba(108,99,255,0.07)', border: '1px solid rgba(108,99,255,0.18)', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
                      <span style={{ color: '#6C63FF', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>KEY POINT</span>
                      <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{sec.keyPoint}</span>
                    </div>
                  </div>

                  <div style={{ padding: '14px 24px' }}>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <span style={{ color: '#FF6B2B', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>🇮🇳 INDIA NOTE</span>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.5 }}>{sec.indianNote}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ITR Forms */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Which ITR Form Should Indian Creators File?</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>Content creation income is business/professional income (PGBP) — never file ITR-1, which is meant for salaried individuals only.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {itrForms.map((form, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px', borderLeft: `3px solid ${form.color}` }}>
                  <div style={{ fontWeight: 800, color: form.color, fontSize: 16, marginBottom: 8 }}>{form.form}</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginBottom: 8 }}><span style={{ fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Who: </span>{form.who}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}><span style={{ fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Best when: </span>{form.when}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Expense Deductions */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>Business Expenses Indian Creators Can Deduct</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 20 }}>If you file ITR-3 (actual income method), these deductions reduce your taxable income — often by 25–40% for creators earning ₹10–30 lakh/year.</p>
            <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {expenseDeductions.map((row, i) => (
                <div key={i} className="card" style={{ padding: '14px 18px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{row.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, color: '#E8E8F0', fontSize: 13, marginBottom: 4 }}>{row.item}</div>
                    <div style={{ color: '#4CAF50', fontSize: 12 }}>{row.deduction}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7-Step Filing Process */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.3px' }}>7-Step ITR Filing Process for Indian Creators</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 24 }}>Follow this exact sequence to avoid AIS mismatches and automated notices.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {filingSteps.map((item) => (
                <div key={item.step} className="card" style={{ padding: '18px 22px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 10, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#FF6B2B', fontSize: 14, flexShrink: 0 }}>{item.step}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{item.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.65 }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Identity Kit CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(255,107,43,0.04))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: '32px 28px', marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Track every deal so tax time is painless</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>Build your Identity Kit profile to list every brand collaboration, rate, and deliverable in one place — making it far easier to reconcile your income with AIS and Form 26AS at filing time. Free, takes 10 minutes.</p>
            </div>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', padding: '14px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15, flexShrink: 0, whiteSpace: 'nowrap' }}>
              Build My Free Profile →
            </Link>
          </div>

          {/* 6 Mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>6 Tax Mistakes That Cost Indian Creators Money</h2>
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
                { q: 'Do I have to pay tax on free products from brands in India?', a: 'Yes. Under Section 194R, any product, gift, or experience you keep (not return) worth more than ₹20,000 combined per year is taxable income. The brand must deduct 10% TDS on its fair market value before or alongside giving you the product. You must declare the full value as business income when filing your ITR and can claim the TDS already deducted as a credit. If you return the product after the shoot and never keep it, it is not treated as taxable income.' },
                { q: 'When does GST registration become mandatory for influencers in India?', a: 'GST registration is mandatory once your aggregate annual turnover exceeds ₹20 lakh (₹10 lakh in special category states like the Northeast and hill states). Critically, this threshold includes the fair market value of barter and gifted products, not just cash income — many creators miscalculate this and unknowingly cross the threshold. Once registered, you must charge 18% GST on every invoice to Indian brands and file regular GST returns.' },
                { q: 'What is the TDS rate on brand deal payments in India?', a: 'Cash payments for brand deals and sponsored content typically attract 10% TDS under Section 194J (professional fees) since you are engaged for your personal brand, expertise, or public image. If hired through an agency for a specific defined contract, 1–2% TDS under Section 194C may apply instead, depending on the structure of the arrangement. If you do not provide your PAN to the paying brand, TDS jumps to 20% regardless of which section applies — always share your PAN before any payment.' },
                { q: 'Which ITR form should content creators file in India?', a: 'Content creators should file ITR-3 (if claiming actual business expenses for full deduction) or ITR-4/Sugam (if opting for presumptive taxation under Section 44ADA, where only 50% of gross receipts under ₹50 lakh are taxed, with no detailed bookkeeping required). Never file ITR-1 — that form is exclusively for salaried individuals, and content creation income is classified as business/professional income (PGBP) under Section 28 of the Income Tax Act.' },
                { q: 'How is YouTube AdSense income taxed in India?', a: 'YouTube AdSense payments originate from Google Ireland, making them technically foreign-sourced income that must be reported under Schedule FA in your ITR, even though you and your channel are based in India. The income is still taxed as business/professional income (PGBP) in India. If US tax has been withheld on earnings from US viewers, you may be able to claim relief under the Double Taxation Avoidance Agreement (DTAA) by submitting Form 67 along with your ITR.' },
                { q: 'Do I need to pay advance tax as a content creator in India?', a: 'Yes, if your total tax liability for the financial year exceeds ₹10,000 after accounting for TDS already deducted. You must pay advance tax in 4 quarterly instalments: 15% by June 15, 45% (cumulative) by September 15, 75% (cumulative) by December 15, and 100% by March 15. Since creator income is irregular by nature, re-estimate your liability after every significant brand deal or income milestone throughout the year. Missing deadlines triggers interest charges under Sections 234B and 234C.' },
                { q: 'What happens if I don\'t file ITR as an influencer in India?', a: 'Penalties can compound significantly. For an influencer earning ₹15 lakh annually who fails to file, the combined impact of Section 234F (₹5,000 late filing fee) + Section 234A interest (approximately ₹2,400 at 1%/month for 4 months on ₹60,000 tax due) + Section 270A under-reporting penalty (50% of ₹60,000 = ₹30,000) can exceed ₹37,000 — more than half the original tax liability. Misreporting through fake expense claims or suppressed receipts escalates the penalty to 200% of the tax on misreported income.' },
                { q: 'Should I register my content creation business as a sole proprietorship or company in India?', a: 'Most Indian creators starting out should operate as a sole proprietor — minimal compliance burden, and you file taxes using your personal PAN with no separate entity registration required. As income scales significantly (typically above ₹50 lakh–₹1 crore annually), incorporating as a private limited company can become advantageous because the 25% corporate tax rate is lower than the 30% individual slab rate at higher income levels — but this decision should be made with a Chartered Accountant who can model the actual tax savings against the increased compliance cost.' },
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
                { href: '/blog/freelance-contract-india-2026', title: 'How to Write a Freelance Contract in India 2026', tag: 'Legal' },
                { href: '/blog/influencer-rate-card-india-2026', title: 'Influencer Rate Card India 2026 — Complete Pricing Guide', tag: 'Rate Card' },
                { href: '/blog/brand-deal-contract-template-india', title: 'Brand Deal Contract Template India — Free Download', tag: 'Legal' },
                { href: '/blog/how-to-make-money-content-creator-india-2026', title: 'How to Make Money as a Content Creator in India 2026', tag: 'Creator Income' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🧾</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              Run your creator career like a real business
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Track every brand deal, rate, and deliverable in one professional profile. Identity Kit gives you the media kit, rate card, and creator CV that make tax time — and brand deals — easier. Free.
            </p>
            <Link href="/auth" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
              Create My Free Identity Kit →
            </Link>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, marginTop: 14 }}>
              identitykit.in · Free forever · Built for Indian creators
            </div>
          </div>

        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: '#FF6B2B' }}>Blog</Link>
          <Link href="/tools/brand-deal-contract-template" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contract Template</Link>
          <Link href="/tools/influencer-rate-calculator" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Rate Calculator</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for Indian creators · identitykit.in</p>
      </footer>
    </div>
  )
}
