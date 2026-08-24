import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'
import FadeIn from './FadeIn'
import Typewriter from './Typewriter'
import glowLeft from '../assets/figma/benefits-glow-left.svg'
import glowRight from '../assets/figma/benefits-glow-right.svg'

import cardFatLoss from '../assets/figma/card-fat-loss.png'
import cardMuscleGrowth from '../assets/figma/card-muscle-growth.png'
import cardEnergyBoosting from '../assets/figma/card-energy-boosting.png'
import cardSexualHealth from '../assets/figma/card-sexual-health.png'
import cardFertility from '../assets/figma/card-fertility.png'
import cardSkinCare from '../assets/figma/card-skin-care.png'
import cardInjuryRepair from '../assets/figma/card-injury-repair.png'
import cardAntiAging from '../assets/figma/card-anti-aging.png'
import cardGutHealth from '../assets/figma/card-gut-health.png'
import cardHairGrowth from '../assets/figma/card-hair-growth.jpg'
import cardStressReduction from '../assets/figma/card-stress-reduction.jpg'
import cardCognitiveFocus from '../assets/figma/card-cognitive-focus.png'

import iconFlame from '../assets/figma/icon-flame.svg'
import iconDumbbell from '../assets/figma/icon-dumbbell.svg'
import iconZap from '../assets/figma/icon-zap.svg'
import iconHeart from '../assets/figma/icon-heart.svg'
import iconSprout from '../assets/figma/icon-sprout.svg'
import iconStar from '../assets/figma/icon-star.svg'
import iconBandage from '../assets/figma/icon-bandage.svg'
import iconClock from '../assets/figma/icon-clock.svg'
import iconLeaf from '../assets/figma/icon-leaf.svg'
import iconCombine from '../assets/figma/icon-combine.svg'
import iconCircleX from '../assets/figma/icon-circle-x.svg'
import iconBrain from '../assets/figma/icon-brain.svg'

const cards = [
  { title: 'Fat Loss', icon: iconFlame, image: cardFatLoss, products: 'Semaglutide, Tirzepatide, L-Carnitine, Tesofensine' },
  { title: 'Muscle Growth', icon: iconDumbbell, image: cardMuscleGrowth, products: 'Tesamorelin, Sermorelin, CJC / Ipamorelin, IGF-1 LR3' },
  { title: 'Energy', icon: iconZap, image: cardEnergyBoosting, products: 'NAD+, Glutathione, SS-31, Thyroid Supplementation' },
  { title: 'Sexual Health', icon: iconHeart, image: cardSexualHealth, products: 'Testosterone, Estrogen, Tadalafil (Cialis), Sildenafil (Viagra), Scream Cream, Oxytocin' },
  { title: 'Fertility', icon: iconSprout, image: cardFertility, products: 'hCG, Enclomiphene, rFSH, Glutathione' },
  { title: 'Skin Care', icon: iconStar, image: cardSkinCare, products: 'GHK-Cu, Estradiol, Tretinoin' },
  { title: 'Injury Repair', icon: iconBandage, image: cardInjuryRepair, products: 'BPC-157, TB-500, KPV' },
  { title: 'Anti-Aging', icon: iconClock, image: cardAntiAging, products: 'NAD, Glutathione, Oxytocin, Methylene Blue' },
  { title: 'Gut Health', icon: iconLeaf, image: cardGutHealth, products: 'GI Maps, Gut Barrier Testing, Food Sensitivity Testing' },
  { title: 'Hair Growth', icon: iconCombine, image: cardHairGrowth, products: 'Minoxidil, Dutasteride, Finasteride, GHK-Cu' },
  { title: 'Stress Reduction', icon: iconCircleX, image: cardStressReduction, products: 'Progesterone, Selank' },
  { title: 'Cognitive Focus', icon: iconBrain, image: cardCognitiveFocus, products: 'Semax, Dihexa, Tesofensine' },
]

function BenefitCard({ card, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className="group relative h-[480px] w-[320px] shrink-0 overflow-hidden rounded-[24px] border border-white/10 shadow-[0px_12px_24px_0px_rgba(22,32,37,0.08)] transition-shadow duration-500 hover:shadow-[0px_16px_40px_0px_rgba(242,95,43,0.35)]"
    >
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.75) 85%, rgba(0,0,0,0.85) 100%)',
        }}
      />
      <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
        <img src={card.icon} alt="" className="h-8 w-8" />
        <p className="text-3xl font-extrabold text-white">{card.title}</p>
        <div>
          <p className="line-clamp-2 text-[13px] text-white/80">{card.products}</p>
          <p className="mt-1 text-xs font-extrabold text-orange-2">AND MORE</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Benefits() {
  const scrollerRef = useRef(null) // eslint-disable-line

  const scrollByCards = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-cream py-16">
      <img src={glowLeft} alt="" className="pointer-events-none absolute right-0 top-[30%] w-[28%] max-w-[435px]" />
      <img src={glowRight} alt="" className="pointer-events-none absolute left-0 top-[30%] w-[28%] max-w-[447px]" />

      <div className="relative w-full px-6 md:px-10">
        <Typewriter
          triggerOnView
          startDelay={150}
          speed={35}
          text="BENEFITS"
          className="text-xl font-bold text-orange"
        />
        <Reveal delay={0.05} className="mt-2 max-w-2xl">
          <h2 className="text-4xl font-bold leading-tight text-black md:text-[56px]">
            Protocols designed to unlock your best life.
          </h2>
          <FadeIn as="p" className="text-gradient-orange font-serif text-3xl md:text-[56px]" delay={0.25}>
            Engineered around your labs, symptoms and goals
          </FadeIn>
        </Reveal>
        <Reveal delay={0.1} as="p" className="mt-4 max-w-2xl text-lg font-medium text-[#706b67] md:text-xl">
          Targeted, medical-grade pathways engineered to restore your physiological baseline and accelerate optimal human performance.
        </Reveal>
      </div>

      <div className="relative mt-14">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-6 py-10 [scrollbar-width:none] md:px-10 [&::-webkit-scrollbar]:hidden"
        >
        {cards.map((c, i) => (
          <BenefitCard key={c.title} card={c} delay={(i % 6) * 0.06} />
        ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent md:w-40" />

        <motion.button
          type="button"
          onClick={() => scrollByCards(-1)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-2 bg-white/20 shadow-[0px_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-md md:left-6"
        >
          <ChevronLeft className="h-5 w-5 text-orange-2" strokeWidth={2.5} />
        </motion.button>
        <motion.button
          type="button"
          onClick={() => scrollByCards(1)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-2 bg-white/20 shadow-[0px_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-md md:right-6"
        >
          <ChevronRight className="h-5 w-5 text-orange-2" strokeWidth={2.5} />
        </motion.button>
      </div>
    </section>
  )
}
