"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// fallback image
const fallbackImage = "/images/placeholder-course.png";

type Course = {
  id: string;
  title: string;
  price: number;
  image?: string;
};

const StudentCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const storedCourses = localStorage.getItem("purchasedCourses");
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    }
  }, []);

  return (
    <main className="pt-10">
      <div className="container">
        <h1 className="text-2xl font-semibold mb-4">
          Courses <span className="font-normal">({courses.length})</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((item, index) => {
            const imageUrl = item.image || fallbackImage;

            return (
              <Link
                key={index}
                href={`/watch/${item.id}`}
                className="bg-[#f3f6fc] rounded-lg overflow-hidden block hover:shadow-md transition-shadow"
              >
                <div className="relative h-[200px] w-full">
                  <Image
                    src={imageUrl}
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
    </main>
  );
};

export default StudentCourses;
