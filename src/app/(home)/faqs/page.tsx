"use client";
import { CustomSelect } from "@/components/common/CustomSelect";
import FormGenerator from "@/components/forms/useFormGenerator";
import CustomHeading from "@/components/layout/home/CustomHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";
import { faqsInputs } from "@/constants/formInputs";
import { faqsSchema } from "@/schema";
import React, { useState } from "react";
const categories = [
  "All",
  "Donec malesuada",
  "Quisque",
  "Toqum, in accumsan",
  "Ut sed orci",
];

const Faqs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  console.log(activeIndex);

  const filteredFaqs =
    selectedCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);
  const handleFormSubmit = (data: { subject: string; message: string }) => {
    console.log("Form Data:", data);
  };
  return (
    <main>
      <CustomHeading title="FAQs" />
      <section className="py-20 ">
        <div className="container max-w-7xl mx-auto flex items-center justify-between">
          <h1 className=" text-lg md:text-4xl font-semibold">
            Frequently asked questions
          </h1>
          <CustomSelect
            placeholder="Student"
            className="w-[150px] md:w-[200px]"
            items={["Students", "Teachers", "Parents"]}
          />
        </div>
        <div className="container max-w-7xl mx-auto mt-10">
          <div className="min-h-screen  p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <aside className="md:col-span-3 bg-white  p-4 rounded shadow h-fit sticky top-20">
                <ul className="space-y-2 text-sm">
                  {categories.map((cat) => (
                    <li
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setActiveIndex(null);
                      }}
                      className={`cursor-pointer p-2 duration-150 ease-in rounded ${
                        selectedCategory === cat
                          ? "bg-primary text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              </aside>

              <section className="md:col-span-6 space-y-2">
                {filteredFaqs.length === 0 ? (
                  <p className="text-gray-500">No FAQs available.</p>
                ) : (
                  filteredFaqs.map((faq, idx) => (
                    <div key={idx} className=" ">
                      <Accordion type="single" collapsible className="">
                        <AccordionItem value={faq.question}>
                          <AccordionTrigger>{faq.question}</AccordionTrigger>
                          <AccordionContent>{faq.answer} </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  ))
                )}
              </section>

              <aside className="md:col-span-3  shadow rounded p-4 space-y-4 h-fit sticky top-20 ">
                <h3 className="font-semibold text-lg">
                  Don&apos;t find your answer?
                </h3>
                <p className="text-sm text-gray-600">
                  Write your question here and our support team will help you.
                </p>
                <FormGenerator
                  inputs={faqsInputs}
                  onSubmit={handleFormSubmit}
                  schema={faqsSchema}
                  btnName="Submit Question"
                />
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faqs;
