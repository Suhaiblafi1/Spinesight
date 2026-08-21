import { useEffect, useRef, useState } from 'react'

export function useCountUp(target: number, duration = 1600, start = false) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    let raf: number
    const t0 = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])
  return value
}

export function Stat({
  value,
  suffix,
  label,
  started,
  prefix = '',
}: {
  value: number
  suffix: string
  label: string
  started: boolean
  prefix?: string
}) {
  const v = useCountUp(value, 1600, started)
  return (
    <div className="text-center" role="text" aria-label={`${prefix}${value.toLocaleString()}${suffix} — ${label}`}>
      <p className="font-display text-4xl font-bold text-white sm:text-5xl" aria-hidden="true">
        {prefix}
        {v.toLocaleString()}
        <span className="text-gradient">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-slate-300">{label}</p>
    </div>
  )
}

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, inView }
}
