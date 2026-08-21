import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const Reveal = forwardRef(function Reveal(
  {
    children,
    as = 'div',
    delay = 0,
    y = 24,
    duration = 0.6,
    className = '',
    once = true,
    amount = 0.25,
    ...rest
  },
  ref
) {
  const Comp = motion[as] ?? motion.div

  return (
    <Comp
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  )
})

export default Reveal
