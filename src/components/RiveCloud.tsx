import { useEffect, useRef, useState } from 'react'
import { useRive } from '@rive-app/react-webgl2'

function AnimatedRive() {
  const { RiveComponent } = useRive({ src: 'https://cdn.rive.app/animations/vehicles.riv', autoplay: true })
  return <RiveComponent className="h-full w-full" aria-label="Animated journey illustration" />
}

export default function RiveCloud() {
  const root = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!root.current) return
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { rootMargin: '200px' })
    observer.observe(root.current)
    return () => observer.disconnect()
  }, [])

  return <div ref={root} className="h-full w-full">{active && <AnimatedRive />}</div>
}
