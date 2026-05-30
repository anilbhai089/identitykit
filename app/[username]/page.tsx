'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function PublicProfile() {
  const params = useParams()
  const username = params.username as string
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

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
    const text = `Check out my creator profile! 🔥\nhttps://identitykit.in/${username}`
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
  }

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#0A0A0F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 36, height: 36, border: '3px solid #1A1A24', borderTopColor: '#FF6B2B', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )

  if (!profile) return (
    <div style={{ minHeight: '100vh', background: '#0A0A0F', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
      <div style={{ fontSize: 48 }}>🔍</div>
      <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 800, color: '#fff' }}>Profile not found</h2>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>identitykit.in/{username} doesn&apos;t exist yet.</p>
    </div>
  )

  const brands = profile.brands_worked?.split(',').map((b: string) => b.trim()).filter(Boolean) || []
  const platformList = profile.platforms?.split(',').map((p: string) => p.trim()).filter(Boolean) || []
  const cities = profile.top_cities?.split(',').map((c: string) => c.trim()).filter(Boolean) || []
  const skillsList = profile.skills?.split(',').map((s: string) => s.trim()).filter(Boolean) || []
  const initials = profile.full_name?.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()
  const hasPortfolio = profile.portfolio_image1 || profile.portfolio_image2 || profile.portfolio_video1 || profile.portfolio_video2

  const now = new Date()
  const validTill = `${now.toLocaleString('default', { month: 'long' })} ${now.getFullYear() + 1}`

  const rates = [
    { name: 'Dedicated Reel', desc: '60 sec · 3–5 day delivery · 2 revisions', price: profile.rate_reel, cat: 'ig' },
    { name: 'Static Post', desc: '1 post · caption included', price: profile.rate_post, cat: 'ig' },
    { name: 'Carousel', desc: '5–8 slides · 2 revisions', price: profile.rate_carousel, cat: 'ig' },
    { name: 'Stories Pack', desc: '3 story slides · link in bio', price: profile.rate_stories, cat: 'ig' },
    { name: 'Story + Link', desc: 'Story with swipe-up link', price: profile.rate_story_link, cat: 'ig' },
    { name: 'Dedicated Video', desc: '8–15 min · 5–7 day delivery · 2 revisions', price: profile.rate_yt_dedicated, cat: 'yt' },
    { name: 'Integration / Mention', desc: '60–90 sec segment in existing video', price: profile.rate_yt_integration, cat: 'yt' },
    { name: 'YouTube Short', desc: '60 sec · 3–5 day delivery', price: profile.rate_yt_short, cat: 'yt' },
    { name: 'Twitter / X Thread', desc: 'Full thread with visuals', price: profile.rate_twitter, cat: 'other' },
    { name: 'LinkedIn Post', desc: 'Professional post with copy', price: profile.rate_linkedin, cat: 'other' },
    { name: 'Blog Post', desc: 'Long-form article', price: profile.rate_blog, cat: 'other' },
    { name: 'Podcast Mention', desc: 'Dedicated mention or episode', price: profile.rate_podcast, cat: 'other' },
  ].filter(r => r.price)

  const igRates = rates.filter(r => r.cat === 'ig')
  const ytRates = rates.filter(r => r.cat === 'yt')
  const otherRates = rates.filter(r => r.cat === 'other')

  // Find best bundle
  const bundlePrice = profile.custom_package

  const igHandle = profile.instagram_handle?.replace('@', '')
  const ytHandle = profile.youtube_channel

  return (
    <div style={{ background: '#0A0A0F', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        .ik-btn:hover{opacity:0.85}
        .ik-plat:hover{background:#161620!important}
        .ik-port-item:hover .ik-port-overlay{opacity:1!important}
      `}</style>

      {/* BANNER */}
      <div style={{ height: 130, background: '#111118', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 28px,#FF6B2B14 28px,#FF6B2B14 29px),repeating-linear-gradient(90deg,transparent,transparent 28px,#FF6B2B14 28px,#FF6B2B14 29px)' }}></div>
        <div style={{ position: 'absolute', bottom: 10, right: 16, fontFamily: "'Syne',sans-serif", fontSize: 10, color: '#FF6B2B33', letterSpacing: '0.22em', textTransform: 'uppercase' }}>Identity Kit</div>
      </div>

      {/* HERO */}
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 20px 32px' }}>
        {/* Avatar + share row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ position: 'relative', marginTop: -40 }}>
            <div style={{ width: 82, height: 82, borderRadius: '50%', border: '3px solid #FF6B2B', background: '#1e1e2a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 800, color: '#FF6B2B', overflow: 'hidden' }}>
              {profile.photo_url ? <img src={profile.photo_url} alt={profile.full_name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
            </div>
            <div style={{ position: 'absolute', bottom: 4, right: 4, width: 15, height: 15, borderRadius: '50%', background: '#22c55e', border: '2px solid #0A0A0F' }}></div>
          </div>
          {/* Share buttons */}
          <div style={{ display: 'flex', gap: 6, paddingBottom: 4 }}>
            <button onClick={copyLink} className="ik-btn" style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '7px 12px', background: copied ? '#22c55e22' : '#111118', border: `1px solid ${copied ? '#22c55e44' : '#ffffff14'}`, borderRadius: 8, color: copied ? '#22c55e' : 'rgba(255,255,255,0.5)', fontSize: 11, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s' }}>
              <i className={`ti ${copied ? 'ti-check' : 'ti-link'}`} style={{ fontSize: 13 }}></i>
              {copied ? 'Copied!' : 'Copy link'}
            </button>
            <button onClick={shareWhatsApp} className="ik-btn" style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '7px 12px', background: '#111118', border: '1px solid #ffffff14', borderRadius: 8, color: 'rgba(255,255,255,0.5)', fontSize: 11, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              <i className="ti ti-brand-whatsapp" style={{ fontSize: 13, color: '#22c55e' }}></i>
              Share
            </button>
          </div>
        </div>

        {/* Name row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
          <div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 21, fontWeight: 800, color: '#fff' }}>{profile.full_name}</div>
            <div style={{ fontSize: 12, color: '#FF6B2B', marginTop: 1 }}>identitykit.in/{profile.username}</div>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#22c55e14', color: '#22c55e', fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 20, border: '1px solid #22c55e2a' }}>
            <i className="ti ti-circle-check" style={{ fontSize: 13 }}></i> Open for collabs
          </div>
        </div>

        {/* Meta */}
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 10 }}>
          {profile.city && <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.33)', display: 'flex', alignItems: 'center', gap: 4 }}><i className="ti ti-map-pin" style={{ fontSize: 13 }}></i>{profile.city}</span>}
          {profile.languages && <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.33)', display: 'flex', alignItems: 'center', gap: 4 }}><i className="ti ti-language" style={{ fontSize: 13 }}></i>{profile.languages}</span>}
          {profile.niche && <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.33)', display: 'flex', alignItems: 'center', gap: 4 }}><i className="ti ti-category" style={{ fontSize: 13 }}></i>{profile.niche}</span>}
        </div>

        {/* Bio */}
        {profile.bio && <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.73)', lineHeight: 1.65, marginBottom: 16 }}>{profile.bio}</div>}

        {/* Stats strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 12, overflow: 'hidden', marginBottom: 24 }}>
          {[
            [profile.instagram_followers || profile.youtube_subscribers || '—', 'Followers'],
            [profile.avg_views || '—', 'Avg Views'],
            [profile.engagement_rate || '—', 'Engagement'],
            [brands.length > 0 ? `${brands.length}+` : '—', 'Brand Deals'],
          ].map(([n, l]) => (
            <div key={l} style={{ background: '#111118', padding: '13px 10px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 17, fontWeight: 800, color: '#FF6B2B' }}>{n}</div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.27)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Platforms */}
        {platformList.length > 0 && (
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 10 }}>Platforms</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {platformList.map((p: string) => {
                const isIG = p === 'Instagram'
                const isYT = p === 'YouTube'
                const isLI = p === 'LinkedIn'
                const isTW = p.includes('Twitter')
                const icon = isIG ? 'ti-brand-instagram' : isYT ? 'ti-brand-youtube' : isLI ? 'ti-brand-linkedin' : isTW ? 'ti-brand-twitter' : 'ti-device-mobile'
                const iconColor = isIG ? '#e1306c' : isYT ? '#ff0000' : isLI ? '#0077b5' : isTW ? '#1da1f2' : '#FF6B2B'
                const handle = isIG ? (igHandle ? `@${igHandle}` : '') : isYT ? (ytHandle || '') : ''
                const link = isIG && igHandle ? `https://instagram.com/${igHandle}` : isYT && ytHandle ? `https://youtube.com/@${ytHandle}` : ''
                const followers = isIG ? profile.instagram_followers : isYT ? profile.youtube_subscribers : null
                const stat2label = isIG ? 'engagement' : isYT ? 'avg views' : null
                const stat2val = isIG ? profile.engagement_rate : isYT ? profile.avg_views : null
                return (
                  <div key={p} className="ik-plat" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#111118', borderRadius: 10, padding: '10px 14px', transition: 'background 0.15s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 30, height: 30, borderRadius: 8, background: `${iconColor}14`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className={`ti ${icon}`} style={{ color: iconColor, fontSize: 16 }}></i>
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: '#fff' }}>{p}</div>
                        {handle && link && <a href={link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: 'rgba(255,255,255,0.27)', textDecoration: 'none' }}>{handle}</a>}
                        {handle && !link && <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.27)' }}>{handle}</div>}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 14 }}>
                      {followers && <div style={{ textAlign: 'right' }}><div style={{ fontSize: 13, fontWeight: 600, color: '#FF6B2B' }}>{followers}</div><div style={{ fontSize: 10, color: 'rgba(255,255,255,0.27)' }}>followers</div></div>}
                      {stat2val && <div style={{ textAlign: 'right' }}><div style={{ fontSize: 13, fontWeight: 600, color: '#FF6B2B' }}>{stat2val}</div><div style={{ fontSize: 10, color: 'rgba(255,255,255,0.27)' }}>{stat2label}</div></div>}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Audience */}
        {(profile.audience_age || cities.length > 0) && (
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 10 }}>Audience</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div style={{ background: '#111118', borderRadius: 10, padding: '12px 14px' }}>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.27)', marginBottom: 8 }}>Age group</div>
                {[['13–17', 8], ['18–24', profile.audience_age === '18-24' ? 68 : 20], ['25–34', profile.audience_age === '25-34' ? 68 : 18], ['35+', profile.audience_age === '35+' ? 68 : 6]].map(([label, pct]) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6 }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', minWidth: 44 }}>{label}</span>
                    <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }}><div style={{ height: 4, background: '#FF6B2B', borderRadius: 2, width: `${pct}%` }}></div></div>
                    <span style={{ fontSize: 10, color: '#FF6B2B', minWidth: 26, textAlign: 'right' }}>{pct}%</span>
                  </div>
                ))}
                {profile.audience_gender && <div style={{ marginTop: 8, fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{profile.audience_gender}</div>}
              </div>
              <div style={{ background: '#111118', borderRadius: 10, padding: '12px 14px' }}>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.27)', marginBottom: 8 }}>Top cities</div>
                {cities.slice(0, 3).map((city: string, i: number) => {
                  const pct = i === 0 ? 42 : i === 1 ? 28 : 20
                  return (
                    <div key={city} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6 }}>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', minWidth: 44, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{city}</span>
                      <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }}><div style={{ height: 4, background: '#FF6B2B', borderRadius: 2, width: `${pct}%` }}></div></div>
                      <span style={{ fontSize: 10, color: '#FF6B2B', minWidth: 26, textAlign: 'right' }}>{pct}%</span>
                    </div>
                  )
                })}
                {profile.follower_growth && <div style={{ marginTop: 8, fontSize: 11, color: '#22c55e', display: 'flex', alignItems: 'center', gap: 4 }}><i className="ti ti-trending-up" style={{ fontSize: 12 }}></i>{profile.follower_growth}</div>}
              </div>
            </div>
          </div>
        )}

        {/* Content niches */}
        {profile.vibe && (
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 10 }}>Content style</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {[profile.niche, profile.vibe, ...(skillsList.slice(0, 3))].filter(Boolean).map((chip: string) => (
                <span key={chip} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 20, border: '1px solid #FF6B2B44', color: '#FF6B2B', background: '#FF6B2B0a' }}>{chip}</span>
              ))}
            </div>
          </div>
        )}

        {/* Brands */}
        {brands.length > 0 && (
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 10 }}>Brands worked with</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {brands.map((b: string) => <span key={b} style={{ fontSize: 12, color: 'rgba(255,255,255,0.67)', background: '#1a1a24', border: '1px solid rgba(255,255,255,0.07)', padding: '5px 12px', borderRadius: 8 }}>{b}</span>)}
            </div>
            {profile.best_campaign && (
              <div style={{ marginTop: 10, background: '#FF6B2B0d', borderLeft: '3px solid #FF6B2B', padding: '10px 14px', borderRadius: '0 8px 8px 0' }}>
                <div style={{ fontSize: 9, color: '#FF6B2B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Best campaign</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{profile.best_campaign}</div>
              </div>
            )}
          </div>
        )}

        {/* Portfolio */}
        {hasPortfolio && (
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 10 }}>My work</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[profile.portfolio_video1, profile.portfolio_video2].filter(Boolean).map((url: string, i: number) => (
                <div key={`v${i}`} style={{ background: '#111118', borderRadius: 10, overflow: 'hidden', position: 'relative' }}>
                  <div style={{ height: 90, background: '#1a0f08', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <video src={url} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} muted preload="metadata" />
                    <div style={{ position: 'relative', width: 36, height: 36, borderRadius: '50%', background: '#FF6B2B22', border: '1px solid #FF6B2B44', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="ti ti-player-play" style={{ fontSize: 16, color: '#FF6B2B' }}></i>
                    </div>
                  </div>
                  <div style={{ padding: '8px 10px' }}>
                    <div style={{ fontSize: 12, fontWeight: 500, color: '#fff', marginBottom: 2 }}>Video {i + 1}</div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.27)', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ background: '#FF6B2B14', color: '#FF6B2B', padding: '1px 6px', borderRadius: 4, fontSize: 9, fontWeight: 600, textTransform: 'uppercase' }}>Video</span>
                    </div>
                  </div>
                </div>
              ))}
              {[profile.portfolio_image1, profile.portfolio_image2].filter(Boolean).map((url: string, i: number) => (
                <div key={`img${i}`} style={{ background: '#111118', borderRadius: 10, overflow: 'hidden' }}>
                  <div style={{ height: 90, background: '#0f1a12', overflow: 'hidden' }}>
                    <img src={url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '8px 10px' }}>
                    <div style={{ fontSize: 12, fontWeight: 500, color: '#fff', marginBottom: 2 }}>Image {i + 1}</div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.27)', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ background: '#FF6B2B14', color: '#FF6B2B', padding: '1px 6px', borderRadius: 4, fontSize: 9, fontWeight: 600, textTransform: 'uppercase' }}>Photo</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── MEDIA KIT ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, marginTop: 4, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: '#FF6B2B14', border: '1px solid #FF6B2B22', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="ti ti-file-description" style={{ fontSize: 14, color: '#FF6B2B' }}></i>
            </div>
            <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 800, color: '#fff' }}>Media Kit</span>
          </div>

          {/* MK stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 12, overflow: 'hidden', marginBottom: 16 }}>
            {[
              [profile.instagram_followers || '—', 'Instagram'],
              [profile.youtube_subscribers || '—', 'YouTube'],
              [profile.avg_views || '—', 'Avg Views'],
              [profile.engagement_rate || '—', 'Engagement'],
            ].map(([n, l]) => (
              <div key={l} style={{ background: '#0A0A0F', padding: '16px 12px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, color: '#FF6B2B' }}>{n}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.27)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 3 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* MK platform breakdown */}
          {platformList.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Platform breakdown</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {platformList.map((p: string) => {
                  const isIG = p === 'Instagram'; const isYT = p === 'YouTube'
                  const icon = isIG ? 'ti-brand-instagram' : isYT ? 'ti-brand-youtube' : 'ti-device-mobile'
                  const iconColor = isIG ? '#e1306c' : isYT ? '#ff0000' : '#FF6B2B'
                  const handle = isIG ? (igHandle ? `@${igHandle}` : '') : isYT ? (ytHandle || '') : ''
                  const followers = isIG ? profile.instagram_followers : isYT ? profile.youtube_subscribers : null
                  const stat2val = isIG ? profile.engagement_rate : isYT ? profile.avg_views : null
                  const stat2label = isIG ? 'engagement' : isYT ? 'avg views' : null
                  return (
                    <div key={p} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#111118', borderRadius: 10, padding: '10px 14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 30, height: 30, borderRadius: 8, background: `${iconColor}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={`ti ${icon}`} style={{ color: iconColor, fontSize: 16 }}></i>
                        </div>
                        <div><div style={{ fontSize: 13, fontWeight: 500, color: '#fff' }}>{p}</div>{handle && <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.33)' }}>{handle}</div>}</div>
                      </div>
                      <div style={{ display: 'flex', gap: 12 }}>
                        {followers && <div style={{ textAlign: 'right' }}><div style={{ fontSize: 13, fontWeight: 600, color: '#FF6B2B' }}>{followers}</div><div style={{ fontSize: 10, color: 'rgba(255,255,255,0.27)' }}>followers</div></div>}
                        {stat2val && <div style={{ textAlign: 'right' }}><div style={{ fontSize: 13, fontWeight: 600, color: '#FF6B2B' }}>{stat2val}</div><div style={{ fontSize: 10, color: 'rgba(255,255,255,0.27)' }}>{stat2label}</div></div>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* MK packages */}
          {rates.length > 0 && (
            <div style={{ marginBottom: 8 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Packages</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {rates.slice(0, 4).map(r => (
                  <div key={r.name} style={{ background: '#111118', borderRadius: 10, padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div><div style={{ fontSize: 13, fontWeight: 500, color: '#fff' }}>{r.name}</div><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.33)', marginTop: 2 }}>{r.desc}</div></div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 16, fontWeight: 700, color: '#FF6B2B', flexShrink: 0, marginLeft: 12 }}>₹{Number(r.price).toLocaleString('en-IN')}</div>
                  </div>
                ))}
                {bundlePrice && (
                  <div style={{ background: '#FF6B2B14', border: '1px solid #FF6B2B33', borderRadius: 10, padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div><div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Full Bundle</div><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{bundlePrice}</div></div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 16, fontWeight: 700, color: '#FF6B2B' }}>Best value</div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* ── RATE CARD ── */}
        {rates.length > 0 && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: 7, background: '#FF6B2B14', border: '1px solid #FF6B2B22', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="ti ti-receipt" style={{ fontSize: 14, color: '#FF6B2B' }}></i>
                </div>
                <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 800, color: '#fff' }}>Rate Card</span>
              </div>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', padding: '3px 10px', borderRadius: 6 }}>Valid till {validTill}</span>
            </div>

            {/* Best bundle */}
            {bundlePrice && (
              <div style={{ background: '#FF6B2B14', border: '1px solid #FF6B2B33', borderRadius: 10, padding: 14, marginBottom: 20 }}>
                <div style={{ fontSize: 10, fontWeight: 600, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>⭐ Most popular</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div><div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>Full Brand Bundle</div><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>{bundlePrice}</div></div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, color: '#FF6B2B' }}>Best value</div>
                </div>
              </div>
            )}

            {/* Instagram rates */}
            {igRates.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <i className="ti ti-brand-instagram" style={{ color: '#e1306c', fontSize: 16 }}></i>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Instagram</span>
                  {igHandle && <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginLeft: 4 }}>@{igHandle} · {profile.instagram_followers} followers</span>}
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {igRates.map((r, i) => (
                      <tr key={r.name} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '10px 0' }}>
                          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.67)' }}>{r.name}</div>
                          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.27)', marginTop: 2 }}>{r.desc}</div>
                        </td>
                        <td style={{ padding: '10px 0', textAlign: 'right', fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, color: '#FF6B2B', whiteSpace: 'nowrap' }}>₹{Number(r.price).toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* YouTube rates */}
            {ytRates.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, paddingTop: 4 }}>
                  <i className="ti ti-brand-youtube" style={{ color: '#ff0000', fontSize: 16 }}></i>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>YouTube</span>
                  {ytHandle && <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginLeft: 4 }}>{ytHandle} · {profile.youtube_subscribers} subscribers</span>}
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {ytRates.map(r => (
                      <tr key={r.name} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '10px 0' }}>
                          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.67)' }}>{r.name}</div>
                          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.27)', marginTop: 2 }}>{r.desc}</div>
                        </td>
                        <td style={{ padding: '10px 0', textAlign: 'right', fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, color: '#FF6B2B', whiteSpace: 'nowrap' }}>₹{Number(r.price).toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Other rates */}
            {otherRates.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, paddingTop: 4 }}>
                  <i className="ti ti-world" style={{ color: '#FF6B2B', fontSize: 16 }}></i>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Other Platforms</span>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {otherRates.map(r => (
                      <tr key={r.name} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '10px 0' }}>
                          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.67)' }}>{r.name}</div>
                          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.27)', marginTop: 2 }}>{r.desc}</div>
                        </td>
                        <td style={{ padding: '10px 0', textAlign: 'right', fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, color: '#FF6B2B', whiteSpace: 'nowrap' }}>₹{Number(r.price).toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Terms */}
            <div style={{ background: '#111118', borderRadius: 10, padding: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.27)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Terms &amp; notes</div>
              {[
                'ti-circle-check:50% advance payment required before work begins',
                'ti-circle-check:All prices exclusive of 18% GST · GST invoice provided',
                'ti-circle-check:Usage rights for 6 months · Exclusivity on request',
                'ti-circle-check:Custom packages available · Contact to discuss',
              ].map(item => {
                const [icon, text] = item.split(':')
                return (
                  <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                    <i className={`ti ${icon}`} style={{ fontSize: 14, color: '#FF6B2B', marginTop: 1, flexShrink: 0 }}></i>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* ── CONTACT ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, marginBottom: 20 }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 10 }}>Contact</div>
          <div style={{ background: '#111118', borderRadius: 12, padding: 16 }}>
            {[
              profile.email && { icon: 'ti-mail', label: 'Email', val: profile.email, href: `mailto:${profile.email}` },
              profile.whatsapp && { icon: 'ti-brand-whatsapp', label: 'WhatsApp', val: profile.whatsapp, href: `https://wa.me/${profile.whatsapp.replace(/\D/g, '')}` },
              igHandle && { icon: 'ti-brand-instagram', label: 'Instagram DM', val: `@${igHandle}`, href: `https://instagram.com/${igHandle}` },
              profile.response_time && { icon: 'ti-clock', label: 'Response time', val: profile.response_time, href: null },
            ].filter(Boolean).map((item: any, i: number, arr: any[]) => (
              <div key={item.label}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: '#FF6B2B14', border: '1px solid #FF6B2B22', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`ti ${item.icon}`} style={{ fontSize: 16, color: '#FF6B2B' }}></i>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.27)', marginBottom: 1 }}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: '#fff', fontWeight: 500, textDecoration: 'none' }}>{item.val}</a>
                      : <div style={{ fontSize: 13, color: '#fff', fontWeight: 500 }}>{item.val}</div>}
                  </div>
                </div>
                {i < arr.length - 1 && <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', margin: '10px 0' }}></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ padding: '13px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 680, margin: '0 auto' }}>
        <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em' }}>IDENTITY KIT</span>
        <a href="https://identitykit.in" style={{ fontSize: 11, color: '#FF6B2B', textDecoration: 'none' }}>identitykit.in</a>
      </div>
    </div>
  )
}
