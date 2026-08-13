import { Target, Eye, HeartHandshake, Stethoscope } from 'lucide-react'
import { PageHero, CTASection } from '@/components/Sections'
import { TEAM, CLINICAL_ADVISORS } from '@/data/site'
import { useReveal } from '@/hooks/useReveal'
import SEO from '@/components/SEO'

const VALUES = [
  {
    icon: Target,
    title: 'Evidence before scale',
    text: 'Every module passes through data, medical labeling, training, verification, and publication before commercial expansion.',
  },
  {
    icon: Stethoscope,
    title: 'The physician stays in control',
    text: 'SpineSight is an assistant to the physician: it confirms readings, reduces uncertainty, and simplifies reporting — it never replaces clinical judgment.',
  },
  {
    icon: HeartHandshake,
    title: 'Built for the region',
    text: 'An Arabic-rooted health-tech company designing for the workflows, hospitals, and patients of the Middle East — with global scientific standards.',
  },
]

export default function About() {
  useReveal()
  return (
    <>
      <SEO title="About Us" description="Meet the SpineSight team: clinical research, medical AI, and healthcare business development, guided by specialist clinical advisors in Amman, Jordan." path="/about" />
      <PageHero
        eyebrow="About Us"
        title="A team that combines clinical research with commercial execution"
        subtitle="Our strength comes from understanding hospital workflows, deep medical-imaging expertise, and the ability to open markets and build partnerships."
      />

      {/* MISSION / VISION */}
      <section className="bg-white py-24">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          <div className="reveal rounded-3xl bg-brand-navy p-10">
            <Target className="h-9 w-9 text-brand-green" />
            <h2 className="mt-5 text-2xl font-bold text-white">Our Mission</h2>
            <p className="mt-3 leading-relaxed text-slate-300">
              To help every physician read spine imaging with specialist-level confidence — reducing
              reading errors, accelerating decisions, and giving patients a clearer, faster path to
              the right care.
            </p>
          </div>
          <div className="reveal rounded-3xl border border-slate-200 bg-brand-mist/60 p-10">
            <Eye className="h-9 w-9 text-brand-blue" />
            <h2 className="mt-5 text-2xl font-bold text-brand-navy">Our Vision</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              To become the reference platform for spine imaging intelligence in the Arab world and
              beyond — a research-driven engine that keeps expanding within the spinal clinical
              workflow.
            </p>
          </div>
        </div>
        <div className="container-site mt-6 grid gap-6 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="card-soft reveal">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-mist text-brand-blue">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-navy">{v.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-brand-sky/60 py-24">
        <div className="container-site">
          <div className="reveal max-w-2xl">
            <span className="eyebrow-light">Leadership</span>
            <h2 className="mt-5 text-3xl font-bold text-brand-navy sm:text-4xl">Founding team</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TEAM.map((t) => (
              <div key={t.name} className="card-soft reveal">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green font-display text-xl font-bold text-white">
                  {t.name.replace('Dr. ', '').split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-navy">{t.name}</h3>
                <p className="text-sm font-semibold text-brand-green">{t.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{t.bio}</p>
              </div>
            ))}
          </div>

          <div className="reveal mt-20 max-w-2xl">
            <span className="eyebrow-light">Clinical Advisors</span>
            <h2 className="mt-5 text-3xl font-bold text-brand-navy sm:text-4xl">
              Guided by specialist clinicians
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {CLINICAL_ADVISORS.map((a) => (
              <div
                key={a.name}
                className="reveal flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy font-display text-sm font-bold text-white">
                  {a.name.replace('Dr. ', '').split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy">{a.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
