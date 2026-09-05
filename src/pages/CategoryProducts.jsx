import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import MotionLink from '../components/MotionLink'
import Reveal from '../components/Reveal'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import Footer from '../components/Footer'
import { getCategory } from '../data/protocolsData'

export default function CategoryProducts() {
  const { categorySlug } = useParams()
  const category = getCategory(categorySlug)
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollByCard = (dir) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.firstElementChild
    const step = card ? card.getBoundingClientRect().width + 24 : 264
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  const scrollToCard = (i) => {
    const el = scrollRef.current
    const card = el?.children[i]
    if (!el || !card) return
    const target = card.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft
    el.scrollTo({ left: target, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    setActiveIndex(0)
    const onScroll = () => {
      const card = el.firstElementChild
      const step = card ? card.getBoundingClientRect().width + 24 : 264
      setActiveIndex(Math.round(el.scrollLeft / step))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [category?.slug])

  if (!category) {
    return (
      <div className="relative flex min-h-screen flex-col bg-cream text-ink">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 pt-24 text-center">
          <h1 className="text-3xl font-bold text-[#1a1a1a]">Category not found</h1>
          <p className="max-w-[420px] text-sm leading-relaxed text-[#6e6e6e]">
            We couldn&rsquo;t find that category. It may have moved or is no longer offered.
          </p>
          <MotionLink
            to="/products"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-2 text-base font-semibold text-orange-2 underline underline-offset-4"
          >
            View all protocols
          </MotionLink>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-cream text-ink">
      <Header />

      <main className="mx-auto max-w-[1200px] px-6 pb-10 pt-24 md:px-10 md:pb-16 md:pt-28">
        <BackButton fallback="/products" className="mb-6" />
        <MotionLink
          to="/products"
          whileHover={{ x: -2 }}
          className="text-xs font-extrabold uppercase tracking-[2.2px] text-orange-2"
        >
          All Protocols
        </MotionLink>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 flex flex-col gap-2"
        >
          <h1 className="text-3xl font-bold text-[#161b1f] md:text-5xl">{category.name}</h1>
          <p className="max-w-[640px] text-base leading-relaxed text-[#6e6e6e] md:text-lg">{category.blurb}</p>
        </motion.div>

        <div className="relative mt-10">
          <motion.div
            key={category.slug}
            ref={scrollRef}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-6 overflow-x-auto px-1 pb-16 pt-3 [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden md:flex-wrap md:justify-center md:overflow-visible md:pb-0 md:pt-0 md:snap-none"
          >
            {category.products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="w-[240px] shrink-0 snap-center md:w-[260px]"
              >
                <div
                  className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#e8e8e8] bg-white shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07)] transition-shadow duration-500 hover:shadow-[0px_16px_40px_0px_rgba(242,122,46,0.25)]"
                >
                  <div className="relative h-[220px] w-full overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 px-6 pb-7 pt-6">
                    <p className="line-clamp-2 min-h-[56px] text-xl font-bold text-[#161b1f]">{p.name}</p>
                    <p className="text-[11px] tracking-[0.88px] text-[#8a8a8a]">{p.form.toUpperCase()}</p>
                    <div className="mt-auto flex items-center gap-1 pt-2 text-[13px] text-orange-2">
                      <span>LEARN MORE</span>
                      <span>&rsaquo;</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            type="button"
            onClick={() => scrollByCard(-1)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="absolute left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-2 bg-white/70 shadow-[0px_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-md md:hidden"
          >
            <ChevronLeft className="h-4 w-4 text-orange-2" strokeWidth={2.5} />
          </motion.button>
          <motion.button
            type="button"
            onClick={() => scrollByCard(1)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-2 bg-white/70 shadow-[0px_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-md md:hidden"
          >
            <ChevronRight className="h-4 w-4 text-orange-2" strokeWidth={2.5} />
          </motion.button>
        </div>

        <div className="flex items-center justify-center gap-2 pt-1 md:hidden">
          {category.products.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => scrollToCard(i)}
              aria-label={`Go to ${p.name}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-6 bg-orange-2' : 'w-2 bg-[#d9d5cf]'
              }`}
            />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16 flex flex-col items-center gap-4 text-center">
          <MotionLink
            to="/get-started"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="bg-gradient-orange inline-block rounded-full border-2 border-white px-12 py-4 text-2xl font-bold tracking-[1.28px] text-white"
          >
            Get Started
          </MotionLink>
        </Reveal>
      </main>

      <Footer />
    </div>
  )
}
