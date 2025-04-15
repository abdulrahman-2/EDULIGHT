import Image from "next/image";
import hero from "@/assets/home-images/hero-img.png";
import Link from "next/link";
import { companiesLogos, homeCategories, techAndEarn } from "@/constants";
import HCourseCard from "@/components/layout/home/HCourseCard";
import FeatCourseCard from "@/components/layout/home/FeatCourseCard";
import { FiArrowRight } from "react-icons/fi";
import startLearning from "@/assets/home-images/startLearning.png";
import InstructorCard from "@/components/layout/home/InstructorCard";
import CustomLink from "@/components/layout/home/CustomLink";

const Home = () => {
  return (
    <div className="relative">
      <main className="relative w-full h-screen ">
        <Image
          src={hero}
          alt="Hero"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-65"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 gap-4 lg:max-w-5xl mx-auto">
          <h1
            style={{ lineHeight: "1.3" }}
            className="text-[40px] md:text-6xl lg:text-7xl font-[600]  "
          >
            Learn with expert anytime anywhere
          </h1>
          <p className="mt-4 text-[#FBFBFB] text-base md:text-xl  lg:max-w-[35rem]">
            Our mision is to help people to find the best course online and
            learn with expert anytime, anywhere.
          </p>
          <CustomLink link="/signup" title="Get Started" />
        </div>
      </main>
      <section className="py-20">
        <div className="container max-w-5xl mx-auto">
          <h1 className="text-3xl font-semibold lg:text-4xl text-center">
            Browse top category
          </h1>

          <div className="grid grid-cols-3 gap-4 mt-8">
            {homeCategories.map((category) => (
              <Link
                href={category.link}
                key={category.id}
                style={{ backgroundColor: category.bgColor }}
                className="flex flex-col md:flex-row items-center gap-4 p-2 md:p-4 rounded-lg cursor-pointer hover:scale-[1.02] duration-150"
              >
                <div className="bg-white text-primary p-2 grid place-items-center rounded-lg w-12 h-12 text-xl">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-[12px] md:text-[16px] font-semibold">
                    {category.category}
                  </h3>
                  <p className="hidden md:block text-[12px] text-gray-400">
                    {category.coursesCount}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F5F7FA] py-20 pb-52  ">
        <div className="container  md:max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold lg:text-4xl text-center">
            Best selling courses
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-8">
            <HCourseCard />
          </div>
        </div>
      </section>
      <div className="relative container border bg-white md:max-w-[90rem]  md:p-20   rounded-lg  -top-40 pt-8 ">
        <div className="container md:max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-3xl font-semibold lg:text-4xl ">
              Our feature courses
            </h1>
            <p className="text-[#4E5566] text-sm text-center mt-4 md:mt-0">
              {" "}
              Vestibulum sed dolor sed diam mollis maximus vel nec dolor. <br />{" "}
              Donec varius purus et eleifend porta.
            </p>
          </div>

          <FeatCourseCard />
        </div>
      </div>
      <section className=" pb-20 -mt-20 ">
        <div className="container max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold lg:text-4xl text-center">
            Recently added courses
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
            <HCourseCard />
          </div>
          <div className="flex justify-center items-center gap-2 mt-8 bg-primary/10 text-primary px-4 py-2 rounded-lg w-fit mx-auto group">
            <Link href="/courses" className="transition-colors duration-200">
              Browse All Courses
            </Link>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200 cursor-pointer" />
          </div>
        </div>
      </section>
      <section className="bg-[#F5F7FA] py-20 pb-52  ">
        <div className="container  md:max-w-7xl mx-auto">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="w-full lg:w-1/2 overflow-hidden bg-gradient-to-l  from-[#293897] to-[#FF6636] px-10  rounded-lg flex items-center justify-center md:justify-between text-center md:text-left py-10 md:py-0">
              <div className="text-white flex  flex-col md:w-2/3">
                <h3 className="text-3xl font-semibold">Become an instructor</h3>
                <p style={{ lineHeight: 1.4 }} className="text-sm my-4">
                  Instructors from around the world teach millions <br /> of
                  students on Udemy. We provide the tools
                  <br /> and skills to teach what you love.
                </p>
                <div className="flex items-center gap-2  bg-white text-primary px-4 py-2 rounded-lg w-fit group mx-auto md:mx-0">
                  <Link
                    href="/courses"
                    className="transition-colors duration-200"
                  >
                    Start teaching
                  </Link>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200 cursor-pointer" />
                </div>
              </div>

              <div className=" relative hidden md:block  -bottom-8 w-1/3 h-[250px] ">
                <Image
                  alt="start learning"
                  src={startLearning}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="bg-white w-full lg:w-1/2 p-10 rounded-lg ">
              <h3 className="text-3xl font-semibold">
                Your teaching & earning steps
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 md:mt-4">
                {techAndEarn.map((item) => (
                  <div key={item.id} className="flex items-center  gap-4">
                    <div
                      style={{
                        backgroundColor: item.bgColor,
                        color: item.textColor,
                      }}
                      className=" rounded-full w-12 h-12 text-center flex items-center justify-center"
                    >
                      <div className=" font-semibold text-xl">{item.id}</div>
                    </div>
                    <p className="flex-1 text-lg md:text-[15px] ">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative mx-auto border bg-white md:max-w-[90rem]  md:p-20  rounded-lg  -top-40 py-8">
        <div className="container md:max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold lg:text-4xl text-center">
            Top instructors
          </h1>

          <InstructorCard />
          <div className="flex items-center flex-col md:flex-row  text-center  justify-center gap-2 mt-8">
            <p className="text-gray-600 text-[14px]">
              Thousands of students waiting for a instructor. Start teaching &
              earning now!.
            </p>
            <div className="flex justify-center items-center gap-2 text-primary  group">
              <Link
                href="/instructor"
                className="transition-colors duration-200"
              >
                Become Instructor
              </Link>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <section className="md:p-20 -mt-40 py-8 ">
        <div className="container md:max-w-[90rem] mx-auto">
          <div className="flex items-center flex-col md:flex-row justify-between gap-10">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold">
                6.3k trusted companies
              </h3>
              <p
                style={{ lineHeight: 1.4 }}
                className="text-[14px] mt-4 md:mt-8 text-gray-600 "
              >
                Nullam egestas tellus at enim ornare tristique. <br /> Class
                aptent taciti sociosqu ad litora torquent per conubia nostra.
              </p>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6">
              {companiesLogos.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-10 shadow-md"
                >
                  <Image
                    key={item.id}
                    src={item.image}
                    alt="company"
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1D2026] py-20 border-b">
        <div className="container md:max-w-7xl mx-auto">
          <div className="flex items-center flex-col md:flex-row justify-between gap-10">
            <div>
              <h2
                style={{ lineHeight: 1.4 }}
                className="text-3xl md:text-4xl font-semibold text-white"
              >
                Start learning with 67.1k <br /> students around the world.
              </h2>
              <div className="flex items-center gap-4 mt-8">
                <CustomLink link="/signup" title="Join The Family" />
                <CustomLink
                  link="/courses"
                  title="Browse All Courses"
                  className=" !bg-[#585f6b2f]  hover:!bg-[#3a3f482f] "
                />{" "}
              </div>
            </div>
            <div className="flex items-center justify-between gap-12">
              <div className="flex space-y-2 flex-col">
                <h1 className="font-semibold text-white text-4xl">6.3K</h1>
                <p className="text-gray-400 text-[15px]">Online Curses</p>
              </div>
              <div className="flex space-y-2 flex-col">
                <h1 className="font-semibold text-white text-4xl">26K</h1>
                <p className="text-gray-400 text-[15px]">
                  Certified Instructor
                </p>
              </div>
              <div className="flex space-y-2 flex-col">
                <h1 className="font-semibold text-white text-4xl">99%</h1>
                <p className="text-gray-400 text-[15px]">Sucess Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
