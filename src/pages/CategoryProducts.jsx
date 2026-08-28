import { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import MotionLink from '../components/MotionLink'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'
import { categories, getCategory } from '../data/protocolsData'

export default function CategoryProducts() {
  const navigate = useNavigate()
  const { categorySlug } = useParams()
  const category = getCategory(categorySlug)
  const activePillRef = useRef(null)

  useEffect(() => {
    activePillRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [categorySlug])

  if (!category) {
    return (
      <div className="relative flex min-h-screen flex-col bg-cream text-ink">
        <header className="flex w-full items-center justify-between px-6 py-6 md:px-10">
          <motion.button
            type="button"
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-orange-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </motion.button>
        </header>
        <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
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
      <header className="flex w-full items-center justify-between px-6 py-6 md:px-10">
        <motion.button
          type="button"
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-orange-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </motion.button>

        <MotionLink
          to="/get-started"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-orange rounded-[20px] px-4 py-2 text-sm font-medium text-white"
        >
          Get Started
        </MotionLink>
      </header>

      {/* Category tab bar: scrolls with the page, then sticks under the header once it reaches the top. */}
      <div className="sticky top-0 z-20 border-b border-[#e8e8e8] bg-cream/95 py-3 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-sm">
        <div className="relative">
          <div className="flex w-full gap-3 overflow-x-auto px-6 [scrollbar-width:none] md:px-10 [&::-webkit-scrollbar]:hidden">
            {categories.map((c) => {
              const isSelected = c.slug === category.slug
              return (
                <motion.button
                  key={c.slug}
                  ref={isSelected ? activePillRef : null}
                  type="button"
                  onClick={() => navigate(`/products/${c.slug}`)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`shrink-0 select-none whitespace-nowrap rounded-full px-[18px] py-[9px] text-sm font-medium tracking-[0.5px] transition-colors ${
                    isSelected ? 'bg-orange-2 font-bold text-white' : 'border border-[#c8c8c8] text-[#2d2d2d]'
                  }`}
                >
                  {c.name}
                </motion.button>
              )
            })}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-cream to-transparent" />
        </div>
      </div>

      <main className="mx-auto max-w-[1200px] px-6 pb-10 pt-6 md:px-10 md:pb-16">
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

        <motion.div
          key={category.slug}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {category.products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <MotionLink
                to={`/products/${category.slug}/${p.slug}`}
                className="group relative flex h-[200px] items-center overflow-hidden rounded-[24px] border border-[#e8e8e8] bg-white shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] transition-shadow duration-500 hover:shadow-[0px_16px_40px_0px_rgba(242,122,46,0.2)] sm:h-[220px]"
              >
                <div className="relative z-10 flex h-full w-[58%] shrink-0 flex-col justify-between py-6 pl-6 pr-2 sm:py-7 sm:pl-8">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#f0ede8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.5px] text-[#6e6e6e]">
                      {category.name}
                    </span>
                    <span className="rounded-full bg-[#f0ede8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.5px] text-[#6e6e6e]">
                      {p.form}
                    </span>
                  </div>

                  <p className="text-lg font-bold uppercase leading-tight tracking-tight text-[#161b1f] sm:text-xl md:text-2xl">
                    {p.name}
                  </p>

                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-orange-2 px-4 py-2 text-xs font-bold text-white transition-transform duration-300 group-hover:translate-x-1 sm:px-5 sm:py-2.5 sm:text-sm">
                    View Protocol
                    <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.5} />
                  </span>
                </div>

                <div
                  className="relative flex h-full flex-1 items-center justify-center overflow-hidden"
                  style={{ backgroundImage: 'linear-gradient(175deg, rgb(255,250,247) 5%, rgb(255,243,235) 79%, rgba(255,153,74,0.9) 163%)' }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="relative h-[85%] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </MotionLink>
            </motion.div>
          ))}
        </motion.div>

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
