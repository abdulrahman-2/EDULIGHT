"use client";

import { toggleSidebar } from "@/features/sidebar/sidebarSlice";
import { HiMenuAlt3 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import LinkItem from "../common/LinkItem";
import { LucideMenu } from "lucide-react";
import { useEffect, useRef } from "react";
import { useClickOutside } from "@/hooks/use-click-outside";

const ToggleLayout = ({ menus }: any) => {
  const { isOpen } = useSelector((state: any) => state.sidebar);
  const dispatch = useDispatch();

  const handleClickOutside = () => {
    if (isOpen) {
      dispatch(toggleSidebar());
    }
  };

  const sidebarRef = useRef<HTMLDivElement>(null);

  useClickOutside([sidebarRef], handleClickOutside);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });

  return (
    <>
      {/* Menu Button (Shown Only on Small Screens) */}
      <div>
        <LucideMenu
          onClick={() => dispatch(toggleSidebar())}
          className="cursor-pointer"
          size={30}
        />
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 w-72 bg-background px-4 min-h-screen transition-all duration-300 
          ${
            isOpen
              ? "translate-x-0 opacity-100 visible"
              : "-translate-x-full opacity-0 invisible"
          }
        `}
      >
        {/* Close Button */}
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => dispatch(toggleSidebar())}
          />
        </div>

        {/* Sidebar Menu Items */}
        <div className="mt-4 flex flex-col gap-5 relative">
          {menus.map((menu: any, i: number) => (
            <LinkItem key={i} menu={menu} i={i} open={isOpen} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ToggleLayout;
