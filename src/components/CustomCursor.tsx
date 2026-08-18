import { useEffect, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [spring, api] = useSpring(() => ({ x: -40, y: -40, scale: 1 }))

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const move = (event: PointerEvent) => {
      setVisible(true)
      api.start({ x: event.clientX, y: event.clientY })
    }
    const over = (event: PointerEvent) => {
      const interactive = (event.target as Element).closest('a, button, input, select, [data-cursor]')
      setHovering(Boolean(interactive))
      api.start({ scale: interactive ? 1.8 : 1 })
    }
    const leave = () => setVisible(false)
    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerover', over, { passive: true })
    document.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', over)
      document.removeEventListener('mouseleave', leave)
    }
  }, [api])

  return <animated.div aria-hidden className={`custom-cursor ${visible ? 'is-visible' : ''} ${hovering ? 'is-hovering' : ''}`} style={{ left: spring.x, top: spring.y, scale: spring.scale }} />
}
