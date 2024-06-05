import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const Header = () => {
  return (
    <>
      <div id="header" className="px-4 lg:px-0 sm:bg-cover lg:bg-auto">
        <div className="container">
          {/* Nav */}
          <div className="flex items-center justify-between py-14 px-4 lg:px-0">
            <div className="text-2xl lg:text-4xl font-normal text-primaryfontCOlor font-Antonio relative after:absolute after:content-'' after:w-full after:h-[1px] after:bg-primaryfontCOlor after:-bottom-1 after:left-0 after:origin-right after:transition-transform after:scale-x-0 hover:after:scale-x-100">
              <a href="#">Get Started </a>
            </div>
            <div className="text-[23px] lg:text-[40px] font-Anton text-primaryfontCOlor font-normal uppercase w-[127px] md:w-[262px]">
              <h1>john Smith</h1>
            </div>
            <div className="cursor-pointer w-[24px] lg:w-[40px]">
              <img src="/src/assets/Menu.png" alt="" />
            </div>
          </div>
          {/* Header */}
          <div className="px-4 lg:px-0">
            <h2 className="font-Anton text-[37px] lg:text-[115px] text-primaryfontCOlor font-normal uppercase leading-[45px] lg:leading-[120px]">
              Journey through Creativity Explore the Artistry Within
            </h2>
            <p className="text-sm md:text-xl font-Anton font-normal text-primaryfontCOlor uppercase max-w-[942px] pt-6 md:pt-10">
              Dive into a world of creativity. Explore captivating visuals and
              innovative designs that speak volumes. Join us in a journey where
              every click unveils inspiration. Welcome to a space where
              creativity knows no bounds
            </p>
            <div className="flex justify-between items-end my-7 border-y-[1px] border-[#ffffffa9] ">
              <div className="mb-12 flex items-center text-lg md:text-2xl lg:text-[40px] font-Anton font-normal text-primaryfontCOlor uppercase gap-x-3">
                <div className="group flex items-center gap-x-3 relative after:absolute md:after:-bottom-3 after:-bottom-[2px]  after:left-0 after:w-full after:h-[1px] after:bg-[#ffffffa9]  hover:after:text-white">
                  <a href="#" className="">
                    check works
                  </a>
                  <span>
                    <HiArrowUpRight className="text-[#ffffffa9] top-[6px] md:top-1 absolute group-hover:top-2 md:group-hover:-top-2 group-hover:text-white transition-all" />
                  </span>
                </div>
              </div>
              <div className="bg-primaryfontCOlor w-[170px] md:w-[50%]">
                <img
                  src="/src/assets/young-bearded-man-with-striped-s-removebg-preview 1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
