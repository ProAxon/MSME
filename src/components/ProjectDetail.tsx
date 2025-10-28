'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ProjectDetailProps {
  slug: string
}

export default function ProjectDetail({ slug }: ProjectDetailProps) {
  const projects = {
    'interior-design-studio': {
      title: 'Interior Design Studio',
      client: 'Envato Market',
      date: 'April 2023',
      author: 'Paul Trueman',
      mainImage: '/img/works/1/1.jpg',
      images: [
        '/img/works/1/1.jpg',
        '/img/works/1/2.jpg',
        '/img/works/1/3.jpg',
        '/img/works/1/4.jpg',
        '/img/works/1/5.jpg',
        '/img/works/1/6.jpg',
        '/img/works/1/7.jpg'
      ],
      description: 'A comprehensive interior design project that showcases modern aesthetics and functional design principles.',
      content: 'This project represents a complete interior design transformation that combines contemporary design elements with practical functionality. The space was carefully planned to maximize both visual appeal and usability, creating an environment that serves as both a workspace and a showcase of design excellence.'
    },
    'home-security-camera': {
      title: 'Home Security Camera',
      client: 'Tech Solutions Inc',
      date: 'March 2023',
      author: 'Sarah Johnson',
      mainImage: '/img/works/2/1.gif',
      images: [
        '/img/works/2/1.gif',
        '/img/works/2/2.jpg',
        '/img/works/2/3.jpg',
        '/img/works/2/4.jpg'
      ],
      description: 'Innovative home security camera design focusing on user experience and modern aesthetics.',
      content: 'This project involved creating a sleek, modern home security camera that seamlessly integrates into residential environments while providing advanced security features. The design emphasizes user-friendly interfaces and unobtrusive installation.'
    },
    'kemia-honest-skincare': {
      title: 'Kemia Honest Skincare',
      client: 'Kemia Cosmetics',
      date: 'February 2023',
      author: 'Michael Chen',
      mainImage: '/img/works/3/1.jpg',
      images: [
        '/img/works/3/1.jpg',
        '/img/works/3/2.jpg',
        '/img/works/3/3.jpg',
        '/img/works/3/4.jpg'
      ],
      description: 'Brand photography and visual identity for an honest skincare brand.',
      content: 'This photography project captured the essence of natural, honest skincare through compelling visual storytelling. The images emphasize the brand\'s commitment to transparency and natural ingredients.'
    },
    'furniture-design': {
      title: 'Furniture Design',
      client: 'Modern Living Co',
      date: 'January 2023',
      author: 'Emily Rodriguez',
      mainImage: '/img/works/4/1.jpg',
      images: [
        '/img/works/4/1.jpg',
        '/img/works/4/2.jpg',
        '/img/works/4/3.jpg',
        '/img/works/4/4.jpg',
        '/img/works/4/5.jpg',
        '/img/works/4/6.jpg',
        '/img/works/4/7.jpg'
      ],
      description: 'Contemporary furniture design collection focusing on sustainability and functionality.',
      content: 'This furniture design project explores the intersection of sustainability and modern aesthetics. Each piece is designed with both environmental consciousness and user comfort in mind.'
    },
    'mobile-app-design': {
      title: 'Mobile App Design',
      client: 'Digital Solutions',
      date: 'December 2022',
      author: 'David Kim',
      mainImage: '/img/works/5/1.jpg',
      images: [
        '/img/works/5/1.jpg',
        '/img/works/5/2.jpg',
        '/img/works/5/3.gif',
        '/img/works/5/4.jpg',
        '/img/works/5/5.gif',
        '/img/works/5/6.jpg',
        '/img/works/5/7.gif'
      ],
      description: 'User-centered mobile application design with focus on intuitive navigation.',
      content: 'This mobile app design project prioritizes user experience through intuitive navigation and clean, modern interfaces. The design system ensures consistency across all screens and interactions.'
    },
    'brand-identity': {
      title: 'Brand Identity',
      client: 'Startup Ventures',
      date: 'November 2022',
      author: 'Lisa Wang',
      mainImage: '/img/works/6/1.jpg',
      images: [
        '/img/works/6/1.jpg',
        '/img/works/6/2.gif',
        '/img/works/6/3.jpg',
        '/img/works/6/4.gif',
        '/img/works/6/5.jpg',
        '/img/works/6/6.jpg',
        '/img/works/6/7.jpg',
        '/img/works/6/8.jpg'
      ],
      description: 'Complete brand identity system for a modern startup company.',
      content: 'This comprehensive brand identity project created a cohesive visual system that reflects the company\'s innovative spirit and professional approach. The identity extends across all touchpoints and applications.'
    }
  }

  const project = projects[slug as keyof typeof projects] || projects['interior-design-studio']

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
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href={`/project/${slug}`}>Project</Link></li>
            </ul>
            <h1 className="mil-mb-60">{project.title}</h1>
            <a href="#project" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>Read more</span>
            </a>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* project */}
      <section className="mil-p-120-0">
        <div className="container mil-p-0-120" id="project">
          <div className="mil-image-frame mil-horizontal mil-up">
            <Image src={project.mainImage} alt="image" width={1200} height={600} />
            <a data-fancybox="gallery" data-no-swup href={project.mainImage} className="mil-zoom-btn">
              <Image src="/img/icons/zoom.svg" alt="zoom" width={24} height={24} />
            </a>
          </div>
          <div className="mil-info mil-up">
            <div>Client: &nbsp;<span className="mil-dark">{project.client}</span></div>
            <div>Date: &nbsp;<span className="mil-dark">{project.date}</span></div>
            <div>Author: &nbsp;<span className="mil-dark">{project.author}</span></div>
          </div>
          <div className="mil-p-120-0">
            <div className="row">
              {project.images.slice(1, 5).map((image, index) => (
                <div key={index} className="col-lg-6">
                  <div className="mil-image-frame mil-square mil-up mil-mb-30">
                    <Image src={image} alt="image" width={600} height={600} />
                    <a data-fancybox="gallery" data-no-swup href={image} className="mil-zoom-btn">
                      <Image src="/img/icons/zoom.svg" alt="zoom" width={24} height={24} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="row justify-content-between mil-p-90-120">
              <div className="col-lg-5">
                <h3 className="mil-up mil-mb-60">Simplicity, elegance, innovation!</h3>
              </div>
              <div className="col-lg-6">
                <p className="mil-up mil-mb-60">{project.description}</p>
                <p className="mil-up mil-mb-60">{project.content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* project end */}

      {/* similar */}
      <section className="mil-soft-bg">
        <div className="container mil-p-120-60">
          <div className="row align-items-center mil-mb-60">
            <div className="col-lg-6 mil-mb-30">
              <h3 className="mil-up">Similar Projects:</h3>
            </div>
            <div className="col-lg-6 mil-mb-30">
              <div className="mil-adaptive-right mil-up">
                <Link href="/portfolio" className="mil-link mil-dark mil-arrow-place">
                  <span>View all</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {Object.entries(projects).slice(0, 3).map(([projectSlug, projectData]) => (
              <div key={projectSlug} className="col-lg-4 mil-mb-60">
                <Link href={`/project/${projectSlug}`} className="mil-blog-card mil-mb-60">
                  <div className="mil-cover-frame mil-up">
                    <Image src={projectData.mainImage} alt="cover" width={400} height={300} />
                  </div>
                  <div className="mil-post-descr">
                    <h4 className="mil-up mil-mb-30">{projectData.title}</h4>
                    <div className="mil-link mil-dark mil-arrow-place mil-up">
                      <span>View project</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* similar end */}
    </>
  )
}
