import { BookOpen, FlaskConical, ArrowRight, ExternalLink, ClipboardCheck } from 'lucide-react'
import { Link } from 'react-router'
import { PageHero, CTASection } from '@/components/Sections'
import { PUBLICATIONS, VALIDATION_PIPELINE, RESEARCH_ROADMAP, EXTERNAL_STUDIES } from '@/data/site'
import { useReveal } from '@/hooks/useReveal'
import SEO from '@/components/SEO'

const VALIDATION_FACTS = [
  { label: 'Site', value: 'Jordan University Hospital' },
  { label: 'Departments', value: 'Orthopedics, Neurosurgery, Radiology, PM&R' },
  { label: 'Reviewers', value: '20+ physicians' },
  { label: 'Cases', value: 'Approximately 700 physician-reviewed cases' },
  { label: 'Task', value: 'Spondylolisthesis detection, slip measurement, and Meyerding grading' },
  { label: 'Status', value: 'Clinical review completed — manuscript under peer review' },
]

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
              Evidence informs curated labeled datasets, trained models, and validated clinical
              modules — subject to institutional agreements and dataset licenses.
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
          <p className="reveal mt-8 max-w-3xl text-sm text-slate-400">
            Status labels are exact: only peer-reviewed and publicly available work is marked
            “Published”. Manuscripts marked “Under review” are with journals and are not claimed as
            published evidence.
          </p>
        </div>
      </section>

      {/* CLINICAL VALIDATION */}
      <section className="bg-white py-24">
        <div className="container-site">
          <div className="reveal max-w-3xl">
            <span className="eyebrow-light">
              <ClipboardCheck className="h-3.5 w-3.5" /> Clinical Validation
            </span>
            <h2 className="mt-5 text-3xl font-bold text-brand-navy sm:text-4xl">
              Reviewed by physicians, verified beyond our own data
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Clinical review was completed at Jordan University Hospital across Orthopedics,
              Neurosurgery, Radiology, and PM&R — involving more than 20 physicians and
              approximately 700 cases.
            </p>
          </div>
          <div className="reveal mt-12 overflow-hidden rounded-3xl border border-slate-200">
            <table className="w-full text-sm">
              <tbody>
                {VALIDATION_FACTS.map((f, i) => (
                  <tr key={f.label} className={i % 2 === 0 ? 'bg-brand-mist/40' : 'bg-white'}>
                    <td className="w-40 px-6 py-4 font-semibold text-brand-navy sm:w-56">{f.label}</td>
                    <td className="px-6 py-4 text-slate-600">{f.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="reveal mt-8 rounded-2xl border border-brand-green/25 bg-brand-mist/50 p-7">
            <p className="text-sm leading-relaxed text-slate-700">
              <span className="font-semibold text-brand-navy">External validation completed</span>{' '}
              using multi-source radiology-center and open-access datasets. The related manuscript
              is currently under peer review. Figures above summarize the clinical review program;
              full study details will be published with the manuscript.
            </p>
          </div>
        </div>
      </section>

      {/* VALIDATION PIPELINE */}
      <section className="bg-brand-mist/70 py-24">
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

      {/* EXTERNAL PUBLISHED EVIDENCE */}
      <section className="bg-brand-navy py-24">
        <div className="container-site">
          <div className="reveal max-w-3xl">
            <span className="eyebrow">
              <BookOpen className="h-3.5 w-3.5" /> Published Evidence in Spine-Imaging AI
            </span>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Faster and more consistent spine-imaging decisions
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Published studies in spine imaging show that physician-supervised AI can reduce
              repetitive interpretation and measurement time, improve agreement between readers, and
              support more standardized assessment. In lumbar spine MRI, deep-learning assistance
              reduced interpretation time from 124–274 seconds to 47–71 seconds per examination,
              while maintaining or improving interobserver agreement. Automated spinopelvic
              measurements have also demonstrated accuracy within the variability of experienced
              readers.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {EXTERNAL_STUDIES.map((s) => (
              <article
                key={s.doi}
                className="reveal flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:border-brand-green/40"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-brand-green/20 px-3 py-1 font-semibold text-brand-green">
                    {s.journal}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 font-medium text-slate-300">
                    {s.authors} · {s.year}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{s.findings}</p>
                <p className="mt-3 border-l-2 border-brand-green/50 pl-4 text-sm italic leading-relaxed text-slate-400">
                  {s.relevance}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4 pt-2 text-xs font-medium">
                  <a
                    href={`https://doi.org/${s.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand-green hover:underline"
                  >
                    Read the study <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <span className="text-slate-500">DOI: {s.doi}</span>
                  <span className="text-slate-500">PMID: {s.pmid}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="reveal mt-8 max-w-3xl text-sm text-slate-400">
            These are independent third-party publications that inform the scientific context of
            SpineSight’s approach; they are not studies of the SpineSight product itself.
          </p>
        </div>
      </section>

      {/* RESEARCH ROADMAP */}
      <section className="bg-white py-24">
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
                <span className="rounded-full bg-brand-mist/70 px-4 py-2 shadow-sm">{s}</span>
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
