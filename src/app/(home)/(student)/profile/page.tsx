'use client'
import Image from "next/image";
import React from "react";
import student from "@/assets/home-images/Avatar.png"
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import StudentDashboard from "@/components/layout/home/student/StudentDashboard";
import StudentCourses from "@/components/layout/home/student/StudentCourses";
import StudentWishlist from "@/components/layout/home/student/StudentWishlist";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setActiveTab } from "@/features/profile/profileSlice";
import StudentSettings from "@/components/layout/home/student/StudentSettings";

const menu = [
  { id: 1, title: "Dashboard" },
  { id: 2, title: "Courses" },
  { id: 3, title: "Wishlist" },
  { id: 4, title: "Settings" },
];

const Page = () => {
  const dispatch = useDispatch();
  const {activeTab} = useSelector((state:RootState) => state.profile);

  return (
    <main>
      <div className="bg-primary/10 h-[280px] w-full"></div>
      <div className="md:max-w-7xl mx-auto bg-white rounded-lg relative top-[-180px]">
        <div className="p-10 flex items-center justify-between flex-col md:flex-row">
          <div className="flex items-center gap-4">
            <Image src={student} width={100} height={100} loading="lazy" alt="user" />
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">Kevin Gilbert</h1>
              <p className="text-gray-400 text-base">Web Designer & Best-Selling Instructor</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 text-primary group bg-primary/10 py-2 px-4 rounded-lg mt-8 md:mt-0">
            <Link href="/instructor" className="transition-colors duration-200">Become Instructor</Link>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200 cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 md:gap-10 border-y border-[#FFDDD1]">
          {menu.map((tab) => (
            <button
              key={tab.title}
              onClick={() => dispatch(setActiveTab(tab.title))}
              className={`p-2 sm:px-5 ${activeTab === tab.title
                ? "border-b-2 border-[#FF6636] font-semibold text-gray-700"
                : "text-gray-500"
                }`}
            >
              <div className="text-sm md:text-lg">{tab.title}</div>
            </button>
          ))}
        </div>

        <div>
          {activeTab === "Dashboard" && <StudentDashboard />}
          {activeTab === "Courses" && <StudentCourses />}
          {activeTab === "Wishlist" && <StudentWishlist />}
          {activeTab === "Settings" && <StudentSettings />}
        </div>
      </div>
    </main>
  );
};

export default Page;
