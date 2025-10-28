'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function BlogInnerPage() {
  const [activeCategory, setActiveCategory] = useState('All categories')

  const blogPosts = [
    {
      id: 1,
      title: "How to Become a Graphic Designer in 10 Simple Steps",
      category: "TECHNOLOGY",
      date: "may 24 2023",
      image: "/img/blog/1.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.",
      slug: "how-to-become-graphic-designer"
    },
    {
      id: 2,
      title: "16 Best Graphic Design Online and Offline Courses",
      category: "TECHNOLOGY",
      date: "may 24 2023",
      image: "/img/blog/2.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.",
      slug: "best-graphic-design-courses"
    },
    {
      id: 3,
      title: "How to Create a Brand Guide for Your Client",
      category: "DESIGN",
      date: "may 24 2023",
      image: "/img/blog/3.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.",
      slug: "create-brand-guide-client"
    },
    {
      id: 4,
      title: "The Future of Web Design: Trends to Watch",
      category: "DESIGN",
      date: "may 24 2023",
      image: "/img/blog/4.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.",
      slug: "future-web-design-trends"
    },
    {
      id: 5,
      title: "Color Psychology in Branding: What You Need to Know",
      category: "ART",
      date: "may 24 2023",
      image: "/img/blog/5.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.",
      slug: "color-psychology-branding"
    },
    {
      id: 6,
      title: "Minimalist Design: Less is More",
      category: "DESIGN",
      date: "may 24 2023",
      image: "/img/blog/6.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.",
      slug: "minimalist-design-less-more"
    },
    {
      id: 7,
      title: "JavaScript Best Practices for Modern Development",
      category: "CODE",
      date: "may 24 2023",
      image: "/img/blog/7.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.",
      slug: "javascript-best-practices"
    },
    {
      id: 8,
      title: "The Art of Typography in Digital Design",
      category: "ART",
      date: "may 24 2023",
      image: "/img/blog/8.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.",
      slug: "typography-digital-design"
    }
  ]

  const categories = ["Design", "Art", "Code", "Technology", "All categories"]

  const filteredPosts = activeCategory === 'All categories' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase())

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
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/blog-inner">All Posts</Link></li>
            </ul>
            <h1 className="mil-mb-60">All <span className="mil-thin">Publications</span></h1>
            <a href="#blog" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>View posts</span>
            </a>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* blog */}
      <section id="blog">
        <div className="container mil-p-120-60">
          <div className="row align-items-center mil-mb-60">
            <div className="col-lg-4 mil-mb-30">
              <h3 className="mil-up">Categories:</h3>
            </div>
            <div className="col-lg-8 mil-mb-30">
              <div className="mil-adaptive-right mil-up">
                <ul className="mil-category-list">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button 
                        className={activeCategory === category ? "mil-active" : ""}
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            {filteredPosts.map((post, index) => (
              <div key={post.id} className="col-lg-6 mil-mb-60">
                <Link href="/publication" className="mil-blog-card mil-mb-60">
                  <div className="mil-cover-frame mil-up">
                    <Image src={post.image} alt="cover" width={600} height={400} />
                  </div>
                  <div className="mil-post-descr">
                    <div className="mil-labels mil-up mil-mb-30">
                      <div className="mil-label mil-upper mil-accent">{post.category}</div>
                      <div className="mil-label mil-upper">{post.date}</div>
                    </div>
                    <h4 className="mil-up mil-mb-30">{post.title}</h4>
                    <p className="mil-post-text mil-up mil-mb-30">{post.excerpt}</p>
                    <div className="mil-link mil-dark mil-arrow-place mil-up">
                      <span>Read more</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* blog end */}
    </>
  )
}
