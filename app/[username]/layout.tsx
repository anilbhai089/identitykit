import { createClient } from '@supabase/supabase-js'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { username: string } }): Promise<Metadata> {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

    if (!supabaseUrl || supabaseUrl.includes('placeholder')) {
      return { title: 'Identity Kit' }
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    // Next.js doesn't url-decode "@" in dynamic segments (it's reserved for parallel routes),
    // so strip any leftover %40/@ and lowercase to match how usernames are stored/saved.
    const cleanUsername = params.username.replace(/%40/gi, '').replace(/@/g, '').toLowerCase()
    const { data } = await supabase
      .from('profiles')
      .select('full_name, niche, city, bio, photo_url, username, instagram_followers, youtube_subscribers')
      .eq('username', cleanUsername)
      .single()

    // If no profile found, just show Identity Kit — not "Creator not found"
    if (!data) return {
      title: 'Identity Kit — Creator Profiles',
      description: 'Professional creator profiles with Media Kit, Rate Card and CV in one link.'
    }

    const followers = data.instagram_followers || data.youtube_subscribers || ''
    const title = `${data.full_name} | ${data.niche} Creator | Identity Kit`
    const description = data.bio
      ? data.bio.slice(0, 155)
      : `${data.full_name} is a ${data.niche} creator from ${data.city}${followers ? ` with ${followers} followers` : ''}. View their media kit, rate card and creator CV.`

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `https://identitykit.in/${data.username}`,
        siteName: 'Identity Kit',
        images: data.photo_url ? [{ url: data.photo_url, width: 400, height: 400, alt: data.full_name }] : [],
        type: 'profile',
      },
      twitter: {
        card: 'summary',
        title,
        description,
        images: data.photo_url ? [data.photo_url] : [],
      },
    }
  } catch {
    return { title: 'Identity Kit' }
  }
}

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
