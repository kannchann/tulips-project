import React from "react";
import Image from "next/image";
import Quote from "../../public/quote.svg";
import RightArrow from "../../public/rightarrow.svg";
import LeftArrow from "../../public/leftarrow.svg";

const Reviews = () => {
  return (
    <section className="flex flex-col items-center  text-center px-24 py-16 bg-[#EBF7FC]">
      <div className="font-normal text-cobalt-blue text-4xl leading-[1.3]">
        What dentists say?
      </div>
      <Image src={Quote} width={12} height={6}></Image>
      <div className="text-center text-cobalt-blue">
        <div>
          “The{" "}
          <span className="underline italic font-bold leading-[1.3]">
            BRANDSCAN Alpha
          </span>{" "}
          has provided great images for the past six years. One shot
          cephalometric X-Brand images enable precise diagnosis while minimizing
          patient’s movement and image distortion. 3D technology gives me more
          information to plan orthodontic treatment, and it is also a powerful
          tool in educating our patients. 
          <div>
          The{" "}
          <span className="underline italic font-bold leading-[1.3]">
            BRANDSCAN Alpha
          </span>{" "}
          has been one of the best investments since starting my practice in
          2010.”
          </div>
          
        </div>
      </div>

      <div className="flex  ">
        <Image src={LeftArrow}></Image>
        <div>
          <div>Hyeyoung Choi, Master of Dental Orthodontic,</div>
          <div>Principal Doctor of Yonseiwoori Dental Clinic, Seoul, Korea</div>
        </div>

        <Image src={RightArrow} width={12} height={6}></Image>
      </div>
    </section>
  );
};

export default Reviews;