'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio2Page() {
  const portfolioItems = [
    {
      id: 1,
      title: "Interior design studio",
      category: "Branding",
      date: "may 24 2023",
      image: "/img/works/1.jpg",
      slug: "interior-design-studio",
      layout: "hori"
    },
    {
      id: 2,
      title: "Home Security Camera",
      category: "Design",
      date: "may 24 2023",
      image: "/img/works/2.jpg",
      slug: "home-security-camera",
      layout: "hori",
      parallax: true
    },
    {
      id: 3,
      title: "Kemia Honest Skincare",
      category: "Photography",
      date: "may 24 2023",
      image: "/img/works/3.jpg",
      slug: "kemia-honest-skincare",
      layout: "hori"
    },
    {
      id: 4,
      title: "Furniture Design",
      category: "Design",
      date: "may 24 2023",
      image: "/img/works/4.jpg",
      slug: "furniture-design",
      layout: "hori"
    },
    {
      id: 5,
      title: "Mobile App Design",
      category: "Technology",
      date: "may 24 2023",
      image: "/img/works/5.jpg",
      slug: "mobile-app-design",
      layout: "hori"
    },
    {
      id: 6,
      title: "Brand Identity",
      category: "Branding",
      date: "may 24 2023",
      image: "/img/works/6.jpg",
      slug: "brand-identity",
      layout: "hori"
    }
  ]

  return (
    <>
      {/* banner */}
      <div className="mil-inner-banner">
        <div className="mil-banner-content mil-up">
          <div className="mil-animation-frame">
            <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="6" data-value-2="1.4"></div>
          </div>
          <div className="container">
            <ul className="mil-breadcrumbs mil-mb-60">
              <li><Link href="/">Homepage</Link></li>
              <li><Link href="/portfolio-2">Portfolio</Link></li>
            </ul>
            <h1 className="mil-mb-60">Designing a <br /> Better <span className="mil-thin">World Today</span></h1>
            <a href="#portfolio" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>Our works</span>
            </a>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* portfolio */}
      <section id="portfolio">
        <div className="container mil-portfolio mil-p-120-60">
          <div className="mil-lines-place"></div>
          <div className="mil-lines-place mil-lines-long"></div>

          <div className="row justify-content-between align-items-end">
            <div className="col-lg-6">
              <Link href="/project/interior-design-studio" className="mil-portfolio-item mil-more mil-mb-60">
                <div className="mil-cover-frame mil-hori mil-up">
                  <div className="mil-cover mil-scale" data-value-1="1.2" data-value-2="1">
                    <Image src={portfolioItems[0].image} alt="cover" width={600} height={400} />
                  </div>
                </div>
                <div className="mil-descr">
                  <div className="mil-labels mil-up mil-mb-15">
                    <div className="mil-label mil-upper mil-accent">{portfolioItems[0].category}</div>
                    <div className="mil-label mil-upper">{portfolioItems[0].date}</div>
                  </div>
                  <h4 className="mil-up">{portfolioItems[0].title}</h4>
                </div>
              </Link>
            </div>
            <div className="col-lg-5">
              <Link href="/project/home-security-camera" className="mil-portfolio-item mil-more mil-parallax mil-mb-60" data-value-1="-30" data-value-2="0">
                <div className="mil-cover-frame mil-hori mil-up">
                  <div className="mil-cover">
                    <Image src={portfolioItems[1].image} alt="cover" width={500} height={400} />
                  </div>
                </div>
                <div className="mil-descr">
                  <div className="mil-labels mil-up mil-mb-15">
                    <div className="mil-label mil-upper mil-accent">{portfolioItems[1].category}</div>
                    <div className="mil-label mil-upper">{portfolioItems[1].date}</div>
                  </div>
                  <h4 className="mil-up">{portfolioItems[1].title}</h4>
                </div>
              </Link>
            </div>
            <div className="col-lg-12">
              <Link href="/project/kemia-honest-skincare" className="mil-portfolio-item mil-more mil-mb-60">
                <div className="mil-cover-frame mil-hori mil-up">
                  <div className="mil-cover">
                    <Image src={portfolioItems[2].image} alt="cover" width={1200} height={600} />
                  </div>
                </div>
                <div className="mil-descr">
                  <div className="mil-labels mil-up mil-mb-15">
                    <div className="mil-label mil-upper mil-accent">{portfolioItems[2].category}</div>
                    <div className="mil-label mil-upper">{portfolioItems[2].date}</div>
                  </div>
                  <h4 className="mil-up">{portfolioItems[2].title}</h4>
                </div>
              </Link>
            </div>
            <div className="col-lg-5">
              <Link href="/project/furniture-design" className="mil-portfolio-item mil-more mil-mb-60">
                <div className="mil-cover-frame mil-hori mil-up">
                  <div className="mil-cover">
                    <Image src={portfolioItems[3].image} alt="cover" width={500} height={400} />
                  </div>
                </div>
                <div className="mil-descr">
                  <div className="mil-labels mil-up mil-mb-15">
                    <div className="mil-label mil-upper mil-accent">{portfolioItems[3].category}</div>
                    <div className="mil-label mil-upper">{portfolioItems[3].date}</div>
                  </div>
                  <h4 className="mil-up">{portfolioItems[3].title}</h4>
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link href="/project/mobile-app-design" className="mil-portfolio-item mil-more mil-mb-60">
                <div className="mil-cover-frame mil-hori mil-up">
                  <div className="mil-cover">
                    <Image src={portfolioItems[4].image} alt="cover" width={600} height={400} />
                  </div>
                </div>
                <div className="mil-descr">
                  <div className="mil-labels mil-up mil-mb-15">
                    <div className="mil-label mil-upper mil-accent">{portfolioItems[4].category}</div>
                    <div className="mil-label mil-upper">{portfolioItems[4].date}</div>
                  </div>
                  <h4 className="mil-up">{portfolioItems[4].title}</h4>
                </div>
              </Link>
            </div>
            <div className="col-lg-12">
              <Link href="/project/brand-identity" className="mil-portfolio-item mil-more mil-mb-60">
                <div className="mil-cover-frame mil-hori mil-up">
                  <div className="mil-cover">
                    <Image src={portfolioItems[5].image} alt="cover" width={1200} height={600} />
                  </div>
                </div>
                <div className="mil-descr">
                  <div className="mil-labels mil-up mil-mb-15">
                    <div className="mil-label mil-upper mil-accent">{portfolioItems[5].category}</div>
                    <div className="mil-label mil-upper">{portfolioItems[5].date}</div>
                  </div>
                  <h4 className="mil-up">{portfolioItems[5].title}</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* portfolio end */}
    </>
  )
}
