'use client'

import Image from 'next/image'

export default function Partners() {

  const partners = [
    { image: "/img/partners/accrete.jpeg", width: 250 },
    { image: "/img/partners/kirdak.jpeg", width: 250 },
    { image: "/img/partners/sanman.jpeg", width: 250 },
    { image: "/img/partners/setonsite.jpeg", width: 250 },
    { image: "/img/partners/shubhneel.jpeg", width: 250 },
    { image: "/img/partners/tool-tech-toolings.jpeg", width: 250 }
  ]

  // The main.js file already handles the infinite scroll initialization
  // No need to initialize Swiper here as it's handled globally

  return (
    <div className="mil-soft-bg">
      <div className="container mil-p-0-120">
        <div className="swiper-container mil-infinite-show mil-up">
          <div className="swiper-wrapper">
            {partners.map((partner, index) => (
              <div key={index} className="swiper-slide">
                <a href="#." className="mil-partner-frame" style={{ width: `${partner.width}px` }}>
                  <Image 
                    src={partner.image} 
                    alt="Partner logo" 
                    width={partner.width} 
                    height={40}
                    className="w-full h-auto"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
