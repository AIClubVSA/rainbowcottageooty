import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { TESTIMONIALS } from '../data/site'
import { EASE, stagger, VIEWPORT } from '../lib/motion'
import SectionHeading from './ui/SectionHeading'

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream-deep/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kind Words"
          title="Guests who felt at home"
        />

        <motion.div
          variants={stagger(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
              whileHover={{ y: -6 }}
              className="flex h-full flex-col rounded-2xl border border-forest/10 bg-white p-7 shadow-md shadow-forest/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-forest/12"
            >
              <span className="mb-4 grid size-10 place-items-center rounded-full bg-wood-soft text-wood">
                <Quote className="size-4" aria-hidden />
              </span>

              <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-6 border-t border-forest/10 pt-4">
                <div className="mb-2 flex gap-1 text-wood" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" aria-hidden />
                  ))}
                </div>
                <p className="font-display text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-ink-soft">{t.from}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
