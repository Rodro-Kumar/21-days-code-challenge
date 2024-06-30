import React, { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import menu2 from "../../assets/Banner/menu2.png";
import menu from "../../assets/Banner/Menu.png";
import person from "../../assets/Banner/young-bearded-man-with-striped-s-removebg-preview 1.png";
import { Fade, Zoom } from "react-awesome-reveal";
import { Link } from "react-scroll";

const Header = () => {
  const [open, setopen] = useState(false);

  const HandleMenu = () => {
    setopen(true);
  };
  return (
    <>
      <div id="header" className="relative sm:bg-cover lg:bg-auto">
        {/* menu */}
        <div>
          <div
            className={`bg-[#0D071D] 
          fixed  w-full z-[999] pb-[307px] px-4 lg:px-0 ${
            open
              ? "top-[0] transition-all duration-700"
              : "top-[-100%] -translate-y-[100%] transition-all duration-500"
          }`}
          >
            <div className="container">
              <div className="flex items-center justify-between pt-10 sm:pt-6 md:pt-10 pb-5">
                <div className="text-xl lg:text-4xl font-normal text-primaryfontCOlor font-Antonio relative after:absolute after:content-'' after:w-full after:h-[1px] after:bg-primaryfontCOlor after:-bottom-1 after:left-0 after:origin-right after:transition-transform after:scale-x-0 hover:after:scale-x-100">
                  <a href="#">Get Started </a>
                </div>
                <a
                  href=""
                  className="text-xl lg:text-[40px] font-Anton font-normal text-primaryfontCOlor uppercase"
                >
                  portfolio
                </a>
                <div className="cursor-pointer" onClick={() => setopen(false)}>
                  <img
                    src={menu2}
                    alt={menu2}
                    className={`w-[24px] lg:w-[40px] ${
                      open
                        ? "rotate-180 transition-all duration-1000"
                        : "rotate-0 transition-all duration-1000"
                    }`}
                  />
                </div>
              </div>
              <div className="pt-12 sm:pt-3 md:pt-12 flex justify-between flex-col gap-y-20 sm:gap-y-0 sm:flex-row">
                <div className="flex flex-col overflow-hidden">
                  <Zoom delay={0} duration={500} triggerOnce="true">
                    <Link
                      to="header"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={1500}
                      className="hover:menuNav text-[50px] lg:text-[140px] font-Anton font-normal text-primaryfontCOlor uppercase leading-none"
                      onClick={() => setopen(false)}
                    >
                      Home
                    </Link>
                  </Zoom>
                  <Zoom delay={0} duration={800} triggerOnce="true">
                    <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={1500}
                      className=" text-[50px] lg:text-[140px] font-Anton font-normal text-primaryfontCOlor uppercase leading-none hover:menuNav cursor-pointer"
                      onClick={() => setopen(false)}
                    >
                      projects
                    </Link>
                  </Zoom>
                  <Zoom delay={0} duration={1100} triggerOnce="true">
                    <Link
                      to="testimonial"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={1500}
                      className="text-[50px] lg:text-[140px] font-Anton font-normal text-primaryfontCOlor uppercase leading-none hover:menuNav cursor-pointer"
                      onClick={() => setopen(false)}
                    >
                      reviews
                    </Link>
                  </Zoom>
                  <Zoom delay={0} duration={1400} triggerOnce="true">
                    <Link
                      to="footer"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={1500}
                      className="text-[50px] lg:text-[140px] font-Anton font-normal text-primaryfontCOlor uppercase leading-none hover:menuNav cursor-pointer"
                      onClick={() => setopen(false)}
                    >
                      contact
                    </Link>
                  </Zoom>
                </div>

                <div>
                  <Zoom
                    delay={0}
                    duration={700}
                    triggerOnce="true"
                    className="text-[24px] lg:text-[40px] font-Anton font-normal text-primaryfontCOlor uppercase pb-4 lg:pb-10"
                  >
                    to contact
                  </Zoom>
                  <div className="flex flex-col gap-y-2 lg:gap-y-5">
                    <Zoom delay={0} duration={900} triggerOnce="true">
                      <a
                        href="mailto:portfolio@gmail.com"
                        className="text-[14px] lg:text-[32px] font-Poppins text-primaryfontCOlor uppercase"
                      >
                        portfolio@gmail.com
                      </a>
                    </Zoom>
                    <Zoom delay={0} duration={1100} triggerOnce="true">
                      <a
                        href="tel:+880 18000 00000"
                        className="text-[14px] lg:text-[32px] font-Poppins text-primaryfontCOlor uppercase"
                      >
                        +880 18000 00000
                      </a>
                    </Zoom>
                  </div>
                  <div className="mt-6 lg:mt-8 flex items-center gap-x-3">
                    <a
                      href="#"
                      className="w-10 h-10 hover:bg-[#3b5998] transition-all rounded-full flex items-center justify-center text-primaryfontCOlor text-2xl"
                    >
                      <FaFacebookF />
                    </a>

                    <a
                      href="#"
                      className="w-10 h-10 hover:bg-[#FCAF45] rounded-full flex items-center justify-center text-primaryfontCOlor text-2xl"
                    >
                      <FaInstagram />
                    </a>

                    <a
                      href="#"
                      className="w-10 h-10 transition-all hover:bg-white hover:text-sky-500 rounded-full flex items-center justify-center text-primaryfontCOlor text-2xl"
                    >
                      <FaTwitter />
                    </a>

                    <a
                      href="#"
                      className="w-10 h-10 hover:bg-[#0077B5] transition-all rounded-full flex items-center justify-center text-primaryfontCOlor text-2xl"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0">
          <div className="container ">
            {/* Nav */}
            <Fade direction="down" duration={500} triggerOnce={true}>
              <div className="flex items-center justify-between py-14 px-4 lg:px-0">
                <div className="text-2xl lg:text-4xl font-normal text-primaryfontCOlor font-Antonio relative after:absolute after:content-'' after:w-full after:h-[1px] after:bg-primaryfontCOlor after:-bottom-1 after:left-0 after:origin-right after:transition-transform after:scale-x-0 hover:after:scale-x-100">
                  <a href="#">Get Started </a>
                </div>
                <div className="text-[23px] lg:text-[40px] font-Anton text-primaryfontCOlor font-normal uppercase w-[127px] md:w-[262px]">
                  <h1>john Smith</h1>
                </div>
                <div
                  className="cursor-pointer w-[24px] lg:w-[40px]"
                  onClick={HandleMenu}
                >
                  <img
                    src={menu}
                    alt={menu}
                    className={`${
                      open
                        ? "rotate-180 transition-all duration-1000"
                        : "rotate-0 transition-all duration-1000"
                    }`}
                  />
                </div>
              </div>
            </Fade>

            {/* Header */}
            <div className="px-4 lg:px-0">
              <Fade direction="up" duration={500} triggerOnce={true}>
                <h2 className="font-Anton text-[37px] lg:text-[115px] text-primaryfontCOlor font-normal uppercase leading-[45px] lg:leading-[120px]">
                  Journey through Creativity Explore the Artistry Within
                </h2>
              </Fade>
              <Fade direction="up" duration={500} triggerOnce={true}>
                <p className="text-sm md:text-xl font-Anton font-normal text-primaryfontCOlor uppercase max-w-[942px] pt-6 md:pt-10">
                  Dive into a world of creativity. Explore captivating visuals
                  and innovative designs that speak volumes. Join us in a
                  journey where every click unveils inspiration. Welcome to a
                  space where creativity knows no bounds
                </p>
              </Fade>

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
                  <img src={person} alt={person} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
