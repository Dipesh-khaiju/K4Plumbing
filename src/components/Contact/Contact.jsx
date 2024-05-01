import React from "react";
import p5 from "../../assets/images/p5.jpg";
import { FaArrowRight } from "react-icons/fa";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="hero-container mb-24 relative h-screen">
      {/* Background image with overlay */}
      <div
        className="hero-background relative"
        style={{
          backgroundImage: `url(${p5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for background image */}
        <div className="hero-background-overlay absolute inset-0 bg-gradient-to-b from-blue-200 to-blue-300 opacity-40"></div>

        <div className="relative">
          {/* Content */}
          <div className="flex flex-col gap-1 justify-center items-center py-10">
            <div className="flex items-center gap-3">
              <span className="text-sky-900">Have some work for us? </span>
              <div className="hidden md:block transform-translate-y-1/2 w-16 h-[3px] bg-sky-400"></div>
            </div>
            <h1 className="text-white text-4xl sm:text-6xl mb-5 font-bold">
              Request A Quote Today
            </h1>
            <h3 className="text-white mb-28">
              Please Contact us with all your water needs. We look forward to
              serving you.
            </h3>
          </div>
        </div>
      </div>
      <Form />

      <div className="right-text w-1/3 absolute  lg:right-80 flex flex-col justify-center items-start p-10">
        <div className="relative">
          <p className="text-[#4474C1] ">Visit Our Office</p>
          <div className="absolute top-4 left-40 transform -translate-y-1/2 w-16 h-[2px] bg-blue-300"></div>
        </div>
        <h1 className="title  text-4xl font-bold mb-4 text-[#4474C1]">
          Our Main Office
        </h1>
        <div className="border-b-2 ">
          <h3 className="mb-6 text-gray-700">
            You are welcome to visit our office during office hour. Find details
            of out location and business hours below.
          </h3>
        </div>
        <p className="text-md text-gray-700 "> <span className="text-bold pr-4 text-lg">Address :</span>    Laporte,IN 46350</p>
        <p className="text-md text-gray-700 "> <span className="text-bold pr-4 text-lg">Phone :</span>   +977 980800000</p>
        <p className="text-md text-gray-700 "> <span className="text-bold pr-4 text-lg">Business Hours :</span>  Mon - Fri: 9 am - 5pm</p>
        <p className="text-md text-gray-700 "> <span className="text-bold pr-4 text-lg">Email Address :</span>    Laporte,IN 46350</p>

        <div className="mt-6">
          <h1 className="text-2xl font-bold text-blue-700 mb-4">Area Covered</h1>
          <p className="text-md text-gray-700">Laporte counties</p>
          <p className="text-md text-gray-700">Porter COunties</p>
          <p className="text-md text-gray-700">Michigan city</p>
          <p className="text-md text-gray-700">Michigan</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
