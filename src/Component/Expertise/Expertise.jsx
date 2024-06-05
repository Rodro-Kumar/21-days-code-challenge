import React from "react";
import uximg from "../../assets/Expertise/ui-ux.png";
import devImg from "../../assets/Expertise/dev.png";
import design from "../../assets/Expertise/design.png";

const Expertise = () => {
  return (
    <>
      <div className="py-[60px] md:py-[90px] border-y-2 bg-gradient-to-br from-[#b90bf92d] from-0% to-[#5d4af128] to-85%">
        <div className="container">
          <div className="px-4 lg:px-0">
            <h2 className="common-title pb-12">// my expertise </h2>
            <div className="flex items-center justify-center gap-y-8 gap-x-[7px] md:gap-x-0 md:gap-y-16 flex-wrap md:justify-between">
              <div
                id="expertiseBox"
                className="overflow-hidden w-[320px] md:w-[218px] border-2 border-[#ffffff36] sm:w-[198px] sm:h-[272px] md:h-[315px] lg:w-[370px] h-[384px] lg:h-[472px]  lg:rounded-[45px] rounded-[23px] bg-[#2a1a39]"
              >
                <div className="py-6 border-b-2 border-b-[#ffffff73]">
                  <h4 className="font-Poppins sm:text-base font-normal text-[18px] lg:text-[28px] text-primaryfontCOlor text-center">
                    UI/UX DESIGN
                  </h4>
                </div>
                <div className="relative px-6 pb-6 lg:pt-[65px] pt-[35px] sm:pt-[20px] md:pt-[42px]">
                  <div className="bg-[#3d3148] rounded-[23px] lg:rounded-[40px] w-[280px] lg:w-[300px] md:w-[138px] sm:w-[160px] sm:h-[164px] lg:h-[298px] h-[228px] absolute left-[50%] -translate-x-[50%]"></div>
                  <div className="bg-[#4D4A53] rounded-[23px] lg:rounded-[40px] lg:w-[320px] w-[285px] sm:w-[170px] sm:h-[150px] h-[228px] mt-[13px] lg:mt-[17px] absolute left-[50%] -translate-x-[50%]"></div>
                  <div className="absolute left-[50%] -translate-x-[50%] w-[90%] md:w-full sm:top-[45px] md:top-[67px] lg:top-[107px] top-[62px]">
                    <img src={uximg} alt={uximg} />
                  </div>
                </div>
              </div>

              <div
                id="expertiseBox"
                className="overflow-hidden md:w-[218px] rounded-[23px] w-[320px] sm:w-[198px] md:h-[315px] border-2 border-[#ffffff36] sm:h-[272px] lg:w-[370px] h-[384px] lg:h-[472px] lg:rounded-[45px] bg-[#2a1a39]"
              >
                <div className="py-6 border-b-2 border-b-[#ffffff73]">
                  <h4 className="font-Poppins font-normal sm:text-base text-[18px] lg:text-[28px] text-primaryfontCOlor text-center">
                    WEB DEVELOPMENT
                  </h4>
                </div>
                <div className="relative px-6 pb-6 lg:pt-[65px] pt-[35px] sm:pt-[20px] md:pt-[42px]">
                  <div className="bg-[#3d3148] rounded-[23px] lg:rounded-[40px] w-[280px] lg:w-[300px] sm:w-[160px] sm:h-[164px] md:w-[138px] lg:h-[298px] h-[228px] absolute left-[50%] -translate-x-[50%]"></div>
                  <div className="bg-[#4D4A53] rounded-[23px] lg:rounded-[40px] lg:w-[320px] w-[285px] sm:w-[170px] sm:h-[150px] h-[228px] mt-[13px] lg:mt-[17px] absolute left-[50%] -translate-x-[50%]"></div>
                  <div className="absolute left-[50%] -translate-x-[50%] w-[90%] md:w-full sm:top-[45px] md:top-[69px] lg:top-[106px] top-[62px]">
                    <img src={devImg} alt={devImg} />
                  </div>
                </div>
              </div>

              <div
                id="expertiseBox"
                className="w-[320px] md:w-[218px] md:h-[315px] rounded-[23px] sm:w-[198px] border-2 border-[#ffffff36] sm:h-[272px] lg:w-[370px] h-[384px] lg:h-[472px] lg:rounded-[45px] bg-[#2a1a39]"
              >
                <div className="py-6 border-b-2 border-b-[#ffffff73]">
                  <h4 className="font-Poppins font-normal sm:text-base text-[18px] lg:text-[28px] text-primaryfontCOlor text-center">
                    WEB DESIGN
                  </h4>
                </div>
                <div className="relative px-6 pb-6 lg:pt-[65px] pt-[35px] sm:pt-[20px] md:pt-[42px]">
                  <div className="bg-[#3d3148] rounded-[23px] md:w-[138px] lg:rounded-[40px] w-[280px] lg:w-[300px] sm:w-[160px] sm:h-[164px] lg:h-[298px] h-[228px] absolute left-[50%] -translate-x-[50%]"></div>
                  <div className="bg-[#4D4A53] rounded-[23px] lg:rounded-[40px] lg:w-[320px] sm:w-[170px] sm:h-[150px] w-[285px] h-[228px] mt-[13px] lg:mt-[17px] absolute left-[50%] -translate-x-[50%]"></div>
                  <div className="absolute left-[50%] -translate-x-[50%] w-[90%] md:w-full sm:top-[45px] md:top-[69px] lg:top-[106px] top-[62px]">
                    <img src={design} alt={design} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
