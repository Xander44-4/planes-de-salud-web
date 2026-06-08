"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface LazySectionProps {
  children: React.ReactNode
  className?: string
}

export function LazySection({ children, className }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("lazy-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div id="lazy-section" className={className}>
      {isVisible ? children : <div className="h-96 bg-gray-100 animate-pulse" />}
    </div>
  )
}
