import { Card } from "@/components/ui/card";
import { earningCard } from "@/constants";
import React from "react";
import method1 from "@/assets/das-images/Visa.png";
import method2 from "@/assets/das-images/group.png";
import method3 from "@/assets/das-images/PP.png";
import Image from "next/image";
import check from "@/assets/das-images/CheckCircle.png";
import { Button } from "@/components/ui/button";
import { EarningTable } from "@/components/layout/dashboard/EarningTable";


type ListProps = {
  id: number;
  content: string;
  date?: string;
  number?: string;
  image: any;
  checked?: any;
}
const list: ListProps[] = [
  {
    id: 1,
    content: "Vako Shvili",
    date: "04/24",
    number: "4855 **** **** ****",
    image:method1,
    checked:check,
  },
  {
    id: 2,
    content: "Vako Shvili",
    date: "04/24",
    number: "4855 **** **** ****",
    image: method2,
  },
  {
    id: 3,
    content: "You will be redirected to the PayPal site after reviewing your order.",
    image: method3,
  },
];

const page = () => {
  return (
    <div>
      <h1 className="my-5 text-3xl font-semibold">Earning</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Cards  */}
        {earningCard.map((card) => (
          <Card
            key={card.id}
            className="bg-white shadow-sm flex items-center gap-4 rounded-lg dark:bg-primary/10  p-6"
          >
            <div
              style={{ backgroundColor: card.bgColor, color: card.color }}
              className="flex items-center justify-center text-2xl w-11 h-11 md:w-[60px] md:h-[60px] rounded-lg dark:!bg-[#172554] dark:!text-gray-400"
            >
              {card.icon}
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-sm md:text-2xl font-semibold">
                {card.value}
              </h3>
              <p className="text-[12px] whitespace-nowrap md:text-sm text-gray-600">
                {card.title}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-4 rounded-lg mt-5 w-full">
        <div className="w-full lg:w-2/5 bg-white dark:bg-primary/10 rounded-lg shadow-sm">
          <div className="p-4">
            <h1 className="my-2 text-lg md:text-xl font-semibold">
              Withdraw your money
            </h1>
          </div>
          <hr className="mb-4" />
          <div className="p-4">
            <p className="my-2 text-base md:text-lg text-gray-400">
              Pyment Methods:
            </p>
            <div className="flex flex-col space-y-4">
              {list.map ((item) => (
                <div key={item.id} className="border first:border-[#23BD33] rounded-lg py-1 px-6 flex items-center gap-5 last:gap-3 text-[12px] last:text-[#8C94A3] last:text-[10px] ">

                  <div className="relative h-10 w-10 last:h-8 last:w-8">
                    <Image src={item.image} alt={item.content} className="object-contain" fill />
                  </div>
                  {item.number && <p className=" md:line-clamp-1 xl:line-clamp-none xl:whitespace-nowrap text-sm ">{item.number}</p>}
                  {item.date && <p className="text-sm">{item.date}</p>}
                  <p className="">{item.content}</p>
                  {item.checked &&<div>
                    <Image src={item.checked} alt={item.content} className="object-contain" />
                  </div>}
                  

                </div>
              ))}
            </div>
          </div>
          <hr className="my-4" />
          <div className="p-4 flex items-center justify-between ">
                <div>
                    <h4 className="text-2xl">$16,593.00</h4>
                    <p className="text-[#4E5566] text-sm ">Current Balance</p>
                </div>
                <Button className="bg-primary ">
                Withdraw money
                </Button>

          </div>
        </div>
        <div className="w-full lg:w-3/5 bg-white dark:bg-primary/10 rounded-lg shadow-sm">
        <div className="p-4">
            <h1 className="my-2 text-lg md:text-xl font-semibold">
            Withdraw History </h1>
          </div>
          <hr /> 
          <div className="p-4 ">

          <EarningTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;


