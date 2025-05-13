"use client";
import { signUp } from "../../../store/features/user/user.slice";
import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { object, ref, string } from "yup";

export default function signup() {
  const [accountError, setAccountError] = useState(null);
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const phoneRegex = /^(?:\+20|0020)1[0125][0-9]{8}$/;
  const route = useRouter();

  const dispatch = useDispatch();
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
  // ^=========show re-pass state & fn()========>
  const [eyeToShowRePass, setEyeToShowRePass] = useState(
    "fa-solid fa-eye-slash"
  );
  const [showRePass, setShowRePass] = useState("password");
  function showRePassword() {
    if (showRePass === "password") {
      setShowRePass("text");
      setEyeToShowRePass("fa-regular fa-eye");
    } else {
      setShowRePass("password");
      setEyeToShowRePass("fa-solid fa-eye-slash");
    }
  }

  const validationSchema = object({
    firstName: string()
      .required("First Name is required")
      .min(3, "First Name must be at least 3 characters")
      .max(25, "First Name can not be more than 25 characters"),
    lastName: string()
      .required("Last Name is required")
      .min(3, "Last Name must be at least 3 characters")
      .max(25, "Last Name can not be more than 25 characters"),
    email: string()
      .required("Email address is required")
      .email("Email is invalid"),
    password: string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
    rePassword: string()
      .required("Confirm password is required")
      .oneOf([ref("password")], "Password and confirm should be the same"),
    phone: string()
      .required("Phone number is required")
      .matches(
        phoneRegex,
        "Phone number must start with +20 or 0020 followed by 10 digits (e.g. +201012345678)"
      ),
    gender: string()
      .oneOf(["male", "female"], "Please select your gender")
      .required("Gender is required"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      gender: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(signUp(values)).then((result) => {
        if (result.type === "signUp/user/fulfilled") {
          formik.resetForm();
          setTimeout(() => {
            route.push("/login");
          }, 1000);
          setAccountError(null);

          toast("The account has been created successfully.");
        } else {
          if (result.payload) {
            setAccountError(result.payload);
            toast(result.payload);
          } else {
            setAccountError(result.error?.message || "Something went wrong.");
            toast(result.error?.message || "Something went wrong.");
          }
        }
      });
    },
  });
  return (
    <section className="min-h-[60vh]">
      <div className="container flex justify-center items-center min-h-[60vh]">
        <div className="form  p-8 rounded-4xl  shadow my-12 w-full md:w-[75%] lg:w-1/2 border border-gray-100">
          <h2 className=" text-2xl md:text-3xl mb-6"> Create account</h2>
          <form className=" " onSubmit={formik.handleSubmit}>
            <div className="First Name mb-5">
              <input
                type="text"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="First Name"
                className=" rounded-3xl shadow-[0px_0px_10px_-1px_#ddd] outline-none p-3 border border-transparent w-full transition-[border] duration-300 focus:border focus:border-[#f82ba96e] focus:shadow-[0px_0px_6px_-1px_#F82BA9] "
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <p className=" text-red-500 text-sm mt-1">
                  *{formik.errors.firstName}
                </p>
              )}
            </div>
            <div className="Last Name mb-5">
              <input
                type="text"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Last Name"
                className=" rounded-3xl shadow-[0px_0px_10px_-1px_#ddd] outline-none p-3 border border-transparent w-full transition-[border] duration-300 focus:border focus:border-[#f82ba96e] focus:shadow-[0px_0px_6px_-1px_#F82BA9] "
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <p className=" text-red-500 text-sm mt-1">
                  *{formik.errors.lastName}
                </p>
              )}
            </div>
            <div className="Phone Number mb-5">
              <input
                type="tel"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Phone Number"
                className=" rounded-3xl shadow-[0px_0px_10px_-1px_#ddd] outline-none p-3 border border-transparent w-full transition-[border] duration-300 focus:border focus:border-[#f82ba96e] focus:shadow-[0px_0px_6px_-1px_#F82BA9] "
              />
              {formik.errors.phone && formik.touched.phone && (
                <p className=" text-red-500 text-sm mt-1">
                  *{formik.errors.phone}
                </p>
              )}
            </div>
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
            <div className="relative Confirm Password mb-5">
              <input
                type={showRePass}
                name="rePassword"
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Confirm Password"
                className=" rounded-3xl shadow-[0px_0px_10px_-1px_#ddd] outline-none p-3 border border-transparent w-full transition-[border] duration-300 focus:border focus:border-[#f82ba96e] focus:shadow-[0px_0px_6px_-1px_#F82BA9] "
              />
              <button
                type="button"
                onClick={showRePassword}
                className=" absolute right-[10px]  top-[14px]"
              >
                <i
                  className={` ${eyeToShowRePass} text-[#f82ba96e] text-md `}
                ></i>
              </button>
              {formik.errors.rePassword && formik.touched.rePassword && (
                <p className=" text-red-500 text-sm mt-1">
                  *{formik.errors.rePassword}
                </p>
              )}
            </div>
            <div className="my-5 ml-2">
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formik.values.gender === "male"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="accent-[#F82BA9]"
                  />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formik.values.gender === "female"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="accent-[#F82BA9]"
                  />
                  Female
                </label>
              </div>
              {formik.touched.gender && formik.errors.gender && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.gender}
                </div>
              )}
            </div>

            <p className=" text-red-500 w-full mt-1 text-center ">
              {accountError}
            </p>

            <div className="flex justify-center text-[15px] pt-4  items-center gap-1">
              <p>No Already have an account?</p>
              <Link
                href={"/login"}
                className=" text-[#F82BA9] border-b border-[#F82BA9]"
              >
                Login
              </Link>
            </div>
            <button className="bg-[#F82BA9] py-3 rounded-3xl mt-7 mb-2 w-full cursor-pointer">
              {" "}
              Create Account{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
