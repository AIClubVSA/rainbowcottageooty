import { motion } from 'framer-motion'
import { HIGHLIGHTS, IMAGES } from '../data/site'
import { fadeUp, scaleIn, slideInLeft, slideInRight, stagger, VIEWPORT } from '../lib/motion'

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <motion.div
            variants={stagger(0.14)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold tracking-[0.22em] text-teal uppercase"
            >
              Welcome to Rainbow Cottages
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-3xl leading-tight font-semibold text-ink sm:text-4xl lg:text-[2.75rem]"
            >
              A peaceful corner of Ooty,{' '}
              <span className="rainbow-underline pb-1">made for slow mornings</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-ink-soft">
              Tucked among tall trees on Club Road, Rainbow Cottages is a
              family-run stay where the air smells of eucalyptus and the only
              alarm clock is birdsong. We’re a short stroll from Ooty Lake and
              the town’s favourite sights — yet wonderfully quiet when you
              return.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-4 text-lg leading-relaxed text-ink-soft">
              Whether you’re a couple chasing mist or a family on holiday, our
              warm wood-finished rooms, garden sit-outs and homely food make it
              easy to settle in — without stretching the budget.
            </motion.p>

            {/* Highlight cards */}
            <motion.div variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-3">
              {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
                <motion.div
                  key={title}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="rounded-2xl border border-forest/10 bg-white p-5 shadow-sm"
                >
                  <span className="mb-3 grid size-10 place-items-center rounded-xl bg-forest-soft text-forest">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-forest/20">
              <motion.img
                src={IMAGES.about}
                alt="Veranda of a Rainbow Cottage looking onto the garden"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/5]"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Floating stat chip */}
            <motion.div
              variants={slideInLeft}
              className="absolute -bottom-6 left-6 flex items-center gap-4 rounded-2xl bg-forest px-6 py-4 text-cream shadow-xl sm:left-10"
            >
              <span className="font-display text-3xl font-semibold">1&nbsp;km</span>
              <span className="max-w-28 text-xs leading-snug font-medium text-cream/80">
                from Ooty Lake &amp; the boat house
              </span>
            </motion.div>

            {/* Decorative rainbow bar */}
            <div
              aria-hidden
              className="rainbow-bar absolute -top-3 right-8 h-1.5 w-24 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
