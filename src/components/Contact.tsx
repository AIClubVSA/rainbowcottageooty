import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Mail, Phone } from 'lucide-react'
import { CONTACT, IMAGES } from '../data/site'
import { fadeUp, stagger, VIEWPORT } from '../lib/motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // No backend wired up — confirm visually and let the owner integrate later.
    setSent(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background */}
      <img
        src={IMAGES.cta}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-forest-deep/85" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/30"
      />

      <motion.div
        variants={stagger(0.13)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6"
      >
        <motion.span
          variants={fadeUp}
          className="text-xs font-semibold tracking-[0.22em] text-teal-soft uppercase"
        >
          Book Direct & Save
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="mt-4 font-display text-3xl leading-tight font-semibold text-cream sm:text-5xl"
        >
          Ready for a peaceful stay in Ooty?
        </motion.h2>

        <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-lg text-cream/80">
          Call us for the best rates, or send a quick enquiry and we’ll get back
          to you within the hour.
        </motion.p>

        {/* Contact chips */}
        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap justify-center gap-3">
          {CONTACT.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-5 py-2.5 text-sm font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/20"
            >
              <Phone className="size-4" aria-hidden />
              {phone}
            </a>
          ))}
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-5 py-2.5 text-sm font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/20"
          >
            <Mail className="size-4" aria-hidden />
            {CONTACT.email}
          </a>
        </motion.div>

        {/* Booking form */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-12 max-w-2xl rounded-3xl bg-cream p-6 text-left shadow-2xl sm:p-8"
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 py-8 text-center"
            >
              <CheckCircle2 className="size-12 text-forest" aria-hidden />
              <h3 className="font-display text-xl font-semibold text-ink">Enquiry sent!</h3>
              <p className="max-w-sm text-sm text-ink-soft">
                Thanks — we’ve noted your dates and will confirm availability
                shortly. Prefer to talk? Call {CONTACT.phones[0]}.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-ink">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-forest focus:ring-2 focus:ring-forest/20 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-ink">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 …"
                  className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-forest focus:ring-2 focus:ring-forest/20 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="checkin" className="mb-1.5 block text-xs font-semibold text-ink">
                  Check-in
                </label>
                <input
                  id="checkin"
                  name="checkin"
                  type="date"
                  required
                  className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-ink focus:border-forest focus:ring-2 focus:ring-forest/20 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="nights" className="mb-1.5 block text-xs font-semibold text-ink">
                  Nights
                </label>
                <select
                  id="nights"
                  name="nights"
                  defaultValue="2"
                  className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-ink focus:border-forest focus:ring-2 focus:ring-forest/20 focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'night' : 'nights'}
                    </option>
                  ))}
                </select>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-wood px-7 py-3.5 text-base font-semibold text-cream shadow-lg shadow-wood/30 transition-colors hover:bg-wood-deep sm:col-span-2"
              >
                Book Your Stay
                <ArrowRight className="size-4" aria-hidden />
              </motion.button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}
