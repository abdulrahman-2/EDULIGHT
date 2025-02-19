import FormGenerator from "@/components/forms/useFormGenerator";
import Image from "next/image";
import React from "react";
import { z } from "zod";
import instructorImage from "@/assets/das-images/person.png";
import { Close } from "@radix-ui/react-dialog";
import { IoClose } from "react-icons/io5";

const PublishCourse = () => {
  const formInputs = [
    {
      name: "welcomeMessage",
      label: "Welcome Message",
      placeholder: "Enter course starting message here...",
      className: "col-span-1",
      type: "textarea",
    },
    {
      name: "congratulationsMessage",
      label: "Congratulations Message",
      placeholder: "Enter your course completed message here...",
      className: "col-span-1",
      type: "textarea",
    },
  ];
  const CreateSchema = z.object({
    welcomeMessage: z.string(),
    congratulationsMessage: z.string(),
  });

  const handleFormSubmit = (data: {
    welcomeMessage: string;
    congratulationsMessage: string;
  }) => {
    console.log("Form Data:", data);
  };
  return (
    <div className="mt-5">
      <h1 className="text-xl md:text-3xl font-semibold">Publish Course</h1>
      <div className="flex flex-col">
        <div>
          <h4 className="my-5 text-base md:text-lg">Message</h4>
          <div>
            <FormGenerator
              inputs={formInputs}
              schema={CreateSchema}
              onSubmit={handleFormSubmit}
              className="h-24 placeholder:absolute placeholder:top-4 placeholder:-translate-y-1/2 resize-none outline-none "
              btnName="Save and Next"
            />
          </div>
        </div>
        <div>
          <h4 className="my-5 text-base md:text-lg">Instructor</h4>
          <div  className="flex items-center gap-3 bg-gray-100 w-fit py-2 px-4 rounded-lg">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src={instructorImage}
                fill
                alt="logo"
                className="object-cover"
              />
            </div>
            <div>
            <p className="font-semibold">Instructor Name</p>
            <p className="text-sm text-gray-600">Frontend Dev</p>
            </div>
           <IoClose className="text-xl ml-10 cursor-pointer text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishCourse;
