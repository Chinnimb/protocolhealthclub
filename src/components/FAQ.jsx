import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Reveal from './Reveal'
import chevronIcon from '../assets/figma/faq-chevron-icon.svg'

const questions = [
  'What is Protocol Health Club?',
  'What does Protocol offer?',
  'How fast will I see results?',
  'Can I use my HSA or FSA?',
  'What results can I expect?',
  'How do I get started?',
  "What if there isn't a lab near me?",
  'What happens on the consultation call?',
  'How do I know the products are good quality?',
  'Is this safe?',
]

const answers = {
  'What is Protocol Health Club?':
    'Protocol Health Club is a guided medical optimization membership that pairs advanced lab panels with physician-designed protocols built around your goals.',
  'What does Protocol offer?':
    'Comprehensive bloodwork, 1:1 physician consultations, and personalized protocols spanning weight loss, performance, and longevity.',
  'How fast will I see results?':
    'Most members notice measurable shifts within a few weeks, with full protocol recalibration at your next lab draw.',
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-cream px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-[1320px] gap-16 md:grid-cols-[380px_1fr]">
        <div>
          <Reveal className="text-lg font-bold uppercase tracking-[2.2px] text-orange-4">FAQ&rsquo;S</Reveal>
          <Reveal delay={0.05} as="h2" className="mt-4 font-serif text-4xl font-medium tracking-[-1.2px] text-[#161b1f] md:text-[56px]">
            Got Questions?
          </Reveal>
        </div>

        <div className="divide-y divide-[#e6dcd4] border-b border-[#e6dcd4]">
          {questions.map((q, i) => {
            const isOpen = open === i
            return (
              <div key={q}>
                <motion.button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-lg font-medium tracking-[-0.45px] text-[#180f0d] md:text-2xl">{q}</span>
                  <motion.img
                    src={chevronIcon}
                    alt=""
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-4 w-4 shrink-0"
                  />
                </motion.button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-base leading-relaxed text-[#47474d]">
                        {answers[q] ?? "Reach out to our care team and we'll walk you through it."}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
