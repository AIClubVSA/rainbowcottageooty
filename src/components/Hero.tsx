import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { HERO_BADGES, IMAGES } from '../data/site'
import { EASE, stagger } from '../lib/motion'

const item = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
}

export default function Hero() {
  const reduce = useReducedMotion()

  // Subtle parallax — background drifts down slightly as you scroll away
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 140])
  const bgScale = useTransform(scrollY, [0, 700], [1.05, reduce ? 1.05 : 1.15])

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div aria-hidden style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-ink/45 to-ink/70"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-forest-deep/50 via-transparent to-transparent"
      />

      {/* Content */}
      <motion.div
        variants={stagger(0.14, 0.35)}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-36 pb-24 sm:px-6 lg:px-8"
      >
        <motion.p
          variants={item}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.24em] text-cream/90 uppercase backdrop-blur-sm"
        >
          <span className="rainbow-bar inline-block h-[2px] w-6 rounded-full" aria-hidden />
          Club Road · Ooty
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-5xl font-display text-5xl leading-[0.96] font-semibold text-cream sm:text-7xl lg:text-[7.8rem]"
        >
          Wake up inside the{' '}
          <span className="rainbow-text">Queen&nbsp;of&nbsp;Hills.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85 sm:text-xl"
        >
          Budget-friendly cottages just 1&nbsp;km from Ooty Lake — wrapped in
          greenery, mist and warm Nilgiri hospitality.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            animate={
              reduce
                ? undefined
                : {
                    y: [0, -6, 0],
                    transition: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
                  }
            }
            className="inline-flex items-center gap-2 rounded-full bg-wood px-7 py-3.5 text-base font-semibold text-cream shadow-xl shadow-wood/30 transition-colors hover:bg-wood-deep"
          >
            Check Availability
            <ArrowRight className="size-4" aria-hidden />
          </motion.a>

          <motion.a
            href="#rooms"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-7 py-3.5 text-base font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/20"
          >
            View Rooms
          </motion.a>
        </motion.div>

        {/* Info badges */}
        <motion.ul variants={item} className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          {HERO_BADGES.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-cream/85">
              <span className="grid size-8 place-items-center rounded-full bg-cream/15 backdrop-blur-sm">
                <Icon className="size-4" aria-hidden />
              </span>
              {label}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/70 transition-colors hover:text-cream"
      >
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <ChevronDown className="size-7" aria-hidden />
        </motion.span>
      </motion.a>
    </section>
  )
}
