import React from "react";
import { alexBrush } from "./AlexBrush";
import InstagramCard from "./InstagramCard";
import img1 from "../../../public/images/52af616b28978765b94695c8ecb86d57994a01c4.png";
import img2 from "../../../public/images/c930e0aaf4c90f6b368095f8ea4c37686f479492.png";
import img3 from "../../../public/images/1d86d2292b00d8f9f595b77b0f15512a2814eb15.png";
import img4 from "../../../public/images/efec49e078cfd2204123d8636cf1b6f3df483ede.png";
import img5 from "../../../public/images/5d249a374fcf9f813beebe730fa7770febca61d2.png";
export default function InstagramAbout() {
  return (
    <section className="py-8">
      <div className="container">
        <div className="title-section w-full flex justify-center items-center flex-col gap-1">
          <p className="text-2xl font-semibold ">
            <span className=" relative py-1 before:absolute  before:w-[101%] before:h-3 before:bg-[#FEEDF7] before:rounded-2xl before:bottom-0 before:-z-10 ">
              <span className="relative font-bold before:absolute before:w-[98%] before:h-[2px] before:bg-[#F82BA9] before:rounded-2xl before:-bottom-1">
                Instagram
              </span>{" "}
              <span
                className={`text-[#F82BA9] text-4xl  ${alexBrush.className}`}
              >
                @R
              </span>
            </span>
            <span className={`text-[#F82BA9] text-4xl  ${alexBrush.className}`}>
              ose
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-8 ">
          <InstagramCard img={img1} />
          <InstagramCard img={img2} />
          <InstagramCard img={img3} />
          <InstagramCard img={img4} />
          <InstagramCard img={img5} />
        </div>
      </div>
    </section>
  );
}
