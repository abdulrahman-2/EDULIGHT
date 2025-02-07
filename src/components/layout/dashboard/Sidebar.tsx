"use client";

import { useRef, useEffect } from "react"; // Import useEffect
import { toggleSidebar } from "@/features/sidebar/sidebarSlice";
import { AppDispatch, RootState } from "@/store/store";
import { CircleX, LogOutIcon, LucideLayoutDashboard } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useClickOutside } from "@/hooks/use-click-outside";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import eduLogo from "@/assets/das-images/edu-logo.svg";
import { links } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  
  const { isOpen } = useSelector((state: RootState) => state.sidebar);
  const dispatch = useDispatch<AppDispatch>();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname()

  //  const isActive = pathName === links.label /

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




  return (
    <div
      ref={sidebarRef}
      className={`dark:bg-primary/10 shadow-lg border-r dark:border-gray-600 shadow-primary/20 sm:flex sm:w-[70px] md:w-[220px] lg:w-[270px] ${
        isOpen
          ? "flex w-[270px] bg-background dark:bg-background absolute z-50 inset-0"
          : "hidden"
      }`}
    >
      {isOpen && (
        <CircleX
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => dispatch(toggleSidebar())}
        />
      )}

      <div className="p-4">
        <div className="flex items-center ">
          <LucideLayoutDashboard className="mt-2 text-[#293897]" size={28} />

          <Image src={eduLogo} width={220} height={50} alt="logo" />
        </div>
<ul className="mt-6 ">
{links.map((link) => {
            const isActive = pathName === link.url; 
            return (
              <li
              key={link.id}
              className={`mb-3 flex items-center sm:justify-center md:justify-start  gap-3 p-2 text-[#293897] rounded-xl transition-all duration-300 ${
                isActive ? "bg-[#293897] text-white" : "hover:bg-[#293897] hover:text-white"
              }`}
            >
              <span className="cursor-pointer text-lg ">{link.icon}</span>
              <Link href={link.url} className="text-md font-medium  sm:hidden md:block">
                {link.label}
              </Link>
            </li>
            );
          })}
          <li className='mb-3 absolute bottom-0 flex items-center sm:justify-center md:justify-start  gap-3 p-2 text-[#293897] rounded-xl transition-all duration-300  hover:bg- hover:text-white'>

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
