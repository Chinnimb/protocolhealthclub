import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import MotionLink from './MotionLink'
import { categories } from '../data/protocolsData'
import logoPart1 from '../assets/figma/logo-part1.svg'
import logoPart2 from '../assets/figma/logo-part2.svg'
import logoPart3 from '../assets/figma/logo-part3.svg'

const links = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Bio markers', href: '/#biomarkers' },
  { label: 'Protocols', to: '/products' },
  { label: 'Members', href: '/#members' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [protocolsOpen, setProtocolsOpen] = useState(false)
  const [openCategory, setOpenCategory] = useState(null)

  const closeMenu = () => {
    setMobileOpen(false)
    setProtocolsOpen(false)
    setOpenCategory(null)
  }

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-4 top-4 z-30 overflow-hidden border border-white/25 bg-white/15 backdrop-blur-md lg:inset-x-0 lg:top-0 lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-white/25 lg:backdrop-blur-sm ${
        mobileOpen ? 'rounded-[28px]' : 'rounded-full'
      }`}
    >
      <div className="flex w-full items-center justify-between px-5 py-3 lg:px-10 lg:py-6">
        <MotionLink to="/" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="relative h-5 w-[110px] lg:h-[23px] lg:w-[128px]">
          <img src={logoPart1} alt="" className="absolute left-0 top-0 h-5 lg:h-[23px]" />
          <img src={logoPart2} alt="protocol" className="absolute left-[29px] top-0 h-5 lg:left-[33px] lg:h-[23px]" />
          <img src={logoPart3} alt="" className="absolute left-[63px] top-0 h-4 lg:left-[72px] lg:h-[18px]" />
        </MotionLink>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) =>
            l.to ? (
              <MotionLink
                key={l.label}
                to={l.to}
                whileHover={{ scale: 1.02 }}
                className="relative text-sm text-[rgba(24,15,13,0.75)] transition-colors hover:text-ink-2 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-ink-2 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </MotionLink>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="relative text-sm text-[rgba(24,15,13,0.75)] transition-colors hover:text-ink-2 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-ink-2 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            )
          )}
        </nav>

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
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/40 text-ink-2 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-white/90 backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {links.map((l) => {
                if (l.label === 'Protocols') {
                  return (
                    <div key={l.label}>
                      <button
                        type="button"
                        onClick={() => setProtocolsOpen((v) => !v)}
                        className={`flex w-full items-center justify-between rounded-lg px-2 py-3 text-base font-medium text-ink-2 transition-colors hover:bg-white/60 ${
                          protocolsOpen ? 'bg-black/5' : ''
                        }`}
                      >
                        {l.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${protocolsOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <AnimatePresence>
                        {protocolsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-0.5 py-1 pl-3">
                              {categories.map((c) => (
                                <div key={c.slug}>
                                  <button
                                    type="button"
                                    onClick={() => setOpenCategory((s) => (s === c.slug ? null : c.slug))}
                                    className="flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:bg-white/60"
                                  >
                                    {c.name}
                                    <ChevronRight className="h-3.5 w-3.5" />
                                  </button>

                                  <AnimatePresence>
                                    {openCategory === c.slug && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden"
                                      >
                                        <div className="flex flex-col gap-0.5 py-1 pl-3">
                                          {c.products.map((p) => (
                                            <MotionLink
                                              key={p.slug}
                                              to={`/products/${c.slug}/${p.slug}`}
                                              onClick={closeMenu}
                                              className="rounded-lg px-2 py-2 text-sm text-[#6e6e6e] transition-colors hover:bg-white/60 hover:text-ink-2"
                                            >
                                              {p.name}
                                            </MotionLink>
                                          ))}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return l.to ? (
                  <MotionLink
                    key={l.label}
                    to={l.to}
                    onClick={closeMenu}
                    className="rounded-lg px-2 py-3 text-base font-medium text-ink-2 transition-colors hover:bg-white/60"
                  >
                    {l.label}
                  </MotionLink>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={closeMenu}
                    className="rounded-lg px-2 py-3 text-base font-medium text-ink-2 transition-colors hover:bg-white/60"
                  >
                    {l.label}
                  </a>
                )
              })}

              <MotionLink
                to="/get-started"
                onClick={closeMenu}
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
    </motion.div>
  )
}
