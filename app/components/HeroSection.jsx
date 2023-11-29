import Image from "next/image";
import React from "react";
import Face from "../../public/face.svg";
import Button from "./Button";
const HeroSection = () => {
  return (
    <section className="bg-[#F5ECE5] pl-[200px] pr-44 h-screen">
      <div className="flex">
      <div className="flex flex-col  justify-center  ">
        <div className="font-medium text-cobalt-blue text-6xl leading-[1.3] pb-[32px]">
          The future of face-driven dentristy
        </div>
        <div className=" font-normal text-cobalt-blue text-base pb-[32px]">
          A new standard for dental imaging solutions through state-of-the-art
          technology, brand leads the global market in digital dentistry.
        </div>
        <div>
        <div>
      <Button />
    </div>
        </div>
      </div>
      <div style={{ width: "full", height: "auto" }}>
        <Image src={Face} width="856" height="928" />
      </div>
      </div>
     
    </section>
  );
};

export default HeroSection;
