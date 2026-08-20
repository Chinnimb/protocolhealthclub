import { motion } from 'framer-motion'

const items = [
  'physician supervised',
  'Hundreds of members transformed',
  'Real labs, real results',
  'Concierge care team',
]

function Item({ t }) {
  return (
    <span className="flex shrink-0 items-center gap-3 whitespace-nowrap font-mono text-[15px] uppercase tracking-[2.2px] text-[#685a55]">
      <span className="h-1 w-1 rounded-full bg-[#e6dcd4]" />
      {t}
    </span>
  )
}

export default function TrustBar() {
  return (
    <div className="overflow-hidden border-b border-[#e6dcd4] bg-white py-5">
      <motion.div
        className="flex w-max gap-10"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <Item key={i} t={t} />
        ))}
      </motion.div>
    </div>
  )
}
