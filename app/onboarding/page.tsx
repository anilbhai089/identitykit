'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { ChevronRight, ChevronLeft, Upload } from 'lucide-react'
import PhotoCropper from '@/components/PhotoCropper'

const NICHES = ['Fashion & Lifestyle','Tech & Gadgets','Food & Cooking','Finance & Investing','Gaming','Fitness & Health','Travel','Education & Coaching','Comedy & Entertainment','Beauty & Skincare','Business','Other']
const PLATFORMS = ['Instagram','YouTube','LinkedIn','Twitter / X','Podcast','Blog','Moj / Josh','Snapchat']
const CONTENT_TYPES = ['Instagram Reel','Static Post','Carousel','Stories Pack','Story + Link','YouTube Dedicated Video','YouTube Integration','YouTube Short','Twitter Thread','LinkedIn Post','Blog Post','Podcast Mention']
const VIBES = ['Educational & Informative','Fun & Entertaining','Honest & Raw','Aspirational & Aesthetic','Relatable & Desi','Professional & Corporate']
const TURNAROUND = ['3-5 business days','5-7 business days','1-2 weeks','2+ weeks']
const COLLAB_TYPES = ['One-off campaigns','Long-term partnerships','Both']

const STEPS = [
  { title: 'Basic identity', sub: 'Who you are' },
  { title: 'Platform stats', sub: 'Your numbers' },
  { title: 'Audience data', sub: 'Who watches you' },
  { title: 'Past work', sub: 'Your experience' },
  { title: 'Your rates', sub: 'What you charge' },
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
  const photoRef = useRef<HTMLInputElement>(null)

  const [form, setForm] = useState({
    full_name: '', username: '', city: '', niche: '', languages: '', bio_note: '',
    platforms: [] as string[], instagram_handle: '', youtube_channel: '',
    instagram_followers: '', youtube_subscribers: '', avg_views: '', engagement_rate: '',
    audience_gender: '', audience_age: '', top_cities: '',
    brands_worked: '', best_campaign: '', awards: '',
    rate_reel: '', rate_post: '', rate_carousel: '', rate_stories: '',
    rate_story_link: '', rate_yt_dedicated: '', rate_yt_integration: '',
    rate_yt_short: '', rate_twitter: '', rate_linkedin: '', rate_blog: '',
    rate_podcast: '', custom_package: '', turnaround: '',
    collab_type: '', categories_avoid: '', response_time: '', vibe: '',
    email: '', whatsapp: '',
  })

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
    reader.onload = ev => {
      setRawPhoto(ev.target?.result as string)
      setShowCropper(true)
    }
    reader.readAsDataURL(file)
    // Reset input so same file can be selected again
    e.target.value = ''
  }

  function handleCropDone(file: File, preview: string) {
    setPhotoFile(file)
    setPhotoPreview(preview)
    setShowCropper(false)
    setRawPhoto(null)
  }

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

  async function submit() {
    setGenerating(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/auth'); return }

      let photo_url = ''
      if (photoFile) {
        const ext = photoFile.name.split('.').pop()
        const fileName = `${user.id}.${ext}`
        const { error: upErr } = await supabase.storage.from('profile-photos').upload(fileName, photoFile, { upsert: true, contentType: photoFile.type })
        if (!upErr) {
          const { data } = supabase.storage.from('profile-photos').getPublicUrl(fileName)
          photo_url = data.publicUrl
        }
      }

      // Save to DB first
      const profileData = { id: user.id, ...form, platforms: form.platforms.join(', '), photo_url, status: 'generating' }
      await supabase.from('profiles').upsert(profileData)

      // Generate AI content
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const { bio, tagline } = await res.json()

      await supabase.from('profiles').update({ bio, tagline, status: 'active' }).eq('id', user.id)
      router.push('/dashboard')
    } catch {
      setError('Something went wrong. Please try again!')
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
          {['Writing your professional bio...', 'Formatting your media kit...', 'Creating your rate card...', 'Setting up your profile page...'].map((item, i) => (
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
      {/* LEFT SIDEBAR */}
      <div style={{ width: 260, background: 'var(--bg2)', borderRight: '1px solid var(--border)', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0 }}>
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

          {/* STEP 0 */}
          {step === 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px', background: 'var(--bg2)', border: '1px solid var(--border2)', borderRadius: 12 }}>
                <div onClick={() => photoRef.current?.click()} style={{ width: 72, height: 72, borderRadius: '50%', border: '2px dashed var(--orange-border)', background: photoPreview ? 'transparent' : 'var(--bg3)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', overflow: 'hidden', flexShrink: 0 }}>
                  {photoPreview ? <img src={photoPreview} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <Upload size={22} color="var(--orange)" />}
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 3 }}>Profile photo</p>
                  <p style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 8 }}>Used in your media kit and CV</p>
                  <button onClick={() => photoRef.current?.click()} style={{ fontSize: 11, padding: '5px 12px', background: 'var(--orange-dim)', border: '1px solid var(--orange-border)', borderRadius: 6, color: 'var(--orange)', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
                    {photoPreview ? 'Change photo' : 'Choose photo'}
                  </button>
                </div>
                <input ref={photoRef} type="file" accept="image/*" onChange={handlePhoto} style={{ display: 'none' }} />
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

          {/* STEP 1 */}
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
            </div>
          )}

          {/* STEP 2 */}
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

          {/* STEP 3 */}
          {step === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div><label className="label">Brands you&apos;ve worked with</label><input className="input" placeholder="Mamaearth, boAt, Nykaa" value={form.brands_worked} onChange={e => set('brands_worked', e.target.value)} /></div>
              <div><label className="label">Your best campaign or achievement</label><textarea className="input" placeholder="My Reel for Nykaa got 2M views..." value={form.best_campaign} onChange={e => set('best_campaign', e.target.value)} style={{ minHeight: 90, resize: 'vertical' }} /></div>
              <div><label className="label">Awards or press mentions (optional)</label><input className="input" placeholder="Forbes 30 Under 30, ET feature..." value={form.awards} onChange={e => set('awards', e.target.value)} /></div>
            </div>
          )}

          {/* STEP 4 */}
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
                  <div><label className="label">Dedicated Video (₹)</label><input className="input" placeholder="3000" value={form.rate_yt_dedicated} onChange={e => set('rate_yt_dedicated', e.target.value)} /></div>
                  <div><label className="label">Integration (₹)</label><input className="input" placeholder="1500" value={form.rate_yt_integration} onChange={e => set('rate_yt_integration', e.target.value)} /></div>
                  <div><label className="label">YouTube Short (₹)</label><input className="input" placeholder="1000" value={form.rate_yt_short} onChange={e => set('rate_yt_short', e.target.value)} /></div>
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
              <div><label className="label">Custom bundle package</label><input className="input" placeholder="Reel + Stories + YT = ₹5,500" value={form.custom_package} onChange={e => set('custom_package', e.target.value)} /></div>
              <div><label className="label">Turnaround time</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 6 }}>
                  {TURNAROUND.map(t => <div key={t} className={`chip ${form.turnaround === t ? 'selected' : ''}`} onClick={() => set('turnaround', t)}>{t}</div>)}
                </div>
              </div>
            </div>
          )}

          {/* STEP 5 */}
          {step === 5 && (
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

          {/* STEP 6 */}
          {step === 6 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div><label className="label">Email *</label><input className="input" type="email" placeholder="you@gmail.com" value={form.email} onChange={e => set('email', e.target.value)} /></div>
              <div><label className="label">WhatsApp number</label><input className="input" placeholder="+91 98765 43210" value={form.whatsapp} onChange={e => set('whatsapp', e.target.value)} /></div>
              <div style={{ background: 'var(--orange-dim)', border: '1px solid var(--orange-border)', borderRadius: 12, padding: 16 }}>
                <p style={{ fontSize: 13, color: 'var(--orange2)', fontWeight: 500, marginBottom: 4 }}>🎉 Almost done!</p>
                <p style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.6 }}>After submitting, AI will generate your complete bio, media kit and profile in about 15 seconds.</p>
              </div>
            </div>
          )}

          {/* NAV BUTTONS */}
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
