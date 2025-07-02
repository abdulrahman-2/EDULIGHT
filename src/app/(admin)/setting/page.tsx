"use client";

import FormGenerator from "@/components/forms/useFormGenerator";
import Image from "next/image";
import courseImage from "@/assets/das-images/Course Images.png";
import { Button } from "@/components/ui/button";
import { settingSchema } from "@/schema";
import { settingInputs } from "@/constants/formInputs";

const Setting = () => {
  const handleFormSubmit = (data: {
    image: any;
    username: string;
    oldPassword: string;
    newPassword: string;
  }) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <h1 className="my-5 text-3xl font-semibold">Settings</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-primary/10 p-3 sm:p-5 rounded-lg col-span-full lg:col-span-2 ">
          <h2 className="text-2xl font-semibold">Edit Your Profile</h2>
          <FormGenerator
            inputs={settingInputs}
            schema={settingSchema}
            onSubmit={handleFormSubmit}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 text-center bg-white dark:bg-primary/10 p-3 sm:p-5 rounded-lg col-span-full lg:col-span-1">
          <h2 className="text-2xl font-semibold">Mohamed Ahmed</h2>
          <h3 className="text-gray-600 dark:text-gray-400">
            example@example.com
          </h3>
          <div className="relative w-[150px] h-[150px] mx-auto">
            <Image
              src={courseImage}
              fill
              alt="logo"
              className="absolute object-cover rounded-full"
            />
          </div>
          <Button variant={"destructive"} className="font-semibold">
            Delete Account
          </Button>
          <p className="text-gray-600 dark:text-gray-400">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>

          <p className="font-semibold">
            <span className="font-normal text-gray-600 dark:text-gray-400">
              Member since:
            </span>{" "}
            Jan 21, 2020
          </p>
        </div>
      </div>
    </>
  );
};

export default Setting;
