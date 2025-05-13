"use client";
import "swiper/css";
import "swiper/css/pagination";
import clint1 from "../../../public/images/70e9b56d751d07f53392d7a84aa55817.jpeg";
import clint2 from "../../../public/images/63954b84f535095b1622bd983beb1def.jpeg";
import clint3 from "../../../public/images/8c5d69e78d250271b7d52d3547080051.jpeg";
import clint4 from "../../../public/images/5ce13b70816dfe02e32b88d3f3732de3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperNavButton from "../SwiperNavButton/SwiperNavButton";
import CustomerCard from "./CustomerCard";

const customerData = [
  {
    id: 1,
    img: clint1,
    name: "Ahmed Mohamed",
    type: "Customer",
    description:
      "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
  },
  {
    id: 2,

    img: clint2,
    name: "Ahmed Mohamed",
    type: "Customer",
    description:
      "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
  },
  {
    img: clint3,
    name: "Ahmed Mohamed",
    type: "Customer",
    description:
      "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
  },
  {
    id: 3,

    img: clint4,
    name: "Ahmed Mohamed",
    type: "Customer",
    description:
      "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
  },
  {
    id: 4,

    img: clint1,
    name: "Ahmed Mohamed",
    type: "Customer",
    description:
      "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
  },
  {
    id: 5,

    img: clint1,
    name: "Ahmed Mohamed",
    type: "Customer",
    description:
      "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
  },
  {
    id: 6,

    img: clint1,
    name: "Ahmed Mohamed",
    type: "Customer",
    description:
      "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
  },
  {
    id: 7,

    img: clint1,
    name: "Ahmed Mohamed",
    type: "Customer",
    description:
      "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
  },
];
export default function Customer() {
  return (
    <section className=" py-18 customer my-15 ">
      <div className="container ">
        <div className="card-box ">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            loop={true}
            pagination={true}
            modules={[Pagination]}
            keyboard={{ enabled: true }}
            className="w-full relative !py-8 custom-swiper "
          >
            <SwiperNavButton bgcolor={"#F82BA9"} />
            {customerData.map((item) => (
              <>
                <SwiperSlide key={item.id}>
                  <CustomerCard
                    img={item.img}
                    type={item.type}
                    name={item.name}
                    description={item.description}
                  />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
