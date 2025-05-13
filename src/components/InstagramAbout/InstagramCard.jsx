import Image from "next/image";
import React from "react";

export default function InstagramCard({ img }) {
  return (
    <div className="card">
      <div className="card-img rounded-2xl overflow-hidden relative group cursor-pointer ">
        <Image src={img} className="w-full h-[220px]  object-cover" alt="instagram image"/>
        <div className=" absolute w-full h-full top-0 left-0 flex bg-[#00000066] justify-center items-center opacity-0  group-hover:opacity-100 transition-[opacity] duration-300 ">
          <a
            href="/"
            className="w-8 h-8 rounded-full bg-[#F82BA9] text-white flex justify-center items-center"
          >
            <i className="fa-brands fa-instagram text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
