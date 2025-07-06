"use client";

import Comments from "@/components/layout/dashboard/Comments";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { courseContent } from "@/constants";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa6";
import { IoArrowBackCircle } from "react-icons/io5";

const WatchCourse = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const lessonId = Number(searchParams.get("lesson")) || 1;

  const course = courseContent.find((c) => c.id === Number(id));
  const selectedLesson =
    course?.lessons?.find((l) => l.id === lessonId) || course?.lessons?.[0];

  if (!course || !selectedLesson) {
    return (
      <div className="p-10 text-center text-red-500 font-bold text-xl">
        Course or lesson not found.
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-[#F5F7FA] p-5 mb-5 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <IoArrowBackCircle className="text-5xl text-[#293897]" />
          <h3 className="text-xl font-semibold">{course.title}</h3>
        </div>

        <Button
          className="py-3 px-6"
          onClick={() => {
            const nextLessonId = lessonId + 1;
            const hasNext = course.lessons?.some((l) => l.id === nextLessonId);
            if (hasNext) {
              router.push(`/watch/${course.id}?lesson=${nextLessonId}`);
            }
          }}
        >
          Next Lecture
        </Button>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-5 lg:flex-row p-5">
        {/* Left: Video and Description */}
        <div className="flex-[3]">
          <div className="space-y-7 pb-10">
            <iframe
              className="w-full h-[400px] lg:h-[700px]"
              src={selectedLesson.video}
              title={selectedLesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <h3 className="text-2xl font-semibold">{selectedLesson.title}</h3>

            <div className="flex flex-col gap-5">
              <h3 className="text-xl font-semibold">Lecture Description</h3>
              <p className="text-lg text-gray-500">
                This is a lesson from the <strong>{course.title}</strong>{" "}
                course. You&apos;ll learn practical skills to help you understand and
                apply the topic effectively. Watch and follow along for best
                results!
              </p>
            </div>

            <Comments />
          </div>
        </div>

        {/* Right: Lessons List */}
        <div className="flex-[1]">
          <div className="mb-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Course Contents</h3>
              <span className="text-green-600">
                {Math.round((lessonId / (course.lessons?.length || 1)) * 100)}%
                Completed
              </span>
            </div>
            <Progress
              className="mt-5 h-1"
              value={Math.round((lessonId / (course.lessons?.length || 1)) * 100)}
            />
          </div>

          <Accordion type="single" className="w-full" defaultValue="Lessons">
            <AccordionItem value="Lessons">
              <AccordionTrigger className="hidden">Lectures</AccordionTrigger>{" "}
              {/* نخفي التريجر */}
              <AccordionContent>
                <div className="flex flex-col gap-5 p-2">
                  {course.lessons?.map((lesson: any) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between gap-2 cursor-pointer"
                      onClick={() =>
                        router.push(`/watch/${course.id}?lesson=${lesson.id}`)
                      }
                    >
                      <div className="flex items-center gap-2">
                        <FaPlay size={15} />
                        <span
                          className={`text-sm ${
                            lesson.id === lessonId
                              ? "text-blue-600 font-semibold"
                              : ""
                          }`}
                        >
                          {lesson.title}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {lesson.time}
                      </span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default WatchCourse;
