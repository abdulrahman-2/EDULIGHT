import Link from "next/link";
import React from "react";

const CustomLink = ({ link,title,className }: { link: string,title:string,className?:string }) => {
  return (
    <div>
      <Link
        className={`bg-primary hover:bg-primary/90 text-white duration-150 px-4 py-2 rounded-lg capitalize ${className}`}
        href={link}
      >
        {title}
      </Link>
    </div>
  );
};

export default CustomLink;
