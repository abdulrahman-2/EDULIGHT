import Link from 'next/link'
import React from 'react'

const CustomHeading = ({title,subLink}:{title:string,subLink?:string}) => {
  return (
    <div className="bg-[#F5F7FA] flex flex-col items-center justify-center gap-4 text-center p-10">
    <h4 className="text-xl font-semibold">{title}</h4>
    <p className="text-sm">
      <Link
        href="/"
        className="text-gray-500 hover:text-gray-400 hover:underline duration-150"
      >
        Home
      </Link>
      <Link
        href={subLink?? ''}
        className={`text-gray-500 hover:text-gray-400 hover:underline duration-150 ${subLink ? 'ml-1' : ''}`}
      >
        {subLink}
      </Link>
      <span className="text-gray-500 mx-1">/</span>{title}
    </p>
  </div>
  )
}

export default CustomHeading
