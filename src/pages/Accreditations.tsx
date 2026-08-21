import { ShieldCheck, Lock, FileCheck2, Server, ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { PageHero, CTASection } from '@/components/Sections'
import { REGULATORY_ROADMAP, COMPLIANCE_UPDATED } from '@/data/site'
import { useReveal } from '@/hooks/useReveal'
import SEO from '@/components/SEO'

const SECURITY = [
  {
    icon: Lock,
    title: 'Data protection',
    text: 'SpineSight is designed with encrypted data transfer and storage, and configurable de-identification of imaging data before analysis.',
  },
  {
    icon: Server,
    title: 'Standards-based integration',
    text: 'PACS/DICOM integration is available as part of institutional deployment and is configured to the hospital\u2019s technical environment.',
  },
  {
    icon: FileCheck2,
    title: 'Physician-in-the-loop',
    text: 'Outputs are designed for review and approval by the treating physician before clinical use; the institution retains clinical responsibility.',
  },
]

function statusStyle(status: string) {
  if (status === 'Under review') return 'bg-brand-blue/15 text-brand-blue'
  if (status === 'In progress') return 'bg-brand-green/15 text-brand-green'
  return 'bg-slate-100 text-slate-500'
}

export default function Accreditations() {
  useReveal()
  return (
    <>
      <SEO title="Accreditations & Compliance" description="SpineSight's quality and regulatory roadmap: ISO 13485, JFDA, SFDA, CE/MDR, and FDA readiness, plus our approach to data privacy and security." path="/accreditations" />
      <PageHero
        eyebrow="Accreditations & Compliance"
        title="A clear regulatory pathway, pursued with discipline"
        subtitle="SpineSight is progressing through a structured quality and regulatory program designed for medical software — market by market."
      />

      {/* ROADMAP */}
      <section className="bg-white py-24">
        <div className="container-site">
          <div className="reveal max-w-2xl">
            <span className="eyebrow-light">Regulatory Roadmap</span>
            <h2 className="mt-5 text-3xl font-bold text-brand-navy sm:text-4xl">
              Certifications and registrations
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Regulatory work is sequenced with our commercial expansion — starting in Jordan and the
              Gulf, then Europe and the United States.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REGULATORY_ROADMAP.map((r) => (
              <div key={r.name} className="card-soft reveal">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-mist text-brand-blue">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${statusStyle(r.status)}`}>
                    {r.status}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-navy">{r.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.detail}</p>
              </div>
            ))}
          </div>
          <p className="reveal mt-8 max-w-3xl text-sm text-slate-500">
            Status labels reflect the exact current stage of each program — preparation, submission,
            review, or granting. SpineSight does not claim certification until it is formally granted
            by the relevant authority.{' '}
            <span className="font-medium text-slate-600">Last updated: {COMPLIANCE_UPDATED}.</span>
          </p>
        </div>
      </section>

      {/* SECURITY */}
      <section className="bg-brand-navy py-24">
        <div className="container-site">
          <div className="reveal max-w-2xl">
            <span className="eyebrow">Privacy & Security</span>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Patient data handled with clinical-grade care
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              SpineSight is designed with encrypted data transfer, role-based access, and
              configurable de-identification. Deployment controls — hosting region, retention,
              access logs, and backup — are documented for each institutional implementation.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {SECURITY.map((s) => (
              <div
                key={s.title}
                className="reveal rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-12 text-center">
            <Link to="/contact" className="btn-primary">
              Request Our Compliance Brief <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
