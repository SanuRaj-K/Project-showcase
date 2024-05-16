import React from "react";
import blogsupLogo from "../Blogsup-logo-jpg.jpg";
function Cards() {
  return (
    <div>
      <section class="text-gray-400   body-font">
        <h1>hai</h1>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col">
            <div class="h-1  rounded overflow-hidden">HAI</div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full "
                  src="https://www.shutterstock.com/image-vector/amazon-initial-logo-isolated-white-600nw-2272856739.jpg"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-white mt-5">
                Shooting Stars
              </h2>
              <p class="text-base sm:min-h-[70px] leading-relaxed mt-2">
                Created an Amazon clone website involves replicating the core
                functionalities and features of the original Amazon platform.
                This includes creating user accounts, browsing products, adding
                items to a shopping cart,and managing orders.
              </p>
              <div className=" my-2">
                <button
                  class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  Frontend
                </button>
                <button
                  class="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  Backend
                </button>
                <button
                  class="middle  mt-2  none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  Live
                </button>
              </div>
              <link
                rel="stylesheet"
                href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
              />

              <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={blogsupLogo}
                />
              </div>
              <h2 class="text-xl font-medium title-font text-white mt-5">
                The Catalyzer
              </h2>
              <p class="text-base  sm:min-h-[70px] leading-relaxed mt-2">
                Blogsup is a Social media platform. Users can Read blogs and
                interact with that blogs by giving like and comment.
              </p>
              <div className=" my-2">
                <button
                  class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  Frontend
                </button>
                <button
                  class="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  Backend
                </button>
                <button
                  class="middle mt-2 none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  Live
                </button>
              </div>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1205x505"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-white mt-5">
                The 400 Blows
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Swag shoindegoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a class="text-indigo-400 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cards;
