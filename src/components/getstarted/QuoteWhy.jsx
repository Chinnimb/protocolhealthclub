import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Reveal from '../Reveal'
import Typewriter from '../Typewriter'
import quotePhoto from '../../assets/figma/getstarted/getstarted-quote-photo.jpg'

export default function QuoteWhy() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section ref={ref} className="px-3 py-6 md:px-10">
      <div className="relative mx-auto h-[420px] max-w-[1536px] overflow-hidden rounded-[20px] sm:h-[520px] md:h-[660px]">
        <motion.img src={quotePhoto} alt="" style={{ y }} className="absolute inset-0 h-[120%] w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full items-center justify-center px-3 py-8 md:px-6 md:py-16">
          <div className="flex w-full max-w-[1412px] flex-col items-center gap-6 rounded-[20px] border border-white/10 bg-black/45 px-3 py-8 text-center shadow-[0px_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-lg md:gap-12 md:px-12 md:py-16">
            <div className="flex flex-col items-center gap-2 md:gap-4">
              <Typewriter
                as="p"
                triggerOnView
                startDelay={150}
                speed={35}
                text="THE WHY"
                className="text-xs font-extrabold uppercase tracking-[2.2px] text-[#ffb76a] md:text-base"
              />
              <Reveal delay={0.1}>
                <h2 className="font-serif text-2xl font-medium leading-tight text-white md:whitespace-nowrap md:text-[64px]">
                  Labs are the baseline we optimize from.
                </h2>
              </Reveal>
              <Reveal delay={0.2} as="p" className="w-full text-[11px] font-medium uppercase leading-relaxed text-[#ffc98a] md:text-lg">
                This route is for people who need current data before starting. It reduces guesswork and makes
                <br />
                the consult more specific.
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <motion.a
                href="#choose-lab-panel"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="bg-gradient-orange inline-block rounded-full px-7 py-3 text-base font-bold text-white md:px-9 md:py-[18px] md:text-xl"
              >
                View Bio markers
              </motion.a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
