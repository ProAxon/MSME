'use client'

import Link from 'next/link'

export default function ServicesList() {
  const services = [
    {
      title: "Branding and Identity Design",
      description: "Our creative agency is a team of professionals focused on helping your brand grow.",
      features: [
        "UX Audits",
        "Design thinking",
        "Methodologies",
        "Wireframing"
      ],
      href: "/service/branding",
      offset: true
    },
    {
      title: "Website Design and Development",
      description: "Our creative agency is a team of professionals focused on helping your brand grow.",
      features: [
        "UX Audits",
        "Design thinking",
        "Methodologies",
        "Wireframing"
      ],
      href: "/service/web-development",
      offset: false
    },
    {
      title: "Advertising and Marketing Campaigns",
      description: "Our creative agency is a team of professionals focused on helping your brand grow.",
      features: [
        "UX Audits",
        "Design thinking",
        "Methodologies",
        "Wireframing"
      ],
      href: "/service/marketing",
      offset: true
    },
    {
      title: "Creative Consulting and Development",
      description: "Our creative agency is a team of professionals focused on helping your brand grow.",
      features: [
        "UX Audits",
        "Design thinking",
        "Methodologies",
        "Wireframing"
      ],
      href: "/service/consulting",
      offset: false
    }
  ]

  return (
    <>
      {/* Banner */}
      <div className="mil-dark-bg">
        <div className="mil-inner-banner">
          <div className="mi-invert-fix">
            <div className="mil-banner-content mil-up">
              <div className="mil-animation-frame">
                <div className="mil-animation mil-position-4 mil-scale" data-value-1="6" data-value-2="1.4"></div>
              </div>
              <div className="container">
                <ul className="mil-breadcrumbs mil-light mil-mb-60">
                  <li><Link href="/">Homepage</Link></li>
                  <li><Link href="/services">Services</Link></li>
                </ul>
                <h1 className="mil-muted mil-mb-60">
                  This is <span className="mil-thin">what</span><br />
                  we do <span className="mil-thin">best</span>
                </h1>
                <a href="#services" className="mil-link mil-accent mil-arrow-place mil-down-arrow">
                  <span>Our services</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <section id="services">
          <div className="mi-invert-fix">
            <div className="container mil-p-120-60">
              <div className="row">
                <div className="col-lg-5">
                  <div className="mil-lines-place mil-light"></div>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    {services.map((service, index) => (
                      <div key={index} className="col-md-6 col-lg-6">
                        <Link 
                          href={service.href} 
                          className={`mil-service-card-lg mil-more mil-accent-cursor ${service.offset ? 'mil-offset' : ''}`}
                        >
                          <h4 className="mil-muted mil-up mil-mb-30">
                            {service.title.split(' ').map((word, i) => (
                              <span key={i}>
                                {word}
                                {i === 0 && service.title.split(' ').length > 2 ? <br /> : ''}
                                {i === 1 && service.title.split(' ').length > 3 ? <br /> : ''}
                              </span>
                            ))}
                          </h4>
                          <p className="mil-descr mil-light-soft mil-up mil-mb-30">
                            {service.description}
                          </p>
                          <ul className="mil-service-list mil-light mil-mb-30">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="mil-up">{feature}</li>
                            ))}
                          </ul>
                          <div className="mil-link mil-accent mil-arrow-place mil-up">
                            <span>Read more</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <section className="mil-soft-bg">
        <div className="container mil-p-120-120">
          <div className="row">
            <div className="col-lg-10">
              <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
                Looking to make your mark? We'll help you turn <br />
                your project into a success story.
              </span>
            </div>
          </div>
          <div className="mil-center">
            <h2 className="mil-up mil-mb-60">
              Let's make an <span className="mil-thin">impact</span><br />
              together. Ready <span className="mil-thin">when you are</span>
            </h2>
            <div className="mil-up">
              <Link href="/contact" className="mil-button mil-arrow-place">
                <span>Contact us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
