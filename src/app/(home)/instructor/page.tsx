'use client'
import CustomHeading from "@/components/layout/home/CustomHeading";
import CustomSection from "@/components/layout/home/CustomSection";
import instructorImg from "@/assets/home-images/becom-instructor.png";
import { aboutInfo, instructorPageInfo } from "@/constants";
import Image from "next/image";
import sectionImage1 from "@/assets/home-images/instructorImage.png";
import sectionImage2 from "@/assets/home-images/instructorImage2.png";
import sectionImage3 from "@/assets/home-images/instructorImage3.png";
import instructors from "@/assets/home-images/instructors.png"
import { FaCheckCircle } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { PiEnvelopeLight, PiQuotesDuotone } from "react-icons/pi";
import { useState } from "react";
import footerImage from "@/assets/home-images/instructorFooter.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CustomLink from "@/components/layout/home/CustomLink";
const checkList = [
  {
    id: 1,
    title: "Tech your students as you want.",
    paragraph: "Morbi quis lorem non orci fermentum euismod. Nam sapien tellus, aliquam nec porttitor vel, pellentesque at metus. ",
    icon: <FaCheckCircle />,
  },
  {
    id: 2,
    title: "Manage your course, payment in one place",
    paragraph: "Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu. Nullam vel libero pharetra, euismod turpis et, elementum enim.",
    icon: <FaCheckCircle />,
  },
  {
    id: 3,
    title: "Chat with your students in real time.",
    paragraph: "Nullam mattis lectus ac diam egestas posuere. Praesent auctor massa orci, ut fermentum eros dictum id. ",
    icon: <FaCheckCircle />,
  },
];
const quotes = [
  {
    id: 1,
    text: "Nulla sed malesuada augue. Morbi interdum vulputate imperdiet. Pellentesque ullamcorper auctor ante, egestas interdum quam facilisis commodo. Phasellus efficitur quis ex in consectetur. Mauris tristique suscipit metus, a molestie dui dapibus vel.",
  },
  {
    id: 2,
    text: "Quote 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rem voluptas animi quas amet!",
  },
  {
    id: 3,
    text: "Quote 3: Another great message about teamwork and inspiration.",
  },
];
const page = () => {
  const [current, setCurrent] = useState(0);

  const prevQuote = () => {
    setCurrent((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const nextQuote = () => {
    setCurrent((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };
  return (
    <main>
      <CustomHeading title="Become an Instructor" />
      <CustomSection
        headingText="Become an Instructor"
        paragraph="Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries."
        btnText="Get Started"
        imgDevClasses="hidden md:block relative -bottom-12 w-[900px] h-[580px] "
        image={instructorImg}
      />
      <div className="bg-primary/10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 py-10 mt-8 container max-w-7xl mx-auto ">
          {aboutInfo.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-4 last:col-span-2 last:md:col-span-1"
            >
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
      <section className="py-5 md:py-10">
        <div className="container md:max-w-7xl mx-auto md:px-10 py-10 md:py-0 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className={"relative w-[300px] md:w-[500px] h-[300px] md:h-[500px] "}>
            <Image
              src={sectionImage1}
              alt="instructor image"
              fill
              loading="lazy"

              className="object-contain"
            />
          </div>
          <div className="max-w-[500px]  text-center md:text-left">
            <h1 className="text-4xl font-semibold my-4 md:my-6">
              Why you’ll start teaching on Edulight
            </h1>
            <p className="text-[#4E5566] text-[16px] leading-6 ">
              Praesent congue ornare nibh sed ullamcorper. Proin venenatis
              tellus non turpis scelerisque, vitae auctor arcu ornare. Cras
              vitae nulla a purus mollis venenatis.{" "}
            </p>
            <div>
              {checkList.map((item) => (
                <div className="flex  gap-3 my-10 md:my-6 " key={item.id}>
                  <div  className="text-3xl  p-2 text-[#23BD33]">
                    {" "}
                    {item.icon}
                  </div>
                  <div className="flex flex-col justify-center ">  
                    <h4 className="text-lg font-[500]">{item.title}</h4>
                    <p className="text-gray-400 text-[14px]">{item.paragraph}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/10 pb-0 py-10 md:py-20 ">
      <h1 className="font-semibold text-4xl text-center">How you'll become <br />
       successful instructor</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 mt-8 container max-w-7xl mx-auto ">
          {instructorPageInfo.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg"
            >
              <div style={{ color: item.color, backgroundColor: item.bgColor }} className="text-3xl p-5 rounded-lg ">
                {item.icon}
              </div>
              <div className="felx flex-col justify-center items-center text-center">
                <h4 className="md:text-[16px] text-lg md:whitespace-nowrap font-[500] ">
                  {item.title}
                </h4>
                <p className="text-gray-400 leading-6 text-[14px] mt-2">{item.value}</p>
              </div>
            </div>
          ))}

        </div>
      </section>
      <section className="py-0 md:py-10">
        <div className="container md:max-w-7xl mx-auto md:px-10 py-10 md:py-0 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="max-w-[500px]  text-center md:text-left">
            <h1 className="text-4xl font-semibold ">
            Instructor rules & regulations
            </h1>
            <p className="text-[#4E5566] text-[16px] leading-6 my-4 md:my-6">
            Sed auctor, nisl non elementum ornare, turpis orci consequat arcu, at iaculis quam leo nec libero. Aenean mollis turpis velit, id laoreet sem luctus in. Etiam et egestas lorem. 
            </p>
           <ul className="space-y-1 px-4">
            <li className="text-[16px] text-[#1D2026] list-disc">Sed ullamcorper libero quis condimentum pellentesque.</li>
            <li className="text-[16px] text-[#1D2026] list-disc">Nam leo tortor, tempus et felis non. </li>
            <li className="text-[16px] text-[#1D2026] list-disc">Porttitor faucibus erat. Integer eget purus non massa ultricies pretium ac sed eros.</li>
            <li className="text-[16px] text-[#1D2026] list-disc">Vestibulum ultrices commodo tellus. Etiam eu lectus sit amet turpi.</li>
           </ul>
          </div>
          <div className={"relative w-[380px] md:w-[500px] h-[400px] md:h-[500px] order-first md:order-last"}>
            <Image
              src={sectionImage2}
              alt="instructor image"
              loading="lazy"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <section className="py-10 bg-primary/10">
        <div className="container md:max-w-7xl mx-auto md:px-10 py-10 md:py-0 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className={"relative w-[350px] md:w-[500px] h-[350px] md:h-[500px] "}>
            <Image
              src={sectionImage3}
              alt="instructor image"
              loading="lazy"
              fill
              className="object-contain"
            />
          </div>
          <div className="md:max-w-[620px]  text-center md:text-left">
            <h1 className="text-4xl font-semibold mt-6 md:mt-0 ">
            Don’t worry we’re always here to help you            </h1>
            <p className="text-[#4E5566] text-[16px] leading-6 my-4 md:my-6">
            Mauris aliquet ornare tortor, ut mollis arcu luctus quis. Phasellus nec augue malesuada, sagittis ligula vel, faucibus metus. Nam viverra metus eget nunc dignissim.            </p>
           <ul className="space-y-1 ">
            <li className="text-[12px] md:text-[14px] text-[#1D2026] flex items-center  gap-2"> <GoArrowRight className="text-xl md:text-3xl text-primary " /> Sed ullamcorper libero quis condimentum pellentesque.</li>
            <li className="text-[12px] md:text-[14px] text-[#1D2026] flex items-center gap-2"> <GoArrowRight className="text-xl md:text-3xl text-primary " /> Nam leo tortor, tempus et felis non. </li>
            <li className="text-[12px] md:text-[14px] text-[#1D2026] flex items-center gap-2"> <GoArrowRight className="text-xl md:text-3xl text-primary " /> Porttitor faucibus erat. Integer eget purus non massa ultricies pretium ac sed eros.</li>
            <li className="text-[12px] md:text-[14px] text-[#1D2026] flex items-center gap-2"> <GoArrowRight className="text-xl md:text-3xl text-primary " /> Vestibulum ultrices commodo tellus. Etiam eu lectus sit amet turpi.</li>
           </ul>
           <div className="flex items-center gap-3 mt-4 ">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
            <PiEnvelopeLight className="text-primary text-2xl" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[12px] text-[#8C94A3]">Email us, anytime anywhere</p>
              <p className="text-lg text-[#1D2026]">help.edulight@gamil.com</p>
            </div>

           </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container md:max-w-7xl mx-auto md:px-10 py-10 md:py-0 flex flex-col md:flex-row items-center justify-between gap-16">
        
          <div className=" max-w-[500px]  text-center md:text-left ">
            <h1 className="text-4xl font-semibold my-4 md:my-6">
            20k+ Instructor created their success story with eduguard            </h1>
            <p className="text-[#4E5566] text-[16px] leading-6 line-clamp-5">
            Nunc euismod sapien non felis eleifend porttitor. Maecenas dictum eros justo, id commodo ante laoreet nec. Phasellus aliquet, orci id pellentesque mollis.
            </p>
            <div className=" max-w-md h-[300px] line-clamp-5 bg-[#f3f6fc] p-6 rounded shadow mt-4">
            <div>
            <PiQuotesDuotone className="text-3xl text-primary" />
            <p className="text-[#4E5566] text-[16px] leading-6 my-4 md:my-6">{quotes[current].text}</p>
            </div>
            </div>
            <div className="flex  gap-4 mt-6  ">
              <button onClick={prevQuote} className="bg-[#f3f6fc] hover:bg-primary transition-colors hover:shadow-md duration-200 ease-in-out text-primary hover:text-white py-3 px-6 rounded-full flex items-center gap-2">
                <FaArrowLeft className="text-2xl " />
              </button>
              <button onClick={nextQuote} className="bg-[#f3f6fc] hover:bg-primary transition-colors hover:shadow-md duration-200 ease-in-out text-primary hover:text-white py-3 px-6 rounded-full flex items-center gap-2">
                <FaArrowRight className="text-2xl " />
              </button>

            </div>
          </div>
          <div className={"relative w-[380px] md:w-[550px] h-[500px] md:h-[700px] order-first md:order-last"}>
            <Image
              src={instructors}
              alt="instructors image"
              loading="lazy"
              fill
              className="bject-contain"
            />
          </div>
        </div>
      </section>
      <section className="py-10 bg-[#1D2026]">
<div className="container md:max-w-7xl mx-auto md:px-10 py-10 md:py-0 flex flex-col md:flex-row items-center justify-between gap-5">
    <div className="max-w-[500px]  text-center md:text-left">
        <h1 className="text-4xl font-semibold my-4 md:my-6 text-white">Start teaching with us and inspire others</h1>
        <p className="text-gray-400 text-[16px] leading-4 md:leading-8 mb-8">Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries.</p>
        <CustomLink link="/signup" title="Register Now" className=""  />
    </div>
    <div className={`relative w-[380px] md:w-[550px] h-[300px]`}>
        <Image src={footerImage} alt="about" fill className="object-contain" />
    </div>
  </div>
      </section>
    </main>
  );
};

export default page;
