import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Rainbow } from 'lucide-react'
import { CONTACT, NAV_LINKS } from '../data/site'
import { fadeUp, stagger, VIEWPORT } from '../lib/motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-deep text-cream">
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8"
      >
        {/* Brand */}
        <motion.div variants={fadeUp}>
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-cream/10">
              <Rainbow className="size-5" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold">Rainbow Cottages</span>
              <span className="block text-[0.65rem] font-medium tracking-[0.28em] text-cream/60 uppercase">
                Ooty
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            Your cozy home in the Queen of Hills — budget-friendly cottages
            surrounded by greenery, just 1 km from Ooty Lake.
          </p>
          <div aria-hidden className="rainbow-bar mt-5 h-1 w-20 rounded-full" />
        </motion.div>

        {/* Quick links */}
        <motion.nav variants={fadeUp} aria-label="Footer">
          <h3 className="text-xs font-semibold tracking-[0.2em] text-cream/60 uppercase">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Contact */}
        <motion.div variants={fadeUp}>
          <h3 className="text-xs font-semibold tracking-[0.2em] text-cream/60 uppercase">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-cream/50" aria-hidden />
              {CONTACT.address}
            </li>
            {CONTACT.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 transition-colors hover:text-cream"
                >
                  <Phone className="size-4 shrink-0 text-cream/50" aria-hidden />
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 transition-colors hover:text-cream"
              >
                <Mail className="size-4 shrink-0 text-cream/50" aria-hidden />
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-cream/50 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} Rainbow Cottages Ooty. All rights reserved.</p>
          <a href="https://theweblo.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cream">
            Built by <span className="font-semibold text-cream">TheWeblo</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
