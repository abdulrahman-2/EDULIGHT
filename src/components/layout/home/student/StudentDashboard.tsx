'use client';
import { studentCard, studentDash } from '@/constants';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const StudentDashboard = () => {
  const [current, setCurrent] = useState(0);

  const visibleCount = 4;

  const prevQuote = () => {
    setCurrent((prev) =>
      prev === 0 ? studentCard.length - 1 : prev - 1
    );
  };

  const nextQuote = () => {
    setCurrent((prev) =>
      (prev + 1) % studentCard.length
    );
  };

  const visibleCards = Array.from({ length: visibleCount }, (_, i) => {
    const index = (current + i) % studentCard.length;
    return studentCard[index];
  });

  return (
    <main>
      <div className="flex flex-col gap-6 pt-10">
       <div className='container md:px-0'>
       <h1 className="text-2xl font-semibold">Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {studentDash.map((item) => (
    <div
      key={item.id}
      style={{ backgroundColor: item.bgColor }}
      className="p-6 flex items-center gap-6 rounded-lg w-full"
    >
      <div
        style={{ color: item.color }}
        className="bg-white p-3 text-3xl rounded-lg"
      >
        {item.icon}
      </div>
      <div>
        <h4 className="text-2xl">{item.value}</h4>
        <p className="text-gray-[#4E5566] text-sm">
          {item.title}
        </p>
      </div>
    </div>
  ))}
</div>
       </div>

        <div className='container md:px-0'>
          <div className="flex items-center justify-between flex-col sm:flex-row">
            <h1 className="text-lg md:text-2xl font-semibold text-[#1D2026]">
              Let’s start learning, Kevin
            </h1>
            <div className="flex gap-4 mt-6 ">
              <button
                onClick={prevQuote}
                className="bg-[#f3f6fc] hover:bg-primary transition-colors hover:shadow-md duration-200 ease-in-out text-primary hover:text-white py-1 px-2 md:py-3 md:px-6 rounded-full flex items-center gap-2"
              >
                <FaArrowLeft className="text-lg md:text-2xl" />
              </button>
              <button
                onClick={nextQuote}
                className="bg-[#f3f6fc] hover:bg-primary transition-colors hover:shadow-md duration-200 ease-in-out text-primary hover:text-white py-1 px-2 md:py-3 md:px-6 rounded-full flex items-center gap-2"
              >
                <FaArrowRight className="text-lg md:text-2xl" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-6">
            {visibleCards.map((item) => (
              <div key={item.id} className="bg-[#f3f6fc] rounded-lg flex flex-col items-start sm:items-center ">
                <div className="relative  w-full  h-[250px]">
                  <Image
                    alt={item.title}
                    src={item.image}
                    fill
                    loading='lazy'
                    className='object-cover rounded-lg'
                  />
                </div>
                  <div className="p-2 sm:p-4">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-500 truncate ">
                    {item.courseName.split(' ').slice(0, 7).join(' ') + '...'}                    </p>
                  </div>
                  <div className='border-t p-4 w-full flex items-center justify-between '>
                    <button className={`text-primary hover:text-white duration-150 bg-primary/10 hover:bg-primary py-2 px-4 rounded-lg text-sm font-semibold ${item.status ? 'w-1/2' : ' w-full'}`}>
                      {item.btnText}
                    </button>
<p className='text-sm text-[#23BD33] text-center font-[500]'>{item.status}</p>

                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudentDashboard;
