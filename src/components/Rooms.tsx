import { motion } from 'framer-motion'
import { ROOMS } from '../data/site'
import { stagger, VIEWPORT } from '../lib/motion'
import RoomCard from './RoomCard'
import SectionHeading from './ui/SectionHeading'

export default function Rooms() {
  return (
    <section id="rooms" className="bg-cream-deep/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Stay With Us"
          title="Rooms & cottages for every kind of traveller"
          lead="From snug value rooms to a spacious four-bedded family stay — all clean, warm and looked after by our team around the clock."
        />

        <motion.div
          variants={stagger(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {ROOMS.map((room) => (
            <RoomCard key={room.name} room={room} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
