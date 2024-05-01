import React from "react";
import p4 from "../../assets/images/p4.jpg";
import p5 from "../../assets/images/p5.jpg";
import p6 from "../../assets/images/p6.jpg";
import p7 from "../../assets/images/p7.jpg";

const Projects = () => {
  return (
    <div name="projects" className="flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <p className="text-[#4474C1] text-xl mb-2">Honorable Mentions</p>
          <div className="absolute hidden md:block top-4 right-36 transform -translate-y-1/2 w-16 h-[3px] bg-blue-300"></div>
        </div>
        <h1 className="title sm:text-7xl text-4xl font-bold mb-6 text-[#4474C1]">
          Featured Products
        </h1>
        <h3 className="mb-6 text-xl">
          Some of the projects Business Name repaired.
        </h3>
      </div>
      <div className="hero-container flex flex-wrap justify-center">
        {/* Mapping over the images and create a card for each */}
        {[p4, p5, p6, p7].map((image, index) => (
          <div key={index} className="w-full lg:w-1/4 ">
            <div
              className="hero-background relative"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for background image */}
              <div className="hero-background-overlay absolute inset-0 bg-gradient-to-t from-blue-900 to-blue-600   opacity-80"></div>

              <div className="relative">
                {/* Content */}
                <div className="w-auto mr-4 lg:mr-0 flex justify-end h-[600px] ml-28 z-10">
                  <div className="">
                    <h1 className="text-4xl sm:text-5xl mb-5   mt-4  text-white">
                      Project Title
                    </h1>
                    <p className="text-white text md">1st May 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
