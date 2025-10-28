'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Blog() {
  const blogPosts = [
    {
      title: "How to Become a Graphic Designer in 10 Simple Steps",
      category: "TECHNOLOGY",
      date: "may 24 2023",
      image: "/img/blog/1.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!",
      href: "/publication"
    },
    {
      title: "16 Best Graphic Design Online and Offline Courses",
      category: "TECHNOLOGY",
      date: "may 24 2023",
      image: "/img/blog/2.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!",
      href: "/publication"
    }
  ]

  return (
    <section>
      <div className="container mil-p-120-60">
        <div className="row align-items-center mil-mb-30">
          <div className="col-lg-6 mil-mb-30">
            <h3 className="mil-up">Popular Publications:</h3>
          </div>
          <div className="col-lg-6 mil-mb-30">
            <div className="mil-adaptive-right mil-up">
              <Link href="/blog" className="mil-link mil-dark mil-arrow-place">
                <span>View all</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-lg-6">
              <Link href={post.href} className="mil-blog-card mil-mb-60">
                <div className="mil-cover-frame mil-up">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    className="object-cover"
                  />
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
  )
}
