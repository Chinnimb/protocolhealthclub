import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Reveal from './Reveal'
import Typewriter from './Typewriter'
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
  'What is Protocol Health Club?': [
    'Protocol is a licensed telehealth medical practice built around one rule: nobody recommends anything to you until we know what is happening inside your body.',
    'We specialize in "Guided Optimization". Every member starts with a comprehensive blood panel and a one-on-one consultation with a licensed clinician, and the plan you get is built on your results.',
    'Some plans are entirely lifestyle. Others include supplements, peptides, or hormone therapy. What they have in common is that nothing is prescribed before your labs are on the table, and everything is personalized to your biology.',
    'Our clinicians are licensed in all 50 states and prescriptions ship nationwide.',
  ],
  'What does Protocol offer?': [
    'Comprehensive lab work and clinical consultation, ongoing monitoring with follow-up labs, and where appropriate, gut health testing, supplements, peptide therapy, hormone therapy including TRT and HRT, and GLP-1 therapy.',
    'Everything prescribed is dispensed through licensed pharmacies and monitored with follow-up bloodwork.',
  ],
  'Can I use my HSA or FSA?': ['Yes. We accept both HSA and FSA accounts.'],
  'What results can I expect?': [
    'Most clients report noticeable changes within 2 to 4 weeks — better sleep, more stable energy, and reduced cravings. Body composition changes typically follow in 6 to 12 weeks. Your clinician adjusts your protocol based on your progress so results keep building over time.',
  ],
  'How do I get started?': [
    'There are four steps.',
    'Book. You choose your panel and we send you an order for a blood draw.',
    'Draw. You go to a lab location near you. Most people are in and out in about fifteen minutes.',
    'Review. Your results come back to your clinical team and we schedule your consultation.',
    'Plan. You spend an hour going through your results one marker at a time and leave with a plan you understand.',
    'If you already have recent labs, send them to support@protocolhealthclub.com and we will tell you whether they cover what we need before you pay for anything new.',
  ],
  "What if there isn't a lab near me?": [
    'There are two alternatives. We can arrange a mobile phlebotomist to draw at your home and ship the sample, or we can send you an at-home collection kit.',
    'Give us your zip code when you book and we will work out which option makes sense for you.',
  ],
  'What happens on the consultation call?': [
    'You get about an hour with your clinician, who goes through your results one marker at a time in plain language and connects them to the symptoms you have described. You will cover:',
    "• Your baseline lab results and the markers we'll work on first",
    '• Your felt experience, like your mood, energy levels, and strength, and compare that to your goals',
    '• The lifestyle changes that will support those goals, and how to fit them into a real week',
    '• Which supplements are a smart investment based on your labs, and which ones are not doing anything for you',
    '• Whether peptides or hormone therapy fit what you are working toward, and how they would layer onto your plan',
    "You don't get off the call until all your questions are answered, and we have a protocol that fits your life.",
  ],
  'How do I know the products are good quality?': [
    'Everything prescribed here is dispensed by licensed compounding pharmacies operating under state and federal oversight. Depending on the product, that is either a 503A pharmacy or a 503B outsourcing facility running cGMP standards with an ISO Class 5 cleanroom.',
    'The active ingredients are sourced domestically. Nothing is outsourced overseas.',
  ],
  'Is this safe?': [
    'Safety in this category comes from the oversight rather than from the compound itself.',
    'Everything prescribed at Protocol is based on your labs, dispensed by a licensed pharmacy, and rechecked with follow-up bloodwork. If a marker moves somewhere your clinician does not want it, the protocol changes. That monitoring loop is the difference between clinical management and sourcing something on your own.',
  ],
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-cream px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-[1320px] gap-16 md:grid-cols-[380px_1fr]">
        <div>
          <Typewriter
            triggerOnView
            startDelay={150}
            speed={35}
            text="FAQ’S"
            className="text-lg font-bold uppercase tracking-[2.2px] text-orange-4"
          />
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
                      <div className="flex flex-col gap-3 pb-6 text-base leading-relaxed text-[#47474d]">
                        {(answers[q] ?? ["Reach out to our care team and we'll walk you through it."]).map((para, pi) => (
                          <p key={pi}>{para}</p>
                        ))}
                      </div>
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
