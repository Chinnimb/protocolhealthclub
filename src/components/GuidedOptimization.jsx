import { motion } from 'framer-motion'
import Reveal from './Reveal'
import FadeIn from './FadeIn'
import Typewriter from './Typewriter'
import leftCircle from '../assets/figma/venn-left-circle.svg'
import rightCircle from '../assets/figma/venn-right-circle.svg'
import glow from '../assets/figma/venn-glow.svg'
import activityIcon from '../assets/figma/venn-activity-icon.svg'
import infinityIcon from '../assets/figma/venn-infinity-icon.svg'

export default function GuidedOptimization() {
  return (
    <section className="bg-cream px-6 py-16 md:px-14">
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
          <h2 className="text-4xl font-extrabold text-[#171f21] md:text-[56px]">
            What is
            <br />
            <FadeIn as="span" className="text-gradient-orange whitespace-nowrap font-serif font-normal" delay={0.3}>
              Guided Optimization?
            </FadeIn>
          </h2>
          <p className="mt-4 max-w-[760px] text-lg text-[#6e6359] md:text-xl">
            A personalized plan built around what your body needs to perform at a higher standard today and keep that standard for your future longevity
          </p>
        </Reveal>

        <div className="relative mx-auto mt-16 flex h-[420px] max-w-[1033px] items-center justify-center md:h-[561px]">
          <motion.img
            src={leftCircle}
            alt=""
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0, rotate: 360 }}
            viewport={{ once: true, amount: 0.4 }}
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
            whileInView={{ opacity: 1, x: 0, rotate: -360 }}
            viewport={{ once: true, amount: 0.4 }}
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
            className="pointer-events-none absolute left-1/2 top-[13%] w-[26%] -translate-x-1/2"
          />

          <div className="absolute left-[20%] top-[13%] flex flex-col items-center gap-1 text-center">
            <img src={activityIcon} alt="" className="h-6 w-6" />
            <p className="text-sm font-bold tracking-[2.4px] text-[#233038]">PERFORMANCE</p>
          </div>
          <div className="absolute right-[18%] top-[12%] flex flex-col items-center gap-1 text-center">
            <img src={infinityIcon} alt="" className="h-6 w-6" />
            <p className="text-sm font-bold tracking-[2.4px] text-[#233038]">LONGEVITY</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center gap-1 text-center text-white"
          >
            <p className="text-sm font-bold tracking-[3.2px]">OPTIMIZED</p>
            <p className="font-platypi text-4xl italic md:text-[44px]">Living</p>
          </motion.div>

          <div className="absolute left-[9%] top-[36%] max-w-[270px] text-left">
            <p className="bg-gradient-orange bg-clip-text text-3xl font-bold text-transparent md:text-[36px]">
              PERFORMANCE
            </p>
            <p className="mt-4 text-base text-[#6e5a4e]">
              Energy, strength, sleep, focus, libido — how well you&apos;re living right now.
            </p>
          </div>
          <div className="absolute right-[7%] top-[37%] max-w-[240px] text-left">
            <p className="bg-gradient-to-r from-orange-3 to-orange-light bg-clip-text text-3xl font-bold text-transparent md:text-[36px]">
              LONGEVITY
            </p>
            <p className="mt-4 text-base text-[#6e5a4e]">
              Metabolic, cardiovascular and hormonal trajectory — the decades still ahead of you.
            </p>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <motion.a
            href="/get-started"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="bg-gradient-orange rounded-full px-10 py-4 text-2xl font-bold text-white"
          >
            Start Today
          </motion.a>
        </Reveal>
      </div>
    </section>
  )
}
