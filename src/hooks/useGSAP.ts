'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGSAP = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      // Preloader animation
      const timeline = gsap.timeline()

      timeline.to(".mil-preloader-animation", {
        opacity: 1,
      })

      timeline.fromTo(
        ".mil-animation-1 .mil-h3", 
        { y: "30px", opacity: 0 },
        { y: "0px", opacity: 1, stagger: 0.4 }
      )

      timeline.to(".mil-animation-1 .mil-h3", {
        opacity: 0,
        y: '-30',
      }, "+=.3")

      timeline.fromTo(".mil-reveal-box", 0.1, {
        opacity: 0,
      }, {
        opacity: 1,
        x: '-30',
      })

      timeline.to(".mil-reveal-box", 0.45, {
        width: "100%",
        x: 0,
      }, "+=.1")

      timeline.to(".mil-reveal-box", {
        right: "0"
      })

      timeline.to(".mil-reveal-box", 0.3, {
        width: "0%"
      })

      timeline.fromTo(".mil-animation-2 .mil-h3", {
        opacity: 0,
      }, {
        opacity: 1,
      }, "-=.5")

      timeline.to(".mil-animation-2 .mil-h3", 0.6, {
        opacity: 0,
        y: '-30'
      }, "+=.5")

      timeline.to(".mil-preloader", 0.8, {
        opacity: 0,
        ease: 'sine',
      }, "+=.2")

      timeline.fromTo(".mil-up", 0.8, {
        opacity: 0,
        y: 40,
        scale: .98,
        ease: 'sine',
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        onComplete: function () {
          const preloader = document.querySelector('.mil-preloader')
          if (preloader) {
            preloader.classList.add("mil-hidden")
          }
        },
      }, "-=1")

      // Progress bar animation
      gsap.to('.mil-progress', {
        height: '100%',
        ease: 'sine',
        scrollTrigger: {
          scrub: 0.3
        }
      })

      // Scroll animations
      const appearance = document.querySelectorAll(".mil-up")
      appearance.forEach((section) => {
        gsap.fromTo(section, {
          opacity: 0,
          y: 40,
          scale: .98,
          ease: 'sine',
        }, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: .4,
          scrollTrigger: {
            trigger: section,
            toggleActions: 'play none none reverse',
          }
        })
      })

      // Scale image animations
      const scaleImage = document.querySelectorAll(".mil-scale")
      scaleImage.forEach((section) => {
        const element = section as HTMLElement
        const value1 = element.dataset.value1 || "1"
        const value2 = element.dataset.value2 || "1.2"
        
        gsap.fromTo(section, {
          ease: 'sine',
          scale: parseFloat(value1),
        }, {
          scale: parseFloat(value2),
          scrollTrigger: {
            trigger: section,
            scrub: true,
            toggleActions: 'play none none reverse',
          }
        })
      })

      // Parallax animations
      const parallaxImage = document.querySelectorAll(".mil-parallax")
      if (window.innerWidth > 960) {
        parallaxImage.forEach((section) => {
          const element = section as HTMLElement
          const value1 = element.dataset.value1 || "0"
          const value2 = element.dataset.value2 || "0"
          
          gsap.fromTo(section, {
            ease: 'sine',
            y: parseFloat(value1),
          }, {
            y: parseFloat(value2),
            scrollTrigger: {
              trigger: section,
              scrub: true,
              toggleActions: 'play none none reverse',
            }
          })
        })
      }

      // Rotate animations
      const rotate = document.querySelectorAll(".mil-rotate")
      rotate.forEach((section) => {
        const element = section as HTMLElement
        const value = element.dataset.value || "360"
        
        gsap.fromTo(section, {
          ease: 'sine',
          rotate: 0,
        }, {
          rotate: parseFloat(value),
          scrollTrigger: {
            trigger: section,
            scrub: true,
            toggleActions: 'play none none reverse',
          }
        })
      })

      // Back to top button
      const btt = document.querySelector(".mil-back-to-top .mil-link")
      if (btt) {
        gsap.set(btt, {
          x: -30,
          opacity: 0,
        })

        gsap.to(btt, {
          x: 0,
          opacity: 1,
          ease: 'sine',
          scrollTrigger: {
            trigger: "body",
            start: "top -40%",
            end: "top -40%",
            toggleActions: "play none reverse none"
          }
        })
      }

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}
