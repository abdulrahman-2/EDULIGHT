"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/das-images/light-logo.png";
import { CustomSelect } from "@/components/common/CustomSelect";
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
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setActiveTab } from "@/features/profile/profileSlice";
import { RootState } from "@/store/store";
import { logout } from "@/features/auth/authSlice";
import toast from "react-hot-toast";
import { Avatar } from "@/components/common/Avatar";

const BottomNav = () => {
  const router = useRouter();
  const { token, user } = useSelector((state: RootState) => state.auth) as {
    token: string | null;
    user: { profile?: string; email?: string; username: string } | null;
  };
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

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
  };
  return (
    <nav
      className={`flex items-center justify-between h-[80px] px-2 md:px-4 lg:px-8 bg-white z-50 transition-all duration-300 ease-in-out
      ${
        isSticky ? "fixed top-0 left-0 right-0 shadow-md" : "relative shadow-sm"
      }`}
    >
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
            className="hidden lg:flex min-w-[100px]"
            items={["Web", "Mobile", "Design"]}
          />
          <div className="hidden lg:flex min-w-[400px] w-full">
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
          {token && user ? (
            <Avatar
              name={user.username}
              email={user.email}
              logout={handleLogout}
            />
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
