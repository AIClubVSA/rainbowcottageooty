import { motion } from 'framer-motion'
import { fadeUp, stagger, VIEWPORT } from '../../lib/motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  lead?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <motion.div
      className={`flex flex-col gap-4 ${alignCls}`}
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      <motion.span
        variants={fadeUp}
        className={`text-xs font-semibold tracking-[0.22em] uppercase ${
          dark ? 'text-teal-soft/90' : 'text-teal'
        }`}
      >
        {eyebrow}
      </motion.span>

      <motion.h2
        variants={fadeUp}
        className={`font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold ${
          dark ? 'text-cream' : 'text-ink'
        }`}
      >
        {title}
      </motion.h2>

      {/* Animated underline — grows from the center */}
      <motion.span
        aria-hidden
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
        }}
        className="rainbow-bar h-[3px] w-16 origin-center rounded-full"
      />

      {lead && (
        <motion.p
          variants={fadeUp}
          className={`max-w-2xl text-base sm:text-lg leading-relaxed ${
            dark ? 'text-cream/75' : 'text-ink-soft'
          }`}
        >
          {lead}
        </motion.p>
      )}
    </motion.div>
  )
}
