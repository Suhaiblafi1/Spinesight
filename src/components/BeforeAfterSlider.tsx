import { useRef, useState, useCallback } from 'react'
import { ChevronsLeftRight } from 'lucide-react'

export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = 'Original X-ray',
  afterLabel = 'AI Segmentation',
}: {
  before: string
  after: string
  beforeLabel?: string
  afterLabel?: string
}) {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const update = useCallback((clientX: number) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const p = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(96, Math.max(4, p)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
    update(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) update(e.clientX)
  }
  const stop = () => (dragging.current = false)

  return (
    <div
      ref={ref}
      className="relative aspect-[3/4] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-white/15 bg-[#060A0E] shadow-2xl"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stop}
      onPointerLeave={stop}
    >
      {/* after (segmentation) as base layer */}
      <img src={after} alt={afterLabel} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      {/* before layer clipped */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={beforeLabel}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: ref.current ? ref.current.getBoundingClientRect().width : '100%' }}
          draggable={false}
        />
      </div>
      {/* handle */}
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-green via-white to-brand-blue" />
        <div className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-brand-navy/90 text-white shadow-xl backdrop-blur">
          <ChevronsLeftRight className="h-5 w-5" />
        </div>
      </div>
      {/* labels */}
      <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
        {beforeLabel}
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-brand-green/80 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
        {afterLabel}
      </span>
    </div>
  )
}
