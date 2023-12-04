import React from 'react'
import Button from "./Button";
import treatment from "../../public/treatment.svg"
import Image from 'next/image';

const Company = () => {
  return (
    <section className="bg-white px-4 pt-4  md:px-16 lg:px-24 w-full lg:min-h-screen flex items-center ">
   
    <div className="w-1/2 flex flex-col  justify-center  ">
      <div className="font-medium text-cobalt-blue  text-2xl sm:4xl md:text-4xl lg:text-4xl leading-[1.3] pb-4 md:pb-8">
      Leading digital dentistry from diagnosis to treatment
      </div>
      <div className=" font-normal  text-cobalt-blue text:xs sm:text-base pb-4 md:pb-8">
      Brand isan innovative dental solution company that improves oral health with our cutting-edge products and services. We push the boundaries of dental development and strive to improve the quality of life for everyone, and our commitment to research and development sets us apart from our competitors. 
      </div>
      <div className='pb-4'>

    <Button />
  </div>
   
    </div>
    
    <div className='w-1/2 '>
    <Image src={treatment} width="936" height="588" />
    </div>
      
   
   
   
  </section>
  )
}

export default Company