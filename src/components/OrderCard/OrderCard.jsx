"use client";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addCartProduct } from "../../store/features/cart/cart.slice";

export default function OrderCards({
  title,
  rate,
  price,
  sellPrice,
  image,
  id,
}) {
  const dispatch = useDispatch();
  return (
    <div className="card w-full relative px-2 md:px-0 group">
      <div className="rounded-xl overflow-hidden relative w-full h-64 group">
        <Image
          src={image}
          alt="Product image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="card-layer absolute h-full w-full top-[400px] group-hover:top-0 transition-[top] duration-500 left-0 flex justify-center items-center gap-6 bg-[#F82BA9B2]">
          <Link
            href={`/productDetils/${id}`}
            className="bg-[#F82BA9] h-8 w-8 rounded-full cursor-pointer flex justify-center items-center"
          >
            <i className="fa-solid fa-eye text-white"></i>
          </Link>
          <Link
            href={"/wishList"}
            className="bg-[#F82BA9] h-8 w-8 rounded-full cursor-pointer flex justify-center items-center"
          >
            <i className="fa-solid fa-heart text-white"></i>
          </Link>
        </div>
      </div>
      <div className="card-body  mt-3 px-3 space-y-2 py-3">
        <h2 className="card-title text-xl font-semibold line-clamp-1">
          {title}
        </h2>
        <div className=" flex justify-between items-center ">
          <div className="space-y-2 ">
            <Rating style={{ maxWidth: 90 }} value={rate} readOnly />
            <p className="tracking-wider text-[14px]  text-[#F05454]">
              <i className="fa-solid fa-dollar-sign"></i>
              {price} {""}
              <span className="text-[#dce0e5] ml-1 relative before:absolute before:w-[115%] before:h-[1px] before:top-[50%] before:left-[-3px] before:translate-y-[-50%] before:bg-[#dce0e5] ">
                <i className="fa-solid fa-dollar-sign"></i>
                {sellPrice}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
