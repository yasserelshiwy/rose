import Image from "next/image";

export default  function CustomerCard({ img, name, type, description }) {
  return (
    <div className="card bg-white mx-4 lg:mx-0 px-4 py-6 rounded-tl-[40px] rounded-tr-[80px] rounded-b-[80px] ">
      <div className="card-head flex gap-4  justify-center items-center  border-b-[1px] border-[#757f95b5] py-4">
        <div className=" rounded-full  relative before:absolute before:w-8 before:h-[114%] before:bg-[#F82BA9] before:rotate-[300deg]  before:left-[3px] before:top-[11px]   before:rounded-l-full ">
          <Image
            src={img}
            alt=""
            className=" w-14 h-14 rounded-full bg object-cover  relative z-20  "
          />
        </div>
        <div className="text-[17px] font-bold">
          <h2 className="">{name}</h2>
          <p className="  text-[#F82BA9] ">{type} </p>
        </div>
      </div>
      <div className="card-body">
        <p className="text-sm font-normal text-[#757F95] my-5">{description}</p>
      </div>
      <div className="card-footer  flex justify-between">
        <div className="text-[#F82BA9] ml-3 text-md">
          <i className="fa-solid fa-star mr-1"></i>
          <i className="fa-solid fa-star mr-1"></i>
          <i className="fa-solid fa-star mr-1"></i>
          <i className="fa-solid fa-star mr-1"></i>
        </div>
        <div className="text-[#F82BA933] text-6xl mr-7 -mt-2">
          <i className="fa-solid fa-comments"></i>
        </div>
      </div>
    </div>
  );
}
