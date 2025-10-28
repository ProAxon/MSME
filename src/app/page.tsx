import Banner from '@/components/Banner'
import About from '@/components/About'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Reviews from '@/components/Reviews'
import Partners from '@/components/Partners'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      {/* <Team /> */}
      <Reviews />
      <Partners />
      <Blog />
      <Footer />
    </>
  )
}