'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PortfolioGrid() {
  const portfolioItems = [
    {
      title: "Interior design studio",
      category: "Branding",
      date: "may 24 2023",
      image: "/img/works/1.jpg",
      href: "/project/interior-design",
      layout: "vert",
      parallax: false
    },
    {
      title: "Home Security Camera",
      category: "Design",
      date: "may 24 2023",
      image: "/img/works/2.jpg",
      href: "/project/home-security",
      layout: "hori",
      parallax: true
    },
    {
      title: "Kemia Honest Skincare",
      category: "Design",
      date: "may 24 2023",
      image: "/img/works/3.jpg",
      href: "/project/kemia-skincare",
      layout: "hori",
      parallax: true
    },
    {
      title: "Cascade of Lava",
      category: "Design",
      date: "may 24 2023",
      image: "/img/works/4.jpg",
      href: "/project/cascade-lava",
      layout: "vert",
      parallax: false
    },
    {
      title: "Air Pro by Molekule",
      category: "Design",
      date: "may 24 2023",
      image: "/img/works/5.jpg",
      href: "/project/air-pro",
      layout: "hori",
      parallax: true
    },
    {
      title: "Tony's Chocolonely",
      category: "Design",
      date: "may 24 2023",
      image: "/img/works/6.jpg",
      href: "/project/tonys-chocolonely",
      layout: "vert",
      parallax: false
    }
  ]

  return (
    <>
      {/* Banner */}
      <div className="mil-inner-banner">
        <div className="mil-banner-content mil-up">
          <div className="mil-animation-frame">
            <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="6" data-value-2="1.4"></div>
          </div>
          <div className="container">
            <ul className="mil-breadcrumbs mil-mb-60">
              <li><Link href="/">Homepage</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
            </ul>
            <h1 className="mil-mb-60">
              Designing a <br />
              Better <span className="mil-thin">World Today</span>
            </h1>
            <a href="#portfolio" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>Our works</span>
            </a>
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <section id="portfolio">
        <div className="container mil-portfolio mil-p-120-60">
          <div className="mil-lines-place"></div>
          <div className="mil-lines-place mil-lines-long"></div>

          <div className="row justify-content-between align-items-center">
            {portfolioItems.map((item, index) => (
              <div key={index} className={index === 0 ? "col-lg-5" : "col-lg-6"}>
                <Link 
                  href={item.href} 
                  className={`mil-portfolio-item mil-more mil-mb-60 ${item.parallax ? 'mil-parallax' : ''}`}
                  data-value-1={item.parallax ? "60" : undefined}
                  data-value-2={item.parallax ? "-60" : undefined}
                >
                  <div className={`mil-cover-frame mil-${item.layout} mil-up`}>
                    <div className="mil-cover">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="mil-descr">
                    <div className="mil-labels mil-up mil-mb-15">
                      <div className="mil-label mil-upper mil-accent">{item.category}</div>
                      <div className="mil-label mil-upper">{item.date}</div>
                    </div>
                    <h4 className="mil-up">{item.title}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
