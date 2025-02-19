"use client";

import { useState } from "react";
import { PiPlayCircleDuotone } from "react-icons/pi";
import { RiStackLine } from "react-icons/ri";
import CourseInformation from "@/components/layout/dashboard/CourseInformation";
import Curriculum from "@/components/layout/dashboard/Curriculum";
import PublishCourse from "@/components/layout/dashboard/PublishCourse";

const CreateCourse = () => {
  const [activeTab, setActiveTab] = useState("Information");

  const menu = [
    {
      icon: <RiStackLine />,
      title: "Information",
    },
    {
      icon: <PiPlayCircleDuotone />,
      title: "Curriculum",
    },
    {
      icon: <RiStackLine />,
      title: "Publish",
    },
  ];

  return (
    <div>
      <h1 className="my-5 text-3xl font-semibold">Create Course</h1>
      <div className="bg-white dark:bg-primary/10 p-3 sm:p-5 rounded-lg">
        {/* Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 md:gap-5 border-b  border-gray-200 ">
          {menu.map((tab) => (
            <button
              key={tab.title}
              onClick={() => setActiveTab(tab.title)}
              className={` pb-2 ${
                activeTab === tab.title
                  ? "border-b-2 border-primary font-semibold text-primary "
                  : "text-gray-500"
              }`}
            >
              <div className="flex items-center gap-1 text-sm md:text-lg">
                {tab.icon} {tab.title}
              </div>
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div>
          {activeTab === "Information" && (
            <CourseInformation setActiveTab={setActiveTab} />
          )}
          {activeTab === "Curriculum" && <Curriculum />}
          {activeTab === "Publish" && <PublishCourse />}
        </div>
      </div>
    </div>
  );
};


export default CreateCourse;
