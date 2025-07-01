import Comments from "@/components/layout/dashboard/Comments";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { curriculum } from "@/constants";
import { FaPlay } from "react-icons/fa6";
import { IoArrowBackCircle } from "react-icons/io5";

const WatchCourse = () => {
  return (
    <div>
      <div className="bg-[#F5F7FA] p-5 mb-5 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <IoArrowBackCircle className="text-5xl text-[#293897]" />
          <h3 className="text-xl font-semibold">
            Complete Website Responsive Design: from Figma to Webflow to Website
            Design
          </h3>
        </div>

        <Button className="py-3 px-6">Next lecture</Button>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row p-5">
        <div className="flex-[3]">
          <div className="space-y-7 pb-10">
            <iframe
              className="w-full h-[400px] lg:h-[700px]"
              src="https://www.youtube.com/embed/KRvyoNRnBfA?si=Rfih_wE3JgIrCXQx"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <h3 className="text-2xl font-semibold">2. Sign up in Webflow</h3>

            <div className="flex flex-col gap-5">
              <h3 className="text-xl font-semibold">Lectures Description</h3>
              <p className="text-lg text-gray-500">
                We cover everything you need to build your first website. From
                creating your first page through to uploading your website to
                the internet. We’ll use the world’s most popular (and free) web
                design tool called Visual Studio Code. There are exercise files
                you can download and then work along with me. At the end of each
                video I have a downloadable version of where we are in the
                process so that you can compare your project with mine. This
                will enable you to see easily where you might have a problem. We
                will delve into all the good stuff such as how to create your
                very own mobile burger menu from scratch learning some basic
                JavaScript and jQuery. If that all sounds a little too fancy -
                don’t worry, this course is aimed at people new to web design
                and who have never coded before. We’ll start right at the
                beginning and work our way through step by step.{" "}
              </p>
            </div>

            <Comments/>
          </div>
        </div>
        <div className="flex-[1]">
          <div className="mb-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Course Contents</h3>
              <span className="text-green-600">15% Completed</span>
            </div>

            <Progress className="mt-5 h-1" value={15} />
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              {curriculum.map((week) => (
                <AccordionItem key={week.id} value={week.title}>
                  <AccordionTrigger>{week.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-8 p-5">
                      {week.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between gap-2"
                        >
                          <div className="flex items-center gap-2">
                            <FaPlay size={15} />
                            <a
                              href={lesson.video}
                              target="_blank"
                              className="text-sm"
                            >
                              {lesson.title}
                            </a>
                          </div>

                          <span className="text-sm text-gray-500">
                            {lesson.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchCourse;
