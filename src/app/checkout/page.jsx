"use client";
import {
  cashOrder,
  payOnline,
} from "../../store/features/payAndOrder/payAndOrder.slice";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Checkout() {
  const route = useRouter();
  const { data } = useSelector(function (store) {
    return store.cartReducer;
  });
  const { cashData } = useSelector(function (store) {
    return store.payAndOrderReducer;
  });
  const [paymentType, setPaymentType] = useState("");
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      street: "",
      phone: "",
      city: "",
      lat: "",
      long: "",
    },
    onSubmit: async (values) => {
      if (paymentType === "cash") {
        dispatch(cashOrder(values)).then((result) => {
          if (result.type === "cashOrder/pay/fulfilled") {
            formik.resetForm();
            route.push("/allOrders");
          } else {
            console.error("Payment failed");
          }
        });
      } else if (paymentType === "online") {
        dispatch(payOnline(values)).then((result) => {
          if (result.type === "onlineOrder/pay/fulfilled") {
            formik.resetForm();
          } else {
            console.error("Payment failed");
          }
        });
      }
    },
  });

  return (
    <section className="min-h-[58vh] ">
      <div className="container py-10">
        <div className="Checkout grid grid-cols-12  gap-6 lg:gap-8 items-center ">
          <section className="col-span-12 px-10 xl:col-span-9">
            <form>
              <div className="flex flex-col">
                <label htmlFor="street" className="font-medium m-2  ">
                  Street Address:{" "}
                </label>
                <input
                  type="text"
                  name="street"
                  onChange={formik.handleChange}
                  value={formik.values.street}
                  id="street"
                  placeholder="Address"
                  className="rounded-xl  outline-none p-3 border border-gray-200 w-full transition-[border] duration-300 focus:border focus:border-[#f82ba94b] focus:shadow-[0px_0px_6px_-1px_#f82ba94b] "
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="PhoneNumber" className="font-medium m-2  ">
                  Phone Number :{" "}
                </label>
                <input
                  type="tel"
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  id="PhoneNumber"
                  placeholder="Phone Number"
                  className="rounded-xl  outline-none p-3 border border-gray-200 w-full transition-[border] duration-300 focus:border focus:border-[#f82ba94b] focus:shadow-[0px_0px_6px_-1px_#f82ba94b] "
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="City" className="font-medium m-2  ">
                  City :{" "}
                </label>
                <input
                  type="text"
                  name="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  id="City"
                  placeholder="City"
                  className="rounded-xl  outline-none p-3 border border-gray-200 w-full transition-[border] duration-300 focus:border focus:border-[#f82ba94b] focus:shadow-[0px_0px_6px_-1px_#f82ba94b] "
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Country" className="font-medium m-2  ">
                  {" "}
                  Country :{" "}
                </label>
                <input
                  type="text"
                  name="lat"
                  onChange={formik.handleChange}
                  value={formik.values.lat}
                  id="Country"
                  placeholder="Country"
                  className="rounded-xl  outline-none p-3 border border-gray-200 w-full transition-[border] duration-300 focus:border focus:border-[#f82ba94b] focus:shadow-[0px_0px_6px_-1px_#f82ba94b] "
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="State" className="font-medium m-2  ">
                  State :{" "}
                </label>
                <input
                  type="text"
                  name="long"
                  onChange={formik.handleChange}
                  value={formik.values.long}
                  id="State"
                  placeholder="State"
                  className="rounded-xl  outline-none p-3 border border-gray-200 w-full transition-[border] duration-300 focus:border focus:border-[#f82ba94b] focus:shadow-[0px_0px_6px_-1px_#f82ba94b] "
                />
              </div>
              <div className=" flex flex-col md:flex-row justify-center md:justify-start items-center my-4  gap-2 md:gap-4">
                <button
                  onClick={() => {
                    setPaymentType("cash");
                    formik.handleSubmit();
                  }}
                  type="button"
                  className=" text-[#fff] bg-[#F82BA9] rounded-2xl py-2 px-3 text-center  cursor-pointer"
                >
                  Cash on Delivery
                </button>
                <button
                  onClick={() => {
                    setPaymentType("online");
                    formik.handleSubmit();
                  }}
                  type="button"
                  className="text-[#fff] bg-[#F82BA9] rounded-2xl py-2 px-3 text-center  cursor-pointer"
                >
                  pay online
                </button>
              </div>
            </form>
          </section>
          <section className="col-span-12 xl:col-span-3">
            <div className="cart-summary bg-[#FEEDF7] px-6 py-10 rounded-2xl">
              <h3 className="mb-8 text-[#160E4B] font-semibold">
                Your Invoice
              </h3>
              <div className="details flex flex-col gap-8">
                <div className="sub-total flex w-full justify-between items-center">
                  <h4 className="text-[#160E4B] font-semibold">Sub Total:</h4>
                  <span className="text-[#757F95] ">
                    <i className="fa-solid fa-dollar-sign"></i>{" "}
                    {data ? data.totalPrice : 0}
                  </span>
                </div>
                <div className="Discount flex w-full justify-between items-center">
                  <h4 className="text-[#160E4B] font-semibold">Discount:</h4>
                  <span className="text-[#757F95] ">
                    <i className="fa-solid fa-dollar-sign"></i>{" "}
                    {data ? data.discount : 0}
                  </span>
                </div>
                <div className="Shipping flex w-full justify-between items-center">
                  <h4 className="text-[#160E4B] font-semibold"> Shipping: </h4>
                  <span className="text-[#757F95] ">
                    <i className="fa-solid fa-dollar-sign"></i> free
                  </span>
                </div>
                <div className="total flex w-full justify-between items-center">
                  <h4 className="text-[#160E4B] font-semibold">Total:</h4>
                  <span className="text-[#F82BA9] font-semibold">
                    <i className="fa-solid fa-dollar-sign"></i>{" "}
                    {data ? data.totalPriceAfterDiscount : 0}
                  </span>
                </div>
                <Link
                  href={"/cart"}
                  className="text-[#fff] bg-[#F82BA9] rounded-2xl py-4 text-center w-full cursor-pointer"
                >
                  Back To Cart{" "}
                  <i className="fa-solid fa-arrow-right text-white"></i>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
