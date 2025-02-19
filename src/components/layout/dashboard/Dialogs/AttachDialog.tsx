import React, { useState } from "react";
import { z } from "zod";
import { CustomDialog } from "../CustomDialog";
import FormGenerator from "@/components/forms/useFormGenerator";

const AttachDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formInputs = [
    {
      type: "file",
      name: "file",
      label: "Attach File",
      className: "col-span-2",
    },
  ];
  const fileSchema = z.object({
    file: z
      .instanceof(File, { message: "Must be a valid file" }) // Ensures it's a File object
      .refine((file) => file.size < 50 * 1024 * 1024, {
        message: "File size must be less than 50MB",
      }),
  });

  const handleFormSubmit = (data: { file: any }) => {
    console.log("Form Data:", data);
    setIsDialogOpen(false);
  };
  return (
    <div>
      <button onClick={() => setIsDialogOpen(true)}>Attach File</button>
      {isDialogOpen && (
        <CustomDialog
          type="file"
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        >
          <FormGenerator
            btnName="Attach"
            className="w-full outline-none focus:outline-none mt-2 h-10 cursor-pointer text-gray-500"
            inputs={formInputs}
            schema={fileSchema}
            onSubmit={handleFormSubmit}
          />
        </CustomDialog>
      )}
    </div>
  );
};

export default AttachDialog;
