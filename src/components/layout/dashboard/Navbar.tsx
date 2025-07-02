import Image from "next/image";
import logo from "@/assets/das-images/logo.png";
import Search from "@/components/common/Search";
import { ModeToggle } from "../ModeToggle";
import { Avatar } from "@/components/common/Avatar";
import ToggleLayout from "../ToggleLayout";
import { menus } from "@/constants";

const Navbar = () => {
  return (
    <div className="h-[60px] shadow-md dark:shadow-primary/20 dark:bg-primary/10 px-3 flex items-center justify-between gap-6">
      <div className="sm:hidden flex items-center gap-1">
        <ToggleLayout menus={menus} />
        <Image src={logo} width={50} height={50} alt="logo" />
      </div>
      <div className="hidden sm:block w-[350px]">
        <Search placeholder="Search..." />
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
