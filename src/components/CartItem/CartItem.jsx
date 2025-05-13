"use client";
import {
  decreaseQuantityCartProducts,
  deleteSpecificCartProducts,
  fetchCartProducts,
  increaseQuantityCartProducts,
} from "../../store/features/cart/cart.slice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CartItem({
  title,
  price,
  quant,
  total,
  img,
  id,
  disPrice,
}) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col space-y-2 md:space-y-0 justify-center border rounded-2xl py-2 border-gray-300 md:border-none md:grid md:grid-cols-6 md:justify-items-center items-center">
      <div className="rounded-xl overflow-hidden border border-gray-300">
        <Image
          src={img}
          width={80}
          height={80}
          alt="product image"
          className=" object-cover h-[80px] "
        />
      </div>

      <div className="name line-clamp-2 font-semibold text-[#160E4B] text-center">
        <h4>{title}</h4>
      </div>
      <p className="price text-sm font-semibold  ">
        <i className="fa-solid fa-dollar-sign"></i>
        {disPrice} {""}
        <span className="text-gray-400 ml-1 relative before:absolute before:w-[115%] before:h-[1px] before:top-[50%] before:left-[-3px] before:translate-y-[-50%] before:bg-gray-400 ">
          <i className="fa-solid fa-dollar-sign"></i>
          {price}
        </span>
      </p>
      <div className="quantity flex gap-3 items-center flex-row-reverse">
        <i
          onClick={() => {
            dispatch(increaseQuantityCartProducts({ quant, id }));
          }}
          className="fa-solid fa-plus p-2 block cursor-pointer bg-[#FEEDF7] text-[#F82BA9] rounded-full"
        ></i>
        <span className="text-[#F82BA9] ">{quant}</span>
        <i
          onClick={() => {
            dispatch(decreaseQuantityCartProducts({ quant, id }));
          }}
          className="fa-solid fa-minus p-2 block cursor-pointer bg-[#FEEDF7] text-[#F82BA9] rounded-full"
        ></i>
      </div>
      <div className="total font-semibold ">${total}</div>
      <button
        onClick={() => {
          dispatch(deleteSpecificCartProducts(id));
        }}
        className="delete w-8 h-8 rounded-full border-[1px] border-gray-200 flex justify-center items-center"
      >
        <i className="fa-solid fa-xmark text-[#160E4B] p-2 block cursor-pointer"></i>
      </button>
    </div>
  );
}
