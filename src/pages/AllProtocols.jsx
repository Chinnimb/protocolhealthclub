import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import MotionLink from '../components/MotionLink'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'
import { categories } from '../data/protocolsData'

export default function AllProtocols() {
  const navigate = useNavigate()

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

      <main className="mx-auto max-w-[1200px] px-6 py-10 md:px-10 md:py-16">
        <Reveal className="flex items-baseline gap-3">
          <span className="text-4xl font-bold text-[#161b1f] md:text-[56px]">All</span>
          <span className="font-serif text-4xl italic text-orange-2 md:text-[56px]">protocols</span>
        </Reveal>
        <Reveal delay={0.1} className="mt-4 max-w-[560px] text-base leading-relaxed text-[#6e6e6e] md:text-lg">
          Every protocol we offer, organized by goal. Pick a category to see what&rsquo;s available, then start with
          bloodwork to find the plan that fits you.
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map((category, i) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <MotionLink
                to={`/products/${category.slug}`}
                className="group relative flex h-[380px] overflow-hidden rounded-[24px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.1)] transition-shadow duration-500 hover:shadow-[0px_20px_48px_0px_rgba(242,122,46,0.3)] sm:h-[420px]"
              >
                <img
                  src={category.heroImage}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/25 to-transparent" />

                <div className="relative z-10 mx-4 mb-4 mt-auto flex flex-col gap-3 rounded-[20px] border border-white/50 bg-white/60 p-5 shadow-[0px_8px_24px_rgba(0,0,0,0.1)] backdrop-blur-xl sm:p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-2">
                      <img src={category.icon} alt="" className="h-4 w-4" />
                    </span>
                    <p className="text-lg font-bold uppercase leading-tight tracking-tight text-[#161b1f] sm:text-xl">
                      {category.name}
                    </p>
                  </div>

                  <p className="line-clamp-2 text-xs leading-relaxed text-[#3a3a3a] sm:text-sm">
                    {category.products.map((p) => p.name).join(' · ')}
                  </p>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.5px] text-[#5a5a5a]">
                      {category.products.length} protocol{category.products.length === 1 ? '' : 's'}
                    </span>
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-orange-2 px-4 py-2 text-xs font-bold text-white transition-transform duration-300 group-hover:translate-x-1 sm:px-5 sm:py-2.5 sm:text-sm">
                      Explore
                      <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </MotionLink>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-lg text-[#6e6e6e]">Not sure where to start?</p>
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
