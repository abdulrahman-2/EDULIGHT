"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function Avatar({ name, email, logout }: any) {
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-[40px] h-[40px] rounded-full bg-primary text-white flex items-center justify-center cursor-pointer">
          <p className="cursor-pointer">{name.slice(0,2)}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuCheckboxItem>{email}</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem>
          <Link href="/profile" className="w-full">
            Profile
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>
          <span className="w-full cursor-pointer text-red-600" onClick={logout}>
            Logout
          </span>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
