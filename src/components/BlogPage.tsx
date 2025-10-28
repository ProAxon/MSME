'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Become a Graphic Designer in 10 Simple Steps",
      category: "TECHNOLOGY",
      date: "may 24 2023",
      image: "/img/blog/1.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!",
      slug: "how-to-become-graphic-designer"
    },
    {
      id: 2,
      title: "16 Best Graphic Design Online and Offline Courses",
      category: "TECHNOLOGY",
      date: "may 24 2023",
      image: "/img/blog/2.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!",
      slug: "best-graphic-design-courses"
    },
    {
      id: 3,
      title: "How to Create a Brand Guide for Your Client",
      category: "TECHNOLOGY",
      date: "may 24 2023",
      image: "/img/blog/3.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!",
      slug: "create-brand-guide-client"
    },
    {
      id: 4,
      title: "The Future of Web Design: Trends to Watch",
      category: "DESIGN",
      date: "may 24 2023",
      image: "/img/blog/4.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!",
      slug: "future-web-design-trends"
    },
    {
      id: 5,
      title: "Color Psychology in Branding: What You Need to Know",
      category: "ART",
      date: "may 24 2023",
      image: "/img/blog/5.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!",
      slug: "color-psychology-branding"
    },
    {
      id: 6,
      title: "Minimalist Design: Less is More",
      category: "DESIGN",
      date: "may 24 2023",
      image: "/img/blog/6.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!",
      slug: "minimalist-design-less-more"
    }
  ]

  const categories = ["Design", "Art", "Code", "Technology"]

  return (
    <>
      {/* banner */}
      <div className="mil-inner-banner mil-p-0-120">
        <div className="mil-banner-content mil-up">
          <div className="mil-animation-frame">
            <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="6" data-value-2="1.4"></div>
          </div>
          <div className="container">
            <ul className="mil-breadcrumbs mil-mb-60">
              <li><Link href="/">Homepage</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
            <h1 className="mil-mb-60">Exploring <span className="mil-thin">the World</span> <br /> Through Our <span className="mil-thin">Blog</span></h1>
            <a href="#blog" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>Publications</span>
            </a>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* popular */}
      <section className="mil-soft-bg" id="blog">
        <div className="container mil-p-120-60">
          <div className="row align-items-center mil-mb-30">
            <div className="col-lg-6 mil-mb-30">
              <h3 className="mil-up">Popular Publications:</h3>
            </div>
            <div className="col-lg-6 mil-mb-30">
              <div className="mil-adaptive-right mil-up">
                <Link href="/blog-inner" className="mil-link mil-dark mil-arrow-place">
                  <span>View all</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Link href="/publication" className="mil-blog-card mil-mb-60">
                <div className="mil-cover-frame mil-up">
                  <Image src={blogPosts[0].image} alt="cover" width={600} height={400} />
                </div>
                <div className="mil-post-descr">
                  <div className="mil-labels mil-up mil-mb-30">
                    <div className="mil-label mil-upper mil-accent">{blogPosts[0].category}</div>
                    <div className="mil-label mil-upper">{blogPosts[0].date}</div>
                  </div>
                  <h4 className="mil-up mil-mb-30">{blogPosts[0].title}</h4>
                  <p className="mil-post-text mil-up mil-mb-30">{blogPosts[0].excerpt}</p>
                  <div className="mil-link mil-dark mil-arrow-place mil-up">
                    <span>Read more</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link href="/publication" className="mil-blog-card mil-mb-60">
                <div className="mil-cover-frame mil-up">
                  <Image src={blogPosts[1].image} alt="cover" width={600} height={400} />
                </div>
                <div className="mil-post-descr">
                  <div className="mil-labels mil-up mil-mb-30">
                    <div className="mil-label mil-upper mil-accent">{blogPosts[1].category}</div>
                    <div className="mil-label mil-upper">{blogPosts[1].date}</div>
                  </div>
                  <h4 className="mil-up mil-mb-30">{blogPosts[1].title}</h4>
                  <p className="mil-post-text mil-up mil-mb-30">{blogPosts[1].excerpt}</p>
                  <div className="mil-link mil-dark mil-arrow-place mil-up">
                    <span>Read more</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* popular end */}

      {/* blog */}
      <section>
        <div className="container mil-p-120-120">
          <div className="row align-items-center mil-mb-30">
            <div className="col-lg-4 mil-mb-30">
              <h3 className="mil-up">Categories:</h3>
            </div>
            <div className="col-lg-8 mil-mb-30">
              <div className="mil-adaptive-right mil-up">
                <ul className="mil-category-list">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link href="/blog-inner" className={index === categories.length - 1 ? "mil-active" : ""}>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            {blogPosts.slice(2).map((post, index) => (
              <div key={post.id} className="col-lg-12">
                <Link href="/publication" className="mil-blog-card mil-blog-card-hori mil-more mil-mb-60">
                  <div className="mil-cover-frame mil-up">
                    <Image src={post.image} alt="cover" width={400} height={300} />
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
