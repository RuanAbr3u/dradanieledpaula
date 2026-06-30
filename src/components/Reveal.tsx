import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from 'react'

type RevealProps = {
  as?: 'div' | 'section' | 'article' | 'li'
  children: ReactNode
  className?: string
  delay?: number
  id?: string
}

export default function Reveal({
  as: Component = 'div',
  children,
  className = '',
  delay = 0,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <Component
      ref={ref as never}
      id={id}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Component>
  )
}
