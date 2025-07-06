import { Card } from "@/components/ui/card";
import { examasData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExamCard = () => {
  return (
    <>
      {examasData.map((exam) => (
        <Card key={exam.id} className="overflow-hidden">
          <Link href={`/exams/${exam.id}`}>
          <div className="flex flex-col ">
            <div className="relative h-[170px] w-full  ">
              <Image
                src={exam.image}
                alt={exam.title}
                fill
                className="object-cover "
              />
            </div>
            <div className="  dark:bg-primary/10  ">
              <div className="p-3">
                {" "}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase  font-[500] bg-primary/10 text-primary  py-1 px-2 rounded-md">
                    {exam.category}
                  </span>
                  <h4 className="text-lg font-semibold text-primary dark:text-white py-1 px-2 ">
                    {exam.price}
                  </h4>
                </div>
                <p className="text-[16px] mt-2 truncate ">{exam.title}</p>
              </div>
              <div className=" border-t  border-gray-200">
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-800 dark:text-white">
                      {exam.duration}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-gray-800 dark:text-white">
                      {exam.students}
                    </span>
                    <span className=" text-[12px] text-gray-600 dark:text-gray-400">
                      students
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div></Link>
        </Card>
      ))}
    </>
  );
};

export default ExamCard;
