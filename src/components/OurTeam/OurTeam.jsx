import React from "react";
import OurTeamCard from "./OurTeamCard";
import img1 from "../../../public/images/08b69e3557982a38b557393403fccb80da023221.jpg";
import img2 from "../../../public/images/f4dd64b2cb5efc26436935408cf9f760376adac7.jpg";
import img3 from "../../../public/images/39366ed9ea0773302268b31c098ba66236963035.jpg";
import img4 from "../../../public/images/6d4b2d971811050e45e924793333a4428fe42379.jpg";
export default function OurTeam() {
  return (
    <section className="py-8">
      <div className="container">
        <div className="title-section w-full flex justify-center items-center flex-col gap-1">
          <h2 className="tracking-widest uppercase text-[16px] text-[#F82BA9]  font-semibold">
            Our Team  
          </h2>
          <p className="text-2xl font-semibold ">
            <span className=" relative before:absolute before:w-[101%] before:h-3 before:bg-[#FEEDF7] before:rounded-2xl before:bottom-0 before:-z-10 ">
              <span className="relative before:absolute before:w-[98%] before:h-[2px] before:bg-[#F82BA9] before:rounded-2xl before:bottom-0">
                Meet Our
              </span>{" "}
              Expert{" "}
            </span>
            <span className="text-[#F82BA9]"> Team</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
          <OurTeamCard
            img={img1}
            name={"Ahmed Mohamed"}
            jop={"Senior Manager"}
          />
          <OurTeamCard
            img={img2}
            name={"Ahmed Mohamed"}
            jop={"Senior Manager"}
          />
          <OurTeamCard
            img={img3}
            name={"Ahmed Mohamed"}
            jop={"Senior Manager"}
          />
          <OurTeamCard
            img={img4}
            name={"Ahmed Mohamed"}
            jop={"Senior Manager"}
          />
        </div>
      </div>
    </section>
  );
}
