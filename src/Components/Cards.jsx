import React from "react";
import { data } from "../Data";
import toast from "react-hot-toast";
function Cards() {
  return (
    <div>
      <section className="text-gray-400   body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col"></div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {data?.map((item) => (
              <div key={item.title} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt={item.title}
                    className="object-cover object-center h-full "
                    src={item.image}
                  />
                </div>
                <h2 className="text-xl title-font text-black font-semibold my-5">
                  {item.title}
                </h2>
                <p className="text-base sm:min-h-[70px] leading-relaxed mt-2">
                  {item.description}
                </p>
                <div className=" my-2">
                  <button
                    className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                  >
                    <a href={item.frontend}>Frontend</a>
                  </button>
                  {item.backend === "false" ? (
                    <button
                      className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true"
                      onClick={() => toast.error("No backend Code...!")}
                    >
                      <div>Backend</div>
                    </button>
                  ) : (
                    <button
                      className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true"
                    >
                      <a href={item.backend}>Backend</a>
                    </button>
                  )}

                  <button
                    className="middle  mt-2  none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                  >
                    <a href={item.live}>Live</a>
                  </button>
                </div>
                <link
                  rel="stylesheet"
                  href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
                />

                <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cards;
