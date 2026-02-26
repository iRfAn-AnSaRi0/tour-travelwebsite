import React from 'react'
import HeroSection from '../components/HeroSection'
import TourPackages from '../components/TourPackages'
import WhyChooseUs from '../components/WhyChooseUs'
import PopularDestinations from '../components/PopularDestinations'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <PopularDestinations/>
      <TourPackages/>
      <Testimonials />
      <CTA />
    </div>
  )
}

export default Home