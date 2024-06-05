import React from "react";

const BlogCard = ({ img, description }) => {
  return (
    <>
      <div className="max-w-[400px] h-[365px] md:h-[500px] lg:h-[663px]">
        <div className="w-full h-[145px] md:h-[210px] lg:h-[400px] rounded-[30px] overflow-hidden mb-4 md:mb-6 cursor-pointer">
          <img
            src={img ? img : "/src/assets/Blogs/1.png"}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-xs md:text-sm lg:text-base font-Poppins font-normal text-secondaryColor bg-primaryfontCOlor rounded-[38px] py-[10px] md:py-[14px] px-4 md:px-8 inline-block mb-6">
          UI/UX Design
        </div>
        <div className="flex items-start lg:items-center flex-col lg:flex-row gap-x-4 gap-y-1 lg:gap-y-0">
          <div className="flex items-center gap-x-[10px]">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primaryBgColor"></div>
            <p className="text-xs md:text-base font-Poppins font-normal text-primaryfontCOlor">
              10 Nov, 2023
            </p>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-secondaryBgColor"></div>
            <p className="text-xs md:text-base font-Poppins font-normal text-primaryfontCOlor">
              John Smith
            </p>
          </div>
        </div>
        <h4 className="text-[15px] md:text-[20px] lg:text-[28px] font-Poppins font-normal text-primaryfontCOlor max-w-[380px] mt-2 md:mt-6">
          {description
            ? description
            : "Design Unraveled: Behind the Scenes of UI/UX Magic"}
        </h4>
      </div>
    </>
  );
};

export default BlogCard;
