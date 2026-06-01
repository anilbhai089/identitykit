import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Identity Kit',
  description: 'How Identity Kit collects, uses, and protects your personal data. Compliant with Indian IT Act and GDPR principles.',
}

const LAST_UPDATED = 'June 1, 2025'
const COMPANY = 'Identity Kit'
const EMAIL = 'anilprajapati2667@gmail.com'

export default function PrivacyPage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: #FF6B2B; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .nav-link:hover { color: #FF6B2B !important; }
        .section { margin-bottom: 40px; }
        .section h2 { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800; margin-bottom: 16px; color: #fff; }
        .section p { color: rgba(255,255,255,0.6); line-height: 1.8; font-size: 15px; margin-bottom: 12px; }
        .section ul { color: rgba(255,255,255,0.6); line-height: 1.8; font-size: 15px; padding-left: 20px; }
        .section ul li { margin-bottom: 8px; }
        .toc { background: rgba(255,107,43,0.04); border: 1px solid rgba(255,107,43,0.12); border-radius: 16px; padding: 28px; margin-bottom: 48px; }
        .toc a { display: block; color: rgba(255,255,255,0.6); font-size: 14px; padding: 4px 0; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .toc a:hover { color: #FF6B2B; text-decoration: none; }
        .highlight-box { background: rgba(255,107,43,0.06); border: 1px solid rgba(255,107,43,0.15); border-radius: 14px; padding: 20px 24px; margin-bottom: 20px; }
      `}</style>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(7,7,13,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
          <Link href="/" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20, color: '#FF6B2B', letterSpacing: '-0.5px' }}>
            Identity Kit
          </Link>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            <Link href="/about" className="nav-link" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>About</Link>
            <Link href="/contact" className="nav-link" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Contact</Link>
            <Link href="/auth" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Get Started</Link>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '60px 24px 80px' }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,107,43,0.08)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 100, padding: '5px 14px', marginBottom: 20 }}>
            <span style={{ fontSize: 13, color: '#FF6B2B', fontWeight: 600 }}>Legal</span>
          </div>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 42, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.5px' }}>Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginBottom: 16 }}>Last updated: {LAST_UPDATED}</p>
          <div className="highlight-box">
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, marginBottom: 0 }}>
              <strong style={{ color: '#FF6B2B' }}>Plain English summary:</strong> We collect only what we need to run the platform. We never sell your data. Your profile is public only because you want it to be. You can delete everything at any time.
            </p>
          </div>
        </div>

        {/* ToC */}
        <div className="toc">
          <div style={{ fontWeight: 700, marginBottom: 16, fontSize: 14, color: '#fff' }}>Table of Contents</div>
          {[
            '1. What Data We Collect',
            '2. How We Use Your Data',
            '3. What Is Public vs Private',
            '4. Data Sharing & Third Parties',
            '5. Cookies & Tracking',
            '6. Data Storage & Security',
            '7. Your Rights',
            '8. Children\'s Privacy',
            '9. Changes to This Policy',
            '10. Contact Us',
          ].map(t => (
            <a key={t} href={`#section-${t.split('.')[0].trim()}`}>{t}</a>
          ))}
        </div>

        <div className="section" id="section-1">
          <h2>1. What Data We Collect</h2>
          <p>We collect the following information when you use {COMPANY}:</p>
          <p><strong style={{ color: '#fff' }}>Account information:</strong></p>
          <ul>
            <li>Name and email address (when you sign up)</li>
            <li>Google account information (if you use Google sign-in: name, email, profile photo)</li>
            <li>Username you choose for your public profile</li>
          </ul>
          <p><strong style={{ color: '#fff' }}>Profile information you provide:</strong></p>
          <ul>
            <li>Profile photo and portfolio images/videos</li>
            <li>Creator niche, city, language, and bio</li>
            <li>Social media handles and platform URLs</li>
            <li>Follower counts, engagement rates, and audience demographics you self-report</li>
            <li>Brand collaboration history and rate card pricing</li>
            <li>Skills, awards, and other creator information</li>
          </ul>
          <p><strong style={{ color: '#fff' }}>Automatically collected data:</strong></p>
          <ul>
            <li>IP address and approximate location (country/city level)</li>
            <li>Device type and browser type</li>
            <li>Pages visited and time spent on the Platform</li>
            <li>Profile view counts (aggregated, not individual viewer identity)</li>
          </ul>
        </div>

        <div className="section" id="section-2">
          <h2>2. How We Use Your Data</h2>
          <p>We use your data to:</p>
          <ul>
            <li>Create and display your public creator profile</li>
            <li>Generate AI-powered bio, media kit, and CV content using the information you provide</li>
            <li>Allow you to log in and manage your account</li>
            <li>Send you important account notifications (not marketing unless you opt in)</li>
            <li>Improve the Platform by understanding how it is used</li>
            <li>Detect and prevent fraud, abuse, or violations of our Terms of Service</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We do <strong style={{ color: '#fff' }}>not</strong> use your data to:</p>
          <ul>
            <li>Sell it to brands, agencies, or any third party</li>
            <li>Show you ads (the Platform is currently ad-free)</li>
            <li>Profile you for purposes beyond running the Platform</li>
          </ul>
        </div>

        <div className="section" id="section-3">
          <h2>3. What Is Public vs Private</h2>
          <div className="highlight-box">
            <p style={{ marginBottom: 8, color: 'rgba(255,255,255,0.8)' }}><strong style={{ color: '#4CAF50' }}>Public</strong> (visible to anyone with your link):</p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginBottom: 16 }}>Profile photo, name, username, bio, niche, city, platform stats, audience demographics, brand collabs, rate card, media kit, CV, portfolio content — everything you add to your profile.</p>
            <p style={{ marginBottom: 8, color: 'rgba(255,255,255,0.8)' }}><strong style={{ color: '#FF6B2B' }}>Private</strong> (only you and {COMPANY} can see):</p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginBottom: 0 }}>Your email address, login history, account settings, IP address, device information, and any contact form messages you send us.</p>
          </div>
          <p>Since your profile is designed to be shared with brands, most of the information you enter becomes public. Please only add information you are comfortable sharing publicly.</p>
        </div>

        <div className="section" id="section-4">
          <h2>4. Data Sharing & Third Parties</h2>
          <p>We use the following third-party services to run the Platform:</p>
          <ul>
            <li><strong style={{ color: '#fff' }}>Supabase</strong> — Database and authentication. Your account and profile data is stored here. Supabase is GDPR-compliant.</li>
            <li><strong style={{ color: '#fff' }}>Cloudflare R2</strong> — Storage for your portfolio images and videos. Files are stored in Cloudflare's global CDN.</li>
            <li><strong style={{ color: '#fff' }}>Anthropic Claude API</strong> — AI used to generate your bio and profile content. Only the information you enter in the form is sent to the AI. This data is not retained by Anthropic for training purposes under our enterprise agreement.</li>
            <li><strong style={{ color: '#fff' }}>Vercel</strong> — Hosting platform. Your requests pass through Vercel's servers.</li>
            <li><strong style={{ color: '#fff' }}>Google OAuth</strong> — If you sign in with Google. We receive only your name, email, and profile photo.</li>
            <li><strong style={{ color: '#fff' }}>Razorpay</strong> — Payment processing (when paid plans are active). We do not store your card details — Razorpay handles all payment data.</li>
          </ul>
          <p>We may disclose your data if required by law, court order, or to protect the rights, property, or safety of {COMPANY}, its users, or the public.</p>
          <p>We will never sell your personal data to any third party.</p>
        </div>

        <div className="section" id="section-5">
          <h2>5. Cookies & Tracking</h2>
          <p>We use minimal cookies necessary to run the Platform:</p>
          <ul>
            <li><strong style={{ color: '#fff' }}>Authentication cookies</strong> — To keep you logged in (session management via Supabase Auth)</li>
            <li><strong style={{ color: '#fff' }}>Preference cookies</strong> — To remember your settings</li>
          </ul>
          <p>We do not use third-party advertising cookies. We do not use Facebook Pixel, Google Ads remarketing, or similar advertising trackers.</p>
          <p>You can disable cookies in your browser settings, but this may prevent you from logging in to the Platform.</p>
        </div>

        <div className="section" id="section-6">
          <h2>6. Data Storage & Security</h2>
          <p>Your data is stored on servers provided by Supabase and Cloudflare. Both use industry-standard security measures including encryption at rest and in transit (HTTPS/TLS).</p>
          <p>We implement reasonable technical and organizational security measures. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.</p>
          <p>In the event of a data breach that affects your personal information, we will notify you as required by applicable law.</p>
          <p>We retain your data for as long as your account is active, or as needed to provide the Services. If you delete your account, we will delete your personal data within 30 days, subject to legal retention obligations.</p>
        </div>

        <div className="section" id="section-7">
          <h2>7. Your Rights</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul>
            <li><strong style={{ color: '#fff' }}>Access</strong> — Request a copy of the personal data we hold about you</li>
            <li><strong style={{ color: '#fff' }}>Correction</strong> — Update or correct inaccurate information (you can do this directly through the Platform)</li>
            <li><strong style={{ color: '#fff' }}>Deletion</strong> — Delete your account and associated data at any time through your dashboard, or by emailing <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><strong style={{ color: '#fff' }}>Portability</strong> — Request an export of your profile data in a machine-readable format</li>
            <li><strong style={{ color: '#fff' }}>Objection</strong> — Object to processing of your data for certain purposes</li>
            <li><strong style={{ color: '#fff' }}>Opt-out of communications</strong> — Unsubscribe from any non-essential emails at any time</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We will respond within 30 days.</p>
        </div>

        <div className="section" id="section-8">
          <h2>8. Children's Privacy</h2>
          <p>The Platform is not directed at children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided personal data to us, please contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and we will delete such information.</p>
          <p>Users between 13 and 18 years of age may use the Platform with verifiable parental consent.</p>
        </div>

        <div className="section" id="section-9">
          <h2>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. When we make significant changes, we will notify you by email and by displaying a notice on the Platform.</p>
          <p>The "last updated" date at the top of this page will always reflect when the most recent changes were made. We encourage you to review this policy periodically.</p>
          <p>Your continued use of the Platform after changes are made constitutes your acceptance of the updated Privacy Policy.</p>
        </div>

        <div className="section" id="section-10">
          <h2>10. Contact Us</h2>
          <p>For any privacy-related questions, concerns, or requests, please contact us:</p>
          <ul>
            <li>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li>General contact: <a href="https://identitykit.in/contact">identitykit.in/contact</a> or WhatsApp <a href="https://wa.me/917984266725">+91 79842 66725</a></li>
          </ul>
          <p>We take privacy seriously and will respond to all legitimate requests within 30 days.</p>
        </div>

        {/* Footer nav */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 32, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link href="/terms" style={{ fontSize: 14 }}>Terms of Service →</Link>
          <Link href="/contact" style={{ fontSize: 14 }}>Contact Us →</Link>
          <Link href="/" style={{ fontSize: 14 }}>Back to Home →</Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 16, flexWrap: 'wrap' }}>
          <Link href="/about" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>About</Link>
          <Link href="/contact" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Contact</Link>
          <Link href="/terms" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Terms</Link>
          <Link href="/privacy" style={{ fontSize: 14, color: '#FF6B2B' }}>Privacy</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2025 Identity Kit. Made with ❤️ for Indian creators.</p>
      </footer>
    </div>
  )
}
