import { useEffect } from 'react'
import { getConsent } from './CookieConsent'

/**
 * Privacy-friendly analytics (Plausible-compatible, cookieless).
 * Loaded ONLY when:
 *   1. the visitor has accepted via the consent banner, and
 *   2. a domain is configured via VITE_PLAUSIBLE_DOMAIN at build time.
 * Self-host Plausible/Umami and set VITE_PLAUSIBLE_SCRIPT to override the script URL.
 */
const DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined
const SCRIPT =
  (import.meta.env.VITE_PLAUSIBLE_SCRIPT as string | undefined) ??
  'https://plausible.io/js/script.js'

function load() {
  if (!DOMAIN || document.getElementById('spinesight-analytics')) return
  const s = document.createElement('script')
  s.id = 'spinesight-analytics'
  s.defer = true
  s.setAttribute('data-domain', DOMAIN)
  s.src = SCRIPT
  document.head.appendChild(s)
}

export default function Analytics() {
  useEffect(() => {
    if (getConsent() === 'accepted') load()
    const onConsent = (e: Event) => {
      if ((e as CustomEvent).detail === 'accepted') load()
    }
    window.addEventListener('spinesight-consent', onConsent)
    return () => window.removeEventListener('spinesight-consent', onConsent)
  }, [])
  return null
}
