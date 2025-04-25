import FormGenerator from "@/components/forms/useFormGenerator";
import {
  accountPasswordInputs,
  accountSettingsInputs,
} from "@/constants/formInputs";
import { changePasswordSchema, profileSettingSchema } from "@/schema";
import React from "react";

const StudentSettings = () => {
  const handleSubmit = (data: any) => {
    console.log("form data", data);
  };
  const handleSubmitPassword = (data: any) => {
    console.log("form data", data);
  };
  return (
    <main>
      <div className="flex flex-col gap-6 pt-10">
        <div className="container md:px-0">
          <h1 className="text-2xl font-semibold">Account Settings</h1>
        </div>
        <div className="container max-w-7xl mx-auto flex flex-col md:flex-row w-full gap-10 justify-between ">
          <div className="w-full md:w-1/2">
            <FormGenerator
              inputs={accountSettingsInputs}
              schema={profileSettingSchema}
              onSubmit={handleSubmit}
              btnName="Save Change"
            />
          </div>
          <div className=" hidden md:block w-[1px] rounded-full bg-gray-300">

          </div>
          <div className="w-full md:w-1/2">
            {" "}
            <FormGenerator
              inputs={accountPasswordInputs}
              schema={changePasswordSchema}
              onSubmit={handleSubmitPassword}
              btnName="Change Password"
            />
          </div>{" "}
        </div>
      </div>
    </main>
  );
};

export default StudentSettings;
