import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Sparkles,
  ShieldCheck,
  Moon,
  RefreshCw,
  Bone,
  Flame,
  Dumbbell,
  Zap,
  Brain,
  Wind,
  Sun,
  Activity,
  HeartPulse,
  Heart,
  Droplet,
  Smile,
  Leaf,
  Stethoscope,
  FlaskConical,
  Users,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import MotionLink from '../components/MotionLink'
import Reveal from '../components/Reveal'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import Footer from '../components/Footer'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { getProduct } from '../data/protocolsData'

// Picks an icon that matches what the benefit text is actually about, instead
// of cycling through a fixed set regardless of content.
const benefitIconRules = [
  { keywords: ['sleep', 'rest'], icon: Moon },
  { keywords: ['recovery', 'repair', 'healing'], icon: RefreshCw },
  { keywords: ['bone', 'joint', 'connective', 'motion', 'mobility', 'flexib'], icon: Bone },
  { keywords: ['muscle', 'strength', 'tone', 'training', 'pump'], icon: Dumbbell },
  { keywords: ['lean', 'composition', 'metabolism', 'fat', 'waist', 'weight', 'belly', 'visceral'], icon: Flame },
  { keywords: ['energy', 'stamina', 'vitality', 'fatigue'], icon: Zap },
  { keywords: ['focus', 'clarity', 'cognit', 'memory', 'mental', 'brain'], icon: Brain },
  { keywords: ['stress', 'calm', 'peace', 'anxiety', 'mood', 'resilien'], icon: Wind },
  { keywords: ['skin', 'radiance', 'glow', 'complexion'], icon: Sun },
  { keywords: ['immune', 'defense', 'inflammat'], icon: ShieldCheck },
  { keywords: ['hormone', 'balance'], icon: Activity },
  { keywords: ['circulation', 'blood flow', 'cardiovascular'], icon: HeartPulse },
  { keywords: ['libido', 'sexual', 'performance', 'intimacy', 'desire'], icon: Heart },
  { keywords: ['digest', 'gut'], icon: Leaf },
  { keywords: ['detox', 'toxin', 'cleanse', 'clearance'], icon: Droplet },
  { keywords: ['confiden', 'self-esteem'], icon: Smile },
  { keywords: ['clinical', 'research', 'studied', 'studies', 'evidence'], icon: FlaskConical },
]

function getBenefitIcon(text) {
  const lower = text.toLowerCase()
  const match = benefitIconRules.find((r) => r.keywords.some((kw) => new RegExp(`\\b${kw}`).test(lower)))
  return match ? match.icon : Sparkles
}

const trustBadges = [
  { icon: Stethoscope, label: 'Physician supervised' },
  { icon: FlaskConical, label: 'Personalized to your labs' },
  { icon: Users, label: 'Concierge care team' },
]

export default function ProductDetail() {
  const { categorySlug, productSlug } = useParams()
  const result = getProduct(categorySlug, productSlug)
  const relatedScrollRef = useRef(null)
  const [relatedActiveIndex, setRelatedActiveIndex] = useState(0)

  const scrollRelatedByCard = (dir) => {
    const el = relatedScrollRef.current
    if (!el) return
    const card = el.firstElementChild
    const step = card ? card.getBoundingClientRect().width + 24 : 244
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  const scrollToRelatedCard = (i) => {
    const el = relatedScrollRef.current
    const card = el?.children[i]
    if (!el || !card) return
    const target = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2
    el.scrollTo({ left: target, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = relatedScrollRef.current
    if (!el) return
    setRelatedActiveIndex(0)
    const onScroll = () => {
      // At either scroll extreme, several cards can be visible at once (desktop),
      // so snap straight to the first/last dot instead of whichever card happens
      // to sit closest to the viewport's center.
      if (el.scrollLeft <= 1) {
        setRelatedActiveIndex(0)
        return
      }
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        setRelatedActiveIndex(el.children.length - 1)
        return
      }
      const containerCenter = el.scrollLeft + el.clientWidth / 2
      let closestIndex = 0
      let closestDist = Infinity
      Array.from(el.children).forEach((child, i) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2
        const dist = Math.abs(childCenter - containerCenter)
        if (dist < closestDist) {
          closestDist = dist
          closestIndex = i
        }
      })
      setRelatedActiveIndex(closestIndex)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [productSlug])

  if (!result) {
    return (
      <div className="relative flex min-h-screen flex-col bg-cream text-ink">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 pt-24 text-center">
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
  const description = product.description || category.description
  const benefits = product.benefits || category.benefits

  return (
    <div className="relative min-h-screen bg-cream text-ink">
      <Header />

      <main className="mx-auto max-w-[1080px] px-6 pb-10 pt-24 md:px-10 md:pb-16 md:pt-28">
        <BackButton fallback={`/products/${category.slug}`} className="mb-4" />

        <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[2.2px]">
          <MotionLink to={`/products/${category.slug}`} whileHover={{ x: -2 }} className="text-orange-2">
            {category.name}
          </MotionLink>
          <span className="text-[#c8c8c8]">&gt;</span>
          <span className="text-[#8a8a8a]">{product.name}</span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <ProductGallery image={product.image} name={product.name} />

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold leading-tight text-[#1a1a1a] md:text-5xl">{product.name}</h1>
              <p className="text-[11px] tracking-[0.88px] text-[#8a8a8a]">{product.form.toUpperCase()}</p>
            </div>

            <p className="text-base leading-relaxed text-[#4a4a4a] md:text-lg">{description}</p>

            <div className="flex flex-col gap-4">
              {benefits.map((b) => {
                const Icon = getBenefitIcon(b)
                return (
                  <div key={b} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-2">
                      <Icon className="h-4 w-4 text-white" strokeWidth={2.25} />
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
                to="/get-started#choose-lab-panel"
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

            <div className="relative">
              <div
                ref={relatedScrollRef}
                className="flex gap-6 overflow-x-auto px-1 pb-16 pt-3 [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden md:flex-wrap md:overflow-visible md:pb-0 md:pt-0 md:snap-none"
              >
                {related.map((p) => (
                  <MotionLink
                    key={p.name}
                    to={`/products/${category.slug}/${p.slug}`}
                    whileHover={{ y: -6 }}
                    className="group flex w-[220px] shrink-0 snap-center flex-col overflow-hidden rounded-[20px] border border-[#e8e8e8] bg-white shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07)] transition-shadow duration-500 hover:shadow-[0px_16px_40px_0px_rgba(242,122,46,0.25)]"
                  >
                    <div className="relative h-[180px] w-full overflow-hidden">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.name}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <ImagePlaceholder className="absolute inset-0 h-full w-full border-0" />
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5 px-5 pb-6 pt-4">
                      <p className="text-lg font-bold text-[#161b1f]">{p.name}</p>
                      <p className="text-[11px] tracking-[0.88px] text-[#8a8a8a]">{p.form.toUpperCase()}</p>
                    </div>
                  </MotionLink>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-cream to-transparent md:hidden" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-cream to-transparent md:hidden" />

              <motion.button
                type="button"
                onClick={() => scrollRelatedByCard(-1)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="absolute left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-2 bg-white/70 shadow-[0px_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-md md:hidden"
              >
                <ChevronLeft className="h-4 w-4 text-orange-2" strokeWidth={2.5} />
              </motion.button>
              <motion.button
                type="button"
                onClick={() => scrollRelatedByCard(1)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-2 bg-white/70 shadow-[0px_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-md md:hidden"
              >
                <ChevronRight className="h-4 w-4 text-orange-2" strokeWidth={2.5} />
              </motion.button>
            </div>

            <div className="flex items-center justify-center gap-2 pt-1 md:hidden">
              {related.map((p, i) => (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => scrollToRelatedCard(i)}
                  aria-label={`Go to ${p.name}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    relatedActiveIndex === i ? 'w-6 bg-orange-2' : 'w-2 bg-[#d9d5cf]'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

function ProductGallery({ image, name }) {
  return (
    <Reveal className="flex flex-col gap-3">
      <div className="relative h-[320px] w-full overflow-hidden rounded-[24px] md:h-[420px]">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <ImagePlaceholder className="h-full w-full border-0" />
        )}
      </div>
    </Reveal>
  )
}
