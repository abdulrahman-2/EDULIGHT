"use client";

import { useRef, useEffect } from "react"; // Import useEffect
import { toggleSidebar } from "@/features/sidebar/sidebarSlice";
import { AppDispatch, RootState } from "@/store/store";
import { CircleX } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useClickOutside } from "@/hooks/use-click-outside";
import useMediaQuery from "@/hooks/useMediaQuery";

const Sidebar = () => {
  const { isOpen } = useSelector((state: RootState) => state.sidebar);
  const dispatch = useDispatch<AppDispatch>();
  const sidebarRef = useRef<HTMLDivElement>(null);

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
      Sidebar
    </div>
  );
};

export default Sidebar;
