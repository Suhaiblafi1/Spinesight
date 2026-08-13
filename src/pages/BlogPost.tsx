import { Link, useParams } from 'react-router'
import { ArrowLeft, CalendarDays, Clock, ArrowRight } from 'lucide-react'
import { BLOG_POSTS, SITE_URL } from '@/data/site'
import SEO from '@/components/SEO'
import JsonLd from '@/components/JsonLd'
import { CTASection } from '@/components/Sections'
import { useReveal } from '@/hooks/useReveal'

export default function BlogPost() {
  useReveal()
  const { slug } = useParams()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="bg-white py-40 text-center">
        <h1 className="text-3xl font-bold text-brand-navy">Article not found</h1>
        <Link to="/blog" className="btn-primary mt-8">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </section>
    )
  }

  const others = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      <SEO title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />
      <JsonLd
        id={`article-${post.slug}`}
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { '@type': 'Organization', name: 'SpineSight', url: SITE_URL },
          publisher: {
            '@type': 'Organization',
            name: 'SpineSight',
            logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo-icon.png` },
          },
          mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        }}
      />
      <section className="relative overflow-hidden bg-brand-navy pb-16 pt-40">
        <div className="grid-bg absolute inset-0" />
        <div className="container-site relative max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <div className="mt-6">
            <span className="rounded-full bg-brand-green/20 px-3.5 py-1 text-xs font-semibold text-brand-green">
              {post.category}
            </span>
          </div>
          <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">{post.title}</h1>
          <div className="mt-5 flex items-center gap-5 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <article className="container-site max-w-3xl">
          {post.body.map((section, i) => (
            <div key={i} className="reveal mb-9">
              {section.heading && (
                <h2 className="mb-4 text-2xl font-bold text-brand-navy">{section.heading}</h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="mb-4 text-lg leading-relaxed text-slate-700">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </article>
      </section>

      <section className="bg-brand-sky/60 py-20">
        <div className="container-site">
          <h2 className="reveal text-2xl font-bold text-brand-navy">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="card-soft reveal group">
                <span className="w-fit rounded-full bg-brand-mist px-3.5 py-1 text-xs font-semibold text-brand-blue">
                  {p.category}
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-brand-navy group-hover:text-brand-blue">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">
                  Read article <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
