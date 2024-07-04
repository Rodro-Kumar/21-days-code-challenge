import React from "react";
import BlogCard from "../Common/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import lefticon from "../../../src/assets/Icon/left.png";
import rigthticon from "../../../src/assets/Icon/rigth.png";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img1 from "../../assets/Blogs/1.png";
import img2 from "../../assets/Blogs/2.png";
import img3 from "../../assets/Blogs/3.png";

const Blog = () => {
  return (
    <>
      <div className="pb-16 lg:pb-36 px-4 lg:px-0">
        <div className="container">
          <div>
            <h3 className="font-Anton text-[26px] md:text-[40px] font-normal text-primaryfontCOlor pb-7 uppercase">
              // my blogs
            </h3>
            <div className="flex items-center justify-end gap-x-4 md:gap-x-11 pb-7">
              <div className="pre cursor-pointer active:bg-[#5E4AF1] w-8 md:w-11 md:h-11 h-8 rounded-full bg-primaryfontCOlor flex items-center justify-center">
                <img src={lefticon} alt={lefticon} />
              </div>
              <div className="next active:bg-[#5E4AF1] cursor-pointer w-8 md:w-11 md:h-11 h-8 rounded-full bg-primaryfontCOlor flex items-center justify-center">
                <img src={rigthticon} alt={rigthticon} />
              </div>
            </div>
            <Swiper
              navigation={{
                nextEl: ".next",
                prevEl: ".pre",
              }}
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={30}
              breakpoints={{
                200: {
                  slidesPerView: 2,
                },
                665: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <BlogCard img={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  img={img2}
                  description={
                    "Mastering Web Design: Blending Art and Tech for Digital Brilliance"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  img={img3}
                  description={
                    "Launching Your Code: Rocketing to New Heights in Web Developmen"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  img={img1}
                  description={
                    "Launching Your Code: Rocketing to New Heights in Web Developmen"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  img={img2}
                  description={
                    "Launching Your Code: Rocketing to New Heights in Web Developmen"
                  }
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
