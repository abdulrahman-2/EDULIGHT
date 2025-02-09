"use client";

import { toggleSidebar } from "@/features/sidebar/sidebarSlice";
import { AppDispatch } from "@/store/store";
import { LucideMenu } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import logo from "@/assets/das-images/logo.png";
import Search from "@/components/common/Search";
import { ModeToggle } from "../ModeToggle";
import { Avatar } from "@/components/common/Avatar";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleToggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className=" h-[60px] shadow-md dark:shadow-primary/20 dark:bg-primary/10 px-3 flex items-center justify-between gap-6">
      <div className="sm:hidden flex items-center gap-1">
        <LucideMenu
          onClick={handleToggle}
          className="cursor-pointer"
          size={30}
        />
        <Image src={logo} width={50} height={50} alt="logo" />
      </div>
      <Search placeholder="Search..." />
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
