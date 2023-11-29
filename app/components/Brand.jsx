import React from "react";
import Image from "next/image";
import BrandImage from "../../public/brand.svg";
import BrandFace from "../../public/BrandFace.svg";
import Button from "./Button";
const Brand = () => {
  return (
    <div className="flex  min-h-screen">
      <div className="w-1/2 flex px-24">
        <div className="flex flex-col jus gap-12 justify-center">
          <Image src={BrandFace} width={306} height={38}></Image>
          <div className="text-cobalt-blue leading-6">
            It is one of the fastest and most user-friendly facial scanners on
            the market today, engineered specifically for the dental industry.
            Its virtual patient technology and modern design will provide your
            patients with a personalized and high-tech dental experience. 
          </div>
          <div>
          <Button /> 
          </div>
         
        </div>
        <div></div>
      </div>
      <div className="w-1/2 bg-[#E5EAF5] flex items-center justify-center ">
        <Image src={BrandImage} width={333} height={548}></Image>
      </div>
    </div>
  );
};

export default Brand;
