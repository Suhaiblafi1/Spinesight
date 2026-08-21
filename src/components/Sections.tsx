import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle: string
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy pb-20 pt-40">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand-blue/30 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-brand-green/20 blur-[120px]" />
      <div className="container-site relative">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{subtitle}</p>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-24">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-green/15 blur-[120px]" />
      <div className="container-site relative text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
          Bring research-backed spine AI to your institution
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Explore a structured pilot designed around your clinical workflow, case volume, and
          integration requirements.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-primary">
            Discuss a Pilot <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/pricing" className="btn-outline">
            View Plans
          </Link>
        </div>
      </div>
    </section>
  )
}
