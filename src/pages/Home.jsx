import React from 'react'
import About from "../components/About/About"
import HeroSection from '../components/HeroSection/HeroSection'
import ServiceSection from '../components/ServiceSection/ServiceSection'
import Projects  from '../components/Projects/Projects'
import Testemonials from '../components/Testemonials/Testemonials'
import Footer from '../components/Footer/Footer';
import { FaArrowUp } from "react-icons/fa";
import {Link} from "react-scroll"

const Home = () => {
  return (
    <>
    <div className='relative'>
    <Link to="hero" smooth duration={500} >  <FaArrowUp className='text-sky-700 cursor-pointer p-3 z-10 bottom-10 right-10 fixed border-2 rounded-full border-sky-500' size={50}/></Link>
     
     <HeroSection  />
     <About />
     <ServiceSection />
     <Projects />
     <Testemonials />
     <Footer />
     </div>
    </>
  )
}

export default Home