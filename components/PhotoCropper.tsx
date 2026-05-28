'use client'
import { useState, useCallback, useRef } from 'react'
import Cropper from 'react-easy-crop'

interface Point { x: number; y: number }
interface Area { x: number; y: number; width: number; height: number }

async function getCroppedImg(imageSrc: string, pixelCrop: Area): Promise<Blob> {
  const image = await createImageBitmap(await (await fetch(imageSrc)).blob())
  const canvas = document.createElement('canvas')
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height
  const ctx = canvas.getContext('2d')!
  ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height)
  return new Promise(resolve => canvas.toBlob(blob => resolve(blob!), 'image/jpeg', 0.95))
}

interface Props {
  onDone: (file: File, preview: string) => void
  onCancel: () => void
  initialImage: string
}

export default function PhotoCropper({ onDone, onCancel, initialImage }: Props) {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const [saving, setSaving] = useState(false)

  const onCropComplete = useCallback((_: Area, croppedPixels: Area) => {
    setCroppedAreaPixels(croppedPixels)
  }, [])

  async function handleSave() {
    if (!croppedAreaPixels) return
    setSaving(true)
    try {
      const blob = await getCroppedImg(initialImage, croppedAreaPixels)
      const file = new File([blob], 'profile.jpg', { type: 'image/jpeg' })
      const preview = URL.createObjectURL(blob)
      onDone(file, preview)
    } catch (e) {
      console.error(e)
    }
    setSaving(false)
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ background: 'var(--bg2)', border: '1px solid var(--border2)', borderRadius: 20, width: '100%', maxWidth: 480, overflow: 'hidden' }}>

        {/* Header */}
        <div style={{ padding: '18px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, marginBottom: 2 }}>Adjust your photo</h3>
            <p style={{ fontSize: 12, color: 'var(--text3)' }}>Drag to reposition · Scroll to zoom</p>
          </div>
          <button onClick={onCancel} style={{ background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: 8, padding: '6px 12px', color: 'var(--text2)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 13 }}>Cancel</button>
        </div>

        {/* Cropper */}
        <div style={{ position: 'relative', height: 340, background: '#000' }}>
          <Cropper
            image={initialImage}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape="round"
            showGrid={false}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            style={{
              containerStyle: { borderRadius: 0 },
              cropAreaStyle: { border: '3px solid var(--orange)', boxShadow: '0 0 0 9999px rgba(0,0,0,0.6)' }
            }}
          />
        </div>

        {/* Zoom slider */}
        <div style={{ padding: '16px 20px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 18 }}>🔍</span>
            <input
              type="range"
              min={1}
              max={3}
              step={0.05}
              value={zoom}
              onChange={e => setZoom(Number(e.target.value))}
              style={{ flex: 1, accentColor: 'var(--orange)', height: 4, cursor: 'pointer' }}
            />
            <span style={{ fontSize: 18 }}>🔎</span>
          </div>
          <p style={{ fontSize: 11, color: 'var(--text3)', textAlign: 'center', marginTop: 8 }}>Drag the photo to move it · Use slider to zoom in/out</p>
        </div>

        {/* Actions */}
        <div style={{ padding: '16px 20px', display: 'flex', gap: 10 }}>
          <button onClick={onCancel} style={{ flex: 1, padding: '11px', background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: 10, color: 'var(--text)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500 }}>
            Cancel
          </button>
          <button onClick={handleSave} disabled={saving} className="btn-primary" style={{ flex: 2, justifyContent: 'center', opacity: saving ? 0.7 : 1 }}>
            {saving ? 'Saving...' : '✅ Use this photo'}
          </button>
        </div>

      </div>
    </div>
  )
}
