"use client";

import CoursesSidebar from "@/components/layout/home/CoursesSidebar";
import filterIcon from "@/assets/home-images/filter-icon.svg";
import Image from "next/image";
import Search from "@/components/common/Search";
import { CustomSelect } from "@/components/common/CustomSelect";
import { courseContent } from "@/constants";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import useMediaQuery from "@/hooks/useMediaQuery";
import HCourseCard from "@/components/layout/home/HCourseCard";
import { CustomPagination } from "@/components/common/CustomPagination";

const HomeCourses = () => {
  const [open, setOpen] = useState(false);
  const mobileView = useMediaQuery("(max-width: 1024px)");
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(1);

  useEffect(() => {
    if (mobileView) {
      setOpen(false);
    }
  }, [mobileView]);

  const pageCount = Math.ceil(courseContent.length / 8);

  const setNextPage = () => {
    setStartPage((prev) => prev + 1);
    setEndPage((prev) => prev + 1);
  };
  const setPrevPage = () => {
    setStartPage((prev) => prev - 1);
    setEndPage((prev) => prev - 1);
  };
  return (
    <div className="container my-10">
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
      <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span>Suggestions:</span>
          <ul className="flex flex-wrap items-center gap-1 text-sm text-primary font-semibold">
            <li className="cursor-pointer">user interface</li>
            <li className="cursor-pointer">user experience</li>
            <li className="cursor-pointer">web design</li>
            <li className="cursor-pointer">interface</li>
            <li className="cursor-pointer">app</li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">3,145,684 </span>
          results find for “ui/ux design”
        </div>
      </div>
      <div className="flex mb-10">
        <CoursesSidebar open={open} />
        <div className="flex-1">
          <div
            className={cn(
              "ml-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
              !open && "xl:grid-cols-4 ml-0"
            )}
          >
            {courseContent.slice(startPage, endPage).map((course) => (
              <HCourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </div>

      <CustomPagination
        pageCount={pageCount}
        setNextPage={setNextPage}
        setPrevPage={setPrevPage}
      />
    </div>
  );
};

export default HomeCourses;
