"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../Card/Card";
import product from "../../assets/img/photo-1505740420928-5e560c06d30e.jpeg";
import SwiperNavButton from "../SwiperNavButton/SwiperNavButton";
import Loading from "../Loading/Loading";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function PestSeller() {
  async function getProducts() {
    const options = {
      url: "https://flower.elevateegy.com/api/v1/products",
      method: "GET",
    };
    return axios.request(options);
  }
  let { data, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: getProducts,
    staleTime: 6 * 6 * 60 * 1000,
    refetchOnMount: false,
  });
  if (isLoading) return <Loading />;
  return (
    <section>
      <div className="container ">
        <div className="inner grid grid-cols-12 gap-3">
          <div className=" left-side col-span-12 md:col-span-4 lg:col-span-3 space-y-4 md:space-y-4 lg:space-y-6 lg:mt-4">
            <h2 className="text-lg text-[#F82BA9]  md:text-[17px] xl:text-[20px] font-bold tracking-widest uppercase">
              Premium Gifts
            </h2>
            <div>
              <h2 className=" text-2xl md:text-[24px] xl:text-[28px] my-2 md:my-1 xl:my-2 font-bold flex flex-col">
                <span>
                  Pest <span className="text-[#F82BA9]">Seller</span>
                </span>
                <span>
                  <span className="text-[#F82BA9]">Gifts</span> And Products
                </span>
              </h2>
              <p className="text-lg md:text-sm xl:text-[16px] text-[#757F95] leading-6 xl:leading-8 ">
                Recusandae tempora aut laborum molestias veniam. A commodi sequi
                accusantium ullam cupiditate. Neque quidem qui et autem dolor
                dicta necessitatibus ut ad.
              </p>
            </div>
            <button className="bg-[#F82BA9] px-6 md:px-3 py-2 rounded-xl text-white md:text-md xl:text-[18px]">
              Explore More <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
          <div className="card-box col-span-12 md:col-span-8 lg:col-span-9 flex justify-between items-center bg-red">
            <Swiper
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                950: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              loop={true}
              keyboard={{ enabled: true }}
              className="w-full relative "
            >
              <SwiperNavButton bgcolor={"#F82BA9"} />
              {data.data.products.map((product) => (
                <SwiperSlide>
                  <Card
                    key={product.id}
                    title={product.title}
                    id={product.id}
                    rate={product.rateAvg}
                    price={product.priceAfterDiscount}
                    sellPrice={product.price}
                    image={product.imgCover}
                  />
                </SwiperSlide>
              ))}
           
             
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
