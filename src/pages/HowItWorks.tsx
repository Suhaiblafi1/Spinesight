import { Link } from 'react-router'
import {
  UploadCloud,
  BrainCircuit,
  UserCheck,
  FileText,
  HeartPulse,
  ArrowRight,
  Plug,
  Lock,
} from 'lucide-react'
import { PageHero, CTASection } from '@/components/Sections'
import { SERVICE_COMPARISON } from '@/data/site'
import { useReveal } from '@/hooks/useReveal'
import SEO from '@/components/SEO'

const JOURNEY = [
  {
    step: '01',
    icon: UploadCloud,
    title: 'Clinical context first',
    subtitle: 'Patient data & symptoms',
    text: 'The journey starts before the report: patient information, symptoms, red flags, and a structured clinical assessment are captured alongside the lumbar X-ray study.',
    image: '/images/platform-case-entry.webp',
    alt: 'SpineSight case entry with structured clinical assessment form',
  },
  {
    step: '02',
    icon: BrainCircuit,
    title: 'AI image analysis',
    subtitle: 'Measurements & visual grading',
    text: 'The engine segments the vertebrae, performs measurements, grades findings, and links the image to the clinical context — flagging anything that needs a deeper look or an MRI.',
    image: '/images/platform-analysis.webp',
    alt: 'SpineSight AI segmentation and grading of lumbar vertebrae',
  },
  {
    step: '03',
    icon: FileText,
    title: 'Report + rehabilitation plan',
    subtitle: 'Practical outputs',
    text: 'The physician receives a reviewable report and, when appropriate, a phased rehabilitation plan with goals, exercises, red flags, and precautions.',
    image: '/images/platform-rehab.webp',
    alt: 'SpineSight phased rehabilitation plan output',
  },
]

const PRINCIPLES = [
  {
    icon: UserCheck,
    title: 'Designed for physician review',
    text: 'Every output is designed for physician review and approval before clinical use. SpineSight generates decision support; the treating institution retains clinical responsibility.',
  },
  {
    icon: HeartPulse,
    title: 'Rehabilitation questions before the plan',
    text: 'Structured rehab questions feed the plan engine, so recommendations reflect the patient\u2019s real functional status, not just the image.',
  },
  {
    icon: Plug,
    title: 'PACS / DICOM integration',
    text: 'Available as part of institutional deployment and configured to the hospital\u2019s technical environment — no new hardware, no heavy capital expenditure.',
  },
  {
    icon: Lock,
    title: 'Secure by design',
    text: 'Designed with encrypted data transfer, role-based access, and configurable de-identification. Deployment controls are documented for each institutional implementation.',
  },
]

export default function HowItWorks() {
  useReveal()
  return (
    <>
      <SEO title="How It Works" description="See how SpineSight turns a lumbar X-ray into a physician-reviewable report and rehabilitation plan: case input, AI analysis, and doctor review in one clinical pathway." path="/how-it-works" />
      <PageHero
        eyebrow="How It Works"
        title="One clinical pathway, from image to decision"
        subtitle="SpineSight turns the AI engine into a practical product inside the medical workflow — patient data in, verified report and plan out."
      />

      {/* CASE JOURNEY */}
      <section className="bg-white py-24">
        <div className="container-site">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="eyebrow-light">The Case Journey</span>
            <h2 className="mt-5 text-3xl font-bold text-brand-navy sm:text-4xl">
              More than a result — a guided clinical flow
            </h2>
          </div>
          <div className="mt-16 space-y-20">
            {JOURNEY.map((j, i) => (
              <div
                key={j.step}
                className={`reveal grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-5xl font-bold text-brand-green/25">{j.step}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-green text-white">
                      <j.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand-green">
                    {j.subtitle}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-brand-navy">{j.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{j.text}</p>
                </div>
                <div className="relative">
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-brand-blue/20 to-brand-green/20 blur-xl" />
                  <img
                    src={j.image}
                    alt={j.alt}
                    className="relative w-full rounded-2xl border border-slate-200 shadow-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO SERVICES */}
      <section className="bg-brand-navy py-24">
        <div className="container-site">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="eyebrow">Service Models</span>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Two ways to use SpineSight
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="reveal rounded-2xl border border-white/10 bg-white/5 p-9 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">
                Rapid Service
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">Preliminary result + rehab support</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                Core patient data plus a lumbar X-ray produce a preliminary structured result and a
                rehab-support output — built for physicians who need fast confirmation.
              </p>
            </div>
            <div className="reveal rounded-2xl border border-brand-green/30 bg-gradient-to-br from-white/10 to-brand-green/10 p-9 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">
                Integrated Service
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">Detailed report + clinical recommendation</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                A full clinical assessment plus imaging produce a detailed report with clinical
                correlation, referral or rehab support, and a structured review workflow.
              </p>
            </div>
          </div>

          {/* COMPARISON TABLE */}
          <div className="reveal mt-10 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-white/10 text-left text-xs uppercase tracking-widest text-slate-300">
                  <th className="px-6 py-4 font-semibold"> </th>
                  <th className="px-6 py-4 font-semibold text-brand-green">Rapid</th>
                  <th className="px-6 py-4 font-semibold text-brand-green">Integrated</th>
                </tr>
              </thead>
              <tbody>
                {SERVICE_COMPARISON.map((r, i) => (
                  <tr key={r.label} className={i % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}>
                    <td className="px-6 py-4 font-semibold text-white">{r.label}</td>
                    <td className="px-6 py-4 text-slate-300">{r.rapid}</td>
                    <td className="px-6 py-4 text-slate-300">{r.integrated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-brand-sky/60 py-24">
        <div className="container-site">
          <div className="reveal max-w-2xl">
            <span className="eyebrow-light">Design Principles</span>
            <h2 className="mt-5 text-3xl font-bold text-brand-navy sm:text-4xl">
              Built for real clinical work
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="card-soft reveal flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-mist text-brand-blue">
                  <p.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal mt-14 text-center">
            <Link to="/contact" className="btn-primary">
              See It in Action <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
