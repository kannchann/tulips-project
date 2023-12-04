import React from "react";
import Image from "next/image";
import BrandImage from "../../public/brand.svg";
import BrandFace from "../../public/BrandFace.svg";
import Button from "./Button";
import RightArrow from "../../public/rightarrow.svg";
import LeftArrow from "../../public/leftarrow.svg";

const Brand = () => {
  return (
    <div className="flex max-h-screen w-full  ">
      <div className="w-1/2  flex items-center justify-between pl-4 md:pl-16 lg:pl-24 pr-2 md:pr-4 py-4 " >
        <div className=" flex flex-col  gap-4 md:gap-6 lg:gap-12 " >
       
            <Image src={BrandFace} width={306} height={38}></Image>
          

          <div className="text-cobalt-blue text-xs  md:text-base md:leading-6">
            It is one of the fastest and most user-friendly facial scanners on
            the market today, engineered specifically for the dental industry.
            Its virtual patient technology and modern design will provide your
            patients with a personalized and high-tech dental experience.
          </div>
          <div>
            <Button />
          </div>
        </div>

          <div className=" text-[#3C4765] pl-5  hidden sm:block  sm:text-xs flex-col ">
          <div className="md:py-2">
            <Image src={LeftArrow} width={8} height={4} className="rotate-90"></Image>
          </div>
            <div className="md:py-2 text-cobalt-blue opacity-100">01</div>
            <div className="md:py-2 opacity-30">02</div>
            <div className="md:py-2 opacity-30">03</div>
            <div className="md:py-2 opacity-30">04</div>
            <div className="md:py-2 opacity-30">05</div>
            <div className="md:py-2 opacity-30">
            <Image src={RightArrow} width={8} height={4} className="rotate-90"></Image>
            </div>

          </div>
    
      </div>
      <div className="w-1/2 bg-[#E5EAF5] flex items-center justify-center  ">
        <div className="py-16 px-16">
          <Image src={BrandImage} width={533} height={748} ></Image>
        </div>
      </div>
    </div>
  );
};

export default Brand;
