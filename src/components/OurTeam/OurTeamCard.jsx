import Image from "next/image";
import React from "react";

export default function OurTeamCard({ img, name, jop }) {
  return (
    <div className="card p-6  shadow rounded-2xl">
      <div className="card-img h-[250px]">
        <Image src={img} className="w-full h-full object-cover" alt="client img" />
      </div>
      <div className="card-title text-center font-semibold py-4 border-b border-[#757F95]">
        <h2 className="text-[20px]">{name}</h2>
        <p className="text-lg text-[#F82BA9]">{jop}</p>
      </div>
      <div className="card-footer pt-4 px-2 flex justify-between items-center">
        <a
          href="/"
          className="w-8 h-8 rounded-full bg-[#F82BA9] text-white flex justify-center items-center"
        >
          <i className="fa-brands fa-facebook text-xl "></i>
        </a>
        <a
          href="/"
          className="w-8 h-8 rounded-full bg-[#F82BA9] text-white flex justify-center items-center"
        >
          <i className="fa-brands fa-instagram text-xl"></i>
        </a>
        <a
          href="/"
          className="w-8 h-8 rounded-full bg-[#F82BA9] text-white flex justify-center items-center"
        >
          <i className="fa-brands fa-twitter text-xl "></i>
        </a>
        <a
          href="/"
          className="w-8 h-8 rounded-full bg-[#F82BA9] text-white flex justify-center items-center"
        >
          <i className="fa-brands fa-youtube text-xl "></i>
        </a>
      </div>
    </div>
  );
}
