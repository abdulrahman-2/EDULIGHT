import { courseContent, courseDetailsCard } from "@/constants";
import Image from "next/image";
import React from "react";
import person from "@/assets/das-images/person.png";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa6";
import { Card } from "@/components/ui/card";
import { FaStarHalfAlt } from "react-icons/fa";
import { CustomSelect } from "@/components/common/CustomSelect";
import { Progress } from "@/components/ui/progress";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const filteredCourse = courseContent.find(
    (course) => course.id === Number(id)
  );

  if (!filteredCourse) {
    return <div>Course not found</div>;
  }

  const { image, title, desc, price, category, rating, students } =
    filteredCourse;

  return (
    <div className="flex flex-col">
      <p className="py-3 text-[12px] md:text-sm text-gray-400">
        Course / My Courses / {category} /{" "}
        <span className="text-gray-700">{title}</span>
      </p>
      <div className="bg-white dark:bg-primary/10 p-4 flex flex-col md:flex-row items-center shadow-md gap-4">
        <div className="relative w-[380px] h-[230px] ">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="w-full flex flex-col space-y-2">
          <div className="flex items-center space-x-4">
            <p className="text-[12px] text-gray-600">
              <span className="text-gray-400">Upload:</span> Jan 21, 2020
            </p>
            <p className="text-[12px] text-gray-600">
              <span className="text-gray-400">Last Updated:</span> sep 21, 2021
            </p>
          </div>
          <h1 className="font-semibold text-lg md:text-[20px]">{title}</h1>
          <p className="text-sm text-gray-600">{desc}</p>
          <div className="flex items-center justify-between pb-2">
            {/* created by  */}
            <div className="flex items-center gap-4">
              <div className="flex items-center relative ">
                <Image src={person} width={50} height={50} alt="person" />
                <Image
                  src={person}
                  width={50}
                  height={50}
                  alt="person"
                  className="absolute left-[30px]"
                />
              </div>
              <div className="  ml-[30px]">
                <p className="text-sm text-gray-600">Created by:</p>
                <h3 className="text-[16px] font-[500]">
                  Kevin Gilbert • Kristin Watson
                </h3>
              </div>
            </div>
            {/* rating  */}
            <div className="flex items-center flex-col md:flex-row gap-2 ">
              <div className="flex items-center ">
                {[1, 2, 3, 4, 5].map((item) => (
                  <FaStar className="text-[#FD8E1F]" key={item} />
                ))}
              </div>
              <p className="text-sm whitespace-nowrap">
                {rating}
                <span className="text-gray-600 ">(451,444 Rating)</span>
              </p>
            </div>
          </div>
          <hr className="py-2" />
          <div className="flex items-center justify-between">
            {/* left  */}
            <div className="flex items-center space-x-4">
              <div>
                <h2 className="text-sm md:text-[20px] ">{price}</h2>
                <p className="text-[10px] md:text-sm text-gray-600">Course prices</p>
              </div>
              <div className="bg-gray-200 w-[1px] h-[40px]"></div>
              <div>
                <h2 className="md:text-[20px] text-sm ">$131,800,455.82</h2>
                <p className="text-[10px] md:text-sm text-gray-600 ">USD dollar revenue</p>
              </div>
            </div>
            {/* right  */}
            <div className=" flex items-center space-x-4">
              <button className="md:text-[16px] whitespace-nowrap text-sm px-4 py-2  md:px-6 md:py-3 bg-primary duration-200 text-white hover:bg-primary/90">
                withdrew money
              </button>

              <div className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center cursor-pointer bg-gray-100 font-bold text-sm md:text-[16px]  text-gray-600 dark:bg-gray-400 dark:text-gray-200">
                <h1>•••</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
        {/* cards  */}
        <div className="col-span-full lg:col-span-1">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4  ">
          {courseDetailsCard.map((card) => (
            <Card
              key={card.id}
              className="bg-white shadow-md flex items-center gap-4 dark:bg-primary/10 rounded-none last:col-span-2 p-6"
            >
              <div
                style={{ backgroundColor: card.bgColor, color: card.color }}
                className="flex items-center justify-center text-2xl w-11 h-11 md:w-[60px] md:h-[60px] dark:!bg-[#172554] dark:!text-gray-400"
              >
                {card.icon}
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-sm md:text-2xl font-semibold">{card.title}</h3>
                <p className="text-[12px] whitespace-nowrap md:text-sm text-gray-600">{card.value}</p>
              </div>
            </Card>
          ))}
        </div>
        </div>
        {/* progress  */}
        <div className="col-span-full lg:col-span-1">

        <div className="bg-white dark:bg-primary/10 ">
          <div className="flex items-center justify-between p-6">
            <h1 className="text-[16px] font-[500]">Overall Course Rating</h1>
            <div className="w-[180px]">
              <CustomSelect
                items={["This Week", "This Month", "This Year", "All"]}
              />
            </div>
          </div>
          <hr />
          <div className=" dark:bg-primary/10 p-6">
            <div className="p-8 flex flex-col justify-center items-center bg-[#FFF2E5] dark:bg-[#172554] gap-2">
              <h1 className="text-[40px] font-semibold">4.8</h1>
              <div className="flex items-center">
                {[1, 2, 3, 4].map((item) => (
                  <FaStar className="text-[#FD8E1F] " key={item} />
                ))}{" "}
                <FaStarHalfAlt className="text-[#FD8E1F]" />
              </div>
              <p className="text-sm">Course Rating</p>
            </div>
          </div>
          <hr />
          <div className="dark:bg-primary/10 p-6 flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 w-1/4">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <FaStar className="text-[#FD8E1F] " key={item} />
                  ))}{" "}
                </div>
                <p className=" text-[12px] hidden md:block">5 Star</p>
              </div>
              <Progress value={100} className="w-3/4" />
            </div>
            <div className="flex items-center space-x-4 w-full">
              <div className="flex items-center space-x-1 w-1/4">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4].map((item) => (
                    <FaStar className="text-[#FD8E1F] " key={item} />
                  ))}
                  <FaRegStar className="text-[#FD8E1F] " />
                </div>
                <p className=" text-[12px] hidden md:block">4 Star</p>
              </div>
              <Progress value={80} className="w-3/4" />
            </div>
            <div className="flex items-center space-x-4 w-full">
              <div className="flex items-center space-x-1 w-1/4">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3].map((item) => (
                    <FaStar className="text-[#FD8E1F] " key={item} />
                  ))}
                  <FaRegStar className="text-[#FD8E1F] " />
                  <FaRegStar className="text-[#FD8E1F] " />
                </div>
                <p className=" text-[12px] hidden md:block">3 Star</p>
              </div>
              <Progress value={60} className="w-3/4" />
            </div>
            <div className="flex items-center space-x-4 w-full">
              <div className="flex items-center space-x-1 w-1/4">
                <div className="flex items-center space-x-1">
                  <FaStar className="text-[#FD8E1F] " />
                  <FaStar className="text-[#FD8E1F] " />
                  {[1, 2, 3].map((item) => (
                    <FaRegStar className="text-[#FD8E1F] " key={item} />
                  ))}
                </div>
                <p className=" text-[12px] hidden md:block">2 Star</p>
              </div>
              <Progress value={40} className="w-3/4" />
            </div>
            <div className="flex items-center space-x-4 w-full">
              <div className="flex items-center space-x-1 w-1/4">
                <div className="flex items-center space-x-1">
                  <FaStar className="text-[#FD8E1F] " />
                  {[1, 2, 3, 4].map((item) => (
                    <FaRegStar className="text-[#FD8E1F] " key={item} />
                  ))}
                </div>
                <p className="text-[12px] hidden md:block">1 Star</p>
              </div>
              <Progress value={20} className="w-3/4" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
