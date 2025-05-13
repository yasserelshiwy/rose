"use client";
import Image from "next/image";
import logoBorder from "../../../public/images/logo-border.png";
import { CircleX, Menu, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { profileData, userAction } from "../../store/features/user/user.slice";
import { alexBrush } from "../InstagramAbout/AlexBrush";
import Profile from "../Profile/Profile";

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { Quant } = useSelector((store) => store.cartReducer);
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const path = usePathname();

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const closeMenu = () => {
    setMenuIsOpen(false);
  };
  const handleLinkClick = () => {
    closeMenu();
  };
  const handleUlClick = (e) => {
    e.stopPropagation();
  };
  const handleLayerClick = (e) => {
    e.stopPropagation();
    closeMenu();
  };
  const [showProfileModel, setShowProfileModel] = useState("hidden");
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  function handelShowProfileModel() {
    if (showProfileModel === "hidden") {
      setShowProfileModel("fixed");
      setIsOpenProfile(true);
    }
  }
  function handelHideProfileModel() {
    if (showProfileModel === "fixed") {
      setShowProfileModel("hidden");
      setIsOpenProfile(false);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (menuIsOpen && window.innerWidth > 768) {
        closeMenu();
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [menuIsOpen]);

  return (
    <nav className="flex justify-between mb-8 container py-1">
      <div className="logo relative size-[75px] ">
        <Link href={"/"} className="logo  ">
          <Image
            src={logoBorder}
            alt="the border of logo"
            sizes="(max-width: 768px) 120px, 160p"
            className=""
            fill
          />
          <div className="absolute top-0 left-0 z-10 flex justify-center items-center flex-col ">
            <h2
              className={`text-[#F82BA9] text-[45px]  ${alexBrush.className}`}
            >
              Rose
            </h2>
            <h2
              className={`text-[#F82BA9] text-[11px] mt-[-22px]   ${alexBrush.className}`}
            >
              Happy Gift
            </h2>
          </div>
        </Link>
      </div>
      <ul className="links gap-4 items-center font-bold hidden md:flex">
        <li>
          <Link
            href={"/"}
            className={`transition-colors ${
              path === "/" ? "text-[#F82BA9]" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"all-category"}
            className={`transition-colors ${
              path === "/all-category" ? "text-[#F82BA9]" : ""
            }`}
          >
            All Category
          </Link>
        </li>
        <li>
          <Link
            href={"about"}
            className={`transition-colors ${
              path === "/about" ? "text-[#F82BA9]" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href={"contact"}
            className={`transition-colors ${
              path === "/contact" ? "text-[#F82BA9]" : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="tools flex gap-4 items-center">
        <Search className="text-[#F82BA9] cursor-pointer w-[22px]" />
        {session ? (
          <>
            <Link href={"/wishList"} className="text-[#F82BA9]">
              <i className="fa-regular fa-heart text-xl"></i>
            </Link>

            <div className="relative">
              <Link href={"/cart"} className="text-[#F82BA9]">
                <i className="fa-solid fa-bag-shopping text-xl"></i>
              </Link>
              <p className="w-4 h-4  rounded-full bg-[#F82BA9] flex justify-center items-center absolute -top-3.5 -right-2">
                <span className="text-xs text-[#FFFFFF] block font-light">
                  {Quant}
                </span>
              </p>
            </div>
            <button
              onClick={() => {
                handelShowProfileModel();
              }}
              className="cursor-pointer text-xl text-[#F82BA9]"
            >
              <i className="fa-regular fa-user"></i>
            </button>
          </>
        ) : (
          <Link
            href={"/login"}
            className={
              "bg-[#F82BA9] hover:bg-[#f82ba9da] cursor-pointer rounded-4xl px-4 py-2"
            }
          >
            Login
          </Link>
        )}

        <Menu
          onClick={toggleMenu}
          size={35}
          className="text-[#F82BA9] md:hidden cursor-pointer"
        />
      </div>
      <div
        onClick={handleLayerClick}
        className={`links-mobile gap-4 fixed bg-black/50 inset-0 p-4 z-50  font-bold flex-col md:hidden ${
          menuIsOpen ? "flex" : "hidden"
        }`}
      >
        <ul
          onClick={handleUlClick}
          className="flex flex-col gap-8 bg-white absolute left-0 top-0 p-5 w-[70%]"
        >
          <div className="header flex justify-between items-center">
            <div className="logo relative size-[75px] ">
              <Link href={"/"} className="logo  ">
                <Image
                  src={logoBorder}
                  alt="the border of logo"
                  sizes="(max-width: 768px) 120px, 160p"
                  className=""
                  fill
                />
                <div className="absolute top-0 left-0 z-10 flex justify-center items-center flex-col ">
                  <h2
                    className={`text-[#F82BA9] text-[45px]  ${alexBrush.className}`}
                  >
                    Rose
                  </h2>
                  <h2
                    className={`text-[#F82BA9] text-[11px] mt-[-22px]   ${alexBrush.className}`}
                  >
                    Happy Gift
                  </h2>
                </div>
              </Link>
            </div>
            <CircleX
              onClick={closeMenu}
              size={40}
              className="text-[#F82BA9] cursor-pointer"
            />
          </div>

          <li>
            <Link
              onClick={handleLinkClick}
              href={"/"}
              className={`transition-colors ${
                path === "/" ? "text-[#F82BA9]" : ""
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              onClick={handleLinkClick}
              href={"all-category"}
              className={`transition-colors ${
                path === "/all-category" ? "text-[#F82BA9]" : ""
              }`}
            >
              All Category
            </Link>
          </li>

          <li>
            <Link
              onClick={handleLinkClick}
              href={"about"}
              className={`transition-colors ${
                path === "/about" ? "text-[#F82BA9]" : ""
              }`}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              onClick={handleLinkClick}
              href={"contact"}
              className={`transition-colors ${
                path === "/contact" ? "text-[#F82BA9]" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <Profile
        showProfileModel={showProfileModel}
        isOpenProfile={isOpenProfile}
        handelHideProfileModel={handelHideProfileModel}
      />
    </nav>
  );
}
