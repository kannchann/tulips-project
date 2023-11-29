import React from 'react'
import Button from "./Button";
import treatment from "../../public/treatment.svg"
import Image from 'next/image';

const Company = () => {
  return (
    <section className="bg-[#F5ECE5] px-24 w-full h-screen flex items-center">
   
    <div className="flex flex-col  justify-center  ">
      <div className="font-medium text-cobalt-blue  text-2xl sm:4xl md:text-4xl lg:text-4xl leading-[1.3] pb-[32px]">
      Leading digital dentistry from diagnosis to treatment
      </div>
      <div className=" font-normal text-cobalt-blue text:xs sm:text-base pb-[32px]">
      Brand isan innovative dental solution company that improves oral health with our cutting-edge products and services. We push the boundaries of dental development and strive to improve the quality of life for everyone, and our commitment to research and development sets us apart from our competitors. 
      </div>
      <div>
      <div>
    <Button />
  </div>
      </div>
    </div>
    
      <Image src={treatment} width="776" height="588" />
   
   
   
  </section>
  )
}

export default Company