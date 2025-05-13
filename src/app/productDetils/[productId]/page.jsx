"use client";
import Loading from "../../../components/Loading/Loading";
import axios from "axios";
import { use, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperNavButton from "../../../components/SwiperNavButton/SwiperNavButton";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Card from "../../../components/Card/Card";
export default function page(props) {
  const params = use(props.params);
  const id = params.productId;
  const [product, setProduct] = useState(null);
  const [specificProducts, setSpecificProducts] = useState(null);

  async function getProducts() {
    const options = {
      url: "https://flower.elevateegy.com/api/v1/products",
      method: "GET",
    };
    const { data } = await axios.request(options);
    setProduct(data.products);
  }
  async function getSpecificProducts() {

  const options = {
    url: `https://flower.elevateegy.com/api/v1/products/${id}`,
    method: "GET",
  };
  const { data } = await axios.request(options);
  setSpecificProducts(data.product);
  console.log(data)

  }

  useEffect(() => {
    getSpecificProducts();
    getProducts();
  }, [id]);
  return (
    <div className="container min-h-[70vh]">
      {specificProducts ? (
        <>
          {" "}
          <section className="grid grid-cols-4 md:grid-cols-12 gap-16 py-4   ">
            <div className="col-span-4  md:col-span-5 overflow-hidden   w-full">
              <ReactImageGallery
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={false}
                items={specificProducts.images.map((image) => {
                  return { original: image, thumbnail: image };
                })}
              />
            </div>
            <div className="col-span-4 md:col-span-7  w-full mt-5 space-y-4">
              <h2 className="text-2xl  font-semibold mb-1 ">
                {specificProducts.title}
              </h2>
              <p className="tracking-wider text-[16px] font-semibold  text-[#F05454]">
                <span className="text-[#a6a9ad] ml-1 relative before:absolute before:w-[115%] before:h-[1px] before:top-[50%] before:left-[-3px] before:translate-y-[-50%] before:bg-[#a6a9ad] ">
                  <i className="fa-solid fa-dollar-sign "></i>
                  {specificProducts.price}
                </span>
                <i className="fa-solid fa-dollar-sign ml-1"></i>
                {specificProducts.priceAfterDiscount}
              </p>
              <p className=" text-lg md:text-sm xl:text-[16px] text-[#757F95] leading-6 xl:leading-8">
                {specificProducts.description}
              </p>
              <p className="text-[#757F95]  text-lg ">
                <span className="font-bold">Category: </span>
                {specificProducts.slug}
              </p>

              <div className=" flex justify-start items-center gap-4">
                <button className=" cursor-pointer bg-[#F82BA9] transition-colors py-2 px-4  rounded-xl text-white font-semibold ">
                  <i className="fa-solid fa-bag-shopping text-white "></i> Add
                  To Card
                </button>

              </div>
            </div>
          </section>
        </>
      ) : (
        <Loading />
      )}
      <section className="py-10">
        <div className="title-section mt-4 mb-8">
          <h2 className="text-2xl font-semibold ">
            <span className=" relative before:absolute before:w-[101%] before:h-3 before:bg-[#FEEDF7] before:rounded-2xl before:bottom-0 before:-z-10 ">
              <span className="relative before:absolute before:w-[98%] before:h-[2px] before:bg-[#F82BA9] before:rounded-2xl before:bottom-0">
                Rel
              </span>
              ated
            </span>
            Items
          </h2>
        </div>
        {product ? (
          <>
            {" "}
            <div className="">
              <Swiper
                className=""
                loop={true}
                slidesPerView={5}
                spaceBetween={15}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  420: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  950: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },

                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                keyboard={{ enabled: true }}
              >
                <SwiperNavButton bgcolor={"#F82BA9"} />
                {product.map((product) => (
                  <SwiperSlide
                    key={product.id}
                    className="md:py-2 py-5 px-6 md:px-1"
                  >
                    <Card
                      title={product.title}
                      id={product._id}
                      rate={product.rateAvg}
                      price={product.priceAfterDiscount}
                      sellPrice={product.price}
                      image={product.imgCover}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </section>
    </div>
  );
}
