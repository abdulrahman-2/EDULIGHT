import FormGenerator from "@/components/forms/useFormGenerator";
import { CreateCourseInputs } from "@/constants/formInputs";
import { CreateSchema } from "@/schema";

const CourseInformation = ({ setActiveTab }: any) => {
  const handleFormSubmit = (data: {
    title: string;
    image: any;
    description: string;
    category: string;
    price: string;
    language: string;
    level: string;
    duration: string;
  }) => {
    console.log("Form Data:", data);
    setActiveTab("Curriculum");
  };

  return (
    <div className="mt-5">
      <h1 className="text-xl md:text-3xl font-semibold">Course Information</h1>
      <div className="mt-5">
        <FormGenerator
          inputs={CreateCourseInputs}
          schema={CreateSchema}
          onSubmit={handleFormSubmit}
          className="h-12"
          btnName="Save and Next"
        />
      </div>
    </div>
  );
};

export default CourseInformation;
