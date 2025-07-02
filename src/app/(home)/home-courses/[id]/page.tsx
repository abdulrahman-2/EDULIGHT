import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { courseContent, curriculum } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaPlay, FaStarHalfAlt } from "react-icons/fa";
import instractor from "@/assets/home-images/instructor.png";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { Progress } from "@/components/ui/progress";
import { CustomSelect } from "@/components/common/CustomSelect";
import Comments from "@/components/layout/dashboard/Comments";

const CoursePage = async ({ params }: { params: any }) => {
  const { id } = await params;
  const course = courseContent.find((course) => course.id === Number(id));

  return (
    <>
      <div className="pt-28 pb-56 bg-primary/10">
        <div className="container">
          <div className="space-x-2">
            <Link href="/" className="font-semibold">
              Home
            </Link>
            <span>/</span>
            <Link href={`home-courses/${id}`}>{course?.category}</Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 container">
        <div className="flex-[2]">
          <div className="mt-[-170px] space-y-10">
            <h1 className="text-3xl font-semibold max-w-3xl">
              {course?.title}
            </h1>

            <Image
              src={course?.image}
              alt={course?.title || ""}
              width={500}
              height={500}
              className="mt-5 w-full h-[300px] md:h-[400px] lg:h-[600px]"
            />

            <div className="space-y-7">
              <h2 className="text-2xl font-semibold">Description</h2>
              <p className="mt-3">{course?.desc}</p>

              <div className="flex flex-col gap-5 p-10 bg-[#E1F7E366]">
                <h3 className="text-xl font-semibold">
                  What you will learn in this course
                </h3>

                <div className="flex flex-col lg:flex-row gap-5">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-2">
                      <IoIosCheckmarkCircle
                        size={25}
                        className="text-green-600"
                      />
                      <span className="text-sm">
                        You will learn how to design beautiful websites using
                        Figma, an interface design tool used by designers at
                        Uber, Airbnb and Microsoft.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <IoIosCheckmarkCircle
                        size={25}
                        className="text-green-600"
                      />
                      <span className="text-sm">
                        You will learn secret tips of Freelance Web Designers
                        and how they make great money freelancing online.
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-2">
                      <IoIosCheckmarkCircle
                        size={25}
                        className="text-green-600"
                      />
                      <span className="text-sm">
                        You will learn how to design beautiful websites using
                        Figma, an interface design tool used by designers at
                        Uber, Airbnb and Microsoft.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <IoIosCheckmarkCircle
                        size={25}
                        className="text-green-600"
                      />
                      <span className="text-sm">
                        You will learn secret tips of Freelance Web Designers
                        and how they make great money freelancing online.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-xl font-semibold">Curriculum</h3>

                <div>
                  <Accordion type="single" collapsible className="w-full">
                    {curriculum.map((week) => (
                      <AccordionItem key={week.id} value={week.title}>
                        <AccordionTrigger>{week.title}</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-8 p-5 bg-[#E1F7E366]">
                            {week.lessons.map((lesson) => (
                              <div
                                key={lesson.id}
                                className="flex items-center justify-between gap-2"
                              >
                                <div className="flex items-start gap-2">
                                  <FaPlay size={20} />
                                  <Link
                                    href={lesson.video}
                                    className="text-sm"
                                  >
                                    {lesson.title}
                                  </Link>
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

              <div>
                <h3 className="text-xl font-semibold">Course instructor </h3>

                <div className="flex gap-5 border p-5 rounded-lg mt-5">
                  <Image
                    src={instractor}
                    alt="Instructor"
                    width={150}
                    height={150}
                    className="rounded-full w-[80px] h-[80px]"
                  />
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-semibold">Nima Tahami</h4>
                        <p className="text-sm text-gray-500">
                          Entrepreneur & Designer • Founder of ShiftRide
                        </p>
                      </div>

                      <Button className="py-3 px-5">Chat Now</Button>
                    </div>

                    <p className="text-sm text-gray-500">
                      I&apos;m an entrepreneur & designer with a high passion
                      for building products of all sorts and seeing ideas come
                      to life. As a serial entrepreneur, I&apos;ve designed and
                      built projects in fields ranging from fashion to
                      technology. I have over 10 years of experience in both...
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="col-span-full lg:col-span-1">
                  <div className="bg-white dark:bg-primary/10 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between pb-5">
                      <h3 className="text-xl font-semibold">
                        Overall Course Rating
                      </h3>
                      <div className="w-[180px]">
                        <CustomSelect
                          items={[
                            "This Week",
                            "This Month",
                            "This Year",
                            "All",
                          ]}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="dark:bg-primary/10 my-5">
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
                    <div className="dark:bg-primary/10 flex flex-col space-y-4 py-5">
                      <ProgressComponent stars={5} progressValue={100} />
                      <ProgressComponent stars={4} progressValue={80} />
                      <ProgressComponent stars={3} progressValue={60} />
                      <ProgressComponent stars={2} progressValue={40} />
                      <ProgressComponent stars={1} progressValue={20} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pb-10">
                <Comments />
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex-1 md:sticky inset-0 md:-mt-[200px]">
          <Card className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-semibold">${course?.price}</span>
                <span className="font-semibold text-gray-500 line-through">
                  ${"399"}
                </span>
              </div>

              <div className="py-2 px-4 bg-primary/50 text-white font-semibold">
                46% off
              </div>
            </div>
            <p className="text-red-800 pb-5">2 days left at this price!</p>
            <hr />

            <ul className="pt-5 space-y-4 pb-5">
              <li className="flex items-center justify-between">
                <span>Course Duration</span>
                <span className="text-gray-500">30m</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Course Level</span>
                <span className="text-gray-500">Beginner</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Students Enrolled</span>
                <span className="text-gray-500">{course?.students}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Language</span>
                <span className="text-gray-500">English</span>
              </li>
            </ul>
            <hr />
            <div className="flex flex-col items-center justify-center">
              <Button className="w-full py-6">Add to cart</Button>
              <Button className="w-full mt-5 py-6 bg-primary/30 text-primary">
                Buy Now
              </Button>
              <Button className="w-1/2 mt-5" variant={"outline"}>
                Add to wishlist
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CoursePage;

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
