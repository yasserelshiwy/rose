"use client";
import { useFormik } from "formik";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { forgetPass } from "../../../store/features/user/user.slice";
import { object, string } from "yup";
export default function forget() {
  const route = useRouter();
  const dispatch = useDispatch();

  const validationSchema = object({
    email: string().required("Email  is required").email("Email is invalid"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      dispatch(forgetPass(values)).then((result) => {
        if (result.type === "forgetPass/user/fulfilled") {
          formik.resetForm();
          setTimeout(() => {
            route.push("/login");
          }, 1000);
        }else{
          console.log("filed")
        }
      });
    },
  });

  return (
    <section className="min-h-[60vh]">
      <div className="container flex justify-center items-center min-h-[60vh]">
        <div className="form  p-8 rounded-4xl  shadow my-10 w-full md:w-[75%] lg:w-1/2 border border-gray-100">
          <h2 className=" text-2xl md:text-3xl mb-6">Forgot Your Password ?</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="email mb-3">
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Email"
                className=" rounded-3xl shadow-[0px_0px_10px_-1px_#ddd] outline-none p-3 border border-transparent w-full transition-[border] duration-300 focus:border focus:border-[#f82ba96e] focus:shadow-[0px_0px_6px_-1px_#F82BA9] "
              />
              {formik.errors.email && formik.touched.email && (
                <p className=" text-red-500 text-sm mt-1">
                  *{formik.errors.email}
                </p>
              )}
            </div>

            <button className="bg-[#F82BA9] py-3 rounded-3xl mt-7 mb-2 w-full cursor-pointer">
              Recover Password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
