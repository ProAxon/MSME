'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: "⁠Branding & Identity Design",
      description: "From factory gates to business cards — we make your brand look global.Logos, stationery, catalogs, company profiles, packaging, and signages that reflect precision and trust.",
      href: "/service"
    },
    {
      title: "Website & Digital Presence",
      description: "Because even the best machines need visibility. Industrial websites, Google Business optimization, SEO, and social media that attract real B2B inquiries.",
      href: "/service"
    },
    {
      title: "Films & Photography",
      description: "Show your story — don’t just tell it. Factory documentaries, product shoots, drone films, and process visuals that make buyers believe in your scale.",
      href: "/service"
    },
    {
      title: "⁠Marketing & Strategy Consultation",
      description: "Industrial marketing designed for the real world. Positioning, vendor readiness, content strategy, exhibition support, and lead-generation plans tailored for MSMEs.",
      href: "/service"
    }
  ]

  return (
    <section className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="mil-animation-frame">
          <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{ top: '300px', right: '-100px' }}></div>
          <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{ left: '150px' }}></div>
        </div>
        <div className="container mil-p-120-0">
          <div className="mil-mb-120">
            <div className="row">
              <div className="col-lg-10">

                <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up">
                Professionals focused on helping MSMEs and MIDC industries build strong brands,<br />
                digital systems, and automation that drive measurable results.
                </span>
              </div>
            </div>


            <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
              <span className="mil-text-image">
                <Image src="/img/photo/2.jpg" alt="team" width={250} height={80} className="object-cover" />
              </span>
              <h2 className="mil-h1 mil-muted mil-center">Smart <span className="mil-thin">Solutions</span></h2>
            </div>
            <div className="mil-complex-text justify-content-center mil-up">
              <h2 className="mil-h1 mil-muted mil-center">for <span className="mil-thin">Industrial Growth.</span></h2>
              <Link href="/services" className="mil-services-button mil-button mil-arrow-place">
                <span>What we do</span>
              </Link>
            </div>
          </div>

          <div className="row mil-services-grid m-0">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-3 mil-services-grid-item p-0">
                <Link href={service.href} className="mil-service-card-sm mil-up">
                  <h5 className="mil-muted mil-mb-30" dangerouslySetInnerHTML={{ __html: service.title.replace(' ', ' <br>') }}></h5>
                  <p className="mil-light-soft mil-mb-30">{service.description}</p>
                  <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
