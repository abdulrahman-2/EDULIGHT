"use client";

import filterIcon from "@/assets/home-images/filter-icon.svg";
import Image from "next/image";
import Search from "@/components/common/Search";
import { CustomSelect } from "@/components/common/CustomSelect";
import { courseContent } from "@/constants";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import useMediaQuery from "@/hooks/useMediaQuery";
import ExamCard from "@/components/layout/home/ExamCard";
import ExamSidebar from "@/components/layout/home/ExamSidebar";

const Exams = () => {
  const [open, setOpen] = useState(false);
  const mobileView = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    if (mobileView) {
      setOpen(false);
    }
  }, [mobileView]);
  return (
    <div className="container   my-10">
      <div className="mb-5 flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div
            onClick={() => setOpen(!open)}
            className={cn(
              "flex items-center gap-2 border cursor-pointer px-2 py-1 rounded-md",
              open && "border-primary"
            )}
          >
            <Image src={filterIcon} alt="filter" />
            <span>Filter</span>
            <div
              className={cn(
                "text-primary grid place-items-center size-5 border border-primary text-sm",
                open && "bg-primary text-white"
              )}
            >
              0
            </div>
          </div>
          <Search placeholder="Search..." />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-nowrap">Sort By:</span>
          <CustomSelect
            items={["trending", "Latest", "Oldest", "a-z", "z-a"]}
          />
        </div>
      </div>
      <div className="flex">
        <ExamSidebar open={open} />
        <div className="flex-1">
          <div
            className={cn(
              "ml-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
              !open && "xl:grid-cols-4 ml-0"
            )}
          >
            {courseContent.slice(0,1 ).map((course) => (
              <ExamCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exams;
