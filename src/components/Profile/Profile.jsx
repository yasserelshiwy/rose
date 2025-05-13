"use client";
import Image from "next/image";
import img from "../../../public/images/default-profile.png";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileData,
  userAction,
} from "../../store/features/user/user.slice";
import { useEffect, useRef } from "react";
import axios from "axios";
export default function Profile({ showProfileModel, handelHideProfileModel }) {
  const imgInputRef = useRef(null);
  const { token, profileData } = useSelector(function (store) {
    return store.userReducer;
  });

  async function uploadProfilePhoto() {
    try {
      const formData = new FormData();
      if (imgInputRef.current?.files) {
        formData.append("photo", imgInputRef.current?.files[0]);
      }
      const { data } = await axios.put(
        "https://flower.elevateegy.com/api/v1/auth/upload-photo",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.message === "success") {
        dispatch(getProfileData());
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
      throw error;
    }
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileData());
  }, [dispatch, token]);

  return (
    <div
      onClick={() => {
        handelHideProfileModel();
      }}
      className={`${showProfileModel}  z-[999999999999]  top-0 right-0 left-0  bottom-0 bg-[#000000cf] flex justify-center items-center`}
    >
      <div className="top-0 right-0 left-0  bottom-0 fixed flex justify-center items-center ">
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[90%] md:w-[75%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] space-y-6 bg-white rounded-2xl p-5 relative"
        >
          <button
            onClick={() => {
              handelHideProfileModel();
            }}
            className=" absolute px-4 top-2 right-0 cursor-pointer  group hover:rotate-180 text-2xl  mr-3 mt-2 duration-700 font-light  transition-all "
          >
            <i className="fa-solid fa-x group-hover:text-[#F82BA9] text-xl  duration-300 transition-colors "></i>
          </button>
          {profileData ? (
            <div className="head flex gap-4  md:gap-10 flex-col md:flex-row  items-center px-8">
              <div className="rounded-full relative  border border-[#F82BA9] w-fit">
                <Image
                  src={profileData ? profileData.photo : img}
                  alt="profile image"
                  width={100}
                  height={100}
                  className="rounded-full w-25 h-25 object-cover "
                />
                <label
                  htmlFor="profileImage"
                  className="absolute bottom-0 right-0 bg-[#F82BA9] text-white rounded-full w-6 h-6 flex justify-center items-center cursor-pointer "
                  title="Upload new photo"
                >
                  <i className="fa-solid fa-plus mt-0.5"></i>
                </label>

                <input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={imgInputRef}
                  onChange={() => {
                    uploadProfilePhoto();
                  }}
                />
              </div>
              <div className=" flex flex-col items-center gap-1">
                <h2 className="text-[#F82BA9] text-3xl font-semibold ">
                  {" "}
                  {profileData.firstName} <span> </span> {profileData.lastName}
                </h2>
                <p className="text-sm text-center text-gray-700">
                  {profileData.email}
                </p>
                <p className="text-sm text-center text-gray-700">
                  {profileData.phone}
                </p>
              </div>
            </div>
          ) : (
            <div className="h-[100px]   w-full flex justify-center items-center ">
              <span className="loader text-[#F82BA9]  "></span>
            </div>
          )}
          <div className="action w-full space-y-4">
            <Link
              href={"/allOrders"}
              onClick={() => {
                handelHideProfileModel();
              }}
              className="w-full text-center block py-2 rounded-2xl bg-[#F82BA9] text-white "
            >
              Show Your Order
            </Link>
            <Link
              href={"/changePassword"}
              onClick={() => {
                handelHideProfileModel();
              }}
              className="w-full text-center block py-2 rounded-2xl bg-[#F82BA9] text-white "
            >
              Change Password
            </Link>
            <button
              onClick={() => {
                dispatch(userAction.clearToken());
              }}
              className="w-full text-center  py-2 rounded-2xl cursor-pointer bg-[#F82BA9] text-white"
            >
              Log Out{"  "}
              <i className="fa-solid fa-right-from-bracket ml-1 "></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
