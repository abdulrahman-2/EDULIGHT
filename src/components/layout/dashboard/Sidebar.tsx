"use client";

import { useRef, useEffect, useState } from "react";
import { toggleSidebar } from "@/features/sidebar/sidebarSlice";
import { AppDispatch, RootState } from "@/store/store";
import { CircleX, LogOutIcon, LucideLayoutDashboard } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useClickOutside } from "@/hooks/use-click-outside";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import lightLogo from "@/assets/das-images/light-logo.png";
import darkLogo from "@/assets/das-images/dark-logo.png";
import { links } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { isOpen } = useSelector((state: RootState) => state.sidebar);
  const dispatch = useDispatch<AppDispatch>();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClickOutside = () => {
    if (isOpen) {
      dispatch(toggleSidebar());
    }
  };

  useClickOutside([sidebarRef], handleClickOutside);

  const isMobileDevice = useMediaQuery("(max-width: 640px)");

  useEffect(() => {
    if (!isMobileDevice && isOpen) {
      dispatch(toggleSidebar());
    }
  }, [isMobileDevice, isOpen, dispatch]);

  if (!mounted) {
    return null; // or a loading spinner
  }

  return (
    <div
      ref={sidebarRef}
      className={`shadow-lg border-r dark:border-gray-600 shadow-primary/20 sm:flex sm:w-[70px] md:w-[220px] lg:w-[270px] ${
        isOpen
          ? "flex w-[270px] bg-background absolute z-50 inset-0"
          : "hidden dark:bg-primary/10"
      }`}
    >
      <div className="p-4 w-full relative">
        <div
          className={`flex items-center justify-between sm:justify-center md:justify-start`}
        >
          <div className="flex items-center justify-start gap-2 sm:justify-center md:justify-start">
            <LucideLayoutDashboard
              className="text-primary dark:text-white"
              size={25}
            />
            {theme === "dark" ? (
              <>
                <Image
                  src={darkLogo}
                  width={150}
                  height={50}
                  alt="logo"
                  className={"sm:hidden md:block"}
                />
              </>
            ) : (
              <Image
                src={lightLogo}
                width={150}
                height={50}
                alt="logo"
                className={"sm:hidden md:block"}
              />
            )}
          </div>
          {isOpen && (
            <CircleX
              className="absolute right-2 cursor-pointer"
              onClick={() => dispatch(toggleSidebar())}
            />
          )}
        </div>
        <ul className="mt-6">
          {links.map((link) => {
            const isActive = pathName === link.url;
            return (
              <Link href={link.url} key={link.id}>
                <li
                  className={`w-full cursor-pointer mb-3 flex items-center sm:justify-center md:justify-start gap-3 p-2 dark:text-white rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-[#EFF6FF] dark:hover:bg-[#172554]"
                  }`}
                >
                  <span className="text-lg ">{link.icon}</span>
                  <span className="text-md font-medium sm:hidden md:block">
                    {link.label}
                  </span>
                </li>
              </Link>
            );
          })}
          <li className="w-[calc(100%-30px)] cursor-pointer mb-3 absolute bottom-0 flex items-center sm:justify-center md:justify-start gap-3 p-2 dark:text-white rounded-xl transition-all duration-200 hover:bg-[#172554]">
            <span className="cursor-pointer text-lg ">{<LogOutIcon />}</span>
            <Link href="/" className="text-md font-medium  sm:hidden md:block">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
