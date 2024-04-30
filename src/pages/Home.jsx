import React from 'react'
import About from "../components/About/About"
import HeroSection from '../components/HeroSection/HeroSection'

const Home = () => {
  return (
    <>
    <div className='relative'>
     <HeroSection  />
     <About />
     </div>
    </>
  )
}

export default Home