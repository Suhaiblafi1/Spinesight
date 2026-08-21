import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import { Menu, X, ArrowRight, LogIn, Mail, MapPin, MessageCircle } from 'lucide-react'
import { NAV_LINKS, CONTACT_EMAIL, PLATFORM_LOGIN_URL, SITE_URL, WHATSAPP_URL, ADDRESS } from '@/data/site'
import JsonLd from './JsonLd'
import NewsletterSection from './Newsletter'

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img src="/images/logo-icon.webp" alt="SpineSight" className="h-9 w-9 object-contain" />
      <span className={`font-display text-xl font-bold tracking-tight ${dark ? 'text-white' : 'text-brand-navy'}`}>
        Spine<span className="text-brand-green">Sight</span>
      </span>
    </Link>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? 'bg-white/90 shadow-sm backdrop-blur-lg' : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="container-site flex h-[72px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'bg-brand-mist text-brand-blue' : 'text-slate-600 hover:text-brand-navy'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={PLATFORM_LOGIN_URL}
            className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 px-5 py-2.5 text-sm font-semibold text-brand-navy transition-all hover:border-brand-blue hover:text-brand-blue"
          >
            <LogIn className="h-4 w-4" /> Login
          </a>
          <Link to="/contact" className="btn-primary !px-5 !py-2.5">
            Request a Demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <button
          className="rounded-lg p-2 text-brand-navy lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white px-5 pb-6 pt-3 lg:hidden">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 text-sm font-medium ${isActive ? 'bg-brand-mist text-brand-blue' : 'text-slate-600'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div className="mt-4 flex gap-3">
            <a href={PLATFORM_LOGIN_URL} className="btn-outline-dark flex-1 !py-2.5">
              <LogIn className="h-4 w-4" /> Login
            </a>
            <Link to="/contact" className="btn-primary flex-1 !py-2.5">
              Request a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-brand-deep text-slate-300">
      <div className="container-site grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo dark />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
            Research-backed clinical decision support for spine imaging. From a lumbar X-ray to a
            structured clinical report and rehabilitation plan — with the physician always in control.
          </p>
          <div className="mt-6 space-y-2 text-sm text-slate-400">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-green" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-green" /> {ADDRESS}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with SpineSight on WhatsApp"
                title="Chat with us on WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-teal text-white shadow-lg shadow-brand-green/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white">Platform</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
            <li><Link to="/science" className="hover:text-white">Science & Research</Link></li>
            <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><a href={PLATFORM_LOGIN_URL} className="hover:text-white">Physician Login</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/case-study" className="hover:text-white">Case Study</Link></li>
            <li><Link to="/accreditations" className="hover:text-white">Accreditations</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/press" className="hover:text-white">Press Kit</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} SpineSight. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Use</Link>
          </div>
          <p>SpineSight is a clinical decision-support tool. It does not replace physician judgment.</p>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div className="min-h-screen">
      <JsonLd
        id="organization"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'SpineSight',
          url: SITE_URL,
          logo: `${SITE_URL}/images/logo-icon.png`,
          description:
            'Research-backed clinical decision support for spine imaging: from a lumbar X-ray to a structured, physician-reviewable report and rehabilitation plan.',
          email: CONTACT_EMAIL,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Amman',
            addressCountry: 'JO',
          },
          sameAs: [],
        }}
      />
      <JsonLd
        id="website"
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'SpineSight',
          url: SITE_URL,
        }}
      />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <NewsletterSection />
      <Footer />
      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SpineSight on WhatsApp"
        title="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-teal text-white shadow-xl shadow-brand-green/30 transition-all hover:-translate-y-1 hover:shadow-2xl"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  )
}
