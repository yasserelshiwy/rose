"use client";
import giftImg from "../../../public/images/Red christmas gifts with white ribbon.png";
import swiperBg from "../../../public/images/swiperBackground.png";
import swiperBg1 from "../../../public/images/c0b09b5746e8d70ae00bd5fc9448462f.jpeg";
import swiperBg2 from "../../../public/images/4122a6e76a9ce433b02449c3172be3da.jpeg";
import swiperBg3 from "../../../public/images/d1d909d40022b4f9340644e3b65ac6f2.jpeg";
import card1 from "../../../public/images/1.png";
import card2 from "../../../public/images/2.png";
import card3 from "../../../public/images/3.png";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperNavButton from "../SwiperNavButton/SwiperNavButton";

export default function HomeSwiper() {
  return (
    <>
      <div className="container">
        <div className="header grid grid-cols-12 gap-7">
          <div className="gift col-span-12 lg:col-span-3 w-full relative rounded-lg overflow-hidden min-h-[400px]">
            <Image src={giftImg} alt="Gift" fill className="object-cover" />
            <div className="text absolute z-10 bottom-8 left-4 right-0">
              <span className="text-[#F82BA9] font-bold tracking-widest">
                Start $10.99
              </span>
              <span className="text-[26px] font-semibold block max-w-[70%]">
                Special Gifts Box For Your Love
              </span>
              <button className="bg-[#F82BA9] text-white py-2 px-4 rounded cursor-pointer">
                Shop Now <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>

          <div className="swiper col-span-12 lg:col-span-9 w-full rounded-lg">
            <Swiper
              className="home-swiper"
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              pagination={true}
              loop={true}
              keyboard={{ enabled: true }}
            >
              <SwiperNavButton bgcolor={"#F82BA9"} />
              <SwiperSlide>
                <div className="w-full h-[450px] relative overflow-hidden rounded-lg  ">
                  <div className="text absolute top-20 w-[90%] left-[10px] md:left-15 text-9xl z-20 md:w-[420px] ">
                    <h6 className="text-[#F82BA9] text-[20px] font-semibold mb-3 tracking-widest  uppercase">
                      Best Gift Shop
                    </h6>
                    <h2 className="text-[#160E4B] text-[21px] md:text-2xl md:text-[45px] font-bold">
                      Choose Perfect{" "}
                      <span className="text-[#F82BA9]">Gifts </span>
                      From Us
                    </h2>
                    <span className="text-[#160E4B] text-sm md:text-[16px] font-normal block mt-3 tracking-wider leading-7">
                      Culpa ducimus nesciunt aliquam non rerum esse recusandae
                      omnis. Rerum optio dolores et.
                    </span>
                    <button className="text-xs md:text-[18px] p-3 rounded-[8px] bg-[#F82BA9] text-white relative -top-15 cursor-pointer">
                      Shop Now <i className="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                  <Image
                    src={swiperBg}
                    alt="Swiper Background"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-[450px] relative overflow-hidden rounded-lg  ">
                  <div className="text absolute top-20 w-[90%] left-[10px] md:left-15 text-9xl z-20 md:w-[420px] ">
                    <h6 className="text-[#F82BA9] text-[20px] font-semibold mb-3 tracking-widest  uppercase">
                      Best Gift Shop
                    </h6>
                    <h2 className="text-[#160E4B] text-[21px] md:text-2xl md:text-[45px] font-bold">
                      Choose Perfect{" "}
                      <span className="text-[#F82BA9]">Gifts </span>
                      From Us
                    </h2>
                    <span className="text-[#160E4B] text-sm md:text-[16px] font-normal block mt-3 tracking-wider leading-7">
                      Culpa ducimus nesciunt aliquam non rerum esse recusandae
                      omnis. Rerum optio dolores et.
                    </span>
                    <button className="text-xs md:text-[18px] p-3 rounded-[8px] bg-[#F82BA9] text-white relative -top-15 cursor-pointer">
                      Shop Now <i className="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                  <Image
                    src={swiperBg1}
                    alt="Swiper Background"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-[450px] relative overflow-hidden rounded-lg  ">
                  <div className="text absolute top-20 w-[90%] left-[10px] md:left-15 text-9xl z-20 md:w-[420px] ">
                    <h6 className="text-[#F82BA9] text-[20px] font-semibold mb-3 tracking-widest  uppercase">
                      Best Gift Shop
                    </h6>
                    <h2 className="text-[#160E4B] text-[21px] md:text-2xl md:text-[45px] font-bold">
                      Choose Perfect{" "}
                      <span className="text-[#F82BA9]">Gifts </span>
                      From Us
                    </h2>
                    <span className="text-[#160E4B] text-sm md:text-[16px] font-normal block mt-3 tracking-wider leading-7">
                      Culpa ducimus nesciunt aliquam non rerum esse recusandae
                      omnis. Rerum optio dolores et.
                    </span>
                    <button className="text-xs md:text-[18px] p-3 rounded-[8px] bg-[#F82BA9] text-white relative -top-15 cursor-pointer">
                      Shop Now <i className="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                  <Image
                    src={swiperBg2}
                    alt="Swiper Background"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-[450px] relative overflow-hidden rounded-lg  ">
                  <div className="text absolute top-20 w-[90%] left-[10px] md:left-15 text-9xl z-20 md:w-[420px] ">
                    <h6 className="text-[#F82BA9] text-[20px] font-semibold mb-3 tracking-widest  uppercase">
                      Best Gift Shop
                    </h6>
                    <h2 className="text-[#160E4B] text-[21px] md:text-2xl md:text-[45px] font-bold">
                      Choose Perfect{" "}
                      <span className="text-[#F82BA9]">Gifts </span>
                      From Us
                    </h2>
                    <span className="text-[#160E4B] text-sm md:text-[16px] font-normal block mt-3 tracking-wider leading-7">
                      Culpa ducimus nesciunt aliquam non rerum esse recusandae
                      omnis. Rerum optio dolores et.
                    </span>
                    <button className="text-xs md:text-[18px] p-3 rounded-[8px] bg-[#F82BA9] text-white relative -top-15 cursor-pointer">
                      Shop Now <i className="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                  <Image
                    src={swiperBg3}
                    alt="Swiper Background"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-7">
          <div className="card w-full relative">
            <div className="text absolute top-12 right-5 text-right max-w-[240px]">
              <h6 className="text-[#ffffff] text-[12px] font-medium mb-3 ">
                Best Gift Shop
              </h6>
              <h2 className="text-[#160E4B] text-[20px] font-bold">
                Awesome Gifts Box Collectons
              </h2>
              <button className="cursor-pointer text-[16px] bg-[#F82BA9] text-white py-2 px-4 rounded-full mt-3">
                Shop Now <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>
            <Image
              src={card1}
              alt="Gift"
              className="object-cover rounded-lg w-full h-[272px]"
            />
          </div>
          <div className="card w-full relative">
            <div className="text absolute top-12 right-5 text-right max-w-[240px]">
              <h6 className="text-[#F82BA9] text-[12px] font-medium mb-3 ">
                Best Gift Shop
              </h6>
              <h2 className="text-[#160E4B] text-[20px] font-bold">
                Awesome Gifts Box Collectons
              </h2>
              <button className="cursor-pointer text-[16px] bg-[#F82BA9] text-white py-2 px-4 rounded-full mt-3">
                Shop Now <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>
            <Image
              src={card2}
              alt="Gift"
              className="object-cover rounded-lg w-full h-[272px]"
            />
          </div>
          <div className="card w-full relative">
            <div className="text absolute top-12 right-5 text-right max-w-[240px]">
              <h6 className="text-[#F82BA9] text-[12px] font-medium mb-3 ">
                Best Gift Shop
              </h6>
              <h2 className="text-[#160E4B] text-[20px] font-bold">
                Awesome Gifts Box Collectons
              </h2>
              <button className="cursor-pointer text-[16px] bg-[#F82BA9] text-white py-2 px-4 rounded-full mt-3">
                Shop Now <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>
            <Image
              src={card3}
              alt="Gift"
              className="object-cover rounded-lg w-full h-[272px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
