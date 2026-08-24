import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import lineImg from '../../assets/figma/getstarted/lab-panel-line.svg'
import checkSm from '../../assets/figma/getstarted/lab-panel-check-sm.svg'
import checkMd from '../../assets/figma/getstarted/lab-panel-check-md.svg'

const PREVIEW_COUNT = 3

export default function LabPanelCard({ panel, size = 'sm', selected, onSelect, delay = 0 }) {
  const [expanded, setExpanded] = useState(false)
  const cardRef = useRef(null)
  const inView = useInView(cardRef, { once: true, amount: 0.2 })
  const checkIcon = size === 'sm' ? checkSm : checkMd
  const preview = panel.categories.slice(0, PREVIEW_COUNT)
  const rest = panel.categories.slice(PREVIEW_COUNT)

  const Category = ({ cat }) => (
    <div className="mb-4 break-inside-avoid">
      <p className="mb-2 text-[13px] font-extrabold text-orange-2">{cat.name}</p>
      <div className="flex flex-col gap-1">
        {cat.items.map((item) => (
          <div key={item} className="flex items-center gap-1.5">
            <span
              className={`flex shrink-0 items-center justify-center rounded-full bg-[rgba(245,79,43,0.1)] ${
                size === 'sm' ? 'h-[10px] w-[10px]' : 'h-4 w-4'
              }`}
            >
              <img src={checkIcon} alt="" className={size === 'sm' ? 'h-[6px] w-[6px]' : 'h-[10px] w-[10px]'} />
            </span>
            <p className={`flex-1 text-[#1a1a1a] ${size === 'sm' ? 'text-[11px]' : 'text-xs'}`}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="relative">
      {/* pulsing heartbeat glow behind the card, matching the venn circles' effect */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] blur-2xl"
        style={{
          backgroundImage:
            'radial-gradient(65% 65% at 50% 42%, rgba(244,95,43,0.75) 0%, rgba(244,172,99,0.45) 55%, rgba(244,172,99,0) 78%)',
        }}
      />

      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.5, delay }}
        onClick={() => onSelect?.()}
        className={`relative flex w-full cursor-pointer flex-col justify-between rounded-[20px] border bg-white p-8 shadow-[0px_16px_32px_rgba(0,0,0,0.08)] transition-colors ${
          selected ? 'border-orange-2' : 'border-[#f4ac63]'
        }`}
      >
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold uppercase tracking-[1.5px] text-orange-2">{panel.title}</p>
          {panel.badge && (
            <span className="rounded-full bg-orange-2 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.5px] text-white">
              {panel.badge}
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed text-[#6e6e6e]">{panel.description}</p>

        <div className="flex items-center justify-between">
          <p className="text-4xl font-extrabold text-orange">{panel.price}</p>
          <button
            type="button"
            onClick={(e) => e.stopPropagation()}
            className="rounded-full border border-[#99c9d9] px-4 py-2.5 text-sm font-bold text-[#3f6673] transition-colors hover:bg-[#f0f8fa]"
          >
            View Bio markers
          </button>
        </div>

        <img src={lineImg} alt="" className="w-full" />

        <div>
          <p className="mb-4 text-[11px] font-extrabold tracking-[1px] text-orange-2">WHAT&rsquo;S TESTED:</p>

          <div className="columns-1 gap-6 sm:columns-2">
            {preview.map((cat) => (
              <Category key={cat.name} cat={cat} />
            ))}
          </div>

          <div
            className="grid transition-[grid-template-rows] duration-500 ease-in-out"
            style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
          >
            <div className="overflow-hidden">
              <div className="columns-1 gap-6 sm:columns-2">
                {rest.map((cat) => (
                  <Category key={cat.name} cat={cat} />
                ))}
              </div>
            </div>
          </div>

          {rest.length > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setExpanded((v) => !v)
              }}
              className="flex w-full items-center justify-center py-3 text-sm font-semibold text-orange-2"
            >
              {expanded ? 'View Less' : 'View More'}
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-1 inline-block"
              >
                ↓
              </motion.span>
            </button>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onSelect?.()
        }}
        className={`mt-6 flex items-center justify-center rounded-full py-4 text-xl font-extrabold tracking-[0.5px] text-white transition-shadow ${
          selected ? 'ring-2 ring-orange-2 ring-offset-2' : ''
        }`}
        style={{ backgroundImage: 'linear-gradient(90deg, rgb(244,95,43) 0%, rgb(244,172,99) 100%)' }}
      >
        {selected ? 'SELECTED ✓' : 'CONFIRM SELECTION'}
      </button>
      </motion.div>
    </div>
  )
}
