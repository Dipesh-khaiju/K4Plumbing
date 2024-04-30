import React from "react";

const ServiceSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div>
          <div className="relative">
            <p className="text-blue-700 mb-2">What we are offering</p>
            <div className="absolute top-4 left-40 transform -translate-y-1/2 w-16 h-[2px] bg-blue-300"></div>
          </div>
          <h1 className="sm:text-6xl text-4xl font-bold mb-4 text-blue-700 ">
            Our Services
          </h1>
          <h3 className="mb-6">
            No job is too big or too small for the crew at K4Plumbing LLC
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-4 p-4 -m-4">
          <div className="relative p-8 border-2 border-blue-300 flex flex-col ">
            <h2 className="text-blue-700 text-4xl title-font font-medium mb-3">
              Plumbing
            </h2>
            <p className="leading-relaxed text-md mb-8">
              Business Name employs access to an exclusive team of certified
              plumbing contractors, with 24- hour plumbing services available at
              cost-efficient pricing.
            </p>
            <a className="mt-auto text-blue-300 inline-flex items-center self-end font-semibold cursor-pointer">
              View Details
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <div class="absolute bottom-0 right-0 w-1 h-16 bg-blue-600"></div>
            <div class="absolute bottom-0 right-0 h-1 w-16 bg-blue-600"></div>
          </div>
          <div className="relative p-8 border-2 border-blue-300 flex flex-col ">
            <h2 className="text-blue-700 text-4xl title-font font-medium mb-3">
              Water Treatment
            </h2>
            <p className="leading-relaxed text-md mb-8">
              Business Name offers a wide variety of water treatment services.
              We specialize in clean water for quality business, including the
              installation, repair, and maintenance of water softeners,
              purifiers, and more.
            </p>
            <a className="mt-auto text-blue-300 inline-flex items-center self-end font-semibold cursor-pointer">
              View Details
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <div class="absolute bottom-0 right-0 w-1 h-16 bg-blue-600"></div>
            <div class="absolute bottom-0 right-0 h-1 w-16 bg-blue-600"></div>
          </div>
          <div className="relative p-8 border-2 border-blue-300 flex flex-col ">
            <h2 className="text-blue-700 text-4xl title-font font-medium mb-3">
              Commercial Property Maintenance
            </h2>
            <p className="leading-relaxed text-md mb-8">
              No matter what type of business you run, its exterior appearance
              is just as important as that of the interior. Business Name proud
              to offer commercial property maintenance for your business. We
              focus on the fastest and safest execution of the project with a
              clear cost and benefit solution.
            </p>
            <a className="mt-auto text-blue-300 inline-flex items-center self-end font-semibold cursor-pointer">
              View Details
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <div class="absolute bottom-0 right-0 w-1 h-16 bg-blue-600"></div>
            <div class="absolute bottom-0 right-0 h-1 w-16 bg-blue-600"></div>
          </div>{" "}
          <div className="relative p-8 border-2 border-blue-300 flex flex-col ">
            <h2 className="text-blue-700 text-4xl title-font font-medium mb-3">
              Preventative Maintenance
            </h2>
            <p className="leading-relaxed text-md mb-8">
              Our Preventative Maintenance programs are designed to make you
              stand out from your competitors. Our Handyman Programs ensure your
              facilities are kept up to the standards you expect. This program
              often discovers problems earlier so that repairs cost less. As a
              result, you save time and money.
            </p>
            <a className="mt-auto text-blue-300 inline-flex items-center self-end font-semibold cursor-pointer">
              View Details
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <div class="absolute bottom-0 right-0 w-1 h-16 bg-blue-600"></div>
            <div class="absolute bottom-0 right-0 h-1 w-16 bg-blue-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
