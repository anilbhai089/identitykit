'use client'
import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

function AuthForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [mode, setMode] = useState(searchParams.get('mode') === 'signup' ? 'signup' : 'login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email, password,
          options: { data: { full_name: name } }
        })
        if (error) throw error
        setMessage('Check your email to confirm your account!')
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        router.push('/dashboard')
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    }
    setLoading(false)
  }

  async function handleGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/dashboard` }
    })
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 420 }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 40, justifyContent: 'center' }}>
          <div style={{ width: 32, height: 32, background: 'var(--orange)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 15, color: 'white' }}>IK</div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: 'var(--text)' }}>Identity Kit</span>
        </Link>

        <div className="card" style={{ border: '1px solid var(--border2)' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, marginBottom: 6 }}>
            {mode === 'signup' ? 'Create your account' : 'Welcome back'}
          </h1>
          <p style={{ color: 'var(--text2)', fontSize: 14, marginBottom: 28 }}>
            {mode === 'signup' ? 'Get your free creator profile link' : 'Sign in to your Identity Kit'}
          </p>

          <button onClick={handleGoogle} style={{ width: '100%', padding: '12px', background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: 10, color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 20, fontWeight: 500 }}>
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Continue with Google
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }}></div>
            <span style={{ color: 'var(--text3)', fontSize: 12 }}>or</span>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }}></div>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {mode === 'signup' && (
              <div>
                <label className="label">Full name</label>
                <input className="input" type="text" placeholder="Anil Prajapati" value={name} onChange={e => setName(e.target.value)} required />
              </div>
            )}
            <div>
              <label className="label">Email</label>
              <input className="input" type="email" placeholder="you@gmail.com" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div>
              <label className="label">Password</label>
              <input className="input" type="password" placeholder="Min 8 characters" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            {error && <p style={{ color: '#FF4444', fontSize: 13, background: 'rgba(255,68,68,0.1)', padding: '10px 14px', borderRadius: 8 }}>{error}</p>}
            {message && <p style={{ color: 'var(--orange)', fontSize: 13, background: 'var(--orange-dim)', padding: '10px 14px', borderRadius: 8 }}>{message}</p>}
            <button className="btn-primary" type="submit" disabled={loading} style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Please wait...' : mode === 'signup' ? 'Create free account' : 'Sign in'}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: 'var(--text2)' }}>
            {mode === 'signup' ? 'Already have an account? ' : "Don't have an account? "}
            <button onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')} style={{ background: 'none', border: 'none', color: 'var(--orange)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600 }}>
              {mode === 'signup' ? 'Sign in' : 'Sign up free'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: 'var(--text2)' }}>Loading...</p>
    </div>}>
      <AuthForm />
    </Suspense>
  )
}
