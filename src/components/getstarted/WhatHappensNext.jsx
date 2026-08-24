import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Reveal from '../Reveal'
import Typewriter from '../Typewriter'
import timelineNode from '../../assets/figma/getstarted/timeline-node.svg'
import stepCheck from '../../assets/figma/getstarted/step-check.svg'

const days = [
  { label: 'Day 1', active: false },
  { label: 'Day 5', active: false },
  { label: 'Day 10', active: true },
]

const steps = [
  {
    n: 'Step 1:',
    title: 'Complete Your Bloodwork',
    bullets: ['Visit a partner lab', 'Over 100 biomarkers tested in one draw'],
  },
  {
    n: 'Step 2:',
    title: 'Receive Your Full Analysis',
    bullets: ['Detailed breakdown of every biomarker', 'Identify deficiencies, risks, and imbalances'],
  },
  {
    n: 'Step 3:',
    title: 'Begin Your Protocol',
    bullets: ['Personalized plan from our medical staff', 'Targeted supplements, peptides, and hormones'],
  },
]

const TIMELINE_DONE_AT = 1.6

export default function WhatHappensNext() {
  const timelineRef = useRef(null)
  const inView = useInView(timelineRef, { once: true, amount: 0.3 })

  return (
    <section className="bg-white px-6 py-16 md:px-[120px] md:py-20">
      <div className="mx-auto flex max-w-[1536px] flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <Typewriter
            as="p"
            triggerOnView
            startDelay={150}
            speed={35}
            text="YOUR BLOODWORK JOURNEY"
            className="text-base font-bold uppercase tracking-[1.5px] text-orange-3"
          />
          <Reveal delay={0.1}>
            <h2 className="text-4xl font-bold leading-tight text-[#1c1c1e] md:text-[56px]">
              What happens <span className="font-serif font-medium text-orange-2">next?</span>
            </h2>
          </Reveal>
        </div>

        <div ref={timelineRef} className="w-full px-6 md:px-12">
          <div className="relative flex h-[70px] items-end justify-between">
            <div className="absolute bottom-0 left-0 right-0 h-px bg-orange-2/15" />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.45, 0.05, 0.15, 1] }}
              style={{ transformOrigin: 'left' }}
              className="absolute bottom-0 left-0 right-0 h-px bg-orange-2/40"
            />
            {days.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.35, ease: 'backOut' }}
                className="flex flex-col items-center gap-3"
              >
                <span
                  className={`rounded-full px-4 py-1.5 text-xs font-bold ${
                    d.active ? 'bg-orange-2 text-white' : 'border border-orange-2 bg-cream text-orange-2'
                  }`}
                >
                  {d.label}
                </span>
                <img src={timelineNode} alt="" className="h-[10px] w-[10px]" />
              </motion.div>
            ))}
          </div>
        </div>

        <div
          className="drop-shadow-[0px_4px_2px_rgba(244,172,99,0.21)] grid w-full gap-6 md:grid-cols-3"
          style={{ perspective: 1200 }}
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, rotateX: -90 }}
              animate={inView ? { opacity: 1, rotateX: 0 } : {}}
              transition={{ duration: 0.65, delay: TIMELINE_DONE_AT + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
              className="h-full"
            >
              <div className="flex h-full flex-col gap-5 rounded-2xl border border-[#f4ac63] bg-white p-8 shadow-[0px_12px_16px_rgba(245,79,43,0.04)]">
                <p className="text-xl font-bold tracking-[-0.5px] text-[#1c1c1e]">
                  <span className="font-extrabold text-orange-2">{s.n} </span>
                  {s.title}
                </p>
                <div className="flex flex-col gap-3">
                  {s.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[10px] bg-orange/[0.08]">
                        <img src={stepCheck} alt="" className="h-[10px] w-[10px]" />
                      </span>
                      <p className="text-sm font-medium leading-relaxed text-[#5e5e62]">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2} as="p" className="max-w-[840px] text-center text-[13px] leading-relaxed text-[#5e5e62]">
          After payment, we send you instructions on how and where to complete your blood work. You can visit a local facility (Quest or BioReference) or schedule a mobile phlebotomist to come to you. Once your blood work is complete, we&rsquo;ll contact you as soon as your results are ready to schedule your initial consultation.
        </Reveal>
      </div>
    </section>
  )
}
