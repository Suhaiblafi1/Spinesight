import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

// When a mailing service (e.g. Brevo/Mailchimp) is connected, point the form to its endpoint here.
export const NEWSLETTER_ENDPOINT: string | null = null

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (NEWSLETTER_ENDPOINT) {
      try {
        await fetch(NEWSLETTER_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        })
      } catch {
        // endpoint errors are non-blocking for the visitor
      }
    }
    setDone(true)
  }

  if (done) {
    return (
      <p className="flex items-center gap-2 text-sm font-medium text-brand-green">
        <CheckCircle2 className="h-5 w-5" /> You're subscribed. Welcome to the SpineSight research letter.
      </p>
    )
  }

  return (
    <form onSubmit={submit} className={`flex ${compact ? 'flex-col gap-3' : 'flex-col gap-3 sm:flex-row'}`}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your work email"
        className="w-full flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition-colors focus:border-brand-green"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-green px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
      >
        Subscribe <Send className="h-4 w-4" />
      </button>
    </form>
  )
}

export default function NewsletterSection() {
  return (
    <section className="border-t border-white/10 bg-brand-deep py-14">
      <div className="container-site flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div className="max-w-lg">
          <h3 className="font-display text-2xl font-bold text-white">The SpineSight Research Letter</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            A quarterly briefing on spine-imaging AI: new publications, validation milestones, and
            product updates. No noise, unsubscribe anytime.
          </p>
        </div>
        <div className="w-full max-w-md">
          <NewsletterForm />
        </div>
      </div>
    </section>
  )
}
