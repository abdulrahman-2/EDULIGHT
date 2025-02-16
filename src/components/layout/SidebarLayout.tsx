"use client";

import { cn } from "@/lib/utils";
import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import LinkItem from "../common/LinkItem";
import useMediaQuery from "@/hooks/useMediaQuery";

const SidebarLayout = ({ menus }: any) => {
  const [open, setOpen] = useState(true);

  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  const isLargeScreen = useMediaQuery("(min-width: 1280px)");

  useEffect(() => {
    if (isSmallScreen) {
      setOpen(false);
    } else if (isLargeScreen) {
      setOpen(true);
    }
  }, [isSmallScreen, isLargeScreen]);

  return (
    <div
      className={cn(
        "hidden sm:block min-h-screen bg-background dark:bg-primary/10",
        open ? "w-72" : "w-16",
        "duration-300 dark:text-gray-100 px-4"
      )}
    >
      <div className="sticky inset-0">
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-5 relative">
          {menus.map((menu: any, i: number) => (
            <LinkItem key={i} menu={menu} i={i} open={open} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
