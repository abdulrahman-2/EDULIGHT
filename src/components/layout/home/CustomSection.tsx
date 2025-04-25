import Image from 'next/image'
import React from 'react'
import CustomLink from './CustomLink'

const CustomSection = ({image,btnText,headingText,paragraph,aboutOnly, icon,imgDevClasses,simpleParagraph,linkText}:{image?:string | any,btnText?:string,headingText:string,paragraph:string,aboutOnly?:string,simpleParagraph?:string, icon?:React.ReactElement,imgDevClasses?:string,linkText?:string}) => {
  return (
    <div className="container md:max-w-7xl mx-auto md:px-10 py-10 md:py-0 flex flex-col md:flex-row items-center justify-between gap-5">
    <div className="max-w-[500px]  text-center md:text-left">
        <p className="text-gray-300 text-6xl md:text-7xl font-semibold">{aboutOnly}</p>
        <p className='text-[#293897] text-[16px]'>{simpleParagraph}</p>
        <h1 className="text-4xl font-semibold my-4 md:my-6">{headingText}</h1>
        <p className="text-gray-400 text-[16px] leading-6 md:leading-8">{paragraph}</p>
        {btnText ? (<button className="bg-primary hover:bg-primary/90 duration-150 text-white py-3 px-6 rounded-full mt-8 flex items-center gap-2 mx-auto md:mx-0"> {btnText} {icon? icon : ""} </button>) : (<></>)}
        {linkText? (<div className='mt-6'><CustomLink link='/' title={linkText} /></div>):(<></>)}
    </div>
    <div className={`relative  ${imgDevClasses}`}>
        <Image src={image} alt="about" loading='lazy' fill className="bject-contain" />
    </div>
  </div>
  )
}

export default CustomSection
