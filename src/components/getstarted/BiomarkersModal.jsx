import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronUp, ChevronDown } from 'lucide-react'

function CategoryRow({ icon: Icon, name, items }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="rounded-xl border border-[#e5e1db] px-4 py-3">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-2 text-white">
            <Icon className="h-4 w-4" />
          </span>
          <p className="font-semibold text-[#1a1a1a]">{name}</p>
        </div>
        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-[#8a8a8a]" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-[#8a8a8a]" />
        )}
      </button>
      {open && <p className="mt-2 pl-12 text-sm leading-relaxed text-[#6e6e6e]">{items}</p>}
    </div>
  )
}

export default function BiomarkersModal({ open, onClose, title, subtitle, groups, onConfirm }) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[90vh] w-full max-w-[480px] flex-col overflow-hidden rounded-[24px] bg-cream shadow-[0px_20px_60px_rgba(0,0,0,0.3)]"
          >
            <div className="flex items-start justify-between gap-4 px-6 pt-6 md:px-8 md:pt-8">
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a1a]">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#6e6e6e]">{subtitle}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f0ede8] text-[#1a1a1a] transition-colors hover:bg-[#e5e1db]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 border-t border-[#e5e1db]" />

            <div className="flex flex-col gap-3 overflow-y-auto px-6 py-5 md:px-8">
              {groups.map((g) => (
                <CategoryRow key={g.name} icon={g.icon} name={g.name} items={g.items} />
              ))}
            </div>

            <div className="border-t border-[#e5e1db] px-6 py-6 md:px-8">
              <p className="mb-4 text-center text-xs text-[#8a8a8a]">
                Exact markers may vary based on panel availability and clinical review.
              </p>
              <button
                type="button"
                onClick={onConfirm}
                className="flex w-full items-center justify-center rounded-full py-4 text-lg font-extrabold tracking-[0.5px] text-white"
                style={{ backgroundImage: 'linear-gradient(90deg, rgb(244,95,43) 0%, rgb(244,172,99) 100%)' }}
              >
                CONFIRM SELECTION
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
