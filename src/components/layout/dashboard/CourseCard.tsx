import { Card } from "@/components/ui/card";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { courseContent } from "@/constants";
import Link from "next/link";




const CourseCard = () => {
  return (
<>
    {courseContent.map((course) => (
     <Card key={course.id} className="overflow-hidden">
          <div  className="flex flex-col ">
            <div className="relative md:h-[170px] w-full  ">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-contain md:object-cover "
              />
            </div>
            <div className="  dark:bg-primary/10  ">
              <div className="px-4 py-3">
                {" "}
                <span className="text-[10px] uppercase  font-[500] bg-primary/10 text-primary  py-1 px-2 rounded-md">
                  {course.category}
                </span>
                <p className="text-[16px] mt-2 ">{course.title}</p>
              </div>
              <div className=" border-y  border-gray-200">
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <FaStar className="text-[#FD8E1F]" />
                    <span className="text-sm text-gray-800 dark:text-white">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <LuUserRound className="text-primary" />
                    <span className="text-sm text-gray-800 dark:text-white">{course.students}</span>
                    <span className=" text-[12px] text-gray-600 dark:text-gray-400">students</span>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                {" "}
                <h4 className="text-lg font-semibold text-primary dark:text-white py-1 px-2 ">
                  {course.price}
                </h4>
                <DropdownMenu >
                  <DropdownMenuTrigger className="font-bold text-lg outline-none text-gray-600 dark:text-gray-200">
                    <h1>
                    •••
                    </h1>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem><Link href={`/courses/${course.id}`}>View Details</Link></DropdownMenuItem>
                    <DropdownMenuItem>Edit Course</DropdownMenuItem>
                    <DropdownMenuItem>Delete Course</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </Card>
    ))}
</>
    

  );
};

export default CourseCard;
