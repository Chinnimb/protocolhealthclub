import { motion } from 'framer-motion'

export default function RangeArrow({ inView, delay = 0, className = '' }) {
  const pathD = 'M10,52 C140,-8 340,-8 452,34'
  const headD = 'M444,22 L463,36 L442,55'

  return (
    <svg viewBox="0 0 478 62" fill="none" className={className} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="rangeArrowGradient" x1="0" y1="0" x2="478" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff7a3d" />
          <stop offset="55%" stopColor="#ff9a3c" />
          <stop offset="100%" stopColor="#ffc266" />
        </linearGradient>
        <filter id="rangeArrowGlow" x="-60%" y="-150%" width="220%" height="400%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* glow underlay */}
      <motion.path
        d={pathD}
        stroke="url(#rangeArrowGradient)"
        strokeWidth="5"
        strokeLinecap="round"
        filter="url(#rangeArrowGlow)"
        opacity="0.55"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.75, delay, ease: [0.45, 0.05, 0.15, 1] }}
      />

      {/* crisp stroke */}
      <motion.path
        d={pathD}
        stroke="url(#rangeArrowGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.75, delay, ease: [0.45, 0.05, 0.15, 1] }}
      />

      {/* arrowhead */}
      <motion.path
        d={headD}
        stroke="url(#rangeArrowGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#rangeArrowGlow)"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.25, delay: delay + 0.65 }}
        style={{ transformOrigin: '452px 34px' }}
      />
    </svg>
  )
}
