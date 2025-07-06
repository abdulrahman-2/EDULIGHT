"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { fetchRoadmaps } from "@/features/roadmaps/roadmapsSlice";
import { Progress } from "@/components/ui/progress";
import { ChevronDown, ChevronUp, PlayCircle } from "lucide-react";

export default function RoadmapDetailPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [activeCourseIndex, setActiveCourseIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    dispatch(fetchRoadmaps());
  }, [dispatch]);

  const { roadmaps } = useSelector((state: RootState) => state.roadmap);
  const singleRoadmap = roadmaps[0];

  if (!singleRoadmap) return <div className="p-4">Not found</div>;

  return (
    <div className="container my-20">
      {/* Roadmap Title */}
      <h1 className="text-3xl lg:text-[50px] font-bold">
        {singleRoadmap.name} Roadmap
      </h1>

      {/* Roadmap Description */}
      <p className="text-gray-400 text-[18px] mt-4 max-w-[600px]">
        {singleRoadmap.description ||
          "No description available for this roadmap."}
      </p>

      {/* Progress Bar */}
      <div className="mb-5 mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Course Contents</h3>
          {/* Static 15% for now */}
          <span className="text-blue-600 font-medium">15% Completed</span>
        </div>
        <Progress className="mt-3 h-1" value={15} />
      </div>

      {/* Courses and Sections */}
      <div className="space-y-6 mt-8">
        {singleRoadmap.courses.map((course, courseIndex) => (
          <div
            key={course.courseId}
            className="border rounded-md shadow-sm bg-white"
          >
            {/* Course Header */}
            <button
              onClick={() =>
                setActiveCourseIndex(
                  activeCourseIndex === courseIndex ? null : courseIndex
                )
              }
              className="w-full flex justify-between items-center px-4 py-4 text-left font-semibold text-lg bg-gray-100 hover:bg-gray-200"
            >
              <div className="flex items-center gap-2">
                📅 Week {courseIndex + 1}: {course.title}
                <span className="ml-3 text-sm text-gray-500">
                  {course.sections.reduce(
                    (count, section) => count + section.contentCourse.length,
                    0
                  )}{" "}
                  {course.sections.length > 1 ? "videos" : "video"}
                </span>
              </div>
              {activeCourseIndex === courseIndex ? (
                <ChevronUp />
              ) : (
                <ChevronDown />
              )}
            </button>

            {/* Course Sections */}
            {activeCourseIndex === courseIndex && (
              <div className="px-4 pb-4">
                {course.sections.map((section) => (
                  <div key={section.id} className="mt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {section.title}
                    </h4>
                    <div className="space-y-3">
                      {section.contentCourse.map((content, contentIndex) => (
                        <div
                          key={content.content_Id}
                          className="flex items-center justify-between px-4 py-2 rounded-md border hover:bg-gray-50 transition"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">
                              {String(contentIndex + 1).padStart(2, "0")}
                            </span>
                            <span className="text-gray-700">
                              {content.contentTitle}
                            </span>
                          </div>
                          <a
                            href={content.contentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"
                          >
                            <PlayCircle className="w-5 h-5" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
