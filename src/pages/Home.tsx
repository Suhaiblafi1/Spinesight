import { useState } from 'react'
import { Link } from 'react-router'
import {
  ArrowRight,
  ScanLine,
  BrainCircuit,
  Stethoscope,
  FileCheck,
  Activity,
  ShieldCheck,
  Timer,
  Users,
  Zap,
  ClipboardList,
  Microscope,
  FileText,
} from 'lucide-react'
import { DISEASE_MODULES, WORKFLOW_STEPS } from '@/data/site'
import { CTASection } from '@/components/Sections'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import { Stat, useInView } from '@/components/Stats'
import { useReveal } from '@/hooks/useReveal'
import SEO from '@/components/SEO'

const PROBLEMS = [
  {
    icon: Users,
    title: 'High inter-reader variability',
    text: 'Readings of the same spine study can differ between physicians, leading to inconsistent grading or unsuitable treatment pathways.',
  },
  {
    icon: Stethoscope,
    title: 'Non-specialists need immediate support',
    text: 'Emergency, family, and rehabilitation physicians need a clear preliminary reading to decide and refer to the right specialty.',
  },
  {
    icon: Timer,
    title: 'Delays compound clinical risk',
    text: 'Delayed recognition or referral can prolong symptoms, delay appropriate management, and increase the risk of functional or neurological deterioration in clinically significant cases.',
  },
  {
    icon: ScanLine,
    title: 'MRI decisions come late',
    text: 'X-ray does not adequately show discs and nerves. When imaging is not linked to symptoms, MRI requests — and the right diagnosis — are delayed.',
  },
]

const TIERS = [
  {
    icon: Zap,
    name: 'Rapid Service',
    tag: 'Fast confirmation',
    text: 'Core patient data plus a lumbar X-ray produce a preliminary structured result and rehab-support output — built for physicians who need quick confirmation.',
    bullets: [
      'Preliminary AI reading in under a minute',
      'Rehab-support output from core patient data',
      'Ideal for busy clinics & ER',
    ],
  },
  {
    icon: ClipboardList,
    name: 'Integrated Service',
    tag: 'Comprehensive report',
    text: 'A full clinical assessment plus imaging produce a detailed report with clinical correlation, referral or rehab support, and a structured review workflow.',
    bullets: [
      'Detailed report + clinical correlation',
      'Referral or rehab pathway included',
      'Structured physician review workflow',
    ],
  },
]

const SAMPLE_LEVELS = [
  { level: 'L1–L2', slip: '4%', grade: '—' },
  { level: 'L2–L3', slip: '6%', grade: '—' },
  { level: 'L3–L4', slip: '9%', grade: 'Grade I' },
  { level: 'L4–L5', slip: '28%', grade: 'Grade II' },
  { level: 'L5–S1', slip: '7%', grade: '—' },
]

export default function Home() {
  useReveal()
  const [activeTier, setActiveTier] = useState(0)
  const { ref: statsRef, inView: statsInView } = useInView<HTMLElement>()
  return (
    <>
      <SEO title="AI-Powered Lumbar X-Ray Analysis" description="From a lumbar X-ray to a structured, physician-reviewable report in under a minute. Research-backed AI decision support with the physician in control." path="/" />
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-navy pb-24 pt-36">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-brand-blue/30 blur-[130px]" />
        <div className="absolute -left-40 bottom-0 h-[480px] w-[480px] rounded-full bg-brand-green/20 blur-[130px]" />
        <div className="container-site relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow">
              <Microscope className="h-3.5 w-3.5" /> Research-backed clinical decision support for lumbar X-rays
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.12] text-white sm:text-5xl lg:text-[3.4rem]">
              From a lumbar X-ray to a physician-reviewable report in{' '}
              <span className="text-gradient">under a minute</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              SpineSight segments L1–S1, measures vertebral slippage, grades severity, and supports
              the next clinical decision — with the physician always in control.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Request a Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#sample-report" className="btn-outline">
                View a Sample Report
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-brand-green" /> Published clinical research
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-green" /> Physician-reviewed outputs
              </span>
              <span className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-brand-green" /> External validation completed
              </span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand-blue/40 to-brand-green/40 blur-2xl" />
            <BeforeAfterSlider
              before="/images/xray-original.webp"
              after="/images/xray-segmentation.webp"
            />
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-brand-green">
                AI Analysis — Level by Level
              </p>
              <p className="mt-2 text-center text-xs leading-relaxed text-slate-300">
                <span className="font-semibold text-white">Drag the handle.</span> The engine
                segments every lumbar vertebra (L1–S1), measures slippage at each level, grades
                severity, and correlates the findings with the patient's symptoms — before any
                report reaches the physician.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section ref={statsRef} className="border-y border-white/10 bg-brand-deep py-14">
        <div className="container-site grid grid-cols-2 gap-10 lg:grid-cols-4">
          <Stat value={60} suffix="s" label="From scan to draft report" started={statsInView} />
          <Stat value={20} suffix="+" label="Physicians involved in clinical review" started={statsInView} />
          <Stat value={700} prefix="~" suffix="" label="Physician-reviewed cases" started={statsInView} />
          <Stat value={8000} suffix="+" label="Images used in development & evaluation" started={statsInView} />
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white pb-4 pt-14">
        <div className="container-site text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Rooted in research · Verified by physicians
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              'Jordan University Hospital',
              'Princess Sumaya University for Technology',
              'Published Clinical Research',
              'External Validation Completed',
              'Pilot Deployments in Jordan',
            ].map((t) => (
              <span key={t} className="font-display text-sm font-semibold text-slate-400 transition-colors hover:text-brand-blue">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white py-24">
        <div className="container-site">
          <div className="reveal max-w-2xl">
            <span className="eyebrow-light">The Problem</span>
            <h2 className="mt-5 text-3xl font-bold text-brand-navy sm:text-4xl">
              Misreading spine imaging is costly
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Lost time and cost, repeated scans and referrals, greater pressure on physicians — and
              delayed treatment that can expose patients to avoidable complications.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="card-soft reveal">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-mist text-brand-blue">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-navy">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-brand-sky/60 py-24">
        <div className="container-site">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="eyebrow-light">The Solution</span>
            <h2 className="mt-5 text-3xl font-bold text-brand-navy sm:text-4xl">
              From scan to decision, in one flow
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              SpineSight analyzes the image and reads the clinical context — then delivers exactly
              the depth of output the physician needs.
            </p>
          </div>

          {/* Connected stepper */}
          <div className="reveal mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="relative grid gap-10 md:grid-cols-3 md:gap-6">
              <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green md:block" />
              {WORKFLOW_STEPS.map((s) => (
                <div key={s.step} className="relative flex gap-4 md:flex-col md:items-center md:text-center">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-green font-display text-lg font-bold text-white shadow-lg shadow-brand-blue/25">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service depth tabs */}
          <div className="reveal mt-12">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
              Choose your service depth
            </p>
            <div className="mx-auto mt-5 flex w-fit rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
              {TIERS.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setActiveTier(i)}
                  className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                    activeTier === i
                      ? 'bg-gradient-to-r from-brand-blue to-brand-green text-white shadow'
                      : 'text-slate-500 hover:text-brand-navy'
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
            <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-brand-green/25 bg-gradient-to-br from-white to-brand-mist/60 p-9">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green text-white">
                  {(() => {
                    const Icon = TIERS[activeTier].icon
                    return <Icon className="h-7 w-7" />
                  })()}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">
                    {TIERS[activeTier].tag}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-brand-navy">{TIERS[activeTier].name}</h3>
                  <p className="mt-2.5 leading-relaxed text-slate-600">{TIERS[activeTier].text}</p>
                </div>
              </div>
              <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                {TIERS[activeTier].bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 rounded-xl bg-white/80 p-4 text-sm font-medium text-slate-700">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DISEASE MODULES */}
      <section className="bg-brand-navy py-24">
        <div className="container-site">
          <div className="reveal max-w-2xl">
            <span className="eyebrow">Clinical Coverage</span>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              One module live today — a clear roadmap behind it
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Every condition becomes a product only after medical data collection, expert labeling,
              and accuracy verification — research first, software second.
            </p>
          </div>

          {/* Available now */}
          {DISEASE_MODULES.filter((m) => m.available).map((m) => (
            <div
              key={m.id}
              className="reveal mt-12 rounded-2xl border-2 border-brand-green/50 bg-gradient-to-br from-white/10 to-brand-green/10 p-8 backdrop-blur sm:p-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-navy">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-navy" /> Available Now
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    Lumbar {m.name} Assessment
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand-steel">
                    {m.modality}
                  </p>
                </div>
                <Link to="/contact" className="btn-primary">
                  Try It in a Demo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-5 max-w-3xl leading-relaxed text-slate-200">{m.description}</p>
            </div>
          ))}

          {/* Roadmap */}
          <p className="reveal mt-14 text-sm font-semibold uppercase tracking-widest text-slate-400">
            Product Roadmap — In Development
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {DISEASE_MODULES.filter((m) => !m.available).map((m) => (
              <div
                key={m.id}
                className="reveal group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all hover:border-brand-green/40 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-bold text-brand-green">{m.id}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-slate-300">
                    {m.status}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{m.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand-steel">
                  {m.modality}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{m.description}</p>
              </div>
            ))}
            <div className="reveal flex flex-col items-start justify-center rounded-2xl border border-dashed border-white/20 p-7">
              <BrainCircuit className="h-8 w-8 text-brand-green" />
              <h3 className="mt-4 text-lg font-bold text-white">Expanding within the spine</h3>
              <p className="mt-2 text-sm text-slate-300">
                New modules follow the same path: clinical question, annotated data, trained model,
                external validation.
              </p>
              <Link to="/science" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:gap-3">
                Explore the research <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM SHOWCASE */}
      <section className="bg-white py-24">
        <div className="container-site">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="eyebrow-light">The Platform</span>
            <h2 className="mt-5 text-3xl font-bold text-brand-navy sm:text-4xl">
              A working product, not a concept
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Designed around a repeated clinical pathway: sign in, manage patients, upload studies,
              and issue a reviewable report. PACS/DICOM integration is available as part of
              institutional deployment, configured to each hospital's technical environment.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="reveal overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <img src="/images/platform-dashboard.webp" alt="SpineSight case dashboard" className="w-full" loading="lazy" />
              <div className="border-t border-slate-100 p-5">
                <h3 className="font-bold text-brand-navy">Case & Report Dashboard</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Track diagnoses, pending reviews, and completed reports in one place.
                </p>
              </div>
            </div>
            <div className="reveal overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <img src="/images/platform-rehab.webp" alt="SpineSight rehabilitation plan output" className="w-full" loading="lazy" />
              <div className="border-t border-slate-100 p-5">
                <h3 className="font-bold text-brand-navy">Actionable Rehabilitation Plans</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Phased exercise programs, red flags, and precautions — ready for the care team.
                </p>
              </div>
            </div>
          </div>

          {/* SAMPLE REPORT */}
          <div id="sample-report" className="reveal mt-16 scroll-mt-28">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-brand-navy px-8 py-5">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-brand-green" />
                  <h3 className="font-display text-lg font-bold text-white">
                    Structured Report — Lateral Lumbar X-Ray
                  </h3>
                </div>
                <span className="rounded-full bg-brand-green/20 px-3.5 py-1 text-[11px] font-semibold text-brand-green">
                  Sample / demonstration case · De-identified
                </span>
              </div>
              <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Level-by-level measurements
                  </p>
                  <table className="mt-4 w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wider text-slate-400">
                        <th className="pb-2.5 font-semibold">Level</th>
                        <th className="pb-2.5 font-semibold">Slip</th>
                        <th className="pb-2.5 font-semibold">Meyerding</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SAMPLE_LEVELS.map((r) => (
                        <tr key={r.level} className="border-b border-slate-100 last:border-0">
                          <td className="py-2.5 font-semibold text-brand-navy">{r.level}</td>
                          <td className="py-2.5 text-slate-600">{r.slip}</td>
                          <td className={`py-2.5 font-medium ${r.grade === 'Grade II' ? 'text-brand-blue' : 'text-slate-600'}`}>
                            {r.grade}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="mt-5 rounded-xl bg-brand-mist/70 p-4 text-sm">
                    <p className="font-semibold text-brand-navy">Impression</p>
                    <p className="mt-1 leading-relaxed text-slate-600">
                      Grade II spondylolisthesis at L4–L5 (28% slip). Remaining levels within normal
                      alignment limits.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      t: 'Image quality & confidence',
                      d: 'Diagnostic quality — adequate. Measurement confidence: high. Flagged for routine review.',
                    },
                    {
                      t: 'Clinical correlation',
                      d: 'Findings are consistent with the reported chronic mechanical low-back pain. Correlation with neurological examination is advised.',
                    },
                    {
                      t: 'Next-step guidance',
                      d: 'Conservative management with a structured rehabilitation program; follow-up imaging in 12 weeks or earlier if red flags emerge.',
                    },
                  ].map((b) => (
                    <div key={b.t} className="rounded-xl border border-slate-200 p-4 text-sm">
                      <p className="font-semibold text-brand-navy">{b.t}</p>
                      <p className="mt-1 leading-relaxed text-slate-600">{b.d}</p>
                    </div>
                  ))}
                  <div className="flex items-center gap-3 rounded-xl bg-brand-navy p-4 text-sm">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-brand-green" />
                    <p className="text-slate-300">
                      Draft generated by SpineSight ·{' '}
                      <span className="font-semibold text-white">
                        Reviewed and approved by the treating physician
                      </span>{' '}
                      (demonstration sign-off)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH STRIP */}
      <section className="bg-brand-mist/70 py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow-light">Evidence First</span>
            <h2 className="mt-5 text-3xl font-bold text-brand-navy sm:text-4xl">
              Built on published research, verified by physicians
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              What we built came from published scientific work — and everything that comes next
              follows the same path: clinical question, annotated data, AI model, and external
              validation across doctors and sites.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Built on published clinical research and physician-reviewed validation',
                'External validation completed on multi-source datasets',
                'Validation manuscript currently under peer review',
                'Further papers under review in international journals',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-slate-700">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <span className="text-sm font-medium">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/science" className="btn-primary mt-8">
              Explore Our Science <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="reveal relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand-green/25 to-brand-blue/25 blur-2xl" />
            <img
              src="/images/platform-case-entry.webp"
              alt="SpineSight structured clinical assessment"
              className="relative w-full rounded-2xl border border-slate-200 shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
