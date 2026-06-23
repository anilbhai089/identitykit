import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Identity Kit',
  description: 'Terms and conditions for using Identity Kit — the professional profile platform for Indian creators.',
}

const LAST_UPDATED = 'June 1, 2025'
const COMPANY = 'Identity Kit'
const EMAIL = 'anilprajapati2667@gmail.com'
const WEBSITE = 'identitykit.in'

export default function TermsPage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>
      
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: #FF6B2B; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .nav-link:hover { color: #FF6B2B !important; }
        .nav-links-row { display: flex; gap: 28px; align-items: center; }
        .mob-cta { display: none; }
        @media (max-width: 640px) {
          .nav-links-row { display: none !important; }
          .mob-cta { display: block !important; }
        }
        .section { margin-bottom: 40px; }
        .section h2 { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800; margin-bottom: 16px; color: #fff; }
        .section p { color: rgba(255,255,255,0.6); line-height: 1.8; font-size: 15px; margin-bottom: 12px; }
        .section ul { color: rgba(255,255,255,0.6); line-height: 1.8; font-size: 15px; padding-left: 20px; }
        .section ul li { margin-bottom: 8px; }
        .toc { background: rgba(255,107,43,0.04); border: 1px solid rgba(255,107,43,0.12); border-radius: 16px; padding: 28px; margin-bottom: 48px; }
        .toc a { display: block; color: rgba(255,255,255,0.6); font-size: 14px; padding: 4px 0; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .toc a:hover { color: #FF6B2B; text-decoration: none; }
      `}</style>

            {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(7,7,13,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
          <a href="/" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, color: '#FF6B2B', letterSpacing: '-0.5px', whiteSpace: 'nowrap', textDecoration: 'none' }}>
            Identity Kit
          </a>
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="nav-links-row">
            <a href="/blog" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: '400', whiteSpace: 'nowrap', textDecoration: 'none' }}>Blog</a>
            <a href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: '400', whiteSpace: 'nowrap', textDecoration: 'none' }}>Tools</a>
            <a href="/about" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: '400', whiteSpace: 'nowrap', textDecoration: 'none' }}>About</a>
            <a href="/contact" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: '400', whiteSpace: 'nowrap', textDecoration: 'none' }}>Contact</a>
            <a href="/auth" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700, whiteSpace: 'nowrap', textDecoration: 'none' }}>Get Started</a>
          </div>
          <a href="/auth" className="mob-cta" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '7px 14px', fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap', textDecoration: 'none' }}>Get Started</a>
        </div>
      </nav>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '60px 24px 80px' }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,107,43,0.08)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 100, padding: '5px 14px', marginBottom: 20 }}>
            <span style={{ fontSize: 13, color: '#FF6B2B', fontWeight: 600 }}>Legal</span>
          </div>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 42, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.5px' }}>Terms of Service</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>Last updated: {LAST_UPDATED} · Effective immediately</p>
        </div>

        {/* ToC */}
        <div className="toc">
          <div style={{ fontWeight: 700, marginBottom: 16, fontSize: 14, color: '#fff' }}>Table of Contents</div>
          {['1. Acceptance of Terms', '2. Description of Service', '3. User Accounts', '4. Content & Intellectual Property', '5. Prohibited Uses', '6. Payment & Refunds', '7. Privacy', '8. Disclaimers & Limitation of Liability', '9. Termination', '10. Governing Law', '11. Changes to Terms', '12. Contact Us'].map(t => (
            <a key={t} href={`#${t.split('. ')[0]}`}>{t}</a>
          ))}
        </div>

        {/* Sections */}
        <div className="section" id="1">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using {WEBSITE} ("the Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Platform. These Terms apply to all visitors, users, and creators who access or use {COMPANY}'s services.</p>
          <p>By creating an account, you confirm that you are at least 18 years old, or 13 years or older with verifiable parental consent, and capable of entering into a binding agreement.</p>
        </div>

        <div className="section" id="2">
          <h2>2. Description of Service</h2>
          <p>{COMPANY} provides a platform for content creators to create and share professional profiles, including media kits, rate cards, creator CVs, and portfolio showcases ("Services"). We use AI to help generate content based on information you provide.</p>
          <p>We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time, with or without notice.</p>
        </div>

        <div className="section" id="3">
          <h2>3. User Accounts</h2>
          <p>To use the Services, you must create an account. You agree to:</p>
          <ul>
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Keep your account credentials confidential and not share them with others</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
            <li>Be responsible for all activity that occurs under your account</li>
            <li>Use only one account per person (duplicate accounts may be removed)</li>
          </ul>
          <p>We reserve the right to terminate accounts that violate these Terms or that are found to contain false information.</p>
        </div>

        <div className="section" id="4">
          <h2>4. Content & Intellectual Property</h2>
          <p><strong style={{ color: '#fff' }}>Your content:</strong> You retain ownership of all content you upload to the Platform, including photos, videos, and text. By uploading content, you grant {COMPANY} a non-exclusive, worldwide, royalty-free license to store, display, and process your content solely to provide the Services.</p>
          <p><strong style={{ color: '#fff' }}>AI-generated content:</strong> Content generated by our AI (bios, summaries, etc.) is created based on information you provide. You own this generated content once created on your profile.</p>
          <p><strong style={{ color: '#fff' }}>{COMPANY} content:</strong> The Platform's design, code, branding, and non-user content are owned by {COMPANY} and protected by intellectual property laws. You may not copy, reproduce, or distribute our Platform without express written permission.</p>
          <p><strong style={{ color: '#fff' }}>Copyright:</strong> You may not upload content that infringes on third-party intellectual property rights. We will remove infringing content and may suspend accounts that repeatedly violate this policy.</p>
        </div>

        <div className="section" id="5">
          <h2>5. Prohibited Uses</h2>
          <p>You agree not to use the Platform to:</p>
          <ul>
            <li>Impersonate any person, brand, or entity, or misrepresent your affiliation</li>
            <li>Upload false follower counts, fake engagement metrics, or fabricated brand collaborations</li>
            <li>Use the platform for spam, unsolicited advertising, or mass messaging</li>
            <li>Upload illegal content including but not limited to content that is defamatory, obscene, or infringes on others' rights</li>
            <li>Attempt to hack, scrape, or reverse engineer the Platform</li>
            <li>Use bots, scripts, or automated tools to access or interact with the Platform</li>
            <li>Violate any applicable Indian laws or regulations</li>
            <li>Create profiles for others without their express consent</li>
          </ul>
          <p>Violation of these restrictions may result in immediate account termination without refund.</p>
        </div>

        <div className="section" id="6">
          <h2>6. Payment & Refunds</h2>
          <p>Currently, {COMPANY} offers free access to the Platform. If and when paid plans are introduced:</p>
          <ul>
            <li>All prices will be listed in Indian Rupees (INR) and are inclusive of applicable GST unless stated otherwise</li>
            <li>Payments will be processed securely through Razorpay</li>
            <li>Subscription fees are non-refundable after 7 days from purchase, unless the Platform has a material failure to deliver the advertised service</li>
            <li>We reserve the right to change pricing with 30 days' notice</li>
          </ul>
          <p>For refund requests, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>

        <div className="section" id="7">
          <h2>7. Privacy</h2>
          <p>Your use of the Platform is also governed by our <Link href="/privacy">Privacy Policy</Link>, which is incorporated into these Terms by reference. By using the Platform, you consent to the collection and use of your information as described in our Privacy Policy.</p>
        </div>

        <div className="section" id="8">
          <h2>8. Disclaimers & Limitation of Liability</h2>
          <p>The Services are provided "as is" and "as available" without any warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
          <p>{COMPANY} does not guarantee that:</p>
          <ul>
            <li>The Platform will be error-free or uninterrupted</li>
            <li>Brands or agencies will contact you as a result of using the Platform</li>
            <li>AI-generated content will be accurate or suitable for all purposes</li>
          </ul>
          <p>To the maximum extent permitted by applicable law, {COMPANY} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, or data, even if we have been advised of the possibility of such damages.</p>
          <p>Our total liability to you for any claim arising from or related to these Terms or the Services shall not exceed the amount you paid to us in the 3 months prior to the claim.</p>
        </div>

        <div className="section" id="9">
          <h2>9. Termination</h2>
          <p>You may delete your account at any time through the dashboard settings. Upon termination, your public profile will be taken down. We may retain certain data as required by law or for legitimate business purposes.</p>
          <p>We reserve the right to suspend or terminate your account without notice if you violate these Terms or engage in conduct we reasonably believe harms the Platform, other users, or third parties.</p>
        </div>

        <div className="section" id="10">
          <h2>10. Governing Law</h2>
          <p>These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from or related to these Terms or the Platform shall be subject to the exclusive jurisdiction of the courts located in India.</p>
          <p>For disputes arising out of or relating to the use of the Platform, we encourage you to first contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> to resolve the matter amicably.</p>
        </div>

        <div className="section" id="11">
          <h2>11. Changes to Terms</h2>
          <p>We may update these Terms from time to time. When we make material changes, we will notify you by email and/or by posting a prominent notice on the Platform. Your continued use of the Services after such notification constitutes acceptance of the updated Terms.</p>
          <p>We encourage you to review these Terms periodically.</p>
        </div>

        <div className="section" id="12">
          <h2>12. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul>
            <li>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li>Website: <a href={`https://${WEBSITE}/contact`}>{WEBSITE}/contact</a></li>
          </ul>
        </div>

        {/* Footer nav */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 32, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link href="/privacy" style={{ fontSize: 14 }}>Privacy Policy →</Link>
          <Link href="/contact" style={{ fontSize: 14 }}>Contact Us →</Link>
          <Link href="/" style={{ fontSize: 14 }}>Back to Home →</Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Blog</Link>
          <Link href="/tools" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Tools</Link>
          <Link href="/about" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>About</Link>
          <Link href="/contact" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contact</Link>
          <Link href="/terms" style={{ fontSize: 14, color: '#FF6B2B' }}>Terms</Link>
          <Link href="/privacy" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Privacy</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2025 Identity Kit. Made with ❤️ for Indian creators.</p>
      </footer>
    </div>
  )
}
