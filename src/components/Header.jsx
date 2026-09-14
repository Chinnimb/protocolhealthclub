import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import MotionLink from './MotionLink'
import { categories } from '../data/protocolsData'
import logoPart1 from '../assets/figma/logo-part1.svg'
import logoPart2 from '../assets/figma/logo-part2.svg'
import logoPart3 from '../assets/figma/logo-part3.svg'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProtocolsOpen, setMobileProtocolsOpen] = useState(false)
  const [mobileOpenCategory, setMobileOpenCategory] = useState(null)

  const [desktopProtocolsOpen, setDesktopProtocolsOpen] = useState(false)
  const [desktopOpenCategory, setDesktopOpenCategory] = useState(null)
  const desktopProtocolsRef = useRef(null)

  const closeMenu = () => {
    setMobileOpen(false)
    setMobileProtocolsOpen(false)
    setMobileOpenCategory(null)
  }

  useEffect(() => {
    if (!desktopProtocolsOpen) return
    const onClickOutside = (e) => {
      if (desktopProtocolsRef.current && !desktopProtocolsRef.current.contains(e.target)) {
        setDesktopProtocolsOpen(false)
        setDesktopOpenCategory(null)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [desktopProtocolsOpen])

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

        <div className="flex items-center gap-3">
          <div ref={desktopProtocolsRef} className="relative hidden lg:block">
            <button
              type="button"
              onClick={() => setDesktopProtocolsOpen((v) => !v)}
              className={`relative z-20 flex items-center gap-1.5 border-2 px-4 py-2 text-sm font-medium transition-colors ${
                desktopProtocolsOpen
                  ? 'rounded-t-[20px] rounded-b-none border-[#e8e8e8] border-b-0 bg-white text-ink-2'
                  : 'rounded-[20px] border-white/70 bg-white/30 text-ink-2 hover:bg-white/50'
              }`}
            >
              Explore Protocols
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${desktopProtocolsOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {desktopProtocolsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute right-0 top-full z-10 w-[280px] rounded-b-[20px] rounded-tl-[20px] border border-t-0 border-[#e8e8e8] bg-white p-2 shadow-[0px_16px_40px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex flex-col gap-0.5">
                    {categories.map((c) => (
                      <div key={c.slug}>
                        <button
                          type="button"
                          onClick={() => setDesktopOpenCategory((s) => (s === c.slug ? null : c.slug))}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:bg-[#faf8f5]"
                        >
                          {c.name}
                          <ChevronRight
                            className={`h-3.5 w-3.5 transition-transform duration-300 ${
                              desktopOpenCategory === c.slug ? 'rotate-90' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {desktopOpenCategory === c.slug && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-0.5 py-1 pl-4">
                                {c.products.map((p) => (
                                  <span key={p.slug} className="rounded-lg px-3 py-1.5 text-xs text-[#6e6e6e]">
                                    {p.name}
                                  </span>
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

          <MotionLink
            to="/get-started#choose-lab-panel"
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
              <div>
                <button
                  type="button"
                  onClick={() => setMobileProtocolsOpen((v) => !v)}
                  className={`flex w-full items-center justify-between rounded-lg px-2 py-3 text-base text-ink-2 transition-colors hover:bg-white/60 ${
                    mobileProtocolsOpen ? 'font-semibold' : 'font-medium'
                  }`}
                >
                  Explore Protocols
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${mobileProtocolsOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileProtocolsOpen && (
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
                              onClick={() => setMobileOpenCategory((s) => (s === c.slug ? null : c.slug))}
                              className="flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:bg-white/60"
                            >
                              {c.name}
                              <ChevronRight
                                className={`h-3.5 w-3.5 transition-transform duration-300 ${mobileOpenCategory === c.slug ? 'rotate-90' : ''}`}
                              />
                            </button>

                            <AnimatePresence>
                              {mobileOpenCategory === c.slug && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                  className="overflow-hidden"
                                >
                                  <div className="flex flex-col gap-0.5 py-1 pl-3">
                                    {c.products.map((p) => (
                                      <span key={p.slug} className="rounded-lg px-2 py-2 text-sm text-[#6e6e6e]">
                                        {p.name}
                                      </span>
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

              <MotionLink
                to="/get-started#choose-lab-panel"
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
