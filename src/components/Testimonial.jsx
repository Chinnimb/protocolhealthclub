import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import testimonialPhoto from '../assets/figma/testimonial-photo.png'

export default function Testimonial() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="relative isolate overflow-hidden px-6 py-6">
      <div className="relative mx-auto h-[660px] max-w-[1460px] overflow-hidden rounded-[20px]">
        <motion.img src={testimonialPhoto} alt="" style={{ y }} className="absolute inset-0 h-[120%] w-full object-cover" />
        <div className="absolute inset-0 bg-white/10" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="text-base font-semibold uppercase tracking-[2.2px] text-[#233038]">Members</span>
          <Reveal delay={0.1} className="mt-8 max-w-4xl">
            <p className="font-script text-3xl leading-snug text-white md:text-[56px]">
              &ldquo;For the first time, my labs weren&apos;t just in range. They were{' '}
              <span className="italic">optimized around the life I actually wanted to live.</span>&rdquo;
            </p>
          </Reveal>
          <Reveal delay={0.2} as="p" className="mt-8 text-sm uppercase tracking-[2.52px] text-[#233038]">
            Amelia R. &middot; Member since 2024
          </Reveal>
        </div>
      </div>
    </section>
  )
}
