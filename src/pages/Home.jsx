import React from "react";
import About from "../components/About/About";
import HeroSection from "../components/HeroSection/HeroSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import Projects from "../components/Projects/Projects";
import Testemonials from "../components/Testemonials/Testemonials";
import Footer from "../components/Footer/Footer";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Link to="hero" smooth duration={2000}>
          <div className="backtotop">
            <button className="fixed z-10 bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-400 flex items-center justify-center rounded-full cursor-pointer border-none group">
              <svg
                height="1.2em"
                className="arrow text-white group-hover:text-gray-800"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                ></path>
              </svg>
              <p className="text-black text-xs absolute bottom-12 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                Go Up
              </p>
            </button>
          </div>
        </Link>

        <HeroSection />
        <About />
        <ServiceSection />
        <Projects />
        <Testemonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
