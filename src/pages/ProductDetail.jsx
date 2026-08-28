import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Activity, Sparkles, ShieldCheck, Stethoscope, FlaskConical, Users } from 'lucide-react'
import MotionLink from '../components/MotionLink'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'
import { getProduct } from '../data/protocolsData'

const benefitIcons = [Activity, Sparkles, ShieldCheck]

const trustBadges = [
  { icon: Stethoscope, label: 'Physician supervised' },
  { icon: FlaskConical, label: 'Personalized to your labs' },
  { icon: Users, label: 'Concierge care team' },
]

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
  const gallery = product.images?.length ? product.images : [product.image]

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

      <main className="mx-auto max-w-[1080px] px-6 py-10 md:px-10 md:py-16">
        <MotionLink
          to={`/products/${category.slug}`}
          whileHover={{ x: -2 }}
          className="text-xs font-extrabold uppercase tracking-[2.2px] text-orange-2"
        >
          {category.name}
        </MotionLink>

        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <ProductGallery images={gallery} name={product.name} />

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold leading-tight text-[#1a1a1a] md:text-5xl">{product.name}</h1>
              <p className="text-[11px] tracking-[0.88px] text-[#8a8a8a]">{product.form.toUpperCase()}</p>
            </div>

            <p className="text-base leading-relaxed text-[#4a4a4a] md:text-lg">{category.description}</p>

            <div className="flex flex-col gap-4">
              {category.benefits.map((b, i) => {
                const Icon = benefitIcons[i % benefitIcons.length]
                return (
                  <div key={b} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-2/10 text-orange-2">
                      <Icon className="h-4 w-4" strokeWidth={2.25} />
                    </span>
                    <p className="text-sm text-[#1a1a1a] md:text-base">{b}</p>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 border-y border-[#e8e8e8] py-5">
              {trustBadges.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-2 text-xs font-semibold text-[#4a4a4a] md:text-sm">
                  <Icon className="h-4 w-4 text-orange-2" strokeWidth={2.25} />
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <MotionLink
                to="/get-started"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-orange inline-flex w-full items-center justify-center rounded-full border-2 border-white py-4 text-lg font-bold tracking-[1px] text-white sm:w-fit sm:px-10"
              >
                Get Started
              </MotionLink>
              <p className="text-xs leading-relaxed text-[#8a8a8a]">
                Every protocol starts with bloodwork. Your care team confirms suitability and dosing based on your
                labs before anything is prescribed.
              </p>
            </div>
          </Reveal>
        </div>

        {related.length > 0 && (
          <div className="mt-20 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-[#161b1f]">More in {category.name}</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {related.map((p) => (
                <MotionLink
                  key={p.name}
                  to={`/products/${category.slug}/${p.slug}`}
                  whileHover={{ y: -4 }}
                  className="group relative flex h-[180px] items-center overflow-hidden rounded-[24px] border border-[#e8e8e8] bg-white shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] transition-shadow duration-500 hover:shadow-[0px_16px_40px_0px_rgba(242,122,46,0.2)]"
                >
                  <div className="relative z-10 flex h-full w-[58%] shrink-0 flex-col justify-between py-5 pl-6 pr-2">
                    <span className="w-fit rounded-full bg-[#f0ede8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.5px] text-[#6e6e6e]">
                      {p.form}
                    </span>
                    <p className="text-lg font-bold uppercase leading-tight tracking-tight text-[#161b1f]">{p.name}</p>
                    <span className="inline-flex w-fit items-center gap-1.5 text-xs font-bold text-orange-2">
                      View Protocol
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                  </div>
                  <div
                    className="relative flex h-full flex-1 items-center justify-center overflow-hidden"
                    style={{ backgroundImage: 'linear-gradient(175deg, rgb(255,250,247) 5%, rgb(255,243,235) 79%, rgba(255,153,74,0.9) 163%)' }}
                  >
                    <img src={p.image} alt={p.name} className="relative h-[80%] w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
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

function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0)
  const isProductShot = active === 0

  return (
    <Reveal className="flex flex-col gap-3">
      <div className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-[24px] md:h-[420px]">
        {isProductShot ? (
          <>
            <div
              className="absolute inset-0"
              style={{ backgroundImage: 'linear-gradient(175deg, rgb(255,250,247) 5%, rgb(255,243,235) 79%, rgba(255,153,74,0.9) 163%)' }}
            />
            <img
              src={images[active]}
              alt={name}
              className="relative h-[260px] w-[220px] object-contain md:h-[320px] md:w-[260px]"
            />
          </>
        ) : (
          <img src={images[active]} alt={name} className="h-full w-full object-cover" />
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={`relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border-2 transition-colors ${
                i === 0 ? 'bg-[#fff8f4] p-2' : ''
              } ${active === i ? 'border-orange-2' : 'border-transparent hover:border-[#e8e8e8]'}`}
            >
              <img src={src} alt="" className={i === 0 ? 'h-full w-full object-contain' : 'h-full w-full object-cover'} />
            </button>
          ))}
        </div>
      )}
    </Reveal>
  )
}
