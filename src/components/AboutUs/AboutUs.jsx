
import Image from "next/image";
import ship1 from "../../../public/images/ship1.png";
import ship2 from "../../../public/images/ship2.png";
import ship3 from "../../../public/images/ship3.png";
export default function AboutUs() {
  return (
    <div className=" container py-20 mt-8  gap-8 grid grid-cols-1 lg:grid-cols-2">
      <div className="ships flex gap-2 justify-center items-center">

        <div className="ship-1 shrink-0 rounded-[110px] rounded-tl-[50px] w-[300px] h-[350px] relative  after:w-full after:h-[380px] after:border-[5px] after:border-[#F82BA9] after:absolute after:-top-5 after:-left-5 after:rotate-3 after:rounded-[110px] after:rounded-tl-[50px] after:-z-10">
          <Image
            src={ship1}
            alt="Ship 1"
            fill
            className="object-cover rounded-[110px] rounded-tl-[50px]"
          />
        </div>

        <div className="inner-ships flex-col gap-2 hidden lg:flex">
          <div className="ship-2 rounded-full size-[190px] overflow-hidden relative">
            <Image src={ship2} alt="Ship 2" fill className="object-cover" />
          </div>
          <div className="ship-3 rounded-full rounded-tl-1xl w-[200px] h-[150px] overflow-hidden relative">
            <Image src={ship3} alt="Ship 3" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="text  text-center lg:text-left">
        <h2 className="text-[17px] font-bold text-[#F82BA9] tracking-widest">
          About Us
        </h2>
        <p className="font-bold text-[24px] text-center md:text-left mt-4 md:max-w-[410px]">
          We Provide Best And Quality
          <span className="text-[#F82BA9] "> Gifts Box</span> Product For You
        </p>
        <p className="mt-4 text-[#757F95] font-normal text-[16px] max-w-[650px]">
          Recusandae tempora aut laborum molestias veniam. A commodi sequi
          accusantium ullam cupiditate. Neque quidem qui et autem dolor dicta
          necessitatibus ut ad.
        </p>
        <button className=" cursor-pointer bg-[#F82BA9] text-white py-2 px-8 rounded-[5px] mt-4">
          Discover More
        </button>
        <ul className="features mt-4 flex gap-4">
          <div className="col">
            <li className="feature flex gap-2 items-center mb-4">
              <div className="icon">
                <i className="fa-solid fa-check text-white bg-[#8C52FF] p-2.5 rounded-full"></i>
              </div>
              <p className="text-[12px] font-medium">
                Streamlined Shipping Experience
              </p>
            </li>
            <li className="feature flex gap-2 items-center">
              <div className="icon">
                <i className="fa-solid fa-check text-white bg-[#8C52FF] p-2.5 rounded-full"></i>
              </div>
              <p className="text-[12px] font-medium">
                Streamlined Shipping Experience
              </p>
            </li>
          </div>
          <div className="col">
            {" "}
            <li className="feature flex gap-2 items-center mb-4">
              <div className="icon">
                <i className="fa-solid fa-check text-white bg-[#8C52FF] p-2.5 rounded-full"></i>
              </div>
              <p className="text-[12px] font-medium">
                Streamlined Shipping Experience
              </p>
            </li>
            <li className="feature flex gap-2 items-center">
              <div className="icon">
                <i className="fa-solid fa-check text-white bg-[#8C52FF] p-2.5 rounded-full"></i>
              </div>
              <p className="text-[12px] font-medium">
                Streamlined Shipping Experience
              </p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
