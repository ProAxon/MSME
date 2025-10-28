'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function PublicationPage() {
  const similarPosts = [
    {
      id: 1,
      title: "16 Best Graphic Design Online and Offline Courses",
      category: "TECHNOLOGY",
      date: "may 24 2023",
      image: "/img/blog/2.jpg",
      slug: "best-graphic-design-courses"
    },
    {
      id: 2,
      title: "How to Create a Brand Guide for Your Client",
      category: "TECHNOLOGY",
      date: "may 24 2023",
      image: "/img/blog/3.jpg",
      slug: "create-brand-guide-client"
    },
    {
      id: 3,
      title: "The Future of Web Design: Trends to Watch",
      category: "DESIGN",
      date: "may 24 2023",
      image: "/img/blog/4.jpg",
      slug: "future-web-design-trends"
    }
  ]

  return (
    <>
      {/* banner */}
      <div className="mil-inner-banner">
        <div className="mil-banner-content mil-center mil-up">
          <div className="container">
            <ul className="mil-breadcrumbs mil-center mil-mb-60">
              <li><Link href="/">Homepage</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/blog">Publication</Link></li>
            </ul>
            <h2>How to Become a <span className="mil-thin">Graphic</span><br /> Designer in <span className="mil-thin">10 Simple Steps</span></h2>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* publication */}
      <section id="blog">
        <div className="container mil-p-120-90">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="mil-image-frame mil-horizontal mil-up">
                <Image src="/img/blog/3.jpg" alt="Publication cover" className="mil-scale" width={1200} height={600} />
              </div>
              <div className="mil-info mil-up mil-mb-90">
                <div>Category: &nbsp;<span className="mil-dark">Technology</span></div>
                <div>Date: &nbsp;<span className="mil-dark">April 2023</span></div>
                <div>Author: &nbsp;<span className="mil-dark">Paul Trueman</span></div>
              </div>
            </div>
            <div className="col-lg-8">
              <p className="mil-text-xl mil-dark mil-up mil-mb-60">Are you passionate about design and interested in pursuing a career as a graphic designer? Graphic design is a dynamic field that combines creativity, technical skills, and a keen eye for aesthetics. Whether you're a beginner or someone looking to enhance their skills, this article will guide you through 10 simple steps to become a graphic designer.</p>

              <blockquote className="mil-up mil-mb-60">"Creativity is intelligence having fun." - Albert Einstein</blockquote>

              <h5 className="mil-up mil-mb-30">Understand the Field</h5>
              <p className="mil-up mil-mb-60">Start by gaining a comprehensive understanding of what graphic design entails. Research the different types of graphic design, such as branding, web design, print design, and illustration. Explore the work of successful graphic designers and analyze their portfolios to learn about various design styles and techniques.</p>

              <h5 className="mil-up mil-mb-30">Get a Design Education</h5>
              <p className="mil-up mil-mb-60">While formal education is not always a requirement, it can provide you with a solid foundation and enhance your credibility as a graphic designer. Consider pursuing a degree or diploma in graphic design or a related field. Look for reputable design schools or online courses that offer comprehensive programs to learn both theory and practical skills.</p>

              <h5 className="mil-up mil-mb-30">Build Your Portfolio</h5>
              <p className="mil-up mil-mb-60">Your portfolio is your calling card as a graphic designer. Compile a collection of your best design projects to showcase your abilities and style. Include a variety of work, such as logos, brochures, websites, or illustrations, to demonstrate your versatility. Constantly update your portfolio as you complete new projects or improve existing ones.</p>

              <h5 className="mil-up mil-mb-30">Gain Practical Experience</h5>
              <p className="mil-up mil-mb-60">To become a successful graphic designer, practical experience is crucial. Seek internships, freelance opportunities, or entry-level positions to gain hands-on experience in the field. This will allow you to apply your skills in real-world scenarios, understand client requirements, work with deadlines, and collaborate with others in a professional environment.</p>

              <div className="row">
                <div className="col-lg-6">
                  <div className="mil-image-frame mil-horizontal mil-up mil-mb-30">
                    <Image src="/img/blog/4.jpg" alt="Publication cover" width={600} height={400} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mil-image-frame mil-horizontal mil-up mil-mb-60">
                    <Image src="/img/blog/7.jpg" alt="Publication cover" width={600} height={400} />
                  </div>
                </div>
              </div>

              <p className="mil-up mil-mb-60">Remember that creativity is at the core of graphic design. Embrace your creativity, experiment with different ideas, and think outside the box to create unique and impactful designs. Don't be afraid to take risks and push the boundaries of traditional design. Steve Jobs once said:</p>

              <blockquote className="mil-up mil-mb-60">
                "Design is not just what it looks like and feels like. Design is how it works." So go ahead, unleash your creativity, and embark on your path to becoming a graphic designer!
              </blockquote>

              <p className="mil-up mil-mb-30">In addition to the aforementioned steps, other important aspects of becoming a graphic designer include networking with industry professionals, staying updated on design trends and technologies, and continuously learning and improving your skills.</p>

              <p className="mil-up mil-mb-30">Becoming a graphic designer is an exciting journey that requires dedication, hard work, and a genuine passion for design. By following these 10 simple steps, you'll be well on your way to establishing yourself as a skilled graphic designer and opening doors to a rewarding and fulfilling career.</p>
            </div>
          </div>
        </div>
      </section>
      {/* publication end */}

      {/* similar */}
      <section className="mil-soft-bg">
        <div className="container mil-p-120-60">
          <div className="row align-items-center mil-mb-60">
            <div className="col-lg-6 mil-mb-30">
              <h3 className="mil-up">Similar Publications:</h3>
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
            {similarPosts.map((post) => (
              <div key={post.id} className="col-lg-4 mil-mb-60">
                <Link href="/publication" className="mil-blog-card mil-mb-60">
                  <div className="mil-cover-frame mil-up">
                    <Image src={post.image} alt="cover" width={400} height={300} />
                  </div>
                  <div className="mil-post-descr">
                    <div className="mil-labels mil-up mil-mb-30">
                      <div className="mil-label mil-upper mil-accent">{post.category}</div>
                      <div className="mil-label mil-upper">{post.date}</div>
                    </div>
                    <h4 className="mil-up mil-mb-30">{post.title}</h4>
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
      {/* similar end */}
    </>
  )
}
