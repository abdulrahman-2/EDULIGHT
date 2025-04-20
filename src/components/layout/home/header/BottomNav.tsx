import Image from "next/image";
import React from "react";
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

const BottomNav = () => {
  return (
    <nav className=" flex items-center justify-between h-[80px] px-2 md:px-4 lg:px-8  ">
      <div className="flex items-center gap-8 ">
        <div className="flex items-center gap-1">
          <ToggleLayout className="hover:text-primary block md:hidden" menus={homeNavItems} />
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
          <IoHeartOutline className="text-xl hover:text-primary duration-200 cursor-pointer" />
          <IoCartOutline className="text-xl hover:text-primary duration-200 cursor-pointer" />
        </div>
        <div className=" items-center gap-2 hidden lg:flex">
          <CustomLink
            link="/signup"
            title="Create Account"
            className="bg-primary/10 !text-primary hover:!bg-primary/20"
          />
          <CustomLink link="/login" title="Sign In" />{" "}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
