import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, Rainbow, X } from 'lucide-react'
import { CONTACT, NAV_LINKS } from '../data/site'
import { EASE } from '../lib/motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
      className="pointer-events-none fixed inset-x-0 top-4 z-50 px-3"
    >
      <nav
        aria-label="Primary"
        className={`pointer-events-auto mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border px-4 shadow-2xl transition-all duration-500 sm:px-6 ${solid ? 'border-forest/10 bg-cream/92 shadow-forest/10 backdrop-blur-xl' : 'border-cream/20 bg-ink/15 shadow-black/10 backdrop-blur-md'}`}
      >
        {/* Brand */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span
            className={`grid size-9 place-items-center rounded-xl transition-colors ${
              solid ? 'bg-forest text-cream' : 'bg-cream/15 text-cream backdrop-blur-sm'
            }`}
          >
            <Rainbow className="size-5" aria-hidden />
          </span>
          <span className="leading-tight">
            <span
              className={`block font-display text-base font-semibold sm:text-lg ${
                solid ? 'text-forest' : 'text-cream'
              }`}
            >
              Rainbow Cottages
            </span>
            <span
              className={`block text-[0.65rem] font-medium tracking-[0.28em] uppercase ${
                solid ? 'text-wood' : 'text-cream/70'
              }`}
            >
              Ooty
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-teal ${
                  solid ? 'text-ink' : 'text-cream/90 hover:text-cream'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${CONTACT.phones[0].replace(/\s/g, '')}`}
            className={`hidden items-center gap-2 text-sm font-semibold sm:flex ${
              solid ? 'text-forest' : 'text-cream'
            }`}
          >
            <Phone className="size-4" aria-hidden />
            {CONTACT.phones[0]}
          </a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="hidden rounded-full bg-wood px-5 py-2.5 text-sm font-semibold text-cream shadow-md shadow-wood/25 transition-colors hover:bg-wood-deep lg:inline-flex"
          >
            Book Now
          </motion.a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className={`grid size-10 place-items-center rounded-lg lg:hidden ${
              solid ? 'text-forest hover:bg-forest-soft' : 'text-cream hover:bg-cream/15'
            }`}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden bg-cream/95 backdrop-blur-md lg:hidden"
          >
            <ul className="space-y-1 px-4 pt-2 pb-5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-ink hover:bg-forest-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-wood px-5 py-3 text-center text-sm font-semibold text-cream"
                >
                  Book Your Stay
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
