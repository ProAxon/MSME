'use client'

import { useEffect, useRef } from 'react'

export default function ProgressBar() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const progress = progressRef.current
    if (!progress) return

    const updateProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercent = (scrollTop / scrollHeight) * 100
      progress.style.height = scrollPercent + '%'
    }

    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="mil-progress-track">
      <div className="mil-progress" ref={progressRef}></div>
    </div>
  )
}
