import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#5E4AF1] to-[#BA0BF9] pt-20 px-4 lg:px-0">
        <div className="container">
          <div className="flex items-start flex-col sm:flex-row gap-x-12 justify-between">
            <div className="max-w-[600px]">
              <h2 className="text-[20px] lg:text-[40px] font-Anton font-normal text-primaryfontCOlor uppercase pb-8 lg:pb-28">
                // wanna work together?
              </h2>

              <input
                type="text"
                placeholder="your name"
                className="w-full bg-transparent border-b-2 placeholder:text-primaryfontCOlor placeholder:text-[14px] lg:placeholder:text-[32px] placeholder:font-Poppins placeholder:font-normal placeholder:uppercase py-2 text-white font-Poppins focus:border-b-yellow-400 focus:transition-all mb-4 lg:mb-14"
              />

              <input
                type="text"
                placeholder="your email"
                className="w-full bg-transparent border-b-2 placeholder:text-primaryfontCOlor placeholder:text-[14px] lg:placeholder:text-[32px] placeholder:font-Poppins placeholder:font-normal placeholder:uppercase py-2 text-white font-Poppins focus:border-b-yellow-400 focus:transition-all mb-10 lg:mb-32"
              />
              <textarea
                type="text"
                placeholder="your message"
                className="w-full bg-transparent border-b-2 placeholder:text-primaryfontCOlor placeholder:text-[14px] lg:placeholder:text-[32px]placeholder:font-Poppins placeholder:font-normal placeholder:uppercase py-2 text-white font-Poppins focus:border-b-yellow-400 focus:transition-all"
              />
              <div className="mt-8 text-[20px] lg:text-[36px] w-full font-Anton font-normal text-primaryfontCOlor uppercase py-2 lg:py-3 border-2 text-center cursor-pointer relative after:absolute after:w-full z-40 after:bg-[#5E4AF1] after:top-0 after:left-0 after:h-full after:-z-10 after:scale-x-0 after:transition-all after:duration-300 hover:after:scale-100 hover:after:duration-500">
                <span>send</span>
              </div>
            </div>

            <div className="pt-14 sm:pt-0">
              <h3 className="text-[20px] lg:text-[40px] font-Anton font-normal text-primaryfontCOlor uppercase pb-6 lg:pb-28">
                others way to contact
              </h3>
              <div className="flex flex-col gap-y-2 lg:gap-y-8">
                <a
                  href="mailto:portfolio@gmail.com"
                  className="text-[14px] lg:text-[32px] font-Poppins text-primaryfontCOlor uppercase"
                >
                  portfolio@gmail.com
                </a>
                <a
                  href="tel:+880 18000 00000"
                  className="text-[14px] lg:text-[32px] font-Poppins text-primaryfontCOlor uppercase"
                >
                  +880 18000 00000
                </a>
              </div>
              <div className="mt-6 lg:mt-12 flex items-center gap-x-3">
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
          <div className="mt-16 py-5 border-t-2 text-[14px] md:text-[20px] font-Poppins font-normal text-primaryfontCOlor uppercase flex items-center justify-center">
            © 2023, John Smith. All rights Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
