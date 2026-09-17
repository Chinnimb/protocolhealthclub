import { ImagePlus } from 'lucide-react'

export default function ImagePlaceholder({ className = '' }) {
  return (
    <div className={`flex items-center justify-center border-2 border-dashed border-[#d9d5cf] bg-[#faf8f5] ${className}`}>
      <ImagePlus className="h-8 w-8 text-[#c4bfb7]" strokeWidth={1.5} />
    </div>
  )
}
