"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

export function Avatar({ name, email, logout }: any) {
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="">
          {/* <Image
            src={profile}
            alt="avatar"
            fill
            className="cursor-pointer object-contain"
          /> */}
          <p className="cursor-pointer">Hi {name}</p>
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
