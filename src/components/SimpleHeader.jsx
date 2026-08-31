import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Menu, X } from 'lucide-react'
import MotionLink from './MotionLink'

const links = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Bio markers', href: '/#biomarkers' },
  { label: 'Protocols', to: '/products' },
  { label: 'Members', href: '/#members' },
]

// Back + Get Started header used on sub-pages (protocols, legal), with a
// mobile hamburger menu so those nav destinations stay reachable without a
// full desktop nav bar.
export default function SimpleHeader() {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="relative">
      <header className="flex w-full items-center justify-between px-6 py-6 md:px-10">
        <motion.button
          type="button"
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-orange-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </motion.button>

        <div className="flex items-center gap-3">
          <MotionLink
            to="/get-started"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden bg-gradient-orange rounded-[20px] px-4 py-2 text-sm font-medium text-white lg:inline-block"
          >
            Get Started
          </MotionLink>

          <motion.button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            whileTap={{ scale: 0.92 }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e1db] text-ink-2 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-white/90 backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-6 pt-2 md:px-10">
              {links.map((l) =>
                l.to ? (
                  <MotionLink
                    key={l.label}
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-2 py-3 text-base font-medium text-ink-2 transition-colors hover:bg-[#f0ede8]"
                  >
                    {l.label}
                  </MotionLink>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-2 py-3 text-base font-medium text-ink-2 transition-colors hover:bg-[#f0ede8]"
                  >
                    {l.label}
                  </a>
                )
              )}

              <MotionLink
                to="/get-started"
                onClick={() => setMobileOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-orange mt-2 rounded-[20px] px-4 py-3 text-center text-base font-semibold text-white"
              >
                Get Started
              </MotionLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
