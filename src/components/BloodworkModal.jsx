import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

export default function BloodworkModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[520px] rounded-[24px] bg-white px-8 py-12 text-center shadow-[0px_20px_60px_rgba(0,0,0,0.3)] md:px-12"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-extrabold text-[#161b1f] md:text-[32px]">Do You Have Bloodwork?</h2>
        <p className="mx-auto mt-5 max-w-[380px] text-base text-[#6b6359]">
          (Have you had your bloodwork done in the last 6 months and able to provide your results to our team?)
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onClose}
            className="rounded-full border border-ink/15 px-9 py-3 text-lg font-bold text-[#161b1f]"
          >
            No
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onClose}
            className="rounded-full border border-ink/15 px-9 py-3 text-lg font-bold text-[#161b1f]"
          >
            Yes
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
