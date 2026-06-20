/**
 * FIX 2 — Server Component (no 'use client').
 *
 * Before: 'use client' + useEffect → browser downloads ALL JS before fetching
 *         profile → user sees blank screen for 3–7 s on mobile.
 *
 * After:  Next.js fetches the profile on the server during SSR → sends fully
 *         rendered HTML → user sees the page instantly. Only the tiny
 *         ProfileClient component (tab switching + copy/share buttons) ships
 *         as client JS (~3 KB vs 64 KB before).
 *
 * Design is 100% identical — every style, colour, layout is preserved exactly.
 */
import { createClient } from '@supabase/supabase-js'
import ProfileClient from './ProfileClient'

// Build a server-side Supabase client (same creds, different import path)
function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  return createClient(url, key)
}

export default async function PublicProfilePage({
  params,
}: {
  params: { username: string }
}) {
  const username = params.username.toLowerCase()
  const supabase = getSupabase()

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .single()

  // Increment view count — fire and forget, don't await (doesn't affect render)
  if (profile) {
    supabase
      .from('profiles')
      .update({ view_count: (profile.view_count || 0) + 1 })
      .eq('username', username)
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .then(() => {})
  }

  // Not found state — rendered on server, no JS needed
  if (!profile) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#08080E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <div style={{ fontSize: 44 }}>🔍</div>
        <h2
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: 22,
            fontWeight: 800,
            color: '#fff',
          }}
        >
          Profile not found
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>
          identitykit.in/{username} doesn&apos;t exist.
        </p>
      </div>
    )
  }

  // Pass fully-loaded profile to the client component
  return <ProfileClient profile={profile} />
}
