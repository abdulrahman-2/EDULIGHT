'use client'
import CustomHeading from "@/components/layout/home/CustomHeading";
import CustomSection from "@/components/layout/home/CustomSection";
import { CiMail } from "react-icons/ci";
import contactImg from "@/assets/home-images/contact.png";
import FormGenerator from "@/components/forms/useFormGenerator";
import { contactInputs } from "@/constants/formInputs";
import { contactSchema } from "@/schema";
import Image from "next/image";
import mapImage from "@/assets/home-images/map.png";
type ContactInfo = {
  title: string;
  text: string;
  subText?: string;
};
const contactInfo: ContactInfo[] = [
  {
    title: "Address",
    text: "Zefta, Gharbia Governorate",
    subText: "Kafr Elsarem",
  },
  {
    title: "Phone Number",
    text: "(480) 555-0103",
    subText: "(219) 555-0114",
  },
  {
    title: "Email",
    text: "help.eduguard@gmail.com",
    subText: "career.eduguard@gamil.com",
  },
];
const page = () => {
  const handleFormSubmit = (data: {
    fName: string;
    lName: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    console.log("Form Data:", data);
  };
  return (
    <main>
      <CustomHeading title="Contact" />

      <div className="py-10">
        <CustomSection
          headingText="Connect with us"
          paragraph="Want to chat? We’d love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello."
          btnText="Copy Email"
          icon={<CiMail />}
          image={contactImg}
          imgDevClasses="hidden md:block relative -bottom-10 !w-[600px] h-[380px]"
        />
      </div>
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container  md:max-w-7xl mx-auto flex flex-col  ">
          <h2 className="text-4xl font-semibold text-center mb-10">
            Contact Us
          </h2>
          <div className="w-full flex justify-between flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-[#1D2026] text-xl">
                Will you be in Los Angeles or any other <br /> branches any time
                soon? Stop by the office! <br /> We'd love to meet.
              </p>
              <div className="flex flex-col gap-5 mt-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="flex  flex-col md:flex-row gap-4  md:gap-10 py-3 md:py-6 border-b last:border-none"
                  >
                    <h3 className="text-[#293897] uppercase font-[500] text-[16px]">
                      {item.title}
                    </h3>
                    <div className="flex flex-col space-y-2">
                      <p className="text-[#1D2026] text-[16px] ">{item.text}</p>
                      {item.subText && (
                        <p className="text-[#1D2026] text-[16px] ">
                          {item.subText}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-white p-10 rounded-lg">
                <div className="flex flex-col gap-3">
                  <p className="capitalize text-2xl text-[#1D2026] ">
                    Get in touch
                  </p>
                  <p className="text-[15px] text-gray-300">
                    Feel free contact with us, we love to make new partners &
                    friends
                  </p>
                </div>
              <div className="mt-8">

                <FormGenerator inputs={contactInputs} onSubmit={handleFormSubmit} schema={contactSchema} btnName="Send Message" />
              </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
      {/* <div className="relative w-full h-[400px]">

<Image src={mapImage} alt="map" className="object-contain" fill />
</div> */}
    </main>
  );
};

export default page;
