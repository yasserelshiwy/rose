import { useSwiper } from "swiper/react";

export default function SwiperNavButton ({bgcolor}) {
  const swiper = useSwiper();
  return (
    <div className="flex justify-between absolute top-[50%] translate-y-[-50%]  z-50 w-full gap-4 my-3">
      <button
        className={` cursor-pointer w-8 h-8 rounded-full bg-[${bgcolor}]  flex justify-center items-center  text-white  hover:text-white hover:scale-105 transition-all `}
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <i className="fa-solid fa-angle-left text-lg"></i>
      </button>
      <button
        className={` cursor-pointer w-8 h-8 rounded-full  bg-[${bgcolor}]  flex justify-center items-center  text-white  hover:text-white hover:scale-105 transition-all `}
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <i className="fa-solid fa-angle-right text-lg"></i>
      </button>
    </div>
  );
};
