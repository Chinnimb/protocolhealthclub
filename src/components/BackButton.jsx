import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'

export default function BackButton({ fallback, className = '' }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    if (location.key === 'default') {
      navigate(fallback)
    } else {
      navigate(-1)
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{ x: -2 }}
      className={`flex w-fit items-center gap-1 text-sm font-medium text-[#6e6e6e] transition-colors hover:text-ink-2 ${className}`}
    >
      <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
      Back
    </motion.button>
  )
}
