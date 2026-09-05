import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'
import MotionLink from './MotionLink'
import { categories } from '../data/protocolsData'

export default function ExploreProtocols() {
  const [selected, setSelected] = useState(0)
  const activeCategory = categories[selected]

  const scrollRef = useRef(null)
  const dragState = useRef({ dragging: false, moved: false, startX: 0, startScrollLeft: 0 })

  const productsRef = useRef(null)
  const scrollProductsByCard = (dir) => {
    const el = productsRef.current
    if (!el) return
    const card = el.firstElementChild
    const step = card ? card.getBoundingClientRect().width + 16 : 276
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

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

        <div className="relative w-full">
            <motion.div
              key={activeCategory.name}
              ref={productsRef}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-[calc(50vw-138px)] py-8 [scrollbar-width:none] sm:w-full sm:flex-wrap sm:justify-center sm:gap-6 sm:overflow-visible sm:px-0 sm:py-0 sm:[scrollbar-width:auto] [&::-webkit-scrollbar]:hidden"
            >
              {activeCategory.products.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="w-[260px] shrink-0 snap-center sm:w-[calc(50%-12px)] sm:shrink sm:snap-none md:w-[300px]"
                >
                  <div
                    className="group flex flex-col overflow-hidden rounded-[20px] border border-[#e8e8e8] bg-white shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07)] transition-shadow duration-500 hover:shadow-[0px_16px_40px_0px_rgba(242,122,46,0.25)]"
                  >
                    <div className="relative h-[260px] w-full overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col gap-2 px-6 pb-7 pt-6">
                      <p className="text-xl font-bold text-[#161b1f]">{p.name}</p>
                      <p className="text-[11px] tracking-[0.88px] text-[#8a8a8a]">{p.form.toUpperCase()}</p>
                      <div className="flex items-center gap-1 pt-2 text-[13px] text-orange-2">
                        <span>LEARN MORE</span>
                        <span>&rsaquo;</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-cream to-transparent sm:hidden" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-cream to-transparent sm:hidden" />

            <motion.button
              type="button"
              onClick={() => scrollProductsByCard(-1)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="absolute left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-2 bg-white/70 shadow-[0px_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-md sm:hidden"
            >
              <ChevronLeft className="h-4 w-4 text-orange-2" strokeWidth={2.5} />
            </motion.button>
            <motion.button
              type="button"
              onClick={() => scrollProductsByCard(1)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-2 bg-white/70 shadow-[0px_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-md sm:hidden"
            >
              <ChevronRight className="h-4 w-4 text-orange-2" strokeWidth={2.5} />
            </motion.button>
        </div>

        <Reveal delay={0.1}>
          <MotionLink
            to="/get-started"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-orange inline-flex items-center gap-2 rounded-full border-2 border-white px-10 py-4 text-lg font-bold tracking-[0.5px] text-white"
          >
            Get Started
          </MotionLink>
        </Reveal>
      </div>
    </section>
  )
}
