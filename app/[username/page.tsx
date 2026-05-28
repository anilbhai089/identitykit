'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { ExternalLink } from 'lucide-react'

export default function PublicProfile() {
  const params = useParams()
  const username = params.username as string
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('about')

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('profiles').select('*').eq('username', username).single()
      setProfile(data)
      if (data) await supabase.from('profiles').update({ view_count: (data.view_count || 0) + 1 }).eq('username', username)
      setLoading(false)
    }
    load()
  }, [username])

  if (loading) return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 36, height: 36, border: '3px solid var(--border2)', borderTopColor: 'var(--orange)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )

  if (!profile) return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
      <div style={{ fontSize: 48 }}>🔍</div>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700 }}>Profile not found</h2>
      <p style={{ color: 'var(--text2)' }}>identitykit.in/{username} doesn&apos;t exist yet.</p>
    </div>
  )

  const brands = profile.brands_worked?.split(',').map((b: string) => b.trim()).filter(Boolean) || []
  const platformList = profile.platforms?.split(',').map((p: string) => p.trim()).filter(Boolean) || []
  const cities = profile.top_cities?.split(',').map((c: string) => c.trim()).filter(Boolean) || []

  const rates = [
    { name: 'Instagram Reel', price: profile.rate_reel, icon: '📸' },
    { name: 'Static Post', price: profile.rate_post, icon: '🖼️' },
    { name: 'Carousel', price: profile.rate_carousel, icon: '📎' },
    { name: 'Stories Pack', price: profile.rate_stories, icon: '⭕' },
    { name: 'YouTube Video', price: profile.rate_yt_dedicated, icon: '▶️' },
    { name: 'YT Integration', price: profile.rate_yt_integration, icon: '🎬' },
    { name: 'YouTube Short', price: profile.rate_yt_short, icon: '⚡' },
    { name: 'Twitter Thread', price: profile.rate_twitter, icon: '🐦' },
    { name: 'LinkedIn Post', price: profile.rate_linkedin, icon: '💼' },
    { name: 'Blog Post', price: profile.rate_blog, icon: '📝' },
    { name: 'Podcast Mention', price: profile.rate_podcast, icon: '🎙️' },
  ].filter(r => r.price)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>

      {/* HERO HEADER */}
      <div style={{ background: 'linear-gradient(135deg,#1A1A24 0%,#0f1929 100%)', borderBottom: '1px solid var(--border)' }}>
        {/* Banner */}
        <div style={{ height: 100, background: `linear-gradient(90deg, var(--orange), #FF8C5A, var(--orange))`, opacity: 0.7 }}></div>

        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 28px' }}>
          {/* Avatar + Open badge */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: -44, marginBottom: 16 }}>
            <div style={{ width: 88, height: 88, borderRadius: '50%', border: '3px solid #1A1A24', overflow: 'hidden', background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 28, color: 'white', flexShrink: 0 }}>
              {profile.photo_url
                ? <img src={profile.photo_url} alt={profile.full_name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                : profile.full_name?.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()
              }
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.3)', borderRadius: 99, padding: '6px 14px', fontSize: 11, color: 'var(--orange2)', fontWeight: 500 }}>
              <span style={{ width: 6, height: 6, background: 'var(--orange)', borderRadius: '50%' }}></span>
              Open for collabs
            </div>
          </div>

          {/* Name & info */}
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 4 }}>{profile.full_name}</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, marginBottom: 14 }}>identitykit.in/{profile.username}</p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
            {[profile.niche, ...platformList.slice(0, 3), profile.city, profile.languages].filter(Boolean).map((tag: string) => (
              <span key={tag} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.65)', fontSize: 10, padding: '4px 12px', borderRadius: 99 }}>{tag}</span>
            ))}
          </div>

          {/* Stats bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', background: 'rgba(0,0,0,0.25)', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              [profile.instagram_followers || profile.youtube_subscribers || '—', 'Followers'],
              [profile.avg_views || '—', 'Avg Views'],
              [profile.engagement_rate || '—', 'Engagement'],
              [brands.length > 0 ? `${brands.length}+` : '—', 'Brand Deals'],
            ].map(([n, l], i) => (
              <div key={l} style={{ padding: '14px 8px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: 'white' }}>{n}</div>
                <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TABS */}
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 0, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {['about', 'media kit', 'rate card', 'cv'].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: '14px 20px', background: 'none', border: 'none', borderBottom: tab === t ? '2px solid var(--orange)' : '2px solid transparent', color: tab === t ? 'var(--orange)' : 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, cursor: 'pointer', textTransform: 'capitalize', transition: 'all 0.15s' }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '28px 24px' }}>

        {/* ABOUT TAB */}
        {tab === 'about' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {profile.bio && (
              <div className="card">
                <p style={{ fontSize: 10, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>About</p>
                <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.8 }}>{profile.bio}</p>
              </div>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {/* Audience */}
              <div className="card">
                <p style={{ fontSize: 10, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Audience</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {[
                    [profile.audience_gender || '—', 'Gender'],
                    [profile.audience_age || '—', 'Age Group'],
                  ].map(([v, l]) => (
                    <div key={l} style={{ background: 'var(--bg3)', borderRadius: 8, padding: '10px 8px', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 13, fontWeight: 600, color: 'var(--orange)' }}>{v}</div>
                      <div style={{ fontSize: 9, color: 'var(--text3)', marginTop: 2 }}>{l}</div>
                    </div>
                  ))}
                </div>
                {cities.length > 0 && (
                  <div style={{ marginTop: 12 }}>
                    <p style={{ fontSize: 10, color: 'var(--text3)', marginBottom: 6 }}>TOP CITIES</p>
                    {cities.slice(0, 3).map((city: string) => (
                      <div key={city} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                        <span style={{ fontSize: 11, color: 'var(--text2)' }}>{city}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Brands */}
              <div className="card">
                <p style={{ fontSize: 10, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Brand Collabs</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {brands.map((b: string) => (
                    <span key={b} style={{ background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.2)', color: 'var(--orange2)', fontSize: 10, padding: '4px 10px', borderRadius: 99 }}>{b}</span>
                  ))}
                </div>
                {profile.best_campaign && (
                  <div style={{ marginTop: 14, borderLeft: '3px solid var(--orange)', paddingLeft: 10 }}>
                    <p style={{ fontSize: 10, color: 'var(--text3)', marginBottom: 3 }}>BEST CAMPAIGN</p>
                    <p style={{ fontSize: 11, color: 'var(--text2)', lineHeight: 1.6 }}>{profile.best_campaign}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact */}
            <div className="card">
              <p style={{ fontSize: 10, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Contact & Social</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {profile.email && (
                  <a href={`mailto:${profile.email}`} style={{ textDecoration: 'none' }}>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 16px', background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: 8, color: 'var(--text)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 12 }}>
                      ✉️ Email
                    </button>
                  </a>
                )}
                {profile.whatsapp && (
                  <a href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 16px', background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: 8, color: 'var(--text)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 12 }}>
                      💬 WhatsApp
                    </button>
                  </a>
                )}
                {profile.instagram_handle && (
                  <a href={`https://instagram.com/${profile.instagram_handle.replace('@', '')}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 16px', background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: 8, color: 'var(--text)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 12 }}>
                      📸 Instagram ↗
                    </button>
                  </a>
                )}
                {profile.youtube_channel && (
                  <a href={`https://youtube.com/@${profile.youtube_channel}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 16px', background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: 8, color: 'var(--text)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 12 }}>
                      ▶️ YouTube ↗
                    </button>
                  </a>
                )}
              </div>
              {profile.email && (
                <a href={`mailto:${profile.email}?subject=Collaboration Inquiry`} style={{ textDecoration: 'none', display: 'block', marginTop: 14 }}>
                  <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 14 }}>
                    🤝 Send collaboration request
                  </button>
                </a>
              )}
            </div>
          </div>
        )}

        {/* MEDIA KIT TAB */}
        {tab === 'media kit' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: 'linear-gradient(135deg,#1A1A24,#0f1929)', border: '1px solid var(--border)', borderRadius: 16, padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--orange)', border: '2px solid rgba(255,107,43,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 18, color: 'white', overflow: 'hidden', flexShrink: 0 }}>
                  {profile.photo_url ? <img src={profile.photo_url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : profile.full_name?.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 2 }}>{profile.full_name}</h2>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{profile.niche} · {profile.city} · {profile.languages}</p>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16, gap: 8 }}>
                {[
                  [profile.instagram_followers || '—', 'Instagram'],
                  [profile.youtube_subscribers || '—', 'YouTube'],
                  [profile.avg_views || '—', 'Avg Views'],
                  [profile.engagement_rate || '—', 'Engagement'],
                ].map(([n, l]) => (
                  <div key={l} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: 'white' }}>{n}</div>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="card">
                <p style={{ fontSize: 10, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Audience Insights</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
                  {[[profile.audience_gender || '—', 'Gender'], [profile.audience_age || '—', 'Age'], ['72%', 'Indian']].map(([v, l]) => (
                    <div key={l} style={{ background: 'var(--bg3)', borderRadius: 8, padding: '8px 6px', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 13, fontWeight: 600, color: 'var(--orange)' }}>{v}</div>
                      <div style={{ fontSize: 8, color: 'var(--text3)', marginTop: 1 }}>{l}</div>
                    </div>
                  ))}
                </div>
                {cities.length > 0 && <>
                  <p style={{ fontSize: 9, color: 'var(--text3)', marginBottom: 6 }}>TOP CITIES</p>
                  {cities.map((c: string) => <div key={c} style={{ fontSize: 11, color: 'var(--text2)', marginBottom: 4 }}>• {c}</div>)}
                </>}
              </div>
              <div className="card">
                <p style={{ fontSize: 10, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Platforms</p>
                {platformList.map((p: string) => (
                  <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontSize: 11, color: 'var(--text)' }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <p style={{ fontSize: 10, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Brand Collaborations</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {brands.map((b: string) => (
                  <span key={b} style={{ background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.2)', color: 'var(--orange2)', fontSize: 11, padding: '5px 14px', borderRadius: 99 }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* RATE CARD TAB */}
        {tab === 'rate card' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: 'linear-gradient(135deg,#1A1A24,#0f1929)', border: '1px solid var(--border)', borderRadius: 16, padding: '20px 24px' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 4 }}>{profile.full_name}</h2>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>Rate Card 2025 · {profile.niche}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {[`${profile.instagram_followers || '—'} followers`, `${profile.engagement_rate || '—'} engagement`, profile.turnaround].filter(Boolean).map((t: string) => (
                  <span key={t} style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', color: 'var(--orange2)', fontSize: 10, padding: '3px 10px', borderRadius: 99 }}>{t}</span>
                ))}
              </div>
            </div>

            {rates.length > 0 && (
              <div className="card">
                <p style={{ fontSize: 10, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Content Rates</p>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {rates.map((r, i) => (
                      <tr key={r.name} style={{ background: i % 2 === 0 ? 'var(--bg3)' : 'transparent' }}>
                        <td style={{ padding: '9px 12px', fontSize: 12, color: 'var(--text)' }}>{r.icon} {r.name}</td>
                        <td style={{ padding: '9px 12px', fontSize: 13, fontWeight: 600, color: 'var(--orange)', textAlign: 'right' }}>₹ {Number(r.price).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {profile.custom_package && (
              <div style={{ background: 'rgba(255,107,43,0.08)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 12, padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--orange)', marginBottom: 2 }}>Custom Bundle</p>
                  <p style={{ fontSize: 11, color: 'var(--text2)' }}>{profile.custom_package}</p>
                </div>
              </div>
            )}

            <div className="card" style={{ fontSize: 11, color: 'var(--text3)', lineHeight: 1.8 }}>
              <p style={{ fontSize: 10, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Notes</p>
              <p>• All prices exclusive of 18% GST. GST invoice provided.</p>
              <p>• 50% advance required before content creation.</p>
              <p>• Turnaround: {profile.turnaround || '5-7 business days'}.</p>
              <p>• 1 free revision included per deliverable.</p>
            </div>
          </div>
        )}

        {/* CV TAB */}
        {tab === 'cv' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: 'linear-gradient(135deg,#1A1A24,#0f1929)', borderRadius: 16, overflow: 'hidden' }}>
              <div style={{ background: 'var(--orange)', padding: '20px 24px 16px' }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 26, fontWeight: 800, color: 'white', marginBottom: 4 }}>{profile.full_name}</h2>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', marginBottom: 8 }}>{profile.tagline || `${profile.niche} Creator · ${profile.city}`}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {[profile.email, profile.city, profile.languages].filter(Boolean).map((m: string) => (
                    <span key={m} style={{ fontSize: 10, color: 'rgba(255,255,255,0.65)' }}>{m}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', background: 'rgba(255,107,43,0.6)' }}>
                {[[profile.instagram_followers || '—', 'Followers'], [profile.avg_views || '—', 'Avg Views'], [profile.engagement_rate || '—', 'Engagement'], [brands.length > 0 ? `${brands.length}+` : '—', 'Brands']].map(([n, l], i) => (
                  <div key={l} style={{ padding: '10px 6px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: 'white' }}>{n}</div>
                    <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.6)', marginTop: 1 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {profile.bio && (
              <div className="card">
                <p style={{ fontSize: 10, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>About</p>
                <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.8 }}>{profile.bio}</p>
              </div>
            )}

            {brands.length > 0 && (
              <div className="card">
                <p style={{ fontSize: 10, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Brand Collaborations</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {brands.map((b: string) => (
                    <span key={b} style={{ background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.2)', color: 'var(--orange2)', fontSize: 10, padding: '4px 12px', borderRadius: 99 }}>{b}</span>
                  ))}
                </div>
              </div>
            )}

            {profile.best_campaign && (
              <div className="card">
                <p style={{ fontSize: 10, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Campaign Highlight</p>
                <div style={{ borderLeft: '3px solid var(--orange)', paddingLeft: 14, background: 'rgba(255,107,43,0.05)', padding: '12px 14px' }}>
                  <p style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.7 }}>{profile.best_campaign}</p>
                </div>
              </div>
            )}

            {rates.length > 0 && (
              <div className="card">
                <p style={{ fontSize: 10, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>What I Offer Brands</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {rates.slice(0, 5).map(r => (
                    <div key={r.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, padding: '6px 0', borderBottom: '1px solid var(--border)' }}>
                      <span style={{ color: 'var(--text2)' }}>{r.icon} {r.name}</span>
                      <span style={{ color: 'var(--orange)', fontWeight: 600 }}>₹{Number(r.price).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* FOOTER */}
      <div style={{ textAlign: 'center', padding: '24px', borderTop: '1px solid var(--border)', marginTop: 40 }}>
        <p style={{ fontSize: 11, color: 'var(--text3)' }}>Powered by <span style={{ color: 'var(--orange)', fontWeight: 600 }}>Identity Kit</span> · identitykit.in</p>
      </div>
    </div>
  )
}
