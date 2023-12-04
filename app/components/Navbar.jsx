import Image from "next/image";
import Logo from "../../public/logo.svg";
import React from "react";
import Link from "next/link";

//icons
import World from "../../public/World.svg";
import Search from "../../public/Search.svg";
import HamBurger from "../../public/menu-hamburger-white.svg"

const Navbar = () => {
  return (
    <nav className=" w-screen  shadow-xl bg-[#303642] ">
      <div className="flex justify-between items-center w-full px-8 sm:px-16 lg:px-24  py-5 sm:py-8">
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

        <div>
          <ul className="  hidden md:flex items-center">
            <li className=" ml-24 uppercase hover:border-b text-neutral-100 font-normal  text-xs tracking-{0.15}">
              Who we are
            </li>
            <li className="ml-5 uppercase hover:border-b text-neutral-100 font-normal text-xs tracking-{0.15}">
              Our dental Solution
            </li>
            <li className="ml-5 uppercase hover:border-b text-neutral-100 font-normal text-xs tracking-{0.15}">
              Brand Support
            </li>
            <li className="mx-5 uppercase hover:border-b text-neutral-100 font-normal text-xs tracking-{0.15}">
              why is brand different
            </li>
            <div className="flex">
              <Image src={World} width="20" height="20" />
              <Image src={Search} width="20" height="20" className="ml-4" />
            </div>
          </ul>
        </div>

        <div className="md:hidden">
        <Image src={HamBurger} height={24} width={24}></Image>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
