'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { ChevronRight, ChevronLeft, Upload, X } from 'lucide-react'
import PhotoCropper from '@/components/PhotoCropper'

const NICHES = ['Fashion & Lifestyle','Tech & Gadgets','Food & Cooking','Finance & Investing','Gaming','Fitness & Health','Travel','Education & Coaching','Comedy & Entertainment','Beauty & Skincare','Business','Other']
const PLATFORMS = ['Instagram','YouTube','LinkedIn','Twitter / X','Podcast','Blog','Moj / Josh','Snapchat']
const VIBES = ['Educational & Informative','Fun & Entertaining','Honest & Raw','Aspirational & Aesthetic','Relatable & Desi','Professional & Corporate']

const STEPS = [
  { title: 'Basic identity', sub: 'Who you are — takes 1 min' },
  { title: 'Your numbers', sub: 'Platforms, stats & rates — takes 2 mins' },
  { title: 'Final details', sub: 'Contact & portfolio — takes 1 min' },
]

export default function Onboarding() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState('')
  const [savedStep, setSavedStep] = useState<number | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [rawPhoto, setRawPhoto] = useState<string | null>(null)
  const [showCropper, setShowCropper] = useState(false)

  const [portfolioImages, setPortfolioImages] = useState<{ file: File; preview: string }[]>([])
  const [portfolioVideos, setPortfolioVideos] = useState<{ file: File; preview: string; name: string }[]>([])
  const [existingPortfolioImages, setExistingPortfolioImages] = useState<string[]>([])
  const [existingPortfolioVideos, setExistingPortfolioVideos] = useState<string[]>([])

  const [form, setForm] = useState({
    full_name: '', username: '', city: '', niche: '', languages: '', bio_note: '', vibe: '',
    platforms: [] as string[], instagram_handle: '', youtube_channel: '',
    instagram_followers: '', youtube_subscribers: '', avg_views: '', engagement_rate: '',
    follower_growth: '',
    audience_gender: '', audience_age: '', top_cities: '',
    brands_worked: '', best_campaign: '', awards: '',
    rate_reel: '', rate_post: '', rate_yt_dedicated: '', rate_yt_integration: '',
    custom_package: '', turnaround: '',
    rate_carousel: '', rate_stories: '', rate_story_link: '',
    rate_yt_short: '', rate_twitter: '', rate_linkedin: '', rate_blog: '', rate_podcast: '',
    rate_valid_till: '',
    term_advance: '', term_gst: '', term_usage: '', term_revision: '',
    term_custom: '', term_brief: '', term_approval: '', term_cancel: '',
    skills: [] as string[],
    collab_type: '', categories_avoid: '', response_time: '',
    email: '', whatsapp: '',
  })

  useEffect(() => {
    async function loadExisting() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single()
      if (!data) return
      if (data.photo_url) setPhotoPreview(data.photo_url)
      if (data.status === 'draft' && data.draft_step && data.draft_step > 0) {
        setStep(Math.min(data.draft_step, STEPS.length - 1))
      }
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
        vibe: data.vibe || '',
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
    if (step === 2 && !form.email) {
      setError('Please enter your email!'); return false
    }
    setError(''); return true
  }

  async function autoSave(currentStep: number) {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { bio_note, ...formWithoutBioNote } = form
      void bio_note
      await supabase.from('profiles').upsert({
        id: user.id,
        ...formWithoutBioNote,
        platforms: form.platforms.join(', '),
        skills: form.skills.join(', '),
        status: 'draft',
        draft_step: currentStep,
      })
      setSavedStep(currentStep)
    } catch (e) {
      console.error('Auto-save failed (non-fatal):', e)
    }
  }

  function next() {
    if (validate()) {
      const nextStep = step + 1
      setStep(nextStep)
      autoSave(step)
    }
  }
  function back() { setError(''); setStep(s => s - 1) }

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

  async function uploadToR2(file: File, key: string): Promise<string> {
    try {
      const fd = new FormData()
      fd.append('file', file)
      fd.append('key', key)
      const res = await fetch('/api/upload', { method: 'POST', body: fd })
      if (!res.ok) { const err = await res.json(); console.error('R2 upload error:', err); return '' }
      const { url } = await res.json()
      return url || ''
    } catch (e) {
      console.error('R2 upload failed:', e)
      return ''
    }
  }

  async function submit() {
    if (!validate()) return
    setGenerating(true)
    setError('')
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/auth'); return }

      let photo_url = photoPreview || ''
      let portfolio_image1 = existingPortfolioImages[0] || ''
      let portfolio_image2 = existingPortfolioImages[1] || ''
      let portfolio_video1 = existingPortfolioVideos[0] || ''
      let portfolio_video2 = existingPortfolioVideos[1] || ''

      try {
        if (photoFile) {
          const ext = photoFile.name.split('.').pop() || 'jpg'
          photo_url = await uploadPhotoToSupabase(photoFile, `${user.id}.${ext}`)
        }
        if (portfolioImages[0]) {
          const ext = portfolioImages[0].file.name.split('.').pop() || 'jpg'
          portfolio_image1 = await uploadToR2(portfolioImages[0].file, `portfolio/${user.id}_img1.${ext}`)
        }
        if (portfolioImages[1]) {
          const ext = portfolioImages[1].file.name.split('.').pop() || 'jpg'
          portfolio_image2 = await uploadToR2(portfolioImages[1].file, `portfolio/${user.id}_img2.${ext}`)
        }
        if (portfolioVideos[0]) {
          const ext = portfolioVideos[0].file.name.split('.').pop() || 'mp4'
          portfolio_video1 = await uploadToR2(portfolioVideos[0].file, `videos/${user.id}_vid1.${ext}`)
        }
        if (portfolioVideos[1]) {
          const ext = portfolioVideos[1].file.name.split('.').pop() || 'mp4'
          portfolio_video2 = await uploadToR2(portfolioVideos[1].file, `videos/${user.id}_vid2.${ext}`)
        }
      } catch (uploadErr) {
        console.error('File upload error (non-fatal):', uploadErr)
      }

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
        setError(`Profile save failed: ${upsertError.message}`)
        setGenerating(false)
        return
      }

      let bio = ''
      let tagline = ''
      try {
        const res = await fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, platforms: form.platforms.join(', '), skills: form.skills.join(', ') })
        })
        if (res.ok) { const result = await res.json(); bio = result.bio || ''; tagline = result.tagline || '' }
      } catch (genErr) {
        console.error('AI generation failed (non-fatal):', genErr)
        bio = `I create ${form.niche} content from ${form.city}, helping my audience with actionable insights across ${form.platforms.join(', ')}.`
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

        {/* Progress bar */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 11, color: 'var(--text3)' }}>Progress</span>
            <span style={{ fontSize: 11, color: 'var(--orange)', fontWeight: 600 }}>{Math.round(((step) / STEPS.length) * 100)}%</span>
          </div>
          <div style={{ height: 4, background: 'var(--bg3)', borderRadius: 4 }}>
            <div style={{ height: '100%', background: 'var(--orange)', borderRadius: 4, width: `${((step) / STEPS.length) * 100}%`, transition: 'width 0.3s ease' }} />
          </div>
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

        {/* Time estimate */}
        <div style={{ marginTop: 'auto', padding: '12px', background: 'var(--bg3)', borderRadius: 10, border: '1px solid var(--border)' }}>
          <p style={{ fontSize: 11, color: 'var(--text3)', lineHeight: 1.5 }}>⏱️ Takes about <span style={{ color: 'var(--orange)', fontWeight: 600 }}>4 minutes</span> total. Your profile goes live instantly after!</p>
        </div>
      </div>

      {/* FORM AREA */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '40px 32px', width: '100%' }}>

          {/* Step header */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ fontSize: 12, color: 'var(--orange)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Step {step + 1} of {STEPS.length}</div>
              {savedStep !== null && (
                <div style={{ fontSize: 11, color: '#22c55e', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span>✓</span> Progress saved
                </div>
              )}
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, marginBottom: 6 }}>{STEPS[step].title}</h1>
            <p style={{ color: 'var(--text2)', fontSize: 14 }}>{STEPS[step].sub}</p>
          </div>

          {error && <div style={{ background: 'rgba(255,68,68,0.1)', border: '1px solid rgba(255,68,68,0.3)', color: '#FF6666', padding: '10px 14px', borderRadius: 10, fontSize: 13, marginBottom: 20 }}>{error}</div>}

          {/* ── STEP 0 — Basic Identity ── */}
          {step === 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {/* Photo upload */}
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
              <div><label className="label">Username * <span style={{ color: 'var(--text3)', fontWeight: 400 }}>— identitykit.in/yourname</span></label><input className="input" placeholder="anilprajapati" value={form.username} onChange={e => set('username', e.target.value.toLowerCase().replace(/\s/g, ''))} /></div>
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

          {/* ── STEP 1 — Numbers (platforms + stats + audience + brands + rates) ── */}
          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>

              {/* Platforms */}
              <div>
                <label className="label">Platforms you create on *</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 6 }}>
                  {PLATFORMS.map(p => <div key={p} className={`chip ${form.platforms.includes(p) ? 'selected' : ''}`} onClick={() => toggleArr('platforms', p)}>{p}</div>)}
                </div>
              </div>

              {/* Handles */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div><label className="label">Instagram handle</label><input className="input" placeholder="@anilprajapati" value={form.instagram_handle} onChange={e => set('instagram_handle', e.target.value)} /></div>
                <div><label className="label">YouTube channel</label><input className="input" placeholder="Anil King" value={form.youtube_channel} onChange={e => set('youtube_channel', e.target.value)} /></div>
              </div>

              {/* Stats */}
              <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 12, padding: 16 }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>📊 Your stats</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <div><label className="label">Instagram followers</label><input className="input" placeholder="25,000" value={form.instagram_followers} onChange={e => set('instagram_followers', e.target.value)} /></div>
                  <div><label className="label">YouTube subscribers</label><input className="input" placeholder="10,000" value={form.youtube_subscribers} onChange={e => set('youtube_subscribers', e.target.value)} /></div>
                  <div><label className="label">Avg views per post</label><input className="input" placeholder="35,000" value={form.avg_views} onChange={e => set('avg_views', e.target.value)} /></div>
                  <div><label className="label">Engagement rate</label><input className="input" placeholder="4.8%" value={form.engagement_rate} onChange={e => set('engagement_rate', e.target.value)} /></div>
                </div>
              </div>

              {/* Audience */}
              <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 12, padding: 16 }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>👥 Your audience</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div>
                    <label className="label">Audience gender</label>
                    <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                      {['Mostly Male', 'Mostly Female', 'Equal Mix'].map(g => <div key={g} className={`chip ${form.audience_gender === g ? 'selected' : ''}`} onClick={() => set('audience_gender', g)}>{g}</div>)}
                    </div>
                  </div>
                  <div>
                    <label className="label">Audience age group</label>
                    <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                      {['13-17', '18-24', '25-34', '35+'].map(a => <div key={a} className={`chip ${form.audience_age === a ? 'selected' : ''}`} onClick={() => set('audience_age', a)}>{a}</div>)}
                    </div>
                  </div>
                  <div><label className="label">Top cities your audience is from</label><input className="input" placeholder="Mumbai, Delhi, Bangalore" value={form.top_cities} onChange={e => set('top_cities', e.target.value)} /></div>
                </div>
              </div>

              {/* Brands + best campaign */}
              <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 12, padding: 16 }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>💼 Brand experience</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div><label className="label">Brands you&apos;ve worked with</label><input className="input" placeholder="Mamaearth, boAt, Nykaa" value={form.brands_worked} onChange={e => set('brands_worked', e.target.value)} /></div>
                  <div><label className="label">Your best campaign result</label><textarea className="input" placeholder="My Reel for Nykaa got 2M views and 15K saves..." value={form.best_campaign} onChange={e => set('best_campaign', e.target.value)} style={{ minHeight: 80, resize: 'vertical' }} /></div>
                </div>
              </div>

              {/* Key rates */}
              <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 12, padding: 16 }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>💰 Your rates (₹)</p>
                <p style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 12 }}>Add your key rates — you can add more from your dashboard later</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <div><label className="label">Instagram Reel</label><input className="input" placeholder="3000" value={form.rate_reel} onChange={e => set('rate_reel', e.target.value)} /></div>
                  <div><label className="label">Static Post</label><input className="input" placeholder="1000" value={form.rate_post} onChange={e => set('rate_post', e.target.value)} /></div>
                  <div><label className="label">YouTube Dedicated</label><input className="input" placeholder="5000" value={form.rate_yt_dedicated} onChange={e => set('rate_yt_dedicated', e.target.value)} /></div>
                  <div><label className="label">YouTube Integration</label><input className="input" placeholder="2500" value={form.rate_yt_integration} onChange={e => set('rate_yt_integration', e.target.value)} /></div>
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 2 — Final details (contact + portfolio) ── */}
          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>

              {/* Contact */}
              <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 12, padding: 16 }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>📬 Contact details</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div><label className="label">Email *</label><input className="input" type="email" placeholder="you@gmail.com" value={form.email} onChange={e => set('email', e.target.value)} /></div>
                  <div><label className="label">WhatsApp number</label><input className="input" placeholder="+91 98765 43210" value={form.whatsapp} onChange={e => set('whatsapp', e.target.value)} /></div>
                </div>
              </div>

              {/* Portfolio — optional */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <label className="label" style={{ margin: 0 }}>Portfolio <span style={{ color: '#22c55e', fontSize: 11, fontWeight: 500 }}>optional but recommended</span></label>
                </div>
                <p style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 12 }}>Creators with portfolio get 3x more brand replies. Upload your 2 best images and 2 best videos.</p>

                {existingPortfolioImages.length > 0 && portfolioImages.length === 0 && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 10 }}>
                    {existingPortfolioImages.map((url, i) => (
                      <div key={i} style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', border: '1px solid var(--border2)' }}>
                        <img src={url} alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }} />
                        <div style={{ position: 'absolute', bottom: 4, left: 4, background: 'rgba(0,0,0,0.7)', fontSize: 10, color: 'white', padding: '2px 6px', borderRadius: 4 }}>Saved ✅</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Image uploads */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
                  {portfolioImages.map((img, i) => (
                    <div key={i} style={{ position: 'relative', aspectRatio: '1', borderRadius: 10, overflow: 'hidden', border: '1px solid var(--border2)' }}>
                      <img src={img.preview} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <button onClick={() => removeImage(i)} style={{ position: 'absolute', top: 4, right: 4, width: 22, height: 22, background: 'rgba(0,0,0,0.7)', border: 'none', borderRadius: '50%', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <X size={11} />
                      </button>
                    </div>
                  ))}
                  {portfolioImages.length < 2 && (
                    <label style={{ aspectRatio: '1', border: '2px dashed var(--orange-border)', borderRadius: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', gap: 6, background: 'var(--bg3)' }}>
                      <Upload size={20} color="var(--orange)" />
                      <span style={{ fontSize: 10, color: 'var(--text3)' }}>Add image</span>
                      <input type="file" accept="image/*" multiple onChange={handlePortfolioImage} style={{ display: 'none' }} />
                    </label>
                  )}
                </div>

                {/* Video uploads */}
                {existingPortfolioVideos.length > 0 && portfolioVideos.length === 0 && (
                  <div style={{ marginBottom: 8 }}>
                    {existingPortfolioVideos.map((url, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: 8, marginBottom: 6 }}>
                        <span style={{ fontSize: 18 }}>🎬</span>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: 12, color: 'var(--text)', fontWeight: 500 }}>Video {i + 1}</p>
                          <p style={{ fontSize: 10, color: '#22c55e' }}>Already saved ✅</p>
                        </div>
                        <a href={url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: 'var(--orange)', textDecoration: 'none' }}>Preview</a>
                      </div>
                    ))}
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {portfolioVideos.map((vid, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: 8 }}>
                      <span style={{ fontSize: 18 }}>🎬</span>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: 12, color: 'var(--text)', fontWeight: 500, marginBottom: 1 }}>{vid.name}</p>
                        <p style={{ fontSize: 10, color: 'var(--text3)' }}>Video {i + 1} ✅</p>
                      </div>
                      <button onClick={() => removeVideo(i)} style={{ background: 'rgba(255,68,68,0.1)', border: '1px solid rgba(255,68,68,0.2)', borderRadius: 6, color: '#FF6666', cursor: 'pointer', padding: '3px 8px', fontSize: 11 }}>Remove</button>
                    </div>
                  ))}
                  {portfolioVideos.length < 2 && (
                    <label style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', border: '2px dashed var(--orange-border)', borderRadius: 8, cursor: 'pointer', background: 'var(--bg3)' }}>
                      <Upload size={18} color="var(--orange)" />
                      <div>
                        <p style={{ fontSize: 12, color: 'var(--text)', fontWeight: 500 }}>Upload video {portfolioVideos.length + 1}</p>
                        <p style={{ fontSize: 10, color: 'var(--text3)' }}>MP4, MOV — max 60 seconds</p>
                      </div>
                      <input type="file" accept="video/*" onChange={handlePortfolioVideo} style={{ display: 'none' }} />
                    </label>
                  )}
                </div>
              </div>

              {/* Ready banner */}
              <div style={{ background: 'var(--orange-dim)', border: '1px solid var(--orange-border)', borderRadius: 12, padding: 16, textAlign: 'center' }}>
                <p style={{ fontSize: 15, fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--orange)', marginBottom: 4 }}>🎉 You&apos;re almost done!</p>
                <p style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.6 }}>AI will generate your complete bio, media kit, rate card and CV in about 15 seconds. Your profile goes live instantly!</p>
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
