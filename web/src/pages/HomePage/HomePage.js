import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BlogPosts from 'src/components/BlogPosts'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Hero from 'src/components/Hero'
import Logos from 'src/components/Logos'
import NewsletterForm from 'src/components/NewsletterForm'
import ProductFeatures from 'src/components/ProductFeatures'
import SellingPoints from 'src/components/SellingPoints'
import Team from 'src/components/Team'
import Testimonials from 'src/components/Testimonials'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <header className="header-area">
        <Header />
        <Hero />
      </header>

      <Logos />
      <SellingPoints />
      <ProductFeatures />
      <Team />
      <Testimonials />
      <BlogPosts />
      <NewsletterForm />
      <Footer />
    </>
  )
}

export default HomePage
