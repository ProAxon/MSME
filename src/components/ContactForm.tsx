'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      {/* Banner */}
      <div className="mil-inner-banner mil-p-0-120">
        <div className="mil-banner-content mil-center mil-up">
          <div className="container">
            <ul className="mil-breadcrumbs mil-center mil-mb-60">
              <li><a href="/">Homepage</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <h1 className="mil-mb-60">Get in touch!</h1>
            <a href="#contact" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>Send message</span>
            </a>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mil-map-frame mil-up">
        <div className="mil-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1396.5769090312324!2d-73.6519672!3d45.5673453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91f8abc30e0ff%3A0xfc6d9cbb49022e9c!2sManoir%20Saint-Joseph!5e0!3m2!1sen!2sua!4v1685485811069!5m2!1sen!2sua" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <section id="contact">
        <div className="container mil-p-120-90">
          <h3 className="mil-center mil-up mil-mb-120">
            Let's <span className="mil-thin">Talk</span>
          </h3>
          <form id="contactForm" className="row align-items-center" onSubmit={handleSubmit}>
            <div className="col-lg-6 mil-up">
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="What's your name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="col-lg-6 mil-up">
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="col-lg-12 mil-up">
              <textarea 
                id="message" 
                name="message" 
                placeholder="Tell us about our project" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="col-lg-8">
              <p className="mil-up mil-mb-30">
                <span className="mil-accent">*</span> We promise not to disclose your personal information to third parties.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="mil-adaptive-right mil-up mil-mb-30">
                <button type="submit" className="mil-button mil-arrow-place">
                  <span>Send message</span>
                </button>
              </div>
            </div>
          </form>
          <div id="formResponse" style={{ marginTop: '20px' }}></div>
        </div>
      </section>
    </>
  )
}
