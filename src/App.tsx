import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Science from './pages/Science'
import About from './pages/About'
import Accreditations from './pages/Accreditations'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import CaseStudy from './pages/CaseStudy'
import PressKit from './pages/PressKit'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import CookieConsent from './components/CookieConsent'
import Analytics from './components/Analytics'

export default function App() {
  return (
    <>
      <CookieConsent />
      <Analytics />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/science" element={<Science />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/accreditations" element={<Accreditations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/press" element={<PressKit />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
