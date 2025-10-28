'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Menu Frame */}
      <div className={`mil-menu-frame ${isMenuOpen ? 'mil-active' : ''}`}>
        {/* Frame Clone */}
        <div className="mil-frame-top">
          <Link href="/" className="mil-logo">A.</Link>
          <div className="mil-menu-btn" onClick={toggleMenu}>
            <span></span>
          </div>
        </div>
        {/* Frame Clone End */}
        
        <div className="container">
          <div className="mil-menu-content">
            <div className="row">
              <div className="col-xl-5">
                <nav className="mil-main-menu" id="swupMenu">
                  <ul>
                    <li className="mil-has-children mil-active">
                      <a href="#.">Homepage</a>
                      <ul>
                        <li><Link href="/">Landing page</Link></li>
                        <li><Link href="/personal">Personal</Link></li>
                        <li><Link href="/portfolio-slider">Portfolio slider</Link></li>
                      </ul>
                    </li>
                    <li className="mil-has-children">
                      <a href="#.">Portfolio</a>
                      <ul>
                        <li><Link href="/portfolio">Grid type 1</Link></li>
                        <li><Link href="/portfolio-2">Grid type 2</Link></li>
                        <li><Link href="/portfolio-slider">Slider</Link></li>
                      </ul>
                    </li>
                    <li className="mil-has-children">
                      <a href="#.">Services</a>
                      <ul>
                        <li><Link href="/services">Services List</Link></li>
                        <li><Link href="/service">Single service</Link></li>
                      </ul>
                    </li>
                    <li className="mil-has-children">
                      <a href="#.">Newsletter</a>
                      <ul>
                        <li><Link href="/blog">Blog List</Link></li>
                        <li><Link href="/publication">Publication</Link></li>
                      </ul>
                    </li>
                    <li className="mil-has-children">
                      <a href="#.">Other pages</a>
                      <ul>
                        <li><Link href="/team">Team</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/404">404</Link></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-xl-7">
                <div className="mil-menu-right-frame">
                  <div className="mil-animation-in">
                    <div className="mil-animation-frame">
                      <div className="mil-animation mil-position-1 mil-scale" data-value-1="2" data-value-2="2"></div>
                    </div>
                  </div>
                  <div className="mil-menu-right">
                    <div className="row">
                      <div className="col-lg-8 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Projects</h6>
                        <ul className="mil-menu-list">
                          <li><Link href="/project/interior-design" className="mil-light-soft">Interior design studio</Link></li>
                          <li><Link href="/project/home-security" className="mil-light-soft">Home Security Camera</Link></li>
                          <li><Link href="/project/kemia-skincare" className="mil-light-soft">Kemia Honest Skincare</Link></li>
                          <li><Link href="/project/cascade-lava" className="mil-light-soft">Cascade of Lava</Link></li>
                          <li><Link href="/project/air-pro" className="mil-light-soft">Air Pro by Molekule</Link></li>
                          <li><Link href="/project/tonys-chocolonely" className="mil-light-soft">Tony's Chocolonely</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Useful links</h6>
                        <ul className="mil-menu-list">
                          <li><a href="#." className="mil-light-soft">Privacy Policy</a></li>
                          <li><a href="#." className="mil-light-soft">Terms and conditions</a></li>
                          <li><a href="#." className="mil-light-soft">Cookie Policy</a></li>
                          <li><a href="#." className="mil-light-soft">Careers</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="mil-divider mil-mb-60"></div>
                    <div className="row justify-content-between">
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Canada</h6>
                        <p className="mil-light-soft mil-up">71 South Los Carneros Road, California <span className="mil-no-wrap">+51 174 705 812</span></p>
                      </div>
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Germany</h6>
                        <p className="mil-light-soft">Leehove 40, 2678 MC De Lier, Netherlands <span className="mil-no-wrap">+31 174 705 811</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
