'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about">
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-xl-5">
            <div className="mil-mb-90">

              <h2 className="mil-up mil-mb-60">
              Discover Our Mission <br />
                 <span className="mil-thin">Built for MSMEs. Inspired by Indian Industry.</span>
              </h2>
              <p className="mil-up mil-mb-30">
                At our design studio, we are a collective of talented individuals ignited by our 
                We aren’t just another creative studio —
                we’re a growth partner for factories, manufacturers, and MSME innovators.
                Born from years of working inside MIDC zones, we understand how real industry runs —
                tight deadlines, skilled hands, and the need for systems that actually deliver.

              </p>

              <p className="mil-up mil-mb-30">
              Our team blends industrial insight, brand strategy, and technology
              to help small and mid-scale businesses look global, sell smarter,
              and operate digitally — without losing their local strength.
              </p>
              <p className="mil-up mil-mb-60">
              Collaboration is our machine, creativity is our fuel.
              Together, we turn manufacturing into marketing power and processes into brands that last.

              </p>

              <div className="mil-about-quote">
                <div className="mil-avatar mil-up">
                  <Image 
                    src="/img/faces/customers/2.jpg" 
                    alt="Founder" 
                    width={90} 
                    height={90}
                    className="rounded-full object-cover"
                  />
                </div>
                <h6 className="mil-quote mil-up">
                Passionately Empowering  <span className="mil-thin">MSMEs:</span>  <br />
                Turning <span className="mil-thin"> everyday industries into extraordinary stories.</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="mil-about-photo mil-mb-90">
              <div className="mil-lines-place"></div>
              <div className="mil-up mil-img-frame" style={{ paddingBottom: '160%' }}>
                <Image 
                  src="/img/photo/1.jpg" 
                  alt="Studio" 
                  fill
                  className="mil-scale object-cover" 
                  data-value-1="1" 
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
