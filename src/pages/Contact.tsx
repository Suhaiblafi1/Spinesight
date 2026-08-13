import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react'
import { PageHero } from '@/components/Sections'
import { CONTACT_EMAIL, WHATSAPP_URL, ADDRESS } from '@/data/site'
import { useReveal } from '@/hooks/useReveal'
import SEO from '@/components/SEO'

const TOPICS = ['Request a demo', 'Pricing quote', 'Pilot program', 'Research collaboration', 'Other']

export default function Contact() {
  useReveal()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch('/contact.php', { method: 'POST', body: data })
      const json = await res.json().catch(() => null)
      if (res.ok && json?.ok) {
        setSent(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <SEO title="Contact Us" description="Request a SpineSight demo, pricing quote, or pilot deployment for your hospital, imaging center, or rehabilitation clinic." path="/contact" />
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your imaging workflow"
        subtitle="Request a demo, ask for a quote, or explore a pilot deployment — we usually reply within one business day."
      />

      <section className="bg-white py-24">
        <div className="container-site grid gap-14 lg:grid-cols-5">
          <div className="reveal lg:col-span-2">
            <h2 className="text-2xl font-bold text-brand-navy">Get in touch</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              Whether you run a hospital, an imaging center, or a rehabilitation clinic — tell us
              about your case volume and goals, and we will prepare a tailored proposal.
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mist text-brand-blue">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Email</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-brand-navy hover:text-brand-blue">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mist text-brand-blue">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Address</p>
                  <p className="font-medium text-brand-navy">{ADDRESS}</p>
                </div>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-4 rounded-2xl border border-brand-green/30 bg-gradient-to-r from-brand-mist to-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-brand-teal text-white">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-brand-navy">Chat with the team on WhatsApp</p>
                <p className="text-sm text-slate-500">Tap to start a conversation — we typically reply within hours</p>
              </div>
            </a>
          </div>

          <div className="reveal lg:col-span-3">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-brand-green/30 bg-brand-mist/50 p-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-brand-green" />
                <h3 className="mt-5 text-2xl font-bold text-brand-navy">Message received</h3>
                <p className="mt-2 max-w-sm text-slate-600">
                  Thank you for reaching out. A member of the SpineSight team will get back to you
                  within one business day.
                </p>
              </div>
            ) : (
              <form
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-brand-navy">Full name</label>
                    <input
                      required
                      name="name"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-blue"
                      placeholder="Dr. Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-brand-navy">Work email</label>
                    <input
                      required
                      name="email"
                      type="email"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-blue"
                      placeholder="you@hospital.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-brand-navy">Organization</label>
                    <input
                      name="organization"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-blue"
                      placeholder="Hospital / center name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-brand-navy">Topic</label>
                    <select name="topic" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-blue">
                      {TOPICS.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-5">
                  <label className="text-sm font-semibold text-brand-navy">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-blue"
                    placeholder="Tell us about your case volume, modalities, and what you would like to achieve..."
                  />
                </div>
                {error && (
                  <p className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    The message could not be sent right now. Please email us directly at{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">
                      {CONTACT_EMAIL}
                    </a>{' '}
                    or reach us on WhatsApp.
                  </p>
                )}
                <button type="submit" disabled={sending} className="btn-primary mt-7 w-full disabled:opacity-60 sm:w-auto">
                  {sending ? 'Sending…' : 'Send Message'} <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
