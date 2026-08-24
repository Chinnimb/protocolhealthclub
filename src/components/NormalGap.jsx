import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import FadeIn from './FadeIn'
import Typewriter from './Typewriter'
import rangeBarTrack from '../assets/figma/range-bar-track.svg'
import normalLine from '../assets/figma/range-normal-line.svg'

export default function NormalGap() {
  const barRef = useRef(null)
  const inView = useInView(barRef, { once: true, amount: 0.6 })

  return (
    <section id="biomarkers" className="bg-cream px-6 pb-24 pt-14 md:px-10">
      <div className="w-full">
      <Typewriter
        as="p"
        triggerOnView
        startDelay={150}
        speed={35}
        text="Normal Is not optimal"
        className="text-xl font-bold uppercase tracking-[3.6px] text-orange-3"
      />

      <Reveal delay={0.05} className="mt-6 max-w-5xl">
        <h2 className="whitespace-nowrap text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[56px]">
          Today&rsquo;s &ldquo;normal&rdquo; is far from optimal.
        </h2>
        <FadeIn as="p" className="text-gradient-orange mt-4 font-serif text-3xl md:text-[48px]" delay={0.3}>
          We hold your health to a higher standard.
        </FadeIn>
      </Reveal>

      <Reveal delay={0.15} className="mt-10 w-full rounded-[28px] p-8 md:p-14">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center text-[#b08060]">
          <p className="text-lg font-bold tracking-[2.5px] md:text-xl">
            Normal in America today is sedentary, metabolically unhealthy, and on a list of different prescriptions.
          </p>
          <p className="text-lg font-extrabold tracking-[2.5px] md:text-xl">
            Standard lab work is used only to detect disease, not prevent it.
          </p>
          <p className="text-xl font-extrabold text-[#461d0e] md:text-2xl">Normal is a low bar for your health.</p>
        </div>

        <div ref={barRef} className="mx-auto mt-8 w-full max-w-[1347px] rounded-[20px] bg-white p-6 shadow-[0px_0px_12px_rgba(242,122,46,0.67)] md:p-10">
          <div className="relative h-[64px] md:h-[74px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 2.0 }}
              style={{ left: '37.17%' }}
              className="absolute top-0 w-max max-w-[190px] -translate-x-1/2 text-center"
            >
              <p className="text-lg font-bold text-[#233038] md:text-[22px]">Still &ldquo;In Range&rdquo;</p>
              <p className="text-sm text-[#9a8878] md:text-base">Tired, Foggy, Flat</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 2.5 }}
              style={{ left: '77.34%' }}
              className="absolute top-0 w-max max-w-[220px] -translate-x-1/2 text-center"
            >
              <p className="text-lg font-bold text-[#233038] md:text-[22px]">Optimal</p>
              <p className="text-sm text-[#9a8878] md:text-base">Sharp, Strong, Energized</p>
            </motion.div>
          </div>

          <div className="relative mt-2">
            <div className="overflow-hidden rounded-full">
              <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
                transition={{ duration: 2.2, ease: [0.45, 0.05, 0.15, 1] }}
              >
                <img src={rangeBarTrack} alt="" className="w-full" />
              </motion.div>

              {/* soft glowing edge that sweeps along with the fill, for a smoother "loading" feel */}
              <motion.div
                initial={{ left: '0%', opacity: 0 }}
                animate={
                  inView
                    ? { left: '100%', opacity: [0, 1, 1, 0] }
                    : {}
                }
                transition={{ duration: 2.2, ease: [0.45, 0.05, 0.15, 1], times: [0, 0.08, 0.85, 1] }}
                className="pointer-events-none absolute top-0 h-full w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-md"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: 2.0, ease: 'backOut' }}
              style={{ left: '37.17%', width: '2.3%' }}
              className="absolute top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                animate={inView ? { scale: [1, 1.18, 1] } : {}}
                transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut', delay: 2.35 }}
                className="h-full w-full rounded-full border-[3px] border-white bg-white/10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: 2.5, ease: 'backOut' }}
              style={{ left: '77.34%', width: '2.3%' }}
              className="absolute top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                animate={inView ? { scale: [1, 1.18, 1] } : {}}
                transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut', delay: 2.85 }}
                className="h-full w-full rounded-full border-[3px] border-white"
              />
            </motion.div>

            <motion.img
              src={normalLine}
              alt=""
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.7 } : {}}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="pointer-events-none absolute left-[10%] top-[52px] w-[76%]"
            />

            {/* ball traveling from "Still In Range" to "Optimal" to show the shift, per client request */}
            <motion.div
              initial={{ left: '37.17%', opacity: 0 }}
              animate={
                inView
                  ? { left: ['37.17%', '37.17%', '77.34%', '77.34%'], opacity: [0, 1, 1, 0] }
                  : {}
              }
              transition={{
                duration: 2.4,
                times: [0, 0.15, 0.85, 1],
                delay: 3.2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute top-1/2 z-10 h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.9)]"
            />
          </div>

          <p className="mt-3 text-center text-sm uppercase tracking-[2px] text-[#9a8878]">
            Standard &ldquo;Normal&rdquo; Range
          </p>

          <div className="relative mt-2 h-6">
            <div style={{ left: '67.59%', width: '19.51%' }} className="absolute top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-orange-3" />
            <span
              style={{ left: 'calc(67.59% + 19.51% + 10px)' }}
              className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-bold uppercase tracking-[2px] text-orange-3"
            >
              Optimal
            </span>
          </div>
        </div>
      </Reveal>
      </div>
    </section>
  )
}
