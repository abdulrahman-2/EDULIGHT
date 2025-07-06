import { examasData } from "@/constants";
import Link from "next/link";
import React from "react";
import { IoMdPlay } from "react-icons/io";
import { TbClockHour3Filled } from "react-icons/tb";
import { BsQuestionCircleFill } from "react-icons/bs";

const page = ({ params }: { params: any }) => {
  const { id } = params;
  const examFiltered = examasData.find((exam) => exam.id === Number(id));
  if (!examFiltered) {
    return <div>exam not found</div>;
  }

  const { duration, title } = examFiltered;
  return (
    <div className="container max-w-7xl mx-auto  shadow-md rounded-lg px-12 py-8 my-10">
      <div className="flex items-center justify-between flex-col md:flex-row space-y-4 md:space-x-0 mb-6">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Link
          href={`/exams/${id}/startExam`}
          className="flex items-center gap-2 bg-primary text-white py-2 px-4 rounded hover:bg-primary/80 duration-200 ease-in "
        >
          <IoMdPlay className="text-2xl text-white" /> Start Exam
        </Link>
      </div>
      <div className="flex items-center gap-4 border-y py-6">
        <TbClockHour3Filled className="text-2xl" />
        <div className="flex  flex-col gap-2">
          <h4 className="text-[16px] font-semibold">This Exam is {duration} </h4>
          <p className="text-gray-400">
            There are time limits on this exam , take the time you need to
            finish the exam select “ submit Answers’ after the last Question.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 py-6">
        <BsQuestionCircleFill className="text-2xl" />{" "}
        <div className="flex  flex-col gap-2">
          <h4 className="text-[16px] font-semibold">20 Questions</h4>
          <p className="text-gray-400">
          This exam contain 20 Questions.you can return your earlier answers before submitting the exam
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
