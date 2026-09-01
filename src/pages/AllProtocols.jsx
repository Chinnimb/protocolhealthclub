import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import MotionLink from '../components/MotionLink'
import Reveal from '../components/Reveal'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { categories } from '../data/protocolsData'

export default function AllProtocols() {
  return (
    <div className="relative min-h-screen bg-cream text-ink">
      <Header />

      <main className="pb-10 pt-24 md:pb-16 md:pt-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Reveal className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-[#161b1f] md:text-[56px]">All</span>
            <span className="font-serif text-4xl italic text-orange-2 md:text-[56px]">protocols</span>
          </Reveal>
          <Reveal delay={0.1} className="mt-4 max-w-[560px] text-base leading-relaxed text-[#6e6e6e] md:text-lg">
            Every protocol we offer, organized by goal. Pick a category to see what&rsquo;s available, then start
            with bloodwork to find the plan that fits you.
          </Reveal>
        </div>

        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {categories.map((category, i) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i, 6) * 0.06 }}
              >
                <MotionLink
                  to={`/products/${category.slug}`}
                  whileHover={{ y: -4 }}
                  className="protocol-card-shadow group relative flex h-[300px] w-full overflow-hidden rounded-[24px] sm:h-[320px]"
                >
                  <img
                    src={category.heroImage}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/40 to-transparent" />

                  <div className="relative z-10 mt-auto flex h-[132px] w-full flex-col gap-2 rounded-t-[20px] border-t border-white/20 bg-black/25 p-4 shadow-[0px_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-lg sm:h-[140px] sm:p-5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-2">
                        <img src={category.icon} alt="" className="h-4 w-4" />
                      </span>
                      <p className="text-base font-bold uppercase leading-tight tracking-tight text-white sm:text-lg">
                        {category.name}
                      </p>
                    </div>

                    <p className="line-clamp-2 text-xs leading-relaxed text-white/85">
                      {category.products.map((p) => p.name).join(' · ')}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.5px] text-white/70">
                        {category.products.length} protocol{category.products.length === 1 ? '' : 's'}
                      </span>
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-orange-2 px-3.5 py-1.5 text-xs font-bold text-white transition-transform duration-300 group-hover:translate-x-1 sm:px-4 sm:py-2">
                        Explore
                        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                    </div>
                  </div>
                </MotionLink>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
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
        </div>
      </main>

      <Footer />
    </div>
  )
}
