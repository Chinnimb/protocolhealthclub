import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import FadeIn from './FadeIn'
import rangeBar from '../assets/figma/range-bar.svg'
import arrowImg from '../assets/figma/range-arrow.png'
import normalLine from '../assets/figma/range-normal-line.svg'
import optimalLine from '../assets/figma/range-optimal-line.svg'

export default function NormalGap() {
  const barRef = useRef(null)
  const inView = useInView(barRef, { once: true, amount: 0.6 })

  return (
    <section className="flex flex-col items-center gap-8 bg-cream pb-24 pt-14 px-6">
      <Reveal as="p" className="text-center text-xl font-bold uppercase tracking-[3.6px] text-orange-3">
        Normal Is not optimal
      </Reveal>

      <Reveal delay={0.05} className="max-w-5xl px-2 text-center">
        <h2 className="whitespace-nowrap text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[56px]">
          Today&rsquo;s &ldquo;normal&rdquo; is far from optimal.
        </h2>
        <FadeIn as="p" className="text-gradient-orange mt-4 font-serif text-3xl md:text-[48px]" delay={0.3}>
          We hold your health to a higher standard.
        </FadeIn>
      </Reveal>

      <Reveal
        delay={0.15}
        className="mt-4 w-full max-w-[1434px] rounded-[28px] border-2 border-[#fcf0ec] p-8 shadow-[0px_0px_4px_0px_#f4ac63] md:p-14"
      >
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
          <div className="flex items-center justify-between px-2 text-center md:px-16">
            <div>
              <p className="text-lg font-bold text-[#233038] md:text-[22px]">Still &ldquo;In Range&rdquo;</p>
              <p className="text-sm text-[#9a8878] md:text-base">Tired, Foggy, Flat</p>
            </div>
            <div>
              <p className="text-lg font-bold text-[#233038] md:text-[22px]">Optimal</p>
              <p className="text-sm text-[#9a8878] md:text-base">Sharp, Strong, Energized</p>
            </div>
          </div>

          <div className="relative mt-6">
            <img src={rangeBar} alt="" className="w-full" />
            <motion.img
              src={arrowImg}
              alt=""
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pointer-events-none absolute left-[38%] top-[-58px] w-[36%]"
            />
            <img src={normalLine} alt="" className="pointer-events-none absolute left-[10%] top-[52px] w-[76%] opacity-70" />
          </div>

          <p className="mt-3 text-center text-sm uppercase tracking-[2px] text-[#9a8878]">
            Standard &ldquo;Normal&rdquo; Range
          </p>

          <div className="relative mt-2 h-6">
            <div className="absolute right-[3%] flex items-center gap-2 md:right-[6%]">
              <img src={optimalLine} alt="" className="w-16" />
              <span className="text-sm font-bold uppercase tracking-[2px] text-orange-3">Optimal</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
