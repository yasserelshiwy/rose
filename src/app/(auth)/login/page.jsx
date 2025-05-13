"use client";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { object, string } from "yup";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
export default function login() {
  const [accountError, setAccountError] = useState(null);

  const router = useRouter();
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const [rememberMe, setRememberMe] = useState(false);
  // !=========show pass state & fn()========>
  const [showPass, setShowPass] = useState("password");
  const [eyeToShow, setEyeToShow] = useState("fa-solid fa-eye-slash");
  function showPassword() {
    if (showPass === "password") {
      setShowPass("text");
      setEyeToShow("fa-regular fa-eye");
    } else {
      setShowPass("password");
      setEyeToShow("fa-solid fa-eye-slash");
    }
  }
  const validationSchema = object({
    email: string()
      .required("Email address is required")
      .email("Email is invalid"),
    password: string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (res?.error) {
        console.log(res.error);
        setAccountError(res.error);
        toast.error(res.error);
      } else {
        setTimeout(() => {
          router.push("/");
        }, 1000);
        setAccountError(null);
        toast.success("login successfully ");
      }
    },
  });

  return (
    <section className="min-h-[60vh]">
      <div className="container flex justify-center items-center min-h-[60vh]">
        <div className="form  p-8 rounded-4xl  shadow my-10 w-full md:w-[75%] lg:w-1/2 border border-gray-100">
          <h2 className=" text-2xl md:text-3xl mb-6"> Login To Your Account</h2>
          <form className=" " onSubmit={formik.handleSubmit}>
            <div className="email mb-5">
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
            <div className=" relative password mb-5">
              <input
                type={showPass}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Password"
                className=" rounded-3xl shadow-[0px_0px_10px_-1px_#ddd] outline-none p-3 border border-transparent w-full transition-[border] duration-300 focus:border focus:border-[#f82ba96e] focus:shadow-[0px_0px_6px_-1px_#F82BA9] "
              />
              <button
                type="button"
                onClick={showPassword}
                className=" absolute right-[10px]  top-[14px]"
              >
                <i className={` ${eyeToShow} text-[#f82ba96e] text-md `}></i>
              </button>
              {formik.errors.password && formik.touched.password && (
                <p className=" text-red-500 text-sm mt-1">
                  *{formik.errors.password}
                </p>
              )}
            </div>
            <p className=" text-red-500 w-full mt-1 text-center ">
              {accountError}
            </p>
            <div className="forget-pass flex justify-between items-center py-4">
              <div className="flex  gap-2">
                <input
                  id="remind"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remind " className="text-sm">
                  Remind me
                </label>
              </div>

              <Link
                href={"/forgetPassword"}
                className="text-sm text-[#F82BA9] border-b border-[#F82BA9]"
              >
                Forgot Password
              </Link>
            </div>
            <div className="flex justify-center text-[15px] pt-6  items-center gap-1">
              <p>No account?</p>
              <Link
                href={"/signup"}
                className=" text-[#F82BA9] border-b border-[#F82BA9]"
              >
                Create one here
              </Link>
            </div>
            <button className="bg-[#F82BA9] py-3 rounded-3xl mt-7 mb-2 w-full cursor-pointer">
              {" "}
              Login{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
