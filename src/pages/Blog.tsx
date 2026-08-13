import { Link } from 'react-router'
import { ArrowRight, CalendarDays, Clock } from 'lucide-react'
import { PageHero, CTASection } from '@/components/Sections'
import { BLOG_POSTS } from '@/data/site'
import { useReveal } from '@/hooks/useReveal'
import SEO from '@/components/SEO'
import { NewsletterForm } from '@/components/Newsletter'

export default function Blog() {
  useReveal()
  const [featured, ...rest] = BLOG_POSTS
  return (
    <>
      <SEO title="Blog" description="Insights on spine imaging, AI in radiology, and clinical practice from the SpineSight team." path="/blog" />
      <PageHero
        eyebrow="Blog"
        title="Insights on spine imaging, AI, and clinical practice"
        subtitle="Educational articles from the SpineSight team — written for physicians, imaging centers, and healthcare leaders."
      />

      <section className="bg-white py-24">
        <div className="container-site">
          {/* Featured */}
          <Link
            to={`/blog/${featured.slug}`}
            className="reveal group grid overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-navy to-brand-deep shadow-lg lg:grid-cols-2"
          >
            <div className="relative min-h-[260px] overflow-hidden">
              <img
                src="/images/platform-analysis.webp"
                alt={featured.title}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-deep/60" />
            </div>
            <div className="p-10">
              <span className="rounded-full bg-brand-green/20 px-3.5 py-1 text-xs font-semibold text-brand-green">
                {featured.category}
              </span>
              <h2 className="mt-5 text-2xl font-bold leading-snug text-white transition-colors group-hover:text-brand-green sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-300">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-5 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" /> {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">
                Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="card-soft reveal group flex flex-col"
              >
                <span className="w-fit rounded-full bg-brand-mist px-3.5 py-1 text-xs font-semibold text-brand-blue">
                  {p.category}
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-brand-navy transition-colors group-hover:text-brand-blue">
                  {p.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">{p.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" /> {p.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {p.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-brand-sky/60 py-20">
        <div className="container-site mx-auto max-w-2xl text-center">
          <h2 className="reveal text-2xl font-bold text-brand-navy sm:text-3xl">
            Get new articles in your inbox
          </h2>
          <p className="reveal mt-3 text-slate-600">
            Quarterly, research-focused, and written for practicing physicians.
          </p>
          <div className="reveal mx-auto mt-8 max-w-md rounded-3xl bg-brand-navy p-6 shadow-xl">
            <NewsletterForm compact />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
