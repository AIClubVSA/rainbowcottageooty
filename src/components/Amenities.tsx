import { motion } from 'framer-motion'
import { AMENITIES } from '../data/site'
import { fadeIn, stagger, VIEWPORT } from '../lib/motion'
import SectionHeading from './ui/SectionHeading'

export default function Amenities() {
  return (
    <section id="amenities" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Everything You Need"
          title="Simple comforts, thoughtfully covered"
          lead="The essentials are always included — so you can spend your energy on the hills, not the logistics."
        />

        <motion.ul
          variants={stagger(0.06, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {AMENITIES.map(({ icon: Icon, label }) => (
            <motion.li
              key={label}
              variants={fadeIn}
              whileHover={{ scale: 1.06, y: -4 }}
              transition={{ type: 'spring', stiffness: 320, damping: 18 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-forest/10 bg-white px-4 py-7 text-center shadow-sm"
            >
              <span className="grid size-12 place-items-center rounded-full bg-teal-soft text-teal transition-colors duration-300 group-hover:bg-forest group-hover:text-cream">
                <Icon className="size-5" aria-hidden />
              </span>
              <span className="text-sm leading-snug font-medium text-ink">{label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
