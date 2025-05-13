"use client";
import React, { useEffect } from "react";
import CartItem from "../../components/CartItem/CartItem";
import {
  deleteCartProducts,
  fetchCartProducts,
} from "../../store/features/cart/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import Link from "next/link";
import emptyCart from "../../../public/images/empty-cart.png";
import Image from "next/image";

export default function Cart() {
  const dispatch = useDispatch();

  const { data, Quant } = useSelector(function (store) {
    return store.cartReducer;
  });
  const { token } = useSelector(function (store) {
    return store.userReducer;
  });

  useEffect(() => {
    dispatch(fetchCartProducts());
  }, [dispatch, token]);
  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <>
      {data == "" || Quant === 0 ? (
        <>
          <section className="min-h-[58vh] py-15">
            <div className="container">
              <div className="w-full flex justify-center items-center">
                <Image
                  src={emptyCart}
                  alt="emptyCart image"
                  className=" w-[75%] lg:w-[50%] xl:w-[30%]"
                />
              </div>
              <div className="flex justify-center items-center flex-col gap-4">
                <h2 className="text-lg font-semibold">
                  Your shopping cart is empty. Go shop now.
                </h2>
                <Link
                  href={"/"}
                  className="text-[#fff] bg-[#F82BA9] rounded-2xl py-3 p-4  text-sm cursor-pointer"
                >
                  {" "}
                  Go To Home
                </Link>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="cart min-h-[58vh] py-20">
          <div className="container">
            <div className="grid grid-cols-12  gap-4 lg:gap-8">
              <div className=" col-span-12 xl:col-span-9 p-3 flex flex-col gap-4">
                <header className=" hidden md:grid md:grid-cols-6 md:justify-items-center">
                  <h4 className="border-b-[2px] text-[13px] lg:text-sm  font-semibold px-2 pb-1 border-[#DEE2E6] ">
                    Image
                  </h4>
                  <h4 className="border-b-[2px] text-[13px] lg:text-sm  font-semibold px-2 pb-1 border-[#DEE2E6] ">
                    Product Name
                  </h4>
                  <h4 className="border-b-[2px] text-[13px] lg:text-sm  font-semibold px-2 pb-1 border-[#DEE2E6] ">
                    Price
                  </h4>
                  <h4 className="border-b-[2px] text-[13px] lg:text-sm  font-semibold px-2 pb-1 border-[#DEE2E6] ">
                    Quantity
                  </h4>
                  <h4 className="border-b-[2px] text-[13px] lg:text-sm  font-semibold px-2 pb-1 border-[#DEE2E6] ">
                    Total
                  </h4>
                  <h4 className="border-b-[2px] text-[13px] lg:text-sm  font-semibold px-2 pb-1 border-[#DEE2E6] ">
                    Delete
                  </h4>
                </header>
                <main className="flex flex-col gap-6">
                  {data ? (
                    <>
                      {data.cartItems.map((product) => (
                        <CartItem
                          key={product.product.id}
                          id={product.product._id}
                          title={product.product.title}
                          img={product.product.imgCover}
                          price={product.product.price}
                          disPrice={product.product.priceAfterDiscount}
                          quant={product.quantity}
                          total={
                            product.product.priceAfterDiscount *
                            product.quantity
                          }
                        />
                      ))}
                    </>
                  ) : (
                    <Loading />
                  )}
                  <footer className="flex flex-col md:flex-row justify-center md:justify-start items-center my-1  gap-2 md:gap-4">
                    <Link
                      href={"/"}
                      className="text-[#fff] bg-[#F82BA9]  rounded-2xl py-3 p-4  text-sm cursor-pointer"
                    >
                      <i className="fa-solid fa-arrow-left"></i> Continue
                      Shopping
                    </Link>
                    <button
                      onClick={() => {
                        dispatch(deleteCartProducts());
                      }}
                      className="text-[#fff] bg-red-500  rounded-2xl py-3 p-4 m-4 text-sm cursor-pointer"
                    >
                      Delete All Product <i className="fa-solid fa-trash"></i>
                    </button>
                  </footer>
                </main>
              </div>
              <div className="col-span-12 xl:col-span-3 p-3">
                <div className="cart-summary bg-[#FEEDF7] px-6 py-10 rounded-2xl">
                  <h3 className="mb-8 text-[#160E4B] font-semibold">
                    Cart Summary
                  </h3>
                  <div className="details flex flex-col gap-8">
                    <div className="sub-total flex w-full justify-between items-center">
                      <h4 className="text-[#160E4B] font-semibold">
                        Sub Total:
                      </h4>
                      <span className="text-[#757F95] ">
                        <i className="fa-solid fa-dollar-sign"></i>{" "}
                        {data ? data.totalPrice : 0}
                      </span>
                    </div>
                    <div className="Discount flex w-full justify-between items-center">
                      <h4 className="text-[#160E4B] font-semibold">
                        Discount:
                      </h4>
                      <span className="text-[#757F95] ">
                        <i className="fa-solid fa-dollar-sign"></i>{" "}
                        {data ? data.discount : 0}
                      </span>
                    </div>
                    <div className="Shipping flex w-full justify-between items-center">
                      <h4 className="text-[#160E4B] font-semibold">
                        {" "}
                        Shipping:{" "}
                      </h4>
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
                      href={"/checkout"}
                      className="text-[#fff] bg-[#F82BA9] rounded-2xl py-4 text-center cursor-pointer"
                    >
                      Checkout Now <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
