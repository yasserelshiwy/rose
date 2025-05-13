"use client";
import { useFormik } from "formik";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { verifyCode } from "../../../store/features/user/user.slice";
export default function verify() {
  const route = useRouter();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      resetCode: "",
    },

    onSubmit: async (values) => {
      dispatch(verifyCode(values)).then((result) => {
        if (result.type === "verifyCode/user/fulfilled") {
          formik.resetForm();
          //   setTimeout(() => {
          //     route.push("/login");
          //   }, 1000);
        } else {
          console.log("filed");
        }
      });
    },
  });

  return (
    <section className="min-h-[60vh]">
      <div className="container flex justify-center items-center min-h-[60vh]">
        <div className="form  p-8 rounded-4xl  shadow my-10 w-full md:w-[75%] lg:w-1/2 border border-gray-100">
          <h2 className=" text-2xl md:text-3xl mb-6">Verify Code</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="resetCode mb-4">
              <input
                type="tel"
                name="resetCode"
                value={formik.values.resetCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="resetCode"
                className=" rounded-3xl shadow-[0px_0px_10px_-1px_#ddd] outline-none p-3 border border-transparent w-full transition-[border] duration-300 focus:border focus:border-[#f82ba96e] focus:shadow-[0px_0px_6px_-1px_#F82BA9] "
              />
            </div>
            <div className="flex justify-end items-center gap-1">
              <p className="text-sm text-[#313131] font-medium">
                Didn’t receive a code?
              </p>
              <button className="text-[#F82BA9] text-sm border-b font-semibold cursor-pointer border-[#F82BA9]">
                Resend
              </button>
            </div>
            <button className="bg-[#F82BA9] py-3 rounded-3xl mt-5 mb-2 w-full cursor-pointer">
              Recover Password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
