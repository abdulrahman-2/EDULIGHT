import React, { useState } from "react";
import { z } from "zod";
import { CustomDialog } from "../CustomDialog";
import FormGenerator from "@/components/forms/useFormGenerator";
import { BiEditAlt } from "react-icons/bi";

const EditLecDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formInputs = [
    {
      type: "text",
      name: "text",
      label: "Attach File",
      className: "col-span-2",
    },
  ];
  const lecNameSchema = z.string().min(1, "File is required");

  const handleFormSubmit = (data: { text: string }) => {
    console.log("Form Data:", data);
    setIsDialogOpen(false);
  };
  return (
    <div>
      <button onClick={() => setIsDialogOpen(true)}>
        <BiEditAlt className="hover:text-primary duration-150" />
      </button>
      {isDialogOpen && (
        <CustomDialog
          type="text"
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        >
          <FormGenerator
            btnName="Update"
            className="w-full outline-none focus:outline-none mt-2 h-10 cursor-pointer text-gray-500"
            inputs={formInputs}
            schema={lecNameSchema}
            onSubmit={handleFormSubmit}
          />
        </CustomDialog>
      )}
    </div>
  );
};

export default EditLecDialog;
