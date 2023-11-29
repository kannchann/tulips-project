import Image from "next/image";
import React from "react";
import Face from "../../public/face.svg";
import Button from "./Button";
const HeroSection = () => {
  return (
    <section className="bg-[#F5ECE5] px-24 w-full h-screen flex">
      <div className="flex flex-col  justify-center ">
        <div className="font-medium text-cobalt-blue  text-2xl sm:4xl md:text-5xl lg:text-6xl leading-[1.3] pb-[32px] ">
        The future of
face-driven dentistry
        </div>
        <div className=" font-normal text-cobalt-blue text:xs sm:text-base pb-[32px]">
          A new standard for dental imaging solutions through state-of-the-art
          technology, brand leads the global market in digital dentistry.
        </div>
        <div>
          <div>
            <Button />
          </div>
        </div>
      </div>

      <Image src={Face} width="756" height="528" />
    </section>
  );
};

export default HeroSection;
