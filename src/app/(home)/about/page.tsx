import CustomHeading from "@/components/layout/home/CustomHeading";
import React from "react";
import aboutImg from "@/assets/home-images/about.png";
import businessPartner from "@/assets/home-images/secondAbout.png";
import Image from "next/image";
import CustomSection from "@/components/layout/home/CustomSection";
import { aboutInfo, aboutWords, companiesLogos } from "@/constants";
import gallery from "@/assets/home-images/Gallery.png";

import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const page = () => {
  return (
    <main>
      <CustomHeading title="About" />
      <div className="md:p-20 py-5">
        <CustomSection
          aboutOnly="2022 - 2024"
          headingText="We share knowledge with the world"
          paragraph="Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla. "
          image={aboutImg}
          imgDevClasses="w-[85%] md:w-[550px] h-[320px] lg:h-[400px]"
        />
      </div>
      <section className="md:p-20   py-8 border-t">
        <div className="container md:max-w-7xl mx-auto  ">
          <div className="flex items-center flex-col md:flex-row justify-between gap-10">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold">
                We Just keep growing with 6.3k Companies{" "}
              </h3>
              <p
                style={{ lineHeight: 1.4 }}
                className="text-[14px] mt-4 md:mt-8 text-gray-600 "
              >
                Nullam egestas tellus at enim ornare tristique. <br /> Class
                aptent taciti sociosqu ad litora torquent{" "}
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 py-10 mt-8">
            {aboutInfo.map((item) => (
              <div key={item.id} className="flex flex-col items-center gap-4 last:col-span-2 last:md:col-span-1">
                <div style={{ color: item.color }} className="text-3xl ">
                  {" "}
                  {item.icon}
                </div>
                <div className="felx flex-col justify-center">
                  <h4 className="text-2xl font-semibold text-center">
                    {" "}
                    {item.value}
                  </h4>
                  <p className="text-gray-500 text-[14px]">{item.title}</p>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-primary/10">
        <CustomSection
          paragraph='"We cannot solve our problems with the same thinking we used when we created them."—Albert Einstein. Institutions are slow to change. Committees are where good ideas and innovative thinking go to die. Choose agility over dogma. Embrace and drive change. We need to wipe the slate clean and begin with bold, radical thinking.'
          simpleParagraph="OUR ONE BILLION MISSION"
          headingText="Our one billion mission sounds bold, We agree."
          image={businessPartner}
          imgDevClasses="w-[85%] md:w-[650px] h-[320px] lg:h-[380px] order-first hidden md:block"
        />
      </div>
      <section className="bg-[#F5F7FA] md:py-20 py-5">
        <div className="container md:max-w-7xl mx-auto md:px-10 py-10 md:py-0 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="max-w-[500px]  text-center md:text-left">
            <p className="text-[#293897] text-[16px] uppercase">Our Gallery</p>
            <h1 className="text-4xl font-semibold my-4 md:my-6">
              We’ve been here almost <br className="hidden md:block" /> 17 years
            </h1>
            <p className="text-gray-400 text-[16px] leading-6 md:leading-8">
              Fusce lobortis leo augue, sit amet tristique nisi commodo in.
              Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc
              libero. Curabitur in urna ligula. torquent per conubia nostra.
            </p>
            <div className="hidden md:flex justify-center items-center gap-2 mt-8 bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-lg w-fit mx-auto md:mx-0 group">
              <Link href="/signup" className="transition-colors duration-200">
                Join Our Team
              </Link>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200 cursor-pointer" />
            </div>{" "}
          </div>
          <div className="relative w-[400px] md:w-[800px] h-[300px] md:h-[450px]">
            <Image
              src={gallery}
              alt="our gallery"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex md:hidden justify-center items-center gap-2 bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-lg w-fit mx-auto md:mx-0 group">
            <Link href="/signup" className="transition-colors duration-200">
              Join Our Team
            </Link>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200 cursor-pointer" />
          </div>
        </div>
      </section>
      <section className="md:py-20 pb-20 pt-10">
        <div className="container  md:max-w-7xl mx-auto gap-10 md:gap-5 grid grid-cols-1 md:grid-cols-3 ">
          {aboutWords.map((item) => (
            <div key={item.id} className=" rounded-lg ">
              <div className="relative bg-[#F5F7FA] p-6 flex flex-col gap-3 text-center rounded-lg h-fit">
                <BiSolidQuoteAltLeft className="text-[#293897] text-3xl" />
                <p className="text-lg">{item.desc}</p>

                <BiSolidQuoteAltRight className="text-[#293897] text-3xl self-end" />
                <div className="absolute border-transparent  -bottom-7 shadow-2xl left-1/2 -translate-x-1/2  border-t-[#F5F7FA] border-[15px]   "></div>
              </div>
              <div className="mt-6 text-center">
                <h4 className="text-[16px]">{item.name}</h4>
                <p className="text-sm text-gray-400">{item.job} <span className="text-primary">{item.company}</span></p>

              </div>

            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
