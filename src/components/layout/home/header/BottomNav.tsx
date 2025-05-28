"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/das-images/light-logo.png";
import { CustomSelect } from "@/components/common/CustomSelect";
import student from "@/assets/home-images/Avatar.png";
import Search from "@/components/common/Search";
import {
  IoCartOutline,
  IoHeartOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import CustomLink from "../CustomLink";
import ToggleLayout from "../../ToggleLayout";
import { homeNavItems } from "@/constants";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setActiveTab } from "@/features/profile/profileSlice";
import { cn } from "@/lib/utils";

const BottomNav = () => {
  const router = useRouter();
  const session = true;
  const dispatch = useDispatch();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const redirectToWishlist = () => {
    router.push("/profile");
    dispatch(setActiveTab("Wishlist"));
  };
  return (
    <nav className={`flex items-center justify-between h-[80px] px-2 md:px-4 lg:px-8 bg-white z-50 transition-all duration-300 ease-in-out
      ${isSticky ? 'fixed top-0 left-0 right-0 shadow-md' : 'relative shadow-sm'}`}>
      <div className="flex items-center gap-8 ">
        <div className="flex items-center gap-1">
          <ToggleLayout
            className="hover:text-primary block lg:hidden"
            menus={homeNavItems}
          />
          <Image src={logo} width={150} height={40} alt="logo" />
        </div>
        <div className="flex items-center gap-2">
          <CustomSelect
            placeholder="Browse"
            className="text-gray-500 border-input outline-none w-[150px] hidden lg:block"
            items={["Web", "Mobile", "Design"]}
          />
          <div className="w-full hidden lg:block">
            <Search placeholder="What do you want to learn..." />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 ">
        <div className="flex items-center gap-3 ">
          <IoNotificationsOutline className="text-xl hover:text-primary duration-200 cursor-pointer" />
          <IoHeartOutline
            onClick={redirectToWishlist}
            className="text-xl hover:text-primary duration-200 cursor-pointer"
          />
          <Link href="/cart">
            <IoCartOutline className="text-xl hover:text-primary duration-200 cursor-pointer" />
          </Link>{" "}
        </div>
        <div className=" items-center gap-2 hidden lg:flex">
          {session ? (
            <Link href="/profile">
              <Image
                alt="user"
                src={student}
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
          ) : (
            <>
              <CustomLink
                link="/signup"
                title="Create Account"
                className="bg-primary/10 !text-primary hover:!bg-primary/20"
              />
              <CustomLink link="/login" title="Sign In" />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
