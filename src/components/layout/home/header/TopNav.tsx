"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { homeNavItems } from "@/constants";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { usePathname } from "next/navigation";
import ToggleLayout from "../../ToggleLayout";

const TopNav = () => {
  const pathname = usePathname();
  return (
    <nav className="md:bg-[#1D2026] hidden lg:block items-center justify-between text-sm  md:text-gray-500 h-[52px] px-2 md:px-4 lg:px-8 ">

    <div className="flex justify-between items-center">
    <div>
        <ul className="flex items-center h-full gap-6">
          {homeNavItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <li
                key={item.id}
                className={`py-4 inline-block  hover:text-white duration-200 ${
                  isActive ? "text-white  border-t" : ""
                } `}
              >
                <a href={item.link}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger className=" outline-none ">
            <p className="flex items-center gap-[2px]">
              USD
              <span>
                <MdOutlineKeyboardArrowDown className="text-lg" />
              </span>
            </p>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className=" outline-none ">
            <p className="flex items-center gap-[2px]">
              English
              <span>
                <MdOutlineKeyboardArrowDown className="text-lg" />
              </span>
            </p>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>


    </nav>
  );
};

export default TopNav;
