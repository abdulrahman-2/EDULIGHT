import Image from "next/image";
import courseImage from "@/assets/home-images/cardImage.png";
import { featuredCourses } from "@/constants";
import { FaStar } from "react-icons/fa6";
import { LuChartNoAxesColumnIncreasing, LuClock3, LuUserRound } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
const FeatCourseCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {featuredCourses.map((course) => (
        <div
          key={course.id}
          className="w-full flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0"
        >
          <div className="w-full md:w-1/3 h-[160px] relative rounded-lg overflow-hidden ">
            <Image
              src={courseImage}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 p-3">
            <div className="flex items-center justify-between ">
              <p className="text-[10px] uppercase font-[500] bg-[#E1F7E3] text-primary py-1 px-2 rounded-md">
                {course.category}
              </p>
              <p className="text-base ">
                {course.price}{" "}
                <span className="text-gray-400 line-through text-[14px]">
                  {course.oldPrice}
                </span>
              </p>
            </div>
            <h3 className="text-base truncate mt-4">{course.title}</h3>
            <div className="flex items-center justify-between mt-2  pb-3 border-b border-gray-200 ">
              <div className="flex items-center gap-2">
                <Image
                  src={course.instructorImage}
                  alt={course.instructor}
                  width={25}
                  height={25}
                />
                <span className="text-sm text-gray-500">
                  {course.instructor}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-[#FD8E1F]" />
                <span>{course.rating}</span>
                <span className="text-gray-400">({course.ratingCount})</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center gap-1">
                                    <LuUserRound className="text-primary" />
                                    <p className="text-sm text-gray-500 font-[500]">
                                        {course.students}
                                    </p>
                                    <span className="text-gray-400 text-[10px]">Students</span>
                                    </div>
                                    <div className="text-gray-500 flex items-center gap-1"> 
                                    <LuChartNoAxesColumnIncreasing className="text-[#E34444]"  />
                                    <span className=" text-sm">{course.level}</span>
                                    </div>
                                    <div className="text-gray-500 flex items-center gap-1">
                                    <LuClock3 className="text-[#23BD33]" />
                                        <span className="text-sm">{course.hours}</span>

                                    </div>
                
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatCourseCard;
