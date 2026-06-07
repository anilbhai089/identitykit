'use client'
import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

const SECTION_CONFIG: Record<string, { title: string; icon: string; color: string; fields: any[] }> = {
  photo: {
    title: 'Profile photo',
    icon: 'ti-camera',
    color: '#FF6B2B',
    fields: [], // handled specially
  },
  bio: {
    title: 'Your bio',
    icon: 'ti-sparkles',
    color: '#a855f7',
    fields: [
      { key: 'bio_note', label: 'Bio note / personal note', placeholder: 'e.g. I love creating content about finance that actually makes sense to common people', type: 'textarea', tip: 'Claude will use this to write your bio in your voice' },
      { key: 'awards', label: 'Awards & recognition', placeholder: 'e.g. Featured in Forbes India, TEDx Speaker, Creator of the Year 2024', type: 'textarea' },
      { key: 'skills', label: 'Skills & tools', placeholder: 'e.g. Video editing, Canva, Adobe Premiere, Scriptwriting', type: 'text' },
    ],
  },
  platforms: {
    title: 'Platform stats',
    icon: 'ti-chart-bar',
    color: '#3b82f6',
    fields: [
      { key: 'instagram_handle', label: 'Instagram handle', placeholder: '@yourhandle', type: 'text' },
      { key: 'instagram_followers', label: 'Instagram followers', placeholder: 'e.g. 45000', type: 'text' },
      { key: 'youtube_channel', label: 'YouTube channel', placeholder: 'Channel name or URL', type: 'text' },
      { key: 'youtube_subscribers', label: 'YouTube subscribers', placeholder: 'e.g. 120000', type: 'text' },
      { key: 'avg_views', label: 'Average views per post/video', placeholder: 'e.g. 25000', type: 'text' },
      { key: 'engagement_rate', label: 'Engagement rate (%)', placeholder: 'e.g. 4.2', type: 'text' },
      { key: 'follower_growth', label: 'Monthly follower growth', placeholder: 'e.g. 2000 per month', type: 'text' },
    ],
  },
  audience: {
    title: 'Audience demographics',
    icon: 'ti-users',
    color: '#22c55e',
    fields: [
      { key: 'audience_gender', label: 'Audience gender split', placeholder: 'e.g. 60% Male, 40% Female', type: 'text' },
      { key: 'audience_age', label: 'Age groups', placeholder: 'e.g. 18-24 (45%), 25-34 (35%), 35+ (20%)', type: 'text' },
      { key: 'top_cities', label: 'Top cities/regions', placeholder: 'e.g. Mumbai, Delhi, Bangalore, Pune', type: 'text' },
    ],
  },
  brands: {
    title: 'Brand collaborations',
    icon: 'ti-building-store',
    color: '#f59e0b',
    fields: [
      { key: 'brands_worked', label: 'Brands you have worked with', placeholder: 'e.g. Myntra, Boat, MamaEarth, CRED, Razorpay', type: 'textarea', tip: 'Separate brands with commas' },
      { key: 'best_campaign', label: 'Best campaign result', placeholder: 'e.g. Boat campaign got 2.1M views and 8% engagement — 3x brand average', type: 'textarea' },
      { key: 'collab_type', label: 'Types of collabs you prefer', placeholder: 'e.g. Long term ambassador, one-time campaigns, product reviews', type: 'text' },
      { key: 'categories_avoid', label: 'Categories to avoid', placeholder: 'e.g. Alcohol, tobacco, gambling', type: 'text' },
    ],
  },
  rates: {
    title: 'Rate card',
    icon: 'ti-currency-rupee',
    color: '#ec4899',
    fields: [
      { key: 'rate_reel', label: 'Instagram Reel (₹)', placeholder: 'e.g. 15000', type: 'text' },
      { key: 'rate_post', label: 'Instagram Static Post (₹)', placeholder: 'e.g. 8000', type: 'text' },
      { key: 'rate_carousel', label: 'Instagram Carousel (₹)', placeholder: 'e.g. 10000', type: 'text' },
      { key: 'rate_stories', label: 'Instagram Stories / 3 frames (₹)', placeholder: 'e.g. 5000', type: 'text' },
      { key: 'rate_yt_dedicated', label: 'YouTube Dedicated Video (₹)', placeholder: 'e.g. 50000', type: 'text' },
      { key: 'rate_yt_integration', label: 'YouTube Integration (₹)', placeholder: 'e.g. 25000', type: 'text' },
      { key: 'rate_yt_short', label: 'YouTube Short (₹)', placeholder: 'e.g. 8000', type: 'text' },
      { key: 'rate_linkedin', label: 'LinkedIn Post (₹)', placeholder: 'e.g. 12000', type: 'text' },
      { key: 'rate_twitter', label: 'Twitter/X Post (₹)', placeholder: 'e.g. 5000', type: 'text' },
      { key: 'custom_package', label: 'Custom package offer', placeholder: 'e.g. 3 Reels + 5 Stories + 1 YouTube integration for ₹75,000', type: 'textarea' },
      { key: 'rate_valid_till', label: 'Rate card valid till', placeholder: 'e.g. December 2025', type: 'text' },
    ],
  },
  portfolio: {
    title: 'Portfolio media',
    icon: 'ti-photo',
    color: '#14b8a6',
    fields: [], // handled specially — redirect to onboarding step 3
  },
  terms: {
    title: 'Collaboration terms',
    icon: 'ti-file-text',
    color: '#6366f1',
    fields: [
      { key: 'term_advance', label: 'Advance payment required?', type: 'select', options: ['', '50% advance required', '100% advance required', 'No advance needed', '30% advance required'] },
      { key: 'term_gst', label: 'GST applicable?', type: 'select', options: ['', 'GST applicable (18%)', 'GST not applicable', 'GST included in rate'] },
      { key: 'term_usage', label: 'Usage rights', type: 'select', options: ['', 'No paid usage rights', 'Paid usage rights — contact for pricing', '30 days usage rights included', '90 days usage rights included'] },
      { key: 'term_revision', label: 'Revisions included', type: 'select', options: ['', '1 revision included', '2 revisions included', 'No revisions — brief must be final', 'Unlimited revisions'] },
      { key: 'term_brief', label: 'Brief requirement', type: 'select', options: ['', 'Detailed brief required before starting', 'Rough brief okay', 'No brief needed — creative freedom preferred'] },
      { key: 'term_approval', label: 'Content approval', type: 'select', options: ['', 'Content shared for approval before posting', 'No approval needed', 'Approval only for scripted content'] },
      { key: 'term_cancel', label: 'Cancellation policy', type: 'select', options: ['', 'No refund after work starts', '50% refund if cancelled before delivery', 'Full refund only before brief acceptance'] },
      { key: 'term_custom', label: 'Custom term (optional)', placeholder: 'Any other term you want to mention', type: 'text' },
      { key: 'response_time', label: 'Response time', placeholder: 'e.g. Replies within 24 hours on weekdays', type: 'text' },
    ],
  },
}

export default function EditSection({ params }: { params: Promise<{ section: string }> }) {
  const { section } = use(params)
  const router = useRouter()
  const config = SECTION_CONFIG[section]
  const [form, setForm] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/auth'); return }
      setUserId(user.id)
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single()
      if (!data) { router.push('/onboarding'); return }
      const initial: Record<string, string> = {}
      config?.fields?.forEach(f => {
        initial[f.key] = data[f.key] || ''
      })
      setForm(initial)
      setLoading(false)
    }
    load()
  }, [section, router])

  // Portfolio goes back to onboarding
  useEffect(() => {
    if (section === 'portfolio') {
      router.push('/onboarding')
    }
  }, [section, router])

  async function save() {
    if (!userId) return
    setSaving(true)
    const updateData: Record<string, string> = {}
    config?.fields?.forEach(f => {
      if (form[f.key] !== undefined) updateData[f.key] = form[f.key]
    })
    await supabase.from('profiles').update(updateData).eq('id', userId)
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  if (!config || section === 'portfolio') return null

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#0A0A0F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 32, height: 32, border: '3px solid #1A1A24', borderTopColor: '#FF6B2B', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0F', fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#fff' }}>
      <style>{`*{box-sizing:border-box;margin:0;padding:0} input,textarea,select{outline:none} input:focus,textarea:focus,select:focus{border-color:rgba(255,107,43,0.5)!important}`}</style>

      {/* NAV */}
      <nav style={{ background: '#111118', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '0 24px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={() => router.push('/dashboard')} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: 13, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            <i className="ti ti-arrow-left" style={{ fontSize: 16 }}></i>
            Back to dashboard
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 26, height: 26, background: '#FF6B2B', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 11, color: 'white' }}>IK</div>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 680, margin: '0 auto', padding: '36px 24px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
          <div style={{ width: 44, height: 44, background: `${config.color}18`, border: `1px solid ${config.color}30`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className={`ti ${config.icon}`} style={{ fontSize: 22, color: config.color }}></i>
          </div>
          <div>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800 }}>{config.title}</h1>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>Changes save directly to your profile</p>
          </div>
        </div>

        {/* Fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {config.fields.map(field => (
            <div key={field.key}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.55)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {field.label}
              </label>
              {field.tip && (
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 8, lineHeight: 1.5 }}>💡 {field.tip}</p>
              )}
              {field.type === 'textarea' ? (
                <textarea
                  value={form[field.key] || ''}
                  onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                  placeholder={field.placeholder}
                  rows={3}
                  style={{ width: '100%', background: '#111118', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '12px 14px', color: '#fff', fontSize: 14, fontFamily: "'Plus Jakarta Sans',sans-serif", resize: 'vertical', lineHeight: 1.6, transition: 'border-color 0.2s' }}
                />
              ) : field.type === 'select' ? (
                <select
                  value={form[field.key] || ''}
                  onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                  style={{ width: '100%', background: '#111118', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '12px 14px', color: form[field.key] ? '#fff' : 'rgba(255,255,255,0.3)', fontSize: 14, fontFamily: "'Plus Jakarta Sans',sans-serif", cursor: 'pointer', transition: 'border-color 0.2s', appearance: 'none' }}
                >
                  {field.options.map((opt: string) => (
                    <option key={opt} value={opt} style={{ background: '#111118' }}>{opt || '— Select —'}</option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  value={form[field.key] || ''}
                  onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                  placeholder={field.placeholder}
                  style={{ width: '100%', background: '#111118', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '12px 14px', color: '#fff', fontSize: 14, fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'border-color 0.2s' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Save button */}
        <div style={{ marginTop: 32, display: 'flex', gap: 12, alignItems: 'center' }}>
          <button
            onClick={save}
            disabled={saving}
            style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 28px', background: saved ? '#22c55e' : config.color, border: 'none', borderRadius: 10, color: '#fff', fontSize: 14, fontWeight: 700, cursor: saving ? 'wait' : 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif", transition: 'all 0.2s', opacity: saving ? 0.7 : 1 }}
          >
            <i className={`ti ${saved ? 'ti-check' : saving ? 'ti-loader' : 'ti-device-floppy'}`} style={{ fontSize: 16 }}></i>
            {saved ? 'Saved!' : saving ? 'Saving...' : 'Save changes'}
          </button>
          <button
            onClick={() => router.push('/dashboard')}
            style={{ padding: '12px 20px', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, color: 'rgba(255,255,255,0.4)', fontSize: 14, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            Back
          </button>
        </div>

        {/* Bio regeneration note */}
        {section === 'bio' && (
          <div style={{ marginTop: 20, background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.15)', borderRadius: 12, padding: '14px 16px' }}>
            <p style={{ fontSize: 12, color: 'rgba(168,85,247,0.8)', lineHeight: 1.6 }}>
              ✨ After saving, go back and use <strong>Update profile</strong> from the dashboard to regenerate your AI bio with the new information.
            </p>
          </div>
        )}

      </div>
    </div>
  )
}
