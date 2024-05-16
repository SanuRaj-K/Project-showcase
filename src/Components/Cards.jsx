import React from "react";
import blogsupLogo from "../Blogsup-logo-jpg.jpg";
import petShop from "../Components/petshop.png";
function Cards() {
  return (
    <div>
      <section className="text-gray-400   body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1  rounded overflow-hidden">HAI</div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full "
                  src="https://www.shutterstock.com/image-vector/amazon-initial-logo-isolated-white-600nw-2272856739.jpg"
                />
              </div>
              <h2 className="text-xl title-font text-black font-semibold my-5">
                Amazon-clone
              </h2>
              <p className="text-base sm:min-h-[70px] leading-relaxed mt-2">
                Created an Amazon clone website involves replicating the core
                functionalities and features of the original Amazon platform.
                This includes creating user accounts, browsing products, adding
                items to a shopping cart,and managing orders.
              </p>
              <div className=" my-2">
                <button
                  className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  <a href="https://github.com/SanuRaj-K/amazon-clone-frontEnd">
                    Frontend
                  </a>
                </button>
                <button
                  className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  <a href="https://github.com/SanuRaj-K/amazon-clone-backend">
                    Backend
                  </a>
                </button>
                <button
                  className="middle  mt-2  none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  <a href="https://amazon-clone-front-end-sage.vercel.app/">
                    Live
                  </a>
                </button>
              </div>
              <link
                rel="stylesheet"
                href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
              />

              <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={blogsupLogo}
                />
              </div>
              <h2 className="text-xl title-font text-black font-semibold my-5">
                BlogsUp
              </h2>
              <p className="text-base  sm:min-h-[120px] leading-relaxed mt-2">
                Blogsup is a Social media platform. Users can Read blogs and
                interact with that blogs by giving like and comment.
              </p>
              <div className=" my-2">
                <button
                  className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  <a href="https://github.com/SanuRaj-K/blog-s_up_frontEnd">
                    Frontend
                  </a>
                </button>
                <button
                  className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  <a href="https://github.com/SanuRaj-K/blog-s_up-backend">
                    Backend
                  </a>
                </button>
                <button
                  className="middle mt-2 none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  <a href="https://blogsup.shop/">Live</a>
                </button>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={petShop}
                />
              </div>

              <h2 className="text-xl   title-font text-black font-semibold my-5">
                PetFood Shop
              </h2>
              <p className="text-base  h-[110px] leading-relaxed mt-2">
                PetFood Shop is a E-commerce platform. Users can View and buy
                pet food products. Currently this server is not live
              </p>

              <div className=" my-2">
                <button
                  className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  <a href="https://github.com/SanuRaj-K/PetFoodShop">
                    Frontend
                  </a>
                </button>
                <button
                  className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  <a href="https://github.com/SanuRaj-K/Node">Backend</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cards;
