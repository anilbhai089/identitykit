'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { ChevronRight, ChevronLeft, Upload, X } from 'lucide-react'
import PhotoCropper from '@/components/PhotoCropper'

const NICHES = ['Fashion & Lifestyle','Tech & Gadgets','Food & Cooking','Finance & Investing','Gaming','Fitness & Health','Travel','Education & Coaching','Comedy & Entertainment','Beauty & Skincare','Business','Other']
const PLATFORMS = ['Instagram','YouTube','LinkedIn','Twitter / X','Podcast','Blog','Moj / Josh','Snapchat']
const VIBES = ['Educational & Informative','Fun & Entertaining','Honest & Raw','Aspirational & Aesthetic','Relatable & Desi','Professional & Corporate']
const TURNAROUND = ['3-5 business days','5-7 business days','1-2 weeks','2+ weeks']
const COLLAB_TYPES = ['One-off campaigns','Long-term partnerships','Both']
const SKILLS_LIST = ['Video Editing','CapCut','Adobe Premiere','Final Cut Pro','Canva','Photoshop','Lightroom','After Effects','Scriptwriting','Voiceover','SEO','Instagram Analytics','YouTube Analytics','Photography','Graphic Design','Motion Graphics']

const STEPS = [
  { title: 'Basic identity', sub: 'Who you are' },
  { title: 'Platform stats', sub: 'Your numbers' },
  { title: 'Audience data', sub: 'Who watches you' },
  { title: 'Past work', sub: 'Your experience' },
  { title: 'Your rates', sub: 'What you charge' },
  { title: 'Portfolio', sub: 'Show your best work' },
  { title: 'Preferences', sub: 'How you work' },
  { title: 'Contact', sub: 'How to reach you' },
]

export default function Onboarding() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState('')
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [rawPhoto, setRawPhoto] = useState<string | null>(null)
  const [showCropper, setShowCropper] = useState(false)

  // Portfolio media
  const [portfolioImages, setPortfolioImages] = useState<{ file: File; preview: string }[]>([])
  const [portfolioVideos, setPortfolioVideos] = useState<{ file: File; preview: string; name: string }[]>([])

  const [form, setForm] = useState({
    full_name: '', username: '', city: '', niche: '', languages: '', bio_note: '',
    platforms: [] as string[], instagram_handle: '', youtube_channel: '',
    instagram_followers: '', youtube_subscribers: '', avg_views: '', engagement_rate: '',
    follower_growth: '',
    audience_gender: '', audience_age: '', top_cities: '',
    brands_worked: '', best_campaign: '', awards: '',
    rate_reel: '', rate_post: '', rate_carousel: '', rate_stories: '',
    rate_story_link: '', rate_yt_dedicated: '', rate_yt_integration: '',
    rate_yt_short: '', rate_twitter: '', rate_linkedin: '', rate_blog: '',
    rate_podcast: '', custom_package: '', turnaround: '',
    rate_valid_till: '',
    term_advance: '', term_gst: '', term_usage: '', term_revision: '',
    term_custom: '', term_brief: '', term_approval: '', term_cancel: '',
    skills: [] as string[],
    collab_type: '', categories_avoid: '', response_time: '', vibe: '',
    email: '', whatsapp: '',
  })

  // Store existing portfolio URLs (already uploaded, not new files)
  const [existingPortfolioImages, setExistingPortfolioImages] = useState<string[]>([])
  const [existingPortfolioVideos, setExistingPortfolioVideos] = useState<string[]>([])

  // Load existing profile to pre-fill form when editing
  useEffect(() => {
    async function loadExisting() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single()
      if (!data) return
      if (data.photo_url) setPhotoPreview(data.photo_url)
      // Pre-fill existing portfolio URLs
      const existImgs = [data.portfolio_image1, data.portfolio_image2].filter(Boolean)
      const existVids = [data.portfolio_video1, data.portfolio_video2].filter(Boolean)
      if (existImgs.length > 0) setExistingPortfolioImages(existImgs)
      if (existVids.length > 0) setExistingPortfolioVideos(existVids)
      setForm(f => ({
        ...f,
        full_name: data.full_name || '',
        username: data.username || '',
        city: data.city || '',
        niche: data.niche || '',
        languages: data.languages || '',
        platforms: data.platforms ? data.platforms.split(',').map((p: string) => p.trim()).filter(Boolean) : [],
        instagram_handle: data.instagram_handle || '',
        youtube_channel: data.youtube_channel || '',
        instagram_followers: data.instagram_followers || '',
        youtube_subscribers: data.youtube_subscribers || '',
        avg_views: data.avg_views || '',
        engagement_rate: data.engagement_rate || '',
        follower_growth: data.follower_growth || '',
        audience_gender: data.audience_gender || '',
        audience_age: data.audience_age || '',
        top_cities: data.top_cities || '',
        brands_worked: data.brands_worked || '',
        best_campaign: data.best_campaign || '',
        awards: data.awards || '',
        rate_reel: data.rate_reel || '',
        rate_post: data.rate_post || '',
        rate_carousel: data.rate_carousel || '',
        rate_stories: data.rate_stories || '',
        rate_story_link: data.rate_story_link || '',
        rate_yt_dedicated: data.rate_yt_dedicated || '',
        rate_yt_integration: data.rate_yt_integration || '',
        rate_yt_short: data.rate_yt_short || '',
        rate_twitter: data.rate_twitter || '',
        rate_linkedin: data.rate_linkedin || '',
        rate_blog: data.rate_blog || '',
        rate_podcast: data.rate_podcast || '',
        custom_package: data.custom_package || '',
        turnaround: data.turnaround || '',
        rate_valid_till: data.rate_valid_till || '',
        term_advance: data.term_advance || '',
        term_gst: data.term_gst || '',
        term_usage: data.term_usage || '',
        term_revision: data.term_revision || '',
        term_custom: data.term_custom || '',
        term_brief: data.term_brief || '',
        term_approval: data.term_approval || '',
        term_cancel: data.term_cancel || '',
        skills: data.skills ? data.skills.split(',').map((s: string) => s.trim()).filter(Boolean) : [],
        collab_type: data.collab_type || '',
        categories_avoid: data.categories_avoid || '',
        response_time: data.response_time || '',
        vibe: data.vibe || '',
        email: data.email || '',
        whatsapp: data.whatsapp || '',
      }))
    }
    loadExisting()
  }, [])

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))
  const toggleArr = (k: string, v: string) => setForm(f => ({
    ...f,
    [k]: (f[k as keyof typeof f] as string[]).includes(v)
      ? (f[k as keyof typeof f] as string[]).filter((x: string) => x !== v)
      : [...(f[k as keyof typeof f] as string[]), v]
  }))

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => { setRawPhoto(ev.target?.result as string); setShowCropper(true) }
    reader.readAsDataURL(file)
    e.target.value = ''
  }

  function handleCropDone(file: File, preview: string) {
    setPhotoFile(file); setPhotoPreview(preview); setShowCropper(false); setRawPhoto(null)
  }

  function handlePortfolioImage(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || [])
    const remaining = 2 - portfolioImages.length
    if (remaining <= 0) return
    files.slice(0, remaining).forEach(file => {
      const reader = new FileReader()
      reader.onload = ev => {
        setPortfolioImages(prev => [...prev, { file, preview: ev.target?.result as string }])
      }
      reader.readAsDataURL(file)
    })
    e.target.value = ''
  }

  function handlePortfolioVideo(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || [])
    const remaining = 2 - portfolioVideos.length
    if (remaining <= 0) return
    files.slice(0, remaining).forEach(file => {
      const url = URL.createObjectURL(file)
      setPortfolioVideos(prev => [...prev, { file, preview: url, name: file.name }])
    })
    e.target.value = ''
  }

  function removeImage(i: number) { setPortfolioImages(prev => prev.filter((_, idx) => idx !== i)) }
  function removeVideo(i: number) { setPortfolioVideos(prev => prev.filter((_, idx) => idx !== i)) }

  function validate() {
    if (step === 0 && (!form.full_name || !form.username || !form.niche)) {
      setError('Please fill name, username and niche!'); return false
    }
    if (step === 1 && form.platforms.length === 0) {
      setError('Select at least one platform!'); return false
    }
    setError(''); return true
  }

  function next() { if (validate()) setStep(s => s + 1) }
  function back() { setError(''); setStep(s => s - 1) }

  // Upload profile photo → Supabase
  async function uploadPhotoToSupabase(file: File, path: string): Promise<string> {
    try {
      const { error } = await supabase.storage.from('profile-photos').upload(path, file, { upsert: true, contentType: file.type })
      if (error) { console.error('Supabase upload error:', error.message); return '' }
      const { data } = supabase.storage.from('profile-photos').getPublicUrl(path)
      return data.publicUrl
    } catch (e) {
      console.error('Supabase upload failed:', e)
      return ''
    }
  }

  // Upload portfolio images/videos → Cloudflare R2 via API route
  async function uploadToR2(file: File, key: string): Promise<string> {
    try {
      const fd = new FormData()
      fd.append('file', file)
      fd.append('key', key)
      const res = await fetch('/api/upload', { method: 'POST', body: fd })
      if (!res.ok) {
        const err = await res.json()
        console.error('R2 upload error:', err)
        return ''
      }
      const { url } = await res.json()
      return url || ''
    } catch (e) {
      console.error('R2 upload failed:', e)
      return ''
    }
  }

  async function submit() {
    setGenerating(true)
    setError('')
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/auth'); return }

      // Profile photo → Supabase storage
      let photo_url = photoPreview || '' // keep existing if no new file
      // Portfolio — keep existing URLs if no new files uploaded
      let portfolio_image1 = existingPortfolioImages[0] || ''
      let portfolio_image2 = existingPortfolioImages[1] || ''
      let portfolio_video1 = existingPortfolioVideos[0] || ''
      let portfolio_video2 = existingPortfolioVideos[1] || ''

      try {
        if (photoFile) {
          const ext = photoFile.name.split('.').pop() || 'jpg'
          photo_url = await uploadPhotoToSupabase(photoFile, `${user.id}.${ext}`)
          console.log('Photo URL:', photo_url)
        }
        if (portfolioImages[0]) {
          const ext = portfolioImages[0].file.name.split('.').pop() || 'jpg'
          portfolio_image1 = await uploadToR2(portfolioImages[0].file, `portfolio/${user.id}_img1.${ext}`)
          console.log('Portfolio image 1:', portfolio_image1)
        }
        if (portfolioImages[1]) {
          const ext = portfolioImages[1].file.name.split('.').pop() || 'jpg'
          portfolio_image2 = await uploadToR2(portfolioImages[1].file, `portfolio/${user.id}_img2.${ext}`)
        }
        if (portfolioVideos[0]) {
          const ext = portfolioVideos[0].file.name.split('.').pop() || 'mp4'
          portfolio_video1 = await uploadToR2(portfolioVideos[0].file, `videos/${user.id}_vid1.${ext}`)
          console.log('Portfolio video 1:', portfolio_video1)
        }
        if (portfolioVideos[1]) {
          const ext = portfolioVideos[1].file.name.split('.').pop() || 'mp4'
          portfolio_video2 = await uploadToR2(portfolioVideos[1].file, `videos/${user.id}_vid2.${ext}`)
        }
      } catch (uploadErr) {
        console.error('File upload error (non-fatal):', uploadErr)
        // Continue even if uploads fail — profile still saves
      }

      // Save profile to Supabase
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { bio_note, ...formWithoutBioNote } = form
      const profileData = {
        id: user.id,
        ...formWithoutBioNote,
        platforms: form.platforms.join(', '),
        skills: form.skills.join(', '),
        photo_url,
        portfolio_image1,
        portfolio_image2,
        portfolio_video1,
        portfolio_video2,
        status: 'generating'
      }

      const { error: upsertError } = await supabase.from('profiles').upsert(profileData)
      if (upsertError) {
        console.error('Supabase upsert error:', upsertError)
        setError(`Profile save failed: ${upsertError.message}`)
        setGenerating(false)
        return
      }

      // Generate bio via AI — if it fails use fallback
      let bio = ''
      let tagline = ''
      try {
        const res = await fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...form,
            platforms: form.platforms.join(', '),
            skills: form.skills.join(', '),
          })
        })
        if (res.ok) {
          const result = await res.json()
          bio = result.bio || ''
          tagline = result.tagline || ''
        }
      } catch (genErr) {
        console.error('AI generation failed (non-fatal):', genErr)
        bio = `${form.full_name} is a ${form.niche} creator based in ${form.city}, creating engaging content across platforms.`
        tagline = `${form.niche} creator from ${form.city}`
      }

      await supabase.from('profiles').update({ bio, tagline, status: 'active' }).eq('id', user.id)
      router.push('/dashboard')

    } catch (err) {
      console.error('Submit error:', err)
      setError(`Error: ${err instanceof Error ? err.message : 'Something went wrong. Please try again!'}`)
      setGenerating(false)
    }
  }

  if (generating) return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: 400 }}>
        <div style={{ fontSize: 56, marginBottom: 24 }}>✨</div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Building your identity...</h2>
        <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.7, marginBottom: 32 }}>AI is writing your bio, crafting your media kit and generating your rate card. This takes about 15 seconds!</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, textAlign: 'left' }}>
          {['Writing your professional bio...','Formatting your media kit...','Creating your rate card...','Setting up your profile page...'].map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 10 }}>
              <div style={{ width: 20, height: 20, border: '2px solid var(--border2)', borderTopColor: 'var(--orange)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
              <span style={{ fontSize: 13, color: 'var(--text2)' }}>{item}</span>
            </div>
          ))}
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex' }}>
      {showCropper && rawPhoto && (
        <PhotoCropper initialImage={rawPhoto} onDone={handleCropDone} onCancel={() => { setShowCropper(false); setRawPhoto(null) }} />
      )}

      {/* LEFT SIDEBAR */}
      <div className="ik-onboarding-sidebar" style={{ width: 260, background: 'var(--bg2)', borderRight: '1px solid var(--border)', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
          <div style={{ width: 28, height: 28, background: 'var(--orange)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 13, color: 'white' }}>IK</div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15, color: 'var(--text)' }}>Identity Kit</span>
        </div>
        {STEPS.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 10, background: i === step ? 'var(--orange-dim)' : 'transparent', border: i === step ? '1px solid var(--orange-border)' : '1px solid transparent' }}>
            <div style={{ width: 26, height: 26, borderRadius: '50%', background: i < step ? 'var(--orange)' : i === step ? 'var(--orange-dim)' : 'var(--bg3)', border: i === step ? '2px solid var(--orange)' : '1px solid var(--border2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600, color: i <= step ? 'var(--orange)' : 'var(--text3)', flexShrink: 0 }}>
              {i < step ? '✓' : i + 1}
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: i === step ? 'var(--orange)' : i < step ? 'var(--text)' : 'var(--text3)' }}>{s.title}</div>
              <div style={{ fontSize: 10, color: 'var(--text3)' }}>{s.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* FORM AREA */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '40px 32px', width: '100%' }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 12, color: 'var(--orange)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Step {step + 1} of {STEPS.length}</div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, marginBottom: 6 }}>{STEPS[step].title}</h1>
            <p style={{ color: 'var(--text2)', fontSize: 14 }}>{STEPS[step].sub}</p>
          </div>

          {error && <div style={{ background: 'rgba(255,68,68,0.1)', border: '1px solid rgba(255,68,68,0.3)', color: '#FF6666', padding: '10px 14px', borderRadius: 10, fontSize: 13, marginBottom: 20 }}>{error}</div>}

          {/* STEP 0 — Basic Identity */}
          {step === 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px', background: 'var(--bg2)', border: '1px solid var(--border2)', borderRadius: 12 }}>
                <label style={{ position: 'relative', width: 72, height: 72, borderRadius: '50%', border: '2px dashed var(--orange-border)', background: photoPreview ? 'transparent' : 'var(--bg3)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', overflow: 'hidden', flexShrink: 0 }}>
                  {photoPreview ? <img src={photoPreview} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} /> : <Upload size={22} color="var(--orange)" />}
                  <input type="file" accept="image/*" onChange={handlePhoto} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%', zIndex: 10 }} />
                </label>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 3 }}>Profile photo</p>
                  <p style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 8 }}>Used in your media kit and CV</p>
                  <label style={{ position: 'relative', fontSize: 11, padding: '6px 14px', background: 'var(--orange-dim)', border: '1px solid var(--orange-border)', borderRadius: 6, color: 'var(--orange)', cursor: 'pointer', fontFamily: 'var(--font-body)', display: 'inline-block', overflow: 'hidden', fontWeight: 500 }}>
                    {photoPreview ? 'Change photo' : 'Choose photo'}
                    <input type="file" accept="image/*" onChange={handlePhoto} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%', zIndex: 10 }} />
                  </label>
                </div>
              </div>

              <div><label className="label">Full name *</label><input className="input" placeholder="Anil Prajapati" value={form.full_name} onChange={e => set('full_name', e.target.value)} /></div>
              <div><label className="label">Username * <span style={{ color: 'var(--text3)', fontWeight: 400 }}>— identitykit.in/yourname</span></label><input className="input" placeholder="anilprajapati" value={form.username} onChange={e => set('username', e.target.value.toLowerCase().replace(/[^a-z0-9_.]/g, ''))} /></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div><label className="label">City *</label><input className="input" placeholder="Mumbai" value={form.city} onChange={e => set('city', e.target.value)} /></div>
                <div><label className="label">Languages</label><input className="input" placeholder="Hindi, English" value={form.languages} onChange={e => set('languages', e.target.value)} /></div>
              </div>
              <div><label className="label">Your niche *</label>
                <select className="input" value={form.niche} onChange={e => set('niche', e.target.value)}>
                  <option value="">Select your niche</option>
                  {NICHES.map(n => <option key={n}>{n}</option>)}
                </select>
              </div>
              <div><label className="label">Content vibe</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 6 }}>
                  {VIBES.map(v => <div key={v} className={`chip ${form.vibe === v ? 'selected' : ''}`} onClick={() => set('vibe', v)}>{v}</div>)}
                </div>
              </div>
            </div>
          )}

          {/* STEP 1 — Platform Stats */}
          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div><label className="label">Platforms you create on *</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 6 }}>
                  {PLATFORMS.map(p => <div key={p} className={`chip ${form.platforms.includes(p) ? 'selected' : ''}`} onClick={() => toggleArr('platforms', p)}>{p}</div>)}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div><label className="label">Instagram handle</label><input className="input" placeholder="@anilprajapati" value={form.instagram_handle} onChange={e => set('instagram_handle', e.target.value)} /></div>
                <div><label className="label">YouTube channel</label><input className="input" placeholder="Anil King" value={form.youtube_channel} onChange={e => set('youtube_channel', e.target.value)} /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div><label className="label">Instagram followers</label><input className="input" placeholder="25,000" value={form.instagram_followers} onChange={e => set('instagram_followers', e.target.value)} /></div>
                <div><label className="label">YouTube subscribers</label><input className="input" placeholder="10,000" value={form.youtube_subscribers} onChange={e => set('youtube_subscribers', e.target.value)} /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div><label className="label">Avg views per post</label><input className="input" placeholder="35,000" value={form.avg_views} onChange={e => set('avg_views', e.target.value)} /></div>
                <div><label className="label">Engagement rate</label><input className="input" placeholder="4.8%" value={form.engagement_rate} onChange={e => set('engagement_rate', e.target.value)} /></div>
              </div>
              <div><label className="label">Follower growth (last 6 months)</label><input className="input" placeholder="e.g. +12% in last 6 months" value={form.follower_growth} onChange={e => set('follower_growth', e.target.value)} /></div>
            </div>
          )}

          {/* STEP 2 — Audience */}
          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div><label className="label">Audience gender</label>
                <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                  {['Mostly Male', 'Mostly Female', 'Equal Mix'].map(g => <div key={g} className={`chip ${form.audience_gender === g ? 'selected' : ''}`} onClick={() => set('audience_gender', g)}>{g}</div>)}
                </div>
              </div>
              <div><label className="label">Audience age group</label>
                <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                  {['13-17', '18-24', '25-34', '35+'].map(a => <div key={a} className={`chip ${form.audience_age === a ? 'selected' : ''}`} onClick={() => set('audience_age', a)}>{a}</div>)}
                </div>
              </div>
              <div><label className="label">Top 3 cities your audience is from</label><input className="input" placeholder="Mumbai, Delhi, Bangalore" value={form.top_cities} onChange={e => set('top_cities', e.target.value)} /></div>
            </div>
          )}

          {/* STEP 3 — Past Work */}
          {step === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div><label className="label">Brands you&apos;ve worked with</label><input className="input" placeholder="Mamaearth, boAt, Nykaa" value={form.brands_worked} onChange={e => set('brands_worked', e.target.value)} /></div>
              <div><label className="label">Your best campaign or achievement</label><textarea className="input" placeholder="My Reel for Nykaa got 2M views..." value={form.best_campaign} onChange={e => set('best_campaign', e.target.value)} style={{ minHeight: 90, resize: 'vertical' }} /></div>
              <div><label className="label">Awards or press mentions (optional)</label><input className="input" placeholder="Forbes 30 Under 30, ET feature..." value={form.awards} onChange={e => set('awards', e.target.value)} /></div>
              <div><label className="label">Your skills & tools</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 6 }}>
                  {SKILLS_LIST.map(s => <div key={s} className={`chip ${form.skills.includes(s) ? 'selected' : ''}`} onClick={() => toggleArr('skills', s)}>{s}</div>)}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4 — Rates */}
          {step === 4 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>📸 Instagram rates</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <div><label className="label">Reel (₹)</label><input className="input" placeholder="3000" value={form.rate_reel} onChange={e => set('rate_reel', e.target.value)} /></div>
                  <div><label className="label">Static Post (₹)</label><input className="input" placeholder="1000" value={form.rate_post} onChange={e => set('rate_post', e.target.value)} /></div>
                  <div><label className="label">Carousel (₹)</label><input className="input" placeholder="1500" value={form.rate_carousel} onChange={e => set('rate_carousel', e.target.value)} /></div>
                  <div><label className="label">Stories Pack (₹)</label><input className="input" placeholder="500" value={form.rate_stories} onChange={e => set('rate_stories', e.target.value)} /></div>
                </div>
              </div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>▶️ YouTube rates</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <div><label className="label">Dedicated Video (₹)</label><input className="input" placeholder="5000" value={form.rate_yt_dedicated} onChange={e => set('rate_yt_dedicated', e.target.value)} /></div>
                  <div><label className="label">Integration / Mention (₹)</label><input className="input" placeholder="2500" value={form.rate_yt_integration} onChange={e => set('rate_yt_integration', e.target.value)} /></div>
                  <div><label className="label">YouTube Short (₹)</label><input className="input" placeholder="1500" value={form.rate_yt_short} onChange={e => set('rate_yt_short', e.target.value)} /></div>
                </div>
              </div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>🌐 Other platforms</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <div><label className="label">Twitter Thread (₹)</label><input className="input" placeholder="500" value={form.rate_twitter} onChange={e => set('rate_twitter', e.target.value)} /></div>
                  <div><label className="label">LinkedIn Post (₹)</label><input className="input" placeholder="800" value={form.rate_linkedin} onChange={e => set('rate_linkedin', e.target.value)} /></div>
                  <div><label className="label">Blog Post (₹)</label><input className="input" placeholder="600" value={form.rate_blog} onChange={e => set('rate_blog', e.target.value)} /></div>
                  <div><label className="label">Podcast Mention (₹)</label><input className="input" placeholder="700" value={form.rate_podcast} onChange={e => set('rate_podcast', e.target.value)} /></div>
                </div>
              </div>
              <div><label className="label">Custom bundle package</label><input className="input" placeholder="Reel + Stories + YT Short = ₹5,500" value={form.custom_package} onChange={e => set('custom_package', e.target.value)} /></div>
              <div><label className="label">Turnaround time</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 6 }}>
                  {TURNAROUND.map(t => <div key={t} className={`chip ${form.turnaround === t ? 'selected' : ''}`} onClick={() => set('turnaround', t)}>{t}</div>)}
                </div>
              </div>

              <div><label className="label">Valid till (optional) <span style={{ color: 'var(--text3)', fontWeight: 400 }}>— leave blank to hide from rate card</span></label>
                <input className="input" type="month" value={form.rate_valid_till} onChange={e => set('rate_valid_till', e.target.value)} />
              </div>

              <div>
                <label className="label" style={{ marginBottom: 10 }}>Terms &amp; notes — tick what applies to you</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { key: 'term_advance', label: '50% advance payment required before work begins' },
                    { key: 'term_gst', label: 'All prices exclusive of 18% GST · GST invoice provided' },
                    { key: 'term_usage', label: 'Usage rights for 6 months · Exclusivity available on request' },
                    { key: 'term_revision', label: '1 free revision per deliverable · Additional revisions charged separately' },
                    { key: 'term_custom', label: 'Custom packages available · Contact to discuss' },
                    { key: 'term_brief', label: 'Detailed brand brief required before starting' },
                    { key: 'term_approval', label: 'Content requires brand approval before posting' },
                    { key: 'term_cancel', label: '50% cancellation fee after work has started' },
                  ].map(t => (
                    <div key={t.key} onClick={() => set(t.key, form[t.key as keyof typeof form] === 'yes' ? '' : 'yes')}
                      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: form[t.key as keyof typeof form] === 'yes' ? 'var(--orange-dim)' : 'var(--bg3)', border: `1px solid ${form[t.key as keyof typeof form] === 'yes' ? 'var(--orange-border)' : 'var(--border)'}`, borderRadius: 10, cursor: 'pointer', transition: 'all 0.15s' }}>
                      <div style={{ width: 18, height: 18, borderRadius: 5, border: `2px solid ${form[t.key as keyof typeof form] === 'yes' ? 'var(--orange)' : 'var(--border2)'}`, background: form[t.key as keyof typeof form] === 'yes' ? 'var(--orange)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.15s' }}>
                        {form[t.key as keyof typeof form] === 'yes' && <span style={{ color: 'white', fontSize: 11, fontWeight: 700 }}>✓</span>}
                      </div>
                      <span style={{ fontSize: 12, color: form[t.key as keyof typeof form] === 'yes' ? 'var(--orange2)' : 'var(--text2)', lineHeight: 1.4 }}>{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 5 — Portfolio */}
          {step === 5 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ background: 'var(--orange-dim)', border: '1px solid var(--orange-border)', borderRadius: 12, padding: '12px 16px' }}>
                <p style={{ fontSize: 12, color: 'var(--orange2)', lineHeight: 1.6 }}>📌 Upload your 2 best content pieces as images and 2 as videos (max 60 sec). Brands watch these to judge your content quality!</p>
              </div>

              {/* Existing portfolio images from previous save */}
              {existingPortfolioImages.length > 0 && portfolioImages.length === 0 && (
                <div>
                  <label className="label" style={{ marginBottom: 8 }}>Current portfolio images</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 8 }}>
                    {existingPortfolioImages.map((url, i) => (
                      <div key={i} style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border2)' }}>
                        <img src={url} alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }} />
                        <div style={{ position: 'absolute', bottom: 6, left: 6, background: 'rgba(0,0,0,0.7)', fontSize: 10, color: 'white', padding: '2px 8px', borderRadius: 4 }}>Saved ✅</div>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 4 }}>Upload new images below to replace these:</p>
                </div>
              )}

              {/* Images */}
              <div>
                <label className="label" style={{ marginBottom: 12 }}>Portfolio images (max 2) — your best posts or campaign shots</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {portfolioImages.map((img, i) => (
                    <div key={i} style={{ position: 'relative', aspectRatio: '1', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border2)' }}>
                      <img src={img.preview} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <button onClick={() => removeImage(i)} style={{ position: 'absolute', top: 6, right: 6, width: 24, height: 24, background: 'rgba(0,0,0,0.7)', border: 'none', borderRadius: '50%', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                  {portfolioImages.length < 2 && (
                    <label style={{ aspectRatio: '1', border: '2px dashed var(--orange-border)', borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', gap: 8, background: 'var(--bg3)' }}>
                      <Upload size={24} color="var(--orange)" />
                      <span style={{ fontSize: 11, color: 'var(--text3)' }}>Add image</span>
                      <input type="file" accept="image/*" multiple onChange={handlePortfolioImage} style={{ display: 'none' }} />
                    </label>
                  )}
                </div>
              </div>

              {/* Existing portfolio videos from previous save */}
              {existingPortfolioVideos.length > 0 && portfolioVideos.length === 0 && (
                <div>
                  <label className="label" style={{ marginBottom: 8 }}>Current portfolio videos</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 8 }}>
                    {existingPortfolioVideos.map((url, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: 10 }}>
                        <span style={{ fontSize: 20 }}>🎬</span>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: 12, color: 'var(--text)', fontWeight: 500 }}>Video {i + 1}</p>
                          <p style={{ fontSize: 10, color: '#22c55e' }}>Already saved ✅</p>
                        </div>
                        <a href={url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: 'var(--orange)', textDecoration: 'none' }}>Preview</a>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 4 }}>Upload new videos below to replace these:</p>
                </div>
              )}

              {/* Videos */}
              <div>
                <label className="label" style={{ marginBottom: 12 }}>Portfolio videos (max 2, max 60 sec each) — your best Reels or YouTube clips</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {portfolioVideos.map((vid, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: 10 }}>
                      <span style={{ fontSize: 20 }}>🎬</span>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: 12, color: 'var(--text)', fontWeight: 500, marginBottom: 2 }}>{vid.name}</p>
                        <p style={{ fontSize: 10, color: 'var(--text3)' }}>Video {i + 1} uploaded ✅</p>
                      </div>
                      <button onClick={() => removeVideo(i)} style={{ background: 'rgba(255,68,68,0.1)', border: '1px solid rgba(255,68,68,0.2)', borderRadius: 6, color: '#FF6666', cursor: 'pointer', padding: '4px 10px', fontSize: 11 }}>Remove</button>
                    </div>
                  ))}
                  {portfolioVideos.length < 2 && (
                    <label style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', border: '2px dashed var(--orange-border)', borderRadius: 10, cursor: 'pointer', background: 'var(--bg3)' }}>
                      <Upload size={20} color="var(--orange)" />
                      <div>
                        <p style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>Upload video {portfolioVideos.length + 1}</p>
                        <p style={{ fontSize: 11, color: 'var(--text3)' }}>MP4, MOV — max 60 seconds</p>
                      </div>
                      <input type="file" accept="video/*" onChange={handlePortfolioVideo} style={{ display: 'none' }} />
                    </label>
                  )}
                </div>
              </div>

              <p style={{ fontSize: 11, color: 'var(--text3)', textAlign: 'center' }}>Portfolio is optional but strongly recommended — creators with portfolio get 3x more brand inquiries!</p>
            </div>
          )}

          {/* STEP 6 — Preferences */}
          {step === 6 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div><label className="label">Preferred collaboration type</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 6 }}>
                  {COLLAB_TYPES.map(t => <div key={t} className={`chip ${form.collab_type === t ? 'selected' : ''}`} onClick={() => set('collab_type', t)}>{t}</div>)}
                </div>
              </div>
              <div><label className="label">Categories you won&apos;t work with</label><input className="input" placeholder="Tobacco, alcohol, gambling..." value={form.categories_avoid} onChange={e => set('categories_avoid', e.target.value)} /></div>
              <div><label className="label">Typical response time</label>
                <select className="input" value={form.response_time} onChange={e => set('response_time', e.target.value)}>
                  <option value="">Select</option>
                  <option>Within 24 hours</option>
                  <option>Within 48 hours</option>
                  <option>Within 1 week</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 7 — Contact */}
          {step === 7 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div><label className="label">Email *</label><input className="input" type="email" placeholder="you@gmail.com" value={form.email} onChange={e => set('email', e.target.value)} /></div>
              <div><label className="label">WhatsApp number</label><input className="input" placeholder="+91 98765 43210" value={form.whatsapp} onChange={e => set('whatsapp', e.target.value)} /></div>
              <div style={{ background: 'var(--orange-dim)', border: '1px solid var(--orange-border)', borderRadius: 12, padding: 16 }}>
                <p style={{ fontSize: 13, color: 'var(--orange2)', fontWeight: 500, marginBottom: 4 }}>Almost done! 🎉</p>
                <p style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.6 }}>After submitting, AI will generate your complete bio, media kit and profile in about 15 seconds.</p>
              </div>
            </div>
          )}

          {/* NAV */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
            {step > 0 ? (
              <button className="btn-ghost" onClick={back} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <ChevronLeft size={16} /> Back
              </button>
            ) : <span />}
            {step < STEPS.length - 1 ? (
              <button className="btn-primary" onClick={next} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                Next <ChevronRight size={16} />
              </button>
            ) : (
              <button className="btn-primary" onClick={submit} disabled={loading} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                ✨ Generate my profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
