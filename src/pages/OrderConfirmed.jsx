import { motion } from 'framer-motion'
import { Mail, MessageSquare } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import FadeIn from '../components/FadeIn'
import Typewriter from '../components/Typewriter'
import MotionLink from '../components/MotionLink'
import stepCheck from '../assets/figma/getstarted/step-check.svg'
import arrowIcon from '../assets/figma/hero-arrow-icon.svg'

// Post-purchase confirmation screen. Same three steps the Get Started page already
// promises, so the two never contradict each other.
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

const ease = [0.22, 1, 0.36, 1]

// Confirmation badge: the ring draws, fills with the brand gradient, then the check
// draws and breaks out past the ring's edge, followed by a spark burst and soft ripples.
const SPARKS = [
  { x: 112, y: 14, d: 10 },
  { x: 118, y: 40, d: 7 },
  { x: 92, y: 6, d: 7 },
  { x: 104, y: 30, d: 5 },
]

function AnimatedCheck() {
  return (
    <div className="relative flex h-40 w-40 items-center justify-center md:h-52 md:w-52">
      {/* soft pulsing halo behind the badge */}
      <motion.span
        aria-hidden
        className="absolute inset-4 rounded-full bg-orange/40 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.45, 0.85, 0.45] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.svg viewBox="0 0 120 120" className="relative h-full w-full overflow-visible" initial="hidden" animate="visible">
        <defs>
          <linearGradient id="confirmGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f45f2b" />
            <stop offset="100%" stopColor="#f4ac63" />
          </linearGradient>
        </defs>

        {/* ripples that keep radiating from the ring */}
        {[0, 1].map((i) => (
          <motion.circle
            key={i}
            cx="54"
            cy="66"
            r="40"
            fill="none"
            stroke="#f4ac63"
            strokeWidth="1.5"
            initial={{ opacity: 0, r: 40 }}
            animate={{ opacity: [0, 0.55, 0], r: [40, 66] }}
            transition={{ duration: 2.6, delay: 1.7 + i * 1.3, repeat: Infinity, repeatDelay: 0.4, ease: 'easeOut' }}
          />
        ))}

        {/* ring draws, then fills */}
        <motion.circle
          cx="54"
          cy="66"
          r="40"
          fill="url(#confirmGradient)"
          stroke="url(#confirmGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0, fillOpacity: 0 },
            visible: { pathLength: 1, fillOpacity: 0.92 },
          }}
          transition={{ pathLength: { duration: 0.9, ease: 'easeInOut' }, fillOpacity: { duration: 0.5, delay: 0.85 } }}
        />

        {/* check that breaks out of the ring at the top right */}
        <motion.path
          d="M31 68 L48 85 L101 27"
          fill="none"
          stroke="#ffffff"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.45))' }}
          variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
          transition={{ pathLength: { duration: 0.55, delay: 1.1, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.01, delay: 1.1 } }}
        />

        {/* spark burst off the check's tip */}
        {SPARKS.map((p, i) => (
          <motion.circle
            key={i}
            r={p.d / 2}
            fill="#f4ac63"
            initial={{ cx: 101, cy: 27, opacity: 0, scale: 0 }}
            animate={{ cx: p.x, cy: p.y, opacity: [0, 1, 0], scale: [0, 1.2, 0.4] }}
            transition={{ duration: 0.9, delay: 1.6 + i * 0.05, repeat: Infinity, repeatDelay: 2.6, ease: 'easeOut' }}
          />
        ))}
      </motion.svg>
    </div>
  )
}

export default function OrderConfirmed() {
  return (
    <div className="relative min-h-screen bg-cream text-ink">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#1a0f08]">
        {/* rising orange light, same bloom as the Get Started hero */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0.15, scale: 0.6 }}
          animate={{ opacity: 0.85, scale: 1 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute inset-0"
        >
          <motion.div
            className="h-full w-full"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            style={{
              background:
                'radial-gradient(44% 58% at 50% 30%, rgba(255,150,60,0.55) 0%, rgba(255,110,30,0.22) 45%, rgba(255,100,20,0) 74%)',
            }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

        <Header />

        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1100px] flex-col items-center justify-center px-6 pb-24 pt-36 text-center md:min-h-[820px] md:pt-44">
          <AnimatedCheck />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="mt-12 text-[46px] font-bold leading-[1.02] text-white md:text-[92px] md:tracking-[-3px]"
          >
            Your order is{' '}
            <span className="font-serif font-normal italic text-gradient-orange">confirmed</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="mt-8 max-w-[620px] text-lg leading-relaxed text-white/85 md:text-xl"
          >
            Welcome to Protocol. Your health journey starts today, and here&rsquo;s exactly what comes next.
          </motion.p>
        </div>
      </section>

      {/* What happens next */}
      <section className="bg-white px-6 py-16 md:px-[120px] md:py-24">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-14">
          {/* headline action: one plain line, no card */}
          <Reveal delay={0.05} className="w-full">
            <p className="mx-auto flex max-w-[1000px] flex-col items-center gap-4 text-center font-serif text-[26px] font-medium leading-snug text-[#1c1c1e] md:flex-row md:justify-center md:gap-5 md:whitespace-nowrap md:text-[34px]">
              <span className="flex shrink-0 items-center gap-2 text-orange-2">
                <Mail className="h-6 w-6 md:h-7 md:w-7" />
                <MessageSquare className="h-6 w-6 md:h-7 md:w-7" />
              </span>
              <span>Your link to book bloodwork is on its way, by email and text.</span>
            </p>
          </Reveal>

          <div className="flex flex-col items-center gap-2 text-center">
            <Typewriter
              as="p"
              triggerOnView
              startDelay={150}
              speed={35}
              text="NEXT STEPS"
              className="text-sm font-bold uppercase tracking-[1.5px] text-orange-3"
            />
            <Reveal delay={0.1}>
              <h2 className="text-2xl font-bold leading-tight text-[#1c1c1e] md:text-[32px]">
                Here&rsquo;s what happens{' '}
                <FadeIn as="span" className="font-serif font-medium text-orange-2" delay={0.3}>
                  next
                </FadeIn>
              </h2>
            </Reveal>
          </div>

          {/* three steps */}
          <div className="grid w-full gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={0.1 + i * 0.12} className="h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="protocol-card-shadow flex h-full flex-col gap-5 rounded-2xl border border-[#f4ac63] bg-white p-8"
                >
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
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} as="p" className="max-w-[840px] text-center text-[13px] leading-relaxed text-[#5e5e62]">
            After payment, we send you instructions on how and where to complete your blood work. You can visit a local
            facility (Quest or BioReference) or schedule a mobile phlebotomist to come to you. Once your blood work is
            complete, we&rsquo;ll contact you as soon as your results are ready to schedule your initial consultation.
          </Reveal>

          <Reveal delay={0.25}>
            <MotionLink
              to="/"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-orange inline-flex items-center justify-center gap-3 rounded-full px-9 py-[18px] text-lg font-bold text-white"
            >
              Back to Home
              <img src={arrowIcon} alt="" className="h-5 w-5" />
            </MotionLink>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
