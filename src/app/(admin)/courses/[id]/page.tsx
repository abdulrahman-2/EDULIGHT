import { courseContent, courseDetailsCard } from "@/constants";
import Image from "next/image";
import React from "react";
import person from "@/assets/das-images/person.png";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { CustomSelect } from "@/components/common/CustomSelect";
import { Progress } from "@/components/ui/progress";


const Page = async ({ params }: { params: any }) => {
  const { id } = await params;

  const filteredCourse = courseContent.find(
    (course) => course.id === Number(id)
  );

  if (!filteredCourse) {
    return <div>Course not found</div>;
  }

  const { image, title, desc, price, category, rating } = filteredCourse;

  return (
    <div className=" flex-1 flex flex-col">
      <p className="py-3 text-[12px] md:text-sm text-gray-400">
        Course / My Courses / {category} /{" "}
        <span className="text-gray-700">{title}</span>
      </p>
      <div className="bg-white rounded-lg dark:bg-primary/10 p-4 flex flex-col xl:flex-row items-center shadow-sm gap-4">
        <div className="relative w-[420px] h-[230px] rounded-lg overflow-hidden">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>
        <div className="w-full flex flex-col space-y-2">
          <div className="flex items-center space-x-4">
            <p className="text-[12px] text-gray-600">
              <span className="text-gray-400">Upload:</span> Jan 21, 2020
            </p>
            <p className="text-[12px] text-gray-600">
              <span className="text-gray-400">Last Updated:</span> Sep 21, 2021
            </p>
          </div>
          <h1 className="font-semibold text-lg md:text-[20px]">{title}</h1>
          <p className="text-sm text-gray-600">{desc}</p>
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 pb-2">
            {/* Created by */}
            <div className="flex items-center gap-4">
              <div className="flex items-center relative">
                <Image src={person} width={50} height={50} alt="person" />
                <Image
                  src={person}
                  width={50}
                  height={50}
                  alt="person"
                  className="absolute left-[30px]"
                />
              </div>
              <div className="ml-[30px]">
                <p className="text-sm text-gray-600">Created by:</p>
                <h3 className="text-[16px] font-[500]">
                  Kevin Gilbert • Kristin Watson
                </h3>
              </div>
            </div>
            {/* Rating */}
            <div className="flex  md:items-center flex-col md:flex-row gap-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((item) => (
                  <FaStar className="text-[#FD8E1F]" key={item} />
                ))}
              </div>
              <p className="text-sm whitespace-nowrap">
                {rating}
                <span className="text-gray-600"> (451,444 Rating)</span>
              </p>
            </div>
          </div>
          <hr className="py-2" />
          <div
            className="flex flex-col md:flex-row md:items-center justify-between space-y-4 
          md:space-y-0 "
          >
            {/* Left */}
            <div className="flex items-center space-x-[100px] md:space-x-4">
              <div>
                <h2 className="text-[20px]">{price}</h2>
                <p className="text-sm text-gray-600">Course prices</p>
              </div>
              <div className="bg-gray-200 w-[1px] h-[40px]"></div>
              <div>
                <h2 className="text-[20px] ">$131,800,455.82</h2>
                <p className="text-sm text-gray-600">USD dollar revenue</p>
              </div>
            </div>
            {/* Right */}
            <div className="flex items-center justify-between md:space-x-4 ">
              <button className="text-[16px] rounded-lg whitespace-nowrap text-sm px-6 py-3 bg-primary duration-200 text-white hover:bg-primary/90">
                Withdraw Money
              </button>
              <div className="w-11 h-11 rounded-lg flex items-center justify-center cursor-pointer bg-gray-100 font-bold text-sm md:text-[16px] text-gray-600 dark:bg-gray-400 dark:text-gray-200">
                <h1>•••</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
        {/* Cards */}
        <div className="col-span-full lg:col-span-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {courseDetailsCard.map((card) => (
              <Card
                key={card.id}
                className="bg-white shadow-sm rounded-lg flex items-center gap-4 dark:bg-primary/10  last:col-span-2 p-6"
              >
                <div
                  style={{ backgroundColor: card.bgColor, color: card.color }}
                  className="flex items-center justify-center text-2xl w-11 h-11 md:w-[60px] md:h-[60px] dark:!bg-[#172554] dark:!text-gray-400"
                >
                  {card.icon}
                </div>
                <div className="flex flex-col space-y-2">
                  <h3 className="text-sm md:text-2xl font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-[12px] whitespace-nowrap md:text-sm text-gray-600">
                    {card.value}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        {/* progress  */}
        <div className="col-span-full lg:col-span-1">
          <div className="bg-white dark:bg-primary/10 rounded-lg shadow-sm">
            <div className="flex items-center justify-between p-6">
              <h1 className="text-[16px] font-[500]">Overall Course Rating</h1>
              <div className="w-[180px]">
                <CustomSelect
                  items={["This Week", "This Month", "This Year", "All"]}
                />
              </div>
            </div>
            <hr />
            <div className="dark:bg-primary/10 p-6">
              <div className="p-8 flex flex-col justify-center items-center bg-[#FFF2E5] dark:bg-[#172554] gap-2">
                <h1 className="text-[40px] font-semibold">4.8</h1>
                <div className="flex items-center">
                  {[1, 2, 3, 4].map((item) => (
                    <FaStar className="text-[#FD8E1F]" key={item} />
                  ))}
                  <FaStarHalfAlt className="text-[#FD8E1F]" />
                </div>
                <p className="text-sm">Course Rating</p>
              </div>
            </div>
            <hr />
            <div className="dark:bg-primary/10 p-6 flex flex-col space-y-4">
              <ProgressComponent stars={5} progressValue={100} />
              <ProgressComponent stars={4} progressValue={80} />
              <ProgressComponent stars={3} progressValue={60} />
              <ProgressComponent stars={2} progressValue={40} />
              <ProgressComponent stars={1} progressValue={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
interface ProgressProps {
  stars: number;
  totalStars?: number;
  progressValue: number;
  showLabel?: boolean;
}

const ProgressComponent = ({
  stars,
  totalStars = 5,
  progressValue,
  showLabel = true,
}: ProgressProps) => {
  return (
    <div className="flex items-center space-x-4 w-full">
      <div className="flex items-center space-x-1 w-1/4">
        <div className="flex items-center space-x-1">
          {[...Array(stars)].map((_, index) => (
            <FaStar className="text-[#FD8E1F]" key={`filled-star-${index}`} />
          ))}
          {[...Array(totalStars - stars)].map((_, index) => (
            <FaRegStar className="text-[#FD8E1F]" key={`empty-star-${index}`} />
          ))}
        </div>
        {showLabel && <p className="text-xs hidden md:block">{stars} Star</p>}
      </div>
      <Progress value={progressValue} className="w-3/4" />
    </div>
  );
};
