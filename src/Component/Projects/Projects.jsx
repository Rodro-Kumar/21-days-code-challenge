import React from "react";

const Projects = () => {
  return (
    <>
      <div className="py-16 md:py-36 px-4 lg:px-0">
        <div className="container">
          <div>
            <h2 className="text-[26px] md:text-[40px] font-Anton font-normal text-primaryfontCOlor pb-11 uppercase">
              // my projects
            </h2>

            <div className="flex items-center flex-wrap justify-between gap-y-8 md:gap-y-20">
              <img
                src="/src/assets/Projects/1.png"
                alt=""
                className="w-[600px] sm:w-[308px] md:w-[340px] lg:w-[600px] cursor-pointer"
              />
              <img
                src="/src/assets/Projects/2.png"
                alt=""
                className="w-[600px] sm:w-[308px] md:w-[340px] lg:w-[600px] cursor-pointer"
              />
              <img
                src="/src/assets/Projects/3.png"
                alt=""
                className="w-[600px] sm:w-[308px] md:w-[340px] lg:w-[600px]  cursor-pointer"
              />
              <img
                src="/src/assets/Projects/4.png"
                alt=""
                className="w-[600px] sm:w-[300px] md:w-[340px] lg:w-[600px] cursor-pointer"
              />
            </div>
            <div className="mt-10 md:mt-20 flex items-center justify-center">
              <button className="text-base md:text-2xl font-Anton font-normal text-primaryfontCOlor uppercase border-2 py-2 px-5 md:px-10 md:py-4 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r from-[#28073f] from-10% to-[#1b0e3b] to-90% after:-z-10 after:scale-x-0 after:transition-transform after:origin-right hover:after:scale-x-100 hover:after:from-[#1b0e3b] hover:after:to-[#28073f] hover:after:origin-left">
                check all projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
