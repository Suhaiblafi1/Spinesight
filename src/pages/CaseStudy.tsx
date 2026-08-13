import { Link } from 'react-router'
import { BrainCircuit, Users, CheckCircle2, AlertTriangle, ArrowRight, FileSearch } from 'lucide-react'
import { PageHero, CTASection } from '@/components/Sections'
import SEO from '@/components/SEO'
import { useReveal } from '@/hooks/useReveal'

const READINGS = [
  { by: 'Specialist group — 4 physicians', detail: '2 radiologists · 1 orthopedist · 1 neurosurgeon', result: 'L5-S1 · Grade 1' },
  { by: 'Independent specialist', detail: '1 radiologist', result: 'L4-L5 · Grade 2' },
]

export default function CaseStudy() {
  useReveal()
  return (
    <>
      <SEO
        title="Case Study: When AI Caught What Manual Review Missed"
        description="An anonymized research case where the SpineSight model's spondylolisthesis reading diverged from five specialists — and subsequent verification supported the model."
        path="/case-study"
      />
      <PageHero
        eyebrow="Case Study"
        title="When the model disagreed with five specialists — and was right"
        subtitle="An anonymized case from our research program illustrating why reproducible, automated measurement matters in spondylolisthesis grading."
      />

      {/* THE CASE */}
      <section className="bg-white py-24">
        <div className="container-site">
          <div className="reveal mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-brand-sky/50 p-8 text-center text-sm leading-relaxed text-slate-600">
            <AlertTriangle className="mx-auto mb-3 h-6 w-6 text-brand-blue" />
            This case is drawn from SpineSight's internal research program. It is fully anonymized,
            is presented for scientific illustration, and is not a performance claim. Clinical
            outputs are always subject to physician review.
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* AI reading */}
            <div className="reveal rounded-3xl bg-brand-navy p-9 text-white lg:order-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green">
                <BrainCircuit className="h-6 w-6" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand-green">
                SpineSight AI Output
              </p>
              <p className="mt-3 font-display text-3xl font-bold">L4-L5 · Grade 1</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Automated segmentation and slip measurement placed the affected level at L4-L5 with a
                Grade 1 slippage — a level assignment that differed from the majority manual reading.
              </p>
            </div>
            {/* Specialist readings */}
            {READINGS.map((r) => (
              <div key={r.by} className="card-soft reveal lg:order-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-mist text-brand-blue">
                  <Users className="h-6 w-6" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-slate-400">{r.by}</p>
                <p className="mt-1 text-xs text-slate-400">{r.detail}</p>
                <p className="mt-3 font-display text-2xl font-bold text-brand-navy">{r.result}</p>
              </div>
            ))}
          </div>

          {/* Verification */}
          <div className="reveal mx-auto mt-12 max-w-4xl rounded-3xl border border-brand-green/30 bg-gradient-to-br from-brand-mist/70 to-white p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-green text-white">
                <FileSearch className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-navy">The verification</h2>
                <p className="mt-3 leading-relaxed text-slate-600">
                  Because the model's level assignment conflicted with the majority reading, the case
                  was escalated to a structured secondary verification. The subsequent review
                  supported the model's output — <strong>L4-L5, Grade 1</strong> — as the more
                  accurate reading. A level difference of a single vertebra changes the clinical
                  picture: the wrong level can redirect the entire treatment pathway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAKEAWAYS */}
      <section className="bg-brand-navy py-24">
        <div className="container-site">
          <div className="reveal max-w-2xl">
            <span className="eyebrow">Why It Matters</span>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Not man versus machine — a better second reader
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Measurements are reproducible',
                text: 'Automated landmark placement produces the same measurement every time — removing the variability that pushes borderline cases across grade boundaries.',
              },
              {
                title: 'Disagreement is a feature',
                text: 'When the model diverges from the manual reading, the case gets a second look. That flag alone changes outcomes in level-assignment errors.',
              },
              {
                title: 'The physician still decides',
                text: 'The model output entered the record only after physician review and structured verification — exactly the workflow SpineSight is built around.',
              },
            ].map((t) => (
              <div key={t.title} className="reveal rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <CheckCircle2 className="h-7 w-7 text-brand-green" />
                <h3 className="mt-4 text-lg font-bold text-white">{t.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">{t.text}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-14 text-center">
            <Link to="/science" className="btn-primary">
              Explore the Research Behind It <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
