import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Room } from '../data/site'

export default function RoomCard({ room }: { room: Room }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }}
      whileHover={{ y: -8 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-forest/15"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={room.image}
          alt={room.name}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-ink">{room.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{room.blurb}</p>

        {/* Amenities */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {room.amenities.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full bg-forest-soft px-3 py-1 text-xs font-medium text-forest"
            >
              <Icon className="size-3.5" aria-hidden />
              {label}
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-deep"
        >
          Book Now
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
        </motion.a>
      </div>
    </motion.article>
  )
}
