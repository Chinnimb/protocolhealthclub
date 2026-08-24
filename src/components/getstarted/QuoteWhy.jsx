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
    <section ref={ref} className="px-6 py-6 md:px-10">
      <div className="relative mx-auto h-[660px] max-w-[1536px] overflow-hidden rounded-[20px]">
        <motion.img src={quotePhoto} alt="" style={{ y }} className="absolute inset-0 h-[120%] w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 py-16">
          <div className="flex w-full max-w-[1412px] flex-col items-center gap-12 rounded-[20px] bg-black/10 px-6 py-16 text-center backdrop-blur-[2px] md:px-12">
            <div className="flex flex-col items-center gap-4">
              <Typewriter
                as="p"
                triggerOnView
                startDelay={150}
                speed={35}
                text="THE WHY"
                className="text-base font-extrabold uppercase tracking-[2.2px] text-[#ffb76a]"
              />
              <Reveal delay={0.1}>
                <h2 className="font-serif text-4xl font-medium leading-tight text-white md:whitespace-nowrap md:text-[64px]">
                  Labs are the baseline we optimize from.
                </h2>
              </Reveal>
              <Reveal delay={0.2} as="p" className="w-full text-sm font-medium uppercase leading-relaxed text-[#ffc98a] md:text-lg">
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
                className="bg-gradient-orange inline-block rounded-full px-9 py-[18px] text-xl font-bold text-white"
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
