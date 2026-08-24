import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import FadeIn from './FadeIn'
import Typewriter from './Typewriter'
import MotionLink from './MotionLink'
import consultPhoto from '../assets/figma/optimized-living-photo.png'
import glow from '../assets/figma/optimized-living-glow.svg'

export default function OptimizedLiving() {
  const photoRef = useRef(null)
  const photoInView = useInView(photoRef, { once: true, amount: 0.3 })

  return (
    <section className="relative bg-cream px-6 py-16 md:px-[117px]">
      <img src={glow} alt="" className="pointer-events-none absolute left-0 top-0 hidden w-[40%] max-w-[636px] opacity-70 md:block" />

      <div className="relative grid w-full items-center gap-12 md:grid-cols-2">
        <motion.div
          ref={photoRef}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={photoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 overflow-hidden rounded-[22px] border-4 border-[#fcf0ec] md:order-1"
        >
          <img
            src={consultPhoto}
            alt="Consultation"
            className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[560px]"
          />
        </motion.div>

        <div className="order-1 md:order-2">
          <Typewriter
            as="p"
            triggerOnView
            startDelay={150}
            speed={35}
            text="WE COACH YOU"
            className="text-xl font-bold uppercase tracking-[3.6px] text-orange-3"
          />
          <Reveal className="mt-2">
            <FadeIn as="p" className="font-sans text-3xl font-extrabold text-[#233038] md:text-[48px]" delay={0.2}>
              Optimized Living
            </FadeIn>
            <h2 className="text-gradient-orange mt-2 font-serif text-4xl font-normal md:text-[56px]">Built from your labs &amp; consultation.</h2>
          </Reveal>
          <Reveal delay={0.15} as="p" className="mt-6 max-w-[525px] text-lg leading-relaxed text-[#47474d]">
            Every plan is built individually, no guesswork, no generic solutions. We analyze your labs and goals,
            deliver your products fast, and stay connected with you to track progress and refine your path forward.
          </Reveal>
          <Reveal delay={0.25} className="hidden md:block">
            <MotionLink
              to="/get-started"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="bg-gradient-orange mt-8 inline-block rounded-full px-10 py-4 text-2xl font-bold text-white"
            >
              Start Today
            </MotionLink>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="order-3 flex justify-center md:hidden">
          <MotionLink
            to="/get-started"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="bg-gradient-orange inline-block rounded-full px-10 py-4 text-2xl font-bold text-white"
          >
            Start Today
          </MotionLink>
        </Reveal>
      </div>
    </section>
  )
}
