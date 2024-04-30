import React from 'react'
import About from "../components/About/About"
import HeroSection from '../components/HeroSection/HeroSection'
import ServiceSection from '../components/ServiceSection/ServiceSection'
import Projects  from '../components/Projects/Projects'
import Testemonials from '../components/Testemonials/Testemonials'

const Home = () => {
  return (
    <>
    <div className='relative'>
     <HeroSection  />
     <About />
     <ServiceSection />
     <Projects />
     <Testemonials />
     </div>
    </>
  )
}

export default Home