'use client';
import React from "react";
import logo from "@/assets/das-images/light-logo.png";
import Image from "next/image";
import { socialLinks } from "@/constants";
import Link from "next/link";
import comingSoonImage from "@/assets/home-images/coming-soon.png"
import dynamic from "next/dynamic";
import { z } from "zod";
import FormGenerator from "@/components/forms/useFormGenerator";
import { emailSchema } from "@/schema";
import { emailInputs } from "@/constants/formInputs";
const CountdownTimer = dynamic(() => import('@/app/coming-soon/Countdown'), {
  ssr: false,
});
 const comingSoon = () => {

 
const handleFormSubmit = (email: string) => {
 
  console.log("Form Data:", email)  
}
  return (
    <>
    <header className=" h-[80px] px-2 md:px-4 lg:px-8 border-b flex items-center ">
      <div className=" container md:max-w-7xl mx-auto  flex items-center justify-between ">
        <div className="relative">
          <Image src={logo} width={150} height={40} alt="logo" />
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <div
              key={link.id}
              className={`bg-[#585f6b2f] text-[#4E5566] w-8 h-8 flex items-center justify-center rounded-full duration-200 ease-in ${
                link.name === "facebook"
                  ? "hover:bg-[#1877f2] hover:shadow-md hover:shadow-[#1877f2] hover:text-white"
                  : link.name === "insta"
                  ? "hover:bg-[#e4405f] hover:shadow-md hover:shadow-[#e4405f] hover:text-white"
                  : link.name === "twitter"
                  ? "hover:bg-[#1da1f2] hover:shadow-md hover:shadow-[#1da1f2] hover:text-white"
                  : link.name === "linkedin"
                  ? "hover:bg-[#0077b5] hover:shadow-md hover:shadow-[#0077b5] hover:text-white"
                  : link.name === "youtube"
                  ? "hover:bg-[#ff0000] hover:shadow-md hover:shadow-[#ff0000] hover:text-white"
                  : ""
              }`}
            >
              <Link href={link.link} className="">
                {link.icon}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </header>
    <section>
        <div className="container lg:max-w-7xl mx-auto md:px-10 py-10 lg:py-0 flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="max-w-[500px]  text-center lg:text-left">
              <p className='text-[#293897] text-[16px] font-semibold'>COMING SOON</p>
              <h1 className="text-4xl font-semibold my-4 md:my-6 leading-tight">We are going to launch our website very soon. <br /> <span className="text-primary capitalize">stay tuned</span></h1>
<div className="flex items-center justify-center">
<CountdownTimer  targetDate="2025-08-31T23:59:59" />
</div>             
          </div>

         <div className="lg:relative ">
         <Image src={comingSoonImage} alt="coming soon" width={600} height={400} className="object-contain hidden lg:block " />
          <div className="lg:absolute lg:bottom-0 lg:left-0 lg:transform lg:-translate-x-1/2 p-5 bg-white shadow-lg rounded-lg">
          <h2 className="font-semibold text-xl text-primary">Get notified when we launch</h2>
          <div className="mt-4">
           <FormGenerator inputs={emailInputs} btnName="Notify Me"  schema={emailSchema} onSubmit={handleFormSubmit}  />
           <p className="text-gray-400 mt-4">*Don't worry we will not spam you 😀 </p>

          </div>

          </div>
         </div>

        </div>
    </section>
    </>
  );
};

export default comingSoon;
