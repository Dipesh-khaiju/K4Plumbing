import React from "react";
import { FaArrowRight } from "react-icons/fa";
import backgroundImage from "../../assets/images/p5.jpg";
import leftImg1 from "../../assets/images/watertreatment.jpg";
import leftImg2 from "../../assets/images/p3.jpg"

const About = () => {
  return (
    <div name="about" className="flex flex-col lg:flex-row lg:mt-48">
      <div className="lg:w-1/2 relative flex flex-col justify-end p-8 md:p-16">
        <img className="h-auto md:h-[500px] w-full border-8 border-white" src={leftImg1} alt="Water Treatment Process" />
        <div className="absolute right-8 bottom-2 hidden md:block">
          <img className="h-[200px] lg:h-auto w-[300px] border-8 border-white" src={leftImg2} alt="Cutting Wood" />
        </div>
      </div>

      <div className="lg:w-1/2 p-4 relative">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}></div>

        <div className="relative z-10">
          <div className="relative">
            <h2 className="text-2xl text-blue-400">About Our Company</h2>
            <div className="absolute top-5 left-56 transform -translate-y-1/2 w-16 h-[3px] bg-[#21D3FF]"></div>
          </div>
          <h1 className="title text-6xl mb-6 text-[#4273C1] font-bold">
            K4Plumbing LLC
          </h1>
          <p className="mb-10 text-md text-gray-700">
            We are a locally owned and operated company with 20 years of
            industry experience. We value honesty and integrity in all aspects
            of our business. We offer a variety of Home Improvement services
            that are customizable to each individual project.
            <br />
            <br />
            We specialize in handyman work and a variety of related service and
            repair projects. We pride ourselves on the quality of our work as
            well as our commitment to outstanding results. We look forward to
            building lasting relationships with our clients and guarantee your
            satisfaction!
          </p>
          <button className="btn rounded-none bg-[#4273C1] px-10 hover:bg-slate-500 text-white mb-20">
            Read More <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
