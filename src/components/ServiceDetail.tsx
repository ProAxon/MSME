'use client'

import { useState } from 'react'
import Link from 'next/link'

interface ServiceDetailProps {
  title?: string
  description?: string
  features?: string[]
}

export default function ServiceDetail({ 
  title = "Website Design and Development",
  description = "At our agency, we have a unique approach to web design and development. We believe in creating websites that not only look great but also perform well in terms of user experience, functionality, and search engine optimization.",
  features = ["UX Audits", "Design thinking", "Wireframing", "Aesthetics", "Methodologies"]
}: ServiceDetailProps) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const accordionItems = features.map(feature => ({
    title: feature,
    content: getFeatureContent(feature)
  }))

  function getFeatureContent(feature: string): string {
    const contentMap: { [key: string]: string } = {
      "UX Audits": "A UX audit is a service that evaluates the user experience (UX) of a website. It involves analyzing the website's design, functionality, and content to identify areas of improvement that can enhance the user's overall experience. During a UX audit, a team of UX experts will conduct a thorough review of the website and provide a comprehensive report that outlines specific recommendations for improving the website's usability, accessibility, and overall user experience.",
      "Design thinking": "Design thinking is a problem-solving approach that emphasizes empathy, creativity, and collaboration. It involves understanding the needs and perspectives of users, identifying and defining the problem, generating multiple possible solutions, prototyping and testing those solutions, and iterating based on feedback. Design thinking encourages a human-centered approach to innovation and is often used in fields such as product design, user experience (UX) design, and business strategy to create user-centric and innovative solutions.",
      "Wireframing": "Wireframing is a vital step in web design where a visual representation of a website's structure is created. It focuses on layout and user experience, using basic shapes and lines to outline elements like headers, menus, and content sections. Wireframes establish the website's architecture and functionality, facilitating communication between designers, developers, and clients.",
      "Aesthetics": "Aesthetics in web design focus on the visual appeal of a website, incorporating elements like colors, typography, images, and layout. It aims to create an engaging and visually pleasing user experience that reflects the brand identity and purpose of the website. A well-designed aesthetic balances visual appeal with functionality, leaving a lasting impression on users.",
      "Methodologies": "Our proven methodologies ensure efficient project delivery and exceptional results. We follow industry best practices and agile development processes to create scalable, maintainable, and high-performance web solutions. Our approach combines technical expertise with creative innovation to deliver projects that exceed client expectations.",
      "Logo Design & Brand Identity": "Creating memorable and impactful logos that represent your brand's essence. We develop comprehensive brand identities that include logo variations, color palettes, typography, and visual guidelines that ensure consistency across all touchpoints.",
      "Brand Guidelines & Style Guides": "Comprehensive brand guidelines that define how your brand should be represented across all mediums. This includes logo usage, color specifications, typography rules, spacing guidelines, and examples of proper brand application.",
      "Visual Identity Systems": "Complete visual identity systems that provide a cohesive brand experience. This includes business cards, letterheads, social media templates, and other branded materials that maintain visual consistency.",
      "Brand Strategy & Positioning": "Strategic brand positioning that differentiates your business in the marketplace. We help define your brand's unique value proposition, target audience, and messaging strategy to create a compelling brand story.",
      "Responsive Web Design": "Mobile-first responsive design that ensures your website looks and functions perfectly across all devices and screen sizes. We create fluid layouts that adapt seamlessly to different viewports.",
      "Custom Web Development": "Tailored web development solutions built with modern technologies and best practices. We create fast, secure, and scalable websites that meet your specific business requirements.",
      "E-commerce Solutions": "Complete e-commerce platforms that enable online sales and business growth. We integrate payment gateways, inventory management, and order processing systems for seamless online transactions.",
      "SEO Optimization": "Search engine optimization strategies that improve your website's visibility and ranking in search results. We implement technical SEO, content optimization, and performance improvements to drive organic traffic.",
      "Digital Marketing Strategy": "Comprehensive digital marketing strategies that align with your business goals. We develop multi-channel campaigns that reach your target audience and drive conversions across various digital platforms.",
      "Social Media Campaigns": "Engaging social media campaigns that build brand awareness and community engagement. We create content strategies, manage social media accounts, and run targeted advertising campaigns.",
      "Content Marketing": "Strategic content creation that educates, engages, and converts your audience. We develop content calendars, create blog posts, videos, and other materials that establish thought leadership and drive traffic.",
      "Performance Analytics": "Data-driven insights and analytics that measure campaign performance and ROI. We track key metrics, analyze user behavior, and provide actionable recommendations for continuous improvement.",
      "Creative Strategy": "Strategic creative direction that aligns with your business objectives. We develop creative concepts and visual strategies that effectively communicate your brand message and engage your target audience.",
      "Brand Consulting": "Expert brand consulting services that help you define and refine your brand strategy. We provide guidance on brand positioning, messaging, and visual identity to strengthen your market presence.",
      "Design Systems": "Comprehensive design systems that ensure consistency and efficiency across all brand touchpoints. We create reusable components, style guides, and design patterns that streamline the creative process.",
      "Creative Direction": "Artistic and strategic creative direction that brings your brand vision to life. We oversee the creative process from concept to execution, ensuring all creative work aligns with your brand goals."
    }
    
    return contentMap[feature] || "Our expert team delivers exceptional results in this area, combining creativity with technical expertise to exceed your expectations."
  }

  const pricingPlans = [
    {
      name: "Basic",
      price: "$2,500",
      period: "per project",
      features: [
        "Responsive Design",
        "5 Pages",
        "Contact Form",
        "SEO Optimization",
        "1 Month Support"
      ]
    },
    {
      name: "Standard",
      price: "$5,000",
      period: "per project",
      features: [
        "Everything in Basic",
        "10 Pages",
        "CMS Integration",
        "E-commerce Ready",
        "3 Months Support",
        "Performance Optimization"
      ]
    },
    {
      name: "Premium",
      price: "$10,000",
      period: "per project",
      features: [
        "Everything in Standard",
        "Unlimited Pages",
        "Custom Development",
        "Advanced Analytics",
        "6 Months Support",
        "Priority Support"
      ]
    }
  ]

  return (
    <>
      {/* Banner */}
      <div className="mil-inner-banner">
        <div className="mil-animation-frame">
          <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="6" data-value-2="1.4"></div>
        </div>
        <div className="mil-banner-content mil-up">
          <div className="container">
            <ul className="mil-breadcrumbs mil-mb-60">
              <li><Link href="/">Homepage</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/service">Service</Link></li>
            </ul>
            <h1 className="mil-mb-60">
              {title.split(' ').map((word, i) => (
                <span key={i}>
                  {word}
                  {i === 0 && title.split(' ').length > 2 ? <br /> : ''}
                  {i === 1 && title.split(' ').length > 3 ? <br /> : ''}
                  {i === 2 && title.split(' ').length > 4 ? <br /> : ''}
                </span>
              ))}
            </h1>
            <a href="#service" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>About service</span>
            </a>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section id="service">
        <div className="container mil-p-120-90">
          <div className="row justify-content-between">
            <div className="col-lg-4 mil-relative mil-mb-90">
              <h4 className="mil-up mil-mb-30">
                Your <span className="mil-thin">Approach</span> <br />
                and <span className="mil-thin">Work Specifics</span>
              </h4>
              <p className="mil-up mil-mb-30">
                {description}
              </p>
              <div className="mil-up">
                <Link href="/portfolio" className="mil-link mil-dark mil-arrow-place">
                  <span>View works</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-accordion-group mil-up">
                {accordionItems.map((item, index) => (
                  <div key={index} className="mil-accordion-group mil-up">
                    <div 
                      className="mil-accordion-menu"
                      onClick={() => toggleAccordion(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      <p className="mil-accordion-head">{item.title}</p>
                      <div className="mil-symbol mil-h3">
                        <div className={`mil-plus ${activeAccordion === index ? 'mil-hidden' : ''}`}>+</div>
                        <div className={`mil-minus ${activeAccordion === index ? '' : 'mil-hidden'}`}>-</div>
                      </div>
                    </div>
                    {activeAccordion === index && (
                      <div className="mil-accordion-content">
                        <p className="mil-mb-30">{item.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="container mil-p-120-60">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h3 className="mil-center mil-up mil-mb-60">
                  Our <span className="mil-thin">Pricing</span>
                </h3>
                <p className="mil-center mil-light-soft mil-up mil-mb-90">
                  Choose the perfect plan for your project needs
                </p>
              </div>
            </div>
            <div className="row">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="col-lg-4 mil-mb-60">
                  <div className="mil-pricing-card mil-up">
                    <div className="mil-pricing-card-header">
                      <h4 className="mil-muted mil-mb-10">{plan.name}</h4>
                      <div className="mil-pricing-card-price">
                        <span className="mil-h2 mil-muted">{plan.price}</span>
                        <span className="mil-light-soft">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="mil-pricing-card-features">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="mil-light-soft">
                          <span className="mil-accent">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mil-pricing-card-button">
                      <Link href="/contact" className="mil-button mil-arrow-place">
                        <span>Get Started</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mil-soft-bg">
        <div className="container mil-p-120-120">
          <div className="row">
            <div className="col-lg-10">
              <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
                Ready to start your project? Let's discuss your requirements and create something amazing together.
              </span>
            </div>
          </div>
          <div className="mil-center">
            <h2 className="mil-up mil-mb-60">
              Let's <span className="mil-thin">Work</span><br />
              Together <span className="mil-thin">on Your Project</span>
            </h2>
            <div className="mil-up">
              <Link href="/contact" className="mil-button mil-arrow-place">
                <span>Start Project</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
