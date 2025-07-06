"use client";

import { Card } from "@/components/ui/card";
import { courseContent } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

const HCourseCard = ({
  best,
  recently,
}: {
  best?: boolean;
  recently?: boolean;
}) => {
  const [courses, setCourses] = useState(courseContent);

  useEffect(() => {
    if (best) {
      setCourses(courseContent.slice(0, 8));
    } else if (recently) {
      setCourses(courseContent.slice(8, 16));
    } else {
      setCourses(courseContent);
    }
  }, [best, recently]);

  return (
    <>
      {courses.map((course) => (
        <Card key={course.id} className="overflow-hidden">
          <Link href={`home-courses/${course.id}`} className="flex flex-col">
            <div className="relative h-[170px] w-full">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="dark:bg-primary/10">
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-[500] bg-primary/10 text-primary py-1 px-2 rounded-md">
                    {course.category}
                  </span>
                  <h4 className="text-lg font-semibold text-primary dark:text-white py-1 px-2">
                    {course.price}
                  </h4>
                </div>
                <p className="text-[16px] mt-2 truncate">{course.title}</p>
              </div>
              <div className="border-t border-gray-200">
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <FaStar className="text-[#FD8E1F]" />
                    <span className="text-sm text-gray-800 dark:text-white">
                      {course.rating}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-gray-800 dark:text-white">
                      {course.students}
                    </span>
                    <span className="text-[12px] text-gray-600 dark:text-gray-400">
                      students
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Card>
      ))}
    </>
  );
};

export default HCourseCard;
