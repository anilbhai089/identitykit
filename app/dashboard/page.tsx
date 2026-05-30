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

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0F', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <style>{`*{box-sizing:border-box;margin:0;padding:0} .db-btn:hover{opacity:0.85} .db-card:hover{border-color:rgba(255,107,43,0.2)!important}`}</style>

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
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={copyLink} className="db-btn" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: copied ? '#22c55e22' : '#FF6B2B', border: `1px solid ${copied ? '#22c55e44' : 'transparent'}`, borderRadius: 9, color: copied ? '#22c55e' : 'white', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s' }}>
                <i className={`ti ${copied ? 'ti-check' : 'ti-copy'}`} style={{ fontSize: 15 }}></i>
                {copied ? 'Copied!' : 'Copy link'}
              </button>
              <button onClick={shareWhatsApp} className="db-btn" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 14px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 9, color: '#22c55e', fontSize: 13, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s' }}>
                <i className="ti ti-brand-whatsapp" style={{ fontSize: 15 }}></i> WhatsApp
              </button>
              <button onClick={() => window.open(profileUrl, '_blank')} className="db-btn" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 9, color: 'rgba(255,255,255,0.6)', fontSize: 13, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s' }}>
                <i className="ti ti-external-link" style={{ fontSize: 15 }}></i> Preview
              </button>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 10, marginBottom: 20 }}>
          {[
            { icon: 'ti-eye', label: 'Profile views', val: profile.view_count || 0, color: '#FF6B2B' },
            { icon: 'ti-users', label: 'Followers', val: profile.instagram_followers || profile.youtube_subscribers || '—', color: '#e1306c' },
            { icon: 'ti-chart-bar', label: 'Engagement', val: profile.engagement_rate || '—', color: '#22c55e' },
            { icon: 'ti-building-store', label: 'Brand deals', val: brands.length > 0 ? `${brands.length}+` : '—', color: '#a855f7' },
          ].map(s => (
            <div key={s.label} className="db-card" style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '16px', transition: 'border-color 0.2s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <i className={`ti ${s.icon}`} style={{ fontSize: 16, color: s.color }}></i>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{s.label}</span>
              </div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, color: '#fff' }}>{s.val}</div>
            </div>
          ))}
        </div>

        {/* Profile preview + actions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 16, alignItems: 'start' }}>

          {/* Profile summary */}
          <div style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden' }}>
            <div style={{ padding: '16px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#FF6B2B', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Your profile</p>
            </div>
            <div style={{ padding: '16px 18px' }}>
              {/* Completeness */}
              {(() => {
                const fields = [profile.photo_url, profile.bio, profile.instagram_followers, profile.audience_age, profile.brands_worked, profile.rate_reel || profile.rate_yt_dedicated, profile.portfolio_image1 || profile.portfolio_video1]
                const filled = fields.filter(Boolean).length
                const pct = Math.round((filled / fields.length) * 100)
                return (
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Profile completeness</span>
                      <span style={{ fontSize: 12, color: '#FF6B2B', fontWeight: 600 }}>{pct}%</span>
                    </div>
                    <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 99, overflow: 'hidden' }}>
                      <div style={{ height: '100%', background: pct >= 80 ? '#22c55e' : '#FF6B2B', borderRadius: 99, width: `${pct}%`, transition: 'width 0.4s' }}></div>
                    </div>
                  </div>
                )
              })()}

              {/* Checklist */}
              {[
                { label: 'Profile photo', done: !!profile.photo_url },
                { label: 'AI bio generated', done: !!profile.bio },
                { label: 'Platform stats', done: !!(profile.instagram_followers || profile.youtube_subscribers) },
                { label: 'Audience data', done: !!profile.audience_age },
                { label: 'Brand collabs', done: !!profile.brands_worked },
                { label: 'Rates added', done: !!(profile.rate_reel || profile.rate_yt_dedicated) },
                { label: 'Portfolio uploaded', done: !!(profile.portfolio_image1 || profile.portfolio_video1) },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <i className={`ti ${item.done ? 'ti-circle-check' : 'ti-circle'}`} style={{ fontSize: 16, color: item.done ? '#22c55e' : 'rgba(255,255,255,0.2)', flexShrink: 0 }}></i>
                  <span style={{ fontSize: 13, color: item.done ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Quick actions</p>

            {[
              { icon: 'ti-eye', label: 'View your profile', sub: 'See how brands see you', onClick: () => window.open(profileUrl, '_blank'), color: '#FF6B2B' },
              { icon: 'ti-copy', label: copied ? 'Copied!' : 'Copy profile link', sub: 'Share with brands', onClick: copyLink, color: '#FF6B2B' },
              { icon: 'ti-brand-whatsapp', label: 'Share on WhatsApp', sub: 'Send to brands directly', onClick: shareWhatsApp, color: '#22c55e' },
              { icon: 'ti-edit', label: 'Update your profile', sub: 'Change stats or details', onClick: () => router.push('/onboarding'), color: '#3b82f6' },
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

            {/* Share tip */}
            <div style={{ background: 'rgba(255,107,43,0.06)', border: '1px solid rgba(255,107,43,0.15)', borderRadius: 12, padding: '14px 16px', marginTop: 4 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#FF8C5A', marginBottom: 6 }}>💡 Pro tip</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>Add your Identity Kit link to your Instagram bio so brands can find your profile instantly!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
