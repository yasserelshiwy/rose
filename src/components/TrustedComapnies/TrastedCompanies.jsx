import React from 'react';
import company1 from '../../../public/images/trustedCompanies/1.png';
import company2 from '../../../public/images/trustedCompanies/2.png';
import company3 from '../../../public/images/trustedCompanies/3.png';
import company4 from '../../../public/images/trustedCompanies/4.png';
import company5 from '../../../public/images/trustedCompanies/5.png';
import company6 from '../../../public/images/trustedCompanies/6.png';
import Image from 'next/image';

const companies = [company1, company2, company3, company4, company5, company6];

export default function TrustedCompanies() {
  return (
    <div className="bg-[#FEEDF7] p-10 my-12 container rounded-[8px]">
      <div className="title-section w-full flex justify-center items-center flex-col gap-1 mb-4">
        <p className="text-xl md:text-[30px] font-semibold text-center ">
          <span className=" relative before:absolute before:w-[101%] before:h-3 before:bg-[#FEEDF7] before:rounded-2xl before:bottom-0 before:-z-10 ">
            <span className="relative before:absolute before:w-[98%] before:h-[2px] before:bg-[#F82BA9] before:rounded-2xl before:bottom-0">
              Trusted By Over
            </span>{" "}
            <span className="text-[#F82BA9] font-bold">4.5K+ </span>
          </span>
          Companies
        </p>
      </div>
      <div className="companies grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-10 justify-items-center">
        {companies.map((company, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden relative w-[70%] flex  items-center  h-[10px] p-10"
          >
            <Image
              src={company}
              alt={`Company ${index + 1}`}
              className="object-contain"
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
}
