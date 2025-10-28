'use client'

import Image from 'next/image'

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Creative Director",
      image: "/img/faces/1.jpg",
      description: "With over 10 years of experience in creative direction, Sarah leads our design team with passion and innovation."
    },
    {
      name: "Michael Chen",
      position: "Lead Developer",
      image: "/img/faces/2.jpg",
      description: "Michael is our technical expert who brings complex ideas to life through clean, efficient code."
    },
    {
      name: "Emily Rodriguez",
      position: "UX Designer",
      image: "/img/faces/3.jpg",
      description: "Emily specializes in creating intuitive user experiences that delight and engage our clients' customers."
    },
    {
      name: "David Thompson",
      position: "Brand Strategist",
      image: "/img/faces/4.jpg",
      description: "David helps businesses discover their unique voice and create compelling brand narratives."
    },
    {
      name: "Lisa Park",
      position: "Project Manager",
      image: "/img/faces/5.jpg",
      description: "Lisa ensures every project runs smoothly from conception to delivery, keeping clients informed every step of the way."
    },
    {
      name: "Alex Martinez",
      position: "Marketing Specialist",
      image: "/img/faces/6.jpg",
      description: "Alex develops data-driven marketing strategies that drive growth and engagement for our clients."
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
              <li><a href="/">Homepage</a></li>
              <li><a href="/team">Team</a></li>
            </ul>
            <h1 className="mil-mb-60">
              Meet Our <span className="mil-thin">Creative</span><br />
              <span className="mil-thin">Team</span>
            </h1>
            <a href="#team" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>Our team</span>
            </a>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section id="team">
        <div className="container mil-p-120-90">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3 className="mil-center mil-up mil-mb-60">
                The <span className="mil-thin">People</span> Behind Our Success
              </h3>
              <p className="mil-center mil-up mil-mb-90">
                Our diverse team of creative professionals brings together years of experience and passion for delivering exceptional results.
              </p>
            </div>
          </div>
          
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6 mil-mb-60">
                <div className="mil-team-card mil-up">
                  <div className="mil-team-card-image">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mil-team-card-content">
                    <h4 className="mil-muted mil-mb-10">{member.name}</h4>
                    <p className="mil-accent mil-mb-20">{member.position}</p>
                    <p className="mil-light-soft">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mil-soft-bg">
        <div className="container mil-p-120-120">
          <div className="row">
            <div className="col-lg-10">
              <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
                Ready to work with our talented team? Let's discuss your project and see how we can bring your vision to life.
              </span>
            </div>
          </div>
          <div className="mil-center">
            <h2 className="mil-up mil-mb-60">
              Let's <span className="mil-thin">Create</span><br />
              Something <span className="mil-thin">Amazing</span> Together
            </h2>
            <div className="mil-up">
              <a href="/contact" className="mil-button mil-arrow-place">
                <span>Start Your Project</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
