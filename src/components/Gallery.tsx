import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Expand, X } from 'lucide-react'
import { GALLERY } from '../data/site'
import { EASE, stagger, VIEWPORT } from '../lib/motion'
import SectionHeading from './ui/SectionHeading'

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const close = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, close])

  return (
    <section id="gallery" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="A Little Preview"
          title="Mist, gardens and cottage corners"
          lead="A glimpse of the property and the hills that surround it."
        />

        <motion.div
          variants={stagger(0.07, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {GALLERY.map((photo, i) => (
            <motion.button
              key={photo.src}
              type="button"
              onClick={() => setLightbox(i)}
              variants={{
                hidden: { opacity: 0, y: 26, scale: 0.97 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
              }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-cream focus-visible:outline-none"
              aria-label={`View photo: ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-forest-deep/0 transition-colors duration-300 group-hover:bg-forest-deep/35"
              />
              <span
                aria-hidden
                className="absolute right-3 bottom-3 grid size-9 translate-y-2 place-items-center rounded-full bg-cream/90 text-forest opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <Expand className="size-4" />
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={GALLERY[lightbox].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            className="fixed inset-0 z-[60] grid place-items-center bg-ink/85 p-4 backdrop-blur-sm"
          >
            <motion.img
              key={GALLERY[lightbox].src}
              src={GALLERY[lightbox].src.replace('w=900', 'w=1600')}
              alt={GALLERY[lightbox].alt}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-5xl rounded-2xl object-contain shadow-2xl"
            />
            <button
              type="button"
              onClick={close}
              aria-label="Close photo"
              className="absolute top-5 right-5 grid size-11 place-items-center rounded-full bg-cream/15 text-cream transition-colors hover:bg-cream/30"
            >
              <X className="size-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
