import { useEffect, useState } from 'react'
import { Cookie } from 'lucide-react'

const KEY = 'spinesight-consent'

export function getConsent(): 'accepted' | 'declined' | null {
  const v = localStorage.getItem(KEY)
  return v === 'accepted' || v === 'declined' ? v : null
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!getConsent()) setVisible(true)
  }, [])

  const choose = (value: 'accepted' | 'declined') => {
    localStorage.setItem(KEY, value)
    window.dispatchEvent(new CustomEvent('spinesight-consent', { detail: value }))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 rounded-2xl border border-white/10 bg-brand-navy/95 p-5 shadow-2xl backdrop-blur sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
          <p className="text-sm leading-relaxed text-slate-300">
            We use essential storage and — only with your consent — privacy-friendly, cookieless
            analytics to understand how the site is used. No advertising trackers, ever. See our{' '}
            <a href="/privacy" className="font-medium text-brand-green hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-2.5">
          <button
            onClick={() => choose('declined')}
            className="rounded-full border border-white/25 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Decline
          </button>
          <button
            onClick={() => choose('accepted')}
            className="rounded-full bg-gradient-to-r from-brand-blue to-brand-green px-5 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
