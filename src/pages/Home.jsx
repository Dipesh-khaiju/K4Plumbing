import React from 'react'
import About from "../components/About/About"
import HeroSection from '../components/HeroSection/HeroSection'
import ServiceSection from '../components/ServiceSection/ServiceSection'

const Home = () => {
  return (
    <>
    <div className='relative'>
     <HeroSection  />
     <About />
     <ServiceSection />
     </div>
    </>
  )
}

export default Home