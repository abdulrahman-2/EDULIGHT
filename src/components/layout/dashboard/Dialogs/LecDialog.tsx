import { z } from "zod";
import FormGenerator from "@/components/forms/useFormGenerator";
import { CustomDialog } from "../CustomDialog";
import { useState } from "react";

const LecDialog = (
) => {
  const [isLecDialogOpen, setIsLecDialogOpen] = useState(false);
  const formInputs = [
    {
      type: "file",
      name: "video",
      label: "Lecture Video",
      className: "col-span-2",
    },
  ];
  const videoSchema = z.object({
    video: z
      .instanceof(File, { message: "Must be a valid video file" }) // Ensures it's a File object
      .refine((file) => file.size < 50 * 1024 * 1024, {
        message: "File size must be less than 50MB",
      }) 
      .refine(
        (file) =>
          ["video/mp4", "video/webm", "video/ogg", "video/mov"].includes(
            file.type
          ),
        {
          message: "Invalid file type. Only MP4, WebM, OGG, and MOV are allowed",
        }
      ),
  });

  const handleFormSubmit = (data: { video: any }) => {
    console.log("Form Data:", data);
    setIsLecDialogOpen(false);
  };
  
  return (
  <div>
    <button onClick={() => setIsLecDialogOpen(true)}>Video</button>
   { isLecDialogOpen && <CustomDialog
      type="file"
      open={isLecDialogOpen}
      onOpenChange={setIsLecDialogOpen}
    >
      <FormGenerator
        inputs={formInputs}
        onSubmit={handleFormSubmit}
        schema={videoSchema}
        btnName="Upload"
        className="w-full outline-none focus:outline-none mt-2 h-10 cursor-pointer text-gray-500"

      />
    </CustomDialog>}
  </div>  
  
  );
};

export default LecDialog;
