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
import heroPhoto from '../assets/figma/getstarted/getstarted-hero-photo.jpg'

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

function AnimatedCheck() {
  return (
    <div className="relative flex h-28 w-28 items-center justify-center md:h-36 md:w-36">
      {/* soft pulsing halo behind the badge */}
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full bg-orange/30 blur-2xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.svg
        viewBox="0 0 96 96"
        className="relative h-full w-full"
        initial="hidden"
        animate="visible"
      >
        <defs>
          <linearGradient id="confirmGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f45f2b" />
            <stop offset="100%" stopColor="#f4ac63" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="48"
          cy="48"
          r="42"
          fill="rgba(255,255,255,0.04)"
          stroke="url(#confirmGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />
        <motion.path
          d="M30 50 L43 63 L67 35"
          fill="none"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
          transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
        />
      </motion.svg>
    </div>
  )
}

export default function OrderConfirmed() {
  return (
    <div className="relative min-h-screen bg-cream text-ink">
      {/* Hero: dark cinematic photo, confirmation in a glass card */}
      <section className="relative isolate overflow-hidden bg-[#0a0605]">
        {/* slow cinematic push-in on the photo, graded dark */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 12, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={heroPhoto}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[62%_35%] brightness-[0.42] contrast-[1.15] saturate-[0.85] sm:object-center"
          />
        </motion.div>

        {/* letterbox-style darkness: vignette + top/bottom fades */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: 'radial-gradient(85% 75% at 50% 45%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.9) 100%)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/85" />

        {/* faint warm bloom behind the card so the glass has something to refract */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
          animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.12, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: 'radial-gradient(closest-side, rgba(244,95,43,0.45), rgba(244,95,43,0))' }}
        />

        <Header />

        <div className="relative z-10 mx-auto flex min-h-[640px] max-w-[1100px] items-center justify-center px-5 pb-20 pt-32 md:min-h-[860px] md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="relative w-full max-w-[880px] overflow-hidden rounded-[32px] border border-white/20 bg-white/[0.07] px-6 py-12 text-center shadow-[0_30px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-2xl md:px-16 md:py-16"
          >
            {/* glass sheen */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.03) 38%, rgba(255,255,255,0) 60%)' }}
            />
            <div className="relative flex flex-col items-center">
              <AnimatedCheck />

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease }}
                className="mt-10 text-[42px] font-bold leading-[1.02] text-white md:text-[80px] md:tracking-[-2.5px]"
              >
                Your order is{' '}
                <span className="font-serif font-normal italic text-gradient-orange">confirmed</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease }}
                className="mt-7 max-w-[560px] text-lg leading-relaxed text-white/85 md:text-xl"
              >
                Welcome to Protocol. Your health journey starts today, and here&rsquo;s exactly what comes next.
              </motion.p>
            </div>
          </motion.div>
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
