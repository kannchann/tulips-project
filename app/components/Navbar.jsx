import Image from "next/image";
import Logo from "../../public/Logo.svg";
import React from "react";
import Link from "next/link";

//icons
import World from "../../public/World.svg";
import Search from "../../public/Search.svg";

const Navbar = () => {
  return (
    <nav className=" w-full  shadow-xl bg-[#303642] ">
      <div className="flex justify-between items-center w-full sm:px-52 sm:py-9">
        <div style={{width:'full',height:'auto'}}>
          <Link href="/">
            <Image
              src={Logo}
              alt=""
              width={100}
              height={40}
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>

        <div>
          <ul className=" hidden md:flex items-center">
            <li className="ml-10 uppercase hover:border-b text-neutral-100 font-normal  text-xs tracking-{0.15}">
              Who we are
            </li>
            <li className="ml-10 uppercase hover:border-b text-neutral-100 font-normal text-xs tracking-{0.15}">
              Our dental Solution
            </li>
            <li className="ml-10 uppercase hover:border-b text-neutral-100 font-normal text-xs tracking-{0.15}">
              Brand Support
            </li>
            <li className="mx-10 uppercase hover:border-b text-neutral-100 font-normal text-xs tracking-{0.15}">
              why is brand different
            </li>
            <div className="flex">
              <Image src={World} width="20" height="20" />
              <Image src={Search} width="20" height="20" className="ml-5" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
