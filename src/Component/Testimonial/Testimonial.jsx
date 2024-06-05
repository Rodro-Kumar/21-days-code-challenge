import React from "react";
import img1 from "../../assets/Testimonial/1.png";
import img2 from "../../assets/Testimonial/2.png";
import img3 from "../../assets/Testimonial/3.png";

function Testimonial() {
  return (
    <>
      <div className="pb-16 md:pb-36 px-4 lg:px-0">
        <div className="container">
          <div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[36px] md:text-[45px] lg:text-[80px] font-Anton font-normal uppercase bg-gradient-to-r from-[#BA0BF9] to-[#5E4AF1] text-transparent bg-clip-text">
                Testimonials
              </h2>
              <p className="text-center max-w-[1100px] text-primaryfontCOlor font-Poppins font-normal text-[14px] md:text-base lg:text-[22px]">
                Explore client testimonials sharing our collaborative journey
                from concept to execution. Witness the impact of dedication,
                expertise, and creative solutions on their projects. Let these
                stories inspire confidence for your next venture
              </p>
            </div>
            <div className="flex gap-x-7 pt-8 md:pt-16 flex-col lg:flex-row">
              <div className="flex flex-col justify-between gap-y-7">
                <div>
                  <div className="bg-gradient-to-tl from-[#b90bf92d] from-100% to-[#5E4AF1] to-0% flex flex-col sm:flex-row items-center gap-x-[18px]  lg:h-[400px] overflow-hidden">
                    <div className="w-[400px] h-[250px] md:h-full">
                      <img
                        src={img1}
                        alt={img1}
                        className="w-full object-cover h-full"
                      />
                    </div>
                    <div className="max-w-[500px] lg:max-w-[500px] sm:max-w-[356px] mt-4 md:mt-0 px-4 md:px-0 pb-5 md:pb-0">
                      <h4 className="text-[26px] md:text-[30px] lg:text-[39px] font-Anton font-normal text-primaryfontCOlor capitalize pb-2 lg:pb-5 leading-[30px] md:leading-[40px] lg:leading-[60px]">
                        “Exceptional Service, Outstanding Results!”
                      </h4>
                      <p className="text-[12px] lg:text-[20px] font-Poppins font-normal text-primaryfontCOlor">
                        Exceptional experience with this team! Their commitment
                        to excellence and creativity surpassed my expectations.
                        From concept to delivery, they turned my vision into a
                        remarkable reality. Highly recommended for outstanding
                        results!
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gradient-to-tl from-[#b90bf92d] from-100% to-[#5E4AF1] to-0% flex  flex-col sm:flex-row-reverse items-center gap-x-[18px] lg:h-[400px] overflow-hidden">
                    <div className="w-[400px] h-[250px] md:h-full">
                      <img
                        src={img2}
                        alt={img2}
                        className="w-full object-cover h-full"
                      />
                    </div>
                    <div className="max-w-[500px] lg:max-w-[500px] sm:max-w-[356px] pl-4 pb-5 md:pb-0 mt-4 md:mt-0">
                      <h4 className="text-[26px] md:text-[30px] lg:text-[39px] font-Anton font-normal text-primaryfontCOlor capitalize pb-2 lg:pb-5 leading-[30px] md:leading-[40px] lg:leading-[60px]">
                        “Impressive Results, Seamless Collaboration!”
                      </h4>
                      <p className="text-[12px] lg:text-[20px] font-Poppins font-normal text-primaryfontCOlor">
                        Delighted with this team! Seamless collaboration,
                        attention to detail, and creative expertise exceeded my
                        expectations. From concept to execution, they brought my
                        ideas to life with impressive results. Highly
                        recommended for a top-notch experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ============= */}
              <div>
                <div className="mt-6 bg-gradient-to-tl from-[#b90bf92d] from-100% to-[#5E4AF1] to-0% flex items-center gap-y-[18px] flex-col sm:flex-row lg:flex-col lg:w-[411px] lg:h-[830px]">
                  <div className="w-full">
                    <img
                      src={img3}
                      alt={img3}
                      className="w-full lg:h-[450px] object-cover"
                    />
                  </div>
                  <div className="px-5 pb-5 md:pb-9 sm:max-w-[356px] lg:max-w-[480px]">
                    <h4 className="text-[28px] md:text-[32px] lg:text-[36px] font-Anton font-normal text-primaryfontCOlor capitalize pb-2 md:pb-5">
                      “Exceeding Expectations Every Time!”
                    </h4>
                    <p className="text-[12px] lg:text-[20px] font-Poppins font-normal text-primaryfontCOlor">
                      Consistently exceeding expectations, this team excels in
                      excellence and creative prowess. From concept to delivery,
                      highly recommended for exceptional service and outstanding
                      results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
