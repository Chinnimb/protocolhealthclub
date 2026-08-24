import footerLogo1 from '../assets/figma/footer-logo-part1.svg'
import footerLogo2 from '../assets/figma/footer-logo-part2.svg'
import footerLogo3 from '../assets/figma/footer-logo-part3.svg'

export default function Footer() {
  return (
    <footer className="bg-navy py-4">
      <div className="flex flex-col items-center justify-center px-6 py-6">
        <div className="relative aspect-[382/69] w-full max-w-[280px] sm:max-w-[382px]">
          <img src={footerLogo1} alt="" className="absolute left-0 top-0 h-full" />
          <img src={footerLogo2} alt="Protocol" className="absolute left-[25.65%] top-0 h-full" />
          <img src={footerLogo3} alt="" className="absolute left-[56.54%] top-0 h-[76.81%]" />
        </div>
      </div>

      <div className="border-t border-white/10 px-10 py-6">
        <div className="flex w-full flex-col items-center justify-between gap-3 text-xs text-white/80 md:flex-row">
          <p className="uppercase tracking-[1px]">© Copyright Protocol Health 2026, All Rights Reserved</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-white">Terms Of Use</a>
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
