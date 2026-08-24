import { motion } from 'framer-motion'
import { useState } from 'react'
import Reveal from './Reveal'
import FadeIn from './FadeIn'
import Typewriter from './Typewriter'
import step1Photo from '../assets/figma/step1-active-photo.jpg'
import step2Photo from '../assets/figma/step2-active-photo.png'
import step3Photo from '../assets/figma/step3-active-photo.png'
import step4Photo from '../assets/figma/step4-active-photo.png'
import activityIcon from '../assets/figma/step1-activity-icon.svg'
import eyeIcon from '../assets/figma/step2-eye-icon.svg'
import listChecksIcon from '../assets/figma/step3-listchecks-icon.svg'
import trendingUpIcon from '../assets/figma/step4-trendingup-icon.svg'

const steps = [
  {
    n: '01.',
    title: 'Run an advanced panel',
    body: 'A comprehensive biomarker panel that captures the full picture - hormones, metabolics, inflammation, and more.',
    icon: activityIcon,
    image: step1Photo,
  },
  {
    n: '02.',
    title: 'Interpret the signal',
    body: 'Physician review translates labs, symptoms, and goals into clinical context.',
    icon: eyeIcon,
    image: step2Photo,
  },
  {
    n: '03.',
    title: 'Engineer your protocol',
    body: 'A tailored protocol built from your unique data - supplements, nutrition, lifestyle shifts, all sequenced for impact.',
    icon: listChecksIcon,
    image: step3Photo,
  },
  {
    n: '04.',
    title: 'Recalibrate as you change',
    body: 'As your body evolves, so does your plan. Ongoing data keeps your protocol aligned with where you are now.',
    icon: trendingUpIcon,
    image: step4Photo,
    imagePosition: 'object-top',
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)

  return (
    <section id="how-it-works" className="bg-cream px-6 py-16 md:px-[82px]">
      <div className="w-full">
        <Typewriter
          as="p"
          triggerOnView
          startDelay={150}
          speed={35}
          text="How it works"
          className="text-xl font-bold uppercase tracking-[2.2px] text-orange-4"
        />

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <Reveal>
            <h2 className="text-4xl leading-tight text-[#141c1f] md:text-[56px]">
              <span className="font-extrabold">We turn data into a</span>
              <br />
              <FadeIn as="span" className="text-gradient-orange whitespace-nowrap font-serif font-normal" delay={0.3}>
                Guided Protocol.
              </FadeIn>
              <br />
              <span className="font-serif italic text-3xl text-[#5e5e62] md:text-[48px]">4 steps process</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} as="p" className="max-w-[496px] text-lg text-[#6b6359] md:pt-4">
            Not just steps. A clinical sequence designed to move someone from baseline to measurable progress.
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col items-stretch gap-4 md:flex-row md:justify-center">
          {steps.map((s, i) => {
            const isActive = active === i
            return (
              <motion.button
                key={s.n}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                layout
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex h-[330px] flex-col overflow-hidden rounded-[26px] border p-4 text-left backdrop-blur-md md:h-[460px] ${
                  isActive ? 'justify-end border-white/90 md:flex-[2.2] md:p-0' : 'justify-between border-orange md:flex-1'
                }`}
                style={
                  isActive
                    ? {}
                    : {
                        backgroundImage:
                          'linear-gradient(170deg, rgb(255,250,247) 5%, rgb(255,243,235) 79%, rgba(255,153,74,0.9) 163%)',
                      }
                }
              >
                {isActive && (
                  <>
                    <img
                      src={s.image}
                      alt=""
                      className={`absolute inset-0 h-full w-full object-cover ${s.imagePosition || 'object-center'}`}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          'linear-gradient(183deg, rgba(255,255,255,0) 3%, rgba(139,135,134,0.13) 35%, rgba(24,15,13,0.5) 73%, rgba(24,15,13,0.5) 98%)',
                      }}
                    />
                  </>
                )}

                <span
                  className={`relative z-10 text-4xl font-bold md:text-[52px] ${
                    isActive ? 'p-4 text-white md:absolute md:right-2 md:top-2' : 'text-gradient-orange'
                  }`}
                >
                  {s.n}
                </span>

                <div className={`relative z-10 flex flex-col gap-4 ${isActive ? 'p-4 md:p-8' : ''}`}>
                  <img src={s.icon} alt="" className="h-10 w-10" />
                  <div>
                    <p
                      className={`font-bold ${
                        isActive
                          ? 'text-2xl text-white md:text-[40px]'
                          : 'min-h-[52px] text-lg text-[#233038] md:min-h-[58px] md:text-[19px]'
                      }`}
                    >
                      {s.title}
                    </p>
                    {isActive && <p className="mt-2 max-w-[386px] text-sm font-bold text-white">{s.body}</p>}
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
