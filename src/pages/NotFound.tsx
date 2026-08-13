import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-5 pt-20 text-center">
      <p className="font-display text-7xl font-bold text-brand-green/30">404</p>
      <h1 className="mt-4 text-3xl font-bold text-brand-navy">Page not found</h1>
      <p className="mt-3 max-w-md text-slate-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>
    </section>
  )
}
