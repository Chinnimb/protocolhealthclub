import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import Reveal from './Reveal'
import MotionLink from './MotionLink'

import fatlossSemaglutide from '../assets/figma/protocols/fatloss-semaglutide.png'
import fatlossTirzepatide from '../assets/figma/protocols/fatloss-tirzepatide.png'
import fatlossCarnitine from '../assets/figma/protocols/fatloss-carnitine.png'
import fatlossTesofensine from '../assets/figma/protocols/fatloss-tesofensine.png'

import muscleTesamorelin from '../assets/figma/protocols/muscle-tesamorelin.png'
import muscleSermorelin from '../assets/figma/protocols/muscle-sermorelin.png'
import muscleCjcIpamorelin from '../assets/figma/protocols/muscle-cjc-ipamorelin.png'
import muscleIgf1Lr3 from '../assets/figma/protocols/muscle-igf1lr3.png'

import energyNad from '../assets/figma/protocols/energy-nad.png'
import energyGlutathione from '../assets/figma/protocols/energy-glutathione.png'
import energySs31 from '../assets/figma/protocols/energy-ss31.png'
import energyThyroid from '../assets/figma/protocols/energy-thyroid.png'

import sexualTestosterone from '../assets/figma/protocols/sexual-testosterone.png'
import sexualEstrogen from '../assets/figma/protocols/sexual-estrogen.png'
import sexualTadalafil from '../assets/figma/protocols/sexual-tadalafil.png'
import sexualSildenafil from '../assets/figma/protocols/sexual-sildenafil.png'

import fertilityHcg from '../assets/figma/protocols/fertility-hcg.png'
import fertilityEnclomiphene from '../assets/figma/protocols/fertility-enclomiphene.png'
import fertilityRfsh from '../assets/figma/protocols/fertility-rfsh.png'
import fertilityGlutathione from '../assets/figma/protocols/fertility-glutathione.png'

import skincareGhkCu from '../assets/figma/protocols/skincare-ghkcu.png'
import skincareEstradiol from '../assets/figma/protocols/skincare-estradiol.png'
import skincareTretinoin from '../assets/figma/protocols/skincare-tretinoin.png'

import injuryBpc157 from '../assets/figma/protocols/injury-bpc157.png'
import injuryTb500 from '../assets/figma/protocols/injury-tb500.png'
import injuryKpv from '../assets/figma/protocols/injury-kpv.png'

import antiagingNad from '../assets/figma/protocols/antiaging-nad.png'
import antiagingGlutathione from '../assets/figma/protocols/antiaging-glutathione.png'
import antiagingOxytocin from '../assets/figma/protocols/antiaging-oxytocin.png'
import antiagingMethyleneBlue from '../assets/figma/protocols/antiaging-methyleneblue.png'

import gutGiMaps from '../assets/figma/protocols/gut-gimaps.png'
import gutBarrierTesting from '../assets/figma/protocols/gut-barriertesting.png'
import gutFoodSensitivity from '../assets/figma/protocols/gut-foodsensitivity.png'

import hairMinoxidil from '../assets/figma/protocols/hair-minoxidil.png'
import hairDutasteride from '../assets/figma/protocols/hair-dutasteride.png'
import hairFinasteride from '../assets/figma/protocols/hair-finasteride.png'
import hairGhkCu from '../assets/figma/protocols/hair-ghkcu.png'

import stressProgesterone from '../assets/figma/protocols/stress-progesterone.png'
import stressSelank from '../assets/figma/protocols/stress-selank.png'

import cognitiveSemax from '../assets/figma/protocols/cognitive-semax.png'
import cognitiveDihexa from '../assets/figma/protocols/cognitive-dihexa.png'
import cognitiveTesofensine from '../assets/figma/protocols/cognitive-tesofensine.png'

const categories = [
  {
    name: 'Fat Loss',
    products: [
      { name: 'Semaglutide', image: fatlossSemaglutide },
      { name: 'Tirzepatide', image: fatlossTirzepatide, featured: true },
      { name: 'Carnitine', image: fatlossCarnitine },
      { name: 'Tesofensine', image: fatlossTesofensine },
    ],
  },
  {
    name: 'Muscle Growth',
    products: [
      { name: 'Tesamorelin', image: muscleTesamorelin },
      { name: 'Sermorelin', image: muscleSermorelin, featured: true },
      { name: 'CJC, Ipamorelin', image: muscleCjcIpamorelin },
      { name: 'IGF-1 LR3', image: muscleIgf1Lr3 },
    ],
  },
  {
    name: 'Energy Boosting',
    products: [
      { name: 'NAD+', image: energyNad },
      { name: 'Glutathione', image: energyGlutathione, featured: true },
      { name: 'SS-31', image: energySs31 },
      { name: 'Thyroid Supplementation', image: energyThyroid },
    ],
  },
  {
    name: 'Sexual Health',
    products: [
      { name: 'Testosterone', image: sexualTestosterone },
      { name: 'Estrogen', image: sexualEstrogen, featured: true },
      { name: 'Tadalafil (Cialis)', image: sexualTadalafil },
      { name: 'Sildenafil (Viagra)', image: sexualSildenafil },
    ],
  },
  {
    name: 'Fertility',
    products: [
      { name: 'hCG', image: fertilityHcg },
      { name: 'Enclomiphene', image: fertilityEnclomiphene, featured: true },
      { name: 'rFSH', image: fertilityRfsh },
      { name: 'Glutathione', image: fertilityGlutathione },
    ],
  },
  {
    name: 'Skincare',
    products: [
      { name: 'GHK-Cu', image: skincareGhkCu },
      { name: 'Estradiol', image: skincareEstradiol, featured: true },
      { name: 'Tretinoin', image: skincareTretinoin },
    ],
  },
  {
    name: 'Injury Repair',
    products: [
      { name: 'BPC-157', image: injuryBpc157 },
      { name: 'TB-500', image: injuryTb500, featured: true },
      { name: 'KPV', image: injuryKpv },
    ],
  },
  {
    name: 'Anti-Aging',
    products: [
      { name: 'NAD+', image: antiagingNad },
      { name: 'Glutathione', image: antiagingGlutathione, featured: true },
      { name: 'Oxytocin', image: antiagingOxytocin },
      { name: 'Methylene Blue', image: antiagingMethyleneBlue },
    ],
  },
  {
    name: 'Gut Health',
    products: [
      { name: 'GI Maps', image: gutGiMaps },
      { name: 'Gut Barrier Testing', image: gutBarrierTesting, featured: true },
      { name: 'Food Sensitivity Testing', image: gutFoodSensitivity },
    ],
  },
  {
    name: 'Hair Growth',
    products: [
      { name: 'Minoxidil', image: hairMinoxidil },
      { name: 'Dutasteride', image: hairDutasteride, featured: true },
      { name: 'Finasteride', image: hairFinasteride },
      { name: 'GHK-Cu', image: hairGhkCu },
    ],
  },
  {
    name: 'Stress Reduction',
    products: [
      { name: 'Progesterone', image: stressProgesterone },
      { name: 'Selank', image: stressSelank, featured: true },
    ],
  },
  {
    name: 'Cognitive Focus',
    products: [
      { name: 'Semax', image: cognitiveSemax },
      { name: 'Dihexa', image: cognitiveDihexa, featured: true },
      { name: 'Tesofensine', image: cognitiveTesofensine },
    ],
  },
]

export default function ExploreProtocols() {
  const [selected, setSelected] = useState(0)
  const activeCategory = categories[selected]

  const scrollRef = useRef(null)
  const dragState = useRef({ dragging: false, moved: false, startX: 0, startScrollLeft: 0 })

  const handlePointerDown = (e) => {
    const el = scrollRef.current
    if (!el) return
    dragState.current = {
      dragging: true,
      moved: false,
      startX: e.pageX,
      startScrollLeft: el.scrollLeft,
    }
  }

  const handlePointerMove = (e) => {
    const el = scrollRef.current
    const state = dragState.current
    if (!el || !state.dragging) return
    const delta = e.pageX - state.startX
    if (Math.abs(delta) > 10) state.moved = true
    el.scrollLeft = state.startScrollLeft - delta
  }

  const endDrag = () => {
    dragState.current.dragging = false
  }

  const handleCategoryClick = (i) => {
    if (dragState.current.moved) return
    setSelected(i)
  }

  return (
    <section id="protocols" className="bg-cream px-6 py-16 md:px-20">
      <div className="flex w-full flex-col items-center gap-12">
        <div className="flex w-full min-w-0 flex-col items-center gap-6">
          <Reveal className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-[#161b1f] md:text-[56px]">Explore</span>
            <span className="font-serif text-4xl italic text-orange-2 md:text-[56px]">protocols</span>
          </Reveal>

          <div className="relative w-full max-w-full">
          <Reveal
            ref={scrollRef}
            delay={0.1}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            className="flex w-full max-w-full cursor-grab gap-3 overflow-x-auto px-6 py-2 active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((c, i) => {
              const isSelected = selected === i
              return (
                <motion.button
                  key={c.name}
                  type="button"
                  onClick={() => handleCategoryClick(i)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`shrink-0 select-none whitespace-nowrap rounded-full px-[18px] py-[9px] text-base font-medium tracking-[0.96px] transition-colors ${
                    isSelected ? 'bg-orange-2 font-bold text-white' : 'border border-[#c8c8c8] text-[#2d2d2d]'
                  }`}
                >
                  {c.name}
                </motion.button>
              )
            })}
          </Reveal>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-cream to-transparent" />
          </div>
          <p className="text-[11px] text-[#999]">Swipe to see all categories</p>
        </div>

        <div className="flex w-full flex-col items-center gap-6">
            <motion.div
              key={activeCategory.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex w-full flex-wrap justify-center gap-6"
            >
              {activeCategory.products.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="group flex w-full flex-col overflow-hidden rounded-[20px] border border-[#e8e8e8] bg-white shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07)] transition-shadow duration-500 hover:shadow-[0px_16px_40px_0px_rgba(242,122,46,0.25)] sm:w-[calc(50%-12px)] md:w-[300px]"
                >
                  <div className="relative flex h-[260px] items-center justify-center overflow-hidden p-8">
                    <div
                      className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                      style={{ backgroundImage: 'linear-gradient(175deg, rgb(255,250,247) 5%, rgb(255,243,235) 79%, rgba(255,153,74,0.9) 163%)' }}
                    />
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ backgroundImage: 'linear-gradient(90deg, #f45f2b 0%, #f4ac63 100%)' }}
                    />
                    <motion.img
                      src={p.image}
                      alt={p.name}
                      whileHover={{ rotate: -3, scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className="relative h-[200px] w-[160px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2 px-6 pb-7 pt-6">
                    <p className="text-xl font-bold text-[#161b1f]">{p.name}</p>
                    <p className="text-[11px] tracking-[0.88px] text-[#8a8a8a]">INJECTION</p>
                    <div className="flex items-center gap-1 pt-2 text-[13px] text-orange-2">
                      <span>LEARN MORE</span>
                      <span>&rsaquo;</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
        </div>

        <Reveal delay={0.1}>
          <MotionLink
            to="/get-started"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="bg-gradient-orange inline-block rounded-full border-2 border-white px-12 py-4 text-2xl font-bold tracking-[1.28px] text-white"
          >
            Get Started
          </MotionLink>
        </Reveal>
      </div>
    </section>
  )
}
