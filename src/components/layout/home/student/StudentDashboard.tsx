"use client";

import { studentCard, studentDash } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type Course = {
  id: string;
  title: string;
  price: number;
  image?: string;
};

const StudentDashboard = () => {
  const [current, setCurrent] = useState(0);
  console.log(current)
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const storedCourses = localStorage.getItem("purchasedCourses");
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    }
  }, []);

  const prevQuote = () => {
    setCurrent((prev) => (prev === 0 ? studentCard.length - 1 : prev - 1));
  };

  const nextQuote = () => {
    setCurrent((prev) => (prev + 1) % studentCard.length);
  };

  return (
    <main>
      <div className="flex flex-col gap-6 pt-10">
        <div className="container md:px-0">
          <h1 className="text-2xl font-semibold">Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentDash.map((item) => (
              <div
                key={item.id}
                style={{ backgroundColor: item.bgColor }}
                className="p-6 flex items-center gap-6 rounded-lg w-full"
              >
                <div
                  style={{ color: item.color }}
                  className="bg-white p-3 text-3xl rounded-lg"
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-2xl">{item.value}</h4>
                  <p className="text-gray-[#4E5566] text-sm">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container md:px-0">
          <div className="flex items-center justify-between flex-col sm:flex-row">
            <h1 className="text-lg md:text-2xl font-semibold text-[#1D2026]">
              Let’s start learning, Kevin
            </h1>
            <div className="flex gap-4 mt-6 ">
              <button
                onClick={prevQuote}
                className="bg-[#f3f6fc] hover:bg-primary transition-colors hover:shadow-md duration-200 ease-in-out text-primary hover:text-white py-1 px-2 md:py-3 md:px-6 rounded-full flex items-center gap-2"
              >
                <FaArrowLeft className="text-lg md:text-2xl" />
              </button>
              <button
                onClick={nextQuote}
                className="bg-[#f3f6fc] hover:bg-primary transition-colors hover:shadow-md duration-200 ease-in-out text-primary hover:text-white py-1 px-2 md:py-3 md:px-6 rounded-full flex items-center gap-2"
              >
                <FaArrowRight className="text-lg md:text-2xl" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((item, index) => {
              const imageUrl = item.image;

              return (
                <Link
                  key={index}
                  href={`/watch/${item.id}`}
                  className="bg-[#f3f6fc] rounded-lg overflow-hidden block hover:shadow-md transition-shadow"
                >
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={imageUrl || "/images/placeholder-course.png"}
                      alt={item.title || "Course"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudentDashboard;
