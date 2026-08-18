import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'
import { CONTACT, IMAGES, NEARBY } from '../data/site'
import { fadeUp, slideInLeft, slideInRight, stagger, VIEWPORT } from '../lib/motion'
import SectionHeading from './ui/SectionHeading'

export default function Location() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CONTACT.mapQuery,
  )}`

  return (
    <section id="location" className="bg-cream-deep/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Find Us"
          title="Minutes from everything you came to see"
          align="left"
        />

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: address + nearby list */}
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <span className="mt-1 grid size-11 shrink-0 place-items-center rounded-xl bg-forest text-cream">
                <MapPin className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">Rainbow Cottages Ooty</h3>
                <p className="mt-1 leading-relaxed text-ink-soft">{CONTACT.address}</p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                  Set just off Mysore Main Road near Hill Bunk — close enough to
                  walk into town, far enough to hear the wind in the trees.
                </p>
              </div>
            </motion.div>

            {/* Nearby attractions */}
            <motion.ul variants={stagger(0.1)} className="mt-10 space-y-3">
              {NEARBY.map((place, i) => (
                <motion.li
                  key={place.name}
                  variants={{
                    hidden: { opacity: 0, x: -24 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="flex items-center justify-between gap-4 rounded-xl border border-forest/10 bg-white px-5 py-3.5 shadow-sm"
                >
                  <span className="flex items-center gap-3 text-[0.95rem] font-medium text-ink">
                    <span className="grid size-7 place-items-center rounded-full bg-wood-soft font-display text-xs font-semibold text-wood">
                      {i + 1}
                    </span>
                    {place.name}
                  </span>
                  <span className="shrink-0 text-sm font-semibold text-teal">{place.distance}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-8">
              <motion.a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream shadow-md shadow-forest/25 transition-colors hover:bg-forest-deep"
              >
                <Navigation className="size-4" aria-hidden />
                Open in Google Maps
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: map-style image card */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative min-h-80 overflow-hidden rounded-3xl shadow-xl shadow-forest/15"
          >
            <motion.img
              src={IMAGES.location}
              alt="The blue-green Nilgiri hills around Ooty"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent"
            />

            {/* Pin card */}
            <motion.div
              variants={slideInLeft}
              className="absolute bottom-6 left-6 flex max-w-xs items-center gap-3 rounded-2xl bg-cream/95 p-4 shadow-lg backdrop-blur-sm"
            >
              <span className="grid size-10 shrink-0 animate-pulse place-items-center rounded-full bg-wood text-cream">
                <MapPin className="size-5" aria-hidden />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-ink">We’re right here</p>
                <p className="text-xs leading-snug text-ink-soft">
                  Club Road, near Hill Bunk · Ooty 643001
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
