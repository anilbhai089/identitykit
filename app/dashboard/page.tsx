'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function Dashboard() {
  const router = useRouter()
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/auth'); return }
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single()
      if (!data) { router.push('/onboarding'); return }
      setProfile(data)
      setLoading(false)
    }
    load()
  }, [router])

  async function signOut() {
    await supabase.auth.signOut()
    router.push('/')
  }

  function copyLink() {
    navigator.clipboard.writeText(`https://identitykit.in/${profile.username}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function shareWhatsApp() {
    const text = `Check out my creator profile! 🔥\nhttps://identitykit.in/${profile.username}`
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
  }

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#0A0A0F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 32, height: 32, border: '3px solid #1A1A24', borderTopColor: '#FF6B2B', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )

  const initials = profile.full_name?.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()
  const profileUrl = `https://identitykit.in/${profile.username}`
  const brands = profile.brands_worked?.split(',').filter(Boolean) || []

  // Completeness calculation
  const sections = [
    { key: 'photo', label: 'Profile photo', icon: 'ti-camera', tip: 'Profiles with photos get 4x more clicks', done: !!profile.photo_url, route: '/dashboard/edit/photo', color: '#FF6B2B' },
    { key: 'bio', label: 'AI bio', icon: 'ti-sparkles', tip: 'Your bio is the first thing brands read', done: !!profile.bio, route: '/dashboard/edit/bio', color: '#a855f7' },
    { key: 'platforms', label: 'Platform stats', icon: 'ti-chart-bar', tip: 'Add follower counts and engagement rate', done: !!(profile.instagram_followers || profile.youtube_subscribers), route: '/dashboard/edit/platforms', color: '#3b82f6' },
    { key: 'audience', label: 'Audience demographics', icon: 'ti-users', tip: 'Brands want to see who follows you', done: !!profile.audience_age, route: '/dashboard/edit/audience', color: '#22c55e' },
    { key: 'brands', label: 'Brand collaborations', icon: 'ti-building-store', tip: 'Past collabs build instant credibility', done: !!profile.brands_worked, route: '/dashboard/edit/brands', color: '#f59e0b' },
    { key: 'rates', label: 'Rate card', icon: 'ti-currency-rupee', tip: 'Creators with rates close deals 3x faster', done: !!(profile.rate_reel || profile.rate_yt_dedicated || profile.rate_post), route: '/dashboard/edit/rates', color: '#ec4899' },
    { key: 'portfolio', label: 'Portfolio media', icon: 'ti-photo', tip: 'Show your best work visually', done: !!(profile.portfolio_image1 || profile.portfolio_video1), route: '/dashboard/edit/portfolio', color: '#14b8a6' },
    { key: 'terms', label: 'Collab terms', icon: 'ti-file-text', tip: 'Set your advance, GST, usage rights', done: !!(profile.term_advance || profile.term_gst), route: '/dashboard/edit/terms', color: '#6366f1' },
  ]
  const doneSections = sections.filter(s => s.done)
  const pendingSections = sections.filter(s => !s.done)
  const pct = Math.round((doneSections.length / sections.length) * 100)

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0F', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        .db-btn:hover{opacity:0.85}
        .db-card:hover{border-color:rgba(255,107,43,0.25)!important;transform:translateY(-1px)}
        .nudge-card:hover{border-color:rgba(255,255,255,0.15)!important;background:#18181f!important}
        .nudge-card{transition:all 0.18s ease}
        .db-card{transition:all 0.18s ease}
      `}</style>

      {/* NAV */}
      <nav style={{ background: '#111118', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '0 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 28, height: 28, background: '#FF6B2B', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 12, color: 'white' }}>IK</div>
            <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 15 }}>Identity Kit</span>
          </div>
          <button onClick={signOut} className="db-btn" style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 7, color: 'rgba(255,255,255,0.45)', fontSize: 12, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s' }}>
            <i className="ti ti-logout" style={{ fontSize: 14 }}></i> Sign out
          </button>
        </div>
      </nav>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px' }}>

        {/* Welcome row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', border: '2px solid #FF6B2B', background: '#1e1e2a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 18, color: '#FF6B2B', overflow: 'hidden', flexShrink: 0 }}>
            {profile.photo_url ? <img src={profile.photo_url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
          </div>
          <div>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, marginBottom: 2 }}>Welcome back, {profile.full_name?.split(' ')[0]}! 👋</h1>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{profile.niche} · {profile.city}</p>
          </div>
        </div>

        {/* Profile link card */}
        <div style={{ background: 'linear-gradient(135deg,#1a0a00,#111118)', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 16, padding: '22px 24px', marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>Your Identity Kit link</p>
              <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 4 }}>identitykit.in/{profile.username}</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{profile.view_count || 0} profile views</p>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <button onClick={copyLink} className="db-btn" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 14px', background: copied ? '#22c55e22' : '#FF6B2B', border: `1px solid ${copied ? '#22c55e44' : 'transparent'}`, borderRadius: 9, color: copied ? '#22c55e' : 'white', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
                <i className={`ti ${copied ? 'ti-check' : 'ti-copy'}`} style={{ fontSize: 14 }}></i>
                {copied ? 'Copied!' : 'Copy link'}
              </button>
              <button onClick={shareWhatsApp} className="db-btn" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 14px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 9, color: '#22c55e', fontSize: 12, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
                <i className="ti ti-brand-whatsapp" style={{ fontSize: 14 }}></i> WhatsApp
              </button>
              <button onClick={() => window.open(profileUrl, '_blank')} className="db-btn" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 9, color: 'rgba(255,255,255,0.6)', fontSize: 12, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
                <i className="ti ti-external-link" style={{ fontSize: 14 }}></i> Preview
              </button>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 10, marginBottom: 24 }}>
          {[
            { icon: 'ti-eye', label: 'Profile views', val: profile.view_count || 0, color: '#FF6B2B' },
            { icon: 'ti-users', label: 'Followers', val: profile.instagram_followers || profile.youtube_subscribers || '—', color: '#e1306c' },
            { icon: 'ti-chart-bar', label: 'Engagement', val: profile.engagement_rate ? `${profile.engagement_rate}%` : '—', color: '#22c55e' },
            { icon: 'ti-building-store', label: 'Brand deals', val: brands.length > 0 ? `${brands.length}+` : '—', color: '#a855f7' },
          ].map(s => (
            <div key={s.label} className="db-card" style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '16px', cursor: 'default' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <i className={`ti ${s.icon}`} style={{ fontSize: 16, color: s.color }}></i>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{s.label}</span>
              </div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, color: '#fff' }}>{s.val}</div>
            </div>
          ))}
        </div>

        {/* COMPLETENESS SECTION */}
        <div style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', marginBottom: 20 }}>
          
          {/* Header */}
          <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 800, marginBottom: 3 }}>Complete your profile</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
                {pct === 100 ? '🎉 Profile is 100% complete!' : `${doneSections.length} of ${sections.length} sections done — brands want the full picture`}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 28, fontWeight: 800, color: pct >= 80 ? '#22c55e' : '#FF6B2B', lineHeight: 1 }}>{pct}%</div>
              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>complete</p>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ height: 4, background: 'rgba(255,255,255,0.04)' }}>
            <div style={{ height: '100%', background: pct >= 80 ? '#22c55e' : 'linear-gradient(90deg,#FF6B2B,#ff9a5c)', width: `${pct}%`, transition: 'width 0.6s ease' }}></div>
          </div>

          {/* Pending nudges */}
          {pendingSections.length > 0 && (
            <div style={{ padding: '16px 24px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Add to your profile</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 10 }}>
                {pendingSections.map(s => (
                  <button key={s.key} onClick={() => router.push(s.route)} className="nudge-card" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', background: '#0e0e16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, cursor: 'pointer', textAlign: 'left', width: '100%', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                    <div style={{ width: 38, height: 38, background: `${s.color}14`, border: `1px solid ${s.color}28`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={`ti ${s.icon}`} style={{ fontSize: 18, color: s.color }}></i>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 3 }}>{s.label}</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', lineHeight: 1.4 }}>{s.tip}</div>
                    </div>
                    <i className="ti ti-chevron-right" style={{ fontSize: 15, color: 'rgba(255,255,255,0.2)', flexShrink: 0 }}></i>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Done sections */}
          {doneSections.length > 0 && (
            <div style={{ padding: '0 24px 16px', borderTop: pendingSections.length > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none', marginTop: pendingSections.length > 0 ? 0 : 0 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10, paddingTop: 16 }}>Completed</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {doneSections.map(s => (
                  <button key={s.key} onClick={() => router.push(s.route)} className="db-btn" style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 12px', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.18)', borderRadius: 8, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s' }}>
                    <i className="ti ti-circle-check" style={{ fontSize: 14, color: '#22c55e' }}></i>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>{s.label}</span>
                    <i className="ti ti-edit" style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}></i>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick actions */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 10 }}>
          {[
            { icon: 'ti-eye', label: 'View your profile', sub: 'See how brands see you', onClick: () => window.open(profileUrl, '_blank'), color: '#FF6B2B' },
            { icon: 'ti-copy', label: copied ? 'Copied!' : 'Copy profile link', sub: 'Share with brands', onClick: copyLink, color: '#FF6B2B' },
            { icon: 'ti-brand-whatsapp', label: 'Share on WhatsApp', sub: 'Send to brands directly', onClick: shareWhatsApp, color: '#22c55e' },
          ].map(action => (
            <button key={action.label} onClick={action.onClick} className="db-btn" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', background: '#111118', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, cursor: 'pointer', textAlign: 'left', width: '100%', transition: 'all 0.2s', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              <div style={{ width: 36, height: 36, background: `${action.color}14`, border: `1px solid ${action.color}22`, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className={`ti ${action.icon}`} style={{ fontSize: 17, color: action.color }}></i>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 2 }}>{action.label}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{action.sub}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Pro tip */}
        <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 12, padding: '14px 18px', marginTop: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 20 }}>💡</span>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>Add your Identity Kit link to your Instagram bio — brands who search for creators will find your full profile instantly!</p>
        </div>

      </div>
    </div>
  )
}
