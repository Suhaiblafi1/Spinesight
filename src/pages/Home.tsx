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
    text: 'Readings of the same spine study can differ between physicians, leading to inaccurate diagnoses or unsuitable treatment pathways.',
  },
  {
    icon: Stethoscope,
    title: 'Non-specialists need immediate support',
    text: 'Emergency, family, and rehabilitation physicians need a clear preliminary reading to decide and refer to the right specialty.',
  },
  {
    icon: Timer,
    title: 'Delays can cause irreversible harm',
    text: 'Late detection or referral of significant findings can worsen symptoms and cause neurological or functional damage.',
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
    text: 'A preliminary result plus a suitable rehabilitation plan when the physician needs quick confirmation, generated after entering the patient\u2019s core data.',
    bullets: [
      'Preliminary AI reading in under a minute',
      'Rehab plan from core patient data',
      'Ideal for busy clinics & ER',
    ],
  },
  {
    icon: ClipboardList,
    name: 'Integrated Service',
    tag: 'Comprehensive report',
    text: 'A detailed report with a clinical recommendation. The physician adds symptoms and broader clinical context to strengthen the report, with a rehabilitation plan when needed.',
    bullets: [
      'Detailed report + clinical recommendation',
      'Symptoms & context enrich the output',
      'Referral or rehab pathway included',
    ],
  },
]

export default function Home() {
  useReveal()
  const [activeTier, setActiveTier] = useState(0)
  const { ref: statsRef, inView: statsInView } = useInView<HTMLElement>()
  return (
    <>
      <SEO title="AI-Powered Spine Analysis" description="From spine X-ray and MRI to a clear clinical report and rehabilitation plan in under a minute. Research-based AI decision support with physician verification." path="/" />
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-navy pb-24 pt-36">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-brand-blue/30 blur-[130px]" />
        <div className="absolute -left-40 bottom-0 h-[480px] w-[480px] rounded-full bg-brand-green/20 blur-[130px]" />
        <div className="container-site relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow">
              <Microscope className="h-3.5 w-3.5" /> Research-based clinical decision support
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.12] text-white sm:text-5xl lg:text-[3.4rem]">
              From a spine scan to a clear clinical report in{' '}
              <span className="text-gradient">under a minute</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              SpineSight analyzes X-ray and MRI studies, supports non-specialist physicians,
              accelerates decision-making, and helps reduce reading errors — with doctor
              verification built into every step.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Request a Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/how-it-works" className="btn-outline">
                See How It Works
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-brand-green" /> Published clinical research
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-green" /> Doctor-verified outputs
              </span>
              <span className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-brand-green" /> X-ray + MRI support
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
          <Stat value={5} suffix="" label="Disease modules across the spine" started={statsInView} />
          <Stat value={3} suffix="" label="Scientific papers behind the engine" started={statsInView} />
          <Stat value={10000} suffix="+" label="Annotated training cases" started={statsInView} />
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
              'Multi-Site External Validation',
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
              Disease modules across the spine
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Every condition becomes a product only after medical data collection, expert labeling,
              and accuracy verification — research first, software second.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {DISEASE_MODULES.map((m) => (
              <div
                key={m.id}
                className="reveal group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all hover:border-brand-green/40 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-bold text-brand-green">{m.id}</span>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                      m.status === 'Published evidence'
                        ? 'bg-brand-green/20 text-brand-green'
                        : 'bg-white/10 text-slate-300'
                    }`}
                  >
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
              and issue a reviewable report — with direct PACS connectivity.
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
        </div>
      </section>

      {/* RESEARCH STRIP */}
      <section className="bg-brand-mist/70 py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow-light">Evidence First</span>
            <h2 className="mt-5 text-3xl font-bold text-brand-navy sm:text-4xl">
              Built on published science, verified by physicians
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              What we built came from published scientific work — and everything that comes next
              follows the same path: clinical question, annotated data, AI model, and external
              validation across doctors and sites.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Published clinical evidence supporting the first disease module',
                'Independent physician verification of model outputs',
                'Multi-site external validation study underway',
                'Two further papers under review in international journals',
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
