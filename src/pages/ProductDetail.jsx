import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ImagePlus, Sparkles, ShieldCheck, Stethoscope, FlaskConical, Users } from 'lucide-react'
import MotionLink from '../components/MotionLink'
import Reveal from '../components/Reveal'
import SimpleHeader from '../components/SimpleHeader'
import Footer from '../components/Footer'
import { getProduct } from '../data/protocolsData'

// benefit[0] is always the category-specific claim, benefit[1] the lifestyle-fit claim,
// and benefit[2] is always "monitored by your care team" — see protocolsData.js.
const supportingBenefitIcons = [Sparkles, ShieldCheck]

const trustBadges = [
  { icon: Stethoscope, label: 'Physician supervised' },
  { icon: FlaskConical, label: 'Personalized to your labs' },
  { icon: Users, label: 'Concierge care team' },
]

export default function ProductDetail() {
  const { categorySlug, productSlug } = useParams()
  const result = getProduct(categorySlug, productSlug)

  if (!result) {
    return (
      <div className="relative flex min-h-screen flex-col bg-cream text-ink">
        <SimpleHeader />
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
      <SimpleHeader />

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
              {category.benefits.map((b, i) => (
                <div key={b} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-2">
                    {i === 0 ? (
                      <img src={category.icon} alt="" className="h-4 w-4" />
                    ) : (
                      (() => {
                        const Icon = supportingBenefitIcons[(i - 1) % supportingBenefitIcons.length]
                        return <Icon className="h-4 w-4 text-white" strokeWidth={2.25} />
                      })()
                    )}
                  </span>
                  <p className="text-sm text-[#1a1a1a] md:text-base">{b}</p>
                </div>
              ))}
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

// Total thumbnail slots shown per product — extra slots render as empty
// placeholders until more photography is added for that product.
const GALLERY_SLOTS = 4

function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0)
  const isProductShot = active === 0
  const placeholderCount = Math.max(0, GALLERY_SLOTS - images.length)

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
        {Array.from({ length: placeholderCount }).map((_, i) => (
          <div
            key={`placeholder-${i}`}
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[14px] border-2 border-dashed border-[#d9d5cf] bg-[#faf8f5]"
          >
            <ImagePlus className="h-5 w-5 text-[#c4bfb7]" strokeWidth={1.75} />
          </div>
        ))}
      </div>
    </Reveal>
  )
}
