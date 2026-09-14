import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      let cancelled = false
      const scrollToHash = (attempt = 0) => {
        if (cancelled) return
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 100
          window.scrollTo({ top, behavior: 'smooth' })
        } else if (attempt < 10) {
          setTimeout(() => scrollToHash(attempt + 1), 50)
        }
      }
      // Let any closing menus / layout shifts settle before measuring.
      const timer = setTimeout(() => scrollToHash(), 150)
      return () => {
        cancelled = true
        clearTimeout(timer)
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
