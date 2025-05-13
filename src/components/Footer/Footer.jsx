import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer-background py-20 text-center">
      <div className="container">
        <ul className="links grid grid-cols-2 md:grid-cols-3  xl:grid-cols-6  text-sm lg:gap-x-30 gap-y-4 md:gap-y-6 justify-center font-bold">
          <li className="transition-colors text-sm hover:text-[#F82BA9]">
            <Link href="/">About Us</Link>
          </li>
          <li className="transition-colors hover:text-[#F82BA9]">
            <Link href="/">Store Location</Link>
          </li>
          <li className="transition-colors hover:text-[#F82BA9]">
            <Link href="/">Contact Us</Link>
          </li>
          <li className="transition-colors hover:text-[#F82BA9]">
            <Link href="/">Delivery</Link>
          </li>
          <li className="transition-colors hover:text-[#F82BA9]">
            <Link href="/">Privacy Policy</Link>
          </li>
          <li className="transition-colors hover:text-[#F82BA9]">
            <Link href="/">Terms of Service</Link>
          </li>
        </ul>
        <h3 className="font-bold text-xl md:text-[30px] mb-1 mt-8">
          Get <span className="text-[#F82BA9]">20%</span> Off Discount Coupon
        </h3>
        <p className="text-[#757F95] text-sm md:text-[20px] font-medium mb-8">
          By Subscribing to Our Newsletter
        </p>
        <div className="input relative w-fit mx-auto">
          <input
            type="text"
            placeholder="Enter your email"
            className="border-none outline-0 bg-white py-3 px-5 rounded-full font-semibold text-[16px] placeholder:text-[#757F95] block w-full md:min-w-[400px] mx-auto"
          />
          <button className="bg-[#F82BA9] text-xs md:text-lg text-white py-2 px-3 md:px-4 rounded-full font-semibold absolute right-0 top-0 bottom-0 cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
