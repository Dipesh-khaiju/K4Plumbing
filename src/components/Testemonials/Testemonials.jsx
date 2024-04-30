import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import man from "../../assets/images/man.jpg";
import woman from "../../assets/images/girl.jpg";
import man2 from "../../assets/images/man-2.jpg";
import p7 from "../../assets/images/p7.jpg";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

const Testemonials = () => {
  return (
    <div className="flex-wrap  flex h-screen">
      <div className="text-part flex justify-center  items-center w-full lg:w-1/2 p-4">
        <div className="text-center md:text-left">
          <div className="relative">
            <p className="text-blue-700 text-xl mb-2">What Our Clients Say</p>
            <div className="absolute hidden md:block top-4 left-48 transform -translate-y-1/2 w-16 h-[3px] bg-blue-300"></div>
          </div>
          <h1 className="sm:text-7xl text-5xl font-bold mb-6 text-blue-700">
            Client's Testemonials
          </h1>
          <h3 className="mb-6 text-xl">
            Here's what our Customers are saying about K4Plumbing LLC
          </h3>
        </div>
      </div>
      <div className="client-info  flex justify-center items-center w-full lg:w-1/2">
        <div className="container mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <div className="p-4  w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <div className="container relative">
                    {/* Background image with overlay */}
                    <div
                      className="hero-background h-96 relative"
                      style={{
                        backgroundImage: `url(${p7})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Overlay for background image */}
                      <div className="hero-background-overlay absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-400   opacity-80"></div>
                      <div className="relative">
                        {/* Content */}
                        <div className=" flex justify-end items-center h-full  z-10">
                          <div className="mt-20 ml-8">
                            <p className="text-white text-xl">
                              We have used Your Business Name LLC for several
                              years and consider Tim and his men as a part of
                              our company. Great customer service and very fast
                              service. I'm thankful to have such a reliable,
                              express and trustworthy company to work with.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-0 right-4">
                        <svg
                          fill="#ebebeb"
                          height="78px"
                          width="78px"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 198 198"
                          xml:space="preserve"
                          stroke="#ebebeb"
                          transform="rotate(180)"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297 c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"></path>{" "}
                              <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297 c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"></path>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </div>
                      <h3 className="text-xl pb-4 absolute right-4 bottom-4 text-white">
                        - John F.Kennedy
                      </h3>{" "}
                      <div class="absolute top-0 left-0 w-2.5 h-48 bg-sky-400"></div>
                    </div>
                    <img
                      alt="testimonial"
                      src={man}
                      className="md:w-44 absolute  md:h-44 h-24 w-24 left-[-45px] bottom-[-45px] border-sky-400 border-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4  w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <div className="container relative">
                    {/* Background image with overlay */}
                    <div
                      className="hero-background h-96 relative"
                      style={{
                        backgroundImage: `url(${p7})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Overlay for background image */}
                      <div className="hero-background-overlay absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-400   opacity-80"></div>
                      <div className="relative">
                        {/* Content */}
                        <div className=" flex justify-end items-center h-full  z-10">
                          <div className="mt-20 ml-8">
                            <p className="text-white text-xl">
                              We have used Your Business Name LLC for several
                              years and consider Tim and his men as a part of
                              our company. Great customer service and very fast
                              service. I'm thankful to have such a reliable,
                              express and trustworthy company to work with.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-0 right-4">
                        <svg
                          fill="#ebebeb"
                          height="78px"
                          width="78px"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 198 198"
                          xml:space="preserve"
                          stroke="#ebebeb"
                          transform="rotate(180)"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297 c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"></path>{" "}
                              <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297 c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"></path>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </div>
                      <h3 className="text-xl pb-4 absolute right-4 bottom-4 text-white">
                        - John F.Kennedy
                      </h3>{" "}
                      <div class="absolute top-0 left-0 w-2.5 h-48 bg-sky-400"></div>
                    </div>
                    <img
                      alt="testimonial"
                      src={woman}
                      className="md:w-44 absolute  md:h-44 h-24 w-24 left-[-45px] bottom-[-45px] border-sky-400 border-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4  w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <div className="container relative">
                    {/* Background image with overlay */}
                    <div
                      className="hero-background h-96 relative"
                      style={{
                        backgroundImage: `url(${p7})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Overlay for background image */}
                      <div className="hero-background-overlay absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-400   opacity-80"></div>
                      <div className="relative">
                        {/* Content */}
                        <div className=" flex justify-end items-center h-full  z-10">
                          <div className="mt-20 ml-8">
                            <p className="text-white text-xl">
                              We have used Your Business Name LLC for several
                              years and consider Tim and his men as a part of
                              our company. Great customer service and very fast
                              service. I'm thankful to have such a reliable,
                              express and trustworthy company to work with.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-0 right-4">
                        <svg
                          fill="#ebebeb"
                          height="78px"
                          width="78px"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 198 198"
                          xml:space="preserve"
                          stroke="#ebebeb"
                          transform="rotate(180)"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297 c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"></path>{" "}
                              <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297 c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"></path>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </div>
                      <h3 className="text-xl pb-4 absolute right-4 bottom-4 text-white">
                        - John F.Kennedy
                      </h3>{" "}
                      <div class="absolute top-0 left-0 w-2.5 h-48 bg-sky-400"></div>
                    </div>
                    <img
                      alt="testimonial"
                      src={man2}
                      className="md:w-44 absolute  md:h-44 h-24 w-24 left-[-45px] bottom-[-45px] border-sky-400 border-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>


          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
