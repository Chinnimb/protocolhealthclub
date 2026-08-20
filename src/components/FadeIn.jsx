import { motion } from 'framer-motion'

export default function FadeIn({
  children,
  as = 'span',
  delay = 0.15,
  duration = 1.1,
  className = '',
  once = true,
  amount = 0.4,
}) {
  const Comp = motion[as] ?? motion.span

  return (
    <Comp
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </Comp>
  )
}
