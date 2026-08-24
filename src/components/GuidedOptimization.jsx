import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import FadeIn from './FadeIn'
import Typewriter from './Typewriter'
import MotionLink from './MotionLink'
import leftCircle from '../assets/figma/venn-left-circle.svg'
import rightCircle from '../assets/figma/venn-right-circle.svg'
import glow from '../assets/figma/venn-glow.svg'
import activityIcon from '../assets/figma/venn-activity-icon.svg'
import infinityIcon from '../assets/figma/venn-infinity-icon.svg'

export default function GuidedOptimization() {
  const diagramRef = useRef(null)
  const diagramInView = useInView(diagramRef, { once: true, amount: 0.4 })

  return (
    <section className="bg-cream px-4 py-16 sm:px-6 md:px-14">
      <div className="w-full">
        <Typewriter
          as="p"
          triggerOnView
          startDelay={150}
          speed={35}
          text="GUIDED OPTIMIZATION"
          className="text-xl font-bold tracking-[3.6px] text-orange-3"
        />

        <Reveal delay={0.08} className="mt-6 max-w-3xl">
          <h2 className="text-[32px] font-extrabold text-[#171f21] sm:text-4xl md:text-[56px]">
            What is
            <br />
            <FadeIn as="span" className="text-gradient-orange sm:whitespace-nowrap font-serif font-normal" delay={0.3}>
              Guided Optimization?
            </FadeIn>
          </h2>
          <p className="mt-4 max-w-[760px] text-lg text-[#6e6359] md:text-xl">
            A personalized plan built around what your body needs to perform at a higher standard today and keep that standard for your future longevity
          </p>
        </Reveal>

        <div ref={diagramRef} className="relative mx-auto mt-16 max-w-[1033px]">
          <div className="relative mx-auto flex h-[230px] items-center justify-center overflow-hidden sm:h-[380px] md:h-[561px] md:overflow-visible">
            <motion.img
              src={leftCircle}
              alt=""
              initial={{ opacity: 0, x: -20 }}
              animate={diagramInView ? { opacity: 1, x: 0, rotate: 360 } : { opacity: 0, x: -20, rotate: 0 }}
              transition={{
                opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                x: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                rotate: { duration: 18, repeat: Infinity, ease: 'linear' },
              }}
              className="absolute left-0 top-0 h-full w-[59%]"
            />
            <motion.img
              src={rightCircle}
              alt=""
              initial={{ opacity: 0, x: 20 }}
              animate={diagramInView ? { opacity: 1, x: 0, rotate: -360 } : { opacity: 0, x: 20, rotate: 0 }}
              transition={{
                opacity: { duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
                x: { duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
                rotate: { duration: 22, repeat: Infinity, ease: 'linear' },
              }}
              className="absolute right-0 top-0 h-full w-[59%]"
            />
            <motion.img
              src={glow}
              alt=""
              animate={{ scale: [1, 1.35, 1], opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute left-1/2 top-[13%] w-[36%] -translate-x-1/2 sm:w-[30%] md:w-[26%]"
            />

            <div className="absolute left-[20%] top-[13%] flex flex-col items-center gap-1 text-center">
              <img src={activityIcon} alt="" className="h-4 w-4 sm:h-6 sm:w-6" />
              <p className="text-[10px] font-bold tracking-[1px] text-[#233038] sm:text-sm sm:tracking-[2.4px]">PERFORMANCE</p>
            </div>
            <div className="absolute right-[18%] top-[12%] flex flex-col items-center gap-1 text-center">
              <img src={infinityIcon} alt="" className="h-4 w-4 sm:h-6 sm:w-6" />
              <p className="text-[10px] font-bold tracking-[1px] text-[#233038] sm:text-sm sm:tracking-[2.4px]">LONGEVITY</p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={diagramInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col items-center gap-1 text-center text-white"
            >
              <p className="text-[8px] font-bold tracking-[1.2px] sm:text-sm sm:tracking-[3.2px]">OPTIMIZED</p>
              <p className="font-platypi text-lg italic sm:text-4xl md:text-[44px]">Living</p>
            </motion.div>

            <div className="absolute left-[6%] top-[63%] max-w-[38%] text-left md:left-[9%] md:top-[36%] md:max-w-[270px]">
              <p className="bg-gradient-orange bg-clip-text text-sm font-bold leading-tight text-transparent md:text-[36px]">
                PERFORMANCE
              </p>
              <p className="mt-1 text-[9px] leading-[1.25] text-[#6e5a4e] md:mt-4 md:text-base md:leading-normal">
                Energy, strength, sleep, focus, libido — how well you&apos;re living right now.
              </p>
            </div>
            <div className="absolute right-[5%] top-[63%] max-w-[36%] text-left md:right-[7%] md:top-[37%] md:max-w-[240px]">
              <p className="bg-gradient-to-r from-orange-3 to-orange-light bg-clip-text text-sm font-bold leading-tight text-transparent md:text-[36px]">
                LONGEVITY
              </p>
              <p className="mt-1 text-[9px] leading-[1.25] text-[#6e5a4e] md:mt-4 md:text-base md:leading-normal">
                Metabolic, cardiovascular and hormonal trajectory — the decades still ahead of you.
              </p>
            </div>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <MotionLink
            to="/get-started"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="bg-gradient-orange rounded-full px-10 py-4 text-2xl font-bold text-white"
          >
            Start Today
          </MotionLink>
        </Reveal>
      </div>
    </section>
  )
}
