import { ShieldCheck, Lock, FileCheck2, Server, ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { PageHero, CTASection } from '@/components/Sections'
import { REGULATORY_ROADMAP } from '@/data/site'
import { useReveal } from '@/hooks/useReveal'
import SEO from '@/components/SEO'

const SECURITY = [
  {
    icon: Lock,
    title: 'Data protection',
    text: 'Imaging data is de-identified before analysis, with encrypted transfer and storage aligned with healthcare data-protection practice.',
  },
  {
    icon: Server,
    title: 'Standards-based integration',
    text: 'Native DICOM handling and PACS connectivity mean SpineSight fits into existing hospital imaging infrastructure.',
  },
  {
    icon: FileCheck2,
    title: 'Physician-in-the-loop',
    text: 'Every output is reviewed and approved by a licensed physician before it enters the clinical record.',
  },
]

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
              Certifications and registrations in progress
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
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                      r.status === 'In progress'
                        ? 'bg-brand-green/15 text-brand-green'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {r.status}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-navy">{r.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.detail}</p>
              </div>
            ))}
          </div>
          <p className="reveal mt-8 max-w-3xl text-sm text-slate-500">
            Status shown reflects the current stage of each program. SpineSight does not claim
            certification until it is formally granted by the relevant authority.
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
