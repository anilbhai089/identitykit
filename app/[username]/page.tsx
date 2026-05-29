'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function PublicProfile() {
  const params = useParams()
  const username = params.username as string
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('profile')

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
    <div style={{ minHeight: '100vh', background: '#0A0A0F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 36, height: 36, border: '3px solid #1A1A24', borderTopColor: '#FF6B2B', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )

  if (!profile) return (
    <div style={{ minHeight: '100vh', background: '#0A0A0F', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
      <div style={{ fontSize: 48 }}>🔍</div>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700 }}>Profile not found</h2>
      <p style={{ color: 'rgba(240,238,232,0.6)' }}>identitykit.in/{username} doesn&apos;t exist yet.</p>
    </div>
  )

  const brands = profile.brands_worked?.split(',').map((b: string) => b.trim()).filter(Boolean) || []
  const platformList = profile.platforms?.split(',').map((p: string) => p.trim()).filter(Boolean) || []
  const cities = profile.top_cities?.split(',').map((c: string) => c.trim()).filter(Boolean) || []
  const skillsList = profile.skills?.split(',').map((s: string) => s.trim()).filter(Boolean) || []

  const rates = [
    { name: 'Instagram Reel', price: profile.rate_reel, icon: '📸', cat: 'Instagram' },
    { name: 'Static Post', price: profile.rate_post, icon: '🖼️', cat: 'Instagram' },
    { name: 'Carousel', price: profile.rate_carousel, icon: '📎', cat: 'Instagram' },
    { name: 'Stories Pack', price: profile.rate_stories, icon: '⭕', cat: 'Instagram' },
    { name: 'YouTube Video', price: profile.rate_yt_dedicated, icon: '▶️', cat: 'YouTube' },
    { name: 'YT Integration', price: profile.rate_yt_integration, icon: '🎬', cat: 'YouTube' },
    { name: 'YouTube Short', price: profile.rate_yt_short, icon: '⚡', cat: 'YouTube' },
    { name: 'Twitter Thread', price: profile.rate_twitter, icon: '🐦', cat: 'Other' },
    { name: 'LinkedIn Post', price: profile.rate_linkedin, icon: '💼', cat: 'Other' },
    { name: 'Blog Post', price: profile.rate_blog, icon: '📝', cat: 'Other' },
    { name: 'Podcast Mention', price: profile.rate_podcast, icon: '🎙️', cat: 'Other' },
  ].filter(r => r.price)

  const igRates = rates.filter(r => r.cat === 'Instagram')
  const ytRates = rates.filter(r => r.cat === 'YouTube')
  const otherRates = rates.filter(r => r.cat === 'Other')

  const hasPortfolio = profile.portfolio_image1 || profile.portfolio_image2 || profile.portfolio_video1 || profile.portfolio_video2

  const TABS = [
    { id: 'profile', label: 'Profile' },
    { id: 'mediakit', label: 'Media Kit' },
    { id: 'ratecard', label: 'Rate Card' },
    { id: 'cv', label: 'CV' },
  ]

  const initials = profile.full_name?.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()

  // Platform icons map
  const platformIcons: Record<string, string> = {
    'Instagram': '📸', 'YouTube': '▶️', 'LinkedIn': '💼',
    'Twitter / X': '🐦', 'Podcast': '🎙️', 'Blog': '📝',
    'Moj / Josh': '🎵', 'Snapchat': '👻'
  }

  const platformFollowers: Record<string, string> = {
    'Instagram': profile.instagram_followers,
    'YouTube': profile.youtube_subscribers,
  }

  const platformHandles: Record<string, string> = {
    'Instagram': profile.instagram_handle ? `https://instagram.com/${profile.instagram_handle.replace('@','')}` : '',
    'YouTube': profile.youtube_channel ? `https://youtube.com/@${profile.youtube_channel}` : '',
  }

  const now = new Date()
  const validTill = `${now.toLocaleString('default',{month:'long'})} ${now.getFullYear() + 1}`

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0F', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        .ik-tab:hover{color:#FF8C5A!important}
        .ik-btn:hover{opacity:0.85;transform:translateY(-1px)}
        .ik-card{background:#111118;border:1px solid rgba(255,255,255,0.07);border-radius:16px;padding:24px}
        .ik-chip{background:rgba(255,107,43,0.1);border:1px solid rgba(255,107,43,0.2);color:#FF8C5A;font-size:11px;padding:4px 12px;border-radius:99px;display:inline-block}
        .ik-bar{height:6px;border-radius:99px;background:rgba(255,107,43,0.15);overflow:hidden}
        .ik-bar-fill{height:100%;border-radius:99px;background:linear-gradient(90deg,#FF6B2B,#FF8C5A)}
        .ik-platform-row:hover{background:rgba(255,107,43,0.05)!important}
      `}</style>

      {/* ───── HERO ───── */}
      <div style={{ background: 'linear-gradient(180deg,#0f1929 0%,#0A0A0F 100%)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

        {/* Banner with grid pattern */}
        <div style={{ height: 120, background: 'linear-gradient(135deg,#1a0a00 0%,#2d1200 40%,#1a0800 100%)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,107,43,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,107,43,0.15) 1px,transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%,rgba(255,107,43,0.2) 0%,transparent 60%)' }}></div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 40, background: 'linear-gradient(transparent,#0f1929)' }}></div>
        </div>

        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px 0' }}>

          {/* Avatar row */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: -52, marginBottom: 20 }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: 100, height: 100, borderRadius: '50%', border: '4px solid #0f1929', overflow: 'hidden', background: '#FF6B2B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 32, color: 'white', flexShrink: 0 }}>
                {profile.photo_url
                  ? <img src={profile.photo_url} alt={profile.full_name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  : initials}
              </div>
              {/* Online dot */}
              <div style={{ position: 'absolute', bottom: 6, right: 4, width: 14, height: 14, background: '#22C55E', border: '2px solid #0f1929', borderRadius: '50%' }}></div>
            </div>
            <div style={{ display: 'flex', gap: 8, paddingBottom: 4 }}>
              {profile.email && (
                <a href={`mailto:${profile.email}?subject=Collaboration Inquiry`} style={{ textDecoration: 'none' }}>
                  <button className="ik-btn" style={{ padding: '9px 18px', background: '#FF6B2B', border: 'none', borderRadius: 8, color: 'white', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>
                    🤝 Collab with me
                  </button>
                </a>
              )}
              {profile.whatsapp && (
                <a href={`https://wa.me/${profile.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button className="ik-btn" style={{ padding: '9px 14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: 'rgba(240,238,232,0.8)', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, cursor: 'pointer', transition: 'all 0.2s' }}>
                    💬 WhatsApp
                  </button>
                </a>
              )}
            </div>
          </div>

          {/* Name & info */}
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 30, fontWeight: 800, color: 'white', marginBottom: 6, lineHeight: 1.1 }}>{profile.full_name}</h1>
          {profile.tagline && <p style={{ fontSize: 14, color: '#FF8C5A', fontWeight: 500, marginBottom: 10 }}>{profile.tagline}</p>}
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, marginBottom: 14 }}>identitykit.in/{profile.username}</p>

          {/* Tags row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
            {[profile.niche, profile.city, profile.languages, profile.vibe].filter(Boolean).map((tag: string) => (
              <span key={tag} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.55)', fontSize: 11, padding: '4px 12px', borderRadius: 99 }}>{tag}</span>
            ))}
            <span style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)', color: '#4ADE80', fontSize: 11, padding: '4px 12px', borderRadius: 99, display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 5, height: 5, background: '#22C55E', borderRadius: '50%', display: 'inline-block' }}></span>
              Open for collabs
            </span>
          </div>

          {/* Stats strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', background: 'rgba(0,0,0,0.3)', borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', marginBottom: 0 }}>
            {[
              [profile.instagram_followers || profile.youtube_subscribers || '—', 'Followers'],
              [profile.avg_views || '—', 'Avg Views'],
              [profile.engagement_rate ? `${profile.engagement_rate}` : '—', 'Engagement'],
              [brands.length > 0 ? `${brands.length}+` : '—', 'Brand Deals'],
            ].map(([n, l], i) => (
              <div key={l} style={{ padding: '16px 8px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 700, color: 'white' }}>{n}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 3 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TABS */}
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 0, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 24 }}>
          {TABS.map(t => (
            <button key={t.id} className="ik-tab" onClick={() => setTab(t.id)} style={{ padding: '14px 22px', background: 'none', border: 'none', borderBottom: tab === t.id ? '2px solid #FF6B2B' : '2px solid transparent', color: tab === t.id ? '#FF6B2B' : 'rgba(255,255,255,0.4)', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s', letterSpacing: '0.01em' }}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ───── CONTENT ───── */}
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '28px 24px 60px', animation: 'fadeUp 0.3s ease' }}>

        {/* ══════ PROFILE TAB ══════ */}
        {tab === 'profile' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Bio */}
            {profile.bio && (
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>About</p>
                <p style={{ fontSize: 14, color: 'rgba(240,238,232,0.7)', lineHeight: 1.85 }}>{profile.bio}</p>
              </div>
            )}

            {/* Platform breakdown */}
            {platformList.length > 0 && (
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Platform Presence</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {platformList.map((p: string) => (
                    <div key={p} className="ik-platform-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: 10, transition: 'background 0.15s' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: 18 }}>{platformIcons[p] || '📱'}</span>
                        <div>
                          <p style={{ fontSize: 13, color: 'rgba(240,238,232,0.85)', fontWeight: 500 }}>{p}</p>
                          {platformHandles[p] && <a href={platformHandles[p]} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: '#FF6B2B', textDecoration: 'none' }}>View profile ↗</a>}
                        </div>
                      </div>
                      {platformFollowers[p] && (
                        <span style={{ fontSize: 13, fontFamily: "'Syne',sans-serif", fontWeight: 700, color: 'white' }}>{platformFollowers[p]}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {/* Audience */}
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Audience Insights</p>
                {profile.audience_gender && (
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                      <span style={{ fontSize: 11, color: 'rgba(240,238,232,0.5)' }}>Gender</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(240,238,232,0.85)' }}>{profile.audience_gender}</span>
                    </div>
                  </div>
                )}
                {profile.audience_age && (
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                      <span style={{ fontSize: 11, color: 'rgba(240,238,232,0.5)' }}>Primary Age</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#FF8C5A' }}>{profile.audience_age}</span>
                    </div>
                    <div className="ik-bar"><div className="ik-bar-fill" style={{ width: profile.audience_age === '18-24' ? '72%' : profile.audience_age === '25-34' ? '58%' : '40%' }}></div></div>
                  </div>
                )}
                {cities.length > 0 && (
                  <div>
                    <p style={{ fontSize: 10, color: 'rgba(240,238,232,0.35)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Top Cities</p>
                    {cities.slice(0, 3).map((city: string, i: number) => (
                      <div key={city} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                        <span style={{ fontSize: 12, color: 'rgba(240,238,232,0.7)' }}>{city}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div className="ik-bar" style={{ width: 60 }}><div className="ik-bar-fill" style={{ width: i === 0 ? '80%' : i === 1 ? '55%' : '35%' }}></div></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {profile.follower_growth && (
                  <div style={{ marginTop: 12, padding: '8px 10px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 8 }}>
                    <span style={{ fontSize: 11, color: '#4ADE80' }}>📈 {profile.follower_growth}</span>
                  </div>
                )}
              </div>

              {/* Brand Collabs */}
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Brand Collabs</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 14 }}>
                  {brands.map((b: string) => (
                    <span key={b} className="ik-chip">{b}</span>
                  ))}
                  {brands.length === 0 && <span style={{ fontSize: 12, color: 'rgba(240,238,232,0.35)' }}>No brands listed yet</span>}
                </div>
                {profile.best_campaign && (
                  <div style={{ borderLeft: '3px solid #FF6B2B', paddingLeft: 12, background: 'rgba(255,107,43,0.05)', padding: '10px 12px', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontSize: 10, color: 'rgba(240,238,232,0.35)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Best Campaign</p>
                    <p style={{ fontSize: 12, color: 'rgba(240,238,232,0.7)', lineHeight: 1.6 }}>{profile.best_campaign}</p>
                  </div>
                )}
                {profile.awards && (
                  <div style={{ marginTop: 12, padding: '8px 10px', background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 8 }}>
                    <span style={{ fontSize: 11, color: '#FCD34D' }}>🏆 {profile.awards}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Portfolio */}
            {hasPortfolio && (
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Portfolio</p>
                {(profile.portfolio_image1 || profile.portfolio_image2) && (
                  <div style={{ display: 'grid', gridTemplateColumns: profile.portfolio_image1 && profile.portfolio_image2 ? '1fr 1fr' : '1fr', gap: 12, marginBottom: 14 }}>
                    {[profile.portfolio_image1, profile.portfolio_image2].filter(Boolean).map((url: string, i: number) => (
                      <div key={i} style={{ aspectRatio: '1', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <img src={url} alt={`Portfolio ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    ))}
                  </div>
                )}
                {(profile.portfolio_video1 || profile.portfolio_video2) && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {[profile.portfolio_video1, profile.portfolio_video2].filter(Boolean).map((url: string, i: number) => (
                      <div key={i} style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: '#0A0A0F' }}>
                        <video controls style={{ width: '100%', maxHeight: 280, display: 'block' }} preload="metadata">
                          <source src={url} />
                        </video>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Collab preferences */}
            {(profile.collab_type || profile.categories_avoid || profile.response_time) && (
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Collaboration Preferences</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                  {profile.collab_type && (
                    <div style={{ background: '#1A1A24', borderRadius: 10, padding: '12px', textAlign: 'center' }}>
                      <p style={{ fontSize: 10, color: 'rgba(240,238,232,0.35)', marginBottom: 4 }}>PREFERS</p>
                      <p style={{ fontSize: 12, color: 'rgba(240,238,232,0.8)', fontWeight: 500 }}>{profile.collab_type}</p>
                    </div>
                  )}
                  {profile.response_time && (
                    <div style={{ background: '#1A1A24', borderRadius: 10, padding: '12px', textAlign: 'center' }}>
                      <p style={{ fontSize: 10, color: 'rgba(240,238,232,0.35)', marginBottom: 4 }}>RESPONDS</p>
                      <p style={{ fontSize: 12, color: 'rgba(240,238,232,0.8)', fontWeight: 500 }}>{profile.response_time}</p>
                    </div>
                  )}
                  {profile.turnaround && (
                    <div style={{ background: '#1A1A24', borderRadius: 10, padding: '12px', textAlign: 'center' }}>
                      <p style={{ fontSize: 10, color: 'rgba(240,238,232,0.35)', marginBottom: 4 }}>DELIVERS IN</p>
                      <p style={{ fontSize: 12, color: 'rgba(240,238,232,0.8)', fontWeight: 500 }}>{profile.turnaround}</p>
                    </div>
                  )}
                </div>
                {profile.categories_avoid && (
                  <div style={{ marginTop: 12, padding: '8px 12px', background: 'rgba(255,68,68,0.06)', border: '1px solid rgba(255,68,68,0.15)', borderRadius: 8 }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,120,120,0.8)' }}>🚫 Won&apos;t work with: {profile.categories_avoid}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ══════ MEDIA KIT TAB ══════ */}
        {tab === 'mediakit' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Header card */}
            <div style={{ background: 'linear-gradient(135deg,#1a0a00,#0f1929)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '24px', overflow: 'hidden', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'radial-gradient(circle,rgba(255,107,43,0.12) 0%,transparent 70%)' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#FF6B2B', border: '2px solid rgba(255,107,43,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: 'white', overflow: 'hidden', flexShrink: 0 }}>
                  {profile.photo_url ? <img src={profile.photo_url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
                </div>
                <div>
                  <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, color: 'white', marginBottom: 3 }}>{profile.full_name}</h2>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{profile.niche} · {profile.city} · {profile.languages}</p>
                  {profile.tagline && <p style={{ fontSize: 12, color: '#FF8C5A', marginTop: 2 }}>{profile.tagline}</p>}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 18, gap: 8 }}>
                {[
                  [profile.instagram_followers || '—', 'Instagram'],
                  [profile.youtube_subscribers || '—', 'YouTube'],
                  [profile.avg_views || '—', 'Avg Views'],
                  [profile.engagement_rate || '—', 'Engagement'],
                ].map(([n, l]) => (
                  <div key={l} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 700, color: 'white' }}>{n}</div>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', marginTop: 3, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {/* Audience */}
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Audience Insights</p>
                {profile.audience_gender && (
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ fontSize: 11, color: 'rgba(240,238,232,0.5)' }}>Gender split</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(240,238,232,0.85)' }}>{profile.audience_gender}</span>
                    </div>
                    <div className="ik-bar"><div className="ik-bar-fill" style={{ width: profile.audience_gender === 'Mostly Female' ? '70%' : profile.audience_gender === 'Mostly Male' ? '70%' : '50%' }}></div></div>
                  </div>
                )}
                {profile.audience_age && (
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ fontSize: 11, color: 'rgba(240,238,232,0.5)' }}>Primary age</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#FF8C5A' }}>{profile.audience_age}</span>
                    </div>
                    <div className="ik-bar"><div className="ik-bar-fill" style={{ width: '68%' }}></div></div>
                  </div>
                )}
                {cities.length > 0 && (
                  <div>
                    <p style={{ fontSize: 10, color: 'rgba(240,238,232,0.35)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Top Cities</p>
                    {cities.slice(0, 3).map((city: string, i: number) => (
                      <div key={city} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7 }}>
                        <span style={{ fontSize: 12, color: 'rgba(240,238,232,0.7)' }}>{city}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div className="ik-bar" style={{ width: 70 }}><div className="ik-bar-fill" style={{ width: i === 0 ? '85%' : i === 1 ? '55%' : '35%' }}></div></div>
                          <span style={{ fontSize: 10, color: 'rgba(240,238,232,0.4)', width: 28, textAlign: 'right' }}>{i === 0 ? '42%' : i === 1 ? '28%' : '18%'}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {profile.follower_growth && (
                  <div style={{ marginTop: 12, padding: '8px 10px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 8 }}>
                    <span style={{ fontSize: 11, color: '#4ADE80' }}>📈 Growth: {profile.follower_growth}</span>
                  </div>
                )}
              </div>

              {/* Platform stats */}
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Platform Stats</p>
                {platformList.map((p: string) => (
                  <div key={p} className="ik-platform-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 10px', borderRadius: 8, marginBottom: 4, transition: 'background 0.15s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 16 }}>{platformIcons[p] || '📱'}</span>
                      <span style={{ fontSize: 12, color: 'rgba(240,238,232,0.75)' }}>{p}</span>
                    </div>
                    <span style={{ fontSize: 12, fontFamily: "'Syne',sans-serif", fontWeight: 700, color: 'white' }}>
                      {platformFollowers[p] || '—'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand collabs */}
            {brands.length > 0 && (
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Brand Collaborations</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: profile.best_campaign ? 16 : 0 }}>
                  {brands.map((b: string) => <span key={b} className="ik-chip">{b}</span>)}
                </div>
                {profile.best_campaign && (
                  <div style={{ borderLeft: '3px solid #FF6B2B', paddingLeft: 14, background: 'rgba(255,107,43,0.05)', padding: '12px 14px', borderRadius: '0 10px 10px 0' }}>
                    <p style={{ fontSize: 10, color: 'rgba(240,238,232,0.35)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Best Campaign</p>
                    <p style={{ fontSize: 13, color: 'rgba(240,238,232,0.8)', lineHeight: 1.7 }}>{profile.best_campaign}</p>
                  </div>
                )}
              </div>
            )}

            {/* Content offerings */}
            {rates.length > 0 && (
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Content I Offer</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {rates.map(r => (
                    <span key={r.name} style={{ background: '#1A1A24', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(240,238,232,0.75)', fontSize: 11, padding: '6px 14px', borderRadius: 99 }}>{r.icon} {r.name}</span>
                  ))}
                </div>
                {profile.turnaround && (
                  <div style={{ marginTop: 14, display: 'flex', gap: 20 }}>
                    <div>
                      <p style={{ fontSize: 10, color: 'rgba(240,238,232,0.35)', marginBottom: 2 }}>TURNAROUND</p>
                      <p style={{ fontSize: 12, color: 'rgba(240,238,232,0.8)' }}>{profile.turnaround}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 10, color: 'rgba(240,238,232,0.35)', marginBottom: 2 }}>REVISIONS</p>
                      <p style={{ fontSize: 12, color: 'rgba(240,238,232,0.8)' }}>1 free included</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Portfolio in media kit */}
            {hasPortfolio && (
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Content Samples</p>
                {(profile.portfolio_image1 || profile.portfolio_image2) && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
                    {[profile.portfolio_image1, profile.portfolio_image2].filter(Boolean).map((url: string, i: number) => (
                      <div key={i} style={{ aspectRatio: '1', borderRadius: 10, overflow: 'hidden' }}>
                        <img src={url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Contact */}
            <div className="ik-card" style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 13, color: 'rgba(240,238,232,0.6)', marginBottom: 14 }}>Interested in working together?</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
                {profile.email && (
                  <a href={`mailto:${profile.email}?subject=Collaboration Inquiry`} style={{ textDecoration: 'none' }}>
                    <button className="ik-btn" style={{ padding: '10px 20px', background: '#FF6B2B', border: 'none', borderRadius: 8, color: 'white', fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>✉️ Send Email</button>
                  </a>
                )}
                {profile.whatsapp && (
                  <a href={`https://wa.me/${profile.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="ik-btn" style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: 'rgba(240,238,232,0.8)', fontSize: 13, cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>💬 WhatsApp</button>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ══════ RATE CARD TAB ══════ */}
        {tab === 'ratecard' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Header */}
            <div style={{ background: 'linear-gradient(135deg,#1a0a00,#0f1929)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <div>
                  <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 800, color: 'white', marginBottom: 4 }}>{profile.full_name}</h2>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{profile.niche} Creator · {profile.city}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 2 }}>VALID TILL</p>
                  <p style={{ fontSize: 12, color: '#FF8C5A', fontWeight: 600 }}>{validTill}</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {[
                  profile.instagram_followers && `${profile.instagram_followers} followers`,
                  profile.engagement_rate && `${profile.engagement_rate} engagement`,
                  profile.turnaround
                ].filter(Boolean).map((t: string) => (
                  <span key={t} style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.25)', color: '#FF8C5A', fontSize: 10, padding: '3px 10px', borderRadius: 99 }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Instagram rates */}
            {igRates.length > 0 && (
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>📸 Instagram</p>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {igRates.map((r, i) => (
                      <tr key={r.name} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                        <td style={{ padding: '11px 14px', fontSize: 13, color: 'rgba(240,238,232,0.75)', borderRadius: '8px 0 0 8px' }}>{r.icon} {r.name}</td>
                        <td style={{ padding: '11px 14px', fontSize: 14, fontWeight: 700, color: '#FF6B2B', textAlign: 'right', fontFamily: "'Syne',sans-serif", borderRadius: '0 8px 8px 0' }}>₹{Number(r.price).toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* YouTube rates */}
            {ytRates.length > 0 && (
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>▶️ YouTube</p>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {ytRates.map((r, i) => (
                      <tr key={r.name} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                        <td style={{ padding: '11px 14px', fontSize: 13, color: 'rgba(240,238,232,0.75)' }}>{r.icon} {r.name}</td>
                        <td style={{ padding: '11px 14px', fontSize: 14, fontWeight: 700, color: '#FF6B2B', textAlign: 'right', fontFamily: "'Syne',sans-serif" }}>₹{Number(r.price).toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Other rates */}
            {otherRates.length > 0 && (
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>🌐 Other Platforms</p>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {otherRates.map((r, i) => (
                      <tr key={r.name} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                        <td style={{ padding: '11px 14px', fontSize: 13, color: 'rgba(240,238,232,0.75)' }}>{r.icon} {r.name}</td>
                        <td style={{ padding: '11px 14px', fontSize: 14, fontWeight: 700, color: '#FF6B2B', textAlign: 'right', fontFamily: "'Syne',sans-serif" }}>₹{Number(r.price).toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Custom bundle */}
            {profile.custom_package && (
              <div style={{ background: 'rgba(255,107,43,0.08)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 14, padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#FF8C5A', marginBottom: 4 }}>🎁 Custom Bundle</p>
                  <p style={{ fontSize: 13, color: 'rgba(240,238,232,0.7)' }}>{profile.custom_package}</p>
                </div>
              </div>
            )}

            {/* Terms */}
            <div className="ik-card">
              <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Terms & Conditions</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  '💰 50% advance payment required before content creation begins',
                  '🔄 1 free revision included per deliverable. Additional revisions charged separately',
                  '📋 All prices exclusive of 18% GST. GST invoice will be provided',
                  `⏱️ Standard turnaround: ${profile.turnaround || '5-7 business days'}. Rush delivery available at premium`,
                  '📸 Usage rights: Content licensed for brand use for 6 months post-delivery',
                  '🚫 Exclusivity: Available at 25% premium on base rate',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                    <span style={{ fontSize: 12, color: 'rgba(240,238,232,0.5)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="ik-card" style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 13, color: 'rgba(240,238,232,0.5)', marginBottom: 14 }}>Ready to discuss a collaboration?</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
                {profile.email && (
                  <a href={`mailto:${profile.email}?subject=Rate Card Inquiry`} style={{ textDecoration: 'none' }}>
                    <button className="ik-btn" style={{ padding: '10px 20px', background: '#FF6B2B', border: 'none', borderRadius: 8, color: 'white', fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>✉️ Discuss Rates</button>
                  </a>
                )}
                {profile.whatsapp && (
                  <a href={`https://wa.me/${profile.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="ik-btn" style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: 'rgba(240,238,232,0.8)', fontSize: 13, cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>💬 WhatsApp</button>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ══════ CV TAB ══════ */}
        {tab === 'cv' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* CV Header */}
            <div style={{ background: 'linear-gradient(135deg,#1a0a00,#0f1929)', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,107,43,0.2)' }}>
              <div style={{ background: 'linear-gradient(135deg,#FF6B2B,#FF4500)', padding: '24px 28px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: '3px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 22, color: 'white', overflow: 'hidden', flexShrink: 0 }}>
                    {profile.photo_url ? <img src={profile.photo_url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
                  </div>
                  <div>
                    <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, color: 'white', marginBottom: 4, lineHeight: 1.1 }}>{profile.full_name}</h2>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginBottom: 6 }}>{profile.tagline || `${profile.niche} Creator · ${profile.city}`}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                      {[profile.city, profile.languages, profile.email].filter(Boolean).map((m: string) => (
                        <span key={m} style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>• {m}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Stats strip */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', background: 'rgba(255,107,43,0.5)' }}>
                {[
                  [profile.instagram_followers || '—', 'Followers'],
                  [profile.avg_views || '—', 'Avg Views'],
                  [profile.engagement_rate || '—', 'Engagement'],
                  [brands.length > 0 ? `${brands.length}+` : '—', 'Brands']
                ].map(([n, l], i) => (
                  <div key={l} style={{ padding: '12px 8px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 700, color: 'white' }}>{n}</div>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.65)', marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio */}
            {profile.bio && (
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>Professional Summary</p>
                <p style={{ fontSize: 13, color: 'rgba(240,238,232,0.7)', lineHeight: 1.85 }}>{profile.bio}</p>
              </div>
            )}

            {/* Platform presence */}
            {platformList.length > 0 && (
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Platform Presence</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {platformList.map((p: string) => (
                    <div key={p} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 12px', background: '#1A1A24', borderRadius: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: 16 }}>{platformIcons[p] || '📱'}</span>
                        <span style={{ fontSize: 13, color: 'rgba(240,238,232,0.8)' }}>{p}</span>
                        {platformHandles[p] && <a href={platformHandles[p]} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: '#FF6B2B', textDecoration: 'none' }}>↗</a>}
                      </div>
                      <span style={{ fontSize: 13, fontFamily: "'Syne',sans-serif", fontWeight: 700, color: 'white' }}>{platformFollowers[p] || '—'}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Brand collabs */}
            {brands.length > 0 && (
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>Brand Collaborations</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 14 }}>
                  {brands.map((b: string) => <span key={b} className="ik-chip">{b}</span>)}
                </div>
                {profile.best_campaign && (
                  <div style={{ borderLeft: '3px solid #FF6B2B', paddingLeft: 12, background: 'rgba(255,107,43,0.05)', padding: '10px 14px', borderRadius: '0 10px 10px 0' }}>
                    <p style={{ fontSize: 10, color: 'rgba(240,238,232,0.35)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Campaign Highlight</p>
                    <p style={{ fontSize: 12, color: 'rgba(240,238,232,0.75)', lineHeight: 1.7 }}>{profile.best_campaign}</p>
                  </div>
                )}
              </div>
            )}

            {/* Awards */}
            {profile.awards && (
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>Awards & Recognition</p>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 20 }}>🏆</span>
                  <p style={{ fontSize: 13, color: 'rgba(240,238,232,0.75)', lineHeight: 1.7 }}>{profile.awards}</p>
                </div>
              </div>
            )}

            {/* Skills */}
            {skillsList.length > 0 && (
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>Skills & Tools</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {skillsList.map((s: string) => (
                    <span key={s} style={{ background: '#1A1A24', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(240,238,232,0.7)', fontSize: 12, padding: '5px 14px', borderRadius: 99 }}>⚡ {s}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Content style */}
            {profile.vibe && (
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>Content Style</p>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.25)', color: '#FF8C5A', fontSize: 13, padding: '6px 16px', borderRadius: 99, fontWeight: 500 }}>{profile.vibe}</span>
                  {profile.languages && <span style={{ fontSize: 12, color: 'rgba(240,238,232,0.5)' }}>Creates in {profile.languages}</span>}
                </div>
              </div>
            )}

            {/* What I offer */}
            {rates.length > 0 && (
              <div className="ik-card">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>What I Offer Brands</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {rates.slice(0, 6).map(r => (
                    <div key={r.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, padding: '8px 12px', background: '#1A1A24', borderRadius: 8 }}>
                      <span style={{ color: 'rgba(240,238,232,0.75)' }}>{r.icon} {r.name}</span>
                      <span style={{ color: '#FF6B2B', fontWeight: 700, fontFamily: "'Syne',sans-serif" }}>₹{Number(r.price).toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>
                {profile.turnaround && (
                  <div style={{ marginTop: 12, padding: '8px 12px', background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 8 }}>
                    <span style={{ fontSize: 11, color: '#FF8C5A' }}>⏱️ Turnaround: {profile.turnaround} · 1 free revision included</span>
                  </div>
                )}
              </div>
            )}

            {/* Contact */}
            <div className="ik-card">
              <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Contact</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {profile.email && (
                  <a href={`mailto:${profile.email}`} style={{ textDecoration: 'none' }}>
                    <button className="ik-btn" style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 16px', background: '#1A1A24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: 'rgba(240,238,232,0.8)', cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, transition: 'all 0.2s' }}>✉️ {profile.email}</button>
                  </a>
                )}
                {profile.whatsapp && (
                  <a href={`https://wa.me/${profile.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="ik-btn" style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 16px', background: '#1A1A24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: 'rgba(240,238,232,0.8)', cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, transition: 'all 0.2s' }}>💬 WhatsApp</button>
                  </a>
                )}
                {profile.instagram_handle && (
                  <a href={`https://instagram.com/${profile.instagram_handle.replace('@','')}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="ik-btn" style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 16px', background: '#1A1A24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: 'rgba(240,238,232,0.8)', cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, transition: 'all 0.2s' }}>📸 {profile.instagram_handle}</button>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div style={{ textAlign: 'center', padding: '20px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{ fontSize: 11, color: 'rgba(240,238,232,0.25)' }}>
          Powered by <a href="https://identitykit.in" style={{ color: '#FF6B2B', textDecoration: 'none', fontWeight: 600 }}>Identity Kit</a> · India&apos;s creator profile platform
        </p>
      </div>
    </div>
  )
}
