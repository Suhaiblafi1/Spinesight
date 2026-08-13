import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { ArrowLeft, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react'
import { PLATFORM_LOGIN_URL } from '@/data/site'
import SEO from '@/components/SEO'

export default function Login() {
  const [seconds, setSeconds] = useState(3)

  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000)
    const redirect = setTimeout(() => {
      window.location.href = PLATFORM_LOGIN_URL
    }, 3000)
    return () => {
      clearInterval(timer)
      clearTimeout(redirect)
    }
  }, [])

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-brand-deep via-brand-navy to-[#123B52] px-5 py-24">
      <SEO
        title="Sign In"
        description="Sign in to the SpineSight diagnostics platform: secure access for verified physicians and healthcare institutions."
        path="/login"
      />
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-blue/30 blur-[110px]" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-green/20 blur-[110px]" />

      <div className="relative w-full max-w-md text-center">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to website
        </Link>

        <img src="/images/logo-icon.webp" alt="SpineSight" className="mx-auto h-20 w-20 object-contain" />
        <h1 className="mt-5 font-display text-3xl font-bold text-white">
          Spine<span className="text-brand-green">Sight</span>
        </h1>
        <p className="mt-1.5 text-sm text-slate-300">AI-Powered Spine Analysis Platform</p>

        <div className="mt-9 rounded-3xl bg-white p-9 shadow-2xl">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-brand-blue" />
          <h2 className="mt-5 text-xl font-bold text-brand-navy">Taking you to the secure platform</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            You are being redirected to the SpineSight diagnostics platform
            {seconds > 0 ? ` in ${seconds}…` : '…'}
          </p>
          <a
            href={PLATFORM_LOGIN_URL}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-[#1F567F] py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Continue to Sign In <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-5 text-xs leading-relaxed text-slate-400">
            Access is provisioned by your institution. To request an account,{' '}
            <Link to="/contact" className="font-medium text-brand-blue hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="h-4 w-4 text-brand-green" /> Secure, encrypted connection
        </p>
      </div>
    </div>
  )
}
