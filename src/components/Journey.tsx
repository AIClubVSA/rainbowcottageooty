import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import RiveCloud from './RiveCloud'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

function Bus() {
  return (
    <svg viewBox="0 0 240 150" role="img" aria-label="A little bus travelling to Rainbow Cottages" className="h-full w-full">
      <rect x="18" y="34" width="204" height="86" rx="24" fill="#f6b82e" />
      <path d="M38 34h142c24 0 42 19 42 42v5H18V54c0-11 9-20 20-20Z" fill="#f8cc61" />
      <rect x="39" y="48" width="44" height="30" rx="7" fill="#bce3df" />
      <rect x="91" y="48" width="44" height="30" rx="7" fill="#bce3df" />
      <rect x="143" y="48" width="51" height="30" rx="7" fill="#bce3df" />
      <path d="M56 42c7-16 23-25 40-25h40c16 0 31 9 39 25" fill="none" stroke="#f6b82e" strokeWidth="9" />
      <circle cx="65" cy="122" r="17" fill="#18392f" /><circle cx="65" cy="122" r="7" fill="#f8f3e8" />
      <circle cx="179" cy="122" r="17" fill="#18392f" /><circle cx="179" cy="122" r="7" fill="#f8f3e8" />
      <circle cx="206" cy="96" r="6" fill="#fff4bd" />
      <path d="M105 94h31" stroke="#18392f" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

export default function Journey() {
  const root = useRef<HTMLElement>(null)
  const bus = useRef<HTMLDivElement>(null)
  const path = useRef<SVGPathElement>(null)
  const destination = useRef<HTMLDivElement>(null)
  const intro = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!root.current || !bus.current || !path.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const context = gsap.context(() => {
      const journeyPath = path.current!
      gsap.set(destination.current, { opacity: 0, y: 30 })
      gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: 1.1 } })
        .to(intro.current, { opacity: 0, y: -80, duration: 0.8 })
        .to(bus.current, { scale: 5.2, x: '-24vw', borderRadius: '0%', duration: 1.2, ease: 'power2.inOut' }, '<')
        .to(bus.current, { scale: 0.42, x: 0, borderRadius: '50%', duration: 0.8, ease: 'power3.inOut' })
        .to(bus.current, { motionPath: { path: journeyPath, align: journeyPath, alignOrigin: [0.5, 0.5], autoRotate: true }, duration: 3.8, ease: 'none' })
        .to(destination.current, { opacity: 1, y: 0, duration: 0.7 })
    }, root)
    return () => context.revert()
  }, [])

  return (
    <section ref={root} className="journey relative h-[520vh] bg-[#153a30] text-cream" aria-label="Your journey to Rainbow Cottages">
      <div className="sticky top-0 h-svh overflow-hidden">
        <div className="absolute bottom-4 left-4 h-64 w-64 opacity-20 sm:h-96 sm:w-96"><RiveCloud /></div>
        <div ref={intro} className="absolute inset-x-5 top-[18%] z-10 mx-auto max-w-5xl sm:top-[22%]">
          <p className="text-xs font-bold tracking-[0.28em] text-[#f6b82e] uppercase">The road to Ooty</p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">Every good stay starts with a little journey.</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg">Follow the yellow bus through the bends. The mist is lifting, the kettle is on, and your room is waiting.</p>
        </div>

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden>
          <path ref={path} d="M890 180 C1050 260 1050 390 845 400 C610 410 520 300 355 380 C145 485 275 650 565 615 C780 590 885 665 940 735" fill="none" stroke="#f8f3e8" strokeOpacity=".38" strokeWidth="5" strokeDasharray="12 14" strokeLinecap="round" />
        </svg>

        <div ref={bus} className="absolute top-[62%] right-[5%] z-20 h-32 w-44 overflow-hidden bg-[#f8f3e8] p-2 shadow-2xl sm:top-[21%] sm:right-[8%] sm:h-40 sm:w-60" data-cursor="journey"><Bus /></div>

        <motion.div ref={destination} className="absolute right-[7%] bottom-[4%] z-30 max-w-sm rounded-[2rem] bg-[#f8f3e8] p-6 text-[#153a30] shadow-2xl sm:right-[12%] sm:bottom-[6%] sm:p-8">
          <MapPin className="mb-5 size-8 text-[#db5d3f]" aria-hidden />
          <p className="text-xs font-bold tracking-[0.24em] uppercase">Club Road, Ooty</p>
          <h3 className="mt-2 font-display text-3xl leading-tight sm:text-4xl">You have reached your destination!</h3>
          <a href="#contact" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#153a30] px-5 text-sm font-semibold text-white">Book your stay</a>
        </motion.div>
      </div>
    </section>
  )
}
