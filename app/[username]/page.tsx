'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

const TABS = [
  { id: 'profile', label: 'Profile' },
  { id: 'mediakit', label: 'Media Kit' },
  { id: 'ratecard', label: 'Rate Card' },
  { id: 'cv', label: 'CV' },
]

export default function PublicProfile() {
  const params = useParams()
  const username = params.username as string
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('profile')
  const [copied, setCopied] = useState(false)
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('profiles').select('*').eq('username', username).single()
      setProfile(data)
      if (data) await supabase.from('profiles').update({ view_count: (data.view_count || 0) + 1 }).eq('username', username)
      setLoading(false)
    }
    load()
  }, [username])

  function copyLink() {
    navigator.clipboard.writeText(`https://identitykit.in/${username}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function shareWhatsApp() {
    window.open(`https://wa.me/?text=${encodeURIComponent(`Check out my creator profile! 🔥\nhttps://identitykit.in/${username}`)}`, '_blank')
  }

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#08080E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 36, height: 36, border: '2px solid #1a1a28', borderTopColor: '#FF6B2B', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }}></div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )

  if (!profile) return (
    <div style={{ minHeight: '100vh', background: '#08080E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
      <div style={{ fontSize: 44 }}>🔍</div>
      <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, color: '#fff' }}>Profile not found</h2>
      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>identitykit.in/{username} doesn&apos;t exist.</p>
    </div>
  )

  const brands = profile.brands_worked?.split(',').map((b: string) => b.trim()).filter(Boolean) || []
  const platformList = profile.platforms?.split(',').map((p: string) => p.trim()).filter(Boolean) || []
  const cities = profile.top_cities?.split(',').map((c: string) => c.trim()).filter(Boolean) || []
  const skillsList = profile.skills?.split(',').map((s: string) => s.trim()).filter(Boolean) || []
  const initials = profile.full_name?.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()
  const igHandle = profile.instagram_handle?.replace('@', '')
  const ytHandle = profile.youtube_channel
  const now = new Date()
  const validTill = `${now.toLocaleString('default', { month: 'long' })} ${now.getFullYear() + 1}`

  const allRates = [
    { name: 'Dedicated Reel', desc: '60 sec · 3–5 days · 2 revisions', price: profile.rate_reel, cat: 'ig', icon: 'ti-brand-instagram', color: '#e1306c' },
    { name: 'Static Post', desc: '1 post · caption included', price: profile.rate_post, cat: 'ig', icon: 'ti-photo', color: '#e1306c' },
    { name: 'Carousel', desc: '5–8 slides · 2 revisions', price: profile.rate_carousel, cat: 'ig', icon: 'ti-layout-grid', color: '#e1306c' },
    { name: 'Stories Pack', desc: '3 slides · link in bio', price: profile.rate_stories, cat: 'ig', icon: 'ti-circle-dashed', color: '#e1306c' },
    { name: 'Story + Link', desc: 'Swipe-up story', price: profile.rate_story_link, cat: 'ig', icon: 'ti-link', color: '#e1306c' },
    { name: 'Dedicated Video', desc: '8–15 min · 5–7 days', price: profile.rate_yt_dedicated, cat: 'yt', icon: 'ti-brand-youtube', color: '#ff0000' },
    { name: 'Integration', desc: '60–90 sec in existing video', price: profile.rate_yt_integration, cat: 'yt', icon: 'ti-player-play', color: '#ff0000' },
    { name: 'YouTube Short', desc: '60 sec · 3–5 days', price: profile.rate_yt_short, cat: 'yt', icon: 'ti-device-mobile-rotated', color: '#ff0000' },
    { name: 'Twitter Thread', desc: 'Full thread with visuals', price: profile.rate_twitter, cat: 'other', icon: 'ti-brand-twitter', color: '#1da1f2' },
    { name: 'LinkedIn Post', desc: 'Professional post', price: profile.rate_linkedin, cat: 'other', icon: 'ti-brand-linkedin', color: '#0077b5' },
    { name: 'Blog Post', desc: 'Long-form article', price: profile.rate_blog, cat: 'other', icon: 'ti-file-text', color: '#FF6B2B' },
    { name: 'Podcast Mention', desc: 'Dedicated mention', price: profile.rate_podcast, cat: 'other', icon: 'ti-microphone', color: '#a855f7' },
  ].filter(r => r.price)

  const igRates = allRates.filter(r => r.cat === 'ig')
  const ytRates = allRates.filter(r => r.cat === 'yt')
  const otherRates = allRates.filter(r => r.cat === 'other')

  const portfolioItems = [
    profile.portfolio_video1 && { type: 'video', url: profile.portfolio_video1 },
    profile.portfolio_video2 && { type: 'video', url: profile.portfolio_video2 },
    profile.portfolio_image1 && { type: 'image', url: profile.portfolio_image1 },
    profile.portfolio_image2 && { type: 'image', url: profile.portfolio_image2 },
  ].filter(Boolean) as { type: string; url: string }[]

  const platConfig: Record<string, { icon: string; color: string; bg: string }> = {
    'Instagram': { icon: 'ti-brand-instagram', color: '#e1306c', bg: '#e1306c15' },
    'YouTube': { icon: 'ti-brand-youtube', color: '#ff0000', bg: '#ff000015' },
    'LinkedIn': { icon: 'ti-brand-linkedin', color: '#0077b5', bg: '#0077b515' },
    'Twitter / X': { icon: 'ti-brand-twitter', color: '#1da1f2', bg: '#1da1f215' },
    'Podcast': { icon: 'ti-microphone', color: '#a855f7', bg: '#a855f715' },
    'Blog': { icon: 'ti-file-text', color: '#FF6B2B', bg: '#FF6B2B15' },
  }

  const S = {
    card: { background: '#111120', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16 } as React.CSSProperties,
    sectionTitle: { fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' as const, letterSpacing: '0.14em', marginBottom: 14 },
    orangeAccent: { color: '#FF6B2B' },
    chip: { fontSize: 11, padding: '4px 12px', borderRadius: 99, border: '1px solid rgba(255,107,43,0.3)', color: '#FF8C5A', background: 'rgba(255,107,43,0.08)' } as React.CSSProperties,
    brandPill: { fontSize: 12, padding: '5px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', background: '#1a1a2a' } as React.CSSProperties,
  }

  function RateTable({ rates }: { rates: typeof allRates }) {
    return (
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          {rates.map((r, i) => (
            <tr key={r.name} style={{ borderBottom: i < rates.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
              <td style={{ padding: '11px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 7, background: `${r.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`ti ${r.icon}`} style={{ fontSize: 13, color: r.color }}></i>
                  </div>
                  <div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{r.name}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginTop: 1 }}>{r.desc}</div>
                  </div>
                </div>
              </td>
              <td style={{ padding: '11px 0', textAlign: 'right', fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, color: '#FF6B2B', whiteSpace: 'nowrap' }}>
                ₹{Number(r.price).toLocaleString('en-IN')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  return (
    <div style={{ background: '#08080E', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes scaleIn{from{opacity:0;transform:scale(0.97)}to{opacity:1;transform:scale(1)}}
        .ik-bento:hover{border-color:rgba(255,107,43,0.18)!important;transform:translateY(-1px)}
        .ik-tab:hover{color:rgba(255,255,255,0.7)!important}
        .ik-share:hover{opacity:0.8}
        .ik-port:hover .ik-port-overlay{opacity:1!important}
        .ik-lightbox{position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1000;display:flex;align-items:center;justify-content:center;animation:fadeUp 0.15s ease}
      `}</style>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="ik-lightbox" onClick={() => setLightbox(null)}>
          {lightbox.match(/\.(mp4|mov|webm)/i)
            ? <video src={lightbox} controls autoPlay style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 12 }} onClick={e => e.stopPropagation()} />
            : <img src={lightbox} alt="" style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 12, objectFit: 'contain' }} onClick={e => e.stopPropagation()} />
          }
          <button onClick={() => setLightbox(null)} style={{ position: 'fixed', top: 20, right: 20, width: 40, height: 40, background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', color: '#fff', fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="ti ti-x"></i>
          </button>
        </div>
      )}

      {/* BANNER + AVATAR — banner is taller to contain avatar overlap */}
      <div style={{ background: '#0e0e1c', position: 'relative', paddingBottom: 52 }}>
        {/* Banner visual area */}
        <div style={{ height: 120, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 30px,rgba(255,107,43,0.06) 30px,rgba(255,107,43,0.06) 31px),repeating-linear-gradient(90deg,transparent,transparent 30px,rgba(255,107,43,0.06) 30px,rgba(255,107,43,0.06) 31px)' }}></div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 400, height: 200, background: 'radial-gradient(ellipse,rgba(255,107,43,0.1) 0%,transparent 70%)', pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: 10, right: 16, fontFamily: "'Syne',sans-serif", fontSize: 9, color: 'rgba(255,107,43,0.2)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Identity Kit</div>
        </div>
        {/* Avatar sits below banner line, positioned from top of outer div */}
        <div style={{ position: 'absolute', bottom: 0, left: 16 }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <div style={{ width: 88, height: 88, borderRadius: '50%', border: '4px solid #07070D', outline: '3px solid #FF6B2B', background: '#1e1e2e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, color: '#FF6B2B', overflow: 'hidden' }}>
              {profile.photo_url ? <img src={profile.photo_url} alt={profile.full_name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
            </div>
            <div style={{ position: 'absolute', bottom: 5, right: 5, width: 14, height: 14, borderRadius: '50%', background: '#22c55e', border: '2px solid #07070D' }}></div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 16px 48px', overflowX: 'hidden' }}>

        {/* SHARE BUTTONS ROW */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: -40, marginBottom: 48 }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <button onClick={copyLink} className="ik-share" style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '7px 12px', background: copied ? 'rgba(34,197,94,0.12)' : '#111120', border: `1px solid ${copied ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.07)'}`, borderRadius: 10, color: copied ? '#22c55e' : 'rgba(255,255,255,0.4)', fontSize: 11, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s' }}>
              <i className={`ti ${copied ? 'ti-check' : 'ti-link'}`} style={{ fontSize: 13 }}></i>{copied ? 'Copied!' : 'Copy link'}
            </button>
            <button onClick={shareWhatsApp} className="ik-share" style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '7px 12px', background: '#111120', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, color: 'rgba(255,255,255,0.4)', fontSize: 11, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s' }}>
              <i className="ti ti-brand-whatsapp" style={{ fontSize: 13, color: '#22c55e' }}></i>Share
            </button>
          </div>
        </div>

        {/* NAME */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
          <div>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(20px,5.5vw,24px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 3 }}>{profile.full_name}</h1>
            <div style={{ fontSize: 11, color: '#FF6B2B' }}>identitykit.in/{profile.username}</div>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(34,197,94,0.08)', color: '#22c55e', fontSize: 11, fontWeight: 600, padding: '5px 12px', borderRadius: 99, border: '1px solid rgba(34,197,94,0.2)' }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e' }}></div>Open for collabs
          </div>
        </div>

        {/* META */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
          {[profile.city && { icon: 'ti-map-pin', text: profile.city }, profile.languages && { icon: 'ti-language', text: profile.languages }, profile.niche && { icon: 'ti-category', text: profile.niche }].filter(Boolean).map((m: any) => (
            <span key={m.text} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>
              <i className={`ti ${m.icon}`} style={{ fontSize: 12 }}></i>{m.text}
            </span>
          ))}
        </div>

        {/* BIO */}
        {profile.bio && <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 18, wordBreak: 'break-word' }}>{profile.bio}</p>}

        {/* ─── BENTO STATS GRID ─── */}
        <div className="ik-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 8 }}>
          {[
            { val: profile.instagram_followers || profile.youtube_subscribers || '—', label: 'Followers', icon: 'ti-users' },
            { val: profile.avg_views || '—', label: 'Avg Views', icon: 'ti-eye' },
            { val: profile.engagement_rate || '—', label: 'Engagement', icon: 'ti-chart-bar' },
            { val: brands.length > 0 ? `${brands.length}+` : '—', label: 'Brands', icon: 'ti-building-store' },
          ].map(s => (
            <div key={s.label} className="ik-bento" style={{ ...S.card, padding: '14px 12px', textAlign: 'center', transition: 'all 0.2s' }}>
              <i className={`ti ${s.icon}`} style={{ fontSize: 14, color: 'rgba(255,107,43,0.5)', display: 'block', marginBottom: 6 }}></i>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(13px,3.5vw,18px)', fontWeight: 800, color: '#FF6B2B', marginBottom: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.val}</div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.06em', overflow: 'hidden' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ─── TABS ─── */}
        <div className="ik-tabs" style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: 20, marginTop: 20 }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} className="ik-tab ik-tab-btn" style={{ padding: '11px 16px', background: 'none', border: 'none', borderBottom: tab === t.id ? '2px solid #FF6B2B' : '2px solid transparent', color: tab === t.id ? '#FF6B2B' : 'rgba(255,255,255,0.3)', fontSize: 12, fontWeight: tab === t.id ? 700 : 500, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.15s', marginBottom: -1 }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* ════ PROFILE TAB ════ */}
        {tab === 'profile' && (
          <div style={{ animation: 'fadeUp 0.2s ease' }}>

            {/* BENTO ROW 1 — Platforms + Audience */}
            {(platformList.length > 0 || profile.audience_age) && (
              <div className='ik-bento-row' style={{ display: 'grid', gridTemplateColumns: platformList.length > 0 && profile.audience_age ? '1fr 1fr' : '1fr', gap: 8, marginBottom: 8 }}>
                {/* Platforms bento */}
                {platformList.length > 0 && (
                  <div className="ik-bento" style={{ ...S.card, padding: '18px 16px', transition: 'all 0.2s' }}>
                    <div style={S.sectionTitle}>Platforms</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {platformList.map((p: string) => {
                        const cfg = platConfig[p] || { icon: 'ti-device-mobile', color: '#FF6B2B', bg: '#FF6B2B15' }
                        const followers = p === 'Instagram' ? profile.instagram_followers : p === 'YouTube' ? profile.youtube_subscribers : null
                        const handle = p === 'Instagram' ? (igHandle ? `@${igHandle}` : '') : p === 'YouTube' ? ytHandle : ''
                        const link = p === 'Instagram' && igHandle ? `https://instagram.com/${igHandle}` : p === 'YouTube' && ytHandle ? `https://youtube.com/@${ytHandle}` : ''
                        return (
                          <div key={p} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                              <div style={{ width: 32, height: 32, borderRadius: 9, background: cfg.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <i className={`ti ${cfg.icon}`} style={{ fontSize: 15, color: cfg.color }}></i>
                              </div>
                              <div>
                                <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{p}</div>
                                {handle && <a href={link || '#'} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>{handle}</a>}
                              </div>
                            </div>
                            {followers && <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 700, color: '#FF6B2B' }}>{followers}</span>}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Audience bento */}
                {profile.audience_age && (
                  <div className="ik-bento" style={{ ...S.card, padding: '18px 16px', transition: 'all 0.2s' }}>
                    <div style={S.sectionTitle}>Audience</div>
                    {profile.audience_gender && (
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(255,107,43,0.08)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 99, padding: '3px 10px', marginBottom: 12 }}>
                        <i className="ti ti-gender-bigender" style={{ fontSize: 11, color: '#FF8C5A' }}></i>
                        <span style={{ fontSize: 11, color: '#FF8C5A' }}>{profile.audience_gender}</span>
                      </div>
                    )}
                    <div style={{ marginBottom: 12 }}>
                      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 7 }}>Age group</div>
                      {[['13–17', 6], ['18–24', profile.audience_age === '18-24' ? 66 : 18], ['25–34', profile.audience_age === '25-34' ? 66 : 20], ['35+', profile.audience_age === '35+' ? 66 : 8]].map(([l, p]) => (
                        <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 5 }}>
                          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', minWidth: 36 }}>{l}</span>
                          <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.05)', borderRadius: 99 }}><div style={{ height: 4, background: 'linear-gradient(90deg,#FF6B2B,#FF8C5A)', borderRadius: 99, width: `${p}%`, transition: 'width 0.6s ease' }}></div></div>
                          <span style={{ fontSize: 10, color: '#FF6B2B', minWidth: 24, textAlign: 'right' }}>{p}%</span>
                        </div>
                      ))}
                    </div>
                    {cities.length > 0 && (
                      <div>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 7 }}>Top cities</div>
                        {cities.slice(0, 3).map((city: string, i: number) => {
                          const pct = i === 0 ? 44 : i === 1 ? 30 : 19
                          return (
                            <div key={city} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 5 }}>
                              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', minWidth: 48, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{city}</span>
                              <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.05)', borderRadius: 99 }}><div style={{ height: 4, background: 'linear-gradient(90deg,#FF6B2B,#FF8C5A)', borderRadius: 99, width: `${pct}%` }}></div></div>
                              <span style={{ fontSize: 10, color: '#FF6B2B', minWidth: 24, textAlign: 'right' }}>{pct}%</span>
                            </div>
                          )
                        })}
                      </div>
                    )}
                    {profile.follower_growth && (
                      <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#22c55e' }}>
                        <i className="ti ti-trending-up" style={{ fontSize: 12 }}></i>{profile.follower_growth}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* BENTO ROW 2 — Brands + Best campaign */}
            {brands.length > 0 && (
              <div className="ik-bento" style={{ ...S.card, padding: '18px 16px', marginBottom: 8, transition: 'all 0.2s' }}>
                <div style={S.sectionTitle}>Brands worked with</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: profile.best_campaign ? 14 : 0 }}>
                  {brands.map((b: string) => <span key={b} style={S.brandPill}>{b}</span>)}
                </div>
                {profile.best_campaign && (
                  <div style={{ borderLeft: '2px solid #FF6B2B', paddingLeft: 12, background: 'rgba(255,107,43,0.04)', padding: '10px 14px', borderRadius: '0 10px 10px 0' }}>
                    <div style={{ fontSize: 9, color: '#FF6B2B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 4 }}>Campaign highlight</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>{profile.best_campaign}</div>
                  </div>
                )}
                {profile.awards && (
                  <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 7, padding: '8px 12px', background: 'rgba(234,179,8,0.07)', border: '1px solid rgba(234,179,8,0.18)', borderRadius: 10 }}>
                    <i className="ti ti-award" style={{ fontSize: 14, color: '#FCD34D' }}></i>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{profile.awards}</span>
                  </div>
                )}
              </div>
            )}

            {/* PORTFOLIO — full width, click to expand */}
            {portfolioItems.length > 0 && (
              <div className="ik-bento" style={{ ...S.card, padding: '18px 16px', marginBottom: 8, transition: 'all 0.2s' }}>
                <div style={S.sectionTitle}>My work <span style={{ color: 'rgba(255,255,255,0.2)', fontWeight: 400, fontSize: 9 }}>— tap to expand</span></div>
                <div style={{ display: 'grid', gridTemplateColumns: portfolioItems.length === 1 ? '1fr' : '1fr 1fr', gap: 8 }}>
                  {portfolioItems.map((item, i) => (
                    <div key={i} className="ik-port" onClick={() => setLightbox(item.url)} style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', cursor: 'pointer', background: '#0e0e1e', aspectRatio: item.type === 'video' ? '16/9' : '1' }}>
                      {item.type === 'video'
                        ? <>
                            <video src={item.url} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} muted preload="metadata" />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.5),transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,107,43,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(255,107,43,0.4)' }}>
                                <i className="ti ti-player-play" style={{ fontSize: 18, color: '#fff', marginLeft: 2 }}></i>
                              </div>
                            </div>
                          </>
                        : <img src={item.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      }
                      <div className="ik-port-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(255,107,43,0.15)', opacity: 0, transition: 'opacity 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="ti ti-maximize" style={{ fontSize: 22, color: '#fff' }}></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Content vibe + skills */}
            {(profile.vibe || skillsList.length > 0) && (
              <div className="ik-bento" style={{ ...S.card, padding: '18px 16px', marginBottom: 8, transition: 'all 0.2s' }}>
                {profile.vibe && (
                  <div style={{ marginBottom: skillsList.length > 0 ? 14 : 0 }}>
                    <div style={S.sectionTitle}>Content style</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {[profile.niche, profile.vibe].filter(Boolean).map((v: string) => <span key={v} style={S.chip}>{v}</span>)}
                    </div>
                  </div>
                )}
                {skillsList.length > 0 && (
                  <div>
                    <div style={S.sectionTitle}>Skills &amp; tools</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {skillsList.map((s: string) => <span key={s} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 99, border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.03)' }}>{s}</span>)}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Collab prefs */}
            {(profile.collab_type || profile.response_time || profile.turnaround) && (
              <div className="ik-bento" style={{ ...S.card, padding: '18px 16px', marginBottom: 8, transition: 'all 0.2s' }}>
                <div style={S.sectionTitle}>Collab preferences</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                  {[
                    profile.collab_type && { label: 'Prefers', val: profile.collab_type },
                    profile.response_time && { label: 'Responds', val: profile.response_time },
                    profile.turnaround && { label: 'Delivers', val: profile.turnaround },
                  ].filter(Boolean).map((item: any) => (
                    <div key={item.label} style={{ background: '#0e0e1e', borderRadius: 10, padding: '10px 12px', textAlign: 'center' }}>
                      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{item.val}</div>
                    </div>
                  ))}
                </div>
                {profile.categories_avoid && (
                  <div style={{ marginTop: 10, padding: '8px 12px', background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: 8 }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,120,120,0.7)' }}><i className="ti ti-ban" style={{ marginRight: 5 }}></i>Won&apos;t work with: {profile.categories_avoid}</span>
                  </div>
                )}
              </div>
            )}

            {/* Contact */}
            <div className="ik-bento" style={{ ...S.card, padding: '18px 16px', transition: 'all 0.2s' }}>
              <div style={S.sectionTitle}>Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  profile.email && { icon: 'ti-mail', label: 'Email', val: profile.email, href: `mailto:${profile.email}` },
                  profile.whatsapp && { icon: 'ti-brand-whatsapp', label: 'WhatsApp', val: profile.whatsapp, href: `https://wa.me/${profile.whatsapp.replace(/\D/g, '')}` },
                  igHandle && { icon: 'ti-brand-instagram', label: 'Instagram', val: `@${igHandle}`, href: `https://instagram.com/${igHandle}` },
                  profile.response_time && { icon: 'ti-clock', label: 'Response time', val: profile.response_time, href: null },
                ].filter(Boolean).map((item: any, i: number, arr: any[]) => (
                  <div key={item.label}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0' }}>
                      <div style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(255,107,43,0.08)', border: '1px solid rgba(255,107,43,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className={`ti ${item.icon}`} style={{ fontSize: 15, color: '#FF6B2B' }}></i>
                      </div>
                      <div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', marginBottom: 2 }}>{item.label}</div>
                        {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 500, textDecoration: 'none' }}>{item.val}</a>
                          : <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{item.val}</div>}
                      </div>
                    </div>
                    {i < arr.length - 1 && <div style={{ height: 1, background: 'rgba(255,255,255,0.04)' }}></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ════ MEDIA KIT TAB ════ */}
        {tab === 'mediakit' && (
          <div style={{ animation: 'fadeUp 0.2s ease', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* Header */}
            <div style={{ background: 'linear-gradient(135deg,#1a0800,#0e0e1c)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 16, padding: '20px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 180, height: 180, background: 'radial-gradient(circle,rgba(255,107,43,0.1) 0%,transparent 70%)', pointerEvents: 'none' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid #FF6B2B', background: '#1e1e2e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 800, color: '#FF6B2B', overflow: 'hidden', flexShrink: 0 }}>
                  {profile.photo_url ? <img src={profile.photo_url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
                </div>
                <div>
                  <div style={{ fontSize: 9, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', fontWeight: 700, marginBottom: 3 }}>Media Kit</div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 2 }}>{profile.full_name}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{profile.niche} · {profile.city} · {profile.languages}</div>
                </div>
              </div>
              <div className='ik-mk-stats' style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 16, gap: 4 }}>
                {[
                  [profile.instagram_followers || '—', 'Instagram'],
                  [profile.youtube_subscribers || '—', 'YouTube'],
                  [profile.avg_views || '—', 'Avg Views'],
                  [profile.engagement_rate || '—', 'Engagement'],
                ].map(([n, l]) => (
                  <div key={l} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 800, color: '#FF6B2B' }}>{n}</div>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform + Audience bento row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }} className="ik-aud-grid">
              <div style={{ ...S.card, padding: '16px' }}>
                <div style={S.sectionTitle}>Platform breakdown</div>
                {platformList.map((p: string) => {
                  const cfg = platConfig[p] || { icon: 'ti-device-mobile', color: '#FF6B2B', bg: '#FF6B2B15' }
                  const followers = p === 'Instagram' ? profile.instagram_followers : p === 'YouTube' ? profile.youtube_subscribers : null
                  const stat2 = p === 'Instagram' ? profile.engagement_rate : p === 'YouTube' ? profile.avg_views : null
                  const stat2label = p === 'Instagram' ? 'eng' : 'views'
                  return (
                    <div key={p} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 28, height: 28, borderRadius: 7, background: cfg.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={`ti ${cfg.icon}`} style={{ fontSize: 13, color: cfg.color }}></i>
                        </div>
                        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{p}</span>
                      </div>
                      <div style={{ display: 'flex', gap: 10 }}>
                        {followers && <div style={{ textAlign: 'right' }}><div style={{ fontSize: 12, fontWeight: 700, color: '#FF6B2B', fontFamily: "'Syne',sans-serif" }}>{followers}</div><div style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)' }}>followers</div></div>}
                        {stat2 && <div style={{ textAlign: 'right' }}><div style={{ fontSize: 12, fontWeight: 700, color: '#FF6B2B', fontFamily: "'Syne',sans-serif" }}>{stat2}</div><div style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)' }}>{stat2label}</div></div>}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div style={{ ...S.card, padding: '16px' }}>
                <div style={S.sectionTitle}>Audience insights</div>
                {profile.audience_age && (
                  <>
                    {[['18–24', profile.audience_age === '18-24' ? 66 : 18], ['25–34', profile.audience_age === '25-34' ? 66 : 20], ['35+', profile.audience_age === '35+' ? 66 : 8]].map(([l, p]) => (
                      <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6 }}>
                        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', minWidth: 36 }}>{l}</span>
                        <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.05)', borderRadius: 99 }}><div style={{ height: 4, background: 'linear-gradient(90deg,#FF6B2B,#FF8C5A)', borderRadius: 99, width: `${p}%` }}></div></div>
                        <span style={{ fontSize: 10, color: '#FF6B2B', minWidth: 24, textAlign: 'right' }}>{p}%</span>
                      </div>
                    ))}
                    <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', margin: '10px 0' }}></div>
                  </>
                )}
                {cities.slice(0, 3).map((city: string, i: number) => {
                  const pct = i === 0 ? 44 : i === 1 ? 30 : 19
                  return (
                    <div key={city} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 5 }}>
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', minWidth: 48, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{city}</span>
                      <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.05)', borderRadius: 99 }}><div style={{ height: 4, background: 'linear-gradient(90deg,#FF6B2B,#FF8C5A)', borderRadius: 99, width: `${pct}%` }}></div></div>
                      <span style={{ fontSize: 10, color: '#FF6B2B', minWidth: 24, textAlign: 'right' }}>{pct}%</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Content types */}
            <div style={{ ...S.card, padding: '16px' }}>
              <div style={S.sectionTitle}>Content I create</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                {[{ icon: 'ti-video', label: 'Reels & Shorts', color: '#e1306c' }, { icon: 'ti-photo', label: 'Static Posts', color: '#FF6B2B' }, { icon: 'ti-layout-grid', label: 'Carousels', color: '#a855f7' }, { icon: 'ti-brand-youtube', label: 'YouTube Videos', color: '#ff0000' }, { icon: 'ti-messages', label: 'Stories', color: '#22c55e' }, { icon: 'ti-speakerphone', label: 'Integrations', color: '#3b82f6' }].map(c => (
                  <div key={c.label} style={{ background: '#0e0e1e', borderRadius: 10, padding: '12px', textAlign: 'center' }}>
                    <i className={`ti ${c.icon}`} style={{ fontSize: 22, color: c.color, display: 'block', marginBottom: 6 }}></i>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand collabs */}
            {brands.length > 0 && (
              <div style={{ ...S.card, padding: '16px' }}>
                <div style={S.sectionTitle}>Past brand collaborations</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: profile.best_campaign ? 14 : 0 }}>
                  {brands.map((b: string) => <span key={b} style={S.brandPill}>{b}</span>)}
                </div>
                {profile.best_campaign && (
                  <div style={{ borderLeft: '2px solid #FF6B2B', paddingLeft: 12, background: 'rgba(255,107,43,0.04)', padding: '10px 14px', borderRadius: '0 10px 10px 0' }}>
                    <div style={{ fontSize: 9, color: '#FF6B2B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 4 }}>Campaign highlight</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{profile.best_campaign}</div>
                  </div>
                )}
              </div>
            )}

            {/* Packages */}
            {allRates.length > 0 && (
              <div style={{ ...S.card, padding: '16px' }}>
                <div style={S.sectionTitle}>Packages</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {allRates.slice(0, 3).map(r => (
                    <div key={r.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0e0e1e', borderRadius: 10, padding: '12px 14px' }}>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>{r.name}</div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginTop: 2 }}>{r.desc}</div>
                      </div>
                      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, color: '#FF6B2B', flexShrink: 0, marginLeft: 12 }}>₹{Number(r.price).toLocaleString('en-IN')}</div>
                    </div>
                  ))}
                  {profile.custom_package && (
                    <div style={{ background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 10, padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div><div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Full Bundle</div><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{profile.custom_package}</div></div>
                      <span style={{ fontSize: 11, background: 'rgba(255,107,43,0.15)', color: '#FF8C5A', padding: '3px 10px', borderRadius: 99, fontWeight: 600 }}>Best value</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 4px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Identity Kit · identitykit.in/{profile.username}</span>
              {profile.email && <span style={{ fontSize: 11, color: '#FF6B2B' }}>{profile.email}</span>}
            </div>
          </div>
        )}

        {/* ════ RATE CARD TAB ════ */}
        {tab === 'ratecard' && (
          <div style={{ animation: 'fadeUp 0.2s ease', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* Header */}
            <div style={{ ...S.card, padding: '20px' }}>
              <div className='ik-rc-header-row' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 4 }}>Rate Card</div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, color: '#fff' }}>{profile.full_name}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>{profile.niche} · identitykit.in/{profile.username}</div>
                </div>
                {profile.rate_valid_till && (
                  <span className='ik-rc-valid' style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.04)', padding: '4px 10px', borderRadius: 8, whiteSpace: 'nowrap' }}>
                    Valid till {new Date(profile.rate_valid_till + '-01').toLocaleString('default', { month: 'long', year: 'numeric' })}
                  </span>
                )}
              </div>
            </div>

            {/* Popular bundle */}
            {profile.custom_package && (
              <div style={{ background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.2)', borderRadius: 16, padding: '16px 18px' }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: '#FF8C5A', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 5 }}>
                  <i className="ti ti-star-filled" style={{ fontSize: 11 }}></i>Most popular
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div><div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>Full Brand Bundle</div><div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>{profile.custom_package}</div></div>
                  <div className='ik-bundle-price' style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, color: '#FF6B2B' }}>Best value</div>
                </div>
              </div>
            )}

            {/* Instagram rates */}
            {igRates.length > 0 && (
              <div style={{ ...S.card, padding: '18px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: '#e1306c15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="ti ti-brand-instagram" style={{ color: '#e1306c', fontSize: 15 }}></i>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Instagram</span>
                  {igHandle && <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>@{igHandle} · {profile.instagram_followers}</span>}
                </div>
                <RateTable rates={igRates} />
              </div>
            )}

            {/* YouTube rates */}
            {ytRates.length > 0 && (
              <div style={{ ...S.card, padding: '18px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: '#ff000015', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="ti ti-brand-youtube" style={{ color: '#ff0000', fontSize: 15 }}></i>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>YouTube</span>
                  {ytHandle && <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>{ytHandle} · {profile.youtube_subscribers}</span>}
                </div>
                <RateTable rates={ytRates} />
              </div>
            )}

            {/* Other rates */}
            {otherRates.length > 0 && (
              <div style={{ ...S.card, padding: '18px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(255,107,43,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="ti ti-world" style={{ color: '#FF6B2B', fontSize: 15 }}></i>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Other Platforms</span>
                </div>
                <RateTable rates={otherRates} />
              </div>
            )}

            {/* Terms — only show what creator selected */}
            {(() => {
              const termMap = [
                { key: 'term_advance', label: '50% advance payment required before work begins' },
                { key: 'term_gst', label: 'All prices exclusive of 18% GST · GST invoice provided' },
                { key: 'term_usage', label: 'Usage rights for 6 months · Exclusivity available on request' },
                { key: 'term_revision', label: '1 free revision per deliverable · Additional revisions charged separately' },
                { key: 'term_custom', label: 'Custom packages available · Contact to discuss' },
                { key: 'term_brief', label: 'Detailed brand brief required before starting' },
                { key: 'term_approval', label: 'Content requires brand approval before posting' },
                { key: 'term_cancel', label: '50% cancellation fee after work has started' },
              ]
              const selectedTerms = termMap.filter(t => profile[t.key] === 'yes')
              if (selectedTerms.length === 0) return null
              return (
                <div style={{ ...S.card, padding: '18px 16px' }}>
                  <div style={S.sectionTitle}>Terms &amp; notes</div>
                  {selectedTerms.map(t => (
                    <div key={t.key} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                      <i className="ti ti-circle-check" style={{ fontSize: 14, color: '#FF6B2B', flexShrink: 0, marginTop: 1 }}></i>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{t.label}</span>
                    </div>
                  ))}
                </div>
              )
            })()}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 4px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              {profile.email && <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>{profile.email} · {profile.whatsapp}</span>}
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.04)', padding: '3px 10px', borderRadius: 6 }}>IDENTITY KIT</span>
            </div>
          </div>
        )}

        {/* ════ CV TAB ════ */}
        {tab === 'cv' && (
          <div style={{ animation: 'fadeUp 0.2s ease', display: 'flex', flexDirection: 'column', gap: 0, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
            {/* CV Header */}
            <div style={{ background: '#111120', padding: '20px', display: 'flex', gap: 14, alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid #FF6B2B', background: '#1e1e2e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, color: '#FF6B2B', overflow: 'hidden', flexShrink: 0 }}>
                {profile.photo_url ? <img src={profile.photo_url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 3 }}>Creator CV</div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 3 }}>{profile.full_name}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>{profile.niche} Creator · {profile.platforms?.split(',').slice(0, 2).join(' & ')}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {[profile.city && { icon: 'ti-map-pin', val: profile.city }, profile.email && { icon: 'ti-mail', val: profile.email }, igHandle && { icon: 'ti-brand-instagram', val: `@${igHandle}` }].filter(Boolean).map((m: any) => (
                    <span key={m.val} style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <i className={`ti ${m.icon}`} style={{ fontSize: 11, color: '#FF6B2B' }}></i>{m.val}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Two column */}
            <div className='ik-cv-cols' style={{ display: 'grid', gridTemplateColumns: '190px 1fr' }}>
              {/* LEFT sidebar */}
              <div style={{ background: '#111120', padding: '18px 16px', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                {/* Stats */}
                <div style={{ marginBottom: 18 }}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Key stats</div>
                  {[
                    [profile.youtube_subscribers, 'YT subscribers'],
                    [profile.instagram_followers, 'IG followers'],
                    [profile.avg_views, 'Avg views'],
                    [profile.engagement_rate, 'Engagement'],
                    [brands.length > 0 ? `${brands.length}+` : null, 'Brand deals'],
                  ].filter(([v]) => v).map(([val, key]) => (
                    <div key={key as string} style={{ background: '#08080E', borderRadius: 8, padding: '7px 10px', marginBottom: 6 }}>
                      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 800, color: '#FF6B2B' }}>{val}</div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', marginTop: 1 }}>{key}</div>
                    </div>
                  ))}
                </div>

                {/* Platforms */}
                {platformList.length > 0 && (
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Platforms</div>
                    {platformList.map((p: string) => {
                      const cfg = platConfig[p] || { icon: 'ti-device-mobile', color: '#FF6B2B', bg: '#FF6B2B15' }
                      const val = p === 'Instagram' ? profile.instagram_followers : p === 'YouTube' ? profile.youtube_subscribers : null
                      return (
                        <div key={p} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: 6 }}>
                            <i className={`ti ${cfg.icon}`} style={{ color: cfg.color, fontSize: 12 }}></i>{p}
                          </span>
                          {val && <span style={{ fontSize: 12, fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#fff' }}>{val}</span>}
                        </div>
                      )
                    })}
                  </div>
                )}

                {/* Audience */}
                {(profile.audience_age || profile.audience_gender) && (
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Audience</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.9 }}>
                      {profile.audience_gender && <div>{profile.audience_gender}</div>}
                      {profile.audience_age && <div>{profile.audience_age} age group</div>}
                      {cities.slice(0, 3).length > 0 && <div>{cities.slice(0, 3).join(' · ')}</div>}
                      {profile.languages && <div>{profile.languages}</div>}
                    </div>
                  </div>
                )}

                {/* Skills */}
                {skillsList.length > 0 && (
                  <div>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Skills</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                      {skillsList.map((s: string) => <span key={s} style={{ fontSize: 10, padding: '3px 8px', borderRadius: 99, background: 'rgba(255,107,43,0.07)', border: '1px solid rgba(255,107,43,0.2)', color: '#FF8C5A' }}>{s}</span>)}
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT content */}
              <div style={{ background: '#0c0c18', padding: '18px' }}>
                {profile.bio && (
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>About</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>{profile.bio}</p>
                  </div>
                )}

                {profile.best_campaign && (
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Best campaign</div>
                    <div style={{ background: 'rgba(255,107,43,0.06)', borderLeft: '2px solid #FF6B2B', borderRadius: '0 8px 8px 0', padding: '10px 14px' }}>
                      <div style={{ fontSize: 9, color: '#FF6B2B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Campaign highlight</div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>{profile.best_campaign}</div>
                    </div>
                  </div>
                )}

                {brands.length > 0 && (
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Brand collaborations</div>
                    {brands.map((b: string, i: number) => (
                      <div key={b} style={{ paddingBottom: 10, marginBottom: i < brands.length - 1 ? 10 : 0, borderBottom: i < brands.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                          <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{b}</span>
                          <span style={{ fontSize: 10, color: '#FF6B2B', background: 'rgba(255,107,43,0.1)', padding: '2px 8px', borderRadius: 4 }}>Paid collab</span>
                        </div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>Content creation · Brand collaboration</div>
                      </div>
                    ))}
                  </div>
                )}

                {profile.awards && (
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>Awards &amp; recognition</div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <i className="ti ti-award" style={{ fontSize: 16, color: '#FCD34D', flexShrink: 0, marginTop: 1 }}></i>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{profile.awards}</p>
                    </div>
                  </div>
                )}

                {allRates.length > 0 && (
                  <div>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,107,43,0.15)' }}>What I offer brands</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                      {allRates.slice(0, 5).map(r => (
                        <div key={r.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 10px', background: '#08080E', borderRadius: 8 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{r.name}</span>
                          <span style={{ fontSize: 12, fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#FF6B2B' }}>₹{Number(r.price).toLocaleString('en-IN')}</span>
                        </div>
                      ))}
                    </div>
                    {profile.turnaround && <div style={{ marginTop: 8, fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>⏱ Turnaround: {profile.turnaround} · 1 free revision included</div>}
                  </div>
                )}
              </div>
            </div>

            {/* CV Footer */}
            <div style={{ background: '#111120', padding: '12px 18px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.15)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Identity Kit · identitykit.in/{profile.username}</span>
              {allRates.length > 0 && <span style={{ fontSize: 11, color: '#FF6B2B' }}>Starting ₹{Number(allRates[0].price).toLocaleString('en-IN')} per collab</span>}
            </div>
          </div>
        )}
      </div>

      {/* PAGE FOOTER */}
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '16px 16px 24px', borderTop: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Identity Kit</span>
        <a href="https://identitykit.in" style={{ fontSize: 11, color: '#FF6B2B', textDecoration: 'none' }}>identitykit.in</a>
      </div>
    </div>
  )
}
