import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Check } from 'lucide-react'
import MotionLink from '../components/MotionLink'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'
import { getProduct } from '../data/protocolsData'

export default function ProductDetail() {
  const navigate = useNavigate()
  const { categorySlug, productSlug } = useParams()
  const result = getProduct(categorySlug, productSlug)

  if (!result) {
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
          <h1 className="text-3xl font-bold text-[#1a1a1a]">Protocol not found</h1>
          <p className="max-w-[420px] text-sm leading-relaxed text-[#6e6e6e]">
            We couldn&rsquo;t find that protocol. It may have moved or is no longer offered.
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

  const { category, product } = result
  const related = category.products.filter((p) => p.slug !== product.slug)

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

      <main className="mx-auto max-w-[1000px] px-6 py-10 md:px-10 md:py-16">
        <MotionLink
          to={`/products/${category.slug}`}
          whileHover={{ x: -2 }}
          className="text-xs font-extrabold uppercase tracking-[2.2px] text-orange-2"
        >
          {category.name}
        </MotionLink>

        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <Reveal className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-[24px] p-10 md:h-[420px]">
            <div
              className="absolute inset-0"
              style={{ backgroundImage: 'linear-gradient(175deg, rgb(255,250,247) 5%, rgb(255,243,235) 79%, rgba(255,153,74,0.9) 163%)' }}
            />
            <img src={product.image} alt={product.name} className="relative h-[260px] w-[220px] object-contain md:h-[320px] md:w-[260px]" />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold leading-tight text-[#1a1a1a] md:text-5xl">{product.name}</h1>
              <p className="text-[11px] tracking-[0.88px] text-[#8a8a8a]">{product.form.toUpperCase()}</p>
            </div>

            <p className="text-base leading-relaxed text-[#4a4a4a] md:text-lg">{category.description}</p>

            <div className="flex flex-col gap-3">
              {category.benefits.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-2/10 text-orange-2">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <p className="text-sm text-[#1a1a1a] md:text-base">{b}</p>
                </div>
              ))}
            </div>

            <MotionLink
              to="/get-started"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-orange mt-2 inline-flex w-fit items-center justify-center rounded-full border-2 border-white px-10 py-4 text-lg font-bold tracking-[1px] text-white"
            >
              Get Started
            </MotionLink>
          </Reveal>
        </div>

        {related.length > 0 && (
          <div className="mt-20 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-[#161b1f]">More in {category.name}</h2>
            <div className="flex flex-wrap gap-6">
              {related.map((p) => (
                <MotionLink
                  key={p.name}
                  to={`/products/${category.slug}/${p.slug}`}
                  whileHover={{ y: -6 }}
                  className="group flex w-[220px] flex-col overflow-hidden rounded-[20px] border border-[#e8e8e8] bg-white shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07)] transition-shadow duration-500 hover:shadow-[0px_16px_40px_0px_rgba(242,122,46,0.25)]"
                >
                  <div className="relative flex h-[180px] items-center justify-center overflow-hidden p-6">
                    <div
                      className="absolute inset-0"
                      style={{ backgroundImage: 'linear-gradient(175deg, rgb(255,250,247) 5%, rgb(255,243,235) 79%, rgba(255,153,74,0.9) 163%)' }}
                    />
                    <img src={p.image} alt={p.name} className="relative h-[130px] w-[110px] object-contain" />
                  </div>
                  <div className="flex flex-col gap-1.5 px-5 pb-6 pt-4">
                    <p className="text-lg font-bold text-[#161b1f]">{p.name}</p>
                    <p className="text-[11px] tracking-[0.88px] text-[#8a8a8a]">{p.form.toUpperCase()}</p>
                  </div>
                </MotionLink>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
