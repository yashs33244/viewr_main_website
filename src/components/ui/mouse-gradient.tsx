"use client"

import { useEffect, useState } from "react"

// A floating gradient that follows the mouse
export default function MouseGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isActive) setIsActive(true)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isActive])

  return (
    <div
      className="fixed w-[300px] h-[300px] rounded-full pointer-events-none z-0 opacity-40 blur-[80px] transition-opacity duration-300"
      style={{
        background: 'radial-gradient(circle, rgba(89, 72, 180, 0.4) 0%, rgba(114, 143, 211, 0.1) 70%, transparent 100%)',
        transform: `translate(${mousePosition.x - 150}px, ${mousePosition.y - 150}px)`,
        opacity: isActive ? 0.4 : 0,
      }}
    />
  )
}
