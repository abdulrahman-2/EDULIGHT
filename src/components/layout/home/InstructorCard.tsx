import { Card } from '@/components/ui/card'
import { instructorInfo } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

const InstructorCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">

    
    {instructorInfo.map((instructor) => (
        <Card key={instructor.id} className="overflow-hidden">
             <div  className="flex flex-col ">
               <div className="relative h-[300px] md:h-[200px] top-0 w-full  ">
                 <Image
                   src={instructor.image}
                   alt={instructor.title}
                   fill
                   className="object-contain md:object-cover "
                 />
               </div>
               <div className="  ">
                 <div className="p-3 text-center">
                   <p className="text-[16px] mt-2 truncate ">{instructor.title}</p>
                 <span className="text-[10px] uppercase  font-[500] text-gray-400  ">
                     {instructor.category}
                     </span>
         
                 </div>
                 <div className=" border-t  border-gray-200">
                   <div className="flex items-center justify-between px-4 py-3">
                     <div className="flex items-center gap-2">
                       <FaStar className="text-[#FD8E1F] mb-1" />
                       <span className="text-sm text-gray-800 dark:text-white">{instructor.rating}</span>
                     </div>
                     <div className="flex items-center space-x-1">
                       <span className="text-sm text-gray-800 ">{instructor.students}</span>
                       <span className=" text-[12px] text-gray-400">students</span>
                     </div>
                   </div>
                 </div>
            
               </div>
             </div>
           </Card>
       ))}
    </div>
  )
}

export default InstructorCard
