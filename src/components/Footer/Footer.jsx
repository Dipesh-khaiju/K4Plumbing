import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { LuClock } from "react-icons/lu";

const Footer = () => {
  return (
    <footer class="text-gray-600 bg-blue-400 body-font">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto bg-white px-10 py-6  text-center md:text-left">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              fill="#000000"
              height="64px"
              width="64px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="-172.33 -172.33 810.42 810.42"
              xml:space="preserve"
              stroke="#000000"
              stroke-width="2.3287850000000003"
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
                  <path d="M457.618,402.336L297.86,242.579l89.103-89.103c8.302-8.301,18.789-14.653,30.324-18.371 c9.347-3.004,17.622-8.064,24.596-15.04c11.884-11.883,18.283-27.683,18.02-44.488c-0.265-16.808-7.173-32.415-19.454-43.948 c-1.509-1.416-3.64-1.955-5.635-1.428c-1.998,0.526-3.586,2.043-4.201,4.017l-10.479,33.619 c-3.049,9.771-13.479,15.239-23.256,12.189c-7.798-2.434-13.037-9.552-13.037-17.712c0-1.865,0.285-3.727,0.848-5.532l10.37-33.23 c0.619-1.985,0.167-4.149-1.195-5.719c-1.362-1.57-3.44-2.325-5.493-1.991c-11.401,1.85-21.976,6.824-30.581,14.386 c-15.127,13.302-22.828,33.175-20.601,53.162c2.449,21.952-5.368,43.759-21.449,59.832l-58.619,58.618l-9.514-9.514l-14.763-33.971 c-0.3-0.69-0.728-1.318-1.261-1.851l-74.533-74.535c-1.126-1.125-2.652-1.757-4.243-1.757s-3.117,0.632-4.242,1.757L92.702,137.83 l-25.827-25.827l56.925-56.925c2.344-2.343,2.344-6.142,0-8.485L98.035,20.828c-2.153-2.154-5.583-2.353-7.972-0.457L11.065,83.062 C4.601,88.029,0.591,95.544,0.06,103.678c-0.531,8.135,2.471,16.106,8.235,21.871l18.275,18.274 c1.171,1.171,2.707,1.757,4.242,1.757c1.535,0,3.071-0.586,4.242-1.757l4.243-4.243l25.827,25.827l-4.243,4.243 c-2.344,2.343-2.344,6.142-0.001,8.485l31.819,31.82c2.343,2.343,6.143,2.344,8.485,0l9.193-9.193l19.8,19.8l-9.192,9.192 c-2.344,2.343-2.344,6.142-0.001,8.485l5.426,5.426c8.916,8.916,22.2,11.41,33.6,6.73l13.249,13.25 c1.126,1.125,2.651,1.757,4.243,1.757s3.117-0.632,4.243-1.757l14.142-14.142c2.343-2.343,2.343-6.142,0-8.485l-7.171-7.172 l13.338-7.874l15.466,15.466l-70.783,70.784c-8.302,8.301-18.789,14.653-30.326,18.371c-9.209,2.964-17.713,8.167-24.596,15.049 c-11.885,11.886-18.283,27.688-18.018,44.495c0.267,16.805,7.176,32.407,19.455,43.933c1.507,1.415,3.638,1.953,5.633,1.428 c1.998-0.526,3.586-2.043,4.201-4.015l10.489-33.611c1.477-4.733,4.708-8.607,9.098-10.909c4.391-2.303,9.414-2.757,14.148-1.28 c7.798,2.434,13.037,9.552,13.037,17.712c0,1.865-0.285,3.727-0.849,5.534l-10.36,33.23c-0.619,1.986-0.165,4.15,1.199,5.721 c1.149,1.323,2.808,2.065,4.529,2.065c0.321,0,0.646-0.026,0.968-0.079c11.399-1.864,21.968-6.841,30.563-14.394 c15.14-13.302,22.841-33.173,20.603-53.153c-2.448-21.94,5.371-43.753,21.449-59.842l40.299-40.299l159.311,159.311 c5.653,5.653,13.02,8.506,20.347,8.506c6.746,0,13.458-2.419,18.768-7.3c5.683-5.225,8.901-12.352,9.063-20.068 C465.912,414.948,463.024,407.743,457.618,402.336z M324.222,151.707c18.675-18.665,27.748-44.051,24.892-69.648 c-1.794-16.095,4.411-32.103,16.598-42.818c4.331-3.807,9.289-6.797,14.646-8.866l-7.126,22.835 c-0.924,2.965-1.392,6.028-1.392,9.104c0,13.44,8.625,25.161,21.463,29.167c16.095,5.021,33.267-3.983,38.286-20.072l7.295-23.403 c5.711,8.071,8.86,17.646,9.019,27.76c0.213,13.529-4.938,26.248-14.506,35.815c-5.613,5.614-12.269,9.685-19.786,12.102 c-13.344,4.299-25.492,11.667-35.133,21.308l-89.103,89.104l-23.77-23.77L324.222,151.707z M16.781,117.063 c-3.322-3.322-5.052-7.916-4.746-12.604c0.306-4.688,2.617-9.019,6.416-11.939l74.882-59.424l17.739,17.74l-80.259,80.259 L16.781,117.063z M47.783,131.095l10.607-10.607l25.827,25.827L73.61,156.922L47.783,131.095z M118.864,192.277l5.658-5.657 l19.799,19.799l-5.657,5.657L118.864,192.277z M152.806,197.934l-19.799-19.799l10.607-10.607l19.799,19.799L152.806,197.934z M183.161,245.26l-5.656,5.657l-6.571-6.572l7.113-4.199L183.161,245.26z M209.476,313.992 c-18.672,18.684-27.743,44.072-24.889,69.659c1.803,16.087-4.402,32.089-16.598,42.805c-4.327,3.803-9.281,6.793-14.637,8.865 l7.116-22.824c0.924-2.965,1.392-6.028,1.392-9.104c0-13.44-8.625-25.161-21.463-29.167c-16.09-5.018-33.257,3.985-38.275,20.07 l-7.303,23.401c-5.712-8.066-8.861-17.639-9.021-27.751c-0.215-13.531,4.937-26.251,14.504-35.82 c5.62-5.62,12.277-9.694,19.788-12.112c13.344-4.299,25.492-11.667,35.133-21.308l70.784-70.784l23.77,23.77L209.476,313.992z M448.566,433.86c-6.219,5.717-16.315,5.334-22.508-0.858L207.253,214.197c-1.156-1.156-2.692-1.757-4.244-1.757 c-1.046,0-2.1,0.273-3.049,0.833l-42.047,24.823c-7.438,4.394-16.903,3.194-23.016-2.916l-1.183-1.183l42.426-42.427 c2.344-2.343,2.344-6.142,0-8.485L147.856,154.8c-2.342-2.343-6.143-2.343-8.484,0l-42.428,42.426L73.61,173.892l79.196-79.196 l69.485,69.486l14.763,33.971c0.3,0.691,0.728,1.319,1.261,1.852l210.817,210.817c3.072,3.072,4.713,7.175,4.621,11.553 C453.661,426.791,451.818,430.87,448.566,433.86z"></path>{" "}
                  <circle cx="438.141" cy="421.763" r="8"></circle>{" "}
                </g>{" "}
              </g>
            </svg>
            <span class="ml-3 text-blue-600 font-bold text-2xl">K4Plumbing</span>
          </a>
          <p class="mt-2 text-md text-black">
           Locally owned and operated company with 20 years of industry experience. We value honesty and integrity in all aspects of out business
          </p>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="text-sky-300 text-2xl tracking-widest font-bold mb-3">
             Quick Links
            </h2>
            <nav class="list-none g mb-10">
              <li className="mb-2">
                <a class="text-white  text-[18px] hover:text-gray-800">About Us</a>
              </li>
              <li className="mb-2">
                <a class="text-white  text-[18px] hover:text-gray-800">Portfolio</a>
              </li>
              <li className="mb-2">
                <a class="text-white  text-[18px] hover:text-gray-800">Testemonials</a>
              </li>
              <li className="mb-2">
                <a class="text-white  text-[18px] hover:text-gray-800">Services</a>
              </li>
              <li className="mb-2">
                <a class="text-white  text-[18px] hover:text-gray-800">Contact</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="text-sky-300 text-2xl tracking-widest font-bold mb-3">
            Get In Touch
            </h2>
            <nav class="list-none g mb-10">
              <li className="mb-2">
                <a class="text-white  text-[18px] hover:text-gray-800">Facebook</a>
              </li>
              <li className="mb-2">
                <a class="text-white  text-[18px] hover:text-gray-800">Instagram</a>
              </li>
              <li className="mb-2">
                <a class="text-white  text-[18px] hover:text-gray-800">Youtube</a>
              </li>
              <li className="mb-2">
                <a class="text-white  text-[18px] hover:text-gray-800">Twitter</a>
              </li>
              <li className="mb-2">
                <a class="text-white  text-[18px] hover:text-gray-800">LinkedIn</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="text-sky-300 text-2xl tracking-widest font-bold mb-3">
           Basic Info
            </h2>
            <nav class="list-none g mb-10">
              <li className="mb-2">
                <a class="text-white flex  gap-3  text-[18px] hover:text-gray-800"><FaMapMarkedAlt className=""/>LaPorte,IN 4545354</a>
              </li>
              <li className="mb-2">
                <a class="text-white flex  gap-3  text-[18px] hover:text-gray-800"><IoCall />+977 9861488886</a>
              </li>
              <li className="mb-2">
                <a class="text-white flex  gap-3 text-[18px] hover:text-gray-800"><IoMail />k4plumbing@gmail.com</a>
              </li>
              <li className="mb-2">
                <a class="text-white flex gap-3 text-[18px] hover:text-gray-800"><LuClock /> Mon-Fri: 9 AM - 5 PM</a>
              </li>
          
            </nav>
          </div>
      
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
            © 2020 Tailblocks —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              class="text-gray-600 ml-1"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
