import { motion } from 'framer-motion'
import Header from '../Header'
import Typewriter from '../Typewriter'
import arrowIcon from '../../assets/figma/hero-arrow-icon.svg'
import checkIcon from '../../assets/figma/hero-check-icon.svg'
import heroPhoto from '../../assets/figma/getstarted/getstarted-hero-photo.jpg'

export default function GetStartedHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1a0f08]">
      <div className="relative min-h-[860px] w-full overflow-hidden">
        <motion.img
          src={heroPhoto}
          alt=""
          initial={{ scale: 1.08 }}
          animate={{ scale: [1.08, 1.16, 1.08], x: [0, 12, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        <Header />

        <div className="relative z-10 flex min-h-[860px] w-full flex-col justify-center px-10 pb-16 pt-28 md:pt-32">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[680px] text-5xl font-bold leading-[1.04] text-white md:text-[64px] md:tracking-[-1.8px]"
          >
            Start with bloodwork.
            <br />
            <Typewriter
              text="Then we build your protocol."
              className="font-serif italic font-normal"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-[520px] text-lg leading-relaxed text-white/90"
          >
            Choose the lab panel that matches the depth of insight you want. Once results return, the team reviews everything and maps the smartest path forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-col items-start gap-4"
          >
            <motion.a
              href="#choose-lab-panel"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-orange flex w-full max-w-[356px] items-center justify-center gap-3 rounded-full px-9 py-[18px] text-lg font-medium text-white sm:w-auto"
            >
              Choose Your Lab
              <img src={arrowIcon} alt="" className="h-5 w-5" />
            </motion.a>

            <div className="flex items-center gap-2 pl-1">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full border-[1.5px] border-[#d9d8d7]">
                <img src={checkIcon} alt="" className="h-3 w-3" />
              </span>
              <span className="text-sm font-medium text-[#d9d8d7]">HSA/FSA Elegible</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
