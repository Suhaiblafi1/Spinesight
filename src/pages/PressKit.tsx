import { Download, Mail, Building2, MapPin, Microscope, Cpu } from 'lucide-react'
import { PageHero } from '@/components/Sections'
import SEO from '@/components/SEO'
import { CONTACT_EMAIL } from '@/data/site'
import { useReveal } from '@/hooks/useReveal'

const FACTS = [
  { icon: Building2, label: 'Focus', value: 'AI clinical decision support for spine imaging (X-ray + MRI)' },
  { icon: MapPin, label: 'Headquarters', value: 'Amman, Jordan' },
  { icon: Microscope, label: 'Evidence', value: 'Published clinical research; multi-site external validation underway' },
  { icon: Cpu, label: 'Product', value: 'Live diagnostics platform with PACS/DICOM connectivity' },
]

const ASSETS = [
  { name: 'SpineSight logo — icon (PNG)', file: '/images/logo-icon.png' },
  { name: 'SpineSight logo — full lockup (PNG)', file: '/images/logo-full.png' },
  { name: 'Platform — AI analysis screen', file: '/images/platform-analysis.webp' },
  { name: 'Platform — case dashboard', file: '/images/platform-dashboard.webp' },
  { name: 'Platform — rehabilitation plan', file: '/images/platform-rehab.webp' },
]

const BOILERPLATE_SHORT =
  'SpineSight is a research-based clinical decision-support platform for spine imaging. It analyzes X-ray and MRI studies and turns them into physician-verified reports and rehabilitation plans in under a minute — supporting non-specialist physicians, accelerating decisions, and reducing reading errors.'

const BOILERPLATE_LONG =
  'SpineSight is a health-tech company building AI clinical decision support for spine imaging. Born from published academic research, the platform analyzes spine X-ray and MRI studies through disease-specific modules — spondylolisthesis, scoliosis, vertebral fractures, degenerative changes, and MRI disc assessment — and converts them into physician-verified clinical reports and structured rehabilitation plans in under a minute. Every module is developed through a research-first pipeline: annotated medical data, expert physician labeling, model training, independent verification, and scientific publication. Headquartered in Amman, Jordan, SpineSight serves hospitals, imaging centers, and clinics across the region, with a regulatory roadmap spanning JFDA, SFDA, ISO 13485, CE/MDR, and FDA readiness.'

export default function PressKit() {
  useReveal()
  return (
    <>
      <SEO
        title="Press Kit"
        description="SpineSight media resources: official boilerplate, brand assets, platform imagery, key facts, and press contact."
        path="/press"
      />
      <PageHero
        eyebrow="Press Kit"
        title="Media resources & brand assets"
        subtitle="Everything journalists, conference organizers, and partners need to write or speak about SpineSight accurately."
      />

      {/* KEY FACTS */}
      <section className="bg-white py-20">
        <div className="container-site">
          <div className="reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FACTS.map((f) => (
              <div key={f.label} className="card-soft">
                <f.icon className="h-6 w-6 text-brand-blue" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-400">{f.label}</p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-brand-navy">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOILERPLATES */}
      <section className="bg-brand-sky/60 py-20">
        <div className="container-site max-w-4xl">
          <span className="eyebrow-light">Official Boilerplate</span>
          <div className="mt-8 space-y-6">
            <div className="reveal rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-brand-navy">Short — 50 words</h2>
              </div>
              <p className="mt-4 leading-relaxed text-slate-600">{BOILERPLATE_SHORT}</p>
            </div>
            <div className="reveal rounded-2xl border border-slate-200 bg-white p-8">
              <h2 className="text-lg font-bold text-brand-navy">Long — 120 words</h2>
              <p className="mt-4 leading-relaxed text-slate-600">{BOILERPLATE_LONG}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ASSETS */}
      <section className="bg-white py-20">
        <div className="container-site">
          <div className="reveal max-w-2xl">
            <span className="eyebrow-light">Brand Assets</span>
            <h2 className="mt-5 text-3xl font-bold text-brand-navy">Logos & platform imagery</h2>
            <p className="mt-3 text-slate-600">
              Free to use in editorial coverage of SpineSight. Please do not alter the logo colors or
              proportions.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ASSETS.map((a) => (
              <a
                key={a.file}
                href={a.file}
                download
                className="reveal group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="text-sm font-medium text-brand-navy">{a.name}</span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-mist text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  <Download className="h-5 w-5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-brand-navy py-20">
        <div className="container-site text-center">
          <Mail className="mx-auto h-9 w-9 text-brand-green" />
          <h2 className="mt-5 text-3xl font-bold text-white">Press & media inquiries</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            For interviews, speaking requests, or additional materials, reach us directly:
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-block rounded-full bg-white/10 px-8 py-3.5 font-medium text-white transition-colors hover:bg-white/20"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </section>
    </>
  )
}
