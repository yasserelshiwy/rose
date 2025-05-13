"use client";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { object, string } from "yup";
import { changePassword } from "../../../store/features/user/user.slice";
import { signOut } from "next-auth/react";
export default function ChangePassword() {
  const route = useRouter();
  const dispatch = useDispatch();
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

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
  // ^=========show new-pass state & fn()========>
  const [eyeToShowNewPass, setEyeToShowNewPass] = useState(
    "fa-solid fa-eye-slash"
  );
  const [showNewPass, setShowNewPass] = useState("password");
  function showNewPassword() {
    if (showNewPass === "password") {
      setShowNewPass("text");
      setEyeToShowNewPass("fa-regular fa-eye");
    } else {
      setShowNewPass("password");
      setEyeToShowNewPass("fa-solid fa-eye-slash");
    }
  }
  const validationSchema = object({
    password: string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
    newPassword: string()
      .required("NewPassword is required")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      dispatch(changePassword(values)).then((result) => {
        if (result.type === "changePassword/user/fulfilled") {
          formik.resetForm();

         setTimeout(() => {
            signOut({ callbackUrl: "/login" });
          }, 1000);
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
          <h2 className=" text-2xl md:text-3xl mb-6">Change Password</h2>
          <form onSubmit={formik.handleSubmit}>
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
            <div className="relative New Password mb-5">
              <input
                type={showNewPass}
                name="newPassword"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="New Password"
                className=" rounded-3xl shadow-[0px_0px_10px_-1px_#ddd] outline-none p-3 border border-transparent w-full transition-[border] duration-300 focus:border focus:border-[#f82ba96e] focus:shadow-[0px_0px_6px_-1px_#F82BA9] "
              />
              <button
                type="button"
                onClick={showNewPassword}
                className=" absolute right-[10px]  top-[14px]"
              >
                <i
                  className={` ${eyeToShowNewPass} text-[#f82ba96e] text-md `}
                ></i>
              </button>
              {formik.errors.newPassword && formik.touched.newPassword && (
                <p className=" text-red-500 text-sm mt-1">
                  *{formik.errors.newPassword}
                </p>
              )}
            </div>

            <button className="bg-[#F82BA9] py-3 rounded-3xl mt-7 mb-2 w-full cursor-pointer">
              Change Password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
