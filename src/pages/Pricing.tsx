import { Link } from 'react-router'
import { Check, ArrowRight, MessageSquareQuote } from 'lucide-react'
import { PageHero, CTASection } from '@/components/Sections'
import { PRICING_TIERS } from '@/data/site'
import { useReveal } from '@/hooks/useReveal'
import SEO from '@/components/SEO'

export default function Pricing() {
  useReveal()
  return (
    <>
      <SEO title="Pricing" description="SpineSight plans for clinics, imaging centers, and hospitals. Pricing is tailored to your institution: request a custom quote or start with a structured pilot." path="/pricing" />
      <PageHero
        eyebrow="Pricing"
        title="Plans shaped around your institution"
        subtitle="Pricing is tailored to each setting — hospitals, imaging centers, and clinics have different volumes and integration needs. Tell us about yours and we will prepare a quote."
      />

      <section className="bg-white py-24">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-3">
            {PRICING_TIERS.map((t) => (
              <div
                key={t.name}
                className={`reveal relative flex flex-col rounded-3xl p-9 ${
                  t.highlighted
                    ? 'border-2 border-brand-green bg-gradient-to-b from-brand-mist/80 to-white shadow-xl'
                    : 'border border-slate-200 bg-white shadow-sm'
                }`}
              >
                {t.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-blue to-brand-green px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-brand-navy">{t.name}</h3>
                <p className="mt-1.5 text-sm text-slate-500">{t.audience}</p>
                <div className="mt-7 rounded-2xl bg-brand-navy p-5 text-center">
                  <p className="text-sm font-medium text-slate-300">Pricing</p>
                  <p className="mt-1 font-display text-xl font-bold text-white">Custom quote</p>
                </div>
                <ul className="mt-7 flex-1 space-y-3.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={t.highlighted ? 'btn-primary mt-8' : 'btn-outline-dark mt-8'}>
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="reveal mx-auto mt-16 flex max-w-3xl items-start gap-5 rounded-3xl border border-brand-green/25 bg-brand-mist/50 p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-green text-white">
              <MessageSquareQuote className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-navy">Start with a pilot</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Not sure which plan fits? We begin with a structured pilot at your institution —
                measuring accuracy, report turnaround, and physician acceptance — then finalize
                pricing based on real, measured impact.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-3"
              >
                Talk to us about a pilot <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
