import { motion } from 'framer-motion'
import Header from '../Header'
import MotionLink from '../MotionLink'
import Typewriter from '../Typewriter'
import arrowIcon from '../../assets/figma/hero-arrow-icon.svg'
import checkIcon from '../../assets/figma/hero-check-icon.svg'
import heroPhoto from '../../assets/figma/getstarted/getstarted-hero-photo.jpg'
import logoPart1 from '../../assets/figma/logo-part1.svg'
import logoPart2 from '../../assets/figma/logo-part2.svg'
import logoPart3 from '../../assets/figma/logo-part3.svg'

export default function GetStartedHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1a0f08]">
      <div className="relative min-h-[560px] w-full overflow-hidden md:min-h-[860px]">
        {/* one-time cinematic dolly-in: the shot starts a touch further out, then slowly approaches */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.06 }}
          transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src={heroPhoto}
            alt=""
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.06, 1], x: [0, 10, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            className="absolute inset-0 h-full w-full object-cover object-[62%_35%] sm:object-center"
          />
        </motion.div>

        {/* growing orange light, blooming behind her like the light is slowly rising */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0.15, scale: 0.6 }}
          animate={{ opacity: 0.75, scale: 1 }}
          transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute inset-0 mix-blend-screen"
        >
          <motion.div
            className="h-full w-full"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            style={{
              background:
                'radial-gradient(32% 40% at 47% 22%, rgba(255,176,90,0.75) 0%, rgba(255,130,40,0.35) 40%, rgba(255,100,20,0) 72%)',
            }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        <div className="hidden md:block">
          <Header />
        </div>

        <div className="absolute inset-x-4 top-4 z-30 flex items-center justify-between rounded-full border border-white/25 bg-white/15 px-5 py-3 backdrop-blur-md md:hidden">
          <MotionLink to="/" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="relative h-5 w-[110px]">
            <img src={logoPart1} alt="" className="absolute left-0 top-0 h-5" />
            <img src={logoPart2} alt="protocol" className="absolute left-[29px] top-0 h-5" />
            <img src={logoPart3} alt="" className="absolute left-[63px] top-0 h-4" />
          </MotionLink>
          <MotionLink
            to="/get-started"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-orange rounded-full px-4 py-2 text-xs font-medium text-white"
          >
            Get Started
          </MotionLink>
        </div>

        <div className="relative z-10 flex min-h-[560px] w-full flex-col justify-center px-10 pb-16 pt-28 md:min-h-[860px] md:pt-32">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[680px] text-5xl font-bold leading-[1.04] text-white md:text-[64px] md:tracking-[-1.8px]"
          >
            Start with bloodwork.
            <br />
            <Typewriter
              text="Then we build your protocol."
              className="font-serif italic font-normal"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-[520px] text-lg leading-relaxed text-white/90"
          >
            Choose the lab panel that matches the depth of insight you want. Once results return, the team reviews everything and maps the smartest path forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-col items-start gap-4"
          >
            <motion.a
              href="#choose-lab-panel"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-orange flex w-full max-w-[356px] items-center justify-center gap-3 rounded-full px-9 py-[18px] text-lg font-bold text-white sm:w-auto"
            >
              Choose Your Lab
              <img src={arrowIcon} alt="" className="h-5 w-5" />
            </motion.a>

            <div className="flex items-center gap-2 pl-1">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full border-[1.5px] border-[#d9d8d7]">
                <img src={checkIcon} alt="" className="h-3 w-3" />
              </span>
              <span className="text-sm font-medium text-[#d9d8d7]">HSA/FSA Elegible</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
