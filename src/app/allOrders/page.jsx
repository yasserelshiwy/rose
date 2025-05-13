"use client";
import OrderCards from "../../components/OrderCard/OrderCard";
import Loading from "../../components/Loading/Loading";
import { getOrders } from "../../store/features/payAndOrder/payAndOrder.slice";
import { useEffect } from "react";
import noOrder from "../../../public/images/no-order-a-flat-rounded-icon-is-up-for-premium-use-vector.jpg";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  const dispatch = useDispatch();
  const { token } = useSelector(function (store) {
    return store.userReducer;
  });
  const { orderData, loading } = useSelector(function (store) {
    return store.payAndOrderReducer;
  });
  useEffect(() => {
    if (token) dispatch(getOrders());
  }, [dispatch, token]);

  return (
    <section className="min-h-[58vh] py-10">
      <div className="container">
        {loading ? (
          <Loading />
        ) : orderData && orderData.length > 0 ? (
          orderData.map((order, index) => (
            <div
              key={index}
              className="border-2 border-[#F82BA9] p-4 py-6 mb-8 rounded-3xl space-y-6"
            >
              <div className="flex flex-col md:flex-row gap-4 md:justify-between items-center">
                <p className="font-bold text-lg">
                  Order Number:
                  <span className="text-[16px] ml-1 text-gray-600">
                    {order.orderNumber}
                  </span>
                </p>
                <div className="flex justify-center items-center gap-2">
                  {order.isPaid ? (
                    <p className="border rounded-2xl px-2 py-1 font-bold text-green-600">
                      Paid Order
                    </p>
                  ) : (
                    <p className="border rounded-2xl px-2 py-1 font-bold text-red-700">
                      Unpaid Order
                    </p>
                  )}
                  {order.isDelivered ? (
                    <p className="border rounded-2xl px-2 py-1 font-bold text-green-600">
                      Delivered
                    </p>
                  ) : (
                    <p className="border rounded-2xl px-2 py-1 font-bold text-red-700">
                      Delivering
                    </p>
                  )}
                </div>
              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {order.orderItems.map((product, index) => (
                  <OrderCards
                    key={product.product.id}
                    id={product.product._id}
                    title={product.product.title}
                    rate={product.product.rateAvg}
                    price={product.product.priceAfterDiscount}
                    sellPrice={product.product.price}
                    image={product.product.imgCover}
                  />
                ))}
              </div>


              <div className="flex flex-col md:flex-row gap-4 md:justify-between items-center pr-4">
                <p className="text-lg font-semibold text-gray-800">
                  Total Price:
                  <span className="ml-1 text-[16px] text-[#F82BA9]">
                    {order.totalPrice}$
                  </span>
                </p>
                <p className="ml-1 text-[16px] text-[#F82BA9]">
                  {new Date(order.createdAt).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))
        ) : (

          <section className="min-h-[55vh] py-15">
            <div className="container">
              <div className="w-full flex justify-center items-center">
                <Image
                  src={noOrder}
                  alt="noOrder image"
                  className="w-[75%] lg:w-[50%] xl:w-[30%]"
                />
              </div>
              <div className="flex justify-center items-center flex-col gap-4">
                <h2 className="text-lg font-semibold">
                  There are no orders now
                </h2>
                <Link
                  href="/"
                  className="text-[#fff] bg-[#F82BA9] rounded-2xl py-3 p-4 text-sm cursor-pointer"
                >
                  Go To Home
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
