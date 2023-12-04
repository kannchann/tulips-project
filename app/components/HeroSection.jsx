import Image from "next/image";
import React from "react";
import Face from "../../public/face.svg";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="bg-[#F5ECE5] w-full flex px-4 pt-4  md:px-16 lg:px-24 ">
      <div className="flex flex-col justify-center ">
        <div className="font-medium text-cobalt-blue text-2xl md:text-4xl lg:text-6xl leading-[1.3] pb-4 md:pb-8">
          The future of face-driven dentistry
        </div>
        <div className="font-normal text-cobalt-blue text-xs md:text-base pb-4 md:pb-8 ">
          A new standard for dental imaging solutions through state-of-the-art
          technology, brand leads the global market in digital dentistry.
        </div>
        <div className="pb-4">
          <Button />
        </div>
      </div>

      <div className="w-full h-auto">
        <Image src={Face} width={756} height={528} />
      </div>
    </section>
  );
};

export default HeroSection;
