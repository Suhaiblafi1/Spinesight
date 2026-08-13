import { BookOpen, FlaskConical, ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { PageHero, CTASection } from '@/components/Sections'
import { PUBLICATIONS, VALIDATION_PIPELINE, RESEARCH_ROADMAP } from '@/data/site'
import { useReveal } from '@/hooks/useReveal'
import SEO from '@/components/SEO'

export default function Science() {
  useReveal()
  return (
    <>
      <SEO title="Science & Research" description="Every SpineSight module is built on annotated data, expert medical labeling, independent verification, and published research before it becomes a product." path="/science" />
      <PageHero
        eyebrow="Science & Research"
        title="A research-backed product pipeline"
        subtitle="What we built came from published scientific work. What comes next follows the same path: clinical question, annotated data, AI model, and external validation."
      />

      {/* PUBLICATIONS */}
      <section className="bg-brand-navy py-24">
        <div className="container-site">
          <div className="reveal max-w-2xl">
            <span className="eyebrow">
              <BookOpen className="h-3.5 w-3.5" /> Publications
            </span>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Scientific evidence that compounds into product
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Evidence becomes proprietary labeled datasets, trained models, and validated clinical
              modules.
            </p>
          </div>
          <div className="mt-12 space-y-5">
            {PUBLICATIONS.map((p) => (
              <div
                key={p.title}
                className="reveal rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:border-brand-green/40"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full px-3.5 py-1 text-xs font-semibold ${
                      p.status === 'Published'
                        ? 'bg-brand-green/20 text-brand-green'
                        : 'bg-brand-blue/25 text-sky-300'
                    }`}
                  >
                    {p.status}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                    Product path: {p.productPath}
                  </span>
                </div>
                <h3 className="mt-4 max-w-3xl text-xl font-bold leading-snug text-white">{p.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALIDATION PIPELINE */}
      <section className="bg-white py-24">
        <div className="container-site">
          <div className="reveal max-w-3xl">
            <span className="eyebrow-light">Validation Process</span>
            <h2 className="mt-5 text-3xl font-bold text-brand-navy sm:text-4xl">
              Every disease module is built scientifically before it becomes a product
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              The real barrier is not the difficulty of the diseases — it is data collection, medical
              labeling, and independent verification. That discipline is what makes SpineSight a
              research-based product rather than software built on guesswork.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALIDATION_PIPELINE.map((v) => (
              <div key={v.step} className="card-soft reveal">
                <span className="font-display text-3xl font-bold text-brand-green/40">{v.step}</span>
                <h3 className="mt-3 text-lg font-bold text-brand-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH ROADMAP */}
      <section className="bg-brand-mist/70 py-24">
        <div className="container-site">
          <div className="reveal max-w-2xl">
            <span className="eyebrow-light">
              <FlaskConical className="h-3.5 w-3.5" /> Research Roadmap
            </span>
            <h2 className="mt-5 text-3xl font-bold text-brand-navy sm:text-4xl">
              Next studies expand the engine
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {RESEARCH_ROADMAP.map((r) => (
              <div key={r.area} className="card-soft reveal flex items-center gap-5">
                <div className="h-full w-1.5 self-stretch rounded-full bg-gradient-to-b from-brand-blue to-brand-green" />
                <div>
                  <h3 className="font-bold text-brand-navy">{r.area}</h3>
                  <p className="mt-1 text-sm text-slate-600">{r.focus}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-2 text-center text-sm font-medium text-slate-600">
            {['Clinical question', 'Annotated data', 'AI engine', 'External validation'].map((s, i) => (
              <span key={s} className="flex items-center gap-2">
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">{s}</span>
                {i < 3 && <ArrowRight className="h-4 w-4 text-brand-green" />}
              </span>
            ))}
          </div>
          <div className="reveal mt-12 text-center">
            <Link to="/contact" className="btn-outline-dark">
              Collaborate on Research <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
