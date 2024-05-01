import React from "react";
import Navbar from "../Navbar/Navbar";
import backgroundImage from "../../assets/images/plumbing-home.jpg";
import { FaArrowRight } from "react-icons/fa";
import Plumbing from "../../assets/images/PLUMBING.jpg";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <div name="hero" className="hero-container h-screen  mb-16">
      {/* Background image with overlay */}
      <div
        className="hero-background relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for background image */}
        <div className="hero-background-overlay absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-500   opacity-60"></div>

        <div className="relative">
          {/* Navbar */}
          <Navbar className="absolute top-0 left-0 right-0 px-4 py-2 z-10" />

          {/* Content */}
          <div className="w-1/3 flex justify-center items-center h-full ml-28 z-10">
            <div className="md:pt-52 pt-20">
              <h3 className="text-sm pb-4 text-white">
                Building with Confidence
              </h3>
              <h1 className="text-4xl sm:text-6xl mb-5 text-[#34D6FF] font-bold">
                Building <span className="text-white">And</span> Maintaining{" "}
                <span className="text-white">Your Dreams</span>
              </h1>
              <p className="text-sm mb-4 text-white">
                Fast, Friendly home repair service done right for the first time
              </p>

              <button className="btn rounded-none bg-white px-10 text-[#577DC1] mb-20">
                Explore More <FaArrowRight />
              </button>
            </div>

            {/* Image */}
            <div className="hidden lg:block absolute right-24 top-40 ">
              <img
                className="md:h-[550px] md:w-[400px] object-fill"
                src={Plumbing}
                alt="Plumbing"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Experience section */}
      <div className="h-36 flex items-center sm:pl-28 pl-5 bg-[#34D6FF] z-10">
        <p className="text-5xl font-bold text-white">
          20+
          <ReactTyped
            strings={["Years of Experience"]}
            typeSpeed={150}
            loop
            backSpeed={20}
            cursorChar="_"
            showCursor={true}
          />
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
