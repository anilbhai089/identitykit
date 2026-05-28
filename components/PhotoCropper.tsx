'use client'
import { useState, useEffect } from 'react'

interface Props {
  onDone: (file: File, preview: string) => void
  onCancel: () => void
  initialImage: string
}

const CIRCLE_SIZE = 220

export default function PhotoCropper({ onDone, onCancel, initialImage }: Props) {
  const [saving, setSaving] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [dragging, setDragging] = useState(false)
  const [startDrag, setStartDrag] = useState({ x: 0, y: 0 })
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const [imgNaturalW, setImgNaturalW] = useState(0)
  const [imgNaturalH, setImgNaturalH] = useState(0)
  const [ready, setReady] = useState(false)

  // On mount: load image, pick initial zoom so it fills the circle, then CENTER it
  useEffect(() => {
    const img = new window.Image()
    img.onload = () => {
      const nw = img.naturalWidth
      const nh = img.naturalHeight
      setImgNaturalW(nw)
      setImgNaturalH(nh)

      // Zoom so the shorter side fills the circle
      const initialZoom = Math.max(CIRCLE_SIZE / nw, CIRCLE_SIZE / nh)
      const clampedZoom = Math.max(0.5, Math.min(3, initialZoom))
      setZoom(clampedZoom)

      // Center: rendered size at this zoom
      const rw = nw * clampedZoom
      const rh = nh * clampedZoom
      // Offset so center of image aligns with center of circle
      setPos({
        x: (CIRCLE_SIZE - rw) / 2,
        y: (CIRCLE_SIZE - rh) / 2,
      })
      setReady(true)
    }
    img.src = initialImage
  }, [initialImage])

  function onMouseDown(e: React.MouseEvent) {
    setDragging(true)
    setStartDrag({ x: e.clientX, y: e.clientY })
    setStartPos({ ...pos })
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!dragging) return
    setPos({ x: startPos.x + (e.clientX - startDrag.x), y: startPos.y + (e.clientY - startDrag.y) })
  }
  function onMouseUp() { setDragging(false) }

  function onTouchStart(e: React.TouchEvent) {
    setDragging(true)
    setStartDrag({ x: e.touches[0].clientX, y: e.touches[0].clientY })
    setStartPos({ ...pos })
  }
  function onTouchMove(e: React.TouchEvent) {
    if (!dragging) return
    setPos({ x: startPos.x + (e.touches[0].clientX - startDrag.x), y: startPos.y + (e.touches[0].clientY - startDrag.y) })
  }

  // When zoom changes via slider, re-center around the current center
  function handleZoom(newZoom: number) {
    if (!imgNaturalW) return
    const oldRw = imgNaturalW * zoom
    const oldRh = imgNaturalH * zoom
    const newRw = imgNaturalW * newZoom
    const newRh = imgNaturalH * newZoom
    // Keep the visible center the same
    const centerX = pos.x + oldRw / 2
    const centerY = pos.y + oldRh / 2
    setPos({ x: centerX - newRw / 2, y: centerY - newRh / 2 })
    setZoom(newZoom)
  }

  async function handleSave() {
    setSaving(true)
    try {
      const SIZE = 400
      const img = new window.Image()
      img.src = initialImage
      await new Promise(r => { img.onload = r })
      const canvas = document.createElement('canvas')
      canvas.width = SIZE
      canvas.height = SIZE
      const ctx = canvas.getContext('2d')!
      ctx.beginPath()
      ctx.arc(SIZE / 2, SIZE / 2, SIZE / 2, 0, Math.PI * 2)
      ctx.clip()
      // Scale factor from preview circle (220px) to output canvas (400px)
      const scale = SIZE / CIRCLE_SIZE
      const rw = img.width * zoom * scale
      const rh = img.height * zoom * scale
      const dx = pos.x * scale
      const dy = pos.y * scale
      ctx.drawImage(img, dx, dy, rw, rh)
      const blob: Blob = await new Promise(resolve => canvas.toBlob(b => resolve(b!), 'image/jpeg', 0.95))
      const file = new File([blob], 'profile.jpg', { type: 'image/jpeg' })
      const preview = URL.createObjectURL(blob)
      onDone(file, preview)
    } catch (e) { console.error(e) }
    setSaving(false)
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.88)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ background: 'var(--bg2)', border: '1px solid var(--border2)', borderRadius: 20, width: '100%', maxWidth: 420, overflow: 'hidden' }}>

        {/* Header */}
        <div style={{ padding: '18px 20px', borderBottom: '1px solid var(--border)' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, marginBottom: 3 }}>Adjust your photo</h3>
          <p style={{ fontSize: 12, color: 'var(--text3)' }}>Drag to reposition &middot; Slider to zoom</p>
        </div>

        {/* Preview */}
        <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <div style={{ position: 'relative', width: CIRCLE_SIZE, height: CIRCLE_SIZE }}>
            {/* Dim overlay outside circle */}
            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', boxShadow: '0 0 0 999px rgba(0,0,0,0.55)', zIndex: 2, pointerEvents: 'none' }} />
            {/* Orange border */}
            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '3px solid var(--orange)', zIndex: 3, pointerEvents: 'none' }} />
            {/* Drag area */}
            <div
              style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE, borderRadius: '50%', overflow: 'hidden', cursor: dragging ? 'grabbing' : 'grab', userSelect: 'none', background: '#111' }}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onMouseUp}
            >
              {ready && (
                <img
                  src={initialImage}
                  alt="crop"
                  draggable={false}
                  style={{
                    position: 'relative',
                    left: pos.x,
                    top: pos.y,
                    width: imgNaturalW * zoom,
                    height: imgNaturalH * zoom,
                    maxWidth: 'none',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    display: 'block',
                  }}
                />
              )}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 16, fontSize: 11, color: 'var(--text3)' }}>
            <span>Drag to move</span>
            <span>Slider to zoom</span>
          </div>

          {/* Zoom slider */}
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 13, color: 'var(--text3)' }}>A</span>
            <input
              type="range"
              min={0.3}
              max={4}
              step={0.05}
              value={zoom}
              onChange={e => handleZoom(Number(e.target.value))}
              style={{ flex: 1, accentColor: 'var(--orange)', cursor: 'pointer' }}
            />
            <span style={{ fontSize: 18, color: 'var(--text3)' }}>A</span>
          </div>
        </div>

        {/* Actions */}
        <div style={{ padding: '14px 20px', borderTop: '1px solid var(--border)', display: 'flex', gap: 10 }}>
          <button onClick={onCancel} style={{ flex: 1, padding: '11px', background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: 10, color: 'var(--text)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500 }}>
            Cancel
          </button>
          <button onClick={handleSave} disabled={saving} className="btn-primary" style={{ flex: 2, justifyContent: 'center', opacity: saving ? 0.7 : 1 }}>
            {saving ? 'Saving...' : 'Use this photo'}
          </button>
        </div>

      </div>
    </div>
  )
}
