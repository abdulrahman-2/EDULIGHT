"use client";

import { Revenue } from "@/components/layout/dashboard/charts/Revenue";
import { Card } from "@/components/ui/card";
import { CustomSelect } from "@/components/common/CustomSelect";
import { dashInfo } from "@/constants";
import { FaArrowTrendUp } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const { token, user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!token || user?.role !== "admin") {
      redirect("/");
    }
  }, [token, user]);

  return (
    <div>
      <h1 className="my-5 text-3xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dashInfo.map((info) => (
          <Card key={info.id} className="bg-white dark:bg-primary/10">
            <div className="flex flex-col gap-6 p-4">
              <div className="flex items-center gap-2">
                <span className="bg-[#EFF6FF] dark:bg-[#172554] text-2xl grid place-items-center rounded-md size-10">
                  {info.icon}
                </span>
                <span className="text-lg font-medium">{info.title}</span>
              </div>
              <div className="flex flex-col gap-2 bg-primary/10 dark:bg-background p-4 rounded-md">
                <span className="text-3xl font-semibold">{info.value}</span>
                <div className="flex items-center gap-2 rounded-full border border-primary w-fit px-2 py-1 dark:text-primary">
                  <FaArrowTrendUp /> <span>{info.percentage}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="my-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-full md:col-span-1">
          <Card>
            <div className="flex items-center justify-between py-4 px-5 border-b border-gray-600">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <div className="w-[180px]">
                <CustomSelect items={["Today", "Week", "Month", "Year"]} />
              </div>
            </div>
            <ScrollArea className="h-[440px] py-4 px-5">
              {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="flex gap-3 mt-5">
                  <AiOutlineMessage className="text-white rounded-full size-8 p-2 bg-primary" />
                  <div className="flex flex-col gap-1">
                    <p className="max-w-md font-medium">
                      <b>Kevin</b> comments on your lecture “What is ux” in
                      “2021 ui/ux design with figma”
                    </p>
                    <span className="text-xs text-gray-400">Just now</span>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </Card>
        </div>
        <div className="col-span-full md:col-span-2">
          <Revenue />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
