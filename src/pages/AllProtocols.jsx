import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
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

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -6 }}
            >
              <MotionLink
                to={`/products/${category.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#e8e8e8] bg-white shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07)] transition-shadow duration-500 hover:shadow-[0px_16px_40px_0px_rgba(242,122,46,0.25)]"
              >
                <div className="relative flex h-[180px] items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                    style={{ backgroundImage: 'linear-gradient(175deg, rgb(255,250,247) 5%, rgb(255,243,235) 79%, rgba(255,153,74,0.9) 163%)' }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ backgroundImage: 'linear-gradient(90deg, #f45f2b 0%, #f4ac63 100%)' }}
                  />
                  <img
                    src={category.products[0].image}
                    alt=""
                    className="relative h-[130px] w-[110px] object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 px-6 pb-7 pt-6">
                  <p className="text-xl font-bold text-[#161b1f]">{category.name}</p>
                  <p className="flex-1 text-sm leading-relaxed text-[#6e6e6e]">{category.blurb}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.5px] text-[#8a8a8a]">
                      {category.products.length} protocol{category.products.length === 1 ? '' : 's'}
                    </span>
                    <div className="flex items-center gap-1 text-[13px] font-semibold text-orange-2">
                      <span>EXPLORE</span>
                      <span>&rsaquo;</span>
                    </div>
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
