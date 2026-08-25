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
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 flex h-full items-center justify-center px-3 py-8 md:px-6 md:py-16">
          <div className="flex w-full max-w-[1412px] flex-col items-center gap-6 rounded-[20px] bg-white/10 px-3 py-8 text-center shadow-[0px_0px_4px_0px_#ffffff] backdrop-blur-md md:gap-12 md:px-12 md:py-16">
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
                <h2 className="font-serif text-xl font-semibold leading-snug text-white md:whitespace-nowrap md:text-[64px]">
                  <span className="md:hidden">&ldquo;Labs are the baseline we optimize from.&rdquo;</span>
                  <span className="hidden md:inline">Labs are the baseline we optimize from.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2} as="p" className="w-full font-sans text-sm font-medium normal-case leading-relaxed text-[#ffe0bd] md:text-lg md:uppercase md:text-[#ffc98a]">
                This route is for people who need current data before starting. It reduces guesswork and makes{' '}
                <br className="hidden md:block" />
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
                View Biomarkers
              </motion.a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
