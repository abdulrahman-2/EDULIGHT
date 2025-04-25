import { CustomSelect } from '@/components/common/CustomSelect'
import Search from '@/components/common/Search'
import { studentCard } from '@/constants'
import Image from 'next/image'
import React from 'react'

const StudentCourses = () => {
  return (
   <main>
      <div className="flex flex-col gap-6 pt-10">
       <div className='container md:px-0'>
       <h1 className="text-2xl font-semibold">Courses <span className='font-normal'>({studentCard.length})</span></h1>


       </div>

        <div className='container md:px-0'>
          <div className="flex items-center flex-col md:flex-row justify-between gap-6 lg:gap-16">
<div className='w-full md:w-1/3'><Search placeholder="Search in your courses..." /></div>      
            <div className='w-full md:w-2/3  flex items-center  justify-between gap-4 lg:gap-0'> <CustomSelect items={["Latest", "Oldest", "a-z", "z-a"]} placeholder="Sort by"  className='w-[200px] md:w-[220px]'/>
          <CustomSelect items={["Completed", "Finished", "Ongoing"]} placeholder="Status"  className='w-[200px] md:w-[220px]'/>
          <CustomSelect items={["Omar", "Attallah", "Afify"]} placeholder="Teacher"  className='w-[200px] md:w-[220px]'/></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-6">
          {studentCard.map((item) => (
              <div key={item.id} className="bg-[#f3f6fc] rounded-lg flex flex-col items-center">
                            <div className="relative w-full  h-[250px]">
                              <Image
                                alt={item.title}
                                src={item.image}
                                fill
                                loading='lazy'
                                className='object-cover rounded-lg'
                              />
                            </div>
                              <div className=" p-4">
                                <h4 className="text-lg font-semibold">{item.title}</h4>
                                <p className="text-sm text-gray-500">
                                  {item.courseName}
                                </p>
                              </div>
                              <div className='border-t p-4 w-full flex items-center justify-between '>
                                <button className={`text-primary hover:text-white duration-150 bg-primary/10 hover:bg-primary py-2 px-4 rounded-lg text-sm font-semibold ${item.status ? 'w-1/2' : 'w-full'}`}>
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
  )
}

export default StudentCourses
