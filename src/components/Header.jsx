import { motion } from 'framer-motion'
import logoPart1 from '../assets/figma/logo-part1.svg'
import logoPart2 from '../assets/figma/logo-part2.svg'
import logoPart3 from '../assets/figma/logo-part3.svg'
import { useGetStarted } from '../context/GetStartedContext'

const links = ['How it works', 'Biomarkers', 'Protocols', 'Members']

export default function Header() {
  const openGetStarted = useGetStarted()

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-0 left-0 right-0 z-30 bg-white/25 backdrop-blur-sm"
    >
      <div className="flex w-full items-center justify-between px-10 py-6">
        <div className="relative h-[23px] w-[128px]">
          <img src={logoPart1} alt="" className="absolute left-0 top-0 h-[23px]" />
          <img src={logoPart2} alt="protocol" className="absolute left-[33px] top-0 h-[23px]" />
          <img src={logoPart3} alt="" className="absolute left-[72px] top-0 h-[18px]" />
        </div>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="relative text-sm text-[rgba(24,15,13,0.75)] transition-colors hover:text-ink-2 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-ink-2 after:transition-all after:duration-300 hover:after:w-full"
            >
              {l}
            </a>
          ))}
        </nav>

        <motion.button
          type="button"
          onClick={openGetStarted}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-[20px] bg-[#180f0d] px-4 py-2 text-sm font-medium text-[#fdf9f4]"
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  )
}
