import { Card } from "@/components/ui/card";
import { dashInfo } from "@/constants";
import { FaArrowTrendUp } from "react-icons/fa6";

const Dashboard = () => {
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
    </div>
  );
};

export default Dashboard;
