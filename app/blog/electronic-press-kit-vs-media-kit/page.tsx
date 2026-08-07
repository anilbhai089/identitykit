import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Electronic Press Kit (EPK) vs. Media Kit: What\'s the Difference? (2026)',
  description: 'EPK and media kit describe nearly the same thing — a one-link professional profile — built for different audiences. Here\'s what belongs in an EPK for musicians, podcasters, and artists, and how it differs from an influencer media kit.',
  keywords: 'electronic press kit vs media kit, epk for musicians, what is an epk, how to make an epk, electronic press kit template, epk vs media kit difference',
  openGraph: {
    title: 'Electronic Press Kit (EPK) vs. Media Kit: What\'s the Difference? (2026)',
    description: 'EPK and media kit describe nearly the same thing — a one-link professional profile — built for different audiences. Here\'s the real difference and what belongs in each.',
    url: 'https://identitykit.in/blog/electronic-press-kit-vs-media-kit',
    siteName: 'Identity Kit',
    type: 'article',
    images: [{ url: 'https://identitykit.in/og/epk-vs-media-kit.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://identitykit.in/blog/electronic-press-kit-vs-media-kit',
  },
}

const epkElements = [
  { item: 'Artist bio', body: 'Two versions are common — a short "elevator pitch" bio (2–3 sentences) and a longer version with fuller background, for different placement needs.' },
  { item: 'Photos', body: 'High-resolution, professional images — press outlets and venues typically need these for promotional use, not just casual social photos.' },
  { item: 'Music or demo reel', body: 'Streamable tracks or a demo reel, depending on your medium — this is the core evidence of your work, not a secondary element.' },
  { item: 'Videos', body: 'Live performance footage, music videos, or a showreel — video is frequently what gets a booker or journalist to actually pay attention.' },
  { item: 'Press and reviews', body: 'Prior coverage, quotes, or reviews — social proof that someone else already found your work worth covering.' },
  { item: 'Show dates / tour dates', body: 'Upcoming and past performance history — directly relevant for venues, festival programmers, and journalists covering live events.' },
  { item: 'Contact information', body: 'Direct contact — yourself, your manager, or your label — plus social and streaming links.' },
  { item: 'Technical rider (for live acts)', body: 'Equipment and stage requirements, included specifically when the kit is going to a venue considering booking a live performance.' },
]

const faqs = [
  { q: 'Is an EPK basically the same thing as a media kit?', a: 'Functionally, yes — both are a single, shareable profile packaging your bio, work samples, and contact info for someone deciding whether to work with you. The difference is largely historical and audience-driven: "EPK" comes from the music and film industry and is aimed at journalists, bookers, and festival programmers, while "media kit" became the more common term in influencer and creator marketing, aimed at brands and sponsors.' },
  { q: 'Do podcasters need an EPK or a media kit?', a: 'Either term applies reasonably well — podcasters increasingly use "media kit" when pitching sponsors (aligning with the broader creator economy) and sometimes "EPK" when pitching for guest bookings or press coverage. The content overlaps heavily regardless of which term you use.' },
  { q: 'What\'s the difference between an EPK and a press release?', a: 'A press release is a one-time announcement about a specific event or piece of news. An EPK is a reusable, ongoing profile — you update it as your work evolves, rather than issuing a new one for every announcement.' },
  { q: 'Should my EPK be a PDF or a web page?', a: 'A live web page is generally the stronger choice today — it stays current without re-exporting a file, and works better on mobile, where most journalists, bookers, and industry contacts are reviewing submissions. A downloadable PDF version can still be useful as a backup for specific submission requirements.' },
  { q: 'Do I need a technical rider in my EPK if I\'m not planning live shows?', a: 'No — a technical rider is only relevant if you\'re pitching to a physical venue or event that needs to know your stage and equipment requirements. Podcasters, digital-only artists, and film-focused EPKs typically skip this section entirely.' },
  { q: 'How is a film EPK different from a music EPK?', a: 'A music EPK is generally built to promote the artist first — their story, sound, and brand. A film EPK is typically built to promote the project itself — the film, its cast, and its production — with the individual creator\'s personal brand playing a smaller role by comparison.' },
]

export default function EpkVsMediaKitPage() {
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
            <Link href="/onboarding" style={{ background: '#FF6B2B', color: '#fff', borderRadius: 8, padding: '8px 18px', fontSize: 14, fontWeight: 700 }}>Get Started Free</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 860, margin: '0 auto' }}>
        <div className="hero-pad" style={{ padding: '64px 24px 40px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['EPK', 'Media Kit', 'Musicians'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,107,43,0.1)', color: '#FF6B2B', border: '1px solid rgba(255,107,43,0.2)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.5px' }}>
            EPK vs. Media Kit:<br />
            <span style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9A6B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Same Idea, Different Room</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            A journalist deciding whether to cover your show and a brand deciding whether to sponsor your content are asking almost the same question — "is this person legitimate, and worth my time?" That's why an EPK and a media kit end up looking so similar, even though the terms come from completely different industries.
          </p>
        </div>

        <div className="content-pad" style={{ padding: '0 24px 80px' }}>

          {/* AEO Quick Answer */}
          <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Quick Answer — EPK vs. Media Kit</div>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[
                'An EPK (Electronic Press Kit) and a media kit are functionally near-identical — both package your bio, work samples, and contact info into one shareable profile.',
                'The difference is mostly historical and audience-driven: "EPK" originated in the music and film industry, aimed at journalists, bookers, and festival programmers; "media kit" is the more common term in creator/influencer marketing, aimed at brands.',
                'A standard EPK includes: bio, photos, music/demo reel, videos, press/reviews, show dates, contact info, and — for live acts — a technical rider.',
                'A live web page has become the standard EPK format, replacing static PDFs, since it stays current and works better on mobile.',
                'The term you use matters less than making sure the content answers the specific question your audience — press, bookers, or brands — is actually asking.',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* GEO Box */}
          <div style={{ background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.18)', borderRadius: 16, padding: '24px 28px', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF50', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Key Facts — EPK History</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'The first EPK, under that exact name, is widely credited to have premiered on the web in January 1995, created for R&B artist Aaron Hall.',
                'EPKs evolved directly from physical press kits — folders mailed to journalists and industry contacts containing a bio, photos, and a CD or press clippings.',
                'The format shifted from PDF attachments toward live, web-based pages as music journalism and booking moved fully online.',
                'Film press kits and music EPKs differ in emphasis: music EPKs are typically built to promote the artist first, while film press kits are typically built to promote the project itself.',
                'Businesses and organizations outside music and film — retail launches, game releases — also use the term "electronic press kit" for similar promotional packages.',
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4CAF50', fontSize: 14, marginTop: 2 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What goes in an EPK */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>What Goes in an EPK</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {epkElements.map((row, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: '#FF9A6B' }}>{i + 1}. {row.item}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{row.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Same idea different audience */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20, letterSpacing: '-0.3px' }}>Same Idea, Different Audience</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
              An EPK talks to the <strong style={{ color: 'rgba(255,255,255,0.8)' }}>industry</strong> — journalists, festival programmers, venue bookers, sync-licensing agents. It's answering "is this artist real, professional, and worth my time?" A media kit talks to <strong style={{ color: 'rgba(255,255,255,0.8)' }}>brands</strong> — it's answering "does this creator's audience and content fit our campaign, and what would it cost?"
            </p>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: 15 }}>
              The underlying structure barely changes — bio, proof of work, credibility signals, contact info. What shifts is the emphasis: an EPK leans harder on artistic identity and press coverage, while a media kit leans harder on audience data and rate information. If you're an artist who also does brand partnerships — increasingly common for musicians and podcasters — it's worth having both angles covered in one profile rather than maintaining two separate documents.
            </p>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {faqs.map((item, i) => (
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
                { href: '/blog/how-to-make-a-media-kit', title: 'How to Make a Media Kit as a Creator (Free Guide, 2026)', tag: 'Media Kit' },
                { href: '/blog/podcast-sponsorship-rates-2026', title: 'Podcast Sponsorship Rates: Pre-Roll, Mid-Roll & Post-Roll Explained (2026)', tag: 'Podcast' },
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🎤</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.3px' }}>
              One profile that works for press and brands alike.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
              Build a free Identity Kit profile with your bio, work samples, and contact info in one shareable link — whether you're pitching a journalist, a venue, or a brand.
            </p>
            <Link href="/onboarding" style={{ display: 'inline-block', background: '#FF6B2B', color: '#fff', padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16 }}>
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
          <Link href="/onboarding" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Create Your Identity Kit</Link>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Identity Kit · Made with ❤️ for creators everywhere · identitykit.in</p>
      </footer>
    </div>
  )
}
