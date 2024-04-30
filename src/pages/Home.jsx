import React from 'react'
import About from "../components/About/About"
import HeroSection from '../components/HeroSection/HeroSection'
import ServiceSection from '../components/ServiceSection/ServiceSection'
import Projects from '../components/Projects/Projects'

const Home = () => {
  return (
    <>
    <div className='relative'>
     <HeroSection  />
     <About />
     <ServiceSection />
     <Projects />
     </div>
    </>
  )
}

export default Home