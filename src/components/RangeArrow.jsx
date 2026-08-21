import { motion } from 'framer-motion'

export default function RangeArrow({ inView, delay = 0, className = '' }) {
  const pathD = 'M10,34 C130,4 348,4 452,20'
  const headD = 'M443,11 L462,21 L441,31'

  return (
    <svg viewBox="0 0 478 40" fill="none" className={className} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="rangeArrowGradient" x1="0" y1="0" x2="478" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff7a3d" />
          <stop offset="55%" stopColor="#ff9a3c" />
          <stop offset="100%" stopColor="#ffc266" />
        </linearGradient>
        <filter id="rangeArrowGlowWhite" x="-60%" y="-150%" width="220%" height="400%">
          <feGaussianBlur stdDeviation="2.6" />
        </filter>
        <filter id="rangeArrowGlowOrange" x="-60%" y="-150%" width="220%" height="400%">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>

      {/* soft white halo (outer) */}
      <motion.path
        d={pathD}
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#rangeArrowGlowWhite)"
        opacity="0.75"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.75, delay, ease: [0.45, 0.05, 0.15, 1] }}
      />

      {/* orange halo (inner) */}
      <motion.path
        d={pathD}
        stroke="url(#rangeArrowGradient)"
        strokeWidth="2.4"
        strokeLinecap="round"
        filter="url(#rangeArrowGlowOrange)"
        opacity="0.8"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.75, delay, ease: [0.45, 0.05, 0.15, 1] }}
      />

      {/* crisp stroke */}
      <motion.path
        d={pathD}
        stroke="url(#rangeArrowGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.75, delay, ease: [0.45, 0.05, 0.15, 1] }}
      />

      {/* arrowhead: white halo underneath for contrast against any background */}
      <motion.path
        d={headD}
        stroke="#ffffff"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#rangeArrowGlowWhite)"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.25, delay: delay + 0.65 }}
        style={{ transformOrigin: '452px 20px' }}
      />
      {/* arrowhead: solid crisp tip (not gradient-sampled, so it stays visible at any position) */}
      <motion.path
        d={headD}
        stroke="#e2521a"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.25, delay: delay + 0.65 }}
        style={{ transformOrigin: '452px 20px' }}
      />
    </svg>
  )
}
