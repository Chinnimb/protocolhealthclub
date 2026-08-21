import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Header from './Header'
import Typewriter from './Typewriter'
import { useGetStarted } from '../context/GetStartedContext'
import heroPhoto from '../assets/figma/hero-photo.png'
import arrowIcon from '../assets/figma/hero-arrow-icon.svg'
import checkIcon from '../assets/figma/hero-check-icon.svg'

export default function Hero() {
  const openGetStarted = useGetStarted()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-[#15100f]">
      <div className="relative min-h-[860px] w-full overflow-hidden">
        <motion.img
          src={heroPhoto}
          alt=""
          style={{ y }}
          initial={{ scale: 1.06 }}
          animate={{ scale: [1.06, 1.14, 1.06], x: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 h-[130%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        <Header />

        <div className="relative z-10 flex min-h-[860px] w-full flex-col justify-center px-10 pb-16 pt-28 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange-4" />
            <span className="text-[11px] uppercase tracking-[1.98px] text-white/90">Protocol Health Club</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[880px] text-5xl font-bold leading-[1.02] text-white md:text-[72px] md:tracking-[-1.8px]"
          >
            Guided Medical Optimization,
            <br />
            <Typewriter
              text="designed around how you want to live."
              className="font-serif italic font-normal"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-[1050px] text-lg font-semibold leading-relaxed text-white/75 md:text-2xl"
          >
            Bloodwork, clinical insight, and personalized protocols in one guided health club experience that raises your performance and longevity standards
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-col items-start gap-5"
          >
            <motion.button
              type="button"
              onClick={openGetStarted}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-orange flex w-full max-w-[420px] items-center justify-center gap-3 rounded-full px-10 py-4 text-xl font-bold text-white shadow-lg shadow-orange/30 sm:w-auto sm:min-w-[300px]"
            >
              Get Started
              <img src={arrowIcon} alt="" className="h-6 w-6" />
            </motion.button>

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
