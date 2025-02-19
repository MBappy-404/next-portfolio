/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
// import heroBg from "@/public/hero_bg.svg";
import heroImage from "@/public/hero_image3.png";
import heroBg from "@/public/hero_bg.svg";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section
      className=""
      style={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1300px] mx-auto md:px-5 px-3 py-5 md:py-16 ">
        <div className=" flex flex-col md:flex-row  justify-between items-center gap-10">
          <div className="hidden md:block  ">
            <div className="flex flex-col justify-end gap-y-8">
              <div className="px-5 py-5 text-xl text-white bg-gradient-to-r from-transparent  to-[#161355] rounded-r-full">
                Frontend Developer
              </div>
              <div className="px-5 py-5 text-xl text-white bg-gradient-to-r from-transparent  to-[#161355] rounded-r-full">
                MERN Stack Developer
              </div>
              <div className="px-5 py-5 text-xl text-white bg-gradient-to-r from-transparent  to-[#161355] rounded-r-full">
                Full Stack Developer
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-center items-center">
            <div className="relative">
              <Image
                src={heroImage}
                alt="hero"
                width={400}
                height={400}
                className="relative z-10"
              />

              {/* Overlay at Bottom 20% with Custom Color */}
              <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-[#110f46f6] to-transparent z-20"></div>
            </div>

            <h2 className="text-3xl md:text-6xl -translate-y-5 z-30   text-white font-bold">
              SAROAR JAHAN
            </h2>
          </div>

          <div className="flex flex-row-reverse  gap-10 items-center ">
            <div
              // data-aos="fade-up"
              // data-aos-duration="1000"
              className="  py-10 md:py-10 text-gray-200"
            >
              <div className=" md:-ml-12  grid  grid-cols-1 gap-y-5   text-center  ">
                <div className="flex flex-col  p-2 border-dashed border-b  border-r   border-gray-700 justify-start   lg:m-6">
                  <span className="text-xl font-semibold lg:text-3xl">
                    2Y+
                  </span>
                  <span className="text-sm text-gray-400 font-semibold ">
                    Experience
                  </span>
                </div>
                <div className="flex flex-col  p-2 border-dashed border-r border-b   md:border-r border-gray-700 justify-start  lg:m-6">
                  <span className="text-xl font-semibold lg:text-3xl">
                    20+
                  </span>
                  <span className="text-sm text-gray-400 font-semibold ">
                    Projects Done
                  </span>
                </div>

                <div className="flex flex-col  p-2 border-dashed border-b border-r border-gray-700  justify-start   lg:m-6">
                  <span className="text-xl font-semibold lg:text-3xl">
                    10+
                  </span>
                  <span className="text-sm text-gray-400 font-semibold ">
                    Happy Clients
                  </span>
                </div>
              </div>
            </div>
            <div className="md:hidden ">
              <div className="flex flex-col    gap-y-5">
                <div className="pr-5 py-5 text-base text-white bg-gradient-to-r from-transparent  to-[#161355] rounded-r-full">
                  Web Developer
                </div>
                <div className="pr-5 py-5 text-base text-white bg-gradient-to-r from-transparent  to-[#161355] rounded-r-full">
                  MERN Stack Developer
                </div>
                <div className="pr-5 py-5 text-base text-white bg-gradient-to-r from-transparent  to-[#161355] rounded-r-full">
                  Full Stack Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
