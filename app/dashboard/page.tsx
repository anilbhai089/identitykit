'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { Copy, ExternalLink, Edit, Eye, LogOut, Plus } from 'lucide-react'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/auth'); return }
      setUser(user)
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single()
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
    navigator.clipboard.writeText(`https://identitykit.in/${profile?.username}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (loading) return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 40, height: 40, border: '3px solid var(--border2)', borderTopColor: 'var(--orange)', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 16px' }}></div>
        <p style={{ color: 'var(--text2)' }}>Loading your dashboard...</p>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      {/* NAV */}
      <nav style={{ padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', background: 'var(--bg2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 30, height: 30, background: 'var(--orange)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 14, color: 'white' }}>IK</div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: 'var(--text)' }}>Identity Kit</span>
        </div>
        <button onClick={signOut} style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 8, padding: '7px 14px', color: 'var(--text2)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
          <LogOut size={14} /> Sign out
        </button>
      </nav>

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px' }}>

        {/* WELCOME */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, marginBottom: 6 }}>
            Welcome back{profile?.full_name ? `, ${profile.full_name.split(' ')[0]}` : ''}! 👋
          </h1>
          <p style={{ color: 'var(--text2)', fontSize: 14 }}>Manage your creator identity and share your profile link with brands.</p>
        </div>

        {!profile ? (
          /* NO PROFILE YET */
          <div style={{ textAlign: 'center', padding: '60px 24px', background: 'var(--bg2)', border: '1px solid var(--border2)', borderRadius: 16 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🪪</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Set up your creator profile</h2>
            <p style={{ color: 'var(--text2)', fontSize: 14, marginBottom: 28, maxWidth: 400, margin: '0 auto 28px' }}>Fill in your details and AI will generate your Media Kit, Rate Card and CV instantly.</p>
            <Link href="/onboarding">
              <button className="btn-primary" style={{ fontSize: 15, padding: '13px 28px' }}>
                <Plus size={16} /> Create my profile
              </button>
            </Link>
          </div>
        ) : (
          /* HAS PROFILE */
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* PROFILE LINK CARD */}
            <div style={{ background: 'linear-gradient(135deg, #1A1A24, #0f1929)', border: '1px solid var(--orange-border)', borderRadius: 16, padding: 24 }}>
              <p style={{ fontSize: 12, color: 'var(--orange2)', fontWeight: 500, marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Your creator profile link</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border2)', borderRadius: 10, padding: '12px 16px', fontFamily: 'var(--font-heading)', fontSize: 15, fontWeight: 600, color: 'white' }}>
                  identitykit.in/{profile.username}
                </div>
                <button onClick={copyLink} className="btn-primary" style={{ padding: '12px 18px' }}>
                  <Copy size={14} /> {copied ? 'Copied!' : 'Copy'}
                </button>
                <Link href={`/${profile.username}`} target="_blank">
                  <button className="btn-ghost" style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <ExternalLink size={14} /> View
                  </button>
                </Link>
              </div>
            </div>

            {/* STATS */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
              {[
                { label: 'Profile views', value: profile.view_count || 0, icon: '👁️' },
                { label: 'Brand collabs', value: profile.brands_worked?.split(',').filter(Boolean).length || 0, icon: '🤝' },
                { label: 'Profile score', value: profile.bio ? '85%' : '40%', icon: '⭐' },
              ].map(stat => (
                <div key={stat.label} className="card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{stat.icon}</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, color: 'var(--orange)', marginBottom: 4 }}>{stat.value}</div>
                  <div style={{ fontSize: 12, color: 'var(--text2)' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* ACTIONS */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <Link href="/onboarding" style={{ textDecoration: 'none' }}>
                <div className="card" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, border: '1px solid var(--border2)' }}>
                  <div style={{ width: 40, height: 40, background: 'var(--orange-dim)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Edit size={18} color="var(--orange)" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15, marginBottom: 2 }}>Edit profile</div>
                    <div style={{ fontSize: 12, color: 'var(--text2)' }}>Update your details & regenerate</div>
                  </div>
                </div>
              </Link>
              <Link href={`/${profile.username}`} target="_blank" style={{ textDecoration: 'none' }}>
                <div className="card" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, border: '1px solid var(--border2)' }}>
                  <div style={{ width: 40, height: 40, background: 'var(--orange-dim)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Eye size={18} color="var(--orange)" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15, marginBottom: 2 }}>View profile</div>
                    <div style={{ fontSize: 12, color: 'var(--text2)' }}>See what brands see</div>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}
