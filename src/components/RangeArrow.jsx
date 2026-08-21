import { motion } from 'framer-motion'

export default function RangeArrow({ inView, delay = 0, className = '' }) {
  const pathD = 'M10,52 C130,-14 348,-14 452,30'
  const headD = 'M443,18 L465,31 L441,44'

  return (
    <svg viewBox="0 0 478 58" fill="none" className={className} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="rangeArrowGradient" x1="0" y1="0" x2="478" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff7a3d" />
          <stop offset="55%" stopColor="#ff9a3c" />
          <stop offset="100%" stopColor="#ffc266" />
        </linearGradient>
        <filter id="rangeArrowGlowWhite" x="-80%" y="-200%" width="260%" height="500%">
          <feGaussianBlur stdDeviation="4.5" />
        </filter>
        <filter id="rangeArrowGlowOrange" x="-80%" y="-200%" width="260%" height="500%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>

      {/* soft white halo (outer) */}
      <motion.path
        d={pathD}
        stroke="#ffffff"
        strokeWidth="6"
        strokeLinecap="round"
        filter="url(#rangeArrowGlowWhite)"
        opacity="0.85"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.75, delay, ease: [0.45, 0.05, 0.15, 1] }}
      />

      {/* orange halo (inner) */}
      <motion.path
        d={pathD}
        stroke="url(#rangeArrowGradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
        filter="url(#rangeArrowGlowOrange)"
        opacity="0.9"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.75, delay, ease: [0.45, 0.05, 0.15, 1] }}
      />

      {/* crisp stroke */}
      <motion.path
        d={pathD}
        stroke="url(#rangeArrowGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.75, delay, ease: [0.45, 0.05, 0.15, 1] }}
      />

      {/* arrowhead: white halo underneath for contrast against any background */}
      <motion.path
        d={headD}
        stroke="#ffffff"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#rangeArrowGlowWhite)"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.25, delay: delay + 0.65 }}
        style={{ transformOrigin: '452px 30px' }}
      />
      {/* arrowhead: solid crisp tip (not gradient-sampled, so it stays visible at any position) */}
      <motion.path
        d={headD}
        stroke="#e2521a"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.25, delay: delay + 0.65 }}
        style={{ transformOrigin: '452px 30px' }}
      />
    </svg>
  )
}
